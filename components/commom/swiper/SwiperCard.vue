<template>
  <div
    class="swiper-card"
    @mouseover="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <div class="swiper-card-container">
      <div class="swiper-card-wrap">
        <div
          class="swiper-card-slide"
          v-for="(item, index) in images"
          :key="index"
          :style="getSlideStyle(index)"
        >
          <img
            :src="getImageSrc(item)"
            alt="Image"
            @error="handleImageError($event, index)"
          />
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
    };
  },
  computed: {
    totalSlides() {
      return this.images.length;
    },
  },
  methods: {
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
    getSlideStyle(index) {
      let transform = "";
      let zIndex = 0;
      let opacity = 1;

      if (index === this.activeIndex) {
        transform = `translateY(0) rotateY(-3.774deg) translateZ(0)`;
        zIndex = 2;
        opacity = 1;
      } else if (
        index ===
        (this.activeIndex - 1 + this.totalSlides) % this.totalSlides
      ) {
        transform = `translateY(20px) rotateY(2.925deg) translateZ(-100px)`;
        zIndex = 1;
        opacity = 0.8;
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        transform = `translateY(-20px) rotateY(-7.548deg) translateZ(-100px)`;
        zIndex = 1;
        opacity = 0.8;
      } else {
        transform = `translateY(0) translateZ(-200px)`;
        zIndex = 0;
        opacity = 0;
      }

      return {
        transform,
        zIndex,
        opacity,
        transition: "all 0.5s ease",
      };
    },
    handleImageError(event, index) {
      console.error(`Image load failed at index ${index}:`, event.target.src);
      event.target.src = "https://picsum.photos/400/400";
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
      console.log(`Active slide changed to: ${this.activeIndex}`);
    },
    setActiveIndex(index) {
      this.activeIndex = index;
      console.log(`Set active slide to: ${index}`);
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
    console.log("SwiperCard mounted with images:", this.images);
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.pauseAutoPlay();
  },
  watch: {
    images: {
      handler(newImages) {
        console.log("Images prop updated:", newImages);
        this.activeIndex = 0; // 重置索引
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
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
  &-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    transform-style: preserve-3d;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
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
</style>
