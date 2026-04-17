<template>
  <div class="main_banner">
    <div class="banner lbv-banner">
      <div class="lbv-banner-container">
        <h2 class="text-xl lg:text-3xl font-black lg:font-bold text-[#4570B6]">第一視角預覽</h2>
        <h3 class="lbv-banner-title text-[#4570B6] text-xl lg:text-3xl font-black md:mb-10 lg:mb-[68px]">{{ currentBannerTitle }}</h3>
        <div
          class="swiper gallery-top lbv-swiper"
          v-swiper:lbvBannerSwiper="swiperOptionTop"
          ref="bannerSwiper"
           @slideChange="onSlideChange"
        >
          <div class="swiper-wrapper">
           
            <!-- 延伸景深 -->
            <div class="swiper-slide lbv-slide">
              <div class="lbv-slide-content">
                <div class="lbv-slide-image">
                  <img src="https://statichk.cmermedical.com/cmermedical/image/20260317/banner2.webp" alt="室外場景" class="lbv-background-image">
                 
                </div>
               
              </div>
            </div>


             <div class="swiper-slide lbv-slide">
              <div class="lbv-slide-content">
                <div class="lbv-slide-image">
                  <img src="https://statichk.cmermedical.com/cmermedical/image/20260317/banner3.webp" alt="室內場景" class="lbv-background-image">
                 
                </div>
               
              </div>
            </div>
           
          </div>
          <!-- 导航按钮 -->
           <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-prev lbv-swiper-button-prev" viewBox="0 0 62 62" fill="none">
  <path d="M62 31C62 48.1792 48.1792 62 31 62C13.8208 62 -7.02527e-06 48.1792 -6.27434e-06 31C-5.52342e-06 13.8208 13.8208 1.70872e-06 31 2.45964e-06C48.1792 3.21057e-06 62 13.8208 62 31ZM34.9783 12.5292L18.3158 29.1917C17.7992 29.7083 17.5408 30.3542 17.67 31C17.67 31.6458 17.9283 32.2917 18.3158 32.8083L34.9783 49.4708C36.0117 50.375 37.5617 50.375 38.4658 49.4708L38.7242 49.2125C39.6283 48.3083 39.6283 46.7583 38.7242 45.8542L23.87 31L38.7242 16.1458C39.6283 15.2417 39.6283 13.6917 38.7242 12.7875L38.4658 12.5292C37.5617 11.625 36.0117 11.625 34.9783 12.5292Z" fill="#4570B6"/>
</svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-next lbv-swiper-button-next" viewBox="0 0 62 62" fill="none">
  <path d="M-1.35505e-06 31C-6.04128e-07 48.1792 13.8208 62 31 62C48.1792 62 62 48.1792 62 31C62 13.8208 48.1792 1.70872e-06 31 2.45964e-06C13.8208 3.21057e-06 -2.10598e-06 13.8208 -1.35505e-06 31ZM27.0217 12.5292L43.6842 29.1917C44.2008 29.7083 44.4592 30.3542 44.33 31C44.33 31.6458 44.0717 32.2917 43.6842 32.8083L27.0217 49.4708C25.9883 50.375 24.4383 50.375 23.5342 49.4708L23.2758 49.2125C22.3717 48.3083 22.3717 46.7583 23.2758 45.8542L38.13 31L23.2758 16.1458C22.3717 15.2417 22.3717 13.6917 23.2758 12.7875L23.5342 12.5292C24.4383 11.625 25.9883 11.625 27.0217 12.5292Z" fill="#4570B6"/>
