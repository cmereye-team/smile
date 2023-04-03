<template>
  <div class="benefit section pc_page_container">
    <div class="flex justify-center md:mt-28 mt-10 page_container">
      <h2>LASIK 激光矯視的好處</h2>
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
        src="https://static.cmereye.com/imgs/2022/12/4d5d4b7751efa3bf.jpg"
        alt=""
      />
      <img
        class="benefit_img benefit_light"
        src="@/asset/image/service/relex_smile/benefit_light.jpg"
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
          index: require("@/asset/image/service/CLEAR_Vision/one.png"),
          des: "最快術後數天可如常生活、工作",
        },
        {
          index: require("@/asset/image/service/CLEAR_Vision/two.png"),
          des: "大約10至15分鐘完成",
        },
        {
          index: require("@/asset/image/service/LASIK/three.png"),
          des: "快捷、安全、少有不適",
        },
        {
          index: require("@/asset/image/service/LASIK/four.png"),
          des: "視力改善滿意度高",
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
}
@media screen and (min-width: 768px) {
  .benefit_list li:nth-child(5) p {
    width: 64%;
  }
  .benefit_list li:nth-child(6) p {
    width: 86%;
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
    background-size: cover;
    text-align: right;
    background-position-y: 3vw;
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
        color: #000000;
      }
      img {
        height: 90px;
      }
    }
    li:nth-child(1) {
      margin-left: 0vw;
    }
    li:nth-child(2) {
      margin-left: 268px;
      margin-top: 80px;
    }
    li:nth-child(3) {
      margin-left: 62px;
      margin-top: 54px;
    }
    li:nth-child(4) {
      margin-left: 402px;
      padding-bottom: 150px;
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
  .benefit_list li:nth-child(5) p {
    width: 60%;
  }
  .benefit_list {
    background: url(https://static.cmereye.com/imgs/2022/12/a2c6adf210ffc920.jpg)
      no-repeat;
    margin-top: 48vw;
    height: 95vw;
    background-position: left;
    background-position-y: 77px;
    li {
      img {
        height: 12vw;
      }
      margin-bottom: 10px;
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: right;
        letter-spacing: 0.1em;
        color: #000000;
      }
    }
  }
  .benefit_list li:nth-child(1) {
    margin-left: 2vw;
    z-index: 11;
  }
  .benefit_list li:nth-child(2) {
    margin-left: 19vw;
    z-index: 11;
    margin-top: 7vw;
  }
  .benefit_list li:nth-child(3) {
    margin-left: 9vw;
    margin-top: 7vw;
  }
  .benefit_list li:nth-child(4) {
    margin-left: 46vw;
    margin-top: 0vw;
  }
  .benefit_content .benefit_light {
    top: -14vw;
    right: 0;
    z-index: 1;
    height: 60vw;
  }
}
</style>
