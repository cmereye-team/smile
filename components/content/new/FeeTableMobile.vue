<template>
  <div class="FeeTableMobile">
    <div>
      <div v-if="typeNumber == 1">
        <div>
          <div>單眼</div>
          <div>雙眼</div>
        </div>
        <div v-if="dataName == 'smile'">
          <div>$15,000</div>
          <div>$29,000</div>
        </div>
        <div v-else-if="dataName == 'smilePro'">
          <div>$24,000</div>
          <div>$29,800<br />Premium套餐價格</div>
        </div>
        <div v-else>
          <div>$14,000</div>
          <div>$22,000</div>
        </div>
        <div>限時優惠 由即日起</div>
        <div v-if="dataName == 'smile'">
          <div>$12,000^</div>
          <div>$19,000^</div>
        </div>
        <div v-else-if="dataName == 'smilePro'">
          <div>$16,500^</div>
          <div>$26,000^</div>
        </div>
        <div v-else>
          <div>$12,000^</div>
          <div>$19,000^</div>
        </div>
        <div>術前檢查費用 $100</div>
      </div>
      <div v-if="typeNumber == 2" class="fee-table2">
        <div>
          <div>
            <div>單眼<br />不帶散光</div>
            <div>單眼<br />帶散光</div>
          </div>
          <div>
            <div>$45,000</div>
            <div>$50,000</div>
          </div>
          <div>限時優惠 由即日起</div>
          <div>
            <div>$38,000^</div>
            <div>$42,000^</div>
          </div>
          <div>術前檢查費用 $100</div>
        </div>
        <div>
          <div>
            <div>雙眼<br />不帶散光</div>
            <div>雙眼<br />帶散光</div>
          </div>
          <div>
            <div>$85,000</div>
            <div>$95,000</div>
          </div>
          <div>限時優惠 由即日起</div>
          <div>
            <div>$64,000</div>
            <div>$68,000</div>
          </div>
          <div>術前檢查費用 $500</div>
        </div>
      </div>
      <div v-if="typeNumber == 3" class="fee-table3">
        <div>
          <div>單焦點人工晶體<br /><span>（不帶散光）</span></div>
          <div>單焦點人工晶體<br /><span>（散光）</span></div>
        </div>
        <div>
          <div>$20,000-$35,000</div>
          <div>$23,000-$41,000</div>
        </div>
        <div>
          <div>多焦點人工晶體<br /><span>（不帶散光）</span></div>
          <div>多焦點人工晶體<br /><span>（散光）</span></div>
        </div>
        <div>
          <div>$26,000-$51,000</div>
          <div>$31,000-$51,000</div>
        </div>
        <div>術前檢查費用 $650</div>
      </div>
    </div>
    <div v-if="typeNumber !== 3">
      <p>^ 指定信用卡（東亞/渣打/滙豐）可享6/12個月免息分期</p>
      <p><sup>1</sup>以上為非指定醫生價錢</p>
      <p>
        <sup>2</sup>矯視費用已包括術前檢查費用 $100；<br />若沒有預約進行矯視，需另外繳付術前檢查費用
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceList: [],
    };
  },
  props: {
    typeNumber: {
      type: Number,
      default: 0,
    },
    dataName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .FeeTableMobile {
    & > div:nth-child(1) {
      border-radius: 25px;
      overflow: hidden;
      background: #fff;
      margin-top: 17px;
      margin-bottom: 30px;
      & > div {
        display: flex;
        flex-direction: column;
        & > div {
          display: flex;
          justify-content: center;
          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex: 1;
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(4) {
          background: #f4f8ff;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px; /* 250% */
          letter-spacing: 0.8px;
        }
        & > div:nth-child(3) {
          color: #b64545;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px; /* 266.667% */
          letter-spacing: 0.75px;
        }
        & > div:nth-child(1) {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px; /* 200% */
          letter-spacing: 1px;
          & > div:nth-child(1) {
            background: #86a2d1;
          }
          & > div:nth-child(2) {
            background: #8cdbcc;
          }
        }
        & > div:nth-child(5) {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px; /* 250% */
          letter-spacing: 0.8px;
        }
      }
    }
    & > div:nth-child(2) {
      p {
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 350;
        line-height: 20px; /* 166.667% */
        letter-spacing: 0.6px;
      }
    }
  }
  .fee-table2 {
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: column;
      & > div {
        display: flex;
        flex-direction: row !important;
        & > div {
          flex: 1;
        }
      }
      & > div:nth-child(1) {
        line-height: 1;
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1px;
        & > div:nth-child(1) {
          padding: 8px 0;
          background: #8ba9da;
          border-right: 2px solid #6188cb;
        }
        & > div:nth-child(2) {
          padding: 8px 0;
          background: #8cdbcc;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        background: #f4f8ff !important;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 250% */
        letter-spacing: 0.8px;
        & > div {
          padding: 8px 0;
        }
        & > div:nth-child(1) {
          border-right: 2px solid #cbd2de;
        }
      }

      & > div:nth-child(3) {
        background: #fff;
        padding: 8px 0;
        color: #b64545;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 266.667% */
        letter-spacing: 0.75px;
      }
      & > div:nth-child(5) {
        background: #fff;
        padding: 8px 0;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 250% */
        letter-spacing: 0.8px;
      }
      overflow: hidden;
      background: #fff;
      border-radius: 30px;
      margin-bottom: 10px;
    }
  }
  .fee-table3 {
    & > div:nth-child(1),
    & > div:nth-child(3) {
      text-align: center;
      font-family: "Noto Sans HK";
      font-style: normal;

      & > div:nth-child(1) {
        background: #86a2d1;
      }
      & > div:nth-child(2) {
        background: #8cdbcc;
      }
      & > div {
        padding: 12px 0;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 23px;
        span {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 25px;
          letter-spacing: 0.75px;
        }
      }
    }
    &>div:nth-child(2),
    &>div:nth-child(4){
      padding: 12px 0;
      background: #F4F8FF;
    }

    &>div:nth-child(5){
      padding: 12px 0;
    }
  }
}
</style>