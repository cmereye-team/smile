<template>
  <div class="orthopedic-video">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>矯視資訊影片</p>
          <p>Orthopedic information video</p>
        </div>
      </template>
    </Banner>
    <div class="share-video">
      <H2Tag :title="['個案分享及矯視資訊影片']" />
      <shareVideo />
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
import shareVideo from "@/components/content/new/shareVideo.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    shareVideo,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/video",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/video",
      browserTitle: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
      browserTitleCn: "个案分享及矫视资讯影片 - 香港希玛微笑矫视中心",
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
          content: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "個案分享及矯視資訊影片 - 香港希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/video",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/video",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/video",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
:deep(.share-video) {
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: none;
    }
  }
}
@media screen and (min-width: 768px) {
  :deep(.share-video) {
    h2 {
      margin-bottom: 40px;
    }
    .active {
      border-bottom: 2px solid #4570b6 !important;
      background: #4570b6 !important;
      & > p {
        color: #fff !important;
      }
    }
    .tab-control {
      .active {
        border-bottom: none !important;
        background: transparent !important;
      }
    }
    .tab-control .active {
      border-bottom: none !important;
    }
    & > div:nth-child(2) {
      padding: 0 !important;
      & > div:nth-child(2) {
        max-width: 1270px;
        margin: 0 auto;
      }
      ul {
        max-width: 1270px;
        margin: 0 auto;
        width: 100%;
        & > li {
          border-bottom: 2px solid #4570b694;
          border-image: none;
          height: 85px;
          display: flex;
          justify-content: center;
          align-items: center;
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 100% */
            letter-spacing: 7.5px;
          }
        }
      }
      .tables {
        max-width: 1270px;
        width: 100%;
        margin: 85px auto 75px;

        & > div:nth-child(2) {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & > .media-buju {
            width: 1270px;
          }
          & > div {
            & > a {
              & > img {
                width: 392px;
                height: auto;
                border-radius: 20px;
              }
              & > div {
                max-width: 392px;
                margin-top: 0;
                span {
                  color: #6d6e71 !important;
                  text-align: center;
                  font-family: "Noto Sans HK";
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 50px; /* 166.667% */
                  letter-spacing: 7.5px;
                }
              }
            }
          }
        }
        & > a {
          background: #4570b6 !important;
          height: auto;
          width: 100%;
          display: flex;
          width: fit-content;
          margin: 0 auto;
          border-radius: 100px;
          padding: 17px 150px;
          & > div {
            & > span {
              color: #fff;
              text-align: center;
              font-family: "Noto Sans HK";
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 30px; /* 100% */
              letter-spacing: 7.5px;
            }
            background: transparent !important;
          }
        }
      }
      .tab-control {
        .active {
          span {
            color: #fff;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
      .media-box {
        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 392px;
          height: auto;
          border-radius: 20px;
        }
        .meida {
          max-width: 392px;
          margin-top: 0px;
          span {
            color: #6d6e71 !important;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 50px; /* 166.667% */
            letter-spacing: 7.5px;
          }
        }
      }
      .tab-index-1 .tab-index-2 {
        .tab-control {
          display: flex !important;
        }
      }
      .tab-control {
        .active {
          span {
            color: #4570b6;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/d17daac53c331624.png")
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
    padding-bottom: 5%;
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
      margin-top: -10px;
    }
  }
  .share-video {
    margin-top: 85px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  :deep(.share-video) {
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        max-width: 99.21875vw !important;
      }
      ul {
        max-width: 99.21875vw !important;
      }
      .tables {
        max-width: 99.21875vw !important;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .share-video {
    margin-bottom: 55px;
  }
  :deep(.share-video) {
    h2 {
      margin-bottom: 35px;
    }
    .active {
      border-bottom: none !important;
      background: #4570b6 !important;
      P {
        color: #fff !important;
      }
    }
    & > div:nth-child(2) {
      padding: 0 !important;
      & > div:nth-child(2) {
        max-width: 1270px;
        margin: 0 auto;
      }
      ul {
        margin: 0 auto;
        width: 100%;
        height: 85px;
        & > li {
          border-bottom: 2px solid #4570b694;
          border-image: none;
          line-height: 85px;
          display: flex;
          justify-content: center;
          align-items: center;
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 150% */
            letter-spacing: 1px;
          }
        }
      }
      .tables {
        width: 100%;
        margin: 88px auto 0;
        padding: 0 30px;

        & > div:nth-child(2) {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            & > a {
              display: flex;
              flex-direction: column;
              align-items: center;

              & > img {
                width: 330px;
                height: auto;
                border-radius: 20px;
              }
              & > div {
                max-width: 330px;
                span {
                  color: #6d6e71;
                  text-align: center;
                  font-family: "Noto Sans HK";
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 20px; /* 312.5% */
                  letter-spacing: 0.8px;
                }
              }
            }
          }
        }
        & > a {
          background: #4570b6 !important;
          height: auto;
          width: 100%;
          display: flex;
          margin: 0 auto;
          border-radius: 100px;
          padding: 10px 100px;
          & > div {
            & > span {
              color: #fff;
              text-align: center;
              font-family: "Noto Sans HK";
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 30px; /* 150% */
              letter-spacing: 1px;
            }
            background: transparent !important;
            width: 100%;
            margin-top: 0;
            margin: 0 auto;
          }
        }
        .media-buju {
          width: 100%;
        }
      }
      .tab-control {
        & > div {
          border-bottom: none;
          position: relative;
        }
        & > div::before {
          content: "";
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b3dfd6;
        }
        .active {
          border-bottom: none !important;
          background: #fff !important;
          span {
            color: #4570b6 !important;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
      .media-box {
        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 330px;
          height: auto;
          border-radius: 20px;
        }
        .meida {
          max-width: 330px;
          span {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 312.5% */
            letter-spacing: 0.8px;
          }
        }
      }
      // .tab-index-0 {
      //   display: none;
      // }
      .tab-index-1 .tab-index-2 {
        .tab-control {
          display: flex !important;
        }

        width: 100%;
        background: darkcyan !important;
        & > div:nth-child(2) {
          .media-buju {
            width: 100%;
            margin: 0 auto;
            & > div {
              & > a {
                display: flex;
                flex-direction: column;
                align-items: center;

                & > & > div {
                  max-width: 330px;
                  span {
                    color: #6d6e71;
                    text-align: center;
                    font-family: "Noto Sans HK";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 50px; /* 312.5% */
                    letter-spacing: 0.8px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/2fa887bd2cfd7350.png")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-bottom: 30%;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
}
</style>