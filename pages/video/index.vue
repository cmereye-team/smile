<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <shareVideo />

    <Footer />
    <footers />
  </div>
</template>

<script>
// import Header from "@/components/commom/head/Header.vue";
// import Navbar from "@/components/commom/head/Navbar.vue";
// import Footer from "@/components/commom/foot/Footer.vue";
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/ophthalmicInfo/shareVideos/MainBanner.vue";
import shareVideo from "@/components/content/ophthalmicInfo/shareVideos/shareVideo.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, shareVideo, footers },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/video/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/video/",
      browserTitle: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
      browserTitleCn: "个案分享及矫视资讯影片 - 希玛微笑矫视中心",
    };
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/video/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/video/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/video/",
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
