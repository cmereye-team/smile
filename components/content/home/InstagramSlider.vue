<template>
  <div class="ig_box section" v-if="screenWidth > 768">
    <div class="title flex justify-center items-center"><img src="../../../asset/image/common/IG_gradient.svg" alt=""><span><strong>cmer_smile</strong></span></div>
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap ig_slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="(banner,index) in banners" :key="index">
          <img :src="banner.src">
        </div>
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

      <div class="swiper-button-prev flex items-center justify-center"> <img src="../../../asset/image/common/left-white.svg" alt=""> </div>
      <div class="swiper-button-next flex items-center justify-center"> <img src="../../../asset/image/common/right-white.svg" alt=""></div>

    </div>
  </div>
  <div class="ig_box section" v-else>
    <div class="title flex justify-center items-center"><img src="../../../asset/image/common/IG_gradient.svg" alt=""><span><strong>cmer_smile</strong></span></div>
    <div v-swiper:mySwiper="swiperOptionMb" class="swiperWrap ig_slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="(banner,index) in banners" :key="index">
          <img :src="banner.src">
        </div>
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

      <div class="swiper-button-prev flex items-center justify-center"> <img src="../../../asset/image/common/left-white.svg" alt=""> </div>
      <div class="swiper-button-next flex items-center justify-center"> <img src="../../../asset/image/common/right-white.svg" alt=""></div>

    </div>
  </div>
</template>
<script>
export default {            
  data() {
    return {
      screenWidth: '',//屏幕宽度
      banners: [
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s1.jpg", link: "" },
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s2.jpg", link: "" },
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s3.jpg", link: "" },
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s4.jpg", link: "" },
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s5.jpg", link: "" },
        { src: "https://static.cmereye.com/imgs/smile/images/home/ins_s6.jpg", link: "" },
      ],
      swiperOptionMb:{
        loop: true,
        slidesPerView: 'auto',         
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: "5",
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },

        on: {
          slideChange() {

          },
          tap() {

          }
        }
      },
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',         
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: "7",
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },

        on: {
          slideChange() {

          },
          tap() {

          }
        }
      }
    }
  },
  watch: {
        screenWidth: {
          handler: function (val, oldVal) {
            if (val < 768) {
              // console.log('屏幕宽度小于768px')
            } else {
              // console.log('屏幕宽度大于768px')
            }
          },
          immediate: true
        },
      },
      created() { 
    if (process.client) {
          this.screenWidth = document.body.clientWidth
          // console.log('this.screenWidth===',this.screenWidth);
          window.onresize = () => {
            return (() => {
              this.screenWidth = document.body.clientWidth
            })
          }
        }
  },
}
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  margin-bottom: 0;
}
.swiper-button-prev,
.swiper-button-next {
  background-image: none;
  background-color: rgba(223, 223, 223, 0.5);
  border-radius: 100%;
  width: 2.5vw;
  height: 2.5vw;

  img {
    width: 0.8vw;
  }
}
.swiper-button-prev {
  left: 6vw;
}

.swiper-button-next {
  right: 6vw;
}
.swiperWrap {
  margin-top: 3vw;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.ig_box {
  .title {
    img {
      width: 2.5vw;
      margin-right: 0.5vw;
    }
    span {
      background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.5vw;
      font-weight: bolder;
      margin-bottom: 0.5vw;
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper-button-prev,
.swiper-button-next {
  background-image: none;
  background-color: rgba(223, 223, 223, 0.5);
  border-radius: 100%;
  width: 5.5vw;
  height: 5.5vw;

  img {
    width: 1.8vw;
  }
}
.swiper-button-prev{
  left: 7vw;
  top: 15vw;
}
.swiper-button-next{
  right: 7.5vw;
  top: 15vw;
}

}
</style>