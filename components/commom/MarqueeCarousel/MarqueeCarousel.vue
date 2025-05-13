<template>
  <div class="marquee-carousel">
    <div class="marquee-carousel-title">
      <h3>榮譽獎項</h3>
    </div>
    <div v-swiper:mySwiper="swiperOptions" class="swiperWrap">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in awardsList"
          :key="index"
        >
          <div class="award-item">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <img :src="item.imgUrl" :alt="item.alt" />
              <!-- <div class="award-info">
                <h3>{{ item.year }}</h3>
                <p>{{ item.des }}</p>
              </div> -->
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardsList: [
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/08/2dc8e2cd2f95150f.png",
          //   year: "2024",
          //   des: "「健康Easy卓越大獎2024」",
          //   link: "https://01market.hk01.com/?popup=healtheasyawards2024",
          //   alt: "「健康Easy卓越大獎2024」",
          //   alt_en: "",
          //   title_en: "",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/9fb7b59c6d134014.png",
          //   year: "2024",
          //   des: "香港卓越服務名牌",
          //   link: "https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153",
          //   alt: "希瑪眼科中心_香港服務名牌2024",
          //   alt_en: "Hong Kong Premier Service Brand 2024 Logo",
          //   title_en: "Hong Kong Premier Service Brand 2024",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/86e300274d8bc4ef.png",
          //   year: "2024",
          //   des: "香港經濟日報企業大獎",
          //   link: "https://iet2.hket.com/event/hket_excellence_awards/zh/2024-winner-list.html#",
          //   alt: "香港經濟日報企業大獎 2024",
          //   title_en: "HKET Excellence Awards 2024",

          //   alt_en: "HKET Excellence Awards 2024 Logo",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/788333406bba2c0f.png",
          //   year: "2023",
          //   des: "「ESG約章」行動",
          //   link: "https://www.esgpledge.org.hk/",
          //   alt: "希瑪眼科中心_ESG約章行動",
          //   title_en: "ESG Pledge Scheme",

          //   alt_en: "ESG Pledge Scheme Logo",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/29433265c4f65fdf.png",
          //   year: "2023",
          //   des: "香港服務名牌",
          //   link: "https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153",
          //   alt: "希瑪眼科中心_香港服務名牌2023",
          //   title_en: "Hong Kong Top Service Brand 2023",

          //   alt_en: "Hong Kong Top Service Brand 2023 Logo",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/402f4a682ca2394a.png",
          //   year: "2023",
          //   des: "香港公益金 -「公益卓越獎」",
          //   link: "https://www.commchest.org/tc/news/press-release/detail/1057",
          //   alt: "希瑪眼科中心_香港公益金_公益卓越獎",
          //   title_en: "The community chest 2023",
          //   alt_en: "The community chest 2023 Logo",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/04/16b586d7718ac0a6.png",
          //   year: "2023",
          //   des: "HKCT企業大獎 - 年度傑出綜合專科醫療服務",
          //   link: "https://hkct-awards.com/articles/59",
          //   alt: "希瑪眼科中心_HKCT企業大獎",
          //   title_en: "HKCT Business Awards 2023",
          //   alt_en: "HKCT Business Awards 2023 Logo",
        },

        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/07/8fab0d4a7e7ef4ac.png",
          //   year: "2022",
          //   des: "香港卓越服務名牌",
          //   link: "",
          //   alt: "希瑪眼科中心_香港卓越服務名牌2022",
          //   alt_en: "Hong Kong Premier Service Brand 2022 Logo",
          //   title_en: "Hong Kong Premier Service Brand 2022",
        },

        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/08/a1b0a5b199d5b9a7.png",
          //   year: "2022",
          //   des: "香港服務名牌",
          //   link: "https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153",
          //   alt: "希瑪眼科中心_香港服務名牌2022",
          //   title_en: "Hong Kong Top Service Brand 2022",

          //   alt_en: "Hong Kong Top Service Brand 2022 Logo",
        },
        {
          imgUrl:
            "https://static.cmereye.com/imgs/2024/08/64ae764b38e2a2a7.png",
          //   year: "2022",
          //   des: "社會資本動力獎-標誌獎",
          //   link: "https://features.hkej.com/template/features/html/2022_sc/winners.html",
          //   alt: "希瑪眼科中心_社會資本動力獎2022",
          //   title_en: "Social Capital Builder Logo Award 2022",

          //   alt_en: "Social Capital Builder Logo Award 2022 Logo",
        },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/2023/08/3593bc6113653a80.png",
        //   year: "2022",
        //   des: "香港最有價值品牌大獎",
        //   link: "",
        //   alt: "希瑪眼科中心_香港最有價值品牌大獎2022",
        //   title_en: "Most Valuable Companies in Hong Kong Awards 2022",
        //   alt_en: "Most Valuable Companies in Hong Kong Awards 2022 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/2023/08/ebde2962cbd42e60.png",
        //   year: "2022",
        //   des: "開心工作間",
        //   link: "",
        //   alt: "希瑪眼科中心_開心工作間2022",
        //   title_en: "Happy Company Award 2022",
        //   alt_en: "Happy Company Award 2022 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/2023/08/f4273176866baf9c.png",
        //   year: "2022",
        //   des: "大灣區企業-傑出獎",
        //   link: "",
        //   alt: "希瑪眼科中心_大灣區企業傑出獎2022",
        //   title_en: "Standard Chartered Corporate Achievement Awards 2022",
        //   alt_en: "Standard Chartered Corporate Achievement Awards 2022 Logo",
        // },
        // // {
        // //   imgUrl:
        // //     'https://static.cmereye.com/imgs/2023/01/3b9de76f932cbe48.png',
        // //   year: 'pages.about_us.awards.awards_year_7',
        // //   des: 'pages.about_us.awards.awards_des_7',
        // //   link: 'https://corphub.asia/awards/?route=events&id=1'
        // // }
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg",
        //   year: "2021",
        //   des: "香港服務名牌",
        //   link: "https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153",
        //   alt: "希瑪眼科中心_香港服務名牌2021",
        //   title_en: "Hong Kong Top Service Brand 2021",
        //   alt_en: "Hong Kong Top Service Brand 2021 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards1.jpg",
        //   year: "2021",
        //   des: "香港星級品牌企業獎",
        //   link: "https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153",
        //   alt: "希瑪眼科中心_香港星級品牌企業獎2020-2021",
        //   title_en: "Hong Kong Star Brand Award 2020-2021",
        //   alt_en: "Hong Kong Star Brand Award 2020-2021 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards5.jpg",
        //   year: "2020",
        //   des: "香港最優秀企業大獎",
        //   link: "https://corphub.asia/awards/?route=events&id=1",
        //   alt: "希瑪眼科中心_香港最優秀企業大獎2020",
        //   title_en: "Hong Kong's Most Outstanding Services Awards 2020",
        //   alt_en: "Hong Kong's Most Outstanding Services Awards 2020 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards4.jpg",
        //   year: "2020",
        //   des: "香港旅遊業十優推介",
        //   link: "",
        //   alt: "希瑪眼科中心_香港旅遊業十優推介2020",
        //   title_en: "Hong Kong Tourism Industry Top 10 Recommendations 2020",
        //   alt_en: "Hong Kong Tourism Industry Top 10 Recommendations 2020 Logo",
        // },
        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards3.jpg",
        //   year: "2020",
        //   des: "亞洲最佳價值服務大獎",
        //   link: "https://www.youtube.com/watch?v=7k0FhEoCXus",
        //   alt: "希瑪眼科中心_亞洲最佳價值服務大獎2020",
        //   title_en: "Asia's Most Valuable Service Providers Awards 2020",
        //   alt_en: "Asia's Most Valuable Service Providers Awards 2020 Logo",
        // },

        // {
        //   imgUrl:
        //     "https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards2.jpg",
        //   year: "2020-2021",
        //   des: "商界展關懷",
        //   link: "https://www.caringcompany.org.hk/b5_index.php",
        //   alt: "希瑪眼科中心_商界展關懷2020/2021",
        //   title_en: "Caring Company 2020/2021",
        //   alt_en: "Caring Company 2020/2021 Logo",
        // },
      ],
      swiperOptions: {
        loop: true, // 开启无限循环
        slidesPerView: "auto",
        spaceBetween: 0,
        autoplay: {
          delay: 0, // 延迟时间为 0，立即开始滚动
          disableOnInteraction: false, // 用户操作后不停止自动播放
        },
        speed: 3000, // 滚动速度（单位：毫秒）
        freeMode: true, // 启用自由模式
        allowTouchMove: true, // 禁用触摸滑动
        direction: "horizontal", // 水平方向滚动
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .marquee-carousel {
    margin-top: 33px;
    width: 100%;
    overflow: hidden;
    .marquee-carousel-title {
      h3 {
        text-align: center;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.5;
        letter-spacing: 2px;
      }
    }
    .swiperWrap {
      margin-top: 26px;
      .swiper-wrapper {
                           -webkit-transition-timing-function: linear;
            -moz-transition-timing-function: linear;
            -ms-transition-timing-function: linear;
            -o-transition-timing-function: linear;
            transition-timing-function: linear;
        .swiper-slide {
          width: auto;
          .award-item {
            max-width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .marquee-carousel {
    margin-top: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 90px;
    overflow: hidden;
    .marquee-carousel-title {
      margin-left: 200px;
      flex-shrink: 0;
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: 3px;
      }

      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: -43px;
        top: 50%;
        transform: translateY(-50%);
        height: 90px;
        width: 2px;
        background: red;

        background: #4570b6;
      }
    }
    .swiperWrap {
      .swiper-wrapper {
                           -webkit-transition-timing-function: linear;
            -moz-transition-timing-function: linear;
            -ms-transition-timing-function: linear;
            -o-transition-timing-function: linear;
            transition-timing-function: linear;
        .swiper-slide {
          width: auto;
          .award-item {
            width: 164px;
            height: 170px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 17px;
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>