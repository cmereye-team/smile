<!--
 * @Author: 谭洁莹
 * @Date: 2025-11-19 13:47:22
 * @LastEditTime: 2025-11-19 20:54:22
 * @FilePath: /components/content/icl/Activity2025.vue
 * @Description: ICL2025年终活动
-->
<template>
  <section
    class="activity snow-container bg-[#E6F8FD] text-[#6D6E71] border-[#5BC6BF] border-t-[12px] bg-[url(https://statichk.cmermedical.com/smile/activity/activity-christmas-tree.png)] bg-no-repeat"
  >
    <div class="activity-bg relative">
      <div
        class="activity-main grid p-4 lg:px-0 lg:pt-[52px] w-fit mx-auto relative"
      >
        <div class="[grid-area:text] mb-4 lg:mb-12 lg:pt-5">
          <div class="flex relative gap-4 items-center mb-5 lg:mb-12">
            <div
              class="size-[27.692vw] lg:size-[8.438vw] bg-white border-[#5BC6BF] text-[#4AA2AA] border-1 rounded-full shadow-[2.6px_2.6px_0_#5BC6BF] lg:shadow-[4px_4px_0_#5BC6BF] lg:absolute lg:-top-[128px] lg:-left-[8.888vw]"
            >
              <div
                class="flex flex-col justify-center items-center text-xl lg:text-[1.563vw] font-black -rotate-[12deg] size-full"
              >
                <div><span class="font-en">2025</span>年</div>
                <div>最後驚喜</div>
              </div>
            </div>
            <p class="flex-1 text-[3.59vw] lg:text-xl">
              <span>由即日起於2025年12月31日或之前</span>
              <br />
              <span class="text-[5.128vw] lg:text-3xl"
                >完成<strong class="font-black">ICL</strong
                >植入式隱形眼鏡<br />矯視手術</span
              >
              <span>可獲贈</span>
            </p>
          </div>
          <div
            class="flex text-[6.667vw] lg:text-5xl font-bold mb-4 lg:mb-0 justify-center lg:justify-start items-center"
          >
            <div class="flex flex-col">
              <span class="font-en font-extrabold text-[7.692vw] lg:text-5xl"
                >Stanley</span
              ><span>不鏽鋼保溫杯</span>
            </div>
            <span class="text-[2.821vw] lg:text-lg font-normal self-end"
              >乙隻</span
            >
            <svg
              class="ml-2 lg:ml-0 mr-4 lg:mr-5 size-8 lg:size-[2.708vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <circle cx="26" cy="26" r="26" fill="#5CC7BF" />
              <rect x="22" y="11" width="8" height="30" fill="white" />
              <rect
                x="41"
                y="22"
                width="8"
                height="30"
                transform="rotate(90 41 22)"
                fill="white"
              />
            </svg>
            <span>希瑪仔<br />飲管套</span>
          </div>
        </div>
        <div
          class="[grid-area:button] flex flex-col justify-center items-center xl:items-start gap-3"
        >
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
            class="bg-[#5BC6BF] text-white flex justify-center items-center w-fit py-2 px-8 lg:py-3 lg:px-14 font-black text-xl lg:text-4xl leading-[1.75] tracking-wider rounded-[100px]"
          >
            <span>查詢詳情</span>
            <svg
              class="size-4 lg:size-7 ml-2 lg:ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M2 14.5399L14.5714 1.96851"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M3.83179 1.5686H14.9999V12.3686"
                stroke="white"
                stroke-width="2.7"
                stroke-linecap="round"
              />
            </svg>
          </a>
          <p class="text-[3.59vw] lg:text-xl">
            如有任何爭議，希瑪醫療控股有限公司保留最終決定權
          </p>
        </div>
        <div class="[grid-area:image] relative mb-4 lg:mb-0 activity-image">
          <img
            src="https://statichk.cmermedical.com/smile/activity/activity-icl-cup.png"
            alt=""
            class="w-3/5 lg:w-full ml-[15%] lg:ml-0 lg:max-h-[380px] object-contain"
          />
          <div
            class="absolute left-[70%] top-0 lg:top-1/10 lg:left-[90%] h-full flex flex-col justify-between whitespace-nowrap"
          >
            <div
              class="text-[#5BC6BF] size-[22.564vw] lg:size-[6.042vw] rounded-full border-[#5BC6BF] border text-[11.282vw] lg:text-[3.125vw] font-extrabold flex justify-center items-center"
            >
              送
            </div>
            <div
              class="flex flex-col text-sm lg:text-xl -translate-x-[40%] -translate-y-[20%] md:-translate-x-[30%] lg:-translate-x-[40%] lg:-translate-y-[80%]"
            >
              <span>先到先得</span>
              <span>送完即止</span>
            </div>
          </div>
        </div>
      </div>
      <div class="snow">
        <div
          v-for="n in snowCount"
          :key="n"
          class="snowflake"
          :style="snowStyles[n - 1]"
        ></div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="activity-foot h-[60px] lg:h-[92px] relative"></div>
  </section>
