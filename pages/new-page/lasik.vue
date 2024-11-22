
<template>
  <div class="lasik">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>LASIK<br v-if="isMobile" />{{$t('Correct.lasik.bannerTitle')}}</p>
          <p>Laser-Assisted <br v-if="isMobile" />in Situ Keratomileusis</p>
        </div>
      </template>
    </Banner>
    <div class="laser_technology">
      <H2Tag :title="[$t('service.lasik.mainBanner.title')]" />
      <p class="laser_technology-in">
        {{$t('service.lasik.mainBanner.span')}}
      </p>
    </div>
    <div class="principle">
      <div class="principle-top">
        <!-- v-if="!isMobile" -->
        <div>
          <img
            src="../../asset/image/service/LASIK/lasik-teyory.svg"
            alt="LASIK激光矯視原理"
            title="LASIK激光矯視原理"
          />
        </div>
        <h3>
          LASIK<br />
          {{$t('service.lasik.principle.title')}}
        </h3>
      </div>
      <div class="principle-img">
        <div class="principle-img-in">
          <img
            src="https://static.cmereye.com/imgs/2024/05/1f20b33e3e858609.png"
            alt=""
          />
        </div>
        <div class="principle-img-in">
          <img
            src="https://static.cmereye.com/imgs/2024/04/334db04651a8d12d.png"
            alt=""
          />
        </div>
        <div class="principle-img-in">
          <img
            src="https://static.cmereye.com/imgs/2024/04/e3237ebb2e10ea1c.png"
            alt=""
          />
        </div>
        <div class="principle-img-in">
          <img
            src="https://static.cmereye.com/imgs/2024/04/8dd12144f4354a10.png"
            alt=""
          />
        </div>
      </div>
      <div class="principle-text">
        <p>
          {{$t('service.lasik.principle.span')}}
        </p>
      </div>
    </div>
    <div class="benefits">
      <H2Tag :title="[$t('Correct.lasik.small_title1')]" />
      <div class="benefits-lists">
        <div
          class="benefits-lists-in"
          v-for="(item, index) in benefits"
          :key="index"
        >
          <div class="images">
            <img :src="item.img" :alt="item.title" :title="item.title" />
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="suitable_object">
      <div class="suitable_object-top">
        <img
          src="https://static.cmereye.com/imgs/2024/04/8e745e91012fcd70.png"
          alt="合適對象"
          title="合適對象"
        />
        <!-- <h2>合適對象</h2> -->
        <H2Tag :title="[$t('Correct.lasik.small_title2')]" />
      </div>
      <div class="suitable_object-lists">
        <div
          class="suitable_object-lists-in"
          v-for="(item, index) in suitable_object"
          :key="index"
        >
          <div class="box">
            <div class="image"><img :src="item.img" alt="" /></div>
            <div class="text">
              <p v-for="(textItem, textIndex) in item.text" :key="textIndex">
                {{ textItem }}
              </p>
            </div>
            <div class="text mbText" v-if="index === 4">
              <p v-for="(textItem, textIndex) in item.mbText" :key="textIndex">
                {{ textItem }}
              </p>
            </div>
            <div class="text mbText" v-if="index === 0">
              <p v-for="(textItem, textIndex) in item.mbText" :key="textIndex">
                {{ textItem }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="smile-pro-btn"   :class="[isMobile ? 'smile-pro-btn-mb' : '']">
      <a
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-07)%20LASIK%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        target="_blank"
        rel="noopener noreferrer"
        >{{$t('Correct.icl.iclBtn')}}</a
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
import H2Tag from "@/components/Publice/H2Tag.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-lasik",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-lasik",
      browserTitle: "LASIK激光矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "LASIK激光矫视 - 希玛微笑矫视中心",
      benefits: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/71f07f2e49ae92d7.png",
          title: this.$t('Correct.lasik.benefits.content1.title'),
          text: this.$t('Correct.lasik.benefits.content1.text'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/c8c583239e65a1a7.png",
          title: this.$t('Correct.lasik.benefits.content2.title'),
          text: this.$t('Correct.lasik.benefits.content2.text'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/515c3b6fb8d3871d.png",
          title: this.$t('Correct.lasik.benefits.content3.title'),
          text: this.$t('Correct.lasik.benefits.content3.text'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/a200f81d4d1872a1.png",
          title: this.$t('Correct.lasik.benefits.content4.title'),
          text: this.$t('Correct.lasik.benefits.content4.text'),
        },
      ],
      suitable_object: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/1acfa98b56345500.png",
          text: [this.$t('Correct.lasik.suitable_object.content1.text1'), this.$t('Correct.lasik.suitable_object.content1.text2')],
          mbText: [this.$t('Correct.lasik.suitable_object.content1.mbText1'), this.$t('Correct.lasik.suitable_object.content1.mbText2'), "以下"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/2c2272ff6b7052c6.png",
          text: [this.$t('Correct.lasik.suitable_object.content2.text1'), this.$t('Correct.lasik.suitable_object.content2.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/56f73174b86b2288.png",
          text: [this.$t('Correct.lasik.suitable_object.content3.text1')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9f4ca0776e175624.png",
          text: [this.$t('Correct.lasik.suitable_object.content4.text1'), this.$t('Correct.lasik.suitable_object.content4.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/7a55c233d701d0eb.png",
          text: [this.$t('Correct.lasik.suitable_object.content5.text1'), this.$t('Correct.lasik.suitable_object.content5.text2')],
          mbText: [this.$t('Correct.lasik.suitable_object.content5.mbText1'), this.$t('Correct.lasik.suitable_object.content5.mbText2'),this.$t('Correct.lasik.suitable_object.content5.mbText3')],
        },
      ],
      isMobile: false,
    };
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "LASIK激光矯視術是一種已超過30年歷史的矯視方法，其運作原理是利用激光重新塑形角膜表面，改變其弧度，以達到改善視力的目的。立即了解更多。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "lasik,lasik 激光矯視,激光 手術,lasik 散光,激光 矯 視 手術,LASIK激光矯視, 激光矯視 價錢, 激光矯視 香港, 視力矯正, 眼睛健康, 激光矯視, 深近視, 眼睛檢查",
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
          href: "https://smile.hkcmereye.com/vision-correction-lasik",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-lasik",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-lasik",
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
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/8764882bb5d61bd6.webp")
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
.laser_technology {
  :deep(h2) {
    margin-bottom: 45px;
  }
  margin-top: 85px;
  margin-bottom: 20px;
  &-in {
    margin: 45px auto 0;
    width: 100%;
    max-width: 945px;
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
  }
}
.principle-top {
  & > div:nth-child(1) {
    width: 108px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
    }
  }
}
.principle {
  width: 100%;
  // max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding-bottom: 130px;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 0;
    padding-bottom: 200%;
    background: url(https://static.cmereye.com/imgs/2024/05/18206225b503de8f.png)
      no-repeat;
    background-size: 100% 100%;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  &-top {
    width: 307px;
    height: 307px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto;
    z-index: 3;
    position: relative;
    h3 {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px; /* 166.667% */
      letter-spacing: 7.5px;
    }
  }
  &-img {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1140px;
    margin: 85px auto 0;
    &-in {
      display: flex;
      align-items: flex-end;
      width: 185px;
      height: 185px;
      position: relative;
      & > img {
        width: 100%;
      }
      &:not(:last-child) {
        &::after {
          content: "";
          width: 44px;
          height: 14px;
          background: url(~@/asset/image/common/icon-1.svg) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: -88px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  &-text {
    max-width: 941px;
    margin: 58px auto 0;
    p {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
    }
  }
}
.benefits {
  margin-top: 88px;
  &-lists {
    margin: 142px auto 0;
    display: flex;
    justify-content: space-between;
    max-width: 1184px;
    &-in {
      display: flex;
      flex-direction: column;
      align-items: center;
      .images {
        height: 138px;
        img {
          width: 100%;
        }
      }
      h4 {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 80% */
        letter-spacing: 8.75px;
        margin: 0 auto 45px;
      }
      p {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 23px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 152.174% */
        letter-spacing: 10.35px;
        max-width: 194px;
      }
      &:nth-of-type(1) {
        p {
          max-width: 220px;
        }
      }
      &:nth-of-type(4) {
        p {
          max-width: 154px;
        }
      }
    }
  }
  :deep(h2) {
    padding-bottom: 32px;
  }
}
.suitable_object {
  :deep(h2)::after {
    display: none;
  }
  :deep(h2) {
    font-weight: 400;
  }
  width: 100%;
  // max-width: 1920px;
  margin: 0 auto 85px;
  overflow: hidden;
  position: relative;
  padding-bottom: 96px;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 0;
    padding-bottom: 200%;
    // background: rgba(199, 232, 239, 0.2);
    // border-radius: 50%/40%;
    background: url(https://static.cmereye.com/imgs/2024/05/53bf2271c231b37d.png)
      no-repeat;
    background-size: 100% 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
  }
  &::after {
    content: "";
    width: 100%;
    height: 150px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &-top {
    width: 307px;
    height: 307px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto;
    h2 {
      border: none;
      margin-bottom: 0;
      margin-top: 30px;
      &::before {
        display: none;
      }
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1207px;
    margin: 0 auto;
    &-in {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      margin-top: 66px;
      .box {
        width: 307px;
        height: 307px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .image {
        width: 100%;
        img {
          max-width: 50%;
          margin: 0 auto;
        }
      }
      .text {
        margin-top: 25px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px; /* 175% */
        letter-spacing: 4px;
        min-height: 51px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .mbText {
        display: none;
      }
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
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/6fdcba3b3d5247bc.webp")
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
      max-width: 150px;
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
  .laser_technology {
    margin-top: 50px;
    &-in {
      font-size: 15px;
      font-weight: 300;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
      margin-top: 28px;
      padding: 0 20px;
    }
  }
  .principle-top {
    & > div:nth-child(1) {
      width: 85px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 100%;
      }
    }
  }
  .principle {
    padding-bottom: 36px;
    &::before {
      top: 103px;
      padding-bottom: 500%;
      border-radius: 50%/20%;
    }
    &-top {
      width: 206px;
      height: 206px;
      img {
        width: 86px;
      }
      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px; /* 175% */
        letter-spacing: 5px;
        position: relative;
        top: -10px;
      }
    }
    &-img {
      margin-top: 22px;
      flex-direction: column;
      align-items: center;
      &-in {
        margin-top: 0;
        margin-bottom: 100px;
        height: auto;
        &:last-child {
          margin-bottom: 0;
        }
        &:not(:last-child) {
          &::after {
            left: 50%;
            right: auto;
            top: auto;
            bottom: -55px;
            transform: translateX(-50%) rotate(90deg);
          }
        }
      }
    }
    &-text {
      margin: 41px auto 0;
      padding: 0 30px;
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 30px; /* 200% */
        letter-spacing: 4.5px;
      }
    }
  }
  .benefits {
    margin-top: 50px;
    &-lists {
      flex-wrap: wrap;
      margin-top: 55px;
      padding: 0 30px;
      &-in {
        width: 50%;
        margin-bottom: 50px;
        .images {
          height: 82px;
          max-width: 50%;
          img {
            max-height: 64px;
          }
        }
        h4 {
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 3.6px;
          margin: 0 auto 25px;
          font-weight: 400;
        }
        p {
          font-size: 15px;
          font-weight: 300;
          line-height: 22px; /* 146.667% */
          letter-spacing: 3px;
          max-width: 105px;
        }
        &:nth-of-type(4) {
          p {
            max-width: 84px;
          }
        }
      }
    }
  }
  .suitable_object {
    margin: 0 auto 60px;
    padding-bottom: 50px;
    &::before {
      padding-bottom: 300%;
    }
    &::after {
      height: 85px;
    }
    &-top {
      width: 171px;
      height: 171px;
      img {
        width: 33px;
      }
    }
    &-lists {
      padding: 0 20px;
      &-in {
        width: 50%;
        margin-top: 39px;
        .box {
          width: 39.7vw;
          height: 39.7vw;
        }
        .image {
          max-height: 40%;
          img {
            max-width: 60%;
            max-height: 100%;
          }
        }
        .text {
          margin-top: 10px;
          font-size: 3.5vw;
          font-weight: 300;
          line-height: 20px; /* 178.571% */
          letter-spacing: 1.4px;
          min-height: 0;
        }
        &:nth-of-type(1) {
          .text {
            max-width: 80%;
            display: none;
          }
          .mbText {
            display: block;
          }
        }
        &:nth-of-type(5) {
          .text {
            display: none;
          }
          .mbText {
            display: block;
          }
        }
      }
      &-in:nth-child(4) {
        .image {
          max-width: 68px;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>