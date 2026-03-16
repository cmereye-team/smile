<style>
/* 全局样式 */
body {
  overflow-x: hidden;
}
</style>

<style lang="scss" scoped>
/* 变量定义 */
$font-nunito: "Nunito", sans-serif;
$color-white: white;
$color-primary: #4d007d;
$color-yellow: #facc15;
$color-stone-50: #fafaf9;
$color-stone-800: #292524;
@media screen and (min-width:768px) {
   .head-bg{
  position: fixed;
  top: 0;
   background: #ffffff;
}
}


/* 404页面容器 */
.newErrorPage {
  margin-top: 160px;
  height: calc(100vh - 160px);
  background: url("https://statichk.cmermedical.com/smile/error/star.svg"),
    linear-gradient(to bottom, #05007a, #4d007d);
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  /* 火星背景 */
  .mars {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 27vmin;
    background: url("https://statichk.cmermedical.com/smile/error/mars.svg")
      no-repeat bottom center;
    background-size: cover;
  }

  /* 404标志 */
  .logo-404 {
    width: 30vmin;
    margin: 0 auto;
  }

  /* 流星 */
  .meteor {
    position: absolute;
    right: 2vmin;
    top: 16vmin;
  }

  /* 标题文字 */
  .title {
    color: $color-white;
    font-family: $font-nunito;
    font-weight: 600;
    font-size: 5vmin;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  /* 副标题 */
  .subtitle {
    color: $color-white;
    font-family: $font-nunito;
    font-weight: 400;
    font-size: 3.5vmin;
    text-align: center;
    margin: -1vmin 0 9vmin;
    position: relative;
    z-index: 2;
  }

  /* 返回按钮容器 */
  .btn-container {
    position: relative;
    z-index: 2;
  }

  /* 宇航员 */
  .astronaut {
    position: absolute;
    top: 18vmin;
    left: 10vmin;
    height: 30vmin;
    animation: floating 3s infinite ease-in-out;
  }

  /* 太空船 */
  .spaceship {
    position: absolute;
    bottom: 15vmin;
    right: 24vmin;
  }
}

/* 页脚调整 */
.new-Footer-v2 {
  margin-top: 0;
}

/* 返回按钮样式 */
.button-back {
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  line-height: 1;
  font-size: 1rem;
  border-radius: 1rem;
  outline: 2px solid transparent;
  outline-offset: 6px;
  color: $color-stone-50;
  text-decoration: none;

  &:active {
    outline-color: $color-yellow;
  }

  &:focus-visible {
    outline-color: $color-yellow;
    outline-style: dashed;
  }

  /* 星星背景 */
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    height: 200%;
    max-height: 100px;
    aspect-ratio: 1;
    margin: auto;
    background: white;
    clip-path: polygon(
      100% 50%,
      91.48% 56.57%,
      97.55% 65.45%,
      87.42% 69.07%,
      90.45% 79.39%,
      79.7% 79.7%,
      79.39% 90.45%,
      69.07% 87.42%,
      65.45% 97.55%,
      56.57% 91.48%,
      50% 100%,
      43.43% 91.48%,
      34.55% 97.55%,
      30.93% 87.42%,
      20.61% 90.45%,
      20.3% 79.7%,
      9.55% 79.39%,
      12.58% 69.07%,
      2.45% 65.45%,
      8.52% 56.57%,
      0% 50%,
      8.52% 43.43%,
      2.45% 34.55%,
      12.58% 30.93%,
      9.55% 20.61%,
      20.3% 20.3%,
      20.61% 9.55%,
      30.93% 12.58%,
      34.55% 2.45%,
      43.43% 8.52%,
      50% 0%,
      56.57% 8.52%,
      65.45% 2.45%,
      69.07% 12.58%,
      79.39% 9.55%,
      79.7% 20.3%,
      90.45% 20.61%,
      87.42% 30.93%,
      97.55% 34.55%,
      91.48% 43.43%
    );
    animation: star-rotate 4s linear infinite;
    opacity: 0.1;
    transition: opacity 150ms ease;
  }

  &:hover::before {
    opacity: 1;
  }

  /* 按钮层次结构 */
  & > div {
    padding: 2px;
    border-radius: 1rem;
    background-color: $color-yellow;
    transform: translate(-4px, -4px);
    transition: all 150ms ease;
    box-shadow: 0.5px 0.5px 0 0 $color-yellow, 1px 1px 0 0 $color-yellow,
      1.5px 1.5px 0 0 $color-yellow, 2px 2px 0 0 $color-yellow,
      2.5px 2.5px 0 0 $color-yellow, 3px 3px 0 0 $color-yellow,
      0 0 0 2px $color-stone-800, 0.5px 0.5px 0 2px $color-stone-800,
      1px 1px 0 2px $color-stone-800, 1.5px 1.5px 0 2px $color-stone-800,
      2px 2px 0 2px $color-stone-800, 2.5px 2.5px 0 2px $color-stone-800,
      3px 3px 0 2px $color-stone-800, 3.5px 3.5px 0 2px $color-stone-800,
      4px 4px 0 2px $color-stone-800, 0 0 0 4px $color-stone-50,
      0.5px 0.5px 0 4px $color-stone-50, 1px 1px 0 4px $color-stone-50,
      1.5px 1.5px 0 4px $color-stone-50, 2px 2px 0 4px $color-stone-50,
      2.5px 2.5px 0 4px $color-stone-50, 3px 3px 0 4px $color-stone-50,
      3.5px 3.5px 0 4px $color-stone-50, 4px 4px 0 4px $color-stone-50;

    & > div {
      position: relative;
      pointer-events: none;
      border-radius: calc(1rem - 2px);
      background-color: $color-stone-800;

      /* 点状背景 */
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 1rem;
        opacity: 0.1;
        background-image: radial-gradient(
            rgba(255, 255, 255, 0.8) 20%,
            transparent 20%
          ),
          radial-gradient(rgba(255, 255, 255, 1) 20%, transparent 20%);
        background-position: 0 0, 4px 4px;
        background-size: 8px 8px;
        mix-blend-mode: hard-light;
        box-shadow: inset 0 0 0 1px $color-stone-800;
        animation: dots 0.4s infinite linear;
        transition: opacity 150ms ease;
      }

      & > div {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0.75rem 1.25rem;
        gap: 0.25rem;
        filter: drop-shadow(0 -1px 0 $color-stone-800);

        &:hover {
          filter: drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.1));
        }

        &:active {
          transform: translateY(2px);
        }
      }
    }
  }

  &:hover > div {
    transform: translate(0, 0);
    box-shadow: 0 0 0 0 $color-yellow, 0 0 0 0 $color-yellow,
      0 0 0 0 $color-yellow, 0 0 0 0 $color-yellow, 0 0 0 0 $color-yellow,
      0 0 0 0 $color-yellow, 0 0 0 2px $color-stone-800,
      0 0 0 2px $color-stone-800, 0 0 0 2px $color-stone-800,
      0 0 0 2px $color-stone-800, 0 0 0 2px $color-stone-800,
      0 0 0 2px $color-stone-800, 0 0 0 2px $color-stone-800,
      0 0 0 2px $color-stone-800, 0 0 0 2px $color-stone-800,
      0 0 0 4px $color-stone-50, 0 0 0 4px $color-stone-50,
      0 0 0 4px $color-stone-50, 0 0 0 4px $color-stone-50,
      0 0 0 4px $color-stone-50, 0 0 0 4px $color-stone-50,
      0 0 0 4px $color-stone-50, 0 0 0 4px $color-stone-50,
      0 0 0 4px $color-stone-50;
  }
}

