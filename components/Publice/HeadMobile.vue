<template>
  <div class="HeadMobile">
    <div class="mbHeaderBox mb_menu">
      <div @click="langBox = !langBox">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00001 0.5C7.21998 0.5 5.47992 1.02783 3.99988 2.01676C2.51983 3.00569 1.36627 4.4113 0.685087 6.05584C0.00389886 7.70037 -0.17433 9.50996 0.172937 11.2558C0.520203 13.0016 1.37737 14.6053 2.63604 15.8639C3.89471 17.1226 5.49837 17.9798 7.24419 18.327C8.99002 18.6743 10.7996 18.4961 12.4441 17.8149C14.0887 17.1337 15.4943 15.9801 16.4832 14.5001C17.4722 13.0201 18 11.28 18 9.49999C18 7.11304 17.0518 4.82386 15.3639 3.13604C13.6761 1.44821 11.387 0.5 9.00001 0.5ZM16.7352 8.86051H13.3484C13.2632 6.05631 12.6095 3.65 11.61 2.17684C13.0161 2.6807 14.2474 3.57902 15.1563 4.76434C16.0653 5.94966 16.6134 7.37178 16.7352 8.86051ZM9.00001 17.24C7.57896 17.24 6.03946 14.341 5.89736 10.1063H12.1026C11.9653 14.36 10.4068 17.2589 9.00001 17.2589V17.24ZM5.89736 8.86051C6.03946 4.62578 7.59791 1.72684 9.00001 1.72684C10.4021 1.72684 11.9653 4.62578 12.1026 8.86051H5.89736ZM6.39475 2.17684C5.39528 3.67368 4.74157 6.05631 4.65631 8.86051H1.26949C1.3948 7.37512 1.94456 5.95708 2.85328 4.77541C3.762 3.59375 4.99133 2.6983 6.39475 2.19578V2.17684ZM1.26949 10.1063H4.63737C4.72263 12.9105 5.37631 15.2931 6.37578 16.79C4.97622 16.284 3.75121 15.3871 2.84611 14.2058C1.94101 13.0245 1.39382 11.6083 1.26949 10.1253V10.1063ZM11.61 16.79C12.6095 15.2931 13.2632 12.9105 13.3484 10.1063H16.7352C16.6164 11.5982 16.0696 13.0241 15.1605 14.213C14.2514 15.4019 13.0186 16.3032 11.61 16.8089V16.79Z"
            fill="#4570B6"
          />
        </svg>
      </div>
      <div @click="langDrawer = !langDrawer">

        <i></i><i></i><i></i>

        </div>
    </div>
    <div class="langBox" v-if="langBox">
      <nuxt-link
        :class="['text-center', $i18n.locale === 'hk' ? 'langBoxClass' : '']"
        :to="switchLocalePath('hk')"
      >
        繁体
      </nuxt-link>
      <nuxt-link
        :class="['text-center', $i18n.locale === 'cn' ? 'langBoxClass' : '']"
        :to="switchLocalePath('cn')"
      >
        简体
      </nuxt-link>
    </div>
    <div class="mb_menu_box" v-if="langDrawer">
      <div class="mb_menu_close">
        <div style="padding-top: 10px; padding-bottom: 10px">
          <img
            class="head_logo"
            src="@/asset/image/common/sliderLogo.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="../../asset/image/common/slideVector.png"
            class="mr-5"
            alt=""
            @click="langDrawer = true"
          />
          <div @click="langDrawer = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="41" viewBox="0 0 52 41" fill="none">
  <rect width="51.8574" height="41" rx="19" fill="#4570B6"/>
  <path d="M14.6562 11.587H36.6393" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M14.6562 20.5001H36.6393" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M14.6562 29.4131H36.6393" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>
        
            
            <!-- <i></i><i></i> -->
            </div>
        </div>
      </div>
      <div class="mb_menu_list">
        <!-- <div>
          <img
            src="https://static.cmereye.com/imgs/2023/08/6fad924059f2fcad.png"
            alt=""
          />
        </div> -->
        <div>
          <div class="mb_menu_style 2222">
            <DetailOption
              :group="groupList"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption
              :group="OrthopedicList"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption
              :group="diagnosisInstructionsList"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption
              :group="newVideo"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption :group="faq" :pcOrMobile="'mobile'" :dataSrc="''" />

            <DetailOption
              :group="contactUs"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption
              :group="ophthalmicConsultation"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption
              :group="reservationService"
              :pcOrMobile="'mobile'"
              :dataSrc="''"
            />

            <DetailOption :group="video" :pcOrMobile="'mobile'" :dataSrc="''" />

            <DetailOption :group="share" :pcOrMobile="'mobile'" :dataSrc="''" />
            <!-- <div style="minwidth: 140px"></div> -->
          </div>
        </div>
      </div>

      <div class="mb_menu_slidefooter">
        <div>
          <a href="https://www.facebook.com/CMER.SMILE"
            ><img src="@/asset/image/common/SliderFaceBook.png" alt=""
          /></a>
          <a href="https://www.instagram.com/cmer_smile/"
            ><img src="@/asset/image/common/SliderIns.png" alt=""
          /></a>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303"
            ><img src="@/asset/image/common/SliderYouTuBe.png" alt=""
          /></a>
        </div>

                <div>
          <p>
            <span
              >©2023 {{ $t("home.footer.span1")
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
      <!-- <div class="mb_menu_footer">
        <div>
          <nuxt-link :to="localePath('/')">
            <img class="foot_logo" src="@/asset/image/common/Logo.svg" alt="" />
          </nuxt-link>
          <div>
            <a href="https://www.facebook.com/CMER.SMILE"
              ><img src="@/asset/image/common/fbook.png" alt=""
            /></a>
            <a href="https://www.instagram.com/cmer_smile/"
              ><img src="@/asset/image/common/ins.png" alt=""
            /></a>
            <a href="https://www.youtube.com/@cmersmileeyecenter6303"
              ><img src="@/asset/image/common/youtube.png" alt=""
            /></a>
          </div>
        </div>
        <div>
          <p>
            <span
              >©2023 {{ $t("home.footer.span1")
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
      </div> -->
    </div>
  </div>
</template>

<script>
import DetailOption from "@/components/commom/option/slide.vue";
export default {
  components: {
    DetailOption,
  },
  data() {
    return {
      langBox: false,
      langDrawer: false,
      groupList: {
        main_nav: this.$t("home.headers.aboutSmile"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.aboutSmileChild_1"),
            link: "/group-profile",
          },
          {
            child_item: this.$t("home.headers.aboutSmileChild_2"),
            link: "/our-medical-team",
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
      newVideo: {
        main_nav: "矯視資訊",
        link: "",
        child_list: [
          { child_item: this.$t("home.headers.casesSharing"), link: "/video" },
          {
            child_item: "科普知識",
            link: "/blog",
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
            child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
            link: "/flow-of-vision-correction",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
            link: "/post-corrective-care",
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
      ophthalmicConsultation: {
        main_nav: this.$t("home.headers.ophthalmicConsultation"),
        link: "/ophthalmicInfo/mediaCov",
      },
      reservationService: {
        main_nav: this.$t("home.headers.feeConsultation"),
        link: "/fee",
      },
      video: {
        main_nav: this.$t("home.headers.videos"),
        link: "/video",
      },
      share: {
        main_nav: this.$t("home.headers.casesSharing"),
        link: "/video",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
  .HeadMobile {
    position: relative;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .mb_menu_box {
    position: fixed;
    background: #4570b6;
    top: 0;
    left: 0;
    right: 0;
    overflow: auto;
    padding-bottom: 100px;
    /* 隐藏滚动条，但仍然可以滚动 */
    scrollbar-width: none; /* Firefox */
    // background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
  .mbHeaderBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mb_menu {
    display: flex;
    align-items: center;
    position: relative;
    & > div {
      margin-left: 10px;
    }
    & > div:nth-child(2) {
      width: 41px;
      height: 41px;
      background: #4570b6;
      border-radius: 19px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > i {
        display: inline-block;
        width: 55%;
        height: 3px;
        background: #fff;
        border-radius: 3px;
      }

      & > i:nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  .langBoxClass {
    color: #fff !important;
    background: #4570b6 !important;
  }
  .langBox-title {
    color: #6d6e71;
    text-align: center;
    line-height: 40px;
  }

  .langBox {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 50px;
    top: 32px;
    width: 80px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #4570b6;
    padding-top: 0;
    & > a {
      width: 100%;
      padding: 10px 0;
    }
  }
  .mb_menu_close {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:nth-child(2) {
      display: flex;
      align-items: center;

      & > div:nth-child(2) {
        width: 41px;
        height: 41px;
        background: #4570b6;
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > i {
          display: inline-block;
          width: 55%;
          height: 3px;
          background: #fff;
          border-radius: 3px;
          position: relative;
        }

        & > i:nth-child(1) {
          transform: rotate(45deg);
          top: 1.5px;
        }

        & > i:nth-child(2) {
          transform: rotate(-45deg);
          top: -1.5px;
        }
      }
    }
  }

  .mb_menu_list {
    & > div:nth-child(1) {
      margin: 12px 0;
      margin: 0 17px;
      padding-left: 10px;
      display: flex;
      justify-content: left;
    }

    & > div:nth-child(2) {
      width: 85%;
      margin: auto;
      & > div:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        // padding-left: 20px;
        justify-content: center;
        align-items: flex-start;

        & > div {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;
          justify-content: center;
          // max-width: 42%;
          flex: 1;

          & > div:nth-child(1) {
            min-width: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            // margin-right: 10px;
          }
        }

        // & > div:nth-child(odd) {
        //   margin-right: 20px;
        // }

        a {
          -webkit-tap-highlight-color: transparent;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;

        & > a:nth-child(2) {
          margin: 0 24px;
        }
      }
    }
  }

  .mb_menu_slidefooter {
    background: #4570B6;
     margin-bottom: 64px;
    &>div:nth-child(1){
      padding-left: 35px;
    margin-top: 43px;
    margin-block: 43px;
    display: flex;
    gap: 20px;
    align-items: center;
    }

        & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      color: #FFF;
      text-align: center;
      font-size: 9px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      /* 222.222% */
      letter-spacing: 0.9px;
    }

  }

  .mb_menu_footer {
    margin-bottom: 64px;
    // background: #4570B6;

    & > div:nth-child(1) {
      padding: 25px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: url("https://static.cmereye.com/imgs/2023/08/d6f27536cde86418.png");
      background-size: 100%, 100%;
      background-repeat: no-repeat;
      & > div:nth-child(2) {
        margin-top: 24px;
        display: flex;
        align-items: center;
        & > a:nth-child(2) {
          margin: 0 12px;
        }
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      color: #6d6e71;
      text-align: center;
      font-size: 9px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      /* 222.222% */
      letter-spacing: 0.9px;
    }
  }
}
</style>