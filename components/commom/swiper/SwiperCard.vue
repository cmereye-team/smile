<template>
  <div
    class="swiper-card"
    @mouseover="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <div
      class="swiper-card-container"
      @mousedown.prevent="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    >
      <div class="swiper-card-wrap">
        <div
          class="swiper-card-slide"
          v-for="(item, index) in images"
          :key="index"
          :class="[
            { active: index === activeIndex },
            index === (activeIndex - 1 + totalSlides) % totalSlides
              ? 'prev'
              : '',
            index === (activeIndex + 1) % totalSlides ? 'next' : '',
          ]"
          :style="[getSlideStyle(index), dragSlideStyle(index)]"
          v-show="shouldShowSlide(index)"
        >
          <img
            :src="getImageSrc(item)"
            alt="Image"
            @error="handleImageError($event, index)"
          />
          <div class="overlay" v-if="index !== activeIndex"></div>
        </div>
      </div>
      <div class="swiper-card-pagination">
        <span
          class="swiper-card-bullet"
          v-for="(item, index) in images"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="setActiveIndex(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      validator: (arr) => arr.length > 0,
    },
    imageKey: {
      type: String,
      default: "imgUrl",
    },
    autoPlay: {
      type: Boolean,
      default: false,
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
      isDragging: false,
      startX: 0,
      deltaX: 0,
    };
  },
  computed: {
    totalSlides() {
      return this.images.length;
    },
  },
  methods: {
    /**
     * @description: 获取图片的key
     * @param {Object|string} item
     */
    getImageSrc(item) {
      const src = typeof item === "string" ? item : item[this.imageKey];
      if (!src) {
        console.warn(
          `Image source is invalid for index ${this.activeIndex}:`,
          item
        );
        return "https://picsum.photos/400/400";
      }
      return src;
    },
    /**
     * @description: 获取轮播图样式
     * @param {number} index 索引
     */
    getSlideStyle(index) {
      let transform = "";
      let zIndex = 0;
      let opacity = 1;

      if (index === this.activeIndex) {
        transform = `translateY(0) rotate(-3.774deg) translateZ(0)`;
        zIndex = 2;
        opacity = 1;
      } else if (
        index ===
        (this.activeIndex - 1 + this.totalSlides) % this.totalSlides
      ) {
        transform = `rotate(2.925deg) translateZ(-100px)`; // 前一张
        zIndex = 1;
        opacity = 0.8;
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        transform = `rotate(-7.548deg) translateZ(-100px)`; // 后一张
        zIndex = 1;
        opacity = 0.2;
      } else {
        transform = `translateY(0) translateZ(-200px)`;
        zIndex = 0;
        opacity = 0;
      }

      return {
        transform,
        zIndex,
        opacity,
        transition: this.isDragging
          ? "none"
          : "transform 0.5s ease, opacity 0.5s ease",
      };
    },
    /**
     * @description: 拖拽样式
     * @param {number} index
     */
    dragSlideStyle(index) {
      if (
        this.isDragging &&
        (index === this.activeIndex ||
          index ===
            (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
          index === (this.activeIndex + 1) % this.totalSlides)
      ) {
        return {
          transform: `${this.getSlideStyle(index).transform} translateX(${
            this.deltaX
          }px)`,
          transition: "none",
        };
      }
      return {};
    },
    /**
     * @description: 减小压力只显示3张，判断是否显示
     * @param {number} index
     */
    shouldShowSlide(index) {
      return (
        index === this.activeIndex ||
        index ===
          (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      );
    },
    handleImageError(event, index) {
      console.error(`Image load failed at index ${index}:`, event.target.src);
      event.target.src = "https://picsum.photos/400/400";
    },
    /**
     * @description: 开始拖拽图片
     * @param {*} event
     */
    startDrag(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = true;
      this.startX = event.clientX;
      this.deltaX = 0;
      this.pauseAutoPlay();
      console.log("Drag started at:", this.startX);
    },
    /**
     * @description: 正在拖拽图片
     * @param {*} event
     * @return {*}
     */
    onDrag(event) {
      if (!this.isDragging) return;
      this.deltaX = event.clientX - this.startX;
      console.log("Dragging, deltaX:", this.deltaX);
    },
    /**
     * @description: 结束拖拽图片
     * @param {*} event
     */
    endDrag() {
      if (!this.isDragging) return;
      this.isDragging = false;
      const threshold = 50; // 降低阈值到 50px
      if (this.deltaX < -threshold) {
        this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
        console.log(`Drag ended, switched to next slide: ${this.activeIndex}`);
      } else if (this.deltaX > threshold) {
        this.activeIndex =
          (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
        console.log(`Drag ended, switched to prev slide: ${this.activeIndex}`);
      }
      this.deltaX = 0;
      this.resumeAutoPlay();
    },
    /**
     * @description: 下一张
     */
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    /**
     * @description: 开始自动轮播
     */
    startAutoPlay() {
      if (this.autoPlay && !this.timer) {
        this.timer = setInterval(this.nextSlide, this.interval);
      }
    },
    /**
     * @description: 暂停自动轮播
     */
    pauseAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
    /**
     * @description: 继续自动轮播
     */
    resumeAutoPlay() {
      this.startAutoPlay();
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.pauseAutoPlay();
  },
  watch: {
    images: {
      handler(newImages) {
        this.activeIndex = 0;
        this.pauseAutoPlay();
        this.startAutoPlay();
      },
      deep: true,
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
.swiper-card {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  &-container {
    position: relative;
    width: #{("clamp(9.375rem, -6.78rem + 26.48vw, 25rem);")};
    height: #{("clamp(9.375rem, -6.78rem + 26.48vw, 25rem);")};
    margin: 0 auto;
    cursor: grab;
    user-select: none;
    &:active {
      cursor: grabbing;
    }
  }
  &-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: #{("clamp(9.375rem, -6.78rem + 26.48vw, 25rem);")};
    height: #{("clamp(9.375rem, -6.78rem + 26.48vw, 25rem);")};
    transform-style: preserve-3d;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
    &.active .overlay {
      display: none; // 活跃项无遮罩
    }
    .overlay {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.5) 100%
        );
        border-radius: 20px;
        transition: opacity 0.5s ease;
      }
    }
  }
  &-pagination {
    position: absolute;
    bottom: -60px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
  }
  &-bullet {
    background: #d9d9d9;
    opacity: 0.7;
    width: 10px;
    height: 10px;
    margin: 0 13px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    &.active {
      background: #4570b6;
      opacity: 1;
    }
  }
}
@media screen and (max-width: 767px) {
  .swiper-card-pagination {
    bottom: -50px;
  }
  .swiper-card-bullet {
    width: 8px;
    height: 8px;
    margin: 0 10px;
  }
}
</style>
