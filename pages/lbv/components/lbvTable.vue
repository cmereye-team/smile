<template>
     <!-- 表格 -->
    <section class="smilepro-difference">
      <div class="smilepro-difference-title">
        <div>
          LBV/CLEAR-Vision/ICL Viva V6<br class="d-lg-none" />
          大不同
        </div>
      </div>

      <table class="table custom-comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>PRESB<br class="d-lg-none" />
YOND <br class="d-lg-none" />
LBV<br  />視覺融合<br class="d-lg-none" />老花激光<br class="d-lg-none" />手術</th>
            <th>
              CMER <br class="d-lg-none" />
CLEAR<br class="d-lg-none" />
Vision<br  /> 
人工晶體<br class="d-lg-none" />
置換術<br class="d-lg-none" />
            </th>
            <th>
             ICL Viva<br class="d-lg-none" /> V6<br  />植入式<br class="d-lg-none" />隱形眼鏡
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
             技術<br class="d-lg-none" />類型
            </td>
            <td>準分子激光 + <br>
全飛秒激光<br class="d-lg-none" />混合式老花<br class="d-lg-none" />矯視<br>(Laser<br class="d-lg-none" /> Blended<br class="d-lg-none" /> Vision)</td>
            <td>人工<br class="d-lg-none" />晶體置換</td>
            <td>植入式延伸<br class="d-lg-none" />景深(EDOF)<br /> 隱形眼鏡<br class="d-lg-none" />(非激光)</td>
          </tr>
          <tr>
            <td>可矯正<br class="d-lg-none" />範圍</td>
            <td>主要針對老花<br class="d-lg-none" />+近視1,200度/<br />遠視600度<br class="d-lg-none" />/散光500度</td>
            <td>主要針對<br class="d-lg-none" />老花 + <br class="hidden md:block" /> 近視/<br class="d-lg-none" />遠視/散光</td>
            <td>近視1,800 度<br class="d-lg-none" />以下、<br class="hidden md:block" />可<br class="d-lg-none" />同時矯正老花</td>
          </tr>
          <tr>
            <td>保留<br class="d-lg-none" />天然晶體?</td>
            <td><span class="flex items-center justify-center gap-2"><img  src="https://statichk.cmermedical.com/smile/feeV2/success.svg" alt="包括">保留</span></td>
            <td><span class="flex items-center justify-center gap-2"><img  src="https://statichk.cmermedical.com/smile/feeV2/error.svg" alt="包括">不保留</span></td>
            <td><span class="flex items-center justify-center gap-2"><img  src="https://statichk.cmermedical.com/smile/feeV2/success.svg" alt="包括">保留</span></td>
          </tr>

         

          <tr>
            <td>視力效果</td>
            <td>提供遠、<br class="d-lg-none" />中、近<br  />
「全距離高<br class="d-lg-none" />清視覺」<br>
<span class="text-[#73CE93] font-black">保留良好立<br class="d-lg-none" />體視覺</span>
</td>
            <td>視乎人工晶體<br class="d-lg-none" />選擇, <br class="hidden md:block" />
單焦距<br class="d-lg-none" />人工晶體用<br class="d-lg-none" />Mono-Vision<br class="d-lg-none" />方式能提供遠/<br class="d-lg-none" />近距離高清<br class="d-lg-none" />視力; <br class="hidden md:block" />
多焦距或<br class="d-lg-none" />延伸景深的<br class="d-lg-none" />人工晶體則能<br class="d-lg-none" />提供遠/中/近<br class="d-lg-none" />距離高清視力</td>
            <td>提供遠/中/近<br class="d-lg-none" />距離高清視力，<br> 特別加強中近<br class="d-lg-none" />距離 EDOF 視力</td>
          </tr>

          <tr>
            <td>
              可逆轉?
            </td>
            <td><img class="mx-auto" src="https://statichk.cmermedical.com/smile/feeV2/error.svg" alt="不包括"></td>
            <td><img class="mx-auto" src="https://statichk.cmermedical.com/smile/feeV2/error.svg" alt="不包括"></td>
            <td ><div class="flex items-center justify-center gap-2"><img  src="https://statichk.cmermedical.com/smile/feeV2/success.svg" alt="包括">可逆轉（晶體可取出）</div></td>
          </tr>

          
        </tbody>
      </table>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
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
</template>
<style lang="scss" scoped>
:deep(.share-img) {
  margin-top: 0;
}

