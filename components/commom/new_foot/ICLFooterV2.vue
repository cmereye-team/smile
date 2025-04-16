<style lang="scss" scoped>
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

@media screen and (max-width: 390px) {
  .new-Footer-v2 {
    .new-Footer-v2-address {
      padding: 35px 20px 26px 20px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  // 新的底部
  .footer-bottom-mobile {
    display: none !important;
  }
  .new-Footer-v2 {
    section {
      padding: 0 15px;
      padding-bottom: 40px;
      margin-top: 60px;
      background: #f4fafc;
    }

    .new-Footer-v2-address {
      max-width: 360px;
      margin: 0 auto;
      border-radius: 14.518px;
      border: 0.484px solid #4570b6;
      background-color: #fff;
      padding: 35px clamp(15px, 17.94vw, 70px) 26px clamp(15px, 13.07vw, 51px);

      // padding: 35px 70px 26px 51px;
      position: relative;
      top: -33px;
      &::after {
        // background-image: ;
        background-repeat: no-repeat;
        content: url("https://statichk.cmermedical.com/smile/smileproV2/newFooterV2-bgicon.png");
        // width: 102px;
        // height: 200px;
        position: absolute;
        right: 24px;
        bottom: -10px;
        z-index: 1;
      }
      .new-Footer-v2-logo {
      }
      .new-Footer-v2-addressTime {
        margin-top: 34px;
        .new-Footer-v2-addressTime-title {
          margin-bottom: 13px;
          color: #4570b6;
          text-align: left;
          font-family: "Noto Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 0.8;
          letter-spacing: 4.5px;
        }
        .new-Footer-v2-addressTime-item {
          display: flex;
          justify-content: space-between;
          & > div:nth-child(1) {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.71;
            letter-spacing: 1.68px;
            white-space: nowrap;
          }
          & > div:nth-child(2) {
            width: 86px;
            white-space: nowrap;
            text-align: left;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 1.68px;
          }
        }
      }

      .new-Footer-v2-loction {
        position: relative;
        z-index: 2;
        margin-top: 36px;
        & > .new-Footer-v2-loction-item:nth-child(1) {
          margin-bottom: 24px;
        }
        .new-Footer-v2-loction-item {
          & > div {
            position: relative;
            h4 {
              color: #4570b6;
              font-family: "Noto Sans";
              font-size: 18px;
              font-style: normal;
              font-weight: 800;
              line-height: 0.8;
            }
            a {
              display: inline-block;
              width: 35px;
              height: 32px;
              position: absolute;
              left: 38px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          p {
            margin-top: 8px;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: 0.6px;
          }
        }
      }
    }

    // 菜单
    .new-Footer-v2-menu {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 30px;

      .new-Footer-v2-menu-left,
      .new-Footer-v2-menu-right {
        display: flex;
        flex-direction: column;
        gap: 16px;
        .new-Footer-v2-menu-left-item {
          &::before {
            content: "";
            display: inline-block;
            width: 7.262px;
            height: 7.262px;
            flex-shrink: 0;
            background: #4570b6;
            border-radius: 50%;
            margin-right: 10px;
            margin-bottom: 2px;
          }
          .new-Footer-v2-menu-item-title {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 14.524px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 2.179px;
          }
          ul {
            padding-left: 18px;
            li {
              margin-top: 3.78px;
              .new-Footer-v2-menu-item-link {
                color: #6d6e71;
                font-family: "Noto Sans TC";
                font-size: 14.524px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.179px;
              }
            }
          }
        }
      }

      .new-Footer-v2-menu-right-url {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 93px;
        a {
          cursor: pointer;
          display: block;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .footer-bottom {
    margin: auto;
    margin-bottom: 102px;
    background: #fff;
    padding: 15px 0;
    color: #6d6e71;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1.2px;
  }
}
@media screen and (min-width: 992px) {
  .d-lg-block {
    display: block;
  }
  .d-lg-none {
    display: none;
  }

  // 新的底部
  .new-Footer-v2 {
    width: 100vw;
    background: #f4fafc;
    padding-bottom: 10px;
    margin-top: 175px;
    section {
      display: flex;
      gap: 95px;
    }

    .new-Footer-v2-address {
      max-width: 684px;
      border-radius: 30px;
      border: 1px solid #4570b6;
      background-color: #fff;

      padding: 74px 116px 85px 76px;
      position: relative;
      top: -74px;
      &::after {
        // background-image: ;
        background-repeat: no-repeat;
        content: url("https://statichk.cmermedical.com/smile/newFooterV2-bgicon-pc.avif");
        // width: 102px;
        // height: 200px;
        position: absolute;
        right: 72px;
        bottom: -20px;
        z-index: 1;
      }
      .new-Footer-v2-logo {
        display: block;
        max-width: 492px;
        width: 25.625vw;
      }
      .new-Footer-v2-addressTime {
        margin-top: 63px;
        .new-Footer-v2-addressTime-title {
          margin-bottom: 10px;
          color: #4570b6;
          text-align: left;
          font-family: "Noto Sans";
          font-size: 30px;
          font-style: normal;
          font-weight: 600;
          line-height: 1; /* 100% */
          letter-spacing: 7.5px;
        }
        .new-Footer-v2-addressTime-item {
          display: flex;
          justify-content: space-between;

          & > div:nth-child(1) {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 18.973px;
            font-style: normal;
            font-weight: 500;
            line-height: 180%;
            letter-spacing: 2.277px;
          }
          & > div:nth-child(2) {
            width: 120px;
            text-align: left;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 18.973px;
            font-style: normal;
            font-weight: 500;
            line-height: 180%;
            letter-spacing: 2.277px;
          }
        }
      }

      .new-Footer-v2-loction {
        position: relative;
        z-index: 2;
        margin-top: 36px;
        & > .new-Footer-v2-loction-item:nth-child(1) {
          margin-bottom: 35px;
        }
        .new-Footer-v2-loction-item {
          & > div {
            position: relative;
            h4 {
              color: #4570b6;
              font-family: "Noto Sans";
              font-size: 24px;
              font-style: normal;
              font-weight: 800;
              line-height: 1.25;
            }
            a {
              display: inline-block;
              width: 58px;
              height: 52px;
              position: absolute;
              left: 45px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          p {
            margin-top: 14px;
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.666;
          }
        }
      }
    }

    // 菜单
    .new-Footer-v2-menu {
      position: relative;
      padding-top: 83px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      // gap: 184px;
      flex: 1;

      .new-Footer-v2-menu-left,
      .new-Footer-v2-menu-right {
        display: flex;
        flex-direction: column;
        gap: 32px;
        .new-Footer-v2-menu-left-item {
          white-space: nowrap;
          &::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            background: #4570b6;
            border-radius: 50%;
            margin-right: 16px;
            margin-bottom: 4px;
          }
          .new-Footer-v2-menu-item-title {
            white-space: nowrap;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 24.032px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 3.605px;
          }
          ul {
            padding-left: 28px;
            li {
              margin-top: 6px;
              .new-Footer-v2-menu-item-link {
                white-space: normal;
                color: #6d6e71;
                font-family: "Noto Sans TC";
                font-size: 24.032px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
          }
        }
      }

      .new-Footer-v2-menu-right-url {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 130px;
        a {
          cursor: pointer;
          display: block;
          svg {
            width: 26px;
            height: 26px;
          }
        }
      }
    }
  }

  .footer-bottom {
    position: absolute;
    bottom: 70px;
    left: 24px;

    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 1.6px;
  }
}
</style>
<template>
  <div class="new-Footer-v2">
    <section class="new-container">
      <div class="new-Footer-v2-address">
        <a class="new-Footer-v2-logo" href="/">
          <!-- <img
            class="d-lg-none"
            src="https://statichk.cmermedical.com/smile/smileproV2/new-Smile-footer-mobile-LogoV2.svg"
            alt=""
          /> -->

          <svg
            class="d-lg-none"
            width="100%"
            height="104"
            viewBox="0 0 329 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="329" height="104" fill="url(#pattern0_10261_75)" />
            <defs>
              <pattern
                id="pattern0_10261_75"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_10261_75"
                  transform="matrix(0.0013947 0 0 0.00441208 0 -0.000771108)"
                />
              </pattern>
              <image
                id="image0_10261_75"
                width="717"
                height="227"
                preserveAspectRatio="none"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAs0AAADjCAYAAAB+dinuAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3de3gc5X0v8C9VfNHKwpYvj4xvkm2smOBgJ9yLE4vSwduUgikmgaSJN4f0koMpZnNoSJ60yCknSU96FrvAw2mLD+vkaSCJCTalZMQeHuRglxAgkcG0inyTZNnY9UWyZa98QQ/nj3lHnp15Z96Z3Zm9SN/P8/gBzc7ObWd2f/PO7/29F3344YcgIiIiIiJ3H7H+oSX1FgAPl2ZTiAjA2kwq3lLqjSAiIqJcv1PqDSAiIiIiKncMmomIiIiIFBg0ExEREREpMGgmIiIiIlJg0ExEREREpMCgmYiIiIhIgUEzEREREZECg2YiIiIiIgUGzURERERECgyaiYiIiIgUGDQTERERESkwaCYiIiIiUmDQTERERESkwKCZiIiIiEiBQTMRERERkQKDZiIiIiIiBQbNREREREQKDJqJiIiIiBQYNBMRERERKTBoJiIiIiJSYNBMRERERKTAoJmIiIiISIFBMxERERGRAoNmIiIiIiIFBs1ERERERAoMmomIiIiIFBg0ExEREREpMGgmIiIiIlJg0ExEREREpMCgmYiIiIhIgUEzEREREZECg2YiIiIiIgUGzURERERECgyaiYiIiIgUGDQTERERESkwaCYiIiIiUmDQTERERESkwKCZiIiIiEiBQTMRERERkQKDZiIiIiIiBQbNREREREQKDJqJiIiIiBQYNBMRERERKTBoJiIiIiJSYNBMRERERKTAoJmIiIiISIFBMxERERGRAoNmIiIiIiIFBs1ERERERAoMmomIiIiIFBg0ExEREREpMGgmIiIiIlJg0ExEREREpMCgmYiIiIhIgUEzEREREZECg2YiIiIiIgUGzURERERECgyaiYiIiIgUGDQTERERESl8pNQbQEREVExaUm8AsBZAHEC95aU9ADZlUvGHSrJhRFTW2NJMRESjhgiYXwawCrkBMwDMhxFIExE5sKWZiIhGk1dgBMdERIEwaCaigoiWuwcBLAVwKYAa8dJpAO0AthXyuFtL6t8D8HUAf51JxR8pcHPty3wgk4qvC/C+NfZpXu/XkvrnAFzid/4gy8nDW5lUfFuBywiyPc9nUvHuMNYXFi2pfwsMmKnIxPXyBwCWIPc7EjC+J3fD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XIdBO312sdWeRpqLPvzww+E/xKNDt1w1Ioqer7JmREREVFxMzyAiIiIiUmDQTERERESkwKCZiIiIiEiBQTMRERERkQKDZiIiIiIiBQbNREREREQKDJqJiIiIiBQYNBMRERERKTBoJiIiIiJSYNBMRERERKTAoJmIiIiISIFBMxERERGRAoNmIiIiIiIFBs1ERERERAoMmomIiIiIFBg0ExEREREpMGgmIiIiIlJg0ExEREREpMCgmYiIiIhIgUEzEREREZECg2YiIiIiIgUGzURERERECgyaiYiIiIgUGDQTERERESkwaCYiIiIiUmDQTERERESkwKCZiIiIiEiBQTMR+2+kFwAAARVJREFUERERkQKDZiIiIiIiBQbNREREREQKDJqJiIiIiBQYNBMRERERKTBoJiIiIiJSYNBMRERERKTAoJmIiIiISIFBMxERERGRAoNmIiIiIiIFBs1ERERERAoMmomIiIiIFBg0ExEREREpMGgmIiIiIlJg0ExEREREpMCgmYiIiIhIgUEzEREREZECg2YiIiIiIgUGzURERERECgyaiYiIiIgUGDQTERERESkwaCYiIiIiUmDQTERERESkwKCZiIiIiEiBQTMRERERkQKDZiIiIiIiBQbNREREREQKDJqJiIiIiBQYNBMRERERKTBoJiIiIiJSYNBMRERERKTAoJmIiIiISOGiDz/8sNTbQERERERU1v4/fiQIDDEWph8AAAAASUVORK5CYII="
              />
            </defs>
          </svg>

          <img
            class="d-none d-lg-block"
            src="https://statichk.cmermedical.com/smile/smileproV2/Smile-footer-mobile-LogoV2.svg"
            alt=""
          />
        </a>

        <div class="new-Footer-v2-addressTime">
          <h4 class="new-Footer-v2-addressTime-title">
            {{ $t("home.footer.businessHours.title") }}
          </h4>
          <div class="new-Footer-v2-addressTime-item">
            <div>{{ $t("home.footer.businessHours.weekday") }}</div>
            <div>9:00-19:00</div>
          </div>

          <div class="new-Footer-v2-addressTime-item">
            <div>{{ $t("home.footer.businessHours.saturday") }}</div>
            <div>9:00-18:00</div>
          </div>

          <div class="new-Footer-v2-addressTime-item">
            <div>
              {{ $t("home.footer.businessHours.publicHolidayAndSunday") }}
            </div>
            <div>{{ $t("home.footer.businessHours.rest") }}</div>
          </div>
        </div>

        <div class="new-Footer-v2-loction">
          <div class="new-Footer-v2-loction-item">
            <div>
              <h4>{{ $t("home.footer.businessHours.center") }}</h4>
              <a
                ><img
                  src="https://statichk.cmermedical.com/smile/new-footerV2-address-pc.avif"
                  alt=""
              /></a>
            </div>
            <p>
              {{ $t("home.footer.businessHours.centerAddress1") }}<br />
              {{ $t("home.footer.businessHours.centerAddress2") }}
            </p>
          </div>

          <div class="new-Footer-v2-loction-item">
            <div>
              <h4>{{ $t("home.footer.businessHours.mongKok") }}</h4>
              <a
                ><img
                  src="https://statichk.cmermedical.com/smile/new-footerV2-address-pc.avif"
                  alt=""
              /></a>
            </div>
            <p>
              {{ $t("home.footer.businessHours.mongKokAddress1")
              }}<br class="d-lg-none" />{{
                $t("home.footer.businessHours.mongKokAddress2")
              }}<br class="d-none d-lg-block" />{{
                $t("home.footer.businessHours.mongKokAddress3")
              }}
            </p>
          </div>
        </div>
      </div>

      <div class="new-Footer-v2-menu">
        <div class="new-Footer-v2-menu-left">
          <!-- 關於希瑪 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="groupList.link"
              class="new-Footer-v2-menu-item-title"
              >{{ groupList.main_nav }}</nuxt-link
            >
            <ul>
              <li v-for="(item, index) in groupList.child_list" :key="index">
                <nuxt-link
                  class="new-Footer-v2-menu-item-link"
                  :to="item.link"
                  href=""
                  >{{ item.child_item }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!--矯視服務  -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="OrthopedicList.link"
              class="new-Footer-v2-menu-item-title"
              >{{ OrthopedicList.main_nav }}</nuxt-link
            >
            <ul>
              <li
                v-for="(item, index) in OrthopedicList.child_list"
                :key="index"
              >
                <nuxt-link
                  class="new-Footer-v2-menu-item-link"
                  :to="item.link"
                  href=""
                  >{{ item.child_item }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!-- 診症須知 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="diagnosisInstructionsList.link"
              class="new-Footer-v2-menu-item-title"
              >{{ diagnosisInstructionsList.main_nav }}</nuxt-link
            >
            <ul>
              <li
                v-for="(item, index) in diagnosisInstructionsList.child_list"
                :key="index"
              >
                <nuxt-link
                  class="new-Footer-v2-menu-item-link"
                  :to="item.link"
                  href=""
                  >{{ item.child_item }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="new-Footer-v2-menu-right">
          <!-- 收費詳情 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="reservationService.link"
              class="new-Footer-v2-menu-item-title"
              >{{ reservationService.main_nav }}</nuxt-link
            >
          </div>
          <!-- 醫生介紹 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="medicalTeam.link"
              class="new-Footer-v2-menu-item-title"
              >{{ medicalTeam.main_nav }}</nuxt-link
            >
          </div>
          <!-- 常見問題 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link :to="faq.link" class="new-Footer-v2-menu-item-title">{{
              faq.main_nav
            }}</nuxt-link>
          </div>

          <!-- 矯視資訊 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="newVideo.link"
              class="new-Footer-v2-menu-item-title"
              >{{ newVideo.main_nav }}</nuxt-link
            >
            <ul>
              <li v-for="(item, index) in newVideo.child_list" :key="index">
                <nuxt-link
                  class="new-Footer-v2-menu-item-link"
                  :to="item.link"
                  href=""
                  >{{ item.child_item }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!-- 聯絡我們 -->
          <div class="new-Footer-v2-menu-left-item">
            <nuxt-link
              :to="contactUs.link"
              class="new-Footer-v2-menu-item-title"
              >{{ contactUs.main_nav }}</nuxt-link
            >
          </div>

          <div class="new-Footer-v2-menu-right-url">
            <a target="_blank" href="https://www.facebook.com/CMER.SMILE">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  d="M26 13.5C26 6.04415 20.1797 0 13 0C5.82029 0 0 6.04415 0 13.5C0 20.2381 4.75389 25.8232 10.9688 26.836V17.4023H7.66797V13.5H10.9688V10.5258C10.9688 7.14234 12.9096 5.27344 15.879 5.27344C17.3009 5.27344 18.7891 5.53711 18.7891 5.53711V8.85938H17.1498C15.535 8.85938 15.0313 9.90009 15.0313 10.9688V13.5H18.6367L18.0604 17.4023H15.0313V26.836C21.2461 25.8232 26 20.2381 26 13.5Z"
                  fill="#4570B6"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/cmer_smile/?hl=en"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 2.43105C17.107 2.43105 17.5342 2.44687 18.9527 2.51016C20.2711 2.56816 20.983 2.78965 21.4576 2.97422C22.0852 3.2168 22.5387 3.51211 23.008 3.98145C23.4826 4.45605 23.7727 4.9043 24.0152 5.53184C24.1998 6.00645 24.4213 6.72363 24.4793 8.03672C24.5426 9.46055 24.5584 9.8877 24.5584 13.4895C24.5584 17.0965 24.5426 17.5236 24.4793 18.9422C24.4213 20.2605 24.1998 20.9725 24.0152 21.4471C23.7727 22.0746 23.4773 22.5281 23.008 22.9975C22.5334 23.4721 22.0852 23.7621 21.4576 24.0047C20.983 24.1893 20.2658 24.4107 18.9527 24.4688C17.5289 24.532 17.1018 24.5479 13.5 24.5479C9.89297 24.5479 9.46582 24.532 8.04727 24.4688C6.72891 24.4107 6.01699 24.1893 5.54238 24.0047C4.91484 23.7621 4.46133 23.4668 3.99199 22.9975C3.51738 22.5229 3.22734 22.0746 2.98477 21.4471C2.8002 20.9725 2.57871 20.2553 2.5207 18.9422C2.45742 17.5184 2.4416 17.0912 2.4416 13.4895C2.4416 9.88242 2.45742 9.45527 2.5207 8.03672C2.57871 6.71836 2.8002 6.00645 2.98477 5.53184C3.22734 4.9043 3.52266 4.45078 3.99199 3.98145C4.4666 3.50684 4.91484 3.2168 5.54238 2.97422C6.01699 2.78965 6.73418 2.56816 8.04727 2.51016C9.46582 2.44687 9.89297 2.43105 13.5 2.43105ZM13.5 0C9.83496 0 9.37617 0.0158203 7.93652 0.0791016C6.50215 0.142383 5.51602 0.374414 4.66172 0.706641C3.77051 1.05469 3.01641 1.51348 2.26758 2.26758C1.51348 3.01641 1.05469 3.77051 0.706641 4.65645C0.374414 5.51602 0.142383 6.49687 0.0791016 7.93125C0.0158203 9.37617 0 9.83496 0 13.5C0 17.165 0.0158203 17.6238 0.0791016 19.0635C0.142383 20.4979 0.374414 21.484 0.706641 22.3383C1.05469 23.2295 1.51348 23.9836 2.26758 24.7324C3.01641 25.4813 3.77051 25.9453 4.65645 26.2881C5.51602 26.6203 6.49688 26.8523 7.93125 26.9156C9.3709 26.9789 9.82969 26.9947 13.4947 26.9947C17.1598 26.9947 17.6186 26.9789 19.0582 26.9156C20.4926 26.8523 21.4787 26.6203 22.333 26.2881C23.2189 25.9453 23.973 25.4813 24.7219 24.7324C25.4707 23.9836 25.9348 23.2295 26.2775 22.3436C26.6098 21.484 26.8418 20.5031 26.9051 19.0688C26.9684 17.6291 26.9842 17.1703 26.9842 13.5053C26.9842 9.84023 26.9684 9.38145 26.9051 7.9418C26.8418 6.50742 26.6098 5.52129 26.2775 4.66699C25.9453 3.77051 25.4865 3.01641 24.7324 2.26758C23.9836 1.51875 23.2295 1.05469 22.3436 0.711914C21.484 0.379687 20.5031 0.147656 19.0688 0.084375C17.6238 0.0158203 17.165 0 13.5 0Z"
                  fill="#4570B6"
                />
                <path
                  d="M13.501 6.56543C9.67246 6.56543 6.56641 9.67148 6.56641 13.5C6.56641 17.3285 9.67246 20.4346 13.501 20.4346C17.3295 20.4346 20.4355 17.3285 20.4355 13.5C20.4355 9.67148 17.3295 6.56543 13.501 6.56543ZM13.501 17.9982C11.0172 17.9982 9.00273 15.9838 9.00273 13.5C9.00273 11.0162 11.0172 9.00176 13.501 9.00176C15.9848 9.00176 17.9992 11.0162 17.9992 13.5C17.9992 15.9838 15.9848 17.9982 13.501 17.9982Z"
                  fill="#4570B6"
                />
                <path
                  d="M22.3277 6.29131C22.3277 7.1878 21.6 7.91026 20.7088 7.91026C19.8123 7.91026 19.0898 7.18252 19.0898 6.29131C19.0898 5.39483 19.8176 4.67236 20.7088 4.67236C21.6 4.67236 22.3277 5.4001 22.3277 6.29131Z"
                  fill="#4570B6"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg?view_as=public"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.6163 1.44974C25.0197 1.87135 25.3094 2.39559 25.4564 2.97C26 5.09011 26 9.51136 26 9.51136C26 9.51136 26 13.9326 25.4564 16.0527C25.3094 16.6271 25.0197 17.1514 24.6163 17.573C24.2129 17.9946 23.7099 18.2988 23.1577 18.4551C21.125 19.0227 13 19.0227 13 19.0227C13 19.0227 4.875 19.0227 2.84227 18.4551C2.29009 18.2988 1.78713 17.9946 1.38373 17.573C0.980326 17.1514 0.690631 16.6271 0.543636 16.0527C0 13.9326 0 9.51136 0 9.51136C0 9.51136 0 5.09011 0.543636 2.97C0.690631 2.39559 0.980326 1.87135 1.38373 1.44974C1.78713 1.02813 2.29009 0.723939 2.84227 0.567614C4.875 0 13 0 13 0C13 0 21.125 0 23.1577 0.567614C23.7099 0.723939 24.2129 1.02813 24.6163 1.44974ZM17.1392 9.5113L10.3438 5.49658V13.526L17.1392 9.5113Z"
                  fill="#4570B6"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          class="footer-bottom footer-bottom-mobile m-auto d-none d-lg-block"
        >
          <p>
            <span
              >©2025 {{ $t("home.footer.span1")
              }}{{ $t("home.footer.span2") }}</span
            >
            <span>
              <nuxt-link :to="localePath('/privacy-policy')">{{
                $t("home.footer.span3")
              }}</nuxt-link>
            </span>
            |
            <span>
              <nuxt-link :to="localePath('/disclaimer')">{{
                $t("home.footer.span4")
              }}</nuxt-link>
            </span>
          </p>
        </div>
      </div>
    </section>
    <div class="footer-bottom m-auto d-lg-none">
      <p>
        <span
          >©2025 {{ $t("home.footer.span1")
          }}{{ $t("home.footer.span2") }}</span
        >
        <span>
          <nuxt-link :to="localePath('/privacy-policy')">{{
            $t("home.footer.span3")
          }}</nuxt-link>
        </span>
        |
        <span>
          <nuxt-link :to="localePath('/disclaimer')">{{
            $t("home.footer.span4")
          }}</nuxt-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      groupList: {
        main_nav: this.$t("home.headers.aboutSmile"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.aboutSmileChild_1"),
            link: "/group-profile",
          },
          {
            child_item: this.$t("home.headers.aboutSmileChild_3"),
            link: "/medical-equipment",
          },
        ],
      },
      OrthopedicList: {
        main_nav: this.$t("home.headers.orthopedicServices"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_5"),
            link: "/smilePro",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_4"),
            link: "/vision-correction-icl",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_1"),
            link: "/vision-correction/relex-smile",
          },
          {
            child_item: "CMER CLEAR-Vision",
            link: "/vision-correction-presbyopia",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_3"),
            link: "/vision-correction-lasik",
          },
        ],
      },
      diagnosisInstructionsList: {
        main_nav: this.$t("home.headers.diagnosisInstructions"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
            link: "/patient-info",
          },
                 {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
            link: "/post-corrective-care",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
            link: "/flow-of-vision-correction",
          },
   
        ],
      },
      faq: {
        main_nav: this.$t("home.headers.commonProblem"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.commonProblemChild_1"),
            link: "/FreQuestions#faq-smile",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_2"),
            link: "/FreQuestions#faq-lasik",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_3"),
            link: "/FreQuestions#faq-icl",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_4"),
            link: "/FreQuestions#faq-presbyopia",
          },
        ],
      },
      contactUs: {
        main_nav: this.$t("home.headers.contactUs"),
        link: "/contact-us",
      },
      newVideo: {
        main_nav: this.$t("home.headers.feign"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.feign_knowledge"),
            link: "/blog",
          },
          { child_item: this.$t("home.headers.casesSharing"), link: "/video" },
        ],
      },
      ophthalmicConsultation: {
        main_nav: this.$t("home.headers.ophthalmicConsultation"),
        link: "/ophthalmicInfo/mediaCov",
      },
      reservationService: {
        main_nav: this.$t("home.headers.feeConsultation"),
        link: "/fee",
      },
      medicalTeam: {
        main_nav: this.$t("home.headers.medicalTeam"),
        link: "/our-medical-team",
      },
      video: {
        main_nav: this.$t("home.headers.videos"),
        link: "/video",
      },
      share: {
        main_nav: this.$t("home.headers.casesSharing"),
        link: "/video",
      },
      navList: [
        {
          main_nav: this.$t("home.headers.aboutSmile"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.aboutSmileChild_1"),
              link: "/about-us/centre-introduction",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_2"),
              link: "/about-us/medical-team",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_3"),
              link: "/about-us/medical-equipment",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.orthopedicServices"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_1"),
              link: "/vision-correction/relex_smile",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: "CMER CLEAR-Vision",
              link: "/vision-correction-presbyopia/CLEAR_Vision",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/vision-correction-lasik/LASIK",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/vision-correction-icl/ICL",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.diagnosisInstructions"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
              link: "/patient-info",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
              link: "/flow-of-vision-correction",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
              link: "/post-corrective-care",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.commonProblem"),
          link: "/FreQuestions",
          child_list: [
            {
              child_item: this.$t("home.headers.commonProblemChild_1"),
              link: "/FreQuestions#faq-smile",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_2"),
              link: "/FreQuestions#faq-lasik",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_3"),
              link: "/FreQuestions#faq-icl",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_4"),
              link: "/FreQuestions#faq-presbyopia",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.ophthalmicConsultation"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_1"),
              link: "/ophthalmicInfo/shareVideos",
            },
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_2"),
              link: "/ophthalmicInfo/mediaCov",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.reservationService"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.reservationServiceChild_1"),
              link: "/eye-checkup",
            },
            {
              child_item: this.$t("home.headers.reservationServiceChild_2"),
              link: "/ophthalmicInfo/AppointForm",
            },
          ],
        },
      ],

      isMobile: false,
    };
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
  },
};
</script>