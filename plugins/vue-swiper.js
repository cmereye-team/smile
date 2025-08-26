/*
 * @Author: 谭洁莹
 * @Date: 2025-03-25 16:47:42
 * @LastEditTime: 2025-08-26 11:58:56
 * @FilePath: /plugins/vue-swiper.js
 * @Description: 
 */
// plugins/vue-swiper.js
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css'; // Swiper 4.5.1 CSS

if (process.browser) {
  Vue.use(VueAwesomeSwiper);
}