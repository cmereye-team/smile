<template>
  <div class="main_banner">
    <banner class="banner">
      <template v-slot:title class="title">
        <div class="pcShow">
          <p style="font-size: 28px">SMILE微笑激光矯視</p>
          <span>(Small Incision Lenticule Extraction)</span>
        </div>
        <div class="mbShow banner_serve">
          <p>SMILE微笑激光矯視</p>
          <span>(Small Incision Lenticule Extraction)</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow">
          是突破性全新近視矯正技術，比傳統的LASIK激光矯視更安全、微創。本中心的SMILE微笑矯視使用Carl
          Zeiss
          VisuMax激光最新3.0系統，原理是在不用打開角膜瓣的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-4mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人矯正近視、散光及老花問題，減低對眼鏡的依賴。
        </div></template
      >
    </banner>
  </div>
</template>
<script>
import Banner from "@/components/commom/head/Banner.vue";
export default {
  components: { Banner },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/03/edaaa3deb3e5303a.jpg");
  }
}
@media screen and (max-width: 768px) {
  .banner_serve {
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 700;
      font-size: 20px !important;
      line-height: 23px;
      /* or 115% */

      letter-spacing: 0.08em;

      background: linear-gradient(90.24deg, #4570b6 12.21%, #81dbec 87.2%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      padding-bottom: 5px;
      padding-top: 0;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 23px;
      letter-spacing: 0.08em;
      background: linear-gradient(90.24deg, #4570b6 12.21%, #81dbec 87.2%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .section {
    .des_box {
      width: 60.5vw !important;
      letter-spacing: 0.2vw;
      margin-top: 5vw;
    }
  }
  .banner {
    background-image: url(https://static.cmereye.com/imgs/2022/12/367a0527dc35bfd2.jpg);
    background-position: top;
    background-size: 100%;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
}
</style>
