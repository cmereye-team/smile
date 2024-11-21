<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <followDiago />
    <precautions />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/Notice/Followdiag/MainBanner.vue";
import followDiago from "@/components/content/Notice/Followdiag/followDiago.vue";
import precautions from "@/components/content/Notice/Followdiag/precautions.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    followDiago,
    precautions,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/post-corrective-care",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/post-corrective-care",
      browserTitle: "術後護理 - 希瑪微笑矯視中心",
      browserTitleCn: "术后护理 - 希玛微笑矫视中心",
    }
  },
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
          content: "術後護理 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "術後護理 - 希瑪微笑矯視中心",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/post-corrective-care" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/post-corrective-care" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/post-corrective-care" },
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
