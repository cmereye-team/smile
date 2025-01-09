<template>
  <div class="activity">
    <div class="activity-title">活動詳情</div>
    <div class="activity-time">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/12/a9b5cbf5270023eb.png"
            alt=""
          />
        </div>
        <div>
          <span>地點</span> <span class="mbShow">:</span>
          <span>香港康得思酒店(朗豪坊)</span>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/12/24c5062453b92747.png"
            alt=""
          />
        </div>
        <div>
          <span>時間</span> <span class="mbShow">:</span>
          <span>2:00－5:00pm</span>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/12/cd50e814ebff98ed.png"
            alt=""
          />
        </div>
        <div>
          <span>日期</span> <span class="mbShow">:</span>
          <span>2025年1月19日</span>
        </div>
      </div>
    </div>
    <BtnCommon :title="'名額有限 先到先得'" :icon="false" :duration="2" :link="toLink"/>
    <div class="activity-support">
      <div>活動嘉賓及<br class="mbShow" />名人真實用家</div>
      <div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/2fb6c05215a4d699.png"
              alt=""
            />
          </div>
          <div>麥沛東</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/f60d1519f379700a.png"
              alt=""
            />
          </div>
          <div>Kathy仔王頌恩</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/5244f52e15cdd387.png"
              alt=""
            />
          </div>
          <div>賽車手李莉Lily</div>
        </div>
      </div>
      <div class="activity-benefit">
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/d267b0afce620645.png"
              alt=""
            />
          </div>
          <div>名人真實<br class="mbShow" />用家<br class="pcShow" />分享</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/71fc2dd9441b9074.png"
              alt=""
            />
          </div>
          <div>ICL會場<br />優惠</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/f15948f5b4d76136.png"
              alt=""
            />
          </div>
          <div>ICL技術<br />展覽</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/47fd84cd15ccb0cb.png"
              alt=""
            />
          </div>
          <div>
            <!-- <span>眼科醫生</span> -->
            <span>講解ICL技術</span>
            <span>及個案分享</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/12/2ace672492bbbf00.png"
              alt=""
            />
          </div>
          <div>
            <span>即場</span>
            <span>免費檢查</span>
          </div>
        </div>
      </div>
    </div>
    <div class="activity-banner">
      <div>
        <p>現場參加人士將專享以</p>
        <p>會場優惠價預約進行ICL</p>
        <p>由於今次活動只招待已預約人士</p>
        <p>名額有限，請把握機會預約!</p>
      </div>
      <!-- <a
        href=" https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(Event-ICLW02)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7%E6%9C%83%E5%A0%B4%E5%84%AA%E6%83%A0"
        target="_blank"
      >
        <span>了解優惠詳情</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
        >
          <line
            x1="0.772306"
            y1="1.28001"
            x2="8.62664"
            y2="9.05394"
            stroke="#297492"
            stroke-width="1.00464"
          />
          <line
            x1="8.48104"
            y1="8.40263"
            x2="0.707107"
            y2="16.257"
            stroke="#297492"
            stroke-width="1.00464"
          />
        </svg>
      </a> -->
      <BtnCommon :title="'了解優惠詳情'" :icon="true" :link="toLink2" />
    </div>
    <nuxt-link to="/vision-correction-icl" class="activity-detail">
      <span>詳細了解ICL</span>
      <span>>>></span>
    </nuxt-link>
  </div>
