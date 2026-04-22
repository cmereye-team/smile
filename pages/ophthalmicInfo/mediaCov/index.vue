<!--
 * @Date: 2023-04-03 18:04:37
 * @LastEditTime: 2026-04-22 15:17:50
 * @FilePath: /pages/ophthalmicInfo/mediaCov/index.vue
 * @Description: 媒体报道，看起来年代古老，不确定是否在用
-->
<template>
  <div>
    <Navbar />
    <MainBanner />
    <media />
  </div>
</template>

<script>
import Navbar from "@/components/commom/new_head/Navbar.vue";
import MainBanner from "@/components/content/ophthalmicInfo/mediaCov/MainBanner.vue";
import media from "@/components/content/ophthalmicInfo/mediaCov/media.vue";

export default {
  components: { Navbar, MainBanner, media },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/ophthalmicInfo/mediaCov",
      browserTitle: "媒體報導 | 眼科資訊 - 希瑪微笑矯視中心",
      browserTitleCn: "媒体报导 | 眼科资讯 - 希玛微笑矫视中心",
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
          href: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/ophthalmicInfo/mediaCov",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/ophthalmicInfo/mediaCov",
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