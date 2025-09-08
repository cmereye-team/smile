// plugins/gsap.js
const { gsap } = require('gsap');
const { ScrollTrigger } = require('gsap/ScrollTrigger');

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

module.exports = function (context, inject) {
  inject('gsap', gsap);
  inject('ScrollTrigger', ScrollTrigger);
};