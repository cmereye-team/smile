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
      <H2Tag :title="['矯正步驟']" />
      <shareVideo />
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
import shareVideo from "@/components/content/ophthalmicInfo/shareVideos/shareVideo.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Banner,
    H2Tag,
    shareVideo,
  },
  data() {
    return {};
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
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
          }
        }
      }
      .tables {
        max-width: 1270px;
        width: 100%;
        margin: 52px auto 0;

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
                span {
                  color: #6d6e71;
                  text-align: center;
                  font-family: "Noto Sans HK";
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.8; /* 166.667% */
                  letter-spacing: 7.5px;
                }
              }
            }
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
          span {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.8; /* 166.667% */
            letter-spacing: 7.5px;
          }
        }
      }
      .tab-index-0 {
        display: none;
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
      font-weight: 400;
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
@media screen and (max-width: 767px) {
  :deep(.share-video) {
    h2 {
      margin-bottom: 40px;
    }
    .active {
      border-bottom: 2px solid #4570b6 !important;
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
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
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
        .media-buju {
          width: 100%;
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
      .tab-index-0 {
        display: none;
      }
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
    height: 330px;
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