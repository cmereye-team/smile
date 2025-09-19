<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-08 10:16:01
 * @LastEditTime: 2025-09-19 14:19:43
 * @FilePath: /components/commom/swiper/SwiperCard.vue
 * @Description: 堆叠式卡片轮播图
-->
<template>
  <div
    class="swiper-card"
    @mouseover="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <div
      class="swiper-card-container"
      @mousedown.prevent="startDrag"
      @mousemove.prevent="onDrag"
      @mouseup.prevent="endDrag"
      @mouseleave.prevent="endDrag"
      @touchstart.prevent="startDrag"
      @touchmove.prevent="onDrag"
      @touchend.prevent="endDrag"
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
          :style="getSlideStyle(index)"
          v-show="shouldShowSlide(index)"
        >
          <nuxt-link
            :to="item[linkKey] || '/'"
            v-if="item[linkTypeKey] === 'nuxt'"
            :event="isDragging || !isClick ? '' : 'click'"
          >
            <img
              :src="getImageSrc(item)"
              :style="dragImageStyle(index)"
              alt=""
              @error="handleImageError($event)"
            />
          </nuxt-link>
          <a
            :href="item[linkKey] || '#'"
            v-else
            target="_blank"
            rel="noopener noreferrer"
            @click="handleLinkClick($event)"
          >
            <img
              :src="getImageSrc(item)"
              :style="dragImageStyle(index)"
              alt=""
              @error="handleImageError($event)"
            />
          </a>
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
    linkKey: {
      type: String,
      default: "link",
    },
    linkTypeKey: {
      type: String,
      default: "linkType",
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
      isDragging: false,
      startX: 0,
      deltaX: 0,
      isClick: true, // 新增：标记是否为点击
    };
  },
  computed: {
    totalSlides() {
      return this.images.length;
    },
    // 内联 SVG 白色占位图
    placeholderImage() {
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="white"/%3E%3C/svg%3E';
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
        return this.placeholderImage; // 返回白色占位图
      }
      return src;
    },
    /**
     * @description: 处理图片加载失败
     * @param {Event} event
     */
    handleImageError(event) {
      event.target.src = this.placeholderImage; // 加载失败时显示白色占位图
      console.log('Image failed to load, using placeholder for index:', this.activeIndex);
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
     * @description: 拖拽图片样式（仅对活跃项图片应用translateX）
     * @param {number} index 索引
     */
    dragImageStyle(index) {
      if (this.isDragging && index === this.activeIndex) {
        return {
          transform: `translateX(${this.deltaX}px)`,
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
    /**
     * @description: 处理链接点击，区分拖拽和点击
     * @param {Event} event
     */
    handleLinkClick(event) {
      console.log(`handleLinkClick: isClick=${this.isClick}, isDragging=${this.isDragging}`);
      if (!this.isClick || this.isDragging) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Link click prevented due to drag or non-click action', {
          isClick: this.isClick,
          isDragging: this.isDragging,
          link: event.currentTarget.href
        });
      } else {
        console.log('Link click allowed', {
          link: event.currentTarget.href
        });
      }
    },
    /**
     * @description: 开始拖拽图片
     * @param {*} event
     */
    startDrag(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = true;
      this.isClick = true;
      this.startX = event.clientX || (event.touches && event.touches[0].clientX);
      this.deltaX = 0;
      this.pauseAutoPlay();
      console.log("Drag started at:", this.startX);
    },
    /**
     * @description: 正在拖拽图片
     * @param {*} event
     */
    onDrag(event) {
      if (!this.isDragging) return;
      const clientX = event.clientX || (event.touches && event.touches[0].clientX);
      this.deltaX = clientX - this.startX;
      if (Math.abs(this.deltaX) > 5) { // 降低阈值到 5px，增加拖拽敏感性
        this.isClick = false;
      }
      console.log("Dragging, deltaX:", this.deltaX, "isClick:", this.isClick);
    },
    /**
     * @description: 结束拖拽图片
     * @param {*} event
     */
    endDrag(event) {
      if (!this.isDragging) return;
      this.isDragging = false;
      const threshold = 50; // 降低阈值到 50px
      let shouldSwitch = false;
      let direction = 0;
      if (this.deltaX < -threshold) {
        this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
        shouldSwitch = true;
        direction = 1;
        console.log(`Drag ended, switched to next slide: ${this.activeIndex}`);
      } else if (this.deltaX > threshold) {
        this.activeIndex =
          (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
        shouldSwitch = true;
        direction = -1;
        console.log(`Drag ended, switched to prev slide: ${this.activeIndex}`);
      }
      if (shouldSwitch) {
        // 切换时，模拟最终位移以实现跟进效果
        this.deltaX = direction * this.thresholdDistance(threshold);
      } else {
        // 不切换时，恢复原位
        this.deltaX = 0;
      }
      // 延迟重置 isClick，防止 click 事件误触发
      setTimeout(() => {
        this.isClick = true;
        console.log('isClick reset to true after delay');
      }, 100);
      console.log('endDrag state', { isClick: this.isClick, isDragging: this.isDragging, deltaX: this.deltaX });
      this.resumeAutoPlay();
    },
    /**
     * @description: 计算切换时的阈值距离（用于跟进动画）
     * @param {number} threshold 阈值
     */
    thresholdDistance(threshold) {
      return threshold * 2; // 示例：阈值50px时，位移100px，让下一张跟进来一半
    },
    /**
     * @description: 下一张
     */
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
    },
    /**
     * @description: 点击页码更新当前项
     * @param {number} index 索引值
     */
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
    overflow: hidden; // 隐藏超出框的部分
    border-radius: 20px; // 确保圆角生效于超出部分
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      display: block;
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