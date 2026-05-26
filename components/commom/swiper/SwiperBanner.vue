<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-26 11:48:06
 * @LastEditTime: 2026-05-26 15:14:18
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
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  computed: {
    bannerCount() {
      return this.bannerLists.length;
    },
  },
  methods: {
    /**
     * @description: 判断是否为外部链接
     * @param {string} url 链接地址
     */
    isExternal(url) {
      if (!url || url.startsWith("#") || url.startsWith("/")) return false;
      return (
        /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ||
        /^\/\//.test(url) ||
        url.startsWith("tel:") ||
        url.startsWith("mailto:") ||
        url.startsWith("whatsapp:")
      );
    },
    replaceAmp(str) {
      if (str && str.indexOf("&amp;") > -1) {
        str = str.replace(/&amp;/g, "&");
      }
      return str;
    },
    async getBannerList() {
      let List = [];
      let that = this;
      const API = `https://admin.hkcmereye.com/api.php/cms/slide/gid/${this.gid}/num/${this.num}`;
      console.log(`gid=${this.gid}, num=${this.num}, API=${API}`);
      const formatImgUrl = (url) => {
        if (!url) return "";
        const prefix = "https://admin.hkcmereye.com";
        if (/^(https?:)?\/\//.test(url)) {
          return url;
        }
        return url.startsWith("/") ? `${prefix}${url}` : `${prefix}/${url}`;
      };

      try {
        const response = await fetch(API);
        const res = await response.json();
        const dataList = res.data || [];

        List = dataList.map((item, index) => {
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

        // 关键修改 2：如果只有一张图，动态关闭 loop
        if (List.length <= 1) {
          this.swiperOption.loop = false;
          this.swiperOption.autoplay = false;
        }

        that.bannerLists = List;
      } catch (error) {
        console.error("获取 banner 失败:", error);
      }
    },
  },
  watch: {
    // 监听 gid 的变化，一旦父组件传过来的 gid 变了，重新获取列表
    gid: {
      handler(newVal) {
        if (newVal) {
          this.getBannerList();
        }
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="main_banner">
    <div class="center-Banner container mx-auto">
      <div
        class="swiper rounded-xl"
        v-if="bannerLists.length > 0"
        v-swiper:bannerSwiper="swiperOption"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <template v-for="(banner, index) in bannerLists">
            <nuxt-link
              v-if="!banner.isExternal"
              :key="`nuxt-${index}-${banner.id}`"
              class="swiper-slide"
              :to="localePath(banner.link)"
              :data-banner-title="banner.subtitle"
              :data-banner-id="index + 1"
            >
              <picture>
                <source media="(min-width: 768px)" :srcset="banner.pc_img" />
                <img
                  class="rounded-xl"
                  :class="banner.className"
                  :src="banner.mb_img"
                  :alt="banner.title"
                  :title="banner.title"
                />
              </picture>
            </nuxt-link>
            <a
              v-else
              :key="`a-${index}-${banner.id}`"
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
                  class="rounded-xl"
                  :class="banner.className"
                  :src="banner.mb_img"
                  :alt="banner.title"
                  :title="banner.title"
                />
              </picture>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .center-Banner {
    padding: 0 15px;
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
