<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <followDiago />
    <precautions />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/Notice/Followdiag/MainBanner.vue";
import followDiago from "@/components/content/Notice/Followdiag/followDiago.vue";
import precautions from "@/components/content/Notice/Followdiag/precautions.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    followDiago,
    precautions,
    footers,
  },
  head() {
    return {
      title: "術後護理 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "術後護理 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "術後護理 - 香港希瑪微笑矯視中心",
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
