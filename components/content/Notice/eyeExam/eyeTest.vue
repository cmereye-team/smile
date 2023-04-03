<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-14 mt-10">
      <h2>眼睛檢查及矯視前</h2>
    </div>
    <div>
      <div class="text-center eyeText">
        <span
          >由於隱形眼鏡有機會把角膜擠壓，令量度出來的數據不準確，<br />故進行眼睛檢查及矯視前，請提前停止佩戴。<br />
          <strong>以下為不同隱形眼鏡的停止佩戴日數：</strong></span
        >
      </div>
      <div class="flex my-10 eyeTestBox justify-center">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2022/12/34fec583fc749905.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col">
          <img
            src="https://static.cmereye.com/imgs/2022/12/664f1cecb550a7b0.jpg"
            alt=""
          />
        </div>
        <div class="flex items-end">
          <img
            src="https://static.cmereye.com/imgs/2022/12/7d0dc137be11ec54.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col">
          <img
            src="https://static.cmereye.com/imgs/2022/12/3b603c93806e85cf.jpg"
            alt=""
          />
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
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .eyeText {
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      /* or 167% */

      text-align: center;
      letter-spacing: 0.1em;

      color: #000000;
    }
    strong {
      font-weight: 700;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  .eyeTestBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 80vw;
    }
  }
  .eyeText {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    /* or 200% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
    strong {
      font-weight: 800;
    }
  }
}
</style>
