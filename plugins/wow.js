import Vue from 'vue'

import { WOW } from 'wowjs'

window.WOW = WOW

Vue.prototype.$wow = new WOW()