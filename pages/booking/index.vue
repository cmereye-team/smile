<!--
 * @Date: 2023-04-03 18:04:37
 * @LastEditTime: 2026-04-22 14:42:31
 * @FilePath: /pages/booking/index.vue
 * @Description: 预约服务，包括讲座和术前眼睛检查
-->
<template>
  <div>
    <Navbar />
    <MainBanner />
    <!-- <AppointForm /> -->
    <serve />
  </div>
</template>
<script>
import Navbar from "@/components/commom/new_head/Navbar.vue";
import MainBanner from "@/components/content/ophthalmicInfo/serveYyue/MainBanner.vue";
import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom_ifram.vue";
import serve from "@/components/content/ophthalmicInfo/serveYyue/serve.vue";
export default {
  components: { Navbar, MainBanner, AppointForm, serve },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/booking",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/booking",
      browserTitle: "預約講座 - 希瑪微笑矯視中心",
      browserTitleCn: "预约讲座 - 希玛微笑矫视中心",
    };
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "預約講座 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "預約講座 - 希瑪微笑矯視中心",
        },
      ],
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
          href: "https://smile.hkcmereye.com/booking",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/booking",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/booking",
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
