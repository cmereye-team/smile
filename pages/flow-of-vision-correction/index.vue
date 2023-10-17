<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <process />
    <regard />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";
import MainBanner from "@/components/content/Notice/techProcess/MainBanner.vue";
import process from "@/components/content/Notice/techProcess/process.vue";
import regard from "@/components/content/Notice/techProcess/regard.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, process, regard, footers },
  head() {
    return {
      title: "矯視流程 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "矯視流程 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "矯視流程 - 香港希瑪微笑矯視中心",
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
