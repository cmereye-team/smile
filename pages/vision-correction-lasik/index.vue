<template>
  <div>
    <Header />
    <main>
      <section class="banner wrapper flex mt-20 md:mt-40">
        <div>
          <div class="text-primary pt-10 md:pt-40 mb-16 md:mb-24">
            <p class="flex flex-col pb-2 md:pb-5">
              <span class="font-en text-4xl md:text-[136px] leading-none font-bold">LASIK</span>
              <span class="text-2xl md:text-7xl">{{
                $t("Correct.lasik.bannerTitle")
              }}</span>
            </p>
            <p class="text-xs md:text-3xl">
              Laser-Assisted in Situ Keratomileusis
            </p>
          </div>
          <div class="tracking-wide text-text text-xs md:text-xl font-light leading-[3] md:leading-loose">
            <a href="/">{{ $t("breadcrumb.home") }}</a>
            &gt;<span>{{ $t("breadcrumb.services") }}</span>
            &gt;<span class="text-primary">{{ $t("breadcrumb.lasik") }}</span>
          </div>
        </div>
        <ul>
          <li></li>
        </ul>
      </section>
      <section class="intro wrapper">
        <div>
          <h1 class="text-primary text-xl md:text-3xl font-black pb-2 md:pb-4">{{ $t("Correct.lasik.pageTitle") }}</h1>
          <p class="text-text text-justify text-base lg:text-xl font-light">
            {{ $t("Correct.lasik.introDesc") }}
          </p>
        </div>
      </section>
      <ShareSection />
    </main>
    <Footer />
    <FooterMobile />
    <goTop />
  </div>
</template>
<script>
import goTop from "@/components/Publice/goTop.vue";
import Header from "@/components/Publice/HeadeV2.vue";
import Footer from "@/components/commom/new_foot/ICLFooterV2.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import ShareSection from "@/components/commom/share/ShareSection.vue";
export default {
  components: {
    goTop,
    Header,
    Footer,
    FooterMobile,
    ShareSection,
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }
    return {
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-lasik",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-lasik",
      browserTitle: "LASIK激光矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "LASIK激光矫视 - 希玛微笑矫视中心",
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
