<template>
  <div class="smile-pro-container">
    <!-- 四个可拖拽元素 -->
    <div
      v-for="(item, index) in dragItems"
      :key="index"
      ref="dragItems"
      class="smile-pro-drag-item"
      :style="{ display: item.visible ? 'block' : 'none' }"
    >
      <img :src="item.image" :alt="`元素${index + 1}`" />
      <div class="draggable-item-text">
        <p v-for="i in item.text" :key="i">{{ i }}</p>
      </div>
    </div>

    <!-- 中间目标区域 -->
    <div ref="targetArea" class="smile-pro-target-area">
      <svg
        ref="folderImage"
        xmlns="http://www.w3.org/2000/svg"
        width="117"
        height="95"
        viewBox="0 0 117 95"
        fill="none"
      >
        <g clip-path="url(#clip0_10435_164)">
          <path
            d="M0 86.8689V7.00284C0 3.13517 3.13365 0 6.99943 0H33.1528C34.9874 0 36.7722 0.598043 38.2365 1.70379L46.2278 7.73884C47.692 8.84459 49.4769 9.44264 51.3114 9.44264H109.492C113.358 9.44264 116.492 12.5778 116.492 16.4455V86.8682C116.492 90.9929 113.15 94.336 109.027 94.336H7.4642C3.34153 94.336 0 90.9929 0 86.8682V86.8689Z"
            fill="url(#paint0_linear_10435_164)"
          />
          <path
            d="M108.947 94.3364L7.53066 94.3364C3.3744 94.3364 -2.28882e-05 90.9604 -2.28882e-05 86.8021L-2.28882e-05 23.6518C-2.28882e-05 19.7877 3.13572 16.6497 6.99871 16.6497L109.479 16.6497C113.341 16.6497 116.478 19.7869 116.478 23.6518L116.478 86.8014C116.478 90.9597 113.103 94.3357 108.947 94.3357V94.3364Z"
            fill="url(#paint1_linear_10435_164)"
          />
          <path
            d="M109.479 16.6499H6.99873C3.13365 16.6499 0 19.7851 0 23.652V24.2977C0 20.4307 3.13365 17.2956 6.99873 17.2956H109.479C113.344 17.2956 116.478 20.4307 116.478 24.2977V23.652C116.478 19.7851 113.344 16.6499 109.479 16.6499Z"
            fill="#A7DDFC"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_10435_164"
            x1="58.2458"
            y1="11.6969"
            x2="58.2458"
            y2="19.7788"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7AC6F0" />
            <stop offset="0.63" stop-color="#519ED7" />
            <stop offset="1" stop-color="#3E8CCC" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_10435_164"
            x1="58.2388"
            y1="70.6598"
            x2="58.2388"
            y2="110.392"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#80CFFB" />
            <stop offset="1" stop-color="#3983C7" />
          </linearGradient>
          <clipPath id="clip0_10435_164">
            <rect width="116.492" height="94.3367" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p class="folderText">你適合做SMILE Pro嗎?</p>
    </div>

    <!-- 成功后的内容 -->
    <div
      class="smile-pro-success-content"
      :style="{
        opacity: showSuccess ? 1 : 0,
        pointerEvents: showSuccess ? 'auto' : 'none',
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="117"
        height="95"
        viewBox="0 0 117 95"
        fill="none"
      >
        <path
          d="M0 86.8677V7.00275C0 3.13513 3.1336 0 6.99934 0H33.1524C34.9869 0 36.7717 0.598035 38.236 1.70377L46.2271 7.73874C47.6914 8.84448 49.4762 9.44251 51.3108 9.44251H109.491C113.356 9.44251 116.49 12.5776 116.49 16.4453V86.867C116.49 90.9917 113.149 94.3348 109.026 94.3348H7.46409C3.34148 94.3348 0 90.9917 0 86.867V86.8677Z"
          fill="url(#paint0_linear_11050_201)"
        />
        <path
          d="M108.945 94.3354L7.53066 94.3354C3.37445 94.3354 7.62939e-05 90.9594 7.62939e-05 86.8012L7.62939e-05 23.6518C7.62939e-05 19.7877 3.13577 16.6497 6.99871 16.6497L109.477 16.6497C113.34 16.6497 116.476 19.787 116.476 23.6518L116.476 86.8005C116.476 90.9587 113.102 94.3347 108.945 94.3347V94.3354Z"
          fill="url(#paint1_linear_11050_201)"
        />
        <path
          d="M109.477 16.6499H6.99864C3.1336 16.6499 0 19.785 0 23.652V24.2976C0 20.4307 3.1336 17.2956 6.99864 17.2956H109.477C113.342 17.2956 116.476 20.4307 116.476 24.2976V23.652C116.476 19.785 113.342 16.6499 109.477 16.6499Z"
          fill="#A7DDFC"
        />
        <path
          d="M44.6668 54.6577C44.7208 46.898 50.9408 40.6868 58.6091 40.7361C66.3818 40.7855 72.6018 47.0208 72.5375 54.7002C72.4733 62.4656 66.2429 68.6734 58.5815 68.608C50.8111 68.5402 44.614 62.3279 44.6668 54.6577ZM56.6088 56.1132C56.5319 56.0398 56.4562 55.9686 56.3816 55.8951C55.6551 55.1777 54.9276 54.4603 54.2023 53.7405C53.7444 53.286 53.197 53.1195 52.575 53.2779C51.3023 53.6005 50.9098 55.1444 51.8566 56.0926C53.0375 57.2749 54.2275 58.448 55.4153 59.6223C55.5163 59.7222 55.6276 59.8163 55.7469 59.8921C56.4286 60.326 57.2572 60.2215 57.8631 59.6131C59.3642 58.1025 60.8584 56.5862 62.3548 55.0721C63.3682 54.047 64.3884 53.0277 65.3914 51.9923C66.1121 51.2485 66.0237 50.1362 65.2193 49.5289C64.5353 49.0124 63.6264 49.0939 62.986 49.739C61.4241 51.3105 59.8691 52.8877 58.3061 54.4568C57.7541 55.0101 57.1883 55.5496 56.6099 56.1144L56.6088 56.1132Z"
          fill="#4570B6"
        />
        <path
          d="M56.6087 56.1133C57.1871 55.5486 57.754 55.009 58.3049 54.4558C59.8679 52.8866 61.4229 51.3094 62.9848 49.7379C63.6263 49.0928 64.5352 49.0125 65.218 49.5279C66.0225 50.1351 66.1109 51.2474 65.3902 51.9913C64.3872 53.0266 63.367 54.046 62.3536 55.071C60.8572 56.5851 59.363 58.1026 57.8619 59.6121C57.2571 60.2205 56.4274 60.3249 55.7457 59.891C55.6264 59.8152 55.5151 59.7211 55.4141 59.6213C54.2263 58.447 53.0362 57.2738 51.8554 56.0915C50.9086 55.1433 51.3022 53.5994 52.5738 53.2769C53.1946 53.1196 53.742 53.2861 54.2011 53.7395C54.9263 54.4592 55.6539 55.1766 56.3804 55.8941C56.4549 55.9675 56.5307 56.0387 56.6076 56.1122L56.6087 56.1133Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11050_201"
            x1="58.245"
            y1="11.6967"
            x2="58.245"
            y2="19.7786"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7AC6F0" />
            <stop offset="0.63" stop-color="#519ED7" />
            <stop offset="1" stop-color="#3E8CCC" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11050_201"
            x1="58.2381"
            y1="70.6591"
            x2="58.2381"
            y2="110.391"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#80CFFB" />
            <stop offset="1" stop-color="#3983C7" />
          </linearGradient>
        </defs>
      </svg>
      <h4>你已符合做SMILE Pro的<br class="d-lg-none" />基本條件了!</h4>

      <a
        target="_blank"
        class="smile-pro-success-btn"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        ><span>馬上預約</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M2.28589 14.6998L14.873 2.12842"
            stroke="#4570B6"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M4.12012 1.72852H15.3022V12.5285"
            stroke="#4570B6"
            stroke-width="2.7"
            stroke-linecap="round"
          /></svg
      ></a>

      <div class="smile-pro-success-reference" @click="resetState">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="137"
          height="137"
          viewBox="0 0 137 137"
          fill="none"
        >
          <path
            d="M68.0082 136.016C105.568 136.016 136.016 105.568 136.016 68.0082C136.016 30.4483 105.568 0 68.0082 0C30.4483 0 0 30.4483 0 68.0082C0 105.568 30.4483 136.016 68.0082 136.016Z"
            fill="#4570B6"
          />
          <path
            d="M95.9369 38.8875C97.9706 36.8019 100.004 34.7164 102.038 32.6437C102.271 32.3976 102.53 32.1774 102.777 31.9442C103.787 30.9597 104.94 30.8561 106.183 31.3742C107.401 31.8794 108.127 32.7603 108.256 34.0946C108.282 34.4055 108.295 34.7164 108.295 35.0402C108.295 42.5146 108.295 49.9891 108.295 57.4505C108.295 59.9766 106.987 61.3108 104.499 61.3108C96.9732 61.3108 89.4469 61.3108 81.9207 61.3108C79.7703 61.3108 78.6692 60.5077 78.164 58.5905C77.9179 57.6707 78.0345 56.8028 78.7081 56.0904C79.9517 54.7691 81.2212 53.4866 82.4906 52.2042C83.7472 50.9347 85.0037 49.6911 86.2991 48.3957C84.3431 46.5433 82.2057 45.0536 79.861 43.8877C75.3012 41.6208 70.4435 40.7788 65.4303 41.3488C56.7771 42.3333 49.9762 46.4785 45.2869 53.8882C42.5666 58.176 41.1935 62.8912 41.2064 67.9562C41.2194 74.6922 43.4863 80.6381 47.8906 85.7161C51.7639 90.1852 56.6475 93.0739 62.412 94.2397C72.0627 96.1828 80.4569 93.592 87.4002 86.5581C88.009 85.9492 88.5272 85.2497 89.0972 84.602C89.9392 83.6434 90.9884 83.5527 91.8952 84.4595C94.2269 86.7653 96.5327 89.097 98.8256 91.4417C99.6028 92.2319 99.6028 93.0739 98.8644 93.9677C95.9887 97.4264 92.6206 100.315 88.7474 102.608C81.8429 106.688 74.3685 108.748 66.3759 108.256C52.0748 107.375 40.9862 100.846 33.447 88.5789C30.3251 83.488 28.4986 77.9048 27.9286 71.946C27.2291 64.5493 28.4468 57.4764 31.6853 50.7922C37.2295 39.3668 46.2325 31.9831 58.4999 28.9907C72.1016 25.6745 84.2653 29.0555 94.8876 38.1103C95.1207 38.3175 95.3539 38.5248 95.6 38.7321C95.6389 38.758 95.6907 38.7709 95.7425 38.7968C95.8073 38.8357 95.8721 38.8746 95.9498 38.9134L95.9369 38.8875Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragItems: [
        {
          text: ["擔心矯視過程，", "眼睛無法對焦太久"],
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-Game1.avif",
          visible: true,
        },
        {
          text: ["追求更佳手術體驗感"],
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-Game2.avif",
          visible: true,
        },
        {
          text: ["生活受近視或/", "及散光困擾"],
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-Game3.avif",
          visible: true,
        },
        {
          text: ["暗室瞳孔直徑偏大"],
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-Game4.avif",
          visible: true,
        },
      ],
      isOverTarget: false,
      draggableInstances: [],
      showSuccess: false,
      droppedItem: null,
    };
  },
  mounted() {
    this.initDrag();
    this.preloadImage();
  },
  beforeDestroy() {
    this.cleanupDrag();
  },
  methods: {
    preloadImage() {
      const bgImage = new Image();
      bgImage.src =
        "https://via.placeholder.com/1920x1080/e6e6fa/808080?text=成功背景";
    },
    initDrag() {
      // 动态加载 GSAP 库
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      gsapScript.onload = () => {
        const draggableScript = document.createElement("script");
        draggableScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js";
        draggableScript.onload = this.setupDraggable;
        document.head.appendChild(draggableScript);
      };
      document.head.appendChild(gsapScript);
    },
    setupDraggable() {
      const gsap = window.gsap;
      gsap.registerPlugin(window.Draggable);

      this.$nextTick(() => {
        const targetArea = this.$refs.targetArea;

        this.$refs.dragItems.forEach((item, index) => {
          const instance = window.Draggable.create(item, {
            type: "x,y",
            bounds: this.$el,
            inertia: true,
            minimumMovement: 2,
            edgeResistance: 0.65,
            onPress: () => {
              instance[0].update();
              gsap.to(item, { scale: 1.1, duration: 0.1 });
              item.style.cursor = "grabbing";
              item.style.zIndex = 100;
            },
            onDrag: () => {
              const itemRect = item.getBoundingClientRect();
              const targetRect = targetArea.getBoundingClientRect();

              const overlapping = !(
                itemRect.right < targetRect.left ||
                itemRect.left > targetRect.right ||
                itemRect.bottom < targetRect.top ||
                itemRect.top > targetRect.bottom
              );

              if (overlapping && !this.isOverTarget) {
                this.isOverTarget = true;
                targetArea.classList.add("active");
              } else if (!overlapping && this.isOverTarget) {
                this.isOverTarget = false;
                targetArea.classList.remove("active");
              }
            },
            onRelease: () => {
              gsap.to(item, { scale: 1, duration: 0.2 });

              const itemRect = item.getBoundingClientRect();
              const targetRect = targetArea.getBoundingClientRect();

              const isOverlapping = !(
                itemRect.right < targetRect.left ||
                itemRect.left > targetRect.right ||
                itemRect.bottom < targetRect.top ||
                itemRect.top > targetRect.bottom
              );

              if (isOverlapping) {
                targetArea.classList.remove("active");

                const containerRect = this.$el.getBoundingClientRect();
                const targetCenterX =
                  targetRect.left + targetRect.width / 2 - containerRect.left;
                const targetCenterY =
                  targetRect.top + targetRect.height / 2 - containerRect.top;

                // Store the dropped item
                this.droppedItem = item;

                // Move item to target area
                gsap.to(item, {
                  // x: targetCenterX - item.offsetWidth / 2 - instance[0].startX,
                  // y: targetCenterY - item.offsetHeight / 2 - instance[0].startY,
                  duration: 0,
                  ease: "power2.out",
                  onComplete: () => {
                    // Shake animation for target area
                    gsap.to(targetArea, {
                      // keyframes: [
                      //   { rotation: -2,  duration: 0.05 },
                      //   { rotation: 2,  duration: 0.05 },
                      //   { rotation: -2,  duration: 0.05 },
                      //   { rotation: 0, duration: 0.05 },
                      // ],

                      repeat: 0,
                      onComplete: () => {
                        this.showSuccessContent();
                        this.$refs.dragItems.forEach((el) => {
                          el.style.visibility = "hidden"; // 使用 visibility: hidden 隐藏元素
                        });
                      },
                    });
                  },
                });

                instance[0].disable();
              } else {
                item.style.cursor = "grab";
                this.isOverTarget = false;
                targetArea.classList.remove("active");
              }
            },
          });

          this.draggableInstances.push(instance[0]);
        });
      });
    },
    showSuccessContent() {
      const targetArea = this.$refs.targetArea;
      targetArea.classList.add("d-none");

      const gsap = window.gsap;
      this.dragItems.forEach((item, index) => {
        if (this.$refs.dragItems[index] !== this.droppedItem) {
          gsap.to(this.$refs.dragItems[index], {
            opacity: 0,
            duration: 0,
            onComplete: () => {
              this.dragItems[index].visible = false;
            },
          });
        }
      });

      if (window.innerWidth < 992) {
        this.$el.style.backgroundImage =
          "url('https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg-active.jpg')";
      } else {
        this.$el.style.backgroundImage =
          "url('https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-pcBg-active.avif')";
      }

      this.showSuccess = true;
    },
    resetState() {
      const gsap = window.gsap;

      // Reset all drag items
      this.dragItems.forEach((item, index) => {
        item.visible = true;
        gsap.set(this.$refs.dragItems[index], {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          rotation: 0,
        });

        // Re-enable dragging
        if (this.draggableInstances[index]) {
          this.draggableInstances[index].enable();
        }
      });

      // Reset target area
      const targetArea = this.$refs.targetArea;
      targetArea.classList.remove("d-none");
      gsap.set(targetArea, {
        x: 0,
        rotation: 0,
      });

      // Reset background and success state
      if (window.innerWidth < 992) {
        this.$el.style.backgroundImage =
          "url('https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif')";
      } else {
        this.$el.style.backgroundImage =
          "url('https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-Pc.avif')";
      }

      this.showSuccess = false;
      this.droppedItem = null;
    },
    cleanupDrag() {
      this.draggableInstances.forEach((instance) => {
        if (instance && instance.kill) {
          instance.kill();
        }
      });
    },
  },
};
</script>
<style lang="scss">
.d-none {
  display: none;
}
@media screen and (max-width: 992px) {
  .smile-pro-container {
    min-height: 917px;
    max-width: 389px;
    margin: 0 auto;
    background: white
      url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif")
      no-repeat;
    background-size: 100%;
    transition: background-image 0.3s ease;
    overflow: hidden;
    position: relative;
    z-index: 2;
    touch-action: pan-y;

    & > .smile-pro-drag-item:nth-child(1) {
      top: 96px;
      left: 21px;
    }

    & > .smile-pro-drag-item:nth-child(2) {
      top: 185px;
      right: 18px;
    }

    & > .smile-pro-drag-item:nth-child(3) {
      bottom: 108px;
      left: 20px;
    }

    & > .smile-pro-drag-item:nth-child(4) {
      bottom: 51px;
      right: 16px;
    }

    .smile-pro-drag-item {
      width: 162.684px;
      overflow: hidden;
      cursor: grab;
      position: absolute;
      will-change: transform;
      touch-action: none;
      z-index: 1;
      img {
        width: 162.684px;
        height: 162.684px;
        flex-shrink: 0;
        border-radius: 13px;
      }

      .draggable-item-text {
        margin-top: 20px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.48;
        letter-spacing: 1.4px;
      }
    }

    .smile-pro-target-area {
      text-align: center;
      z-index: 10;
      will-change: transform;
      transition: transform 0.2s ease-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      svg {
        margin: 0 auto;
      }
      .folderText {
        margin-top: 8.66px;
        white-space: nowrap;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.03;
      }
      &.active {
        transform: translate(-50%, -50%) scale(1.1) ;
      }
    }

    .smile-pro-success-content {
      width: 100vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
      & > svg {
        margin: 0 auto;
      }
      & > h4 {
        margin: 10px 0;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.3;
      }
    }

    .smile-pro-success-btn {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 9px;
      align-items: center;

      cursor: pointer;
      transition: all 0.3s ease;
      pointer-events: auto;
      width: 169.211px;
      height: 48px;
      flex-shrink: 0;
      border-radius: 100px;
      border: 2px solid #4570b6;
      background: #fff;

      & > span {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
        letter-spacing: 1px;
      }
      &:hover {
        background: #4570b6;
        span {
          color: white;
        }
        svg {
          path {
            stroke: white;
          }
        }
        transform: translateY(-2px);
      }
    }

    .smile-pro-success-reference {
      position: absolute;
      bottom: 20px;
      right: 20px;
      svg {
        width: 106.016px;
        height: 106.016px;
      }
    }
  }
}

