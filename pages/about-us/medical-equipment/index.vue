<template>
  <div>
    <Header />
    <Navbar />
    <BannerSlider />
    <EquipInfo />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import BannerSlider from "@/components/content/aboutus/equip-center/BannerSlider.vue";
import EquipInfo from "@/components/content/aboutus/equip-center/EquipInfo.vue";
import footers from "@/components/commom/foot/footers.vue";
export default {
  components: { Header, Navbar, Footer, BannerSlider, EquipInfo, footers },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
