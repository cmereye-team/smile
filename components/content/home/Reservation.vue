<template>
  <div class="Se3CentreInfor">
    <div class="award">
      <!-- <div class="flex justify-center page_container">
        <h2>獲得獎項</h2>
      </div> -->

      <div class="img_box">
        <div
          class="inner_box md:flex items-center justify-between page_container py-8 page_container"
        >
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award1.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award2.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award3.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award4.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award5.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award6.png"
            alt
          />
          <img
            src="@/asset/image/about-us/centre-introduction/s3_award7.png"
            alt
          />
        </div>
      </div>

      <!-- <div
        v-swiper:mySwiper="swiperOptionaward"
        class="swiperWrap2 mbShow img_box"
      >
        <div class="swiper-wrapper inner_box page_container">
          <div
            class="swiper-slide"
            v-for="(banner, index) in banner_award"
            :key="index"
          >
            <img :src="banner.src" />
          </div>
        </div>
        <div
          class="swiper-button-prev swiper-button-prev-awad flex items-center justify-center"
        >
          <img
            src="https://static.cmereye.com/imgs/2022/11/81020d89b67c775d.png"
            alt=""
          />
        </div>
        <div
          class="swiper-button-next swiper-button-next-awad flex items-center justify-center"
        >
          <img
            src="https://static.cmereye.com/imgs/2022/11/3fbf637600cc44a3.png"
            alt=""
          />
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner_award: [
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award1.png"),
        },
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award2.png"),
        },
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award3.png"),
        },
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award4.png"),
        },
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award5.png"),
        },
        {
          src: require("@/asset/image/about-us/centre-introduction/s3_award6.png"),
        },
      ],
      swiperOptionaward: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: "3",
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // },
        navigation: {
          nextEl: ".swiper-button-prev-awad", //下一页dom节点
          prevEl: ".swiper-button-next-awad", //前一页dom节点
        },
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  h2 {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    /* identical to box height, or 120% */
    margin: 60px;
    letter-spacing: 0.1em;

    color: #444343;
  }
  //地球
  .bord {
    position: absolute;
    right: 0;
  }
  .Se3CentreInfor {
    .environment {
      h2 {
        border: none;
        &::after {
          display: none;
        }
      }
    }
    .intro {
      text-align: justify;
      p {
        margin: 1vw 0;
      }
    }
    .environment {
      h2 {
        width: 39vw;
        justify-content: end;
        padding: 0;
        &::before {
          width: 33vw;
          left: 0;
        }
      }
      .img_box {
        width: 650px;

        .big_img {
          width: 35vw;
        }
        .small_img {
          width: 17.5vw;
        }
      }
      .text_box {
        width: 550px;
        padding-left: 80px;
        h3 {
          font-weight: 900;
        }
      }
    }
    .award {
      width: 100%;
      margin-bottom: 0;
      margin-top: 10px;
      .img_box {
        margin: 70px 0;

        .inner_box {
          img {
            width: auto;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .img_box {
    .inner_box {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 21vw;
      }
    }
  }
  h2 {
    font-size: 20px;
  }

  .Se3CentreInfor .environment h2 {
    font-size: 16px !important;
  }
  .intro {
    p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 23px;
      /* or 164% */

      text-align: justify;
      letter-spacing: 0.05em;

      color: #6D6E71;
    }
  }
  .Se3CentreInfor .award .img_box[data-v-0c113b80] {
    background: rgba(129, 219, 236, 0.3);
  }

  .swiper-img {
    img {
      width: 100%;
    }
  }

  //地球
  .bord {
    position: absolute;
    right: 0;
    padding-top: 73%;
    width: 50%;
  }
  .Se3CentreInfor {
    .swiper-button-next {
      background-image: url("https://static.cmereye.com/imgs/2022/11/81020d89b67c775d.png");
      background-size: 100%;
    }
    .swiper-button-prev {
      background-image: url("https://static.cmereye.com/imgs/2022/11/3fbf637600cc44a3.png");
      background-size: 100%;
    }
    .section {
      width: unset;
      margin: 10vw 3rem 10vw 3rem;
    }
    .ev-mb-text {
      display: flex;
      justify-content: center;
      h2 ::after {
        width: 20vw !important;
        height: 0;
        border-top: 1px solid #dfdfdf !important;
        right: -20vw !important;
      }
    }
    h2 {
      font-size: 25px;
      margin-bottom: 30px;
      padding: 0 20px;
      border-left: 1px solid #dfdfdf;
      border-right: 1px solid #dfdfdf;
    }

    .text_box {
      p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 23px;
        /* or 182% */

        letter-spacing: 0.1em;

        color: #6D6E71;
      }
      h3 {
        font-size: 18px;
        font-weight: 700;
        padding: 10px 0;
      }
    }
  }
}
</style>
