<template>
  <div class="smile-pro">
    <Head />
    <Banner>
      <template #banner>
        <div class="banner-img">
          <p>SMILE PRO 微笑激光矯視</p>
          <p>Small Incision Lenticule Extraction</p>
        </div>
      </template>
    </Banner>
    <div class="smilePro-desc page_container">
      <div class="smilePro-desc-title flex justify-center md:mt-28 mt-10">
        <h2>{{ $t("service.smilePro.smileProDesc.title") }}</h2>
      </div>
      <div class="smilePro-desc-in">
        <div class="smilePro-desc-in-box">
          <img
            src="https://static.cmereye.com/imgs/2023/05/c9ade3fdcb092abc.jpg"
          />
          <div>
            <span>{{ $t("service.smilePro.smileProDesc.desc[0].span1") }}</span>
            <span>{{ $t("service.smilePro.smileProDesc.desc[0].span2") }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[0].span3")
            }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[0].span4")
            }}</span>
          </div>
        </div>
        <div class="smilePro-desc-in-box">
          <img
            src="https://static.cmereye.com/imgs/2023/05/908e2ba8cd129d5b.jpg"
          />
          <div>
            <span>{{ $t("service.smilePro.smileProDesc.desc[1].span1") }}</span>
            <span>{{ $t("service.smilePro.smileProDesc.desc[1].span2") }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[1].span3")
            }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[1].span4")
            }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[1].span5")
            }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[1].span6")
            }}</span>
          </div>
        </div>
        <div class="smilePro-desc-in-box">
          <img
            src="https://static.cmereye.com/imgs/2023/05/9f64d4fd52cd469e.jpg"
          />
          <div>
            <span>{{ $t("service.smilePro.smileProDesc.desc[2].span1") }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[2].span2")
            }}</span>
          </div>
        </div>
        <div class="smilePro-desc-in-box">
          <img
            src="https://static.cmereye.com/imgs/2023/05/a3ade36153e14488.jpg"
          />
          <div>
            <span>{{ $t("service.smilePro.smileProDesc.desc[3].span1") }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[3].span2")
            }}</span>
            <span v-if="$i18n.locale === 'en'">{{
              $t("service.smilePro.smileProDesc.desc[3].span3")
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        $i18n.locale === 'en'
          ? 'smilePro-descVideoEng smilePro-descVideo page_container'
          : 'smilePro-descVideo page_container',
      ]"
    >
      <h2
        :class="[
          $i18n.locale === 'en'
            ? 'smilePro-descVideoEng-titleEng'
            : 'smilePro-descVideo-title',
        ]"
      >
        <span>{{ $t("service.smilePro.smileProDescVideo.title") }}</span>
        <span>SMILE PRO!</span>
      </h2>
      <div class="smilePro-descVideo-in">
        <!-- <img src="https://static.cmereye.com/imgs/2023/05/822d9485daa1f2fa.jpg" />  -->
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IxvWmeOd18c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div>
      <H2Tag :title="titleName" />
      <div>
        <p>i</p>
        <p>i</p>
        <p>i</p>
        <p>i</p>
        <p>i</p>
      </div>
    </div>
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
import H2Tag from "@/components/Publice/H2Tag.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Banner,
    H2Tag,
  },
  data() {
    return {
      titleName: ["一圖看清SMILE,", "SMILE PRO, ICL大不同"],
      contrastTable: [
        [
          [""],
          ["SMILE PRO", "微笑矯視"],
          ["SMILE", "微笑矯視"],
          ["LASIK", "激光矯視"],
        ],
        [
          ["激光時間", "（單一眼睛）"],
          ["timepiece", "約10-16秒"],
          ["timepiece", "約23-25秒"],
          ["timepiece", ["平均30秒或以上", "（視乎情況）"]],
        ],
        [["傷口大小"]],
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
:deep(h2::before) {
  content: none;
  border: none;
}
:deep(h2) {
  border: none;
}
@media screen and (min-width: 768px) {
  .smile-pro {
    max-width: 1270px;
    margin: 0 auto;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/97390f8ba27fb627.png")
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
  .smilePro-desc {
    &-title {
      h2 {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.1em;
        color: #4570b6;
        padding-bottom: 22px;
      }
      h2::after {
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

    &-in {
      display: flex;
      justify-content: space-around;

      &-box {
        max-width: 230px;
        & > img {
          width: 100%;
          border-radius: 20px;
        }
        & > div {
          margin-top: 39px;

          span {
            display: block;
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #6d6e71;
          }
        }
      }
    }
  }

  .smilePro-descVideo {
    margin-top: 66px;
    h2 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      letter-spacing: 0.1em;
      color: #4570b6;
      padding-bottom: 22px;
    }
    h2::after {
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
    &-title {
      text-align: center;

      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 48px;
        letter-spacing: 0.1em;
        color: #4570b6;

        &:last-child {
          color: #4570b6;
        }
      }
    }

    &-in {
      margin-top: 88px;
      width: 100%;
      height: 484px;
      background: rgb(255, 253, 243);

      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  :deep(.PcShow) {
    display: none !important;
  }
  .context {
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
    background: url("https://static.cmereye.com/imgs/2024/04/580c617fabbfcbc6.png")
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
    .title::before {
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
  .smilePro-desc {
    &-title {
      h2 {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 5px;
        color: #4570b6;
        padding-bottom: 22px;
      }
      h2::after {
        content: "";
        background: #a6e1d6;
        width: 19px;
        height: 2px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }

    &-in {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      &-box {
        // max-width: 230px;
        width: 47%;
        & > img {
          width: 100%;
          border-radius: 20px;
        }
        & > div {
          margin-top: 22px;
          margin-bottom: 23px;

          span {
            display: block;
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #6d6e71;
          }
        }
      }
    }
  }

  .smilePro-descVideo {
    margin-top: 66px;
    h2 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 5px;
      color: #4570b6;
      padding-bottom: 12px;
      display: block;
      flex-direction: column;
    }
    h2::after {
      content: "";
      background: #a6e1d6;
      width: 19px;
      height: 2px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
    &-title {
      text-align: center;

      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 5px;
        color: #4570b6;

        &:last-child {
          color: #4570b6;
        }
      }
    }

    &-in {
      margin-top: 88px;
      width: 100%;
      height: 484px;
      background: rgb(255, 253, 243);

      img {
        width: 100%;
      }
    }
  }
}
</style>