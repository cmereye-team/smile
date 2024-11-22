<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <eyeTest />
    <Preorthoptic />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/Notice/eyeExam/MainBanner.vue";
import eyeTest from "@/components/content/Notice/eyeExam/eyeTest.vue";
import Preorthoptic from "@/components/content/Notice/eyeExam/Preorthoptic.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    eyeTest,
    Preorthoptic,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/eye-examination/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/eye-examination/",
      browserTitle: "診症須知 - 希瑪微笑矯視中心",
      browserTitleCn: "诊症须知 - 希玛微笑矫视中心",
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
          content: "診症須知 -希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "診症須知 - 希瑪微笑矯視中心",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang: "x-default", href: "https://smile.hkcmereye.com/eye-examination/" },
        { rel: "alternate", hreflang: "zh-Hant", href: "https://smile.hkcmereye.com/eye-examination/" },
        { rel: "alternate", hreflang: "zh-Hans", href: "https://smile.hkcmereye.com/cn/eye-examination/" },

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
