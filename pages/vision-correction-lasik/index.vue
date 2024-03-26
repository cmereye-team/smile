<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <principle />
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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/service/LASIK/MainBanner.vue";
import principle from "@/components/content/service/LASIK/principle.vue";
import Benefit from "@/components/content/service/LASIK/Benefit.vue";
import suitable from "@/components/content/service/LASIK/suitable.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    principle,
    Benefit,
    suitable,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-lasik",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-lasik",
      browserTitle: "LASIK激光矯視 - 香港希瑪微笑矯視中心",
      browserTitleCn: "LASIK激光矫视 - 香港希玛微笑矫视中心",
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
            "LASIK激光矯視術是一種已超過30年歷史的矯視方法，其運作原理是利用激光重新塑形角膜表面，改變其弧度，以達到改善視力的目的。立即了解更多。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "lasik,lasik 激光矯視,激光 手術,lasik 散光,激光 矯 視 手術,LASIK激光矯視, 激光矯視 價錢, 激光矯視 香港, 視力矯正, 眼睛健康, 激光矯視, 深近視, 眼睛檢查",
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
          href: "https://smile.hkcmereye.com/vision-correction-lasik",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-lasik",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-lasik",
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
