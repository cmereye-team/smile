<template>
  <div>
    <div class="bg-photo">
      <div class="pcShow discounts-contact">
        <a
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-SPT02)%20CMERxZEISS%20SMILE%C2%AEPro%E8%AC%9B%E5%BA%A7%E5%88%86%E4%BA%AB"
          target="_blank"
        >
          <button class="link_more shadow-lg">
            <div class="flex items-center justify-evenly">
              <div class="text-left">
                <h3 class="text-xs font-normal text-center discounts-h3">
                  <span>WhatsApp</span><span>報名</span>
                </h3>
              </div>
            </div>
          </button>
        </a>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-SPT02)%20CMERxZEISS%20SMILE%C2%AEPro%E8%AC%9B%E5%BA%A7%E5%88%86%E4%BA%AB"
        target="_blank"
        class="mbShow discounts-contact"
      >
        <span>WhatsApp</span><span>報名</span>
      </a>
      <div class="bg-title">
        <span>一圖認識</span><br class="mbShow" /><span
          class="merriweather-bold"
          >SMILE</span
        ><sup class="merriweather-bold">®</sup
        ><span class="merriweather-bold">pro</span>
      </div>
      <div class="bg-feature">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/8034a12a685da9e0.png"
            alt="SMILE Pro"
          />
        </div>
        <div>
          <div v-for="item in featureList" :key="item.id">
            <div><img :src="item.img" alt="技術特點" /></div>
            <div v-html="item.text"></div>
          </div>
        </div>
      </div>
      <div class="bg-content">
        ZEISS
        SMILE®pro微笑矯視是由德國引進的最新矯視科技，以德國蔡司光學與諾貝爾獎激光技術進行；是SMILE微笑激光矯視的升級版。<br
          class="mbShow"
        />其原理與SMILE相同，但激光頻率更快，而且配備輔助導航功能，令矯視過程更快，更精準。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  技术特点
      featureList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/03/56cfa2166e117a03.png",
          text: `新一代<br/>矯視科技`,
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/03/e7e2d0f5818c4023.png",
          text: `10秒<br/>激光時間`,
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/03/b868f8f82a5f884a.png",
          text: `視軸<br/>輔助導航`,
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/03/4c701b8478cdcfcf.png",
          text: `散光軸<br/>輔助導航`,
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
.merriweather-bold {
  font-family: "Merriweather", serif !important;
  font-weight: 700;
  font-style: normal;
}
@media screen and (min-width: 768px) {
  .mbShow {
    display: none !important;
  }
  .bg-photo {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    & > .bg-title {
      width: fit-content;
      color: #5d85c3;
      font-family: "Noto Sans HK";
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px; /* 100% */
      letter-spacing: 12px;
      & > span:nth-child(3),
      & > span:nth-child(5) {
        color: #5d85c3;
        font-size: 70px;
        line-height: 40px; /* 57.143% */
        letter-spacing: 10.5px;
      }
      & > sup {
        vertical-align: text-top;
        top: -0.5em;
        left: -0.5em;
        letter-spacing: -10px;
      }
    }
    & > .bg-feature {
      padding: 50px 98px 50px 55px;
      display: flex;
      flex-direction: row;
      & > div:nth-child(1) {
        flex: 4;
        margin-right: 45px;
      }
      & > div:nth-child(2) {
        flex: 6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          width: 300px;
          display: flex;
          align-items: center;
          & > div:nth-child(1) {
            max-width: 120px;
            margin-right: 12px;
          }
          & > :nth-child(2) {
            color: #5d85c3;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 35px;
            font-style: normal;
            font-weight: 500;
            line-height: 45px; /* 128.571% */
            letter-spacing: 7px;
          }
        }
      }
    }
    & > .bg-content {
      padding: 0 120px 0 84px;
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

  .discounts-contact {
    margin: 75px auto 80px;
    letter-spacing: 0.1em;
    cursor: pointer;
    z-index: 99;
    font-weight: 500;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;

    .link_more {
      outline: none;
      cursor: pointer;
      border: none;
      margin: 0;
      position: relative;
      display: inline-block;
      border-radius: 500px;
      overflow: hidden;
      background: #86abe2e4;
    }

    .link_more:hover {
      animation: ani 8s linear infinite;
      border: none;
    }
    .discounts-h3 {
      border-radius: 35px;
      padding: 9px 65px 7px;
      margin: 0 auto;
      text-align: center;
      width: fit-content;
      color: #fff;
      font-family: "Noto Sans HK";
      display: flex;
      flex-direction: column;
      & > span:nth-child(1) {
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 160% */
        letter-spacing: 3.75px;
      }
      & > span:nth-child(2) {
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 10.5px;
      }
    }
    @keyframes ani {
      0% {
        background-position: 0%;
      }

      100% {
        background-position: 400%;
      }
    }

    .link_more::before,
    .link_more::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .link_more div {
      position: relative;
      z-index: 10;
      transition: color 0.4s;
    }

    .link_more::before {
      content: "";
      background: #5d85c3;

      width: 120%;
      left: -10%;
      transform: skew(30deg);
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    .link_more:hover::before {
      color: #5d85c3;
      transform: translate3d(100%, 0, 0);
    }
  }
}
@media screen and (max-width: 768px) {
  .discounts-contact {
    background: #5d85c3;
    padding: 7px 60px 10px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    border-radius: 100px;
    & > span:nth-child(1) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 160% */
      letter-spacing: 5px;
    }
    & > span:nth-child(2) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 35px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px; /* 160% */
      letter-spacing: 10.5px;
    }
  }
  .bg-feature {
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 0 5.8974vw;
    & > div:nth-child(2) {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 2fr 2fr;
      justify-content: space-between;
      grid-gap: 7.7vw 3.85vw;
      & > div {
        display: flex;
        align-items: center;
        & > div:nth-child(1) {
          width: 18.46vw;
          height: 18.46vw;
          margin-right: 1.28vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          color: #5d85c3;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 4.6vw;
          font-style: normal;
          font-weight: 500;
          line-height: 7.692vw; /* 166.667% */
          letter-spacing: 3.6px;
        }
      }
    }
  }
  .bg-content {
    padding: 0 4.628vw;
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 250% */
    letter-spacing: 2.8px;
  }
  .bg-photo {
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg-title {
      margin-top: 36px;
      width: fit-content;
      text-align: center;
      & > span {
        color: #5d85c3;
        font-size: 45px;
        font-style: normal;
        font-weight: 500;
        line-height: 65px; /* 88.889% */
        letter-spacing: 6.75px;
      }
      & > sup {
        top: -2em;
        left: -0.5em;
        color: #5d85c3;
        font-size: 16px;
      }
      & > span:nth-child(1) {
        color: #5d85c3;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 133.333% */
        letter-spacing: 9px;
        white-space: nowrap;
      }
    }
  }
  .bg-btn {
    margin: 45px auto 0;
    width: fit-content;
    padding: 11px 24px;
    background: #09c09c;
    color: #fff;
    font-family: Noto Sans HK;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 120% */
    letter-spacing: 7.5px;
    border-radius: 35px;
  }
}
</style>
