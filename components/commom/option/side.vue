<template>
  <div>
    <div class="slide">
      <div
        v-for="(item, index) in caidanList"
        :key="index"
        @click="clickOptionIndex(index)"
      >
        <!-- <nuxt-link class="title" :to="localePath(item.link)"> -->
        <div class="title">
          <!-- 标题内容 -->
          <div v-if="item.link != ''">
            <nuxt-link class="title" :to="localePath(item.link)">
              <div
                :class="clickOption == index ? 'cliHoverActive' : 'cliHover'"
              >
                <div
                  style="white-space: nowrap"
                  :class="$i18n.locale === 'en' ? 'engWidth' : ''"
                >
                  {{ item.main_nav }}
                </div>
                <span v-if="item.child_list && item.child_list.length > 0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    fill="none"
                  >
                    <path
                      d="M0.999999 0.999992L6.62289 7.19033L1 13.3807"
                      stroke="white"
                      stroke-width="1.65076"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div
            v-else
            :class="clickOption == index ? 'cliHoverActive' : 'cliHover'"
          >
            <div
              style="white-space: nowrap"
              :class="$i18n.locale === 'en' ? 'engWidth' : ''"
            >
              {{ item.main_nav }}
            </div>
            <span v-if="item.child_list && item.child_list.length > 0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  d="M0.999999 0.999992L6.62289 7.19033L1 13.3807"
                  stroke="white"
                  stroke-width="1.65076"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>

          <!-- 二级菜单 -->
          <div
            :class="clickOption == index ? 'isBlock' : 'isNoneBlock'"
            v-if="item.child_list && item.child_list.length > 0"
          >
            <div class="nav">
              <nuxt-link
                v-for="(items, index) in item.child_list"
                :key="index"
                :to="localePath(items.link)"
              >
                • {{ items.child_item }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <!-- </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   name: "optiond",
  //   props: ["group", "pcOrMobile", "dataSrc"],
  data() {
    return {
      clickOption: -1,

      caidanList: [
        {
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

        {
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

        {
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
        {
          main_nav: this.$t("home.headers.feeConsultation"),
          link: "/fee",
        },
        {
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
        {
          main_nav: "矯視資訊",
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.casesSharing"),
              link: "/video",
            },
            {
              child_item: "科普知識",
              link: "/blog",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.contactUs"),
          link: "/contact-us",
        },
        // {
        //   main_nav: this.$t("home.headers.ophthalmicConsultation"),
        //   link: "/ophthalmicInfo/mediaCov",
        // },

        // {
        //   main_nav: this.$t("home.headers.videos"),
        //   link: "/video",
        // },
        // {
        //   main_nav: this.$t("home.headers.casesSharing"),
        //   link: "/video",
        // },
      ],
    };
  },
  mounted() {
    // const body_t = document.getElementsByTagName('body');
    // body_t.addEventListener("touchstart", function () {});
    // document.body.addEventListener('touchstart', function(){ });
  },
  methods: {
    clickOptionIndex(i) {
      if (i !== this.clickOption) {
        this.clickOption = i;
      } else {
        this.clickOption = -1;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@media screen and (max-width: 789px) {
  .engWidth {
    min-width: 130px;
    text-align: left;
  }
  .optiond {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: fit-content;
    // margin: auto;
  }
  .title {
    padding: 10px 0;
    // display: block;
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2.7px;
    text-align: center;
    font-style: normal;
    line-height: normal;
    // display: flex;
    flex-direction: row;
    align-items: flex-start;
    svg{
        margin-top:4px ;
    }
    // z-index: 10;
    & > div:nth-child(1) {
      width: 22px;
      max-width: 22px;
      max-height: 21px;
      margin-right: 10px;
    }
    & > div:nth-child(2) {
      min-width: 100px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      & > div:nth-child(1) {
        display: flex;
        align-items: left;
        padding: 10px 0;
        & > div:nth-child(2) {
          & > svg {
            margin-top: 6px;
            margin-left: 15px;
          }
          & > img {
            width: 12px;
            margin-top: 2px;
          }
        }
        & > span {
          margin-left: 5px;
        }
      }
    }
  }

  .nav {
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: 14px;
    line-height: 2.14; /* 214.286% */
    letter-spacing: 2.1px;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
    padding: 10px 0;
    display: flex;
    // min-width: 150px;
    & > a {
      position: relative;
    }
    & > a::before {
      content: "";
      width: 3px;
      height: 3px;
      background: #4570b6;
      border-radius: 50%;
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .cliHover,
  .cliHoverActive {
    display: flex;
    align-items: center;
    padding: 10px 0;
    span {
      margin-left: 15px;
    }
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  .title .cliHoverActive > div:nth-child(1) {
    position: relative;
  }
  .cliHoverActive > div:nth-child(1)::before {
    content: "";
    width: 100%;
    height: 1px;
    background: white;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  .isBlock {
    display: block;
    text-align: left;
  }
  .isNoneBlock {
    display: none !important;
    text-align: left;
  }

  .cliHoverActive {
    svg {
      -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
      -moz-transform: rotate(90deg); /* Firefox */
      -ms-transform: rotate(90deg); /* IE 9 */
      -o-transform: rotate(90deg); /* Opera */
      transform: rotate(90deg);
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>

