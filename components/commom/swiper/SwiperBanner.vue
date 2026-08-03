<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-26 11:48:06
 * @LastEditTime: 2026-08-03 11:09:30
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
      console.log(`gid=${this.gid}, num=${this.num}`);
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
    // async getBannerList() {
    //   let List = [];
    //   let that = this;
    //   const API = `https://admin.hkcmereye.com/api.php/cms/slide/gid/${this.gid}/num/${this.num}`;
    //   // console.log(`gid=${this.gid}, num=${this.num}, API=${API}`);
    //   const formatImgUrl = (url) => {
    //     if (!url) return "";
    //     const prefix = "https://admin.hkcmereye.com";
    //     if (/^(https?:)?\/\//.test(url)) {
    //       return url;
    //     }
    //     return url.startsWith("/") ? `${prefix}${url}` : `${prefix}/${url}`;
    //   };

    //   try {
    //     const response = await fetch(API);
    //     const res = await response.json();
    //     const dataList = res.data || [];

    //     List = dataList.map((item, index) => {
    //       return {
    //         id: Number(item.id),
    //         className: `banner_${index + 1}`,
    //         pc_img: formatImgUrl(item.pic),
    //         mb_img: formatImgUrl(item.mobilepic),
    //         gid: item.gid,
    //         link: that.replaceAmp(item.link),
    //         isExternal: that.isExternal(item.link),
    //         title: item.subtitle,
    //         subtitle: `home-banner-${item.subtitle}`,
    //       };
    //     });

    //     // 关键修改 2：如果只有一张图，动态关闭 loop
    //     if (List.length <= 1) {
    //       this.swiperOption.loop = false;
    //       this.swiperOption.autoplay = false;
    //     }

    //     that.bannerLists = List;
    //   } catch (error) {
    //     console.error("获取 banner 失败:", error);
    //   }
    // },
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
          <nuxt-link
            v-for="(banner, index) in bannerLists"
            :key="`nuxt-${index}-${banner.id}`"
            class="swiper-slide"
            :to="localePath(banner.link)"
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
          </nuxt-link>
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
