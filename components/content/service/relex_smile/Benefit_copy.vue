<template>
  <div class="benefit section">
    <div class="benefit-bg">
      <div class="benefit-t">
        <img
          src="https://static.cmereye.com/imgs/2023/08/223c37697c582ed6.jpg"
          alt=""
        />
        <span>SMILE</span>
        <span :style="$i18n.locale === 'en' ? 'display: none;' : ''"
          >微笑激光</span
        >
      </div>
      <div class="benefit-in">
        <h2 class="title" v-html="$t('service.relexSmile.benefit.h2')"></h2>
        <div class="benefit-in-lists">
          <div
            class="listIn"
            v-for="(benefitItem, index) in $i18n.locale === 'en'
              ? benefitListEng
              : benefitList"
            :key="index"
          >
            <div class="listIn-t img_style">
              <img :src="benefitItem.index" alt="" class="index" />
              <h3 :class="[$i18n.locale === 'en' ? 'img-style-eng' : '']">
                {{ benefitItem.text }}
              </h3>
            </div>
            <div
              :class="[$i18n.locale === 'en' ? 'listInEng-b' : 'listIn-b']"
              v-html="benefitItem.des"
            ></div>
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
      benefitList: [
        {
          index: "https://static.cmereye.com/imgs/2023/10/354142daabe14d8c.png",
          text: this.$t("service.relexSmile.benefit.titleList.title1"),
          des: this.$t("service.relexSmile.benefit.des1"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/11/b7c2ae0052ddab4b.png",
          text:  this.$t("service.relexSmile.benefit.titleList.title2"),
          des: this.$t("service.relexSmile.benefit.des2"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/02557c41a9f23654.png",
          text:  this.$t("service.relexSmile.benefit.titleList.title3"),
          des: this.$t("service.relexSmile.benefit.des3"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/0ae516b4778a67d1.png",
          text:  this.$t("service.relexSmile.benefit.titleList.title4"),
          des: this.$t("service.relexSmile.benefit.des4"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/cf3f4cd33d880c99.png",
          text:  this.$t("service.relexSmile.benefit.titleList.title5"),
          des: this.$t("service.relexSmile.benefit.des5"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/615a8a469b1bfa28.png",
          text:  this.$t("service.relexSmile.benefit.titleList.title6"),
          des: this.$t("service.relexSmile.benefit.des6"),
        },
      ],
      benefitListEng: [
        {
          index: "https://static.cmereye.com/imgs/2023/10/354142daabe14d8c.png",
          text: "Simple Process",
          des: this.$t("service.relexSmile.benefit.des1"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/11/b7c2ae0052ddab4b.png",
          text: "Speedy Recovery",
          des: this.$t("service.relexSmile.benefit.des2"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/02557c41a9f23654.png",
          text: "Short Process",
          des: this.$t("service.relexSmile.benefit.des3"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/0ae516b4778a67d1.png",
          text: "Minimal Postoperative Impact",
          des: this.$t("service.relexSmile.benefit.des4"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/cf3f4cd33d880c99.png",
          text: "Minimally Invasive Surgery",
          des: this.$t("service.relexSmile.benefit.des5"),
        },
        {
          index: "https://static.cmereye.com/imgs/2023/10/615a8a469b1bfa28.png",
          text: "Stable Effect",
          des: this.$t("service.relexSmile.benefit.des6"),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.benefit {
  width: 100%;
  overflow: hidden;
  padding-top: 105px;
  &-bg {
    padding: 202px 0 92px;
    width: 150%;
    margin-left: -25%;
    border-radius: 50% 50% 0 0;
    background: rgba(199, 232, 239, 0.2);
    position: relative;
  }
  &-t {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 307px;
    height: 307px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    img {
      margin-top: 50px;
      margin-bottom: 11px;
    }
    span {
      color: #4570b6;
      text-align: center;
      font-size: 30px;
      font-weight: 400;
      line-height: 50px; /* 166.667% */
      letter-spacing: 7.5px;
    }
  }
  &-in {
    width: 100%;
    max-width: 1099px;
    margin: 0 auto;
    .title {
      color: #4570b6;
      font-size: 30px;
      font-weight: 400;
      line-height: 30px; /* 100% */
      letter-spacing: 7.5px;
      text-align: center;
      position: relative;
      padding: 0;
      border: none;
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
      &::before {
        content: none;
      }
    }
    &-lists {
      margin-top: 26px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .listIn {
        width: 307px;
        margin-bottom: 56px;
        &-t {
          width: 100%;
          height: 307px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          background: #fff;
          border-radius: 50%;
          h3 {
            color: #4570b6;
            font-size: 25px;
            font-weight: 500;
            line-height: 1.1; /* 80% */
            letter-spacing: 8.75px;
            // margin-top: 43px;
            min-height: 30px;
          }
        }
        &-b {
          color: #6d6e71;
          text-align: center;
          font-size: 23px;
          font-weight: 300;
          line-height: 35px; /* 152.174% */
          letter-spacing: 10.35px;
          max-width: 80%;
          margin: 16px auto 0;
        }
      }
    }
  }
}
.img-style-eng {
  color: #4570b6;
  text-align: center;
  font-family: Noto Sans HK;
  font-size: 25px;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 35px !important; /* 140% */
  letter-spacing: 3.75px !important;
  width: min-content;
  min-height: 80px !important;
}
.listInEng-b {
  color: #6d6e71;
  text-align: center;
  font-family: Noto Sans HK;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 300 !important;
  line-height: 35px !important; /* 175% */
  letter-spacing: 2px !important;
  width: 90% !important;
}
// h2{
//   color: #4570B6;
//   font-weight: 500;
//   font-size: 25px;
// }
@media screen and (min-width: 768px) {
  .img_style {
    & > img {
      width: 50%;
      margin: 0 auto;
    }
    & > img:nth-child(1) {
      max-width: 120px;
    }
    & > img:nth-child(2) {
      max-width: 120px;
    }
    & > img:nth-child(3) {
      max-width: 120px;
    }
    & > img:nth-child(4) {
      max-width: 130px;
    }
    & > img:nth-child(5) {
      max-width: 125px;
    }
    & > img:nth-child(6) {
      max-width: 100px;
    }
  }
}
@media screen and (max-width: 768px) {
  .img-style-eng {
    color: #4570b6;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 20px !important; /* 125% */
    letter-spacing: 1.6px !important;
    min-height: 45px !important;
    width: min-content;
  }
  .listInEng-b {
    width: 90% !important;
    color: #6d6e71;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 15px !important;
    font-style: normal;
    font-weight: 300 !important;
    line-height: 20px !important; /* 133.333% */
    letter-spacing: 1.5px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .benefit-in-lists {
    & > div:nth-child(1),
    & > div:nth-child(3),
    & > div:nth-child(5),
    & > div:nth-child(4) {
      .listInEng-b {
        text-wrap: nowrap !important;
      }
    }
  }
  .benefit {
    &-bg {
      padding: 116px 0 45px;
      width: 300%;
      margin-left: -100%;
    }
    &-t {
      width: 171px;
      height: 171px;
      img {
        margin-top: 20px;
        margin-bottom: 5px;
      }
      span {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 5px;
      }
    }
    &-in {
      // width: calc(100% / 3);
      // padding: 0 3.846vw;
      width: 100vw;
      padding: 0 25px;
      .title {
        font-size: 20px;
        line-height: 23.305px; /* 116.525% */
        letter-spacing: 5px;
        padding: 0;
        border: none;
        padding-bottom: 21px;
        &::after {
          height: 4px;
          border-radius: 2px;
        }
      }
      &-lists {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 40px 20px;
        .listIn {
          width: 39.75vw;
          margin-bottom: 0;
          &-t {
            height: 39.75vw;
            width: 39.75vw;
            padding-top: 5px;
            justify-content: center;
            img {
              max-width: 40%;
              max-height: calc(100% / 3);
            }
            h3 {
              font-size: 4.615vw;
              line-height: 20px; /* 111.111% */
              letter-spacing: 0.01vw;
              margin-top: 20px;
            }
          }
          &-b {
            font-size: 3.846vw;
            line-height: 4.615vw; /* 120% */
            letter-spacing: 3px;
            margin: 9px auto 0;
          }
        }
        .listIn:nth-child(1){
          &>div:nth-child(2){
            padding: 0 20px;
          }
        }
      }
    }
  }
}
// {
// .pc_page_container {
//   max-width: 1280px !important;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   width: 100%;
// }
// h2 {
//   font-size: 25px;
// }
// .section {
//   margin-bottom: 0;
// }
// .benefit_content {
//   position: relative;
//   .benefit_img {
//     position: absolute;
//   }
//   .benefit_eye {
//     top: -1vw;
//     right: 2vw;
//     z-index: 2;
//     height: auto;
//   }
//   .benefit_light {
//     top: 10vw;
//     right: 0;
//     z-index: 1;
//     height: auto;
//   }
// }
// .benefit_list {
//   background: url('https://static.cmereye.com/imgs/2022/12/28f52524aa3c4538.png');
//   background-repeat: no-repeat;
//   background-size: 65% 80%;
//   text-align: right;
//   background-position-y: 3vw;
//   background-position-x: 5vw;
//   margin-right: 304px;
//   height: auto;
//   margin-top: 3vw;
//   li {
//     margin: 0.5vw 0;
//     z-index: 11;
//     p {
//       font-family: "Noto Sans JP";
//       font-style: normal;
//       font-weight: 300;
//       font-size: 17px;
//       line-height: 31px;
//       letter-spacing: 0.1em;
//       color: #6D6E71;
//     }
//     img {
//       height: 90px;
//     }
//   }
//   li:nth-child(1) {
//     margin-left: 0vw;
//   }
//   li:nth-child(2) {
//     margin-left: 165px;
//   }
//   li:nth-child(3) {
//     margin-left: 32px;
//   }
//   li:nth-child(4) {
//     margin-left: 402px;
//   }
//   li:nth-child(5) {
//     margin-left: 140px;
//   }
//   li:nth-child(6) {
//     margin-left: 520px;
//     padding-bottom: 123px;
//   }
// }
// }

@media screen and (max-width: 768px) {
  // .section {
  //   margin-bottom: 0;
  // }
  // .benefit_content {
  //   position: relative;
  //   .benefit_img {
  //     position: absolute;
  //   }
  //   .benefit_eye {
  //     top: -1vw;
  //     right: 2vw;
  //     z-index: 2;
  //     height: auto;
  //   }
  //   .benefit_light {
  //     top: 10vw;
  //     right: 0;
  //     z-index: 1;
  //     height: auto;
  //   }
  // }
  // h2 {
  //   font-size: 16px;
  // }
  // h2::before {
  //   width: 14vw !important;
  //   height: 0;
  //   border-top: 1px solid #dfdfdf;
  //   left: -14vw !important;
  // }
  // h2::after {
  //   width: 14vw !important;
  //   height: 0;
  //   border-top: 1px solid #dfdfdf;
  //   right: -14vw !important;
  // }
  // .benefit_content .benefit_eye {
  //   width: 90%;
  //   height: unset;
  //   right: 3vw !important;
  //   top: -49vw !important;
  // }
  // .benefit_list {
  //   background: url(("https://static.cmereye.com/imgs/2022/12/a2c6adf210ffc920.jpg"))
  //     no-repeat;
  //   margin-top: 50vw;
  //   height: 106vw;
  //   background-position: center;
  //   background-position-x: 0;
  //   margin-bottom: 58px;
  //   li {
  //     img {
  //       height: 11vw;
  //     }
  //     margin-bottom: 10px;
  //     p {
  //       font-family: "Noto Sans JP";
  //       font-style: normal;
  //       font-weight: 300;
  //       font-size: 15px;
  //       text-align: right;
  //       letter-spacing: 0.1em;
  //       color: #6D6E71;
  //       white-space: pre;
  //     }
  //   }
  // }
  // .benefit_list li:nth-child(1) {
  //   margin-left: 2vw;
  // }
  // .benefit_list li:nth-child(2) {
  //   margin-left: 18vw;
  //   z-index: 11;
  // }
  // .benefit_list li:nth-child(3) {
  //   margin-left: 7vw;
  // }
  // .benefit_list li:nth-child(4) {
  //   margin-left: 39vw;
  //   margin-top: -3vw;
  //   z-index: 11;
  // }
  // .benefit_list li:nth-child(5) {
  //   margin-left: 18vw;
  //   margin-top: -2vw;
  // }
  // .benefit_list li:nth-child(6) {
  //   margin-left: 39vw;
  // }
  // .benefit_content .benefit_light {
  //   top: -14vw;
  //   right: 0;
  //   z-index: 1;
  //   height: 60vw;
  // }
}
</style>
