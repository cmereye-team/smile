<template>
  <div class="section vedio_box md:font-black">
    <!--  -->

    <div class="vedio_slider page_container">
      <div
        class="video_title"
        :style="{ display: $i18n.locale == 'en' ? 'none' : 'block' }"
      >
        <h2>{{ $t("home.VedioSlider.p") }}</h2>
      </div>
      <div class="booking">
        <p>
          CASES <br class="mbShow" />
          SHARING
        </p>
      </div>
      <div
        v-swiper:mySwiper="swiperOption"
        class="swiperWrap video_swiper bg_swiper"
        v-if="screenWidth > 768"
      >
        <div class="swiper-wrapper">
          <!-- 改div 为a标签   用href 替代@click -->
          <a
            class="swiper-slide"
            v-for="(banner, index) in banners"
            :key="index"
            :href="banner.link"
            target="_blank"
          >
            <div class="swiper_di">
              <img :src="banner.src" />
              <nuxt-link
                class="link_des"
                :to="localePath(banner.link)"
              ></nuxt-link>
            </div>
          </a>
        </div>
        <div class="swiper-button-prev flex items-center justify-center">
          <img src="../../../asset/image/common/left-white.svg" alt="" />
        </div>
        <div class="swiper-button-next flex items-center justify-center">
          <img src="../../../asset/image/common/right-white.svg" alt="" />
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
      <div v-swiper:mySwiper="swiperOptionMb" class="swiperWrap" v-else>
        <div class="swiper-wrapper">
          <a
            class="swiper-slide"
            v-for="(banner, index) in banners"
            :key="index"
            :href="banner.link"
            target="_blank"
          >
            <img :src="banner.src" />
            <nuxt-link
              class="link_des"
              :to="localePath(banner.link)"
            ></nuxt-link>
          </a>
        </div>
        <div class="swiper-button-prev flex items-center justify-center">
          <img src="../../../asset/image/common/left-white.svg" alt="" />
        </div>
        <div class="swiper-button-next flex items-center justify-center">
          <img src="../../../asset/image/common/right-white.svg" alt="" />
        </div>
      </div>
      <nuxt-link
        class="link_more"
        :to="localePath('video')"
        style="cursor: pointer"
      >
        <span>{{ $t("home.VedioSlider.span") }}</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: "", //屏幕宽度
      banners: [
        {
          src: "https://static.cmereye.com/imgs/smile/images/home/video.png",
          link: "https://www.youtube.com/watch?v=L5GFWM7Fxqs",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/home/video_2.png",
          link: "https://youtu.be/oHDOFYMEUsk",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/home/veido_3.png",
          link: "https://youtu.be/beGIk4tkS7Y",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/6ee7800e03ae4969.jpg",
          link: "https://www.youtube.com/watch?v=qBsPhkIaVfo",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/435ff83ed8fbf4f3.jpg",
          link: "https://www.youtube.com/watch?v=IQpaEi58v1E&list=PLWVonQr1f7Xjow3tYHO6H94hRtL5xzZV_&index=10",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/f365550b8ef5c296.jpg",
          link: "https://www.youtube.com/watch?v=gRKFwHXBAzc",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/6f51f1a1f3960431.jpg",
          link: "https://www.youtube.com/watch?v=c6dwJ1Cbgxw&list=PLWVonQr1f7XjXu6TpwCe4O4FObpvNAr4W&index=8",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/6e09727035f3d564.jpg",
          link: "https://www.youtube.com/watch?v=inD-CATvEl4&list=PLWVonQr1f7XjXu6TpwCe4O4FObpvNAr4W&index=42",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/0438578fdfa8c322.jpg",
          link: "https://www.youtube.com/watch?v=T3K97UlXpHg",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/a19d77a42c97bea4.jpg",
          link: "https://www.youtube.com/watch?v=87SuKdfCmgg",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/17749e5722a43f96.jpg",
          link: "https://www.youtube.com/watch?v=5ihrzFvOy38&list=PLWVonQr1f7Xjow3tYHO6H94hRtL5xzZV_&index=6",
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/c587dd17175185f5.jpg",
          link: "https://www.youtube.com/watch?v=pNdhPiqPzT0",
        },
      ],
      swiperOptionMb: {
        direction: "vertical",
        loop: true,
        centeredSlides: true,
        spaceBetween: 35,
        slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          },
        },
      },
      swiperOption: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: "2.8",
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          },
        },
      },
    };
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        if (val < 768) {
          // console.log("屏幕宽度小于768px");
        } else {
          // console.log("屏幕宽度大于768px");
        }
      },
      immediate: true,
    },
  },
  created() {
    if (process.client) {
      this.screenWidth = document.body.clientWidth;
      // console.log('this.screenWidth===',this.screenWidth);
      window.onresize = () => {
        return () => {
          this.screenWidth = document.body.clientWidth;
        };
      };
    }
  },
  methods: {
    toVideoDetail(_url) {
      window.open(_url);
    },
  },
};
</script>
<style>
.swiper-scrollbar {
  margin-bottom: 10px;
}
.swiper-scrollbar-drag {
  background: #5a93c9;
}
</style>
<style lang="scss" scoped>
/* 当前点点的样式 */

body .gradient_font {
  background: #fff !important;
}
.bg_swiper {
  background: rgba(174, 213, 231, 0.7);
  margin-left: 174px !important;
}
.link_des {
  font-size: 20px;
}
.section {
  width: 100%;
  margin-bottom: 0;
}
.swiper-button-prev,
.swiper-button-next {
  background-image: none;
  background-color: #4570b6;
  border-radius: 100%;
  width: 2.5vw;
  height: 2.5vw;

  img {
    width: 0.8vw;
  }
}
.swiper-button-prev {
  left: 395px;
}

