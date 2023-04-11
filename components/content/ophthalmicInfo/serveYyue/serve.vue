<template>
  <div class="page_container serve-page">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('home.headers.reservationService')}}</h2>
    </div>
    <div class="flex md:justify-center flex-col items-center md:flex-row">
      <div class="serve-box">
        <img
          src="https://static.cmereye.com/imgs/2023/01/a1441d1e7e65eb40.png"
          alt=""
        />
        <p>術前眼睛檢查</p>
      </div>
      <div class="serve-box" @click="serveForm">
        <img
          src="https://static.cmereye.com/imgs/2023/01/df076d9e71e08870.png"
          alt=""
        />
        <p>講座</p>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <a href="#" class="mbShow">
        <button>
          <div class="flex btn-yuyue">
            <img
              src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
              alt=""
              style="width: 12vw"
            />
            <div class="flex flex-col justify-center" style="padding: 0 10px">
              <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
              <span>6061 0511</span>
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
  methods: {
    serveForm() {
      // this.$router.replace("/ophthalmicInfo/AppointForm");
      this.localePath('/ophthalmicInfo/AppointForm')
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;
}
.serve-box:hover {
  border: 2px solid #81dbec !important;
}
@media screen and (min-width: 768px) {
  .serve-box {
    cursor: pointer;
  }
  .serve-page {
    margin-bottom: 800px;
  }
  .more-btn {
    display: flex;
    justify-content: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 13px 23px;
    margin: 0 auto;
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    cursor: pointer;
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }
  .serve-box {
    width: 315px;
    height: 288px;
    border: 2px solid #4570b6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
    margin-top: 40px;
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height, or 150% */
      margin-top: 36px;
      text-align: center;
      letter-spacing: 0.1em;

      color: #444343;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  .more-btn {
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    width: 40%;
    margin: 0 auto;
    padding: 10px 0;
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }
  .serve-box {
    width: 215px;
    height: 188px;
    border: 2px solid #4570b6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
    margin-top: 40px;
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      /* identical to box height, or 150% */

      text-align: center;
      letter-spacing: 0.1em;
      margin-top: 15px;
      color: #444343;
    }
    img {
      width: 32%;
    }
  }
}
</style>
