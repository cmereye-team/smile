<template>
  <div class="main_banner">
    <div class="banner">
      <div
        class="swiper gallery-top"
        v-swiper:bannerSwiper="swiperOptionTop"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide slide-1"></div>
          <div class="swiper-slide slide-2"></div>
        </div>
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: { },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        autoplay: true
      }
    };
  },
  created() {},
  methods: {
    bannerClick() {
      console.log("12");
    },
  },
};
</script>
<style lang="scss" scoped>
.gallery-top {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
@media (min-width: 768px) {
  .banner {
    height: 480px !important;
  }
  .slide-1 {
    background-image: url("https://static.cmereye.com/imgs/2023/04/5282e5a618555ea6.jpg");
  }
  .slide-2 {
    background-image: url("https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg");
  }
}
@media (max-width: 768px) {
  .banner {
    height: 390px !important;
  }
  .section {
    height: 102vw !important;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
  .slide-1 {
    background: url("https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg")
      no-repeat;
    background-size: 100%;
  }
  .slide-2 {
    background: url("https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg")
      no-repeat;
    background-size: 100%;
  }
}
</style>
