<script>
import ShareSection from "@/components/commom/share/ShareSection.vue";
export default {
  components: {
    ShareSection,
  },
  data() {
    return {
      browserTitle: "SMILE Pro Care 1.0/2.0 - 希瑪微笑矯視中心",
      browserTitleCn: "SMILE Pro Care 1.0/2.0 - 希玛微笑矫视中心",
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
          content: "SMILE PRO 2.0 Care 微笑矯視 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "SMILE PRO 2.0 Care 微笑矯視 - 希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/smilePro",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/smilePro",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/smilePro",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <section class="banner relative">
      <div class="text-care pt-20 md:pt-33 pl-5 xl:pl-0 max-w-[1320px] mx-auto">
        <div class="md:w-fit">
          <h1
            class="text-3xl md:text-5xl xl:text-6xl font-bold font-en md:mb-2"
          >
            SMILE Pro Care 1.0/2.0
          </h1>
          <p class="text-sm md:text-lg xl:text-xl md:text-center">
            希瑪專屬全方位矯視保障，為您<br
              class="block md:hidden"
            />帶來更極致、安心的體驗。
          </p>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(WSPC-2025)%20%E5%B8%8C%E7%91%AASMILE%20Pro%20Care%E7%9F%AF%E8%A6%96%E7%A6%AE%E5%93%81%E8%A8%88%E5%8A%83"
        target="_blank"
        rel="noopener noreferrer"
        class="button-round center absolute left-5 -bottom-20"
      >
        <span>立即了解</span>
        <span>SMILE Pro 2.0 Care</span>
      </a>
      <div
        class="center flex-col gap-4 md:gap-6 text-care absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10"
      >
        <span class="text-xs md:text-base font-medium">了解計劃詳情</span>
        <!-- prettier-ignore -->
        <svg class="w-4 md:w-10 h-auto animate-bounce" xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none"><path d="m1.5 1.5 21 17.898L43.5 1.5m-42 18 21 17.898 21-17.898" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>
      </div>
    </section>
    <section class="intro px-8 bg-white">
      <h2
        class="care-title flex flex-col lg:flex-row gap-1 mb-6 lg:mb-8 text-right lg:text-center pt-2 lg:pt-0"
      >
        <span>SMILE Pro Care</span>
        <span>1.0 / 2.0</span>
        <span>微笑激光矯視</span>
      </h2>
      <div class="lg:text-center text-[#6D6E71] text-sm lg:text-lg">
        <p>
          升級 SMILE® Pro Care 1.0 / 2.0，<br
            class="block lg:hidden"
          />享受更完善的全面照護！
        </p>
        <p>
          為您提供<strong class="text-care lg:text-xl font-bold"
            >1 次術後眼部彩光護理</strong
          >，<br class="block lg:hidden" />及<strong
            class="text-care lg:text-xl font-bold"
            >5次的術後覆診</strong
          >。
        </p>
        <p>
          讓每一個細節都被照顧，<br
            class="block lg:hidden"
          />矯視體驗自然更安心！
        </p>
      </div>
    </section>
    <section class="comparison">
      <div class="max-w-6xl mx-auto">
        <h2
          class="care-title center flex-col lg:flex-row gap-1 whitespace-nowrap"
        >
          <span>SMILE Pro Care 1.0/2.0與</span>
          <span>SMILE Pro 1.0/2.0有什麼分別？</span>
        </h2>
        <div class="care-table text-center overflow-x-auto">
          <table class="mx-auto">
            <thead>
              <tr>
                <th>服務項目</th>
                <th>SMILE Pro 1.0/2.0<br />微笑激光矯視</th>
                <th>
                  <div class="care-table-crown">
                    <!-- prettier-ignore -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M12.925 4.342s1.313.203 1.313 1.211v1.313h1.01s.605.06.605.909c0 .848-.505 1.394-.505 2.524s.996 2.114 2.114 2.114 1.971-1.176 1.971-1.972-.349-2.35-.349-2.868.364-.693.693-.693h.923s-.011-2.029 2.144-2.384a.505.505 0 0 1 .585.574l-2.224 14.317H4.645L2.42 5.07a.505.505 0 0 1 .586-.575C5.16 4.851 5.15 6.88 5.15 6.88h.922c.33 0 .693.175.693.693s-.349 2.072-.349 2.868.854 1.972 1.972 1.972 2.114-.984 2.114-2.114-.505-1.676-.505-2.524.605-.909.605-.909h1.01V5.553c0-1.008 1.313-1.211 1.313-1.211" fill="#ffb41f"/><path d="M4.41 17.872 2.42 5.07a.505.505 0 0 1 .586-.575C5.16 4.851 5.15 6.88 5.15 6.88h.922c.33 0 .693.175.693.693s-.349 2.072-.349 2.868.854 1.972 1.972 1.972 2.114-.984 2.114-2.114-.505-1.676-.505-2.524.605-.909.605-.909h1.01V5.553c0-1.008 1.313-1.211 1.313-1.211s1.313.203 1.313 1.211v1.313h1.01s.605.06.605.909c0 .848-.505 1.394-.505 2.524s.996 2.114 2.114 2.114q.17-.001.331-.035l-.2 4.249c0 .687-.542 1.245-1.209 1.245z" fill="#ffc556"/><path d="M12.444 11.122a.578.578 0 0 1 .962 0l1.324 1.987a.58.58 0 0 1 0 .642l-1.324 1.987a.578.578 0 0 1-.962 0l-1.325-1.987a.58.58 0 0 1 0-.642z" fill="#ff2a5c"/><path d="M11.673 13.33a.18.18 0 0 1-.143-.29l1.072-1.406a.18.18 0 0 1 .323.109v1.406a.18.18 0 0 1-.053.128.18.18 0 0 1-.127.052z" fill="#fff" fill-opacity=".3"/><path d="M21.76 19.614a.63.63 0 0 0-.63-.632H4.72a.63.63 0 0 0-.63.631v1.263a.63.63 0 0 0 .63.63h16.41a.63.63 0 0 0 .63-.63z" fill="#ffa652"/><path d="M16.106 19.614a.63.63 0 0 0-.631-.632H4.72a.63.63 0 0 0-.631.631v1.263a.63.63 0 0 0 .63.63h10.755a.63.63 0 0 0 .63-.63z" fill="#ffb443"/><path d="M9.946 19.614a.63.63 0 0 0-.63-.632H4.72a.63.63 0 0 0-.631.631v1.263a.63.63 0 0 0 .63.63h4.595a.63.63 0 0 0 .631-.63z" fill="#ffcd61"/></svg>
                    熱門首選
                  </div>
                  SMILE Pro Care 1.0/2.0<br />微笑激光矯視
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>術後覆診<br class="block lg:hidden" />（一年內）</td>
                <td>3 次</td>
                <td>5 次</td>
              </tr>
              <tr>
                <td>眼睛<br class="block lg:hidden" />水潤護理</td>
                <td>1 次</td>
                <td>1 次</td>
              </tr>
              <tr>
                <td>術後眼部<br />彩光護理</td>
                <td>/</td>
                <td>1 次 (價值HK$4000✨)</td>
              </tr>
              <tr>
                <td>眼科專科<br />醫生檢查</td>
                <td>包含</td>
                <td>包含</td>
              </tr>
              <tr>
                <td>增進手術</td>
                <td>包含</td>
                <td>包含</td>
              </tr>
              <tr>
                <td>無限<br class="block lg:hidden" />視光檢查</td>
                <td>包含</td>
                <td>包含</td>
              </tr>
              <tr>
                <td>價錢</td>
                <td><small class="text-[11px]">$</small>24,600</td>
                <td><small class="text-[11px]">$</small>26,350</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          class="text-[#F89B03] text-center text-[11px] lg:text-xl font-bold tracking-widest py-4 lg:py-10 border-b border-[#D0D0D0]"
        >
          現時只需加
          <strong class="font-black text-[13px] lg:text-2xl">HK$1,750</strong>
          ，<br class="block lg:hidden" />即可由
          <strong class="text-sm lg:text-[26px]"
            >SMILE® Pro 升級至 SMILE® Pro Care！</strong
          >
        </p>
      </div>
    </section>
    <section class="benefits pt-8 pb-10 lg:pt-15 lg:pb-12 px-3 mb-8">
      <h2 class="care-title text-center mb-1">
        SMILE Pro Care 1.0/2.0 專享福利
      </h2>
      <p class="mb-10 lg:mb-12 text-xs lg:text-base text-[#4B5563] text-center">
        選擇升級護理服務，即享兩重額外福利，為您的矯視體驗加分！
      </p>
      <div class="center gap-4 lg:gap-[100px]">
        <div class="benefits-item">
          <span class="benefits-name">術後眼部<br />彩光護理</span>
          <div class="benefits-time">
            <div class="flex items-end">
              <span>×</span><span>1</span><span>次</span>
            </div>
          </div>
        </div>
        <div class="benefits-item">
          <span class="benefits-name">術後覆診</span>
          <div class="benefits-time">
            <div class="flex items-end">
              <span>×</span><span>5</span><span>次</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="choose bg-white px-6 lg:px-0 mb-10">
      <h2 class="care-title text-center mb-2 lg:mb-6">如何選擇？</h2>
      <p
        class="mb-4 lg:mb-8 text-justify lg:text-center text-sm lg:text-base leading-6 text-[#4B5563]"
      >
        SMILE Pro Care微笑激光矯視最適合<strong class="font-bold"
          >重視矯視體驗</strong
        >，又希望一個價錢有更長遠的保障，讓眼睛享受更多的你。
      </p>
      <a
        href="https://api.whatsapp.com/send/?phone=85297962992&text=我想預約(WSPC-01) 希瑪SMILE Pro Care矯視"
        target="_blank"
        rel="noopener noreferrer"
        class="center bg-care py-3 px-6 lg:px-5 rounded-lg py-3 px-6 w-fit mx-auto"
      >
        <span class="text-sm lg:text-base text-white font-medium"
          >立即預約SMILE Pro Care</span
        >
      </a>
    </section>
    <ShareSection />
  </div>
</template>
<style lang="scss" scoped>
$care: #0a2342;
$scrollbar-width: 8px;
$scrollbar-track-bg: transparent; // 轨道透明，更贴合整体背景
$scrollbar-thumb-bg: rgba(0, 0, 0, 0.15); // 默认浅灰色
$scrollbar-thumb-hover: rgba(0, 0, 0, 0.35); // 悬停加深
::-webkit-scrollbar {
  width: $scrollbar-width;
  height: $scrollbar-width;
  &-track {
    background: $scrollbar-track-bg;
    border-radius: 4px;
  }
  &-thumb {
    background-color: $scrollbar-thumb-bg;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: $scrollbar-thumb-hover;
    }
  }
}
// Firefox 兼容配置
* {
  scrollbar-width: thin;
  scrollbar-color: $scrollbar-thumb-bg $scrollbar-track-bg;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-care {
  color: $care;
}
.care-title {
  color: $care;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.025em;
  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
  }
}
.bg-care {
  background-color: $care;
}
.banner {
  background: url("https://statichk.cmermedical.com/smile/smileProCare/banner-smileprocare-mb-v1.webp")
    no-repeat center / cover;
  height: 336px;
}
.banner .button-round {
  width: 36.92vw;
  height: 36.92vw;
  flex-direction: column;
  border-radius: 50%;
  position: relative;
  box-shadow: 4.244px 4.244px 0 rgba(99, 107, 122, 0.75);
  background-color: $care;
  color: #fff;
  white-space: nowrap;
  letter-spacing: 0.025em;
  span {
    &:first-child {
      font-size: 4.61vw;
      font-weight: 900;
    }
    &:last-child {
      font-size: 3.58vw;
      font-weight: 700;
    }
  }
}
.intro {
  background: url("https://statichk.cmermedical.com/smile/smileProCare/smileprocare-device-v1.webp")
    no-repeat;
  background-position: 60% 300%;
  background-size: 328px;
  height: 380px;
}
.comparison {
  background-color: #fbfbfb;
  padding-top: 24px;
  padding-bottom: 24px;
  .care-table {
    font-size: clamp(12px, 3.58vw, 20px);
    table {
      min-width: 436px;
      white-space: nowrap;
    }
    thead th,
    tbody td {
      border-bottom: 1px solid #d0d0d0;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    thead th {
      height: 100px;
    }
    tbody td {
      height: 64px;
    }
    thead th:nth-child(1),
    tbody td:nth-child(1) {
      color: $care;
      font-weight: 700;
    }
    thead th:nth-child(1) {
      font-weight: 800;
    }
    thead th:nth-child(2),
    tbody td:nth-child(2) {
      background-color: #eaf2ff;
    }
    thead th:nth-child(2),
    tbody tr:last-child td:nth-child(2) {
      color: #4570b6;
    }
    tbody td:nth-child(2) {
      color: #60605f;
    }
    thead th:nth-child(3),
    tbody td:nth-child(3) {
      background-color: $care;
      color: #fff;
      border-color: #fff;
    }
    tbody tr:last-child td:nth-child(3) {
      color: #ffb41f;
    }
  }
  .care-table-crown {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjIiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAyMjIgMzEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xODAuNzg5IDBINDAuNTM5TDI5LjYwMSAxNi4yOTNsMTAuOTM4IDE0LjY1M2gxNDAuMjVsMTAuOTM5LTE0LjQ5OHoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBzdHJva2U9IiMwMmUyZmQiIHN0cm9rZS1vcGFjaXR5PSIuNiIgc3Ryb2tlLXdpZHRoPSIuNjczIiBkPSJNMzAuMjczIDE2LjQ4M0gwIi8+PHBhdGggc3Ryb2tlPSIjNjdhYWZmIiBzdHJva2Utd2lkdGg9Ii42NzMiIGQ9Ik0yMjIgMTYuNDgzaC0zMC4yNzIiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIyOS42MDEiIHkxPSIxNS40NzMiIHgyPSIxOTEuNzI4IiB5Mj0iMTUuNDczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAyZTJmZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAyNWFjOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==")
      no-repeat center / contain;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
}
.benefits {
  background: linear-gradient(
    81deg,
    #dedbde 3.15%,
    rgba(216, 221, 230, 0.5) 93.3%
  );
  .benefits-item {
    background-color: #fff;
    position: relative;
    width: clamp(120px, 40vw, 200px);
    height: clamp(120px, 40vw, 200px);
    font-size: clamp(16px, 5.12vw, 28px);
    font-weight: 700;
    line-height: 1.2;
    color: $care;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .benefits-time {
    width: clamp(32px, 10.25vw, 60px);
    height: clamp(32px, 10.25vw, 60px);
    top: 1%;
    right: 0.5%;
    background-color: $care;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(10px, 3.2vw, 16px);
    line-height: 1;
    letter-spacing: 0em;
    span {
      &:nth-child(2) {
        font-size: clamp(12px, 4.5vw, 20px);
      }
      &:nth-child(3) {
        font-weight: 400;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://statichk.cmermedical.com/smile/smileProCare/banner-smileprocare-pc-v1.webp");
    height: 600px;
    overflow: hidden;
    .button-round {
      box-shadow: 10px 10px 0 0 rgba(99, 107, 122, 0.75);
      left: #{"max((100vw - 1320px) / 2, 20px)"};
      bottom: -140px;
      span {
        &:first-child {
          font-size: 44px;
        }
        &:last-child {
          font-size: 30px;
        }
      }
    }
  }
  .comparison {
    .care-table {
      thead th {
        height: 152px;
      }
      tbody td {
        height: 80px;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .banner {
    .button-round {
      width: 336px;
      height: 336px;
    }
  }
  .intro {
    height: 344px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: 444px;
    background-position: 90% 0;
  }
  .comparison {
    padding-top: 92px;
    padding-bottom: 60px;
    .care-table {
      font-size: 20px;
      thead th {
        font-size: 20px;
        height: 184px;
        // width: 432px;
      }
      thead th:nth-child(1) {
        font-size: 26px;
        width: 232px;
      }
      tbody td {
        height: 116px;
      }
    }
    .care-table-crown {
      font-size: 16px;
    }
  }
  .benefits {
    background: url("https://statichk.cmermedical.com/smile/smileProCare/smileprocare-benefits-bg.webp")
      no-repeat center / cover;
    .benefits-item {
      font-size: 36px;
      width: 300px;
      height: 300px;
    }
    .benefits-time {
      width: 76px;
      height: 76px;
      font-size: 24px;
      span {
        &:nth-child(2) {
          font-size: 32px;
        }
      }
    }
  }
}
</style>
