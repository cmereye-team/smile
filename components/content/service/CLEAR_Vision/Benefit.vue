<template>
  <div class="benefit section pc_page_container">
    <div class="flex justify-center md:mt-28 mt-10 page_container">
      <h2 v-html="$t('service.clearVision.benefit.h2')"></h2>
    </div>
    <div class="benefit_content">
      <ul
        v-if="$i18n.locale !== 'en'"
        class="benefit_list flex flex-col items-start justify-start page_container benefit_list_eng"
      >
        <li v-for="(benefitItem, index) in benefitList" :key="index" :class="$i18n.locale === 'en' ? 'benefitList' + (index + 1): ''">
          <img :src="benefitItem.index" alt="" class="index" />
          <p v-html="benefitItem.des"></p>
        </li>
      </ul>
      <ul
      v-else
        class="benefit_list flex flex-col items-start justify-start page_container"
        :class="[$i18n.locale == 'en' ? 'benefit_list_eng benefit_list':'benefit_list']"
      >
        <li v-for="(benefitItem, index) in benefitList_eng" :key="index" :class="$i18n.locale === 'en' ? 'benefitList' + (index + 1): ''">
          <img :src="benefitItem.index" alt="" class="index" />
          <p v-html="benefitItem.des"></p>
        </li>
      </ul>
      <img
        class="benefit_img benefit_eye"
        src="https://static.cmereye.com/imgs/2023/02/43ec817226fc9110.jpg"
        alt=""
      />
      <img
        class="benefit_img benefit_light"
        src="https://static.cmereye.com/imgs/smile/images/service/relex_smile/benefit_light.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      benefitList: [
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-one.png"),
          des: this.$t('service.clearVision.benefit.p1'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-two.png"),
          des: this.$t('service.clearVision.benefit.p2'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-three.png"),
          des: this.$t('service.clearVision.benefit.p3'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-four.png"),
          des: this.$t('service.clearVision.benefit.p4'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-five.png"),
          des: this.$t('service.clearVision.benefit.p5'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/old-six.png"),
          des: this.$t('service.clearVision.benefit.p6'),
        },
      ],
      benefitList_eng:[
        {
          index: require("@/asset/image/service/CLEAR_Vision/one.png"),
          des: this.$t('service.clearVision.benefit.p1'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/two.png"),
          des: this.$t('service.clearVision.benefit.p2'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/three.png"),
          des: this.$t('service.clearVision.benefit.p3'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/four.png"),
          des: this.$t('service.clearVision.benefit.p4'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/five.png"),
          des: this.$t('service.clearVision.benefit.p5'),
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/six.png"),
          des: this.$t('service.clearVision.benefit.p6'),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;
}
@media screen and (min-width: 768px) {
  .benefit_list li:nth-child(5) p {
    width: 100%;
  }
  .benefit_list li:nth-child(6) p {
    width: 100%;
  }
  .benefitList1 {
    p {
      max-width: 370px;
      text-align: left;
    }
  }
  .benefitList2 {
    p {
      max-width: 345px;
      text-align: left;
    }
  }
  .benefitList3 {
    p {
      max-width: 310px;
      text-align: left;
    }
  }
  .benefitList4 {
    p {
      max-width: 250px;
      text-align: left;
    }
  }
  .benefitList5 {
    p {
      width: 100% !important;
      max-width: 420px;
      text-align: left;
    }
  }
  .benefitList6 {
    p {
      width: 100% !important;
      max-width: 480px;
      text-align: left;
    }
  }
  .section {
    margin-bottom: 0;
  }
  .benefit_content {
    position: relative;
    .benefit_img {
      position: absolute;
    }
    .benefit_eye {
      top: -1vw;
      right: 2vw;
      z-index: 2;
      height: auto;
    }
    .benefit_light {
      top: 7vw;
      right: 0;
      z-index: 1;
      height: auto;
    }
  }
  .benefit_list {
    background: url("https://static.cmereye.com/imgs/2022/12/28f52524aa3c4538.png");
    background-repeat: no-repeat;
    // background-size: cover;
    background-size: 65% 80%;
    text-align: right;
    background-position-y: 3vw;
    background-position-x: 5vw;
    margin-right: 304px;
    height: auto;
    margin-top: 3vw;
    li {
      margin: 0;
      z-index: 11;
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 31px;
        letter-spacing: 0.1em;
        color: #6D6E71;
      }
      img {
        height: 90px;
      }
    }
    li:nth-child(1) {
      margin-left: 0vw;
    }
    li:nth-child(2) {
      margin: 30px 0;
      margin-left: 225px;
    }
    li:nth-child(3) {
      margin-left: 0vw;
    }
    li:nth-child(4) {
      margin-left: 500px;
    }
    li:nth-child(5) {
      margin: 30px 0;
      margin-left: 225px;
    }
    li:nth-child(6) {
      margin-left: 500px;
      // padding-bottom: 50px;
    }
  }
  .benefit_list_eng {
    padding-bottom: 130px
  }
}

@media screen and (max-width: 768px) {
  // .benefit_list li:nth-child(1) {
  //   margin-top: 27px;
  // }
  // .benefit_list li:nth-child(2) {
  //   margin-top: 10px;
  // }
  // .benefit_list li:nth-child(3) {
  //   margin-left: 9px !important;
  //   margin-top: 10px;
  // }
  // .benefit_list li:nth-child(6) {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-end;
  //   margin-left: 27vw !important;
  //   width: 60vw;
  // }
  // .benefit_list li:nth-child(6) img {
  //   width: 39vw;
  // }

  // .benefit_list li:nth-child(5) {
  //   margin-left: 12vw !important;
  //   margin-top: -3vw !important;
  // }
  .section {
    margin-bottom: 0;
  }
  .benefit_content {
    position: relative;
    .benefit_img {
      position: absolute;
    }
    .benefit_eye {
      top: -1vw;
      right: 2vw;
      z-index: 2;
      height: auto;
    }
    .benefit_light {
      top: 10vw;
      right: 0;
      z-index: 1;
      height: auto;
    }
  }
  h2 {
    font-size: 16px;
  }
  h2::before {
    width: 14vw !important;
    height: 0;
    border-top: 1px solid #dfdfdf;
    left: -14vw !important;
  }
  h2::after {
    width: 14vw !important;
    height: 0;
    border-top: 1px solid #dfdfdf;
    right: -14vw !important;
  }
  .benefit_content .benefit_eye {
    width: 90%;
    height: unset;
    right: 3vw !important;
    top: -49vw !important;
  }
  // .benefit_list li:nth-child(5) p {
  //   width: 60%;
  // }
  .benefit_list {
    background: url(https://static.cmereye.com/imgs/2022/12/a2c6adf210ffc920.jpg)
      no-repeat;
    background-size: 70% 80%;
    margin-top: 48vw;
    // height: 200vw;
    margin-bottom: 20px;
    background-position: left;
    background-position-y: 117px;
    li {
      img {
        // width: 33vw;
      }
        // margin-bottom: 18px;
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: right;
        letter-spacing: 0.1em;
        // color: #6D6E71;
        color: #6D6E71;
      }
    }
  }
  .benefit_list_eng {
    position: relative;
    z-index: 90;
    li {
      width: 60%;
      margin: 15px 0;
      p {
        text-align: left;
      }
    }
    li:nth-child(even) {
      margin-left: 30%;
    }
    li:nth-child(2) {
      width: 70%;
      p {
        max-width: 240px;
      }
    }
    li:nth-child(5) {
      width: 70%;
    }
    li:nth-child(6) {
      width: 70%;
    }
  }
  // .benefit_list li:nth-child(1) {
  //   margin-left: 2vw;
  //   z-index: 11;
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
  // }
  // .benefit_list li:nth-child(5) {
  //   margin-left: 18vw;
  //   margin-top: -2vw;
  // }
  // .benefit_list li:nth-child(6) {
  //   margin-left: 39vw;
  //   padding-bottom: 5vw;
  // }
  .benefit_content .benefit_light {
    top: -14vw;
    right: 0;
    z-index: 1;
    height: 76vw;
    width: 48%;
  }
}
</style>
