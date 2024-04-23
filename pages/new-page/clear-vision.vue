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
    <businessHours />
    <Footer />
    <footers />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import footers from "@/components/commom/new_foot/footers.vue";

import newClearVision from '../../components/content/new/ClearVision.vue'

export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Banner,
    newClearVision
  },
  data() {
    return {
            isMobile: false,
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
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/1b1ed51fa0655e61.png")
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
      font-weight: 700;
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
  :deep(.PcShow) {
    display: none !important;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/c880c3e5c98941ad.png")
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
}
</style>