.swiper-button-next {
  right: 395px;
}
.vedio_slider {
  position: relative;
  // background: #f3fcfe;
  padding: 70px 0;
  .link_more {
    position: absolute;
    z-index: 90;
    bottom: 54px;
    left: 113px;
    width: 129px;
    height: 53px;
    background: #4570b6;
    border-radius: 0px;
    transition: all 0.5s;
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    color: #d9eaed;
    display: block;
    padding: 10px;
    margin: 0 auto;
    margin-top: 39px;
    // text-align: center;
    // display: flex;
    justify-content: center;
    // align-items: center;
    span {
      font-size: 20px;
    }
  }
}
.swiperWrap {
  margin: 0vw auto;
  .swiper-slide {
    color: #c4c4c4;
    text-align: center;
    letter-spacing: 0.2vw;
    font-size: 1.3vw;
    img {
      width: 100%;
      height: 100%;
      // border-radius: 10px;
      // border: 2px solid #81dbec;
      // border-radius: 10px;
      margin: 7px auto;
    }
  }
  .swiper-slide-active {
    color: #4570b6;
    img {
      // border: 2px solid #4570b6;
    }
  }
}
::v-deep .swiper-button-prev,
.swiper-button-next {
  display: none !important;
}
@keyframes slidein {
  0% {
    // background: linear-gradient(94.37deg, #4570b6 12.08%, #81dbec 92.9%);
  }
  100% {
    background: linear-gradient(94.37deg, #81dbec 12.08%, #4570b6 92.9%);
  }
}
.swiper_di {
  width: 364px;
  height: 100%;
  overflow: hidden;
}
.swiper_di img {
  margin: 0 !important;
  @apply transition duration-500  ease-in-out transform  hover:scale-105 hover:-translate-x-1 hover:-translate-y-1;
}
@media screen and (min-width: 768px) {
  .swiper-slide {
    cursor: pointer;
  }
  .booking {
    p {
      font-family: "Baskervville" !important;
    }
    margin-left: 54px;

    font-family: "Baskervville" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 78px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    margin-bottom: 20px;
  }
  .video_title {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 43px;
    line-height: 62px;
    display: flex;
    align-items: center;
    letter-spacing: 16px;

    background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    writing-mode: tb-rl;
    position: absolute;

    top: 88px;

    left: -11px;
  }
  h2 {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 43px !important;
    line-height: 62px !important;
    display: flex;
    align-items: center;

    letter-spacing: 18px;

    background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    writing-mode: tb-rl;
    border: none;
    padding: 0;
  }
  h2:before {
    content: none;
  }
  h2:after {
    content: none;
  }
  .swiperWrap {
    padding: 34px 50px;
  }
  .mbshow {
    display: none;
  }
  .vedio_box {
    h2 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      /* identical to box height, or 120% */

      text-align: center;
      letter-spacing: 0.1em;

      color: #444343;
    }
  }
}
@media screen and (max-width: 768px) {
  .swiperWrap {
    position: absolute;
    background: #aed5e7;
    padding: 30px;
    width: 80%;
    right: 0;

    height: 180vw;
    max-height: 180vw;
  }
  .vedio_slider {
    position: relative;

    height: 170vw;
  }
  .booking {
    margin-left: 60px;

    font-family: "Baskervville" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    margin-bottom: 20px;
  }
  .video_title {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 28px;

    display: flex;
    align-items: center;

    background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    writing-mode: tb-rl;
    position: absolute;
    top: 10px;
    left: 30px;
    h2 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 400;
      font-size: 43px !important;
      line-height: 62px;
      display: flex;
      align-items: center;

      letter-spacing: 18px;

      background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      writing-mode: tb-rl;
      border: none;
      padding: 0;
    }
    h2:before {
      content: none;
    }
    h2:after {
      content: none;
    }
    h2 {
      letter-spacing: 11px;
    }
  }
  .swiper-slide {
    height: auto !important;
  }
  .link_des {
    font-size: 15px;
    color: #444343;
  }
  .vedio_slider {
    padding: 0 0 9vw;
  }
  ::v-deep .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }
  .swiperWrap {
    margin: 0vw auto;
    .swiper-slide {
      color: #c4c4c4;
      text-align: center;
      letter-spacing: 0.2vw;
      font-size: 1.3vw;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        // border: 2px solid #81dbec;
        border-radius: 10px;
        margin: 7px auto;
      }
    }
    .swiper-slide-active {
      color: #4570b6;
      img {
        // border: 2px solid #4570b6;
      }
    }
  }
  .video_title {
    h2 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height, or 120% */

      text-align: center;
      letter-spacing: 0.1em;
      padding: 0 4px;
      color: #444343;
    }
    h2::after {
      width: 10vw;
      height: 0;
      border-top: 1px solid #dfdfdf;
      right: -10vw;
    }
    h2::before {
      width: 9vw;
      height: 0;
      border-top: 1px solid #dfdfdf;
      left: -9vw;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    background-color: #4570b6;
    border-radius: 100%;
    width: 5.5vw;
    height: 5.5vw;

    img {
      width: 1.8vw;
    }
  }
  .swiper-button-prev {
    left: 7vw;
    top: 15vw;
  }
  .swiper-button-next {
    right: 7.5vw;
    top: 15vw;
  }
  .pcshow {
    display: none;
  }
  .vedio_box {
    overflow: hidden;
  }
  .vedio_slider {
    .link_more {
      position: absolute;
      z-index: 90;
      bottom: 45px;
      left: 32px;
      width: 129px;
      height: 53px;
      background: #4570b6;
      border-radius: 0px;
      transition: all 0.5s;
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;
      color: #d9eaed;
      // display: block;
      // padding: 10px;
      // margin: 0 auto;
      margin-top: 0;
      // text-align: center;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
