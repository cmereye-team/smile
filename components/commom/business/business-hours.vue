<template>
  <div class="businessHours">
    <H2Tag :title="[$t('home.footer.businessHours.title')]" />
    <div class="businessHours-img">
      <img
        v-if="isMobile"
        src="https://statichk.cmermedical.com/smile/b4675a061bce149a.webp"
        alt="营业环境"
      />
      <img
        v-else
        src="https://statichk.cmermedical.com/smile/b4675a061bce149a.webp"
        alt="营业环境"
      />
    </div>
    <div class="businessHours-time">
      <!-- <div>  -->
      <div>
        <h3>{{$t('home.footer.businessHours.weekday')}}</h3>
        <div>9:00-19:00</div>
      </div>
      <div>
        <h3>{{$t('home.footer.businessHours.saturday')}}</h3>
        <div>9:00-18:00</div>
      </div>
      <div>
        <h3>{{$t('home.footer.businessHours.publicHolidayAndSunday')}}</h3>
        <div>{{$t('home.footer.businessHours.rest')}}</div>
      </div>
      <!-- </div> -->
      <!-- <div
        class="listIn"
        v-for="(timer, index) in businessHours"
        :key="index"
      >
        <div class="listIn-name">
          {{ timer.name }}
          <sup
            :style="{
              display: index == 0 ? 'inline' : 'none',
              color: index == 0 ? '#4570B6' : '',
              fontWeight: index == 0 ? '500' : '',
            }"
            >#</sup
          >
        </div>
        <div class="listIn-context">
          <span class="context1" v-if="timer.type === '1'">{{
            timer.context
          }}</span>
          <span class="context2" v-if="timer.type === '2'"></span>
          <span class="context3" v-if="timer.type === '3'">{{
            timer.context
          }}</span>
          <span
            class="context4"
            v-if="timer.type === '4'"
            :class="`timer${index + 1}`"
          ></span>
        </div>
      </div> -->
    </div>
    <div class="businessHours-address">
      <a href="https://maps.app.goo.gl/xDKuhwM7gA9vvbSx8" target="_blank">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="27"
            viewBox="0 0 21 27"
            fill="none"
          >
            <path
              d="M10.6092 0.761963C8.92582 0.762151 7.27266 1.21402 5.81841 2.07146C4.36417 2.9289 3.16094 4.1612 2.3315 5.64258C1.50207 7.12396 1.07615 8.80137 1.09721 10.5036C1.11828 12.2059 1.58557 13.872 2.4514 15.3319C2.49132 15.3983 2.9446 16.151 8.49343 25.3321C8.70729 25.6896 9.00866 25.9852 9.36844 26.1905C9.72822 26.3958 10.1343 26.5038 10.5474 26.5042H10.5551C10.9663 26.5054 11.3709 26.4001 11.7304 26.1984C12.09 25.9966 12.3924 25.7051 12.609 25.3517L18.7335 15.3983C18.767 15.3436 18.7966 15.2928 18.821 15.2434C19.6668 13.7815 20.116 12.1199 20.1232 10.4262C20.1305 8.7326 19.6956 7.06704 18.8624 5.59788C18.0292 4.12871 16.8273 2.90799 15.3781 2.05909C13.929 1.2102 12.2839 0.763196 10.6092 0.763266V0.761963ZM18.0896 14.8266L18.078 14.8488C18.0599 14.8855 18.0397 14.9211 18.0175 14.9555L11.8943 24.9063C11.7535 25.1372 11.5564 25.3276 11.3219 25.4594C11.0874 25.5912 10.8234 25.6599 10.5551 25.659C10.2859 25.6587 10.0212 25.5884 9.78669 25.4547C9.55214 25.3211 9.35555 25.1286 9.21585 24.8959C9.15661 24.7969 3.23563 14.9985 3.17768 14.8995C2.38995 13.5717 1.96389 12.0566 1.94278 10.5083C1.92167 8.95992 2.30627 7.43353 3.0575 6.08421C3.80872 4.7349 4.89978 3.61077 6.2198 2.82606C7.53982 2.04136 9.04173 1.62406 10.5729 1.61657C12.1041 1.60908 13.6099 2.01168 14.9374 2.78344C16.2648 3.5552 17.3666 4.66861 18.1307 6.01052C18.8947 7.35242 19.2939 8.87499 19.2876 10.4235C19.2813 11.9719 18.8697 13.4911 18.0948 14.8266H18.0896Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
            <path
              d="M10.6086 5.79883C9.72319 5.79908 8.85776 6.04545 8.12172 6.50679C7.38567 6.96812 6.81207 7.62371 6.47343 8.39066C6.13479 9.1576 6.04633 10.0015 6.21922 10.8155C6.39212 11.6296 6.81861 12.3773 7.44477 12.9642C8.07093 13.551 8.86864 13.9506 9.73704 14.1125C10.6054 14.2743 11.5055 14.1911 12.3235 13.8734C13.1415 13.5557 13.8406 13.0178 14.3325 12.3276C14.8243 11.6374 15.0869 10.826 15.0869 9.99593C15.0843 8.8833 14.6117 7.81692 13.7723 7.03028C12.933 6.24365 11.7954 5.80085 10.6086 5.79883ZM10.6086 13.3595C9.89866 13.3595 9.20468 13.1621 8.61442 12.7923C8.02416 12.4225 7.56413 11.8969 7.29252 11.282C7.02091 10.6671 6.94991 9.99049 7.08851 9.33775C7.22711 8.685 7.56907 8.08544 8.07116 7.61491C8.57325 7.14438 9.2129 6.82402 9.90921 6.69433C10.6055 6.56464 11.3272 6.63147 11.983 6.88634C12.6388 7.14121 13.1993 7.57268 13.5935 8.12619C13.9877 8.6797 14.198 9.33038 14.1977 9.99593C14.1981 10.4381 14.1055 10.8761 13.9253 11.2848C13.7452 11.6934 13.4809 12.0648 13.1476 12.3778C12.8143 12.6907 12.4186 12.939 11.9829 13.1085C11.5473 13.2781 11.0803 13.3655 10.6086 13.3658V13.3595Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
          </svg>
        </div>
        <h3>中環</h3>
      </a>
      <a href="https://maps.app.goo.gl/J2Y6TQXVaUQPioPp7" target="_blank">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="27"
            viewBox="0 0 21 27"
            fill="none"
          >
            <path
              d="M10.6092 0.761963C8.92582 0.762151 7.27266 1.21402 5.81841 2.07146C4.36417 2.9289 3.16094 4.1612 2.3315 5.64258C1.50207 7.12396 1.07615 8.80137 1.09721 10.5036C1.11828 12.2059 1.58557 13.872 2.4514 15.3319C2.49132 15.3983 2.9446 16.151 8.49343 25.3321C8.70729 25.6896 9.00866 25.9852 9.36844 26.1905C9.72822 26.3958 10.1343 26.5038 10.5474 26.5042H10.5551C10.9663 26.5054 11.3709 26.4001 11.7304 26.1984C12.09 25.9966 12.3924 25.7051 12.609 25.3517L18.7335 15.3983C18.767 15.3436 18.7966 15.2928 18.821 15.2434C19.6668 13.7815 20.116 12.1199 20.1232 10.4262C20.1305 8.7326 19.6956 7.06704 18.8624 5.59788C18.0292 4.12871 16.8273 2.90799 15.3781 2.05909C13.929 1.2102 12.2839 0.763196 10.6092 0.763266V0.761963ZM18.0896 14.8266L18.078 14.8488C18.0599 14.8855 18.0397 14.9211 18.0175 14.9555L11.8943 24.9063C11.7535 25.1372 11.5564 25.3276 11.3219 25.4594C11.0874 25.5912 10.8234 25.6599 10.5551 25.659C10.2859 25.6587 10.0212 25.5884 9.78669 25.4547C9.55214 25.3211 9.35555 25.1286 9.21585 24.8959C9.15661 24.7969 3.23563 14.9985 3.17768 14.8995C2.38995 13.5717 1.96389 12.0566 1.94278 10.5083C1.92167 8.95992 2.30627 7.43353 3.0575 6.08421C3.80872 4.7349 4.89978 3.61077 6.2198 2.82606C7.53982 2.04136 9.04173 1.62406 10.5729 1.61657C12.1041 1.60908 13.6099 2.01168 14.9374 2.78344C16.2648 3.5552 17.3666 4.66861 18.1307 6.01052C18.8947 7.35242 19.2939 8.87499 19.2876 10.4235C19.2813 11.9719 18.8697 13.4911 18.0948 14.8266H18.0896Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
            <path
              d="M10.6086 5.79883C9.72319 5.79908 8.85776 6.04545 8.12172 6.50679C7.38567 6.96812 6.81207 7.62371 6.47343 8.39066C6.13479 9.1576 6.04633 10.0015 6.21922 10.8155C6.39212 11.6296 6.81861 12.3773 7.44477 12.9642C8.07093 13.551 8.86864 13.9506 9.73704 14.1125C10.6054 14.2743 11.5055 14.1911 12.3235 13.8734C13.1415 13.5557 13.8406 13.0178 14.3325 12.3276C14.8243 11.6374 15.0869 10.826 15.0869 9.99593C15.0843 8.8833 14.6117 7.81692 13.7723 7.03028C12.933 6.24365 11.7954 5.80085 10.6086 5.79883ZM10.6086 13.3595C9.89866 13.3595 9.20468 13.1621 8.61442 12.7923C8.02416 12.4225 7.56413 11.8969 7.29252 11.282C7.02091 10.6671 6.94991 9.99049 7.08851 9.33775C7.22711 8.685 7.56907 8.08544 8.07116 7.61491C8.57325 7.14438 9.2129 6.82402 9.90921 6.69433C10.6055 6.56464 11.3272 6.63147 11.983 6.88634C12.6388 7.14121 13.1993 7.57268 13.5935 8.12619C13.9877 8.6797 14.198 9.33038 14.1977 9.99593C14.1981 10.4381 14.1055 10.8761 13.9253 11.2848C13.7452 11.6934 13.4809 12.0648 13.1476 12.3778C12.8143 12.6907 12.4186 12.939 11.9829 13.1085C11.5473 13.2781 11.0803 13.3655 10.6086 13.3658V13.3595Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
          </svg>
        </div>
        <h3>旺角</h3>
      </a>
      <!-- <a href="https://maps.app.goo.gl/D71VbmfYaxufGroL6" target="_blank">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="27"
            viewBox="0 0 21 27"
            fill="none"
          >
            <path
              d="M10.6092 0.761963C8.92582 0.762151 7.27266 1.21402 5.81841 2.07146C4.36417 2.9289 3.16094 4.1612 2.3315 5.64258C1.50207 7.12396 1.07615 8.80137 1.09721 10.5036C1.11828 12.2059 1.58557 13.872 2.4514 15.3319C2.49132 15.3983 2.9446 16.151 8.49343 25.3321C8.70729 25.6896 9.00866 25.9852 9.36844 26.1905C9.72822 26.3958 10.1343 26.5038 10.5474 26.5042H10.5551C10.9663 26.5054 11.3709 26.4001 11.7304 26.1984C12.09 25.9966 12.3924 25.7051 12.609 25.3517L18.7335 15.3983C18.767 15.3436 18.7966 15.2928 18.821 15.2434C19.6668 13.7815 20.116 12.1199 20.1232 10.4262C20.1305 8.7326 19.6956 7.06704 18.8624 5.59788C18.0292 4.12871 16.8273 2.90799 15.3781 2.05909C13.929 1.2102 12.2839 0.763196 10.6092 0.763266V0.761963ZM18.0896 14.8266L18.078 14.8488C18.0599 14.8855 18.0397 14.9211 18.0175 14.9555L11.8943 24.9063C11.7535 25.1372 11.5564 25.3276 11.3219 25.4594C11.0874 25.5912 10.8234 25.6599 10.5551 25.659C10.2859 25.6587 10.0212 25.5884 9.78669 25.4547C9.55214 25.3211 9.35555 25.1286 9.21585 24.8959C9.15661 24.7969 3.23563 14.9985 3.17768 14.8995C2.38995 13.5717 1.96389 12.0566 1.94278 10.5083C1.92167 8.95992 2.30627 7.43353 3.0575 6.08421C3.80872 4.7349 4.89978 3.61077 6.2198 2.82606C7.53982 2.04136 9.04173 1.62406 10.5729 1.61657C12.1041 1.60908 13.6099 2.01168 14.9374 2.78344C16.2648 3.5552 17.3666 4.66861 18.1307 6.01052C18.8947 7.35242 19.2939 8.87499 19.2876 10.4235C19.2813 11.9719 18.8697 13.4911 18.0948 14.8266H18.0896Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
            <path
              d="M10.6086 5.79883C9.72319 5.79908 8.85776 6.04545 8.12172 6.50679C7.38567 6.96812 6.81207 7.62371 6.47343 8.39066C6.13479 9.1576 6.04633 10.0015 6.21922 10.8155C6.39212 11.6296 6.81861 12.3773 7.44477 12.9642C8.07093 13.551 8.86864 13.9506 9.73704 14.1125C10.6054 14.2743 11.5055 14.1911 12.3235 13.8734C13.1415 13.5557 13.8406 13.0178 14.3325 12.3276C14.8243 11.6374 15.0869 10.826 15.0869 9.99593C15.0843 8.8833 14.6117 7.81692 13.7723 7.03028C12.933 6.24365 11.7954 5.80085 10.6086 5.79883ZM10.6086 13.3595C9.89866 13.3595 9.20468 13.1621 8.61442 12.7923C8.02416 12.4225 7.56413 11.8969 7.29252 11.282C7.02091 10.6671 6.94991 9.99049 7.08851 9.33775C7.22711 8.685 7.56907 8.08544 8.07116 7.61491C8.57325 7.14438 9.2129 6.82402 9.90921 6.69433C10.6055 6.56464 11.3272 6.63147 11.983 6.88634C12.6388 7.14121 13.1993 7.57268 13.5935 8.12619C13.9877 8.6797 14.198 9.33038 14.1977 9.99593C14.1981 10.4381 14.1055 10.8761 13.9253 11.2848C13.7452 11.6934 13.4809 12.0648 13.1476 12.3778C12.8143 12.6907 12.4186 12.939 11.9829 13.1085C11.5473 13.2781 11.0803 13.3655 10.6086 13.3658V13.3595Z"
              fill="#4570B6"
              stroke="#4570B6"
              stroke-width="0.762058"
            />
          </svg>
        </div>
        <h3>尖沙咀</h3>
      </a> -->
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
  &-title {
    color: #4570b6;
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
    margin: 0 auto;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 40px;
      border-left: 2px solid #f5f4f4;
      & > h3:nth-child(1) {
        color: #4570b6;
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
    // .listIn {
    //   flex: 1;
    //   &:first-child {
    //     flex: 1.5;
    //   }
    //   &-name {
    //     color: #6b6b6b;
    //     font-size: 17px;
    //     font-weight: 300;
    //     // line-height: 180%; /* 30.6px */
    //     line-height: 54px;
    //     height: 54px;
    //     letter-spacing: 2.04px;
    //     border-bottom: 2px solid #f5f4f4;
    //     text-align: center;
    //   }
    //   &-context {
    //     line-height: 54px;
    //     height: 54px;
    //     border-bottom: 2px solid #f5f4f4;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     span {
    //       color: #4570b6;
    //       font-size: 17px;
    //       font-weight: 400;
    //       letter-spacing: 1.7px;
    //       white-space: nowrap;
    //       &.context1 {
    //         color: #6b6b6b;
    //       }
    //       &.context2 {
    //         width: 14px;
    //         height: 14px;
    //         display: block;
    //         border-radius: 50%;
    //         background-color: #4570b6;
    //       }
    //       &.context4 {
    //         width: 36px;
    //         height: 4px;
    //         display: block;
    //         border-radius: 2px;
    //         background-color: #4570b6;
    //         transform: rotate(150.642deg);
    //       }
    //     }
    //   }
    // }
  }
  &-address {
    display: flex;
    justify-content: center;
    margin: 54px auto 59px;

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
    &-title {
      font-size: 20px;
      padding-bottom: 22px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      &::before {
        height: 4px;
        border-radius: 2px;
      }
    }
    &-img {
      width: auto;
      margin: 28px 30px 34px;
      img {
        width: 100%;
        border-radius: 30px;
      }
    }
    &-time {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 12px;
        border-left: 2px solid #f5f4f4;
        & > h3:nth-child(1) {
          color: #4570b6;
          font-family: "Noto Sans";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 30.6px */
          letter-spacing: 2.04px;
        }
        & > div:nth-child(2) {
          color: #6b6b6b;
          font-family: "Yuanti TC";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 180%; /* 30.6px */
          letter-spacing: 1.7px;
        }
      }
      & > div:last-child {
        padding: 5px 8px;
        border-right: 2px solid #f5f4f4;
      }
      // flex-wrap: nowrap;
      // width: 84%;
      // max-width: 1280px;
      // padding: 0 30px;
      // overflow-x: scroll;

      // .listIn {
      //   // min-width: 32px;
      //   // max-width: 32px;
      //   // margin-right: 20px;
      //   // margin-bottom: 26px;
      //   display: flex;
      //   flex-direction: column;
      //   min-width: 110px;
      //   align-items: center;
      //   // &:first-child{
      //   // width: 58px;
      //   // max-width: 58px;
      //   // }
      //   // &:nth-of-type(7){
      //   // margin-left: 78px;
      //   // }

      //   &-name {
      //     line-height: 180%;
      //     height: auto;
      //     border-bottom: none;
      //     letter-spacing: 0;
      //     width: fit-content;
      //     white-space: nowrap;
      //     width: 100%;
      //     padding-bottom: 15px;
      //   }
      //   &-context {
      //     flex: 1;
      //     height: auto;
      //     line-height: 180%;
      //     min-height: 30px;
      //     border-bottom: none;
      //     width: 100%;
      //     padding: 15px 0;
      //     border-top: 2.83px solid #f5f4f4;
      //     border-bottom: 2.83px solid #f5f4f4;
      //     margin-bottom: 20px;
      //     span {
      //       // white-space: pre-wrap;
      //       &.context2 {
      //       }
      //       &.context4 {
      //         // transform: rotate(130.167deg);
      //       }
      //     }
      //   }
      //   &:last-child {
      //     .listIn-name {
      //       // line-height: 140%;
      //     }
      //   }
      // }
    }
    &-address {
      justify-content: space-evenly;
      margin: 23px auto 51px;
      & > a {
        flex-direction: column;
        &:not(:last-child) {
          margin-right: 0;
        }
        h3 {
          font-size: 14px;
          line-height: 40px; /* 200% */
          letter-spacing: 2px;
          min-width: 68px;
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
