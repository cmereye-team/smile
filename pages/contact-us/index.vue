<template>
  <div>
    <Header />
    <div class="pagebody">
      <Navbar />
      <BannerSlider />
      <ServeTable />
      <GoogleMap />
      <Footer />
      <footers />
    </div>
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
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
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/contact-us",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/contact-us",
      browserTitle: "聯絡我們 - 香港希瑪微笑矯視中心",
      browserTitleCn: "联系我们 - 香港希玛微笑矫视中心",
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "聯絡我們 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "聯絡我們 - 香港希瑪微笑矯視中心",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/contact-us" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/contact-us" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/contact-us" },
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
