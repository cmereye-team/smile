<template>
  <div class="main_footer" v-if="screenWidth > 768">
    <div class="section flex justify-between page_container px-0">
      <div class="logo_footer">
        <nuxt-link :to="localePath('/')"
          ><img
            class="foot_logo"
            src="../../../asset/image/common/Logo.svg"
            alt=""
        /></nuxt-link>
        <div class="copyright">
          <div class="flex md:mb-5">
            <div class="iocn mr-5 mb-1">
              <a href=""><img src="@/asset/image/common/FB.svg" alt="" /></a>
            </div>
            <div class="iocn mr-5 mb-1">
              <a href=""><img src="@/asset/image/common/IG.svg" alt="" /></a>
            </div>
            <div class="iocn mb-1">
              <a href=""><img src="@/asset/image/common/YT.svg" alt="" /></a>
            </div>
          </div>

          ©2023 {{$t('home.footer.span1')}} <br />{{$t('home.footer.span2')}} 
          <span><nuxt-link :to="localePath('/privacy-policy')">{{$t('home.footer.span3')}}</nuxt-link></span> |
          <span><nuxt-link :to="localePath('/disclaimer')">{{$t('home.footer.span4')}}</nuxt-link></span>
        </div>
      </div>
      <div class="flex">
        <ul class="main_menu flex">
          <li
            class="ml-24 mb-10"
            v-for="(navItem, index) in navList"
            :key="index"
          >
            <nuxt-link :to="localePath(navItem.link)" class="main_nav">
              <div class="mian_nav_text font-black text-xl">
                {{ navItem.main_nav }}
              </div>
            </nuxt-link>
            <ul class="child_menu">
              <li v-for="(childItem, index) in navItem.child_list" :key="index">
                <nuxt-link :to="localePath(childItem.link)" class="text-xl mian_nav_text_child">{{
                  childItem.child_item
                }}</nuxt-link>
              </li>
            </ul>
          </li>

          <!-- <li class="ml-14">
           
          </li> -->
        </ul>
        <div class="mb-10">
          <nuxt-link class="main_nav text-xl" :to="localePath('/free')"
            ><div class="mian_nav_text font-black text-xl mian_nav_text_child">
              {{$t('home.headers.feeConsultation')}}
            </div></nuxt-link
          >
          <nuxt-link class="main_nav text-xl mt-6 block" :to="localePath('/contact-us')"
            ><div class="mian_nav_text font-black text-xl mian_nav_text_child">
              {{$t('home.headers.contactUs')}}
            </div></nuxt-link
          >
        </div>
        <!-- <div class="copyright text-xl">
          ©2022 香港希瑪微笑矯視中心 版權所有 <span>私隱政策</span> |
          <span>免責條款</span>
        </div> -->
      </div>
    </div>
  </div>
  <div class="main_footer" v-else-if="screenWidth < 768">
    <div class="section flex justify-between">
      <div class="w-4/6 mbMenu">
        <div class="flex justify-center">
          <div class="iocn">
            <a href=""><img src="@/asset/image/common/FB.svg" alt="" /></a>
          </div>
          <div class="iocn">
            <a href=""><img src="@/asset/image/common/IG.svg" alt="" /></a>
          </div>
          <div class="iocn">
            <a href=""><img src="@/asset/image/common/YT.svg" alt="" /></a>
          </div>
        </div>

        <div class="copyright">
          ©2023 {{$t('home.footer.span1')}} <br />{{$t('home.footer.span2')}} 
          <span><nuxt-link :to="localePath('/privacy-policy')">{{$t('home.footer.span3')}}</nuxt-link></span> |
          <span><nuxt-link :to="localePath('/disclaimer')">{{$t('home.footer.span4')}}</nuxt-link></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: "", //屏幕宽度
      activeName: "1",
      navList: [
        {
          main_nav: this.$t('home.headers.aboutSmile'),
          link: "#",
          child_list: [
            {
              child_item: this.$t('home.headers.aboutSmileChild_1'),
              link: "/about-us/centre-introduction",
            },
            {
              child_item: this.$t('home.headers.aboutSmileChild_2'),
              link: "/about-us/medical-team",
            },
            {
              child_item: this.$t('home.headers.aboutSmileChild_3'),
              link: "/about-us/medical-equipment",
            },
          ],
        },
        {
          main_nav: this.$t('home.headers.orthopedicServices'),
          link: "#",
          child_list: [
            {
              child_item: this.$t('home.headers.orthopedicServicesChild_1'),
              link: "/service/relex_smile",
            },
            {
              child_item: "CMER CLEAR-Vision",
              link: "/service/CLEAR_Vision",
            },
            {
              child_item: this.$t('home.headers.orthopedicServicesChild_3'),
              link: "/service/LASIK",
            },
            {
              child_item: this.$t('home.headers.orthopedicServicesChild_4'),
              link: "/service/ICL",
            },
          ],
        },
        {
          main_nav: this.$t('home.headers.diagnosisInstructions'),
          link: "#",
          child_list: [
            {
              child_item: this.$t('home.headers.diagnosisInstructionsChild_1'),
              link: "/Notice/eyeExam",
            },
            {
              child_item: this.$t('home.headers.diagnosisInstructionsChild_2'),
              link: "/Notice/techProcess",
            },
            {
              child_item: this.$t('home.headers.diagnosisInstructionsChild_3'),
              link: "/Notice/Followdiag",
            },
          ],
        },
        {
          main_nav: this.$t('home.headers.commonProblem'),
          link: "/FreQuestions",
          child_list: [
            {
              child_item: this.$t('home.headers.commonProblemChild_1'),
              link: "/FreQuestions#faq-smile",
            },
            {
              child_item: this.$t('home.headers.commonProblemChild_2'),
              link: "/FreQuestions#faq-lasik",
            },
            {
              child_item: this.$t('home.headers.commonProblemChild_3'),
              link: "/FreQuestions#faq-icl",
            },
            {
              child_item: this.$t('home.headers.commonProblemChild_4'),
              link: "/FreQuestions#faq-presbyopia",
            },
          ],
        },
        {
          main_nav: this.$t('home.headers.ophthalmicConsultation'),
          link: "#",
          child_list: [
            {
              child_item: this.$t('home.headers.ophthalmicConsultationChild_1'),
              link: "/ophthalmicInfo/shareVideos",
            },
            {
              child_item: this.$t('home.headers.ophthalmicConsultationChild_2'),
              link: "/ophthalmicInfo/mediaCov",
            },
          ],
        },

        {
          main_nav: this.$t('home.headers.reservationService'),
          link: "#",
          child_list: [
            {
              child_item: this.$t('home.headers.reservationServiceChild_1'),
              link: "/eye-checkup",
            },
            {
              child_item: this.$t('home.headers.reservationServiceChild_2'),
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
  .mbMenu {
    .iocn {
      padding: 10px;
    }
  }
  .logo_footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main_footer .section .main_menu {
    display: grid;
    justify-items: start;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  }
  .main_footer {
    background: #f3fcfe;
    padding: 5.5vw 0 7vw;
    position: relative;
    .logo_footer {
    }
    .section {
      margin: 0 auto;
      justify-content: space-between;
      .main_menu {
        letter-spacing: 0.2vw;
        li:nth-child(4),li:nth-child(5),li:nth-child(6){margin-bottom: 0;margin-top: 30px;}
        
        .child_menu {
          li {
            margin: 18px 0;
            &:hover {
              color: #4570b6;
            }
          }
          li:last-child{margin-bottom: 0;}
        }
      }
      .copyright {
        margin-top: 3vw;
        text-align: center;
        font-size: 12px;font-weight:300;
        transform: scale(.8);
        span {
          border-bottom: 1px solid;  font-size: 12px;
        }
      }
    }
  }
  .mian_nav_text:hover,.mian_nav_text_child:hover{
    color: rgb(75, 75, 255) !important;
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
    padding: 20px 0;
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
  .main_footer {
    background: #f3fcfe;
    padding: 5.5vw 0 2vw;
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
    transform: scale(.6);
    span {
      border-bottom: 1px solid;
    }
  }
}
</style>
