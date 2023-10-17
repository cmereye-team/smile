<template>
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
}
</style>
