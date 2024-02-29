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
  components: { Header, Navbar, Footer, MainBanner, footers, media },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/ophthalmicInfo/mediaCov",
      browserTitle: "媒體報導 | 眼科資訊 - 香港希瑪微笑矯視中心",
      browserTitleCn: "媒体报导 | 眼科资讯 - 香港希玛微笑矫视中心",
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang: "x-default", href: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov" },
        { rel: "alternate", hreflang: "zh-Hant-HK", href: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov" },
        { rel: "alternate", hreflang: "zh-Hans-CN", href: "https://smile.hkcmereye.com/cn/ophthalmicInfo/mediaCov" },
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