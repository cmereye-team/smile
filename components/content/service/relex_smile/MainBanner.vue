<template>
  <div class="main_banner">
    <banner class="banner">
      <template v-slot:title>
        <div class="pcShow">
          <h3 style="font-size: 28px">{{$t('service.relexSmile.mainBanner.p')}}</h3>
          <span>(Small Incision Lenticule Extraction)</span>
        </div>
        <div class="mbShow banner_serve">
          <p>{{$t('service.relexSmile.mainBanner.p')}}</p>
          <span>(Small Incision Lenticule Extraction)</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow">
          {{$t('service.relexSmile.mainBanner.span')}}
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
  span{
    letter-spacing: 1px;
    font-size: 14px;
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
