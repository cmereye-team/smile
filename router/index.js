import path from 'path'

const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const $router = [
  {
    path: '/',
    name: 'home',
    title: '主页',
    component: resolve('pages/index.vue'),
  },
  {
    path: '/group-profile',
    name: 'group-profile',
    title: '集團及中心簡介',
    component: resolve('pages/group-profile/index.vue'),
  },
  {
    path: '/our-medical-team',
    name: 'our-medical-team',
    title: '醫療團隊222',
    component: resolve('pages/our-medical-team/index.vue'),
  },
  {
    path: '/medical-equipment',
    name: 'medical-equipment',
    title: '中心設備',
    component: resolve('pages/medical-equipment/index.vue'),
  },
  {
    path: '/patient-info',
    name: 'patient-info',
    title: '診症須知',
    component: resolve('pages/patient-info/index.vue'),
  },
  {
    path: '/flow-of-vision-correction',
    name: 'flow-of-vision-correction',
    title: '矯視流程',
    component: resolve('pages/flow-of-vision-correction/index.vue'),
  },
  {
    path: '/post-corrective-care',
    name: 'post-corrective-care',
    title: '矯視後覆診',
    component: resolve('pages/post-corrective-care/index.vue'),
  },
  {
    path: '/fee',
    name: 'fee',
    title: '收費詳情',
    component: resolve('pages/fee/index.vue'),
  },
  {
    path: '/FreQuestion',
    name: 'FreQuestion',
    hash: '#faq-smile',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestion',
    name: 'FreQuestion',
    hash: '#faq-lasik',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestion',
    name: 'FreQuestion',
    hash: '#faq-icl',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestion',
    name: 'FreQuestion',
    hash: '#faq-presbyopia',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    title: '聯絡我們',
    component: resolve('pages/contact-us/index.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    title: '預約服務',
    component: resolve('pages/booking/index.vue')
  },
  {
    path: '/eye-checkup',
    name: 'eye-checkup',
    title: '眼睛檢查及矯視前',
    component: resolve('pages/eye-checkup/index.vue')
  },
  {
    path: '/ophthalmicInfo/AppointForm',
    name: 'ophthalmicInfo/AppointForm',
    title: '關於我們',
    component: resolve('pages/ophthalmicInfo/AppointForm/index.vue')
  },
  {
    path: '/smilepro-event',
    name: 'smilepro-event',
    title: 'CMERxZEISS 講座活動詳情',
    component: resolve('pages/smilepro-event/index.vue')
  },
  {
    path: '/divit',
    name: 'divit',
    title: '消費券詳情',
    component: resolve('pages/divit/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    title: '個案分享及矯視資訊影片',
    component: resolve('pages/video/index.vue')
  },
  {
    path: '/ophthalmicInfo/mediaCov',
    name: 'ophthalmicInfo/mediaCov',
    title: '媒體報導',
    component: resolve('pages/ophthalmicInfo/mediaCov/index.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    title: '隱私政策',
    component: resolve('pages/privacy-policy/index.vue')
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    title: ' 免責條款',
    component: resolve('pages/disclaimer/index.vue')
  },
  {
    path: '/vision-correction/relex-smile',
    name: 'vision-correction/relex-smile',
    title: 'SMILE 微笑激光矯視',
    component: resolve('pages/vision-correction/relex-smile/index.vue'),
    // component: resolve('pages/new-page/smile.vue')
  },
  {
    path: '/smilePro',
    name: 'smilePro',
    title: 'SMILE Pro 微笑激光矯視',
    component: resolve('pages/smilePro/index.vue'),
    // component: resolve('pages/new-page/smile-pro.vue')
  },
  {
    path: '/vision-correction-presbyopia',
    name: 'vision-correction-presbyopia',
    title: 'CMER CLEAR-Vision',
    component: resolve('pages/vision-correction-presbyopia/index.vue'),
    // component: resolve('pages/new-page/clear-vision.vue')
  },
  {
    path: '/vision-correction-lasik',
    name: 'vision-correction-lasik',
    title: 'LASIK 激光矯視',
    component: resolve('pages/vision-correction-lasik/index.vue'),
    // component: resolve('pages/new-page/lasik.vue')
  },
  {
    path: '/vision-correction-icl',
    name: 'vision-correction-icl',
    title: 'ICL 植入式隱形眼鏡',
    component: resolve('pages/vision-correction-icl/index.vue'),
    // component: resolve('pages/new-page/icl.vue')
  },
  {
    path: '/smile',
    name: 'new-page/smile',
    title: 'smile',
    component: resolve('pages/new-page/smile.vue')
  },
  {
    path: '/smile-pro',
    name: 'new-page/smile-pro',
    title: 'smile-pro',
    component: resolve('pages/new-page/smile-pro.vue')
  },
  {
    path: '/clear-vision',
    name: 'new-page/clear-vision',
    title: 'cmer clear-vision',
    component: resolve('pages/new-page/clear-vision.vue')
  },
  {
    path: '/lasik',
    name: 'new-page/lasik',
    title: 'lasik',
    component: resolve('pages/new-page/lasik.vue')
  },
  {
    path: '/icl',
    name: 'new-page/icl',
    title: 'icl',
    component: resolve('pages/new-page/icl.vue')
  },
]


const extendRoutes = (routes) => {
  routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
  routes.push(...$router)
}

export default { base: '/', extendRoutes }