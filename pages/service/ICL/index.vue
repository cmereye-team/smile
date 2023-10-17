<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <film />
    <Benefit />
    <suitable />
    <share />

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

import MainBanner from "@/components/content/service/ICL/MainBanner.vue";
import film from "@/components/content/service/ICL/film.vue";
import Benefit from "@/components/content/service/ICL/Benefit.vue";
import suitable from "@/components/content/service/ICL/suitable.vue";
import share from "@/components/content/service/ICL/share.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    film,
    Benefit,
    suitable,
    share,
    footers,
  },
  head() {
    return {
      title: "ICL植入式隱形眼鏡 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑激光矯視中心提供植入式隱形眼鏡 ICL 矯視服務，以創新技術和具生物兼容特質、柔軟及具紫外線防護的人工晶體矯正視力，專為深度近視、遠視、散光客人而設。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ICL植入式隱形眼鏡, 矯視價錢 香港, 矯視 收費, 香港矯視, 視力矯正, 眼鏡, 隱形眼鏡, 眼科手術, 眼睛健康, 近視, 遠視, 散光, 投考紀律部隊, 微笑激光矯視, 乾眼, ICL 價錢, ICL 收費",
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
