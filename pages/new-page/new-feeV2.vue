<template>
  <div class="fee">
    <HeadV2 />

    <section class="fee-Banner">
      <div class="fee-Banner-Box new-container">
        <div class="fee-Banner-Box-Title">
          <h2>PRICE</h2>
          <span>收費詳情</span>
          <p><a href="/">主頁 > </a><a href="/fee">收費詳情</a></p>
        </div>
      </div>

      <div class="fee-img">
        <div class="fee-img-Box new-container">
          <div class="fee-img-Box-image">
            <div class="fee-img-Box-image-name">
              <h4>希瑪微笑閃亮大使</h4>
              <p>
                <span> MAGGIE<i>米姬</i></span>
              </p>
            </div>

            <img
              decoding="async"
              src="https://statichk.cmermedical.com/smile/feeV2/fee-img-newPC.avif"
              loading="lazy"
              width="100%"
              height="100%"
              srcset="
                https://statichk.cmermedical.com/smile/feeV2/fee-img-newMB.avif 400w,
                https://statichk.cmermedical.com/smile/feeV2/fee-img-newMB.avif 992w,
                https://statichk.cmermedical.com/smile/feeV2/fee-img-newPC.avif
              "
              sizes=" (max-width: 992px) 100vw,1216px"
            />

            <div class="fee-img-Box-image-tip">
              本診所絕無<br class="d-lg-none" />其他額外收費
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="new_title_style">
      <H2Tag :title="[$t('fee.table.title')]" />
      <p class="title_sub">{{ $t("fee.table.sub_title") }}</p>
    </div>
    -->
    <div class="feeV2-Bg">
      <section class="smilepro-difference">
        <table class="table custom-comparison-table new-container">
          <thead>
            <tr>
              <th>此為<br class="d-lg-none" />香港價錢 </th>

              <th>
                <span>SMILE Pro</span><br class="d-lg-none" />
                <span>Care</span><br />
                微笑激光<br class="d-lg-none" />矯視
              </th>
              <th>
                <span>SMILE</span> <br class="d-lg-none" /><span>Pro</span
                ><br />微笑激光<br class="d-lg-none" />矯視
              </th>

              <th>
                <span>ICL</span> <br />植入式<br class="d-lg-none" />隱形眼鏡
              </th>
              <th>
                <span>SMILE</span> <br />微笑激光<br class="d-lg-none" />矯視
              </th>
              <th>
                <span>LASIK</span><br class="d-lg-none" />激光矯視/<br />
                <span>TPRK</span><br class="d-lg-none" />經上皮<br
                  class="d-lg-none"
                />激光<br class="d-none d-lg-block" />角膜<br
                  class="d-lg-none"
                />切削手術
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>價錢(雙眼)</td>
              <td>$26,000^</td>
              <td>$24,000^</td>
              <td>不帶散光<br />$64,000^^<br />帶散光<br />$68,000^^</td>
              <td>$19,000^</td>
              <td>$19,000^</td>
            </tr>

            <tr>
              <td>術前檢查<br class="d-lg-block" />費用</td>
              <td>$100</td>
              <td>$100</td>
              <td>$500</td>
              <td>$100</td>
              <td>$100</td>
            </tr>

            <tr>
              <td>眼睛水潤<br class="d-lg-block" />護理</td>
              <td>1次</td>
              <td>1次</td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
              <td>1次</td>
              <td>1次</td>
            </tr>

            <tr>
              <td>術後眼部<br />彩光護理</td>
              <td>1次</td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
            </tr>

            <tr>
              <td>眼科專科<br />醫生檢查</td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
            </tr>

            <tr class="custom-comparison-table-tipIcon">
              <td>術後覆診</td>
              <td>
                <span>5次<i>#</i></span>
              </td>
              <td>
                <span>3次<i>#</i></span>
              </td>
              <td>
                <span>5次<i>#</i></span>
              </td>
              <td>
                <span>3次<i>#</i></span>
              </td>
              <td>
                <span>3次<i>#</i></span>
              </td>
            </tr>

            <tr>
              <td>增進手術</td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/error.svg"
                  alt="不包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
            </tr>

            <tr>
              <td>無限視光<br class="d-lg-block" />檢查</td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
              <td>
                <img
                  src="https://statichk.cmermedical.com/smile/feeV2/success.svg"
                  alt="包括"
                />
              </td>
            </tr>

            <tr class="custom-comparison-table-extra">
              <td></td>
              <td colspan="5">
                <div>
                  <span>
                    SMILE XTRA<br class="d-none d-lg-block" />
                    角膜膠原交聯術
                  </span>
                </div>
              </td>
            </tr>
            <tr class="custom-comparison-table-extraTwo">
              <td></td>
              <td colspan="5">
                <div>
                  <div>單眼</div>
                  <div>雙眼</div>
                </div>
              </td>
            </tr>
            <tr class="custom-comparison-table-extraThree">
              <td></td>
              <td colspan="5">
                <div>
                  <div>$3,000</div>
                  <div>$5,000</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 表格二 -->

      <section class="smilepro-difference smilepro-difference-two">
        <table
          class="table custom-comparison-table custom-table-extro new-container"
        >
          <thead>
            <tr>
              <th>此為<br class="d-lg-none" />香港價錢 </th>
              <th colspan="2" class="tablePink">Clear-Vision<br />老花矯視</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td class="tablePinkZero">不帶散光</td>
              <td class="tablePinkZero">帶散光</td>
            </tr>

            <tr>
              <td>單焦點<br class="d-lg-none" />人工晶體<br />(單眼)</td>
              <td>$25,000 - $28,000</td>
              <td>$30,000 - $35,000</td>
            </tr>

            <tr>
              <td>多焦點<br class="d-lg-none" />人工晶體<br />(單眼)</td>
              <td>$35,000 - $45,000</td>
              <td>$43,000 - $51,000</td>
            </tr>

            <tr>
              <td>術前檢查<br class="d-lg-none" />費用</td>
              <td colspan="2">$680</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div class="fee-table-container">
        <a
          class="meal-btn"
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-14)%E5%B8%8C%E7%91%AA%E7%9F%AF%E8%A6%96"
          >{{ $t("fee.table.btn") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
          >
            <path
              d="M3.19922 26.0597L25.8278 3.43115"
              stroke="white"
              stroke-width="5.4"
              stroke-linecap="round"
            />
            <path
              d="M6.49609 2.71118H26.5987V22.1512"
              stroke="white"
              stroke-width="4.86"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>

      <div class="ellipse_explain_bg">
        <div class="ellipse_explain">
          <span>{{ $t("fee.textList.text1") }}</span>
          <span>
            {{ $t("fee.textList.text2") }}<br />
            {{ $t("fee.textList.text2_1") }}
            {{ $t("fee.textList.text2_2") }}<br />
          </span>
          <span>
            {{ $t("fee.textList.text3") }}<br />
            {{ $t("fee.textList.text3_1") }}
            {{ $t("fee.textList.text3_2") }}<br />
            {{ $t("fee.textList.text3_3") }}
          </span>
          <br />
          <span>
            {{ $t("fee.textList.text4") }}
          </span>
          <br />
          <span>
            {{ $t("fee.textList.text5") }}
          </span>
          <br />
          <span>
            {{ $t("fee.textList.text6") }}
          </span>
        </div>
      </div>
    </div>
    <!-- <businessHours /> -->

    <FooterV2 />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import FeeSetMeal from "@/components/content/new/FeeSetMeal.vue";
import FeeTableMobile from "@/components/content/new/FeeTableMobile.vue";
// import Lasik from "./lasik.vue";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    FeeSetMeal,
    FeeTableMobile,
    FooterV2,
    HeadV2,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/fee",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/fee",
      browserTitle: "收費詳情 - 希瑪微笑矯視中心",
      browserTitleCn: "收费详情 - 希玛微笑矫视中心",
      isMobile: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.style.paddingTop = this.isMobile ? "100px" : "150px";
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "希瑪微笑矯視中心價目清晰，絕無其他額外收費。立即查看各項激光矯視價錢。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "smile 矯視 價錢,激光矯視費用,smile價錢,激光矯視 價錢,微笑矯視 價錢,矯視價錢,老花手術費用,smile pro 價錢",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/fee",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/fee",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/fee",
        },
      ],
    };
  },
  mounted() {
    // 获取屏幕宽度 判断是否是移动端
    this.isMobile = false;
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

<style>
body {
  overflow-x: hidden;
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(.businessHours) {
    max-width: 100vw;
    margin: 0 auto;
  }
  .fee {
    max-width: 100vw;
    margin: 0 auto;
    :deep(h2) {
      margin-bottom: 20px;
    }
  }
  :deep(.footer_new) {
    max-width: 100vw;
  }
  // .table_new_fee {
  //   max-width: 1320px;
  //   width: 100%;
  //   min-width: 680px;
  //   margin: 85px auto 95px;
  // }
  .new_title_style {
    max-width: 1150px;
    width: 100%;
    min-width: 680px;
    margin: 120px auto 0;
    // padding-left: 6.678vw;
  }
  .fee-table-container {
    max-width: 1150px;
    width: 100%;
    min-width: 680px;
    margin: 0 auto;
    // padding-left: 5.208vw;
  }
  .title_sub {
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    letter-spacing: 5px;
  }
  .table_new_fee_box {
    display: flex;
    gap: 0 7px;
  }
  .table_left {
    display: flex;
    flex-direction: column;
    gap: 9px 0;
    width: 9.375vw;
    max-width: 9.375vw;
    min-width: 9.375vw;
    & > div:nth-child(1) {
      margin-top: 3px;
      height: 5.4948vw;
    }
    & > div:nth-child(2) {
      height: 9.401vw;
    }
    & > div:nth-child(3),
    & > div:nth-child(4) {
      height: 3.552vw;
    }
    & > div:nth-child(5),
    & > div:nth-child(6) {
      height: 4.99vw;
    }
    & > div:nth-child(7),
    & > div:nth-child(8),
    & > div:nth-child(9) {
      height: 3.239vw;
    }
    & > div {
      //   border-radius: 0.729vw;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.729vw 0;
      margin-top: 0.15625vw;
      & > div {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 1.145vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4; /* 140% */
        letter-spacing: 0.2vw;
      }
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        color: #b64545;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 1.04vw;
        font-style: normal;
        font-weight: 350;
        line-height: 2; /* 200% */
        letter-spacing: 1px;
      }
    }
  }
  .table_right {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    // gap: 0.46875vw 0.3958vw;
    width: 100%;

    & > div {
      //   border-radius: 0.729vw;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.729vw 0;
    }
    & > div:nth-child(1) {
      background: transparent !important;
    }
    & > div:nth-child(2) {
      color: #fff !important;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.354vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.829vw; /* 116.667% */
      letter-spacing: 0.1042vw !important;
      //   border-radius: 1.30208vw;
      background: #71bfd8 !important;
      & > div:nth-child(1) {
        font-size: 1.15vw;
      }
      & > div:nth-child(2) {
        font-size: 1.15vw;
      }
    }
    & > div:nth-child(3),
    & > div:nth-child(6) {
      color: #fff !important;
      //   border-radius: 1.3vw;
      background: #719ad8 !important;
      & > div:nth-child(1) {
        font-size: 1.15vw;
      }
      & > div:nth-child(2) {
        font-size: 1.15vw;
      }
    }
    & > div:nth-child(4) {
      color: #fff !important;
      font-size: 1.2vw !important;
      letter-spacing: 0.1vw !important;
      //   border-radius: 1.3vw;
      background: #86d2c4 !important;
    }
    & > div:nth-child(5) {
      //   border-radius: 1.3vw;
      background: #d7eef6 !important;
      color: #4570b6 !important;
    }
    & > div:nth-child(3),
    & > div:nth-child(5),
    & > div:nth-child(4) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.4583vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.829vw; /* 116.667% */
      letter-spacing: 0.26vw;
      box-sizing: border-box;
      padding: 0 0.502vw;
      & > div:nth-child(1) {
        font-size: 1.05vw;
      }
      & > div:nth-child(2) {
        font-size: 1.05vw;
      }
    }
    & > div:nth-child(6) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.145vw !important;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5625vw !important; /* 116.667% */
      letter-spacing: 1px !important;
      box-sizing: border-box;
      padding: 0 0.57vw;
      & > div:nth-child(1) {
        font-size: 1.05vw;
      }
      & > div:nth-child(2) {
        font-size: 1.05vw;
      }
    }
    & > div:nth-child(21),
    & > div:nth-child(22),
    & > div:nth-child(23),
    & > div:nth-child(24),
    & > div:nth-child(25),
    & > div:nth-child(26),
    & > div:nth-child(27),
    & > div:nth-child(28) {
      height: 5.1046vw;
    }
    & > div:nth-child(6n + 1) {
      //   border-radius: 0.729vw;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.729vw 0;
      margin-top: 0.15625vw;
      & > div {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 1.145vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.823vw; /* 140% */
        letter-spacing: 0.2vw;
      }
    }
    & > div:nth-child(7) {
      & > div:nth-child(2) {
        color: #b64545;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 1.04vw;
        font-style: normal;
        font-weight: 350;
        line-height: 2.083vw; /* 200% */
        letter-spacing: 1px;
      }
    }
    & > div:nth-child(6n + 2),
    & > div:nth-child(6n + 3),
    & > div:nth-child(6n + 4),
    & > div:nth-child(6n + 5),
    & > div:nth-child(6n + 6) {
      //   border-radius: clamp(0.729vw, 0.729vw, 14px);
      background: #f1f5fc;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(1.254vw, 1.254vw, 26px);
      font-style: normal;
      font-weight: 400;
      line-height: clamp(2.083vw, 2.083vw, 40px); /* 133.333% */
      letter-spacing: clamp(0.23vw, 0.23vw, 4.5px);
    }
  }

  .clear_vision {
    margin-top: 8px;
    display: flex;
    gap: 0.4165vw 0.3125vw;
  }
  .clear_vision_left {
    width: 10.675vw;
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 0.4165vw;
      height: 3.229vw;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      height: 7.2395vw;
    }
    & > div:nth-child(4) {
      height: 3.48vw;
    }
    & > div {
      background: #fff;
      width: 10.675vw;
      max-width: 10.675vw;
      font-size: 1.302vw;
      font-style: normal;
      font-weight: 400;
      line-height: 1.822vw; /* 140% */
      letter-spacing: 0.208vw;

      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .clear_vision_right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4165vw 0.3125vw;
    width: 100%;
    justify-content: space-between;
    & > div:nth-child(1) {
      border-radius: 0.5208vw;
      background: #cca9dd;
      margin-bottom: 0.4165vw;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.5625vw;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5625vw; /* 100% */
      letter-spacing: 0.234375vw;
    }
    & > div {
      //   border-radius: 0.729vw;
      background: #fafcfc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.873vw;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.5625vw;
      font-style: normal;
      font-weight: 400;
      line-height: 2.08vw;
    }
  }
  .clear_vision_right > div:nth-child(1),
  .clear_vision_right > div:nth-child(6) {
    width: 100%;
    max-width: 100%;
    grid-column: span 2;
  }
  .bold_font {
    font-weight: 600;
    font-size: 1.5625vw;
  }
  .smile_xtra {
    margin-top: 0.78125vw;
    display: flex;
    gap: 0.4165vw 0.3125vw;
    margin-bottom: 3.385415vw;
  }
  .smile_xtra_left {
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 0.4165vw;
      height: 3.22vw;
    }
    & > div:nth-child(2) {
      height: 3.4895vw;
    }

    & > div {
      background: #fff;
      width: 10.675vw;
      max-width: 10.675vw;
      font-size: 1.302vw;
      font-style: normal;
      font-weight: 400;
      line-height: 1.829vw; /* 140% */
      letter-spacing: 0.208vw;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .smile_xtra_right {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.4165vw 0.3125vw;
    & > div {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.5625vw;
      font-style: normal;
      font-weight: 400;
      line-height: 2.083vw; /* 133.333% */
      letter-spacing: 0.234vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:not(:nth-child(1)):nth-child(n) {
      border-radius: 0.364vw;
      background: #f1f5fc;
    }
    & > div:not(:nth-child(1)):nth-child(2n) {
      border-radius: 0.364vw;
      background: #fafcfc;
    }
    & > div:nth-child(1) {
      border-radius: 0.52vw;
      background: #d7eef6;
    }
  }
  .smile_xtra_right > div:nth-child(1) {
    width: 100%;
    max-width: 100%;
    grid-column: span 4;
  }
  .line_green {
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      width: 1.4583vw;
      height: 0.15625vw;
      display: inline-block;
      background: #15967f;
    }
  }
  .line_blue {
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      width: 1.4583vw;
      height: 0.15625vw;
      display: inline-block;
      background: #4b69a6;
    }
  }
  .ellipse_explain_bg {
    padding-top: clamp(67px, 6.98vw, 134px);
    max-width: 100vw;
    margin-bottom: 4.947vw;
  }
  .ellipse_explain {
    position: relative;
    max-width: 1282px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    &::after {
      content: "";
      position: absolute;
      width: 872px;
      height: 196px;
      background: url("https://statichk.cmermedical.com/cph-hk/newFee/ellipse_explain_bgPc.avif")
        no-repeat;
      background-size: 100% auto;
      bottom: -60px;
      right: -36px;
      z-index: -1;
    }

    span {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 156.25%;
      letter-spacing: 4px;
    }
  }
  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
  }
  .banner-img {
    border-radius: 2.864vw;
    width: 100%;
    overflow: hidden;
    & > img {
      margin: 0 auto;
      object-fit: cover;
      border-radius: 2.864vw;
    }
  }
  .fee-table-container {
    // margin-bottom: 4.165vw;
    & > a {
      margin: 0 auto;
      margin-top: clamp(51.5px, 5.36vw, 103px);
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5625vw;
      letter-spacing: 0.390625vw;
      background: #4570b6;
      width: -moz-max-content;
      width: max-content;
      border-radius: 5.208vw;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 29px 2.76vw 29px 3.229vw;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  // .table_new_fee {
  //   min-width: 50vw;
  // }
  .new_title_style {
    min-width: 50vw;
  }
  .fee-table-container {
    max-width: 1150px;
    width: 80.34vw !important;
    min-width: 50vw;
  }
  .ellipse_explain {
    // max-width: 60.34vw; !important;
    // min-width: 50vw;
  }
}

@media screen and (max-width: 767px) {
  .fee {
    :deep(h2) {
      margin-bottom: 15px;
    }
  }
  // .table_new_fee {
  //   overflow: scroll;
  //   margin: 50px 12px 30px;
  // }
  .title_sub {
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    letter-spacing: 4px;
  }
  // .table_new_fee::-webkit-scrollbar {
  //   width: 0;
  //   height: 5px;
  // }
  // .table_new_fee::-webkit-scrollbar-thumb {
  //   background-color: #ccc;
  // }
  // .table_new_fee::-webkit-scrollbar-track {
  //   background-color: #4570b6;
  // }

  .table_new_fee_box {
    display: flex;
    gap: 0 4px;
    width: 782px;
  }
  .table_left {
    position: sticky;
    left: -1px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 3.66px 3.65px;
    width: 114px;
    min-width: 114px;
    background: #fff;
    & > div:nth-child(1) {
      margin-top: 0;
      height: 20.62vw;
    }
    & > div:nth-child(2) {
      // height: 103.4px;
      height: 24.92vw;
    }
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5),
    & > div:nth-child(8),
    & > div:nth-child(6),
    & > div:nth-child(7),
    & > div:nth-child(9) {
      // height: 24px;
      min-height: 11.25vw;
    }
    & > div {
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 0;
      margin-bottom: 0;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 218.75% */
      letter-spacing: 2.2px;
      & > div {
        display: inline;
        line-height: 1;
      }
      & > div:nth-child(1) {
        margin-bottom: 3px;
      }
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        color: #b64545;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 350;
        line-height: 20px; /* 285.714% */
        letter-spacing: 1.2px;
      }
    }
  }
  .table_right {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.923vw 0.835vw;

    img {
      width: 5.128vw;
      height: 5.128vw;
    }

    & > div {
      border-radius: 3.589vw;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 0;
      min-height: 10.258vw;
      min-width: 40vw;
    }
    & > div:nth-child(5n + 1) {
      background: #71bfd81a;
    }
    & > div:nth-child(5n + 2) {
      background: #f1f5fc;
    }
    & > div:nth-child(5n + 3) {
      background: #fafcfc;
    }
    & > div:nth-child(5n + 4) {
      background: #fafcfc;
    }
    & > div:nth-child(5n + 5) {
      background: #f1f5fc;
    }
    & > div:nth-child(5n + 1),
    & > div:nth-child(5n + 2),
    & > div:nth-child(5n + 3),
    & > div:nth-child(5n + 4),
    & > div:nth-child(5n + 5) {
      border-radius: 3.58vw;
      color: #4b69a6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.4vw;
      font-style: normal;
      font-weight: 400;
      line-height: 5.25vw; /* 250% */
      letter-spacing: 0.615vw;
    }

    & > div:nth-child(1) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 4.1vw;
      font-style: normal;
      font-weight: 700;
      line-height: 6.4vw; /* 156.25% */
      letter-spacing: 0.615vw;
      height: 20.6vw;
      border-radius: 3.07vw;
      background: #71bfd8;
    }
    & > div:nth-child(2),
    & > div:nth-child(5) {
      border-radius: 3.07vw;
      background: #719ad8;
      color: #fff;
    }
    & > div:nth-child(3) {
      border-radius: 3.07vw;
      background: #86d2c4;
    }
    & > div:nth-child(4) {
      border-radius: 3.07vw;
      background: #d7eef6;
      color: #4570b6 !important;
    }
    & > div:nth-child(2),
    & > div:nth-child(4),
    & > div:nth-child(5),
    & > div:nth-child(3) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.589vw;
      font-style: normal;
      font-weight: 700;
      line-height: 5.128vw; /* 156.25% */
      letter-spacing: 0.615vw;
      height: 20.6vw;
    }

    & > div:nth-child(6),
    & > div:nth-child(7),
    & > div:nth-child(8),
    & > div:nth-child(9),
    & > div:nth-child(10),
    & > div:nth-child(11),
    & > div:nth-child(12) {
      // height: 103.4px;
    }

    & > div:nth-child(21),
    & > div:nth-child(22),
    & > div:nth-child(23),
    & > div:nth-child(24),
    & > div:nth-child(25),
    & > div:nth-child(26),
    & > div:nth-child(27),
    & > div:nth-child(28) {
      // height: 78px;
    }
    & > div:nth-child(n + 33) {
      // height: 24px;
    }
  }
  // .table_right > div:last-child {
  //   padding: 10px 0;
  //   grid-column: span 5;
  //   border-radius: 10px;
  //   background: #71bfd8;
  //   color: #fff;
  //   width: 100%;
  //   max-width: 100%;
  //   line-height: 1.4;
  // }
  .table_right > div:nth-child(1) {
    & > div:nth-child(1) {
      font-size: 3.589vw;
      letter-spacing: 0.25vw;
    }
  }
  .clear_vision {
    margin-top: 8px;
    display: flex;
    gap: 8px 6px;
    width: 855px;
  }
  .clear_vision_left {
    position: sticky;
    left: -1px;
    width: 114px;
    z-index: 10;
    background: #fff;
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 8px;
      height: 42px;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      height: 85.88px;
    }
    & > div:nth-child(4) {
      height: 65px;
    }
    & > div {
      width: 114px;
      max-width: 114px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 156.25% */
      letter-spacing: 1.8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .clear_vision_right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4.35px 3.5px;
    width: 100%;
    max-width: 100%;
    & > div:nth-child(1) {
      border-radius: 10px;
      background: #cca9dd;
      margin-bottom: 4px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 187.5% */
      letter-spacing: 2.4px;
      height: 42px;
    }
    & > div {
      // width: 289.512px;
      // max-width: 289.512px;
      border-radius: 14px;
      background: #fafcfc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 250% */
      letter-spacing: 2.4px;
    }
    // 2 - 6
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5),
    & > div:nth-child(6) {
      height: 85.88px;
    }
  }
  .clear_vision_right > div:nth-child(1),
  .clear_vision_right > div:nth-child(6) {
    // 独占两列
    grid-column: span 2;
    width: 100%;
    max-width: 100%;
  }
  .bold_font {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
  }
  .smile_xtra {
    margin-top: 26px;
    margin-bottom: 22px;
    display: flex;
    gap: 8px 6px;
    width: 855px;
  }
  .smile_xtra_left {
    position: sticky;
    left: 0;
    width: 114px;
    z-index: 10;
    background: #fff;
    width: 114px;
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 8px;
      height: 42px;
    }
    & > div:nth-child(2) {
      height: 55.88px;
    }

    & > div {
      width: 114px;
      max-width: 114px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 156.25% */
      letter-spacing: 2.4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .smile_xtra_right {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.35px 3.5px;
    & > div {
      color: #4570b6;
      border-radius: 14px;
      background: #fafcfc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 250% */
      letter-spacing: 2.4px;
    }
    & > div:not(:nth-child(1)):nth-child(n) {
      border-radius: 6px;
      background: #f1f5fc;
      color: #4570b6;
      // width: 144px;
    }
    & > div:not(:nth-child(1)):nth-child(2n) {
      border-radius: 6px;
      background: #fafcfc;
      color: #4570b6;
      // width: 144px;
    }
    & > div:nth-child(1) {
      border-radius: 8px;
      background: #d7eef6;
      color: #4570b6;
    }
  }
  .smile_xtra_right > div:nth-child(1) {
    width: 100%;
    max-width: 100%;
    grid-column: span 4;
  }
  .line_green {
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      width: 28px;
      height: 3px;
      display: inline-block;
      background: #15967f;
    }
  }
  .line_blue {
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      width: 28px;
      height: 3px;
      display: inline-block;
      background: #4b69a6;
    }
  }
  .ellipse_explain_bg {
    // background: url("https://static.cmereye.com/imgs/2024/08/523108db1c129793.png")
    //   no-repeat;
    // background-size: 100% 100%;
    box-sizing: border-box;
    padding: 40px 7.69vw;
    margin-bottom: 55px;
  }
  .ellipse_explain {
    position: relative;
    max-width: 1270px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      position: absolute;
      width: 151px;
      height: 672px;
      background: url("https://statichk.cmermedical.com/cph-hk/newFee/ellipse_explain_bgMb.avif")
        no-repeat;
      background-size: 100% auto;
      bottom: 0;
      right: -30px;
      z-index: -1;
    }

    span {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 187.5% */
      letter-spacing: 0.8px;
    }
  }
  .banner-img {
    // background: url("https://statichk.cmermedical.com/smile/fee/08ef23b96b14.avif")
    //   no-repeat;
    // background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px 55px;
    border-radius: 44px;
    // padding-left: 10px;
    // padding-top: 70%;
    & > img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      object-fit: cover;
      border-radius: 44px;
    }
    // display: flex;
    // align-items: flex-start;
    // flex-direction: column;
    // justify-content: center;
    // padding-left: 20px;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
  .fee-table-container {
    margin-top: 38px;
    & > a {
      display: flex;
      gap: 9px;
      align-items: center;

      width: max-content;
      margin: 0 auto;
      color: #fff;

      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 1px;
      background: #4570b6;
      border-radius: 100px;
      padding: 5px 30px 6px 30px;
      svg {
        width: 17px;
        height: 17px;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .d-none {
    display: none;
  }

  // Banner
  .fee-Banner {
    position: relative;
    margin-top: 90px;
    height: 61.54vw;
    z-index: 3;
    &::after {
      position: absolute;
      content: "";
      width: 20.51vw;
      height: 28.21vw;
      background: url("https://statichk.cmermedical.com/smile/feeV2/fee-Banner-after.avif")
        no-repeat;
      background-size: 100% auto;
      right: -8.72vw;
      top: 0;
    }

    .fee-Banner-Box {
      padding-top: 9.74vw;
      .fee-Banner-Box-Title {
        padding-left: 8.21vw;

        h2 {
          margin-bottom: 0;
          text-align: left;
          color: #4570b6;
          font-family: "Poppins", sans-serif;
          font-size: 11.66vw;
          font-style: normal;
          font-weight: 700;
          line-height: 109.4%;
        }
        span {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 6.29vw;
          font-style: normal;
          font-weight: 400;
          line-height: 109.4%;
        }

        p {
          margin-top: 23.08vw;
          height: 11.28vw;
          a {
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: 3.08vw;
            font-style: normal;
            font-weight: 500;
            line-height: 362.5%;
            letter-spacing: 0.09vw;
          }
          & > a:last-child {
            color: #4570b6;
          }
        }
      }
    }
  }

  .fee-img {
    background: url("https://statichk.cmermedical.com/smile/feeV2/fee-Banner-Bg.avif")
      no-repeat;
    background-size: 230.77vw auto;
    background-position: 42% 1.54vw;
    width: 100%;
    position: absolute;
    top: 2px;
    z-index: -1;
    .fee-img-Box {
      .fee-img-Box-image {
        width: 100vw;
        margin: 0 auto;
        position: relative;
        .fee-img-Box-image-name {
          position: absolute;
          bottom: 41.79vw;
          left: 34.36vw;

          h4,
          p {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 400;
            line-height: 152.349%;
          }
          p {
            span {
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              i {
                font-style: normal;
                font-family: "Noto Sans TC";

                font-weight: 900;
              }
            }
          }
        }
        img {
          width: 62.31vw;
          // height: 90vw;
          margin-left: auto;
        }

        .fee-img-Box-image-tip {
          position: absolute;
          bottom: 7.69vw;
          left: 8.72vw;
          width: 35.9vw;

          height: 15.38vw;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          background: #4570b6;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 400;
          line-height: 152.349%;
          letter-spacing: 0.9vw;

          &::after {
            position: absolute;
            content: "";
            bottom: -2.82vw;
            left: 50%;
            width: 0;
            height: 0;
            border-left: 3.85vw solid transparent;
            border-top: 3.33vw solid #4570b6;
          }
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 30.77vw;
    overflow: scroll;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    .custom-comparison-table {
      // margin-top: 7.69vw;
      // width: max-content;
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
      // background: #f4fafc;
      width: 15.9vw;
      height: 27.44vw;
      color: #fff;
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 123.077%;
      letter-spacing: -0.65px;
      color: white;
    }
    .custom-comparison-table-tipIcon {
      td {
        span {
          position: relative;
          i {
            position: absolute;
            font-size: 12px;
            top: 2px;
            font-style: normal;
            right: -8px;
          }
        }
      }
    }

    .custom-comparison-table thead th:nth-child(1),
    .custom-comparison-table tbody tr td:nth-child(1) {
      width: 17.95vw;
      position: sticky;
      left: 0;
      opacity: 1;
      z-index: 2;
    }
    .custom-comparison-table thead th {
      border-bottom: none;
    }
    .custom-comparison-table thead tr > th:nth-child(1) {
      background: #f6fafd;
      opacity: 1;
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.25;
      letter-spacing: 2.4px;
    }
    .custom-comparison-table thead tr > th:nth-child(2) {
      background: #5991e5;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #719ad8;
    }
    .custom-comparison-table thead tr > th:nth-child(4) {
      background: #86d2c4;
    }
    .custom-comparison-table thead tr > th:nth-child(5) {
      background: #8fd3ea;
    }
    .custom-comparison-table thead tr > th:nth-child(6) {
      background: #d8bb71;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 1;
      img {
        margin: 0 auto;
        width: 21px;
      }
    }

    .custom-comparison-table tbody .custom-comparison-table-extra td,
    .custom-comparison-table tbody .custom-comparison-table-extraTwo td,
    .custom-comparison-table tbody .custom-comparison-table-extraThree td {
      border-bottom: none;
    }
    .custom-comparison-table
      tbody
      .custom-comparison-table-extra
      td:nth-child(1),
    .custom-comparison-table
      tbody
      .custom-comparison-table-extraTwo
      td:nth-child(1),
    .custom-comparison-table
      tbody
      .custom-comparison-table-extraThree
      td:nth-child(1) {
      background: none;
    }
    .custom-comparison-table tbody .custom-comparison-table-extraTwo {
      height: 31px;
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extra
      td:nth-child(2) {
      background: #8fd3ea;
      color: #fff;
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 116.164%;
      div {
        position: relative;
        span {
          position: relative;
          padding-left: 55px;
        }
        span::after {
          position: absolute;
          left: 0px;
          top: -20px;
          content: "額外項目";
          background: white;
          padding: 5px;
          border-radius: 5px;
          color: #8fd3ea;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 120.359%;
          transform: rotate(-15deg);
        }
        span::before {
          content: "";
          position: absolute;
          left: 46px;
          top: -1px;
          width: 0;
          height: 0;
          transform: rotate(-15deg);
          border-left: 8px solid transparent;
          border-top: 8px solid white;
        }
      }
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extraTwo
      td:nth-child(2) {
      background: #e9f9ff;
      div {
        display: flex;
        justify-content: space-around;

        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 110.333%;
        letter-spacing: 2.8px;
      }
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extraThree
      td:nth-child(2) {
      background: #fff;
      border-bottom: 1px solid #d0d0d0;
      div {
        display: flex;
        justify-content: space-around;
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 82.75%;
        letter-spacing: 0.7px;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background: white;
      opacity: 1;

      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 107.143%;
      height: inherit;

      p {
        color: #ff7e36;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
      }
    }
    .custom-comparison-table tbody tr > td:nth-child(2) {
      background: #e7f1ff;
    }
    .custom-comparison-table tbody tr > td:nth-child(3) {
      background: #f1f5fc;
    }
    .custom-comparison-table tbody tr > td:nth-child(4) {
      background: #f1fcf9;
    }
    .custom-comparison-table tbody tr > td:nth-child(5) {
      background: #e2f8ff;
    }
    .custom-comparison-table tbody tr > td:nth-child(6) {
      background: #fbfcf1;
    }
  }

  // 表格二
  .smilepro-difference-two {
    margin-top: 70px;
  }
  .smilepro-difference {
    .custom-table-extro {
      width: 100vw;
      thead {
        tr {
          th {
            border-bottom: none;
            height: 76px;

            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 112.5%;
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #d0d0d0;
          td {
            border-bottom: none;
          }
          td:nth-child(1),
          td:nth-child(2),
          td:nth-child(3) {
            background: none;
          }
        }
        & > tr:nth-child(1) {
          border-bottom: none;
          height: 31px;
          td {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 110.333%;
            letter-spacing: 2.8px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .d-lg-none {
    display: none;
  }
  .d-lg-block {
    display: block;
  }

  // Banner
  .fee-Banner {
    position: relative;
    margin-top: 160px;
    height: clamp(245px, 25.52vw, 490px);
    z-index: 3;
    &::before {
      position: absolute;
      content: "";
      width: clamp(128.5px, 13.39vw, 257px);
      height: clamp(154px, 16.04vw, 308px);
      background: url("https://statichk.cmermedical.com/smile/feeV2/fee-Banner-beforePc.avif")
        no-repeat;
      background-size: 100% auto;
      left: clamp(-94px, -4.9vw, -47px);
      top: clamp(35px, 3.65vw, 70px);
    }

    &::after {
      position: absolute;
      content: "";
      width: clamp(135px, 14.06vw, 270px);
      height: clamp(184px, 19.17vw, 368px);
      background: url("https://statichk.cmermedical.com/smile/feeV2/fee-Banner-afterPc.avif")
        no-repeat;
      background-size: 100% auto;
      right: clamp(-106px, -5.52vw, -53px);
      top: 0;
    }

    .fee-Banner-Box {
      padding-top: clamp(80px, 8.33vw, 160px);
      .fee-Banner-Box-Title {
        padding-left: clamp(39px, 4.06vw, 78px);
        h2 {
          margin-bottom: 0;
          text-align: left;
          color: #4570b6;
          font-family: "Poppins", sans-serif;
          font-size: clamp(68.5px, 7.14vw, 137px);
          font-style: normal;
          font-weight: 700;
          line-height: 109.4%;
        }
        span {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(37px, 3.85vw, 74px);
          font-style: normal;
          font-weight: 400;
          line-height: 109.4%;
        }

        p {
          margin-top: clamp(32.5px, 3.39vw, 65px);
          height: clamp(22px, 2.29vw, 44px);
          a {
            color: #6d6e71;
            font-family: "Noto Sans TC";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 300;
            line-height: 217.5%;
            letter-spacing: clamp(0.3px, 0.03vw, 0.6px);
          }
          & > a:last-child {
            color: #4570b6;
          }
        }
      }
    }
  }

  .fee-img {
    background: url("https://statichk.cmermedical.com/smile/feeV2/fee-Banner-PCBg.webp")
      no-repeat;
    background-size: clamp(1045px, 108.85vw, 2090px) auto;
    background-position: calc(50% + clamp(20px, 2.08vw, 40px))
      clamp(15px, 1.56vw, 30px);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    .fee-img-Box {
      .fee-img-Box-image {
        width: clamp(442px, 46.04vw, 884px);
        margin-left: auto;
        position: relative;
        .fee-img-Box-image-name {
          position: absolute;
          // right: clamp(15px, 1.56vw, 30px);
          // bottom: clamp(108px,11.25vw,216px);

          bottom: clamp(11.5px, 1.2vw, 23px);
          left: clamp(54px, 5.63vw, 108px);
          h4,
          p {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: clamp(1px, 0.1vw, 2px);
          }
          p {
            font-weight: 900;
            span {
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              i {
                font-style: normal;
                font-family: "Noto Sans TC";

                font-weight: 900;
              }
            }
          }
        }
        img {
          width: clamp(301px, 31.35vw, 602px);
          aspect-ratio: 602/691;
          object-fit: cover;
          margin-left: auto;
          margin-right: clamp(25px, 2.6vw, 50px);
        }

        .fee-img-Box-image-tip {
          position: absolute;
          display: inline-block;
          padding: clamp(3px, 0.31vw, 6px) clamp(9px, 0.94vw, 18px);
          bottom: clamp(65px, 6.77vw, 130px);
          left: clamp(67.5px, 7.03vw, 135px);
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          background: #4570b6;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: clamp(2.5px, 0.26vw, 5px);

          &::after {
            position: absolute;
            content: "";
            bottom: clamp(-18px, -0.94vw, -9px);
            left: 70%;
            width: 0;
            height: 0;
            border-left: clamp(10px, 1.04vw, 20px) solid transparent;
            border-top: clamp(10px, 1.04vw, 20px) solid #4570b6;
          }
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    position: relative;
    margin-top: clamp(100.5px, 10.47vw, 201px);

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
      background: #f4fafc;
      color: white;
      width: 222px;
      height: 148px;
      color: #fff;
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      span {
        font-family: "Poppins", sans-serif;
      }
    }

    .custom-comparison-table-tipIcon {
      td {
        span {
          position: relative;
          i {
            position: absolute;
            font-size: 14px;
            top: 0px;
            font-style: normal;
            right: -10px;
          }
        }
      }
    }

    .custom-comparison-table thead th:nth-child(1) {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 166.667%;
      letter-spacing: 3.6px;
    }
    .custom-comparison-table thead th {
      border-bottom: none;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(2) {
      background: #5991e5;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #719ad8;
    }
    .custom-comparison-table thead tr > th:nth-child(4) {
      background: #86d2c4;
    }
    .custom-comparison-table thead tr > th:nth-child(5) {
      background: #8fd3ea;
    }
    .custom-comparison-table thead tr > th:nth-child(6) {
      background: #d8bb71;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 112.5%;
      letter-spacing: 1px;
      height: 115px;
      img {
        margin: 0 auto;
      }
    }

    .custom-comparison-table tbody .custom-comparison-table-extra td,
    .custom-comparison-table tbody .custom-comparison-table-extraTwo td,
    .custom-comparison-table tbody .custom-comparison-table-extraThree td {
      border-bottom: none;
    }
    .custom-comparison-table
      tbody
      .custom-comparison-table-extra
      td:nth-child(1),
    .custom-comparison-table
      tbody
      .custom-comparison-table-extraTwo
      td:nth-child(1),
    .custom-comparison-table
      tbody
      .custom-comparison-table-extraThree
      td:nth-child(1) {
      background: none;
    }
    .custom-comparison-table tbody .custom-comparison-table-extraTwo td {
      height: 60px;
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extra
      td:nth-child(2) {
      background: #8fd3ea;
      color: #fff;
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      height: 148px;
      div {
        position: relative;
        span {
          position: relative;
        }
        span::after {
          position: absolute;
          left: -83px;
          top: -26px;
          content: "額外項目";
          background: white;
          padding: 8px;
          border-radius: 5px;
          color: #8fd3ea;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 15.542px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%;
          transform: rotate(-15deg);
        }
        span::before {
          content: "";
          position: absolute;
          left: -25px;
          top: 2px;
          width: 0;
          height: 0;
          transform: rotate(-15deg);
          border-left: 15px solid transparent;
          border-top: 15px solid white;
        }
      }
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extraTwo
      td:nth-child(2) {
      background: #e9f9ff;
      div {
        display: flex;
        justify-content: space-around;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        letter-spacing: 4px;
      }
    }

    .custom-comparison-table
      tbody
      .custom-comparison-table-extraThree
      td:nth-child(2) {
      background: #fff;
      border-bottom: 1px solid #d0d0d0;
      div {
        display: flex;
        justify-content: space-around;
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 112.5%;
        letter-spacing: 1px;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 4px;
      p {
        color: #ff7e36;
        font-family: "Noto Sans TC";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 3.6px;
      }
    }
    .custom-comparison-table tbody tr > td:nth-child(2) {
      background: #e7f1ff;
    }
    .custom-comparison-table tbody tr > td:nth-child(3) {
      background: #f1f5fc;
    }

    .custom-comparison-table tbody tr > td:nth-child(4) {
      background: #f1fcf9;
    }
    .custom-comparison-table tbody tr > td:nth-child(5) {
      background: #e2f8ff;
    }
    .custom-comparison-table tbody tr > td:nth-child(6) {
      background: #fbfcf1;
    }
  }

  // 表格二
  .smilepro-difference-two {
    margin-top: 136px;
  }
  .smilepro-difference {
    .custom-table-extro {
      thead {
        tr {
          th {
            border-bottom: none;
            height: 146px;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #d0d0d0;
          td {
            border-bottom: none;
          }
          td:nth-child(1),
          td:nth-child(2),
          td:nth-child(3) {
            background: none;
          }
        }
        & > tr:nth-child(1) {
          border-bottom: none;

          td {
            height: 60px;
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            letter-spacing: 4px;
          }
        }
      }
    }
  }
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

.tablePink {
  background: #cca9dd !important;
}
.tablePinkZero {
  background: #fbf4ff !important;
}
.feeV2-Bg {
  background: linear-gradient(180deg, #f6fafd 0%, rgba(246, 250, 253, 0) 100%);
}
</style>