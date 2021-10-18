import Sass from "sass";

const dartSass = {
  implementation: Sass,
};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: './dist',
    interval: 2000, // fix nuxt composition api bug
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RFA Conseil',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://s.pageclip.co/v1/pageclip.css',
        media: 'screen'
      }
    ],
    script: [{
      src: "https://polyfill.io/v3/polyfill.min.js?features=smoothscroll",
      body: true,
    }, {
      src: "https://s.pageclip.co/v1/pageclip.js",
      body: true,
    }, ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/styles/normalize.css',
    // '@/assets/styles/skeleton.css',
    '@/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '@plugins/bootstrap',
      mode: 'client'
    },
    {
      src: '@plugins/scrollTo',
      mode: 'client'
    },
    {
      src: '@plugins/pageclip',
      mode: 'client'
    },
    {
      src: '@plugins/lazy',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/image',
    '@luxdamore/nuxt-humans-txt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    '@nuxt/content',
    'vue-sweetalert2/nuxt',
    [
      "nuxt-social-meta",
      {
        url: "https://rfa-conseil.fr",
        title: "RFA Conseil",
        site_name: "RFA Conseil",
        description: "Conseil et Courtage en location et entretien de vêtements de travail et autres prestations",
        img: "/images/logo.png",
        img_size: {
          width: 4210,
          height: 1320
        },
        locale: "fr_FR",
        // twitter: "@user",
        // twitter_card: "summary_large_image",
        theme_color: "##105391",
      },
    ],
    '@nuxtjs/sitemap',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: dartSass
    },
    extractCSS: {
      allChunks: true
    }
  },

  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/images/logo.png',
    rfg: {
      "design": {
        "ios": {
          "pictureAspect": "backgroundAndMargin",
          "backgroundColor": "#ffffff",
          "margin": "18%",
          "assets": {
            "ios6AndPriorIcons": false,
            "ios7AndLaterIcons": false,
            "precomposedIcons": false,
            "declareOnlyDefaultIcon": true
          },
          "appName": "RFA Conseil"
        },
        "desktopBrowser": {
          "design": "raw"
        },
        "windows": {
          "pictureAspect": "whiteSilhouette",
          "backgroundColor": "#105391",
          "onConflict": "override",
          "assets": {
            "windows80Ie10Tile": false,
            "windows10Ie11EdgeTiles": {
              "small": false,
              "medium": true,
              "big": false,
              "rectangle": false
            }
          },
          "appName": "RFA Conseil"
        },
        "androidChrome": {
          "pictureAspect": "backgroundAndMargin",
          "margin": "17%",
          "backgroundColor": "#ffffff",
          "themeColor": "#ffffff",
          "manifest": {
            "name": "RFA Conseil",
            "display": "standalone",
            "orientation": "notSet",
            "onConflict": "override",
            "declared": true
          },
          "assets": {
            "legacyIcon": false,
            "lowResolutionIcons": false
          }
        },
        "safariPinnedTab": {
          "pictureAspect": "silhouette",
          "themeColor": "#105391"
        }
      },
      "settings": {
        "compression": 5,
        "scalingAlgorithm": "Mitchell",
        "errorOnImageTooSmall": false,
        "readmeFile": true,
        "htmlCodeFile": true,
        "usePathAsIs": false
      },
      "versioning": {
        "paramName": "v",
        "paramValue": "1"
      }
    }
  },

  humansTxt: {
    enabled: true,
    hideGenericMessagesInConsole: false, // Disabled in production
    hideErrorsInConsole: false,
    fileName: 'humans.txt',
    fileEncoding: 'utf8',
    link: {
      rel: 'author',
      href: '',
      hid: 'humans-txt',
    },
    keepDevelopersInformations: false,
    // "The internet is for humans"
    thanksTo: [
      'AGENCY',
      {
        key: 'Linkedin',
        value: 'https://linkedin.com/ezyostudio',
      },{
        key: 'Github',
        value: 'https://github.com/ezyostudio',
      },
      'DEVELOPPERS',
      {
        key: 'Tristan SCHWENK',
        value: 'https://github.com/tristanschwenk',
      },
      {
        key: 'Zao SOULA',
        value: 'https://github.com/zaosoula',
      },
    ],
    site: [
      'SITE',
      {
        key: 'Last update',
        value: new Date().toLocaleDateString(
          'en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }
        ),
      },
      {
        key: 'Standards',
        value: [
          'HTML5',
          'CSS3',
          'Javascript',
        ],
      },
      {
        key: 'Components',
        value: 'VueJs',
      },
      {
        key: 'Software',
        value: 'NuxtJs',
      },
      {
        key: 'Language',
        value: 'French',
      },
      {
        key: 'Doctype',
        value: 'HTML5',
      },
    ],
  },
  sitemap: {
    hostname: "https://rfa-conseil.fr",
    gzip: true
  }
}
