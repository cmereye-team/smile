<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <!-- <AppointForm /> -->
    <serve />

    <Footer />
    <footers />
    <footersTest />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";
import footersTest from "../../components/commom/foot/footers.vue"
import MainBanner from "@/components/content/ophthalmicInfo/serveYyue/MainBanner.vue";
import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom_ifram.vue";
// import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom.vue";
import serve from "@/components/content/ophthalmicInfo/serveYyue/serve.vue"

export default {
  components: { Header, Navbar, Footer, MainBanner, AppointForm, footersTest, footers, serve },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/booking",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/booking",
    }
  },
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
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/booking" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/booking" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/booking" },
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
