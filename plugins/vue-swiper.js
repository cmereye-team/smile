/*
 * @Date: 2025-03-25 16:47:42
 * @LastEditTime: 2025-08-26 13:38:38
 * @FilePath: /plugins/vue-swiper.js
 * @Description: vue-awesome-swiper
 */
import Vue from 'vue'

if (process.browser) {
    const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
    Vue.use(VueAwesomeSwiper);
}