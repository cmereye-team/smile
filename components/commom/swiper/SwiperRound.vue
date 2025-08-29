<template>
  <div
    class="swiper-round"
    @mouseenter="pauseAutoPlay"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
    <div class="swiper-container" @wheel="handleWheel">
      <div class="swiper-wrap">
        <div
          class="swiper-slide"
          v-for="(item, index) in shareList"
          :key="index"
          :class="{ active: index === activeIndex }"
          :style="getSlideStyle(index)"
          v-show="shouldShowSlide(index)"
          @click="handleSlideClick(index, item[hrefKey])"
        >
          <div
            class="avatar-container"
            :class="{ 'overlay-mask': shouldApplyMask(index) }"
          >
            <img :src="item[imageKey]" :alt="item[nameKey] || item.nameEn" @dragstart.prevent />
          </div>

          <!-- Play按钮 -->
          <div
            class="play-button"
            v-if="index === activeIndex"
            @click="handlePlayClick(item[hrefKey])"
          ></div>

          <!-- 导航按钮 -->
          <div
            class="swiper-prev"
            v-if="index === (activeIndex - 1 + totalSlides) % totalSlides"
            @click="handlePrevClick"
          ></div>
          <div
            class="swiper-next"
            v-if="index === (activeIndex + 1) % totalSlides"
            @click="handleNextClick"
          ></div>
        </div>
      </div>

      <!-- 垂直排列的名字 -->
      <div class="name-list">
        <div
          v-for="(item, index) in shareList"
          :key="index"
          :style="getNameStyle(index)"
        >
          {{ item.nameCn || item.nameEn }}
        </div>
      </div>
    </div>
    <div id="popover" class="popover" popover @click="handleBackdropClick">
      <div class="popover-container">
        <iframe
          v-if="popoverUrl"
          :src="popoverUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button class="popover-close" @click="closePopover">
          <svg
            t="1756432879876"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4417"
            width="200"
            height="200"
          >
            <path
              d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z"
              p-id="4418"
              fill="#ffffff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shareList: {
      type: Array,
      required: true,
      validator: (arr) => arr.length > 0,
    },
    imageKey: {
      type: String,
      default: "img",
    },
    nameKey: {
      type: String,
      default: "nameCn",
    },
    hrefKey: {
      type: String,
      default: "href",
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      activeIndex: 0,
      timer: null,
      popoverUrl: null,
      isDragging: false,
      startY: 0,
    };
  },
  computed: {
    totalSlides() {
      return this.shareList.length;
    },
  },
  methods: {
    getSlideStyle(index) {
      let width = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
      let height = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
      let transform = "";
      let zIndex = 2;
      let top = "50%";
      let left = "55%";

      if (index === this.activeIndex) {
        width = "clamp(8.625rem, -4.5rem + 14.58vw, 13rem)";
        height = "clamp(8.625rem, -4.5rem + 14.58vw, 13rem)";
        transform = `translate(-50%, -50%)`;
        zIndex = 3;
        left = "70%";
        top = "50%";
      } else if (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides
      ) {
        width = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        height = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        transform = `translate(-50%, -50%)`;
        zIndex = 2;
        top = "25%";
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        width = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        height = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        transform = `translate(-50%, -50%)`;
        zIndex = 2;
        top = "75%";
      } else {
        width = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        height = "clamp(3.875rem, -1.938rem + 6.46vw, 5.813rem)";
        transform = `translate(-50%, -50%)`;
        zIndex = 0;
        top = "50%";
      }

      return {
        width,
        height,
        transform,
        zIndex,
        top,
        left,
        transition: "all 0.5s ease",
        position: "absolute",
      };
    },
    shouldShowSlide(index) {
      return (
        index === this.activeIndex ||
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      );
    },
    getNameStyle(index) {
      let top = 0;
      const baseTop = 50;
      const spacing = 20;
      const isVisible =
        index === this.activeIndex ||
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides;

      if (index === this.activeIndex) {
        top = `${baseTop}%`;
      } else if (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides
      ) {
        top = `${baseTop - spacing}%`;
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        top = `${baseTop + spacing}%`;
      } else {
        top = "50%";
      }

      const style = {
        top: top,
        position: "absolute",
        left: "50px",
        transform: "translateY(-50%)",
        transition: "top 0.5s ease",
        whiteSpace: "nowrap",
        visibility: isVisible ? "visible" : "hidden",
      };

      if (index === this.activeIndex) {
        Object.assign(style, {
          color: "#4570B6",
          fontFamily: '"Noto Sans TC"',
          fontSize: "clamp(1.75rem, 0.438rem + 1.46vw, 2.188rem)",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "50.452px",
          letterSpacing: "1.75px",
        });
      } else if (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      ) {
        Object.assign(style, {
          color: "#4570B6",
          fontFamily: '"Noto Sans TC"',
          fontSize: "clamp(1.75rem, 0.438rem + 1.46vw, 2.188rem)",
          fontStyle: "normal",
          fontWeight: "100",
          lineHeight: "43px",
          letterSpacing: "1.75px",
        });
      }

      return style;
    },
    shouldApplyMask(index) {
      return (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      );
    },
    handleSlideClick(index, url) {
      console.log(`點擊幻燈片觸發，索引 ${index}，URL: ${url}`);
      if (index === this.activeIndex) {
        this.handlePlayClick(url);
      } else if (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides
      ) {
        this.handlePrevClick();
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        this.handleNextClick();
      }
    },
    handlePlayClick(url) {
      console.log(`播放按鈕觸發，URL: ${url}`);
      this.showPopover(url);
    },
    handlePrevClick() {
      this.activeIndex = (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
    },
    handleNextClick() {
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
    },
    handleWheel(event) {
      console.log("滑鼠滾輪觸發，方向:", event.deltaY);
      event.preventDefault();
      if (event.deltaY > 0) {
        this.handleNextClick();
      } else {
        this.handlePrevClick();
      }
    },
    handleMouseDown(event) {
      this.isDragging = true;
      this.startY = event.clientY;
      this.pauseAutoPlay();
      document.querySelector(".swiper-round").style.cursor = "grabbing";
      console.log("滑鼠按下，開始拖拽，起始Y:", this.startY);
    },
    handleMouseMove(event) {
      if (!this.isDragging) return;
      const deltaY = event.clientY - this.startY;
      const threshold = 50; // 拖拽閾值，單位像素
      if (deltaY < -threshold) {
        this.handleNextClick();
        this.isDragging = false;
        document.querySelector(".swiper-round").style.cursor = "grab";
        console.log("向上拖拽，切換到下一張");
      } else if (deltaY > threshold) {
        this.handlePrevClick();
        this.isDragging = false;
        document.querySelector(".swiper-round").style.cursor = "grab";
        console.log("向下拖拽，切換到上一張");
      }
    },
    handleMouseUp() {
      if (this.isDragging) {
        this.isDragging = false;
        document.querySelector(".swiper-round").style.cursor = "grab";
        this.startAutoPlay();
        console.log("滑鼠鬆開，結束拖拽");
      }
    },
    handleMouseLeave() {
      this.handleMouseUp();
      this.startAutoPlay();
      console.log("滑鼠離開，恢復自動播放");
    },
    showPopover(url) {
      this.popoverUrl = url;
      const popover = document.getElementById("popover");
      if (popover) {
        popover.showPopover();
      }
    },
    closePopover() {
      this.popoverUrl = null;
      const popover = document.getElementById("popover");
      if (popover) {
        popover.hidePopover();
      }
    },
    handleBackdropClick(event) {
      if (event.target.classList.contains('popover')) {
        this.closePopover();
      }
    },
    startAutoPlay() {
      if (this.autoPlay && this.timer === null) {
        this.timer = setInterval(this.handleNextClick, this.interval);
        console.log(
          `自動播放開始，間隔: ${this.interval}ms, timer: ${this.timer}`
        );
      }
    },
    pauseAutoPlay() {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
        console.log("自動播放暫停");
      }
    },
  },
  mounted() {
    console.log("SwiperRound掛載，shareList:", this.shareList);
    this.startAutoPlay();
    document.querySelector(".swiper-round").style.cursor = "grab";
  },
  beforeDestroy() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      console.log("組件銷毀，自動播放停止");
    }
  },
  watch: {
    shareList: {
      handler(newList) {
        console.log("分享列表更新:", newList);
        this.activeIndex = 0;
        if (this.timer !== null) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.startAutoPlay();
      },
      deep: true,
    },
    activeIndex() {
      this.$forceUpdate();
    },
    autoPlay(val) {
      if (val) {
        this.startAutoPlay();
      } else {
        if (this.timer !== null) {
          clearInterval(this.timer);
          this.timer = null;
          console.log("自動播放停止");
        }
      }
    },
    interval() {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.startAutoPlay();
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #4570b6;

%avater-btn {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background-size: cover;
}

.swiper-round {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: grab; // 默認抓手樣式
}

.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: absolute;
  transform-origin: center;
  z-index: 2;
  cursor: pointer;

  &.active .avatar-container {
    box-shadow: 3px 2px 0 0 #4570b6; // 活躍項高亮
  }

  .avatar-container {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &.overlay-mask:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      border-radius: 50%;
      z-index: 1;
      pointer-events: none;
    }
  }

  .play-button {
    position: absolute;
    bottom: #{"clamp(0.375rem, -0.375rem + 0.83vw, 0.625rem)"};
    right: 0;
    width: #{"clamp(2.25rem, -1.313rem + 3.96vw, 3.438rem)"};
    height: #{"clamp(1.75rem, -0.875rem + 2.92vw, 2.625rem)"};
    z-index: 5;
    cursor: pointer;

    &:before {
      content: "";
      background-image: url("https://statichk.cmermedical.com/smile/smileV2/smile-icon-play.svg");
      position: absolute;
      bottom: 0;
      right: 0;
      width: #{"clamp(2.25rem, -1.313rem + 3.96vw, 3.438rem)"};
      height: #{"clamp(1.75rem, -0.875rem + 2.92vw, 2.625rem)"};
      background-size: cover;
    }
  }

  %swiper-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: #{"clamp(1.313rem, -0.75rem + 2.29vw, 2rem)"};
    height: #{"clamp(1.313rem, -0.75rem + 2.29vw, 2rem)"};
    z-index: 5;
    cursor: pointer;
  }

  .swiper-prev {
    @extend %swiper-button;

    &:before {
      background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMzUgMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS42NTA0IDExLjY0OTdMMzIuOTQ2OCAzMi45NDYyIiBzdHJva2U9IiM0NTcwQjYiIHN0cm9rZS13aWR0aD0iMy40NjE1NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkxMDEyIDI4LjYzODRMMTAuMTE4MiAxMC4xMTgxTDI4LjYzODUgOS45MDk5NiIgc3Ryb2tlPSIjNDU3MEI2IiBzdHJva2Utd2lkdGg9IjMuNDYxNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K");
      @extend %avater-btn;
    }
  }

  .swiper-next {
    @extend %swiper-button;

    &:before {
      background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMzUgMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS42NTA0IDIzLjYzNDlMMzIuOTQ2OCAyLjMzODUiIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIzLjQ2MTU0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkuOTEwMTIgNi42NDYyM0wxMC4xMTgyIDI1LjE2NjZMMjguNjM4NSAyNS4zNzQ2IiBzdHJva2U9IiM0NTcwQjYiIHN0cm9rZS13aWR0aD0iMy40NjE1NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=");
      @extend %avater-btn;
    }
  }
}

.name-list {
  position: absolute;
  top: 0;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}

.popover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 103;
  &[popover]:not(:popover-open) {
    display: none;
  }
  &-container {
    z-index: 104;
    position: relative;
    width: 80vw;
    max-width: 800px;
    height: 60vh;
    max-height: 450px;
  }
  &-close {
    z-index: 105;
    position: absolute;
    top: -40px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }
}

@media screen and (max-width: 767px) {
  .swiper-slide {
    &.active {
      width: 93px;
      height: 93px;
    }

    .play-button {
      width: 40px;
      height: 30px;

      &:before {
        width: 40px;
        height: 30px;
        background-size: cover;
      }
    }
  }

  .swiper-prev,
  .swiper-next {
    width: 20px;
    height: 20px;

    &:before {
      width: 20px;
      height: 20px;
      background-size: cover;
    }
  }

  .name-list {
    width: 150px;
  }

  .popover {
    width: 90vw;
    height: 50vh;
    max-height: 300px;
  }
}
</style>