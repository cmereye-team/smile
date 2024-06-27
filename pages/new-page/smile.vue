
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
      <H2Tag :title="['SMILE矯正原理']" />
      <div>
        SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE 微笑矯視使用
        Carl Zeiss VisuMax
        激光最新3.0系統，原理是在不用打開角膜瓣的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人矯正近視、散光及老花問題，減低對眼鏡的依賴。
        <p>（推廣活動/限時優惠不可與其他優惠/禮遇同時使用）</p>
      </div>
      <div class="smile-pro-btn">
        <a
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
          target="_blank"
          rel="noopener noreferrer"
          >預約諮詢</a
        >
      </div>
    </div>
    <Step />
    <Benefit />
    <Fit />
    <div class="smile-pro-btn">
      <a
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        target="_blank"
        rel="noopener noreferrer"
        >預約諮詢</a
      >
    </div>
    <Xtra />
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>
<script>
import H2Tag from "@/components/Publice/H2Tag.vue";
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";

import Step from "@/components/content/service/relex_smile/Step_copy.vue";
import Benefit from "@/components/content/service/relex_smile/Benefit_copy.vue";
import Fit from "@/components/content/service/relex_smile/Fit_copy.vue";
import Xtra from "@/components/content/service/relex_smile/Xtra_copy.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    Step,
    H2Tag,
    Benefit,
    Fit,
    Xtra,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
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
      font-weight: 600;
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
    max-width: 980px;
    margin: 85px auto 0;

    color: #6d6e71;

    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
    :deep(h2) {
      margin-bottom: 35px;
    }
  }
  :deep(.benefit) {
    .benefit-in-lists {
      .listIn-t {
        h3 {
          letter-spacing: 6.25px;
        }
      }
    }
  }
  :deep(.xtra) {
    .xtra-in-title {
      h2:nth-child(2) {
        letter-spacing: 0;
      }
    }
    .xtra-in-lists {
      & > div {
        h3 {
          margin-bottom: 20px !important;
        }
        & > div:nth-child(2) {
          width: 193px;
          height: 193px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(3) {
          margin-top: 25px !important;
        }
      }
    }
  }
  .smile-pro-btn {
    margin: 85px auto;
    display: flex;
    justify-content: center;
    & > a {
      margin: 0 auto;
      width: fit-content;
      background: #4570b6;
      border-radius: 50px;
      padding: 16px 50px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
    }
  }
}
@media screen and (max-width: 767px) {
  :deep(.PcShow) {
    display: none !important;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/000c5714e8ad1fa2.png")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
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
  :deep(.xtra) {
    .xtra-in-title {
      h2 {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 5px;
      }
      h2:nth-child(2) {
        letter-spacing: 0;
      }
    }
    .xtra-collagen {
      color: #6d6e71;

      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 125% */
      letter-spacing: 4px;
    }
    .xtra-in-lists {
      width: 100%;
      margin: 18px auto 20px;
      & > div {
        width: 100%;
        & > h3 {
          min-width: 330px !important;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 16px !important;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 125% */
          letter-spacing: 4px !important;
        }
        & > div:nth-child(2) {
          margin-bottom: 0;
          width: 137px;
          height: 137px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 137px;
          & > svg {
            width: 78%;
          }
        }
        & > div:nth-child(3) {
          color: #6d6e71;

          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px; /* 200% */
          letter-spacing: 4.5px;
          padding: 0 55px;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(3) {
          padding: 0 45px;
        }
      }
    }
  }
  :deep(.benefit) {
    .benefit-in-lists {
      .listIn-t {
        h3 {
          letter-spacing: 3.6px;
        }
      }
    }
  }
  .smile-pro-btn {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    & > a {
      color: #fff;

      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
      background: #4570b6;
      border-radius: 55px;
      padding: 17px 55px;
    }
  }
  .smile-banner-context {
    width: auto;
    margin: 50px 24px 0;

    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 200% */
    letter-spacing: 4.5px;
  }
}
</style>