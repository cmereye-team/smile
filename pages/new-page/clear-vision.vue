<template>
  <div class="clear-vision">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>CMER<br />CLEAR-Vision<br v-if="!isMobile" />老花矯視</p>
          <p>(C-MER Lens Exchange Achieving Renewed Vision)</p>
        </div>
      </template>
    </Banner>
    <newClearVision />
    <div class="smile-pro-btn"  :class="[isMobile ? 'smile-pro-btn-mb' : '']">
      <a
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        target="_blank"
        rel="noopener noreferrer"
        >預約咨詢</a
      >
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";

import newClearVision from "@/components/content/new/ClearVision.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    newClearVision,
  },
  data() {
    return {
      isMobile: false,
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-presbyopia",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
      browserTitle: "老花矯視 - 香港希瑪微笑矯視中心",
      browserTitleCn: "老花矫视 - 香港希玛微笑矫视中心",
    };
  },
  head() {
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，為受老花困擾人士度身訂造矯視方案，讓客人回復高清視力，改善老花問題。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花手術, 激光矯視老花, 老花激光矯視, 老花 激光,老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
        },
      ],
    };
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .smile-pro-btn {
    margin: 0 auto 55px;
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
  .banner-img {
    background: url("https://statichk.cmermedical.com/smile/vision-correction-presbyopia/1b1ed51fa0655e61.webp")
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
    padding-top: 10%;
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
    }
  }
}
@media screen and (max-width: 767px) {
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
  :deep(.PcShow) {
    display: none !important;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/c880c3e5c98941ad.png")
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
      max-width: 140px;
    }
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 169.167% */
      letter-spacing: 3.5px;
    }
    & > p:nth-child(2) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.3px;
    }
  }
  .smile-pro-btn-mb{
    margin-bottom: 55px;
  }
}
</style>