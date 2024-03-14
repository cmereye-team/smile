<template>
  <div class="merit">
    <div class="bg-merit">
      <div class="merit-content">
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/03/f220d5d1f1eae0cf.png"
              alt="優點"
            />
          </div>
          <p class="merriweather">ZEISS</p>
          <p class="merriweather">SMILE<sup>®</sup>Pro</p>
          <p>優點</p>
        </div>
        <div>
          <div v-for="item in meritList" :key="item.id">
            <div><img :src="item.img" alt="優點" /></div>
            <div v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meritList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/03/b7e88811cfd7cf78.png",
          text: `微創`,
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/03/4f236c579e6e264c.png",
          text: `矯視過程<br />體驗感佳`,
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/03/7bd154bd99e87705.png",
          text: `準確度高`,
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/03/1f51e3e9c613d99c.png",
          text: `效果穩定`,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
.merriweather {
  font-family: "Merriweather", serif !important;
  font-weight: 700;
  font-style: normal;
}
@media screen and (min-width: 768px) {
  .merit {
    overflow: hidden;
    width: 100%;
  }
  .bg-merit {
    width: 150%;
    border-radius: 50% 50% 0 0;
    background: rgba(199, 232, 239, 0.2);
    margin-left: -25%;
  }
  .merit-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 1280px;
    margin: 150px auto 0;

    & > div:nth-child(1) {
      position: absolute;
      top: -150px;
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
      & > p {
        color: #5d85c3;
        font-size: 30px;
        line-height: 30px; /* 100% */
        letter-spacing: 6px;
      }
      & > p:nth-child(2),
      & > p:nth-child(3) {
        padding-bottom: 15px;
      }
      & > p:nth-child(4) {
        color: #5d85c3;
        font-family: "Noto Sans HK";
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 60% */
        letter-spacing: 12.5px;
      }
    }
    & > div:nth-child(2) {
      padding: 235px 0 55px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      & > div {
        width: 275px;
        height: 275px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > div:nth-child(1) {
          width: 115px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          margin-top: 3px;
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 35px;
          font-style: normal;
          font-weight: 600;
          line-height: 40px; /* 57.143% */
          letter-spacing: 7px;
          min-height: 90px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .merit {
    overflow: hidden;
    width: 100%;
  }
  .bg-merit {
    width: 300%;
    margin-left: -100%;
    border-radius: 50% 50% 0 0;
    background: rgba(199, 232, 239, 0.2);
  }
  .merit-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    position: relative;
    padding: 35.128vw 5.64vw 8.205vw;
    & > div:nth-child(1) {
      width: 43.846vw;
      height: 43.846vw;
      background: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -70px;

      & > div:nth-child(1) {
        max-width: 17.949vw;
        margin-bottom: 2.564vw;
        & > img {
          width: 100%;
        }
      }
      & > p:nth-child(2),
      & > p:nth-child(3) {
        color: #5d85c3;
        font-size: 5.128vw;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 150% */
        letter-spacing: 4px;
      }
      & > p:nth-child(4) {
        color: #5d85c3;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 6.41025vw;
        font-style: normal;
        font-weight: 700;
        line-height: 35px; /* 140% */
        letter-spacing: 0.9615vw;
      }
    }
    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 31px 30px;
      & > div {
        width: 39.66vw;
        height: 39.66vw;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          max-width: 16.41vw;
          max-height: 15.8974vw;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.846vw;
        }
        & > div:nth-child(2) {
          min-height: 11.795vw;
          display: flex;
          align-items: center;
          color: #5d85c3;
          font-family: "Noto Sans HK";
          font-size: 5.128vw;
          font-style: normal;
          font-weight: 500;
          line-height: 125%; /* 125% */
          letter-spacing: 1.0256vw;
        }
      }
    }
  }
}
</style>