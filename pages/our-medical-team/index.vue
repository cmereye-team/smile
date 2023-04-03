<template>
  <div>
    <Header />
    <Navbar />
    <BannerSlider />
    <bossInfo />
    <DoctorInfo />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import BannerSlider from "@/components/content/aboutus/doctor-team/BannerSlider.vue";
import bossInfo from "@/components/content/aboutus/doctor-team/BossInfo.vue";
import DoctorInfo from "@/components/content/aboutus/doctor-team/DoctorInfo.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    BannerSlider,
    bossInfo,
    DoctorInfo,
    footers,
  },
  head() {
    return {
      title: "醫生團隊 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "醫生團隊 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "香港希瑪微笑矯視中心",
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
