<template>
  <div class="guest">
    <div class="bg-photo">
      <div class="nav-four">
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/03/0924cbb6f7344bc4.png"
              alt="重點內容"
            />
          </div>
          <p>重點內容</p>
          <p>及</p>
          <p>嘉賓</p>
        </div>
        <div>
          <div v-for="item in guestList" :key="item.id">
            <div><img :src="item.img" :alt="item.text" /></div>
            <div v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      guestList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/03/e08b49d2f42377d8.png",
          text: `米姬<br class="mbShow" />Maggie`,
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/03/c39f57c9e9069e24.png",
          text: `游嘉欣`,
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/03/06b9d83ebbb63bc3.png",
          text: `胡瀞詩`,
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/03/533fecd42ee91784.png",
          text: `眼科<br class="mbShow" />專科醫生`,
        },
        {
          id: 5,
          img: "https://static.cmereye.com/imgs/2024/03/4f01a2fe8f53518f.png",
          text: `ZEISS<br class="mbShow" /> SMILE<sup>®</sup>pro<br />技術講解`,
        },
        {
          id: 6,
          img: "https://static.cmereye.com/imgs/2024/03/dc417e9ba3221f85.png",
          text: `希瑪<br class="mbShow" />微笑閃亮大使<br />體驗分享`,
        },
        {
          id: 7,
          img: "https://static.cmereye.com/imgs/2024/03/b2d15d4ff6852a8b.png",
          text: `即場<br />眼睛篩查`,
        },
        {
          id: 8,
          img: "https://static.cmereye.com/imgs/2024/03/3313d33dc9593e92.png",
          text: `會場獨家<br />矯視優惠`,
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
  .mbShow {
    display: none !important;
  }
  .guest {
    width: 100%;
    overflow: hidden;
    margin: 0 auto 0;
  }
  .bg-photo {
    background: #dbedf180;
    border-radius: 0 0 50% 50%;
    width: 150%;
    margin-left: -25%;
  }
  .nav-four {
    position: relative;
    margin-top: 150px;
    padding: 200px 0 114px;
    & > div:nth-child(1) {
      position: absolute;
      top: -170px;
      left: 50%;
      transform: translateX(-50%);
      width: 307px;
      height: 307px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div:nth-child(1) {
        margin-bottom: 16px;
      }
      & > p:nth-child(2),
      & > p:nth-child(4) {
        color: #5d85c3;
        font-family: "Noto Sans HK";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; /* 75% */
        letter-spacing: 10px;
      }
      & > p:nth-child(3) {
        margin: 9px 0;
        color: #5d85c3;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; /* 100% */
        letter-spacing: 7.5px;
      }
    }
    & > div:nth-child(2) {
      max-width: 1280px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;

        & > div:nth-child(1) {
          width: 275px;
          margin-bottom: 40px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 35px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px; /* 57.143% */
          letter-spacing: 5.25px;
          text-align: center;
        }
      }
      & > div:nth-child(n + 5) {
        margin-top: 73px;
        & > div:nth-child(1) {
          width: 226px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          text-wrap: nowrap;
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 35px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px; /* 57.143% */
          letter-spacing: 5.25px;
          text-align: center;
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          letter-spacing: 1px;
        }
      }
      &>div:nth-child(6) {
        &>div:nth-child(2) {
          letter-spacing: 3.4px;  
        } 
      }
    }
  }
  .discounts-contact {
    margin: 75px auto 80px;
    letter-spacing: 0.1em;
    cursor: pointer;
    z-index: 90;
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
        font-weight: 500;
        line-height: 40px; /* 160% */
        letter-spacing: 3.75px;
        padding-left: 3.75px;
      }
      & > span:nth-child(2) {
        font-size: 35px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 10.5px;
        padding-left: 10.5px;
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
  .pcShow {
    display: none !important;
  }
  .guest {
    width: 100%;
    overflow: hidden;
  }

  .bg-photo {
    // background: #c7e8ef80;
    // border-radius: 0 0 50% 50%;
    background: url("https://static.cmereye.com/imgs/2024/03/90eaca0e1675b6be.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // width: 300%;
    // margin-left: -100%;

    .nav-four {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30vw;
      position: relative;
      & > div:nth-child(1) {
        position: absolute;
        top: -85px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        width: 43.846vw;
        height: 43.846vw;
        & > div:nth-child(1) {
          width: 14.103vw;
          margin-bottom: 3.846vw;
          & > img {
            width: 100%;
          }
        }
        & > p:nth-child(3) {
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 5.128vw;
          font-style: normal;
          font-weight: 500;
          line-height: 7.692vw; /* 150% */
          letter-spacing: 1.282vw;
        }
        & > p:nth-child(2),
        & > p:nth-child(4) {
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 7.692vw; /* 120% */
          letter-spacing: 1.603vw;
        }
      }
      & > div:nth-child(2) {
        max-width: 100%;
        padding: 36.923vw 0 21.026vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 创建4列，每列宽度相等 */
        grid-auto-rows: auto; /* 自动行高 */
        grid-gap: 15.846vw 5.897vw; /* 可选：设置网格间隙 */
        & > div {
          width: 39.487vw;
          height: 39.487vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2.564vw;
          &>div:nth-child(1) {
            margin-bottom: 10px;
          }
          & > div:nth-child(2) {
            min-height: 50px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            color: #5d85c3;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px; /* 125% */
            letter-spacing: 3px;
          }
        }
        & > div:nth-child(5),
        & > div:nth-child(6) {
          margin-bottom: 7.179vw;
        }
      }
    }
  }
  .discounts-contact {
    background: #5d85c3;
    padding: 7px 60px 10px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    border-radius: 100px;
    margin: 14.872vw auto;
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
}
</style>
