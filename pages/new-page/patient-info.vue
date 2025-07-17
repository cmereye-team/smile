
<template>
  <div class="lasik">
    <HeadV2 />

    <div class="top-btnV2" @click="scrollToTopV2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <circle cx="18" cy="18" r="17.5" stroke="#4570B6" />
        <path d="M12.24 12.96H23.76" stroke="#4570B6" />
        <path
          d="M12.8159 24.7681L17.9999 16.9921L23.1839 24.7681"
          stroke="#4570B6"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- 轮播位置 -->
    <div class="new-container mx-auto smile-NewBanner position-relative">
      <img
        class=""
        decoding="async"
        src="https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerPc.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerMb.avif 400w,
          https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerMb.avif 640w,
          https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerPc.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="smile-NewBanner-Title">
        <span
          >Information<br />
          Notes</span
        >
        <h3>診症須知</h3>
      </div>
    </div>

    <!-- 面包屑 -->
    <div class="new-container mx-auto menu-breadcrumb">
      <a href="/">主頁 > </a><a href="/patient-info">診症須知</a>
    </div>

    <!-- 眼睛檢查及矯視前 -->
    <section class="check-eye">
      <div class="check-eye-title mx-auto">
        <h2>眼睛檢查及矯視前</h2>
        <p class="check-eye-title-subtitle">
          由於隱形眼鏡有機會把角膜擠壓，令量度出來的數據不準確，<br
            class="d-none d-lg-block"
          />故進行眼睛檢查及矯視前，請提前停止佩戴。
        </p>
        <p class="check-eye-title-date">以下為不同隱形眼鏡的停止佩戴日數：</p>
      </div>
      <ul class="check-eye-list d-flex flex-wrap">
        <li>
          <img
            src="https://statichk.cmermedical.com/smile/patient-info/check-eye-list1.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://statichk.cmermedical.com/smile/patient-info/check-eye-list2.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://statichk.cmermedical.com/smile/patient-info/check-eye-list3.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://statichk.cmermedical.com/smile/patient-info/check-eye-list4.png"
            alt=""
          />
        </li>
      </ul>
    </section>

    <!-- 矯視前停con知多啲 -->
    <section class="CorrectedVisionBefore new-container">
      <div class="CorrectedVisionBefore-iframe">
        <img
          src="https://statichk.cmermedical.com/smile/patient-info/LightBulb.svg"
          alt=""
        />

        <h2>矯視前停con知多啲</h2>
        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/chqX2VLCqio?si=EMeTCDqYcPEMdsrL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="CorrectedVisionBefore-Process">
        <div class="CorrectedVisionBefore-Process-item">
          <img
            src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img1.svg"
            alt=""
          />
          <p>前台登記及<br />初步眼睛檢查</p>
        </div>

        <div class="CorrectedVisionBefore-Process-item">
          <img
            src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img2.svg"
            alt=""
          />
          <p>詳細屈光檢查</p>
        </div>
        <div class="CorrectedVisionBefore-Process-item">
          <img
            src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img4.svg"
            alt=""
          />
          <p>全面眼底檢查</p>
        </div>
        <div class="CorrectedVisionBefore-Process-item">
          <img
            src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img3.svg"
            alt=""
          />
          <p>散曈</p>
        </div>
      </div>
    </section>

    <section class="CaseSharingV2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M1 0.77832L19.4751 17.9337"
            stroke="#4570B6"
            stroke-width="1.97947"
          />
        </svg>
        <span> 同朋友分享一下啦！ </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M20 0.77832L1.52493 17.9337"
            stroke="#4570B6"
            stroke-width="1.97947"
          />
        </svg>
      </div>
      <div>
        <a id="shareCurrentPageIcl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
          >
            <path
              d="M0.28309 11.3923C0.282266 9.41405 1.74115 7.78777 3.63606 7.6221C4.78751 7.52154 5.78565 7.88504 6.60988 8.69859C6.74258 8.82964 6.83243 8.84118 6.99233 8.74475C8.88558 7.59654 10.7838 6.45411 12.6836 5.31745C12.832 5.22843 12.8518 5.15177 12.799 4.99022C12.0968 2.83806 13.5441 0.523527 15.7852 0.202064C17.9084 -0.10209 19.8083 1.36263 20.0539 3.49335C20.2781 5.44027 18.853 7.28415 16.9053 7.55945C15.6327 7.73914 14.553 7.34679 13.6604 6.43186C13.5647 6.33377 13.4996 6.32058 13.3826 6.39147C11.463 7.55039 9.54167 8.70601 7.61957 9.85915C7.50665 9.92674 7.47203 9.99351 7.51819 10.1237C7.75227 10.7864 7.79595 11.4632 7.61627 12.1457C7.57423 12.3064 7.63028 12.3814 7.7671 12.4515C9.44029 13.3046 11.1118 14.1618 12.7842 15.019C12.9185 15.0875 13.0554 15.1534 13.1831 15.2317C13.3101 15.3092 13.3966 15.2977 13.4963 15.1765C14.0972 14.4487 14.8662 14.0134 15.7992 13.8626C17.2161 13.6335 18.7129 14.311 19.4811 15.5359C20.888 17.7779 19.6467 20.6776 17.0545 21.2035C15.0006 21.6206 12.9688 20.1831 12.6663 18.1018C12.5996 17.6419 12.5971 17.1844 12.7347 16.7376C12.7982 16.5324 12.7413 16.4401 12.5518 16.3436C10.7607 15.4345 8.9746 14.5154 7.18932 13.5939C7.05991 13.5271 6.98491 13.5436 6.89424 13.6541C6.06342 14.663 4.98945 15.1147 3.68799 15.0454C2.07332 14.9589 0.560032 13.565 0.328423 11.9495C0.298751 11.7451 0.275672 11.5415 0.283915 11.3915L0.28309 11.3923Z"
              fill="#4570B6"
            />
          </svg>
        </a>
        <a @click="copyCurrentUrl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_10302_1589)">
              <path
                d="M9.10331 5.96582C10.8881 5.96788 12.1819 6.48567 13.3123 7.46166C13.4906 7.61577 13.6719 7.76576 13.8462 7.92295C14.1998 8.2404 14.2685 8.71402 13.9826 9.09722C13.644 9.55132 13.2864 9.99206 12.9169 10.4205C12.6102 10.7759 12.1381 10.7985 11.7725 10.5016C11.5445 10.3167 11.3283 10.1153 11.1003 9.92939C10.0614 9.08489 8.5107 9.12599 7.55356 10.0701C6.53466 11.0759 5.5337 12.1043 4.56062 13.1574C3.81463 13.9649 3.6493 14.9511 3.98793 15.998C4.32657 17.0449 5.06658 17.6788 6.11037 17.8699C6.97788 18.0281 7.77666 17.8031 8.43998 17.1744C8.65412 16.972 8.85232 16.7521 9.06148 16.5446C9.44493 16.1655 9.89611 16.1501 10.2826 16.5251C10.663 16.8949 11.0325 17.2771 11.3921 17.6685C11.7078 18.0127 11.7218 18.4883 11.423 18.8356C10.3951 20.0335 9.17403 20.8883 7.61033 21.1821C4.42019 21.781 1.21312 19.4828 0.680264 16.184C0.335653 14.0481 0.911332 12.204 2.37244 10.6598C3.2997 9.67974 4.24091 8.71299 5.19008 7.75549C6.35838 6.57607 7.76769 5.98123 9.10231 5.96685L9.10331 5.96582Z"
                fill="#4570B6"
              />
              <path
                d="M12.3093 15.4664C10.7307 15.4592 9.43492 14.9445 8.30647 13.9664C8.13516 13.8175 7.96186 13.6716 7.79055 13.5216C7.42104 13.1969 7.34734 12.7213 7.63916 12.3309C7.97879 11.8768 8.33635 11.4371 8.70487 11.0087C9.00964 10.6542 9.48373 10.6337 9.84925 10.9306C10.0644 11.1052 10.2666 11.2963 10.4837 11.4679C11.651 12.3915 13.1539 12.3021 14.1977 11.2388C15.131 10.2885 16.0602 9.33406 16.9785 8.36834C17.7345 7.57316 17.9635 6.61155 17.6667 5.55131C17.364 4.47258 16.6429 3.79863 15.5782 3.57672C14.6818 3.38974 13.8641 3.61165 13.1768 4.25889C12.9627 4.46025 12.7655 4.68216 12.5553 4.88866C12.1729 5.26467 11.7177 5.27906 11.3333 4.9051C10.9528 4.53525 10.5833 4.15307 10.2247 3.76061C9.91698 3.42467 9.89407 2.95105 10.1819 2.61408C11.147 1.48398 12.2824 0.636403 13.7426 0.306619C17.2036 -0.474177 20.5641 1.973 20.9874 5.60473C21.2095 7.51152 20.6826 9.19331 19.4117 10.5844C18.348 11.7484 17.2644 12.898 16.109 13.9664C15.0085 14.9846 13.6858 15.451 12.3083 15.4654L12.3093 15.4664Z"
                fill="#4570B6"
              />
            </g>
            <defs>
              <clipPath id="clip0_10302_1589">
                <rect
                  width="20.4545"
                  height="21.1144"
                  fill="white"
                  transform="translate(0.583496 0.162109)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>

    <FooterV2 />
    <FooterMobile />
  </div>
