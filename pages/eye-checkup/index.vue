<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <eyeTest />

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
import eyeTest from "@/components/content/eye-checkup/index.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, eyeTest, footers },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title: "預約術前眼睛檢查 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "預約術前眼睛檢查 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "診症須知 - 香港希瑪微笑矯視中心",
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
