<template>
  <div class="discounts">
    <div class="discounts-title">會場優惠</div>
    <div class="discounts-content">
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/10/1d061d968efce696.png"
          alt=""
        />
      </div>
      <div>
        <p>現場參加人士將專享以</p>
        <p>會場優惠價預約進行ICL。</p>
        <p>
          由於今次活動只招待已預<br class="mbShow" />約人士，<span
            class="mbShow"
            >名額有限</span
          ><span class="mbShow" style="color:#3b786c;">，</span>
        </p>
        <p class="mbShow">記得握機會預約!</p>
        <p class="pcShow"><span>名額有限</span>，記得握機會預約!</p>
      </div>
    </div>
    <a href="/icl-r" class="mbShow discounts-btn">立&nbsp;即&nbsp;預&nbsp;約</a>
    <div class="pcShow discounts-contact">
      <a href="/icl-r">
        <button class="link_more shadow-lg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="flex items-center justify-evenly">
            <div class="p-1 text-left">
              <h3 class="text-xs font-normal text-center discounts-h3">
                立&nbsp;即&nbsp;預&nbsp;約
              </h3>
              <!-- <p class="text-base text-center">{{ $t('home.headers.coupon') + $t('home.headers.preferential') }}</p> -->
            </div>
          </div>
        </button>
      </a>
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
  .mbShow {
    display: none !important;
  }
  .discounts {
    display: flex;
    flex-direction: column;
    align-items: center;
    .discounts-title {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 80px;
      font-style: normal;
      font-weight: 600;
      line-height: 1; /* 37.5% */
      letter-spacing: 24px;
      padding: 18px 275px;
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      width: fit-content;
      position: relative;
      z-index: 1;
    }
    .discounts-title::before {
      content: "";
      background: url("https://static.cmereye.com/imgs/2023/10/1c2a6b0b7fa551ec.png");
      position: absolute;
      top: -130%;
      z-index: 5;
      width: 380px;
      height: 525px;
      right: 0;
    }
    .discounts-content {
      position: relative;
      width: 100%;
      margin: 130px auto 110px;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & > div:nth-child(2) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #3b786c;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 55px;
        font-style: normal;
        font-weight: 500;
        line-height: 100px; /* 181.818% */
        letter-spacing: 5.5px;
        width: 100%;
        & > p {
          & > span {
            color: #f29100;
            font-family: "Noto Sans HK";
            font-size: 65px;
            font-style: normal;
            font-weight: 700;
            line-height: 100px;
            letter-spacing: 6.5px;
          }
        }
      }
    }
    .discounts-contact {
      margin: 130px auto 310px;
      letter-spacing: 0.1em;
      cursor: pointer;
      z-index: 999;
      font-weight: 600;
      white-space: nowrap;

      .link_more {
        outline: none;
        cursor: pointer;
        border: none;
        margin: 0;
        position: relative;
        display: inline-block;
        border-radius: 500px;
        overflow: hidden;
        background: #11dbba;
      }

      .link_more:hover {
        animation: ani 8s linear infinite;
        border: none;
      }
      .discounts-h3 {
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
        padding: 24px 64px;
        margin: 0 auto;
        text-align: center;
        width: fit-content;
        color: #f3fcfe;
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
        background: #09c09c;

        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
      }

      .link_more:hover::before {
        color: #09c09c;
        transform: translate3d(100%, 0, 0);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .pcShow {
    display: none !important;
  }

  .discounts {
    display: flex;
    flex-direction: column;
    align-items: center;
    .discounts-title {
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      width: fit-content;
      padding: 16px 66px;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 85.714% */
      letter-spacing: 7px;
      margin: 78px auto 84px;
      position: relative;
    }
    .discounts-title::before {
      content: "";
      background: url("https://static.cmereye.com/imgs/2023/10/d44e053d9499c9de.png");
      position: absolute;
      top: -70%;
      z-index: 5;
      width: 136px;
      height: 188px;
      right: -5%;
    }
    .discounts-content {
      padding: 0 10px;
      position: relative;
      & > div:nth-child(2) {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #3b786c;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 160% */
        letter-spacing: 2.5px;
        justify-content: center;
        & > p {
          span {
            color: #f29100;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 3px;
          }
        }
      }
    }
    .discounts-btn {
      margin-top: 85px;
      margin-bottom: 150px;
      padding: 16px 41px;
      background: #09c09c;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 100% */
      border-radius: 62px;
    }
    .discounts-btn:active {
      background: #11dbba;
    }
  }
}
</style>
