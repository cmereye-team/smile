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
  head() {
    return {
      title: "主頁 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑激光矯視中心提供一站式眼科專科醫療及矯視服務，包括：SMILE 微笑激光矯視、LASIK激光矯視、ICL植入式隱形眼鏡、老花矯視等。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 微笑矯視 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 眼睛檢查, 眼睛治療, ICL, 植入式隱形眼鏡, 老花, 近視",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

@media screen and (min-width: 950px) and (max-width: 1024px) {
  .pages {
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
