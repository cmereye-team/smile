<!--
 * @Date: 2025-06-19 09:34:21
 * @LastEditTime: 2026-08-31 17:53:58
 * @FilePath: /pages/new-page/new-feeV2.vue
 * @Description: 收费详情
-->
<template>
  <div class="fee">
    <div class="fee-wrap">
      <section class="fee-Banner overflow-hidden">
        <div class="fee-Banner-Box new-container">
          <div class="fee-Banner-Box-Title">
            <span>PRICE</span>
            <h1>收費詳情</h1>
            <p><a href="/">主頁 > </a><a href="/fee">收費詳情</a></p>
          </div>
        </div>
        <div class="fee-img">
          <div class="fee-img-Box new-container">
            <div class="fee-img-Box-image">
              <div class="fee-img-Box-image-tip">本診所絕無其他額外收費</div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-container px-3 min-[1344px]:px-0 mb-[52px] lg:mb-20">
        <div class="fee-main">
          <picture>
            <source
              srcset="
                https://statichk.cmermedical.com/smile/feeV2/fee-01-v1.webp
              "
              type="image/webp" />
            <img
              src="https://statichk.cmermedical.com/smile/feeV2/fee-01-v1.jpg"
              alt="希瑪矯視服務收費詳情"
          /></picture>
          <picture>
            <source
              srcset="
                https://statichk.cmermedical.com/smile/feeV2/fee-02-v1.webp
              "
              type="image/webp" />
            <img
              src="https://statichk.cmermedical.com/smile/feeV2/fee-02-v1.jpg"
              alt="希瑪老花矯視服務收費詳情"
          /></picture>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-14)%E5%B8%8C%E7%91%AA%E7%9F%AF%E8%A6%96"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-primary mx-auto flex justify-center items-center gap-2 w-[168px] h-12 lg:w-[300px] lg:h-[88px] rounded-full my-10 md:my-20 lg:mt-[156px] lg:mb-[136px]"
        >
          <span
            class="text-white text-xl lg:text-4xl font-bold leading-none tracking-wider"
            >立即預約</span
          >
          <!-- prettier-ignore -->
          <svg class="size-4 lg:size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 14.321 14.071 1.75" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M3.332 1.35H14.5v10.8" stroke="#fff" stroke-width="2.7" stroke-linecap="round"/></svg>
        </a>
        <div
          class="fee-text text-text text-sm lg:text-base leading-[2] lg:leading-normal tracking-[0.25em] space-y-5 lg:space-y-7"
        >
          <p>
            {{ $t("fee.textList.text4") }}
          </p>
          <p>
            {{ $t("fee.textList.text5") }}
          </p>
          <p>
            {{ $t("fee.textList.text6") }}
          </p>
        </div>
      </section>
      <ShareSection />
    </div>
  </div>