@media screen and (max-width: 389px) {
  .smile-pro-container {
    min-height: 235.13vw;
    background: white
      url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif")
      no-repeat;
    background-size: 100%;
    transition: background-image 0.5s ease;
    overflow: hidden;
    position: relative;
    touch-action: pan-y;

    & > .smile-pro-drag-item:nth-child(1) {
      top: 24.62vw;
      left: 5.38vw;
    }

    & > .smile-pro-drag-item:nth-child(2) {
      top: 47.44vw;
      right: 4.62vw;
    }

    & > .smile-pro-drag-item:nth-child(3) {
      bottom: 27.69vw;
      left: 5.13vw;
    }

    & > .smile-pro-drag-item:nth-child(4) {
      bottom: 13.08vw;
      right: 4.1vw;
    }

    .smile-pro-drag-item {
      width: 41.71vw;
      overflow: hidden;
      cursor: grab;
      position: absolute;
      will-change: transform;
      touch-action: none;
      z-index: 1;
      img {
        width: 41.71vw;
        height: 41.71vw;
        flex-shrink: 0;
        border-radius: 3.33vw;
      }

      .draggable-item-text {
        margin-top: 5.13vw;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 300;
        line-height: 1.48;
        letter-spacing: 0.36vw;
      }
    }

    .smile-pro-target-area {
      text-align: center;
      z-index: 10;
      will-change: transform;
      transition: transform 0.2s ease-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) ;
      svg {
        margin: 0 auto;
      }
      .folderText {
        margin-top: 2.22vw;
        white-space: nowrap;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.03;
      }
      &.active {
        transform: translate(-50%, -50%) scale(1.1) ;
      }
    }

    .smile-pro-success-content {
      width: 100vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
      & > svg {
        margin: 0 auto;
      }
      & > h4 {
        margin: 2.56vw 0;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.3;
      }
    }

    .smile-pro-success-btn {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 2.31vw;
      align-items: center;

      cursor: pointer;
      transition: all 0.3s ease;
      pointer-events: auto;
      width: 43.39vw;
      height: 12.31vw;
      flex-shrink: 0;
      border-radius: 100px;
      border: 0.51vw solid #4570b6;
      background: #fff;

      & > span {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
        letter-spacing: 0.26vw;
      }
      &:hover {
        background: #4570b6;
        span {
          color: white;
        }
        svg {
          path {
            stroke: white;
          }
        }
        transform: translateY(-0.51vw);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .smile-pro-container {
    z-index: 2;
    margin: 0 auto;
    max-width: 1655px;
    width: 86.2vw;
    min-height: clamp(300px, 852px, 44.38vw);

    background: white
      url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-Pc.avif")
      no-repeat center center;
    background-size: 100%;
    transition: background-image 0.5s ease;
    overflow: hidden;
    position: relative;
    touch-action: none;

    & > .smile-pro-drag-item:nth-child(1) {
      top: clamp(20px, 7.66vw, 147px);
      left: clamp(208.5px, 21.72vw, 417px);
    }

    & > .smile-pro-drag-item:nth-child(2) {
      top: clamp(49px, 5.1vw, 98px);
      right: clamp(200.5px, 20.89vw, 401px);
    }

    & > .smile-pro-drag-item:nth-child(3) {
      bottom: clamp(50.5px, 5.26vw, 101px);
      left: clamp(112.5px, 11.72vw, 225px);
    }

    & > .smile-pro-drag-item:nth-child(4) {
      bottom: clamp(30.5px, 3.18vw, 61px);
      right: clamp(139px, 14.48vw, 278px);
    }

    .smile-pro-drag-item {
      width: clamp(100px, 10.42vw, 200px);
      overflow: hidden;
      cursor: grab;
      position: absolute;
      will-change: transform;
      touch-action: none;
      z-index: 1;
      img {
        width: clamp(100px, 10.42vw, 200px);
        height: clamp(100px, 10.42vw, 200px);
        flex-shrink: 0;
        border-radius: clamp(10px, 1.04vw, 20px);
      }

      .draggable-item-text {
        margin-top: 20px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: clamp(1px, 0.1vw, 2px);
      }
    }

    .smile-pro-target-area {
      text-align: center;
      z-index: 10;
      will-change: transform;
      transition: transform 0.2s ease-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) ;
      svg {
        width: clamp(163px, 16.98vw, 326px);
        height: clamp(131.999px, 13.75vw, 263.998px);

        margin: 0 auto;
      }
      .folderText {
        margin-top: clamp(19.5px, 2.03vw, 39px);
        white-space: nowrap;
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
      }
      &.active {
        transform: translate(-50%, -50%) scale(1.1) ;
      }
    }

    .smile-pro-success-content {
      // width: clamp(250px, 26.04vw, 500px);

      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
      & > svg {
        margin: 0 auto;
        width: clamp(163px, 16.98vw, 326px);
        height: clamp(131.999px, 13.75vw, 263.998px);
      }
      & > h4 {
        margin: clamp(19.5px, 2.03vw, 39px) 0;
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
      }
    }

    .smile-pro-success-btn {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: clamp(4.5px, 0.47vw, 9px);
      align-items: center;

      cursor: pointer;
      transition: all 0.3s ease;
      pointer-events: auto;

      width: clamp(84.6055px, 8.81vw, 169.211px);
      height: clamp(24px, 2.5vw, 48px);
      flex-shrink: 0;
      border-radius: 100px;
      border: clamp(1px, 0.1vw, 2px) solid #4570b6;
      background: #fff;

      & > span {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
        letter-spacing: clamp(0.5px, 0.05vw, 1px);
      }
      &:hover {
        background: #4570b6;
        span {
          color: white;
        }
        svg {
          path {
            stroke: white;
          }
        }
        transform: translateY(-clamp(1px, 0.1vw, 2px));
      }
    }

    .smile-pro-success-reference {
      position: absolute;
      bottom: 30px;
      right: 30px;
      svg {
        width: 136.016px;
        height: 136.016px;
      }
    }
  }
}
</style>