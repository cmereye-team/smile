<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <Step />
    <Benefit />
    <Fit />
    <Xtra />

    <BusinessHours />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import BusinessHours from "@/components/commom/business/business-hours.vue";

import MainBanner from "@/components/content/service/relex_smile/MainBanner_copy.vue";
import Step from "@/components/content/service/relex_smile/Step_copy.vue";
import Benefit from "@/components/content/service/relex_smile/Benefit_copy.vue";
import Fit from "@/components/content/service/relex_smile/Fit_copy.vue";
import Xtra from "@/components/content/service/relex_smile/Xtra_copy.vue";
import footers from "@/components/commom/new_foot/footers.vue";

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
    BusinessHours,
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "SMILE微笑激光矯視是一種全新近視矯正技術，比LASIK激光矯視更安全、更快捷。香港希瑪微笑矯視中心為你提供免費講座，助你了解更多矯視資訊。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "smile 散光,smile 手術,smile 眼,smile 矯視 散光,矯 視 smile,SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 投考紀律部隊, 眼睛檢查, 眼睛治療 錐形角膜, 角膜膠原交聯手術",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
        },
      ],
    };
  },
  data() {
    return {
      canonicalHref:
        "https://smile.hkcmereye.com/vision-correction/relex-smile",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
      browserTitle: "SMILE 微笑激光矯視 - 香港希瑪微笑矯視中心",
      browserTitleCn: "SMILE 微笑激光矫视 - 香港希玛微笑矫视中心",
      businessHours: [
        {
          type: "1",
          name: "營業時間",
          context: "9:00-19:00",
        },
        {
          type: "2",
          name: "星期一",
          context: "",
        },
        {
          type: "2",
          name: "星期二",
          context: "",
        },
        {
          type: "2",
          name: "星期三",
          context: "",
        },
        {
          type: "2",
          name: "星期四",
          context: "",
        },
        {
          type: "2",
          name: "星期五",
          context: "",
        },
        {
          type: "3",
          name: "星期六",
          context: "9:00-18:00",
        },
        {
          type: "4",
          name: "星期日",
          context: "",
        },
        {
          type: "4",
          name: "公眾假期",
          context: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// .section.vedio_box {
//   margin-top: 0;
// }

.businessHours {
  &-title {
    color: #4570b6;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    text-align: center;
    position: relative;
    padding-bottom: 30px;
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
  &-img {
    width: 100%;
    max-width: 1000px;
    margin: 34px auto 71px;
    img {
      border-radius: 47px;
      margin: auto;
    }
  }
  &-time {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 40px;
      border-left: 2px solid #f5f4f4;
      & > div:nth-child(1) {
        color: #4570b6;
        font-family: "Noto Sans";
        font-size: 17px;
        font-style: normal;
        font-weight: 300;
        line-height: 180%; /* 30.6px */
        letter-spacing: 2.04px;
        text-align: center;
      }
      & > div:nth-child(2) {
        color: #6b6b6b;
        font-family: "Yuanti TC";
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 180%; /* 30.6px */
        letter-spacing: 1.7px;
      }
    }
    & > div:last-child {
      padding: 25px 13px;
      border-right: 2px solid #f5f4f4;
    }
    // .listIn {
    //   flex: 1;
    //   &:first-child {
    //     flex: 1.5;
    //   }
    //   &-name {
    //     color: #6b6b6b;
    //     font-size: 17px;
    //     font-weight: 300;
    //     // line-height: 180%; /* 30.6px */
    //     line-height: 54px;
    //     height: 54px;
    //     letter-spacing: 2.04px;
    //     border-bottom: 2px solid #f5f4f4;
    //     text-align: center;
    //   }
    //   &-context {
    //     line-height: 54px;
    //     height: 54px;
    //     border-bottom: 2px solid #f5f4f4;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     span {
    //       color: #4570b6;
    //       font-size: 17px;
    //       font-weight: 400;
    //       letter-spacing: 1.7px;
    //       white-space: nowrap;
    //       &.context1 {
    //         color: #6b6b6b;
    //       }
    //       &.context2 {
    //         width: 14px;
    //         height: 14px;
    //         display: block;
    //         border-radius: 50%;
    //         background-color: #4570b6;
    //       }
    //       &.context4 {
    //         width: 36px;
    //         height: 4px;
    //         display: block;
    //         border-radius: 2px;
    //         background-color: #4570b6;
    //         transform: rotate(150.642deg);
    //       }
    //     }
    //   }
    // }
  }
  &-address {
    display: flex;
    justify-content: center;
    margin: 54px auto 59px;

    & > div {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 100px;
      }
      div:nth-child(1) {
        margin-right: 9px;
      }
      span {
        color: #6d6e71;
        font-size: 23px;
        font-weight: 500;
        line-height: 40px; /* 173.913% */
        letter-spacing: 2.3px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .smile {
    background: #fff;
  }
  .businessHours {
    &-title {
      font-size: 20px;
      padding-bottom: 22px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      &::before {
        height: 4px;
        border-radius: 2px;
      }
    }
    &-img {
      width: auto;
      margin: 28px 30px 34px;
      img {
        width: 100%;
        border-radius: 30px;
      }
    }
    &-time {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 12px;
        border-left: 2px solid #f5f4f4;
        & > div:nth-child(1) {
          color: #4570b6;
          font-family: "Noto Sans";
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 180%; /* 30.6px */
          letter-spacing: 2.04px;
        }
        & > div:nth-child(2) {
          color: #6b6b6b;
          font-family: "Yuanti TC";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 180%; /* 30.6px */
          letter-spacing: 1.7px;
        }
      }
      & > div:last-child {
        padding: 5px 8px;
        border-right: 2px solid #f5f4f4;
      }
      // flex-wrap: nowrap;
      // width: 84%;
      // max-width: 1280px;
      // padding: 0 30px;
      // overflow-x: scroll;

      // .listIn {
      //   // min-width: 32px;
      //   // max-width: 32px;
      //   // margin-right: 20px;
      //   // margin-bottom: 26px;
      //   display: flex;
      //   flex-direction: column;
      //   min-width: 110px;
      //   align-items: center;
      //   // &:first-child{
      //   // width: 58px;
      //   // max-width: 58px;
      //   // }
      //   // &:nth-of-type(7){
      //   // margin-left: 78px;
      //   // }

      //   &-name {
      //     line-height: 180%;
      //     height: auto;
      //     border-bottom: none;
      //     letter-spacing: 0;
      //     width: fit-content;
      //     white-space: nowrap;
      //     width: 100%;
      //     padding-bottom: 15px;
      //   }
      //   &-context {
      //     flex: 1;
      //     height: auto;
      //     line-height: 180%;
      //     min-height: 30px;
      //     border-bottom: none;
      //     width: 100%;
      //     padding: 15px 0;
      //     border-top: 2.83px solid #f5f4f4;
      //     border-bottom: 2.83px solid #f5f4f4;
      //     margin-bottom: 20px;
      //     span {
      //       // white-space: pre-wrap;
      //       &.context2 {
      //       }
      //       &.context4 {
      //         // transform: rotate(130.167deg);
      //       }
      //     }
      //   }
      //   &:last-child {
      //     .listIn-name {
      //       // line-height: 140%;
      //     }
      //   }
      // }
    }
    &-address {
      justify-content: space-evenly;
      margin: 23px auto 51px;
      & > div {
        min-width: 100px;
        flex-direction: column;
        &:not(:last-child) {
          margin-right: 0;
        }
        span {
          font-size: 14px;
          line-height: 40px; /* 200% */
          letter-spacing: 2px;
          min-width: 68px;
          margin: auto;
          display: flex;
          text-align: center;
          justify-content: center;
        }
      }
    }
  }
  .businessHours-time::-webkit-scrollbar {
    height: 5px;
  }
  /*定义滚动条轨道：内阴影+圆角*/
  .businessHours-time::-webkit-scrollbar-track {
    border-radius: 5px;
    height: 3px;
    background: #d9d9d9;
  }
  .businessHours-time::-webkit-scrollbar-thumb {
    width: 184px;
    height: 3px;
    border-radius: 3px;
    border: #a6e1d6;
    background-color: #a6e1d6 !important;
  }
}
</style>
