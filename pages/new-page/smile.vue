
<template>
  <div class="smile">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>SMILE 微笑激光矯視</p>
          <p>Small Incision Lenticule Extraction</p>
        </div>
      </template>
    </Banner>
    <div class="smile-banner-context">
      <h2 class="title">矯正原理</h2>
      <div
        :class="[$i18n.locale === 'en' ? 'contextEng context' : 'context']"
        v-html="$t('service.relexSmile.mainBanner.span')"
      ></div>
    </div>
    <Step />
    <Benefit />
    <Fit />
    <Xtra />
    <businessHours />
    <Footer />
    <footers />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";

import Step from "@/components/content/service/relex_smile/Step_copy.vue";
import Benefit from "@/components/content/service/relex_smile/Benefit_copy.vue";
import Fit from "@/components/content/service/relex_smile/Fit_copy.vue";
import Xtra from "@/components/content/service/relex_smile/Xtra_copy.vue";
import Banner from "@/components/Publice/Banner.vue";
import footers from "@/components/commom/new_foot/footers.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Step,
    Benefit,
    Fit,
    Xtra,
    Banner,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .banner-box {
    max-width: 1270px;
    margin: 145px auto 0;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/97c8be06acc98273.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
    border-radius: 55px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
    }
  }
  .smile-banner-context {
    width: 100%;
    max-width: 940px;
    margin: 120px auto 0;
    .title {
      color: #4570b6;
      font-size: 30px;
      font-weight: 400;
      line-height: 30px; /* 100% */
      letter-spacing: 7.5px;
      text-align: center;
      position: relative;
      padding: 0;
      border: none;
      padding-bottom: 30px;
      &::after {
        content: "";
        background: #a6e1d6;
        width: 39px;
        height: 5px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
      &::before {
        content: none;
      }
    }
    .context {
      margin-top: 45px;
      color: #6d6e71;
      text-align: center;
      font-size: 20px;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
    }
    .contextEng {
      color: #6d6e71;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 166.667% */
      letter-spacing: 1.8px;
    }
  }
}
@media screen and (max-width: 767px) {
  :deep(.PcShow) {
    display: none !important;
  }
  :deep(.context) {
    color: #6d6e71 !important;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 200% */
    letter-spacing: 4.5px;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/000c5714e8ad1fa2.png")
      no-repeat;
    background-size: 100% 100%;
    height: 330px;
    margin: 24px 30px;
    border-radius: 44px;
    margin-top: 80px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 169.167% */
      letter-spacing: 3.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.3px;
    }
  }

  .smile-banner-context {
    width: auto;
    margin: 50px 30px 0;
    .title {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      border: none;
      padding-bottom: 22px;
    }
    .title::before{
      content: none;
    }
    .title::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }

    .context {
      margin-top: 26px;
      font-size: 15px;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
    }
    .contextEng {
      color: #6d6e71;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 166.667% */
      letter-spacing: 1.8px;
    }
  }
}
</style>