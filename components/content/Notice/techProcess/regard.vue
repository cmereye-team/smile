<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('notice.techProcess.regard.h2')}}</h2>
    </div>
    <div class="regard-think">
      <div class="regard-box text-center">
        <span class="title">{{$t('notice.techProcess.regard.span1')}}</span>
        <div class="md:flex">
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/5281757b67f8c8b9.png"
              alt=""
              class="mb-5 ml-3"
            />
            <span v-html="$t('notice.techProcess.regard.span2')"></span>
          </div>
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/be6d0ef7eff09012.png"
              alt=""
              class="mb-5"
            />
            <span v-html="$t('notice.techProcess.regard.span3')"></span>
          </div>
        </div>
      </div>
      <div class="regard-box text-center">
        <span class="title">{{$t('notice.techProcess.regard.title1')}}</span>
        <div class="md:flex">
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/57500ed5756e8c2b.png"
              alt=""
              class="mb-5"
            />
            <span>{{$t('notice.techProcess.regard.span4')}}</span>
          </div>
          <div class="regard">
            <img
              src="https://static.cmereye.com/imgs/2022/12/5b456df938a879c8.png"
              alt=""
              class="mb-5"
            />
            <span v-html="$t('notice.techProcess.regard.span5')"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="regard-think-two">
      <div class="regard-box text-center">
        <span class="title">{{$t('notice.techProcess.regard.title2')}}</span>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/0db6827e5b69e9fb.png"
            alt=""
            class="mb-5 ml-3"
          />
          <span>{{$t('notice.techProcess.regard.span6')}}</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/8ef325fa917c3496.png"
            alt=""
            class="mb-5"
          />
          <span>{{$t('notice.techProcess.regard.span7')}}</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/368b6b768066c0eb.png"
            alt=""
            class="mb-5"
          />
          <span>{{$t('notice.techProcess.regard.span8')}}</span>
        </div>
        <div class="regard">
          <img
            src="https://static.cmereye.com/imgs/2022/12/eb4f9240aa44c41f.png"
            alt=""
            class="mb-5"
          />
          <span>{{$t('notice.techProcess.regard.span9')}}</span>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;
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
      /deep/ span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        /* or 125% */
        white-space: pre;
        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
    
  }
  .regard-box:first-child{
    .regard:last-child{
      margin: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 18px;
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
      margin-top: 10vw;
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
    padding: 31px 0 31px 31px;
    justify-content: center;
    margin-bottom: 39px;
    position: relative;
    .title {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
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
      top: 12vw;
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
      /deep/ span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        white-space: pre;
        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
}
</style>
