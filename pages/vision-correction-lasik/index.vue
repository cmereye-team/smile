<template>
  <div>
    <Header />
    <main>
      <section
        class="banner wrapper relative mt-20 md:mt-40 pb-4 md:pb-7 px-5 flex justify-between items-end"
      >
        <div
          class="banner-bg before:absolute before:aspect-[1.37/1] before:w-[37.982vw] xl:before:w-[22.083vw] before:max-w-[220px] xl:before:max-w-none before:bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-banner-bg.svg)] before:bg-no-repeat before:bg-contain before:bg-center before:-z-[1]"
        >
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
            <p
              class="text-[clamp(0.438rem,0.214rem_+_1.12vw,0.75rem)] md:text-[clamp(1.25rem,-0.625rem_+_3.91vw,1.875rem)]"
            >
              Laser-Assisted in Situ Keratomileusis
            </p>
          </div>
          <div
            class="tracking-wide text-text text-xs md:text-xl font-light leading-[3] md:leading-loose whitespace-nowrap"
          >
            <a href="/">{{ $t("home.headers.home") }}</a>
            &gt;&nbsp;<span>{{ $t("home.headers.orthopedicServices") }}</span>
            &gt;&nbsp;<span class="text-primary font-medium">{{
              $t("lasik.pageTitle")
            }}</span>
          </div>
        </div>
        <div
          class="h-fit text-white text-xs md:text-xl font-light whitespace-nowrap absolute right-3 bottom-[52px] md:bottom-[72px]"
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
          class="intro-main relative size-[110vw] md:size-[35vw] aspect-square md:min-w-[440px] md:min-h-[440px] lg:min-w-[480px] lg:min-h-[480px] md:mr-[8%] border-primary border-[2px] rounded-full flex justify-center items-center"
        >
          <div
            class="size-[88%] bg-white rounded-full relative flex justify-center items-center"
          >
            <div
              class="size-full absolute before:absolute before:animate-bounce before:size-full before:content-[''] before:bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-crosshair-m.svg)] md:before:bg-[url(https://statichk.cmermedical.com/smile/lasik/lasik-intro-crosshair-pc.svg)] before:bg-no-repeat before:bg-cover before:bg-center"
            ></div>
            <div class="w-[65%] z-10">
              <h1 class="title-normal text-center pb-2 md:pb-4">
                {{ $t("lasik.pageTitle") }}
              </h1>
              <p class="text-text text-justify text-base lg:text-xl font-light">
                {{ $t("lasik.introDesc") }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="principle bg-[#F6FAFD] pt-10 pb-8 md:py-[72px] mb-16">
        <div class="wrapper px-6 xl:px-3 2xl:px-0">
          <h2 class="title-normal">{{ $t("lasik.principleTitle") }}</h2>
          <div
            class="grid grid-cols-2 md:grid-cols-4 mb-5 md:mb-[72px] gap-x-[21.538vw] gap-y-14 md:gap-[7%]"
            role="list"
          >
            <div
              class="principle-item relative flex flex-col justify-between w-full"
              role="listitem"
              v-for="(item, index) in principleList"
              :key="index"
            >
              <span class="principle-num font-en">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              <img :src="item" :alt="`步驟${index + 1}`" class="w-full" />
            </div>
          </div>
          <p
            class="w-full md:w-2/3 mx-auto text-text text-base md:text-xl font-light tracking-[0.3em]"
          >
            {{ $t("lasik.principleDesc") }}
          </p>
        </div>
      </section>
      <section id="lasik-benefits" class="benefits wrapper">
        <h2 class="title-normal mb-7 md:mb-[52px]">
          {{ $t("lasik.benefitsTitle") }}
        </h2>
        <ul
          class="grid grid-cols-2 md:grid-cols-4 border-[#4570B6] border md:border-2"
        >
          <!-- FIXME:移动端箭头消失 -->
          <li
            v-for="(item, index) in benefitsList"
            :key="index"
            class="benefits-item aspect-square flex justify-center items-center flex-col"
          >
            <figure>
              <div
                class="size-[68px] md:size-[4.792vw] flex justify-center items-center mb-3 md:mb-[0.625vw] mx-auto"
              >
                <img
                  :src="item.icon"
                  :alt="$t(item.title)"
                  :title="$t(item.title)"
                  loading="lazy"
                  class="size-full object-contain"
                />
              </div>
              <figcaption>
                <h3
                  class="mb-2 md:mb-[0.625vw] tracking-widest md:tracking-[0.35em] text-lg md:text-[clamp(1.25rem,0.833rem_+_0.87vw,1.875rem)] text-primary font-bold text-center"
                >
                  {{ $t(item.title) }}
                </h3>
                <p
                  class="text-base md:text-[clamp(1rem,0.667rem_+_0.69vw,1.5rem)] font-light text-text text-center tracking-[0.15em] md:tracking-[0.2em] leading-[18px] md:leading-normal"
                  v-html="$t(item.text).join('<br/>')"
                ></p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section
        id="lasik-suitable"
        class="suitable overflow-hidden pt-20 md:pt-40 xl:pt-[220px] lg:mb-[152px] relative before:absolute before:bg-[url(https://statichk.cmermedical.com/smile/lasik/line-animate-m.svg)] md:before:bg-[url(https://statichk.cmermedical.com/smile/lasik/line-animate-pc.svg)] before:w-[120vw] before:h-[80vw] before:bg-no-repeat before:bg-contain before:rotate-[2deg] md:before:-rotate-[10deg] before:-left-0 md:before:w-[120vw] before:-z-[1] md:before:-left-[12vw] md:before:top-[5%]"
      >
        <div
          class="suitable-bg wrapper text-base md:text-xl font-light mb-8 md:mb-[clamp(15rem,-2.391rem_+_36.23vw,27.5rem)] relative after:absolute after:bg-[url(https://statichk.cmermedical.com/smile/lasik/tumbling-e.svg)] after:bg-contain after:bg-no-repeat after:size-[22.564vw] md:after:size-[9.375vw] after:-rotate-[42deg] md:after:-rotate-[15deg] after:-top-20 after:right-1 md:after:-top-24 after:max-w-[180px] after:max-h-[180px]"
        >
          <div
            class="suitable-intro border-primary border md:border-[2px] bg-[linear-gradient(210deg,#FFF_13.8%,#F2F7FF_70.44%)] rounded-full aspect-square h-auto w-[80vw] md:w-[55vw] lg:w-[45vw] xl:w-1/2 pt-[15%] md:pt-[8%] xl:pt-[15%] -mb-[30%] md:-mb-[40%] mx-auto"
          >
            <h2 class="title-normal mb-0">
              {{ $t("lasik.suitableTitle") }}
            </h2>
            <p
              class="suitable-desc whitespace-pre-line text-primary text-center tracking-[0.25em]"
            >
              {{ $t("lasik.suitableDesc") }}
            </p>
          </div>
          <ul
            role="list"
            class="suitable-list flex flex-wrap justify-center px-3"
          >
            <li
              role="listitem"
              v-for="(item, index) in suitableList"
              :key="index"
              class="suitable-item"
            >
              <figure>
                <div
                  class="flex justify-center items-center size-[16.41vw] md:size-[6.25vw] md:max-w-[120px] md:max-h-[120px] mx-auto mb-2 md:mb-2"
                >
                  <img
                    :src="item.icon"
                    alt=""
                    class="size-full object-contain"
                  />
                </div>
                <figcaption>
                  <p
                    v-html="formatText(item)"
                    class="text-text text-center leading-[1.1] lg:leading-relaxed"
                  ></p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-07)%20LASIK%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
          target="_blank"
          class="flex justify-center items-center gap-2 md:gap-4 bg-primary text-white text-xl md:text-4xl w-fit mx-auto rounded-[100px] md:rounded-[180px] py-3 px-8 md:py-7 md:px-14"
        >
          <span>{{ $t("lasik.btn") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M2.69922 25.7785L25.3278 3.1499"
              stroke="white"
              stroke-width="5.4"
              stroke-linecap="round"
            />
            <path
              d="M5.99609 2.42993H26.0987V21.8699"
              stroke="white"
              stroke-width="4.86"
              stroke-linecap="round"
            />
          </svg>
        </a>
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
  data() {
    return {
      isMobile: true,
      principleList: [
        "https://statichk.cmermedical.com/smile/lasik/lasik-principle-01.svg",
        "https://statichk.cmermedical.com/smile/lasik/lasik-principle-02.svg",
        "https://statichk.cmermedical.com/smile/lasik/lasik-principle-03.svg",
        "https://statichk.cmermedical.com/smile/lasik/lasik-principle-04.svg",
      ],
      benefitsList: [
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-01.svg",
          title: "lasik.benefits.content1.title",
          text: "lasik.benefits.content1.text",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-02.svg",
          title: "lasik.benefits.content2.title",
          text: "lasik.benefits.content2.text",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-03.svg",
          title: "lasik.benefits.content3.title",
          text: "lasik.benefits.content3.text",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-04.svg",
          title: "lasik.benefits.content4.title",
          text: "lasik.benefits.content4.text",
        },
      ],
      suitableList: [
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-01.svg",
          text: "lasik.suitable.content1.text",
          pcText: "lasik.suitable.content1.pcText",
          mbText: "lasik.suitable.content1.mbText",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-02.svg",
          text: "lasik.suitable.content2.text",
          pcText: "lasik.suitable.content2.pcText",
          mbText: "lasik.suitable.content2.mbText",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-03.svg",
          text: "lasik.suitable.content3.text",
          pcText: "lasik.suitable.content3.pcText",
          mbText: "lasik.suitable.content3.mbText",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-04.svg",
          text: "lasik.suitable.content4.text",
          pcText: "lasik.suitable.content4.pcText",
          mbText: "lasik.suitable.content4.mbText",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-05.svg",
          text: "lasik.suitable.content5.text",
          pcText: "lasik.suitable.content5.pcText",
          mbText: "lasik.suitable.content5.mbText",
        },
      ],
    };
  },
  mounted() {
    this.checkScreen();
    this.onResize = this.debounce(this.checkScreen, 200);
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    if (process.client && this.onResize) {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    /**
     * @description: 监测屏幕大小判断是否移动端
     * @return {boolean}
     */
    checkScreen() {
      this.isMobile = window.innerWidth < 1024;
    },
    /**
     * @description: 防抖函数
     * @param {Function} fn 需加持的函数
     * @param {number} delay 防抖毫秒
     * @return {Function}
     */
    debounce(fn, delay) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    },
    /**
     * @description: 格式化合适对象的描述文本
     * @param {Array} item
     * @return {string}
     */
    formatText(item) {
      const key = this.isMobile ? item.mbText : item.pcText;
      const content = this.$t(key);
      return Array.isArray(content) ? content.join("<br/>") : content;
    },
  },
};
</script>
<style lang="scss" scoped>
$primary-color: #4570b6;
@mixin pseudo-bg($z: 0, $w: auto, $h: auto) {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  width: $w;
  height: $h;
  z-index: $z;
}
@keyframes moveAiming {
  14.28% {
    rotate: 10deg;
    transform: translate(#{"clamp(7.5rem, 3.026rem + 22.37vw, 13.75rem)"}, 0);
  }
  28.56% {
    transform: translate(
      #{"clamp(7.5rem, 3.026rem + 22.37vw, 13.75rem)"},
      100px
    );
    rotate: -10deg;
  }
  42.84% {
    transform: translate(0, 80px);
    rotate: 10deg;
  }
  57.12% {
    rotate: -10deg;
    transform: translate(0, 0);
  }
  100% {
    rotate: -10deg;
    transform: translate(0, 0);
  }
}
@keyframes rotateCenter {
  // 0% (0s) -> 6.25% (0.5s): 旋转 90 度
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  6.25% {
    /* 0.5s / 8s = 6.25% */
    transform: translate(-50%, -50%) rotate(90deg);
  }

  // 6.25% -> 25% (2s): 暂停 1.5 秒
  25% {
    /* 2s / 8s = 25% */
    transform: translate(-50%, -50%) rotate(90deg); /* 保持在 90 度 */
  }

  // 25% (2s) -> 31.25% (2.5s): 旋转到 180 度
  31.25% {
    /* 2.5s / 8s = 31.25% */
    transform: translate(-50%, -50%) rotate(180deg);
  }

  // 31.25% -> 50% (4s): 暂停 1.5 秒
  50% {
    /* 4s / 8s = 50% */
    transform: translate(-50%, -50%) rotate(180deg); /* 保持在 180 度 */
  }

  // 50% (4s) -> 56.25% (4.5s): 旋转到 270 度
  56.25% {
    /* 4.5s / 8s = 56.25% */
    transform: translate(-50%, -50%) rotate(270deg);
  }

  // 56.25% -> 75% (6s): 暂停 1.5 秒
  75% {
    /* 6s / 8s = 75% */
    transform: translate(-50%, -50%) rotate(270deg); /* 保持在 270 度 */
  }

  // 75% (6s) -> 81.25% (6.5s): 旋转到 360 度
  81.25% {
    /* 6.5s / 8s = 81.25% */
    transform: translate(-50%, -50%) rotate(360deg);
  }

  // 81.25% -> 100% (8s): 暂停 1.5 秒，等待循环
  100% {
    /* 8s / 8s = 100% */
    transform: translate(-50%, -50%) rotate(360deg); /* 保持在 360 度 */
  }
}
:deep(.new-Footer-v2) {
  margin-top: 0;
}
:deep(.new-Footer-v2 section) {
  margin-top: 33px;
}
:deep(.share) {
  padding: 72px 0 32px;
}
.title-normal {
  font-size: 20px;
  font-weight: 900;
  color: $primary-color;
}
.banner {
  position: relative;
  .banner-bg {
    &::before {
      animation: moveAiming 7s linear infinite;
      top: -8px;
      left: #{"clamp(7.5rem, 3.026rem + 22.37vw, 13.75rem)"};
      rotate: -10deg;
    }
  }
}
.intro {
  .intro-main {
    &::before {
      @include pseudo-bg(1, 107%, 107%);
      animation: rotateCenter 10s linear infinite;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYzIiBoZWlnaHQ9Ijc2MyIgdmlld0JveD0iMCAwIDc2MyA3NjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zODEuMjUxIDBMMzUxLjQ2MSAxNS42OEg0MTEuMDMxTDM4MS4yNTEgMFoiIGZpbGw9IiM0NTcwQjYiLz4KPHBhdGggZD0iTTM4MS4yNTEgNzYyLjQ5TDM1MS40NjEgNzQ2LjgySDQxMS4wMzFMMzgxLjI1MSA3NjIuNDlaIiBmaWxsPSIjNDU3MEI2Ii8+CjxwYXRoIGQ9Ik0wIDM4MS4yNUwxNS42OCA0MTEuMDNWMzUxLjQ2TDAgMzgxLjI1WiIgZmlsbD0iIzQ1NzBCNiIvPgo8cGF0aCBkPSJNNzYyLjUgMzgxLjI1TDc0Ni44MiA0MTEuMDNWMzUxLjQ2TDc2Mi41IDM4MS4yNVoiIGZpbGw9IiM0NTcwQjYiLz4KPC9zdmc+Cg==");
    }
    &::after {
      @include pseudo-bg(1, 95%, 95%);
      animation: rotateCenter 10s linear infinite;
      animation-delay: 0.5s;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjc0IiBoZWlnaHQ9IjY3NCIgdmlld0JveD0iMCAwIDY3NCA2NzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zNjYuNjMxIDBIMzA3LjA2MVY0LjkzMDAxSDM2Ni42MzFWMFoiIGZpbGw9IiM0NTcwQjYiLz4KPHBhdGggZD0iTTM2Ni42MzEgNjY4Ljc2SDMwNy4wNjFWNjczLjY5SDM2Ni42MzFWNjY4Ljc2WiIgZmlsbD0iIzQ1NzBCNiIvPgo8cGF0aCBkPSJNMCAzMDcuMDdMMCAzNjYuNjRINC45Mjk5OUw0LjkyOTk5IDMwNy4wN0gwWiIgZmlsbD0iIzQ1NzBCNiIvPgo8cGF0aCBkPSJNNjY4Ljc3IDMwNy4wNlYzNjYuNjNINjczLjdWMzA3LjA2SDY2OC43N1oiIGZpbGw9IiM0NTcwQjYiLz4KPC9zdmc+Cg==");
    }
  }
}
.benefits {
  .benefits-item {
    &:nth-child(-n + 2) {
      border-bottom: 1px solid $primary-color;
    }
    &:nth-child(odd) {
      border-right: 1px solid $primary-color;
    }
  }
}
.principle {
  .principle-item {
    &:nth-child(3) {
      order: 4;
    }
    &:nth-child(4) {
      order: 3;
    }
  }
  .principle-num {
    font-size: 12.308vw;
    font-weight: 700;
    -webkit-text-stroke-color: $primary-color;
    -webkit-text-stroke-width: 0.5px;
    color: transparent;
    line-height: 1;
  }
}
.suitable {
  .suitable-intro {
    position: relative;
    &::before {
      @include pseudo-bg(10, 25.641vw, 51.282vw);
      top: -18%;
      left: -12%;
      background-image: url("https://statichk.cmermedical.com/smile/lasik/playing-basketball.svg");
    }
    &::after {
      @include pseudo-bg(-1, 20vw, 55.385vw);
      top: -68px;
      left: 18%;
      background-image: url("https://statichk.cmermedical.com/smile/lasik/basketball-stick.svg");
    }
  }
  .suitable-list {
    position: relative;
    &::before {
      @include pseudo-bg(10, 34.872vw, 18.462vw);
      background-image: url("https://statichk.cmermedical.com/smile/lasik/optometry.svg");
      rotate: 22deg;
      left: -30px;
      bottom: 8%;
      max-width: 388px;
      max-height: 300px;
    }
    &::after {
      @include pseudo-bg(10, 21.538vw, 28.718vw);
      background-image: url("https://statichk.cmermedical.com/smile/lasik/reading.svg");
      rotate: 5deg;
      right: 18px;
      bottom: 22%;
    }
  }
  .suitable-item {
    width: 54%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1px solid $primary-color;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 767px) {
  .principle {
    .principle-item {
      &::before {
        position: absolute;
        content: "";
        background-repeat: no-repeat;
        background-size: contain;
        width: 27.692vw;
        height: 3.077vw;
      }
      &:nth-child(1) {
        &::before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMTAgMTMiIGZpbGw9Im5vbmUiPgogIDxwYXRoIGQ9Ik0xMDguODc1IDEyLjM5ODNMOTYuNzEwOSAwLjIzMzk0OCIgc3Ryb2tlPSIjNDU3MEI2IiBzdHJva2Utd2lkdGg9IjAuNDY3ODYxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSB4MT0iLTIuMDQ1MDllLTA4IiB5MT0iMTIuNDA2NSIgeDI9IjEwOC44NzYiIHkyPSIxMi40MDY1IiBzdHJva2U9IiM0NTcwQjYiIHN0cm9rZS13aWR0aD0iMC40Njc4NjEiLz4KPC9zdmc+");
          left: 100%;
          top: 60%;
        }
      }
      &:nth-child(2) {
        &::before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSI3MyIgdmlld0JveD0iMCAwIDE0IDczIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMS4xNTM0NCA3Mi4yMTI5TDEyLjExMDQgNTguOTUwNiIgc3Ryb2tlPSIjNDU3MEI2IiBzdHJva2Utd2lkdGg9IjAuNDY3ODYxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSB4MT0iMC43MDI2ODEiIHkxPSItMS4wMjI1NGUtMDgiIHgyPSIwLjcwMjY4NCIgeTI9IjcyLjUxODUiIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIwLjQ2Nzg2MSIvPgo8L3N2Zz4=");
          width: 3.59vw;
          height: 18.462vw;
          bottom: -20vw;
          right: 35%;
        }
      }
      &:nth-child(3) {
        &::before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMDUgMTMiIGZpbGw9Im5vbmUiPgogIDxwYXRoIGQ9Ik0wLjIzNDA0NyAxMi4zOTgzTDEyLjM5ODQgMC4yMzM4ODciIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIwLjQ2Nzg2MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgeDE9IjAuMjM0Mzc1IiB5MT0iMTIuNjMyMyIgeDI9IjEwNC43OSIgeTI9IjEyLjYzMjMiIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIwLjQ2Nzg2MSIvPgo8L3N2Zz4=");
          right: 90%;
          top: 55%;
        }
      }
    }
  }
  .suitable {
    .suitable-item {
      &:nth-child(2) {
        margin-left: -8%;
        z-index: 10;
      }
      &:nth-child(3) {
        margin-right: -8%;
      }
      &:nth-child(3),
      &:nth-child(4) {
        margin-top: -8%;
      }
      &:nth-child(5) {
        margin-top: -6%;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .title-normal {
    font-size: 30px;
    letter-spacing: 0.1em;
  }
  .banner {
    .banner-bg {
      &::before {
        left: auto;
        right: 20%;
        top: 16px;
      }
    }
  }
  .benefits {
    .benefits-item {
      border-width: 0;
      &:not(:last-child) {
        border-right: 2px solid $primary-color;
      }
    }
  }
  .principle {
    .principle-item {
      &:nth-child(3) {
        order: 3;
      }
      &:nth-child(4) {
        order: 4;
      }
    }
    .principle-num {
      font-size: #{"clamp(3.75rem, 2.083rem + 3.47vw, 6.25rem)"};
      -webkit-text-stroke-width: 1px;
    }
  }
  .suitable {
    .suitable-intro {
      &::before {
        @include pseudo-bg(10, 16vw, 26vw);
        max-width: 166px;
        max-height: 333px;
        left: -44px;
        top: -80px;
      }
      &::after {
        @include pseudo-bg(-1, 14vw, 30vw);
        max-width: 132px;
        max-height: 364px;
      }
    }
    .suitable-list {
      &::before {
        @include pseudo-bg(10, 17.969vw, 9.531vw);
        max-width: 344px;
        max-height: 182px;
        left: -12px;
        bottom: -60%;
      }
      &::after {
        @include pseudo-bg(10, 16vw, 20vw);
        rotate: 2deg;
        right: 27%;
        bottom: -10%;
        max-width: 232px;
        max-height: 288px;
      }
    }
    .suitable-item {
      width: 27%;
      border-width: 2px;
      &:nth-child(even) {
        margin: 0 -9%;
        z-index: 10;
      }
      &:nth-child(1) {
        transform: translate(5%, 0);
      }
      &:nth-child(5) {
        transform: translate(-5%, 0);
      }
      &:nth-child(2) {
        transform: translate(-15%, 75%);
      }
      &:nth-child(4) {
        transform: translate(15%, 75%);
      }
      &:nth-child(3) {
        transform: translate(0, 100%);
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
  }
  .banner {
    .banner-bg {
      &::before {
        top: 48px;
      }
    }
  }
  .suitable {
    .suitable-intro {
      &::after {
        top: -100px;
      }
    }
  }
}
// 小屏优化
@media screen and (max-width: 359px) {
  .suitable {
    .suitable-desc {
      margin-top: -12px;
      letter-spacing: 0.1em;
    }
  }
}
// 大屏优化 1080P
@media screen and (min-width: 1920px) {
  .suitable {
    .suitable-list {
      &::before {
        left: -15%;
      }
    }
  }
}
// 大屏优化 2k
@media screen and (min-width: 2560px) {
  .suitable {
    &::before {
      top: -8vw;
    }
  }
}
</style>
