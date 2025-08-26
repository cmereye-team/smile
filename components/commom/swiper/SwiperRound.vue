<template>
  <div class="smile-left-swiper" @mouseover="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <div class="swiper-container">
      <div class="swiper-wrap">
        <div
          class="swiper-slide"
          v-for="(item, index) in shareList"
          :key="index"
          :style="getSlideStyle(index)"
          v-show="shouldShowSlide(index)"
          @click="handleSlideClick(index, item[hrefKey])"
        >
          <div class="avatar-container">
            <img
              :src="getImageSrc(item)"
              :alt="item[nameKey] || item.nameEn"
              @error="handleImageError($event, index)"
            />
            <div class="overlay" v-if="index !== activeIndex"></div>
          </div>
          <div class="play-button" v-if="index === activeIndex"></div>
          <div
            class="swiper-prev"
            v-if="index === (activeIndex - 1 + totalSlides) % totalSlides"
          ></div>
          <div
            class="swiper-next"
            v-if="index === (activeIndex + 1) % totalSlides"
          ></div>
        </div>
      </div>
      <!-- 垂直排列的名字 -->
      <div class="name-list">
        <div
          v-for="(item, index) in shareList"
          :key="index"
          class="swiper-name"
          :style="getNameStyle(index)"
        >
          {{ item.nameCn || item.nameEn }}
        </div>
      </div>
    </div>
    <div id="youtube-popover" popover class="youtube-popover">
      <button class="close-button" @click="closePopover">×</button>
      <iframe
        v-if="popoverUrl"
        :src="popoverUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
    };
  },
  computed: {
    totalSlides() {
      return this.shareList.length;
    },
  },
  methods: {
    getImageSrc(item) {
      const src = item[this.imageKey];
      if (!src) {
        console.warn(
          `Image source is invalid for index ${this.activeIndex}:`,
          item
        );
        return "https://picsum.photos/80/80";
      }
      return src;
    },
    getSlideStyle(index) {
      let width = 93;
      let transform = "";
      let zIndex = 2;
      let top = 0;
      let left = 0;

      const radius = 40; // 虚线圆弧半径，基于父容器高度的 40%
      const offsetX = 25; // 向右偏移，靠近虚线圆弧（right: 25%）

      if (index === this.activeIndex) {
        width = 208;
        transform = `translate(0, -50%)`;
        zIndex = 3;
        top = 50;
        left = offsetX + 30;
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
        width = 93;
        transform = `translate(0, -${radius}%)`; // 上方
        zIndex = 2;
        top = 20;
        left = offsetX + 10;
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        width = 93;
        transform = `translate(0, ${radius}%)`; // 下方
        zIndex = 2;
        top = 70;
        left = offsetX + 10;
      } else {
        width = 93;
        transform = `translate(0, 0)`;
        zIndex = 0;
        top = 50;
        left = 0;
      }

      return {
        width: `${width}px`,
        height: `${width}px`,
        transform,
        zIndex,
        top: `${top}%`,
        left: `${left}%`,
        transition: "all 0.5s ease",
      };
    },
    shouldShowSlide(index) {
      const show =
        index === this.activeIndex ||
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides;
      console.log(`shouldShowSlide index ${index}: ${show}`);
      return show;
    },
    getNameStyle(index) {
      let top = 0;
      const baseTop = 50; // 活跃项为中间 (50%)
      const spacing = 20; // 上下名字之间的间距
      const isVisible =
        index === this.activeIndex ||
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides;

      if (index === this.activeIndex) {
        top = `${baseTop}%`; // 活跃项名字居中
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
        top = `${baseTop - spacing}%`; // 上方名字向中间靠拢
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        top = `${baseTop + spacing}%`; // 下方名字向中间靠拢
      } else {
        top = "50%"; // 其他项默认位置，但隐藏
      }

      const style = {
        top: top,
        position: "absolute",
        left: "50px", // 距离左侧 50px
        transform: "translateY(-50%)",
        transition: "top 0.5s ease",
        whiteSpace: "nowrap", // 防止换行
        visibility: isVisible ? "visible" : "hidden", // 隐藏非显示项
      };

      if (index === this.activeIndex) {
        // 活跃项样式
        Object.assign(style, {
          color: "#4570B6",
          fontFamily: '"Noto Sans TC"',
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "50.452px",
          letterSpacing: "1.75px",
        });
      } else if (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      ) {
        // 上下项样式
        Object.assign(style, {
          color: "#4570B6",
          fontFamily: '"Noto Sans TC"',
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "100",
          lineHeight: "43px",
          letterSpacing: "1.75px",
        });
      }

      return style;
    },
    handleImageError(event, index) {
      console.error(`Image load failed at index ${index}:`, event.target.src);
      event.target.src = "https://picsum.photos/80/80";
    },
    handleSlideClick(index, url) {
      if (index === this.activeIndex) {
        this.showPopover(url);
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
        this.prevSlide();
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        this.nextSlide();
      }
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
      console.log(`Active slide changed to: ${this.activeIndex}`);
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
      console.log(`Active slide changed to: ${this.activeIndex}`);
    },
    showPopover(url) {
      this.popoverUrl = url;
      const popover = document.getElementById('youtube-popover');
      if (popover) {
        popover.showPopover();
        console.log("Showing YouTube popover:", url);
      }
    },
    closePopover() {
      this.popoverUrl = null;
      const popover = document.getElementById('youtube-popover');
      if (popover) {
        popover.hidePopover();
        console.log("YouTube popover closed");
      }
    },
    startAutoPlay() {
      if (this.autoPlay && !this.timer) {
        this.timer = setInterval(this.nextSlide, this.interval);
        console.log(`Auto-play started with interval: ${this.interval}ms`);
      }
    },
    pauseAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
      console.log("Auto-play paused");
    },
    resumeAutoPlay() {
      this.startAutoPlay();
    },
  },
  mounted() {
    console.log("SwiperRound mounted with shareList:", this.shareList);
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.pauseAutoPlay();
  },
  watch: {
    shareList: {
      handler(newList) {
        console.log("Share list updated:", newList);
        this.activeIndex = 0;
        this.pauseAutoPlay();
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
        this.pauseAutoPlay();
      }
    },
    interval() {
      this.pauseAutoPlay();
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

.smile-left-swiper {
  width: 100%;
  height: 100%;
  position: relative;
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
  .avatar-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%);
    border-radius: 50%;
    transition: opacity 0.5s ease;
  }
  .play-button {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 55px;
    height: 42px;
    z-index: 3;
    &::after {
      content: "";
      background-image: url("https://statichk.cmermedical.com/smile/smileV2/smile-icon-play.svg");
      position: absolute;
      bottom: 0;
      right: 0;
      width: 55px;
      height: 42px;
      background-size: cover;
    }
  }
  .swiper-prev {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    z-index: 4;
    cursor: pointer;
    &::before {
      background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMzUgMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS42NTA0IDExLjY0OTdMMzIuOTQ2OCAzMi45NDYyIiBzdHJva2U9IiM0NTcwQjYiIHN0cm9rZS13aWR0aD0iMy40NjE1NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkxMDEyIDI4LjYzODRMMTAuMTE4MiAxMC4xMTgxTDI4LjYzODUgOS45MDk5NiIgc3Ryb2tlPSIjNDU3MEI2IiBzdHJva2Utd2lkdGg9IjMuNDYxNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K");
      @extend %avater-btn;
    }
  }
  .swiper-next {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    z-index: 4;
    cursor: pointer;
    &::before {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY1MDQgMjMuNjM0OUwzMi45NDY4IDIuMzM4NSIgc3Ryb2tlPSIjNDU3MEI2IiBzdHJva2Utd2lkdGg9IjMuNDYxNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS45MTAxMiA2LjY0NjIzTDEwLjExODIgMjUuMTY2NkwyOC42Mzg1IDI1LjM3NDYiIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIzLjQ2MTU0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==");
      @extend %avater-btn;
    }
  }
}
.name-list {
  position: absolute;
  top: 0;
  left: 50px; // 距离左侧 50px
  width: 200px; // 增加宽度以容纳长名字
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.youtube-popover {
  width: 80vw;
  max-width: 800px;
  height: 60vh;
  max-height: 450px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: $primary-color;
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
      &::after {
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
    &::before {
      width: 20px;
      height: 20px;
      background-size: cover;
    }
  }
  .name-list {
    width: 150px; // 移动端增加宽度
  }
  .youtube-popover {
    width: 90vw;
    height: 50vh;
    max-height: 300px;
  }
}
</style>