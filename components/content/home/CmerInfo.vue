<template>
  <div class="">
    <div class="big_img cmer page_container pcShow"></div>
    <div class="mbShow" style="margin-bottom: 50px">
      <img
        src="https://static.cmereye.com/imgs/2023/03/03fa96e5afcde673.jpg"
        alt=""
        style="width: 100%"
      />
      <img
        src="https://static.cmereye.com/imgs/2023/03/c4d569a753127906.jpg"
        alt=""
        style="width: 100%"
      />
      <img
        src="https://static.cmereye.com/imgs/2023/03/55e2cbaf1de3bb66.jpg"
        alt=""
        style="width: 100%"
      />
      <img
        src="https://static.cmereye.com/imgs/2023/03/350f7db95fd29b92.png"
        alt=""
        style="width: 100%"
      />
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
@media only screen and (min-width: 768px) {
  .big_img {
    background: url("https://static.cmereye.com/imgs/2023/03/66aad7076ba61921.jpg")
      no-repeat;
    width: 100%;
    height: 543px;
    background-size: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 80px;
  }
  p {
    font-size: 20px !important;
    padding: 10px !important;
  }
  .cmer {
    .title {
      display: flex;
      align-items: flex-end;
      position: relative;
      margin-left: 123px;
      h3 {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 45px;
        /* or 112% */

        letter-spacing: 0.1em;

        color: #aed5e7;
        writing-mode: vertical-lr;

        letter-spacing: 0.2em;
        width: max-content;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* or 133% */
        margin-left: 26px;
        letter-spacing: 0.1em;

        color: #6d6e71;
        writing-mode: vertical-lr;

        letter-spacing: 0.2em;
        width: max-content;
      }
      span::before {
        content: " ";
        position: absolute;
        width: 80px;
        height: 0;
        border-bottom: #64a8d2 2px solid;
        transform: rotate(90deg);
        left: 26px;
        bottom: 27px;
      }
      span::after {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 0 10px;
        border-color: transparent transparent transparent #64a8d2;
        bottom: -12px;
        transform: rotate(90deg);
        right: 15px;
      }
    }
  }
  .envelope {
    width: 620px;
    height: 401px;
    background: url("https://static.cmereye.com/imgs/2023/01/4817afc79bca22c8.jpg")
      no-repeat;
    background-size: 99%;
    margin-left: 226px;
    position: relative;
    .envelop-one {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      position: absolute;
      top: 0;
      bottom: 0;
      justify-content: center;
      left: 50px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .one {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-two {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* width: -webkit-max-content; */
      width: -moz-max-content;
      /* width: max-content; */
      position: absolute;
      left: 0;
      right: 0;
      top: 32px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .two {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-three {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* width: -webkit-max-content; */
      width: -moz-max-content;
      /* width: max-content; */
      position: absolute;
      left: 0;
      right: 0;
      bottom: 32px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .three {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-four {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      position: absolute;
      top: 0;
      bottom: 0;
      justify-content: center;
      right: 67px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .four {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .big_img {
    width: 100%;
    height: 146vw;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 80px;
    margin-bottom: 40px;
  }
  .cmer {
    .title {
      display: flex;
      align-items: center;
      position: relative;
      flex-direction: column;

      h3 {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 45px;
        /* or 112% */

        letter-spacing: 0.1em;

        color: #aed5e7;
        writing-mode: vertical-lr;

        letter-spacing: 0.2em;
        width: max-content;
        margin-bottom: 10px;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 20px;
        /* or 133% */
        margin-left: 13px;
        letter-spacing: 0.1em;

        color: #6d6e71;
        writing-mode: vertical-lr;

        letter-spacing: 0.2em;
        width: max-content;
      }
      span::before {
        content: " ";
        position: absolute;
        width: 66px;
        height: 0;
        border-bottom: #64a8d2 2px solid;
        transform: rotate(90deg);
        left: -18px;
        bottom: 27px;
      }
      span::after {
        content: " ";
        left: 14px;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 3vw 0 0 3vw;
        border-color: transparent transparent transparent #64a8d2;
        bottom: -14px;
        transform: rotate(90deg);
      }
    }
  }
  .envelope {
    width: 100%;
    background: url("https://static.cmereye.com/imgs/2023/01/ee0dcd8454366e74.jpg")
      no-repeat;
    background-size: 100% 100%;
    margin-left: 10px;
    position: relative;
    .envelop-one {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      /* margin-top: 20px; */
      padding: 20px 0;
      border-bottom: 1px solid #d9e9ec;
      margin: 0 18px;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        width: 42vw;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .one {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-two {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      /* margin-top: 20px; */
      padding: 20px 0;
      border-bottom: 1px solid #d9e9ec;
      margin: 0 18px;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        width: 42vw;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
        white-space: pre;
      }
      .two {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-four {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      /* margin-top: 20px; */
      padding: 20px 0;
      border-bottom: 1px solid #d9e9ec;
      margin: 0 18px;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        width: 42vw;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
      }
      .four {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .envelop-three {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      /* margin-top: 20px; */
      padding: 20px 0;
      // border-bottom: 1px solid #d9e9ec;
      margin: 0 18px;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        width: 42vw;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        padding: 5px 0;
        color: #6d6e71;
        white-space: pre;
      }
      .three {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #64a8d2;

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 15px;
          text-align: center;

          background-image: linear-gradient(
            18.91deg,
            #7ed7ea 0.54%,
            #4b7bbc 91.12%
          );
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
}
</style>
