<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <media />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/ophthalmicInfo/mediaCov/MainBanner.vue";
import media from "@/components/content/ophthalmicInfo/mediaCov/media.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, media, footers },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/media",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/media",
      browserTitle: "媒體報導 - 希瑪微笑矯視中心",
      browserTitleCn: "媒体报道 - 希玛微笑矫视中心",
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "媒體報導 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "媒體報導 - 希瑪微笑矯視中心",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/media" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/media" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/media" },
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