</template>
<script>
import ShareSection from "@/components/commom/share/ShareSection.vue";
export default {
  components: {
    ShareSection,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/fee",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/fee",
      browserTitle: "收費詳情 - 希瑪微笑矯視中心",
      browserTitleCn: "收费详情 - 希玛微笑矫视中心",
    };
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
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
html {
  scrollbar-width: none;
}
body {
  overflow-x: hidden;
  -ms-overflow-style: none;
}
.fee-text {
  position: relative;
  &::before {
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
}
@media screen and (max-width: 767px) {
  .fee {
    :deep(h2) {
      margin-bottom: 15px;
    }
  }
}
@media screen and (min-width: 768px) {
  .head-bg {
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
    z-index: 102;
  }
  :deep(.businessHours) {
    max-width: 100vw;
    margin: 0 auto;
  }
  .fee {
    max-width: 100vw;
    margin: 0 auto;
  }
  .fee-text {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    &::before {
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
  }
  :deep(.footer_new) {
    max-width: 100vw;
  }
}
@media screen and (max-width: 991px) {
  .d-none {
    display: none;
  }
  .fee-Banner {
    position: relative;
    height: 300px;
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
    &::before {
      content: "";
      position: absolute;
      left: -28px;
      top: 112px;
      width: 20.51vw;
      height: 28.21vw;
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA3OCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTUuODgyIDE3LjI1LjAwNi0uMDA1LS4wMzEtLjAzNCAzLjA2MS0yLjc0Ni40MzEuNDhjOS4yMTMtNC4zODUgMjMuMzY4LjMzOCAzMy43NTggMTEuOTIzczEzLjU1IDI2LjE3IDguMTkyIDM0Ljg1MmwuMzcuNDEzLTIuMjE4IDEuOTg5cS0uMzkyLjQxMi0uODIxLjc5NmMtOC43NTMgNy44NS0yNS40MiAzLjU0NC0zNy4yMjQtOS42MThDOS42MDEgNDIuMTM3IDcuMTI4IDI1LjEwMiAxNS44ODIgMTcuMjVaIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM0NTcwYjYiIHN0cm9rZS13aWR0aD0iLjczIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNNjEuOTgzIDYxLjg4MmM4Ljc1NC03Ljg1MSA2LjI4LTI0Ljg4Ni01LjUyNC0zOC4wNDlTMjcuOTg3IDYuMzY1IDE5LjIzMyAxNC4yMTZzLTYuMjggMjQuODg2IDUuNTI1IDM4LjA0OCAyOC40NzEgMTcuNDY5IDM3LjIyNSA5LjYxOFoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzQ1NzBiNiIgc3Ryb2tlLXdpZHRoPSIuNzMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik01OS4wNzQgNTguNjM3YzcuNTYyLTYuNzgyIDUuNDI1LTIxLjQ5Ny00Ljc3My0zMi44NjgtMTAuMTk4LTExLjM3LTI0LjU5NS0xNS4wOS0zMi4xNTYtOC4zMDgtNy41NjIgNi43ODEtNS40MjUgMjEuNDk3IDQuNzczIDMyLjg2N3MyNC41OTQgMTUuMDkgMzIuMTU2IDguMzA5WiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNDU3MGI2IiBzdHJva2Utd2lkdGg9Ii43MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTUwLjg4NyA0OC45MDFjLTIuMDkxIDEuNTktNC45MDMgMS43NjUtNy4wNSAxLjQ1OGwtLjIwNy0xLjNjMi4wOTQuMjk2IDQuODAzLjIxMyA2Ljc3Ny0xLjU1OCAyLjQ1Ni0yLjIwMyAyLjEyMi01LjIyMS0uMjY3LTcuODg1LTYuNTEyLTcuMjYxLTEyLjY3OCAyLjE2LTE5LjEwNS01LjAwNi0yLjYxNi0yLjkxNy0yLjg1MS02LjUzOS0uODUtOC43OTJsLTMuMS0zLjQ1Ni44Ni0uNzcyIDMuMDcxIDMuNDI1YzEuOTY1LTEuNDc2IDMuOTQxLTEuMzYgNS45ODgtLjk2M2wuMDcgMS4yNTFjLTIuMjMyLS40MDItMy43NzgtLjQ0NS01LjU3NSAxLjE2Ny0yIDEuNzk0LTEuNzE3IDQuODU3LjM4OCA3LjIwNCA1Ljc3MyA2LjQzNyAxMS44NTQtMy4wOCAxOS4xMzMgNS4wMzggMi45NTggMy4yOTcgMi45MzMgNy4wMzguNzI4IDkuNDE3bDMuMSAzLjQ1Ni0uODYuNzcxeiIgZmlsbD0iIzQ1NzBiNiIvPjwvc3ZnPg==")
        no-repeat;
    }
    .fee-Banner-Box {
      padding-top: 9.74vw;
      .fee-Banner-Box-Title {
        padding-left: 8.21vw;
        span {
          margin-bottom: 0;
          text-align: left;
          color: #4570b6;
          font-family: "Poppins", sans-serif;
          font-size: 11.66vw;
          font-style: normal;
          font-weight: 700;
          line-height: 109.4%;
        }
        h1 {
          color: #4570b6;
          font-family: "Noto Sans HK";
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
            font-family: "Noto Sans HK";
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
    background: url("https://statichk.cmermedical.com/smile/feeV2/fee-banner-m-v1.webp")
      no-repeat center / cover;
    width: 100%;
    height: 332px;
    position: absolute;
    top: 2px;
    z-index: -1;
    .fee-img-Box {
      .fee-img-Box-image {
        width: 100vw;
        margin: 0 auto;
        // position: relative;
        .fee-img-Box-image-name {
          position: absolute;
          bottom: 41.79vw;
          left: 34.36vw;
          h2,
          p {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 400;
            line-height: 152.349%;
            margin-bottom: 0;
          }
          p {
            span {
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              i {
                font-style: normal;
                font-family: "Noto Sans HK";
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
          bottom: 64px;
          // left: 8.72vw;
          // width: 35.9vw;
          right: 12px;
          width: fit-content;
          padding: 8px 12px;
          // height: 15.38vw;
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
          letter-spacing: 0.9vw;
          // &::after {
          //   position: absolute;
          //   content: "";
          //   bottom: -2.82vw;
          //   left: 50%;
          //   width: 0;
          //   height: 0;
          //   border-left: 3.85vw solid transparent;
          //   border-top: 3.33vw solid #4570b6;
          // }
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
    height: clamp(245px, 25.52vw, 490px);
    z-index: 3;
    height: clamp(300px, 30vw, 600px);
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
        span {
          margin-bottom: 0;
          text-align: left;
          color: #4570b6;
          font-family: "Poppins", sans-serif;
          font-size: clamp(68.5px, 7.14vw, 137px);
          font-style: normal;
          font-weight: 700;
          line-height: 109.4%;
        }
        h1 {
          color: #4570b6;
          font-family: "Noto Sans HK";
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
            font-family: "Noto Sans HK";
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
    background: url("https://statichk.cmermedical.com/smile/feeV2/fee-banner-pc-v1.webp")
      no-repeat 60% / contain;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    height: clamp(300px, 30vw, 600px);
    .fee-img-Box {
      .fee-img-Box-image {
        width: clamp(442px, 46.04vw, 884px);
        margin-left: auto;
        // position: relative;
        .fee-img-Box-image-name {
          position: absolute;
          // right: clamp(15px, 1.56vw, 30px);
          // bottom: clamp(108px,11.25vw,216px);
          bottom: clamp(11.5px, 1.2vw, 23px);
          left: clamp(54px, 5.63vw, 108px);
          h2,
          p {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: clamp(1px, 0.1vw, 2px);
            margin-bottom: 0;
          }
          p {
            font-weight: 900;
            span {
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              i {
                font-style: normal;
                font-family: "Noto Sans HK";
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
          width: fit-content;
          display: inline-block;
          // padding: clamp(3px, 0.31vw, 6px) clamp(9px, 0.94vw, 18px);
          padding: 6px 16px;
          // bottom: clamp(65px, 6.77vw, 130px);
          // left: clamp(67.5px, 7.03vw, 135px);
          right: clamp(72px, calc((100vw - 1320px) / 2 + 1vw), 700px);
          bottom: 40px;
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
          // &::after {
          //   position: absolute;
          //   content: "";
          //   bottom: clamp(-18px, -0.94vw, -9px);
          //   left: 70%;
          //   width: 0;
          //   height: 0;
          //   border-left: clamp(10px, 1.04vw, 20px) solid transparent;
          //   border-top: clamp(10px, 1.04vw, 20px) solid #4570b6;
          // }
        }
      }
    }
  }
}
@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
