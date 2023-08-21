<template>
  <div class="main_banner">
    <div class="smile-banner">
      <img data-src="https://static.cmereye.com/imgs/2023/08/ba5cb23d3ef65120.jpg" srcset="https://static.cmereye.com/imgs/2023/08/1f0f4cb2d113be1f.jpg 768w, https://static.cmereye.com/imgs/2023/08/ba5cb23d3ef65120.jpg" src="https://static.cmereye.com/imgs/2023/08/ba5cb23d3ef65120.jpg" alt="">
      <div>
        <div class="title">SMILE {{'\n'}}微笑激光矯視</div>
        <div class="text">Small Incision Lenticule Extraction</div>
      </div>
    </div>
    <div class="smile-banner-context">
      <div class="title">矯正原理</div>
      <div class="context">{{$t('service.relexSmile.mainBanner.span')}}</div>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.smile-banner{
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 61px;
  overflow: hidden;
  position: relative;
  &>img{
    width: 100%;
  }
  &>div{
    position: absolute;
    left: 6.1%;
    top: 50%;
    transform: translateY(-50%);
    .title{
      color: #4570B6;
      font-size: 30px;
      font-weight: 700;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    .text{
      color: #4570B6;
      font-size: 15px;
      font-weight: 500;
      // line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
    }
  }
}
.smile-banner-context{
  width: 100%;
  max-width: 940px;
  margin: 120px auto 0;
  .title{
    color: #4570B6;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    text-align: center;
    position: relative;
    padding-bottom: 30px;
    &::after{
      content: '';
      background: #A6E1D6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .context{
    margin-top: 45px;
    color: #6D6E71;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
  }
}
@media screen and (max-width: 768px) {
  .smile-banner{
    width: auto;
    border-radius: 44px;
    margin: 24px 30px;
    &>div{
      max-width: 120px;
      .title{
        font-size: 14px;
        line-height: 21.952px; /* 156.802% */
        letter-spacing: 3.5px;
        white-space: pre-wrap;
      }
      .text{
        font-size: 10px;
        line-height: 18.816px; /* 188.163% */
        letter-spacing: 0.3px;
      }
    }
  }
  .smile-banner-context{
    width: auto;
    margin: 50px 30px 0;
    .title{
      font-size: 20px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      padding-bottom: 21px;
    }
    .context{
      margin-top: 26px;
      font-size: 15px;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
    }
  }
}
</style>
