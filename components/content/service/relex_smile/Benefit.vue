<template>
  <div class="benefit section pc_page_container">
    <div class="flex justify-center md:mt-28 mt-10 page_container">
      <h2>{{$t('service.relexSmile.benefit.h2')}}</h2>
    </div>
    <div class="benefit_content">
      <ul
        class="benefit_list flex flex-col items-start justify-start page_container benefit_list_cn" v-if="$i18n.locale !== 'en'"
      >
        <li v-for="(benefitItem, index) in benefitList" :key="index">
          <img :src="benefitItem.index" alt="" class="index" />
          <p>{{ benefitItem.des }}</p>
        </li>
      </ul>
      <ul
        class="benefit_list flex flex-col items-start justify-start page_container benefit_list_eng" v-else
      >
        <li v-for="(benefitItem, index) in benefitList_eng" :key="index">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      benefitList: [
        {
          index: require("@/asset/image/service/relex_smile/one.png"),
          des: this.$t('service.relexSmile.benefit.des1'),
        },
        {
          index: require("@/asset/image/service/relex_smile/two.png"),
          des: this.$t('service.relexSmile.benefit.des2'),
        },
        {
          index: require("@/asset/image/service/relex_smile/three.png"),
          des: this.$t('service.relexSmile.benefit.des3'),
        },
        {
          index: require("@/asset/image/service/relex_smile/four.png"),
          des: this.$t('service.relexSmile.benefit.des4'),
        },
        {
          index: require("@/asset/image/service/relex_smile/five.png"),
          des: this.$t('service.relexSmile.benefit.des5'),
        },
        {
          index: require("@/asset/image/service/relex_smile/six.png"),
          des: this.$t('service.relexSmile.benefit.des6'),
        },
      ],
      benefitList_eng: [
        {
          index: require("@/asset/image/service/relex_smile/benefit_index1.png"),
          des: this.$t('service.relexSmile.benefit.des1'),
        },
        {
          index: require("@/asset/image/service/relex_smile/benefit_index2.png"),
          des: this.$t('service.relexSmile.benefit.des2'),
        },
        {
          index: require("@/asset/image/service/relex_smile/benefit_index3.png"),
          des: this.$t('service.relexSmile.benefit.des3'),
        },
        {
          index: require("@/asset/image/service/relex_smile/benefit_index4.png"),
          des: this.$t('service.relexSmile.benefit.des4'),
        },
        {
          index: require("@/asset/image/service/relex_smile/benefit_index5.png"),
          des: this.$t('service.relexSmile.benefit.des5'),
        },
        {
          index: require("@/asset/image/service/relex_smile/benefit_index6.png"),
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
h2{
  color: #4570B6;
  font-weight: 500;
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .pc_page_container {
    max-width: 1280px !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
  h2 {
    font-size: 25px;
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
      top: 10vw;
      right: 0;
      z-index: 1;
      height: auto;
    }
  }
  .benefit_list {
    background: url('https://static.cmereye.com/imgs/2022/12/28f52524aa3c4538.png');
    background-repeat: no-repeat;
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
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 175% */
        letter-spacing: 2px;
        color: #6D6E71;
      }
      img {
        height: 90px;
      }
    }
  }
  .benefit_list_cn {
    padding-bottom: 150px;
    li {
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(2) {
      margin: 34px 0;
      margin-left: 165px;
      p {
        max-width: 360px;
        text-align: left;
      }
    }
    li:nth-child(3) {
      p {
        max-width: 240px;
        text-align: left;
      }
    }
    li:nth-child(4) {
      margin-left: 440px;
      margin-top: -70px;
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(5) {
      margin: 34px 0;
      margin-left: 165px;
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(6) {
      margin-left: 440px;
      p {
        margin-left: 20px;
        max-width: 380px;
        text-align: left;
      }
    }
  }
  .benefit_list_eng {
    padding-bottom: 150px;
    li {
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(2) {
      margin: 34px 0;
      margin-left: 165px;
      p {
        max-width: 360px;
        text-align: left;
      }
    }
    li:nth-child(3) {
      p {
        max-width: 240px;
        text-align: left;
      }
    }
    li:nth-child(4) {
      margin-left: 440px;
      margin-top: -70px;
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(5) {
      margin: 34px 0;
      margin-left: 165px;
      p {
        max-width: 380px;
        text-align: left;
      }
    }
    li:nth-child(6) {
      margin-left: 440px;
      p {
        margin-left: 20px;
        max-width: 380px;
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: 768px) {
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
  .benefit_list {
    background: url(("https://static.cmereye.com/imgs/2022/12/a2c6adf210ffc920.jpg"))
      no-repeat;
    margin-top: 50vw;
    height: 106vw;
    background-position: center;
    background-position-x: 0;
    margin-bottom: 58px;
    li {
      img {
        height: 10vw;
      }
      margin-bottom: 10px;
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        text-align: right;
        letter-spacing: 0.1em;
        color: #6D6E71;
        white-space: pre;
      }
    }
  }
  .benefit_list li:nth-child(1) {
    margin-left: 2vw;
  }
  .benefit_list li:nth-child(2) {
    margin-left: 18vw;
    z-index: 11;
  }
  .benefit_list li:nth-child(3) {
    margin-left: 7vw;
  }
  .benefit_list li:nth-child(4) {
    margin-left: 39vw;
    margin-top: -3vw;
    z-index: 11;
  }
  .benefit_list li:nth-child(5) {
    margin-left: 18vw;
    margin-top: -2vw;
  }
  .benefit_list li:nth-child(6) {
    margin-left: 39vw;
  }
  .benefit_content .benefit_light {
    top: -14vw;
    right: 0;
    z-index: 1;
    height: 60vw;
  }
  .benefit_list_eng {
    padding-bottom: 50px;
    li {
      margin-left: 4vw;
      margin-top: 1vw;
      p {
        max-width: 160px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
    li:nth-child(2) {
      margin-left: 24vw;
      margin-top: 1vw;
      p {
        max-width: 200px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
    li:nth-child(3) {
      margin-left: 4vw;
      margin-top: 1vw;
      p {
        max-width: 200px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
    li:nth-child(4) {
      margin-left: 24vw;
      margin-top: 1vw;
      p {
        max-width: 230px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
    li:nth-child(5) {
      margin-left: 4vw;
      margin-top: 1vw;
      p {
        max-width: 250px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
    li:nth-child(6) {
      margin-left: 24vw;
      margin-top: 1vw;
      p {
        max-width: 220px;
        text-align: left;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