</template>
<script>
import HeadV2 from "@/components/Publice/HeadeV2.vue";

import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";

import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";

import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";

import drow from "@/components/content/service/SmileProV2/drow.vue";
import UserShare from "@/components/commom/UserShare/UserShare.vue";
export default {
  components: {
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    process,
    xtar,
    film,
    suitable,
    share,
    FooterV2,
    HeadV2,
    drow,
    UserShare,
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
          content: "診症須知 -希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "診症須知 - 希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/eye-examination/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/eye-examination/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/eye-examination/",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      canonicalHref: "https://smile.hkcmereye.com/eye-examination/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/eye-examination/",
      browserTitle: "診症須知 - 希瑪微笑矯視中心",
      browserTitleCn: "诊症须知 - 希玛微笑矫视中心",
    };
  },

  methods: {
    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    async copyCurrentUrl() {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        this.$message({
          showClose: true,
          message: "複製成功",
          type: "success",
        });
      } catch (error) {
        console.error("复制失败:", error);
      }
    },

    scrollToTopV2() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    this.windowWidth = window.innerWidth;

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  },
};
</script>



<style >
body {
  overflow-x: hidden;
  background: white;
}
</style>
<style lang="scss" scoped>
:deep(.mt-20) {
  margin-top: 0;
}
:deep(.share-img) {
  margin-top: 0;
}