</svg>
         
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
        autoplay: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.lbv-swiper-button-next',
          prevEl: '.lbv-swiper-button-prev',
        },
       
        on: {
          slideChange: (swiper) => {
            // console.log('slideChange', swiper);
            // if (swiper) {
            //   const index = swiper.realIndex % this.bannerTitles.length;
            //   this.updateBannerTitle(index);
            // }
          },
           onSlideChangeEnd: function (swiper) {
        //     console.log('slideChangeEnd', swiper);
        //   swiper.update();

        },
        }
      },
      bannerLists: [
        // {
        //   link: '/vision-correction/relex-smile',
        //   className: 'banner_1',
        //   pc_cnImg: 'https://static.cmereye.com/static/loffee/imgs/2023_07_1689913503763.avif',
        //   pc_hkImg: 'https://static.cmereye.com/static/loffee/imgs/2023_07_1689913503764.avif',
        //   pc_enImg: 'https://static.cmereye.com/static/loffee/imgs/2023_07_1689913503764.avif',
        //   mb_cnImg: 'https://static.cmereye.com/imgs/2023/07/d9f55f7de0ce3890.jpg',
        //   mb_hkImg: 'https://static.cmereye.com/imgs/2023/07/43f38bca9b9f2baa.jpg',
        //   isRouterPath: false
        // },
        // {
        //   link: '/smilePro',
        //   className: 'banner_5',
        //   pc_cnImg: 'https://static.cmereye.com/static/loffee/imgs/050623_1280-480SC.avif',
        //   pc_hkImg: 'https://static.cmereye.com/static/loffee/imgs/050623_1280-480TC.avif',
        //   pc_enImg: 'https://static.cmereye.com/static/loffee/imgs/050623_1280-480TC.avif',
        //   mb_cnImg: 'https://static.cmereye.com/imgs/2023/06/c778636bdc92a1b2.jpg',
        //   mb_hkImg: 'https://static.cmereye.com/imgs/2023/06/90f03c94953b46b5.jpg',
        //   isRouterPath: false
        // },
        // {
        //   link: 'https://api.whatsapp.com/send/?phone=85260610511&text=我想了解(W-02) Smile Pro矯視',
        //   className: 'banner_4',
        //   pc_cnImg: 'https://static.cmereye.com/imgs/2023/05/9f295eeb364d5c18.jpg',
        //   pc_hkImg: 'https://static.cmereye.com/imgs/2023/05/f98c9fee4d7f0f66.jpg',
        //   pc_enImg: 'https://static.cmereye.com/imgs/2023/05/f98c9fee4d7f0f66.jpg',
        //   mb_cnImg: 'https://static.cmereye.com/imgs/2023/06/5617084c28916bb2.jpg',
        //   mb_hkImg: 'https://static.cmereye.com/imgs/2023/06/2f47a87064825e90.jpg',
        //   isRouterPath: true
        // },
        // {
        //   link: '/vision-correction-presbyopia',
        //   className: 'banner_2',
        //   pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/7a2b26fa29e337a3.jpg',
        //   pc_hkImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
        //   pc_enImg: 'https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg',
        //   mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/a7280ee58048f45f.jpg',
        //   mb_hkImg: 'https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg',
        //   isRouterPath: false
        // },
        // {
        //   link: '/',
        //   className: 'banner_3',
        //   pc_cnImg: 'https://static.cmereye.com/imgs/2023/04/d87721cc7012fdd9.jpg',
        //   pc_hkImg: 'https://static.cmereye.com/imgs/2023/04/ed662418ca7b972a.jpg',
        //   pc_enImg: 'https://static.cmereye.com/imgs/2023/04/ed662418ca7b972a.jpg',
        //   mb_cnImg: 'https://static.cmereye.com/imgs/2023/04/eef9ad4d737ba85d.jpg',
        //   mb_hkImg: 'https://static.cmereye.com/imgs/2023/04/17a68f3a305077b9.jpg',
        //   isRouterPath: false
        // }
      ],
      optionList: 0,
      link: "https://api.whatsapp.com/send/?phone=85260610511&amp;text=我想了解(W-Xmas01) Smile Pro矯視聖誕優惠 将连接中的&amp; 用js 替换为 &    ",
      num: 5,
      currentBannerTitle: '室外',
      bannerTitles: ['室外', '室內'],
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
     onSlideChange() {
      if (this.$refs.bannerSwiper && this.$refs.bannerSwiper.swiper) {
        const swiper = this.$refs.bannerSwiper.swiper
        // 獲取當前索引（如果是 loop 模式，需要使用 realIndex）
        this.currentIndex = swiper.realIndex
 this.updateBannerTitle(this.currentIndex);
      }
    },
    updateBannerTitle(index) {
      this.currentBannerTitle = this.bannerTitles[index] || '室外';
    },
    async getBannerList() {
      let List = [];
      let that = this;
      if (this.$i18n.locale === "hk") {
        await fetch(
          `https://admin.hkcmereye.com/api.php/cms/slide/gid/1/num/${this.num}`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            List = res.data.map((item, index) => {
              return {
                className: `banner_${index + 1}`,
                pc_hkImg: `https://admin.hkcmereye.com${item.pic}`,
                mb_hkImg: `https://admin.hkcmereye.com${item.mobilepic}`,
                gid: item.gid,
                link: that.replaceAmp(item.link),
                isRouterPath: item.title == "link" ? true : false,
              };
            });
          });
      } else if (this.$i18n.locale === "cn") {
        await fetch(
          `https://admin.hkcmereye.com/api.php/cms/slide/gid/2/num/${this.num}`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            List = res.data.map((item, index) => {
              return {
                className: `banner_${index + 1}`,
                pc_cnImg: `https://admin.hkcmereye.com${item.pic}`,
                mb_cnImg: `https://admin.hkcmereye.com${item.mobilepic}`,
                gid: item.gid,
                link: that.replaceAmp(item.link),
                isRouterPath: item.title == "link" ? true : false,
              };
            });
          });
      } else {
        await fetch(
          `https://admin.hkcmereye.com/api.php/cms/slide/gid/3/num/${this.num}`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            List = res.data.map((item, index) => {
              return {
                className: `banner_${index + 1}`,
                pc_enImg: `https://admin.hkcmereye.com${item.pic}`,
                mb_enImg: `https://admin.hkcmereye.com${item.mobilepic}`,
                gid: item.gid,
                link: that.replaceAmp(item.link),
                isRouterPath: item.title == "link" ? true : false,
              };
            });
          });
      }
      this.bannerLists = List;
      this.$nextTick(() => {
        this.optionList = List.length;
      });
    },
    // 转换 &amp;
    replaceAmp(str) {
      if (str.indexOf("&amp;") > -1) {
        str = str.replace(/&amp;/g, "&");
      }
      return str;
    },
  },
};
</script>
<style lang="scss" scoped>
.main_banner {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.lbv-banner {
  width: 100%;
  max-width: 1200px;
}

.lbv-banner-container {
  text-align: center;
}

// .lbv-banner-title {
//   font-size: 20px;
//   font-weight: 900;
//   color: #4570B6;
//   margin-bottom: 60px;
// }

.lbv-swiper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   background: #f5f5f5;
}

