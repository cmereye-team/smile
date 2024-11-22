
<template>
  <div class="lasik">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>ICL<br v-if="isMobile" />{{$t('Correct.icl.bannerTitle')}}</p>
          <p>(ICL implantable Collamer lenses)</p>
        </div>
      </template>
    </Banner>
    <div class="laser_technology">
      <H2Tag :title="[$t('Correct.icl.bannerTitle')]" />
      <div class="laser_technology-in">

     
        <p>
          {{$t('Correct.icl.content1.p1')}}
        </p>
        <p>
            {{$t('Correct.icl.content1.p2')}}
          
        </p>
      </div>
    </div>
    <div class="laser_technology">
      <H2Tag :title="[$t('Correct.icl.small_title2')]" />
      <div class="laser_technology-in">
        <p>{{$t('Correct.icl.content2.p1')}}</p>
        <p>
         {{$t('Correct.icl.content2.p2')}}
        </p>
        <p>
         {{$t('Correct.icl.content2.p3')}}
        </p>
      </div>
    </div>
    <div class="whatsappBtn">
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        >{{$t('Correct.icl.iclBtn')}}</a
      >
    </div>
    <div class="characteristic">
      <H2Tag :title="[$t('Correct.icl.small_title3'), $t('Correct.icl.small_title3_1')]" />
      <div class="characteristic-text">
        <p>
          {{$t('Correct.icl.content3.p1')}}
        </p>
      </div>
      <div class="characteristic-lists">
        <div
          class="characteristic-lists-in"
          v-for="(item, index) in characteristic"
          :key="index"
        >
          <div class="round">
            <img :src="item.img" alt="" />
            <h4>{{ item.title }}</h4>
          </div>
          <div class="text">
            <p>
              <span
                v-for="(el, index) in item.text"
                :key="index"
                v-html="el"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <film />
    <process />
    <xtar />
    <suitable />
    <share />

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

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    process,
    xtar,
    film,
    suitable,
    share,
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
            "希瑪微笑矯視中心提供植入式隱形眼鏡 ICL 矯視服務，以創新技術和具生物兼容特質的人工晶體矯正視力，專為深度近視、遠視、散光客人而設。"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ICL, icl植入式隱形眼鏡, 植入式隱形眼鏡, evo icl, visian icl, icl 老花,ICL植入式隱形眼鏡, 矯視價錢 香港, 矯視 收費, 香港矯視, 視力矯正, 眼鏡, 隱形眼鏡, 眼科手術, 眼睛健康, 近視, 遠視, 散光, 投考紀律部隊, 微笑激光矯視, 乾眼, ICL 價錢, ICL 收費",
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
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-icl",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      characteristic: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/e8b1b4b4e7337083.png",
          title: this.$t('Correct.icl.characteristic.content1.title'),
          text: [this.$t('Correct.icl.characteristic.content1.text1'), this.$t('Correct.icl.characteristic.content1.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/b3fc1aae883e10c5.png",
          title: this.$t('Correct.icl.characteristic.content2.title'),
          text: [this.$t('Correct.icl.characteristic.content2.text1'), this.$t('Correct.icl.characteristic.content2.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9c2e5ca8b04dfc42.png",
          title: this.$t('Correct.icl.characteristic.content3.title'),
          // text: ["手術時間短<br />", "復原期短，手術過程", "最快只需20-30分鐘"],
          text:[this.$t('Correct.icl.characteristic.content3.text1'),this.$t('Correct.icl.characteristic.content3.text2'),this.$t('Correct.icl.characteristic.content3.text3')]
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/d6dc807847e807c6.png",
          title: this.$t('Correct.icl.characteristic.content4.title'),
          text: [this.$t('Correct.icl.characteristic.content4.text1'), this.$t('Correct.icl.characteristic.content4.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/78bb710a2eee5ce3.png",
          title: this.$t('Correct.icl.characteristic.content5.title'),
          text: [this.$t('Correct.icl.characteristic.content5.text1'), this.$t('Correct.icl.characteristic.content5.text2'), this.$t('Correct.icl.characteristic.content5.text3')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/bb006854352668ac.png",
          title: this.$t('Correct.icl.characteristic.content6.title'),
          text: [this.$t('Correct.icl.characteristic.content6.text1'), this.$t('Correct.icl.characteristic.content6.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/4fe5d9f2a1065ba4.png",
          title: this.$t('Correct.icl.characteristic.content7.title'),
          text: [this.$t('Correct.icl.characteristic.content7.text1')],
        },
      ],
      benefits: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/71f07f2e49ae92d7.png",
          title: this.$t('Correct.icl.benefits.content1.title'),
          text:  this.$t('Correct.icl.benefits.content1.text1'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/c8c583239e65a1a7.png",
          title: this.$t('Correct.icl.benefits.content2.title'),
          text: this.$t('Correct.icl.benefits.content2.text1'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/515c3b6fb8d3871d.png",
          title: this.$t('Correct.icl.benefits.content3.title'),
          text: this.$t('Correct.icl.benefits.content3.text1'),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/a200f81d4d1872a1.png",
          title: this.$t('Correct.icl.benefits.content4.title'),
          text: this.$t('Correct.icl.benefits.content4.text1'),
        },
      ],
      suitable_object: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/1acfa98b56345500.png",
          text: [this.$t('Correct.icl.suitable_object.content1.text1'), this.$t('Correct.icl.suitable_object.content1.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/2c2272ff6b7052c6.png",
          text: [this.$t('Correct.icl.suitable_object.content2.text1'), this.$t('Correct.icl.suitable_object.content2.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/56f73174b86b2288.png",
          text: [this.$t('Correct.icl.suitable_object.content3.text1')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9f4ca0776e175624.png",
          text: [this.$t('Correct.icl.suitable_object.content4.text1'), this.$t('Correct.icl.suitable_object.content4.text2')],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/7a55c233d701d0eb.png",
          text: [this.$t('Correct.icl.suitable_object.content5.text1'),this.$t('Correct.icl.suitable_object.content5.text2')],
          mbText: [this.$t('Correct.icl.suitable_object.content5.mbText1'), this.$t('Correct.icl.suitable_object.content5.mbText2')],
        },
      ],
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-icl",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-icl",
      browserTitle: "ICL植入式隱形眼鏡 - 希瑪微笑矯視中心",
      browserTitleCn: "ICL植入式隐形眼镜 - 希玛微笑矫视中心",
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
    background: url("https://static.cmereye.com/imgs/2024/04/a5d210497d854b68.webp")
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
    padding-bottom: 7%;
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
  :deep(.xtra) {
    .lists-box {
      & > div {
        & > div:nth-child(1) {
          & > h3 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
.laser_technology {
  margin-top: 85px;
  &-in {
    margin: 45px auto 0;
    width: 100%;
    max-width: 941px;
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
.whatsappBtn {
  display: flex;
  justify-content: center;
  margin: 53px 0 63px;
  & > a {
    border-radius: 50px;
    padding: 15px 50px;
    background: #a5e1d7;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 80% */
    letter-spacing: 7.5px;
  }
}
:deep(.mt-20) {
  margin-top: 0;
}
:deep(.share-img) {
  margin-top: 0;
}
.characteristic {
  width: 100%;
  // max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding: 70px 0 100px;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 0;
    padding-bottom: 200%;
    // background: rgba(199, 232, 239, 0.2);
    // border-radius: 50%/40%;
    background: url(https://static.cmereye.com/imgs/2024/05/e102853c2e3b96d4.png)
      no-repeat;
    background-size: 100% 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  &-text {
    max-width: 960px;
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
  &-lists {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-in {
      margin-top: 85px;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .round {
        width: 260px;
        height: 260px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        img {
          max-width: 125px;
          max-height: 86px;
          margin-bottom: 29px;
        }
        h4 {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px; /* 120% */
          letter-spacing: 8.75px;
          height: 90px;
          width: 170px;
        }
      }
      .text {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 23px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 152.174% */
        letter-spacing: 6.9px;
        margin-top: 20px;
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/1e78ab899188f6b4.webp")
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
      max-width: 130px;
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
      width: 110px;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.3px;
    }
  }
  .laser_technology {
    margin-top: 50px;
    &-in {
      font-size: 15px;
      font-weight: 300;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
      margin-top: 28px;
      padding: 0 25px;
    }
  }
  .characteristic {
    padding-bottom: 70px;
    &::before {
      padding-bottom: 500%;
      border-radius: 50%/20%;
    }
    &-text {
      margin: 41px auto 0;
      padding: 0 20px;
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 30px; /* 200% */
        letter-spacing: 4.5px;
      }
    }
    &-lists {
      padding: 0 20px;
      &-in {
        margin-top: 46px;
        width: 50%;
        .round {
          width: 156px;
          height: 156px;
          img {
            max-width: 73px;
            max-height: 50px;
            margin-bottom: 15px;
          }
          h4 {
            font-size: 18px;
            font-weight: 400;
            line-height: 20px; /* 111.111% */
            letter-spacing: 3.6px;
            width: 114px;
            height: 60px;
          }
        }
        .text {
          font-size: 15px;
          font-weight: 300;
          line-height: 22px; /* 146.667% */
          letter-spacing: 2.25px;
          width: 90%;
          max-width: 130px;
          & > P {
            display: inline-block;
          }
        }
        &:last-child {
          .text {
            width: 100%;
            max-width: 100%;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > p {
          }
        }
      }
    }
  }
  :deep(.xtra) {
    .lists-box {
      & > div {
        & > div:nth-child(1) {
          & > h3 {
            font-weight: 600 !important;
          }
        }
        & > div:nth-child(2) {
          font-size: 14px !important;
        }
      }
    }
  }
  .whatsappBtn {
    margin: 36px auto;
    & > a {
      padding: 10px 30px;
      font-size: 20px;
      font-weight: 700;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
    }
  }
  :deep(.film-top) {
    margin-top: 40px;
  }
  :deep(.title-content) {
    font-weight: 400;
  }
}
</style>