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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/new_foot/footers.vue";
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
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/about-us/centre-introduction",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/about-us/centre-introduction",
    }
  },
  head() {
    return {
      title: "集團及中心簡介 - 香港希瑪微笑矯視中心",
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/about-us/centre-introduction" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/about-us/centre-introduction" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/about-us/centre-introduction" },
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
