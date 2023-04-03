<template>
  <div class="main_banner">
    <banner class="banner">
      <template v-slot:title class="title">
        <div class="pcShow">
          <p style="font-size: 28px">ICL植入式隱形眼鏡</p>

          <span>(ICL implantable contact lenses)</span>
        </div>
        <div class="mbShow banner_serve">
          <p>ICL植入式隱形眼鏡</p>
          <span>(ICL implantable contact lenses)</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow">
          植入式隱形眼鏡Implantable Contact Lens
          (ICL)，又名後房型可植入式隱形屈光晶體植入手術，專為深度近視、遠視、散光客人而設。手術過程無須切削角膜，把ICL
          晶體植入眼內，便可獲取高清視力。
          植入式隱形眼鏡以非激光原理，用創新技術和具生物兼容特質、柔軟及具紫外線防護的晶體材料，矯正高度近視、遠視及散光。ICL植入式隱形眼鏡的矯視過程：通過術前檢查後，醫生首先會在客人眼睛上滴麻醉眼藥水，再在角膜製作一個約3毫米的小切口。然後，醫生會將摺疊了的晶體植入眼球和定位，就如將隱形眼鏡直接戴在眼睛上，達到矯正視力的效果。一般手術過程大約5至10分鐘，術後無需縫針，一般矯視後第二天已能恢復視力。
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
@media screen and (max-width: 768px) {
  .banner_serve {
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
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
      margin-top: -1vw;
    }
  }
  .banner {
    background: url('https://static.cmereye.com/imgs/2023/03/e3291812f313426c.jpg')
      no-repeat;
    background-position: top;
    background-size: 114%;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 11vw;
    /* background: no-repeat; */
  }
}

@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/03/3ae2a090156712d6.jpg");
  }
}
</style>
