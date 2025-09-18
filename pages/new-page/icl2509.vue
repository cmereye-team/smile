<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-01 10:37:18
 * @LastEditTime: 2025-09-18 09:35:31
 * @FilePath: /pages/new-page/icl2509.vue
 * @Description: 9月广告专用讲座专题
-->
<template>
  <div class="page relative bg-[#050D1A]">
    <HeadV3 isICLTalk />
    <div class="page-bg w-full flex flex-col md:flex-row md:justify-center">
      <main
        class="page-main w-full md:max-w-3xl order-1 md:order-2 bg-[#000034]"
      >
        <section id="intro" class="intro pb-[10.1px] md:pb-0">
          <picture>
            <source
              media="(max-width: 767px)"
              type="image/avif"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-m@1x.avif 1x,
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-m@2x.avif 2x
              "
            />
            <source
              media="(max-width: 767px)"
              type="image/webp"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-m@1x.webp 1x,
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-m@2x.webp 2x
              "
            />
            <source
              media="(min-width: 768px)"
              type="image/avif"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@1x.avif 1x,
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@2x.avif 2x
              "
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcset="
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@1x.webp 1x,
                https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@2x.webp 2x
              "
            />
            <img
              class="w-full"
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@1x.jpg 1x,https://statichk.cmermedical.com/smile/icl2509/icl2509-banner-pc@2x.jpg 2x"
              alt="ICL植入式隱形眼鏡講座專場"
            />
          </picture>
        </section>
        <section
          id="detail"
          class="detail rounded-[10.1px] md:rounded-[20px] -mt-5 relative z-[2] pt-4 md:pt-[34px] pb-[30.5px] md:pb-11"
        >
          <div class="detail-main">
            <div class="detail-question relative z-[2]">
              <img
                ref="detailImage1"
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-t1.svg"
                alt="你是否正受近視、遠視或散光困擾?"
              />
              <img
                ref="detailImage3"
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-t2.svg"
                alt="甚至因此影響工作表現或生活質素?"
              />
            </div>
            <div
              class="detail-cover flex justify-end px-14 md:px-[120px] z-[1] relative"
            >
              <div class="detail-cover-container relative">
                <picture ref="detailImage2">
                  <source
                    type="image/webp"
                    srcset="
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-bookman-pc.webp
                    "
                  />
                  <img
                    class="pl-5 md:pl-0 h-[140.05px] md:h-[263px]"
                    src="https://statichk.cmermedical.com/smile/icl2509/icl2509-bookman-pc.webp"
                    alt="ICL九月講座"
                  />
                </picture>
                <img
                  ref="shakeImages1"
                  class="shake absolute top-0 right-[13.77px] md:top-9 md:right-10 w-[50px] md:w-[64px]"
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-think.svg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="detail-activity mt-[87px] ml-[64px] mr-[106.13px] md:mt-[140px] md:ml-[148px] md:mr-[259px]"
            >
              <h3
                class="detail-activity-title bg-[#000034] w-fit text-sm md:text-xl font-bold leading-[20px] md:leading-[35px] tracking-[0.84px] md:tracking-[1px] text-justify px-[6px] py-1 md:px-3 md:py-2"
              >
                ICL植入式隱形眼鏡
              </h3>
              <div
                class="text-sm text-justify md:text-xl leading-5 md:leading-[35px] tracking-[0.84px] md:tracking-[1px]"
              >
                <p>會為你的生活體驗帶來嶄新選擇!</p>
                <p>
                  作為首間官方認證EVO
                  ICL國際培訓中心，希瑪微笑矯視中心今次為ICL矯視服務開辦講座專場，將深入講解ICL技術原理，並即場解答你最關心的問題。
                </p>
                <p>
                  無論你是初次接觸ICL植入式隱形眼鏡，或已在考慮進行矯視，這場講座活動都能為你提供最全面的講解。
                </p>
              </div>
            </div>
            <div class="detail-title relative">
              <div class="detail-title-text w-full h-[166.86px] md:h-[347px]">
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-tit.svg"
                  alt="講座活動詳情"
                />
              </div>
            </div>
            <div
              class="detail-desc px-[53.28px] md:px-[105px] pt-[80px] md:pt-[168px] flex flex-col gap-6 md:gap-[50px] relative z-1"
            >
              <div
                class="detail-desc-row h-[73.64px] md:h-[145.5px]"
                ref="row1"
              >
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-date.svg"
                  alt="日期：2025-10-14/2025-10-21/2025-10-28，星期二"
                />
              </div>
              <div
                class="detail-desc-row h-[38.18px] md:h-[72.45px] flex justify-between"
                ref="row2"
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
              <div
                class="detail-desc-row h-[19.348px] md:h-[38.14px]"
                ref="row3"
              >
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-activity.svg"
                  alt="活動內容"
                />
              </div>
              <div
                class="detail-content flex flex-col items-center -mt-[30px] md:-mt-[50px]"
                ref="zoomInElement"
              >
                <div class="detail-content-row">
                  <div class="detail-content-item -pb-[10%]">
                    <img
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-c1.svg"
                      alt="ICL技術講解"
                    />
                  </div>
                </div>
                <div class="detail-content-row">
                  <div class="detail-content-item">
                    <img
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-c2.svg"
                      alt="常見問題Q&A"
                    />
                  </div>
                  <div class="detail-content-item">
                    <img
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-detail-c3.svg"
                      alt="專場專享禮品"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-center text-sm md:text-xl leading-[17.757px] md:leading-[35px] tracking-[0.7px] md:tracking-[1px]"
          >
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
            class="highlight-gift bg-[#000034] relative z-1 -mb-5 rounded-b-[10.1px] md:rounded-b-[20px] text-center pt-[42.27px] pb-7 md:pt-11 md:pb-[58px]"
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
              <div class="relative flex justify-end md:justify-center">
                <picture ref="shakeImages2" class="max-w-[90%]">
                  <source
                    media="(max-width: 767px)"
                    type="image/webp"
                    srcset="
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m@1x.webp 1x,
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m@2x.webp 2x
                    "
                  />
                  <source
                    media="(min-width: 768px)"
                    type="image/webp"
                    srcset="
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@1x.webp 1x,
                      https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@2x.webp 2x
                    "
                  />
                  <img
                    src="https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@1x.png 1x,https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@2x.png 2x"
                    alt="送不鏽鋼保溫杯+希瑪仔飲管套"
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
              <p class="text-[#01ACCD]">請即登記預約!</p>
            </div>
            <a
              class="highlight-book-button block mx-auto text-xl md:text-4xl leading-[31.962px] md:leading-[63px] tracking-[1px] md:tracking-[1.8px] w-[170px] h-[40px] md:w-[335px] md:h-[77px]"
              href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(ICLtalk-land_01)Lansheng%20x%20CMER%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%AC%9B%E5%BA%A7%E5%B0%88%E5%A0%B4"
              target="_blank"
              >立即預約</a
            >
          </div>
        </section>
        <section id="what" class="what">
          <div
            class="rounded-t-[10.1px] md:rounded-t-[20px] relative z-1 bg-[#E8EEF2] h-[178.61px] md:h-[323px] overflow-hidden"
          >
            <picture>
              <source
                type="image/avif"
                srcset="
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-lens.avif
                "
              />
              <source
                type="image/webp"
                srcset="
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-lens.webp
                "
              />
              <img
                class="w-full h-auto"
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-lens.jpg"
                alt="ICL九月講座"
              />
            </picture>
          </div>
          <div
            class="what-desc -mt-5 bg-[#000034] text-center rounded-t-[10.1px] md:rounded-t-[20px] relative z-2 pt-[34px] md:pt-[66px] md:pb-[140px]"
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
              <div class="what-card-item" ref="card1">
                <div class="what-card-inner" :class="{ flipped: flipped[0] }">
                  <div class="front">
                    <img
                      class="w-[53px] md:w-[105px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="大星星"
                    />
                  </div>
                  <div class="back gap-[46.19px] md:gap-[90.64px]">
                    <img
                      class="w-[25px] md:w-[43.37px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="小星星"
                    />
                    <p>熱愛<span>運動</span>/<br />注重<span>儀表</span></p>
                  </div>
                </div>
              </div>
              <div class="what-card-item" ref="card2">
                <div class="what-card-inner" :class="{ flipped: flipped[1] }">
                  <div class="front">
                    <img
                      class="w-[53px] md:w-[105px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="大星星"
                    />
                  </div>
                  <div class="back gap-[46.19px] md:gap-[90.64px]">
                    <img
                      class="w-[25px] md:w-[43.37px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="小星星"
                    />
                    <p>因佩戴隱形眼鏡<br />導致<span>乾眼症</span></p>
                  </div>
                </div>
              </div>
              <div class="what-card-item" ref="card3">
                <div class="what-card-inner" :class="{ flipped: flipped[2] }">
                  <div class="front">
                    <img
                      class="w-[53px] md:w-[105px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="大星星"
                    />
                  </div>
                  <div class="back gap-[46.19px] md:gap-[90.64px]">
                    <img
                      class="w-[25px] md:w-[43.37px]"
                      src="https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-star.svg"
                      alt="小星星"
                    />
                    <p>
                      希望<span>減低</span>對眼鏡或<br />
                      隱形眼鏡的<span>依賴</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="what-join text-sm md:text-xl font-normal leading-[30px] md:leading-[50px] tracking-[0.7px] md:tracking-[1px]"
            >
              <p>想更詳細了解ICL植入式隱形眼鏡?</p>
              <p class="font-black">
                <a
                  class="text-[#3bd7f1] text-lg md:text-3xl tracking-[0.9px] md:tracking-[1.5px]"
                  href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E7%99%BB%E8%A8%98(ICLtalk-land_03)Lansheng%20x%20CMER%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%AC%9B%E5%BA%A7%E5%B0%88%E5%A0%B4"
                  target="_blank"
                  ><span>立即登記</span></a
                >
                參與ICL植入式隱形眼鏡講座專場!
              </p>
            </div>
          </div>
        </section>
        <ShareSection
          class="share"
          themeColor="#3BD7F1"
          bgColor="#000034"
          titleColor="#fff"
          title="同朋友一齊聽講座啦！"
        />
        <!-- <section class="share block md:hidden">
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
            <span>同朋友一齊聽講座啦！</span>
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
            <a class="share-group-item" id="shareCurrentPageIcl">
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
            </a>
            <a class="share-group-item" @click="copyCurrentUrl">
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
            </a>
          </div>
        </section> -->
      </main>
      <aside
        class="page-left flex-1 hidden xl:block order-2 xl:order-1 relative"
      >
        <div
          class="page-left-container fixed h-screen w-[calc(50vw-384px)] z-1"
        >
          <div class="mx-auto text-center flex flex-col items-center pt-[5%]">
            <p class="text-[15px] leading-[23.5px] tracking-[0.75px]">
              參加者即場預約ICL矯視前檢查
            </p>
            <p class="text-xl leading-[23.5px] tracking-[1px]">
              可獲專場專享禮品
            </p>
            <picture>
              <source
                media="(max-width: 767px)"
                type="image/webp"
                srcset="
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m@2x.webp 2x,
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-m@3x.webp 3x
                "
              />
              <source
                media="(min-width: 768px)"
                type="image/webp"
                srcset="
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@1x.webp 1x,
                  https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@2x.webp 2x
                "
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@1x.png 1x,https://statichk.cmermedical.com/smile/icl2509/icl2509-gift-pc@2x.png 2x"
                alt="送不鏽鋼保溫杯+希瑪仔飲管套"
              />
            </picture>
            <p class="text-[15px] leading-[23.5px] tracking-[0.75px]">
              <span class="font-black">術前檢查費用</span
              >(價值:$500)可於手術費用中扣除
            </p>
          </div>
        </div>
      </aside>
      <aside class="page-right flex-1 hidden xl:block order-3">
        <div class="pl-9 sticky top-1/2 -translate-y-1/2">
          <PageNavigation :navList="navList"></PageNavigation>
        </div>
      </aside>
    </div>
    <div class="backtop">
      <el-backtop :bottom="150" ref="backtop" class="backtop-main">
        <div
          class="w-[32.972px] h-[66.812px] md:w-[32.5px] md:h-[65.855px] rounded-[43.39px] md:rounded-[42.763px] text-white bg-gradient-to-b from-[#00d6ff] to-[#008098] flex flex-col justify-center items-center tracking-[0.75px]"
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
    </div>
    <FooterV2 />
    <FooterMobile />
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #3bd7f1;
// 样式覆盖
:deep(.icon-whatsapp) {
  display: none !important;
}
:deep(.new-Footer-v2) {
  margin-top: 0 !important;
  position: relative;
  z-index: 2;
}
:deep(.new-Footer-v2 section) {
  margin-top: 0 !important;
}
.backtop {
  position: sticky;
  bottom: 150px;
  height: 0;
  z-index: 10;
  &-main {
    background: transparent;
    box-shadow: none;
    left: 5px;
    right: auto !important;
    position: relative;
  }
}
// 图片抖动动画
@keyframes ShakeImage {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(8deg);
  }
  60% {
    transform: rotate(-4deg);
  }
  80% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
