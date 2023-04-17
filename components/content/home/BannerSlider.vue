<template>
  <div class="main_banner">
    <div class="banner pcShow">
      <div
        class="swiper gallery-top"
        v-swiper:pcBannerSwiper="swiperOptionTop"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <!-- <nuxt-link class="swiper-slide" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg" alt="">
          </nuxt-link> -->
          <nuxt-link v-for="(banner,index) in bannerLists" :key="index" class="swiper-slide" :to="localePath(banner.link)">
            <img :src="banner[`pc_${$i18n.locale}Img`]" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="banner mbShow">
      <div
        class="swiper gallery-top"
        v-swiper:mbBannerSwiper="swiperOptionTop"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <!-- <nuxt-link class="swiper-slide" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg" alt="">
          </nuxt-link> -->
          <nuxt-link v-for="(banner,index) in bannerLists" :key="index" class="swiper-slide" :to="localePath(banner.link)">
            <img :src="banner[`mb_${$i18n.locale}Img`]" alt="">
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
      },
      bannerLists: [
        {
          link: '/vision-correction/relex-smile',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/f2112504122c3a75.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg'
        },
        {
          link: '/vision-correction-presbyopia',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg'

        }
      ]
    }
  },
  created() {},
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.banner{
  width: 100vw;
  overflow: hidden;
}
.swiper-wrapper{
  img{
    width: 100%;
  }
}
</style>
