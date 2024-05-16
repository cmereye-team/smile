<template>
  <div class="main_banner" @click="toWhatApp">
    <banner :class="['banner',`${$i18n.locale}BgImg`]"  v-if="$i18n.locale !== 'en'">
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
    <div v-else class="engBanner"> 
      <img
        data-src="https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/smile/May_2023_SMILEPRO_Banner-copy_Web-SC-copy.1kbs8nji6ow0.png"
        srcset="
        https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/smile/Web-TC-Mobile@2x-100.6m56g5p1sy80.jpg 768w,
          https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/smile/May_2023_SMILEPRO_Banner-copy_Web-SC-copy.1kbs8nji6ow0.png
        "
        src="https://cdn.statically.io/gh/CMER-SZ/picx-images-hosting@master/smile/May_2023_SMILEPRO_Banner-copy_Web-SC-copy.1kbs8nji6ow0.png"
        alt=""
      />
    </div>
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
      background-image: url("https://static.cmereye.com/imgs/2024/05/a505608f9bc955db.jpg");
    }
    &.cnBgImg{
      background-image: url("https://static.cmereye.com/imgs/2024/05/2a5a27ab125727ab.jpg");
    }
    margin-top: 24vw;
  }
  .engBanner  {
    display: flex;
    justify-content: center;
    margin-top: 95px;
    img {
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .engBanner {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }
  .banner {
    // background-position-x: right !important;
    &.hkBgImg{
      background-image: url("https://static.cmereye.com/imgs/2024/05/a25bc2e5da5de26b.jpg");
    }
    &.cnBgImg{
      background-image: url("https://static.cmereye.com/imgs/2024/05/9a404db4b48ed2b0.jpg");
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