.d-none {
  display: none;
}
i {
  font-style: normal;
}
.changehang {
  display: none;
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

@media screen and (max-width: 1140px) {
  .icl-btn {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 6px 32px;
    border-radius: 100px;
    border: 2px solid #4570b6;
    background: #4570b6;
    color: #fff;
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 175% */
    letter-spacing: 1px;
    svg {
      width: 17px;
      height: 17px;
      margin-left: 9px;
    }
  }

  .new-pubile-title {
    span {
      font-family: "Poppins";
    }
    color: #4570b6;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 26px;
    text-align: center;
    margin: 0px auto 30px;
  }
}

// 移动端
@media screen and (max-width: 992px) {
  .smile-NewBanner {
    padding: 0 3.85vw;
    margin-top: 80px;
    height: 62.56vw;
    position: relative;
    img {
      width: 46.92vw;
      position: absolute;
      top: 25.64vw;
      right: 3.08vw;
    }

    .smile-NewBanner-Title {
      position: absolute;
      top: 13.59vw;
      left: 28px;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 11.67vw;
        font-style: normal;
        font-weight: 700;
        line-height: 12.74vw;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 6.28vw;
        font-style: normal;
        font-weight: 400;
        line-height: 109.4%;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 2.51vw;
        font-style: normal;
        font-weight: 400;
        line-height: 217.5%;
        letter-spacing: 0.08vw;
      }
    }
  }

  // 面包屑
  .menu-breadcrumb {
    padding-left: 28px;
    a {
      color: #6d6e71;
      font-family: "Noto Sans TC";
      font-size: 3.08vw;
      font-style: normal;
      font-weight: 300;
      line-height: 362.5%;
      letter-spacing: 0.09vw;
    }
    & > a:last-child {
      color: #4570b6;
      font-weight: 500;
    }
  }

  // 眼睛检查及矫视前
  .check-eye {
    background: #f4fafc;
    padding-top: 7.69vw;
    padding-bottom: 17.18vw;
    .check-eye-title {
      max-width: 84.62vw;
      text-align: center;

      h2 {
        margin-bottom: 0;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 195%;
      }

      .check-eye-title-subtitle {
        margin-top: 2.82vw;
        margin-bottom: 7.69vw;
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 300;
        line-height: 250%;
        letter-spacing: 1.08vw;
      }
      .check-eye-title-date {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 700;
        line-height: 2.5;
        letter-spacing: 1.08vw;
      }
    }

    .check-eye-list {
      display: flex;
      justify-content: center;
      margin-top: 5.64vw;
      gap: 6.15vw 5.64vw;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        width: 39.49vw;
        height: 39.49vw;
        flex-shrink: 0;
        border-radius: 50%;
        border: 0.5px solid #4570b6;
        img {
          width: 35.64vw;
          height: auto;
        }
      }
      li:nth-child(even) {
        transform: translateY(7.69vw);
      }
    }
  }

  //矯視前停 con 知多啲
  .CorrectedVisionBefore {
    padding-top: 23px;
    .CorrectedVisionBefore-iframe {
      img {
        width: 46px;
        height: 48px;
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 8px auto 17px;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 103.173%;
        letter-spacing: 2px;
        position: relative;

        &::before {
          content: "";
          width: 34px;
          height: 24px;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: -36px;
          bottom: -4px;
        }

        &::after {
          content: "";
          width: 34px;
          height: 24px;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: -36px;
          bottom: -4px !important;
        }
      }
      .iframe-container {
        width: 100%;
        aspect-ratio: 560/315;
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      }
    }

    .CorrectedVisionBefore-Process {
      margin-top: 35px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px 16px;
      .CorrectedVisionBefore-Process-item {
        width: 161px;
        height: 128px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        p {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 121.429%;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(1) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg1.avif");
        background-size: 100% auto;
        img {
          width: 51px;
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(2) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg2.avif");
        background-size: 100% auto;
        img {
          width: 48px;
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(3) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg3.avif");
        background-size: 100% auto;
        img {
          width: 68px;
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(4) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg4.avif");
        background-size: 100% auto;
        img {
          width: 29px;
          height: auto;
        }
      }
    }
  }

  .CaseSharingV2 {
    width: fit-content;
    margin: 0 auto;
    margin-top: 50px;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7.58px;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 0.82px; /* 82.478% */
      }
    }
    & > div:nth-child(2) {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid #4570b6;
      }
    }
  }
}

