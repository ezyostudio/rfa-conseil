let fetch;
let getReferer;
fetch = window.fetch;
getReferer = () => window.location.href;

const defaultOptions = {
  baseUrl: 'https://stableform.ezyostudio.com',
  query: {},
  delayBetweenSends: 5, // In seconds
  recaptchaV3key: '',
};

class Form {
  constructor(options = {}) {
    if (typeof options === 'string') {
      options = {
        formId: options,
      };
    }

    if (typeof options.formId === 'undefined') {
      throw new Error('[EzyoStudio] Could not instanciate form without a formId');
    }

    if (typeof options.apiKey === 'undefined') {
      throw new Error('[EzyoStudio] Could not instanciate form without an apiKey');
    }

    this.options = {
      ...defaultOptions,
      ...options,
    };

    this.eventListeners = {
      success: () => { },
      sending: () => { },
      error: () => { },
    };

    this.history = [];
    this.lastSpamCheckTimestamp = null;

    this._submitListener = this._submitListener.bind(this);
  }

  async send(data, options = {}) {
    if (typeof FormData !== 'undefined' && data instanceof FormData) {
      data = Form.serializeFormData(data);
    }

    data = this._prepareData(data);

    const spamProtectionStatus = this.getSpamProtectionStatus(data);
    if (spamProtectionStatus) {
      this.eventListeners.error({ error: spamProtectionStatus }, data, this);
      return Promise.reject(spamProtectionStatus);
    }

    if (this.options.recaptchaV3key?.length > 0) {
      if (!window.grecaptcha) {
        throw new Error(
          '[EzyoStudio] Could not find grecaptcha object. Please make sure you have loaded the recaptcha script'
        );
      }

      await new Promise(resolve => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(this.options.recaptchaV3key, { action: 'submit' })
            .then(token => {
              data.recaptchaToken = token;
              resolve();
            });
        });
      });
    }

    this.eventListeners.sending(data, this);

    const serializedData = JSON.stringify(data);

    return fetch(this._buildUrl(`/v1/send/${this.options.formId}`, options), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Referer: getReferer(),
      },
      body: serializedData,
    })
      .then(async response => {
        const clone = response.clone();

        if (response.status < 200 || response.status >= 300) {
          this.lastSpamCheckTimestamp = null;
          this.eventListeners.error(await response.json(), data, this);
          return clone;
        }

        this.history.push(serializedData);

        if (response.headers.get('content-type')) {
          switch (response.headers.get('content-type').split(';')[0]) {
            case 'application/json':
              this.eventListeners.success(await response.json(), data, this);
              break;
            case 'text/html':
              this.eventListeners.success(await response.text(), data, this);
              break;
            default:
              this.eventListeners.success(null, data, this);
              break;
          }
        } else {
          this.eventListeners.success(null, data, this);
        }

        return clone;
      })
      .catch(error => {
        this.lastSpamCheckTimestamp = null;
        this.eventListeners.error({ error }, this);
        return error;
      });
  }

  subscribeTo(el, options = {}) {
    if (typeof HTMLFormElement === 'undefined') {
      throw new Error('Form.subscribeTo is only usable in browser');
    }

    if (!(el instanceof HTMLFormElement)) {
      if (typeof el === 'object') {
        console.warn(
          `Form.subscribeTo expect a HTMLFormElement but received ${el?.constructor?.name}`,
          el
        );
      } else {
        console.warn(`Form.subscribeTo expect a HTMLFormElement`);
      }
      return this;
    }

    el.addEventListener('submit', this._submitListener);

    if (options !== {}) {
      this.options.query = {
        ...this.options.query,
        ...options,
      };
    }

    return this;
  }

  unsubscribeTo(el) {
    if (typeof HTMLFormElement === 'undefined') {
      throw new Error('Form.unsubscribeTo is only usable in browser');
    }

    if (!(el instanceof HTMLFormElement)) {
      if (typeof el === 'object') {
        console.warn(
          `Form.unsubscribeTo expect a HTMLFormElement but received ${el.constructor.name}`
        );
      } else {
        console.warn(`Form.unsubscribeTo expect a HTMLFormElement`);
      }
      return this;
    }

    el.removeEventListener('submit', this._submitListener);
    return this;
  }

  on(eventName, handler) {
    this.eventListeners[eventName] = handler;
    return this;
  }

  _submitListener(event) {
    event.preventDefault();
    this.send(new FormData(event.target), this.options.query);
  }

  _buildUrl(url, options = {}) {
    let fullUrl = this.options.baseUrl;

    if (fullUrl.endsWith('/')) {
      fullUrl = fullUrl.slice(0, -1);
    }

    if (!url.startsWith('/')) {
      fullUrl += '/';
    }

    fullUrl += url;

    const params = new URLSearchParams(options).toString();

    if (params) {
      fullUrl += `?${params}`;
    }

    return fullUrl;
  }

  _prepareData(data) {
    if (typeof data.additionals !== 'undefined') {
      return { formId: this.options.formId, apiKey: this.options.apiKey, ...data };
    }

    const { name, email, message, ...additionals } = data;

    return {
      formId: this.options.formId,
      apiKey: this.options.apiKey,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      additionals,
    };

  }

  getSpamProtectionStatus(data) {
    const serialized = JSON.stringify(data);
    const lastSpamCheckTimestamp = +this.lastSpamCheckTimestamp;
    this.lastSpamCheckTimestamp = Date.now();

    if (this.history.some(entry => entry === serialized)) {
      return { message: 'Already Exists', code: 409 };
    }

    if (lastSpamCheckTimestamp && this.options.delayBetweenSends > 0) {
      const timeBetween = Date.now() - lastSpamCheckTimestamp;
      const delayBetweenSends = this.options.delayBetweenSends * 1000;

      if (timeBetween < delayBetweenSends) {
        return { message: 'Too Many Requests', code: 429 };
      }
    }

    return null;
  }
}

