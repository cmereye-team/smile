<template>
  <div>
    <Header />
    <Navbar />
    <BannerSlider />
    <EquipInfo />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import BannerSlider from "@/components/content/aboutus/equip-center/BannerSlider.vue";
import EquipInfo from "@/components/content/aboutus/equip-center/EquipInfo.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: { Header, Navbar, Footer, BannerSlider, EquipInfo, footers },
  head() {
    return {
      title: "中心設備 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "中心設備 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "中心設備 - 香港希瑪微笑矯視中心",
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
