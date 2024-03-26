<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <Benefit />
    <film />
    <process />
    <xtar />
    <suitable />
    <share />

    <BusinessHours />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import BusinessHours from "@/components/commom/business/business-hours.vue";

import MainBanner from "@/components/content/service/ICL-new/MainBanner.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import Benefit from "@/components/content/service/ICL-new/Benefit.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";
import footers from "@/components/commom/foot/footers.vue";
import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    film,
    Benefit,
    process,
    xtar,
    suitable,
    share,
    footers,
    BusinessHours,
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑矯視中心提供植入式隱形眼鏡 ICL 矯視服務，以創新技術和具生物兼容特質的人工晶體矯正視力，專為深度近視、遠視、散光客人而設。"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ICL, icl植入式隱形眼鏡, 植入式隱形眼鏡, evo icl, visian icl, icl 老花",
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
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-icl",
        },
      ],
    };
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-icl",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-icl",
      browserTitle: "ICL植入式隱形眼鏡 - 香港希瑪微笑矯視中心",
      browserTitleCn: "ICL植入式隐形眼镜 - 香港希玛微笑矫视中心",
    };
  },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