.lbv-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
}

.lbv-slide-content {
  width: 100%;
  height: 100%;
  max-width: 952px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lbv-slide-image {
  position: relative;
  width: 100%;

  margin-bottom: 20px;
  border-radius: 8px;
//   overflow: hidden;

}

.lbv-background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lbv-phone-image {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 10;
}

.lbv-slide-title {
  font-size: 18px;
  font-weight: 600;
  color: #4570b6;
  margin-bottom: 5px;
}

.lbv-slide-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.lbv-slide-features {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.lbv-feature-item {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.lbv-feature-clear {
  font-weight: 600;
  color: #4570b6;
}

// 导航按钮样式
.lbv-swiper-button-prev,
.lbv-swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 62px;
  height: 62px;
//   background: #4570B6;
//   border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.lbv-swiper-button-prev {
  left: 40px;
}

.lbv-swiper-button-next {
  right: 40px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next,
.swiper-button-next, .swiper-container-rtl .swiper-button-next {
 background-image: none;
}

// .lbv-swiper-button-prev::after,
// .lbv-swiper-button-next::after {
//   font-size: 20px;
//   color: #4570b6;
//   font-weight: bold;
// }

// 响应式设计
@media screen and (max-width: 767px) {
  .lbv-swiper {
    max-width: 90%;
  }
  .lbv-phone-image {
    width: 100px;
    bottom: -15px;
  }
  
  // .lbv-banner-title {
  //   font-size: 20px;
  //   margin-bottom: 0px;
  // }
  
  .lbv-slide-title {
    font-size: 16px;
  }
  
  .lbv-swiper-button-prev,
  .lbv-swiper-button-next {
    width: 30px;
    height: 30px;
    display: none;
  }
  
  .lbv-swiper-button-prev::after,
  .lbv-swiper-button-next::after {
    font-size: 16px;
  }
  .lbv-slide {
    padding: 20px 15px;
  }
}

@media screen and (max-width: 480px) {
 
  
  .lbv-phone-image {
    width: 80px;
    bottom: -10px;
  }
  
  .lbv-slide {
    padding: 20px 15px;
  }
}
</style>
