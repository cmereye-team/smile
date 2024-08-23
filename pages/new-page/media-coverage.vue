<template>
  <div class="media-coverage">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>媒體報導</p>
          <p>Media coverage</p>
        </div>
      </template>
    </Banner>
    <div class="media-coverage-box">
      <H2Tag :title="['媒體報導']" />
      <div class="media-coverage-list">
        <a v-for="(item, index) in mediaList" :key="index">
          <div><img :src="item.img" :alt="item.title" /></div>
          <div>
            <span>{{ item.title }}</span>
            <span>{{ item.dateNow }}</span>
          </div>
          <div>{{ item.text }}</div>
        </a>
      </div>
      <a class="more-article" @click="getMediaList"> 更多文章 </a>
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
  name: "media-coverage",
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
      mediaList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/05/614e584f4a72ba85.png",
          title: "矯視",
          dateNow: "02.02.2019",
          text: "任何人都適合矯視？手術有風險嗎？一文了解SMILE微笑激光矯視手術過程、風險",
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/05/0b07c830ae3158da.png",
          title: "白內障",
          dateNow: "07.01.2020",
          text: "50歲以上？視力模糊、有重影？一文了解白內障4大成因、徵狀和手術過程",
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/05/dc15efc17f513ba9.png",
          title: "醫家話你知",
          dateNow: "02.02.2019",
          text: "香港人易啲深近視？做完激光矯視都可能有 嚴重眼疾",
        },
      ],
    };
  },
  methods: {
    getMediaList() {
      let list = this.mediaList.slice(0, 3);
      this.mediaList = [...list, ...this.mediaList];
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .media-coverage-box {
    margin: 0 auto;
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    max-width: 1270px;
  }
  .media-coverage-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px;
    & > a {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      & > div:nth-child(2) {
        margin: 35px 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span:nth-child(1) {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 50px; /* 208.333% */
          letter-spacing: 6px;
          border-radius: 10px;
          background: #4570b6;
          padding: 0 15px;
        }
        & > span:nth-child(2) {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 50px; /* 208.333% */
          letter-spacing: 6px;
        }
      }
      & > div:nth-child(3) {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        // font-size: 30px;
        // font-style: normal;
        // font-weight: 500;
        // line-height: 50px; /* 166.667% */
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: 7.5px;
      }
    }
  }
  .more-article {
    margin: 55px auto 85px;
    border-radius: 100px;
    background: #4570b6;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    width: fit-content;
    padding: 17px 150px;
  }
  .more-article:hover {
    box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.5);
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/a9a70b055b306234.png")
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
      margin-top: -10px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .media-coverage-box {
    max-width: 99.21875vw !important;
  }
}

@media screen and (max-width: 767px) {
  .media-coverage-box {
    margin-bottom: 65px;
    padding: 0 30px;
    .media-coverage-list {
      margin-bottom: 55px;
      & > a {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin-bottom: 35px;
        & > div:nth-child(1) {
          height: 180px;
          width: 100%;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          margin: 22px 0 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > span:nth-child(1) {
            color: #fff;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 50px; /* 312.5% */
            letter-spacing: 0.8px;
            border-radius: 5px;
            background: #4570b6;
            padding: 0 15px;
          }
          & > span:nth-child(2) {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 50px; /* 357.143% */
            letter-spacing: 0.7px;
          }
        }
        & > div:nth-child(3) {
          color: #6d6e71;
          font-family: "Noto Sans HK";
          // font-size: 30px;
          // font-style: normal;
          // font-weight: 500;
          // line-height: 50px; /* 166.667% */
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: 0.8px;
          text-align: center;
        }
      }
    }
  }
  .more-article {
    width: fit-content;
    padding: 10px 120px;
    border-radius: 100px;
    background: #4570b6;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 150% */
    letter-spacing: 1px;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/cb0a8543994b55b1.png")
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