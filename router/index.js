/*
 * @Date: 2024-04-18 16:47:42
 * @LastEditTime: 2026-04-22 15:32:41
 * @FilePath: /router/index.js
 * @Description: 路由入口
 */
import path from "path";
const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`);
export const $router = [
  {
    path: "/",
    name: "home",
    title: "主页",
    component: resolve("pages/new-page/home.vue"),
  },
  {
    path: "/error",
    name: "404",
    title: "404",
    component: resolve("pages/newError.vue"),
  },
    {
    path: "*",
    name: "404",
    title: "404",
    component: resolve("pages/newError.vue"),
  },
  {
    path: "/group-profile",
    name: "group-profile",
    title: "集團及中心簡介",
    component: resolve("pages/new-page/group-profile.vue"),
  },
  {
    path: "/our-medical-team",
    name: "our-medical-team",
    title: "醫生團隊",
    component: resolve("pages/new-page/doctor-team.vue"),
  },
  {
    path: "/medical-equipment",
    name: "medical-equipment",
    title: "中心設備",
    component: resolve("pages/new-page/equipment.vue"),
  },
  {
    path: "/smilePro",
    name: "smilePro",
    title: "SMILE Pro 微笑激光矯視",
    component: resolve("pages/new-page/smile-proV2.vue"),
  },
  {
    path: "/vision-correction-icl",
    name: "vision-correction-icl",
    title: "ICL 植入式隱形眼鏡",
    component: resolve("pages/new-page/iclV2.vue"),
  },
  {
    path: "/vision-correction/relex-smile",
    name: "vision-correction/relex-smile",
    title: "SMILE 微笑激光矯視",
    component: resolve("pages/new-page/smileV2.vue"),
  },
  {
    path: "/vision-correction-presbyopia",
    name: "vision-correction-presbyopia",
    title: "老花矯視",
    component: resolve("pages/lbv/index.vue"),
  },
  {
    path: "/vision-correction-lasikV2",
    name: "vision-correction-lasikV2",
    title: "LASIK 激光矯視",
    component: resolve("pages/vision-correction-lasik/index.vue"),
  },
  {
    path: "/vision-correction-lasik",
    name: "vision-correction-lasik",
    title: "LASIK 激光矯視",
    component: resolve("pages/new-page/lasik.vue"),
  },
  {
    path: "/patient-info", 
    name: "patient-info",
    title: "診症須知",
    component: resolve("pages/new-page/patient-info.vue"),
  },
  {
    path: "/fee",
    name: "fee",
    title: "收費詳情",
    component: resolve("pages/new-page/new-feeV2.vue"),
  },
  {
    path: "/FreQuestions",
    name: "FreQuestions-smile",
    hash: "#faq-smile",
    title: "常見問題",
    component: resolve("pages/FreQuestions/index.vue"),
  },
  {
    path: "/FreQuestions",
    name: "FreQuestions-lasik",
    hash: "#faq-lasik",
    title: "常見問題",
    component: resolve("pages/FreQuestions/index.vue"),
  },
  {
    path: "/FreQuestions",
    name: "FreQuestions-icl",
    hash: "#faq-icl",
    title: "常見問題",
    component: resolve("pages/FreQuestions/index.vue"),
  },
  {
    path: "/FreQuestions-presbyopia",
    name: "FreQuestions",
    hash: "#faq-presbyopia",
    title: "常見問題",
    component: resolve("pages/FreQuestions/index.vue"),
  },
  {
    path: "/video",
    name: "video",
    title: "矯視資訊影片",
    component: resolve("pages/new-page/orthopedic-videoV2.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    title: "科普知識",
    component: resolve("pages/new-page/blog.vue"),
  },
  {
    path: `/blog/:id?`,
    name: `blog-id`,
    title: "科普知識",
    component: resolve(`pages/new-page/blog_news/_id.vue`),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    title: "聯絡我們",
    component: resolve("pages/new-page/contact-us.vue"),
  },
  {
    path: "/booking",
    name: "booking",
    title: "預約服務",
    component: resolve("pages/booking/index.vue"),
  },
  {
    path: "/ophthalmicInfo/AppointForm",
    name: "ophthalmicInfo/AppointForm",
    title: "講座",
    component: resolve("pages/new-page/preaching-seat.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    title: "隱私政策",
    component: resolve("pages/privacy-policy/index.vue"),
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    title: "免責條款",
    component: resolve("pages/disclaimer/index.vue"),
  },
  {
    path: "/media-coverage",
    name: "media-coverage",
    title: "媒體報導",
    component: resolve("pages/new-page/media-coverage.vue"),
  },
];
const extendRoutes = (routes) => {
  routes.length = 0;
  routes.push(...$router)
};
export default { base: "/", extendRoutes };