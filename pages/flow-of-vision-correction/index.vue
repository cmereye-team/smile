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
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
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
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang: "x-default", href: "https://smile.hkcmereye.com/flow-of-vision-correction" },
        { rel: "alternate", hreflang: "zh-Hant-HK", href: "https://smile.hkcmereye.com/flow-of-vision-correction" },
        { rel: "alternate", hreflang: "zh-Hans-CN", href: "https://smile.hkcmereye.com/cn/flow-of-vision-correction" },
      ]
    };
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/flow-of-vision-correction",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/flow-of-vision-correction",
      browserTitle: "矯視流程 - 香港希瑪微笑矯視中心",
      browserTitleCn: "矫视流程 - 香港希玛微笑矫视中心",
    }
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
