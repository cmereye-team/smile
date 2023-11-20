<template>
  <div class="page_container suitable_box">
    <div class="flex justify-center md:mt-20 mt-10">
      <div v-html="$t('service.icl.share.h2')" class="title-content"></div>
    </div>
    <div class="share-img">
      <a href="https://www.youtube.com/watch?v=B12IjJ3tFHE" target="_blank">
        <img
          src="https://static.cmereye.com/imgs/2023/10/d33a83515c64bf26.png"
          alt=""
        />
      </a>
    </div>
    <div class="pcShow swiper-pc-share">
      <div v-swiper:mySwiper="swiperOption1" class="swiperWrap">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=5ihrzFvOy38')"
          >
            <img
              src="https://static.cmereye.com/imgs/2022/12/431d01020917af25.jpg"
              alt=""
            />
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=e-c_qRuvWTA')"
          >
            <img
              src="https://static.cmereye.com/imgs/2022/12/cc1809d5c22d674e.jpg"
              alt=""
            />
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=2t7JjTab4xA')"
          >
            <img
              src="https://static.cmereye.com/imgs/2022/12/762b14e792fbf3b7.jpg"
              alt=""
            />
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://youtu.be/CEbbKFeFdnc')"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/11/8f7fe6edb4aada62.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="mbShow">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=5ihrzFvOy38')"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/431d01020917af25.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=e-c_qRuvWTA')"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/cc1809d5c22d674e.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://www.youtube.com/watch?v=2t7JjTab4xA')"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/762b14e792fbf3b7.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="swiper-slide"
            @click="shareForm('https://youtu.be/CEbbKFeFdnc')"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/11/8f7fe6edb4aada62.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="mbShow" style="display: none">
      <button>
        <div class="flex btn-yuyue">
          <img
            src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
            alt=""
            style="width: 12vw"
          />
          <div class="flex flex-col justify-center" style="padding: 0 10px">
            <span>{{
              $t("consumptionVoucher.subscribe") +
              "/" +
              $t("consumptionVoucher.query")
            }}</span>
            <span>6061 0511</span>
          </div>
        </div>
      </button>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption1: {
        slidesPerView: "auto",
        spaceBetween: 10,
        slidesPerView: "3",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        slidesPerView: "3",
        navigation: {
          nextEl: ".swiper-button-prev-awad", //下一页dom节点
          prevEl: ".swiper-button-next-awad", //前一页dom节点
        },
      },
    };
  },
  created() {},
  methods: {
    shareForm(_url) {
      window.open(_url);
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570b6;
}

@media screen and (min-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 37px;
    height: 51px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-next {
    background-image: url("https://static.cmereye.com/imgs/2023/11/a7c0239f4c5321f8.png");
    right: -50px;
  }
  .swiper-button-prev {
    background-image: url("https://static.cmereye.com/imgs/2023/11/4333213c7ff5339b.png");
    left: -50px;
  }

  .swiper-wrapper {
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .swiper-pc-share {
    max-width: 1080px;
    margin: 55px auto 85px;
    position: relative;
  }
  .swiper-slide {
    width: 100%;
    img {
      width: 100%;
      min-height: 231px;
    }
  }
  .title-content {
    color: #4570b6;
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    position: relative;
    padding-bottom: 15px;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .share-img {
    margin: 70px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 47px;
    }
  }
  .suit_box {
    margin-bottom: 190px;
    display: flex;
    align-items: flex-start;

    img {
      height: 100px;
    }

    .suitable {
      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        padding-top: 28px;
        text-align: center;
        letter-spacing: 0.1em;

        color: #6d6e71;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .pcShow {
    // display: none !important;
  }
  .btn-yuyue {
    margin: 20px 0;
  }

  .suitable_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    & > div:nth-child(1) {
      margin-bottom: 40px;
    }
  }

  h2 {
    font-size: 16px;
  }
  h2::after {
    width: 6vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    right: -6vw;
  }
  h2::before {
    width: 6vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    left: -6vw;
  }
  .suit_box {
    margin-top: 30px;
    flex-wrap: wrap;
    align-items: flex-end;

    img {
      max-width: 60%;
    }

    .suitable {
      flex: 1;
      /*设置最小宽度，才会让元素排不下，导致换行排列*/
      min-width: calc((100% - 10px) / 2);

      span {
        padding: 28px 0;
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 15px;
        /* or 136% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6d6e71;
      }
    }
  }
  .title-content {
    position: relative;
    padding-bottom: 15px;
    color: #4570b6;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 23.305px; /* 116.525% */
    letter-spacing: 5px;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .share-img {
    margin-bottom: 30px;
  }
  :deep(.swiper-wrapper) {
    display: flex;
    flex-direction: column;
    & > div:nth-child(2) {
      margin: 30px 0;
    }
  }
}
</style>
