<template>
  <div class="main_banner" @click="toWhatApp">
    <banner :class="['banner',`${$i18n.locale}BgImg`]">
      <template v-slot:title>
        <div class="pcShow">
          <!-- <p style="font-size: 28px">CMER CLEAR-Vision</p> -->

          <!-- <span>(C-MER Lens Exchange Achieving Renewed Vision)</span> -->
        </div>
        <div class="mbShow banner_serve">
          <!-- <p>CMER</p> -->
          <!-- <p>CLEAR-Vision</p> -->
          <!-- <span>C-MER Lens Exchange</span> -->
          <!-- <span>Achieving Renewed Vision</span> -->
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow desBox">
          <!-- {{$t('service.clearVision.mainBanner.span')}} -->
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
  methods: {
    toWhatApp(){
      window.location.href= 'https://api.whatsapp.com/send/?phone=85260610511&text=我想了解(W-02) Smile Pro矯視'
    }
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .banner_serve {
    margin-bottom: 49px;
    cursor: pointer;
    p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      /* or 115% */
      white-space: pre;
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
      display: block;
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
    // background-size: 100%;
    width: 100vw;
    margin: 0 auto;
    height: 100vw !important;
    margin-bottom: 10vw;
    &.hkBgImg{
      background-image: url("https://static.cmereye.com/imgs/2023/05/46220615c3718658.jpg");
    }
    &.cnBgImg{
      background-image: url("https://static.cmereye.com/imgs/2023/05/9b71688220cc08a3.jpg");
    }
    margin-top: 24vw;
  }
  
}

@media screen and (min-width: 768px) {
  .banner {
    // background-position-x: right !important;
    &.hkBgImg{
      background-image: url("https://static.cmereye.com/imgs/2023/05/f98c9fee4d7f0f66.jpg");
    }
    &.cnBgImg{
      background-image: url("https://static.cmereye.com/imgs/2023/05/9f295eeb364d5c18.jpg");
    }
  }
  p{
    font-size: 28px;
    font-weight: 700 !important;
  }
  span{
    letter-spacing: 1px;
    font-size: 14px;
  }
  .desBox{
    max-width: 600px;
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
  }
}
</style>
