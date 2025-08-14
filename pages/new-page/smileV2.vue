
<template>
  <div>
    <div class="page-smile">
      <div class="smile-bg">
        <div class="smile-bg-left"></div>
        <div class="smile-bg-right">
          <div class="smile-bg-right-title">
            <h4>最新情報</h4>
            <p>CATCH UP WITH US</p>
          </div>
          <div class="swiper-container">
            <div class="swiper mySwiper" ref="swiperEl">
              <div class="swiper-wrapper">
                <div
                  v-for="(slide, index) in awardsList"
                  :key="index"
                  class="swiper-slide"
                >
                  <img :src="slide.imgUrl" alt="" />
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="smile-main">
        <!-- SMILE矯正原理 -->
        <section class="section-3">
          <h3><span>SMILE</span>矯正原理</h3>
          <p>
            SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE
            微笑矯視使用<span>Carl Zeiss VisuMax</span
            >激光最新3.0系統，原理是在<span>不用打開角膜瓣</span>的情況下，
            以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人<span>矯正近視、散光及老花</span>問題，減低對眼鏡的依賴。
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>預約諮詢</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M3.19922 26.0597L25.8278 3.43115"
                stroke="#4570B6"
                stroke-width="5.4"
                stroke-linecap="round"
              />
              <path
                d="M6.49609 2.71118H26.5987V22.1512"
                stroke="#4570B6"
                stroke-width="4.86"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </section>

        <section class="section-4">
          <div class="section-4-box">
            <div class="section-4-box-content">
              <!-- 数字列表 -->
              <div class="steps">
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  @mouseover="highlightStep(index)"
                  @click="highlightStep(index)"
                  :class="{ active: activeStep === index }"
                >
                  {{ step.number }}
                </div>
              </div>

              <!-- 内容区域 -->
              <div class="content-area">
                <div v-if="activeStep >= 0">
                  <div class="content-area-title">
                    <p>
                      <span>SMILE</span><br />
                      矯正步驟
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M0.726577 1.2312L17.593 18.0976"
                        stroke="#4570B6"
                        stroke-width="1.34165"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18.1296 3.68896L18.1296 18.6727L3.63983 18.6727"
                        stroke="#4570B6"
                        stroke-width="1.34165"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="content-area-img">
                    <img
                      class="d-xl-none"
                      :src="steps[activeStep].image"
                      alt=""
                    />
                    <img
                      class="d-none d-xl-block"
                      :src="steps[activeStep].imagePc"
                      alt=""
                    />

                    <p class="content-area-text">
                      {{ steps[activeStep].text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <FooterV2 class="footer-smile" />
  </div>
</template>
<script>
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

export default {
  components: {
    FooterV2,
  },
  data() {
    return {
      awardsList: [
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-1.avif",
        },
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-1.avif",
        },
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-1.avif",
        },
      ],
      swiper: null, // 保存实例
      isSwiperLoaded: false, // 标记 Swiper 是否已加载

      activeStep: 0, // 当前激活的步骤索引
      activeStepTimer: null,
      interval: 3000,
      steps: [
        {
          number: "01",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro1.webp",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-mobile-intro1.webp",
          text: "進行手術前，醫生先在客人眼睛上滴麻醉及放大瞳孔眼藥水。",
        },
        {
          number: "02",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
          text: "在角膜緣製作一個約3毫米的小開口，將摺疊的晶體植入眼球。",
        },
        {
          number: "03",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
          text: "植入晶體後，醫生會調整晶體的位置，確保在適宜的位置。",
        },
      ],

      canonicalHref:
        "https://smile.hkcmereye.com/vision-correction/relex-smile",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
      browserTitle: "SMILE 微笑激光矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "SMILE 微笑激光矫视 - 希玛微笑矫视中心",
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
          content:
            "SMILE微笑激光矯視是一種全新近視矯正技術，比LASIK激光矯視更安全、更快捷。希瑪微笑矯視中心為你提供免費講座，助你了解更多矯視資訊。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "smile 散光,smile 手術,smile 眼,smile 矯視 散光,矯 視 smile,SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 投考紀律部隊, 眼睛檢查, 眼睛治療 錐形角膜, 角膜膠原交聯手術",
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
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
        },
      ],
    };
  },

  // 页面挂载后初始化
  async mounted() {
    if (process.browser) {
      await this.loadSwiperCDN();
    }
  },

  // 组件销毁前清理
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  },

  methods: {
    highlightStep(index) {
      console.log("index");

      this.activeStep = index; // 更新当前激活的步骤
      this.stopTimer();
    },
    // 开始计时
    startTimer(customInterval) {
      if (!this.activeStepTimer) {
        const interval = customInterval || this.interval;
        this.activeStepTimer = setInterval(() => {
          this.activeStep++;
          if (this.activeStep > 3) {
            this.activeStep = 0; // 超过 4 时回到 0
          }
        }, interval);
      }
    },
    stopTimer() {
      if (this.activeStepTimer) {
        clearInterval(this.activeStepTimer);
        this.activeStepTimer = null;
      }
    },

    /**
     * 动态加载 Swiper CDN 资源
     */
    async loadSwiperCDN() {
      const cssUrl =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      const jsUrl =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

      // 1. 加载 CSS
      await this.loadCSS(cssUrl);

      // 2. 加载 JS 并初始化
      await this.loadScript(jsUrl)
        .then(() => {
          this.initSwiper();
        })
        .catch((err) => {
          console.error("Swiper CDN 加载失败:", err);
        });
    },

    /**
     * 动态加载 CSS
     */
    loadCSS(href) {
      return new Promise((resolve, reject) => {
        // 避免重复加载
        if (document.querySelector(`link[href="${href}"]`)) {
          resolve();
          return;
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`CSS 加载失败: ${href}`));
        document.head.appendChild(link);
      });
    },

    /**
     * 动态加载 JS
     */
    loadScript(src) {
      return new Promise((resolve, reject) => {
        // 避免重复加载
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script 加载失败: ${src}`));
        document.head.appendChild(script);
      });
    },

    /**
     * 初始化 Swiper
     */
    initSwiper() {
      // 确保 window.Swiper 已存在
      if (typeof window.Swiper === "undefined") {
        console.warn("Swiper 未加载完成，重试...");
        setTimeout(this.initSwiper, 50); // 递归重试
        return;
      }

      // 初始化
      this.swiper = new window.Swiper(this.$refs.swiperEl, {
        effect: "cards", // 卡片效果
        grabCursor: true, // 抓手光标
        loop: true, // 开启无限循环

        pagination: {
          el: ".swiper-pagination", // 对应上面的 DOM
          clickable: true, // 可点击切换
          type: "bullets", // 类型：圆点
        },

        autoplay: {
          delay: 0, // 延迟时间为 0，立即开始滚动
          disableOnInteraction: false, // 用户操作后不停止自动播放
        },
        speed: 3000, // 滚动速度（单位：毫秒）
      });

      this.isSwiperLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-smile {
  position: relative;
}
.smile-bg {
  width: 100vw;
  height: 100vh;
  background: url("http://statichk.cmermedical.com/smile/smileV2/smile-bg.avif")
    no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0%;

  left: 0;
  display: flex;
  align-items: center;
  gap: 40vw; /* 767 / 1920 * 100 = 40 */

  .smile-bg-left {
    width: 29.6875vw; /* 570 / 1920 * 100 */
    height: 100%;
    background: rgb(12, 201, 12);
  }

  .smile-bg-right {
    width: 30vw; /* 576 / 1920 * 100 ≈ 30 */
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .smile-bg-right-title {
      padding-left: 5.2083vw; /* 100 / 1920 * 100 ≈ 5.2083 */
      margin-bottom: 1.25vw; /* 24 / 1920 * 100 = 1.25 */

      h4 {
        color: #000;
        text-align: left;
        font-family: "Noto Sans TC";
        font-size: 1.3139vw; /* 25.226 / 1920 * 100 ≈ 1.3139 */
        font-style: normal;
        font-weight: 300;
        line-height: 200%; /* 保持不变 */
        letter-spacing: 0.6568vw; /* 1.261 / 1920 * 100 ≈ 0.6568 */

        &::before {
          content: "";
          display: inline-block;
          margin-right: 0.5208vw; /* 10 / 1920 * 100 ≈ 0.5208 */
          width: 0.78125vw; /* 15 / 1920 * 100 = 0.78125 */
          height: 0.78125vw; /* 15 / 1920 * 100 = 0.78125 */
          flex-shrink: 0;
          background: #4570b6;
          border-radius: 50%;
        }
      }

      p {
        color: #4570b6;
        text-align: center;
        font-family: "ITC Avant Garde Gothic Pro";
        font-size: 1.2104vw; /* 23.23 / 1920 * 100 ≈ 1.2104 */
        font-style: normal;
        font-weight: 700;
        line-height: 217%; /* 保持不变 */
        letter-spacing: 1.16px; /* 1.161 / 1920 * 100 ≈ 0.6047 */
      }
    }

    .swiper-container {
      overflow: visible;
      .mySwiper {
        width: 20.8333vw; /* 400 / 1920 * 100 ≈ 20.8333 */
        .swiper-wrapper {
          .swiper-slide {
            overflow: hidden;
          }
          .swiper-pagination {
            bottom: -1.3021vw; /* -25 / 1920 * 100 ≈ -1.3021 */
          }
        }
      }
    }
  }
}

:deep(.swiper-3d .swiper-slide-shadow) {
  display: none !important;
}

.smile-main {
  width: 40vw; /* 767 / 1920 * 100 = 40 */
  background: white;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  height: 300vh;
  border-left: 0.0781vw solid #4570b6; /* 1.5 / 1920 * 100 ≈ 0.0781 */
  border-right: 0.0781vw solid #4570b6; /* 1.5 / 1920 * 100 ≈ 0.0781 */

  .section-3 {
    width: 100%;
    padding: 81px 0;

    background: #4570b6;
    position: relative;
    h3 {
      color: #fff;
      font-family: "Noto Sans HK";
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 30px;
      span {
      }
    }
    p {
      margin-left: auto;
      margin-right: auto;
      margin-top: 27px;
      max-width: 559px;
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 175%;
      letter-spacing: 1px;
      span {
        font-weight: 900;
      }
    }

    a {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      display: flex;
      width: fit-content;
      align-items: center;
      gap: 9px;
      padding: 7px 32px;
      background: #fff;
      border: 3px solid #456eb6;
      border-radius: 80px;

      span {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans TC";
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 175%;
        letter-spacing: 1.8px;
      }
    }
  }
  .section-4 {
    background: #4570b6;
    .section-4-box {
      border-radius: 20px 20px 0 0;
      background: white;
      .section-4-box-content {
        .steps {
          width: 647px;
          margin: 0 auto;
          display: flex;
          gap: 36px;
          & > div {
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .footer-smile {
    margin-top: 0 !important;
    position: relative;
    z-index: 5;
  }
}
</style>
