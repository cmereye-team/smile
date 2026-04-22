<template>
  <div>
    <Navbar />
    <MainBanner />
    <AppointForm />
  </div>
</template>

<script>
import Navbar from "@/components/commom/new_head/Navbar.vue";
import MainBanner from "@/components/content/ophthalmicInfo/divit/MainBanner.vue";
import AppointForm from "@/components/content/ophthalmicInfo/divit/index.vue";

export default {
  components: { Navbar, MainBanner, AppointForm},
  head() {
    return {
      title: this.$i18n.locale === 'cn' ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "消費券詳情 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "消費券詳情 - 香港希瑪微笑矯視中心",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/divit" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/divit" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/divit" },
      ]
    };
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/divit",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/divit",
      browserTitle: "消費券詳情 - 香港希瑪微笑矯視中心",
      browserTitleCn: "消费券详情 - 香港希玛微笑矫视中心",
    }
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
