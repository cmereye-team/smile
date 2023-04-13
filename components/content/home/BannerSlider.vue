<template>
  <div class="main_banner">
    <div class="banner">
      <div
        class="swiper gallery-top"
        v-swiper:bannerSwiper="swiperOptionTop"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <!-- <img class="pcshow" src="https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg" alt="">
          <img class="pcshow" src="https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg" alt="">
          <img class="mbshow" src="https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg" alt="">
          <img class="mbshow" src="https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg" alt=""> -->
          <nuxt-link class="swiper-slide pcShow" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide pcShow" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide mbShow" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide mbShow" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg" alt="">
          </nuxt-link>
        </div>
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
  },
};
</script>
<style lang="scss" scoped>
.banner{
  width: 100vw;
  
}
.swiper-wrapper{
  img{
    width: 100%;
  }
}
</style>