.d-none {
  display: none;
}
i {
  font-style: normal;
}
.changehang {
  display: none;
}

@media screen and (min-width: 1139px) {
  .new-Footer-v2{
  margin-top: 0 !important;
}
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
  .smile-NewBanner {
    padding: 0 15px;
    // margin-top: 150px;
    height: 203px;
    position: relative;
    img {
      width: 200px;
      position: absolute;
      top: -59px;
      right: 64px;
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
      font-family: "Poppins";
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

  // 案例分享
  .CaseSharing {
    margin-top: 40px;
    margin-bottom: 30px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-mobile-share.avif")
      no-repeat;
    background-size: cover;
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

        justify-content: center;
        gap: 13.26px;
        width: 100vw;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 121px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 170px;
        }
        .CaseSharing-list-item {
          & > a {
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

    .CaseSharing-btn {
      width: 114.287px;
      height: 113.922px;

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

// 移动端
@media screen and (max-width: 992px) {
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

    .smilePro-newCenter-content {
      .smilePro-newCenter-content-text {
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-mobile-center.avif");
        background-repeat: no-repeat;
        background-size: cover;
        height: 503px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > div > div {
          max-width: 299px;
          margin: 0 auto;
          position: relative;
          z-index: 2;

          &::after {
            content: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-mobile-centerSmall2.webp");
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          h3 {
            position: relative;
            z-index: 2;
            text-align: center;

            margin-bottom: 10px;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 20.359px;
            font-style: normal;
            font-weight: 900;
            line-height: 20.359px;
          }
          p {
            position: relative;
            z-index: 2;
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.78;
            letter-spacing: 1.4px;
            span {
              color: #4570b6;
              font-style: normal;
              font-weight: 700;
            }
            .let {
              letter-spacing: 6.94px;
            }
          }
        }
      }
      .smilepro-Vedio {
        width: 100%;
        min-height: 221px;
        iframe {
          height: 221px;
        }
      }
    }
  }
  // 四大特点
  .smilepro-four-feature {
    padding: 0 15px;

    .smilepro-four-feature-Box {
      max-width: 332px;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 13.75px;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 1.42;
          letter-spacing: 2.1px;
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: 40px;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-mobileBg4.avif");
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 72%;

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          gap: 20.32px;
          margin-bottom: 34px;
          min-width: 284px;

          .smilepro-four-feature-Box-List-item-number {
            width: 74px;
            color: #4570b6;
            font-family: "Poppins";
            font-size: 60.224px;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 14.501px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 14.501px;
              font-style: normal;
              font-weight: 400;
              line-height: 21.751px;
            }
          }
        }
        & > .smilepro-four-feature-Box-List-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 93px;
    max-width: 1260px;
        margin-left: auto;
        margin-right: auto;
    .smilepro-difference-title {
      display: flex;
      justify-content: center;
      & > div {
        display: inline-block;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.05;
        position: relative;

        &::after {
          content: "";
          background: url("https://statichk.cmermedical.com/smile/smileproV2/table/smilepro-table-mobile-titleBgnew.png")
            no-repeat;
          width: 110.062px;
          height: 49px;
          position: absolute;
          top: -100%;
          right: -44px;
        }

        &::before {
          content: "一圖看清";
          position: absolute;
          top: calc(-100% + 1px);
          right: -32px;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 21.031px;
          font-style: normal;
          font-weight: 900;
          line-height: 2;
          transform: rotate(6deg);
          z-index: 2;
        }
      }
    }

    .custom-comparison-table {
      margin-top: 30px;
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    .custom-comparison-table tr {
      position: relative;
      z-index: 2;
      height: 82px;
    }
    .custom-comparison-table th,
    .custom-comparison-table td {
      border-bottom: 1px solid #d0d0d0;
      text-align: center;
      vertical-align: middle;
    }

    .custom-comparison-table thead th {
      background: #E6F9FF;
      width: 107px;
      height: 85px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.357;
      width: 27.18vw;
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 17.95vw;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #F8EEFF;
      color: #4570B6;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.314;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21.031px;
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 21.031px;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      // background: #5a8ad6;

      color: #60605F;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.314;
      letter-spacing: 0.6px;
    }
  }

  .icl-introVedio {
    position: relative;
    &::before {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg1.png");
      position: absolute;
      left: 0;
      top: -89px;
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg2.png");
      position: absolute;
      right: -61px;
      top: 15px;
      z-index: 1;
      pointer-events: none;
    }
    padding: 52px 15px 100px;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 10px;

        .steps {
          width: 25px;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 16.994px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          & > div:last-child {
            margin-bottom: 0;
          }
          div {
            position: relative;
            z-index: 2;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 10px;
            height: 65px;
            padding-right: 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: "Poppins", sans-serif;
            font-weight: 200;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins";
              font-size: 16.994px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
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
              font-size: 15.8px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.26;
              letter-spacing: -0.79px;
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
            }
            .content-area-text {
              position: absolute;
              // bottom: 12px;
              margin-top: 13px;
              left: 50%;
              transform: translateX(-50%);
              width: 228px;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.28;
              letter-spacing: 1.4px;
            }
          }
        }
      }
    }
  }

  .gameBox {
    .gameBox-content {
      padding-top: 52px;
      // padding-top: 65px;
      // max-width: 1654.98px;
      // width: 86.14vw;
      // height: 44.375vw;
      // max-height: 852.5px;
      -webkit-touch-callout: none; /* 禁用长按菜单 */
      -webkit-user-select: none; /* 禁用文本选择 */
      user-select: none;
      touch-action: none; /* 禁用默认触摸行为 */

      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .folder {
        text-align: center;
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img,
        svg {
          width: 116.492px;

          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #0056b3;
          }
        }
      }

      .draggable {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;
        transition: background-color 0.3s, box-shadow 0.3s;
        user-select: none;
        width: fit-content;

        img {
          width: 162.684px;
          height: 162.684px;
          flex-shrink: 0;
          border-radius: 13px;
        }

        .draggable-item-text {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.48;
          letter-spacing: 1.4px;
        }

        &:hover {
          background-color: #e0e0e0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      & > .draggable:nth-child(1) {
        position: absolute;
        left: 22px;
        top: 96px;
      }
    }
  }

  .smile-pro-evaluateV2 {
    background: #f4fafc;
    margin-top: 40px;
    padding-top: 44px;
    padding-bottom: 30px;
    margin-bottom: 40px;
    .smile-pro-evaluateV2-Box {
      .smile-pro-evaluateV2-Box-title {
        margin: 0 auto;
        width: 146.775px;
        height: 120.004px;
        flex-shrink: 0;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/evaluate/smilepro-evaluate-title-mobile1.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.56;
        letter-spacing: 2px;
        &::after {
          position: absolute;
          content: "";
          width: 90px;
          height: 65px;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/evaluate/smilepro-evaluate-title-mobile2.png");
          top: -28px;
          left: -58px;
        }
      }

      .smile-pro-evaluateV2-Box-content {
        margin-top: 12px;
        margin-left: 30px;
        height: 333px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
          background-repeat: no-repeat;
          width: 180.251px !important;
          height: 333px;
          border-radius: 20px;
          z-index: 3;
        }
        .swiper-overflow {
          overflow: hidden;
        }
        .swiperWrap {
          z-index: auto !important;
          overflow: unset;
          position: relative;
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              transition: all 0.3s ease;
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                background-color: white;

                width: 165px !important;
                height: 302px;
                padding: 40px 23.5px 43px;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 69px;
                  height: 69px;
                }

                .swiperWrap-item-text {
                  margin-top: 10px;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.666;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 23.5px;
                  bottom: 35px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.84px;
                }
              }
            }
            .swiper-slide-active {
              & > div {
                border-radius: 20px;
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
                // background-repeat: no-repeat;
                background-color: white;
                background-image: none;
                width: 180.251px !important;
                height: 333px;
                padding: 48px 29px 46px;
                text-align: center;
                position: relative;
                svg {
                  margin: 0 auto;
                  width: 74px;
                  height: 74px;
                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.714;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 29px;
                  bottom: 46px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.84px;
                }
              }
            }
          }
          .swiper-pagination {
            width: clamp(93px, 47.69vw, 186px);
            max-width: 186px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9;
            & > div {
              z-index: 9;
              pointer-events: auto;
              background-image: none;
            }
            .swiper-button-next {
              right: 0;
              svg {
                width: clamp(20px, 10.26vw, 40px);
              }
            }
            .swiper-button-prev {
              left: clamp(-16px, -4.1vw, -8px);
              svg {
                width: clamp(20px, 10.26vw, 40px);
              }
            }
          }
        }
      }
    }
  }
}

