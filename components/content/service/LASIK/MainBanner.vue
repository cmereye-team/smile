<template>
  <div class="main_banner">
    <banner class="banner">
      <template v-slot:title>
        <div class="pcShow">
          <h3 style="font-size: 28px">{{$t('service.lasik.mainBanner.p')}}</h3>

          <span>Laser-Assisted in Situ Keratomileusis</span>
        </div>
        <div class="mbShow banner_serve">
          <p>{{$t('service.lasik.mainBanner.p')}}</p>
          <span>Laser-Assisted in Situ</span>
          <span>Keratomileusis</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow desBox">
          {{$t('service.lasik.mainBanner.span')}}
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
      display: block;
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
    background-image: url("https://static.cmereye.com/imgs/2023/03/7ce7d7576dfc10e2.jpg");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
}

@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/03/98166c99909ffcca.jpg") 100% 100%;
  }
  p{
    font-size: 28px !important;
    font-weight: 700 !important;
  }
  span{
    letter-spacing: 1px;
    font-weight: 500 !important;
    font-size: 14px !important;
  }
  .desBox{
    max-width: 550px;
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
  }
}
</style>
