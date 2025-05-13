
<template>
  <div class="lasik">
    <HeadV2 />

    <div class="new-container container center-Banner">
      <img
        class="d-block mx-auto"
        decoding="async"
        src="https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-pc.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-mb.png  400w,
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-mb.png  640w,
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-pc.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
    </div>

    <section class="ClearVisionBanner">
      <div class="new-container container">
        <div class="ClearVisionBanner-Box">
          <div class="ClearVisionBanner-Box-content">
            <div class="ClearVisionBanner-Box-content-title">
              <h3>老花</h3>
              <p>Presbyopia</p>
            </div>

            <div class="ClearVisionBanner-Box-content-img">
              <img
                src="https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-mb.webp"
                alt=""
              />
              <p><span>「6」字同「8」字</span><span>不能夠一眼分清？</span></p>
            </div>
          </div>
          <div class="ClearVisionBanner-Box-text"></div>
        </div>
      </div>
    </section>

    <div class="top-btnV2" @click="scrollToTopV2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <circle cx="18" cy="18" r="17.5" stroke="#4570B6" />
        <path d="M12.24 12.96H23.76" stroke="#4570B6" />
        <path
          d="M12.8159 24.7681L17.9999 16.9921L23.1839 24.7681"
          stroke="#4570B6"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <FooterV2 />
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import BannerSlider from "@/components/content/home/BannerSliderV2.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    process,
    xtar,
    film,

    FooterV2,
    HeadV2,

    BannerSlider,
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
          content:
            "希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，為受老花困擾人士度身訂造矯視方案，讓客人回復高清視力，改善老花問題。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花手術, 激光矯視老花, 老花激光矯視, 老花 激光,老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
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
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-presbyopia",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
      browserTitle: "老花矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "老花矫视 - 希玛微笑矫视中心",
    };
  },

  methods: {
    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    scrollToTopV2() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.windowWidth = window.innerWidth;

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  },
};
</script>



<style >
body {
  overflow-x: hidden;
}
</style>
<style lang="scss" scoped>
:deep(.mt-20) {
  margin-top: 0;
}
:deep(.share-img) {
  margin-top: 0;
}

.d-none {
  display: none;
}
i {
  font-style: normal;
}
.new-container {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 991px) {
  .ClearVisionBanner {
    .ClearVisionBanner-Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ClearVisionBanner-Box-content {
        overflow: hidden;
        // width: 100vw;

        h3 {
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 40.541px;
          font-style: normal;
          font-weight: 250;
          line-height: 0.68;
          letter-spacing: 27.973px;
        }
        .ClearVisionBanner-Box-content-title {
          p {
            margin-top: 10px;

            text-align: center;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 13.432px;
            font-style: normal;
            font-weight: 250;
            line-height: 1.3;
          }
        }
      }
      .ClearVisionBanner-Box-content-img {
        margin-top: 44px;
        max-width: 100vw;
        overflow: hidden;
        position: relative;

        display: flex;
        justify-content: center;

        img {
          min-width: 510px;
          text-align: center;
        }
        p {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.17;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .d-lg-none {
    display: none;
  }
  .d-lg-block {
    display: block;
  }

  // 分享给朋友
  .CaseSharingV2 {
    display: none;
  }
}

@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .UserShare {
    .UserShareContainer {
      .UserShareBox {
        .UserShareBox-list {
          max-width: calc(100vw - calc(100vw - 1320px) / 2);
          width: fit-content;
        }
      }
    }
  }
}

@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1140px) {
  .head-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .d-xl-none {
    display: none;
  }
  .d-xl-block {
    display: block;
  }

  // 向上
  .top-btnV2 {
    position: fixed;
    right: 165px;
    bottom: 140px;
    z-index: 999;
    cursor: pointer;
  }
}
</style>