</template>
<style lang="scss" scoped>
@keyframes RotateImage {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
@keyframes StarTwinkle {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@keyframes FallSnow {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  100% {
    transform: translateY(110vh) translateX(var(--swing)) rotate(360deg);
  }
}
.snow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
  .snowflake {
    position: absolute;
    top: -10px;
    background: #5bc6bf;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(91, 198, 191, 0.8);
    animation: FallSnow linear infinite;
  }
}
.activity {
  &::before,
  &::after {
    position: absolute;
    content: "";
    animation: RotateImage 3s linear infinite;
    background-size: contain;
  }
  &::before {
    background-image: url("https://statichk.cmermedical.com/smile/activity/activity-snowflake-1.png");
    width: 20.513vw;
    height: 20.513vw;
    right: 8%;
    top: 10%;
  }
  &::after {
    background-image: url("https://statichk.cmermedical.com/smile/activity/activity-snowflake-2.png");
    width: 21.538vw;
    height: 21.538vw;
    right: -10%;
    top: 15%;
  }
  &-image {
    &::before,
    &::after {
      position: absolute;
      content: "";
      background-size: contain;
      animation: StarTwinkle 3s linear infinite;
    }
    &::before {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDExOSAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03NiA3MEM0Mi45MzUzIDcyLjcyNTEgNDAuNzI1MSA3NC45NDA1IDM4IDEwOEMzNS4yNzQ5IDc0LjkzNTMgMzMuMDU5NSA3Mi43MjUxIDEuMzUwMjZlLTA3IDcwQzMzLjA1OTUgNjcuMjc0OSAzNS4yNjk3IDY1LjA2NDcgMzcuOTk0OCAzMkM0MC43MTk5IDY1LjA2NDcgNDIuOTM1MyA2Ny4yNzQ5IDc1Ljk5NDggNzBMNzYgNzBaIiBmaWxsPSIjNUJDNkJGIi8+CjxwYXRoIGQ9Ik0xMTkgMjFDMTAwLjcyNyAyMi41MDYgOTkuNTA2IDIzLjczMDMgOTggNDJDOTYuNDk0IDIzLjcyNzQgOTUuMjY5NyAyMi41MDYgNzcgMjFDOTUuMjY5NyAxOS40OTQgOTYuNDkxMiAxOC4yNzI2IDk3Ljk5NzEgLTcuNDYwOTZlLTA4Qzk5LjUwMzEgMTguMjcyNiAxMDAuNzI3IDE5LjQ5NCAxMTguOTk3IDIxTDExOSAyMVoiIGZpbGw9IiM1QkM2QkYiLz4KPC9zdmc+Cg==");
      width: 22.564vw;
      height: 22.564vw;
      left: 10%;
    }
    &::after {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjEwMyIgdmlld0JveD0iMCAwIDEwNyAxMDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNTY4OV85NzgwKSI+CjxwYXRoIGQ9Ik0zMC45OTk4IDg3LjQ5ODlDMTcuNTEzOCA4OC42MTA0IDE2LjYxMjQgODkuNTE0IDE1LjUwMDkgMTAyLjk5OEMxNC4zODk0IDg5LjUxMTkgMTMuNDg1OCA4OC42MTA0IDAuMDAxOTUzMTggODcuNDk4OUMxMy40ODU4IDg2LjM4NzUgMTQuMzg3MyA4NS40ODYgMTUuNDk4OCA3MkMxNi42MTAyIDg1LjQ4NiAxNy41MTM4IDg2LjM4NzUgMzAuOTk3NyA4Ny40OTg5TDMwLjk5OTggODcuNDk4OVoiIGZpbGw9IiM1QkM2QkYiLz4KPC9nPgo8cGF0aCBkPSJNMTA3IDM4QzczLjkzNTMgNDAuNzI1MSA3MS43MjUxIDQyLjk0MDUgNjkgNzZDNjYuMjc0OSA0Mi45MzUzIDY0LjA1OTUgNDAuNzI1MSAzMSAzOEM2NC4wNTk1IDM1LjI3NDkgNjYuMjY5NyAzMy4wNjQ3IDY4Ljk5NDggLTEuMzUwMDhlLTA3QzcxLjcxOTkgMzMuMDY0NyA3My45MzUzIDM1LjI3NDkgMTA2Ljk5NSAzOEwxMDcgMzhaIiBmaWxsPSIjNUJDNkJGIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1Njg5Xzk3ODAiPgo8cmVjdCB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDcyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
      width: 20.513vw;
      height: 20.513vw;
      animation-delay: 1.5s;
      right: 5%;
      bottom: 20%;
    }
  }
  &-foot {
    background: linear-gradient(to bottom, #e6f8fd 0%, #fff 100%);
    &::before {
      background: url("https://statichk.cmermedical.com/smile/activity/activity-bg-snows.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
  }
}
@media screen and (max-width: 1139px) {
  .activity {
    background-position: -20px calc(100% - 108px);
    background-size: 25%;
    &-main {
      grid-template-areas: "text" "image" "button";
    }
  }
}
@media screen and (min-width: 1140px) {
  .activity {
    background-position: 10vw 60px;
    &::before {
      width: 192px;
      height: 192px;
      right: 15%;
      top: 0;
    }
    &::after {
      width: 204px;
      height: 204px;
      right: 8%;
      top: 4%;
    }
    &-main {
      grid-template-areas: "text image" "button image";
    }
    &-image {
      &::before {
        width: 120px;
        height: 120px;
        left: 3%;
      }
      &::after {
        width: 108px;
        height: 108px;
        right: -22%;
        bottom: 25%;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      snowCount: 15,
      snowStyles: [],
    };
  },
  mounted() {
    this.generateSnowStyles();
  },
  methods: {
    generateSnowStyles() {
      const styles = [];
      for (let i = 0; i < this.snowCount; i++) {
        const left = Math.random() * 100;
        const size = 3 + Math.random() * 3; // 3~6px
        const duration = 8 + Math.random() * 15; // 8~23s 下落时间，越慢越飘
        const delay = Math.random() * 10; // 0~10s 延迟，错开出现
        const swing = Math.random() * 160 - 80; // -80 ~ +80px 左右摇摆幅度
        const opacity = 0.6 + Math.random() * 0.4; // 0.6~1.0 透明度变化，更有层次
        const blur = Math.random() * 4; // 0~4px 轻微模糊，远处感觉

        styles.push({
          left: `${left}vw`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          "--swing": `${swing}px`,
          opacity,
          filter: `blur(${blur}px)`,
        });
      }
      this.snowStyles = styles;
    },
  },
};
</script>
