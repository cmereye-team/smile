<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <eyeTest />
    <Preorthoptic />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import MainBanner from "@/components/content/Notice/eyeExam/MainBanner.vue";
import eyeTest from "@/components/content/Notice/eyeExam/eyeTest.vue";
import Preorthoptic from "@/components/content/Notice/eyeExam/Preorthoptic.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    eyeTest,
    Preorthoptic,
    footers,
  },
  head() {
    return {
      title: "診症須知 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "診症須知 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "診症須知 - 香港希瑪微笑矯視中心",
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
