<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>LASIK 激光矯視原理</h2>
    </div>
    <div>
      <div class="flex pincile_box">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2022/12/562ae3599c4a424f.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="flex items-end">
          <img
            src="https://static.cmereye.com/imgs/2022/12/778635b3e6aa7b8a.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2022/12/90b9549dc880c3c6.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="flex items-end">
          <img
            src="https://static.cmereye.com/imgs/2022/12/cd76fe9b1c473cb3.png"
            alt=""
          />
        </div>
      </div>
      <div class="text-center md:mt-14 mt-5 pincile">
        <span class="text-pincile"
          >LASIK (Laser-Assisted in Situ
          Keratomileusis)是準分子激光原位角膜磨鑲術，通過激光「打磨」角膜，改變角膜弧度，從而矯正視力。過程中，醫生會先用飛秒激光製作角膜瓣；掀開角膜瓣後，用準分子激光進行角膜切削，再把角膜瓣復位，從而矯正視力。</span
        >
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
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .pincile_box {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .text-pincile {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
  }
}
@media screen and (max-width: 768px) {
  .pincile {
    text-align: left;
  }
  h2 {
    font-size: 16px;
  }
  .text-pincile {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    /* or 200% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
  }
  .pincile_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow {
    margin: 48px 0;
    transform: rotate(90deg);
  }
}
</style>
