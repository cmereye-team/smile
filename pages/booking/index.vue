<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <!-- <AppointForm /> -->
    <serve />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";
import MainBanner from "@/components/content/ophthalmicInfo/serveYyue/MainBanner.vue";
import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom_ifram.vue";
// import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom.vue";
import serve from "@/components/content/ophthalmicInfo/serveYyue/serve.vue"

export default {
  components: { Header, Navbar, Footer, MainBanner, AppointForm, footers ,serve},
  head() {
    return {
      title: "預約講座 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "預約講座 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "預約講座 - 香港希瑪微笑矯視中心",
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
