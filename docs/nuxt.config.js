const dev = process.env.NODE_ENV === 'development';
const publicPath = dev ? '' : '/mollitia-prometheus/';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mollitia Prometheus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Prometheus Mollitia Addon' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${publicPath}favicon.ico` },
      { rel: 'stylesheet', type: 'text/css', href: `${publicPath}roboto/font.css` },
      { rel: 'stylesheet', type: 'text/css', href: `${publicPath}material-icons/font.css` }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  styleResources: {
    scss: [
      '~/style/variables.scss',
      '~/style/markdown.scss'
    ]
  },

  plugins: [
    '~/plugins/mollitia.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },
  router: {
    base: publicPath
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: dev ? '/_nuxt/' : './_nuxt/'
  },
  generate: {
    routes: [
      '/'
    ],
    fallback: true
  }
};
