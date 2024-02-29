<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <process />
    <regard />

    <Footer />

  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/Notice/techProcess/MainBanner.vue";
import process from "@/components/content/Notice/techProcess/process.vue";
import regard from "@/components/content/Notice/techProcess/regard.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, process, regard },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/Notice/techProcess",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/Notice/techProcess",
    }
  },
  head() {
    return {
      title: "矯視流程 - 香港希瑪微笑矯視中心",
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/techProcess" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/techProcess" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/techProcess" },
      ]
    };
  },
}
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>