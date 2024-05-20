<template>
  <div class="fee-set-meal">
    <div>
      <div class="title">套餐包括</div>
      <slot name="content"></slot>
      <div v-if="isShowRemark" class="remark">
        <p>
          #需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費
        </p>
        <p v-if="remark">
          ##需要術後兩年內完成。如超過兩年，需另作預約，診金按正常（非矯視套餐）收費
        </p>
      </div>
      <a
        class="meal-btn"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        >立即預約</a
      >
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    remark: {
      type: Boolean,
      default: false,
    },
    isShowRemark: {
      type: Boolean,
      default: false,
    },
    link:{
      type: String,
      default: 'https://api.whatsapp.com/send/?phone=85260610511'
    }
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .fee-set-meal {
    width: 100vw;
    background: url("https://static.cmereye.com/imgs/2024/04/538f740780c91afc.png")
      no-repeat;
    background-position: center;
    background-size: 100% 100%;
    & > div {
      padding: 50px 0 105px;
      max-width: 1220px;
      margin: 0 auto;
    }
  }
  .title {
    color: #4570b6;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 171.429% */
    letter-spacing: 10.5px;
  }
  .remark {
    color: #6d6e71;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 150% */
    letter-spacing: 5px;
    padding-left: 10%;
  }
  .meal-btn {
    margin: 0 auto;
    margin-top: 85px;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    background: #4570b6;
    width: max-content;
    border-radius: 100px;
    display: block;
    padding: 12px 53px;
  }
}
@media screen and (max-width: 767px) {
  .fee-set-meal {
    overflow: hidden;
    max-width: 100%;
    margin: 55px auto 0;
    & > div {
      width: 300%;
      transform: translateX(-33.3%);
      border-radius: 100% 100%;
      background: #f4fafc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 35px;
      padding-bottom: 60px;
      & > div {
        width: 100vw;
        padding: 0 30px;
      }
    }
  }
  .title {
    color: #4570b6;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 83.333% */
    letter-spacing: 0.9px;
  }
  .svg-one {
    display: flex;
    justify-content: center;
    & > div:nth-child(2) {
      margin-left: 60px;
    }
  }
  .svg-one,
  .svg-two {
    margin-top: 20px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 135px;
        height: 135px;
        & > svg {
          width: 85px;
          height: 60px;
        }
      }
      & > div:nth-child(2) {
        margin-top: 25px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.8px;
      }
    }
  }
  .svg-two {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-bottom: 40px;
    }
  }
  .svg-three {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      & > div:nth-child(1) {
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 135px;
        height: 135px;
        & > svg {
          width: 85px;
          height: 60px;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 25px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.8px;
      }
    }
  }

  .remark {
    color: #6d6e71;
    font-family: "Noto Sans HK";
    font-size: 13px;
    font-style: normal;
    font-weight: 350;
    line-height: 19px; /* 146.154% */
    letter-spacing: 0.65px;
  }
  .meal-btn {
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 150% */
    letter-spacing: 1px;
    background: #4570b6;
    border-radius: 100px;
    width: max-content;
    padding: 5px 35px;
    display: block;
    margin: 45px auto 0;
  }
}
</style>