<template>
  <div class="main_banner">
    <div class="banner pcShow">
      <div class="swiper gallery-top" v-swiper:pcBannerSwiper="swiperOptionTop" ref="bannerSwiper">
        <div class="swiper-wrapper">
          <!-- <nuxt-link class="swiper-slide" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/47b5b8d44b95666e.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg" alt="">
          </nuxt-link> -->
          <section v-for="(banner, index) in bannerLists" :key="index" class="swiper-slide">
            <a v-if="banner.isRouterPath" :to="localePath(banner.link)">
              <img :class="banner.className" :src="banner[`pc_${$i18n.locale}Img`]" alt="">
            </a>
            <a v-else :href="banner.link">
              <img :class="banner.className" :src="banner[`pc_${$i18n.locale}Img`]" alt="">
            </a>
          </section>

          <!-- <div class="anim">
            <div class="a"></div>
            <div class="b">
              <div class="b1">SMILE PRO</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="c">
              <div>可能是現實最快完成矯視的方法</div>
              <div>仲有限時優惠，立即瞭解更多</div>
            </div>
            <div class="d">
              <div class="d1"></div>
              <div class="d2"></div>
              <div class="d3"></div>
            </div>
            <div class="e"></div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="banner mbShow">
      <div class="swiper gallery-top" v-swiper:mbBannerSwiper="swiperOptionTop" ref="bannerSwiper">
        <div class="swiper-wrapper">
          <!-- <nuxt-link class="swiper-slide" :to="localePath('/vision-correction/relex-smile')">
            <img src="https://static.cmereye.com/imgs/2023/04/4b25734d8dbba59a.jpg" alt="">
          </nuxt-link>
          <nuxt-link class="swiper-slide" :to="localePath('/vision-correction-presbyopia')">
            <img src="https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg" alt="">
          </nuxt-link> -->
          <nuxt-link v-for="(banner, index) in bannerLists.filter(item => item.mb_cnImg !== '')" :key="index"
            class="swiper-slide" :to="localePath(banner.link)">
            <img :class="banner.className" :src="banner[`mb_${$i18n.locale}Img`]" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/07/f1b5972883516825.jpg',
          pc_hkImg: 'https://static.cmereye.com/static/loffee/imgs/2023_07_1689913503764.avif',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/07/d9f55f7de0ce3890.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/07/43f38bca9b9f2baa.jpg',
          isRouterPath: true
        },
        {
          link: '/smilePro',
          className: 'banner_5',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/06/15fb69bb2972084d.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/06/fafaa16c2fefee9f.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/06/c778636bdc92a1b2.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/06/90f03c94953b46b5.jpg',
          isRouterPath: true
        },
        {
          link: 'https://api.whatsapp.com/send/?phone=85260610511&text=我想了解(W-02) Smile Pro矯視',
          className: 'banner_4',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/05/9f295eeb364d5c18.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/05/f98c9fee4d7f0f66.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/06/5617084c28916bb2.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/06/2f47a87064825e90.jpg',
          isRouterPath: false
        },
        {
          link: '/vision-correction-presbyopia',
          className: 'banner_2',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/7a2b26fa29e337a3.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/a7280ee58048f45f.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg',
          isRouterPath: true
        },
        {
          link: '/consumption-voucher',
          className: 'banner_3',
          pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/d87721cc7012fdd9.jpg',
          pc_hkImg: 'https://static.cmereye.com/imgs/2023/04/ed662418ca7b972a.jpg',
          mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/eef9ad4d737ba85d.jpg',
          mb_hkImg: 'https://static.cmereye.com/imgs/2023/04/17a68f3a305077b9.jpg',
          isRouterPath: true
        }
      ]
    }
  },
  filters: {
    a(_lists) {
      let newLists = []
      if (_lists.length) {
        newLists = _lists.filter(item => item.mb_cnImg === '')
      }
      return newLists
    }
  },
  created() { },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100vw;
  overflow: hidden;
}

.anim {
  width: 100%;
  height: 1000px;
  background: rgb(66, 66, 66);

  .a {
    width: 100px;
    height: 50px;
    background: rgb(255, 199, 199);
    margin: 30px auto;
  }

  .b {
    width: 100%;

    .b1 {
      font-size: 70px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      transform: skewX(-30deg);
    }
  }

  .c {
    width: 550px;
    height: 80px;
    margin: 0 auto;

    &>div {
      width: 100%;
      color: #fff;
      font-size: 35px;
      font-weight: 600;
      overflow: hidden;
      animation: c_anima 3s linear 3s infinite;
      white-space: nowrap;
    }
  }

  .d {
    width: 200px;
    height: 400px;
    margin: 20px auto;
    background: rgb(194, 194, 194);
    animation: d_anima 6s linear infinite;
    position: relative;

    .d1 {
      width: 100px;
      height: 60px;
      background: rgb(255, 214, 214);
      position: absolute;
      right: -50px;
      top: 30px;
      transform: rotate(20deg);
      animation: d1_anima 6s linear 0.6s infinite;
      opacity: 0;
    }

    .d1 {
      width: 100px;
      height: 60px;
      background: rgb(255, 214, 214);
      position: absolute;
      right: -50px;
      top: 30px;
      transform: rotate(20deg);
      // animation: d1_anima 6s linear 0.6s infinite;
      // opacity: 0;
    }

    .d1 {
      width: 100px;
      height: 60px;
      background: rgb(255, 214, 214);
      position: absolute;
      right: -50px;
      top: 30px;
      transform: rotate(20deg);
      // animation: d1_anima 6s linear 0.6s infinite;
      // opacity: 0;
    }
  }

  @keyframes c_anima {
    0% {
      width: 0;
      overflow: hidden;
    }

    100% {
      width: 100%;
      display: none;
    }
  }

  @keyframes d1_anima {
    0% {
      right: -50px;
      top: 30px;
      opacity: 1;
    }

    20% {
      right: -50px;
      top: 30px;
      opacity: 1;
    }

    40% {
      right: -40px;
      top: 35px;
      opacity: 1;
    }

    60% {
      right: -30px;
      top: 30px;
      opacity: 1;
    }

    70% {
      right: -40px;
      top: 35px;
      opacity: 1;
    }

    100% {
      right: -50px;
      top: 30px;
      opacity: 1;
    }
  }

  @keyframes d_anima {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }

    2.5% {
      transform: translateX(250px);
      opacity: 1;
    }

    5% {
      transform: translateX(0px);
      opacity: 1;
    }

    50% {
      transform: translateX(0px);
      opacity: 1;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}

.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
