<template>
  <div class="pages">
    <Header />

    <BannerSlider />
    <CorrectionService />
    <CmerInfo />
    <aspiration />
    <VedioSlider />
    <serve />
    <Reservation />

    <Footer />
    <footers />
  </div>
</template>

<script>
// import Header from "../components/commom/head/Header.vue";
// import Navbar from "../components/commom/head/Navbar.vue";
import BannerSlider from "../components/content/home/BannerSlider.vue";
import CorrectionService from "../components/content/home/CorrectionService.vue";
import VedioSlider from "../components/content/home/VedioSlider.vue";
import Reservation from "../components/content/home/Reservation.vue";
import serve from "../components/content/home/serve.vue";
// import Footer from "../components/commom/foot/Footer.vue";
import CmerInfo from "../components/content/home/CmerInfo.vue";
import aspiration from "../components/content/home/aspiration.vue";
import footers from "@/components/commom/foot/footers.vue";

import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

export default {
  components: {
    Header,
    Navbar,
    BannerSlider,
    CorrectionService,
    VedioSlider,
    Reservation,
    Footer,
    serve,
    CmerInfo,
    aspiration,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn",
      browserTitle: "主頁 - 香港希瑪微笑矯視中心",
      browserTitleCn: "主页 - 香港希玛微笑矫视中心",
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
            "香港希瑪微笑矯視中心為上市公司「香港希瑪眼科集團」旗下的屈光矯視醫療中心，提供一站式眼科專科醫療及矯視服務，包括：SMILE 微笑激光矯視。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "smile 矯 視, 矯視中心,希瑪微笑矯視中心,香港 激光 矯 視 中心,SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 微笑矯視 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 眼睛檢查, 眼睛治療, ICL, 植入式隱形眼鏡, 老花, 近視",
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
          href: "https://smile.hkcmereye.com/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
