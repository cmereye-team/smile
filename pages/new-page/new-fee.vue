<template>
  <div class="fee">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img"></div>
      </template>
    </Banner>
    <div class="new_title_style">
      <H2Tag :title="[$t('fee.table.title')]" />
      <p class="title_sub">{{ $t("fee.table.sub_title") }}</p>
    </div>
    <span style="display: none !important;"> {{ isMobile }}</span>
    <div class="table_new_fee">
      <div class="table_new_fee_box">
        <div class="table_left" v-if="isMobile">
          <div></div>
          <div>
            <div>{{ $t("fee.table.content2.text1") }}</div>
            <div>{{ $t("fee.table.content2.text2") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content3.text1") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content4.text1") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content5.text1") }}</div>
            <div>{{ $t("fee.table.content5.text2") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content6.text1") }}</div>
            <div>{{ $t("fee.table.content6.text2") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content7.text1") }}</div>
          </div>
          <div>
            <div>增進手術</div>
          </div>
          <div>
            <div>{{ $t("fee.table.content9.text1") }}</div>
          </div>
          <!-- <div></div> -->
        </div>
        <div class="table_right">
          <div v-if="!isMobile"></div>
          <div>
            <div>SMILE Pro Care</div>
            <div>{{ $t("fee.table.contentRight.content1.text1") }}</div>
          </div>
          <div>
            <div>SMILE Pro</div>
            <div>微笑激光矯視</div>
          </div>
          <div>
            <div>ICL</div>
            <div>{{ $t("fee.table.contentRight.content3.text1") }}</div>
          </div>
          <div>
            <div>SMILE</div>
            <div>{{ $t("fee.table.contentRight.content1.text1") }}</div>
          </div>
          <div>
            <div>{{ $t("fee.table.contentRight.content4.text1") }}</div>
            <div>{{ $t("fee.table.contentRight.content4.text2") }}</div>
            <div>{{ $t("fee.table.contentRight.content4.text3") }}</div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content2.text1") }}</div>
            <div>{{ $t("fee.table.content2.text2") }}</div>
          </div>
          <div>
            <div>$26,000<sup>^</sup></div>
          </div>
          <div>
            <div>$24,000<sup>^</sup></div>
          </div>
          <div>
            <div>{{ $t("fee.table.contentRight.content6.text1") }}</div>
            <div>$64,000<sup>^^</sup></div>
            <div>{{ $t("fee.table.contentRight.content6.text2") }}</div>
            <div>$68,000<sup>^^</sup></div>
          </div>
          <div>
            <div>$19,000^</div>
          </div>
          <div>
            <div>$19,000<sup>^</sup></div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content3.text1") }}</div>
          </div>
          <div>
            <div>$100</div>
          </div>
          <div>
            <div>$100</div>
          </div>
          <div>
            <div>$500</div>
          </div>
          <div>
            <div>$100</div>
          </div>
          <div>
            <div>$100</div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content4.text1") }}</div>
          </div>
          <div>
            <div>1次</div>
          </div>
          <div>
            <div>1次</div>
          </div>
          <div>
            <div class="line_green"><span></span></div>
          </div>
          <div>
            <div>1次</div>
          </div>
          <div>
            <div>1次</div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content5.text1") }}</div>
            <div>{{ $t("fee.table.content5.text2") }}</div>
          </div>
          <div>
            <div>1次</div>
          </div>
          <div>
            <div class="line_blue"><span></span></div>
          </div>
          <div>
            <div class="line_green"><span></span></div>
          </div>
          <div>
            <div class="line_blue"><span></span></div>
          </div>
          <div>
            <div class="line_blue"><span></span></div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content6.text1") }}</div>
            <div>{{ $t("fee.table.content6.text2") }}</div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/green.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content7.text1") }}</div>
          </div>
          <div>
            <div>5次<sup>#</sup></div>
          </div>
          <div>
            <div>3次<sup>#</sup></div>
          </div>
          <div>
            <div>5次<sup>#</sup></div>
          </div>
          <div>
            <div>3次<sup>#</sup></div>
          </div>
          <div>
            <div>3次<sup>#</sup></div>
          </div>
          <div v-if="!isMobile">
            <div>增進手術</div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div class="line_green"><span></span></div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div v-if="!isMobile">
            <div>{{ $t("fee.table.content9.text1") }}</div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/green.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src="../../asset/image/free/blue.svg" alt="" />
            </div>
          </div>
          <!-- <div>
          <div>手術當日藥費</div>
        </div>
        <div>
          <div>
            <img src="../../asset/image/free/blue.svg" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src="../../asset/image/free/blue.svg" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src="../../asset/image/free/green.svg" alt="" />
          </div>
          <div>藥費另外收費</div>
        </div>
        <div>
          <div>
            <img src="../../asset/image/free/blue.svg" alt="" />
          </div>
        </div> -->
          <!-- <div>*SMILE Pro Care 另送價值$1,000 Trip.com電子禮品卡<span class="bold_font">(最後100個名額)</span></div> -->
        </div>
      </div>
      <div class="smile_xtra">
        <div class="smile_xtra_left">
          <div></div>
          <div>
            <span>額外項目</span>
          </div>
        </div>
        <div class="smile_xtra_right">
          <div>SMILE XTRA角膜膠原交聯術</div>
          <div>
            <span>單眼</span>
          </div>
          <div>
            <span>$3,000</span>
          </div>
          <div>
            <span>雙眼</span>
          </div>
          <div>
            <span>$5,000</span>
          </div>
        </div>
      </div>
      <div class="clear_vision">
        <div class="clear_vision_left">
          <div></div>
          <div>
            <span>{{ $t("fee.table.contentLeft.content1.text1") }}</span>
            <span>{{ $t("fee.table.contentLeft.content1.text2") }}</span>
            <span>{{ $t("fee.table.contentLeft.content1.text3") }}</span>
          </div>
          <div>
            <span>{{ $t("fee.table.contentLeft.content2.text1") }}</span>
            <span>{{ $t("fee.table.contentLeft.content2.text2") }}</span>
            <span>{{ $t("fee.table.contentLeft.content2.text3") }}</span>
          </div>
          <div>{{ $t("fee.table.contentLeft.content2.text4") }}</div>
        </div>
        <div class="clear_vision_right">
          <div>{{ $t("fee.table.vision_right.title") }}</div>
          <div>
            <span>$20,000 - $35,000</span>
            <span>{{ $t("fee.table.vision_right.textNoS") }}</span>
          </div>
          <div>
            <span>$23,000 - $41,000</span>
            <span>{{ $t("fee.table.vision_right.textS") }}</span>
          </div>
          <div>
            <span>$26,000 - $51,000</span>
            <span>{{ $t("fee.table.vision_right.textNoS") }}</span>
          </div>
          <div>
            <span>$31,000 - $51,000</span>
            <span>{{ $t("fee.table.vision_right.textS") }}</span>
          </div>
          <div>$650</div>
        </div>
      </div>
    </div>
    <div class="fee-table-container">
      <a
        class="meal-btn"
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-14)%E5%B8%8C%E7%91%AA%E7%9F%AF%E8%A6%96"
        >{{ $t("fee.table.btn") }}</a
      >
    </div>
    <div class="ellipse_explain_bg">
      <div class="ellipse_explain">
        <p>{{ $t("fee.textList.text1") }}</p>
        <p>
          {{ $t("fee.textList.text2") }}<br />
          {{ $t("fee.textList.text2_1") }}
          {{ $t("fee.textList.text2_2") }}<br />
        </p>
        <p>
          {{ $t("fee.textList.text3") }}<br />
          {{ $t("fee.textList.text3_1") }}
          {{ $t("fee.textList.text3_2") }}<br />
          {{ $t("fee.textList.text3_3") }}
        </p>
        <br />
        <p>
          {{ $t("fee.textList.text4") }}
        </p>
        <br />
        <p>
          {{ $t("fee.textList.text5") }}
        </p>
        <br />
        <p>
          {{ $t("fee.textList.text6") }}
        </p>
      </div>
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
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
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/fee",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/fee",
      browserTitle: "收費詳情 - 希瑪微笑矯視中心",
      browserTitleCn: "收费详情 - 希玛微笑矫视中心",
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
@media screen and (min-width: 768px) {
  .fee {
    :deep(h2) {
      margin-bottom: 20px;
    }
  }
  .table_new_fee {
    max-width: 66.14vw;
    margin: 85px auto 95px;
  }
  .new_title_style {
    max-width: 66.14vw;
    margin: 0 auto;
    padding-left: 6.678vw;
  }
  .fee-table-container {
    max-width: 66.14vw;
    margin: 0 auto;
    padding-left: 5.208vw;
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
      border-radius: 0.729vw;
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
    & > div:nth-child(2),
    & > div:nth-child(3) {
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
  }
  .table_right {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.46875vw 0.3958vw;
    width: 100%;

    & > div {
      border-radius: 0.729vw;
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
      border-radius: 1.30208vw;
      background: #71bfd8 !important;
      & > div:nth-child(1) {
        font-size: 1.25vw;
      }
    }
    & > div:nth-child(3),
    & > div:nth-child(6) {
      color: #fff !important;
      border-radius: 1.3vw;
      background: #719ad8 !important;
    }
    & > div:nth-child(4) {
      color: #fff !important;
      font-size: 1.2vw !important;
      letter-spacing: 0.1vw !important;
      border-radius: 1.3vw;
      background: #86d2c4 !important;
    }
    & > div:nth-child(5) {
      border-radius: 1.3vw;
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
      border-radius: 0.729vw;
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
      border-radius: clamp(0.729vw, 0.729vw, 14px);
      background: #f1f5fc;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(1.354vw, 1.354vw, 26px);
      font-style: normal;
      font-weight: 400;
      line-height: clamp(2.083vw, 2.083vw, 40px); /* 133.333% */
      letter-spacing: clamp(0.23vw, 0.23vw, 4.5px);
    }
  }

  .clear_vision {
    margin-top: 8px;
    display: flex;
    gap: 8px 6px;
  }
  .clear_vision_left {
    width: 10.675vw;
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 8px;
      height: 62px;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      height: 139px;
    }
    & > div:nth-child(4) {
      height: 67px;
    }
    & > div {
      background: #fff;
      width: 10.675vw;
      max-width: 10.675vw;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 140% */
      letter-spacing: 4px;

      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 140% */
      letter-spacing: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .clear_vision_right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 6px;
    width: 100%;
    justify-content: space-between;
    & > div:nth-child(1) {
      border-radius: 10px;
      background: #cca9dd;
      margin-bottom: 8px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 100% */
      letter-spacing: 4.5px;
    }
    & > div {
      border-radius: 14px;
      background: #fafcfc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
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
    font-size: 30px;
  }
  .smile_xtra {
    margin-top: 15px;
    display: flex;
    gap: 8px 6px;
    margin-bottom: 65px;
  }
  .smile_xtra_left {
    & > div:nth-child(1) {
      background: transparent;
      margin-bottom: 8px;
      height: 62px;
    }
    & > div:nth-child(2) {
      height: 67px;
    }

    & > div {
      background: #fff;
      width: 10.675vw;
      max-width: 10.675vw;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 140% */
      letter-spacing: 4px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 140% */
      letter-spacing: 5px;
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
    gap: 8px 6px;
    & > div {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 133.333% */
      letter-spacing: 4.5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:not(:nth-child(1)):nth-child(n) {
      border-radius: 7px;
      background: #f1f5fc;
    }
    & > div:not(:nth-child(1)):nth-child(2n) {
      border-radius: 7px;
      background: #fafcfc;
    }
    & > div:nth-child(1) {
      border-radius: 10px;
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
    background: url("https://static.cmereye.com/imgs/2024/08/0c425451fe0b646d.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 75px 0;
    margin-bottom: 95px;
  }
  .ellipse_explain {
    max-width: 1140px;
    margin: 0 auto;
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px; /* 150% */
      letter-spacing: 5px;
    }
  }
  .banner-img {
    background: url("https://statichk.cmermedical.com/smile/fee/122f3ee787e4.avif")
      no-repeat;
    background-size: contain;
    height: 480px;
    width: 100%;
    border-radius: 55px;
    padding-top: 23%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    margin-bottom: 64px;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
  .fee-table-container {
    margin-bottom: 80px;
    & > a {
      margin: 0 auto;
      margin-top: 55px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 7.5px;
      background: #4570b6;
      width: -moz-max-content;
      width: max-content;
      border-radius: 100px;
      display: block;
      padding: 12px 53px 14px 62px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .table_new_fee {
    max-width: 66.21875vw !important;
  }
  .new_title_style {
    max-width: 66.21875vw !important;
  }
  .fee-table-container {
    max-width: 66.21875vw !important;
  }
  .ellipse_explain {
    max-width: 66.21875vw !important;
  }
}

@media screen and (max-width: 767px) {
  .fee {
    :deep(h2) {
      margin-bottom: 15px;
    }
  }
  .table_new_fee {
    overflow: scroll;
    margin: 50px 12px 30px;
  }
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
  .table_new_fee::-webkit-scrollbar {
    width: 0; /* 对于垂直滚动条 */
    height: 5px; /* 对于水平滚动条 */
  }
  .table_new_fee::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
  .table_new_fee::-webkit-scrollbar-track {
    background-color: #4570b6;
  }

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
    background: url("https://static.cmereye.com/imgs/2024/08/523108db1c129793.png")
      no-repeat;
    background-size: 100% 100%;
    // padding: 75px 0;
    box-sizing: border-box;
    padding: 40px 35px;
    margin-bottom: 55px;
  }
  .ellipse_explain {
    max-width: 1270px;
    margin: 0 auto;
    box-sizing: border-box;
    p {
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
    background: url("https://statichk.cmermedical.com/smile/fee/08ef23b96b14.avif")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;
    padding-top: 70%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
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
    margin-bottom: 55px;
    & > a {
      display: block;
      width: max-content;
      margin: 0 auto;
      color: #fff;

      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
      letter-spacing: 1px;
      background: #4570b6;
      border-radius: 100px;
      padding: 5px 30px 6px 30px;
    }
  }
}
</style>