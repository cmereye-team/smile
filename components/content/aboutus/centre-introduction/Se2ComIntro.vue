<template>
  <div class="Se2ComIntro">
    <div class="company page_container">
      <div class='company_tit'>
        <p class="text_blue">香港希瑪國際眼科醫療集團</p>
        <p class="text_blue2">（簡稱：希瑪眼科，股份代碼：3309.HK）</p>
      </div>
      <p>
        由眼科醫生林順潮教授於2012年創辦<br class="mbShow"/><span class="pcShow">，</span>總部設於香港，旗下擁有15間醫療機構<br/>包括香港中環眼科中心<br class="mbShow"/>
        旺角中心，和沙田、銅鑼灣、觀塘、元朗和<br class="mbShow"/>荃灣診所<br class="pcShow" />還有內地深圳、北京<br class="mbShow"/><span class="pcShow">、</span>上海、昆明，惠州和珠海的分院<br />
        集團員工人數超過900人<span class="pcShow">，</span><br class="mbShow"/>是香港首間大型連鎖上市眼科集團
      </p>
      <p class="mag_top">
        <span style="margin-bottom:10px;">希瑪眼科中心</span><br />
        擴展至全港擁有10間眼科診所、<br class="mbShow"/>4間微笑矯視中心、 2間視光中心<br />
        以及2間嘉賓眼科專科及激光矯視手術中心<br class="mbShow"/>（希瑪全資附屬公司）<br class="pcShow" />
        眼科診所及<br class="mbShow"/>中心遍佈港、九、新界<br class="mbShow"/><span class="pcShow">，</span>交通便利，環境舒適
      </p>
      <a class="more_lin">了解更多</a>
    </div>
    <div class="page_container box">
      <div class="booking">
        <p>VISION</p>
      </div>
      <div class="serve_title">
        <p>經營理念</p>
      </div>

      <div class="section_text md:flex shadow-lg">
        <div class="details_box">
          <p>
            我們的集團名稱 <br />正正反映著我們的<br
              class="pcShow"
            />理念與執著！
          </p>
        </div>
        <div class="content mx-12 md:mx-0">
          <ul>
            <li>
              <span>C</span>
              <p>
                 <i>專業臨床服務</i>
                <i>Professional <em>C</em>linical Services</i>
              </p>
            </li>
            <li>
              <span>M</span>
              <p>
                 <i>現代化管理</i>
                <i>Modern <em>M</em>anagement</i>
              </p>
            </li>
            <li>
              <span>E</span>
              <p>
                <i>優質教育</i>
                <i>Quality <em>E</em>ducation</i>
              </p>
            </li>
            <li>
              <span>R</span>
              <p>
                <i>開創性科研</i>
                <i>Pioneering <em>R</em>esearch</i>
              </p>
            </li>
            <div class="xima">
              <span>希瑪</span>
              <p>
                「希」望為眼睛帶來希望之光；「希瑪」與「喜瑪」同音，喜馬拉雅山脈為世界海拔最高的山脈，寓意希瑪眼科憑着優質臨床服務、現代化管理、優質教學與培訓以及領先研究，不斷追求卓越，攀登高峰的理念
              </p>
            </div>
          </ul>
          <div class="award_text">
            <h4>憑藉醫療技術和服務聲譽，我們榮獲：</h4>
            <p>2020年港股「最佳價值醫藥及醫療股公司」大獎</p>
            <p>2019年大健康產業創新獎</p>
            <p>2018年香港上市公開招股認購超過1500倍 (全港十大之一)</p>
          </div>
        </div>
      </div>
      <div class="md:flex pcShow page_container img_box">
        <img
          class="flex-1"
          src="../../../../asset/image/about-us/centre-introduction/award1.jpg"
          alt
        />
        <img
          class="flex-1"
          src="../../../../asset/image/about-us/centre-introduction/award2.jpg"
          alt
        />
        <img
          class="flex-1"
          src="../../../../asset/image/about-us/centre-introduction/award3.jpg"
          alt
        />
      </div>
    </div>

    <div class="md:flex mbShow page_container img_box">
       <img
         class="flex-1"
         src="../../../../asset/image/about-us/centre-introduction/award1.jpg"
         alt
       />
       <img
         class="flex-1"
         src="../../../../asset/image/about-us/centre-introduction/award2.jpg"
         alt
       />
       <img
         class="flex-1"
         src="../../../../asset/image/about-us/centre-introduction/award3.jpg"
         alt
       />
    </div>
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
  h4 {
    background: #6d6e71;
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

        line-height: 18px;
        /* or 164% */

        text-align: justify;
        letter-spacing: 0.1em;

        color: #6d6e71;
      }
      .link {
        a {
          color: #4570b6;
        }
      }
      ul {
        // border-left: 2px solid #4570b6;
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
.company_tit{
  transform: translateY(-10px);
  display: inline-block;
  background: #fff;
}
.company_tit p{
  line-height:1.5 !important; 
}
.Se2ComIntro .section_text .xima>span{font-size:40px !important;}

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
    font-size: 17px;
    padding: 5px;
    white-space: pre;
  }
  .details_box {
    position: absolute;
    background: url("https://static.cmereye.com/imgs/2023/03/a76a352cd7da7d4e.png")
      no-repeat;
    background-size: 100% 100%;
    width: 202px;
    height: 153px;
        right: 498px;
    top: 204px;
    p {
      text-align: center;

      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;


    line-height: 30px !important;
      /* or 200% */
      justify-content: flex-end;

      display: flex;
      align-items: flex-start;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
    }
  }
  .img_box {
        display: flex;
    flex-direction: column;
    width: 392px;
    position: absolute;
    bottom: -65px;
    right: 86px;
  }
  .booking {
    p {
      font-size: 60px !important;
      font-family: "Baskervville" !important;
    }
    font-family: "Baskervville" !important;
    font-style: normal;
    font-weight: 300;
    line-height: 78px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    margin-bottom: 50px;
    margin-left: 58px;
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
      top: 29px;
      left: 0;
    }
  }

  .company {
       position: relative;
    background: url(https://static.cmereye.com/imgs/2023/03/0d3dadae028b6e8a.png) no-repeat;
    background-size: 100% 95%;
    margin: 70px auto;
    text-align: center;
    height: 441px;
    max-width: 1004px!important;
    width: auto;
    // background-position-y: -30;
    background-position: bottom;
    .mag_top {
      margin-top: 30px;
    }
    .text_blue {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 23px !important;
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
      font-weight: 400;
      font-size: 16.5px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
      margin-bottom: 10px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
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
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      /* or 200% */

      align-items: center;
      text-align: center;
      letter-spacing: 0.1em;

      color: #6d6e71;
    }
  }
  p {
    font-size: 20px;
    line-height: 1.7 !important;
  }
  .Se2ComIntro .section_text {
    max-width: 1000px;
    margin: auto;
    box-shadow: 0px 0px 20px rgba(174, 213, 231, 0.75);
    margin-left: 118px;
  }
  .Se2ComIntro .section_text .content p {
  
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;

    line-height: 18px;
    /* or 120% */

    text-align: justify;
    letter-spacing: 0.1em;

    color: #6d6e71;
  }
  .Se2ComIntro {
    .section_text {
      padding: 52px;    max-width: 698px;max-height:669px;
      h1 {
        font-weight: 900;
        letter-spacing: 0.5vw;
      }
      .content {

        h4 {
          font-size: 20px;
          margin-top: 40px;
          font-weight: 400;
        }
        .link {
          margin-top: 1.8vw;
          a {
          }
        }
        ul {

          li {
            display: flex;
            align-items: center;
            margin-bottom: 20px ;
            span {
              font-size: 55px;
              font-weight: bold;
                  width: 50px;
                  text-align: center;
                  margin-left: -4px;
            }
            p {
              font-family: "Noto Sans HK";
              font-style: normal;
              font-weight: 300;

             line-height: 25px !important;
              /* or 147% */

              display: flex;
             flex-flow: column;
              text-align: justify;
              letter-spacing: 0.1em;

              color: #6d6e71;
              padding-left: 28px;
              i{font-style: normal;
              em{font-style: normal;
    font-weight: 400;
    border-bottom: 1px solid;}
              }
              i:first-child{font-weight:400;}
              i:last-child{font-size:18px;}
            }
          }
          div {
            display: flex;
            align-items: flex-start;
            margin-top: 38px;

            span {
              font-weight: 700;
              font-size: 60px;
              line-height: 20px;
              padding-left: 8px;
              padding-right: 8px;
            }
            p {
              font-family: "Noto Sans HK";
              font-style: normal;
              font-weight: 300;

                 line-height: 30px !important;
              /* or 147% */

              display: flex;
              align-items: center;
              text-align: justify;
              letter-spacing: 0.1em;

              color: #6d6e71;
              padding-left: 36px;
            }
          }
        }
        .award_text {
          
        }
      }
    }
  }
}

