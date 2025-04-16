<style >
body {
  overflow-x: hidden;
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
    display: flex;
    justify-content: center;
  }
  .md-justcent {
    justify-content: center;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/a5d210497d854b68.webp")
      no-repeat;
    background-size: cover;
    height: 32.08vw;
    width: 100%;
    max-width: 1150px;
    max-height: 556px;
    background-position: top;
    border-radius: 55px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    padding-bottom: 7%;
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans TC";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #fff;
      font-family: "Noto Sans TC";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
    }
  }
  :deep(.xtra) {
    .lists-box {
      & > div {
        & > div:nth-child(1) {
          & > h3 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
.laser_technology {
  margin-top: 85px;
  &-in {
    margin: 45px auto 0;
    width: 100%;
    max-width: 941px;
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
  }
}
.whatsappBtn {
  display: flex;
  justify-content: center;
  margin: 53px 0 63px;
  & > a {
    border-radius: 50px;
    padding: 15px 50px;
    background: #a5e1d7;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 80% */
    letter-spacing: 7.5px;
  }
}
:deep(.mt-20) {
  margin-top: 0;
}
:deep(.share-img) {
  margin-top: 0;
}
i {
  font-style: normal;
}
.characteristic {
  width: 100%;
  // max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding: 70px 0 100px;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 0;
    padding-bottom: 200%;
    // background: rgba(199, 232, 239, 0.2);
    // border-radius: 50%/40%;
    background: url(https://static.cmereye.com/imgs/2024/05/e102853c2e3b96d4.png)
      no-repeat;
    background-size: 100% 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  &-text {
    max-width: 960px;
    margin: 58px auto 0;
    p {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
    }
  }
  &-lists {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-in {
      margin-top: 85px;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .round {
        width: 260px;
        height: 260px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        img {
          max-width: 125px;
          max-height: 86px;
          margin-bottom: 29px;
        }
        h4 {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px; /* 120% */
          letter-spacing: 8.75px;
          height: 90px;
          width: 170px;
        }
      }
      .text {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 23px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 152.174% */
        letter-spacing: 6.9px;
        margin-top: 20px;
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/1e78ab899188f6b4.webp")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px;
    border-radius: 44px;
    margin-top: 80px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    & > p {
      max-width: 130px;
    }

    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 169.167% */
      letter-spacing: 3.5px;
    }
    & > p:nth-child(2) {
      width: 110px;
      color: #fff;
      font-family: "Noto Sans TC";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.3px;
    }
  }
  .laser_technology {
    margin-top: 50px;
    &-in {
      font-size: 15px;
      font-weight: 300;
      line-height: 30px; /* 200% */
      letter-spacing: 4.5px;
      margin-top: 28px;
      padding: 0 25px;
    }
  }
  .characteristic {
    padding-bottom: 70px;
    &::before {
      padding-bottom: 500%;
      border-radius: 50%/20%;
    }
    &-text {
      margin: 41px auto 0;
      padding: 0 20px;
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 30px; /* 200% */
        letter-spacing: 4.5px;
      }
    }
    &-lists {
      padding: 0 20px;
      &-in {
        margin-top: 46px;
        width: 50%;
        .round {
          width: 156px;
          height: 156px;
          img {
            max-width: 73px;
            max-height: 50px;
            margin-bottom: 15px;
          }
          h4 {
            font-size: 18px;
            font-weight: 400;
            line-height: 20px; /* 111.111% */
            letter-spacing: 3.6px;
            width: 114px;
            height: 60px;
          }
        }
        .text {
          font-size: 15px;
          font-weight: 300;
          line-height: 22px; /* 146.667% */
          letter-spacing: 2.25px;
          width: 90%;
          max-width: 130px;
          & > P {
            display: inline-block;
          }
        }
        &:last-child {
          .text {
            width: 100%;
            max-width: 100%;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > p {
          }
        }
      }
    }
  }
  :deep(.xtra) {
    .lists-box {
      & > div {
        & > div:nth-child(2) {
          font-size: 14px !important;
        }
      }
    }
  }
  .whatsappBtn {
    margin: 36px auto;
    & > a {
      padding: 10px 30px;
      font-size: 20px;
      font-weight: 700;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
    }
  }
  :deep(.film-top) {
    margin-top: 40px;
  }
  :deep(.title-content) {
    font-weight: 400;
  }
}

.d-none {
  display: none;
}

@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 1140px) {
  .top-btnV2 {
    display: none;
  }
  .smile-NewBanner {
    padding: 0 15px;
    margin-top: 80px;
    height: 203px;
    position: relative;
    img {
      width: 200px;
      position: absolute;
      top: -59px;
      right: 80px;
      // z-index: 95;
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: 58px;
      left: 28px;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 45.469px;
        font-style: normal;
        font-weight: 700;
        line-height: 49.743px;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 24.55px;
        font-style: normal;
        font-weight: 400;
        line-height: 26.858px; /* 109.4% */
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 9.82px;
        font-style: normal;
        font-weight: 400;
        line-height: 21.358px; /* 217.5% */
        letter-spacing: 0.295px;
      }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        padding: 5px 20px 0px 10px;
        display: inline-block;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 5px 20px 11px 10px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px;
      }
    }
  }

  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0 15px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: 28px;
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 3.6;
        letter-spacing: 0.36px;
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
    .smile-newCenter-content {
      overflow: hidden;
      padding-top: 62px;
      padding-bottom: 72px;
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-mobile-center.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      &::after {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        content: "";
        width: 860px;
        height: 130%;
        background: url(https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-mobile-centerTwo2.avif);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
      }
      .smile-newCenter-content-text {
        position: relative;
        z-index: 2;
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC" !important;
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 18.34px; /* 91.702% */
          text-align: center;
          margin-bottom: 13px;
        }
        .smile-newCenter-content-text-p {
          max-width: 251px;
          margin: 0 auto;
          p {
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC" !important;
            font-size: 16px clamp(14px, 4vw, 16px);
            font-style: normal;
            font-weight: 300;
            line-height: 20px; /* 125% */
            letter-spacing: 4.8px;
            span {
              color: #4570b6;
              font-family: "Noto Sans TC" !important;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: 4.8px;
            }
          }
        }
      }
    }
  }

  .icl-WhatChoose {
    padding: 40px 15px;
    .icl-WhatChoose-title {
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: 24.567px;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      max-width: 100vw;
      margin-top: 30px;

      .icl-WhatChoose-content-one-img {
      }
      .icl-WhatChoose-content-one-text {
        margin: 0 auto;
        max-width: 100vw;
        margin-top: 30px;
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 30px;
          letter-spacing: 4.8px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 4.8px;
          }
        }
      }
    }

    .icl-WhatChoose-content-two {
      margin: 0 auto;
      max-width: 100vw;
      & > div {
        margin-top: 30px;
        border-radius: 7.168px;
        background: #f4fafc;
        padding: 27px 32px 27px 34px;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 24px;
          font-style: normal;
          font-weight: 900;
          line-height: 21.505px; /* 89.603% */
          margin-bottom: 15px;
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 25.089px; /* 156.805% */
          letter-spacing: 4.8px;
        }
      }
    }
  }
  .icl-btn {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 6px 32px;
    border-radius: 100px;
    border: 2px solid #4570b6;
    background: #4570b6;
    color: #fff;
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 175% */
    letter-spacing: 1px;
    svg {
      width: 17px;
      height: 17px;
      margin-left: 9px;
    }
  }

  .new-pubile-title {
    span {
      font-family: "Poppins", sans-serif;
    }
    color: #4570b6;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 26px;
    text-align: center;
    margin: 0px auto 30px;
  }
  // icl好处
  .icl-Good {
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
          line-height: 1.125; /* 112.5% */
        }
      }
    }
  }

  // tese
  .icl-peculiarity {
    padding-top: 40px;
    padding-bottom: 40px;
    background: #f4fafc;
    position: relative;
    z-index: 2;
    .icl-peculiarity-text {
      padding: 0 15px;
      color: #6d6e71;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.875;
      letter-spacing: 3.2px;
    }
    .icl-peculiarity-list {
      margin-top: 30px;
      display: flex;
      justify-content: start;
      overflow-x: auto;
      overflow-y: hidden;

      & > .icl-peculiarity-list-item:nth-child(1) {
        transform: rotate(20deg);
        margin-right: 55px;
        margin-left: 55px;
      }
      & > .icl-peculiarity-list-item:nth-child(1):hover {
        transform: rotate(0deg);
        margin-right: 0px;
        margin-left: 0;
      }

      .icl-peculiarity-list-item {
        &:hover {
          background: #4570b6;
          h4,
          .icl-peculiarity-list-item-footer {
            color: #fff;
          }
          .icl-peculiarity-list-item-text {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding-top: 23px;
          }

          .icl-peculiarity-list-item-text-title {
            display: none;
            writing-mode: none !important;
          }
          .icl-peculiarity-list-item-text-show {
            display: block !important;
          }
        }
        transition: all 0.3s ease;

        border-radius: 11.591px;
        border: 1.159px solid #4570b6;
        background: #fff;
        padding: 12px 11px 10px;

        width: fit-content;
        h4,
        .icl-peculiarity-list-item-footer {
          color: #4570b6;
          text-align: center;
          font-family: "Poppins", sans-serif;
          font-size: 13.329px;
          font-style: normal;
          font-weight: 700;
          line-height: 1.26087; /* 126.087% */
        }
        .icl-peculiarity-list-item-text {
          margin-top: 6px;
          margin-bottom: 13px;
          width: 100%;

          height: 260px;
          border-top: 1px solid #4570b6;
          border-bottom: 1px solid #4570b6;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 58px;

          .icl-peculiarity-list-item-text-title {
            writing-mode: vertical-rl;
            text-orientation: upright;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 14.489px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 5.071px;
          }

          .icl-peculiarity-list-item-text-show {
            display: none;
            .icl-peculiarity-list-item-text-show-box {
              border-radius: 11px;
              text-align: center;
              padding-top: 27px;
              padding-bottom: 16px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              width: 133px;
              height: 133px;
              background: white;
              svg,
              img {
                width: 75px;
              }
              .icl-peculiarity-list-item-box-title {
                p {
                  color: #4570b6;
                  text-align: center;
                  leading-trim: both;
                  text-edge: cap;
                  font-family: "Noto Sans TC";
                  font-size: 14.489px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 1.2;
                  letter-spacing: 5.071px;
                }
              }
            }
            .icl-peculiarity-list-item-text-des {
              margin-top: 7px;
              text-align: center;
              p {
                white-space: nowrap;
                color: #fff;
                text-align: center;
                font-family: "Noto Sans TC";
                font-size: 13.329px;
                font-style: normal;
                font-weight: 300;
                line-height: 1.52;
                letter-spacing: 3.999px;
              }
            }
          }
        }
      }
    }
  }

  .icl-introVedio {
    //     background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg.webp")
    //       no-repeat;
    //     background-size: cover;
    //  background-position: -30px -86px;

    padding: 40px 15px 0px;
    .icl-introVedio-intro {
      padding-bottom: 66px;
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 12px;
        position: relative;

        &::before {
          content: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg.webp");
          position: absolute;
          right: -268px;
          top: -427px;
          scale: 0.5;
          pointer-events: none;
        }

        &::after {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg2.png")
            no-repeat;
          background-size: 100%;
          background-position: center;
          content: "";
          position: absolute;
          top: -134px;
          left: -50px;

          width: 241.084px;
          height: 238.646px;

          flex-shrink: 0;
          pointer-events: none;
        }

        .steps {
          width: 25px;

          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 16.994px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          div {
            font-family: "Poppins", sans-serif;
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 12px;
            height: 48px;
            padding-right: 6px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 16.994px;
              font-style: normal;
              font-weight: 700;
              line-height: 13.416px;
              color: #4570b6;

              border-right: 2px solid #4570b6;
            }
          }
        }

        .content-area {
          position: relative;

          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.06;
            }
            svg {
              position: absolute;
              top: 20px;
              left: 110px;
            }
          }

          .content-area-img {
            max-width: 290px;
            position: relative;
            z-index: 2;
            img {
              max-width: 100%;
              height: auto;
              margin-bottom: 10px;
            }
            .content-area-text {
              position: absolute;
              bottom: -66px;
              left: 50%;
              transform: translateX(-50%);
              width: 266px;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 18px; /* 112.5% */
              letter-spacing: 2.4px;
            }
          }
        }
      }
    }

    // vedio
    .icl-introVedio-vedio {
      padding-top: 40px;
      padding-bottom: 40px;
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-vedio-mobile-bg2.webp")
        no-repeat;
      background-size: 100%;

      .icl-introVedio-vedio-list {
        display: flex;
        position: relative;
        z-index: 2;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        & > div {
          max-width: 360px;
          height: 203px;
        }
      }
    }
  }

  .SuitableObject {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    .SuitableObject-speical {
      width: 33.2%;
      display: flex;
      justify-items: center;
      align-items: center;
      border: 1px solid rgba(69, 112, 182, 0.5);
      span {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans TC" !important;
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.15;
        display: block;
        margin: 0 auto;
      }
    }

    & > .SuitableObject-item:nth-child(1) {
      &::after {
        content: "";
        background-image: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/hsdx-bgxing1.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 16px;
        height: 10px;
        position: absolute;
        left: 30px;
        top: 14px;
      }
    }
    & > .SuitableObject-item:nth-child(3) {
      &::after {
        // content: "ICL矯視";
        position: absolute;
        top: 5px;
        right: 15px;
        width: auto;
        height: none;
        background: none;

        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 2.78;
      }
    }
    & > .SuitableObject-item:nth-child(4),
    & > .SuitableObject-item:nth-child(5) {
      padding-top: 126px;
    }
    .SuitableObject-item {
      width: 33.2%;
      height: 261px;
      border: 0.599px solid rgba(255, 255, 255, 0.5);
      background: #4570b6;
      position: relative;
      display: flex;
      padding-top: 174px;
      justify-content: center;
      padding-bottom: 25px;
      overflow: hidden;

      &:hover {
        &::before {
          content: "";
        }
        .SuitableObject-image {
          opacity: 0.5;
        }
      }
      &::before {
        content: attr(data-number);
        font-size: 100px;
        color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: -8px;
        left: 50%;
        opacity: 1;
        transform: translateX(-50%);
      }
      .SuitableObject-description {
        color: #fff;
        text-align: justify;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.64;
        letter-spacing: 2.1px;
        opacity: 1;
        position: relative;
        z-index: 2;
      }

      .SuitableObject-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        object-fit: cover;

        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }

  // 检查项目
  .icl-CheckObject {
    margin-top: 40px;
    padding: 0 15px;
    .CheckObject {
      margin: 0 auto;
      border-radius: 13.273px;
      border: 1px solid #4570b6;
      background: #fff;
      padding: 0 27px;
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.29;
        text-align: center;
        padding-top: 26px;
        padding-bottom: 20px;
      }
      ul {
        list-style: none;
        padding-top: 13px;
        padding-bottom: 13px;
        display: flex;
        flex-direction: column;
        border-top: 1.327px solid #4570b6;
        & > li:nth-child(1) .CheckObject-description {
          color: #4570b6;
          font-weight: 900;
        }
        li {
          display: flex;
          align-items: flex-start;
          .CheckObject-number {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 2.23;
            margin-right: 5px;
          }

          .CheckObject-description {
            white-space: nowrap;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: 35.838px;
          }

          .CheckObject-new {
            padding: 0 6px;
            margin-left: 10px;
            background: #456db6;
            display: inline-block;
            color: #fff;
            font-family: "Noto Sans TC";
            font-size: 15.264px;
            font-style: normal;
            font-weight: 700;
            line-height: 2.34;
          }
        }
      }
    }
  }

  // 案例分享
  .CaseSharing {
    margin-top: 40px;
    margin-bottom: 30px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-mobile-share.avif")
      no-repeat;
    background-size: 100%;
    background-position: center center;
    padding: 86px 0 110px;
    position: relative;

    .CaseSharing-Box {
      position: relative;
      h3 {
        position: absolute;
        top: -40px;
        right: 30px;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px;
      }
      .CaseSharing-list::-webkit-scrollbar {
        display: none;
      }
      .CaseSharing-list {
        display: flex;

        // justify-content: center;
        gap: 13.26px;
        width: 100vw;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        & > .CaseSharing-list-item:nth-child(1) {
          padding-top: 43px;
        }
        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 0px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 42px;
        }
        & > .CaseSharing-list-item:nth-child(4) {
          padding-top: 170px;
        }
        .CaseSharing-list-item {
          a {
            display: block;
            width: 175px;
            box-shadow: -1.768px 1.768px 0px 0px #4570b6;

            position: relative;
            margin-bottom: 13.26px;
            span {
              position: absolute;
              left: 8px;
              bottom: 8px;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 13.263px;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 4px 6px;
            }
            i {
              position: absolute;
              right: 8px;
              bottom: 8px;
              width: 23px;
              height: 23px;
              border-radius: 2.21px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 11px;
              }
            }
          }
        }
      }
    }

    // .CaseSharing-btn {
    //   width: 114.287px;
    //   height: 113.922px;

    //   position: absolute;
    //   bottom: 0px;
    //   right: 0;
    // }

    // 按钮
    .CaseSharing-btn {
      position: absolute;
      background: url("https://statichk.cmermedical.com/smile/smileproV2/icl-share-btn.png");
      background-repeat: no-repeat;
      background-position: -41px -17px;
      width: 116.287px;
      height: 120.922px;
      border-radius: 50%;
      top: 0;
      right: 0;
      p {
        margin-top: 30px;
        color: #fff;
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 13.93px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25;
      }
    }
  }

  .latestNews {
    margin-bottom: 40px;
    background: url("https://statichk.cmermedical.com/smile/smileproV2/icl-newdongtai-mobile.jpg")
      no-repeat;
    background-size: cover;
    position: relative;
    height: 209vw;
    // padding-top: 130px;
    padding-top: 33.33vw;

    .top-btnV2new {
      position: absolute;
      bottom: 20px;
      right: 15px;
    }

    .latestNews-tip {
      position: absolute;
      // top: 55px;
      top: 14.1vw;
      left: 0;
      background: #c13550;
      color: #fff;
      font-family: "Noto Sans TC";
      // font-size: 20px;
      font-size: 5.12vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.95;
      padding: 5px 24px;
    }

    .latestNews-in {
      // width: 252px;
      width: 64.61vw;
      margin: 0 auto;
      .latestNews-title {
        color: #c13550;
        font-family: "Poppins", sans-serif;
        // font-size: 20.81px;
        font-size: 5.12vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.58;
        i {
          font-style: normal;
          display: block;
        }
        span {
          margin-left: 26px;
          margin-right: 4px;
          display: inline-block;
          color: #fff;
          font-family: "Poppins", sans-serif;
          // font-size: 20.81px;
          font-size: 5.1vw;
          font-style: normal;
          font-weight: 700;
          // line-height: 33px;
          line-height: 1.65;
          background: #c13550;
          padding: 0 5px;
        }
      }
      p {
        margin-top: 9px;
        color: #6d6e71;
        text-align: justify;
        font-family: "Noto Sans TC";
        // font-size: 16px;
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.48;
        letter-spacing: 3.2px;
      }
    }

    .latestNews-btn {
      border: 1px solid #c13550;
      border-radius: 50%;
      // width: 172px;
      // height: 172px;

      width: 44.1vw;
      height: 44.1vw;
      margin-top: 24px;
      margin-left: auto;
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 17px;
      svg {
        // width: 19px;
        // height: 19px;
        width: 4.84vw;
        height: 4.87vw;
      }

      span {
        color: #c13550;
        text-align: center;
        font-family: "Noto Sans TC";
        // font-size: 18.133px;
        font-size: 4.6vw;
        font-style: normal;
        font-weight: 900;
        line-height: 0.71;
      }
    }
  }

  .CaseSharingV2 {
    width: fit-content;

    margin: 0 auto;
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
  .smile-NewBanner {
    padding: 0 15px;
    margin-top: 20.51vw;
    height: 52.5vw;
    position: relative;
    img {
      width: 51.28vw;
      position: absolute;

      top: -15.12vw;
      right: 20.51vw;
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: 14.87vw;
      left: 7.179vw;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 11.53vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 6.29vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 2.517vw;
        font-style: normal;
        font-weight: 400;
        line-height: 2.175;
        letter-spacing: 0.295px;
      }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 5px 10px 0px 10px;
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 2;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 5px 10px 11px 10px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 2;
      }
    }
  }

  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0 15px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: 28px;
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 3.6;
        letter-spacing: 0.36px;
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
    .smile-newCenter-content {
      overflow: hidden;
      padding-top: 15.89vw;
      padding-bottom: 18.46vw;
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-mobile-center.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      &::after {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        content: "";
        width: 220.5vw;
        height: 130%;
        background: url(https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-mobile-centerTwo2.avif);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
      }
      .smile-newCenter-content-text {
        position: relative;
        z-index: 2;
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC" !important;
          font-size: 5.12vw;
          font-style: normal;
          font-weight: 900;
          line-height: 0.91;
          text-align: center;
          margin-bottom: 3.33vw;
        }
        .smile-newCenter-content-text-p {
          max-width: 64.35vw;
          margin: 0 auto;
          p {
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC" !important;
            font-size: 4vw;
            font-style: normal;
            font-weight: 300;
            line-height: 1.25;
            letter-spacing: 1.23vw;
            span {
              color: #4570b6;
              font-family: "Noto Sans TC" !important;
              font-size: 4vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.25;
              letter-spacing: 1.23vw;
            }
          }
        }
      }
    }
  }

  .icl-WhatChoose {
    padding: 40px 15px;
    .icl-WhatChoose-title {
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 5.12vw;
      font-style: normal;
      font-weight: 900;
      line-height: 1.2;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      max-width: 92.3vw;
      margin-top: 7.69vw;

      .icl-WhatChoose-content-one-text {
        margin: 0 auto;
        max-width: 92.3vw;
        margin-top: 7.69vw;

        p {
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.875;
          letter-spacing: 1.23vw;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 1.875;
            letter-spacing: 1.23vw;
          }
        }
      }
    }

    .icl-WhatChoose-content-two {
      margin: 0 auto;
      max-width: 92.3vw;
      & > div {
        margin-top: 7.69vw;
        border-radius: 1.837vw;
        background: #f4fafc;
        padding: 6.92vw 8.25vw 6.92vw 8.717vw;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 6.15vw;
          font-style: normal;
          font-weight: 900;
          line-height: 0.89;
          margin-bottom: 3.846vw;
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.56;
          letter-spacing: 1.23vw;
        }
      }
    }
  }

  // icl好处
  .icl-Good {
    .icl-Good-List {
      .icl-Good-List-item {
        width: 49.7vw;
        // height: 194px;
        border: 1px solid #4570b6;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 52.932px;
        }
        h4 {
          margin-top: 25px;
          margin-bottom: 11px;
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

  // tese
  .icl-peculiarity {
    padding-top: 40px;
    padding-bottom: 40px;
    background: #f4fafc;
    position: relative;
    z-index: 2;
    .icl-peculiarity-text {
      padding: 0 15px;
      color: #6d6e71;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 4.1vw;
      font-style: normal;
      font-weight: 300;
      line-height: 1.875;
      letter-spacing: 0.82vw;
    }
    .icl-peculiarity-list {
      margin-top: 7.69vw;
      display: flex;
      justify-content: start;
      overflow-x: auto;
      overflow-y: hidden;

      & > .icl-peculiarity-list-item:nth-child(1) {
        transform: rotate(20deg);
        margin-right: 14.1vw;
        margin-left: 14.1vw;
      }
      & > .icl-peculiarity-list-item:nth-child(1):hover {
        transform: rotate(0deg);
        margin-right: 0px;
        margin-left: 0;
      }

      .icl-peculiarity-list-item {
        &:hover {
          background: #4570b6;
          h4,
          .icl-peculiarity-list-item-footer {
            color: #fff;
          }
          .icl-peculiarity-list-item-text {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding-top: 5.9vw;
          }

          .icl-peculiarity-list-item-text-title {
            display: none;
            writing-mode: none !important;
          }
          .icl-peculiarity-list-item-text-show {
            display: block !important;
          }
        }
        transition: all 0.3s ease;

        border-radius: 11.591px;
        border: 1.159px solid #4570b6;
        background: #fff;
        padding: 3.08vw 2.82vw 2.56vw;

        width: fit-content;
        h4,
        .icl-peculiarity-list-item-footer {
          color: #4570b6;
          text-align: center;
          font-family: "Poppins", sans-serif;
          font-size: 3.41vw;
          font-style: normal;
          font-weight: 700;
          line-height: 1.26087;
        }
        .icl-peculiarity-list-item-text {
          margin-top: 1.54vw;
          margin-bottom: 3.33vw;
          width: 100%;

          height: 66.67vw;
          border-top: 1px solid #4570b6;
          border-bottom: 1px solid #4570b6;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 14.87vw;

          .icl-peculiarity-list-item-text-title {
            writing-mode: vertical-rl;
            text-orientation: upright;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 3.71vw;
            font-style: normal;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 1.46vw;
          }

          .icl-peculiarity-list-item-text-show {
            display: none;
            .icl-peculiarity-list-item-text-show-box {
              border-radius: 11px;
              text-align: center;
              padding-top: 6.92vw;
              padding-bottom: 4.1vw;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              width: 34.1vw;
              height: 34.1vw;
              background: white;
              svg,
              img {
                width: 19.23vw;
              }
              .icl-peculiarity-list-item-box-title {
                p {
                  color: #4570b6;
                  text-align: center;
                  leading-trim: both;
                  text-edge: cap;
                  font-family: "Noto Sans TC";
                  font-size: 3.69vw;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 1.2;
                  letter-spacing: 1.28vw;
                }
              }
            }
            .icl-peculiarity-list-item-text-des {
              margin-top: 1.79vw;
              text-align: center;
              p {
                white-space: nowrap;
                color: #fff;
                text-align: center;
                font-family: "Noto Sans TC";
                font-size: 3.41vw;
                font-style: normal;
                font-weight: 300;
                line-height: 1.52;
                letter-spacing: 1.03vw;
              }
            }
          }
        }
      }
    }
  }

  .icl-introVedio {
    //     background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg.webp")
    //       no-repeat;
    //     background-size: cover;
    // background-position: -7.69vw -22.05vw;

    padding: 10.25vw 3.84vw 0px;
    .icl-introVedio-intro {
      padding-bottom: 66px;
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 3.07vw;

        position: relative;

        &::before {
          content: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg.webp");
          position: absolute;
          right: -68.72vw;
          top: -109.49vw;
          scale: 0.5;
          pointer-events: none;
        }

        &::after {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg2.png")
            no-repeat;
          background-size: 100%;
          background-position: center;
          content: "";
          position: absolute;
          top: -134px;
          left: -50px;

          width: 241.084px;
          height: 238.646px;

          flex-shrink: 0;
          pointer-events: none;
        }

        .steps {
          width: 6.41vw;

          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 4.35vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          div {
            font-family: "Poppins", sans-serif;
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 3.07vw;
            height: 13.3vw;
            padding-right: 6px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 4.35vw;
              font-style: normal;
              font-weight: 700;
              color: #4570b6;
              border-right: 2px solid #4570b6;
            }
          }
        }

        .content-area {
          position: relative;

          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              // font-size: 16px;
              font-size: clamp(12px, 4.1vw, 16px);
              font-style: normal;
              font-weight: 900;
              line-height: 1.06;
            }
            svg {
              position: absolute;
              top: 16px;
              left: 92px;
            }
          }

          .content-area-img {
            max-width: 290px;
            position: relative;
            z-index: 2;
            img {
              max-width: 100%;
              height: auto;
              margin-bottom: 10px;
            }
            .content-area-text {
              position: absolute;
              // bottom: 3.07vw;
              bottom: -16.92vw;
              left: 50%;
              transform: translateX(-50%);
              width: 68.2vw;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: clamp(12px, 4.1vw, 16px);
              font-style: normal;
              font-weight: 600;
              line-height: 1.125;
              letter-spacing: 2.4px;
            }
          }
        }
      }
    }

    // vedio
    .icl-introVedio-vedio {
      padding-top: 40px;
      padding-bottom: 40px;
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-vedio-mobile-bg2.webp")
        no-repeat;
      background-size: 100%;

      .icl-introVedio-vedio-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        & > div {
          max-width: 360px;
          height: 203px;
        }
      }
    }
  }

  .SuitableObject {
    .SuitableObject-speical {
      span {
        font-size: 5.12vw;
      }
    }

    & > .SuitableObject-item:nth-child(1) {
      &::after {
        content: "";
        background-image: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/hsdx-bgxing1.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 16px;
        height: 10px;
        position: absolute;
        left: 30px;
        top: 14px;
      }
    }
    & > .SuitableObject-item:nth-child(3) {
      &::after {
        // content: "ICL矯視";
        position: absolute;
        top: 5px;
        right: 15px;
        width: auto;
        height: none;
        background: none;

        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 2.78;
      }
    }
    & > .SuitableObject-item:nth-child(4),
    & > .SuitableObject-item:nth-child(5) {
      padding-top: 32.31vw;
    }
    .SuitableObject-item {
      width: 33.2%;
      height: 66.9vw;
      border: 0.599px solid rgba(255, 255, 255, 0.5);
      background: #4570b6;
      position: relative;
      display: flex;
      padding-top: 44.6vw;
      justify-content: center;
      padding-bottom: 6.41vw;
      overflow: hidden;

      &:hover {
        &::before {
          content: "";
        }
        .SuitableObject-image {
          opacity: 0.5;
        }
      }
      &::before {
        content: attr(data-number);
        font-size: 25.64vw;
        color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: -8px;
        left: 50%;
        opacity: 1;
        transform: translateX(-50%);
      }
      .SuitableObject-description {
        color: #fff;
        text-align: justify;
        font-family: "Noto Sans TC";
        font-size: clamp(10px, 3.58vw, 14px);
        font-style: normal;
        font-weight: 700;
        line-height: 1.64;
        letter-spacing: 1px;
        opacity: 1;
        position: relative;
        z-index: 2;
      }

      .SuitableObject-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        object-fit: cover;

        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }

  // 检查项目
  .icl-CheckObject {
    margin-top: 40px;
    padding: 0 15px;
    .CheckObject {
      margin: 0 auto;
      border-radius: 3.33vw;
      border: 1px solid #4570b6;
      background: #fff;
      padding: 0 6.92vw;
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.12vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.29;
        text-align: center;
        padding-top: 6.66vw;
        padding-bottom: 5.12vw;
      }
      ul {
        list-style: none;
        padding-top: 3.33vw;
        padding-bottom: 3.33vw;
        display: flex;
        flex-direction: column;
        border-top: 1.327px solid #4570b6;
        & > li:nth-child(1) .CheckObject-description {
          color: #4570b6;
          font-weight: 900;
        }
        li {
          display: flex;
          align-items: flex-start;
          .CheckObject-number {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 2.23;
            margin-right: 1.28vw;
          }

          .CheckObject-description {
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 300;
            line-height: 2;
            white-space: nowrap;
          }

          .CheckObject-new {
            padding: 0 6px;
            margin-left: 2.56vw;
            background: #456db6;
            display: inline-block;
            color: #fff;
            font-family: "Noto Sans TC";
            font-size: 3.91vw;
            font-style: normal;
            font-weight: 700;
            line-height: 2.34;
          }
        }
      }
    }
  }

  // 案例分享
  .CaseSharing {
    margin-top: 40px;
    margin-bottom: 30px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-mobile-share.avif")
      no-repeat;
    background-size: 100%;
    background-position: center center;
    padding: 22.05vw 0 28.21vw;
    position: relative;

    .CaseSharing-Box {
      position: relative;
      h3 {
        position: absolute;
        top: -10.26vw;
        right: 7.69vw;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.25;
      }
      .CaseSharing-list::-webkit-scrollbar {
        display: none;
      }
      .CaseSharing-list {
        display: flex;

        // justify-content: center;
        gap: 3.4vw;
        width: 100vw;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        & > .CaseSharing-list-item:nth-child(1) {
          padding-top: 11.03vw;
        }
        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 0;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 10.77vw;
        }
        & > .CaseSharing-list-item:nth-child(4) {
          padding-top: 43.59vw;
        }
        .CaseSharing-list-item {
          a {
            display: block;
            width: 44.87vw;
            box-shadow: -1.768px 1.768px 0px 0px #4570b6;

            position: relative;
            margin-bottom: 3.4vw;
            span {
              position: absolute;
              left: 2.05vw;
              bottom: 2.05vw;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 3.4vw;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 1.03vw 1.54vw;
            }
            i {
              position: absolute;
              right: 2.05vw;
              bottom: 2.05vw;
              width: 5.9vw;
              height: 5.9vw;
              border-radius: 2.21px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 2.82vw;
              }
            }
          }
        }
      }
    }

    .CaseSharing-btn {
      width: 29.23vw;
      height: 29.23vw;

      position: absolute;
      bottom: 0px;
      right: 0;
    }
  }

  .latestNews {
    margin-bottom: 40px;
    background: url("https://statichk.cmermedical.com/smile/smileproV2/icl-newdongtai-mobile.jpg")
      no-repeat;
    background-size: cover;
    position: relative;
    height: 209vw;
    // padding-top: 130px;
    padding-top: 33.33vw;

    .latestNews-tip {
      position: absolute;
      // top: 55px;
      top: 14.1vw;
      left: 0;
      background: #c13550;
      color: #fff;
      font-family: "Noto Sans TC";
      // font-size: 20px;
      font-size: 5.12vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.95;
      padding: 1.28vw 6.15vw;
    }

    .latestNews-in {
      // width: 252px;
      width: 64.61vw;
      margin: 0 auto;
      .latestNews-title {
        color: #c13550;
        font-family: "Poppins", sans-serif;
        // font-size: 20.81px;
        font-size: 5.12vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.58;
        i {
          font-style: normal;
          display: block;
        }
        span {
          margin-left: 6.67vw;
          margin-right: 1.03vw;
          display: inline-block;
          color: #fff;
          font-family: "Poppins", sans-serif;
          // font-size: 20.81px;
          font-size: 5.1vw;
          font-style: normal;
          font-weight: 700;
          // line-height: 33px;
          line-height: 1.65;
          background: #c13550;
          padding: 0 1.28vw;
        }
      }
      p {
        margin-top: 2.31vw;
        color: #6d6e71;
        text-align: justify;
        font-family: "Noto Sans TC";
        // font-size: 16px;
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.48;
        letter-spacing: 3.2px;
      }
    }

    .latestNews-btn {
      border: 1px solid #c13550;
      border-radius: 50%;
      // width: 172px;
      // height: 172px;

      width: 44.1vw;
      height: 44.1vw;
      margin-top: 6.15vw;
      margin-left: auto;
      margin-right: 3.85vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4.36vw;
      svg {
        // width: 19px;
        // height: 19px;
        width: 4.84vw;
        height: 4.87vw;
      }

      span {
        color: #c13550;
        text-align: center;
        font-family: "Noto Sans TC";
        // font-size: 18.133px;
        font-size: 4.6vw;
        font-style: normal;
        font-weight: 900;
        line-height: 0.71;
      }
    }
  }

  .CaseSharingV2 {
    width: fit-content;

    margin: 0 auto;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.94vw;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 700;
        line-height: 0.82;
      }
    }
    & > div:nth-child(2) {
      margin-top: 5.13vw;
      display: flex;
      justify-content: center;
      gap: 5.13vw;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13.85vw;
        height: 13.85vw;
        border-radius: 50%;
        border: 1px solid #4570b6;
      }
    }
  }
}

