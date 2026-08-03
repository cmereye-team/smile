<template>
  <div class="main_banner">
    <div class="banner">
      <div
        class="swiper gallery-top"
        v-if="bannerLists.length > 1"
        v-swiper:pcBannerSwiper="swiperOptionTop"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <section
            v-for="(banner, index) in bannerLists"
            :key="index"
            class="swiper-slide"
          >
            <NuxtLink v-if="banner.link" :to="banner.link">
              <picture>
                <source :srcset="banner.pic" media="(max-width: 768px)" />
                <img
                  :class="banner.className"
                  :src="banner.pic_mobile"
                  :alt="banner.title"
                  :title="banner.subtitle"
                />
              </picture>
            </NuxtLink>
            <div v-else>
              <picture>
                <source :srcset="banner.pic" media="(max-width: 768px)" />
                <img
                  :class="banner.className"
                  :src="banner.pic_mobile"
                  :alt="banner.title"
                  :title="banner.subtitle"
                />
              </picture>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { $api } from "~/utils/api.js";
export default {
  components: {},
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true,
        onSlideChangeEnd: function (swiper) {
          swiper.update();
          mySwiper.startAutoplay();
          mySwiper.reLoop();
        },
      },
      bannerLists: [],
      num: 5,
    };
  },
  filters: {
    a(_lists) {
      let newLists = [];
      if (_lists.length) {
        newLists = _lists.filter((item) => item.mb_cnImg === "");
      }
      return newLists;
    },
  },
  created() {
    this.getBannerList();
  },
  methods: {
    async getBannerList() {
      try {
        const res = await $api("/api/v1/slides", {
          params: { gid: 1 },
        });
        if (Array.isArray(res.data)) {
          bannerList.value = res.data.map((item) => ({ ...item }));
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and(max-width:768px) {
  .banner {
    margin-top: 24vw;
  }
}

.banner {
  width: 100vw;
  overflow: hidden;
  :deep(.swiper-wrapper) {
    img {
      box-sizing: border-box;
      padding: 0 3vw;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
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

    & > div {
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
