/*
 * @Author: 谭洁莹
 * @Date: 2025-08-26 11:08:12
 * @LastEditTime: 2025-08-26 12:01:30
 * @FilePath: /plugins/nuxt-swiper.js
 * @Description: 配置nuxt-swiper
 */
// plugins/nuxt-swiper.js
import Vue from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/bundle'; // Swiper 11.x CSS

Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);