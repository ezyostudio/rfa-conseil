export default (_, inject) => {
  inject('scrollTo', (target, options = {}) => {
    if (typeof target === 'function') target = target();
    if (target._isVue) target = target.$el;
    if (target && 'scrollIntoView' in target) {
      let _options = {}

      if (target.offsetHeight < window.innerHeight) {
        if(options) {
          _options = {
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          }
        }
      }

      target.scrollIntoView({
        ..._options,
        ...options
      })
    } else {
      console.warn('$scrollTo called if an invalid target', {
        target,
        options
      })
    }
  })
}
