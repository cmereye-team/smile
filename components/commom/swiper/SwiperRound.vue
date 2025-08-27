<template>
  <div class="smile-left-swiper" @wheel.prevent="handleWheel">
    <div class="swiper-container">
      <div class="swiper-wrap">
        <div
          class="swiper-slide"
          v-for="(item, index) in shareList"
          :key="index"
          :class="{ active: index === activeIndex }"
          :style="getSlideStyle(index)"
          v-show="shouldShowSlide(index)"
        >
          <div
            class="avatar-container"
            @click="handleSlideClick(index, item[hrefKey])"
            :class="{ 'overlay-mask': shouldApplyMask(index) }"
          >
            <img
              :src="getImageSrc(item)"
              :alt="item[nameKey] || item.nameEn"
              @error="handleImageError($event, index)"
            />
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
      debugInfo: "", // 调试信息
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
        console.warn(`图片源无效，索引 ${this.activeIndex}：`, item);
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
      let bottom = 0

      const radius = 40;
      // const offsetX = 25;

      if (index === this.activeIndex) {
        width = 208;
        transform = `translate(0, -50%)`;
        zIndex = 3;
        top = 50;
        left = 55;
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
        width = 93;
        transform = `translate(0, -${radius}%)`;
        zIndex = 2;
        top = 22;
        left = 44;
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        width = 93;
        transform = `translate(0, ${radius}%)`;
        zIndex = 2;
        top = 70;
        left = 42;
      } else {
        width = 93;
        transform = `translate(0, 0)`;
        zIndex = 0;
        top = 50;
        left = 0;
      }

      return {
        width: `${width}px`,
        height: `${width}px`, // 保持圆形
        transform,
        zIndex,
        top: `${top}%`,
        left: `${left}%`,
        transition: "all 0.5s ease",
        position: 'absolute', // 确保绝对定位
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
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
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
    shouldApplyMask(index) {
      return (
        index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides ||
        index === (this.activeIndex + 1) % this.totalSlides
      );
    },
    handleImageError(event, index) {
      console.error(`图片加载失败，索引 ${index}：`, event.target.src);
      event.target.src = "https://picsum.photos/80/80";
    },
    handleSlideClick(index, url) {
      console.log(`点击幻灯片触发，索引 ${index}，URL: ${url}`);
      this.debugInfo = `点击幻灯片: ${index}, URL: ${url}`;
      if (index === this.activeIndex) {
        this.handlePlayClick(url);
      } else if (index === (this.activeIndex - 1 + this.totalSlides) % this.totalSlides) {
        this.handlePrevClick();
      } else if (index === (this.activeIndex + 1) % this.totalSlides) {
        this.handleNextClick();
      }
    },
    handlePlayClick(url) {
      console.log(`播放按钮触发，URL: ${url}`);
      this.debugInfo = `播放点击, URL: ${url}`;
      this.showPopover(url);
    },
    handlePrevClick() {
      console.log("上一张按钮触发");
      this.debugInfo = "上一张点击";
      this.activeIndex = (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
      console.log(`活跃幻灯片更改为: ${this.activeIndex}`);
    },
    handleNextClick() {
      console.log("下一张按钮触发");
      this.debugInfo = "下一张点击";
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
      console.log(`活跃幻灯片更改为: ${this.activeIndex}`);
    },
    handleWheel(event) {
      console.log("鼠标滚轮触发，方向:", event.deltaY);
      this.debugInfo = `滚轮事件, 方向: ${event.deltaY > 0 ? '向下' : '向上'}`;
      event.preventDefault(); // 防止页面滚动
      if (event.deltaY > 0) {
        this.handleNextClick();
      } else {
        this.handlePrevClick();
      }
    },
    showPopover(url) {
      console.log(`显示弹出窗口触发，URL: ${url}`);
      this.debugInfo = `弹出窗口显示, URL: ${url}`;
      this.popoverUrl = url;
      const popover = document.getElementById('youtube-popover');
      if (popover) {
        popover.showPopover();
        console.log("显示YouTube弹出窗口:", url);
      }
    },
    closePopover() {
      this.popoverUrl = null;
      const popover = document.getElementById('youtube-popover');
      if (popover) {
        popover.hidePopover();
        console.log("YouTube弹出窗口关闭");
      }
    },
    startAutoPlay() {
      if (this.autoPlay && this.timer === null) {
        this.timer = setInterval(this.handleNextClick, this.interval);
        console.log(`自动播放开始，间隔: ${this.interval}ms, timer: ${this.timer}`);
        this.debugInfo = "自动播放开始";
      }
    },
  },
  mounted() {
    console.log("SwiperRound挂载，shareList:", this.shareList);
    this.startAutoPlay();
  },
  beforeDestroy() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      console.log("组件销毁，自动播放停止");
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
          console.log("自动播放停止");
          this.debugInfo = "自动播放停止";
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

.smile-left-swiper {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: auto;
  overflow: hidden; // 防止滚轮影响页面
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

  &.active .avatar-container {
    outline: 2px solid green; // 活跃项高亮
  }

  .avatar-container {
    position: absolute; // 确保相对于 swiper-slide 定位
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: auto; // 确保事件生效
    cursor: pointer;
    outline: 1px dashed red; // 可视化调试

    &:hover {
      outline: 2px solid green; // 悬停高亮
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; // 保持比例填充
      object-position: center; // 居中对齐，防止扭曲
      pointer-events: none; // 防止图片拦截点击
    }

    &.overlay-mask:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%);
      border-radius: 50%;
      pointer-events: none; // 确保不拦截点击
      z-index: 1; // 确保蒙版在图片上方
    }
  }

  .play-button {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 55px;
    height: 42px;
    z-index: 5; // 提高层级
    pointer-events: auto;
    cursor: pointer;
    outline: 1px dotted blue; // 可视化调试

    &:before {
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
    z-index: 5; // 提高层级
    cursor: pointer;
    pointer-events: auto;
    outline: 1px dotted yellow; // 可视化调试

    &:before {
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
    z-index: 5; // 提高层级
    cursor: pointer;
    pointer-events: auto;
    outline: 1px dotted yellow; // 可视化调试

    &:before {
      background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMzUgMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS42NTA0IDIzLjYzNDlMMzIuOTQ2OCAyLjMzODUiIHN0cm9rZT0iIzQ1NzBCNiIgc3Ryb2tlLXdpZHRoPSIzLjQ2MTU0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkuOTEwMTIgNi42NDYyM0wxMC4xMTgyIDI1LjE2NjZMMjguNjM4NSAyNS4zNzQ2IiBzdHJva2U9IiM0NTcwQjYiIHN0cm9rZS13aWR0aD0iMy40NjE1NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=");
      @extend %avater-btn;
    }
  }
}

.name-list {
  position: absolute;
  top: 0;
  left: 50px;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
  z-index: 1; // 降低层级，避免干扰
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
  
  .youtube-popover {
    width: 90vw;
    height: 50vh;
    max-height: 300px;
  }
}
</style>