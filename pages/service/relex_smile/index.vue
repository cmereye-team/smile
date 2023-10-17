<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <Step />
    <Benefit />
    <Fit />
    <Xtra />

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

import MainBanner from "@/components/content/service/relex_smile/MainBanner.vue";
import Step from "@/components/content/service/relex_smile/Step.vue";
import Benefit from "@/components/content/service/relex_smile/Benefit.vue";
import Fit from "@/components/content/service/relex_smile/Fit.vue";
import Xtra from "@/components/content/service/relex_smile/Xtra.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    Step,
    Benefit,
    Fit,
    Xtra,
    footers,
  },
  head() {
    return {
      title: "SMILE 微笑激光矯視 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑激光矯視中心提供嶄新SMILE微笑激光矯視服務，較傳統LASIK激光矯視更安全、快捷，本中心亦有免費講座，讓客人了解更多矯視資訊。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 投考紀律部隊, 眼睛檢查, 眼睛治療 錐形角膜, 角膜膠原交聯手術",
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
