<template>
  <div>
    <Header />
    <Navbar />
    <firstProblem />
    <secondProblem />
    <thirtProblem />
    <fourProblem />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import firstProblem from "@/components/content/FreQuestions/firstProblem.vue";
import secondProblem from "@/components/content/FreQuestions/secondProblem.vue";
import thirtProblem from "@/components/content/FreQuestions/thirtProblem.vue";
import fourProblem from "@/components/content/FreQuestions/fourProblem.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    firstProblem,
    secondProblem,
    thirtProblem,
    fourProblem,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/FreQuestions",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/FreQuestions",
    }
  },
  head() {
    return {
      title: "常見問題 ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "常見問題",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "常見問題",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/FreQuestions" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/FreQuestions" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/FreQuestions" },
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