const serializeFormDataUpdate = (data, keys, value) => {
  if (keys.length === 0) {
    return value;
  }

  let key = keys.shift();
  if (!key) {
    data = data || [];
    if (Array.isArray(data)) {
      key = data.length;
    }
  }

  // Try converting key to a numeric value
  const index = +key;
  if (!Number.isNaN(index)) {
    // This will not work if this is a associative array
    // with numeric keys
    data = data || [];
    key = index;
  }

  // If none of the above matched, we have an associative array
  data = data || {};

  const val = serializeFormDataUpdate(data[key], keys, value);
  data[key] = val;

  return data;
};
Form.serializeFormData = formData =>
  Array.from(formData.entries()).reduce((data, [field, value]) => {
    let [_, prefix, keys] = field.match(/^([^[]+)((?:\[[^\]]*\])*)/);

    if (keys) {
      keys = Array.from(keys.matchAll(/\[([^\]]*)\]/g), m => m[1]);
      value = serializeFormDataUpdate(data[prefix], keys, value);
    }
    data[prefix] = value;
    return data;
  }, {});

Form.locales = {
  en: {
    'required': '{{label}} is required',
    'email': '{{label}} must be a valid email',
    404: 'This form has been disabled. Sorry for the inconvenience.',
    409: 'You already sent this message.',
    429: 'You tried to sent this too many time, please retry later.',
  },
  fr: {
    'required': '{{label}} est un champ obligatoire',
    'email': 'Votre email n\'est pas valide',
    404: 'Ce formulaire a été désactivé. Désolé pour le dérangement.',
    409: 'Vous avez déjà envoyé ce message.',
    429: 'Vous avez essayé d\'envoyer ceci trop souvent, veuillez réessayer plus tard.',
  }
}

Form.friendlyError = (err, locale) => {
  if (typeof locale === 'object') {
    locale = {
      ...Form.locales['en'],
      locale,
    };
  } else if (typeof locale === 'string' && Object.keys(Form.locales).includes(locale)) {
    locale = Form.locales[locale];
  } else {
    locale = Form.locales['en'];
  }

  if ('validationErrors' in err && Array.isArray(err.validationErrors)) {
    return err.validationErrors.map(error => {
      if (error.type in locale) {
        return locale[error.type].replace(/\{\{label\}\}/g, error.params.label);
      }
    }).join('.\n');
  }

  if ('error' in err && typeof err.error === 'object') {
    if (err.error instanceof Error) {
      return err.error.toString();
    } else if ('code' in err.error) {
      if (err.error.code in locale) {
        return locale[err.error.code];
      }

      return err.error.message;
    }
  }

  return err;
}

export default (_, inject) => {
  inject('stableform', Form);
}
