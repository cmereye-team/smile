<template>
  <div class="section_header page_container px-0">
    <div class="header flex-between">
      <div class="left">
        <nuxt-link :to="localePath('/')">
          <img class="head_logo" src="@/asset/image/common/Logo.svg" alt="" /></nuxt-link>
      </div>
      <div class="mbShow mbHeaderBox">
        <img src="../../../asset/image/common/Vector.png" class="mr-5" alt="" @click="langDrawer = true" />
        <button @click="drawer = true">
          <img src="https://static.cmereye.com/imgs/2022/12/31d945d3f5d8d4df.png" alt="" />
        </button>
        <el-drawer v-show="drawer" :visible.sync="drawer" :with-header="false" size="60%">
          <div style="padding: 10px">
            <img class="head_logo" src="@/asset/image/common/Logo.svg" alt="" />
          </div>
          <el-row class="tac">
            <el-menu default-active="1" class="el-menu-vertical-demo" :unique-opened="true">
              <el-submenu index="1">
                <template slot="title">
                  <span>{{ $t("home.headers.aboutSmile") }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <nuxt-link :to="localePath('/group-profile')">
                      {{ $t("home.headers.aboutSmileChild_1") }}</nuxt-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <nuxt-link :to="localePath('/our-medical-team')">{{
                      $t("home.headers.aboutSmileChild_2")
                    }}</nuxt-link>
                  </el-menu-item>
                  <el-menu-item index="1-3">
                    <nuxt-link :to="localePath('/medical-equipment')">{{
                      $t("home.headers.aboutSmileChild_3")
                    }}</nuxt-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>{{ $t("home.headers.orthopedicServices") }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <nuxt-link :to="localePath('/vision-correction/relex-smile')">
                      {{
                        $t("home.headers.orthopedicServicesChild_1")
                      }}</nuxt-link>
                  </el-menu-item>
                  <!-- <el-menu-item index="2-1">
                    <nuxt-link
                      :to="localePath('/smilePro')"
                    >
                      {{
                        $t("home.headers.orthopedicServicesChild_5")
                      }}</nuxt-link
                    >
                  </el-menu-item> -->
                  <el-menu-item index="2-2">
                    <nuxt-link :to="localePath('/vision-correction-presbyopia')">CMER
                      CLEAR-Vision</nuxt-link></el-menu-item>
                  <el-menu-item index="2-3">
                    <nuxt-link :to="localePath('/vision-correction-lasik')">{{
                      $t("home.headers.orthopedicServicesChild_3")
                    }}</nuxt-link>
                  </el-menu-item>
                  <el-menu-item index="2-4">
                    <nuxt-link :to="localePath('/vision-correction-icl')">{{
                      $t("home.headers.orthopedicServicesChild_4")
                    }}</nuxt-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>{{ $t("home.headers.diagnosisInstructions") }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <nuxt-link :to="localePath('/patient-info')">
                      {{
                        $t("home.headers.diagnosisInstructionsChild_1")
                      }}</nuxt-link>
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <nuxt-link :to="localePath('/flow-of-vision-correction')">{{
                      $t("home.headers.diagnosisInstructionsChild_2")
                    }}</nuxt-link></el-menu-item>
                  <el-menu-item index="3-3">
                    <nuxt-link :to="localePath('/post-corrective-care')">{{
                      $t("home.headers.diagnosisInstructionsChild_3")
                    }}</nuxt-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="4">
                <nuxt-link :to="localePath('/FreQuestions')"><span>{{
                  $t("home.headers.commonProblem")
                }}</span></nuxt-link>
              </el-menu-item>
              <el-submenu index="5">
                <template slot="title">
                  <span>{{ $t("home.headers.ophthalmicConsultation") }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">
                    <nuxt-link :to="localePath('/video')">
                      {{
                        $t("home.headers.ophthalmicConsultationChild_1")
                      }}</nuxt-link>
                  </el-menu-item>
                  <el-menu-item index="5-2">
                    <nuxt-link :to="localePath('/media')">
                      {{
                        $t("home.headers.ophthalmicConsultationChild_2")
                      }}</nuxt-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="6">
                <nuxt-link :to="localePath('/charge-detail')"><span>{{
                  $t("home.headers.feeConsultation")
                }}</span></nuxt-link>
              </el-menu-item>
              <el-menu-item index="7">
                <nuxt-link :to="localePath('/consumption-voucher')"><span>{{
                  $t("home.headers.consumptionVoucher")
                }}</span></nuxt-link>
              </el-menu-item>
              <el-menu-item index="8">
                <nuxt-link :to="localePath('/contact-us')"><span>{{ $t("home.headers.contactUs") }}</span></nuxt-link>
              </el-menu-item>
              <el-menu-item index="9">
                <nuxt-link :to="localePath('/booking')"><span>{{
                  $t("home.headers.reservationService")
                }}</span></nuxt-link>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-drawer>
        <el-drawer :visible.sync="langDrawer" v-show="drawer" direction="btt" :with-header="false" size="30%">
          <div class="langBox-title">
            {{ $t("home.headers.togLang") }}
          </div>
          <div class="langBox">
            <nuxt-link :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'hk' ? 'langBoxClass' : '',
            ]" :to="switchLocalePath('hk')">
              <!-- <div> -->
              繁体
              <!-- </div> -->
            </nuxt-link>
            <nuxt-link :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'cn' ? 'langBoxClass' : '',
            ]" :to="switchLocalePath('cn')">
              <!-- <div> -->
              简体
              <!-- </div> -->
            </nuxt-link>
          </div>
        </el-drawer>
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
      <div class="nav_bar section hidden md:flex md:justify-between">
        <!-- gsap   移动动画-->

        <!-- gsap   移动动画 end-->
        <ul class="nav md:flex md:justify-around grid gap-8">
          <div class="menu-line"></div>

          <li v-for="(navItem, index) in navList" :key="index" class="nav_item text-lg md:flex flex-col"
            :class="navItem.child_list.length !== 0 ? 'main_after' : ''">
            <nuxt-link :to="localePath(navItem.link)" :class="navItem.child_list.length !== 0 ? 'main_nav_after' : 'main_nav'
              ">
              <div class="mian_nav_text font-black">{{ navItem.main_nav }}</div>
            </nuxt-link>

            <ul class="child_nav flex flex-col" v-if="navItem.child_list.length > 0">
              <li v-for="(childItem, childIndex) in navItem.child_list" :key="childIndex">
                <nuxt-link :to="localePath(childItem.link)" class="text-base">{{
                  `· ` + childItem.child_item
                }}</nuxt-link>
              </li>
              <li></li>
            </ul>
          </li>
        </ul>
        <nuxt-link :to="localePath('/booking')" class="text-base ll_box nav-bookingservice pcShow">{{
          $t("home.headers.reservationService") }}</nuxt-link>
        <div class="flex items-center nav-language group relative">
          <img src="../../../asset/image/common/Vector.png" alt="" />
          <ul class="nav-language-box absolute top-10 hidden group-hover:block -left-5">
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
      </div>
      <!-- <div class="contact contact_hunzhan">
        <a href="./wedding">
          <button class="link_more shadow-lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="flex">
              <div class="p-1 text-left" style="padding-left: 33px;">
                <h3 class="text-xl font-normal">{{ $t('home.headers.weeding_btn') }}</h3>
              </div>
            </div>
          </button>
        </a>
      </div> -->
      <div class="contact">
        <a href="https://api.whatsapp.com/send/?phone=85260610511">
          <button class="link_more shadow-lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="flex">
              <img src="https://www.ameraesthetics.com/template/default/static/images/whatapps.svg"
                style="max-width: 38px" class="p-1" />
              <div class="p-1 text-left">
                <h3 class="text-xl font-normal">{{ $t("home.navbar") }}</h3>
                <p class="text-base text-center">6061 0511</p>
              </div>
            </div>
          </button>
        </a>
      </div>
      <div class="contact">
        <a
          :href="'https://api.whatsapp.com/send/?phone=85260610511&text=%E6%83%B3%E4%BA%86%E8%A7%A3(W-01)SMILE%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96%E6%B6%88%E8%B2%BB%E5%8D%B7%E6%94%B6%E8%B2%BB%E8%A9%B3%E6%83%85'">
          <button class="link_more shadow-lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="flex">
              <img src="@/asset/image/common/Layer_1.png" alt="">
              <div class="p-1 text-left">
                <h3 class="text-xl font-normal">了解</h3>
                <p class="text-base text-center">{{ $t('home.headers.coupon') + $t('home.headers.preferential') }}</p>
              </div>
            </div>
          </button>
        </a>
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

    <!-- gsap   指针动画-->
    <div class="ball"></div>
    <!-- gsap   指针动画 end-->
  </div>

  <!-- </div> -->
</template>
<script>
// gsap plugins
import gsap from "gsap";

export default {
  styleResources: {
    scss: ["~/assets/css/base-style.scss"],
  },
  data() {
    return {
      openeds: ["1"],
      drawer: false,
      langDrawer: false,
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
        {
          main_nav: this.$t("home.headers.ophthalmicConsultation"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_1"),
              link: "/video",
            },
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_2"),
              link: "/media",
            },
            // {
            //   child_item: this.$t("home.headers.ophthalmicConsultationChild_3"),
            //   link: "/wedding",
            // },
          ],
        },

        {
          main_nav: this.$t("home.headers.feeConsultation"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.feeConsultation"),
              link: "/charge-detail"
            },
            {
              child_item: this.$t("home.headers.consumptionVoucher"),
              link: "/consumption-voucher"
            },
          ],
        },
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
      actIndex: 0
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
        new WOW({ //可以添加自定义内容
          animateClass: 'animate__animated',
          offset: 200
        }).init()
      }
      this.taginits()
    })
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
      this.actIndex = index
    },
    handleLang(_type) {
      console.log('当前的语言类型： --->', this.$i18n.locale)
      if (this.$i18n.locale === _type) return
      console.log('点击的语言类型： --->', _type)
      // console.log('路径打印',this.switchLocalePath(_type))
      let _path = this.switchLocalePath(_type)
      this.$router.push(_path)
      var _text = ''
      if (_type === 'cn') {
        _text = '微软雅黑'
      } else (
        _text = 'Noto Sans HK'
      )
      console.log('准备设置的字体： ===>', _text)
      // console.log(document.documentElement.style)
      document.documentElement.style.setProperty("--font_family", _text);  //var(--font_family)
    },
    taginits() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-5M8VLLM')
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-FN8KFBR9XM');
    }
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

  .section_header {
    display: flex;
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

  .contact {
    position: fixed;
    right: 9%;
    letter-spacing: 0.1em;
    top: 66%;
    cursor: pointer;
    z-index: 999;
    font-weight: 600;
    white-space: nowrap;

    .link_more {
      outline: none;
      cursor: pointer;
      border: none;
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      position: relative;
      display: inline-block;
      letter-spacing: 0.05rem;
      font-weight: 700;
      font-size: 17px;
      border-radius: 500px;
      overflow: hidden;
      background: #6eb9db;
      color: #f3fcfe;
      // background: #4570b6;
      // transition: all 0.5s;
      // color: white;
      // display: block;
      padding: 0 0.5vw;
      margin: 0 auto;

      text-align: center;
      // border-radius: 10vw;
      width: 170px;
      height: 60px;
    }

    .link_more:hover {
      animation: ani 8s linear infinite;
      border: none;
    }

    @keyframes ani {
      0% {
        background-position: 0%;
      }

      100% {
        background-position: 400%;
      }
    }

    .link_more::before,
    .link_more::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .link_more div {
      position: relative;
      z-index: 10;
      transition: color 0.4s;
    }

    .link_more::before {
      content: "";
      background: #4570b6;

      width: 120%;
      left: -10%;
      transform: skew(30deg);
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    .link_more:hover::before {
      color: #4570b6;
      transform: translate3d(100%, 0, 0);
    }
  }

  .contact_hunzhan {
    top: calc(66% - 120px);

    .link_more {
      background: #EDB4BE;
    }
  }

  .contact_hunzhan .link_more::before {
    background: #E88597;
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
}

// mb
@media (max-width: 768px) {
  .ball {
    display: none;
  }

  .el-menu-vertical-demo .el-menu-item a {
    display: block !important;
  }

  .link_more {
    display: none;
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
    margin: 30px auto;
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
}

@media screen and (max-width: 768px) {

  // 移动端
  .header {
    min-height: 18vw;
    margin: 3vw 0;
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