</template>
<script>
import BtnCommon from "./BtnCommon.vue";
export default {
  components: { BtnCommon },

  data() {
    return {
        toLink:'https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7',
        toLink2:'https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(Event-ICLW02)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7%E6%9C%83%E5%A0%B4%E5%84%AA%E6%83%A0',
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    .activity-title {
      width: fit-content;
      color: #297492;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 100% */
      letter-spacing: 9px;
      margin-bottom: 92px;
    }
    .activity-time {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 145px;
      margin-bottom: 92px;
      & > div {
        // flex: 1;
        max-width: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // padding: 0 35px;
        position: relative;
        & > div:nth-child(1) {
          // min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 135px;
          max-height: 135px;
          min-height: 135px;
        }
        & > div:nth-child(2) {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          white-space: nowrap;
          & > span:first-child {
            color: #297492;
            text-align: justify;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px; /* 100% */
            letter-spacing: 1.5px;
            margin-bottom: 10px;
          }
          color: #6d6e71;
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 115.385% */
          letter-spacing: 1.3px;
        }
      }
      & > div:nth-child(1) {
        padding: 0 35px;
      }
      & > div:nth-child(2) {
        padding: 0 35px;
      }
      & > div:nth-child(3) {
        padding: 0 30px;
      }
      & > div:nth-child(4) {
        padding: 0 60px;
      }
    }
    .activity-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      box-sizing: border-box;
      padding: 12px 24px;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.2; /* 83.333% */
      letter-spacing: 9px;
      background: #297492;
      margin: 55px auto 65px;
    }
    .activity-banner {
      background: url("https://static.cmereye.com/imgs/2024/12/5d2af511d2cbd071.png")
        no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      overflow: hidden;
      min-width: 100%;
      min-height: 33.698vw;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 7.59vw;
        P {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 29.232px;
          font-style: normal;
          font-weight: 500;
          line-height: 55.871px; /* 256.125% */
          letter-spacing: 2.923px;
        }
        p:nth-child(2) {
          color: #fff;
          text-align: center;
          text-shadow: 0px 5.823px 8.319px rgba(0, 0, 0, 0.25);
          font-family: "Noto Sans HK";
          font-size: 49.914px;
          font-style: normal;
          font-weight: 900;
          line-height: 55.871px; /* 150% */
          letter-spacing: 4.991px;
          margin-top: 10px;
        }
      }
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #297492;
        font-family: "Noto Sans HK";
        font-size: 27.45px;
        font-style: normal;
        font-weight: 700;
        line-height: 22.875px; /* 83.333% */
        letter-spacing: 6.862px;
        gap: 0 10px;
        padding: 17px 33px;
        box-sizing: border-box;
        width: fit-content;
        background: #fff;
        margin: 30px auto 0 !important;
      }
    }
    .activity-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #297492;
      font-family: "Noto Sans HK";
      font-size: 27.45px;
      font-style: normal;
      font-weight: 700;
      line-height: 22.875px; /* 83.333% */
      letter-spacing: 6.862px;
      gap: 0 10px;
      padding: 17px 33px;
      box-sizing: border-box;
      width: fit-content;
      border: 2px solid #297492;
      margin: 60px auto;

      position: relative;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      // padding-block: 0.5rem;
      // padding-inline: 0rem;
      background-color: #fff;
      // border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #297492;
      // gap: 10px;
      font-weight: bold;
      // border: 3px solid #ffffff4d;
      outline: none;
      overflow: hidden;
      // font-size: 15px;
      cursor: pointer;
    }
    .activity-detail:hover {
      transform: scale(1.05);
      border-color: #fff9;
    }

    .activity-detail:hover .icon {
      transform: translate(4px);
    }

    .activity-detail:hover::before {
      animation: shine 2s ease-in-out infinite;
    }

    .activity-detail::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 100%;
      background-image: linear-gradient(
        120deg,
        #12796e00 30%,
        #12796ecc,
        #12796e00 70%
      );
      top: 0;
      left: -100px;
      opacity: 0.6;
    }

    @keyframes shine {
      0% {
        left: -100px;
      }

      60% {
        left: 100%;
      }

      to {
        left: 100%;
      }
    }

    .activity-support {
      margin: 55px auto 65px;
      & > div:nth-child(1) {
        color: #297492;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 100% */
        letter-spacing: 3px;
        display: flex;
        justify-content: center;
        margin-bottom: 86px;
      }
      & > div:nth-child(2) {
        display: flex;
        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          & > div:nth-child(2) {
            margin-top: 20px;
            color: #297492;
            text-align: justify;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 150% */
            letter-spacing: 3px;
          }
        }
        & > div:nth-child(2) {
          padding: 0 150px;
        }
      }
    }
    .activity-benefit {
      max-width: 1280px;
      margin: 55px auto 65px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0 10px;
      & > div {
        & > div:nth-child(1) {
          width: 246px;
          height: 246px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 150% */
          letter-spacing: 1px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    .activity-title {
      margin-top: 12.82vw;
      margin-bottom: 9.48vw;
      padding: 0px 21.536vw;
      width: fit-content;
      color: #fff;
      color: #297492;
      font-family: "Noto Sans HK";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 700;
      line-height: 7.69vw; /* 125% */
      letter-spacing: 1.8vw;
    }

    .activity-time {
      margin-bottom: 6.4vw;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 6.15vw 2.128vw;
      width: 100vw;
      box-sizing: border-box;
      justify-items: center;
      justify-content: center;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        // border-top: 2px solid rgba(59, 120, 108, 0.3);
        & > div:nth-child(1) {
          width: 17.98vw;
          height: 15.38vw;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 3.58vw;
          span:first-child {
            color: #297492;
            text-align: justify;
            font-family: "Noto Sans HK";
            font-size: 4.32vw;
            font-style: normal;
            font-weight: 700;
            line-height: 4.32vw; /* 100% */
            letter-spacing: 0.843px;
          }
          span:nth-child(2) {
            display: none;
          }
          span:last-child {
            margin-top: 1.28vw;
            color: #6d6e71;
            font-family: "Noto Sans HK";
            font-size: 3.07vw;
            font-style: normal;
            font-weight: 500;
            line-height: 4.32vw; /* 120.481% */
            letter-spacing: 0.7px;
            max-width: 25.64vw;
            text-align: center;
          }
        }
      }
    }
    a {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 6.65vw;
      font-style: normal;
      font-weight: 500;
      line-height: 5.549vw; /* 83.246% */
      letter-spacing: 1.665vw;
      box-sizing: border-box;
      padding: 4.1vw 4.615vw;
      background: #297492;
      display: flex;
      gap: 0 1.28vw;
      align-items: center;
    }
    .activity-banner {
      img {
        width: 88.974vw;
      }
    }
    .activity-support {
      margin-top: 11.28vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 14.1vw;
      & > div:nth-child(1) {
        color: #297492;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 6.15vw;
        font-style: normal;
        font-weight: 700;
        line-height: 8.97vw; /* 145.833% */
        letter-spacing: 1.84vw;
        margin-bottom: 11.79vw;
        max-width: 51.28vw;
      }
      & > div:nth-child(2) {
        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 8.2vw;
          & > div:nth-child(1) {
            width: 41.28vw;
            height: 41.28vw;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > div:nth-child(2) {
            margin-top: 8.974vw;
            color: #297492;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 4.61vw;
            font-style: normal;
            font-weight: 500;
            line-height: 6.565vw; /* 142.276% */
            letter-spacing: 0.9px;
          }
        }
      }
    }
    .activity-banner {
      background: url(https://static.cmereye.com/imgs/2024/12/5c40d1f50833a745.png)
        no-repeat;
      background-size: contain;
      width: 100%;
      height: 97.17vw;
      padding-top: 21.02vw;
      & > div {
        p {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 4.615vw;
          font-style: normal;
          font-weight: 500;
          line-height: 8.6vw; /* 235.685% */
          letter-spacing: 0.46vw;
        }
        p:nth-child(2) {
          color: #fff;
          text-align: center;
          text-shadow: 0px 0.846vw 1.21vw rgba(0, 0, 0, 0.25);
          font-family: "Noto Sans HK";
          font-size: 7.17vw;
          font-style: normal;
          font-weight: 900;
          line-height: 10.135vw; /* 151.511% */
          letter-spacing: 0.35vw;
        }
      }
      a {
        width: fit-content;
        margin: 0 auto;
        margin-top: 6.65vw;
        background: #fff;
        color: #297492;
        font-family: "Noto Sans HK";
        font-size: 6.65vw;
        font-style: normal;
        font-weight: 700;
        line-height: 5.47vw; /* 82.134% */
        letter-spacing: 1.665vw;
      }
    }
    // .activity-detail {
    //   margin: 6.4vw auto;
    //   background: #fff;
    //   border: #297492 1px solid;
    //   color: #297492;
    // }
    .activity-detail {
      margin: 7.6vw auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #297492;
      font-family: "Noto Sans HK";
      font-size: 24.45px;
      font-style: normal;
      font-weight: 700;
      line-height: 24.875px; /* 83.333% */
      letter-spacing: 1.862px;
      gap: 0 10px;
      // padding: 17px 33px;
      box-sizing: border-box;
      width: fit-content;
      border: 1px solid #297492;
      // margin: 60px auto;

      position: relative;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      // padding-block: 0.5rem;
      // padding-inline: 0rem;
      background-color: #fff;
      // border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #297492;
      // gap: 10px;
      font-weight: bold;
      // border: 3px solid #ffffff4d;
      outline: none;
      overflow: hidden;
      // font-size: 15px;
      cursor: pointer;
    }

    // .activity-detail .icon {
    //   transform: translate(4px);
    // }

    // .activity-detail::before {
    //   animation: shine 1.5s ease-out infinite;
    // }

    // .activity-detail::before {
    //   content: "";
    //   position: absolute;
    //   width: 100px;
    //   height: 100%;
    //   background-image: linear-gradient(
    //     120deg,
    //     #12796e00 30%,
    //     #12796ecc,
    //     #12796e00 70%
    //   );
    //   top: 0;
    //   left: -100px;
    //   opacity: 0.6;
    // }

    // @keyframes shine {
    //   0% {
    //     left: -100px;
    //   }

    //   60% {
    //     left: 100%;
    //   }

    //   to {
    //     left: 100%;
    //   }
    // }
    .activity-benefit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0 2.564vw;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 31%;
        & > div:nth-child(1) {
          width: 30.25vw;
          height: 30.25vw;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        & > div:nth-child(2) {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.58vw;
          font-style: normal;
          font-weight: 500;
          line-height: 4.1vw; /* 114.286% */
          letter-spacing: 0.7px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      & > div:nth-child(4),
      & > div:nth-child(5) {
        width: 35%;
      }
    }
  }
}
</style>
