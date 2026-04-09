
<style lang="scss" scoped>
body {
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
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

// 常见问题
.question-mencare {
  padding: 0 2.56vw;
  max-width: 85.13vw;
  margin: 0 auto;
  margin-top: 11.28vw;

  .publicTitle-mencare {
    text-align: center;
    color: #4570b6;
    font-family: "Noto Sans TC";
    font-size: 5.13vw;
    font-style: normal;
    font-weight: 900;
    line-height: 195%;
  }
}
.question-section {
  padding-top: 11.54vw;
  padding-bottom: 7.18vw;
  background: #6096c5;
  .pubilc-title {
    h2 {
      color: #fff;

      &::after {
        background: #fff;
      }
    }
  }
  &-Box {
    margin-top: 5.38vw;

    .card {
      margin: 1.28vw 0;
      border: none;
      overflow: hidden;
      border-radius: 2.56vw;
      &-header {
        padding: 0;
        border: none;
        .header-title {
          span {
            display: inline-block;
          }
          svg {
            transition: all 0.3s linear;
          }

          svg {
            position: absolute;
            width: 3.33vw;
            height: 1.79vw;
            right: 4.62vw;
            top: 50%;
            transform: translateY(-50%);
            path {
              stroke: white;
            }
          }
        }
        .header-title[aria-expanded="false"] {
          background: #4570b6;
          border: clamp(0.5px, 0.05vw, 1px) solid #a6e1d6;
          border-radius: 2.56vw;
          display: block;
          width: 100%;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 700;
          line-height: 156.602%;
          letter-spacing: 0.54vw;
          padding: 2.82vw 9.49vw 3.33vw 4.87vw;
          overflow: hidden;
          & > span:nth-child(1) {
            color: white;
          }
        }

        .card-body {
          padding: 0;

          span {
            border-bottom-left-radius: 2.56vw;
            border-bottom-right-radius: 2.56vw;
            display: block;
            padding: 2.05vw 14.36vw 4.62vw 4.87vw;
            background: white;
            color: var(--Grey-Deep, #4d4d4d);
            font-family: "Noto Sans HK";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.54vw;
            background: #fff;
          }
        }
      }
    }
    & > div > .card:nth-child(1) {
      margin-top: 0;
    }
    & > div > .card:last-child {
      margin-bottom: 0;
    }
  }
}
.collapse {
  visibility: visible;
}
.card:has(.collapse.show) {
  box-shadow: 0px 0px 3.85vw 0px rgba(0, 0, 0, 0.3);
  .header-title {
    border-radius: 0;
    border: none;
  }
}

.card .header-title[aria-expanded="true"] {
  color: #fff;
  font-family: "Noto Sans HK";
  font-size: 3.59vw;
  font-style: normal;
  font-weight: 700;
  line-height: 156.602%;
  letter-spacing: 0.54vw;
  padding: 2.82vw 9.49vw 3.33vw 4.87vw;
  background: #4570b6;

  svg {
    transition: all 0.3s linear;
    transform: rotate(180deg);
    transform-origin: 50% 50%;
    top: 40%;
    path {
      stroke: white;
    }
  }
}

@media screen and (max-width: 991px) {
  // 按钮
  .publicBtn-booking {
    width: fit-content;
    padding: 1.54vw 7.44vw;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 25.64vw;
    border: 0.51vw solid #4570b6;
    background: #4570b6;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.08vw;
    span {
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 5.13vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: 0.26vw;
    }
    svg {
      width: 4.36vw;
    }
  }

  .ClearVisionBanner {
    // margin-top: 88px;
    .ClearVisionBanner-Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ClearVisionBanner-Box-content {
        overflow: hidden;
        margin-top: 100px;
        // width: 100vw;

        h3 {
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 10.26vw;
          font-style: normal;
          font-weight: 250;
          line-height: 1;
          // letter-spacing:7.15vw;
        }
        .ClearVisionBanner-Box-content-title {
          text-align: center;
          & > a {
            color: #4570b6;
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 11.64vw;
            font-style: normal;
            font-weight: 700;
            line-height: 109.4%;
            text-decoration: none;
          }
          h1 {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans TC";
            font-size: 6.29vw;
            font-style: normal;
            font-weight: 400;
            line-height: 1.8;
          }
          p {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 300;
            line-height: 221.429%;
            letter-spacing: 0.9vw;
            a {
              color: #6d6e71;
              font-family: "Poppins", sans-serif;
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 700;
              line-height: 2.2;
              letter-spacing: 0.36vw;
            }
          }
        }
      }
      .ClearVisionBanner-Box-content-img {
        margin-top: 11.28vw;
        max-width: 100vw;
        overflow: hidden;
        position: relative;

        display: flex;
        justify-content: center;
        border-bottom: 0.26vw solid #4570b6;

        img {
          min-width: 130.77vw;
          text-align: center;
        }
        p {
          position: absolute;
          bottom: 2.22vw;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 900;
            line-height: 1.17;
            i {
              font-style: normal;
              // letter-spacing: -5.32px;
            }
          }
        }
      }
      .ClearVisionBanner-Box-text {
        margin-top: 11.54vw;
        display: flex;
        flex-direction: column;
        gap: 3.85vw;
        span {
          position: relative;
          width: fit-content;
          display: inline-block;
          border-radius: 25.64vw;
          border: 0.26vw solid #4570b6;
          background: #f2f7ff;
          padding: 1.03vw 6.41vw;
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: 1.08vw;
          white-space: nowrap;
        }
        & > span:nth-child(1) {
          left: 1.28vw;
        }
        & > span:nth-child(2) {
          right: 2.56vw;
        }

        & > span:nth-child(3) {
          left: 16.92vw;
        }
        & > span:nth-child(4) {
          left: 5.64vw;
        }

        & > span:nth-child(5) {
          left: 22.05vw;
        }
      }
    }
  }

  // 什么事老花
  .WhatLaoHua {
    margin-top: 10.26vw;
    .WhatLaoHuaBox {
      text-align: center;
      h2 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.95;
      }
      .WhatLaoHuaBox-text {
        margin-top: 2.56vw;

        p {
          margin: 0 auto;
          max-width: 84.62vw;
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: 1.08vw;
          span {
            color: #4570b6;
            font-weight: 700;
          }
        }
      }
    }
  }

  // 矫视方案
  .CorrectionProgram {
    margin-top: 15.38vw;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
    height: 222.05vw;

    .CorrectionProgram-Box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .CorrectionProgram-Box-show {
        opacity: 1;
        z-index: 2;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .CorrectionProgram-Box-show,
      .CorrectionProgram-Box-hide {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-out;
      }

      .CorrectionProgram-Box-hide {
        background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mbBg.avif")
          no-repeat;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12.82vw;
        & > .CorrectionProgram-Box-hide-item:nth-child(2) {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-mbItemBg2.png")
            no-repeat;
          background-size: 100% auto;
          width: 86.92vw;
          height: 87.18vw;
        }
        .CorrectionProgram-Box-hide-item {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-mbItemBg.avif")
            no-repeat;
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: 86.92vw;
          height: 105.13vw;
          position: relative;
          .CorrectionProgram-Box-hide-item-top {
            position: relative;
            border-radius: 11px;
            overflow: hidden;
          }
          .CorrectionProgram-Box-hide-item-bottom {
            padding: 6.41vw 6.15vw 0 6.92vw;

            .CorrectionProgram-Box-hide-item-top-text {
              position: absolute;
              top: 10.26vw;
              left: -4.36vw;
              background: #4570b6;
              padding: 2.05vw 1.54vw 3.08vw 2.05vw;
              border-radius: 5px;
              border-top-left-radius: 0px;

              color: #fff;
              font-family: "Noto Sans TC";
              font-size: 3.08vw;
              font-style: normal;
              font-weight: 400;
              line-height: 1.5;
              letter-spacing: 0.62vw;
              
              p {
                margin-bottom: 0;
              }

              .CorrectionProgram-Box-hide-item-sub {
                position: absolute;
                top: -6.41vw;
                left: 0;
                //content: "適合";
                width: fit-content;
                background: #4570b6;
                padding: 1.03vw 2.05vw 0px 2.05vw;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;

                color: #fff;
                font-family: "Noto Sans TC";
                font-size: 3.08vw;
                font-style: normal;
                font-weight: 700;
                line-height: 6.1vw;
                letter-spacing: 0.62vw;
              }
            }
            h3 {
              text-align: center;
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 5.13vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1;
              letter-spacing: 0.26vw;
            }
            .CorrectionProgram-Box-hide-item-bottom-text {
              margin-top: 3.59vw;
              color: #6d6e71;
              text-align: justify;
              font-family: "Noto Sans HK";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 300;
              line-height: 1.285;
              letter-spacing: 0.72vw;
              span {
                color: #4570b6;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }

  // icl好处
  .icl-Good {
    margin-top: 40px;
    .icl-Good-title {
      text-align: center;
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 5.13vw;
      font-style: normal;
      font-weight: 900;
      line-height: 1.95;
      margin-bottom: 5.13vw;
    }
    .icl-Good-List {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .icl-Good-List-item {
        z-index: 99;
        opacity: 1;
        width: 49.74vw;
        height: 49.74vw;
        border: 0.26vw solid #4570b6;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 15.13vw;
          height: 11.28vw;
        }
        h4 {
          margin-top: 6.41vw;
          margin-bottom: 2.82vw;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 4.62vw;
          font-style: normal;
          font-weight: 700;
          line-height: 57.766%; /* 57.766% */
          letter-spacing: 0.46vw;
        }
        p {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.125;
        }
      }

      & > .icl-Good-List-item:nth-child(1),
      & > .icl-Good-List-item:nth-child(2),
      & > .icl-Good-List-item:nth-child(3),
      & > .icl-Good-List-item:nth-child(4) {
        border-bottom: none;
      }

      & > .icl-Good-List-item:nth-child(1),
      & > .icl-Good-List-item:nth-child(3),
      & > .icl-Good-List-item:nth-child(5) {
        border-right: none;
      }

      & > .icl-Good-List-item:nth-child(6) {
        justify-content: flex-end;
        padding-bottom: 3.59vw;
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

  // 不同老花矯視技術好處對比
  .visionBattle {
    position: relative;
    padding-top: 10.26vw;
    margin-top: 12.05vw;
    margin-bottom: 17.95vw;
    .visionBattle-Bg {
      position: absolute;
      min-width: 233.33vw;
      height: 233.33vw;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .visionBattle-Box {
      h2 {
        text-align: center;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.95;
      }

      .visionBattle-Box-list {
        .visionBattle-Box-list-item {
          h3 {
            display: table;
            margin: 7.69vw auto 0;
            text-align: center;
            color: #4570b6;
            font-family: "Poppins", sans-serif;
            font-size: 5.13vw;
            font-style: normal;
            font-weight: 700;
            line-height: 2;
            letter-spacing: 0.26vw;
            padding: 0 6.41vw;

            flex-shrink: 0;
            background: linear-gradient(
              90deg,
              #dae2f0 0%,
              #fff 44.23%,
              #dae2f0 100%
            );
          }

          .visionBattle-Box-list-item-content {
            width: fit-content;
            margin: 17.95vw auto 0;
            p {
              display: flex;
              align-items: flex-start;
              gap: 1.28vw;
              img {
                width: 4.36vw;
                height: 4.36vw;
                margin-top: 0.77vw;
              }
              span {
                display: inline-block;
                color: #4570b6;
                font-family: "Noto Sans HK";
                font-size: 3.59vw;
                font-style: normal;
                font-weight: 500;
                line-height: 165.171%;
                letter-spacing: 0.18vw;
              }
            }
          }
        }
        & > .visionBattle-Box-list-item:nth-child(1) {
          padding-bottom: 15.38vw;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -10.26vw;
            left: -7.69vw;
            width: 115.64vw;
            height: 94.36vw;
            background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-item-newmbBg1.avif");
            background-repeat: no-repeat;
            background-size: 100% auto;
            z-index: -1;
          }
        }
        & > .visionBattle-Box-list-item:nth-child(2) {
          position: relative;
          border-top: 0.26vw solid #809dcd;
          padding-bottom: 23.08vw;
          p {
            span {
              letter-spacing: 0.72vw;
            }
          }
          &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 103.08vw;
            height: 90.26vw;
            background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-item-newmbBg2.avif");
            background-repeat: no-repeat;
            background-size: 100% auto;
            z-index: -1;
          }

          h3 {
            margin-top: 20.51vw;
          }
          .visionBattle-Box-list-item-content {
            margin-top: 7.69vw;
          }
          .visionBattle-Box-list-item-VS {
            position: absolute;
            top: -8.97vw;
            left: 50%;
            transform: translateX(-50%);
            width: 21.03vw;
            height: 17.95vw;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              width: 8.72vw;
              height: 14.62vw;
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: #ecf2ff;
              filter: blur(5px);
              z-index: -1;
            }
          }
        }
      }
    }
  }

  // 合適對象
  .SuitableObject {
    position: relative;
    padding-top: 8.46vw;
    .SuitableObject-bg-right {
      position: absolute;
      right: -12.82vw;
      top: -5.64vw;
      width: 31.28vw;
      height: auto;
    }
    .SuitableObject-bgLeft1,
    .SuitableObject-bgLeft2 {
      display: none;
    }

    .SuitableObject-Box {
      position: relative;
      padding-bottom: 58.38vw;
      margin: 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: -4.62vw;
        left: -25.64vw;
        background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-line.svg")
          no-repeat;
        background-size: 100% auto;
        width: 174.62vw;
        height: 76.92vw;
        z-index: -1;
      }

      .SuitableObject-Box-title {
        width: 80.26vw;
        height: 80.26vw;
        flex-shrink: 0;
        border-radius: 50%;
        border: 0.28vw solid #4570b6;
        background: linear-gradient(210deg, #fff 13.8%, #f2f7ff 70.44%);
        text-align: center;
        padding-top: 16.92vw;
        margin: 0 auto;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: -4.36vw;
          left: -4.36vw;
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-man-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: 21.28vw;
          height: 46.41vw;
        }

        h2 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 900;
          line-height: 0.83;
        }
        p {
          max-width: 51.79vw;
          margin: 5.38vw auto 0;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.394;
          letter-spacing: 0.9vw;
        }
      }
      .SuitableObject-Box-List {
        width: 80.26vw;
        min-height: 82.05vw;
        margin: 0 auto;
        position: absolute;
        top: 47.18vw;
        left: 50%;
        transform: translateX(-50%);
        .SuitableObject-Box-List-item {
          width: 44.62vw;
          height: 44.62vw;
          border-radius: 50%;
          flex-shrink: 0;
          border: 0.26vw solid #4570b6;
          background: #fff;
          text-align: center;
          img {
            max-width: 18.97vw;
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
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 300;
            line-height: 1.394;
            letter-spacing: 0.9vw;
            span {
              font-size: 3.08vw;
            }
          }
        }

        & > .SuitableObject-Box-List-item:nth-child(1) {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          img {
            top: 9.74vw;
          }
          p {
            top: 28.21vw;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(2) {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 4;

          img {
            top: 11.03vw;
            max-width: 14.36vw;
          }
          p {
            top: 28.21vw;
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(3) {
          position: absolute;
          left: 0;
          top: 38.46vw;
          z-index: 3;

          img {
            top: 8.97vw;
          }
          p {
            top: 25.64vw;
            letter-spacing: 0;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(4) {
          position: absolute;
          right: 0;
          top: 38.46vw;
          z-index: 2;

          img {
            max-width: 14.36vw;

            top: 7.95vw;
          }
          p {
            top: 27.69vw;
          }
        }
      }
    }
  }

  // 预约
  .clearAppointment {
    width: 100vw;
    // margin-top: 13.59vw;
    height: 85.64vw;
    background: url("https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/clearAppointment-mbBg.avif")
      no-repeat;
    background-size: 100% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .clearAppointment-Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8.97vw;
      & > .clearAppointment-Box-item:nth-child(1) {
        img {
          width: 12.56vw;
          height: 9.23vw;
          margin-bottom: 4.1vw;
        }
      }
      & > .clearAppointment-Box-item:nth-child(2) {
        img {
          width: 12.82vw;
          height: 12.82vw;
          margin-bottom: 2.82vw;
        }
      }
      .clearAppointment-Box-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 81.03vw;
        height: 32.05vw;

        border-radius: 4.36vw;
        border: 0.13vw solid #4570b6;
        background: #fff;
        box-shadow: 1.49vw 1.49vw 0px 0px #4570b6;
        p {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 900;
          line-height: 0.73;
        }

        .clearAppointment-Box-item-icon {
          position: absolute;

          right: 5.13vw;
          width: 13.85vw;
          height: 13.85vw;
          border-radius: 50%;
          background: #4570b6;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 7.69vw;
          }
        }
      }
    }
  }

  .CaseSharingV2 {
    width: fit-content;
    margin: 0 auto;
    margin-top: 50px;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7.58px;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 0.82px; /* 82.478% */
      }
    }
    & > div:nth-child(2) {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid #4570b6;
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
    padding: clamp(5px, 0.52vw, 10px) clamp(32px, 3.33vw, 64px);
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: clamp(50px, 5.21vw, 100px);
    border: clamp(1px, 0.1vw, 2px) solid #4570b6;
    background: #4570b6;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(12px, 1.25vw, 24px);
    span {
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: clamp(18px, 1.88vw, 36px);
      font-style: normal;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: clamp(0.9px, 0.09vw, 1.8px);
    }
    svg {
      width: clamp(15px, 1.56vw, 30px);
      height: clamp(15px, 1.56vw, 30px);
    }
  }

  .ClearVisionBanner {
    // margin-top: 217px;
    border-bottom: clamp(1px, 0.1vw, 2px) solid #4570b6;
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
          font-size: clamp(48px, 5vw, 96px);
          font-style: normal;
          font-weight: 100;
          line-height: normal;
          // letter-spacing: 66.24px;
        }
        .ClearVisionBanner-Box-content-title {
          text-align: center;
          & > a {
            color: #4570b6;
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: clamp(59px, 6.15vw, 118px);
            font-style: normal;
            font-weight: 700;
            line-height: 109.4%;
            text-decoration: none;
          }
          h1 {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans TC";
            font-size: clamp(37px, 3.85vw, 74px);
            font-style: normal;
            font-weight: 400;
            line-height: 1.8;
          }
          p {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 300;
            line-height: 175%;
            letter-spacing: clamp(3px, 0.31vw, 6px);
            a {
              color: #6d6e71;
              font-family: "Poppins", sans-serif;
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 700;
              line-height: 1.75;
              letter-spacing: clamp(1px, 0.1vw, 2px);
            }
          }
        }
      }
      .ClearVisionBanner-Box-content-img {
        margin-top: clamp(50px, 5.21vw, 100px);
        max-width: 100vw;
        overflow: hidden;
        position: relative;
        img {
          min-width: clamp(255px, 26.56vw, 510px);
          text-align: center;
        }
        p {
          position: absolute;
          bottom: clamp(8.5px, 0.89vw, 17px);
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          text-shadow: 0px 0px 10.8px #fff, 0px 0px 10.8px #fff,
            0px 0px 10.8px #fff, 0px 0px 10.8px #fff;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: clamp(20px, 2.08vw, 40px);
            font-style: normal;
            font-weight: 900;
            line-height: 0.97;
            letter-spacing: clamp(2px, 0.21vw, 4px);
          }
        }
      }
      .ClearVisionBanner-Box-text {
        max-width: clamp(960px, 100vw, 1920px);
        width: 100vw;
        position: relative;
        span {
          position: absolute;
          width: fit-content;
          display: inline-block;
          border-radius: clamp(50px, 5.21vw, 100px);
          border: clamp(0.5px, 0.05vw, 1px) solid #4570b6;
          background: #f2f7ff;
          padding: clamp(2px, 0.21vw, 4px) clamp(12.5px, 1.3vw, 25px);
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 300;
          line-height: 2.5;
          letter-spacing: clamp(2px, 0.21vw, 4px);
        }
        & > span:nth-child(1) {
          right: clamp(72px, 7.5vw, 144px);
          bottom: clamp(83.5px, 8.7vw, 167px);
        }
        & > span:nth-child(2) {
          left: clamp(89px, 9.27vw, 178px);
          bottom: clamp(149px, 15.52vw, 298px);
        }

        & > span:nth-child(3) {
          left: clamp(131px, 13.65vw, 262px);
          bottom: clamp(300px, 31.25vw, 600px);
        }
        & > span:nth-child(4) {
          right: clamp(186px, 19.38vw, 372px);
          bottom: clamp(340px, 35.42vw, 680px);
        }

        & > span:nth-child(5) {
          right: clamp(82px, 8.54vw, 164px);
          bottom: clamp(204.5px, 21.3vw, 409px);
        }
      }
    }
  }

  // 什么事老花
  .WhatLaoHua {
    margin-top: clamp(38px, 3.96vw, 76px);
    .WhatLaoHuaBox {
      display: flex;
      justify-content: center;
      gap: clamp(61.5px, 6.41vw, 123px);
      h2 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1.3;
      }
      .WhatLaoHuaBox-text {
        max-width: clamp(405.5px, 42.24vw, 811px);
        p {
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: clamp(3px, 0.31vw, 6px);
          span {
            color: #4570b6;
            font-weight: 700;
          }
        }
      }
    }
  }

  // 矫视方案
  .CorrectionProgram {
    scroll-margin-top: 200px;
    margin-top: clamp(60px, 6.25vw, 120px);
    margin-bottom: clamp(40px, 4.17vw, 80px);
    position: relative;
    overflow: hidden;
    height: clamp(419.5px, 43.7vw, 839px);

    .CorrectionProgram-Box {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .CorrectionProgram-Box-show {
        opacity: 1;
        z-index: 2;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .CorrectionProgram-Box-show,
      .CorrectionProgram-Box-hide {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-out;
      }

      .CorrectionProgram-Box-hide {
        background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-pc.avif")
          no-repeat;
        background-repeat: no-repeat;
        background-size: 100% auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(30px, 3.13vw, 60px);
        width: 100vw;
        & > .CorrectionProgram-Box-hide-item:nth-child(2) {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-pcItemBg2.avif")
            no-repeat;
          background-size: 100% auto;
        }
        .CorrectionProgram-Box-hide-item {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-pcItemBg.avif")
            no-repeat;
          background-repeat: no-repeat;
          background-size: 100% auto;
          width: clamp(383px, 39.9vw, 766px);
          height: clamp(362px, 37.71vw, 724px);
          position: relative;
          .CorrectionProgram-Box-hide-item-top {
            position: relative;
            border-radius: clamp(14.5px, 1.51vw, 29px);
            overflow: hidden;
          }
          .CorrectionProgram-Box-hide-item-bottom {
            padding: clamp(12.5px, 1.3vw, 25px) clamp(41.5px, 4.32vw, 83px) 0;

            .CorrectionProgram-Box-hide-item-top-text {
              position: absolute;
              top: clamp(41.5px, 4.32vw, 83px);
              left: clamp(-22px, -1.15vw, -11px);
              background: #4570b6;
              padding: clamp(10px, 1.04vw, 20px) clamp(17.5px, 1.82vw, 35px)
                clamp(14px, 1.46vw, 28px) clamp(11px, 1.15vw, 22px);
              border-radius: 5px;
              border-top-left-radius: 0px;
              color: #fff;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 400;
              line-height: 2.2;
              letter-spacing: clamp(2px, 0.21vw, 4px);

              p {
                margin-bottom: 0;
              }

              .CorrectionProgram-Box-hide-item-sub {
                position: absolute;
                top: clamp(-39px, -2.03vw, -19.5px);
                left: 0;
                // content: "適合";
                width: fit-content;
                background: #4570b6;
                padding: clamp(5px, 0.52vw, 10px) clamp(11px, 1.15vw, 22px) 0
                  clamp(11px, 1.15vw, 22px);
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                color: #fff;
                font-family: "Noto Sans TC";
                font-size: clamp(10px, 1.04vw, 20px);
                font-style: normal;
                font-weight: 700;
                line-height: 1.5;
                letter-spacing: clamp(2px, 0.21vw, 4px);
              }
            }
            h3 {
              text-align: center;
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: clamp(15px, 1.56vw, 30px);
              font-style: normal;
              font-weight: 700;
              line-height: 1;
              letter-spacing: clamp(0.75px, 0.08vw, 1.5px);
            }
            .CorrectionProgram-Box-hide-item-bottom-text {
              margin-top: clamp(18.5px, 1.93vw, 37px);
              color: #6d6e71;
              text-align: justify;
              font-family: "Noto Sans HK";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 300;
              line-height: 1.75;
              letter-spacing: clamp(2px, 0.21vw, 4px);
              span {
                color: #4570b6;
                font-weight: 700;
              }
            }
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
        border-right: clamp(1px, 0.1vw, 2px) solid #4570b6;
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
        border: clamp(1px, 0.1vw, 2px) solid #4570b6;
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

  // 不同老花矯視技術好處對比
  .visionBattle {
    position: relative;
    padding-top: clamp(66px, 6.88vw, 132px);
    margin-bottom: clamp(40px, 4.17vw, 80px);

    .visionBattle-Bg {
      position: absolute;
      width: clamp(953.5px, 99.32vw, 1907px);
      height: clamp(953.5px, 99.32vw, 1907px);
      top: clamp(-653px, -34.01vw, -326.5px);
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .visionBattle-Box {
      scroll-margin-top: 120px;
      h2 {
        text-align: center;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
      }

      .visionBattle-Box-list {

        display: flex;
        justify-content: center;
        margin-top: clamp(28px, 2.92vw, 56px);

        .visionBattle-Box-list-item {
          height: clamp(433px, 45.1vw, 866px);
          h3 {
            padding-top: clamp(7px, 0.73vw, 14px);
            padding-bottom: clamp(7px, 0.73vw, 14px);
            margin-top: clamp(11px, 1.15vw, 22px);

            display: table;

            text-align: center;
            color: #4570b6;
            font-family: "Poppins", sans-serif;
            font-size: clamp(15px, 1.56vw, 30px);
            font-style: normal;
            font-weight: 700;
            line-height: 1;
            letter-spacing: clamp(0.75px, 0.08vw, 1.5px);
            width: 400px;
          }

          .visionBattle-Box-list-item-content {
            width: fit-content;
            margin: clamp(90px, 9.38vw, 180px) auto 0;
            p {
              display: flex;
              align-items: flex-start;
              gap: clamp(4px, 0.42vw, 8px);
              img {
                width: clamp(14px, 1.46vw, 28px);
                height: clamp(14px, 1.46vw, 28px);
                margin-top: clamp(1.5px, 0.16vw, 3px);
              }
              span {
                display: inline-block;
                color: #4570b6;
                font-family: "Noto Sans HK";
                font-size: clamp(10px, 1.04vw, 20px);
                font-style: normal;
                font-weight: 500;
                line-height: 1.8;
                letter-spacing: clamp(1.7px, 0.18vw, 3.4px);
              }
            }
          }
        }
        & > .visionBattle-Box-list-item:nth-child(1) {
          h3 {
            margin-left: auto;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(69, 112, 182, 0.2) 72.12%
            );
          }
          .visionBattle-Box-list-item-content {
            padding-right: clamp(26px, 2.71vw, 52px);
          }
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: clamp(-32px, -1.67vw, -16px);
            right: clamp(-158px, -8.23vw, -79px);
            width: clamp(474.5px, 49.43vw, 949px);
            height: clamp(474.5px, 49.43vw, 949px);
            background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-item-newpcBg1.avif");
            background-repeat: no-repeat;
            background-size: 100% auto;
            z-index: -1;
          }
        }
        & > .visionBattle-Box-list-item:nth-child(2) {
          position: relative;
          border-left: clamp(0.5px, 0.05vw, 1px) solid #809dcd;

          p {
            span {
              letter-spacing: clamp(2px, 0.21vw, 4px);
            }
          }
          &::before {
            content: "";
            position: absolute;
            top: clamp(-60px, -3.13vw, -30px);
            left: clamp(-233px, -12.14vw, -116.5px);
            width: clamp(538.5px, 56.09vw, 1077px);
            height: clamp(472.5px, 49.22vw, 945px);
            background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-item-newpcBg2.avif");
            background-repeat: no-repeat;
            background-size: 100% auto;
            z-index: -1;
          }

          h3 {
            text-align: left;
            padding-left: clamp(16px, 1.67vw, 32px);
            background: linear-gradient(
              -90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(69, 112, 182, 0.2) 72.12%
            );
          }
          .visionBattle-Box-list-item-content {
            padding-left: clamp(64px, 6.67vw, 128px);
          }
          .visionBattle-Box-list-item-VS {
            position: absolute;
            top: 50%;
            left: clamp(-70px, -3.65vw, -35px);
            transform: translateY(-50%);
            width: clamp(70px, 7.29vw, 140px);
            height: clamp(70px, 7.29vw, 140px);
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              width: clamp(35px, 3.65vw, 70px);
              height: clamp(59px, 6.15vw, 118px);
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: #ecf2ff;
              filter: blur(clamp(2.5px, 0.26vw, 5px));
              z-index: -1;
            }
          }
        }
      }
    }
  }

  // 合適對象
  .SuitableObject {
    position: relative;
    width: 100vw;
    margin-top: clamp(69px, 7.19vw, 138px);

    .SuitableObject-bg-right {
      position: absolute;
      right: clamp(11.5px, 1.2vw, 23px);
      top: clamp(-223px, -11.61vw, -111.5px);
      width: clamp(214px, 22.29vw, 428px);
      height: auto;
    }
    .SuitableObject-bgLeft1 {
      position: absolute;
      width: clamp(124px, 12.92vw, 248px);
      height: clamp(104.5px, 10.89vw, 209px);
      left: clamp(-40px, -2.08vw, -20px);
      top: clamp(-30px, -1.56vw, -15px);
    }

    .SuitableObject-bgLeft2 {
      position: absolute;
      width: clamp(102.5px, 10.68vw, 205px);
      height: clamp(112px, 11.67vw, 224px);
      left: clamp(82px, 8.54vw, 164px);
      top: clamp(207.5px, 21.61vw, 415px);
    }
    .SuitableObject-Box {
      position: relative;
      padding-bottom: clamp(83px, 8.65vw, 166px);
      margin: 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: clamp(-383px, -19.95vw, -191.5px);
        left: clamp(-445px, -23.18vw, -222.5px);
        background: url(https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-line.svg)
          no-repeat;
        background-size: 100% auto;
        width: clamp(1044.5px, 108.8vw, 2089px);
        height: clamp(470px, 48.96vw, 940px);
        transform: rotate(1.996deg);
        z-index: -1;
        pointer-events: none;
      }

      .SuitableObject-Box-title {
        width: clamp(281px, 29.27vw, 562px);
        height: clamp(281px, 29.27vw, 562px);
        flex-shrink: 0;
        border-radius: 50%;
        border: clamp(1px, 0.1vw, 2px) solid #4570b6;
        background: linear-gradient(210deg, #fff 13.8%, #f2f7ff 70.44%);
        text-align: center;
        padding-top: clamp(66px, 6.88vw, 132px);
        margin: 0 auto;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: clamp(-32px, -1.67vw, -16px);
          left: clamp(-32px, -1.67vw, -16px);
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-man-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: clamp(74.5px, 7.76vw, 149px);
          height: clamp(163px, 16.98vw, 326px);
          z-index: 5;
        }

        &::after {
          content: "";
          position: absolute;
          top: clamp(71px, 7.4vw, 142px);
          right: clamp(-40px, -2.08vw, -20px);
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-woman-mb.svg");
          background-size: 100% auto;
          background-repeat: no-repeat;
          width: clamp(112px, 11.67vw, 224px);
          height: clamp(130.5px, 13.59vw, 261px);
          z-index: 5;
        }

        h2 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          max-width: clamp(181.5px, 18.91vw, 363px);
          margin: clamp(4px, 0.42vw, 8px) auto 0;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: clamp(2.5px, 0.26vw, 5px);
        }
      }
      .SuitableObject-Box-List {
        width: clamp(516px, 53.75vw, 1032px);
        min-height: clamp(217.5px, 22.66vw, 435px);
        margin: 0 auto;
        position: absolute;
        top: clamp(119px, 12.4vw, 238px);
        left: 50%;
        transform: translateX(-50%);
        .SuitableObject-Box-List-item {
          width: clamp(156.5px, 16.3vw, 313px);
          height: clamp(156.5px, 16.3vw, 313px);
          border-radius: 50%;
          flex-shrink: 0;
          border: clamp(1px, 0.1vw, 2px) solid #4570b6;
          background: #fff;
          text-align: center;
          img {
            max-width: clamp(67px, 6.98vw, 134px);
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
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 300;
            line-height: 1.75;
            letter-spacing: clamp(2.5px, 0.26vw, 5px);
          }
        }

        & > .SuitableObject-Box-List-item:nth-child(1) {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          img {
            top: clamp(34px, 3.54vw, 68px);
          }
          p {
            top: clamp(95px, 9.9vw, 190px);
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(2) {
          position: absolute;
          left: clamp(120px, 12.5vw, 240px);
          top: clamp(61px, 6.35vw, 122px);
          z-index: 2;

          img {
            top: clamp(38.5px, 4.01vw, 77px);
            max-width: clamp(50px, 5.21vw, 100px);
          }
          p {
            top: clamp(100.5px, 10.47vw, 201px);
            white-space: nowrap;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(3) {
          position: absolute;
          right: clamp(120px, 12.5vw, 240px);
          top: clamp(61px, 6.35vw, 122px);
          z-index: 3;

          img {
            top: clamp(32px, 3.33vw, 64px);
            max-width: clamp(66px, 6.88vw, 132px);
          }
          p {
            top: clamp(95px, 9.9vw, 190px);
            letter-spacing: 0;
          }
        }
        & > .SuitableObject-Box-List-item:nth-child(4) {
          position: absolute;
          right: 0;
          top: 0px;
          z-index: 4;

          img {
            max-width: clamp(50.5px, 5.26vw, 101px);

            top: clamp(28px, 2.92vw, 56px);
          }
          p {
            top: clamp(99px, 10.31vw, 198px);
          }
        }
      }
    }
  }

  // 常见问题
  .question-mencare {
    margin: initial;
    margin-top: clamp(30px, 3.13vw, 60px);
    padding: 0;
    padding-bottom: 0;
    max-width: none;

    .publicTitle-mencare {
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: clamp(15px, 1.56vw, 30px);
      font-style: normal;
      font-weight: 900;
      line-height: 1;
    }
    .container {
      max-width: clamp(635px, 66.15vw, 1270px);
      padding: 0;
    }
  }
  .question-section {
    padding-top: clamp(30px, 3.13vw, 60px);
    padding-bottom: clamp(16px, 1.67vw, 32px);
    background: #e8e0d5;

    .pubilc-title {
      h2 {
        color: #005bab;

        &::after {
          background: #005bab;
        }
      }
    }

    &-Box {
      margin-top: clamp(28.5px, 2.97vw, 57px);
      padding-left: 0px;
      padding-right: 0px;

      .card {
        margin: clamp(6.5px, 0.68vw, 13px) 0;
        border-radius: 10px;
        &-header {
          .header-title {
            display: flex;
            align-items: center;
            span {
              display: inline-block;
            }

            svg {
              position: absolute;
              width: clamp(14px, 1.46vw, 28px);
              height: clamp(7px, 0.73vw, 14px);
              right: clamp(27px, 2.81vw, 54px);
              top: 50%;
              transform: translateY(-50%);
            }
          }

          .header-title[aria-expanded="false"] {
            color: #fff;
            font-family: "Noto Sans HK";
            font-size: clamp(15px, 1.56vw, 30px);
            font-style: normal;
            font-weight: 700;
            line-height: 166.667%;
            letter-spacing: clamp(3.75px, 0.39vw, 7.5px);
            border-radius: 10px;
            padding: clamp(6.5px, 0.68vw, 13px) clamp(15px, 1.56vw, 30px)
              clamp(6.5px, 0.68vw, 13px) clamp(26.5px, 2.76vw, 53px);
          }

          .card-body {
            padding: 0;

            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            span {
              box-sizing: content-box;

              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              padding: clamp(10px, 1.04vw, 20px) clamp(26.5px, 2.76vw, 53px)
                clamp(10px, 1.04vw, 20px) clamp(26.5px, 2.76vw, 53px);

              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: clamp(11.5px, 1.2vw, 23px);
              font-style: normal;
              font-weight: 300;
              line-height: 152.174%;
              letter-spacing: clamp(2.3px, 0.24vw, 4.6px);
            }
          }
        }
      }
    }
  }

  .card .header-title[aria-expanded="true"] {
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: clamp(15px, 1.56vw, 30px);
    font-style: normal;
    font-weight: 700;
    line-height: 166.667%;
    letter-spacing: clamp(3.75px, 0.39vw, 7.5px);
    padding: clamp(6.5px, 0.68vw, 13px) clamp(15px, 1.56vw, 30px)
      clamp(6.5px, 0.68vw, 13px) clamp(26.5px, 2.76vw, 53px);
    svg {
      transition: all 0.3s linear;
      transform: rotate(180deg);
      transform-origin: 50% 50%;
      top: 40%;
      path {
        stroke: white;
      }
    }
  }

  // 预约
  .clearAppointment {
    // margin-top: clamp(40px, 4.17vw, 80px);
    // margin-bottom: -175px;
    width: 100vw;
    height: clamp(213px, 22.19vw, 426px);
    background: url("https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/clearAppointment-mbPc.avif")
      no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .clearAppointment-Box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: clamp(18px, 1.88vw, 36px);
      & > .clearAppointment-Box-item:nth-child(1) {
        img {
          width: clamp(70.5px, 7.34vw, 141px);
          height: clamp(52px, 5.42vw, 104px);
          margin-bottom: clamp(18px, 1.88vw, 36px);
        }
      }
      & > .clearAppointment-Box-item:nth-child(2) {
        img {
          width: clamp(72.5px, 7.55vw, 145px);
          height: clamp(55px, 5.73vw, 110px);

          margin-bottom: clamp(15.5px, 1.61vw, 31px);
        }
      }
      .clearAppointment-Box-item:nth-child(1) {
        p {
          padding-right: clamp(10px, 1.04vw, 20px);
          padding-bottom: clamp(7.5px, 0.78vw, 15px);
        }
      }
      .clearAppointment-Box-item {
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: clamp(221px, 23.02vw, 442px);
        height: clamp(137px, 14.27vw, 274px);

        border-radius: clamp(15px, 1.56vw, 30px);
        border: clamp(0.5px, 0.05vw, 1px) solid #4570b6;
        background: #fff;
        box-shadow: clamp(5px, 0.52vw, 10px) clamp(5px, 0.52vw, 10px) 0px 0px
          #4570b6;
        p {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(18px, 1.88vw, 36px);
          font-style: normal;
          font-weight: 900;
          line-height: 69.444%;
        }

        &:hover {
          .clearAppointment-Box-item-icon {
            background: white;
            box-shadow: 0 clamp(1px, 0.1vw, 2px) clamp(2.5px, 0.26vw, 5px)
              rgba(0, 0, 0, 0.25);
            svg {
              path {
                stroke: #4570b6;
              }
            }
          }
        }

        .clearAppointment-Box-item-icon {
          position: absolute;
          bottom: clamp(12.5px, 1.3vw, 25px);
          right: clamp(12.5px, 1.3vw, 25px);

          width: clamp(35.5px, 3.7vw, 71px);
          height: clamp(35.5px, 3.7vw, 71px);
          border-radius: 50%;
          background: #4570b6;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          svg {
            width: clamp(38.5px, 4.01vw, 77px);
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
    background: #ffffff;
    z-index: 102;
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
        border-bottom: clamp(1px, 0.1vw, 2px) solid #4570b6;
      }

      .icl-Good-List-item {
        width: 16.5vw;
        height: 16.4vw;
        border-collapse: collapse;
        box-sizing: border-box;
        border: clamp(1px, 0.1vw, 2px) solid #4570b6;
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
  <div class="lasik" style="overflow-x: hidden">
    <HeadV2 />

    <!-- <div class="new-container container center-Banner">
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
    </div> -->

    <section class="ClearVisionBanner mt-22 md:mt-[216px]">
      <div class="new-container container">
        <div class="ClearVisionBanner-Box">
          <div class="ClearVisionBanner-Box-content">
            <div class="ClearVisionBanner-Box-content-title">
              <a
                href="/vision-correction-presbyopia#CorrectionProgram"
                @click.prevent="scrollTo('CorrectionProgram')"
                >CMER<br class="d-lg-none" />
                CLEAR-Vision</a
              >

              <h1>老花矯視</h1>
              <p>
                希瑪微笑矯視中心主要提供兩種<br
                  class="d-lg-none"
                />可矯正老花的矯視服務
              </p>
              <p>
                <a
                  href="/vision-correction-presbyopia#CorrectionProgram"
                  @click.prevent="scrollTo('CorrectionProgram')"
                  >CMER CLEAR-Vision</a
                >及<a
                  :href="!isMobile ? '/vision-correction-presbyopia#CorrectionProgram': '/vision-correction-presbyopia#CorrectionProgramTwo' "
                  @click.prevent="!isMobile?scrollTo('CorrectionProgram'):scrollTo('CorrectionProgramTwo')"
                  >ICL Viva V6</a
                >
              </p>
              <p>
                如你正受以下老花問題困擾，<br
                  class="d-lg-none"
                />可參考本頁有關老花矯視服務的詳盡介紹。
              </p>
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

              <p>
                <span><i>「</i>6<i>」</i>字同<i>「</i> 8<i>」</i>字</span>
                &nbsp; <span>不能夠一眼分清？</span>
              </p>
            </div>
          </div>
          <div class="ClearVisionBanner-Box-text">
            <span>頻繁眨眼/搓眼睛以嘗試改善焦點</span>
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
        <h2>什麼是老花？</h2>
        <div class="WhatLaoHuaBox-text">
          <p>
            隨著年紀增長，人們可能會遇到老花的問題，這是一種影響近視力的視力狀況。由於在眼睛中的晶狀體彈性降低，使眼睛調節焦距的能力下降，導致<span >看近處物體時會出現視覺模糊</span>。
          </p>
          <br />
          <p>
            老花並非疾病，而是隨著年齡增長而自然出現的現象。一般在40歲開始出現，到60歲時會達到較為穩定的狀態。為了改善老花帶來的視力問題，人們可以選擇配戴老花眼鏡、使用隱形眼鏡或接受老花矯視手術等方式，這些方法都可幫助改善近距離的視力，使日常生活中的閱讀和近距離工作變得更加容易，而進行<span id="CorrectionProgram">老花矯視更是受大眾歡迎的選項</span>。
          </p>
        </div>
      </div>
    </section>

    <div
      class="CorrectionProgram"
      
      ref="correctionProgram"
    >
      <div class="CorrectionProgram-Box">
        <div class="CorrectionProgram-Box-show" ref="boxShow">
          <img
            decoding="async"
            src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif"
            alt=""
            loading="lazy"
            width="100%"
            height="100%"
            srcset="
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif 400w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif 640w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif
            "
            sizes=" (max-width: 992px) 100vw,1216px"
          />
        </div>
        <div class="CorrectionProgram-Box-hide">
          <div class="CorrectionProgram-Box-hide-item">
            <div class="CorrectionProgram-Box-hide-item-top">
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-pcimg1.avif"
                alt=""
              />
            </div>
            <div class="CorrectionProgram-Box-hide-item-bottom">
              <div class="CorrectionProgram-Box-hide-item-top-text">
                <span class="CorrectionProgram-Box-hide-item-sub">適合</span>
                <p>• 39歲以上有老花</p>
                <p>• 同時有近視/遠視/散光問題</p> 
              </div>
              <h3>CMER CLEAR-Vision</h3>
              <p class="CorrectionProgram-Box-hide-item-bottom-text" id="CorrectionProgramTwo">
                坊間稱之為<span>人工晶體置換術</span>。透過更換人工晶體，致力為客人視野帶來煥然一新的感覺，
                <span >一次過解決近視、遠視、散光、老花</span
                >等問題。希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，度身訂造矯視方案；專業諮詢過後，眼科專科醫生按客人視力需求選取及植入合適之人工晶體，以替代原有已老化和混濁的晶體。
              </p>
            </div>
          </div>
          <div class="CorrectionProgram-Box-hide-item" >
            <div class="CorrectionProgram-Box-hide-item-top">
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-pcimg2.avif"
                alt=""
              />
            </div>
            <div class="CorrectionProgram-Box-hide-item-bottom">
              <div class="CorrectionProgram-Box-hide-item-top-text">
                <span class="CorrectionProgram-Box-hide-item-sub">適合</span>
                <p>• 39歲或以上有老花</p>
                <p>• 同時有近視/遠視問題</p>
                <p>• 未有白內障</p>
              </div>
              <h3>ICL Viva V6</h3>
              <p class="CorrectionProgram-Box-hide-item-bottom-text">
                是有晶體眼後房型植入式隱形眼鏡植入手術的一種，而ICL Viva (ICL
                V6)
                則是一種<span>擴展景深</span>，專為矯正老花而設的<span>植入式隱形眼鏡，適合未有白內障</span>，而正受近視及老花困擾的人士。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 按钮 -->
    <a
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
      class="publicBtn-booking"
    >
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


    <!-- start CMER CLEAR-Vision 老花矯視費用 -->
<div class="bg-[#F6FAFD] py-8 px-2  md:px-0 md:pb-20 md:pt-24 mb-8 mt-[50px] md:mb-22 md:mt-[110px]">
<div class="w-full  flex flex-col items-center mx-auto ">
    
    <h2 class="text-[#4A74B8] text-xl md:text-3xl font-black mb-6 md:mb-10 tracking-wider text-center">
CMER CLEAR-Vision 老花矯視費用
    </h2>
    <div class="w-full">
      <div class="space-y-7 lg:space-y-[60px]">
        <div>
          <div class="bg-[#8CB3F333] text-[#4570B6] text-base lg:text-3xl text-center font-bold rounded-xl py-[6px] md:py-[12px] mb-[20px] max-w-3xl md:max-w-lg mx-auto">人工晶體費用</div>
          <div class="space-y-2 md:space-y-4 max-w-[1187px] mx-auto">
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                單焦點人工晶體(單眼)<br /><span>不帶散光</span>
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$25,000- </span><span class="text-2xl md:text-5xl">港幣$28,000</span>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                單焦點人工晶體(單眼)<br /><span>帶散光</span>
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$30,000- </span><span class="text-2xl md:text-5xl">港幣$35,000</span>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                EDOF /多焦點人工晶體<br /><span>(單眼)不帶散光</span>
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$35,000- </span><span class="text-2xl md:text-5xl">港幣$45,000</span>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                EDOF /多焦點人工晶體<br /><span>(單眼)帶散光</span>
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$43,000- </span><span class="text-2xl md:text-5xl">港幣$51,000</span>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                術前檢查費用
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$680 </span><span class="text-2xl md:text-5xl"></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-[#8CB3F333] text-[#4570B6] text-base lg:text-3xl text-center font-bold rounded-xl py-[6px] md:py-[12px] mb-[20px] max-w-3xl md:max-w-lg mx-auto">Presbyond LBV費用</div>
          <div class="space-y-2 md:space-y-4 max-w-[1187px] mx-auto">
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                Presbyond LBV<br class="block sm:hidden"/>（雙眼）
              </div>
              <div
                class="text-[#F59E0B] -ml-[68px] sm:ml-0 text-right font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col"
              >
                <p class="text-2xl md:text-5xl pb-1 md:pb-3">港幣$58,000*</p>
                <p class="text-xs min-[360px]:text-sm md:text-xl">指定信用卡（東亞/渣打/滙豐）<br class="block sm:hidden"/>可享6/12/18/24/36個月免息分期</p>
                <p class="text-text text-xs min-[360px]:text-sm md:text-xl">EPS用戶港幣$47,500<sup>#</sup></p>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                術前檢查費用
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$100</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-[#8CB3F333] text-[#4570B6] text-base lg:text-3xl text-center font-bold rounded-xl py-[6px] md:py-[12px] mb-[20px] max-w-3xl md:max-w-lg mx-auto">ICL Viva V6費用</div>
          <div class="space-y-2 md:space-y-4 max-w-[1187px] mx-auto">
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                ICL Viva V6（雙眼）
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <p class="text-2xl md:text-5xl">港幣$80,000</p>
              </div>
            </div>
            <div
              class="bg-white border border-[#4570b6] rounded-2xl py-[20px] px-[8px] md:py-[36px] md:px-[28px] lg:py-[48px] lg:px-[36px] flex flex-row justify-between items-center transition-all group"
            >
              <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                術前檢查費用
              </div>
              <div
                class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform flex flex-col md:flex-row"
              >
                <span class="text-2xl md:text-5xl">港幣$500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 md:mt-12 flex flex-col items-center">
        <a href="/fee#table2" class=" md:w-auto bg-[#4570B6] text-white px-10 py-4 md:py-5 md:px-[100px] rounded-full text-2xl md:text-4xl font-bold flex items-center justify-center gap-3 ">
         查看矯視費用詳情
          <svg xmlns="http://www.w3.org/2000/svg"  class="h-[13px] w-[13px] md:h-[26px] md:w-[26px]" viewBox="0 0 34 34" fill="none">
  <path d="M3.18018 30.3632L29.8334 3.70996" stroke="white" stroke-width="6.36042" stroke-linecap="round"/>
  <path d="M7.06396 2.8623H30.742V25.7598" stroke="white" stroke-width="5.72438" stroke-linecap="round"/>
</svg>
        </a>
        <div class="mt-2 md:!mt-4 text-center font-light text-text text-sm md:text-2xl leading-relaxed">
          <p>此為香港價錢</p>
          <p>*矯視費用已包括術前檢查費用港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用）</p>
          <p>#免責聲明：受條款及細則約束。僅適用於以 EPS 全數支付之客戶。如有任何爭議，希瑪眼科將保留最終決定權。</p>
        </div>
      </div>
    </div>
  </div>
  </div>
    <!-- end CMER CLEAR-Vision 老花矯視費用 -->

    <!-- 人工晶體置換術的好處 -->
    <section class="icl-Good">
      <h2 class="icl-Good-title">人工晶體置換術的好處</h2>
      <div class="icl-Good-List">
        <div
          class="icl-Good-List-item"
          v-for="(item, index) in iclGoodList"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <h3 class="text-primary mt-3 lg:mt-7 font-bold leading-[0.35em] lg:leading-[0.25em] text-lg lg:text-2xl">{{ $t(item.title) }}</h3>
          <div v-if="!isMobile" class="mt-3">
            <p v-for="(i, idx) in item.text" :key="idx">{{ $t(i) }}</p>
          </div>
          <div v-else class="mt-3">
            <p v-for="(i, idx) in item.mbText" :key="idx">{{ $t(i) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 為何選擇希瑪? -->
    <!-- <section class="icl-WhatChoose">
      <h2 class="icl-WhatChoose-title">
        {{ $t("Correct.newIcl.section2.title") }}
      </h2>
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
    </section> -->

    <section class="visionBattle">
      <img
        class="visionBattle-Bg"
        decoding="async"
        src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif    400w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif    640w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="visionBattle-Box" id="visionBattle-Box-list">
        <h2>老花矯視技術好處對比</h2>
        <div class="visionBattle-Box-list">
          <div class="visionBattle-Box-list-item">
            <h3>CMER CLEAR-Vision</h3>
            <div class="visionBattle-Box-list-item-content">
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>不需依賴眼鏡/隱形眼鏡</span>
              </p>

                     <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>同時矯正老花及深近視</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>晶體物料具生物兼容性 </span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>預防白內障</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span
                  >根據個人眼睛實際狀況和生活需要，<br />度身訂造治療方案</span
                >
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>術後復原快: 最快術後一天可如常生活或工作</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>手術時間短: 大約15至20分鐘完成</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span
                  >有不同人工晶體可供選擇，包括多焦距人工<br />晶體、單焦距人工晶體、散光多焦距人工晶體等</span
                >
              </p>
            </div>
          </div>

          <div class="visionBattle-Box-list-item">
            <h3>ICL Viva V6</h3>
            <div class="visionBattle-Box-list-item-content">
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>不需依賴眼鏡/隱形眼鏡</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>同時矯正老花及1800度近視</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>無須切削角膜，不會導致乾眼症</span>
              </p>
              <p>
                <img
                  src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/success.svg"
                  alt=""
                />
                <span>有需要可逆轉</span>
              </p>
            </div>
            <div class="visionBattle-Box-list-item-VS">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="118"
                viewBox="0 0 70 118"
                fill="none"
              >
                <g clip-path="url(#clip0_12727_103)">
                  <path
                    d="M0 32.7129H13.2108L19.0441 62.3103L37.402 32.7129H50.098L22.4755 77.7147H9.77941L0 32.7129Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M70.0005 0L45.123 33.2321H49.7554L70.0005 0Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M2.89453 118L27.772 84.7678H23.1396L2.89453 118Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M65.7109 47.5981C65.7109 47.5981 51.1275 41.0209 41.005 46.0404C31.0218 50.9913 23.7945 65.451 36.8373 70.4957C37.2054 70.6363 37.5807 70.7481 37.9596 70.8491C39.2607 71.1916 42.6063 72.0895 45.6338 73.0379C49.494 74.2495 51.8495 74.217 50.9524 78.49C49.9444 83.2931 38.4279 81.3459 34.9965 80.2209C31.5651 79.0958 28.1338 76.0668 28.1338 76.0668L22.6436 85.6297C22.6436 85.6297 34.6534 93.2887 49.2367 89.9136C63.82 86.5384 64.1632 75.288 62.4475 70.5282C62.4475 70.5282 61.9113 68.4511 58.7695 66.3525C56.6999 64.9714 54.3123 64.1529 51.846 63.8788C48.4432 63.4966 41.895 62.2346 41.2623 58.1527C40.4045 52.614 50.863 53.0611 54.3015 54.0852C58.4406 55.3184 62.0436 56.7463 62.0436 56.7463L66.2256 47.9407L65.7109 47.5945V47.5981Z"
                    fill="#4570B6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12727_103">
                    <rect width="70" height="118" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="clearAppointment">
      <div class="clearAppointment-Box">
        <a href="/ophthalmicInfo/AppointForm" class="clearAppointment-Box-item">
          <img
            src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/laohua.svg"
            alt=""
          />
          <p>預約老花講座</p>

          <div class="clearAppointment-Box-item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
            >
              <path
                d="M3.57595 20.4719L40.719 20.472"
                stroke="white"
                stroke-width="6.26756"
                stroke-linecap="round"
              />
              <path
                d="M27.7695 37.561L44.268 21.0626L28.3134 5.10799"
                stroke="white"
                stroke-width="5.64081"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </a>

        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
          class="clearAppointment-Box-item"
        >
          <img
            src="https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/zixun.svg"
            alt=""
          />
          <p>預約諮詢</p>
          <div class="clearAppointment-Box-item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
            >
              <path
                d="M3.57595 20.4719L40.719 20.472"
                stroke="white"
                stroke-width="6.26756"
                stroke-linecap="round"
              />
              <path
                d="M27.7695 37.561L44.268 21.0626L28.3134 5.10799"
                stroke="white"
                stroke-width="5.64081"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </a>
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

      <img
        class="SuitableObject-bgLeft1"
        src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft1.svg"
        alt=""
      />
      <img
        class="SuitableObject-bgLeft2"
        src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft2.svg"
        alt=""
      />

      <div class="SuitableObject-Box container">
        <div class="SuitableObject-Box-title">
          <h2>老花矯視的合適對象</h2>
          <p>
            無論追求效率還是悠閒自在，<br
              class="d-none d-lg-block"
            />老花矯視都讓你清楚見證<br class="d-none d-lg-block" />往後每一刻。
          </p>
        </div>

        <div class="SuitableObject-Box-List">
          <div class="SuitableObject-Box-List-item">
            <img
              src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-10.svg"
              alt=""
            />
            <p>39歲以上</p>
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

    <!-- 按钮 -->

    <a href="/fee" class="publicBtn-booking">
      <span> 了解老花矯視價格 </span>
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

    <!-- 常见问题 -->

    <section class="question-mencare">
      <div class="container">
        <h2 class="publicTitle-mencare">老花矯視的常見問題</h2>
        <div class="question-section-Box">
          <div id="accordion">
            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseOne"
                  class="collapse show"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      醫生會為你進行全面的檢查與溝通，來評估何種老花矯視是否適合你。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseOne"
                  aria-expanded="true"
                >
                  <!-- <span> Q1 </span> -->
                  <span> 如何判斷哪種老花矯視方式適合我？ </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseTwo"
                  class="collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      老花是眼睛機能衰退的自然現象，由於眼睛晶體逐漸硬化及眼內肌肉老化令晶體的變焦功能衰退所致，令人看近物時難以聚焦，模糊視野。一般人約在40至50歲左右就會開始出現老花症狀，故有近視的人也會有老花。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseTwo"
                  aria-expanded="false"
                >
                  <!-- <span> Q2 </span> -->
                  <span> 有近視就不會出現老花？</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseThree"
                  class="collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      三焦晶體主要用於40至50歲老花眼人群。如客人覺得老花眼已經影響正常生活或閱讀，需配戴老花眼鏡，此時，三焦晶體便是矯正遠中近視力的不錯選擇。而最合適自己的老花矯視方案，還是需由醫生進行全面檢查後制定。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseThree"
                  aria-expanded="false"
                >
                  <span>何時做三焦晶體植入術比較好？</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseFour"
                  class="collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      在光學上，老花是遠視的一種，但它們的成因不同。遠視主要成因是眼球過短，令景物聚焦了在視網膜後面。至於老花，則是由於晶體退化變硬，失去彈性及連繫著晶狀體的韌帶老化，令晶體的偏置功能下降，使看近物時難以聚焦，出現模糊感。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseFour"
                  aria-expanded="false"
                >
                  <span>老花等於遠視嗎？</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseFive"
                  class="collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      現時尚未有有效的方法去防止其出現或惡化，但保持良好的用眼習慣有助減輕老花的徵狀和所造成的困擾。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseFive"
                  aria-expanded="false"
                >
                  <span>老花可以預防嗎？</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="card collapseActive expanded">
              <div class="card-header d-flex flex-column-reverse">
                <div
                  id="collapseSix"
                  class="collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body">
                    <span class="text-justify">
                      治療完成後第二天你就可以獲得良好的近距離視力，不戴老花鏡也可以輕鬆閱讀。中、遠距離的視力恢復通常在術後一週達到。之後經過數周，你的視力將會進一步改善，並逐步適應多焦視覺狀態。
                    </span>
                  </div>
                </div>
                <a
                  data-bs-toggle="collapse"
                  id="toCSC"
                  class="d-flex header-title position-relative"
                  href="#collapseSix"
                  aria-expanded="false"
                >
                  <span>術後視力多久可以恢復？</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 28 14"
                    fill="none"
                  >
                    <path
                      d="M26.7441 1L13.879 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1L13.8652 12.0273"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
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

    <section class="CaseSharingV2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M1 0.77832L19.4751 17.9337"
            stroke="#4570B6"
            stroke-width="1.97947"
          />
        </svg>
        <span> 同朋友分享一下啦！ </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M20 0.77832L1.52493 17.9337"
            stroke="#4570B6"
            stroke-width="1.97947"
          />
        </svg>
      </div>
      <div>
        <a id="shareCurrentPageIcl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
          >
            <path
              d="M0.28309 11.3923C0.282266 9.41405 1.74115 7.78777 3.63606 7.6221C4.78751 7.52154 5.78565 7.88504 6.60988 8.69859C6.74258 8.82964 6.83243 8.84118 6.99233 8.74475C8.88558 7.59654 10.7838 6.45411 12.6836 5.31745C12.832 5.22843 12.8518 5.15177 12.799 4.99022C12.0968 2.83806 13.5441 0.523527 15.7852 0.202064C17.9084 -0.10209 19.8083 1.36263 20.0539 3.49335C20.2781 5.44027 18.853 7.28415 16.9053 7.55945C15.6327 7.73914 14.553 7.34679 13.6604 6.43186C13.5647 6.33377 13.4996 6.32058 13.3826 6.39147C11.463 7.55039 9.54167 8.70601 7.61957 9.85915C7.50665 9.92674 7.47203 9.99351 7.51819 10.1237C7.75227 10.7864 7.79595 11.4632 7.61627 12.1457C7.57423 12.3064 7.63028 12.3814 7.7671 12.4515C9.44029 13.3046 11.1118 14.1618 12.7842 15.019C12.9185 15.0875 13.0554 15.1534 13.1831 15.2317C13.3101 15.3092 13.3966 15.2977 13.4963 15.1765C14.0972 14.4487 14.8662 14.0134 15.7992 13.8626C17.2161 13.6335 18.7129 14.311 19.4811 15.5359C20.888 17.7779 19.6467 20.6776 17.0545 21.2035C15.0006 21.6206 12.9688 20.1831 12.6663 18.1018C12.5996 17.6419 12.5971 17.1844 12.7347 16.7376C12.7982 16.5324 12.7413 16.4401 12.5518 16.3436C10.7607 15.4345 8.9746 14.5154 7.18932 13.5939C7.05991 13.5271 6.98491 13.5436 6.89424 13.6541C6.06342 14.663 4.98945 15.1147 3.68799 15.0454C2.07332 14.9589 0.560032 13.565 0.328423 11.9495C0.298751 11.7451 0.275672 11.5415 0.283915 11.3915L0.28309 11.3923Z"
              fill="#4570B6"
            />
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_10302_1589)">
              <path
                d="M9.10331 5.96582C10.8881 5.96788 12.1819 6.48567 13.3123 7.46166C13.4906 7.61577 13.6719 7.76576 13.8462 7.92295C14.1998 8.2404 14.2685 8.71402 13.9826 9.09722C13.644 9.55132 13.2864 9.99206 12.9169 10.4205C12.6102 10.7759 12.1381 10.7985 11.7725 10.5016C11.5445 10.3167 11.3283 10.1153 11.1003 9.92939C10.0614 9.08489 8.5107 9.12599 7.55356 10.0701C6.53466 11.0759 5.5337 12.1043 4.56062 13.1574C3.81463 13.9649 3.6493 14.9511 3.98793 15.998C4.32657 17.0449 5.06658 17.6788 6.11037 17.8699C6.97788 18.0281 7.77666 17.8031 8.43998 17.1744C8.65412 16.972 8.85232 16.7521 9.06148 16.5446C9.44493 16.1655 9.89611 16.1501 10.2826 16.5251C10.663 16.8949 11.0325 17.2771 11.3921 17.6685C11.7078 18.0127 11.7218 18.4883 11.423 18.8356C10.3951 20.0335 9.17403 20.8883 7.61033 21.1821C4.42019 21.781 1.21312 19.4828 0.680264 16.184C0.335653 14.0481 0.911332 12.204 2.37244 10.6598C3.2997 9.67974 4.24091 8.71299 5.19008 7.75549C6.35838 6.57607 7.76769 5.98123 9.10231 5.96685L9.10331 5.96582Z"
                fill="#4570B6"
              />
              <path
                d="M12.3093 15.4664C10.7307 15.4592 9.43492 14.9445 8.30647 13.9664C8.13516 13.8175 7.96186 13.6716 7.79055 13.5216C7.42104 13.1969 7.34734 12.7213 7.63916 12.3309C7.97879 11.8768 8.33635 11.4371 8.70487 11.0087C9.00964 10.6542 9.48373 10.6337 9.84925 10.9306C10.0644 11.1052 10.2666 11.2963 10.4837 11.4679C11.651 12.3915 13.1539 12.3021 14.1977 11.2388C15.131 10.2885 16.0602 9.33406 16.9785 8.36834C17.7345 7.57316 17.9635 6.61155 17.6667 5.55131C17.364 4.47258 16.6429 3.79863 15.5782 3.57672C14.6818 3.38974 13.8641 3.61165 13.1768 4.25889C12.9627 4.46025 12.7655 4.68216 12.5553 4.88866C12.1729 5.26467 11.7177 5.27906 11.3333 4.9051C10.9528 4.53525 10.5833 4.15307 10.2247 3.76061C9.91698 3.42467 9.89407 2.95105 10.1819 2.61408C11.147 1.48398 12.2824 0.636403 13.7426 0.306619C17.2036 -0.474177 20.5641 1.973 20.9874 5.60473C21.2095 7.51152 20.6826 9.19331 19.4117 10.5844C18.348 11.7484 17.2644 12.898 16.109 13.9664C15.0085 14.9846 13.6858 15.451 12.3083 15.4654L12.3093 15.4664Z"
                fill="#4570B6"
              />
            </g>
            <defs>
              <clipPath id="clip0_10302_1589">
                <rect
                  width="20.4545"
                  height="21.1144"
                  fill="white"
                  transform="translate(0.583496 0.162109)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>
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
function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
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
        {
          rel: "stylesheet",
          href: "/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "/bootstrap.min.js",
          async: true,
        },
      ],
    };
  },
  data() {
    return {
      lockScroll: false,
      ticking: false,
      animationOffset: 0,
      maxOffset: 100,
      scrollSensitivity: 2,
      targetTop: 0,
      isAnimating: false,

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
          title: "Correct.newIcl.section3.text3_newtitle1",
          text: ["不需依賴眼鏡/", "隱形眼鏡"],
          mbText: ["不需依賴眼鏡/", "隱形眼鏡"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-4.svg",
          title: "Correct.newIcl.section3.text4_title1_clear",
          text: ["人工晶體物料與", "眼球兼容"],
          mbText: ["人工晶體物料與", "眼球兼容"],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-5.svg",
          title: "Correct.newIcl.section3.text5_title1_clear",
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

  watch: {
    "$route.hash": {
      immediate: true,
      handler(newHash) {
        this.handleHashScroll();
      },
    },
  },

  methods: {
    handleHashScroll() {
      const hash = this.$route.hash;
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // 更新 URL 的 hash（不刷新页面）
      this.$router.replace({ hash: `#${id}` });
    },

    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    scrollToTopV2() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    initPcScrollHandler() {
      const section = this.$refs.correctionProgram;
      if (!section) return;

      // 获取模块距离顶部的距离
      this.targetTop = section.offsetTop;

      // 计算触发点（比如模块顶部还剩 200px 时开始拦截）
      const triggerPoint = this.targetTop - window.innerHeight + 600;
      console.log("triggerPoint" + triggerPoint);

      const throttledScroll = throttle(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (
          !this.isAnimating &&
          scrollTop >= triggerPoint &&
          scrollTop < this.targetTop
        ) {
          // this.lockScroll = true;
          this.isAnimating = true;
          this.animateBoxShow();
        }

        if (scrollTop >= this.targetTop) {
          // 模块已经到达顶部，解锁滚动
          // this.lockScroll = false;
          this.isAnimating = false;
        }

        // if (this.lockScroll && scrollTop >= this.targetTop) {
        //   // 模块已经到达顶部，解锁滚动
        //   this.lockScroll = false;
        //   this.isAnimating = false;
        // }
      }, 50);

      window.addEventListener("scroll", throttledScroll);

      // 阻止原生滚动（关键）
      // window.addEventListener(
      //   "wheel",
      //   (e) => {
      //     if (this.lockScroll) {
      //       e.preventDefault();
      //     }
      //   },
      //   { passive: false }
      // );

      // 同样阻止触摸板滚动
      // window.addEventListener(
      //   "touchmove",
      //   (e) => {
      //     if (this.lockScroll) {
      //       e.preventDefault();
      //     }
      //   },
      //   { passive: false }
      // );
    },

    animateBoxShow() {
      const showEl = this.$refs.boxShow;
      const animate = () => {
        if (this.animationOffset >= this.maxOffset) return;

        this.animationOffset += Math.min(
          this.scrollSensitivity,
          this.maxOffset - this.animationOffset
        );

        this.updateAnimation(showEl);

        if (this.animationOffset < this.maxOffset) {
          requestAnimationFrame(animate);
        } else {
          // 动画结束，解锁页面滚动
          //this.lockScroll = false;
        }
      };

      requestAnimationFrame(animate);
    },

    updateAnimation(showEl) {
      if (this.ticking) return;
      requestAnimationFrame(() => {
        showEl.style.transform = `translateY(-${this.animationOffset}%)`;
        this.ticking = false;
      });
      this.ticking = true;
    },

    initMobileScrollHandler() {
      const section = this.$refs.correctionProgram;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startMobileAnimation();
              observer.unobserve(section); // 只执行一次
            }
          });
        },
        { threshold: [0.1] }
      );

      observer.observe(section);
    },

    startMobileAnimation() {
      const showEl = this.$refs.boxShow;
      setTimeout(() => {
        showEl.style.transform = "translateY(-100%)";
      }, 1000);
    },
  },

  beforeUnmount() {
    // 清理 scroll 监听器
    if (this.throttledCheck) {
      window.removeEventListener("scroll", this.throttledCheck);
    }
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleHashScroll();
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    if (this.isMobile) {
      this.initMobileScrollHandler();
    } else {
      this.initPcScrollHandler();
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


