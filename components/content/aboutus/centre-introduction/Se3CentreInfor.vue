<template>
  <div class="Se2ComIntro">
    <div class="page_container box">
      <div class="booking" style="font-family: Baskervville !important">
        <p>CENTER</p>
      </div>
      <div class="serve_title">
        <p>{{ $t("aboutUs.centreIntroduction.Se3CentreInfor.p") }}</p>
      </div>
      <div class="md:flex pcShow page_container img_box">
        <img
          class="flex-1"
          src="https://static.cmereye.com/imgs/2023/03/11041faf78b0d062.jpg"
          alt
        />
      </div>
      <div class="md:flex mbShow page_container img_box">
        <img
          class="flex-1"
          src="https://static.cmereye.com/imgs/2023/03/11041faf78b0d062.jpg"
          alt
        />
      </div>
      <div
        class="section_text shadow-lg"
        :style="{
          maxWidth: $i18n.locale === 'en' ? '888px' : '738px',
          marginLeft: $i18n.locale === 'en' ? '10px' : '530px',
          height: $i18n.locale === 'en' ? '960px' : '920px',
        }"
      >
        <p :style="{
          textAlign: $i18n.locale === 'en' ? 'justify' : 'initial',
        }">
          <span>{{
            $t("aboutUs.centreIntroduction.Se3CentreInfor.span1")
          }}</span
          ><br class="pcShow" />
          {{ $t("aboutUs.centreIntroduction.Se3CentreInfor.span2") }}<br />
          <br :style="{
          display: $i18n.locale === 'en' ? 'inlineBlock' : '780px',
        }"  />
          <br :style="{
          height: $i18n.locale === 'en' ? '960px' : '780px',
        }" />
          {{ $t("aboutUs.centreIntroduction.Se3CentreInfor.span3") }}<br />
          {{ $t("aboutUs.centreIntroduction.Se3CentreInfor.span4") }}<br />
          {{ $t("aboutUs.centreIntroduction.Se3CentreInfor.span5") }}<br />
          {{ $t("aboutUs.centreIntroduction.Se3CentreInfor.span6") }}
        </p>
      </div>
    </div>

    <!-- <div class="mbShow">
      <div v-swiper:mySwiper="swiperOptionMb" class="swiperWrap">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in banners"
            :key="index"
          >
            <img :src="banner.src" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/centre-introduction/award1.jpg",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/centre-introduction/award2.jpg",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/centre-introduction/award3.jpg",
        },
      ],
      swiperOptionMb: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: "1.5",
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
// comon
.Se2ComIntro {
  margin: 120px 0 0 0;

  h4 {
    background: linear-gradient(90.57deg, #4570b6 0%, #81dbec 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -ms-writing-mode: tb-lr;
  }

  // background: url("https://static.cmereye.com/imgs/2022/11/97761e71d0339c78.png")
  //   no-repeat;
  background-position-y: 70%;
  background-size: 100%;

  .section_text {
    background: #fff;

    p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 20px !important;
      line-height: 35px !important;
      /* or 175% */
      letter-spacing: 0.1em;

      color: #6d6e71;
    }

    span {
      font-weight: 500;
      font-size: 23px !important;
      margin-bottom: 10px;
      display: block;
      color: #4570b6;
    }

    h1 {
      color: #4570b6;
      background: linear-gradient(90.57deg, #4570b6 0%, #81dbec 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
    }
  }
}

// pc
@media only screen and (min-width: 768px) {
  .img_box {
    display: flex;
    flex-direction: column;
    width: 574px;
    float: left;
    margin-left: 97px;
    margin-top: -38px;
    padding-right: 30px;
  }

  .booking {
    p {
      font-size: 60px !important;
      font-family: "Baskervville" !important;
    }

    font-style: normal;
    font-weight: 400;
    line-height: 78px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    margin-bottom: 70px;
    margin-left: 60px;
  }

  .box {
    position: relative;
  }

  .box {
    .serve_title {
      p {
        font-size: 43px !important;
      }

      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;

      line-height: 33px;
      display: flex;
      align-items: center;
      letter-spacing: 16px;

      background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      writing-mode: tb-rl;
      position: absolute;
      top: 28px;
      left: 0;
    }
  }

  p {
    font-size: 15px !important;

    line-height: 1.7 !important;
  }

  .Se2ComIntro .section_text {
    max-width: 738px;
    height: 780px;
    margin-left: 424px;
    box-shadow: 0px 0px 20px rgba(174, 213, 231, 0.75);
  }

  .Se2ComIntro .section_text .content p {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    /* or 120% */

    text-align: justify;
    letter-spacing: 0.1em;

    color: #6d6e71;
  }

  .Se2ComIntro {
    .section_text {
      padding: 49px;

      h1 {
        font-weight: 900;
        letter-spacing: 0.5vw;
      }
    }
  }
}

// mb
@media only screen and (max-width: 768px) {
  .Se2ComIntro {
    margin-bottom: 30px;
  }

  .page_container {
    padding: 0 !important;
  }

  .Se2ComIntro .section_text {
    margin-right: 70px;
    box-shadow: 0px 0px 20px rgba(174, 213, 231, 0.75);
  }

  .Se2ComIntro .section_text p {
    padding: 34px;
    font-style: normal;
    font-weight: 300 !important;
    font-size: 17px !important;
    line-height: 30px !important;
  }

  .section_text p {
    margin-top: -60px;
    font-size: 14px !important;
    padding-top: 70px !important;
    padding-right: 20px !important;

    span {
      font-size: 16px !important;
      // margin-bottom: 0 !important;
    }
  }

  .img_box {
    display: flex;
    flex-direction: column;
    /* float: left; */
    margin-left: 70px;
    /* margin-top: -38px; */
    width: 285px;
  }

  .booking {
    p {
      font-size: 40px !important;
      font-family: "Baskervville" !important;
    }

    font-style: normal;
    font-weight: 400;
    // line-height: 78px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    margin-bottom: 10px;
    margin-left: 70px;
  }

  .box {
    position: relative;
  }

  .box {
    .serve_title {
      p {
        font-size: 28px !important;
      }

      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;

      line-height: 33px;
      display: flex;
      align-items: center;
      letter-spacing: 16px;

      background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      writing-mode: tb-rl;
      position: absolute;
      top: 17px;
      left: 20px;
    }
  }

  h2 {
    font-size: 14px;
  }

  .award_text {
    padding-bottom: 32px;
  }

  //集团介绍 cmmer 中间部分
  .Se2ComIntro {
    margin-top: 480px;

    .section_text {
      h1 {
        position: absolute;
        left: 12vw;
        top: 34vw;
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
        /* or 133% */
        letter-spacing: 0.1em;
      }
    }
  }
}
</style>
