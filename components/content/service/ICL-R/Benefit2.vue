<template>
  <div class="activity">
    <div class="activity-title">活動簡介</div>
    <div class="activity-content">
      為了讓大眾對最新的矯視技術——ZEISS
      SMILE®pro微笑矯視有更深入認識，希瑪微笑矯視中心將與德國蔡司ZEISS合作舉辦講座活動。透過今次活動中，兩位希瑪微笑閃亮大使的真實分享及眼科醫生的技術講解，令大眾重新思考視力對生活的重要性。
    </div>
    <div class="activity-time">
      <div v-for="item in activityList" :key="item.id">
        <div>
          <img :src="item.img" alt="" />
        </div>
        <div>
          <div>
            <span>{{ item.title }}</span>
          </div>
          <div v-html="item.text"></div>
        </div>
      </div>
    </div>
    <div class="activity-banner">
      <img
        data-src="https://static.cmereye.com/imgs/2024/03/adbe3a875c41bae3.png"
        srcset="
          https://static.cmereye.com/imgs/2024/03/b4a9654490716e79.png 768w,
          https://static.cmereye.com/imgs/2024/03/adbe3a875c41bae3.png
        "
        src="https://static.cmereye.com/imgs/2024/03/adbe3a875c41bae3.png"
        alt="会场"
      />

      <img
        data-src="https://static.cmereye.com/imgs/2024/03/eaa4de61dded7e60.png"
        srcset="
          https://static.cmereye.com/imgs/2024/03/2b199668236b10b3.png 768w,
          https://static.cmereye.com/imgs/2024/03/eaa4de61dded7e60.png
        "
        src="https://static.cmereye.com/imgs/2024/03/eaa4de61dded7e60.png"
        alt="星級家用"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activityList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/03/b640157842f37702.png",
          title: "日期",
          text: `2024年4月21日`,
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/03/8c1a146f32018a2e.png",
          title: "時間",
          text: `2:30PM`,
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/03/4e6ddf0a49ba55b4.png",
          title: "地點",
          text: `香港康得思酒店<br />(朗豪坊）`,
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .activity {
    margin: 85px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    .activity-content {
      padding: 50px 102px 40px;
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
    }
    .activity-title {
      padding: 10px 124px;
      color: #5d85c3;
      font-family: "Noto Sans HK";
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 75% */
      letter-spacing: 10px;
      margin-bottom: 92px;
      position: relative;
    }
    .activity-title::before {
      content: "";
      display: block;
      width: 39px;
      height: 4px;
      background: #a6e1d6;
      border-radius: 5px;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-70%);
    }
    .activity-time {
      margin-bottom: 40px;
      display: flex;
      & > div {
        min-width: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        min-height: 268px;
        position: relative;
        padding-bottom: 5px;
        & > div:nth-child(1) {
          width: 86px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            margin-top: 22px;
            color: #5d85c3;
            font-family: "Noto Sans";
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: 180%; /* 45px */
            letter-spacing: 3.75px;
            text-align: center;
          }
          & > div:nth-child(2) {
            min-height: 84px;
            display: flex;
            align-items: center;
            color: #5d85c3;
            font-family: "Noto Sans HK";
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: 42px; /* 75% */
            letter-spacing: 6px;
            text-align: center;
          }
        }
      }
      & > div::before {
        content: "";
        display: block;
        width: 2px;
        height: 217px;
        background: #3b786c4d;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      & > div:last-child::after {
        content: "";
        display: block;
        width: 2px;
        height: 217px;
        background: #3b786c4d;
        position: absolute;
        bottom: 0;
        right: 0;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          width: 61px;
        }
      }
    }
    .activity-banner {
      display: flex;
      margin-bottom: 86px;
      & > img {
        padding: 0 11px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5.897vw;
    .activity-title {
      margin-top: 11.538vw;
      margin-bottom: 3.846vw;

      color: #5d85c3;
      font-family: "Noto Sans HK";
      font-size: 7.692vw;
      font-style: normal;
      font-weight: 700;
      line-height: 7.692vw; /* 100% */
      letter-spacing: 1.923vw;
      position: relative;
      padding-bottom: 22px;
    }
    .activity-title::before {
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
    .activity-content {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 250% */
      letter-spacing: 4.2px;
    }

    .activity-time {
      margin-top: 5.641vw;
      margin-bottom: 1.026vw;
      width: 100%;
      padding: 0 1.282vw;
      & > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-top: 2px solid rgba(59, 120, 108, 0.3);
        padding: 6.154vw 0;
        & > div:nth-child(1) {
          width: 16.41vw;
          min-width: 10.256vw;
          display: flex;
          justify-content: center;
          margin-right: 2.846vw;
          padding-left: 1.538vw;
        }
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: #5d85c3;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 180%; /* 36px */
            letter-spacing: 3px;
          }
          & > div:nth-child(2) {
            color: #5d85c3;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 35px; /* 116.667% */
            letter-spacing: 4.5px;
          }
        }
      }
      & > div:nth-child(3) {
        padding-left: 2.308vw;
        padding-right: 1.128vw;
        & > div:nth-child(1) {
          width: 12.821vw;
        }
        & > div:nth-child(2) {
          margin-left: 0.513vw;
        }
      }
    }
    .activity-banner {
      width: 335px;
      padding-bottom: 6.154vw;
      border-bottom: 2px solid #3b786c;
      img {
        width: 100%;
        padding: 5px 0;
      }
    }
  }
}
</style>