// 小于390
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
        text-align: justify;

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

  // 四大特点
  .smilepro-four-feature {
    padding: 0 15px;

    .smilepro-four-feature-Box {
      max-width: 85.13vw;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 3.53vw;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 500;
          line-height: 1.42;
          letter-spacing: 0.54vw;
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: 40px;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-mobileBg4.avif");
        background-repeat: no-repeat;
        background-position: right top;

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          gap: 5.21vw;
          margin-bottom: 8.72vw;
          min-width: 72.82vw;

          .smilepro-four-feature-Box-List-item-number {
            width: 18.97vw;
            color: #4570b6;
            font-family: "Poppins";
            font-size: 15.44vw;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 3.72vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 3.72vw;
              font-style: normal;
              font-weight: 400;
              line-height: 1.44;
            }
          }
        }
        & > .smilepro-four-feature-Box-List-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 23.85vw;
    .smilepro-difference-title {
      display: flex;
      justify-content: center;
      & > div {
        display: inline-block;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.05;
        position: relative;

        &::after {
          content: "";
          background: url("https://statichk.cmermedical.com/smile/smileproV2/table/smilepro-table-mobile-titleBgnew.png")
            no-repeat;
          width: 110.062px;
          height: 49px;
          position: absolute;
          top: calc(-100% - 4px);
          right: -44px;
        }

        &::before {
          content: "一圖看清";
          position: absolute;
          top: calc(-100% - 2px);
          right: -32px;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 21.031px;
          font-style: normal;
          font-weight: 900;
          line-height: 2;
          transform: rotate(6deg);
          z-index: 2;
        }
      }
    }

    .custom-comparison-table {
      margin-top: 7.69vw;
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    .custom-comparison-table tr {
      position: relative;
      z-index: 2;
      height: 21.03vw;
    }
    .custom-comparison-table th,
    .custom-comparison-table td {
      border-bottom: 1px solid #d0d0d0;
      text-align: center;
      vertical-align: middle;
    }

    .custom-comparison-table thead th {
      background: #E6F9FF;
      width: 27.44vw;
      height: 21.79vw;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 900;
      line-height: 1.357;
      width: 27.18vw;
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 17.95vw;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      // background: #4570b6;
      color: #4570B6;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.08vw;
      font-style: normal;
      font-weight: 300;
      line-height: 1.314;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.44;
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 3.08vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      // background: #5a8ad6;

      color: #60605F;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.08vw;
      font-style: normal;
      font-weight: 300;
      line-height: 1.314;
      letter-spacing: 0.6px;
    }
  }

  .icl-introVedio {
    position: relative;
    &::before {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg1.png");
      position: absolute;
      left: 0;
      top: -22.82vw;
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg2.png");
      position: absolute;
      right: -15.64vw;
      top: 3.85vw;
      z-index: 1;
      pointer-events: none;
    }
    padding: 13.33vw 15px 25.64vw;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 2.56vw;

        .steps {
          width: 6.41vw;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 4.36vw;
          font-style: normal;
          font-weight: 200;
          line-height: normal;
          & > div:last-child {
            margin-bottom: 0;
          }
          div {
            position: relative;
            z-index: 2;
            font-family: "Poppins", sans-serif;
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 2.56vw;
            height: 16.67vw;
            padding-right: 2.05vw;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins";
              font-size: 4.36vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
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
              font-size: 4.05vw;
              font-style: normal;
              font-weight: 900;
              line-height: 1.26;
              letter-spacing: -0.2vw;
            }
            svg {
              position: absolute;
              top: 5.13vw;
              left: 28.21vw;
            }
          }

          .content-area-img {
            max-width: 74.36vw;
            position: relative;
            z-index: 2;
            img {
              max-width: 100%;
              height: auto;
            }
            .content-area-text {
              position: absolute;
              // bottom: 3.08vw;
              margin-top: 3.33vw;
              left: 50%;
              transform: translateX(-50%);
              width: 58.46vw;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 600;
              line-height: 1.28;
              letter-spacing: 1.4px;
            }
          }
        }
      }
    }
  }

  .smile-pro-evaluateV2 {
    background: #f4fafc;
    padding-top: 11.28vw;
    padding-bottom: 7.69vw;
    margin-bottom: 0;
    .smile-pro-evaluateV2-Box {
      .smile-pro-evaluateV2-Box-content {
        margin-top: 3.08vw;
        margin-left: 7.69vw;
        height: 85.38vw;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
          background-repeat: no-repeat;
          background-size: cover;

          width: 46.22vw !important;
          height: 85.38vw;
          border-radius: 5.13vw;
          z-index: 3;
        }

        .swiperWrap {
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                background-size: cover;
                background-color: white;
                width: 42.31vw !important;
                height: 77.44vw;
                padding: 10.26vw 6.03vw 11.03vw;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 17.69vw;
                  height: 17.69vw;
                }

                .swiperWrap-item-text {
                  margin-top: 2.56vw;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 3.08vw;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.666;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 6.03vw;
                  bottom: 8.97vw;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.22vw;
                }
              }
            }
            .swiper-slide-active {
              & > div {
                border-radius: 5.13vw;
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
                // background-repeat: no-repeat;
                // background-size: cover;
                // background-color: white;
                background-color: white;

                background-image: none;
                width: 46.22vw !important;
                height: 85.38vw;
                padding: 12.31vw 7.44vw 11.79vw;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 18.97vw;
                  height: 18.97vw;
                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.714;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 7.44vw;
                  bottom: 11.79vw;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.22vw;
                }
              }
            }
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
    background-size: cover;
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

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 31.03vw;
        }
        & > .CaseSharing-list-item:nth-child(3) {
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

// pc端
@media screen and (min-width: 992px) {
  .changehon {
    display: block;
  }
  .d-lg-none {
    display: none;
  }
  .d-lg-none-imp {
    display: none !important;
  }
  .d-lg-block {
    display: block;
  }
  // 中心简介
  .smile-newCenter {
    position: relative;
    .smile-newCenter-menu {
      padding: 0px;
      margin-bottom: clamp(29px, 3.02vw, 58px);
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: clamp(0.18px, 0.02vw, 0.36px);
      padding-left: clamp(38.5px, 4.01vw, 77px);
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC" !important;
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 2.175;
        letter-spacing: clamp(0.3px, 0.03vw, 0.6px);
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    .smilePro-newCenter-content {
      .smilePro-newCenter-content-text {
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-pc-center.avif");
        background-repeat: no-repeat;
        background-size: cover;
        height: clamp(420px, 43.75vw, 840px);
        display: flex;
        justify-content: center;
        align-items: center;

        & > div > div {
          width: clamp(312.5px, 32.55vw, 625px);
          height: clamp(312.5px, 32.55vw, 625px);
          padding: clamp(59px, 6.15vw, 118px) clamp(34px, 3.54vw, 68px)
            clamp(73px, 7.6vw, 146px) clamp(42px, 4.38vw, 84px);

          text-align: center;
          background-color: white;
          border-radius: 50%;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-pc-centerSmall1.webp");
            background-repeat: no-repeat;
            background-size: cover;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: clamp(381px, 39.69vw, 762px);
            height: clamp(381px, 39.69vw, 762px);
          }
          h3 {
            position: relative;
            z-index: 2;
            text-align: center;

            margin-bottom: clamp(8px, 0.83vw, 16px);
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: clamp(15px, 1.56vw, 30px);
            font-style: normal;
            font-weight: 900;
            line-height: 1;
          }
          p {
            max-width: clamp(236.5px, 24.64vw, 473px);
            position: relative;
            z-index: 2;
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 300;
            line-height: 1.75;
            letter-spacing: clamp(2px, 0.21vw, 4px);
            span {
              color: #4570b6;
              font-style: normal;
              font-weight: 700;
            }
            .let {
              letter-spacing: clamp(5.45px, 0.57vw, 10.9px);
            }
          }
        }
      }
      .smilepro-Vedio {
        position: absolute;
        right: clamp(44.5px, 4.64vw, 89px);
        bottom: calc(-1 * clamp(69px, 7.19vw, 138px));
        width: 100%;
        width: clamp(252px, 26.25vw, 504px);
        height: clamp(142px, 14.79vw, 284px);
        iframe {
          height: clamp(142px, 14.79vw, 284px);
        }
      }
    }
  }

  // 四大特点
  .smilepro-four-feature {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-pcBg.webp");
      background-repeat: no-repeat;
      background-size: 100%;
      right: 0;
      top: -81px;
      pointer-events: none;
      width: clamp(324px, 33.75vw, 648px);
      height: clamp(325px, 33.85vw, 650px);
    }
    .smilepro-four-feature-Box {
      max-width: clamp(538px, 56.04vw, 1076px);
      margin: 0 auto;

      .smilepro-four-feature-Box-top {
        display: flex;
        gap: clamp(23.5px, 2.45vw, 47px);

        h3 {
          span {
            font-family: "Poppins";
            font-weight: 700;
          }
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 500;
          line-height: 1.8;
          letter-spacing: clamp(2.5px, 0.26vw, 5px);
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: clamp(50px, 5.21vw, 100px);
        position: relative;
        z-index: 2;

        display: flex;
        flex-wrap: wrap;
        gap: clamp(59px, 6.15vw, 118px) clamp(8.5px, 0.89vw, 17px);

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          // gap: clamp(16.5px,1.72vw,33px);
          gap: clamp(10px, 1.04vw, 20px);
          min-width: clamp(262px, 27.29vw, 524px);

          .smilepro-four-feature-Box-List-item-number {
            color: #4570b6;
            font-family: "Poppins";
            font-size: clamp(41.5px, 4.32vw, 83px);
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
            width: clamp(52.5px, 5.47vw, 105px);
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 400;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 230px;
    max-width: 1260px;
        margin-left: auto;
        margin-right: auto;
    .smilepro-difference-title {
      display: flex;
      justify-content: center;
      & > div {
        display: inline-block;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        position: relative;
        span {
          color: #4570b6;
          font-family: "Poppins";
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
        }
        &::after {
          content: url("https://statichk.cmermedical.com/smile/smileproV2/table/smilepro-table-pc-titleBg.png");
          position: absolute;
          top: -66px;
          right: -50px;
        }
      }
    }

    .custom-comparison-table {
      margin: 0 auto;
      margin-top: 67px;
      border-collapse: collapse;
      border-spacing: 0;
    }
    .custom-comparison-table tr th {
      height: 148px;
    }
    .custom-comparison-table tr {
      height: 117px;
    }
    .custom-comparison-table th,
    .custom-comparison-table td {
      border-bottom: 1.5px solid #d0d0d0;
      text-align: center;
      vertical-align: middle;
    }

    .custom-comparison-table thead th {
      background: #E6F9FF;
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      width: 253px;

      span {
        text-align: center;
        font-family: "Poppins";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.3;
      }
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 210px;
      border: none;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #F8EEFF;
      color: #4570B6;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.125;
      letter-spacing: 1px;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 4px;
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      // background: #5a8ad6;
      font-weight: 300;
      color: #60605F;
    }
    // 按钮
    .icl-btn {
      margin-top: 63px;
    }
  }

  // 流程
  .icl-introVedio {
    width: 100vw;
    position: relative;
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/intro/smilepro-intro-pc-bg.avif");
      position: absolute;
      top: -520px;
      right: 0;
      pointer-events: none;
    }

    padding: 200px 0 86px;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        position: relative;
        z-index: 2;
        &::after {
          content: url("https://statichk.cmermedical.com/smile/smileproV2/intro/smilepro-pc-intro-ricto.png");
          position: absolute;
          left: -378px;
          bottom: -178px;
          pointer-events: none;
        }

        width: fit-content;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 35px;

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
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 30px;
            height: 140px;
            padding-right: 13.5px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 38px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
              border-right: 5px solid #4570b6;
            }
          }
          & > div:last-child {
            margin-bottom: 0;
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
              line-height: 1.26;
              letter-spacing: 0;
            }
            svg {
              width: 32px;
              height: 32px;
              position: absolute;
              top: 40px;
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

              width: 220px;

              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 23px;
              font-style: normal;
              font-weight: 350;
              line-height: 1.52;
              letter-spacing: 8.05px;
            }
          }
        }
      }
    }
  }

  .gameBox {
    .gameBox-content {
      padding-top: 52px;
      // padding-top: 65px;
      // max-width: 1654.98px;
      // width: 86.14vw;
      // height: 44.375vw;
      // max-height: 852.5px;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .folder {
        text-align: center;
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img,
        svg {
          width: 116.492px;

          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #0056b3;
          }
        }
      }

      .draggable {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;
        transition: background-color 0.3s, box-shadow 0.3s;
        user-select: none;
        width: fit-content;

        img {
          width: 162.684px;
          height: 162.684px;
          flex-shrink: 0;
          border-radius: 13px;
        }

        .draggable-item-text {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.48;
          letter-spacing: 1.4px;
        }

        &:hover {
          background-color: #e0e0e0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      & > .draggable:nth-child(1) {
        position: absolute;
        left: 22px;
        top: 96px;
      }
    }
  }

  // 用家见证
  .smile-pro-evaluateV2 {
    max-width: 100vw;
    width: 100vw;

    background: #f4fafc;
    margin-top: 90px;
    padding-top: 62px;
    padding-bottom: 93px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -125px;
      right: 28px;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc03.png");
      background-repeat: no-repeat;
      width: clamp(400px, 31.4vw, 603px);
      height: clamp(300px, 25.72vw, 494px);
      background-size: cover;
      z-index: 1;
    }

    .smile-pro-evaluateV2-Box {
      max-width: 1760px;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      .smile-pro-evaluateV2-Box-title {
        width: 285px;
        height: 234px;
        flex-shrink: 0;
        flex-shrink: 0;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc1.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 194px;
        top: 50%;
        transform: translateY(-50%);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.16;
        letter-spacing: 15.3px;
        writing-mode: vertical-rl;
        &::after {
          position: absolute;
          content: "";
          width: 163px;
          height: 118px;
          flex-shrink: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc2.png");
          top: -59px;
          left: -84px;
        }
      }

      .smile-pro-evaluateV2-Box-content {
        max-width: 1362px;
        position: relative;
        // position: absolute;
        // top: 50%;
        // left: 396px;
        transform: translateX(396px);
        height: 552.006px;
        z-index: 2;

        &::after {
          content: "";
          position: absolute;
          left: -1px;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc-active.png");
          background-repeat: no-repeat;
          // background-color: white;
          width: 300.502px !important;
          height: 552.006px;
          overflow: hidden;
          border-radius: 35px;
          z-index: 3;
        }
        .swiper-overflow {
          overflow: hidden;
        }
        .swiperWrap {
          z-index: auto !important;
          overflow: unset;
          .overflow-swiper {
            overflow: hidden;
          }

          .swiper-wrapper {
            align-items: center;
            width: 100%;
            & > .swiper-slide-next {
              margin-left: -20px;
            }
            .swiper-slide-active ~ .swiper-slide {
              margin-left: -18px;
            }

            .swiperWrap-item {
              // width: 206.662px !important;

              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc.png");
                background-repeat: no-repeat;

                width: 206.662px !important;
                height: 378.96px;
                flex-shrink: 0;
                padding: 40px 29px 43px;
                text-align: center;
                position: relative;
                svg {
                  margin: 0 auto;
                  width: 89px;
                  height: 89px;
                  flex-shrink: 0;
                }

                .swiperWrap-item-text {
                  margin-top: 29px;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 14.466px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.75;
                  letter-spacing: normal;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 29px;
                  bottom: 43px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14.466px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.3a;
                  letter-spacing: 0.868px;
                }
              }
            }
            .swiper-slide-active {
              width: 300.502px !important;
              & > div {
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc-active.png");
                // background-repeat: no-repeat;
                background-image: none;
                // background-color: white;
                background-color: white;

                width: 274px !important;
                height: 552.006px;
                flex-shrink: 0;
                padding: 79px 36px 77px;
                text-align: center;
                position: relative;
                margin: 0 auto;
                svg {
                  margin: 0 auto;
                  width: 123px;
                  height: 123px;

                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.75;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 49px;
                  bottom: 77px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.3;
                  letter-spacing: 1.2px;
                }
              }
            }
          }
          .swiper-pagination {
            width: 300.502px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9;
            & > div {
              z-index: 9;
              pointer-events: auto;
              background-image: none;
            }
            .swiper-button-next {
              right: 0;
            }
            .swiper-button-prev {
              left: -14px;
            }
          }
        }
      }
    }
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

  .smile-NewBanner {
    padding: 0px;
    // margin-top: 213px;
    height: 529px;
    position: relative;
    img {
      width: 500px;
      position: absolute;
      top: -27px;
      left: inherit;
      right: 239px;
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
        position: relative;
        top: 2px;
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
    width: 100vw;
    .smile-newCenter-menu {
      padding: 0px;
      margin-bottom: clamp(29px, 3.02vw, 58px);
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: clamp(38.5px, 4.01vw, 77px);
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC" !important;
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 2.175;
        letter-spacing: clamp(0.3px, 0.03vw, 0.6px);
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
  }

  .icl-WhatChoose {
    padding: 123px 0px;
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
        max-width: 415px;
        text-align: justify;
      }
      // .icl-WhatChoose-content-one-img{

      // }
      .icl-WhatChoose-content-one-text {
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.95;
          letter-spacing: 4px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 45px;
            letter-spacing: 4px;
          }
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
  }

  // 案例分享
  .CaseSharing {
    max-width: 100vw;
    overflow: hidden;
    margin-top: 104px;
    margin-bottom: 80px;
    // background: url("https://statichk.cmermedical.com/smile/smileproV2/share/smilepro-pc-share-bg.png")
    //   no-repeat;
    //   background-position: 50% 0;

    padding: 149px 0 228px;
    position: relative;

    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-pc-share-newbg.png");
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
      z-index: 1;
    }

    .CaseSharing-Box {
      position: relative;
      z-index: 2;
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
        text-align: right;
      }
      .CaseSharing-list {
        display: flex;
        justify-content: center;
        gap: 60px;
        flex-wrap: nowrap;
        overflow-x: auto;

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 97px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 207px;
        }
        .CaseSharing-list-item {
          & > a {
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

    .CaseSharing-btn {
      width: 164.085px;
      height: 163.562px;

      position: absolute;
      bottom: 60px;
      right: -20px;
    }
    .icl-btn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
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
  .icl-peculiarity {
    .icl-peculiarity-list {
      & > .icl-peculiarity-list-item:nth-child(1) {
        margin-left: 45px;
      }
    }
    &::after {
      content: "";
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-peculiarity-bg1.avif")
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
</style>
