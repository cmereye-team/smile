<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-01 10:37:18
 * @LastEditTime: 2025-09-03 10:38:33
 * @FilePath: /pages/new-page/icl2509.vue
 * @Description: 9月广告专用讲座专题
-->
<template>
  <div class="page bg-[#050D1A]">
    <HeadV3 />
    <div class="page-bg w-full flex flex-col md:flex-row md:justify-center">
      <main
        class="page-main w-full md:max-w-3xl pt-[87px] md:pt-[180px] order-1 md:order-2"
      >
        <section id="intro" class="intro pb-[10.1px] md:pb-0">
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
        <section
          id="detail"
          class="detail rounded-[10.1px] md:rounded-[20px] -my-5 relative z-2 pt-4 md:pt-[34px] pb-[30.5px] md:pb-12"
        >
          <div class="detail-main relative">
            <div class="detail-question">
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-t1.svg"
                alt="你是否正受近視、遠視或散光困擾?"
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-t2.svg"
                alt="甚至因此影響工作表現或生活質素?"
              />
            </div>
            <div
              class="detail-cover relative flex justify-end px-14 md:px-[120px]"
            >
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="
                    https://statichk.cmermedical.com/smile/icl2509/icl2509-bookman-m.webp
                  "
                />
                <source
                  media="(min-width: 769px)"
                  srcset="
                    https://statichk.cmermedical.com/smile/icl2509/icl2509-bookman-pc.webp
                  "
                />
                <img
                  class="w-[202px] h-[140.05px] md:w-[367px] md:h-[263px]"
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-bookman-pc.webp"
                  alt="ICL九月講座"
                />
              </picture>
            </div>
            <div
              class="detail-text mt-12 ml-[64px] mr-[106.13px] md:mt-[58px] md:ml-[148px] md:mr-[259px]"
            >
              <h3
                class="text-sm md:text-xl font-bold leading-[20px] md:leading-[35px] tracking-[0.84px] md:tracking-[1px] text-justify"
              >
                ICL植入式隱形眼鏡
              </h3>
              <p>會為你的生活體驗帶來嶄新選擇!</p>
              <p>
                作為首間官方認證EVO
                ICL國際培訓中心，希瑪微笑矯視中心今次為ICL矯視服務開辦講座專場，將深入講解ICL技術原理，並即場解答你最關心的問題。
              </p>
              <p>
                無論你是初次接觸ICL植入式隱形眼鏡，或已在考慮進行矯視，這場講座活動都能為你提供最全面的講解。
              </p>
            </div>
            <div class="detail-title relative">
              <!-- <div class="absolute inset-0 bg-gradient-to-r from-white/0 to-white h-11 md:h-[86px]">
                <img class="z-1" src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-title.svg" alt="講座活動詳情">
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-[#00abcc]/0 to-[#0099b6] transform rotate-[-172.903deg] h-11 md:h-[86px]"></div> -->
            </div>
            <div
              class="detail-desc px-[53.28px] md:px-[105px] flex flex-col gap-6 md:gap-[50px]"
            >
              <div class="detail-desc-row h-[73.64px] md:h-[145.5px]">
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-date.svg"
                  alt="日期：2025-10-14/2025-10-21/2025-10-28，星期二"
                />
              </div>
              <div
                class="detail-desc-row h-[38.18px] md:h-[72.45px] flex justify-between"
              >
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-time.svg"
                  alt="時間：19:15"
                />
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-address.svg"
                  alt="地點：旺角希瑪微笑矯視中心"
                />
              </div>
              <div class="detail-desc-row h-[19.348px] md:h-[38.14px]">
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-activity.svg"
                  alt="活動內容"
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <p>
              <span class="block md:inline">講座將由希瑪醫療團隊主講，</span>
              <span class="block md:inline"
                >深入剖析ICL技術、安全性及術後效果。</span
              >
            </p>
            <p>
              <span class="block md:inline">現場更設有互動環節，</span>
              <span class="block md:inline"
                >解答你對ICL矯視服務的所有疑問。</span
              >
            </p>
          </div>
        </section>
        <section id="highlight" class="highlight">
          <div
            class="highlight-gift bg-[#000034] relative z-1 -mb-5 rounded-b-[10.1px] md:rounded-b-[20px] text-center py-7 md:pt-11 md:pb-[58px]"
          >
            <div class="highlight-gift-bg">
              <p
                class="text-xl md:text-3xl leading-[23.845px] md:leading-[47px] tracking-[1px] md:traceing-[1.5px]"
              >
                <span
                  class="block text-sm md:text-xl tracking-[0.7px] traceing-[1px]"
                  >參加者即場預約ICL矯視前檢查</span
                >可獲專場專享禮品
              </p>
              <div class="relative flex justify-center">
                <picture class="w-[277.244px] md:w-[387.817px]">
                  <source
                    media="(max-width: 768px)"
                    srcset="
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m.webp
                    "
                  />
                  <source
                    media="(min-width: 769px)"
                    srcset="
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc.webp
                    "
                  />
                  <img
                    src="https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc.webp"
                    alt="送不鏽鋼保溫杯+飲管套"
                  />
                </picture>
              </div>
              <p
                class="mt-[18px] md:mt-[14.5px] text-sm md:text-xl leading-[23.845px] md:leading-[47px] tracking-[0.7px] md:tracking-[1px]"
              >
                <span class="font-black">術前檢查費用</span
                >(價值:$500)可於手術費用中扣除
              </p>
            </div>
          </div>
          <div
            class="highlight-book text-center font-black pt-11 md:pt-21 pb-[50.65px] md:pb-[110px] -my-5"
          >
            <div
              class="tracking-[1px] md:tracking-[1.5px] text-xl md:text-3xl leading-[23.845px] md:leading-[47px] mb-5"
            >
              <p class="text-[#ff7300]">名額有限</p>
              <p class="text-[#000]">活動只招待已預約人士</p>
              <p class="text-[#81accd]">請即登記預約!</p>
            </div>
            <a
              class="highlight-book-button block mx-auto text-xl md:text-4xl leading-[31.962px] md:leading-[63px] tracking-[1px] md:tracking-[1.8px] w-[170px] h-[40px] md:w-[335px] md:h-[77px]"
              href=" https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(ICLtalk-land_01)STAAR%20X%20CMER%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%AC%9B%E5%BA%A7%E5%B0%88%E5%A0%B4"
              target="_blank"
              >立即預約</a
            >
          </div>
        </section>
        <section id="what" class="what">
          <div
            class="rounded-t-[10.1px] md:rounded-t-[20px] relative z-1 bg-[#E8EEF2] h-[178.61px] md:h-[323px]"
          >
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
                class="w-full h-auto"
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-lens-pc.webp"
                alt="ICL九月講座"
              />
            </picture>
          </div>
          <div
            class="what-desc -mt-5 bg-[#000034] text-center rounded-t-[10.1px] md:rounded-t-[20px] relative z-2 py-[34px] md:pt-[66px] md:pb-[140px]"
          >
            <h3
              class="font-black text-xl md:text-3xl leading-[15.22px] md:leading-[30px] mb-4 md:mb-[34px]"
            >
              ICL植入式隱形眼鏡是什麼?
            </h3>
            <div
              class="what-desc-text text-sm md:text-xl font-normal leading-[22px] md:leading-[35px] md:tracking-[1px]"
            >
              <p>
                ICL植入式隱形眼鏡以非激光原理矯正<br />
                1,800度以下近視、1,000度以下遠視、600度以下散光。
              </p>
              <p>矯視後，無須再依賴眼鏡/隱形眼鏡，早晚享受高清視力。</p>
            </div>
            <h4 class="mt-6 md:mt-13 mb-5 md:mb-10 text-xl md:text-3xl">
              適合人士
            </h4>
            <div
              class="what-card flex justify-between mb-[34px] mx-[6px] md:mx-5 text-center gap-[10px] md:gap-[26.67px]"
            >
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
            <div
              class="what-join text-sm md:text-xl font-normal leading-[30px] md:leading-[50px] tracking-[0.7px] md:tracking-[1px]"
            >
              <p>想更詳細了解ICL植入式隱形眼鏡?</p>
              <p class="font-black">
                <span
                  class="text-[#3bd7f1] text-lg md:text-3xl tracking-[0.9px] md:tracking-[1.5px]"
                  >立即登記</span
                >
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
        <el-backtop>
          <div
            class="backtop text-white w-[32.972px] h-[66.812px] md:w-[32.5px] md:h-[65.855px] rounded-[43.39px] md:rounded-[42.763px] bg-gradient-to-b from-[#00d6ff] to-[#008098] flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M9.70312 6.76538V18.3683"
                stroke="white"
                stroke-width="1.48026"
                stroke-linecap="round"
              />
              <path
                d="M4.60093 10.9194L9.70281 5.93091L14.8047 10.9194"
                stroke="white"
                stroke-width="1.48026"
                stroke-linecap="round"
              />
            </svg>
            <span
              class="text-[9.546px] md:text-[9.408px] font-bold font-[ITC Avant Garde Gothic Pro] text-center"
              >TOP</span
            >
          </div>
        </el-backtop>
      </main>
      <aside
        class="page-left flex-1 hidden xl:block order-2 xl:order-1 relative"
      >
        <div
          class="page-left-container sticky top-1/2 -translate-y-1/2 pr-[14%]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m.webp
              "
            />
            <source
              media="(min-width: 769px)"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc.webp
              "
            />
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc.webp"
              alt="ICL九月講座"
            />
          </picture>
        </div>
      </aside>
      <aside class="page-right flex-1 hidden xl:block order-3">
        <div class="pl-9 sticky top-1/2 -translate-y-1/2">
          <PageNavigation :navList="navList"></PageNavigation>
        </div>
      </aside>
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
:deep(.new-Footer-v2) {
  margin-top: 0;
}
:deep(.el-backtop) {
  width: auto;
  height: auto;
}
.page {
  color: #fff;
  font-family: "Noto Sans TC";
  &-left {
    &-container {
      background: transparent
        url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-icl.svg")
        no-repeat left bottom;
      background-size: 30% auto;
    }
  }
}
.detail {
  background: linear-gradient(180deg, #00abcc 71.63%, #008098 100%);
  &-question {
    img {
      &:nth-child(1) {
        position: absolute;
        top: 8px;
        left: 22.34px;
      }
      &:nth-child(2) {
        position: absolute;
        top: 106px;
        right: 30px;
      }
    }
  }
  &-cover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 13.77px;
      width: 49px;
      height: 42px;
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA2MyA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzA3MTYgMzMuNTE1NkwwIDQwLjYzNzlMMTEuNDA4NyA0MC4xOTY3TDMxLjI1IDU0TDUyLjc5NSA0Ni4xOTg2TDYzIDM3LjMxMTRMNTUuNjc0NiAxMS43MzM1TDM4LjA1NDEgMEwxMi4xNDY4IDExLjc0TDkuNzA3MTYgMzMuNTE1NloiIGZpbGw9IiNBRENGRDYiLz4KPHBhdGggZD0iTTMyLjYwNjUgMTguMjY1NUMzNC45MDA2IDE5LjkzMzUgMzYuMTczIDIzLjA5IDM2LjIwMDggMjYuMTg2N0MzNi4yMjg3IDI5LjI4MzMgMzUuMTI5OCAzMi4yOTQ0IDMzLjUyMzMgMzQuNzk0NEMzMi4xNTg4IDM2LjkxMzcgMjkuOTU0NyAzOC44NjgzIDI3LjczMTIgMzguMTU0QzI2LjEzNTQgMzcuNjQwOCAyNS4wOTQ0IDM1LjkwODUgMjQuMzg1NCAzNC4yMDJDMjMuMzQ4NyAzMS43MDYzIDIyLjcyNTMgMjguNzkxNCAyMy41NDM2IDI2LjE5MzFDMjQuNDc5NiAyMy4yMTYyIDI3LjA3NzkgMjEuMzM2NCAyOS42NzYyIDIwLjIyMDFDMzMuNzEzOSAxOC40ODM2IDM4LjE3NzkgMTguMDQ1MiA0Mi40MTkxIDE4Ljk2NjlDNDMuNDAyMyAxOS4xODA4IDQ0LjQ2MDUgMTkuNTMzNiA0NS4wMTk2IDIwLjQ3NjdDNDUuNzU2NCAyMS43MjE0IDQ1LjMwMDIgMjMuNDIxNSA0NC42MzYyIDI0LjcxOTZDNDIuNTM0OCAyOC44Mjc4IDM4LjU3ODUgMzEuNDk2NyAzNC40NDAxIDMyLjE1MzJDMzAuMzAxNyAzMi44MDk4IDI2LjAzMjYgMzEuNTgwMSAyMi4zOTc2IDI5LjIzNjNDMjAuMTgwNiAyNy44MDc3IDE3Ljk0ODYgMjUuMzkxMSAxOC4zMTA2IDIyLjUyMzNDMTguNjY4MyAxOS43MDA0IDIxLjI5ODcgMTguMTE1OCAyMy42MzU3IDE3LjA4NUMyNS45MTI3IDE2LjA3OTkgMjguMjkwMyAxNS4xNTYgMzAuNzMwMSAxNS4yNTQ0QzMzLjE3MiAxNS4zNTA2IDM1LjcxNDYgMTYuNjc0NCAzNi44MDcgMTkuMTU5NEMzNy40Nzk2IDIwLjY4NjMgMzcuNTQxNyAyMi40NjU2IDM3LjQ1ODIgMjQuMTdDMzcuMzY0IDI2LjA4NCAzNy4wODU1IDI4LjA0NTEgMzYuMjA1MSAyOS42Nzg5QzM1LjMyNDcgMzEuMzEyOCAzMy43Mzc1IDMyLjU2MzggMzIuMDU2IDMyLjQ0NjJDMjkuNzQ5IDMyLjI4MzcgMjguMDQ0IDI5LjQ3NzkgMjguMjM4OSAyNi44NTgyQzI4LjQzMzggMjQuMjM4NCAzMC4xMzQ2IDIxLjk5OTQgMzIuMTc2IDIwLjc2NzZDMzQuMjE3MyAxOS41MzU4IDM2LjU2NSAxOS4xNTUxIDM4Ljg2OTggMTguOTM0OEM0MC43NDE5IDE4Ljc1NTIgNDIuODQxMSAxOC43NTUyIDQ0LjIyMDYgMjAuMjA1MUM0Ni40ODA0IDIyLjU4MzIgNDUuMjMzOCAyNi44NDk2IDQzLjY4MDggMjkuODczNUM0Mi4yMjY0IDMyLjcwMjkgNDAuMzQzNSAzNS42NjY5IDM3LjUyNDYgMzYuMzQ3QzM1LjMzMTIgMzYuODc3MyAzMy4wMjIxIDM1LjgzOCAzMS4zMTcgMzQuMTc2M0MyOS42MTQxIDMyLjUxNjggMjguNDE2NyAzMC4yOTcgMjcuMzAwNyAyOC4wODM2QzI1LjkyNzcgMjUuMzU0OCAyNC42ODEgMjEuNzQ3IDI2LjQwNTMgMTkuMjg5OEMyNy41NjYzIDE3LjYzODkgMjkuNjE2MiAxNy4yNzMyIDMxLjQ3MTIgMTcuMTQyN0MzMy42MjE4IDE2Ljk5MDkgMzUuOTc1OSAxNy4wNjU3IDM3LjY0MjQgMTguNjE2MkMzOS43NzggMjAuNjAwOCAzOS45ODE1IDI0LjIyNTYgMzkuNTgxIDI3LjMzMDhDMzkuMjcwNCAyOS43NDk1IDM4LjcwMjcgMzIuMTI1NCAzNy44OTMgMzQuMzkwMkMzNy40MjE4IDM1LjcwOTcgMzYuNzg1NiAzNy4wODY5IDM1LjY1MDMgMzcuNjg3OEMzNC40MTY1IDM4LjMzNzkgMzIuOTAyMSAzNy44NTA0IDMxLjg1MDQgMzYuODcwOUMzMC43OTg2IDM1Ljg5MTQgMzAuMTE3NSAzNC40OTcxIDI5LjQ5NDEgMzMuMTI0MUMyNy44ODk4IDI5LjU4OTEgMjYuNTA2IDI1LjIzMDcgMjguMjY0NiAyMS43OTE5QzI5LjQ5ODQgMTkuMzgxOCAzMS45NTEgMTguMTY3MSAzNC4zMDk0IDE3LjQxMjJDMzYuMTA4NyAxNi44MzY5IDM4LjM1NzkgMTYuNTg2NyAzOS41NDg4IDE4LjIyN0M0MC40NTA2IDE5LjQ2OTUgNDAuMzI4NSAyMS4yNzQ0IDQwLjA4NDMgMjIuODYxMkMzOC45NDI2IDMwLjIyIDM2LjEwNDQgMzcuMjMwMiAzMS45MjUzIDQzQzI4LjEwODIgMzguMzQyMiAyNS41NDY0IDMyLjM3MTQgMjQuNjY2IDI2LjA4MTlDMjQuNDE1NCAyNC4yODc2IDI0LjMxMDQgMjIuMzcxNSAyNC45ODA5IDIwLjcyMjdDMjYuMDE5OCAxOC4xNjcxIDI4LjU4NTkgMTYuOTU0NSAzMC45ODA3IDE2LjI1MDlDMzQuMjY0NCAxNS4yODY0IDM4LjI3NDMgMTUuMDgzMyA0MC41MDg1IDE3Ljk4NzRDNDEuNjAwOSAxOS40MDc0IDQyLjA0IDIxLjMyMTUgNDIuMjk3MSAyMy4xODQxQzQzLjA1NTMgMjguNjg0NSA0Mi40ODEzIDM0LjQxMzcgNDAuNjU2MyAzOS41ODA1QzQwLjM2MDcgNDAuNDE4OCAzOS45OTAxIDQxLjI5NzcgMzkuMjk4MiA0MS43NDA0QzM4LjEyNDQgNDIuNDk1MyAzNi42Njk5IDQxLjY2MzQgMzUuNTczMiA0MC43NzE2QzMxLjI2MzUgMzcuMjY4NyAyNy43Mzk4IDMyLjUyNzUgMjUuNDIyMSAyNy4xMTA1QzIzLjQ4MzYgMjIuNTUzMyAyMS43ODcxIDE1LjIyNDQgMjcuNjcxMyAxMi44MzU3QzI4Ljk1NDMgMTIuMzEzOSAzMC4zNTk1IDEyLjE4OTggMzEuNzQzMyAxMi4xMDIxQzM2LjI1MDEgMTEuODE3NyA0MS4wOTMyIDExLjk3ODEgNDQuNzk0NyAxNC41NTkzQzQ3LjU1MTUgMTYuNDc5OCA0OS4zMDc5IDE5LjQ5OTQgNTAuODM3MyAyMi40ODdDNTQuNjQ4IDI5LjkzMzQgNDguNDQ0NyAzMy4xMDA2IDQxLjU5NjYgMzEuMTg4OEMzNy41ODI0IDMwLjA2ODEgMzQuMDEzOCAyNy4yODggMzEuMjY3NyAyMy43NzQ0QzMwLjc0MjkgMjMuMTAyOSAzMC4yMTM5IDIyLjE3OSAzMC41NTg3IDIxLjM2ODVDMzAuNzYyMiAyMC44ODczIDMxLjIxODUgMjAuNjIgMzEuNjQ2OSAyMC40MDRDMzQuNDMzNyAxOS4wMDU0IDM3LjU2OTYgMTguMzE2OCA0MC41NTU2IDE4Ljk5NDdDNDMuNTQxNiAxOS42NzI2IDQ2LjM0MTIgMjEuODUxOCA0Ny41NzA3IDI1LjAyMzNDNDguODAwMyAyOC4xOTQ4IDQ4LjE4NTUgMzIuMzA3MiA0NS44MjA3IDM0LjQ5MDdDNDQuMDMyMSAzNi4xNDE3IDQxLjYwNzMgMzYuNTI2NiAzOS4zMDg5IDM2LjcxMDVDMzIuMTYxIDM3LjI4MzYgMjQuOTI5NSAzNi41MDczIDE4IDM0LjQyNDRDMTggMzIuMTE0NyAxOS4zNTU5IDMwLjExOTUgMjAuNzI2OCAyOC40MTcyQzIzLjM1MjkgMjUuMTQ5NSAyNi4yODMyIDIyLjE5NjEgMjkuNDUxMyAxOS42MjM0QzMwLjU3OCAxOC43MDgxIDMxLjc0NTQgMTcuODMzNSAzMy4wMzQ5IDE3LjI1ODJDMzQuMjA4NyAxNi43MzQyIDM1LjQ1OTcgMTYuNDcxMiAzNi42OTk5IDE2LjIwODJDNDEuNTA0NSAxNS4xOTY2IDQ2LjMwOTEgMTQuMTg1MSA1MS4xMTM3IDEzLjE3MzYiIHN0cm9rZT0iIzA1MEQxOSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=");
    }
  }
  &-text {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.84px;
  }
  &-desc {
    &-row {
      img {
        height: 100%;
      }
    }
  }
}
@keyframes buttonShine {
  0%,
  70%,
  100% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0.6;
  }
}
.highlight {
  &-gift {
    &-bg {
      background: #000034
        url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-icl.svg")
        no-repeat left bottom;
      background-size: 25% auto;
    }
  }
  &-book {
    background: #fff
      url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-reserve.webp")
      no-repeat center / cover;
    &-button {
      background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjMzNSIgaGVpZ2h0PSI3NyIgdmlld0JveD0iMCAwIDMzNSA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgzMzVWMzkuMzI2OEMzMzUgNjAuMTIgMzE4LjIzOCA3NyAyOTcuNTkgNzdIMFYwWiIgZmlsbD0iIzAwMDAzNCIvPgo8cGF0aCBkPSJNMzM1IDBIMTg2VjdIMzM1VjBaIiBmaWxsPSIjMDBBQkNDIi8+Cjwvc3ZnPgo=");
      background-position: top;
      background-size: cover;
      overflow: hidden;
      position: relative;
      border-bottom-right-radius: 17px;
      &::after {
        content: "";
        height: 100%;
        width: 50%;
        position: absolute;
        top: 0;
        left: 10%;
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.2) 100%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-20deg);
        opacity: 0;
        animation: buttonShine 3s ease-in-out infinite;
        clip-path: polygon(0 0, 100% 0, 100% 95%, 97% 100%, 0 100%);
      }
    }
  }
}
.what {
  &-card {
    &-item {
      flex: 1;
      background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-card-m.avif")
        no-repeat center / cover;
      height: 158px;
      border-radius: 15px;
      overflow: hidden;
      p {
        font-size: 14px;
        line-height: 17.757px;
        font-weight: 400;
        letter-spacing: 0.7px;
      }
      span {
        font-weight: 900;
      }
    }
  }
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
@media screen and (max-width: 767px) {
  :deep(.headV3) {
    border-radius: 0;
  }
  .detail {
    &-question {
      img {
        &:nth-child(1) {
          width: 105px;
        }
        &:nth-child(2) {
          width: 53px;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .page {
    &-bg {
      background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-banner.avif")
        no-repeat center / contain fixed;
    }
  }
  .detail {
    &-question {
      img {
        &:nth-child(1) {
          top: 12px;
          left: 77px;
        }
        &:nth-child(2) {
          top: 200px;
          right: 126px;
        }
      }
    }
    &-cover {
      &::before {
        top: 36px;
        right: 39px;
        width: 63px;
        height: 54px;
      }
    }
    &-text {
      font-size: 20px;
      line-height: 35px;
      letter-spacing: 1px;
    }
  }
  .what {
    &-card {
      &-item {
        background-image: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-card-pc.avif");
        height: 312px;
        p {
          font-size: 20px;
          line-height: 35px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
<script>
import HeadV3 from "@/components/Publice/HeadV3.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import PageNavigation from "@/components/commom/PageNavigation/PageNavigation.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    PageNavigation,
  },
  data() {
    return {
      navList: [
        { id: "intro", label: "講座活動簡介" },
        { id: "detail", label: "講座活動詳情" },
        { id: "highlight", label: "講座活動亮點" },
        { id: "what", label: "ICL植入式隱形眼鏡是什麼?" },
      ],
    };
  },
};
</script>