// 按钮打光动画
@keyframes ButtonShine {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}
// 按钮蓝条动画
@keyframes ButtonFlow {
  0% {
    width: 45%;
    right: 0;
    opacity: 0.7;
  }
  25% {
    width: 80%;
    opacity: 1;
  }
  50% {
    width: 70%;
    opacity: 0.8;
  }
  75% {
    width: 90%;
    opacity: 0.9;
  }
  80% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 50%;
    opacity: 0.7;
  }
}
.shake {
  animation: ShakeImage 0.4s ease-in-out forwards;
}
.page {
  color: #fff;
  font-family: "Noto Sans TC";
  &-left {
    &-container {
      background: transparent
        url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-icl.svg")
        no-repeat left bottom 30%;
      background-size: 28% auto;
    }
  }
}
.detail {
  background: linear-gradient(180deg, #00abcc 71.63%, #008098 100%);
  &-main {
    background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-deco-lens.svg")
      no-repeat;
    background-position: 146.25px 410px;
    background-size: 347px;
  }
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
  &-title {
    &-text {
      position: absolute;
      left: 0;
      top: -28px;
    }
  }
  &-desc {
    &-row {
      img {
        height: 100%;
      }
    }
  }
  &-content {
    &-row {
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(2) {
        margin-top: -20%;
        .detail-content-item {
          margin: 0 -8%;
        }
      }
    }
    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 144.589px;
      aspect-ratio: 1/1;
      background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-ball.webp")
        no-repeat center / cover;
      img {
        width: 60px;
      }
    }
  }
}
.highlight {
  &-gift {
    &-bg {
      background: #000034
        url(https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-icl.svg)
        no-repeat 0 calc(100% - 50px);
      background-size: 25% auto;
    }
  }
  &-book {
    background: #fff
      url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-reserve.webp")
      no-repeat center / cover;
    &-button {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMzUiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCAzMzUgNzciIGZpbGw9Im5vbmUiPgogIDxwYXRoIGQ9Ik0wIDBIMzM1VjM5LjMyNjhDMzM1IDYwLjEyIDMxOC4yMzggNzcgMjk3LjU5IDc3SDBWMFoiIGZpbGw9IiMwMDAwMzQiLz4KPC9zdmc+");
      background-position: top;
      background-size: cover;
      overflow: hidden;
      position: relative;
      border-bottom-right-radius: 17px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 3.5px;
        width: 50%;
        background-color: #00abcc;
        animation: ButtonFlow 2.5s ease infinite;
      }
      &::after {
        content: "";
        height: 100%;
        width: 50%;
        position: absolute;
        top: 0;
        left: -50%;
        background: linear-gradient(
          120deg,
          rgba(#fff, 0) 0%,
          rgba(#fff, 0.3) 50%,
          rgba(#fff, 0) 100%
        );
        transform: skewX(-20deg);
        animation: ButtonShine 3s ease-in-out infinite;
        clip-path: polygon(0 0, 100% 0, 100% 95%, 97% 100%, 0 100%);
      }
    }
  }
}
%card-item {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
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
      perspective: 2000px;
      position: relative;
      .front {
        @extend %card-item;
      }
      .back {
        @extend %card-item;
        flex-direction: column;
        transform: rotateY(180deg);
      }
      p {
        font-size: 14px;
        line-height: 17.757px;
        font-weight: 400;
        letter-spacing: 0.7px;
        white-space: nowrap;
      }
      span {
        font-weight: 900;
      }
    }
    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transform-origin: center;
    }
  }
  &-join {
    span {
      padding-bottom: 2px;
      position: relative;
      display: inline-block;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #3bd7f1;
      }
    }
  }
}
.share {
  padding: 24px 0 70px;
}
@media screen and (max-width: 767px) {
  :deep(.new-Footer-v2) {
    padding-bottom: 0 !important;
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
  .what {
    &-card {
      &-item {
        p {
          font-size: #{"clamp(0.625rem, 0.357rem + 1.34vw, 1rem)"};
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .page {
    background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-banner.avif")
      no-repeat center / cover fixed;
  }
  .detail {
    &-main {
      background-position: 310px 690px;
      background-size: 550px;
    }
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
    &-title {
      &-text {
        top: -50px;
      }
    }
    &-content {
      &-item {
        width: 285px;
        img {
          width: 120px;
        }
      }
    }
  }
  .highlight {
    &-book {
      &-button {
        &::before {
          height: 7px;
        }
      }
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
@media screen and (min-width: 991px) {
  .backtop {
    &-main {
      left: calc(50% - 400.25px);
    }
  }
}
</style>
<script>
import HeadV3 from "@/components/Publice/HeadV3.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import PageNavigation from "@/components/commom/PageNavigation/PageNavigation.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import ShareSection from "@/components/commom/share/ShareSection.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    FooterMobile,
    PageNavigation,
    ShareSection,
  },
  data() {
    return {
      flipped: [false, false, false], // 控制每张卡片的翻转状态
      navList: [
        { id: "intro", label: "講座活動簡介" },
        { id: "detail", label: "講座活動詳情" },
        { id: "highlight", label: "講座活動亮點" },
        { id: "what", label: "ICL植入式隱形眼鏡是什麼?" },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$gsap && this.$ScrollTrigger) {
        this.$gsap.registerPlugin(this.$ScrollTrigger);
        // console.log("GSAP and ScrollTrigger loaded, refs:", this.$refs);
        this.setupAnimations();
      } else {
        console.error("GSAP or ScrollTrigger not available");
      }
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
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
    /**
     * @description: 统一调用动画
     */
    setupAnimations() {
      // console.log("Setting up animations, refs:", this.$refs);
      const shakeImages = [
        this.$refs.shakeImages1,
        this.$refs.shakeImages2,
      ].filter(Boolean);
      this.setupCardFlip([
        this.$refs.card1,
        this.$refs.card2,
        this.$refs.card3,
      ]);
      this.setupShakeImages(shakeImages);
      this.setupRowImages([
        this.$refs.detailImage1,
        this.$refs.detailImage2,
        this.$refs.detailImage3,
      ]);
      this.setupMultiRowImages([
        this.$refs.row1,
        this.$refs.row2,
        this.$refs.row3,
      ]);
      this.setupZoomInBounce([this.$refs.zoomInElement]);
    },
    /**
     * @description: 卡片翻转动画
     * @param {*} cards
     */
    setupCardFlip(cards) {
      cards.forEach((card, index) => {
        if (!card) {
          console.warn(`Card ${index + 1} ref not found`);
          return;
        }
        const front = card.querySelector(".front");
        const back = card.querySelector(".back");
        if (!front || !back) {
          console.warn(`Front or back not found for card ${index + 1}`);
          return;
        }
        this.$gsap.set(front, { rotationY: 0, opacity: 1 });
        this.$gsap.set(back, { rotationY: 180, opacity: 0 });
        this.$ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => {
            console.log(`Card ${index + 1} entered viewport`);
            this.$gsap.to(front, {
              rotationY: -180,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              delay: index * 0.5,
              overwrite: "auto",
            });
            this.$gsap.to(back, {
              rotationY: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              delay: index * 0.5,
              overwrite: "auto",
              onComplete: () => {
                this.$set(this.flipped, index, true);
                console.log(`Card ${index + 1} flipped`);
              },
            });
          },
          once: true,
        });
      });
    },
    /**
     * @description: 抖动动画，主要依靠旋转
     * @param {*} shakeImages
     * @param {*} options
     * @param {*} delay
     */
    setupShakeImages(
      shakeImages,
      options = { useScrollTrigger: true, delay: 0 }
    ) {
      const images = Array.isArray(shakeImages)
        ? shakeImages
        : [shakeImages].filter(Boolean);
      images.forEach((element, index) => {
        if (!element) {
          return;
        }
        this.$gsap.set(element, { rotation: 0 });
        // 定义抖动动画
        const shakeAnimation = () => {
          if (
            element === this.$refs.shakeImages1 &&
            element.classList.contains("shake-image-triggered")
          ) {
            console.log(
              `Shake image ${
                index + 1
              } skipped GSAP animation due to CSS trigger`
            );
            return;
          }
          this.$gsap.to(element, {
            keyframes: [
              { rotation: 0, duration: 0 },
              { rotation: -8, duration: 0.08 },
              { rotation: 8, duration: 0.08 },
              { rotation: -4, duration: 0.08 },
              { rotation: 4, duration: 0.08 },
              { rotation: 0, duration: 0.08 },
            ],
            ease: "power1.inOut",
            delay: options.delay + index * 0.2,
            overwrite: "auto",
          });
        };
        if (options.useScrollTrigger) {
          this.$ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            onEnter: () => {
              // 进入视区开始动画
              shakeAnimation();
            },
            once: true,
          });
        } else {
          shakeAnimation();
        }
      });
    },
    /**
     * @description: 同行从左到右出现的动画
     * @param {*} images
     */
    setupRowImages(images) {
      images.forEach((img, index) => {
        if (!img) {
          console.warn(`Detail image ${index + 1} ref not found`);
          return;
        }
        this.$gsap.set(img, { opacity: 0 });
        this.$ScrollTrigger.create({
          trigger: img,
          start: "top 90%",
          onEnter: () => {
            // 进入视区开始动画
            this.$gsap.to(img, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              delay: index * 0.5,
              overwrite: "auto",
            });
          },
          once: true,
        });
      });
    },
    /**
     * @description: 多行从上到下出现的动画
     * @param {*} rows
     */
    setupMultiRowImages(rows) {
      rows.forEach((row, index) => {
        if (!row) {
          console.warn(`Row ${index + 1} ref not found`);
          return;
        }
        const rowChildren = row.querySelectorAll("img");
        this.$gsap.set(rowChildren, { y: 20, opacity: 0 });
        this.$ScrollTrigger.create({
          trigger: row,
          start: "top 90%",
          onEnter: () => {
            // 进入视区开始动画
            this.$gsap.to(rowChildren, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.2,
              delay: index * 0.3,
              overwrite: "auto",
            });
          },
          once: true,
        });
      });
    },
    /**
     * @description: 弹出动画
     * @param {*} zoomElements
     */
    setupZoomInBounce(zoomElements) {
      zoomElements.forEach((el, index) => {
        if (!el) {
          console.warn(`ZoomIn element ${index + 1} ref not found`);
          return;
        }
        this.$gsap.set(el, { scale: 0, opacity: 0 });
        this.$ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            // 进入视区开始动画
            this.$gsap.to(el, {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(4)",
              delay: index * 0.2,
              overwrite: "auto",
            });
          },
          once: true,
        });
      });
    },
  },
};
</script>
