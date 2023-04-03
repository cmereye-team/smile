<template>
  <div>
    <Header />
    <Navbar />
    <div class="loading_container">
      <Se1MainBanner />
      <Se2ComIntro />
      <Se3CentreInfor />
    </div>
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";
import Se1MainBanner from "@/components/content/aboutus/centre-introduction/Se1MainBanner.vue";
import Se2ComIntro from "@/components/content/aboutus/centre-introduction/Se2ComIntro.vue";
import Se3CentreInfor from "@/components/content/aboutus/centre-introduction/Se3CentreInfor.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Se1MainBanner,
    Se2ComIntro,
    Se3CentreInfor,
    footers,
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
