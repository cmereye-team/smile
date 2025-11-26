<template>
  <div>
    <Header />
    <main>
      <section
        class="banner wrapper mt-20 md:mt-40 pb-4 md:pb-7 px-5 flex justify-between items-end"
      >
        <div class="">
          <div class="text-primary pt-10 md:pt-40 mb-16 md:mb-24">
            <p class="flex flex-col pb-2 md:pb-5">
              <span
                class="font-en text-4xl md:text-[136px] leading-none font-bold"
                >LASIK</span
              >
              <span class="text-2xl md:text-7xl">{{
                $t("lasik.bannerTitle")
              }}</span>
            </p>
            <p class="text-xs md:text-3xl">
              Laser-Assisted in Situ Keratomileusis
            </p>
          </div>
          <div
            class="tracking-wide text-text text-xs md:text-xl font-light leading-[3] md:leading-loose"
          >
            <a href="/">{{ $t("home.headers.home") }}</a>
            &gt;&nbsp;<span>{{ $t("home.headers.orthopedicServices") }}</span>
            &gt;&nbsp;<span class="text-primary font-medium">{{
              $t("lasik.pageTitle")
            }}</span>
          </div>
        </div>
        <div
          class="h-fit mb-[52px] md:mb-[72px] text-white text-sm md:text-2xl font-light whitespace-nowrap"
        >
          <p
            class="bg-primary w-fit pb-1 -mb-1 pt-1 px-5 md:pt-2 md:px-9 rounded-t-sm md:rounded-t-md"
          >
            {{ $t("lasik.conditions.title") }}
          </p>
          <ul
            class="bg-primary list-disc list-inside py-3 px-5 md:py-6 md:px-9 rounded-sm md:rounded-md rounded-tl-none"
          >
            <li>{{ $t("lasik.conditions.text1") }}</li>
            <li>{{ $t("lasik.conditions.text2") }}</li>
            <li>{{ $t("lasik.conditions.text3") }}</li>
          </ul>
        </div>
      </section>
      <section
        class="intro aspect-[77/100] md:aspect-[30/13] flex justify-center items-center md:justify-end bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-bg-m.avif)] md:bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-bg-pc.avif)] bg-no-repeat bg-cover"
      >
        <div
          class="size-[118vw] md:size-[35vw] md:mr-[8%] flex justify-center items-center bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-textbg-m.svg)] md:bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-textbg-pc.svg)] bg-no-repeat bg-contain bg-center"
        >
          <div class="w-[65%]">
            <h1 class="title-normal text-center pb-2 md:pb-4">
              {{ $t("lasik.pageTitle") }}
            </h1>
            <p class="text-text text-justify text-base lg:text-xl font-light">
              {{ $t("lasik.introDesc") }}
            </p>
          </div>
        </div>
      </section>
      <section class="principle bg-[#F6FAFD]">
        <div class="wrapper">
          <h2 class="title-normal">{{ $t("lasik.principleTitle") }}</h2>
          <p>{{ $t("lasik.principleDesc") }}</p>
        </div>
      </section>
      <section class="benefits wrapper">
        <h2 class="title-normal mb-8 md:mb-11">
          {{ $t("lasik.benefitsTitle") }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4">
          <div></div>
        </div>
      </section>
      <section
        class="suitable relative before:absolute before:bg-[url(https://statichk.cmermedical.com/smile/lasik/line-animate.svg)] before:w-[175vw] before:h-[70vw] before:bg-no-repeat before:bg-contain before:rotate-[2deg] md:before:-rotate-[10deg] before:-left-[24%] md:before:w-[120vw] md:before:left-0 before:-z-[1]"
      >
        <div class="wrapper text-base md:text-xl font-light">
          <div
            class="border-primary border-1 md:border-2 bg-[linear-gradient(210deg,#FFF_13.8%,#F2F7FF_70.44%)] rounded-full size-[80vw] md:size-[30vw]"
          >
            <h2 class="title-normal mb-6">
              {{ $t("lasik.suitableTitle") }}
            </h2>
            <p>{{ $t("lasik.suitableDesc") }}</p>
          </div>
          <ul></ul>
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
$primary-color: #4570b6;
.title-normal {
  font-size: 20px;
  font-weight: 900;
  color: $primary-color;
}
.banner {
  position: relative;
  &::before {
    position: absolute;
    background-image: url("https://statichk.cmermedical.com/smile/lasik/lasik-banner-bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    aspect-ratio: 1.37 / 1;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
  }
  .title-normal {
    font-size: 30px;
    letter-spacing: 0.1em;
  }
}
</style>
