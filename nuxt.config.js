
import i18n from "./plugins/i18n"
import sitemap from './plugins/sitemap'
import router from './router/index.js'

export default {
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '香港希瑪微笑矯視中心',
    htmlAttrs: {
      lang: 'zh-HK',
      
    },
    script: [
      {
        src:
          "https://mqj.zoosnet.net/JS/LsJS.aspx?siteid=MQJ40126824&amp;float=1&amp;lng=big5",
          body:true
      },
       // Google Analytics Code
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-FN8KFBR9XM",
        // src: "https://www.googletagmanager.com/gtag/js?id=GTM-5M8VLLM",
        async: true,
      },
      // Import analitics.js file
      { src: "/static/analytics.js" },
      // gsap
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js'
      },
      // vue-i18n
      {
        src: 'https://unpkg.com/vue-i18n/dist/vue-i18n.js'
      },
    


      
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: '9eEA_1KUjhpF1Is-gEyDoj-rqmZWl4qlc0qjkPZDoIM' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap' },
    
    ]
  },   

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'asset/css/reference.scss',
    'asset/css/base-variable.scss',
    'asset/css/base-style.scss',
    'asset/css/tailwind.css',
    'element-ui/lib/theme-chalk/index.css',
    { src: "swiper/dist/css/swiper.css" },
    { src: "animate.css/animate.css" }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src:  "~plugins/element-ui/element-ui.js", ssr: false },
    { src:  "~plugins/wow.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
       i18n,
      '@nuxtjs/gtm',
      '@nuxtjs/sitemap'
    ]
  ],
  sitemap,
  gtm: {
    id: 'GTM-5M8VLLM'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build 防止多次打包
  build: {
    vendor: ['element-ui'],
  }
  
}