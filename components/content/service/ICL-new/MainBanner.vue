<template>
  <div class="main_banner">
    <div class="smile-banner">
      <img
        data-src="https://static.cmereye.com/imgs/2023/10/a7c9279d1d234f49.png"
        srcset="
          https://static.cmereye.com/imgs/2023/10/1de0aa651f60fde6.png 768w,
          https://static.cmereye.com/imgs/2023/10/a7c9279d1d234f49.png
        "
        src="https://static.cmereye.com/imgs/2023/10/a7c9279d1d234f49.png"
        alt=""
      />
      <div class="title_box">
        <div class="title">ICL {{ "\n" }}植入式隱形眼鏡</div>
        <div class="text">(ICL implantable contact lenses)</div>
      </div>
      <div class="pathLink">
        <a
          :href="localePath('/media')"
        ><span
        ><img
          src="https://static.cmereye.com/static/loffee/svg/9621.svg"
          alt="" /></span
        ><span>媒 體 報 導</span></a
        >
        <!-- <a :href="localePath('/charge-detail')"
          ><span
            ><img
              src="https://static.cmereye.com/imgs/2023/08/5fc1029d0c3be696.png"
              alt="" /></span
          ><span>收 費 詳 情</span></a
        > -->
        <a
          :href="localePath('/video')"
        ><span
        ><img
          src="https://static.cmereye.com/static/loffee/svg/9631.svg"
          alt="" /></span
        ><span>矯 視 資 訊 影 片</span></a
        >
        <a
          :href="localePath('/video')"
        ><span
        ><img
          src="https://static.cmereye.com/static/loffee/svg/9641.svg"
          alt="" /></span
        ><span>個 案 分 享</span></a
        >
      </div>
    </div>
    <div class="smile-banner-context">
      <div class="title">植入式隱形眼鏡</div>
      <div class="context" v-html="$t('service.icl.mainBanner.span')"></div>
    </div>
    <div class="smile-banner-context smile-banner-context2">
      <div class="title">為何選擇希瑪?</div>
      <div class="context" v-html="$t('service.icl.mainBanner.span2')"></div>
    </div>
    <div class="btn-subscribe">
      <a href="https://api.whatsapp.com/send/?phone=85260610511&text=我想預約(W-03)%20ICL植入式隱形眼鏡術前檢查" target="_blank">預約咨詢</a>
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
.smile-banner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 61px 0 61px 61px;
  overflow: hidden;
  position: relative;
  & > img {
    width: 100%;
  }
  & > div:nth-child(2) {
    position: absolute;
    left: 6.1%;
    top: 50%;
    transform: translateY(-50%);
    .title {
      color: #FFF;
      font-size: 30px;
      font-weight: 700;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    .text {
      color: #FFF;
      font-size: 15px;
      font-weight: 500;
      // line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
    }
  }
}
.pathLink {
  display: flex;
  padding: 20px 30px;
  border-radius:0 0 0 60px;
  background: #FFF;
  position: absolute;
  right: 0;
  top: 0;
  left: auto;


  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    & > span:nth-child(1) {
      min-width: 40px;
      min-height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > span:nth-child(2) {
      margin-top: 10px;
      writing-mode: vertical-rl;
      color: #6D6E71;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.4px;
    }
  }
  a:nth-child(1) {
    & > span:nth-child(2) {
      margin-left: -5px;
    }
  }
}

.smile-banner-context {
  width: 100%;
  max-width: 980px;
  margin: 120px auto 0;
  .title {
    color: #4570b6;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    text-align: center;
    position: relative;
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
}
.smile-banner-context2 {
  margin: 78px auto 0;
}
.main_banner {
  margin-top: 130px;
}
.btn-subscribe {
  margin: 53px auto 63px;
  background: #A5E1D7;
  border-radius: 49px;
  width: fit-content;
  color: #FFF;

  a {
    margin: 15px 36px;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 80% */
    letter-spacing: 7.5px;
    display: inline-block;
    padding-left: 7px;
  }
}
.btn-subscribe:hover {
  transform: scale(1.05) ;
  transition: all .3s ease-in-out;
}
@media screen and (max-width: 768px) {
  .btn-subscribe {
    margin: 36px auto 36px;
    background: #A5E1D7;
    border-radius: 49px;
    width: fit-content;
    color: #FFF;

    a {
      margin: 8.5px 14.6px;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
      padding-left: 7px;
    }
  }
  .smile-banner {
    width: auto;
    border-radius: 44px;
    margin: 24px 30px;
    & > div:nth-child(2) {
      max-width: 123px;
      .title {
        font-size: 14px;
        line-height: 21.952px; /* 156.802% */
        letter-spacing: 3.5px;
        white-space: pre-wrap;
      }
      .text {
        font-size: 10px;
        line-height: 18.816px; /* 188.163% */
        letter-spacing: 0.3px;
      }
    }
  }
  .smile-banner-context {
    width: auto;
    margin: 50px 30px 0;
    .title {
      font-size: 20px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      padding-bottom: 21px;
    }
    .context {
      margin-top: 26px;
      font-size: 15px;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
    }
  }
  .smile-banner-context2 {
    margin: 45px 10px 0;
  }
  .pathLink {
    display: none;
  }
}
</style>
