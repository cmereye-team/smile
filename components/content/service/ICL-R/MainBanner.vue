<template>
  <div class="main_banner">
    <banner class="banner">
      <!-- <template v-slot:title>
        <div class="pcShow">
          <h3 style="font-size: 28px">{{$t('service.icl.mainBanner.p1')}}</h3>
          <span>(ICL implantable contact lenses)</span>
        </div>
        <div class="mbShow banner_serve">
          <p>{{$t('service.icl.mainBanner.p1')}}</p>
          <span>(ICL implantable contact lenses)</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow">
          {{$t('service.icl.mainBanner.p2')}}
        </div></template
      > -->
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
      font-family: var(--font_family);
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
      font-family: var(--font_family);
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
    background: url('https://static.cmereye.com/imgs/2023/10/898b0a4378f93152.jpg')
      no-repeat;
    background-position: top;
    background-size: 114%;
    width: 100vw;
    margin: 94px auto 0;
    margin-bottom: 11vw;
    padding-left: 25px;
    /* background: no-repeat; */
  }
}

@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/10/6117d244179fa10b.jpg");
  }
  span{
    font-size: 14px;
  }
}
</style>