@media screen and (min-width: 1140px) {
  .d-xl-none {
    display: none;
  }
  .d-xl-block {
    display: block;
  }

  .smile-NewBanner {
    padding: 0px;
    margin-top: 80px;
    height: 529px;
    position: relative;
    img {
      width: 500px;
      position: absolute;
      top: 50px;
      left: inherit;
      right: 190px;
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: 90px;
      left: 77px;
      span {
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 137.67px;
        font-style: normal;
        font-weight: 700;
        line-height: 150.611px; /* 109.4% */
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 74.332px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 29.733px;
        font-style: normal;
        font-weight: 400;
        line-height: 64.668px; /* 217.5% */
        letter-spacing: 0.892px;
      }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-bottom: 1px solid #4570b6;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        padding: 8px 22px 0px 22px;
        display: inline-block;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 150% */
        letter-spacing: 4px;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 8px 35px 23px 22px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 4px;
      }
    }
  }

  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0px;
      margin-bottom: 58px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: 77px;
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC" !important;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 43.5px; /* 217.5% */
        letter-spacing: 0.6px;
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
    .smile-newCenter-content {
      // padding-top: 232px;
      // padding-bottom: 72px;npm
      // max-height: 832px;
      height: 832px;
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-pc-center.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .smile-newCenter-content-text {
        background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-pc-center-centerTwo2.avif");
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        z-index: 2;
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(20px, 1.5625vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: clamp(20px, 1.5625vw, 30px); /* 100% */
          text-align: center;
          margin-bottom: 16px;
        }
        padding: 94px 0;
        .smile-newCenter-content-text-p {
          width: 640px;
          height: 640px;
          background: white;
          border: 3px solid #4570b6;
          margin: 0 auto;
          padding: 137px 88px 0 88px;
          border-radius: 50%;

          p {
         
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC";
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 35px; /* 175% */
            letter-spacing: 4px;
            span {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 35px;
              letter-spacing: 4px;
            }
          }

          // & > p:nth-child(3) {
          //   text-align: initial;
          // }
          & > p:nth-child(3) > span:nth-of-type(1),
          & > p:nth-child(3) > i:nth-child(1) {
            letter-spacing: 5px !important;
            text-align: initial;
          }
          & > p:nth-child(3) > span:nth-of-type(2),
          & > p:nth-child(3) > i:nth-of-type(2) {
            letter-spacing: 2px;
          }
        }
      }
    }
  }

  .icl-WhatChoose {
    padding: 67px 0px;
    .icl-WhatChoose-title {
      max-width: 957px;
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 30px; /* 100% */
      margin: 0 auto;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      margin-top: 26px;
      display: flex;
      justify-content: center;
      gap: 31px;
      & > div {
        max-width: 468px;
      }
      // .icl-WhatChoose-content-one-img{

      // }
      .icl-WhatChoose-content-one-text {
        p {
          text-align: justify;
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 35px; /* 175% */
          letter-spacing: 6px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 35px;
            letter-spacing: 6px;
          }
        }
      }
    }

    .icl-WhatChoose-content-two {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 31px;
      & > div {
        max-width: 467px;

        margin-top: 30px;
        border-radius: 10px;
        background: #f4fafc;
        padding: 63px 53px 58px 46px;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 30px;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 20px;
        }
        p {
          text-align: justify;
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.75; 
          letter-spacing: 6px;
        }
      }
    }
  }
  .icl-btn {
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px 57px;
    border-radius: 100px;
    border: 2px solid #4570b6;

    background: #4570b6;
    color: #fff;
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: 1.8px;
    svg {
      width: 29px;
      height: 29px;
      margin-left: 15px;
    }
  }

  .new-pubile-title {
    color: #4570b6;
    font-family: "Noto Sans TC";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 39px;
    text-align: center;
    margin: 0px auto 0px;
    span {
      font-family: "Poppins", sans-serif;
    }
  }
  // icl好处
  .icl-Good {
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
      .icl-Good-List-item {
        z-index: 99;
        opacity: 1;
        // width: 16.5vw;
        // height: 16.4vw;
        padding-top: 82px;
        padding-bottom: 55px;
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
          height: 68px;
        }
        h4 {
          margin-top: 18px;
          margin-bottom: 11px;
          color: #4570b6;
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.3vw, 25px);
          font-style: normal;
          font-weight: 700;
          line-height: 0.8;
          letter-spacing: 6.25px;
        }
        p {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(12px, 1.19vw, 23px);
          font-style: normal;
          font-weight: 300;
          line-height: 35px;
          letter-spacing: 0.2rem;
        }
      }
    }
  }

  // 特色
  .icl-peculiarity {
    width: 100vw;
    padding-top: 105px;
    padding-bottom: 160px;
    background: #f4fafc;
    position: relative;

    &::after {
      content: "";
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-peculiarity-bg1.png")
        no-repeat;
      pointer-events: none;
      width: 567px;
      height: 431px;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .icl-peculiarity-container {
      display: flex;
      // justify-content: center;
      // flex-wrap: nowrap;
      flex-direction: column-reverse;
      align-items: center;
      gap: 158px;

      margin-top: 64px;
    }

    .icl-peculiarity-text {
      max-width: 783px;
      margin-left: 300px;
      color: #6d6e71;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 2.08;
      letter-spacing: 4.8px;
      position: relative;
      z-index: 2;
    }
    .icl-peculiarity-list {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 2;
      & > .icl-peculiarity-list-item:nth-child(1) {
        transform: rotate(20deg);

        margin-right: 95px;
      }
      & > .icl-peculiarity-list-item:nth-child(1):hover {
        transform: rotate(0deg);

        margin-right: 0px;
      }

      .icl-peculiarity-list-item {
        cursor: pointer;

        &:hover {
          background: #4570b6;
          h4,
          .icl-peculiarity-list-item-footer {
            color: #fff;
          }
          .icl-peculiarity-list-item-text {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding-top: 41px;
          }

          .icl-peculiarity-list-item-text-title {
            display: none;
            writing-mode: none !important;
          }
          .icl-peculiarity-list-item-text-show {
            display: block !important;
          }
        }
        transition: all 0.3s ease;

        border-radius: 20px;
        border: 2px solid #4570b6;

        background: #fff;
        padding: 21px 20px 19px;

        width: fit-content;
        h4,
        .icl-peculiarity-list-item-footer {
          color: #4570b6;
          text-align: center;
          font-family: "Poppins", sans-serif;
          font-size: 23px;
          font-style: normal;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: normal;
        }
        .icl-peculiarity-list-item-text {
          margin-top: 11px;
          margin-bottom: 24px;
          width: 100%;
          height: 448px;
          border-top: 1px solid #4570b6;
          border-bottom: 1px solid #4570b6;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 101px;
          .icl-peculiarity-list-item-text-title {
            writing-mode: vertical-rl;
            text-orientation: upright;
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans TC";
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 8.75px;
          }

          .icl-peculiarity-list-item-text-show {
            display: none;
            .icl-peculiarity-list-item-text-show-box {
              border-radius: 20px;
              text-align: center;
              padding-top: 36px;
              padding-bottom: 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              width: 231px;
              height: 231px;
              background: white;
              svg,
              img {
                width: 123px;
              }
              .icl-peculiarity-list-item-box-title {
                p {
                  color: #4570b6;
                  text-align: center;
                  font-family: "Noto Sans TC";
                  font-size: 25px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 1.2; /* 120% */
                  letter-spacing: 8.75px;
                }
              }
            }
            .icl-peculiarity-list-item-text-des {
              margin-top: 13px;
              text-align: center;
              p {
                color: #fff;
                text-align: center;
                font-family: "Noto Sans TC";
                font-size: 23px;
                font-style: normal;
                font-weight: 300;
                line-height: 1.52;
                letter-spacing: 6.9px;
              }
            }
          }
        }
      }
    }
  }

  // vedio
  .icl-introVedio {
    width: 100vw;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-pc-bg.webp")
      no-repeat;
    // background-size: cover;
    background-position: 100% 0px;

    padding: 110px 0 0;
    .icl-introVedio-intro {
      // background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-pc-bg2.webp")
      //   no-repeat;
      // background-size: contain;
      // background-position: 0 120%;

      padding-bottom: 110px;
      .icl-introVedio-intro-number {
        position: relative;
        z-index: 2;
        &::after {
          background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-bg2.png")
            no-repeat;

          background-position: center;
          content: "";
          position: absolute;
          bottom: -200px;
          left: -270px;
          width: 550px;
          height: 550px;
          pointer-events: none;
        }

        width: fit-content;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 40px;

        .steps {
          width: 60px;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 38px;
          font-style: normal;

          font-weight: 400;
          line-height: normal;

          div {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 27px;
            height: 107px;
            padding-right: 13.5px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 200;
            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 38px;
              font-style: normal;
              font-weight: 700;
              line-height: 30px;
              border-right: 5px solid #4570b6;
            }
          }
        }

        .content-area {
          position: relative;
          flex: 1;
          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 30px;
              font-style: normal;
              font-weight: 900;
              line-height: 38px; /* 126.667% */
            }
            svg {
              width: 38px;
              height: 38px;
              position: absolute;
              top: 34px;
              left: 240px;
            }
          }

          .content-area-img {
            position: relative;
            display: flex;
            gap: 80px;
            z-index: 2;
            align-items: center;

            img {
              max-width: 647px;
              height: auto;
            }
            .content-area-text {
              left: 50%;

              width: 257px;

              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 23px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; /* 152.174% */
              letter-spacing: 8.05px;
            }
          }
        }
      }
    }

    // vedio
    .icl-introVedio-vedio {
      position: relative;
      z-index: 2;
      opacity: 1;
      padding-top: 125px;
      padding-bottom: 150px;
      background-image: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-vedio-pc-bg.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #f4fafc;
      .icl-introVedio-vedio-list {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 13px;
        & > div {
          max-width: 650px;
          max-height: 368px;
          width: 33vw;
          height: 19.1vw;
        }
      }
    }
  }

  .SuitableObject {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    position: relative;
    &::after {
      content: "合適對象";
      position: absolute;
      top: 58px;
      left: 50%;
      transform: translate(-50%);
      color: #fff;
      font-family: "Noto Sans TC";
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.3;
    }

    .SuitableObject-speical {
      display: none;
    }
    & > .SuitableObject-item:nth-child(1) {
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      &::after {
        content: "";
        background-image: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/hsdx-bgxing1.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 28px;
        height: 28px;
        position: absolute;
        left: 145px;
        top: 68px;
        background-color: transparent;
      }
    }

    & > .SuitableObject-item:nth-child(5) {
      &::after {
        // content: "ICL矯視";
        position: absolute;
        top: 58px;
        left: 50%;
        transform: translateX(-50%);
        right: auto;

        width: auto;
        height: none;
        background: none;

        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.95;
      }
    }
    .SuitableObject-item {
      overflow: hidden;
      cursor: pointer;
      width: calc(20vw - 4px);
      height: 38.02vw;
      max-height: 730px;
      background: #4570b6;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: clamp(200px, 26.04vw, 500px);
      transition: all 0.3s ease;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }

      &:hover {
        &::before {
          content: "";
        }
        .SuitableObject-image {
          opacity: 0.5;
        }
      }
      &::before {
        content: attr(data-number);
        font-size: 200px;
        color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 100px;
        left: 50%;
        opacity: 1;
        transform: translateX(-50%);
      }
      .SuitableObject-description {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: clamp(20px, 1.5625vw, 30px);
        font-style: normal;
        font-weight: 700;
        line-height: 1.33;
        letter-spacing: 4.5px;
        opacity: 1;
        position: relative;
        z-index: 2;
      }

      .SuitableObject-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }

  // 检查项目
  .icl-CheckObject {
    margin-top: 80px;

    .CheckObject {
      padding: 68px 0;
      border-radius: 20px;
      border: 1px solid #4570b6;
      background: #fff;
      display: flex;

      h3 {
        width: 544px;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 0.8;
        text-align: left;
        padding-top: 186px;
        padding-left: 131px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
      }
      ul {
        flex: 1;
        flex-shrink: 0;
        list-style: none;
        padding-left: 80px;
        display: flex;
        flex-direction: column;
        border-left: 2px solid #4570b6;
        & > li:nth-child(1) .CheckObject-description {
          color: #4570b6;
          font-weight: 900;
        }
        li {
          display: flex;
          align-items: flex-start;
          .CheckObject-number {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 23px;
            font-style: normal;
            font-weight: 700;
            line-height: 54px; /* 234.783% */
          }

          .CheckObject-description {
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 23px;
            font-style: normal;
            font-weight: 300;
            line-height: 54px;
          }
          .CheckObject-new {
            padding: 0 10px;
            margin-left: 15px;
            display: inline-block;
            background: #4570b6;
            color: #fff;
            font-family: "Noto Sans TC" !important;
            font-size: 23px;
            font-style: normal;
            font-weight: 700;
            line-height: 2.34;
            letter-spacing: normal;
          }
        }
      }
    }

    .icl-btn {
      margin-top: 65px;
    }
  }

  // 案例分享
  .CaseSharing {
    max-width: 100vw;

    margin-top: 104px;
    margin-bottom: 80px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share.avif")
      no-repeat;
    background-position: center center;
    padding: 140px 0 140px;
    position: relative;

    .CaseSharing-Box {
      max-width: 1750px !important;

      position: relative;
      h3 {
        position: absolute;
        top: -70px;
        right: 10px;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 39px;
      }
      .CaseSharing-list {
        display: flex;
        &::-webkit-scrollbar {
          display: none;
        }
        gap: 60px;
        flex-wrap: nowrap;
        overflow-x: auto;

        & > .CaseSharing-list-item:nth-child(1) {
          padding-top: 94px;
        }

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 0px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 97px;
        }
        & > .CaseSharing-list-item:nth-child(4) {
          padding-top: 369px;
        }
        .CaseSharing-list-item {
          a {
            display: block;
            width: 396px;

            box-shadow: -4px 4px 0px 0px #4570b6;
            position: relative;
            margin-bottom: 30px;
            span {
              position: absolute;
              left: 20px;
              bottom: 16px;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 10px 15px;
            }
            i {
              position: absolute;
              right: 20px;
              bottom: 16px;
              width: 53px;
              height: 53px;
              border-radius: 5px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 26px;
              }
            }
          }
        }
      }
    }

    // .CaseSharing-btn {
    //   width: 164.085px;
    //   height: 163.562px;

    //   position: absolute;
    //   bottom: 60px;
    //   right: -20px;
    // }

    // 按钮
    .CaseSharing-btn {
      position: absolute;
      background: url("https://statichk.cmermedical.com/smile/smileproV2/icl-share-btn-pc.png");
      background-repeat: no-repeat;

      background-position: -58px -25px;
      width: 166.085px;
      height: 165.562px;
      border-radius: 50%;
      top: 0;
      right: 0;
      border-radius: 50%;
      top: 0;
      right: 0;
      p {
        margin-top: 43px;
        color: #fff;
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25; /* 125% */
      }
    }
  }

  // 最新资讯
  .latestNews {
    .top-btnV2new {
      display: none;
    }

    margin-bottom: 60px;

    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-newdongtai-pc.png")
      no-repeat;
    background-size: cover;
    position: relative;
    width: 100vw;
    overflow: hidden;
    height: 36.66vw;
    max-height: 800px;
    // padding-top: 260px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .latestNews-tip {
      position: absolute;
      top: 55px;
      left: 0;
      background: #c13550;
      color: #fff;

      font-family: "Noto Sans TC";
      font-size: clamp(20px, 1.5625vw, 30px);
      font-style: normal;
      font-weight: 700;
      line-height: 1.3;
      padding: 13px 30px;
    }

    .latestNews-in {
      width: 28.125vw;
      max-width: 540px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .latestNews-title {
        color: #c13550;
        font-family: "Poppins", sans-serif;
        font-size: clamp(20px, 1.5625vw, 30px);
        font-style: normal;
        font-weight: 700;
        line-height: 1.3;
        i {
          font-style: normal;

          font-family: "Poppins", sans-serif;
        }
        span {
          margin-left: 4px;
          margin-right: 4px;
          display: inline-block;
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-size: clamp(20px, 1.5625vw, 30px);
          font-style: normal;
          font-weight: 700;
          line-height: 39px;
          background: #c13550;
          padding: 0 10px;
        }
      }
      p {
        margin-top: 4px;
        margin-left: 83px;
        color: #6d6e71;
        text-align: justify;
        font-family: "Noto Sans TC";
        font-size: 23px;
        font-style: normal;
        font-weight: 300;
        line-height: 1.52;
        letter-spacing: 4.6px;
      }
    }

    .latestNews-btn {
      border: 1px solid #c13550;
      border-radius: 50%;
      width: 322px;
      height: 322px;
      margin-top: 24px;
      position: absolute;
      top: 9.89vw;
      right: 9.89vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      svg {
        width: 38px;
        height: 38px;
      }

      span {
        color: #c13550;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        line-height: 0.71;
      }

      &:hover {
        border: 1px solid #c13550;

        background: #c13550;
        svg {
          path {
            stroke: #fff;
          }
        }
        span {
          color: #fff;
        }
      }
    }
  }

  .CaseSharingV2 {
    display: none;
    width: fit-content;

    margin: 0 auto;
    & > div:nth-child(1) {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 13px;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 83.333% */
      }
    }
    & > div:nth-child(2) {
      margin-top: 49px;
      display: flex;
      justify-content: center;
      gap: 20px;
      a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 82px;
        height: 82px;
        border-radius: 50%;
        border: 1px solid #4570b6;
        svg {
          width: 30px;
        }
      }
    }
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

  .icl-peculiarity {
    .icl-peculiarity-list {
      & > .icl-peculiarity-list-item:nth-child(1) {
        margin-left: 45px;
      }
    }
    &::after {
      content: "";
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-peculiarity-bg1.png")
        no-repeat;
      pointer-events: none;
      width: 660px;
      height: 502px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .icl-peculiarity-text {
      max-width: 330px;
      margin-left: 0;
      color: #6d6e71;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 4px;
    }

    .icl-peculiarity-container {
      gap: 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: nowrap;
      margin-top: 64px;
    }
  }
}

