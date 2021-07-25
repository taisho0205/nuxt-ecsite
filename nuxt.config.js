import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'my-ecsite',
    title: 'my-ecsite',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" },
      { rel:"stylesheet",href:"https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css" },
      { rel:"stylesheet",href:"https://cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"},
      { rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css" },
    ],
  },  
  css: [
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugin 
  plugins: [],
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { analyze: true,
  }
}

