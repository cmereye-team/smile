<template>
  <div class="businessHours">
    <!-- <H2Tag :title="[$t('home.footer.businessHours.title')]" /> -->
    <div class="businessHours-img">
      <img
        v-if="isMobile"
        src="https://statichk.cmermedical.com/smile/fee/945ac94d91dc.avif"
        alt="营业环境"
      />
      <img
        v-else
        src="https://statichk.cmermedical.com/smile/fee/5137fd9fd824.avif"
        alt="营业环境"
      />
    </div>
    <div>
      <div class="title-time">營業時間</div>
      <div class="businessHours-time">
        <div>
          <h3>{{ $t("home.footer.businessHours.weekday") }}</h3>
          <div>9:00-19:00</div>
        </div>
        <div>
          <h3>{{ $t("home.footer.businessHours.saturday") }}</h3>
          <div>9:00-18:00</div>
        </div>
        <div>
          <h3>{{ $t("home.footer.businessHours.publicHolidayAndSunday") }}</h3>
          <div>{{ $t("home.footer.businessHours.rest") }}</div>
        </div>
      </div>
      <div class="businessHours-address">
        <a href="https://maps.app.goo.gl/xDKuhwM7gA9vvbSx8" target="_blank">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="49"
              viewBox="0 0 36 49"
              fill="none"
            >
              <path
                d="M17.8993 1.08496C14.858 1.0853 11.8713 1.90169 9.24393 3.4508C6.61658 4.99992 4.44272 7.22628 2.94421 9.90266C1.44569 12.579 0.676181 15.6096 0.714237 18.685C0.752293 21.7604 1.59655 24.7705 3.16082 27.4081C3.23295 27.5281 4.05188 28.888 14.0768 45.4753C14.4632 46.1211 15.0077 46.6552 15.6577 47.0261C16.3077 47.397 17.0413 47.5922 17.7876 47.5928H17.8016C18.5444 47.595 19.2755 47.4048 19.925 47.0403C20.5746 46.6758 21.1211 46.1492 21.5124 45.5106L32.5773 27.5281C32.6378 27.4293 32.6913 27.3376 32.7355 27.2481C34.2635 24.6071 35.075 21.605 35.0881 18.5452C35.1012 15.4853 34.3154 12.4762 32.8101 9.8219C31.3048 7.16759 29.1334 4.96214 26.5152 3.42846C23.8971 1.89477 20.925 1.08719 17.8993 1.08732V1.08496ZM31.414 26.4952L31.3931 26.5352C31.3603 26.6016 31.3238 26.666 31.2837 26.7282L20.2211 44.7059C19.9667 45.1231 19.6105 45.4672 19.1869 45.7053C18.7632 45.9434 18.2863 46.0676 17.8016 46.0659C17.3152 46.0654 16.8371 45.9383 16.4133 45.6968C15.9896 45.4553 15.6344 45.1076 15.382 44.6871C15.275 44.5083 4.57766 26.8058 4.47297 26.627C3.04981 24.228 2.28004 21.4907 2.24191 18.6934C2.20377 15.896 2.89862 13.1383 4.25584 10.7006C5.61305 8.26278 7.58425 6.23183 9.9691 4.81412C12.3539 3.39641 15.0674 2.64248 17.8337 2.62896C20.6001 2.61544 23.3206 3.3428 25.7189 4.73712C28.1172 6.13144 30.1077 8.14301 31.4882 10.5674C32.8686 12.9918 33.5898 15.7426 33.5784 18.5402C33.567 21.3378 32.8235 24.0824 31.4233 26.4952H31.414Z"
                fill="#297492"
                stroke="#297492"
              />
              <path
                d="M17.8984 10.1843C16.2988 10.1848 14.7352 10.6299 13.4054 11.4634C12.0756 12.2969 11.0393 13.4813 10.4275 14.8669C9.81568 16.2525 9.65585 17.7771 9.96822 19.2479C10.2806 20.7186 11.0511 22.0695 12.1824 23.1298C13.3137 24.19 14.7549 24.912 16.3238 25.2044C17.8927 25.4968 19.5189 25.3465 20.9967 24.7725C22.4745 24.1985 23.7375 23.2266 24.6262 21.9797C25.5148 20.7327 25.9892 19.2668 25.9892 17.7671C25.9846 15.757 25.1307 13.8304 23.6143 12.4092C22.0978 10.988 20.0426 10.188 17.8984 10.1843ZM17.8984 23.844C16.6158 23.844 15.362 23.4874 14.2956 22.8193C13.2292 22.1512 12.398 21.2016 11.9073 20.0907C11.4166 18.9797 11.2883 17.7573 11.5387 16.578C11.7891 15.3987 12.407 14.3155 13.3141 13.4654C14.2212 12.6153 15.3768 12.0365 16.6348 11.8022C17.8929 11.5679 19.1967 11.6886 20.3816 12.1491C21.5664 12.6096 22.5789 13.3891 23.2912 14.3891C24.0034 15.3891 24.3833 16.5647 24.3828 17.7671C24.3834 18.5661 24.2162 19.3573 23.8907 20.0956C23.5652 20.834 23.0877 21.505 22.4856 22.0703C21.8834 22.6357 21.1684 23.0843 20.3813 23.3906C19.5943 23.6969 18.7506 23.8549 17.8984 23.8555V23.844Z"
                fill="#297492"
                stroke="#297492"
              />
            </svg>
          </div>
          <h3>中環</h3>
        </a>
        <a href="https://maps.app.goo.gl/J2Y6TQXVaUQPioPp7" target="_blank">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="49"
              viewBox="0 0 36 49"
              fill="none"
            >
              <path
                d="M17.8993 1.08496C14.858 1.0853 11.8713 1.90169 9.24393 3.4508C6.61658 4.99992 4.44272 7.22628 2.94421 9.90266C1.44569 12.579 0.676181 15.6096 0.714237 18.685C0.752293 21.7604 1.59655 24.7705 3.16082 27.4081C3.23295 27.5281 4.05188 28.888 14.0768 45.4753C14.4632 46.1211 15.0077 46.6552 15.6577 47.0261C16.3077 47.397 17.0413 47.5922 17.7876 47.5928H17.8016C18.5444 47.595 19.2755 47.4048 19.925 47.0403C20.5746 46.6758 21.1211 46.1492 21.5124 45.5106L32.5773 27.5281C32.6378 27.4293 32.6913 27.3376 32.7355 27.2481C34.2635 24.6071 35.075 21.605 35.0881 18.5452C35.1012 15.4853 34.3154 12.4762 32.8101 9.8219C31.3048 7.16759 29.1334 4.96214 26.5152 3.42846C23.8971 1.89477 20.925 1.08719 17.8993 1.08732V1.08496ZM31.414 26.4952L31.3931 26.5352C31.3603 26.6016 31.3238 26.666 31.2837 26.7282L20.2211 44.7059C19.9667 45.1231 19.6105 45.4672 19.1869 45.7053C18.7632 45.9434 18.2863 46.0676 17.8016 46.0659C17.3152 46.0654 16.8371 45.9383 16.4133 45.6968C15.9896 45.4553 15.6344 45.1076 15.382 44.6871C15.275 44.5083 4.57766 26.8058 4.47297 26.627C3.04981 24.228 2.28004 21.4907 2.24191 18.6934C2.20377 15.896 2.89862 13.1383 4.25584 10.7006C5.61305 8.26278 7.58425 6.23183 9.9691 4.81412C12.3539 3.39641 15.0674 2.64248 17.8337 2.62896C20.6001 2.61544 23.3206 3.3428 25.7189 4.73712C28.1172 6.13144 30.1077 8.14301 31.4882 10.5674C32.8686 12.9918 33.5898 15.7426 33.5784 18.5402C33.567 21.3378 32.8235 24.0824 31.4233 26.4952H31.414Z"
                fill="#297492"
                stroke="#297492"
              />
              <path
                d="M17.8984 10.1843C16.2988 10.1848 14.7352 10.6299 13.4054 11.4634C12.0756 12.2969 11.0393 13.4813 10.4275 14.8669C9.81568 16.2525 9.65585 17.7771 9.96822 19.2479C10.2806 20.7186 11.0511 22.0695 12.1824 23.1298C13.3137 24.19 14.7549 24.912 16.3238 25.2044C17.8927 25.4968 19.5189 25.3465 20.9967 24.7725C22.4745 24.1985 23.7375 23.2266 24.6262 21.9797C25.5148 20.7327 25.9892 19.2668 25.9892 17.7671C25.9846 15.757 25.1307 13.8304 23.6143 12.4092C22.0978 10.988 20.0426 10.188 17.8984 10.1843ZM17.8984 23.844C16.6158 23.844 15.362 23.4874 14.2956 22.8193C13.2292 22.1512 12.398 21.2016 11.9073 20.0907C11.4166 18.9797 11.2883 17.7573 11.5387 16.578C11.7891 15.3987 12.407 14.3155 13.3141 13.4654C14.2212 12.6153 15.3768 12.0365 16.6348 11.8022C17.8929 11.5679 19.1967 11.6886 20.3816 12.1491C21.5664 12.6096 22.5789 13.3891 23.2912 14.3891C24.0034 15.3891 24.3833 16.5647 24.3828 17.7671C24.3834 18.5661 24.2162 19.3573 23.8907 20.0956C23.5652 20.834 23.0877 21.505 22.4856 22.0703C21.8834 22.6357 21.1684 23.0843 20.3813 23.3906C19.5943 23.6969 18.7506 23.8549 17.8984 23.8555V23.844Z"
                fill="#297492"
                stroke="#297492"
              />
            </svg>
          </div>
          <h3>旺角</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
  components: {
    H2Tag,
  },
  data() {
    return {
      businessHours: [
        {
          type: "1",
          name: "營業時間",
          context: "9:00-19:00",
        },
        {
          type: "2",
          name: "星期一",
          context: "",
        },
        {
          type: "2",
          name: "星期二",
          context: "",
        },
        {
          type: "2",
          name: "星期三",
          context: "",
        },
        {
          type: "2",
          name: "星期四",
          context: "",
        },
        {
          type: "2",
          name: "星期五",
          context: "",
        },
        {
          type: "3",
          name: "星期六",
          context: "9:00-18:00",
        },
        {
          type: "4",
          name: "星期日",
          context: "",
        },
        {
          type: "4",
          name: "公眾假期",
          context: "",
        },
      ],
      isMobile: false,
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
  },
  isMobile: false,
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
<style lang="scss" scoped>
.businessHours {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 65px;
  gap: 0 38px;
  & > div:nth-child(1) {
    width: 36.829vw;
    margin: 0;
    max-width: 707px;
    & > img {
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
  .title-time {
    color: #297492;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    margin-bottom: 10px;
  }
  &-title {
    color: #297492;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    text-align: center;
    position: relative;
    padding-bottom: 30px;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  &-img {
    width: 100%;
    max-width: 1000px;
    margin: 34px auto 71px;
    img {
      border-radius: 47px;
      margin: auto;
    }
  }
  &-time {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 880px;
    margin: 20px auto;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px 20px;
      border-left: 2px solid #f5f4f4;
      & > h3:nth-child(1) {
        color: #297492;
        font-family: "Noto Sans";
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 30.6px */
        letter-spacing: 2.04px;
      }
      & > div:nth-child(2) {
        color: #6b6b6b;
        font-family: "Yuanti TC";
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 180%; /* 30.6px */
        letter-spacing: 1.7px;
      }
    }
    & > div:last-child {
      padding: 25px 13px;
      border-right: 2px solid #f5f4f4;
    }
  }
  &-address {
    display: flex;
    justify-content: center;
    margin: 54px 0 59px;

    & > a {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 100px;
      }
      div:nth-child(1) {
        margin-right: 9px;
        padding-left: 6px;
      }
      h3 {
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 23px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 173.913% */
        letter-spacing: 2.3px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .businessHours {
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      width: 84.35vw;
      height: 89.74vw;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .title-time {
      margin: 2.564vw auto 7.69vw;
      color: #297492;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 500;
      line-height: 1.2; /* 88.932% */
      letter-spacing: 1.23vw;
    }
    &-title {
      font-size: 5.128vw;
      padding-bottom: 5.64vw;
      line-height: 1.2; /* 116.525% */
      letter-spacing: 1.28vw;
      &::before {
        height: 1.025vw;
        border-radius: 0.512vw;
      }
    }
    &-img {
      width: auto;
      margin: 7.17vw 7.69vw 8.7vw;
      img {
        width: 100%;
        border-radius: 7.69vw;
      }
    }
    &-time {
      margin: 0 auto 2.56vw;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.28vw 3.07vw;
        border-left: 0.512vw solid #f5f4f4;
        & > h3:nth-child(1) {
          color: #297492;
          font-family: "Noto Sans";
          font-size: 3.07vw;
          font-style: normal;
          font-weight: 400;
          line-height: 1.6; /* 30.6px */
          letter-spacing: 0.52vw;
        }
        & > div:nth-child(2) {
          color: #6b6b6b;
          font-family: "Yuanti TC";
          font-size: 3.07vw;
          font-style: normal;
          font-weight: 500;
          line-height: 1.6; /* 30.6px */
          letter-spacing: 0.435vw;
        }
      }
      & > div:last-child {
        padding: 5px 8px;
        border-right: 2px solid #f5f4f4;
      }
    }
    &-address {
      justify-content: space-evenly;
      margin: 5.89vw auto 0;
      gap: 0 7.69vw;
      & > a {
        flex-direction: column;
        &:not(:last-child) {
          margin-right: 0;
        }
        & > div {
          width: 5.128vw;
          height: 6.41vw;
          & > svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          margin: 0 !important;
          padding: 0 !important;
        }
        h3 {
          font-size: clamp(14px, 3.58vw, 16px);
          line-height: 20px; /* 200% */
          letter-spacing: 0.512vw;
          min-width: 17.43vw;
          margin: auto;
          display: flex;
          text-align: center;
          justify-content: center;
        }
      }
    }
  }
  .businessHours-time::-webkit-scrollbar {
    height: 5px;
  }
  /*定义滚动条轨道：内阴影+圆角*/
  .businessHours-time::-webkit-scrollbar-track {
    border-radius: 5px;
    height: 3px;
    background: #d9d9d9;
  }
  .businessHours-time::-webkit-scrollbar-thumb {
    width: 184px;
    height: 3px;
    border-radius: 3px;
    border: #a6e1d6;
    background-color: #a6e1d6 !important;
  }
}
</style>