@media screen and (min-width: 1660px) {
  .icl-introVedio {
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-intro-pc-bg.webp")
      no-repeat;
    background-position: 100% 0;
  }
}
</style>

<template>
  <div class="lasik">
    <!-- <Head /> -->
    <HeadV2 />

    <goTop />

    <!-- 轮播位置 -->
    <div
      class="container new-container mx-auto smile-NewBanner position-relative"
    >
      <img
        class=""
        decoding="async"
        src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/smile-iclBanner.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/new-smile-iclBanner-mobile.png 400w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/new-smile-iclBanner-mobile.png 640w,
          https://statichk.cmermedical.com/smile/vision-correction-iclV2/smile-iclBanner.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="smile-NewBanner-Title">
        <span>ICL</span>
        <h3>{{ $t("Correct.newIcl.small_title1") }}</h3>
        <p>ICL Implantable Collamer Lens</p>
      </div>

      <div class="smile-NewBanner-Tip">
        <div class="smile-NewBanner-Tip-Title">
          <p>{{ $t("Correct.newIcl.titleList.title1") }}</p>
        </div>
        <div class="smile-NewBanner-Tip-Content">
          <p>• {{ $t("Correct.newIcl.titleList.title2") }}</p>
          <p>• {{ $t("Correct.newIcl.titleList.title3") }}</p>
          <p>• {{ $t("Correct.newIcl.titleList.title4") }}</p>
        </div>
      </div>
    </div>

    <!-- 中心介绍 -->
    <section class="smile-newCenter">
      <div class="container new-container mx-auto">
        <div class="smile-newCenter-menu">
          <a href="/">{{ $t("Correct.newIcl.menuone") }} </a>&nbsp;>&nbsp;<a>{{
            $t("Correct.newIcl.menuTwo")
          }}</a
          >&nbsp;>&nbsp;<a href="">ICL{{ $t("Correct.newIcl.menuthree") }}</a>
        </div>
      </div>
      <div class="w-100 smile-newCenter-content">
        <div
          class="container new-container mx-auto smile-newCenter-content-text"
        >
          <h3 class="text-center d-xl-none">
            {{ $t("Correct.newIcl.section1.title") }}
          </h3>
          <div class="smile-newCenter-content-text-p">
            <h3 class="text-center d-none d-xl-block">
              {{ $t("Correct.newIcl.section1.title") }}
            </h3>

            <p>
              {{ $t("Correct.newIcl.section1.text1")
              }}<span>{{ $t("Correct.newIcl.section1.text2") }}</span
              >。
            </p>
            <p>
              <i>{{ $t("Correct.newIcl.section1.text2_1") }}</i
              ><span>{{ $t("Correct.newIcl.section1.text2_2") }}</span
              >， {{ $t("Correct.newIcl.section1.text3")
              }}<i>{{ $t("Correct.newIcl.section1.text3_1") }}</i
              ><span>{{ $t("Correct.newIcl.section1.text4") }}</span
              >{{ $t("Correct.newIcl.section1.text5") }}
            </p>
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
            {{ $t("Correct.newIcl.section2.one.text1")
            }}<span>{{ $t("Correct.newIcl.section2.one.text2") }}</span>
          </p>
          <p>
            {{ $t("Correct.newIcl.section2.one.text3")
            }}<span>{{ $t("Correct.newIcl.section2.one.text4") }}</span
            >，{{ $t("Correct.newIcl.section2.one.text5")
            }}<span>{{ $t("Correct.newIcl.section2.one.text6") }}</span
            >。<br class="d-xl-none" />{{
              $t("Correct.newIcl.section2.one.text7")
            }}
          </p>
          <p></p>
          <br />
          <p>
            {{ $t("Correct.newIcl.section2.one.text8") }}
          </p>
        </div>
      </div>

      <div class="icl-WhatChoose-content-two container new-container">
        <div>
          <h4>{{ $t("Correct.newIcl.section2.two.title") }}</h4>
          <p>
            {{ $t("Correct.newIcl.section2.two.text1") }}
          </p>
        </div>

        <div>
          <h4>{{ $t("Correct.newIcl.section2.three.title") }}</h4>
          <p>
            {{ $t("Correct.newIcl.section2.three.text1") }}
          </p>
        </div>
      </div>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="mx-auto icl-btn"
      >
        <span>{{ $t("Correct.newIcl.apt_btn") }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M2 14.5399L14.5714 1.96851"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M3.83179 1.5686H14.9999V12.3686"
            stroke="white"
            stroke-width="2.7"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </section>

    <!-- ICL矯視的好處 -->
    <section class="icl-Good">
      <h3 class="new-pubile-title">
        <span>ICL</span>{{ $t("Correct.newIcl.section3.title") }}
      </h3>
      <div class="icl-Good-List">
        <div
          class="icl-Good-List-item"
          v-for="(item, index) in iclGoodList"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <h4>{{ $t(item.title) }}</h4>
          <div>
            <p v-for="(i, idx) in item.text" :key="idx">{{ $t(i) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EVO Visian ICL鏡片7大特色 -->
    <section class="icl-peculiarity">
      <h3 class="new-pubile-title">
        <span>EVO Visian ICL</span>{{ $t("Correct.newIcl.section4.title") }}
      </h3>
      <div class="icl-peculiarity-container">
        <p class="icl-peculiarity-text">
          {{ $t("Correct.newIcl.section4.content_text") }}
        </p>

        <div class="icl-peculiarity-list">
          <div
            class="icl-peculiarity-list-item"
            v-for="(item, index) in iclPeculiarityList"
            :key="index"
          >
            <h4>ICL</h4>
            <div class="icl-peculiarity-list-item-text">
              <p class="icl-peculiarity-list-item-text-title">
                {{ $t(item.title) }}
              </p>

              <div class="icl-peculiarity-list-item-text-show">
                <div class="icl-peculiarity-list-item-text-show-box">
                  <img :src="item.box.img" alt="" />

                  <div class="icl-peculiarity-list-item-box-title">
                    <p
                      v-for="(titleText, idx) in item.box.titleText"
                      :key="idx"
                    >
                      {{ titleText }}
                    </p>
                  </div>
                </div>
                <div class="icl-peculiarity-list-item-text-des">
                  <p v-for="(des, idxx) in item.box.des" :key="idxx">
                    {{ des }}
                  </p>
                </div>
              </div>
            </div>
            <div class="icl-peculiarity-list-item-footer">
              <p>feature</p>
              <p>00{{ index + 1 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 过程和介绍vedio -->
    <section class="icl-introVedio">
      <div class="icl-introVedio-intro new-container">
        <div class="icl-introVedio-intro-number">
          <!-- 左侧数字列表 -->
          <div class="steps">
            <div
              v-for="(step, index) in steps"
              :key="index"
              @mouseover="highlightStep(index)"
              @click="highlightStep(index)"
              :class="{ active: activeStep === index }"
            >
              {{ step.number }}
            </div>
          </div>

          <!-- 右侧内容区域 -->
          <div class="content-area">
            <div v-if="activeStep >= 0">
              <div class="content-area-title">
                <p>
                  植入式隱形眼鏡<br />
                  植入過程
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M0.726577 1.2312L17.593 18.0976"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.1296 3.68896L18.1296 18.6727L3.63983 18.6727"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="content-area-img">
                <img class="d-xl-none" :src="steps[activeStep].image" alt="" />
                <img
                  class="d-none d-xl-block"
                  :src="steps[activeStep].imagePc"
                  alt=""
                />

                <p class="content-area-text">{{ steps[activeStep].text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="icl-introVedio-vedio">
        <div class="new-container">
          <h3 class="new-pubile-title">
            <span>ICL </span>植入式隱形眼鏡介紹影片
          </h3>
          <div class="icl-introVedio-vedio-list">
            <div>
              <iframe
                class=""
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0-mlyxrBaus"
                :title="$t('service.icl.film.title1')"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                class=""
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7_A3ae7q15E"
                :title="$t('service.icl.film.title2')"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合适对象 -->
    <div class="SuitableObject">
      <div
        v-for="(item, index) in SuitableObject"
        :key="index"
        class="SuitableObject-item"
        :data-number="index + 1"
      >
        <div class="SuitableObject-title" v-if="item.title">
          {{ item.title }}
        </div>

        <div class="SuitableObject-description">
          <p v-for="(i, idx) in item.description" :key="idx">
            {{ i }}
          </p>
        </div>
        <img class="SuitableObject-image" :src="item.image" alt="" />
      </div>
      <div class="SuitableObject-speical" v-if="isMobile">
        <span
          >合適<br />
          對象</span
        >
      </div>
    </div>

    <!-- 全面術前眼睛檢查項目 -->
    <section class="icl-CheckObject">
      <div class="CheckObject container new-container">
        <h3>
          全面術前眼睛檢查項目<span class="d-xl-none">包括</span>
          <p class="d-none d-xl-block"><br />包括</p>
        </h3>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <span class="CheckObject-number">{{ item.number }}</span>
            <span class="CheckObject-description">{{ item.description }}</span>
            <span class="CheckObject-new" v-if="index == 0">NEW!</span>
          </li>
        </ul>
      </div>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="mx-auto icl-btn"
      >
        <span>預約諮詢</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M2 14.5399L14.5714 1.96851"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M3.83179 1.5686H14.9999V12.3686"
            stroke="white"
            stroke-width="2.7"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </section>

    <!-- ICL植入式隱形眼鏡真實個案分享 -->
    <section class="CaseSharing">
      <div class="new-container CaseSharing-Box">
        <h3>
          ICL植入式隱形眼鏡<br />
          真實個案分享
        </h3>
        <div class="CaseSharing-list" ref="caseSharingList">
          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/watch?v=fNSShYa7nKk"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share00.avif"
                alt=""
              />
              <span>Kathy仔</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=T9g2qoFI9nU"
              target="__blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share01.avif"
                alt=""
              />
              <span>Lily Lee</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>

          <!-- 2 -->
          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/watch?v=r0yDL98l0Zo"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share1.avif"
                alt=""
              />
              <span>麥沛東</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=2t7JjTab4xA"
              target="__blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share2.avif"
                alt=""
              />
              <span>林奕匡</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>

          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/watch?v=5ihrzFvOy38"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share3.avif"
                alt=""
              />

              <span>林宣妤</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=CEbbKFeFdnc"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share4.avif"
                alt=""
              />

              <span>吳業坤</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>

          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/watch?v=e-c_qRuvWTA"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-pc-share5.avif"
                alt=""
              />

              <span>Tiffany Poon</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>
        </div>
      </div>

      <!-- <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="CaseSharing-btn"
        ><img
          src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-share-btn.avif"
          alt=""
      /></a>

            <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="CaseSharing-btn"
      >
        <p>
          馬上了解<br />
          ICL V6
        </p>
      </a> -->
    </section>

    <!-- 最新动态 -->
    <section class="latestNews">
      <div class="latestNews-tip">最新動態</div>
      <div class="latestNews-in">
        <h3 class="latestNews-title">
          <i>ICL Viva</i> <span>ICL V6</span> 老花矯視
        </h3>
        <p>
          ICL Viva (ICL V6)
          是一種擴展景深，專為矯正老花而設的植入式隱形眼鏡，適合未有白內障，而正受近視及老花困擾的人士。
        </p>
      </div>

      <a href="/vision-correction-presbyopia" class="latestNews-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M1.33179 21.8586L20.604 2.58643"
            stroke="#C13550"
            stroke-width="2.59036"
            stroke-linecap="round"
          />
          <path
            d="M4.14014 1.97266H21.261V18.5292"
            stroke="#C13550"
            stroke-width="2.59036"
            stroke-linecap="round"
          />
        </svg>
        <span> 了解更多 </span>
      </a>

      <div class="top-btnV2new d-lg-none" @click="scrollToTopV2New">
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
    </section>

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
        <a @click="copyCurrentUrl">
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

    <!-- <businessHours /> -->
    <FooterV2 />
    <!-- <Footer /> -->
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import goTop from "@/components/Publice/goTop.vue";

import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";

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
    suitable,
    share,
    FooterV2,
    HeadV2,
    goTop,
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
            "希瑪微笑矯視中心提供植入式隱形眼鏡 ICL 矯視服務，以創新技術和具生物兼容特質的人工晶體矯正視力，專為深度近視、遠視、散光客人而設。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ICL, icl植入式隱形眼鏡, 植入式隱形眼鏡, evo icl, visian icl, icl 老花,ICL植入式隱形眼鏡, 矯視價錢 香港, 矯視 收費, 香港矯視, 視力矯正, 眼鏡, 隱形眼鏡, 眼科手術, 眼睛健康, 近視, 遠視, 散光, 投考紀律部隊, 微笑激光矯視, 乾眼, ICL 價錢, ICL 收費",
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
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-icl",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-icl",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      iclGoodList: [
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-1.svg",
          title: "Correct.newIcl.section3.text1_title1",
          text: [
            "Correct.newIcl.section3.text1_con1",
            "Correct.newIcl.section3.text1_con2",
          ],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-2.svg",
          title: "Correct.newIcl.section3.text2_title1",
          text: [
            "Correct.newIcl.section3.text2_con1",
            "Correct.newIcl.section3.text2_con2",
          ],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-3.svg",
          title: "Correct.newIcl.section3.text3_title1",
          text: [
            "Correct.newIcl.section3.text3_con1",
            "Correct.newIcl.section3.text3_con2",
          ],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-4.svg",
          title: "Correct.newIcl.section3.text4_title1",
          text: [
            "Correct.newIcl.section3.text4_con1",
            "Correct.newIcl.section3.text4_con2",
          ],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-5.svg",
          title: "Correct.newIcl.section3.text5_title1",
          text: [
            "Correct.newIcl.section3.text5_con1",
            "Correct.newIcl.section3.text5_con2",
          ],
        },
        {
          img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-6.svg",
          title: "Correct.newIcl.section3.text6_title1",
          text: [
            "Correct.newIcl.section3.text6_con1",
            "Correct.newIcl.section3.text6_con2",
          ],
        },
      ],

      iclPeculiarityList: [
        {
          title: "Correct.newIcl.section4.item1_title",
          img: "",
          text: ["提供絕佳夜間", "視力"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img1.avif",
            titleText: ["夜間視力"],
            des: ["提供絕佳夜間", "視力"],
          },
        },
        {
          title: "Correct.newIcl.section4.item2_title",
          img: "",
          text: ["ICL鏡片既可永", "選擇取出鏡片"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img2.avif",
            titleText: ["可取出"],
            des: ["可按需要", "選擇取出鏡片"],
          },
        },
        {
          title: "Correct.newIcl.section4.item3_title",
          img: "",
          text: ["ICL鏡片由含有", "膠原蛋白材質", "製成， 與眼球", "互相兼容"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img3.avif",
            titleText: ["生物相容性"],
            des: ["ICL鏡片由含有", "膠原蛋白材質", "製成， 與眼球", "互相兼容"],
          },
        },
        {
          title: "Correct.newIcl.section4.item4_title",
          img: "",
          text: ["鏡片有紫外線", "防護功能"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img4.avif",
            titleText: ["紫外線防護"],
            des: ["鏡片有紫外線", "防護功能"],
          },
        },
        {
          title: "Correct.newIcl.section4.item5_title",
          img: "",
          text: [
            "手術時間短 ",
            "復原期短，單邊眼",
            "睛手術過程最快只",
            "需20-30分鐘",
          ],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img5.avif",
            titleText: ["手術與恢復", "皆快速"],
            des: [
              "手術時間短 ",
              "復原期短，單邊眼",
              "睛手術過程最快只",
              "需20-30分鐘",
            ],
          },
        },
        {
          title: "Correct.newIcl.section4.item6_title",
          img: "",
          text: ["ICL鏡片既可永", "久存放眼內亦可還原"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img6.avif",
            titleText: ["與時俱進的", "靈活度"],
            des: ["ICL鏡片既可", "永久存放眼內", "亦可還原"],
          },
        },
        {
          title: "Correct.newIcl.section4.item7_title",
          img: "",
          text: ["鏡片柔軟靈活", "易於植入"],
          box: {
            img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img7.avif",
            titleText: ["柔軟服貼"],
            des: ["鏡片柔軟靈活", "易於植入"],
          },
        },
      ],

      activeStep: 0, // 当前激活的步骤索引
      activeStepTimer: null,
      interval: 3000,
      steps: [
        {
          number: "01",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro1.webp",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-mobile-intro1.webp",
          text: "進行手術前，醫生先在客人眼睛上滴麻醉及放大瞳孔眼藥水。",
        },
        {
          number: "02",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
          text: "在角膜緣製作一個約3毫米的小開口，將摺疊的晶體植入眼球。",
        },
        {
          number: "03",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
          text: "植入晶體後，醫生會調整晶體的位置，確保在適宜的位置。",
        },
        {
          number: "04",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
          text: "手術結束後，需按醫生指示滴眼藥水。一般矯視後第二天已能恢復視力。",
        },
        {
          number: "05",
          imagePc:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
          text: "完成手術後，需按指示定期覆診以追蹤視力。",
        },
      ],

      SuitableObject: [
        {
          description: ["高度近遠視", "或深度數", "散光人士"],
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc1.avif",
        },
        {
          description: ["熱愛運動/", "注重儀表人士"],
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc2.avif",
        },
        {
          description: ["因佩戴隱形眼", "鏡導致乾眼症", "人士"],
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc3.avif",
        },
        {
          description: ["希望減低對眼", "鏡或隱形眼鏡", "依賴的人士"],
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc4.avif",
        },
        {
          description: [
            "因角膜厚度",
            "偏薄/角膜形狀",
            "欠佳而不適合接",
            "受激光矯視人士",
          ],
          subtitle: "ICL矯視",
          image:
            "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc5.avif",
        },
      ],

      items: [
        { number: "1.", description: "Verion 眼科超聲生物顯微鏡" },
        {
          number: "2.",
          description: "屈光檢查",
        },

        {
          number: "3.",
          description: "Sirius：角膜結構及瞳孔測量",
        },

        {
          number: "4.",
          description: "Pentacam：360全面角膜結構測量",
        },
        {
          number: "5.",
          description: "淚水分泌測試",
        },

        {
          number: "6.",
          description: "Specular Microscopy內皮細胞的密度測量",
        },
        {
          number: "7.",
          description: "OCT：黃斑及視網膜掃瞄 (如有需要)",
        },
        {
          number: "8.",
          description: "SLO：360全面眼底檢查",
        },
        {
          number: "9.",
          description: "醫生會診：眼睛狀況評估及矯視方案建議",
        },
      ],

      characteristic: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/e8b1b4b4e7337083.png",
          title: this.$t("Correct.icl.characteristic.content1.title"),
          text: [
            this.$t("Correct.icl.characteristic.content1.text1"),
            this.$t("Correct.icl.characteristic.content1.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/b3fc1aae883e10c5.png",
          title: this.$t("Correct.icl.characteristic.content2.title"),
          text: [
            this.$t("Correct.icl.characteristic.content2.text1"),
            this.$t("Correct.icl.characteristic.content2.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9c2e5ca8b04dfc42.png",
          title: this.$t("Correct.icl.characteristic.content3.title"),
          // text: ["手術時間短<br />", "復原期短，手術過程", "最快只需20-30分鐘"],
          text: [
            this.$t("Correct.icl.characteristic.content3.text1"),
            this.$t("Correct.icl.characteristic.content3.text2"),
            this.$t("Correct.icl.characteristic.content3.text3"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/d6dc807847e807c6.png",
          title: this.$t("Correct.icl.characteristic.content4.title"),
          text: [
            this.$t("Correct.icl.characteristic.content4.text1"),
            this.$t("Correct.icl.characteristic.content4.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/78bb710a2eee5ce3.png",
          title: this.$t("Correct.icl.characteristic.content5.title"),
          text: [
            this.$t("Correct.icl.characteristic.content5.text1"),
            this.$t("Correct.icl.characteristic.content5.text2"),
            this.$t("Correct.icl.characteristic.content5.text3"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/bb006854352668ac.png",
          title: this.$t("Correct.icl.characteristic.content6.title"),
          text: [
            this.$t("Correct.icl.characteristic.content6.text1"),
            this.$t("Correct.icl.characteristic.content6.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/4fe5d9f2a1065ba4.png",
          title: this.$t("Correct.icl.characteristic.content7.title"),
          text: [this.$t("Correct.icl.characteristic.content7.text1")],
        },
      ],
      benefits: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/71f07f2e49ae92d7.png",
          title: this.$t("Correct.icl.benefits.content1.title"),
          text: this.$t("Correct.icl.benefits.content1.text1"),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/c8c583239e65a1a7.png",
          title: this.$t("Correct.icl.benefits.content2.title"),
          text: this.$t("Correct.icl.benefits.content2.text1"),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/515c3b6fb8d3871d.png",
          title: this.$t("Correct.icl.benefits.content3.title"),
          text: this.$t("Correct.icl.benefits.content3.text1"),
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/a200f81d4d1872a1.png",
          title: this.$t("Correct.icl.benefits.content4.title"),
          text: this.$t("Correct.icl.benefits.content4.text1"),
        },
      ],
      suitable_object: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/1acfa98b56345500.png",
          text: [
            this.$t("Correct.icl.suitable_object.content1.text1"),
            this.$t("Correct.icl.suitable_object.content1.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/2c2272ff6b7052c6.png",
          text: [
            this.$t("Correct.icl.suitable_object.content2.text1"),
            this.$t("Correct.icl.suitable_object.content2.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/56f73174b86b2288.png",
          text: [this.$t("Correct.icl.suitable_object.content3.text1")],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9f4ca0776e175624.png",
          text: [
            this.$t("Correct.icl.suitable_object.content4.text1"),
            this.$t("Correct.icl.suitable_object.content4.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/7a55c233d701d0eb.png",
          text: [
            this.$t("Correct.icl.suitable_object.content5.text1"),
            this.$t("Correct.icl.suitable_object.content5.text2"),
          ],
          mbText: [
            this.$t("Correct.icl.suitable_object.content5.mbText1"),
            this.$t("Correct.icl.suitable_object.content5.mbText2"),
          ],
        },
      ],
      canonicalHref: "https://smile.hkcmereye.com/vision-correction-icl",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/vision-correction-icl",
      browserTitle: "ICL植入式隱形眼鏡 - 希瑪微笑矯視中心",
      browserTitleCn: "ICL植入式隐形眼镜 - 希玛微笑矫视中心",
    };
  },

  methods: {
    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    highlightStep(index) {
      console.log("index");

      this.activeStep = index; // 更新当前激活的步骤
      this.stopTimer();
    },

    async copyCurrentUrl() {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        this.$message({
          showClose: true,
          message: "複製成功",
          type: "success",
        });
      } catch (error) {
        console.error("复制失败:", error);
      }
    },

    scrollToTopV2() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    // 开始计时
    startTimer(customInterval) {
      if (!this.activeStepTimer) {
        const interval = customInterval || this.interval;
        this.activeStepTimer = setInterval(() => {
          this.activeStep++;
          if (this.activeStep > 4) {
            this.activeStep = 0; // 超过 4 时回到 0
          }
        }, interval);
      }
    },
    stopTimer() {
      if (this.activeStepTimer) {
        clearInterval(this.activeStepTimer);
        this.activeStepTimer = null;
      }
    },
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    // 启动计时
    this.startTimer();
    // 获取容器和内容

    // const shaerwidth = this.$refs.caseSharingList;
    // if (shaerwidth) {
    //   const contentWidth = shaerwidth.scrollWidth; // 内容总宽度
    //   const containerWidth = shaerwidth.clientWidth; // 容器可见宽度

    //   // 计算滚动到中间的位置
    //   const scrollLeft = (contentWidth - containerWidth) / 2;
    //   // 设置滚动位置
    //   shaerwidth.scrollLeft = scrollLeft;
    // }
  },
};
</script>

