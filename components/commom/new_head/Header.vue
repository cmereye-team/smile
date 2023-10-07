<template>
  <div class="head_width">
    <div class="section_header px-0">
      <div class="header flex-between">
        <div class="left">
          <nuxt-link :to="localePath('/')">
            <img class="head_logo" src="@/asset/image/common/Logo.svg" alt=""
          /></nuxt-link>
        </div>
        <div class="mbShow mbHeaderBox mb_menu">
          <img
            src="../../../asset/image/common/Vector.png"
            class="mr-5"
            alt=""
            @click="langDrawer = true"
          />
          <div @click="drawer = true"><i></i><i></i><i></i></div>
        </div>
        <!-- <div class="right flex link_more link_pc_more">
          <ul class="social_list flex gap-4 md:gap-7">
            <li v-for="(socialInfoItem, index) in socialInfoList" :key="index">
              <a :href="socialInfoItem.link"
                ><img :src="socialInfoItem.img" alt=""
              /></a>
            </li>
          </ul>

          <ul class="language_list hidden items-center md:flex gap-4">
            <li v-for="(languageItme, index) in languageList" :key="index">
              <a class="text-base" href="">{{ languageItme.text }}</a>
            </li>
          </ul>
        </div> -->
      </div>
      <div class="md:flex items-center pcShow">
        <div
          class="nav_bar section hidden md:flex md:justify-between items-center"
        >
          <!-- gsap   移动动画-->
          <!-- gsap   移动动画 end-->
          <ul
            class="nav md:flex md:justify-around grid"
            :class="[$i18n.locale == 'en' ? 'gap-0 pl-8' : 'gap-8 pl-0']"
          >
            <div class="menu-line"></div>

            <li
              v-for="(navItem, index) in navList"
              :key="index"
              class="nav_item text-lg md:flex flex-col"
              :class="navItem.child_list.length !== 0 ? 'main_after' : ''"
            >
              <nuxt-link
                :to="localePath(navItem.link)"
                :class="
                  navItem.child_list.length !== 0
                    ? 'main_nav_after'
                    : 'main_nav'
                "
              >
                <div class="mian_nav_text font-black">
                  {{ navItem.main_nav }}
                </div>
              </nuxt-link>

              <ul
                :style="{ top: $i18n.locale == 'en' ? '36px' : '20px' }"
                class="child_nav flex flex-col"
                v-if="navItem.child_list.length > 0"
              >
                <li
                  v-for="(childItem, childIndex) in navItem.child_list"
                  :key="childIndex"
                >
                  <nuxt-link
                    :to="localePath(childItem.link)"
                    class="text-base"
                    >{{ `· ` + childItem.child_item }}</nuxt-link
                  >
                </li>
                <li></li>
              </ul>
            </li>
          </ul>
          <div class="new_header">
            <a href="tel: +85260610511" target="_blank" class="new_about">預約服務</a>
            <div class="new_a_div">
              <a href=""><img src="@/asset/image/common/fbook.png" alt="" /></a>
              <a href=""><img src="@/asset/image/common/ins.png" alt="" /></a>
              <a href=""
                ><img src="@/asset/image/common/youtube.png" alt=""
              /></a>
            </div>
            <!-- <div>
              <img src="https://static.cmereye.com/imgs/2023/08/88c40669a540c35c.png" alt="+85260610511" />
            </div> -->
          </div>
          <nuxt-link
            style="display: none"
            :to="localePath('/booking')"
            class="text-base ll_box nav-bookingservice pcShow"
            >{{ $t("home.headers.reservationService") }}</nuxt-link
          >
          <div class="flex items-center nav-language-new group relative">
            <img src="../../../asset/image/common/Vector.png" alt="" />
            <ul
              class="nav-language-box absolute top-5 hidden group-hover:block -left-5"
            >
              <!-- <li><a href="###">繁</a> </li>
              <li><a href="###">简</a> </li> -->
              <!-- <li :class="$i18n.locale === 'hk' ? 'langBoxClass' : ''">
                <nuxt-link :to="switchLocalePath('hk')" class="w-full h-full block">繁</nuxt-link>
              </li>
              <li :class="$i18n.locale === 'cn' ? 'langBoxClass' : ''">
                <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link>
              </li> -->
              <li @click="handleLang('hk')">
                繁
                <!-- <nuxt-link :to="switchLocalePath('hk')" class="w-full h-full block">繁</nuxt-link> -->
              </li>
              <li @click="handleLang('cn')">
                简
                <!-- <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link> -->
              </li>
              <!-- <li @click="handleLang('en')"> -->
              <!-- Eng -->
              <!-- <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link> -->
              <!-- </li> -->
            </ul>
          </div>
          <div class="menu_pc" @click="menuList = true">
            <div><i></i><i></i><i></i></div>
          </div>
        </div>
        <!-- 右边悬浮按钮 -->
        <div class="sidebar_contact">
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=85260610511"
              target="_blank"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/08/8403ced7dc2e7c7f.png"
                  class="p-1"
                />
              </div>
              <div><span>了解更多</span></div>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=85260610511"
              target="_blank"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/08/8814d9fb19e5dd7a.png"
                  class="p-1"
                />
              </div>
              <div><span>快速預約</span></div>
            </a>
          </div>
          <div>
            <a :href="localePath('/consumption-voucher')" target="_blank">
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/08/9938e31284f5eda3.png"
                  class="p-1"
                />
              </div>
              <div><span>消費券優惠</span></div>
            </a>
          </div>
        </div>

        <!-- <div class="contact-coupon">
          <nuxt-link :to="'/charge-detail'">
            <div class="couponBox">
              <div class="couponBox-l">
                <img src="@/asset/image/common/Layer_1.png" alt="">
              </div>
              <div class="couponBox-r">
                <span>了解</span>
                <span>消費券優惠</span>
              </div>
            </div>
          </nuxt-link>
        </div> -->
      </div>
      <el-drawer
        class="drawers"
        :visible.sync="menuList"
        v-show="menuList"
        direction="ttb"
        :with-header="false"
        size="60%"
        :modal="false"
        :wrapperClosable="true"
      >
        <div>
          <div class="header header_drawer flex-between">
            <div class="left">
              <nuxt-link :to="localePath('/')">
                <img
                  class="head_logo"
                  src="@/asset/image/common/Logo.svg"
                  alt=""
              /></nuxt-link>
            </div>
            <div class="md:flex items-center pcShow">
              <div
                class="nav_bar section hidden md:flex md:justify-between items-center"
              >
                <div class="new_header">
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/88c40669a540c35c.png"
                      alt="+85260610511"
                    />
                  </div>
                </div>
                <nuxt-link
                  style="display: none"
                  :to="localePath('/booking')"
                  class="text-base ll_box nav-bookingservice pcShow"
                  >{{ $t("home.headers.reservationService") }}</nuxt-link
                >
                <div class="flex items-center nav-language-new group relative">
                  <img src="../../../asset/image/common/Vector.png" alt="" />
                  <ul
                    class="nav-language-box absolute top-5 hidden group-hover:block -left-5"
                  >
                    <li @click="handleLang('hk')">繁</li>
                    <li @click="handleLang('cn')">简</li>
                  </ul>
                </div>
                <!-- <div class="menu_pc" @click="menuList = true">
                  <div><i></i><i></i><i></i></div>
                </div> -->
                <div class="menu_pc_close" @click="menuList = false">
                  <span></span><span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="header_body">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/08/b1035ba58b188832.png"
                alt=""
              />
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/97fdbaefbeb84e3b.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="groupList" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/a0f496310fe0a27d.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="OrthopedicList" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/1370a57f2695de69.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="diagnosisInstructionsList" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/fdd73f4b13f9769d.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="faq" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/45aaf2ec213e6ad6.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="contactUs" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/d82c6bcf4534cfff.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="ophthalmicConsultation" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/afc6cffac8f0f99f.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="reservationService" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/471b48c37f66cda3.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="video" />
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/08/c55d953491658b89.png"
                      alt=""
                    />
                  </div>
                  <DetailOption :group="share" />
                </div>
                <!-- ⬇️ 方便样式布局 增加内容可刻删除 -->
                <div style="opacity: 0"></div>
              </div>
              <div>
                <a href=""
                  ><img src="@/asset/image/common/fbook.png" alt=""
                /></a>
                <a href=""><img src="@/asset/image/common/ins.png" alt="" /></a>
                <a href=""
                  ><img src="@/asset/image/common/youtube.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </el-drawer>
      <el-drawer
        v-show="drawer"
        :visible.sync="drawer"
        :with-header="false"
        :modal="false"
        size="100%"
      >
        <div class="mb_menu_close">
          <div style="padding: 10px">
            <img class="head_logo" src="@/asset/image/common/Logo.svg" alt="" />
          </div>
          <div>
            <img
              src="../../../asset/image/common/Vector.png"
              class="mr-5"
              alt=""
              @click="langDrawer = true"
            />
            <div @click="drawer = false"><i></i><i></i></div>
          </div>
        </div>
        <div class="mb_menu_list">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/08/6fad924059f2fcad.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/f3ea64aa54bc98cb.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="groupList" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/844235e03d62a012.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="OrthopedicList" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/2d9505273f4129f4.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="diagnosisInstructionsList" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/f7cf9aa336bd09b6.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="faq" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/89b4f7b30d53ebe8.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="contactUs" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/d116e79aee23450b.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="ophthalmicConsultation" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/dbdaee641342c88f.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="reservationService" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/a0cc6ca85ae706c8.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="video" />
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/08/0c66b448f1429c1d.png"
                    alt=""
                  />
                </div>
                <DetailOption :group="share" />
              </div>
            </div>
          </div>
        </div>
        <div class="mb_menu_footer">
          <div>
            <nuxt-link :to="localePath('/')">
              <img
                class="foot_logo"
                src="../../../asset/image/common/Logo.svg"
                alt=""
              />
            </nuxt-link>
            <div>
              <a href=""><img src="@/asset/image/common/fbook.png" alt="" /></a>
              <a href=""><img src="@/asset/image/common/ins.png" alt="" /></a>
              <a href=""
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
        </div>
      </el-drawer>
      <el-drawer
        :visible.sync="langDrawer"
        v-show="langDrawer"
        direction="btt"
        :with-header="false"
        :modal="false"
        size="40%"
      >
        <div class="langBox-title">
          {{ $t("home.headers.togLang") }}
        </div>
        <div class="langBox">
          <nuxt-link
            :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'hk' ? 'langBoxClass' : '',
            ]"
            :to="switchLocalePath('hk')"
          >
            <!-- <div> -->
            繁体
            <!-- </div> -->
          </nuxt-link>
          <nuxt-link
            :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'cn' ? 'langBoxClass' : '',
            ]"
            :to="switchLocalePath('cn')"
          >
            <!-- <div> -->
            简体
            <!-- </div> -->
          </nuxt-link>
        </div>
      </el-drawer>
      <!-- gsap   指针动画-->
      <div class="ball"></div>
      <!-- gsap   指针动画 end-->
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
import DetailOption from "@/components/commom/option/index.vue";
// gsap plugins
import gsap from "gsap";

