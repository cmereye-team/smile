<template>
  <div v-if="screenWidth > 768" class="footer_new">
    <div class="main_footer">
      <div
        class="logo_footer"
        :style="{ minWidth: $i18n.locale == 'en' ? '250px' : '' }"
      >
        <nuxt-link :to="localePath('/')">
          <img
            class="foot_logo"
            src="../../../asset/image/common/Logo.svg"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="pathLink">
        <DetailOption :group="groupList" />
        <DetailOption :group="OrthopedicList" />
        <DetailOption :group="diagnosisInstructionsList" />
        <DetailOption :group="faq" />
        <DetailOption :group="contactUs" />
        <DetailOption :group="ophthalmicConsultation" />
        <DetailOption :group="reservationService" />
        <DetailOption :group="video" />
        <DetailOption :group="share" />
      </div>
      <div class="copyright">
        <div class="flex md:mb-5 justify-center items-center">
          <div class="iocn">
            <a href=""><img src="@/asset/image/common/fbook.png" alt="" /></a>
          </div>
          <div class="iocn pc_icon">
            <a href=""><img src="@/asset/image/common/ins.png" alt="" /></a>
          </div>
          <div class="iocn">
            <a href=""><img src="@/asset/image/common/youtube.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
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
  </div>
  <div class="main_footer" v-else-if="screenWidth < 768">
    <div class="section flex justify-between">
      <div class="mbMenu">
        <div class="mb_footer_eng">
          <div
            class="logo_footer m-auto"
            :style="{ minWidth: $i18n.locale == 'en' ? '250px' : '' }"
          >
            <nuxt-link :to="localePath('/')">
              <img
                class="foot_logo"
                src="../../../asset/image/common/Logo.svg"
                alt=""
              />
            </nuxt-link>
          </div>
          <div class="pathLink">
            <DetailOption :group="groupList" />
            <DetailOption :group="OrthopedicList" />
            <DetailOption :group="diagnosisInstructionsList" />
            <DetailOption :group="faq" />
            <DetailOption :group="contactUs" />
            <DetailOption :group="ophthalmicConsultation" />
            <DetailOption :group="reservationService" />
            <DetailOption :group="video" />
            <DetailOption :group="share" />
          </div>
          <div class="flex justify-center items-center m-auto">
            <div class="iocn">
              <a href=""><img src="@/asset/image/common/fbook.png" alt="" /></a>
            </div>
            <div class="iocn">
              <a href=""><img src="@/asset/image/common/ins.png" alt="" /></a>
            </div>
            <div class="iocn">
              <a href=""
                ><img src="@/asset/image/common/youtube.png" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom m-auto">
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
    </div>
  </div>
</template>
<script>
import DetailOption from "@/components/commom/option/index.vue";
export default {
  components: {
    DetailOption,
  },
  data() {
    return {
      screenWidth: "", //屏幕宽度
      activeName: "1",
      groupList: {
        main_nav: this.$t("home.headers.aboutSmile"),
        link: "",
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
      OrthopedicList: {
        main_nav: this.$t("home.headers.orthopedicServices"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_1"),
            link: "/service/relex_smile",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_5"),
            link: "/smilePro",
          },
          {
            child_item: "CMER CLEAR-Vision",
            link: "/service/CLEAR_Vision",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_3"),
            link: "/service/LASIK",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_4"),
            link: "/service/ICL",
          },
        ],
      },
      diagnosisInstructionsList: {
        main_nav: this.$t("home.headers.diagnosisInstructions"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
            link: "/Notice/eyeExam",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
            link: "/Notice/techProcess",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
            link: "/Notice/Followdiag",
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
        link: "",
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
      reservationService: {
        main_nav: this.$t("home.headers.reservationService"),
        link: "",
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
      video: {
        main_nav: "矯視資訊影片",
        link: "/video",
      },
      share: {
        main_nav: "個案分享",
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
              link: "/service/relex_smile",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: "CMER CLEAR-Vision",
              link: "/service/CLEAR_Vision",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/service/LASIK",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/service/ICL",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.diagnosisInstructions"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
              link: "/Notice/eyeExam",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
              link: "/Notice/techProcess",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
              link: "/Notice/Followdiag",
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
    };
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        if (val < 768) {
          // console.log("屏幕宽度小于768px");
        } else {
          // console.log("屏幕宽度大于768px");
        }
      },
      immediate: true,
    },
  },
  created() {
    if (process.client) {
      this.screenWidth = document.body.clientWidth;
      // console.log('this.screenWidth===',this.screenWidth);
      window.onresize = () => {
        return () => {
          this.screenWidth = document.body.clientWidth;
        };
      };
    }
  },
  methods: {
    changeCollapse() {
      // console.log(this.activeName);
      if (this.activeName === 3) {
        this.$router.push({
          path: `/free`,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
//pc
@media screen and (min-width: 768px) {
  .pc_icon {
    margin: 0 24px;
  }

  .logo_footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }
  .pathLink {
    width: 780px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      padding: 15px 20px;
    }
  }
  .copyright {
    margin: auto;
  }
  .footer-bottom {
    margin: auto;
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
  .footer_new {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
  }
  .main_footer .section .main_menu {
    display: grid;
    justify-items: start;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  }

  .main_footer {
    background: url("https://static.cmereye.com/imgs/2023/08/dc5cf7af0b7775a9.png");
    background-repeat: no-repeat;
    background-size: cover;

    padding: 2.4vw 0 0;
    position: relative;
    width: 120%;
    border-radius: 100% 100% 0 0;
    margin-left: -10%;

    & > div {
      max-width: 1280px;
      margin: auto;
    }
    & > div:last-child {
      max-width: 100%;
    }
  }
  
  .mian_nav_text:hover,
  .mian_nav_text_child:hover {
    color: rgb(75, 75, 255) !important;
  }

  .mian_nav_text_eng {
    font-weight: 300 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    letter-spacing: 0.2em !important;
    display: initial;
  }
}

@media screen and (max-width: 768px) {
  .mbMenu {
    .iocn {
      padding: 10px;
    }
  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding: 2vw;
    background-color: #f3fcfe;
    display: contents;

    div {
      background-color: #f3fdff !important;
    }
  }

  .mbMenu {
    padding-top: 20px;
  }

  .pathLink {
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 75%;
    margin: auto;
    & > div {
      width: 50%;
      margin-bottom: 15px;
    }
  }
  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 59px;
    background-color: #f3fdff;
    padding: 0 2vw;
    justify-content: center;
    text-align: center;
    display: flex;
  }
  .mb_footer_eng {
    width: 100%;
    background: url("https://static.cmereye.com/imgs/2023/08/c005b62af9cd22c1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
    padding: 15px 0;
  }
  .main_footer {
    // background: #f3fcfe;
    // padding-top: 5.5vw;
    margin-bottom: 100px;

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .copyright {
    margin-top: 3vw;
    transform: scale(0.6);

    span {
      border-bottom: 1px solid;
    }
  }
  .foot_logo {
    margin: auto;
  }
  .footer-bottom {
    margin: auto;
    background: #fff;
    padding: 15px 0;
    color: #6d6e71;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1.2px;
    transform: scale(0.9);
  }
}
</style>
