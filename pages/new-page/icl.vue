
<template>
  <div class="lasik">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>ICL<br v-if="isMobile" />植入式隱形眼鏡</p>
          <p>(ICL implantable contact lenses)</p>
        </div>
      </template>
    </Banner>
    <div class="laser_technology">
      <H2Tag :title="['植入式隱形眼鏡']" />
      <div class="laser_technology-in">
        <p>
          植入式隱形眼鏡Implantable Contact Lens
          (ICL)，又名後房型可植入式隱形屈光晶體植入手術，專為深度近視、遠視、散光客人而設。
        </p>
        <p>
          手術過程無須切削角膜，把ICL晶體植入眼內，便可獲取高清視力。植入式隱形眼鏡以非激光原理，用創新技術和具生物兼容特質、柔軟及具紫外線防護的晶體材料，矯正高度近視、遠視及散光。
        </p>
      </div>
    </div>
    <div class="laser_technology">
      <H2Tag :title="['為何選擇希瑪?']" />
      <div class="laser_technology-in">
        <p>希瑪自創辦以來與STAAR Surgical公司建立良好的合作關係逾10年。</p>
        <p>
          2023年，STAAR
          Surgical公司對希瑪眼科集團的醫療技術、手術品質及服務作出認可，宣佈將希瑪微笑矯視中心設立為首間官方認證EVO
          ICL 國際培訓中心。
        </p>
        <p>
          希瑪微笑矯視中心往後會繼續致力於ICL方面發展，成為大眾選擇ICL植入式隱形眼鏡的首選!
        </p>
      </div>
    </div>
    <div class="whatsappBtn">
      <a href="https://api.whatsapp.com/send/?phone=85260610511">預約咨詢</a>
    </div>
    <div class="characteristic">
      <H2Tag :title="['EVO Visian ICL鏡片', '7大特色']" />
      <div class="characteristic-text">
        <p>
          EVO Visian ICL以STAAR Surgical
          專用的生物相容Collamer專利材質製成。這種材質含有自然存在於體內的膠原蛋白。EVO
          Visian ICL Collamer
          技術的獨特優勢使其成為視力矯正鏡片的理想材質，其中包含抗紫外線功能。
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
              <span v-for="(el, index) in item.text" :key="index" v-html="el"></span>
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
import FooterMobile from '@/components/Publice/FooterMobile.vue'
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
  data() {
    return {
      isMobile: false,
      characteristic: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/e8b1b4b4e7337083.png",
          title: "紫外線防護",
          text: ["鏡片有紫外線", "防護功能"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/b3fc1aae883e10c5.png",
          title: "與時俱進的靈活度",
          text: ["ICL鏡片既可永久", "存放眼內亦可還原"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9c2e5ca8b04dfc42.png",
          title: "手術與恢復皆快速",
          text: ["手術時間短<br />", "復原期短，手術過程", "最快只需20-30分鐘"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/d6dc807847e807c6.png",
          title: "柔軟服貼",
          text: ["鏡片柔軟靈活", "易於植入"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/78bb710a2eee5ce3.png",
          title: "生物相容性",
          text: ["ICL鏡片由含有", "膠原蛋白材質製成，", "與眼球互相兼容"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/bb006854352668ac.png",
          title: "可取出",
          text: ["可按需要", "選擇取出鏡片"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/4fe5d9f2a1065ba4.png",
          title: "夜間視力",
          text: ["提供絕佳夜間視力"],
        },
      ],
      benefits: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/71f07f2e49ae92d7.png",
          title: "術後恢復快",
          text: "最快術後數天可如常生活、工作",
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/c8c583239e65a1a7.png",
          title: "手術時間短",
          text: "大約10至15分鐘完成",
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/515c3b6fb8d3871d.png",
          title: "矯視過程輕鬆",
          text: "快捷、安全少有不適",
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/a200f81d4d1872a1.png",
          title: "效果穩定",
          text: "視力改善滿意度高",
        },
      ],
      suitable_object: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/1acfa98b56345500.png",
          text: ["近視1,400度以下", "遠視 / 散光600度以下"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/2c2272ff6b7052c6.png",
          text: ["投考或從事紀律部隊/", "航空業界人士"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/56f73174b86b2288.png",
          text: ["熱愛運動"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9f4ca0776e175624.png",
          text: ["不愛戴隱形眼鏡", "或眼鏡人士"],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/7a55c233d701d0eb.png",
          text: ["擔心長期配戴隱形眼鏡", "影響眼睛健康人士"],
          mbText: ["不愛佩戴眼鏡或", "隱形眼鏡"],
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
    background: url(https://static.cmereye.com/imgs/2024/05/e102853c2e3b96d4.png) no-repeat;
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
      &>div:nth-child(3) {
        &>div:nth-child(2){
          &>p{

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
            font-weight: 600;
          }
        }
        & > div:nth-child(2) {
          font-size: 14px;
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