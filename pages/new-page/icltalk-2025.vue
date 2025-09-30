<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-01 10:37:18
 * @LastEditTime: 2025-09-30 16:07:41
 * @FilePath: /pages/new-page/icl-talk-2025.vue
 * @Description: 广告专用讲座专题-ver202510
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
            class="what-desc -mt-5 bg-[#000034] text-center rounded-t-[10.1px] md:rounded-t-[20px] relative z-2 pt-[34px] md:pt-[66px]"
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
        <section
          id="student"
          class="student pb-[74px] md:pb-[136px] md:mb-20 pt-[91.14px] md:pt-[172.21px]"
        >
          <div class="student-intro">
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-t1.svg"
              alt="CMER ICL"
              class="mb-3 md:mb-6 ml-[60px] md:ml-[114px] w-[210.875px] md:w-[415.986px]"
            />
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-t2.svg"
              alt="植入式隱形眼鏡-大學生及舊生特別計劃"
              class="ml-[50px] md:ml-[98px] w-[219.495px] md:w-[429.774px]"
            />
            <!-- <div class="flex relative justify-end -mt-[76px] md:-mt-[146px]"> -->
            <div class="relative -mt-[76px] md:-mt-[146px] pl-[11%]">
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-t3.svg"
                alt="升級視力，為未來做好準備"
                class="absolute left-[8.5%] -bottom-[30px] md:-bottom-[48px] z-10 w-[50.185px] md:w-[99px]"
              />
              <picture>
                <source
                  type="image/webp"
                  srcset="
                    https://statichk.cmermedical.com/smile/icl2509/icl2509-student-person@1x.webp 1x,
                    https://statichk.cmermedical.com/smile/icl2509/icl2509-student-person@2x.webp 2x
                  "
                />
                <img
                  src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-person@1x.png 1x,https://statichk.cmermedical.com/smile/icl2509/icl2509-student-person@2x.png 2x"
                  alt=""
                  class="w-full mr-2"
                />
              </picture>
            </div>
            <p
              class="text-justify text-sm md:text-xl leading-[17.742px] md:leading-[35px] tracking-[0.7px] md:tracking-[1px] mt-1 ml-[90px] md:ml-[178px] mr-[64px] md:mr-[228px]"
            >
              希瑪微笑矯視中心正式推出「ICL植入式隱形眼鏡大學生及舊生特別計劃」，讓你在選擇改善視力方式時有更大自由度，為迎接學業、職場及生活上的每一個挑戰做好準備。
            </p>
          </div>
          <div class="student-title h-[185.039px] md:h-[365.029px] md:-mt-14">
            <img
              src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-tit.svg"
              alt="特別計劃詳情"
              class="pt-11 md:pt-[84px] pl-[42px] md:pl-[82px] w-[168.933px] md:w-[333.256px]"
            />
          </div>
          <div
            class="student-desc pl-[58px] md:pl-[108px] pr-[32px] md:pr-[128px] -mt-[30px] md:-mt-20"
          >
            <p
              class="text-justify text-sm md:text-xl leading-[17.742px] md:leading-[35px] tracking-[0.7px] md:tracking-[1px]"
            >
              凡於2025年11月30日或之前成功預約術前檢查，並於2025年12月31日前完成ICL植入式隱形眼鏡手術，即可享有特定Offer。預約時，需要出示學生證或舊生證。
            </p>
            <div class="mt-6 md:mt-16 mb-10 md:mb-20">
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-s1t.svg"
                alt="合資格人士"
                class="mb-[6.52px] md:mb-[12.85px]"
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-s1i1.svg"
                alt="現正就讀全日製香港大學的大學生"
                class="mb-[11.76px] md:mb-[23.19px]"
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-s1i2.svg"
                alt="於2014年或之後入學的全日制大學畢業生"
                class="mb-[31.04px] md:mb-[61.24px]"
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-s2t.svg"
                alt="有效期"
                class="mb-[4.56px] md:mb-[8.99px]"
              />
              <img
                src="https://statichk.cmermedical.com/smile/icl2509/icl2509-student-s2i1.svg"
                alt="即日起至2025年12月31日"
              />
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=85297962992&text=我想查詢(ICLtalk-land_02)CMER ICL植入式隱形眼鏡大學生及舊生特別計劃"
            target="_blank"
            class="student-button font-black text-[#04abc8] text-center block mx-auto text-[18.249px] md:text-4xl leading-[31.936px] md:leading-[63px] tracking-[0.912px] md:tracking-[1.8px] w-[197.698px] h-[40px] md:w-[390px] md:h-[77px] mb-[18px] md:mb-9"
          >
            按此查詢特別計劃
          </a>
          <p
            class="text-[10.138px] md:text-xl leading-[17.742px] md:leading-[35px] tracking-[0.507px] md:tracking-[1px] text-center whitespace-nowrap"
          >
            *如有任何爭議，希瑪醫療控股有限公司保留最終決定權
          </p>
        </section>
        <ShareSection
          class="share"
          themeColor="#3BD7F1"
          bgColor="#000034"
          titleColor="#fff"
          title="同朋友一齊聽講座啦！"
        />
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
    <Backtop
      background="linear-gradient(180deg, #00d6ff 15%, #008098 100%)"
      text="TOP"
      :bottom="150"
    />
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
.student {
  background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-bg-student.png")
    no-repeat;
  background-position: top center;
  background-size: cover;
  &-title {
    background: url("https://statichk.cmermedical.com/smile/icl2509/icl2509-student-bgtit.png")
      no-repeat;
    background-size: contain;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 210.499px;
      height: 206.811px;
      right: 0;
      top: -40px;
      background: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM5NSIgaGVpZ2h0PSI1NTkiIHZpZXdCb3g9IjAgMCAzOTUgNTU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTQ1NzZfNzMxOSkiPgo8cGF0aCBkPSJNNDgxLjIzNiAyOTEuNjExQzQ4MS4yMzYgMjkxLjYxMSA0ODEuMDI0IDI5MS41MDUgNDgwLjc4OSAyOTEuMzIzQzQ4MC42NiAyOTEuMTkyIDQ4MC40NDcgMjkxLjA4NSA0ODAuMzQzIDI5MS4wMzZDNDc3LjI0NCAyODguODI0IDQ2Ni45MTEgMjgwLjYwMyA0NjEuNDM0IDI2My45OThDNDU0LjkxOSAyNDQuMjMxIDQ0Ny4xOTcgMjIyLjQxMiA0NDcuMTk3IDIyMi40MTJDNDQ3LjE5NyAyMjIuNDEyIDQ0MC4zOTYgMjAwLjE5NyA0MzMuOTA2IDE4MC41MTNDNDI4LjQzNCAxNjMuOTEgNDMxLjgzNiAxNTEuMTAzIDQzMy4wMDIgMTQ3LjQ2M0M0MzMuMDMyIDE0Ny4yNzggNDMzLjE1OSAxNDcuMTQ1IDQzMy4xODkgMTQ2Ljk2QzQzMy4zNDUgMTQ2LjY0MSA0MzMuMzc1IDE0Ni40NTYgNDMzLjM3NSAxNDYuNDU2TDQzMy4zNDcgMTQ2LjM3OUM0MzQuNjc1IDE0Mi40MjQgNDM0Ljc5MiAxMzcuOTk1IDQzMy4zODYgMTMzLjcyOEM0MjkuODk0IDEyMy4xMzQgNDE4LjQ0MyAxMTcuMzkyIDQwNy44NiAxMjAuOTI2QzMzMS4wOTQgMTQ4LjY3NSAyOTEuMzk4IDE1Mi45ODggMjkxLjM5OCAxNTIuOTg4QzI3Ny4zNTIgMTUzLjk5OCAyNTkuMDY3IDE1Ny44MjIgMjM5LjcxNyAxNjQuMjg2QzIyMC4zNjYgMTcwLjc1IDIwMy40MzcgMTc4LjY4OSAxOTEuNTc5IDE4Ni4zMzhDMTkxLjU3OSAxODYuMzM4IDE1Ny4yMDIgMjA2Ljc3NyA3OS4xODU2IDIzMC43MzFDNjguNjAzMSAyMzQuMjY1IDYyLjgzNjkgMjQ1Ljc2IDY2LjMyODcgMjU2LjM1NEM2Ny43MzUgMjYwLjYyMSA3MC40NTkgMjY0LjEwMSA3My44NzE5IDI2Ni40NzNMNzMuODk5NSAyNjYuNTUxQzczLjg5OTUgMjY2LjU1MSA3NC4xMTE2IDI2Ni42NTcgNzQuMzQ2NSAyNjYuODM4Qzc0LjQ3NjQgMjY2Ljk3IDc0LjY4ODUgMjY3LjA3NyA3NC43OTM0IDI2Ny4xMjZDNzcuODkxOSAyNjkuMzM4IDg4LjIyNSAyNzcuNTU5IDkzLjcwMTkgMjk0LjE2NEMxMDAuMjE3IDMxMy45MyAxMDcuOTM5IDMzNS43NSAxMDcuOTM5IDMzNS43NUMxMDcuOTM5IDMzNS43NSAxMTQuNzQgMzU3Ljk2NSAxMjEuMjMgMzc3LjY0OUMxMjYuNzAyIDM5NC4yNTEgMTIzLjMgNDA3LjA1OSAxMjIuMTM0IDQxMC42OTlDMTIyLjEwNCA0MTAuODg0IDEyMS45NzcgNDExLjAxNyAxMjEuOTQ3IDQxMS4yMDJDMTIxLjc5MSA0MTEuNTIgMTIxLjc2MSA0MTEuNzA1IDEyMS43NjEgNDExLjcwNUwxMjEuNzg5IDQxMS43ODNDMTIwLjQ2MSA0MTUuNzM4IDEyMC4zNDQgNDIwLjE2NyAxMjEuNzUgNDI0LjQzNEMxMjUuMjQyIDQzNS4wMjggMTM2LjY5MyA0NDAuNzcgMTQ3LjI3NiA0MzcuMjM2QzIyNC4wNDIgNDA5LjQ4NiAyNjMuNzM4IDQwNS4xNzQgMjYzLjczOCA0MDUuMTc0QzI3Ny43ODMgNDA0LjE2NCAyOTYuMDY5IDQwMC4zNCAzMTUuNDE5IDM5My44NzZDMzM0Ljc3IDM4Ny40MTIgMzUxLjY5OSAzNzkuNDczIDM2My41NTcgMzcxLjgyNEMzNjMuNTU3IDM3MS44MjQgMzk3LjkzNCAzNTEuMzg1IDQ3NS45NSAzMjcuNDMxQzQ4Ni41MzMgMzIzLjg5NyA0OTIuMjk5IDMxMi40MDIgNDg4LjgwNyAzMDEuODA4QzQ4Ny40MDEgMjk3LjU0MSA0ODQuNjc3IDI5NC4wNjEgNDgxLjIzNiAyOTEuNjExWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTg4LjgxOTIgMjQ5LjkwOUM4OS43NDk2IDI0OC4xNTkgODkuMDkwNCAyNDUuOTg4IDg3LjM0NjggMjQ1LjA2MkM4NS42MDMxIDI0NC4xMzUgODMuNDM1NCAyNDQuODAzIDgyLjUwNSAyNDYuNTUzQzgxLjU3NDYgMjQ4LjMwNCA4Mi4yMzM4IDI1MC40NzQgODMuOTc3NCAyNTEuNDAxQzg1LjcyMTEgMjUyLjMyOCA4Ny44ODg4IDI1MS42NiA4OC44MTkyIDI0OS45MDlaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMzU5LjU2NyAzMjIuNjY5QzM4My43NjIgMjc3LjE0OCAzNjYuNjE5IDIyMC43MDkgMzIxLjI3NiAxOTYuNjA5QzI3NS45MzQgMTcyLjUwOSAyMTkuNTYzIDE4OS44NzMgMTk1LjM2OCAyMzUuMzkzQzE3MS4xNzMgMjgwLjkxNCAxODguMzE2IDMzNy4zNTMgMjMzLjY1OCAzNjEuNDUzQzI3OSAzODUuNTUzIDMzNS4zNzIgMzY4LjE4OSAzNTkuNTY3IDMyMi42NjlaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMzk1LjUyNiAxNTYuMDU0QzQxNC43NzggMTc0LjU4IDQyOS45MzcgMTk3Ljk2MiA0MzguOTA4IDIyNS4xODJDNDUxLjc4NCAyNjQuMjM4IDQ0OS43NzMgMzA0LjY2NSA0MzUuOTE4IDM0MC4yNzgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0zNjcuNjYzIDEzNC4zNkMzNzcuNjMyIDE0MC41NzQgMzg2Ljk4IDE0Ny44MzkgMzk1LjUxNyAxNTYuMDUzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTg3LjI5MiA0MjMuNzc4QzE1NC44NDggNDAzLjU0OCAxMjkuMDA3IDM3Mi4yNDggMTE2LjA1MSAzMzIuOTU1QzEwMy4xNzQgMjkzLjg5OCAxMDUuMTg1IDI1My40NzEgMTE5LjA0IDIxNy44NTgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xNzkuNTUgMzExLjc0NUMxNzguOTMgMzA5Ljg2NyAxNzYuOTA3IDMwOC44NTIgMTc1LjAzIDMwOS40NzhDMTczLjE1MyAzMTAuMTA1IDE3Mi4xMzQgMzEyLjEzNyAxNzIuNzUzIDMxNC4wMTZDMTczLjM3MyAzMTUuODk0IDE3NS4zOTYgMzE2LjkwOSAxNzcuMjczIDMxNi4yODJDMTc5LjE1IDMxNS42NTYgMTgwLjE2OSAzMTMuNjI0IDE3OS41NSAzMTEuNzQ1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTM4Mi4xOTggMjQ0LjA1MUMzODEuNTc5IDI0Mi4xNzIgMzc5LjU1NSAyNDEuMTU3IDM3Ny42NzkgMjQxLjc4NEMzNzUuODAyIDI0Mi40MTEgMzc0Ljc4MiAyNDQuNDQyIDM3NS40MDIgMjQ2LjMyMUMzNzYuMDIxIDI0OC4yIDM3OC4wNDUgMjQ5LjIxNCAzNzkuOTIyIDI0OC41ODhDMzgxLjc5OCAyNDcuOTYxIDM4Mi44MTggMjQ1LjkyOSAzODIuMTk4IDI0NC4wNTFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjgwLjk4MyAyNzcuOTUyQzI4MC4zNjQgMjc2LjA3NCAyNzguMzQgMjc1LjA1OSAyNzYuNDY0IDI3NS42ODZDMjc0LjU4NyAyNzYuMzEyIDI3My41NjggMjc4LjM0NCAyNzQuMTg3IDI4MC4yMjNDMjc0LjgwNiAyODIuMTAxIDI3Ni44MyAyODMuMTE2IDI3OC43MDcgMjgyLjQ4OUMyODAuNTg0IDI4MS44NjMgMjgxLjYwMyAyNzkuODMxIDI4MC45ODMgMjc3Ljk1MloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0zNDUuNDggMTQyLjAzN0MzNDUuNDggMTQyLjAzNyAzNDEuOTc4IDE1MS44OTMgMzE0LjAyMyAxNjEuMjM3QzI4Ni4wNzEgMTcwLjU3NSAyNzUuODI4IDE2NS4wNDIgMjQ2Ljc2NyAxNzQuNzUxQzIxNy43MDYgMTg0LjQ1OSAyMTIuNzg2IDE5NS4wNTUgMTg0LjgyNyAyMDQuMzk2QzE1Ni44NzUgMjEzLjczNCAxNDguMjA3IDIwNy45NDEgMTQ4LjIwNyAyMDcuOTQxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNDEzLjU0MiAzNDguNDU5QzQxMy41NDIgMzQ4LjQ1OSA0MDQuODgxIDM0Mi42NjQgMzc2LjkyMiAzNTIuMDA0QzM0OC45NyAzNjEuMzQyIDM0NC4wNDMgMzcxLjk0MSAzMTQuOTgyIDM4MS42NDlDMjg1LjkyMSAzOTEuMzU4IDI3NS42ODIgMzg1LjgyOCAyNDcuNzI2IDM5NS4xNjRDMjE5Ljc3NCA0MDQuNTAyIDIxNi4yNjkgNDE0LjM2MyAyMTYuMjY5IDQxNC4zNjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTQ1NzZfNzMxOSI+CjxyZWN0IHdpZHRoPSI0MTUuMjUzIiBoZWlnaHQ9IjQwNy45NzkiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDM2Ni42NzYpIHJvdGF0ZSgtNjIuMDA4NCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K")
        no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  &-button {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOTAiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCAzOTAgNzciIGZpbGw9Im5vbmUiPgogIDxwYXRoIGQ9Ik0wIDBMMzkwIDBWMzkuMzI2OEMzOTAgNjAuMTIgMzczLjIzOCA3NyAzNTIuNTkgNzdIMFYwWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+");
    background-position: top;
    background-size: cover;
    overflow: hidden;
    position: relative;
    border-bottom-right-radius: 17px;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 3.5px;
      width: 50%;
      background-color: #000034;
      animation: ButtonFlow 2.5s ease infinite;
    }
  }
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
  .student {
    &-title {
      &::before {
        width: 415.253px;
        height: 407.979px;
        top: -90px;
      }
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
import Backtop from "@/components/commom/Backtop/Backtop.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    FooterMobile,
    PageNavigation,
    ShareSection,
    Backtop,
  },
  data() {
    return {
      flipped: [false, false, false], // 控制每张卡片的翻转状态
      navList: [
        { id: "intro", label: "講座活動簡介" },
        { id: "detail", label: "講座活動詳情" },
        { id: "highlight", label: "講座活動亮點" },
        { id: "what", label: "ICL植入式隱形眼鏡是什麼?" },
        { id: "student", label: "ICL 大學生及舊生計劃" },
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
