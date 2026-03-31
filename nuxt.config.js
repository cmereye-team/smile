import { data } from "autoprefixer";
import i18n from "./plugins/i18n";
import sitemap from "./plugins/sitemap";
import router from "./router/index.js";
import beforeRouter from "./router/beforeEach.js";

export default {
  mode: "universal",
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "希瑪微笑矯視中心",
    htmlAttrs: {
      lang: "zh-HK",
    },
    script: [
      {
        src: "https://mqj.zoosnet.net/JS/LsJS.aspx?siteid=MQJ40126824&amp;float=1&amp;lng=big5",
        body: true,
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
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js",
      },
      // vue-i18n
      {
        src: "https://unpkg.com/vue-i18n/dist/vue-i18n.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js",
      },
    ],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "google-site-verification",
        content: "9eEA_1KUjhpF1Is-gEyDoj-rqmZWl4qlc0qjkPZDoIM",
      },
      // { name: 'robots', content: 'noindex' }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+HK:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100..900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Boldonse&family=Noto+Sans:wght@700&display=swap",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Poppins:ital,wght@0,800;1,300&display=swap",
      },
      { rel: "manifest", href: "/app-manifest.json" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "asset/css/reference.scss",
    "asset/css/base-variable.scss",
    "asset/css/base-style.scss",
    "asset/css/tailwind.css",
    "element-ui/lib/theme-chalk/index.css",
    { src: "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css" },
    { src: "animate.css/animate.css" },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: "~plugins/element-ui/element-ui.js", ssr: false },
    { src: "~plugins/wow.js", ssr: false },
    { src: "~/plugins/gsap.js", ssr: false },
    { src: "./router/beforeEach.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  schemaOrg: {
    canonicalHost: "https://smile.hkcmereye.com", // 生产环境域名
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/i18n",
      i18n,
      "@nuxtjs/gtm",
      "@nuxtjs/sitemap",
      "@nuxtjs/axios",
      "nuxt-jsonld",
    ],
  ],

  workbox: {
    enabled: true,
    // 添加预缓存配置
    preCaching: [{ url: "/", revision: "v1" }],
    runtimeCaching: [
      {
        urlPattern: "^https://smile.hkcmereye.com/.*",
        handler: "networkFirst",
        strategyOptions: {
          cacheName: "pages-cache-v1",
          cacheExpiration: {
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: "/_nuxt/.*",
        handler: "cacheFirst",
        strategyOptions: {
          cacheName: "static-cache-v1",
          cacheExpiration: {
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
    ],
  },
  sitemap: {
    hostname: "https://smile.hkcmereye.com",
    gizp: true,
  },
  gtm: {
    id: "GTM-5M8VLLM",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build 防止多次打包
  build: {
    vendor: ["element-ui"],
    terser: {
      terserOptions: {
        compress: {
          drop_console: true, // 去掉 console.*
          drop_debugger: true, // 去掉 debugger
        },
      },
    },
  },
  config: {
    nuxt: {
      host: "0.0.0.0",
    },
  },
  server: {
    host: "0.0.0.0", // 监听所有网络接口
    port: 3009, // 指定端口号
  },
};
