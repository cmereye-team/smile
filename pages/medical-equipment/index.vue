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
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/medical-equipment",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/medical-equipment",
    }
  },
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
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/medical-equipment" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/medical-equipment" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/medical-equipment" },
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
