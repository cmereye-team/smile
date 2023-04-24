<template>
  <div>
    <Header />
    <Navbar />
    <MainBanner />
    <Tab />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import Tab from "@/components/content/free/tab.vue";
import footers from "@/components/commom/foot/footers.vue";
import MainBanner from "@/components/content/ophthalmicInfo/consumption/MainBanner.vue";

export default { components: { Header, Navbar, Footer, Tab, footers,MainBanner } };
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
