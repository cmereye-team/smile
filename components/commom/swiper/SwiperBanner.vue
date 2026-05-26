<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-26 11:48:06
 * @LastEditTime: 2026-05-26 14:55:36
 * @FilePath: /components/commom/swiper/SwiperBanner.vue
 * @Description: 轮播图Banner
-->
<script>
export default {
  name: "SwiperBanner",
  props: {
    gid: {
      type: Number,
      default: 1,
    },
    num: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      bannerLists: [],
    };
  },
  computed: {
    bannerCount() {
      return this.bannerLists.length;
    },
    swiperOption() {
      this.bannerLists.length > 1
        ? {
            loop: true,
            autoplay: true,
            observer: true,
            observeParents: true,
            duration: 5000,
            onSlideChangeEnd: function (swiper) {
              swiper.update();
              mySwiper.startAutoplay();
              mySwiper.reLoop();
            },
          }
        : {
            loop: false,
            autoplay: false,
          };
    },
  },
  methods: {
    /**
     * @description: 判断是否为外部链接
     * @param {string} url 链接地址
     */
    isExternal(url) {
      // 如果为空或只是 # 或 / 开头，视为内部
      console.log(
        `判断链接: ${url}, 是否为内部: ${
          !url || url.startsWith("#") || url.startsWith("/")
        }`
      );
      if (!url || url.startsWith("#") || url.startsWith("/")) return false;

      // 任何带协议的都视为外部（包含 http/https/tel/mailto/whatsapp: 等）
      return (
        /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ||
        /^\/\//.test(url) || // 协议相对链接 //example.com
        url.startsWith("tel:") ||
        url.startsWith("mailto:") ||
        url.startsWith("whatsapp:")
      );
    },
    replaceAmp(str) {
      if (str.indexOf("&amp;") > -1) {
        str = str.replace(/&amp;/g, "&");
      }
      return str;
    },
    async getBannerList() {
      let List = [];
      let that = this;
      console.log(`gid: ${this.gid}, num: ${this.num}`);
      const API = `https://admin.hkcmereye.com/api.php/cms/slide/gid/${this.gid}/num/${this.num}`;
      const formatImgUrl = (url) => {
        if (!url) return "";
        const prefix = "https://admin.hkcmereye.com";
        if (/^(https?:)?\/\//.test(url)) {
          return url;
        }
        return url.startsWith("/") ? `${prefix}${url}` : `${prefix}/${url}`;
      };
      await fetch(API)
        .then(function (response) {
          return response.json();
        })
        .then(function (res) {
          List = res.data.map((item, index) => {
            return {
              id: Number(item.id),
              className: `banner_${index + 1}`,
              pc_img: formatImgUrl(item.pic),
              mb_img: formatImgUrl(item.mobilepic),
              gid: item.gid,
              link: that.replaceAmp(item.link),
              isExternal: that.isExternal(item.link),
              title: item.subtitle,
              subtitle: `home-banner-${item.subtitle}`,
            };
          });
          that.bannerLists = List;
        });
    },
  },
  mounted() {
    this.getBannerList();
  },
};
</script>
<template>
  <div class="main_banner">
    <div class="center-Banner container mx-auto">
      <div
        class="swiper gallery-top"
        v-if="bannerCount"
        v-swiper:bannerSwiper="swiperOption"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <nuxt-link
            v-for="(banner, index) in bannerLists"
            v-if="!banner.isExternal"
            :key="`nuxt-${index}`"
            class="swiper-slide"
            :to="localePath(banner.link)"
            :data-banner-title="banner.subtitle"
            :data-banner-id="index + 1"
          >
            <picture>
              <source media="(min-width: 768px)" :srcset="banner.pc_img" />
              <img
                :class="banner.className"
                :src="banner.mb_img"
                :alt="banner.title"
                :title="banner.title"
              />
            </picture>
          </nuxt-link>
          <a
            v-else
            v-for="(banner, index) in bannerLists"
            :key="`a-${index}`"
            class="swiper-slide"
            :href="banner.link"
            target="_blank"
            rel="noopener noreferrer"
            :data-banner-title="banner.subtitle"
            :data-banner-id="index + 1"
          >
            <picture>
              <source media="(min-width: 768px)" :srcset="banner.pc_img" />
              <img
                :class="banner.className"
                :src="banner.mb_img"
                :alt="banner.title"
                :title="banner.title"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .center-Banner {
    padding: 0 15px;
    .gallery-top {
      border-radius: 10px;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .center-Banner {
    padding: 0 15px;
  }
}
@media screen and (min-width: 992px) {
  .center-Banner {
    max-width: 1320px;
    .gallery-top {
      border-radius: 15px;
    }
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
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
