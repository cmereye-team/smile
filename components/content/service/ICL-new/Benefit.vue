<template>
  <div class="benefit section">
    <div class="benefit-bg">
      <div class="benefit-t">
        <span>EVO Visian ICL鏡片 <br class="mbShow" />7大特色</span>
        <p>EVO Visian ICL以STAAR<br class="mbShow" />&nbsp;Surgical 專用的生物相容Collamer<br class="mbShow" />專利材質製成。<br class="pcShow" />這種材質含有自然存在<br class="mbShow" />於體內的膠原蛋白。EVO Visian ICL<br class="mbShow" />Collamer 技術的獨<br class="pcShow" />特優勢使其成為<br class="mbShow" />視力矯正鏡片的理想材質，其中包含抗<br class="mbShow" />紫外線功能。
        </p>
      </div>
      <div class="benefit-in">
        <div class="benefit-in-lists">
          <div class="listIn" v-for="(benefitItem, index) in benefitList" :key="index">
            <div class="listIn-t img_style">
              <div>
                <img :src="benefitItem.index" alt="" class="index" />
              </div>
              <p v-html="benefitItem.text"></p>
            </div>
            <div class="listIn-b" v-html="benefitItem.des"></div>
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
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9789.svg',
          text: '紫外線防護',
          des: this.$t('service.icl.benefit_new.des5'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9788.svg',
          text: '與時俱進的 <br /> 靈活度',
          des: this.$t('service.icl.benefit_new.des6'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9787.svg',
          text: '手術與恢<br />復皆快速',
          des: this.$t('service.icl.benefit_new.des7'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9792.svg',
          text: '柔軟服貼',
          des: this.$t('service.icl.benefit_new.des8'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9782.svg',
          text: '生物相容性',
          des: this.$t('service.icl.benefit_new.des1'),
        },
        // {
        //   index: 'https://static.cmereye.com/imgs/2023/10/bc9ad07eb1783b27.png',
        //   text: '減少 <br /> 乾眼情況',
        //   des: this.$t('service.icl.benefit_new.des2'),
        // },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9790.svg',
          text: '可取出',
          des: this.$t('service.icl.benefit_new.des3'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/11/svg/Group9785.svg',
          text: '夜間視力',
          des: this.$t('service.icl.benefit_new.des4'),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.benefit{
  width: 100%;
  overflow: hidden;
  margin-top: 77px;
  &-bg{
    padding: 70px 0 92px;
    width: 150%;
    margin-left: -25%;
    border-radius: 50% 50% 0 0;
    background: rgba(199, 232, 239, 0.2);
    position: relative;
  }
  &-t{
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: #4570B6;
      font-family: Noto Sans HK;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 100% */
      letter-spacing: 7.5px;
      margin-bottom: 74px;
      position: relative;
    }
    span:after {
      position: absolute;
      content: '';
      background: #A6E1D6;
      width: 39px;
      height: 5px;
      border-radius: 20px;
      bottom: -29px;
      transform: translateX(-50%);
      left: 50%;
    }
    p {
      color: #6D6E71;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
    }
  }
  &-in{
    width: 100%;
    max-width: 1280px;
    margin: 70px auto;
    .title{
      color: #4570B6;
      font-size: 30px;
      font-weight: 400;
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
    &-lists{
      margin-top: 26px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .listIn{
        width: 290px;
        margin-bottom: 56px;
        &-t{
          width: 100%;
          height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          background: #fff;
          border-radius: 50%;
          p{
            color: #4570B6;
            font-size: 25px;
            font-weight: 500;
            line-height: 1.1; /* 80% */
            letter-spacing: 8.75px;
            // margin-top: 43px;
            min-height: 55px;
            text-align: center;
          }
        }
        &-b{
          color: #6D6E71;
          text-align: center;
          font-size: 23px;
          font-weight: 300;
          line-height: 35px; /* 152.174% */
          letter-spacing: 8.35px;
          max-width: 100%;
          margin: 16px auto 0;
        }
      }
    }
  }
}

@media screen and (min-width:768px) {
  .img_style {
    &>div:nth-child(1) {
      width: 150px;
      height: 95px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .benefit-in-lists {
    &>div:nth-child(5) {
      margin-left: 150px;
    }
    &>div:last-child {
      margin-right: 150px;
    }
  }
}
@media screen and (max-width: 768px) {
  .benefit{
    margin-top: 45px;
    &-bg{
      padding: 116px 0 45px;
      width: 300%;
      margin-left: -100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    &-t{
      width: 100%;
      height: auto;
      padding: 0 25px;
      img{
        margin-top: 20px;
        margin-bottom: 5px;
      }
      span{
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 5px;
        text-align: center;
        margin-bottom: 40px;
      }
      span:after {
        bottom: -15px;
      }
      p {
        text-align: center;
        font-family: Noto Sans HK;
        font-style: normal;
        font-weight: 300;
        color: #6D6E71;
        font-size: 15px;
        line-height: 30px; /* 200% */
        letter-spacing: 4.5px;
      }
    }
    .img_style {
      &>div{
        width: 88px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        &>div:nth-child(1) {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    &-in{
      width: calc(100% / 3);
      padding: 0 15px;
      margin: 0 auto;
      .title{
        font-size: 20px;
        line-height: 23.305px; /* 116.525% */
        letter-spacing: 5px;
        padding-bottom: 21px;
        &::after{
          height: 4px;
          border-radius: 2px;
        }
      }
      &-lists{
        .listIn{
          width: 39.75vw;
          margin-bottom: 23px;
          &-t{
            height: 39.75vw;
            width: 39.75vw;
            padding-top: 5px;
            justify-content: center;
            img{
              max-width: 100%;
            }
            p{
              font-size: 18px;
              line-height: 20px; /* 111.111% */
              letter-spacing: 3.6px;
              margin-top: 20px;
              min-height: 40px;
            }
          }
          &-b{
            font-size: 15px;
            line-height: 22px; /* 120% */
            letter-spacing: 2.25px;
            margin: 9px auto 0;
          }
        }
      }
    }
  }
  .benefit-in-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &>div:nth-child(1){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 72px;
          height: auto;
        }
      }
    }
    &>div:nth-child(2){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 72px;
          height: auto;
          padding: 5px 0;
        }
        &>p{
          margin-top: 25px;
        }
      }
    }
    &>div:nth-child(3){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 64px;
          height: auto;
        }
      }
    }
    &>div:nth-child(4){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 72px;
          height: auto;
          padding: 5px 0;
        }
      }
    }
    &>div:nth-child(5){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 74px;
          height: auto;
          padding: 8px 0;
        }
      }
    }
    // &>div:nth-child(6){
    //   &>div:nth-child(1) {
    //     &>div:nth-child(1){
    //       width: 83px;
    //       height: auto;
    //     }
    //   }
    // }
    &>div:nth-child(6){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 71px;
          height: auto;
        }
      }
    }
    &>div:nth-child(7){
      &>div:nth-child(1) {
        &>div:nth-child(1){
          width: 81px;
          height: auto;
        }
      }
    }
  }
}
</style>
