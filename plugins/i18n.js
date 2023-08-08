
import cn from '../lang/zhCN.js' //简体
import hk from '../lang/zhHK.js' //繁体
import en from '../lang/egUS.js' //繁体
export default {
    // strategy: 'prefix_except_default',
    defaultLocale: 'hk',
    // 根据项目情况，酌情配置
    locales: ['cn', 'hk', 'en'],
    vueI18n: {
        fallbackLocale: 'hk',
        messages: { cn, hk, en }
    }
}