<template>
  <div>
    <Header />
    <Navbar />
    <div class="loading_container">
      <Se1MainBanner />
      <Se2ComIntro />
      <Se3CentreInfor />
      <swiperhj />
      <ReservationVue />
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
import ReservationVue from "../../components/content/home/Reservation.vue";
import swiperhj from "../../components/content/aboutus/centre-introduction/huanjswiper.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Se1MainBanner,
    Se2ComIntro,
    Se3CentreInfor,
    ReservationVue,
    swiperhj,
    footers,
  },
  head() {
    return {
      title: "集團簡介 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "集團簡介 - 香港希瑪微笑矯視中心",
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
