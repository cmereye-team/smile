<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <manMade />
    <Benefit />
    <suitable />

    <Footer />
    <footers />
  </div>
</template>

<script>
// import Header from "@/components/commom/head/Header.vue";
// import Navbar from "@/components/commom/head/Navbar.vue";
// import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/service/CLEAR_Vision/MainBanner.vue";
import manMade from "@/components/content/service/CLEAR_Vision/manMade.vue";
import Benefit from "@/components/content/service/CLEAR_Vision/Benefit.vue";

import suitable from "@/components/content/service/CLEAR_Vision/suitable.vue";

import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    manMade,
    Benefit,
    suitable,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-presbyopia",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
      browserTitle: "老花矯視 - 香港希瑪微笑矯視中心",
      browserTitleCn: "老花矫视 - 香港希玛微笑矫视中心",
    };
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，為受老花困擾人士度身訂造矯視方案，讓客人回復高清視力，改善老花問題。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花手術, 激光矯視老花, 老花激光矯視, 老花 激光,老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
