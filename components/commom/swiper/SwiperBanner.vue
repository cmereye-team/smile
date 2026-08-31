<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-26 11:48:06
 * @LastEditTime: 2026-08-31 17:50:57
 * @FilePath: /components/commom/swiper/SwiperBanner.vue
 * @Description: 轮播图Banner
-->
<script>
import { $api } from "~/utils/api.js";
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
    setStyle: {
      type: String,
      default: "",
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
  methods: {
    async getBannerList() {
      try {
        const res = await $api("/api/v1/slides", {
          params: { gid: this.gid, pageSize: this.num },
        });
        if (Array.isArray(res.data)) {
          this.bannerLists = res.data.map((item) => ({ ...item }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    isExternal(url) {
      // 如果为空或只是 # 开头，视为内部
      if (!url || url.startsWith("#")) return false;

      // 任何带协议的都视为外部（包含 http/https/tel/mailto/whatsapp: 等）
      return (
        /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ||
        /^\/\//.test(url) || // 协议相对链接 //example.com
        url.startsWith("tel:") ||
        url.startsWith("mailto:") ||
        url.startsWith("whatsapp:")
      );
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
  <div class="main_banner" :class="bannerLists.length ? setStyle : ''">
    <div class="center-Banner container mx-auto">
      <div
        class="swiper rounded-xl"
        v-if="bannerLists.length > 0"
        v-swiper:bannerSwiper="swiperOption"
        ref="bannerSwiper"
      >
        <div class="swiper-wrapper">
          <component
            v-for="(banner, index) in bannerLists"
            :key="`nuxt-${index}-${banner.id}`"
            :is="isExternal(banner.link) ? 'a' : 'NuxtLink'"
            :href="isExternal(banner.link) ? banner.link : undefined"
            :to="!isExternal(banner.link) ? banner.link : undefined"
            :target="isExternal(banner.link) ? '_blank' : undefined"
            :rel="isExternal(banner.link) ? 'noopener noreferrer' : undefined"
            class="swiper-slide"
            :data-banner-title="banner.subtitle"
            :data-banner-id="index + 1"
          >
            <picture>
              <source media="(min-width: 768px)" :srcset="banner.pic" />
              <img
                class="rounded-xl"
                :class="banner.className"
                :src="banner.pic_mobile"
                :alt="banner.title"
                :title="banner.subtitle"
              />
            </picture>
          </component>
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
