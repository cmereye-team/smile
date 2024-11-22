<template>
  <div>
    <Header />
    <Navbar />
    <BannerSlider />
    <bossInfo />
    <DoctorInfo />

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import BannerSlider from "@/components/content/aboutus/doctor-team/BannerSlider.vue";
import bossInfo from "@/components/content/aboutus/doctor-team/BossInfo.vue";
import DoctorInfo from "@/components/content/aboutus/doctor-team/DoctorInfo.vue";
import footers from "@/components/commom/foot/footers.vue";
export default {
  components: {
    Header,
    Navbar,
    Footer,
    BannerSlider,
    bossInfo,
    footers,
    DoctorInfo,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/about-us/medical-team",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/about-us/medical-team",
      browserTitle: "醫生團隊 - 希瑪微笑矯視中心",
      browserTitleCn: "医生团队 - 希玛微笑矫视中心",
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/about-us/medical-team" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/about-us/medical-team" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/about-us/medical-team" },
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
