<template>
  <div class="step section page_container">
    <div class="flex justify-center md:mt-28 mbShow">
      <h2>微笑矯視</h2>
    </div>
    <div class="mbShow mb-10">
      <p style="text-align: justify">
        突破性全新近視矯正技術，比傳統的LASIK激光矯視更安全、微創。本中心的
        SMILE 微笑矯視使用 Carl Zeiss VisuMax
        激光最新3.0系統，原理是在不用打開角膜瓣的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-4mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人矯正近視、散光及老花問題，減低對眼鏡的依賴。
      </p>
    </div>
    <div class="flex justify-center md:mt-28">
      <h2>矯正步驟</h2>
    </div>

    <ul class="step_list flex justify-between items-center">
      <li v-for="(stepItem, index) in stepList" :key="index">
        <img :src="stepItem.src" alt="" />
        <strong>{{ stepItem.des }}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stepList: [
        {
          src: require("@/asset/image/service/relex_smile/Step1.png"),
          des: "以全飛秒激光直接切割角膜中層",
        },
        {
          src: require("@/asset/image/service/relex_smile/Step2.png"),
          des: "製作一個約2-4mm的小切口",
        },
        {
          src: require("@/asset/image/service/relex_smile/Step3.png"),
          des: "將切割了的角膜透鏡從切口抽出",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.step_list {
  margin: 0 auto;
  text-align: center;
  strong {
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    /* identical to box height, or 120% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
  }
  li {
    padding: 0 20px;
  }
  img {
    width: 25vw;
    margin-bottom: 2vw;
  }
}
h2 {
  font-size: 25px;
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }

  .step_list {
    text-align: center;
    display: flex;
    flex-direction: column;
    li {
      margin-top: 5vw;

      strong {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        /* identical to box height, or 133% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
    img {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 2vw;
    }
  }
}
</style>
