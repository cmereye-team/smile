<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>人工晶體</h2>
    </div>
    <div class="mbShow">
      <span>
        坊間稱之為人工晶體置換術。透過更換人工晶體，致力為客人視野帶來煥然一新的感覺，一次過解決近視、遠視、散光、老花等問題。 </span
      ><br />
      <span>
        希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，度身訂造矯視方案；專業咨詢過後，眼科專科醫生按客人視力需求選取及植入合適之人工晶體，以替代原有已老化和混濁之晶體。
      </span>
    </div>
    <div class="madeBox1">
      <img
        src="https://static.cmereye.com/imgs/2022/12/5867e965bfafc043.png"
        alt=""
      />
      <span
        >多焦距人工晶體以多個細小壓環把進入眼睛的光線分為兩至三束主要光線，產生不同焦點，形成遠、中、近的影像，讓眼睛可以不依靠眼內肌肉對焦，藉此解決近視、遠視、散光、老花等視力問題。</span
      >
    </div>
    <div class="madeBox2">
      <img
        src="https://static.cmereye.com/imgs/2022/12/19f9b730f426da71.png"
        alt=""
      />
      <span
        >除了多焦距人工晶體外，亦有基本的單焦距人工晶體、散光多焦距人工晶體等選項。建議請先預約檢查諮詢眼科專科醫生專業意見，再選擇合適自己的人工晶體。</span
      >
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
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .madeBox1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      max-width: 20vw;
    }
    span {
      flex: 0.5;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      letter-spacing: 0.1em;

      color: #000000;
      margin: 0 10px;
    }
  }
  .madeBox2 {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-direction: row-reverse;
    img {
      max-width: 20vw;
    }
    span {
      flex: 0.5;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      letter-spacing: 0.1em;

      color: #000000;
      margin: 0 10px;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  span {
    font-size: 14px;
    line-height: 25px;
  }
  .madeBox1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
      margin-bottom: 40px;
      margin-top: 40px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 200% */

      // text-align: center;
      letter-spacing: 0.1em;

      color: #000000;
    }
  }
  .madeBox2 {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
      margin-bottom: 40px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 200% */

      // text-align: center;
      letter-spacing: 0.1em;

      color: #000000;
    }
  }
}
</style>
