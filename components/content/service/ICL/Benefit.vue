<template>
  <div class="benefit section pc_page_container">
    <div class="flex justify-center md:mt-28 mt-10 page_container">
      <h2>{{$t('service.icl.benefit.h2')}}</h2>
    </div>
    <div class="benefit_content">
      <ul
      v-if="$i18n.locale !== 'en'"
        class="benefit_list flex flex-col items-start justify-start page_container"
      >
        <li v-for="(benefitItem, index) in benefitList" :key="index">
          <img :src="benefitItem.index" alt="" class="index" />
          <p>{{ benefitItem.des }}</p>
          <p>{{ benefitItem.towdes }}</p>
        </li>
      </ul>
      <ul
      v-else
        class="benefit_list flex flex-col items-start justify-start page_container"
      >
        <li v-for="(benefitItem, index) in benefitList_eng" :key="index" :class="[$i18n.locale == 'en' ? `benefit_list${index + 1}`: '']">
          <img :src="benefitItem.index" alt="" class="index" />
          <p v-html="$t(benefitItem.des)"></p>
          <p>{{ benefitItem.towdes }}</p>
        </li>
      </ul>
      <img
        class="benefit_img benefit_eye"
        src="https://static.cmereye.com/imgs/2022/12/4d5d4b7751efa3bf.jpg"
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
          index: require("@/asset/image/service/ICL/one.png"),
          des: this.$t('service.icl.benefit.benefit1.des'),
          towdes: this.$t('service.icl.benefit.benefit1.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/two.png"),
          des: this.$t('service.icl.benefit.benefit2.des'),
          towdes: this.$t('service.icl.benefit.benefit2.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/three.png"),
          des: this.$t('service.icl.benefit.benefit3.des'),
          towdes: this.$t('service.icl.benefit.benefit3.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/four.png"),
          des: this.$t('service.icl.benefit.benefit4.des'),
          towdes: ""
        },
        {
          index: require("@/asset/image/service/ICL/five.png"),
          des: this.$t('service.icl.benefit.benefit5.des'),
          towdes: ""
        },
        {
          index: require("@/asset/image/service/ICL/six.png"),
          des: this.$t('service.icl.benefit.benefit6.des'),
          towdes: this.$t('service.icl.benefit.benefit6.towdes')
        },
      ],
      benefitList_eng: [
        {
          index: require("@/asset/image/service/ICL/new-one.png"),
          des: this.$t('service.icl.benefit.benefit1.des'),
          towdes: this.$t('service.icl.benefit.benefit1.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/new-two.png"),
          des: this.$t('service.icl.benefit.benefit2.des'),
          towdes: this.$t('service.icl.benefit.benefit2.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/new-three.png"),
          des: this.$t('service.icl.benefit.benefit3.des'),
          towdes: this.$t('service.icl.benefit.benefit3.towdes')
        },
        {
          index: require("@/asset/image/service/ICL/new-four.png"),
          des: this.$t('service.icl.benefit.benefit4.des'),
          towdes: ""
        },
        {
          index: require("@/asset/image/service/ICL/new-five.png"),
          des: this.$t('service.icl.benefit.benefit5.des'),
          towdes: ""
        },
        {
          index: require("@/asset/image/service/ICL/new-six.png"),
          des: this.$t('service.icl.benefit.benefit6.des'),
          towdes: this.$t('service.icl.benefit.benefit6.towdes')
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
  .benefit_list1 {
    p {
      text-align: left;
      padding-left: 50px;
    }
  }
  .benefit_list2 {
    p {
      text-align: left;
      padding-left: 30px;
    }
  }
  .benefit_list3 {
    p {
      text-align: left;
      padding-left: 50px;
    }
  }
  .benefit_list6 {
    p {
      text-align: left;
      padding-left: 100px;
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
      top: 10vw;
      right: 0;
      z-index: 1;
      height: auto;
    }
  }
  .benefit_list {
    background: url("https://static.cmereye.com/imgs/2022/12/28f52524aa3c4538.png");
    background-repeat: no-repeat;
    background-size: 65% 75%;
    text-align: right;
    background-position-y: 3vw;
    background-position-x: 5vw;
    margin-right: 304px;
    height: auto;
    margin-top: 3vw;
    li {
      margin: 0.5vw 0;
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
      margin-left: 165px;
    }
    li:nth-child(3) {
      margin-left: 32px;
    }
    li:nth-child(4) {
      margin-left: 402px;
    }
    li:nth-child(5) {
      margin-left: 140px;
    }
    li:nth-child(6) {
      margin-left: 520px;
      // padding-bottom: 123px;
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
    margin-top: 48vw;
    height: 141vw;
    margin-bottom: 10px;
    background-position: 0 43vw;
    background-size: 67vw 91vw;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 21px;
      margin: 3vw 0;
      img {
        height: 11vw;
        // border-bottom: 1px solid #4570b694;
      }
      margin-bottom: 10px;
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: left;
        letter-spacing: 0.1em;
        color: #6D6E71;
      }
    }
  }
  .benefit_list li:nth-child(1) {
    margin-left: 2vw;
    z-index: 11;
    margin-top: 5vw;
  }
  .benefit_list li:nth-child(2) {
    margin-left: 10vw;
    z-index: 11;
  }
  .benefit_list li:nth-child(3) {
    margin-left: 7vw;
    z-index: 11;
  }
  .benefit_list li:nth-child(4) {
    margin-left: 39vw;
    margin-top: 4vw;
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
}
</style>
