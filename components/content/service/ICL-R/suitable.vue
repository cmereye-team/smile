<template>
  <div class="bg-photo">
    <img
      class="mbShow"
      src="https://static.cmereye.com/imgs/2023/10/39c3a9da9fc3333f.png"
      alt=""
    />
    <div class="nav-four">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/2a0ab11ca4e62a1c.png"
            alt=""
          />
        </div>
        <div>ICL技術大公開</div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/4590a6a3c107d907.png"
            alt=""
          />
        </div>
        <div>即場免費眼睛檢查</div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/136b0040e3a94d86.png"
            alt=""
          />
        </div>
        <div>ICL會場優惠</div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/10/51dd5016f8c636d8.png"
            alt=""
          />
        </div>
        <div>星級用家親身分享</div>
      </div>
    </div>
    <img
      class="mbShow"
      style="margin-top: -60px"
      src="https://static.cmereye.com/imgs/2023/10/e2264d2d11f2efdd.png"
      alt=""
    />
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
    background: url("https://static.cmereye.com/imgs/2023/10/9b2e1974e778b441.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 98.34%;
    height: 420px;
    margin: 85px auto 92px;
    max-width: 1889px;
    & > div {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-evenly;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        & > div:nth-child(2) {
          margin-top: 40px;
          min-height: 49px;
          color: #3b786c;
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 100% */
          letter-spacing: 1.5px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .pcShow {
    display: none !important;
  }
  .bg-photo {
    .nav-four {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -70px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 45px;

        & > div:nth-child(2) {
          margin-top: 25px;
          color: #3b786c;
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 150% */
          letter-spacing: 1px;
        }
      }
      &>div:nth-child(1) {
        img{
          max-width: 150px;
        }
      }
      &>div:nth-child(2) {
        img{
          max-width: 92px;
        }
      }
      &>div:nth-child(3) {
        img{
          max-width: 120px;
        }
      }
      &>div:nth-child(4) {
        img{
          max-width: 110px;
        }
      }
    }
  }
}
</style>
