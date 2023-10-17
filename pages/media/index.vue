<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <media />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/ophthalmicInfo/mediaCov/MainBanner.vue";
import media from "@/components/content/ophthalmicInfo/mediaCov/media.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, media, footers },
  head() {
    return {
      title: "媒體報導 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "媒體報導 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "媒體報導 - 香港希瑪微笑矯視中心",
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
