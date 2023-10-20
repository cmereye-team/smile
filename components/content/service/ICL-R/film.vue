<template>
  <div>
    <div class="bg-photo">
      <img  class="mbShow" src="https://static.cmereye.com/imgs/2023/10/39c3a9da9fc3333f.png" alt="">
      <div class="bg-title">活動簡介</div>
      <div class="bg-text">
        <p>
          視力對生活和工作有多重要?<br />正受高度近視、遠視或深度數散光困擾的你有<br class="mbShow" />認真思考過嗎?<br />
        </p>
        透過今次活動，ICL植入式隱形眼鏡真實用家<br class="mbShow" />——Serene 林宣妤及麥沛東，<br />會以過來人身份分享整個歷程，<br class="mbShow" />讓你重新思考視力對生活和職業的重要性!
      </div>
      <img class="mbShow" style="margin-top: -60px;" src="https://static.cmereye.com/imgs/2023/10/e2264d2d11f2efdd.png" alt="">
    </div>
    <div class="mbShow bg-btn">預約講座</div>
    <div class="pcShow discounts-contact">
        <a href="https://api.whatsapp.com/send/?phone=85260610511&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(ICL-B01)%20%E5%B8%8C%E7%91%AAICL%E8%AC%9B%E5%BA%A7%E6%B4%BB%E5%8B%95" target="_blank">
          <button class="link_more shadow-lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="flex items-center justify-evenly">
              <div class="p-1 text-left">
                <h3 class="text-xs font-normal text-center discounts-h3">
                  立即預約
                </h3>
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
  .bg-photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("https://static.cmereye.com/imgs/2023/10/7050f56423c13680.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 98.34%;
    height: 420px;
    margin: 85px auto 92px;
    max-width: 1889px;
    & > .bg-title {
      width: fit-content;
      padding: 10px 124px;
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 100% */
      letter-spacing: 9px;
    }
    & > .bg-text {
      color: #3b786c;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
      letter-spacing: 1px;
      margin-top: 76px;
    }
  }

  .discounts-contact {
    margin: 95px auto 100px;
    letter-spacing: 0.1em;
    cursor: pointer;
    z-index: 999;
    font-weight: 600;
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
      background: #11dbba;
    }

    .link_more:hover {
      animation: ani 8s linear infinite;
      border: none;
    }
    .discounts-h3 {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 75% */
      letter-spacing: 10px;
      border-radius: 35px;
      padding: 18px 37px;
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
@media screen and (max-width: 768px) {
  .bg-photo  {
    margin: 85px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg-title {
      margin-top: -60px;
      width: fit-content;
      padding: 10px 124px;
      background: linear-gradient(
        90deg,
        rgba(59, 173, 108, 0) 0%,
        rgba(30, 186, 160, 0.8) 52%,
        rgba(59, 173, 108, 0.03) 100%
      );
      color: #FFF;
      font-family: 'Noto Sans HK';
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 166.667% */
      letter-spacing: 5.4px;
    }
    .bg-text {
      margin-top: 26px;
      color: #3B786C;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 187.5% */
    }
  }
  .bg-btn {
    margin: 45px auto 0;
    width: fit-content;
    padding: 11px 24px;
    background: #09C09C;
    color: #FFF;
    font-family: Noto Sans HK;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 120% */
    letter-spacing: 7.5px;
    border-radius: 35px;
  }
}
</style>