// pc端
@media screen and (min-width: 992px) {
  .changehon {
    display: block;
  }
  .d-lg-none {
    display: none;
  }
  .d-lg-none-imp {
    display: none !important;
  }
  .d-lg-block {
    display: block;
  }
  .smile-NewBanner {
    padding: 0px;
    margin-top: 159px;
    height: clamp(258px, 26.88vw, 516px);
    position: relative;
    img {
      width: clamp(194px, 20.21vw, 388px);
      position: absolute;
      top: clamp(25.5px, 2.66vw, 51px);
      left: inherit;
      right: clamp(18px, 1.88vw, 36px);
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: clamp(45px, 4.69vw, 90px);
      left: clamp(38.5px, 4.01vw, 77px);
      span {
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: clamp(68.75px, 7.16vw, 137.5px);
        font-style: normal;
        font-weight: 700;
        line-height: 109.4%;
        letter-spacing: 0;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(37px, 3.85vw, 74px);
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(14.75px, 1.54vw, 29.5px);
        font-style: normal;
        font-weight: 400;
        line-height: 217.5%;
        letter-spacing: clamp(0.45px, 0.05vw, 0.9px);
      }
    }
  }

  // 面包屑
  .menu-breadcrumb {
    padding-left: clamp(38.5px, 4.01vw, 77px);
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
      font-weight: 500;
    }
  }

  // 眼睛检查及矫视前
  .check-eye {
    margin-top: clamp(6px, 0.63vw, 12px);
    background: #f4fafc;
    padding-top: clamp(43px, 4.48vw, 86px);
    padding-bottom: clamp(77px, 8.02vw, 154px);
    .check-eye-title {
      text-align: center;

      h2 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
      }

      .check-eye-title-subtitle {
        margin-top: clamp(18px, 1.88vw, 36px);
        margin-bottom: clamp(22px, 2.29vw, 44px);
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 175%;
        letter-spacing: clamp(3px, 0.31vw, 6px);
      }
      .check-eye-title-date {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: 1.45;
        letter-spacing: clamp(3px, 0.31vw, 6px);
      }
    }

    .check-eye-list {
      display: flex;
      justify-content: center;
      margin-top: clamp(10px, 1.04vw, 20px);
      gap: clamp(25px, 2.6vw, 50px);
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        width: clamp(168.5px, 17.55vw, 337px);
        height: clamp(168.5px, 17.55vw, 337px);
        flex-shrink: 0;
        border-radius: 50%;
        border: clamp(0.5px, 0.05vw, 1px) solid #4570b6;
        img {
          width: clamp(151.5px, 15.78vw, 303px);
          height: auto;
        }
      }
      li:nth-child(even) {
        transform: translateY(clamp(33.5px, 3.49vw, 67px));
      }
    }
  }

  //矯視前停 con 知多啲
  .CorrectedVisionBefore {
    padding-top: 83px;
    .CorrectedVisionBefore-iframe {
      img {
        width: 116px;
        height: 121px;
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 14px auto 68px;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: 3px;
        position: relative;

        &::before {
          content: "";
          width: 50px;
          height: 30px;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: -50px;
          bottom: -4px;
        }

        &::after {
          content: "";
          width: 50px;
          height: 30px;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: -50px;
          bottom: -4px !important;
        }
      }
      .iframe-container {
        width: 605px;
        margin: 0 auto;
        aspect-ratio: 560/315;
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      }
    }
  }

  // 分享给朋友
  .CaseSharingV2 {
    display: none;
  }
}

@media screen and (min-width: 1140px) {
  .head-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .d-xl-none {
    display: none;
  }
  .d-xl-block {
    display: block;
  }

  .icl-btn {
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px 57px;
    border-radius: 100px;
    border: 2px solid #4570b6;

    background: #4570b6;
    color: #fff;
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: 1.8px;
    svg {
      width: 29px;
      height: 29px;
      margin-left: 15px;
    }
  }

  .new-pubile-title {
    color: #4570b6;
    font-family: "Noto Sans TC";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 39px;
    text-align: center;
    margin: 0px auto 0px;
  }
  // 向上
  .top-btnV2 {
    position: fixed;
    right: 165px;
    bottom: 140px;
    z-index: 999;
    cursor: pointer;
  }
}
</style>

 