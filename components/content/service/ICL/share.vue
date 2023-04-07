<template>
  <div class="page_container suitable_box">
    <div class="flex justify-center md:mt-20 mt-10">
      <h2>{{$t('service.icl.share.h2')}}</h2>
    </div>
    <div class="flex mb-28 pcShow justify-center">
      <div class="px-2">
        <img
          src="https://static.cmereye.com/imgs/2022/12/431d01020917af25.jpg"
          alt=""
        />
      </div>
      <div class="px-2">
        <img
          src="https://static.cmereye.com/imgs/2022/12/cc1809d5c22d674e.jpg"
          alt=""
        />
      </div>
      <div class="px-2">
        <img
          src="https://static.cmereye.com/imgs/2022/12/762b14e792fbf3b7.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="mbShow">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/431d01020917af25.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/cc1809d5c22d674e.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/12/762b14e792fbf3b7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="mbShow">
      <button>
        <div class="flex btn-yuyue">
          <img
            src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
            alt=""
            style="width: 12vw"
          />
          <div class="flex flex-col justify-center" style="padding: 0 10px">
            <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
}

@media screen and (min-width: 768px) {
  .suit_box {
    margin-bottom: 190px;
    display: flex;
    align-items: flex-start;

    img {
      height: 100px;
    }

    .suitable {
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        padding-top: 28px;
        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
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
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 15px;
        /* or 136% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
  }
}
</style>
