<template>
  <div class="icl">
    <Header />
    <Navbar />

    <MainBanner />
    <film />
    <Benefit />

    <businessHoursIcl />
    <FooterIcl />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import FooterIcl from "@/components/commom/new_foot/ICLFooter.vue";

import MainBanner from "@/components/content/service/ICL-R/MainBanner.vue";
import film from "@/components/content/service/ICL-R/film.vue";
import Benefit from "@/components/content/service/ICL-R/Benefit.vue";
import suitable from "@/components/content/service/ICL-R/suitable.vue";
import share from "@/components/content/service/ICL-R/share.vue";
import footers from "@/components/commom/foot/footers.vue";
import businessHoursIcl from "@/components/commom/business/business-hours-icl.vue";

export default {
  components: {
    Header,
    Navbar,
    FooterIcl,
    MainBanner,
    film,
    Benefit,
    suitable,
    businessHoursIcl,
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
@media screen and (min-width: 768px) {
  .icl {
    max-width: calc(100vw - 20px);
    width: 100vw;
    overflow-x: hidden;
  }
  .banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :deep(.footer_new) {
    .title {
      color: #fff !important;
    }
    .nav {
      color: #fff !important;
    }
  }
}
</style>
