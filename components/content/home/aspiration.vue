<template>
  <div class="page_container page_box">
    <div class="booking">
      <p>COMMENTS</p>
    </div>
    <div class="aspiration">
      <div class="serve_title">
        <p>{{$t('home.aspiration.p1')}}</p>
      </div>
      <div class="heart-box heart-box-1 wow animate__bounceIn">
        <img
          src="https://static.cmereye.com/imgs/2023/03/af4243c0c7cd2fdd.jpg"
          alt=""
        />
        <div class="heart-text">
          <div class="person">
            <p>{{$t('home.aspiration.p2')}} Ada</p>
          </div>
          <div class="box">
            <span>{{$t('home.aspiration.span1')}}</span>
          </div>
        </div>
      </div>
      <div class="heart-box heart-box-2 wow animate__bounceIn">
        <img
          src="https://static.cmereye.com/imgs/2023/03/5d0bbb754eb6eab3.jpg"
          alt=""
        />
        <div class="heart-text">
          <div class="box">
            <span>{{$t('home.aspiration.span2_1')}}<br />{{$t('home.aspiration.span2_2')}}</span>
          </div>
          <div class="person">
            <p>{{$t('home.aspiration.p3')}} Hubert</p>
          </div>
        </div>
      </div>
      <div class="heart-box heart-box-3 wow animate__bounceIn">
        <img
          src="https://static.cmereye.com/imgs/2023/03/c1bad1b15160015c.jpg"
          alt=""
        />
        <div class="heart-text">
          <div class="person">
            <p>唐浩然 Jacky</p>
          </div>
          <div class="box">
            <span>{{$t('home.aspiration.span3_1')}}<br />{{$t('home.aspiration.span3_2')}}</span>
          </div>
        </div>
      </div>
      <div class="heart-box heart-box-4 wow animate__bounceIn">
        <img
          src="https://static.cmereye.com/imgs/2023/03/53b6a1a03344c084.jpg"
          alt=""
        />
        <div class="heart-text">
          <div class="person">
            <p>{{$t('home.aspiration.p4')}} Shirley</p>
          </div>
          <div class="box">
            <span>{{$t('home.aspiration.span4')}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// // tailwind
// @layer base {
//   .heart-box-1 {
//     @apply transition duration-500  ease-in-out transform  hover:scale-105;
//   }
//   .heart-box-2 {
//     @apply transition duration-500  ease-in-out transform  hover:scale-105;
//   }
//   .heart-box-3 {
//     @apply transition duration-500  ease-in-out transform  hover:scale-105;
//   }
//   .heart-box-4 {
//     @apply transition duration-500  ease-in-out transform  hover:scale-105;
//   }
// }
.title_heart {
  h2 {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    /* identical to box height, or 120% */

    letter-spacing: 0.1em;

    color: #444343;
  }
}
@media only screen and (min-width: 768px) {
  .page_box {
    position: relative;
  }
  .booking {
    p {
      font-family: "Baskervville" !important;
      font-style: normal;
      font-weight: 400;
      font-size: 60px !important;
      line-height: 78px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      color: rgba(174, 213, 231, 0.5);
      margin-bottom: 20px;
      z-index: 66;
      margin-left: 36px;
      position: absolute;
      top: -55px;
      letter-spacing: 0.05em;
    }
  }
  .serve_title {
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 43px !important;
      line-height: 62px;
      display: flex;
      align-items: center;

      letter-spacing: 18px;

      background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      writing-mode: tb-rl;
    }

    position: absolute;

    top: -39px;

    left: -82px;
  }
  span {
    font-size: 18px !important;
  }
  p {
    font-size: 18px;
  }
  .title_heart {
    h2 {
      margin-top: 64px;
    }
  }
  .aspiration {
    position: relative;
    display: flex;
    position: relative;
    padding-bottom: 68px;
    margin-bottom: 5px;
    padding-top: 68px;
    margin-top: 42px;
    height: 405px;
    margin-left: 54px;
  }

  .heart-box-1 {
    position: absolute;
    bottom: 45px;
    left: -7px;
    .heart-text {
      position: absolute;
      bottom: 46px;
      left: -44px;
      z-index: 10;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 10px;
        border-bottom: 1px solid #5a93c9;
        width: 235px;
    height: 70px;

        line-height: 18px;

        position: absolute;
        top: 0;
        margin-top: 28px;
        background: #fff;
        left: 28px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 25px;
          text-align: left;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-2 {
    position: absolute;
    top: 0px;
    left: 304px;
    .heart-text {
      position: absolute;
      right: -118px;
      z-index: 10;
      top: 28px;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        border-bottom: 1px solid #5a93c9;
        padding: 10px;
        width: 160px;

        line-height: 18px;

        position: absolute;
        bottom: 28px;
        background: #fff;

        left: -46px;

        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 25px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-3 {
    position: absolute;
    bottom: 45px;
    right: 305px;
    .heart-text {
      position: absolute;
      bottom: 21px;
      left: -56px;
      z-index: 10;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.06em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 10px;
        border-bottom: 1px solid #5a93c9;
        width: 180px;

        line-height: 18px;

        position: absolute;
        top: 0;
        margin-top: 28px;
        background: #fff;
        left: 83px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 25px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-4 {
    position: absolute;
    top: 0;
    right: -16px;
    .heart-text {
      position: absolute;

      z-index: 10;
      top: 28px;
      left: -67px;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.05em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px 4px;
      }
      .box {
        padding: 10px;
        border-bottom: 1px solid #5a93c9;
        width: 194px;

        line-height: 18px;

        position: absolute;
        bottom: 28px;
        background: #fff;
        left: -73px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 25px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }

  .heart-box .heart-text .person p{height: 32px; display: flex; align-items: center;font-size: 20px;}
  .heart-box .heart-text .box span{text-align: left;}

}

@media only screen and (max-width: 768px) {
  .page_box {
    position: relative;
    margin-top: 83px;
  }
  .booking {
    p {
      font-family: "Baskervville" !important;
      font-style: normal;
      font-weight: 400;
      font-size: 10.6vw !important;
      line-height: 52px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      color: rgba(174, 213, 231, 0.5);
      margin-bottom: 20px;
      margin-left: 57px;
      position: absolute;
      top: -43px;
    }
  }
  .serve_title {
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 28px !important;
      line-height: 55px;
      display: flex;
      align-items: center;

      letter-spacing: 11px;

      background: linear-gradient(177.58deg, #4b7bbc -6%, #7ed7ea 101.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      writing-mode: tb-rl;
    }

    position: absolute;

    top: -34px;

    left: 0px;
  }
  .aspiration {
    display: flex;
    position: relative;
    padding-bottom: 50px;
    margin-bottom: 50px;
    height: 308vw;
    flex-direction: column;
  }
  .heart-box>img{width: 60.7vw;}
  .heart-box-1 {
    position: absolute;
    right: 10px;
    top: 40px; 
    .heart-text {
      position: absolute;
      bottom: 36px;
      left: -94px;
      z-index: 10;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 6px;
        border-bottom: 1px solid #5a93c9;
        width: 160px;
        position: absolute;
        top: 25px;
        background: #fff;
        left: 28px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-2 {
    position: absolute;
    top: 85vw;
    left: 17vw;
    .heart-text {
      position: absolute;
      right: -9vw;
      z-index: 10;
      bottom: -5vw;display:flex;
      flex-direction: column-reverse;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 3vw;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        transform: translateX(25px);
        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 6px;
        border-bottom: 1px solid #5a93c9;
        width: 25vw;
      
    
        background: #fff;
       
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-3 {
    position: absolute;
    top: 164vw;
    right: 10px;
    
    display: flex;
    justify-content: center;
    .heart-text {
      position: absolute;
      bottom: 17px;
      left: -15vw;
      z-index: 10;
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;

        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 6px;
        border-bottom: 1px solid #5a93c9;
        width: 30.5vw;
        position: absolute;
        top: 25px;
        background: #fff;
        left: 28px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
  .heart-box-4 {
    position: absolute;
    bottom: 0;
    left: 13vw;
    .heart-text {
      position: absolute;
      display: flex;
      flex-flow: column;
      bottom: -8vw;
    left: -4vw;
      z-index: 10;
      
      .person {
        z-index: 10;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        transform: translateX(-6vw);
        color: #ffffff;
        background: linear-gradient(91.62deg, #5992c8 6.27%, #81dbec 99.02%);
        width: max-content;
        padding: 7px;
      }
      .box {
        padding: 6px;
        border-bottom: 1px solid #5a93c9;
        width: 132px;
     
        top: -54px;
        background: #fff;
        left: -51px;
        z-index: -1;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.06em;

          color: #6d6e71;
        }
      }
    }
  }
}
</style>
