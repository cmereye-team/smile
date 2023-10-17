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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/service/CLEAR_Vision/MainBanner.vue";
import manMade from "@/components/content/service/CLEAR_Vision/manMade.vue";
import Benefit from "@/components/content/service/CLEAR_Vision/Benefit.vue";

import suitable from "@/components/content/service/CLEAR_Vision/suitable.vue";

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
  head() {
    return {
      title: "老花矯視 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑矯視中心提供多焦距人工晶體、雙眼互補法 (Mono-Vision)等老花矯視方案，讓客人回復高清視力，改善老花。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
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