/* 动画定义 */
@keyframes floating {
  from {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes star-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dots {
  0% {
    background-position: 0 0, 4px 4px;
  }
  100% {
    background-position: 8px 0, 12px 4px;
  }
}

/* 响应式设计 */
@media (max-width: 992px) {
  .new-Footer-v2 {
    margin-top: -60px;
  }

  .newErrorPage {
    margin-top: 80px;
    height: calc(100vh - 180px);

    .astronaut {
      top: 30.77vw;
    }
  }
}

@media (max-width: 480px) {
  .spaceship {
    width: 45vmin;
    bottom: 18vmin;
  }

  .astronaut {
    top: 2vmin;
  }
}

/* 暗色模式 */
@media (prefers-color-scheme: dark) {
  .button-back {
    &:active,
    &:focus-visible {
      outline-color: $color-yellow;
    }
  }
}
</style>


<template>
<no-ssr>
 <div class="lasik">
    <!-- <Head /> -->
    <HeadV2 />

    <div class="newErrorPage">
      <div class="mars"></div>
      <img
        src="https://statichk.cmermedical.com/smile/error/404.svg"
        class="logo-404"
      />
      <img
        src="https://statichk.cmermedical.com/smile/error/meteor.svg"
        class="meteor"
      />
      <div class="title">Oh no!!</div>
      <div class="subtitle" style="position: relative; z-index: 2">
        頁面未找到<br />
      </div>
      <div style="position: relative; z-index: 2">
        <a class="button-back" href="/">
          <div>
            <div>
              <div>返回首頁</div>
            </div>
          </div>
        </a>
      </div>
      <img
        src="https://statichk.cmermedical.com/smile/error/astronaut.svg"
        class="astronaut"
      />
      <img
        src="https://statichk.cmermedical.com/smile/error/spaceship.svg"
        class="spaceship"
      />
    </div>

    <FooterV2 />
    <!-- <Footer /> -->
    <FooterMobile />
  </div>
</no-ssr>
 
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import goTop from "@/components/Publice/goTop.vue";

import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";

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
    suitable,
    share,
    FooterV2,
    HeadV2,
    goTop,
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
            "希瑪微笑矯視中心提供植入式隱形眼鏡 ICL 矯視服務，以創新技術和具生物兼容特質的人工晶體矯正視力，專為深度近視、遠視、散光客人而設。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ICL, icl植入式隱形眼鏡, 植入式隱形眼鏡, evo icl, visian icl, icl 老花,ICL植入式隱形眼鏡, 矯視價錢 香港, 矯視 收費, 香港矯視, 視力矯正, 眼鏡, 隱形眼鏡, 眼科手術, 眼睛健康, 近視, 遠視, 散光, 投考紀律部隊, 微笑激光矯視, 乾眼, ICL 價錢, ICL 收費",
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
      isMobile: false,
      countdown: 5,
      timer: null,
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-icl",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-icl",
      browserTitle: "404-未找到頁面",
      browserTitleCn: "404-未找到頁面",
    };
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.startCountdown();
  },

  methods: {


    startCountdown() {
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          this.clearTimer();
          this.$router.push({
            path: "/",
          });
        }
      }, 1000);
    },

    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
};
</script>

