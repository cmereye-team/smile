<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <shareVideo />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/ophthalmicInfo/shareVideos/MainBanner.vue";
import shareVideo from "@/components/content/ophthalmicInfo/shareVideos/shareVideo.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, shareVideo, footers },
  head() {
    return {
      title: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
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
