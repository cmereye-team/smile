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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import Tab from "@/components/content/free/tab.vue";
import footers from "@/components/commom/foot/footers.vue";
import MainBanner from "@/components/content/ophthalmicInfo/consumption/MainBanner.vue";

export default {
  components: { Header, Navbar, Footer, Tab, footers, MainBanner },
  head() {
    return {
      title: "收費詳情 - 香港希瑪微笑矯視中心",
      link: [
        { rel: 'canonical', href: 'https://smile.hkcmereye.com/fee' }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