// mb
@media only screen and (max-width: 768px) {
  .company_tit{
    transform: translateY(-12px);
  }
  .Se2ComIntro{
    position: relative;
  }
  .Se2ComIntro .section_text {
    margin-left: 80px;padding-top: 1px;
  }
  .page_container {
    padding: 0 !important;
  }
  .more_lin {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #4570b6;
    border-radius: 0px;
    color: #d9eaed;
    text-align: center;
    letter-spacing: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -20px;
    font-size: 14px;
    padding: 5px;
    white-space: pre;
    flex-direction: row;
  }
  .details_box {
    // position: absolute;
    background: url(https://static.cmereye.com/imgs/2023/03/a76a352cd7da7d4e.png) no-repeat;
    background-size: 93% 100%;
    width: 260px;
    height: 139px;
    margin-left: 37px;
    margin-top: 37px;
    /* right: 364px; */
    top: 0;
    right: 0;
    p {
      text-align: center;
      padding: 10px 0 0 5px;
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
    width: 254px;
    position: absolute;
    bottom: -444px;
    left: 20px;
  }
  .booking {
    p {
      font-size: 40px !important;
      font-family: "Baskervville" !important;
    }
    font-family: "Baskervville" !important;
    font-style: normal;
    font-weight: 300;
    line-height: 78px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: rgba(174, 213, 231, 0.5);
    // margin-bottom: 70px;
    // margin-left: 18vw;
    margin: 50px 0 20px 20vw;
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
      top: 20px;
      left: 30px;
    }
  }

  .company {
    position: relative;
    background: url("https://static.cmereye.com/imgs/2023/03/bb1a387f486a992b.png")
      no-repeat;
    background-size: 100% 98%;
    background-position: bottom;
    margin: 70px auto;
    text-align: center;
    // height: 622px;
    margin: 0 30px;
    margin-bottom: 30px;
    padding: 0 17px 50px !important;
    .mag_top {
      margin-top: 30px;
    }
    .text_blue {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
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
      font-weight: 300;
      font-size: 12px;
      line-height: 23px;
      /* or 128% */
      text-align: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.12em;

      color: #4570b6;
      margin-bottom: 10px;
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
      // font-weight: 300;
      font-size: 14px;
      line-height: 30px;
      /* or 200% */
      font-weight: 300;
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
    padding: 20px 20px 40px 20px;
    h4{
      font-weight: 500;
      font-size: 20px !important;
    }
  }
  //集团介绍 cmmer 中间部分
  .Se2ComIntro {
    .section_text {
      box-shadow: 0px 0px 20px rgba(174, 213, 231, 0.75);
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
      
      p{
        i{    display: block;
        font-style: normal;    text-align: left;}
        i:last-child{font-size:10px;}
        
      }
    }
    .content {
        margin-left: 4px;
        margin-right: 14px;
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
        font-weight: 300;
        padding-bottom: 15px;
      }
      ul {
        margin: 20px 0;
        padding-left: 10px;
        li {
          margin-top: 30px;
          p {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 300;
            font-size: 6px;
            line-height: 18px;
            /* or 207% */
            text-align: justify;
            letter-spacing: 0.1em;
            padding-left: 10px;
            color: #4570b6;
          }
          span {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            /* or 44% */
            padding: 10px;
            letter-spacing: 0.1em;
            width: 15vw;
            display: inline-block;
            text-align: end;
          }
        }
      }
      .xima {
        margin-top: 30px;
        display: flex;
        span {
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 20px;
          /* or 44% */
          // padding: 10px;
          letter-spacing: 0.1em;
          width: 10vw;
          margin-left: 5vw;
          display: inline-block;
        }
        p {
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 300;
          font-size: 8.7px;
          line-height: 26px;
          /* or 207% */
          padding-left: 10px;
          flex: 1;
          text-align: justify;
          letter-spacing: 0.08em;
        }
      }
    }
  }
}
</style>
