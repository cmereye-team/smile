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
import footers from "@/components/commom/foot/footers.vue";
import MainBanner from "@/components/content/Notice/eyeExam/MainBanner.vue";
import eyeTest from "@/components/content/Notice/eyeExam/eyeTest.vue";
import Preorthoptic from "@/components/content/Notice/eyeExam/Preorthoptic.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    eyeTest,
    footers,
    Preorthoptic,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/Notice/eyeExam",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/Notice/eyeExam",
      browserTitle: "眼睛檢查及矯視前 - 香港希瑪微笑矯視中心",
      browserTitleCn: "眼睛检查及矫视前 - 香港希玛微笑矫视中心",
    };
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
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
          href: "https://smile.hkcmereye.com/Notice/eyeExam",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/Notice/eyeExam",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/Notice/eyeExam",
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