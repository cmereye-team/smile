<template>
  <div class="benefit section">
    <!-- <div class="flex justify-center md:mt-28 mt-10 page_container">
      <h2>{{$t('service.relexSmile.benefit.h2')}}</h2>
    </div>
    <div class="benefit_content">
      <ul
        class="benefit_list flex flex-col items-start justify-start page_container"
      >
        <li v-for="(benefitItem, index) in benefitList" :key="index">
          <img :src="benefitItem.index" alt="" class="index" />
          <p>{{ benefitItem.des }}</p>
        </li>
      </ul>
      <img
        class="benefit_img benefit_eye"
        src="https://static.cmereye.com/imgs/smile/images/service/relex_smile/benefit_eye.jpg"
        alt=""
      />
      <img
        class="benefit_img benefit_light"
        src="https://static.cmereye.com/imgs/smile/images/service/relex_smile/benefit_light.jpg"
        alt=""
      />
    </div> -->
    <div class="benefit-bg">
      <div class="benefit-in">
        <div class="title">
          {{$t('service.relexSmile.benefit.h2')}}
        </div>
        <div class="benefit-in-lists">
          <div class="listIn" v-for="(benefitItem, index) in benefitList" :key="index">
            <div>
              <img :src="benefitItem.index" alt="" class="index" />
              <p>{{ benefitItem.des }}</p>
            </div>
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
          index: 'https://static.cmereye.com/imgs/2023/08/25d132c30d6fd581.jpg',
          des: this.$t('service.relexSmile.benefit.des1'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/08/c542f7fb196d561b.jpg',
          des: this.$t('service.relexSmile.benefit.des2'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/08/c3f16aa0ab1631c3.jpg',
          des: this.$t('service.relexSmile.benefit.des3'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/08/b50a60057195d7bc.jpg',
          des: this.$t('service.relexSmile.benefit.des4'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/08/1e99a0e8eec63d14.jpg',
          des: this.$t('service.relexSmile.benefit.des5'),
        },
        {
          index: 'https://static.cmereye.com/imgs/2023/08/6e2bdbcdd6c2ba35.jpg',
          des: this.$t('service.relexSmile.benefit.des6'),
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
  margin-top: 105px;
  &-bg{
    padding: 202px 0 148px;
    width: 150%;
    margin-left: -25%;
    border-radius: 50% 50% 0 0;
    background: rgba(199, 232, 239, 0.2);
  }
  &-in{
    width: 100%;
    max-width: 1099px;
    margin: 0 auto;
    .title{
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
    &-lists{
      margin-top: 26px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .listIn{
        width: 307px;
        height: 307px;
        margin-bottom: 56px;
        &>div{
          // width: 80%;
          // height: 0;
          // padding-bottom: 80%;
          // background: #fff;
          // border-radius: 50%;
        }
      }
    }
  }
}
// h2{
//   color: #4570B6;
//   font-weight: 500;
//   font-size: 25px;
// }
@media screen and (min-width: 768px) {
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
}

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
