
<style >
body {
  overflow-x: hidden;
}
</style>
<style lang="scss" scoped>
:deep(.mt-20) {
  margin-top: 0;
}
:deep(.share-img) {
  margin-top: 0;
}

.d-none {
  display: none;
}
i {
  font-style: normal;
}
.new-container {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 991px) {
  // 按钮
  .publicBtn-booking {
    width: fit-content;
    padding: 6px 29px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 100px;
    border: 2px solid #4570b6;
    background: #4570b6;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    span {
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: 1px;
    }
    svg {
      width: 17px;
    }
  }

  .ClearVisionBanner {
    .ClearVisionBanner-Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ClearVisionBanner-Box-content {
        overflow: hidden;
        // width: 100vw;

        h3 {
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 40.541px;
          font-style: normal;
          font-weight: 250;
          line-height: 0.68;
          letter-spacing: 27.973px;
        }
        .ClearVisionBanner-Box-content-title {
          p {
            margin-top: 10px;

            text-align: center;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 13.432px;
            font-style: normal;
            font-weight: 250;
            line-height: 1.3;
          }
        }
      }
      .ClearVisionBanner-Box-content-img {
        margin-top: 44px;
        max-width: 100vw;
        overflow: hidden;
        position: relative;

        display: flex;
        justify-content: center;
        border-bottom: 1px solid #4570b6;

        img {
          min-width: 510px;
          text-align: center;
        }
        p {
          position: absolute;
          bottom: 8.65px;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.17;
          }
        }
      }
      .ClearVisionBanner-Box-text {
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        span {
          position: relative;
          width: fit-content;
          display: inline-block;
          border-radius: 100px;
          border: 1px solid #4570b6;
          background: #f2f7ff;
          padding: 4px 25px;
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: 4.2px;
        }
        & > span:nth-child(1) {
          left: 5px;
        }
        & > span:nth-child(2) {
          right: 10px;
        }

        & > span:nth-child(3) {
          left: 66px;
        }
        & > span:nth-child(4) {
          left: 22px;
        }

        & > span:nth-child(5) {
          left: 86px;
        }
      }
    }
  }

  // 什么事老花
  .WhatLaoHua {
    margin-top: 40px;
    .WhatLaoHuaBox {
      text-align: center;
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.95;
      }
      .WhatLaoHuaBox-text {
        margin-top: 10px;

        p {
          margin: 0 auto;
          max-width: 330px;
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: 4.2px;
          span {
            color: #4570b6;
          }
        }
      }
    }
  }

  // icl好处
  .icl-Good {
    margin-top: 115px;
    .icl-Good-title {
      text-align: center;
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.95;
      margin-bottom: 20px;
    }
    .icl-Good-List {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .icl-Good-List-item {
        z-index: 99;
        opacity: 1;
        width: 194px;
        height: 194px;
        border: 1.04px solid #4570b6;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 59px;
          height: 44px;
        }
        h4 {
          margin-top: 25px;
          margin-bottom: 11px;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 0.57; /* 57.766% */
          letter-spacing: 1.8px;
        }
        p {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.125;
        }
      }

      & > .icl-Good-List-item:nth-child(6) {
        justify-content: flex-end;
        padding-bottom: 14px;
      }
    }
  }

  // 为什么选择希玛
  .icl-WhatChoose {
    padding: clamp(20px, 10.26vw, 40px) clamp(7.5px, 3.85vw, 15px);
    .icl-WhatChoose-title {
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: clamp(10px, 5.13vw, 20px);
      font-style: normal;
      font-weight: 900;
      line-height: 1.25;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      max-width: 100vw;
      margin-top: clamp(15px, 7.69vw, 30px);

      .icl-WhatChoose-content-one-text {
        margin: 0 auto;
        max-width: 100vw;
        margin-top: clamp(5px, 2.56vw, 10px);
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: clamp(8px, 4.1vw, 16px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: clamp(2.4px, 1.23vw, 4.8px);
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: clamp(8px, 4.1vw, 16px);
            font-style: normal;
            font-weight: 700;
            line-height: 1.75;
            letter-spacing: clamp(2.4px, 1.23vw, 4.8px);
          }
        }
      }
    }
  }

  // 合適對象
  .SuitableObject {
    position: relative;
    padding-top: 10px;
    .SuitableObject-bg-right {
      position: absolute;
      right: -50px;
      top: -55px;
      width: 122px;
      height: auto;
    }
    .SuitableObject-Box {
      position: relative;
      padding-bottom: 216px;
      margin: 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: -18px;
        left: -100px;
        background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-line.svg")
          no-repeat;
        background-size: 100% auto;
        width: 681px;
        height: 300px;
        z-index: -1;
      }

      .SuitableObject-Box-title {
        width: 313px;
        height: 313px;
        flex-shrink: 0;
        border-radius: 50%;
        border: 1.115px solid #4570b6;
        background: linear-gradient(210deg, #fff 13.8%, #f2f7ff 70.44%);
        text-align: center;
        padding-top: 66px;
        margin: 0 auto;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: -17px;
          left: -17px;
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-man-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: 83px;
          height: 181px;
        }

        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 0.83;
        }
        p {
          max-width: 202px;
          margin: 21px auto 0;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.394;
          letter-spacing: 3.5px;
        }
      }
      .SuitableObject-Box-List {
        width: 313px;
        min-height: 320px;
        margin: 0 auto;
        position: absolute;
        top: 184px;
        left: 50%;
        transform: translateX(-50%);
        .SuitableObject-Box-List-item {
          width: 174px;
          height: 174px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1px solid #4570b6;
          background: #fff;
          text-align: center;
          img {
            max-width: 74px;
            position: absolute;

            left: 50%;
            transform: translateX(-50%);
          }
          p {
            position: absolute;

            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.394;
            letter-spacing: 3.5px;
            span {
              font-size: 12px;
            }
          }
        }

        & > .SuitableObject-Box-List-item:nth-child(1) {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          img {
            top: 38px;
          }
          p {
            top: 110px;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(2) {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 4;

          img {
            top: 43px;
            max-width: 56px;
          }
          p {
            top: 110px;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(3) {
          position: absolute;
          left: 0;
          top: 150px;
          z-index: 3;

          img {
            top: 35px;
          }
          p {
            top: 100px;
            letter-spacing: 0;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(4) {
          position: absolute;
          right: 0;
          top: 150px;
          z-index: 2;

          img {
            max-width: 56px;

            top: 31px;
          }
          p {
            top: 108px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 389px) {
  // icl好处
  .icl-Good {
    .icl-Good-List {
      .icl-Good-List-item {
        width: 49.7vw;
        height: 49.7vw;
        // height: 194px;
        border: 1px solid #4570b6;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: clamp(26px, 13.33vw, 52px);
        }
        h4 {
          margin-top: clamp(12.5px, 6.41vw, 25px);
          margin-bottom: clamp(5.5px, 2.82vw, 11px);
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(12px, 4.615vw, 18px);
          font-style: normal;
          font-weight: 700;
          line-height: 0.57;
          letter-spacing: 1.8px;
        }
        p {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(10px, 4.1vw, 16px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.125;
        }
      }

      & > .icl-Good-List-item {
        border-bottom: none;
      }

      & > .icl-Good-List-item:nth-child(5) {
        border-bottom: 1px solid #4570b6;
      }
      & > .icl-Good-List-item:nth-child(6) {
        border-bottom: 1px solid #4570b6;
        padding-bottom: clamp(5px, 2.56vw, 10px);
      }

      & > .icl-Good-List-item:nth-child(1) {
        border-right: none;
      }

      & > .icl-Good-List-item:nth-child(3) {
        border-right: none;
      }

      & > .icl-Good-List-item:nth-child(5) {
        border-right: none;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .d-lg-none {
    display: none;
  }
  .d-lg-block {
    display: block;
  }

  // 分享给朋友
  .CaseSharingV2 {
    display: none;
  }

  // 按钮
  .publicBtn-booking {
    width: fit-content;
    padding: 10px 64px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 100px;
    border: 2px solid #4570b6;
    background: #4570b6;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    span {
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: 1.8px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .ClearVisionBanner {
    border-bottom: 2px solid #4570b6;
    .ClearVisionBanner-Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ClearVisionBanner-Box-content {
        overflow: hidden;
        // width: 100vw;

        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 96px;
          font-style: normal;
          font-weight: 100;
          line-height: normal;
          letter-spacing: 66.24px;
        }
        .ClearVisionBanner-Box-content-title {
          text-align: center;
          p {
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 31.806px;
            font-style: normal;
            font-weight: 100;
            line-height: 1.31;
          }
        }
      }
      .ClearVisionBanner-Box-content-img {
        margin-top: 32px;
        max-width: 100vw;
        overflow: hidden;
        position: relative;
        img {
          min-width: 510px;
          text-align: center;
        }
        p {
          position: absolute;
          bottom: 17px;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 40px;
            font-style: normal;
            font-weight: 900;
            line-height: 0.97;
            letter-spacing: 4px;
          }
        }
      }
      .ClearVisionBanner-Box-text {
        max-width: 1920px;
        width: 100vw;
        position: relative;
        span {
          position: absolute;
          width: fit-content;
          display: inline-block;
          border-radius: 100px;
          border: 1px solid #4570b6;
          background: #f2f7ff;
          padding: 4px 25px;
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: 4.2px;
        }
        & > span:nth-child(1) {
          right: 144px;
          bottom: 167px;
        }
        & > span:nth-child(2) {
          left: 178px;
          bottom: 298px;
        }

        & > span:nth-child(3) {
          left: 262px;
          bottom: 642px;
        }
        & > span:nth-child(4) {
          right: 372px;
          bottom: 750px;
        }

        & > span:nth-child(5) {
          right: 164px;
          bottom: 409px;
        }
      }
    }
  }

  // 什么事老花
  .WhatLaoHua {
    margin-top: 76px;
    .WhatLaoHuaBox {
      display: flex;
      justify-content: center;
      gap: 123px;
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.3;
      }
      .WhatLaoHuaBox-text {
        max-width: 811px;
        p {
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: 6px;
          span {
            color: #4570b6;
          }
        }
      }
    }
  }

  // icl好处
  .icl-Good {
    margin-top: 65px;
    .icl-Good-title {
      text-align: center;
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.3;
      margin-bottom: 50px;
    }
    .icl-Good-List {
      margin: 0 auto;
      max-width: 992px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      display: grid;
      height: auto;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      margin-top: 49px;

      & > .icl-Good-List-item:nth-child(1),
      & > .icl-Good-List-item:nth-child(2),
      & > .icl-Good-List-item:nth-child(3) {
        border-bottom: none;
      }

      & > .icl-Good-List-item:last-child,
      & > .icl-Good-List-item:nth-child(3) {
        border-right: 2px solid #4570b6;
      }
      & > .icl-Good-List-item:nth-child(6) {
        padding-bottom: 15px;
      }

      .icl-Good-List-item {
        z-index: 99;
        opacity: 1;
        // width: 16.5vw;
        // height: 16.4vw;
        padding-top: clamp(41px, 4.27vw, 82px);
        padding-bottom: clamp(27.5px, 2.86vw, 55px);
        box-sizing: border-box;
        border: 2px solid #4570b6;
        border-right: none;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          height: clamp(34px, 3.54vw, 68px);
          flex-shrink: 0;
        }
        h4 {
          margin-top: clamp(9px, 0.94vw, 18px);
          margin-bottom: clamp(5.5px, 0.57vw, 11px);
          color: #4570b6;
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.3vw, 25px);
          font-style: normal;
          font-weight: 700;
          line-height: 0.8;
          letter-spacing: clamp(3.125px, 0.33vw, 6.25px);
        }
        p {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(12px, 1.19vw, 23px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: 0.2rem;
        }
      }
    }
  }

  .icl-WhatChoose {
    padding: 98px 0px 120px;
    .icl-WhatChoose-title {
      max-width: 908px;
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 1;
      margin: 0 auto;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      margin-top: 26px;
      display: flex;
      justify-content: center;
      gap: 31px;
      & > div:nth-child(1) {
        max-width: 463px;
      }
      & > div:nth-child(2) {
        max-width: 467px;
        text-align: justify;
      }

      .icl-WhatChoose-content-one-text {
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: 5px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.75;
            letter-spacing: 6px;
          }
        }
      }
    }
  }

  // 合適對象
  .SuitableObject {
    position: relative;
    width: 100vw;

    .SuitableObject-bg-right {
      position: absolute;
      right: -110px;
      top: -275px;
      width: 428px;
      height: auto;
    }
    .SuitableObject-Box {
      position: relative;
      padding-bottom: 112px;
      margin: 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: -383px;
        left: -445px;
        background: url(https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-line.svg)
          no-repeat;
        background-size: 100% auto;
        width: 2089px;
        height: 940px;
        transform: rotate(1.996deg);
        z-index: -1;
        pointer-events: none;
      }

      .SuitableObject-Box-title {
        width: 562px;
        height: 562px;
        flex-shrink: 0;
        border-radius: 50%;
        border: 2px solid #4570b6;
        background: linear-gradient(210deg, #fff 13.8%, #f2f7ff 70.44%);
        text-align: center;
        padding-top: 132px;
        margin: 0 auto;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: -32px;
          left: -32px;
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-man-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: 149px;
          height: 326px;
          z-index: 5;
        }

        &::after {
          content: "";
          position: absolute;
          top: 142px;
          right: -40px;
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-woman-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: 224px;
          height: 261px;

          z-index: 5;
        }

        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 30px;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          max-width: 363px;
          margin: 8px auto 0;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: 5px;
        }
      }
      .SuitableObject-Box-List {
        width: 1032px;
        min-height: 435px;
        margin: 0 auto;
        position: absolute;
        top: 238px;
        left: 50%;
        transform: translateX(-50%);
        .SuitableObject-Box-List-item {
          width: 313px;
          height: 313px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 2px solid #4570b6;
          background: #fff;
          text-align: center;
          img {
            max-width: 134px;
            position: absolute;

            left: 50%;
            transform: translateX(-50%);
          }
          p {
            position: absolute;

            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.75;
            letter-spacing: 5px;
          }
        }

        & > .SuitableObject-Box-List-item:nth-child(1) {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          img {
            top: 68px;
          }
          p {
            top: 190px;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(2) {
          position: absolute;
          left: 240px;
          top: 122px;
          z-index: 2;

          img {
            top: 77px;
            max-width: 100px;
          }
          p {
            top: 201px;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(3) {
          position: absolute;
          right: 240px;
          top: 122px;
          z-index: 3;

          img {
            top: 64px;
            max-width: 132px;
          }
          p {
            top: 190px;
            letter-spacing: 0;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(4) {
          position: absolute;
          right: 0;
          top: 0px;
          z-index: 4;

          img {
            max-width: 101px;

            top: 56px;
          }
          p {
            top: 198px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .UserShare {
    .UserShareContainer {
      .UserShareBox {
        .UserShareBox-list {
          max-width: calc(100vw - calc(100vw - 1320px) / 2);
          width: fit-content;
        }
      }
    }
  }
}

@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1140px) {
  .head-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .d-xl-none {
    display: none;
  }
  .d-xl-block {
    display: block;
  }

  // 向上
  .top-btnV2 {
    position: fixed;
    right: 165px;
    bottom: 140px;
    z-index: 999;
    cursor: pointer;
  }
}

@media screen and (min-width: 1319px) {
  .icl-Good {
    .icl-Good-List {
      max-width: 100vw;
      display: flex;
      flex-wrap: wrap;
      & > .icl-Good-List-item:nth-child(3) {
        border-right: none;
      }
      & > .icl-Good-List-item:nth-child(1),
      & > .icl-Good-List-item:nth-child(2),
      & > .icl-Good-List-item:nth-child(3) {
        border-bottom: 2px solid #4570b6;
      }

      .icl-Good-List-item {
        width: 16.5vw;
        height: 16.4vw;
        border-collapse: collapse;
        box-sizing: border-box;
        border: 2px solid #4570b6;
        border-right: none;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>


<template>
  <div class="lasik" style="overflow-x: hidden;">
    <HeadV2 />

    <div class="new-container container center-Banner">
      <img
        class="d-block mx-auto"
        decoding="async"
        src="https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-pc.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-mb.png  400w,
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-mb.png  640w,
          https://statichk.cmermedical.com/smile/VisionCorrectionCenter/center-Banner-pc.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
    </div>

    <section class="ClearVisionBanner">
      <div class="new-container container">
        <div class="ClearVisionBanner-Box">
          <div class="ClearVisionBanner-Box-content">
            <div class="ClearVisionBanner-Box-content-title">
              <h3>老花</h3>
              <p>Presbyopia</p>
            </div>

            <div class="ClearVisionBanner-Box-content-img">
              <img
                decoding="async"
                src="https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-pc1.avif"
                alt=""
                loading="lazy"
                width="100%"
                height="100%"
                srcset="
                  https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-mb.webp  400w,
                  https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-mb.webp  640w,
                  https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-pc1.avif
                "
                sizes=" (max-width: 992px) 100vw,1216px"
              />

              <p><span>「6」字同「8」字</span><span>不能夠一眼分清？</span></p>
            </div>
          </div>
          <div class="ClearVisionBanner-Box-text">
            <span>頻繁眨眼睛或搓眼睛以嘗試改善焦點</span>
            <span>難以看清電子屏幕細小文字</span>
            <span>需將物件拉遠才能看清</span>
            <span>老花眼鏡難以配合穿搭</span>
            <span>工作時不便戴老花眼鏡</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 什麼是老花？ -->
    <section class="WhatLaoHua">
      <div class="new-container container WhatLaoHuaBox">
        <h3>什麼是老花？</h3>
        <div class="WhatLaoHuaBox-text">
          <p>
            隨著年紀增長，人們可能會遇到老花的問題，這是一種影響近視力的視力狀況。由於在眼睛中的晶狀體彈性降低，使眼睛調節焦距的能力下降，導致<span>看近處物體時會出現視覺模糊</span>。
          </p>
          <br />
          <p>
            老花並非疾病，而是隨著年齡增長而自然出現的現象。一般在40歲開始出現，到60歲時會達到較為穩定的狀態。為了改善老花帶來的視力問題，人們可以選擇配戴老花眼鏡、使用隱形眼鏡或接受老花矯視手術等方式，這些方法都可幫助改善近距離的視力，使日常生活中的閱讀和近距離工作變得更加容易，而進行<span>老花矯視更是受大眾歡迎的選項</span>。
          </p>
        </div>
      </div>
    </section>

    <!-- 按钮 -->

    <a href="" class="publicBtn-booking">
      <span> 預約諮詢合適矯視方案 </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
      >
        <path
          d="M3.19922 26.0597L25.8278 3.43115"
          stroke="white"
          stroke-width="5.4"
          stroke-linecap="round"
        />
        <path
          d="M6.49707 2.71118H26.5997V22.1512"
          stroke="white"
          stroke-width="4.86"
          stroke-linecap="round"
        />
      </svg>
    </a>

    <!-- 人工晶體置換術的好處 -->
    <section class="icl-Good">
      <h3 class="icl-Good-title">人工晶體置換術的好處</h3>
      <div class="icl-Good-List">
        <div
          class="icl-Good-List-item"
          v-for="(item, index) in iclGoodList"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <h4>{{ $t(item.title) }}</h4>
          <div v-if="!isMobile">
            <p v-for="(i, idx) in item.text" :key="idx">{{ $t(i) }}</p>
          </div>
          <div v-else>
            <p v-for="(i, idx) in item.mbText" :key="idx">{{ $t(i) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 為何選擇希瑪? -->
    <section class="icl-WhatChoose">
      <h3 class="icl-WhatChoose-title">
        {{ $t("Correct.newIcl.section2.title") }}
      </h3>
      <div class="icl-WhatChoose-content-one container new-container">
        <div class="icl-WhatChoose-content-one-img">
          <img
            class=""
            decoding="async"
            src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc-.avif"
            alt=""
            loading="lazy"
            width="100%"
            height="100%"
            srcset="
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 400w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 640w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif
            "
            sizes=" (max-width: 992px) 100vw,1216px"
          />
        </div>
        <div class="icl-WhatChoose-content-one-text">
          <p>
            希瑪自創辦以來與STAAR
            Surgical公司建立良好的合作關係<span>逾10年</span>。<br />
            2023年，STAAR
            Surgical公司對希瑪眼科集團的<span>醫療技術、手術品質及服務作出認可</span>，宣佈將希瑪微笑矯視中心設立為<span
              >首間官方認證EVOICL 國際培訓中心</span
            >。希瑪微笑矯視中心往後會繼續致力於ICL方面發展，成為大眾選擇ICL植入式隱形眼鏡的首選!
          </p>
          <br />
          <p>
            希瑪微笑矯視中心在矯視技術領域不斷追求突破，近期我們在ICL植入式隱形眼鏡的術前檢查和矯視過程中引入了新的技術項目，以提升服務的質量和精準度。
          </p>
        </div>
      </div>
    </section>

    <!-- 合適對象-->
    <section class="SuitableObject">
      <img
        class="SuitableObject-bg-right"
        decoding="async"
        src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg 400w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg 640w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />

      <div class="SuitableObject-Box container">
        <div class="SuitableObject-Box-title">
          <h3>合適對象</h3>
          <p>無論你追求效率還是悠閒自在，矯視都讓你的生活更清晰。</p>
        </div>

        <div class="SuitableObject-Box-List">
          <div class="SuitableObject-Box-List-item">
            <img
              src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-1.svg"
              alt=""
            />
            <p>40歲或以上</p>
          </div>

          <div class="SuitableObject-Box-List-item">
            <img
              src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-2.svg"
              alt=""
            />
            <p>熱愛運動</p>
          </div>

          <div class="SuitableObject-Box-List-item">
            <img
              src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-3.svg"
              alt=""
            />
            <p>
              佩戴多副矯正度數眼鏡<br /><span
                >(近視、遠視、<br />散光、老花)</span
              >
            </p>
          </div>

          <div class="SuitableObject-Box-List-item">
            <img
              src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-4.svg"
              alt=""
            />
            <p>不愛佩戴眼鏡<br />或隱形眼鏡</p>
          </div>
        </div>
      </div>
    </section>

    <div class="top-btnV2" @click="scrollToTopV2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <circle cx="18" cy="18" r="17.5" stroke="#4570B6" />
        <path d="M12.24 12.96H23.76" stroke="#4570B6" />
        <path
          d="M12.8159 24.7681L17.9999 16.9921L23.1839 24.7681"
          stroke="#4570B6"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <FooterV2 />
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import BannerSlider from "@/components/content/home/BannerSliderV2.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    process,
    xtar,
    film,

    FooterV2,
    HeadV2,

    BannerSlider,
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，為受老花困擾人士度身訂造矯視方案，讓客人回復高清視力，改善老花問題。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花手術, 激光矯視老花, 老花激光矯視, 老花 激光,老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-presbyopia",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
      browserTitle: "老花矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "老花矫视 - 希玛微笑矫视中心",

      iclGoodList: [
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-1.svg",
          title: "Correct.newIcl.section3.text1_title1",
          text: ["最快術後一天", "可如常生活或工作"],
          mbText: ["最快術後一天", "可如常生活或工作"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-2.svg",
          title: "Correct.newIcl.section3.text2_title1",
          text: ["大約15至", "20分鐘完成"],
          mbText: ["大約15至", "20分鐘完成"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-3.svg",
          title: "Correct.newIcl.section3.text3_title1",
          text: ["不需依賴眼鏡/", "隱形眼鏡"],
          mbText: ["不需依賴眼鏡/", "隱形眼鏡"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-4.svg",
          title: "Correct.newIcl.section3.text4_title1",
          text: ["人工晶體物料與", "眼球兼容"],
          mbText: ["人工晶體物料與", "眼球兼容"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-5.svg",
          title: "Correct.newIcl.section3.text5_title1",
          text: ["同時處理近視、遠視、", "散光、老花等問題"],
          mbText: ["同時處理近視、遠視、", "散光、老花等問題"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-6.svg",
          title: "Correct.newIcl.section3.text6_title1",
          text: ["根據個人眼睛實際狀況和", "生活需要，製訂合適的", "矯視方案"],

          mbText: [
            "根據個人眼睛實際",
            "狀況和生活需要，",
            "製訂合適的矯視方案",
          ],
        },
      ],
    };
  },

  methods: {
    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    scrollToTopV2() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.windowWidth = window.innerWidth;

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  },
};
</script>


