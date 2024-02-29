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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";


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
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/group-profile",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/group-profile",
      browserTitle: "集團簡介 - 香港希瑪微笑矯視中心",
      browserTitleCn: "集团简介 - 香港希玛微笑矫视中心",
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
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
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/group-profile" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/group-profile" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/group-profile" },
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
