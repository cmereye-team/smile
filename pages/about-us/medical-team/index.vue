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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
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
    footers,
    DoctorInfo,
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
