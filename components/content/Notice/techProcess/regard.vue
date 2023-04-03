<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>注意事項</h2>
    </div>
    <div class="regard-think">
      <div class="regard-box text-center">
        <span class="title">矯視前</span>
        <div class="md:flex">
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/5281757b67f8c8b9.png"
              alt=""
              class="mb-5 ml-3"
            />
            <span>預先洗頭<br />避免術後雙眼入水</span>
          </div>
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/be6d0ef7eff09012.png"
              alt=""
              class="mb-5"
            />
            <span>穿著寬鬆、開扣的襯衫<br />避免術後換衣服會觸碰雙眼</span>
          </div>
        </div>
      </div>
      <div class="regard-box text-center">
        <span class="title">請勿便用</span>
        <div class="md:flex">
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/57500ed5756e8c2b.png"
              alt=""
              class="mb-5"
            />
            <span>眼部化妝品</span>
          </div>
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/5b456df938a879c8.png"
              alt=""
              class="mb-5"
            />
            <span>任何香水、香薰或<br />揮發性用品</span>
          </div>
        </div>
      </div>
    </div>
    <div class="regard-think-two">
      <div class="regard-box text-center">
        <span class="title">矯視過程中</span>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/0db6827e5b69e9fb.png"
            alt=""
            class="mb-5 ml-3"
          />
          <span>不要郁動和說話</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/8ef325fa917c3496.png"
            alt=""
            class="mb-5"
          />
          <span>放鬆心情，不要緊張</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/368b6b768066c0eb.png"
            alt=""
            class="mb-5"
          />
          <span>請遵照醫生指示</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/eb4f9240aa44c41f.png"
            alt=""
            class="mb-5"
          />
          <span>建議由親友陪同</span>
        </div>
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
              <span>立即預約 / 查詢</span>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .regard-think-two {
    display: flex;
    .regard-box {
      width: 100%;
      margin: 40px 15px;
      align-items: center;
    }
    .regard-box .regard {
      margin: 0 64px;
    }
  }
  .regard-think {
    display: flex;
  }
  .regard-box {
    margin: 0 10px;
    border: 3px solid #d9e9ec;
    border-radius: 30px;
    display: flex;
    width: 50%;
    padding: 31px;
    .title {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      /* or 133% */

      text-align: center;
      letter-spacing: 0.1em;

      background: linear-gradient(180deg, #5286c2 0%, #78cce5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      word-wrap: break-word;
      width: 50px;
    }
    .regard {
      margin: 0 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      img {
        height: 110px;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        white-space: pre;
        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  .regard-think-two {
    display: flex;
    flex-direction: column;
    .regard-box {
      margin: 40px 0px;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 10vw;
      justify-content: flex-start;
      .title {
      }
    }
    .regard-box .regard {
      margin: 0 64px;
      margin-bottom: 10vw;
    }
  }
  .regard-think {
    display: flex;
    flex-direction: column;
  }
  .regard-box {
    flex-direction: row;
    border: 3px solid #d9e9ec;
    border-radius: 30px;
    display: flex;
    padding: 31px;
    justify-content: center;
    margin-bottom: 39px;
    .title {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      /* or 133% */
      width: min-content;
      text-align: center;
      letter-spacing: 0.1em;

      background: linear-gradient(180deg, #5286c2 0%, #78cce5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      position: absolute;
      left: 10vw;
    }
    .regard {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      margin-bottom: 10vw;
      img {
        height: 110px;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        white-space: pre;
        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
  }
}
</style>