export default {
  styleResources: {
    scss: ["~/assets/css/base-style.scss"],
  },
  components: {
    DetailOption,
  },
  data() {
    return {
      openeds: ["1"],
      drawer: false,
      langDrawer: false,
      menuList: false,
      socialInfoList: [
        {
          link: "",
          img: require("@/asset/image/common/FB.svg"),
        },
        {
          link: "",
          img: require("@/asset/image/common/IG.svg"),
        },
        {
          link: "",
          img: require("@/asset/image/common/YT.svg"),
        },
      ],
      navList: [
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
              child_item: this.$t("home.headers.orthopedicServicesChild_1"),
              link: "/vision-correction/relex-smile",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_2"),
              link: "/vision-correction-presbyopia",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/vision-correction-lasik",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/vision-correction-icl",
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
        // ⬇️ 眼科咨询
        // {
        //   main_nav: this.$t("home.headers.ophthalmicConsultation"),
        //   link: "",
        //   child_list: [
        //     {
        //       child_item: this.$t("home.headers.ophthalmicConsultationChild_1"),
        //       link: "/video",
        //     },
        //     {
        //       child_item: this.$t("home.headers.ophthalmicConsultationChild_2"),
        //       link: "/media",
        //     },
        // {
        //   child_item: this.$t("home.headers.ophthalmicConsultationChild_3"),
        //   link: "/wedding",
        // },
        // ],
        // },
        // ⬇️ 收费详情
        // {
        //   main_nav: this.$t("home.headers.feeConsultation"),
        //   link: "",
        //   child_list: [
        //     {
        //       child_item: this.$t("home.headers.feeConsultation"),
        //       link: "/charge-detail"
        //     },
        //     {
        //       child_item: this.$t("home.headers.consumptionVoucher"),
        //       link: "/consumption-voucher"
        //     },
        //     {
        //       child_item: this.$t("home.headers.consumptionDivit"),
        //       link: "/divit",
        //     },
        //   ],
        // },
        {
          main_nav: this.$t("home.headers.contactUs"),
          link: "/contact-us",
          child_list: [],
        },
        // {
        //   main_nav: "預約服務",
        //   link: "/booking",
        //   child_list: [],
        // },
      ],
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
      actIndex: 0,
    };
  },
  created() {
    // this.handleSelect();
  },
  mounted() {
    this.pointinit();
    // console.log('i18n------->',this.$i18n.locale)

    // 获取菜单和菜单底部的横线元素
    const menu = document.querySelector(".nav ");
    const menuLine = document.querySelector(".menu-line");

    // 创建GSAP动画
    gsap.to(menuLine, {
      duration: 0.3,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power1.inOut",
    });

    menu.addEventListener("mousemove", (e) => {
      // 获取鼠标在菜单中的位置
      const xPos = e.clientX - menu.offsetLeft;

      // 更新菜单底部横线的位置和宽度
      gsap.to(menuLine, {
        duration: 0.3,
        scaleX: 1,
        left: xPos,
        transformOrigin: "left",
        ease: "power1.inOut",
      });
    });

    menu.addEventListener("mouseleave", () => {
      // 鼠标离开菜单后，隐藏菜单底部横线
      gsap.to(menuLine, {
        duration: 0.3,
        scaleX: 0,
        transformOrigin: "right",
        ease: "power1.inOut",
      });
    });
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({
          //可以添加自定义内容
          animateClass: "animate__animated",
          offset: 200,
        }).init();
      }
      this.taginits();
    });
  },
  methods: {
    pointinit() {
      // mousemove ball
      // 指针小球跟随效果
      gsap.set(".ball", { xPercent: -65, yPercent: -65 });
      const ball = document.querySelector(".ball");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;
      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
      // 指针小球跟随效果 end
      // 指针小球hover效果  **
      const ahrefbtn = document.querySelectorAll("a");
      ahrefbtn.forEach((a) => {
        a.addEventListener("pointerenter", handleMouseEnter);
        a.addEventListener("pointerleave", handleMouseLeave);
      });
      function handleMouseEnter() {
        gsap.to(".ball", {
          duration: 0.3,
          scale: 3,
          opacity: 0,
          ease: "Power3.easeOut",
        });
      }
      function handleMouseLeave() {
        gsap.to(".ball", {
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: "Power3.easeOut",
        });
      }
      // 指针小球hover效果 end **
      // mousemove ball end
    },

    handleSelect(index, indexPath) {
      // console.log("===", index, indexPath);
      this.actIndex = index;
    },
    handleLang(_type) {
      console.log("当前的语言类型： --->", this.$i18n.locale);
      if (this.$i18n.locale === _type) return;
      console.log("点击的语言类型： --->", _type);
      // console.log('路径打印',this.switchLocalePath(_type))
      let _path = this.switchLocalePath(_type);
      this.$router.push(_path);
      var _text = "";
      if (_type === "cn") {
        _text = "微软雅黑";
      } else _text = "Noto Sans HK";
      console.log("准备设置的字体： ===>", _text);
      // console.log(document.documentElement.style)
      document.documentElement.style.setProperty("--font_family", _text); //var(--font_family)
    },
    taginits() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5M8VLLM");
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-FN8KFBR9XM");
    },
  },
};
</script>
<style lang="scss">
.ball {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 20px;
  height: 20px;
  background-color: #f5f7fa;
  border-radius: 50%;
  mix-blend-mode: difference;
  left: 0;
  top: 0;
}

