<template>
  <div class="activity">
    <div class="activity-title">活動詳情</div>
    <div class="activity-time">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/368edbe7444178f4.png"
            alt=""
          />
        </div>
        <div>
          <span>日期</span> <span class="mbShow">:</span>
          <span>2023年11月12日</span>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/ee300cf1d7577c38.png"
            alt=""
          />
        </div>
        <div>
          <span>時間</span> <span class="mbShow">:</span>
          <span>13：00－17：00</span>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/c98d7cd61642bbe1.png"
            alt=""
          />
        </div>
        <div>
          <span>地點</span> <span class="mbShow">:</span>
          <span>The Ritz-Carlton</span>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/5764eb5376b11cb7.png"
            alt=""
          />
        </div>
        <div>
          <span>名額有限</span> <span class="mbShow">，</span>
          <span>先到先得</span>
        </div>
      </div>
    </div>
    <div class="activity-banner">
      <img
        data-src="https://static.cmereye.com/imgs/2023/10/46c01fa33ae6b8a3.png"
        srcset="
          https://static.cmereye.com/imgs/2023/10/8c25281411e76b97.png 768w,
          https://static.cmereye.com/imgs/2023/10/46c01fa33ae6b8a3.png
        "
        src="https://static.cmereye.com/imgs/2023/10/46c01fa33ae6b8a3.png"
        alt=""
      />
    </div>
    <div class="activity-support">
      <div>星級主持及眼科醫生</div>
      <div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/10/2f1f360beb40f715.png"
              alt=""
            />
          </div>
          <div>胡瀞詩</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/10/495b308bad8768b9.png"
              alt=""
            />
          </div>
          <div>Dr. Scott</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/10/1c2c29dea00378da.png"
              alt=""
            />
          </div>
          <div>眼科醫生</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    .activity-title {
      padding: 10px 124px;
      width: fit-content;
      color: #fff;
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 100% */
      letter-spacing: 9px;
      margin-bottom: 92px;
    }
    .activity-time {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 92px;
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 35px;
        position: relative;
        & > div:nth-child(1) {
          & > img {
            width: 50%;
            margin: auto;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: #3b786c;
          font-family: "Noto Sans";
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: 180%; /* 36px */
          letter-spacing: 0.4px;
          align-items: center;
        }
      }
      & > div::before {
        content: "";
        width: 2px;
        height: 80px;
        position: absolute;
        right: auto;
        left: 0;
        bottom: 0;
        background: #3b786c4d;
      }
      & > div:last-child:after {
        content: "";
        width: 2px;
        height: 80px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: #3b786c4d;
      }
    }
    .activity-banner {
      margin-bottom: 86px;
    }
    .activity-support {
      & > div:nth-child(1) {
        padding: 10px 124px;
        width: fit-content;
        color: #fff;
        background: linear-gradient(
          90deg,
          rgba(59, 173, 108, 0) 0%,
          rgba(30, 186, 160, 0.8) 52%,
          rgba(59, 173, 108, 0.03) 100%
        );
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 100% */
        letter-spacing: 9px;
        margin: auto;
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
            color: #3b786c;
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
          padding: 0 260px;
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
      margin-top: 50px;
      margin-bottom: 37px;
      padding: 0px 84px;
      width: fit-content;
      color: #fff;
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 166.667% */
      letter-spacing: 5.4px;
    }

    .activity-time {
      margin-bottom: 48px;
      & > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-top: 2px solid rgba(59, 120, 108, 0.3);
        padding: 24px 0;
        & > div:nth-child(1) {
          min-width: 40px;
          display: flex;
          justify-content: center;
          margin-right: 15px;
        }
        & > div:nth-child(2) {
          color: #3b786c;
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 187.5% */
          letter-spacing: 0.8px;
        }
      }
      & > div:nth-child(1) {
        img {
          width: 40px;
          height: 42px;
        }
      }
      & > div:nth-child(2) {
        img {
          width: 40px;
          height: 40px;
        }
      }
      & > div:nth-child(3) {
        img {
          width: 32px;
          height: 42px;
        }
      }
      & > div:nth-child(4) {
        img {
          width: 40px;
          height: 38px;
        }
      }
      & > div:last-child {
        border-bottom: 2px solid rgba(59, 120, 108, 0.3);
      }
    }
    .activity-banner {
      img {
        width: 347px;
      }
    }
    .activity-support {
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        color: #3b786c;
        font-family: "Noto Sans HK";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; /* 166.667% */
        letter-spacing: 1.8px;
        margin-bottom: 46px;
      }
      & > div:nth-child(2) {
        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 32px;
          &>div:nth-child(2) {
            color: #3B786C;
            text-align: justify;
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 150% */
            letter-spacing: 3px;
          }
        }
      }
    }
  }
}
</style>
