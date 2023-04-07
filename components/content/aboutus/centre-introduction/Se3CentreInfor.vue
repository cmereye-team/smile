<template>
  <div class="Se2ComIntro">
    <div class="page_container box">
      <div class="booking" style="font-family: Baskervville !important">
        <p>CENTER</p>
      </div>
      <div class="serve_title">
        <p>{{$t('aboutUs.centreIntroduction.Se3CentreInfor.p')}}</p>
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
      <div class="section_text shadow-lg">
        <p>
          <span>{{$t('aboutUs.centreIntroduction.Se3CentreInfor.span1')}}</span><br />
          {{$t('aboutUs.centreIntroduction.Se3CentreInfor.span2')}}<br />
          {{$t('aboutUs.centreIntroduction.Se3CentreInfor.span3')}}<br />
          {{$t('aboutUs.centreIntroduction.Se3CentreInfor.span4')}}<br />
          {{$t('aboutUs.centreIntroduction.Se3CentreInfor.span5')}}<br />
          {{$t('aboutUs.centreIntroduction.Se3CentreInfor.span6')}}
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
          src: require("../../../../asset/image/about-us/centre-introduction/award1.jpg"),
        },
        {
          src: require("../../../../asset/image/about-us/centre-introduction/award2.jpg"),
        },
        {
          src: require("../../../../asset/image/about-us/centre-introduction/award3.jpg"),
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
  margin: 170px 0 0 0;
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
      font-family: "Noto Sans HK";
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
    .content {
      text-align: justify;
      p {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 18px;
        /* or 164% */

        text-align: justify;
        letter-spacing: 0.1em;

        color: #000000;
      }
      .link {
        a {
          color: #4570b6;
        }
      }
      ul {
        border-left: 2px solid #4570b6;
        border-image: -webkit-linear-gradient(#4570b6, #81dbec) 30 30;
        border-image: -moz-linear-gradient(#4570b6, #81dbec) 30 30;
        border-image: linear-gradient(#4570b6, #81dbec) 30 30;
        li,
        div {
          display: flex;
          align-content: center;
          color: #4570b6;
          span {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 20px;
            /* or 44% */

            letter-spacing: 0.1em;

            color: #4b7bbc;
          }
        }
        div span {
          -ms-writing-mode: tb-lr;
          writing-mode: vertical-lr;
        }
      }
    }
  }
}
// pc
@media only screen and (min-width: 768px) {
  .more_lin {
    position: absolute;
    width: 110px;
    height: 46px;
    background: #4570b6;
    border-radius: 0px;
    color: #d9eaed;
    text-align: center;
    letter-spacing: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -35px;
    bottom: -15px;
  }
  .details_box {
    position: absolute;
    background: url("https://static.cmereye.com/imgs/2023/03/a76a352cd7da7d4e.png")
      no-repeat;
    background-size: 100% 100%;
    width: 242px;
    height: 200px;
    right: 364px;
    top: 280px;
    p {
      text-align: center;
      padding: 10px 0;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 30px;
      /* or 200% */
      justify-content: center;
      margin-top: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
    }
  }
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
      font-family: "Noto Sans HK";
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

  .company {
    position: relative;
    background: url("https://static.cmereye.com/imgs/2023/03/0d3dadae028b6e8a.png")
      no-repeat;
    background-size: 100% 100%;
    margin: 70px auto;
    text-align: center;
    height: 344px;
    .mag_top {
      margin-top: 30px;
    }
    .text_blue {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 800;
      font-size: 19px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
    }
    .text_blue2 {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
      margin-bottom: 30px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      /* or 167% */
      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;
      margin-top: 30px;
      color: #4570b6;
    }
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
      /* or 200% */

      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
    }
  }
  p {
    font-size: 15px !important;

    line-height: 1.7 !important;
  }
  .Se2ComIntro .section_text {
    max-width: 738px;height:678px;
    margin-left: 424px;
    box-shadow: 0px 0px 20px rgba(174, 213, 231, 0.75);
  }
  .Se2ComIntro .section_text .content p {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    /* or 120% */

    text-align: justify;
    letter-spacing: 0.1em;

    color: #000000;
  }
  .Se2ComIntro {
    .section_text {
      padding: 49px;
      h1 {
        font-weight: 900;
        letter-spacing: 0.5vw;
      }
      .content {
        padding: 47px;
        h4 {
          font-size: 20px;
          margin-top: 1.8vw;
          font-weight: 900;
        }
        .link {
          margin-top: 1.8vw;
        }
        ul {
          padding-left: 1vw;
          margin-top: 1vw;
          margin-left: -0.5vw;
          margin-bottom: 5vw;
          li {
            display: flex;
            align-items: end;
            margin: 0.5vw 0;
            span {
              font-size: 4vw;
              font-weight: 900;
              line-height: 4vw;
              width: 3vw;
            }
            p {
              font-family: "Noto Sans HK";
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 22px;
              /* or 147% */

              display: flex;
              align-items: center;
              text-align: justify;
              letter-spacing: 0.1em;

              color: #6d6e71;
              padding-left: 28px;
            }
          }
          div {
            display: flex;
            align-items: center;
            margin-top: 2vw;
            width: 80%;
            margin-left: 14px;
            span {
              font-weight: 700;
              font-size: 45px;
              line-height: 20px;
            }
            p {
              font-family: "Noto Sans HK";
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 22px;
              /* or 147% */

              display: flex;
              align-items: center;
              text-align: justify;
              letter-spacing: 0.1em;

              color: #6d6e71;
              padding-left: 44px;
            }
          }
        }
        .award_text {
          margin-left: -0.5vw;
        }
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
  .more_lin {
    position: absolute;
    width: 110px;
    height: 46px;
    background: #4570b6;
    border-radius: 0px;
    color: #d9eaed;
    text-align: center;
    letter-spacing: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -35px;
    bottom: -15px;
  }
  .details_box {
    position: absolute;
    background: url("https://static.cmereye.com/imgs/2023/03/a76a352cd7da7d4e.png")
      no-repeat;
    background-size: 100% 100%;
    width: 242px;
    height: 200px;
    right: 364px;
    top: 280px;
    p {
      text-align: center;
      padding: 10px 0;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 30px;
      /* or 200% */
      justify-content: center;
      margin-top: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
    }
  }
  .img_box {
    display: flex;
    flex-direction: column;
    /* float: left; */
    margin-left: 70px;
    /* margin-top: -38px; */
    width: 304px;
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
    margin-bottom: 30px;
    margin-left: 60px;
  }
  .box {
    position: relative;
  }
  .box {
    .serve_title {
      p {
        font-size: 33px !important;
      }
      font-family: "Noto Sans HK";
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
      left: 20px;
    }
  }

  .company {
    position: relative;
    background: url("https://static.cmereye.com/imgs/2023/03/0d3dadae028b6e8a.png")
      no-repeat;
    background-size: 100% 100%;
    margin: 70px auto;
    text-align: center;
    height: 344px;
    .mag_top {
      margin-top: 30px;
    }
    .text_blue {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 800;
      font-size: 19px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
    }
    .text_blue2 {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
      margin-bottom: 30px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      /* or 167% */
      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;
      margin-top: 30px;
      color: #4570b6;
    }
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
      /* or 200% */

      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
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
    margin-top: 503px;
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
    .content {
      p {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 15px !important;
        line-height: 23px !important;
        /* or 164% */

        text-align: justify;
        letter-spacing: 0.1em;

        color: #000000;
      }
      h4 {
        font-size: 17px;
        font-weight: 600;
        padding-top: 30px;
        padding-bottom: 15px;
      }
      ul {
        margin: 20px 0;
        padding-left: 10px;
        li {
          p {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 300;
            font-size: 8.7px;
            line-height: 18px;
            /* or 207% */

            text-align: justify;
            letter-spacing: 0.1em;
            padding-left: 21px;
            color: #4570b6;
          }
          span {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 26px;
            /* or 44% */
            padding: 10px;
            letter-spacing: 0.1em;
            width: 9vw;
          }
        }
      }
      .xima {
        span {
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 20px;
          /* or 44% */
          padding: 10px;
          letter-spacing: 0.1em;
          width: 9vw;
        }
        p {
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 300;
          font-size: 8.7px;
          line-height: 26px;
          /* or 207% */
          padding-left: 21px;
          text-align: justify;
          letter-spacing: 0.08em;

          color: #4570b6;
        }
      }
    }
  }
}
</style>
