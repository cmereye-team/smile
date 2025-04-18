import path from 'path'


const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const $router = [
  {
    path: '/',
    name: 'home',
    title: '主页',
    component: resolve('pages/new-page/home.vue')
  },
  // {
  //   path: '/group-profile',
  //   name: 'group-profile',
  //   title: '集團及中心簡介',
  //   component: resolve('pages/group-profile/index.vue'),
  // },
  {
    path: '/our-medical-team',
    name: 'our-medical-team',
    title: '醫療團隊',
    component: resolve('pages/new-page/doctor-team.vue'),
  },
  {
    path: '/medical-equipment',
    name: 'medical-equipment',
    title: '中心設備',
    component: resolve('pages/new-page/equipment.vue'),
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
    // component: resolve('pages/fee/index.vue'),
    component: resolve('pages/new-page/new-fee.vue')
  },
  {
    path: '/FreQuestions',
    name: 'FreQuestions-smile',
    hash: '#faq-smile',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestions',
    name: 'FreQuestions-lasik',
    hash: '#faq-lasik',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestions',
    name: 'FreQuestions-icl',
    hash: '#faq-icl',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  {
    path: '/FreQuestions-presbyopia',
    name: 'FreQuestions',
    hash: '#faq-presbyopia',
    title: '常見問題',
    component: resolve('pages/FreQuestions/index.vue'),
  },
  // {
  //   path: '/new2',
  //   name: 'new2',
  //   hash: '#new2',
  //   title: '常見問題',
  //   component: resolve('pages/FreQuestions/new2-problem.vue'),
  // },
  {
    path: '/contact-us',
    name: 'contact-us',
    title: '聯絡我們',
    // component: resolve('pages/contact-us/index.vue')
    component: resolve('pages/new-page/contact-us.vue')
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
    title: '講座',
    // component: resolve('pages/ophthalmicInfo/AppointForm/index.vue')
    component: resolve('pages/new-page/preaching-seat.vue')
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
    // title: '個案分享及矯視資訊影片',
    // component: resolve('pages/video/index.vue')
    title: '矯視資訊影片',
    component: resolve('pages/new-page/orthopedic-video.vue')
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
    // component: resolve('pages/vision-correction/relex-smile/index.vue'),
    component: resolve('pages/new-page/smile.vue')
  },
  {
    path: '/smilePro',
    name: 'smilePro',
    title: 'SMILE Pro 微笑激光矯視',
    // component: resolve('pages/smilePro/index.vue'),
    component: resolve('pages/new-page/smile-pro.vue')
  },

  {
    path: '/smileProV2',
    name: 'smileProV2',
    title: 'SMILE Pro 微笑激光矯視',
    // component: resolve('pages/smilePro/index.vue'),
    component: resolve('pages/new-page/smile-proV2.vue')
  },
  {
    path: '/vision-correction-presbyopia',
    name: 'vision-correction-presbyopia',
    title: 'CMER CLEAR-Vision',
    // component: resolve('pages/vision-correction-presbyopia/index.vue'),
    component: resolve('pages/new-page/clear-vision.vue')
  },
  {
    path: '/vision-correction-lasik',
    name: 'vision-correction-lasik',
    title: 'LASIK 激光矯視',
    // component: resolve('pages/vision-correction-lasik/index.vue'),
    component: resolve('pages/new-page/lasik.vue')
  },
  // {
  //   path: '/vision-correction-icl',
  //   name: 'vision-correction-icl',
  //   title: 'ICL 植入式隱形眼鏡',
  //   // component: resolve('pages/vision-correction-icl/index.vue'),
  //   component: resolve('pages/new-page/icl.vue')
  // },
  {
    path: '/vision-correction-icl',
    name: 'vision-correction-icl',
    title: 'ICL 植入式隱形眼鏡',
    // component: resolve('pages/vision-correction-icl/index.vue'),
    component: resolve('pages/new-page/iclV2.vue')
  },
  // 新版本路由
  {
    path: '/smile',
    name: 'new-page/smile',
    title: 'SMILE 微笑激光矯視',
    component: resolve('pages/new-page/smile.vue')
  },
  {
    path: '/smile-pro',
    name: 'new-page/smile-pro',
    title: 'SMILE-Pro  微笑激光矯視',
    component: resolve('pages/new-page/smile-pro.vue')
  },
  {
    path: '/clear-vision',
    name: 'new-page/clear-vision',
    title: 'CMER CLEAR-Vision',
    component: resolve('pages/new-page/clear-vision.vue')
  },
  {
    path: '/lasik',
    name: 'new-page/lasik',
    title: 'LASIK 激光矯視',
    component: resolve('pages/new-page/lasik.vue')
  },
  {
    path: '/icl',
    name: 'new-page/icl',
    title: 'ICL 植入式隱形眼鏡',
    component: resolve('pages/new-page/icl.vue')
  },
  // {
  //   path: '/new-fee',
  //   name: 'new-page/fee',
  //   title: '收費詳情',
  //   component: resolve('pages/new-page/new-fee.vue')
  // },
  // {
  //   path: '/new-fee2',
  //   name: 'new-page/fee2',
  //   title: '收費詳情',
  //   component: resolve('pages/new-page/new-fee.vue')
  // },
  {
    path: '/new-home',
    name: 'new-home',
    title: '主页',
    component: resolve('pages/new-page/home.vue')
  },
  {
    path: '/preaching-seat',
    name: 'preaching-seat',
    title: '講座',
    component: resolve('pages/new-page/preaching-seat.vue')
  },
  {
    path: '/doctor-team',
    name: 'doctor-team',
    title: '醫生團隊',
    component: resolve('pages/new-page/doctor-team.vue')
  },
  {
    path: '/orthopedic-video',
    name: 'orthopedic-video',
    title: '矯視資訊影片',
    component: resolve('pages/new-page/orthopedic-video.vue')
  },
  {
    path: '/media-coverage',
    name: 'media-coverage',
    title: '媒體報導',
    component: resolve('pages/new-page/media-coverage.vue')
  },
  {
    path: '/new-contact-us',
    name: 'contact-us',
    title: '聯絡我們',
    component: resolve('pages/new-page/contact-us.vue')
  },
  {
    path: '/follow-up-consultation',
    name: 'follow-up-consultation',
    // 矯視後覆診
    title: '矯視後覆診',
    component: resolve('pages/new-page/follow-up-consultation.vue')
  },
  {
    path: '/vision-correction',
    name: 'vision-correction',
    title: '矯視流程',
    component: resolve('pages/new-page/vision-correction.vue')
    // 矯視流程
  },
  {
    path: '/common-problem',
    name: 'common-problem',
    title: '常見問題',
    component: resolve('pages/new-page/common-problem.vue')
  },
  {
    path: '/eye-examination',
    name: 'eye-examination',
    title: '眼睛檢查及矯視前',
    component: resolve('pages/new-page/eye-examination.vue')
  },
  {
    path: '/group-profile',
    name: 'group-profile',
    title: '集團簡介',
    component: resolve('pages/new-page/group-profile.vue')
  },
  {
    path: '/new-equipment',
    name: 'new-equipment',
    title: '中心設備',
    component: resolve('pages/new-page/equipment.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    title: '科普知識',
    component: resolve('pages/new-page/blog.vue')
  },
  {
    path: `/blog/:id?`,
    name: `blog-id`,
    title: '科普知識',
    component: resolve(`pages/new-page/blog_news/_id.vue`)
  },
  // // 活动route 
  // {
  //   path: '/icl-event',
  //   name: 'icl-event',
  //   title: '活動',
  //   component: resolve('pages/smilepro-event/del-index.vue')
  // },
]


const extendRoutes = (routes) => {

  routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
  
  routes.push(...$router)
}


export default { base: '/', extendRoutes }