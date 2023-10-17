<template>
  <div>
    <Header />
    <Navbar />
    <MainBanner />
    <Tab />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";
import Tab from "@/components/content/free/tab.vue";
import MainBanner from "@/components/content/ophthalmicInfo/consumption/MainBanner.vue";
export default {
  components: { Header, Navbar, Footer, Tab, footers ,MainBanner},
  head() {
    return {
      title: "收費詳情 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "各種矯視服務收費表及服務內容，價目清晰，並無其他額外收費。限定優惠：凡預約星期一至星期五時段，只需港幣$100可享全面檢查眼睛及眼科專科醫生詳細評估服務。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "各種矯視服務收費表及服務內容，價目清晰，並無其他額外收費。限定優惠：凡預約星期一至星期五時段，只需港幣$100可享全面檢查眼睛及眼科專科醫生詳細評估服務。",
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
