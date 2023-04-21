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
            <img :class="banner.className" :src="banner[`pc_${$i18n.locale}Img`]" alt="">
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
            <img :class="banner.className" :src="banner[`mb_${$i18n.locale}Img`]" alt="">
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
          className: 'banner_1',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/f2112504122c3a75.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg'
        },
        {
          link: '/vision-correction-presbyopia',
          className: 'banner_2',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/7a2b26fa29e337a3.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/a7280ee58048f45f.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg'
        },
        {
          link: '/consumption-voucher',
          className: 'banner_3',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/d87721cc7012fdd9.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/04/ed662418ca7b972a.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/eef9ad4d737ba85d.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/04/17a68f3a305077b9.jpg'
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
