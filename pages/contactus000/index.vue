<template>
  <div>
    <Header />
    <Navbar />
    <BannerSlider />
    <ServeTable />
    <GoogleMap />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import BannerSlider from "@/components/content/contactus/BannerSlider.vue";
import ServeTable from "@/components/content/contactus/ServeTable.vue";
import GoogleMap from "@/components/content/contactus/GoogleMap.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    BannerSlider,
    ServeTable,
    GoogleMap,
    footers,
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
