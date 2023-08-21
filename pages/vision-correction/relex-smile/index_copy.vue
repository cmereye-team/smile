<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <Step />
    <Benefit />
    <Fit />
    <Xtra />
    <div class="businessHours">
      <div class="businessHours-title">
        營業時間
      </div>
      <div class="businessHours-img">
        <img data-src="https://static.cmereye.com/imgs/2023/08/70477a2ee40bcc2c.jpg" srcset="https://static.cmereye.com/imgs/2023/08/c80ae8a53c8e5a0b.jpg 768w,https://static.cmereye.com/imgs/2023/08/70477a2ee40bcc2c.jpg" src="https://static.cmereye.com/imgs/2023/08/70477a2ee40bcc2c.jpg" alt="">
      </div>
      <div class="businessHours-time">
        <div class="listIn" v-for="(timer,index) in businessHours" :key="index">
          <div class="listIn-name">{{timer.name}}</div>
          <div class="listIn-context">
            <span class="context1" v-if="timer.type === '1'">{{timer.context}}</span>
            <span class="context2" v-if="timer.type === '2'"></span>
            <span class="context3" v-if="timer.type === '3'">{{timer.context}}</span>
            <span class="context4" v-if="timer.type === '4'"></span>
          </div>
        </div>
      </div>
      <div class="businessHours-address">
        <div>
          <img src="https://static.cmereye.com/imgs/2023/08/c4adc90ee0266d51.png" alt="">
          <span>中環</span>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/08/c4adc90ee0266d51.png" alt="">
          <span>旺角</span>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/08/c4adc90ee0266d51.png" alt="">
          <span>尖沙咀</span>
        </div>
      </div>
    </div>
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import MainBanner from "@/components/content/service/relex_smile/MainBanner_copy.vue";
import Step from "@/components/content/service/relex_smile/Step_copy.vue";
import Benefit from "@/components/content/service/relex_smile/Benefit_copy.vue";
import Fit from "@/components/content/service/relex_smile/Fit_copy.vue";
import Xtra from "@/components/content/service/relex_smile/Xtra_copy.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    MainBanner,
    Step,
    Benefit,
    Fit,
    Xtra,
    footers,
  },
  head() {
    return {
      title: "SMILE 微笑激光矯視 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑激光矯視中心提供嶄新SMILE微笑激光矯視服務，較傳統LASIK激光矯視更安全、快捷，本中心亦有免費講座，讓客人了解更多矯視資訊。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 投考紀律部隊, 眼睛檢查, 眼睛治療 錐形角膜, 角膜膠原交聯手術",
        },
      ],
    };
  },
  data(){
    return {
      businessHours: [
        {
          type: '1',
          name: '營業時間',
          context: '9:00-19:00'
        },
        {
          type: '2',
          name: '星期一',
          context: ''
        },
        {
          type: '2',
          name: '星期二',
          context: ''
        },
        {
          type: '2',
          name: '星期三',
          context: ''
        },
        {
          type: '2',
          name: '星期四',
          context: ''
        },
        {
          type: '2',
          name: '星期五',
          context: ''
        },
        {
          type: '3',
          name: '星期六',
          context: '9:00-18:00'
        },
        {
          type: '4',
          name: '星期日',
          context: ''
        },
        {
          type: '4',
          name: '公眾假期',
          context: ''
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// .section.vedio_box {
//   margin-top: 0;
// }
.businessHours{
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  &-title{
    color: #4570B6;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    text-align: center;
    position: relative;
    padding-bottom: 30px;
    &::after{
      content: '';
      background: #A6E1D6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  &-img{
    width: 100%;
    max-width: 1000px;
    margin: 34px auto 71px;
    img{
      border-radius: 47px;
    }
  }
  &-time{
    display: flex;
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    .listIn{
      flex: 1;
      &:first-child{
        flex: 1.5;
      }
      &-name{
        color: #6B6B6B;
        font-size: 17px;
        font-weight: 300;
        // line-height: 180%; /* 30.6px */
        line-height: 54px;
        height: 54px;
        letter-spacing: 2.04px;
        border-bottom: 2px solid #F5F4F4;
        text-align: center;
      }
      &-context{
        line-height: 54px;
        height: 54px;
        border-bottom: 2px solid #F5F4F4;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          color: #4570B6;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1.7px;
          white-space: nowrap;
          &.context1{
            color: #6B6B6B;
          }
          &.context2{
            width: 14px;
            height: 14px;
            display: block;
            border-radius: 50%;
            background-color: #4570B6;
          }
          &.context4{
            width: 36px;
            height: 4px;
            display: block;
            border-radius: 2px;
            background-color: #4570B6;
            transform: rotate(150.642deg);
          }
        }
      }
    }
  }
  &-address{
    display: flex;
    justify-content: center;
    margin: 54px 0 59px;
    &>div{
      display: flex;
      align-items: center;
      &:not(:last-child){
        margin-right: 100px;
      }
      img{
        margin-right: 9px;
      }
      span{
        color: #6D6E71;
        font-size: 23px;
        font-weight: 500;
        line-height: 40px; /* 173.913% */
        letter-spacing: 2.3px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .businessHours{
    &-title{
      font-size: 20px;
      padding-bottom: 22px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      &::before{
        height: 4px;
        border-radius: 2px;
      }
    }
    &-img{
      width: auto;
      margin: 28px 30px 34px;
      img{
        width: 100%;
        border-radius: 30px;
      }
    }
    &-time{
      flex-wrap: wrap;
      padding: 0 30px;
      .listIn{
        min-width: 32px;
        max-width: 32px;
        margin-right: 20px;
        margin-bottom: 26px;
        display: flex;
        flex-direction: column;
        &:first-child{
          width: 58px;
          max-width: 58px;
        }
        &:nth-of-type(7){
          margin-left: 78px;
        }
        
        &-name{
          line-height: 180%;
          height: auto;
          border-bottom: none;
        }
        &-context{
          flex: 1;
          height: auto;
          line-height: 180%;
          border-bottom: none;
          span{
            white-space: pre-wrap;
            &.context2{

            }
            &.context4{
              transform: rotate(130.167deg);
            }
          }
        }
        &:last-child{
          .listIn-name{
            line-height: 140%;
          }
        }
      }
    }
    &-address{
      justify-content: space-around;
      margin: 23px 0 51px;
      &>div{
        flex-direction: column;
        &:not(:last-child){
          margin-right: 0;
        }
        img{
          width: 25px;
          margin-right: 0;
        }
        span{
          font-size: 20px;
          line-height: 40px; /* 200% */
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