.nav {
  position: relative;
  z-index: 99;
}

.menu-line {
  height: 1px;
  width: 50px;
  background-color: #000;
  position: absolute;
  bottom: 5px;
  left: 0;
}

$active_gradient: #4570b6;

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
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.langBox-in {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}

.langBox-in:first-child {
  margin-top: 40px;
}

.mbHeaderBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

// pc
@media (min-width: 768px) {
  .main_after .nuxt-link-active .mian_nav_text {
    color: #4570b6 !important;
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .ll_box {
    margin-left: 26px;
    background: #4570b6;
    border-radius: 0px;
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height */
    padding: 12px 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;
    color: #d9eaed;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .head_width {
    width: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .section_header {
    display: flex;
    max-width: 1280px;
    margin: auto;
  }

  .link_pc_more {
    display: flex;
    align-items: center;
  }

  .head_logo {
    width: 220px;
    max-height: 80px;
  }

  .main_footer {
    .main_nav .mian_nav_text {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #6d6e71;
    }

    .child_menu {
      li a {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height, or 120% */

        letter-spacing: 0.2em;

        color: #6d6e71;
      }
    }
  }

  .mian_nav_text {
    font-family: var(--font_family), sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 156% */

    letter-spacing: 0.2em;

    color: #6d6e71;
    text-align: center;
    min-height: 50px;
    display: flex;
    align-items: center;
  }

  .main_after {
    .nuxt-link-exact-active {
      background: #6d6e71 !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      text-fill-color: transparent !important;
    }
  }

  .child_nav {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.137);

    li:hover a {
      background: #4570b6;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    a {
      font-family: var(--font_family), sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
      /* identical to box height, or 156% */

      letter-spacing: 0.2em;

      color: #444343;
    }

    .nuxt-link-exact-active {
      background: #4570b6 !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
  }

  .nav {
    transition: all 0.5s ease-in;

    .nav_item {
      transition: all 0.5s ease-in;
      position: relative;

      .child_nav {
        position: absolute;
        top: 10px;
      }
    }

    .nav_item:hover .child_nav {
      display: block;
    }
  }

  .main_nav_after {
    .mian_nav_text {
      letter-spacing: 0.2em;
      transition: all 0.5s;
    }

    // ::after {
    //   display: inline-block;
    //   margin-left: 0.255em;
    //   vertical-align: 0.255em;
    //   content: "";
    //   border-top: 0.3em solid;
    //   border-right: 0.3em solid transparent;
    //   border-bottom: 0;
    //   border-left: 0.3em solid transparent;
    // }
  }

  .main_nav {
    .mian_nav_text {
      letter-spacing: 0.2em;
      transition: all 0.5s;
    }
  }

  .child_nav {
    display: none;
    overflow: hidden;
    transition: width 0.5s ease-in;
    white-space: nowrap;

    margin-top: 13px;
    margin-left: 0;
    margin-right: 1vw;
    padding: 10px;
    /* background: #fff; */
    text-align: left;
    list-style: none;

    li {
      margin: 5px 0;
    }
  }

  .sidebar_contact {
    position: fixed;
    right: 9%;
    letter-spacing: 0.1em;
    top: 66%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      a {
        color: #4570b6;
        text-align: center;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
        font-size: 17px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 3.4px;
      }
    }

    & > div:nth-child(even) {
      padding: 20px 0;
    }

    & > div:last-child {
      a > div:nth-child(2) {
        max-width: 80px;
        text-align: center;
        margin: auto;
      }
    }
  }

  .nav-language {
    z-index: 99;
  }

  .nav-language-box {
    // width: 100px;
    li {
      width: 70px;
      display: block;
      height: 40px;
      line-height: 40px;
      background: #fff;
      color: #000;
      text-align: center;
    }

    li:hover {
      color: #fff;
      background: #4570b6;
    }
  }

  .new_header {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
  }
  .new_a_div {
    display: flex;
    align-items: center;
    flex-direction: row;
    & > a {
      padding: 0 10px;
    }
  }

  .new_about {
    border-radius: 17px;
    background: #76c8e2;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6.75px;
    margin: 0 20px;
    padding: 10px 20px;
  }

  .menu_pc {
    width: 46px;
    height: 46px;
    background: #4570b6;
    border-radius: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      & > i {
        display: inline-block;
        width: 50%;
        display: flex;
        flex-direction: column;
        margin: 6px auto;
        background: #fff;
        height: 2px;
        border-radius: 5px;
      }
    }
  }

  .menu_pc_close {
    width: 41px;
    height: 41px;
    background: #4570b6;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > span {
      display: inline-block;
      width: 28px;
      height: 3px;
      background: #fff;
      position: absolute;
      border-radius: 3px;
    }

    & > span:nth-child(1) {
      transform: rotate(-45deg);
    }

    & > span:nth-child(2) {
      transform: rotate(45deg);
    }
  }
}

