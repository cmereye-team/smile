<template>
  <div>
    <Header />
    <Navbar />
    <div class="page_container box">
      <div class="flex justify-center md:mt-28 mt-10">
        <h2>{{$t('disclaimer.h2')}}</h2>
      </div>
      <p class="pb-4">
        {{$t('disclaimer.p1')}}
      </p>
      <p class="pb-4">
        {{$t('disclaimer.p2')}}
      </p>
      <p class="pb-4">
        {{$t('disclaimer.p3')}}
      </p>
      <p class="pb-4">
        {{$t('disclaimer.p4')}}
      </p>
      <p class="pb-4">
        {{$t('disclaimer.p5')}}
      </p>
      <p class="pb-4">
        {{$t('disclaimer.p6')}}
      </p>

      <p class="pb-24">
        {{$t('disclaimer.p7')}}
      </p>
    </div>
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import footers from "@/components/commom/foot/footers.vue";
export default {
  components: { Header, Navbar, Footer, footers },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/disclaimer",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/disclaimer",
    }
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title: "私隱政策 - 希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
      ],
      link: [
        { rel: 'canonical', href: this.$i18n.locale === 'cn' ? this.canonicalHrefCN : this.canonicalHref },
        { rel: "alternate", hreflang:"x-default", href:"https://smile.hkcmereye.com/disclaimer" },
        { rel: "alternate", hreflang:"zh-Hant-HK", href:"https://smile.hkcmereye.com/disclaimer" },
        { rel: "alternate", hreflang:"zh-Hans-CN", href:"https://smile.hkcmereye.com/cn/disclaimer" },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 19px;
  color: #4570B6;
}
@media only screen and (max-width: 768px) {
  p {
    font-size: 15px;
  }
}
@media only screen and (min-width: 768px) {
  p {
    font-size: 16px;
  }
}
.text-blue {
  color: #25395e;
  font-size: 22px;
}
.box {
  padding: 0;
}
.section.vedio_box {
  margin-top: 0;
}
</style>
