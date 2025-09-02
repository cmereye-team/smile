<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-01 10:37:18
 * @LastEditTime: 2025-09-02 10:37:52
 * @FilePath: /pages/new-page/icl2509.vue
 * @Description: 9月广告专用讲座专题
-->
<template>
  <div class="page bg-[#050D1A]">
    <HeadV3 />
    <div class="page-bg w-screen flex flex-col md:flex-row md:justify-center">
      <main
        class="page-main w-full md:max-w-3xl pt-[87px] md:pt-[180px] order-1 md:order-2"
      >
        <section class="banner">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-m.webp
              "
            />
            <source
              media="(min-width: 769px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc.webp
              "
            />
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc.webp"
              alt="ICL九月講座"
            />
          </picture>
        </section>
        <section class="detail bg-[#01ABCC] rounded-[10.1px] md:rounded-[20px]">
          <div>
            <h3>ICL植入式隱形眼鏡</h3>
            <p>會為你的生活體驗帶來嶄新選擇!</p>
            <p>
              作為首間官方認證EVO
              ICL國際培訓中心，希瑪微笑矯視中心今次為ICL矯視服務開辦講座專場，將深入講解ICL技術原理，並即場解答你最關心的問題。
            </p>
            <p>
              無論你是初次接觸ICL植入式隱形眼鏡，或已在考慮進行矯視，這場講座活動都能為你提供最全面的講解。
            </p>
          </div>
          <div>
            <p>
              <span>講座將由希瑪醫療團隊主講，</span>
              <span>深入剖析ICL技術、安全性及術後效果。</span>
            </p>
            <p>
              <span>現場更設有互動環節，</span>
              <span>解答你對ICL矯視服務的所有疑問。</span>
            </p>
          </div>
        </section>
        <section class="gift bg-[#000034] relative z-1">
          <p>參加者即場預約ICL矯視前檢查<br />可獲專場專享禮品</p>
          <p>術前檢查費用(價值:$500)可於手術費用中扣除</p>
        </section>
        <section
          class="book text-center font-black pt-11 md:pt-21 pb-[50.65px] md:pb-[110px] -my-5"
        >
          <div
            class="tracking-[1px] md:tracking-[1.5px] text-xl md:text-3xl leading-[23.845px] md:leading-[47px] mb-5"
          >
            <p class="text-[#ff7300]">名額有限</p>
            <p class="text-[#000]">活動只招待已預約人士</p>
            <p class="text-[#81accd]">請即登記預約!</p>
          </div>
          <button
            class="book-button text-xl md:text-4xl leading-[31.962px] md:leading-[63px] tracking-[1px] md:tracking-[1.8px]"
          >
            立即預約
          </button>
        </section>
        <section class="what">
          <div class="rounded-t-[10.1px] md:rounded-t-[20px] relative z-1">
            <picture>
            <source
              media="(max-width: 768px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-lens-m.webp
              "
            />
            <source
              media="(min-width: 769px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-lens-pc.webp
              "
            />
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-lens-pc.webp"
              alt="ICL九月講座"
            />
          </picture>
          </div>
          <div class="what-desc -mt-5 bg-[#000034] text-center rounded-t-[10.1px] md:rounded-t-[20px] relative z-2 py-[34px] md:py-[66px]">
            <h3 class="font-black text-xl md:text-3xl leading-[15.22px] md:leading-[30px] mb-4 md:mb-[34px]">ICL植入式隱形眼鏡是什麼?</h3>
            <div class="what-desc-text text-sm md:text-xl font-normal leading-[22px] md:leading-[35px] md:tracking-[1px]">
              <p>
              ICL植入式隱形眼鏡以非激光原理矯正<br />
              1,800度以下近視、1,000度以下遠視、600度以下散光。
            </p>
            <p>矯視後，無須再依賴眼鏡/隱形眼鏡，早晚享受高清視力。</p>
            </div>
            <h4 class="mt-10 md:mt-13 mb-5 md:mb-10 text-xl md:text-3xl">適合人士</h4>
            <div class="what-card flex justify-between mb-[34px]">
              <div class="what-card-item">
                <p>熱愛<span>運動</span>/<br />注重<span>儀表</span></p>
              </div>
              <div class="what-card-item">
                <p>因佩戴隱形眼鏡<br />導致<span>乾眼症</span></p>
              </div>
              <div class="what-card-item">
                <p>
                  希望<span>減低</span>對眼鏡或<br />隱形眼鏡的<span>依賴</span>
                </p>
              </div>
            </div>
            <div class="what-join text-sm md:text-xl font-normal leading-[30px] md:leading-[50px] tracking-[0.7px] md:tracking-[1px]">
              <p>想更詳細了解ICL植入式隱形眼鏡?</p>
              <p class="font-black">
                <span class="text-[#3bd7f1] text-lg md:text-3xl tracking-[0.9px] md:tracking-[1.5px]">立即登記</span>
                參與ICL植入式隱形眼鏡講座專場!
              </p>
            </div>
          </div>
        </section>
        <section class="share block md:hidden">
          <div class="share-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M1 0.938477L19.4751 18.0939"
                stroke="#3BD7F1"
                stroke-width="1.97947"
              />
            </svg>
            <span>同朋友分享一下啦！</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M20 0.938477L1.52493 18.0939"
                stroke="#3BD7F1"
                stroke-width="1.97947"
              />
            </svg>
          </div>
          <div class="share-group">
            <div class="share-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
              >
                <path
                  d="M0.282114 11.5524C0.28129 9.57421 1.74018 7.94793 3.63508 7.78225C4.78653 7.68169 5.78468 8.04519 6.60891 8.85874C6.74161 8.9898 6.83145 9.00134 6.99135 8.9049C8.88461 7.7567 10.7828 6.61427 12.6827 5.47761C12.831 5.38859 12.8508 5.31193 12.7981 5.15037C12.0958 2.99822 13.5432 0.683684 15.7842 0.36222C17.9075 0.0580664 19.8073 1.52279 20.0529 3.65351C20.2771 5.60042 18.852 7.4443 16.9044 7.71961C15.6318 7.8993 14.552 7.50695 13.6594 6.59201C13.5638 6.49393 13.4987 6.48074 13.3816 6.55163C11.462 7.71054 9.5407 8.86616 7.61859 10.0193C7.50567 10.0869 7.47105 10.1537 7.51721 10.2839C7.75129 10.9466 7.79497 11.6233 7.61529 12.3058C7.57326 12.4666 7.6293 12.5416 7.76613 12.6116C9.43931 13.4647 11.1109 14.322 12.7832 15.1792C12.9176 15.2476 13.0544 15.3136 13.1821 15.3919C13.3091 15.4693 13.3956 15.4578 13.4954 15.3366C14.0962 14.6088 14.8652 14.1736 15.7983 14.0228C17.2151 13.7936 18.7119 14.4712 19.4801 15.696C20.8871 17.938 19.6458 20.8378 17.0536 21.3637C14.9996 21.7807 12.9678 20.3432 12.6654 18.262C12.5986 17.802 12.5961 17.3445 12.7338 16.8978C12.7972 16.6926 12.7404 16.6002 12.5508 16.5038C10.7597 15.5946 8.97362 14.6756 7.18834 13.7541C7.05894 13.6873 6.98393 13.7038 6.89327 13.8142C6.06244 14.8231 4.98847 15.2748 3.68701 15.2056C2.07234 15.119 0.559055 13.7252 0.327446 12.1096C0.297774 11.9052 0.274696 11.7016 0.282938 11.5516L0.282114 11.5524Z"
                  fill="#3BD7F1"
                />
              </svg>
            </div>
            <div class="share-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_11479_977)">
                  <path
                    d="M9.10209 6.12598C10.8869 6.12803 12.1807 6.64582 13.3111 7.62182C13.4894 7.77592 13.6707 7.92592 13.845 8.0831C14.1985 8.40056 14.2673 8.87417 13.9814 9.25738C13.6428 9.71147 13.2852 10.1522 12.9157 10.5806C12.609 10.9361 12.1369 10.9587 11.7713 10.6618C11.5432 10.4769 11.3271 10.2755 11.099 10.0895C10.0602 9.24505 8.50948 9.28615 7.55234 10.2303C6.53344 11.2361 5.53248 12.2645 4.5594 13.3175C3.81341 14.125 3.64808 15.1113 3.98671 16.1582C4.32535 17.2051 5.06536 17.8389 6.10915 18.03C6.97666 18.1882 7.77544 17.9633 8.43876 17.3345C8.6529 17.1321 8.8511 16.9123 9.06026 16.7047C9.44371 16.3256 9.89489 16.3102 10.2813 16.6852C10.6618 17.0551 11.0313 17.4372 11.3909 17.8287C11.7066 18.1728 11.7205 18.6485 11.4217 18.9958C10.3939 20.1937 9.1728 21.0484 7.60911 21.3423C4.41897 21.9412 1.2119 19.643 0.679043 16.3441C0.334432 14.2082 0.910112 12.3641 2.37122 10.82C3.29848 9.83989 4.23969 8.87315 5.18886 7.91564C6.35715 6.73623 7.76647 6.14139 9.10109 6.127L9.10209 6.12598Z"
                    fill="#3BD7F1"
                  />
                  <path
                    d="M12.3086 15.6265C10.73 15.6194 9.43419 15.1046 8.30574 14.1266C8.13443 13.9776 7.96113 13.8317 7.78982 13.6817C7.42031 13.3571 7.34661 12.8814 7.63843 12.491C7.97806 12.0369 8.33562 11.5972 8.70413 11.1688C9.00891 10.8144 9.48299 10.7938 9.84852 11.0907C10.0637 11.2654 10.2658 11.4565 10.483 11.628C11.6503 12.5516 13.1532 12.4623 14.197 11.3989C15.1302 10.4486 16.0595 9.49422 16.9778 8.52849C17.7337 7.73332 17.9628 6.7717 17.666 5.71146C17.3632 4.63273 16.6421 3.95878 15.5774 3.73687C14.681 3.54989 13.8633 3.7718 13.1761 4.41904C12.962 4.6204 12.7648 4.84232 12.5546 5.04882C12.1722 5.42483 11.717 5.43921 11.3325 5.06525C10.9521 4.6954 10.5826 4.31322 10.224 3.92077C9.91625 3.58482 9.89334 3.11121 10.1812 2.77423C11.1463 1.64413 12.2817 0.796559 13.7418 0.466776C17.2029 -0.31402 20.5633 2.13316 20.9866 5.76489C21.2087 7.67167 20.6819 9.35347 19.411 10.7445C18.3473 11.9085 17.2636 13.0581 16.1083 14.1266C15.0077 15.1447 13.6851 15.6111 12.3076 15.6255L12.3086 15.6265Z"
                    fill="#3BD7F1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11479_977">
                    <rect
                      width="20.4545"
                      height="21.1144"
                      fill="white"
                      transform="translate(0.582031 0.322266)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>
      <aside class="page-left flex-1 hidden md:block order-2 md:order-1">
        左侧栏
      </aside>
      <aside class="page-right flex-1 hidden md:block order-3">右侧栏</aside>
    </div>
    <FooterV2 />
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #3bd7f1;
// 样式覆盖
:deep(.icon-whatsapp) {
  display: none;
}
:deep(.icon-lecture) {
  background-image: linear-gradient(180deg, #000034 62.5%, #01abcc 100%);
}
.page {
  color: #fff;
  font-family: "Noto Sans TC";
}
.book {
  background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-reserve.webp")
    no-repeat;
}
.share {
  padding: 24px 0 10px;
  background-color: #000034;
  &-title {
    display: flex;
    justify-content: center;
    gap: 7px;
    span {
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 16.496px; /* 82.478% */
    }
  }
  &-group {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 20px;
    &-item {
      border-radius: 50%;
      padding: 16px;
      border: 1px solid $primary-color;
    }
  }
}
</style>
<script>
import HeadV3 from "@/components/Publice/HeadV3.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
  },
  data() {
    return {};
  },
};
</script>