// mb
@media (max-width: 768px) {
  .mb_menu {
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
      }

      & > i:nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  :deep(.el-drawer) {
    background: palegoldenrod;
  }
  :deep(.el-drawer)::-webkit-scrollbar {
    width: 6px;
  }

  .mb_menu_close {
    padding: 0 25px;
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
    margin: 0 17px;

    & > div:nth-child(1) {
      margin: 12px 0;
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        padding-left: 20px;

        & > div {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;
          max-width: 42%;

          & > div:nth-child(1) {
            min-width: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
          }
        }

        & > div:nth-child(odd) {
          margin-right: 20px;
        }

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

  .mb_menu_footer {
    margin-bottom: 64px;

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

  .section_header {
    position: fixed;
    z-index: 99;
    background: #fff;
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .ball {
    display: none;
  }

  .sidebar_contact {
    display: none;
  }

  .el-menu-vertical-demo .el-menu-item a {
    display: block !important;
  }

  .link_more {
    display: none;
  }

  .menu_pc {
    display: none;
  }

  .drawers {
    display: none !important;
  }
}

.flex-between {
  @apply flex items-center justify-between;
}

.header {
  // width: 100vw;
  margin: 0 auto;

  .right {
    .social_list {
      position: relative;
      margin-right: 130px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        border-top: 2px #dfdfdf solid;
      }
    }

    .language_list {
      padding: 0 18px;
      border-left: 2px solid #dfdfdf;
      border-right: 2px solid #dfdfdf;
      height: 45px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    img {
      width: 5vw;
    }
  }
}

@media (min-width: 768px) {
  .header {
    margin: 20px auto;
    margin-left: 0;
    display: flex;
    align-items: center;
    align-content: center;

    .right {
      .social_list {
        margin-right: 130px;
        position: relative;

        &::before,
        &::after {
          width: 100px;
          height: 0;
        }

        &::before {
          left: -130px;
          top: 10px;
        }

        &::after {
          right: -130px;
          top: 10px;
        }

        img {
          width: 1.5vw;
        }
      }
    }
  }

  .header_drawer {
    margin: 0 auto;
    max-width: 1280px;
  }

  .header_body {
    display: flex;
    max-width: 1280px;
    margin: auto;
    margin-top: 136px;
    justify-content: space-between;

    & > div:nth-child(1) {
      flex: 1;
      margin-right: 60px;
    }

    & > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & > div {
          min-width: 230px;
          padding: 20px 0;
          border-bottom: 1px solid #6d6e7180;
          display: flex;
          align-items: flex-start;

          & > div:nth-child(1) {
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 38px;
          }
        }

        & > div:nth-child(odd) {
          margin-right: 42px;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin-top: 40px;

        a:nth-child(2) {
          margin: 0 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  // 移动端
  .header {
    min-height: 18vw;
    margin: 3vw 0 !important;
  }

  .link_more {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.contact:last-child {
  top: calc(66% + 120px);

  .link_more {
    div {
      text-align: center;
      align-items: center;

      img {
        width: 44px;
        height: 44px;
      }
    }
  }
}

.contact-coupon {
  width: 172px;
  height: 64px;
  position: fixed;
  top: calc(66% + 120px);
  right: 9%;
  // background: #4570B6;
  background: #6eb9db;
  border-radius: 32px;
  z-index: 999;
  overflow: hidden;

  .couponBox {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    // z-index: 1000;
    position: relative;

    &-l {
      img {
        width: 44px;
        height: 44px;
      }
    }

    &-r {
      color: #fff;

      span {
        display: block;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 21px;
      }
    }
  }

  .couponBox:hover {
    animation: ani_coupon 8s linear infinite;
    border: none;
  }

  @keyframes ani_coupon {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  .couponBox::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .couponBox::before {
    content: "";
    background: #4570b6;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .couponBox:hover::before {
    color: #4570b6;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
