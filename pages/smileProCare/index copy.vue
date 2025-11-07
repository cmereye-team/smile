<template>
  <div class="lasik">
   
  <HeadV2 />
   

   

    <div class="smile-banner">
      <img
        class="smile-banner__image"
        decoding="async"
        alt="SMILE Pro Care 限時禮品"
        loading="lazy"
        srcset="
          https://statichk.cmermedical.com/smile/smileProCare/banner-mobile.webp?V2 400w,
          https://statichk.cmermedical.com/smile/smileProCare/banner-mobile.webp?V2 768w,
          https://statichk.cmermedical.com/smile/smileProCare/banner-pc.webp
        "
        sizes="(max-width: 992px) 100vw, 1216px"
        style="pointer-events: none"
      />

     <div>
         <div class="smile-banner__text-wrap">
        <div class="smile-banner__container">
          <div class="smile-banner__title">
            <div class="smile-banner__title-row">
              <span class="smile-banner__title-main">SMILE Pro Care</span>
              <span class="smile-banner__title-sub">限時禮品</span>
            </div>

            <h3 class="smile-banner__heading">限量版便攜式咖啡機</h3>

            <p class="smile-banner__description">
              是希瑪微笑矯視中心為對SMILE
              Pro微笑激光矯視有興趣的人而設的另一個選擇。
            </p>

            <!-- 剩餘數量顯示 -->
            <div class="smile-banner__counter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                class="smile-banner__counter-icon"
              >
                <path
                  d="M1.3125 17.0625C1.3125 17.7885 1.89902 18.375 2.625 18.375H9.1875V11.8125H1.3125V17.0625ZM11.8125 18.375H18.375C19.101 18.375 19.6875 17.7885 19.6875 17.0625V11.8125H11.8125V18.375ZM19.6875 5.25H17.9607C18.215 4.75371 18.375 4.2041 18.375 3.60938C18.375 1.62012 16.7549 0 14.7656 0C13.0594 0 11.9561 0.873633 10.541 2.80137C9.12598 0.873633 8.02266 0 6.31641 0C4.32715 0 2.70703 1.62012 2.70703 3.60938C2.70703 4.2041 2.86289 4.75371 3.12129 5.25H1.3125C0.586523 5.25 0 5.83652 0 6.5625V9.84375C0 10.2047 0.295312 10.5 0.65625 10.5H20.3438C20.7047 10.5 21 10.2047 21 9.84375V6.5625C21 5.83652 20.4135 5.25 19.6875 5.25ZM6.3123 5.25C5.40586 5.25 4.67168 4.51582 4.67168 3.60938C4.67168 2.70293 5.40586 1.96875 6.3123 1.96875C7.12852 1.96875 7.73145 2.1041 9.84375 5.25H6.3123ZM14.7656 5.25H11.2342C13.3424 2.1123 13.9289 1.96875 14.7656 1.96875C15.6721 1.96875 16.4062 2.70293 16.4062 3.60938C16.4062 4.51582 15.6721 5.25 14.7656 5.25Z"
                  fill="#0A2342"
                />
              </svg>
              <span class="smile-banner__counter-label">尚餘數量:</span>
              <span class="smile-banner__counter-value" id="remaining-items"
                >{{ randomNumber }}</span
              >
              <span class="smile-banner__counter-unit">部</span>
            </div>
          </div>

          <div class="smile-banner__gift-link">
            <a
              href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(WSPC-2025)%20%E5%B8%8C%E7%91%AASMILE%20Pro%20Care%E7%9F%AF%E8%A6%96%E7%A6%AE%E5%93%81%E8%A8%88%E5%8A%83"
              class="smile-banner__gift-link-inner"
            >
              <img
                src="https://statichk.cmermedical.com/smile/smileProCare/banner-img.png"
                alt="立即了解 SMILE Pro Care 禮品計劃"
                class="smile-banner__gift-image"
              />
              <div class="smile-banner__gift-text">
                <span class="smile-banner__gift-text-main">立即了解</span>
                <span class="smile-banner__gift-text-sub">SMILE Pro Care</span>
                <span class="smile-banner__gift-text-detail">禮品計劃</span>
              </div>
            </a>
          </div>

          <div href="#" @click="scrollToSection('section2')"  class="smile-banner__scroll-indicator">
            <div class="smile-banner__scroll-text">
              <span>下滑了解</span>
              <span>禮品計劃</span>
            </div>
            <img
              src="https://statichk.cmermedical.com/smile/smileProCare/banner-img2.png"
              alt="下滑指示"
              class="smile-banner__scroll-icon animate-bounce"
            />
          </div>
        </div>
      </div>
     </div>
    </div>

    <!-- start 服務介紹-->
    <section id="section2" class="about-section">
      <div class="about-section__container">
        <div class="about-section__content">
          <h2 class="about-section__title">
            <span>SMILE Pro Care</span>
            <span>微笑激光矯視</span>
          </h2>
          <p class="about-section__description">
            是希瑪微笑矯視中心為對SMILE
            Pro微笑激光矯視有興趣的人而設的另一個選擇。<br />
            SMILE Pro Care微笑激光矯視與SMILE Pro微笑激光<br
              class="md:hidden"
            />矯視使用同樣的技術進行矯視過程，所以
            <br class="hidden md:block" />
            SMILE Pro Care同樣可矯正近視、散光及老花；<br
              class="md:hidden"
            />同時可感受矯視過程短及<br class="md:hidden" />康復時間短的特點。
          </p>
          <div class="about-section__image">
            <img
              class=""
              srcset="
                https://pic1.imgdb.cn/item/690a6fe83203f7be00d20d88.png               400w,
                https://pic1.imgdb.cn/item/690a6fe83203f7be00d20d88.png               768w,
                https://statichk.cmermedical.com/smile/smileProCare/section2-img.webp
              "
              sizes="(max-width: 992px) 100vw, 1216px"
              style="pointer-events: none"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- end 服務介紹-->

    <!-- 服務對比 -->
    <section class="py-16 md:py-24 bg-[#F5F5F7]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center md:mb-16">
          <h2
            class="text-xl md:text-4xl font-bold text-[#0A2342] mb-6 md:text-nowrap"
          >
            SMILE Pro Care與SMILE Pro <br class="md:hidden" />有什麼分別?
          </h2>
        </div>

        <div class="max-w-5xl mx-auto overflow-x-auto">
          <table class="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr class="bg-zeissBlue text-white">
                <th
                  class="px-2 py-2 md:px-6 md:py-4 text-center rounded-tl-xl bg-[#0A2342] text-base md:text-lg text-nowrap md:text-start"
                >
                  
                </th>
                <th
                  class="px-2 py-2 md:px-6 md:py-4 text-center bg-[#4570B6] text-base md:text-lg text-nowrap"
                >
                  SMILE Pro Care<br class="md:hidden" />
                  微笑激光矯視
                </th>
                <th
                  class="px-2 py-2 md:px-6 md:py-4 text-center rounded-tr-xl bg-[#0A2342] text-base md:text-lg text-nowrap"
                >
                  SMILE Pro<br class="md:hidden" />微笑激光矯視
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50 transition-colors">
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] text-base text-center md:text-lg text-nowrap md:text-start "
                >
                  眼睛<br class="md:hidden" />水潤護理
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center bg-red text-lg text-[#333333] font-bold"
                >
                  1次
                </td>
                <td class="px-2 py-2 md:px-6 md:py-4 text-center text-lg text-[#333333]">
                  1次
                </td>
              </tr>
              <tr class="hover:bg-gray-50 transition-colors">
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] text-base md:text-lg md:text-start"
                >
                  術後眼部彩光護理
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center  text-base md:text-lg text-[#165DFF] font-bold"
                >
                  1次
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333]"
                >
                  /
                </td>
              </tr>
              <tr
                class="hover:bg-gray-50 transition-colors text-base md:text-lg"
              >
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] text-base md:text-lg md:text-start"
                >
                  眼科專科醫生檢查
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333] font-bold"
                >
                  包含
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333]"
                >
                  包含
                </td>
              </tr>
              <tr class="hover:bg-gray-50 transition-colors">
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] text-base md:text-lg md:text-start"
                >
                  術後覆診(一年內)
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-zeissLightBlue font-medium text-base md:text-lg text-[#165DFF] font-bold"
                >
                  5次
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333]"
                >
                  3次
                </td>
              </tr>
              <tr class="hover:bg-gray-50 transition-colors">
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] text-base md:text-lg md:text-start"
                >
                  增進手術
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333] font-bold"
                >
                  包含
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333]"
                >
                  包含
                </td>
              </tr>
              <tr class="hover:bg-gray-50 transition-colors">
                <td
                  class="px-2 py-2 md:px-6 md:py-4 font-medium text-[#0A2342] rounded-bl-xl text-base md:text-lg text-center md:text-start"
                >
                  無限<br class="md:hidden" />視光檢查
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333] font-bold"
                >
                  包含
                </td>
                <td
                  class="px-2 py-2 md:px-6 md:py-4 text-center text-base md:text-lg text-[#333333]"
                >
                  包含
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!-- 服務對比 -->

    <!-- start SMILE Pro Care 專享福利-->
    <section class="benefits-section">
      <div class="benefits-section__wrapper">
        <img
          class="benefits-section__background"
          decoding="async"
          alt="SMILE Pro Care 專享福利背景"
          loading="lazy"
          srcset="
            https://statichk.cmermedical.com/smile/smileProCare/s4-bg-mobile.webp 400w,
            https://statichk.cmermedical.com/smile/smileProCare/s4-bg-mobile.webp 768w,
            https://statichk.cmermedical.com/smile/smileProCare/s4-bg-pc.webp
          "
          sizes="(max-width: 992px) 100vw, 1216px"
        />

        <div class="benefits-section__content">
          <div class="benefits-section__header">
            <div class="benefits-section__title">SMILE Pro Care 專享福利</div>
            <div class="benefits-section__subtitle">
              選擇升級服務，即享三重額外福利，為您的矯視體驗加分！
            </div>
          </div>

          <div class="benefits-section__benefits-grid">
            <div class="benefits-section__benefit-item">
              <div class="benefits-section__benefit-content">
                <span class="benefits-section__benefit-text">術後眼部</span>
                <span class="benefits-section__benefit-text">彩光護理</span>
              </div>
              <div class="benefits-section__benefit-badge">+1</div>
            </div>

            <div class="benefits-section__benefit-item">
              <div class="benefits-section__benefit-content">
                <span class="benefits-section__benefit-text">術後覆診</span>
              </div>
              <div class="benefits-section__benefit-badge">+2</div>
            </div>
          </div>
        </div>

        <div class="benefits-section__gift-card">
          <div>
            <div
              class="benefits-section__gift-info benefits-section__gift-info--left"
            >
              <span
                class="benefits-section__gift-text benefits-section__gift-text--normal"
                >便攜式咖啡機</span
              >
              <span
                class="benefits-section__gift-text benefits-section__gift-text--bold"
                >現時預約更有</span
              >
              <span
                class="benefits-section__gift-text benefits-section__gift-text--thin"
                >乙部</span
              >
            </div>

            <div
              class="benefits-section__gift-info benefits-section__gift-info--right"
            >
              <span
                class="benefits-section__gift-text benefits-section__gift-text--thin"
                >數量有限</span
              >
              <span
                class="benefits-section__gift-text benefits-section__gift-text--thin"
                >送完即止*</span
              >
            </div>

            <div class="benefits-section__limited-badge">限量版</div>
          </div>
        </div>
      </div>
    </section>
    <!-- end SMILE Pro Care 專享福利 -->

    <!-- start 如何選擇 -->
    <div class="how-to-choose">
      <h3 class="how-to-choose__title">如何選擇?</h3>
      <p class="how-to-choose__description">
        SMILE Pro Care微笑激光矯視最適合<span class="how-to-choose__description--bold">重視矯視體驗</span>，
        又希望一個價錢有更長遠的保障，讓眼睛享受更多的你。
      </p>

      <a
        href="https://api.whatsapp.com/send/?phone=85297962992&amp;text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(WSPC-01)%20%E5%B8%8C%E7%91%AASMILE%20Pro%20Care%E7%9F%AF%E8%A6%96"
        class="how-to-choose__button"
      >
        立即預約SMILE Pro Care
      </a>
    </div>

    <div class="service-tip">
 
      <div class="service-tip__right">
        * 由於SMILE Pro
        Care限時禮品「限量版便攜式咖啡機」數量有限，將以先到先得形式派發，並將於完成手術後派發。如有任何爭議，希瑪醫療控股有限公司保留最終決定權。
      </div>
    </div>
    <!-- end 如何選擇 -->

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
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import topNotice from '@/components/Publice/topNotice.vue'
import HeadV2 from "@/components/Publice/HeadeV2.vue";

import Footer from "@/components/commom/new_foot/Footer.vue";
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
    topNotice,
    Head,
    Footer,
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
          content: "SMILE PRO 微笑矯視 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "SMILE PRO 微笑矯視 - 希瑪微笑矯視中心",
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
  data() {
    return {
         randomNumber: 0,
      minValue: 1,
      maxValue: 40,
      interval: 1000,
      timer: null,
      history: [],
      isMobile: false,
      isPCNEW: true,
      activeStep: 0, // 当前激活的步骤索引
      activeStepTimer: null,
      interval: 3000,
      steps: [
        {
          number: "01",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro1.avif",
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro1.avif",
          text: "以「視軸輔助導航」功能為視軸中心點定位",
        },
        {
          number: "02",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro2.avif",
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro2.avif",
          text: "全飛秒激光直接切割角膜中層",
        },
        {
          number: "03",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro3.avif",
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro3.avif",
          text: "<style>@media screen and (min-width: 992px) {.changehon{display: block;}</style>製作一個約<span class='changehon'>2-2.5mm的小切口</span>",
        },
        {
          number: "04",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro4.avif",
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/intro/icl-pc-intro4.avif",
          text: "將切割了的角膜透鏡從切口抽出",
        },
      ],

      suitable_object: [
        {
          img: "https://static.cmereye.com/imgs/2024/04/1acfa98b56345500.png",
          text: [
            this.$t("Correct.icl.suitable_object.content1.text1"),
            this.$t("Correct.icl.suitable_object.content1.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/2c2272ff6b7052c6.png",
          text: [
            this.$t("Correct.icl.suitable_object.content2.text1"),
            this.$t("Correct.icl.suitable_object.content2.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/56f73174b86b2288.png",
          text: [this.$t("Correct.icl.suitable_object.content3.text1")],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/9f4ca0776e175624.png",
          text: [
            this.$t("Correct.icl.suitable_object.content4.text1"),
            this.$t("Correct.icl.suitable_object.content4.text2"),
          ],
        },
        {
          img: "https://static.cmereye.com/imgs/2024/04/7a55c233d701d0eb.png",
          text: [
            this.$t("Correct.icl.suitable_object.content5.text1"),
            this.$t("Correct.icl.suitable_object.content5.text2"),
          ],
          mbText: [
            this.$t("Correct.icl.suitable_object.content5.mbText1"),
            this.$t("Correct.icl.suitable_object.content5.mbText2"),
          ],
        },
      ],

      swiperOption1: {
        spaceBetween: 60,
        slidesPerView: 5,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            // 初始化时绑定事件
            this.el.addEventListener("mouseenter", () => {
              this.autoplay.stop(); // 鼠标移入时停止自动播放
            });
            this.el.addEventListener("mouseleave", () => {
              this.autoplay.start(); // 鼠标移出时重新开始自动播放
            });
          },
        },
        breakpoints: {
          992: {
            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            },
            loop: true,
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      },
      windowWidth: 0,
      swiperOption2: {
        spaceBetween: 60,
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      ShareData: [
        {
          type: "SMILE Pro",
          href: "https://youtu.be/Z5ut-9tIhmo",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-sarah@1x.avif",
          text: ["唔洗矇查查周圍搵眼鏡"],
          nameEn: "Sarah",
          nameCn: "李蒨怡",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/857FwJQu7OA",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-jay@1x.avif",
          text: ["無咗眼鏡都一樣做到唔", "同活動"],
          nameEn: "Jay",
          nameCn: "沈以諾",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/TBI6J31JwJQ",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem2.avif",
          text: ["做咗就可以好似我依家", "咁方便㗎喇"],
          nameEn: "Carmen",
          nameCn: "倪嘉雯",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/vxeN1wXeZ5M",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem3.avif",
          text: ["好舒服之下就完成咗成", "個過程"],
          nameEn: "Maggie",
          nameCn: "米姬",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/10KYv_gGgWM",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem5.avif",
          text: ["無哂Con帶嚟嘅麻煩，", "促進咗眼神交流"],
          nameEn: " ",
          nameCn: "Anson Au",
        },

        {
          type: "SMILE Pro",
          href: "https://www.youtube.com/watch?v=1p5Qm_772jI",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem7.avif",
          text: ["做完SMILE Pro", "上舞台都唔會驚光"],
          nameEn: " ",
          nameCn: "細貓",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/kVEJ-PN4AJo",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem8.avif",
          text: ["我問自己點解唔早啲做", "SMILE Pro呢!"],
          nameEn: " ",
          nameCn: "Cindy Wong",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/VoGlE1dJPhc",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem9.avif",
          text: ["做完幾個月視力都維持", "到非常之清"],
          nameEn: "Pinky",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/1Ic0z7wiVv8",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem10.avif",
          text: ["唔洗花時間戴Con，可", "以直接出門練習，非常", "方便"],
          nameEn: "Tiffany",
          nameCn: "鄧伊程",
        },
      ],

      canonicalHref: "https://smile.hkcmereye.com/smilePro",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/smilePro",
      browserTitle: "SMILE PRO 微笑矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "SMILE PRO 微笑矫视 - 希玛微笑矫视中心",
    };
  },
  watch: {
   
  },
  methods: {
     generateRandom() {
      const range = this.maxValue - this.minValue + 1;
      this.randomNumber = Math.floor(Math.random() * range) + this.minValue;
      
      // 添加到歷史記錄
      this.history.unshift(this.randomNumber);
      if (this.history.length > 10) {
        this.history.pop();
      }
    },
    
    startRandom() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        this.generateRandom();
      }, this.interval);
    },
    
    stopRandom() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    scrollToSection(sectionId) {
        console.log(9999)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    scrollToTopV2New() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    nextEl() {
      this.mySwiper.slideNext();
      console.log(1);
    },
    prevEl() {
      this.mySwiper.slidePrev();
    },

    checkDeviceType() {
      this.isDesktop = window.innerWidth > 768;
    },

    highlightStep(index) {
      this.activeStep = index; // 更新当前激活的步骤
      this.stopTimer();
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
    // 开始计时
    startTimer(customInterval) {
      if (!this.activeStepTimer) {
        const interval = customInterval || this.interval;
        this.activeStepTimer = setInterval(() => {
          this.activeStep++;
          if (this.activeStep > 3) {
            this.activeStep = 0; // 超过 4 时回到 0
          }
        }, interval);
      }
    },
    stopTimer() {
      if (this.activeStepTimer) {
        clearInterval(this.activeStepTimer);
        this.activeStepTimer = null;
      }
    },
  },

  // beforeDestroy() {
  //   window.removeEventListener("resize", this.checkDeviceType);
  // },
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
    if (window.innerWidth > 992) {
    }

    this.generateRandom();
 

    // 启动计时
    this.startTimer();
    // 获取容器和内容

    const shaerwidth = this.$refs.caseSharingList;
    if (shaerwidth) {
      const contentWidth = shaerwidth.scrollWidth; // 内容总宽度
      const containerWidth = shaerwidth.clientWidth; // 容器可见宽度

      // 计算滚动到中间的位置
      const scrollLeft = (contentWidth - containerWidth) / 2;
      // 设置滚动位置
      shaerwidth.scrollLeft = scrollLeft;
    }
  },
  beforeUnmount(){
    this.stopRandom();

    // 清理動態添加的樣式

  
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
.smile-banner__title {
font-family: Poppins, sans-serif;
}   
@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .service-tip {
    display: flex;
    gap: 45px;
    margin-bottom: -134px;
 
    
  }
  .service-tip__left {
 
  }
  .service-tip__right {
    color: #4b5563;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    margin-top: 64px;
  }
}

@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .service-tip {
  }
  .service-tip__left {
    max-width: 684px;
    width: 558.38px;
    display: block;
  }
}

// @media screen and (min-width:1000px){
//     .new-container {
//     max-width: 1010px !important;
//     margin-left: auto;
//     margin-right: auto;
//   }
//      .service-tip{

//   }
//      .service-tip__left{
//     max-width: 684px;
//     width:488.86px;
//     display: block;
//   }
//   .service-tip__right{
//     color: #4B5563;
// font-family: Inter;
// font-size: 10px;
// font-style: normal;
// font-weight: 400;
// line-height: 14px; /* 140% */
//     max-width: 500px;
//     margin-top: 64px;

//   }
// }

@media screen and (max-width: 1140px) {
  .smile-NewBanner {
    // 80
    margin-top: 80px;
    position: relative;
    img {
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: 58px;
      left: 28px;
      top: 31px;
      //   span {
      //     font-style: normal;
      //     color: #4570b6;
      //     font-family: "Poppins", sans-serif;
      //     font-size: 45.469px;
      //     font-style: normal;
      //     font-weight: 700;
      //     line-height: 49.743px;
      //   }
      h3 {
      }
      p {
      }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        padding: 5px 20px 0px 10px;
        display: inline-block;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 5px 20px 11px 10px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px;
      }
    }
  }

  .icl-WhatChoose {
    padding: 40px 15px;
    .icl-WhatChoose-title {
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: 24.567px;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      max-width: 100vw;
      margin-top: 30px;

      .icl-WhatChoose-content-one-img {
      }
      .icl-WhatChoose-content-one-text {
        margin: 0 auto;
        max-width: 100vw;
        margin-top: 30px;
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 30px;
          letter-spacing: 4.8px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 4.8px;
          }
        }
      }
    }

    .icl-WhatChoose-content-two {
      margin: 0 auto;
      max-width: 100vw;
      & > div {
        margin-top: 30px;
        border-radius: 7.168px;
        background: #f4fafc;
        padding: 27px 32px 27px 34px;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 24px;
          font-style: normal;
          font-weight: 900;
          line-height: 21.505px; /* 89.603% */
          margin-bottom: 15px;
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 25.089px; /* 156.805% */
          letter-spacing: 4.8px;
        }
      }
    }
  }
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

  // 案例分享
  .CaseSharing {
    margin-top: 40px;
    margin-bottom: 30px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-mobile-share.avif")
      no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 86px 0 110px;
    position: relative;

    .CaseSharing-Box {
      position: relative;
      h3 {
        position: absolute;
        top: -40px;
        right: 30px;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px;
      }
      .CaseSharing-list::-webkit-scrollbar {
        display: none;
      }
      .CaseSharing-list {
        display: flex;

        justify-content: center;
        gap: 13.26px;
        width: 100vw;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 121px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 170px;
        }
        .CaseSharing-list-item {
          & > a {
            display: block;
            width: 175px;
            box-shadow: -1.768px 1.768px 0px 0px #4570b6;

            position: relative;
            margin-bottom: 13.26px;
            span {
              position: absolute;
              left: 8px;
              bottom: 8px;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 13.263px;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 4px 6px;
            }
            i {
              position: absolute;
              right: 8px;
              bottom: 8px;
              width: 23px;
              height: 23px;
              border-radius: 2.21px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 11px;
              }
            }
          }
        }
      }
    }

    .CaseSharing-btn {
      width: 114.287px;
      height: 113.922px;

      position: absolute;
      bottom: 0px;
      right: 0;
    }
  }

  .latestNews {
    margin-bottom: 40px;
    background: url("https://statichk.cmermedical.com/smile/smileproV2/icl-newdongtai-mobile.jpg")
      no-repeat;
    background-size: cover;
    position: relative;
    height: 209vw;
    // padding-top: 130px;
    padding-top: 33.33vw;

    .top-btnV2new {
      position: absolute;
      bottom: 20px;
      right: 15px;
    }

    .latestNews-tip {
      position: absolute;
      // top: 55px;
      top: 14.1vw;
      left: 0;
      background: #c13550;
      color: #fff;
      font-family: "Noto Sans TC";
      // font-size: 20px;
      font-size: 5.12vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.95;
      padding: 5px 24px;
    }

    .latestNews-in {
      // width: 252px;
      width: 64.61vw;
      margin: 0 auto;
      .latestNews-title {
        color: #c13550;
        font-family: "Poppins", sans-serif;
        // font-size: 20.81px;
        font-size: 5.12vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.58;
        i {
          font-style: normal;
          display: block;
        }
        span {
          margin-left: 26px;
          margin-right: 4px;
          display: inline-block;
          color: #fff;
          font-family: "Poppins", sans-serif;
          // font-size: 20.81px;
          font-size: 5.1vw;
          font-style: normal;
          font-weight: 700;
          // line-height: 33px;
          line-height: 1.65;
          background: #c13550;
          padding: 0 5px;
        }
      }
      p {
        margin-top: 9px;
        color: #6d6e71;
        text-align: justify;
        font-family: "Noto Sans TC";
        // font-size: 16px;
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.48;
        letter-spacing: 3.2px;
      }
    }

    .latestNews-btn {
      border: 1px solid #c13550;
      border-radius: 50%;
      // width: 172px;
      // height: 172px;

      width: 44.1vw;
      height: 44.1vw;
      margin-top: 24px;
      margin-left: auto;
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 17px;
      svg {
        // width: 19px;
        // height: 19px;
        width: 4.84vw;
        height: 4.87vw;
      }

      span {
        color: #c13550;
        text-align: center;
        font-family: "Noto Sans TC";
        // font-size: 18.133px;
        font-size: 4.6vw;
        font-style: normal;
        font-weight: 900;
        line-height: 0.71;
      }
    }
  }

  .CaseSharingV2 {
    width: fit-content;

    margin: 0 auto;
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

// 移动端
@media screen and (max-width: 992px) {
  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0 15px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: 28px;
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 3.6;
        letter-spacing: 0.36px;
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容

    .smilePro-newCenter-content {
      .smilePro-newCenter-content-text {
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-mobile-center.avif");
        background-repeat: no-repeat;
        background-size: cover;
        height: 503px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > div > div {
          max-width: 299px;
          margin: 0 auto;
          position: relative;
          z-index: 2;

          &::after {
            content: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-mobile-centerSmall2.webp");
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          h3 {
            position: relative;
            z-index: 2;
            text-align: center;

            margin-bottom: 10px;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 20.359px;
            font-style: normal;
            font-weight: 900;
            line-height: 20.359px;
          }
          p {
            position: relative;
            z-index: 2;
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.78;
            letter-spacing: 1.4px;
            span {
              color: #4570b6;
              font-style: normal;
              font-weight: 700;
            }
            .let {
              letter-spacing: 6.94px;
            }
          }
        }
      }
      .smilepro-Vedio {
        width: 100%;
        min-height: 221px;
        iframe {
          height: 221px;
        }
      }
    }
  }
  // 四大特点
  .smilepro-four-feature {
    padding: 0 15px;

    .smilepro-four-feature-Box {
      max-width: 332px;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 13.75px;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 1.42;
          letter-spacing: 2.1px;
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: 40px;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-mobileBg4.avif");
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 72%;

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          gap: 20.32px;
          margin-bottom: 34px;
          min-width: 284px;

          .smilepro-four-feature-Box-List-item-number {
            width: 74px;
            color: #4570b6;
            font-family: "Poppins";
            font-size: 60.224px;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 14.501px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 14.501px;
              font-style: normal;
              font-weight: 400;
              line-height: 21.751px;
            }
          }
        }
        & > .smilepro-four-feature-Box-List-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 93px;
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
      margin-top: 30px;
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
      width: 107px;
      height: 85px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.357;
      width: 27.18vw;
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 17.95vw;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #4570b6;
      color: #fff;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.314;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21.031px;
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 21.031px;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      background: #5a8ad6;

      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.314;
      letter-spacing: 0.6px;
    }
  }

  .icl-introVedio {
    position: relative;
    &::before {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg1.png");
      position: absolute;
      left: 0;
      top: -89px;
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg2.png");
      position: absolute;
      right: -61px;
      top: 15px;
      z-index: 1;
      pointer-events: none;
    }
    padding: 52px 15px 100px;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 10px;

        .steps {
          width: 25px;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 16.994px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          & > div:last-child {
            margin-bottom: 0;
          }
          div {
            position: relative;
            z-index: 2;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 10px;
            height: 65px;
            padding-right: 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: "Poppins", sans-serif;
            font-weight: 200;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins";
              font-size: 16.994px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
              border-right: 2px solid #4570b6;
            }
          }
        }

        .content-area {
          position: relative;
          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 15.8px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.26;
              letter-spacing: -0.79px;
            }
            svg {
              position: absolute;
              top: 20px;
              left: 110px;
            }
          }

          .content-area-img {
            max-width: 290px;
            position: relative;
            z-index: 2;
            img {
              max-width: 100%;
              height: auto;
            }
            .content-area-text {
              position: absolute;
              // bottom: 12px;
              margin-top: 13px;
              left: 50%;
              transform: translateX(-50%);
              width: 228px;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.28;
              letter-spacing: 1.4px;
            }
          }
        }
      }
    }
  }

  .gameBox {
    .gameBox-content {
      padding-top: 52px;
      // padding-top: 65px;
      // max-width: 1654.98px;
      // width: 86.14vw;
      // height: 44.375vw;
      // max-height: 852.5px;
      -webkit-touch-callout: none; /* 禁用长按菜单 */
      -webkit-user-select: none; /* 禁用文本选择 */
      user-select: none;
      touch-action: none; /* 禁用默认触摸行为 */

      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .folder {
        text-align: center;
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img,
        svg {
          width: 116.492px;

          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #0056b3;
          }
        }
      }

      .draggable {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;
        transition: background-color 0.3s, box-shadow 0.3s;
        user-select: none;
        width: fit-content;

        img {
          width: 162.684px;
          height: 162.684px;
          flex-shrink: 0;
          border-radius: 13px;
        }

        .draggable-item-text {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.48;
          letter-spacing: 1.4px;
        }

        &:hover {
          background-color: #e0e0e0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      & > .draggable:nth-child(1) {
        position: absolute;
        left: 22px;
        top: 96px;
      }
    }
  }

  .smile-pro-evaluateV2 {
    background: #f4fafc;
    margin-top: 40px;
    padding-top: 44px;
    padding-bottom: 30px;
    margin-bottom: 40px;
    .smile-pro-evaluateV2-Box {
      .smile-pro-evaluateV2-Box-title {
        margin: 0 auto;
        width: 146.775px;
        height: 120.004px;
        flex-shrink: 0;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/evaluate/smilepro-evaluate-title-mobile1.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.56;
        letter-spacing: 2px;
        &::after {
          position: absolute;
          content: "";
          width: 90px;
          height: 65px;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/evaluate/smilepro-evaluate-title-mobile2.png");
          top: -28px;
          left: -58px;
        }
      }

      .smile-pro-evaluateV2-Box-content {
        margin-top: 12px;
        margin-left: 30px;
        height: 333px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
          background-repeat: no-repeat;
          width: 180.251px !important;
          height: 333px;
          border-radius: 20px;
          z-index: 3;
        }
        .swiper-overflow {
          overflow: hidden;
        }
        .swiperWrap {
          z-index: auto !important;
          overflow: unset;
          position: relative;
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              transition: all 0.3s ease;
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                background-color: white;

                width: 165px !important;
                height: 302px;
                padding: 40px 23.5px 43px;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 69px;
                  height: 69px;
                }

                .swiperWrap-item-text {
                  margin-top: 10px;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.666;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 23.5px;
                  bottom: 35px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.84px;
                }
              }
            }
            .swiper-slide-active {
              & > div {
                border-radius: 20px;
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
                // background-repeat: no-repeat;
                background-color: white;
                background-image: none;
                width: 180.251px !important;
                height: 333px;
                padding: 48px 29px 46px;
                text-align: center;
                position: relative;
                svg {
                  margin: 0 auto;
                  width: 74px;
                  height: 74px;
                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.714;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 29px;
                  bottom: 46px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.84px;
                }
              }
            }
          }
          .swiper-pagination {
            width: clamp(93px, 47.69vw, 186px);
            max-width: 186px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9;
            & > div {
              z-index: 9;
              pointer-events: auto;
              background-image: none;
            }
            .swiper-button-next {
              right: 0;
              svg {
                width: clamp(20px, 10.26vw, 40px);
              }
            }
            .swiper-button-prev {
              left: clamp(-16px, -4.1vw, -8px);
              svg {
                width: clamp(20px, 10.26vw, 40px);
              }
            }
          }
        }
      }
    }
  }

  .service-tip {
    display: flex;
    gap: 45px;
  }
  .service-tip__left {
    max-width: 684px;
    width: 488.86px;
    display: none;
  }
  .service-tip__right {
    color: #4b5563;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    // margin-top: 30px;
    margin-bottom: 50px;
    // margin-left: 30px;
    // margin-right: 30px;
  }
}

// 小于390
@media screen and (max-width: 389px) {
  .smile-NewBanner {
    // padding: 0 15px;
    // margin-top: 20.51vw;
    // height: 52.5vw;
    // position: relative;
    // img {
    //   width: 51.28vw;
    //   position: absolute;

    //   top: -15.12vw;
    //   right: 20.51vw;
    // }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: 14.87vw;
      left: 7.179vw;
      //   span {
      //     font-style: normal;
      //     color: #4570b6;
      //     font-family: "Poppins", sans-serif;
      //     font-size: 11.53vw;
      //     font-style: normal;
      //     font-weight: 700;
      //     line-height: 1.1;
      //   }
      //   h3 {
      //     color: #4570b6;
      //     font-family: "Noto Sans TC";
      //     font-size: 6.29vw;
      //     font-style: normal;
      //     font-weight: 400;
      //     line-height: 1.09;
      //   }
      //   p {
      //     color: #4570b6;
      //     font-family: "Noto Sans TC";
      //     font-size: 2.517vw;
      //     font-style: normal;
      //     font-weight: 400;
      //     line-height: 2.175;
      //     letter-spacing: 0.295px;
      //   }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 5px 10px 0px 10px;
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 2;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 5px 10px 11px 10px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 2;
      }
    }
  }

  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0 15px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: 28px;
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 300;
        line-height: 3.6;
        letter-spacing: 0.36px;
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
  }

  .icl-WhatChoose {
    padding: 40px 15px;
    .icl-WhatChoose-title {
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 5.12vw;
      font-style: normal;
      font-weight: 900;
      line-height: 1.2;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      max-width: 92.3vw;
      margin-top: 7.69vw;

      .icl-WhatChoose-content-one-text {
        margin: 0 auto;
        max-width: 92.3vw;
        margin-top: 7.69vw;
        text-align: justify;

        p {
          color: #6d6e71;
          font-family: "Noto Sans TC" !important;
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.875;
          letter-spacing: 1.23vw;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC" !important;
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 1.875;
            letter-spacing: 1.23vw;
          }
        }
      }
    }

    .icl-WhatChoose-content-two {
      margin: 0 auto;
      max-width: 92.3vw;
      & > div {
        margin-top: 7.69vw;
        border-radius: 1.837vw;
        background: #f4fafc;
        padding: 6.92vw 8.25vw 6.92vw 8.717vw;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 6.15vw;
          font-style: normal;
          font-weight: 900;
          line-height: 0.89;
          margin-bottom: 3.846vw;
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 1.56;
          letter-spacing: 1.23vw;
        }
      }
    }
  }

  // 四大特点
  .smilepro-four-feature {
    padding: 0 15px;

    .smilepro-four-feature-Box {
      max-width: 85.13vw;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h3 {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 3.53vw;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 500;
          line-height: 1.42;
          letter-spacing: 0.54vw;
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: 40px;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-mobileBg4.avif");
        background-repeat: no-repeat;
        background-position: right top;

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          gap: 5.21vw;
          margin-bottom: 8.72vw;
          min-width: 72.82vw;

          .smilepro-four-feature-Box-List-item-number {
            width: 18.97vw;
            color: #4570b6;
            font-family: "Poppins";
            font-size: 15.44vw;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 3.72vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: 3.72vw;
              font-style: normal;
              font-weight: 400;
              line-height: 1.44;
            }
          }
        }
        & > .smilepro-four-feature-Box-List-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 23.85vw;
    .smilepro-difference-title {
      display: flex;
      justify-content: center;
      & > div {
        display: inline-block;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
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
          top: calc(-100% - 4px);
          right: -44px;
        }

        &::before {
          content: "一圖看清";
          position: absolute;
          top: calc(-100% - 2px);
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
      margin-top: 7.69vw;
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
      background: #f4fafc;
      width: 27.44vw;
      height: 21.79vw;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 900;
      line-height: 1.357;
      width: 27.18vw;
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 17.95vw;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #4570b6;
      color: #fff;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.08vw;
      font-style: normal;
      font-weight: 300;
      line-height: 1.314;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.44;
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 3.08vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
      }
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      background: #5a8ad6;

      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.08vw;
      font-style: normal;
      font-weight: 500;
      line-height: 1.314;
      letter-spacing: 0.6px;
    }
  }

  .icl-introVedio {
    position: relative;
    &::before {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg1.png");
      position: absolute;
      left: 0;
      top: -22.82vw;
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-mobile-bg2.png");
      position: absolute;
      right: -15.64vw;
      top: 3.85vw;
      z-index: 1;
      pointer-events: none;
    }
    padding: 13.33vw 15px 25.64vw;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        display: flex;
        justify-content: center;
        gap: 2.56vw;

        .steps {
          width: 6.41vw;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 4.36vw;
          font-style: normal;
          font-weight: 200;
          line-height: normal;
          & > div:last-child {
            margin-bottom: 0;
          }
          div {
            position: relative;
            z-index: 2;
            font-family: "Poppins", sans-serif;
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 2.56vw;
            height: 16.67vw;
            padding-right: 2.05vw;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins";
              font-size: 4.36vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
              border-right: 2px solid #4570b6;
            }
          }
        }

        .content-area {
          position: relative;
          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 4.05vw;
              font-style: normal;
              font-weight: 900;
              line-height: 1.26;
              letter-spacing: -0.2vw;
            }
            svg {
              position: absolute;
              top: 5.13vw;
              left: 28.21vw;
            }
          }

          .content-area-img {
            max-width: 74.36vw;
            position: relative;
            z-index: 2;
            img {
              max-width: 100%;
              height: auto;
            }
            .content-area-text {
              position: absolute;
              // bottom: 3.08vw;
              margin-top: 3.33vw;
              left: 50%;
              transform: translateX(-50%);
              width: 58.46vw;
              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 600;
              line-height: 1.28;
              letter-spacing: 1.4px;
            }
          }
        }
      }
    }
  }

  .smile-pro-evaluateV2 {
    background: #f4fafc;
    padding-top: 11.28vw;
    padding-bottom: 7.69vw;
    margin-bottom: 10.26vw;
    .smile-pro-evaluateV2-Box {
      .smile-pro-evaluateV2-Box-content {
        margin-top: 3.08vw;
        margin-left: 7.69vw;
        height: 85.38vw;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
          background-repeat: no-repeat;
          background-size: cover;

          width: 46.22vw !important;
          height: 85.38vw;
          border-radius: 5.13vw;
          z-index: 3;
        }

        .swiperWrap {
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                background-size: cover;
                background-color: white;
                width: 42.31vw !important;
                height: 77.44vw;
                padding: 10.26vw 6.03vw 11.03vw;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 17.69vw;
                  height: 17.69vw;
                }

                .swiperWrap-item-text {
                  margin-top: 2.56vw;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 3.08vw;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.666;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 6.03vw;
                  bottom: 8.97vw;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.22vw;
                }
              }
            }
            .swiper-slide-active {
              & > div {
                border-radius: 5.13vw;
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-active.png");
                // background-repeat: no-repeat;
                // background-size: cover;
                // background-color: white;
                background-color: white;

                background-image: none;
                width: 46.22vw !important;
                height: 85.38vw;
                padding: 12.31vw 7.44vw 11.79vw;
                text-align: center;
                position: relative;
                z-index: 1;
                svg {
                  margin: 0 auto;
                  width: 18.97vw;
                  height: 18.97vw;
                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.714;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 7.44vw;
                  bottom: 11.79vw;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.14;
                  letter-spacing: 0.22vw;
                }
              }
            }
          }
        }
      }
    }
  }

  // 案例分享
  .CaseSharing {
    margin-top: 40px;
    margin-bottom: 30px;
    background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-mobile-share.avif")
      no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 22.05vw 0 28.21vw;
    position: relative;

    .CaseSharing-Box {
      position: relative;
      h3 {
        position: absolute;
        top: -10.26vw;
        right: 7.69vw;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 900;
        line-height: 1.25;
      }
      .CaseSharing-list::-webkit-scrollbar {
        display: none;
      }
      .CaseSharing-list {
        display: flex;

        // justify-content: center;
        gap: 3.4vw;
        width: 100vw;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 31.03vw;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 43.59vw;
        }
        .CaseSharing-list-item {
          a {
            display: block;
            width: 44.87vw;
            box-shadow: -1.768px 1.768px 0px 0px #4570b6;

            position: relative;
            margin-bottom: 3.4vw;
            span {
              position: absolute;
              left: 2.05vw;
              bottom: 2.05vw;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 3.4vw;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 1.03vw 1.54vw;
            }
            i {
              position: absolute;
              right: 2.05vw;
              bottom: 2.05vw;
              width: 5.9vw;
              height: 5.9vw;
              border-radius: 2.21px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 2.82vw;
              }
            }
          }
        }
      }
    }

    .CaseSharing-btn {
      width: 29.23vw;
      height: 29.23vw;

      position: absolute;
      bottom: 0px;
      right: 0;
    }
  }

  .CaseSharingV2 {
    width: fit-content;

    margin: 0 auto;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.94vw;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 700;
        line-height: 0.82;
      }
    }
    & > div:nth-child(2) {
      margin-top: 5.13vw;
      display: flex;
      justify-content: center;
      gap: 5.13vw;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13.85vw;
        height: 13.85vw;
        border-radius: 50%;
        border: 1px solid #4570b6;
      }
    }
  }
}

// pc端
@media screen and (min-width: 992px) {
  .banner-text-wrap {
    height: calc(100% - 270px);
    width: 1024px;
  }
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
  // 中心简介
  .smile-newCenter {
    position: relative;
    .smile-newCenter-menu {
      padding: 0px;
      margin-bottom: clamp(29px, 3.02vw, 58px);
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: clamp(0.18px, 0.02vw, 0.36px);
      padding-left: clamp(38.5px, 4.01vw, 77px);
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC" !important;
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 2.175;
        letter-spacing: clamp(0.3px, 0.03vw, 0.6px);
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    .smilePro-newCenter-content {
      .smilePro-newCenter-content-text {
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-pc-center.avif");
        background-repeat: no-repeat;
        background-size: cover;
        height: clamp(420px, 43.75vw, 840px);
        display: flex;
        justify-content: center;
        align-items: center;

        & > div > div {
          width: clamp(312.5px, 32.55vw, 625px);
          height: clamp(312.5px, 32.55vw, 625px);
          padding: clamp(59px, 6.15vw, 118px) clamp(34px, 3.54vw, 68px)
            clamp(73px, 7.6vw, 146px) clamp(42px, 4.38vw, 84px);

          text-align: center;
          background-color: white;
          border-radius: 50%;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            background-image: url("https://statichk.cmermedical.com/smile/smileproV2/center/smilepro-pc-centerSmall1.webp");
            background-repeat: no-repeat;
            background-size: cover;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: clamp(381px, 39.69vw, 762px);
            height: clamp(381px, 39.69vw, 762px);
          }
          h3 {
            position: relative;
            z-index: 2;
            text-align: center;

            margin-bottom: clamp(8px, 0.83vw, 16px);
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: clamp(15px, 1.56vw, 30px);
            font-style: normal;
            font-weight: 900;
            line-height: 1;
          }
          p {
            max-width: clamp(236.5px, 24.64vw, 473px);
            position: relative;
            z-index: 2;
            color: #6d6e71;
            text-align: justify;
            font-family: "Noto Sans TC";
            font-size: clamp(10px, 1.04vw, 20px);
            font-style: normal;
            font-weight: 300;
            line-height: 1.75;
            letter-spacing: clamp(2px, 0.21vw, 4px);
            span {
              color: #4570b6;
              font-style: normal;
              font-weight: 700;
            }
            .let {
              letter-spacing: clamp(5.45px, 0.57vw, 10.9px);
            }
          }
        }
      }
      .smilepro-Vedio {
        position: absolute;
        right: clamp(44.5px, 4.64vw, 89px);
        bottom: calc(-1 * clamp(69px, 7.19vw, 138px));
        width: 100%;
        width: clamp(252px, 26.25vw, 504px);
        height: clamp(142px, 14.79vw, 284px);
        iframe {
          height: clamp(142px, 14.79vw, 284px);
        }
      }
    }
  }

  // 四大特点
  .smilepro-four-feature {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-four-feature/smilepro-four-feature-pcBg.webp");
      background-repeat: no-repeat;
      background-size: 100%;
      right: 0;
      top: -81px;
      pointer-events: none;
      width: clamp(324px, 33.75vw, 648px);
      height: clamp(325px, 33.85vw, 650px);
    }
    .smilepro-four-feature-Box {
      max-width: clamp(538px, 56.04vw, 1076px);
      margin: 0 auto;

      .smilepro-four-feature-Box-top {
        display: flex;
        gap: clamp(23.5px, 2.45vw, 47px);

        h3 {
          span {
            font-family: "Poppins";
            font-weight: 700;
          }
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 500;
          line-height: 1.8;
          letter-spacing: clamp(2.5px, 0.26vw, 5px);
        }
      }

      // 内容
      .smilepro-four-feature-Box-List {
        margin-top: clamp(50px, 5.21vw, 100px);
        position: relative;
        z-index: 2;

        display: flex;
        flex-wrap: wrap;
        gap: clamp(59px, 6.15vw, 118px) clamp(8.5px, 0.89vw, 17px);

        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          // gap: clamp(16.5px,1.72vw,33px);
          gap: clamp(10px, 1.04vw, 20px);
          min-width: clamp(262px, 27.29vw, 524px);

          .smilepro-four-feature-Box-List-item-number {
            color: #4570b6;
            font-family: "Poppins";
            font-size: clamp(41.5px, 4.32vw, 83px);
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
            width: clamp(52.5px, 5.47vw, 105px);
          }
          .smilepro-four-feature-Box-List-item-text {
            h4 {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: #4570b6;
              leading-trim: both;
              text-edge: cap;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 400;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }

  // 表格
  .smilepro-difference {
    margin-top: 230px;
    .smilepro-difference-title {
      display: flex;
      justify-content: center;
      & > div {
        display: inline-block;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        position: relative;
        span {
          color: #4570b6;
          font-family: "Poppins";
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
        }
        &::after {
          content: url("https://statichk.cmermedical.com/smile/smileproV2/table/smilepro-table-pc-titleBg.png");
          position: absolute;
          top: -66px;
          right: -50px;
        }
      }
    }

    .custom-comparison-table {
      margin: 0 auto;
      margin-top: 67px;
      border-collapse: collapse;
      border-spacing: 0;
    }
    .custom-comparison-table tr th {
      height: 148px;
    }
    .custom-comparison-table tr {
      height: 117px;
    }
    .custom-comparison-table th,
    .custom-comparison-table td {
      border-bottom: 1.5px solid #d0d0d0;
      text-align: center;
      vertical-align: middle;
    }

    .custom-comparison-table thead th {
      background: #f4fafc;
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      width: 253px;

      span {
        text-align: center;
        font-family: "Poppins";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.3;
      }
    }

    .custom-comparison-table thead th:nth-child(1) {
      width: 210px;
      border: none;
    }

    .custom-comparison-table thead tr > th:nth-child(1) {
      background: none;
    }
    .custom-comparison-table thead tr > th:nth-child(3) {
      background: #4570b6;
      color: #fff;
      line-height: 1.357;
    }

    .custom-comparison-table tbody tr td {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.125;
      letter-spacing: 1px;
    }

    .custom-comparison-table tbody tr > td:nth-child(1) {
      background: #f8f8f8;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 4px;
    }

    .custom-comparison-table tbody tr > td:nth-child(3) {
      background: #5a8ad6;
      font-weight: 700;
      color: #fff;
    }
    // 按钮
    .icl-btn {
      margin-top: 63px;
    }
  }

  // 流程
  .icl-introVedio {
    width: 100vw;
    position: relative;
    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/intro/smilepro-intro-pc-bg.avif");
      position: absolute;
      top: -520px;
      right: 0;
      pointer-events: none;
    }

    padding: 200px 0 86px;
    .icl-introVedio-intro {
      .icl-introVedio-intro-number {
        position: relative;
        z-index: 2;
        &::after {
          content: url("https://statichk.cmermedical.com/smile/smileproV2/intro/smilepro-pc-intro-ricto.png");
          position: absolute;
          left: -378px;
          bottom: -178px;
          pointer-events: none;
        }

        width: fit-content;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 35px;

        .steps {
          width: 60px;
          color: #6d6e71;
          font-family: "Poppins", sans-serif;
          font-size: 38px;
          font-style: normal;

          font-weight: 400;
          line-height: normal;

          div {
            font-family: "Poppins", sans-serif;
            font-weight: 200;
            border-right: 1px solid #6d6e71;
            display: flex;
            align-items: flex-start;
            justify-content: end;
            margin-bottom: 30px;
            height: 140px;
            padding-right: 13.5px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover,
            &.active {
              color: #4570b6;
              font-family: "Poppins", sans-serif;
              font-size: 38px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4;
              border-right: 5px solid #4570b6;
            }
          }
          & > div:last-child {
            margin-bottom: 0;
          }
        }

        .content-area {
          position: relative;
          flex: 1;
          .content-area-title {
            position: absolute;
            top: 0;
            left: 0;
            p {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 30px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.26;
              letter-spacing: 0;
            }
            svg {
              width: 32px;
              height: 32px;
              position: absolute;
              top: 40px;
              left: 240px;
            }
          }

          .content-area-img {
            position: relative;
            display: flex;
            gap: 80px;
            z-index: 2;
            align-items: center;

            img {
              max-width: 647px;
              height: auto;
            }
            .content-area-text {
              left: 50%;

              width: 220px;

              color: #6d6e71;
              font-family: "Noto Sans TC";
              font-size: 23px;
              font-style: normal;
              font-weight: 350;
              line-height: 1.52;
              letter-spacing: 8.05px;
            }
          }
        }
      }
    }
  }

  .gameBox {
    .gameBox-content {
      padding-top: 52px;
      // padding-top: 65px;
      // max-width: 1654.98px;
      // width: 86.14vw;
      // height: 44.375vw;
      // max-height: 852.5px;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/game/smilepro-game-mobileBg.avif");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .folder {
        text-align: center;
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img,
        svg {
          width: 116.492px;

          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #0056b3;
          }
        }
      }

      .draggable {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;
        transition: background-color 0.3s, box-shadow 0.3s;
        user-select: none;
        width: fit-content;

        img {
          width: 162.684px;
          height: 162.684px;
          flex-shrink: 0;
          border-radius: 13px;
        }

        .draggable-item-text {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.48;
          letter-spacing: 1.4px;
        }

        &:hover {
          background-color: #e0e0e0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      & > .draggable:nth-child(1) {
        position: absolute;
        left: 22px;
        top: 96px;
      }
    }
  }

  // 用家见证
  .smile-pro-evaluateV2 {
    max-width: 100vw;
    width: 100vw;

    background: #f4fafc;
    margin-top: 90px;
    padding-top: 62px;
    padding-bottom: 93px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -125px;
      right: 28px;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc03.png");
      background-repeat: no-repeat;
      width: clamp(400px, 31.4vw, 603px);
      height: clamp(300px, 25.72vw, 494px);
      background-size: cover;
      z-index: 1;
    }

    .smile-pro-evaluateV2-Box {
      max-width: 1760px;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      .smile-pro-evaluateV2-Box-title {
        width: 285px;
        height: 234px;
        flex-shrink: 0;
        flex-shrink: 0;
        background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc1.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 194px;
        top: 50%;
        transform: translateY(-50%);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.16;
        letter-spacing: 15.3px;
        writing-mode: vertical-rl;
        &::after {
          position: absolute;
          content: "";
          width: 163px;
          height: 118px;
          flex-shrink: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc2.png");
          top: -59px;
          left: -84px;
        }
      }

      .smile-pro-evaluateV2-Box-content {
        max-width: 1362px;
        position: relative;
        // position: absolute;
        // top: 50%;
        // left: 396px;
        transform: translateX(396px);
        height: 552.006px;
        z-index: 2;

        &::after {
          content: "";
          position: absolute;
          left: -1px;
          top: 0;
          background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc-active.png");
          background-repeat: no-repeat;
          // background-color: white;
          width: 300.502px !important;
          height: 552.006px;
          overflow: hidden;
          border-radius: 35px;
          z-index: 3;
        }
        .swiper-overflow {
          overflow: hidden;
        }
        .swiperWrap {
          z-index: auto !important;
          overflow: unset;
          .overflow-swiper {
            overflow: hidden;
          }

          .swiper-wrapper {
            align-items: center;
            width: 100%;
            & > .swiper-slide-next {
              margin-left: -20px;
            }
            .swiper-slide-active ~ .swiper-slide {
              margin-left: -18px;
            }

            .swiperWrap-item {
              // width: 206.662px !important;

              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc.png");
                background-repeat: no-repeat;

                width: 206.662px !important;
                height: 378.96px;
                flex-shrink: 0;
                padding: 40px 29px 43px;
                text-align: center;
                position: relative;
                svg {
                  margin: 0 auto;
                  width: 89px;
                  height: 89px;
                  flex-shrink: 0;
                }

                .swiperWrap-item-text {
                  margin-top: 29px;
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 14.466px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.75;
                  letter-spacing: normal;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 29px;
                  bottom: 43px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 14.466px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.3a;
                  letter-spacing: 0.868px;
                }
              }
            }
            .swiper-slide-active {
              width: 300.502px !important;
              & > div {
                // background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg-pc-active.png");
                // background-repeat: no-repeat;
                background-image: none;
                // background-color: white;
                background-color: white;

                width: 274px !important;
                height: 552.006px;
                flex-shrink: 0;
                padding: 79px 36px 77px;
                text-align: center;
                position: relative;
                margin: 0 auto;
                svg {
                  margin: 0 auto;
                  width: 123px;
                  height: 123px;

                  flex-shrink: 0;
                  path {
                    fill: #4570b6;
                  }
                }

                .swiperWrap-item-text {
                  color: #4570b6;
                  text-align: justify;
                  font-family: "Noto Sans TC";
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 1.75;
                }
                .swiperWrap-item-name {
                  position: absolute;
                  left: 49px;
                  bottom: 77px;
                  text-align: left;
                  i {
                    font-style: normal;
                  }
                  color: #6d6e71;
                  font-family: Inter;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 1.3;
                  letter-spacing: 1.2px;
                }
              }
            }
          }
          .swiper-pagination {
            width: 300.502px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9;
            & > div {
              z-index: 9;
              pointer-events: auto;
              background-image: none;
            }
            .swiper-button-next {
              right: 0;
            }
            .swiper-button-prev {
              left: -14px;
            }
          }
        }
      }
    }
  }

  .CaseSharingV2 {
    display: none;
  }

  .service-tip {
    display: flex;
    gap: 45px;
    margin-bottom: -134px;
  }
  .service-tip__left {
    max-width: 684px;
    width: 488.86px;
    display: block;
  }
  .service-tip__right {
    color: #4b5563;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    margin-top: 64px;
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

  .smile-NewBanner {
    padding: 0px;
    margin-top: 159px;
    // height: 529px;
    position: relative;
    overflow: hidden;
    // img {
    //   width: 500px;
    //   position: absolute;
    //   top: -27px;
    //   left: inherit;
    //   right: 239px;
    // }

    .smile-NewBanner-Title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      //   span {
      //     color: #4570b6;
      //     font-family: "Poppins", sans-serif;
      //     font-size: 137.67px;
      //     font-style: normal;
      //     font-weight: 700;
      //     line-height: 150.611px; /* 109.4% */
      //   }
      //   h3 {
      //     color: #4570b6;
      //     font-family: "Noto Sans TC";
      //     font-size: 74.332px;
      //     font-style: normal;
      //     font-weight: 400;
      //     line-height: 1.09;
      //   }
      //   p {
      //     color: #4570b6;
      //     font-family: "Noto Sans TC";
      //     font-size: 29.733px;
      //     font-style: normal;
      //     font-weight: 400;
      //     line-height: 64.668px; /* 217.5% */
      //     letter-spacing: 0.892px;
      //   }
    }

    .smile-NewBanner-Tip {
      position: absolute;
      right: 15px;
      bottom: 0;
      div {
        background: #4570b6;
      }
      & > div:nth-child(1) {
        border-bottom: 1px solid #4570b6;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        padding: 8px 22px 0px 22px;
        display: inline-block;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 150% */
        letter-spacing: 4px;
        position: relative;
        top: 2px;
      }
      & > div:nth-child(2) {
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 8px 35px 23px 22px;
        width: fit-content;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 4px;
      }
    }
  }

  .smile-newCenter {
    width: 100vw;
    .smile-newCenter-menu {
      padding: 0px;
      margin-bottom: clamp(29px, 3.02vw, 58px);
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      padding-left: clamp(38.5px, 4.01vw, 77px);
      color: #6d6e71;
      a {
        color: #6d6e71;
        font-family: "Noto Sans TC" !important;
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 2.175;
        letter-spacing: clamp(0.3px, 0.03vw, 0.6px);
      }
      & > a:last-child {
        color: #456db6;
        font-weight: 500;
      }
    }

    // 内容
  }

  .icl-WhatChoose {
    padding: 123px 0px;
    .icl-WhatChoose-title {
      max-width: 908px;
      color: #4570b6;
      font-family: "Noto Sans TC" !important;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 1;
      margin: 0 auto;
    }
    .icl-WhatChoose-content-one {
      margin: 0 auto;
      margin-top: 26px;
      display: flex;
      justify-content: center;
      gap: 31px;
      & > div:nth-child(1) {
        max-width: 463px;
      }
      & > div:nth-child(2) {
        max-width: 415px;
        text-align: justify;
      }
      // .icl-WhatChoose-content-one-img{

      // }
      .icl-WhatChoose-content-one-text {
        p {
          color: #6d6e71;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.95;
          letter-spacing: 4px;
          span {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 45px;
            letter-spacing: 4px;
          }
        }
      }
    }
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

  // 案例分享
  .CaseSharing {
    max-width: 100vw;
    overflow: hidden;
    margin-top: 104px;
    margin-bottom: 80px;
    // background: url("https://statichk.cmermedical.com/smile/smileproV2/share/smilepro-pc-share-bg.png")
    //   no-repeat;
    //   background-position: 50% 0;

    padding: 149px 0 228px;
    position: relative;

    &::after {
      content: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-pc-share-newbg.png");
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
      z-index: 1;
    }

    .CaseSharing-Box {
      position: relative;
      z-index: 2;
      h3 {
        position: absolute;
        top: -70px;
        right: 10px;
        text-align: right;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 39px;
        text-align: right;
      }
      .CaseSharing-list {
        display: flex;
        justify-content: center;
        gap: 60px;
        flex-wrap: nowrap;
        overflow-x: auto;

        & > .CaseSharing-list-item:nth-child(2) {
          padding-top: 97px;
        }
        & > .CaseSharing-list-item:nth-child(3) {
          padding-top: 207px;
        }
        .CaseSharing-list-item {
          & > a {
            display: block;
            width: 396px;

            box-shadow: -4px 4px 0px 0px #4570b6;
            position: relative;
            margin-bottom: 30px;
            span {
              position: absolute;
              left: 20px;
              bottom: 16px;
              color: #fff;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 0.83;
              background: #4570b6;
              padding: 10px 15px;
            }
            i {
              position: absolute;
              right: 20px;
              bottom: 16px;
              width: 53px;
              height: 53px;
              border-radius: 5px;
              background: #f00;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                width: 26px;
              }
            }
          }
        }
      }
    }

    .CaseSharing-btn {
      width: 164.085px;
      height: 163.562px;

      position: absolute;
      bottom: 60px;
      right: -20px;
    }
    .icl-btn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }

  .CaseSharingV2 {
    display: none;
    width: fit-content;

    margin: 0 auto;
    & > div:nth-child(1) {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 13px;
      span {
        color: #000;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 83.333% */
      }
    }
    & > div:nth-child(2) {
      margin-top: 49px;
      display: flex;
      justify-content: center;
      gap: 20px;
      a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 82px;
        height: 82px;
        border-radius: 50%;
        border: 1px solid #4570b6;
        svg {
          width: 30px;
        }
      }
    }
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

@media screen and (min-width: 1319px) {
  .icl-peculiarity {
    .icl-peculiarity-list {
      & > .icl-peculiarity-list-item:nth-child(1) {
        margin-left: 45px;
      }
    }
    &::after {
      content: "";
      background: url("https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-peculiarity-bg1.avif")
        no-repeat;
      pointer-events: none;
      width: 660px;
      height: 502px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .icl-peculiarity-text {
      max-width: 330px;
      margin-left: 0;
      color: #6d6e71;
      text-align: justify;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 4px;
    }

    .icl-peculiarity-container {
      gap: 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: nowrap;
      margin-top: 64px;
    }
  }
}

// 新css
@media (max-width: 768px) {
  /* 轮播图 */
  .smile-banner {
    max-width: 1920px;
    margin: 80px auto 0 auto;
    position: relative;
  }

  .smile-banner__image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .smile-banner__text-wrap {
    max-width: 1024px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .smile-banner__container {
    padding: 30px;
  }

  .smile-banner__title {
    display: flex;
    flex-direction: column;
  }

  .smile-banner__title-row {
    display: flex;
    flex-direction: column;
  }

  .smile-banner__title-main {
    font-size: 28px;
    font-weight: 700;
    color: #0a2342;
    line-height: 35.714px;
  }

  .smile-banner__title-sub {
    font-size: 28px;
    font-weight: 300;
    color: #0a2342;
    line-height: 35.714px;
  }

  .smile-banner__heading {
    font-size: 28px;
    font-weight: 900;
    color: #0a2342;
    line-height: 35.714px;
  }

  .smile-banner__description {
    display: none;
    color: #4b5563;
    font-size: 20px;
    font-weight: 400;
    max-width: 455px;
  }

  .smile-banner__counter {
    display: inline-flex;
    align-items: center;
    background-color: white;
    border-radius: 9999px;
    padding: 10px 20px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    margin-bottom: 48px;
    margin-top: 12px;
    width: fit-content;
  }

  .smile-banner__counter-icon {
    margin-right: 12px;
  }

  .smile-banner__counter-label {
    color: #374151;
    margin-right: 8px;
    font-size: 13.707px;
  }

  .smile-banner__counter-value {
    font-size: 21px;
    font-weight: 700;
    color: #165dff;
  }

  .smile-banner__counter-unit {
    color: #374151;
    margin-left: 4px;
  }

  .smile-banner__gift-link {
    position: absolute;
    left: 20px;
    bottom: -71px;
    width: 36.667vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .smile-banner__gift-image {
    width: 100%;
  }

  .smile-banner__gift-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
  }

  .smile-banner__gift-text-main {
    font-size: 18px;
    font-weight: 900;
    white-space: nowrap;
  }

  .smile-banner__gift-text-sub {
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  }

  .smile-banner__gift-text-detail {
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
  }

  .smile-banner__scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
  }

  .smile-banner__scroll-text {
    color: #0a2342;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }

  .smile-banner__scroll-icon {
    width: 18px;
    margin-top: 12px;
  }
}

@media (max-width: 420px) {
  .smile-banner__title-main {
    font-size: 28px;
    font-weight: 700;
    color: #0a2342;
    font-family: "Poppins", sans-serif;
  }

  .smile-banner__title-sub {
    font-size: 28px;
    font-weight: 300;
    color: #0a2342;
  }
  .smile-banner__counter-value {
    font-size: 16px;
  }

  .smile-banner__heading {
    font-size: 28px;
    font-weight: 900;
    color: #0a2342;
  }
  .smile-banner__counter {
    padding: 13px 20px;
  }

  .smile-banner__description {
    display: none;
    color: #4b5563;
    font-size: 20px;
    font-weight: 400;
    max-width: 455px;
  }
}

/* 桌面端样式 */
@media (min-width: 768px) {
  /* 轮播图 */
  .smile-banner {
    // max-width: 1920px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    margin-top:159px;// 159px;
  }

  .smile-banner__image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .smile-banner__text-wrap {
    position: absolute;
  }

  .smile-banner__container {
    max-width: 1024px;
  }

  .smile-banner__title {
    display: flex;
    flex-direction: column;
  }

  .smile-banner__title-row {
    display: flex;
    flex-direction: column;
  }

  .smile-banner__title-main {
    font-size: 30px;
    font-weight: 700;
    color: #0a2342;
  }

  .smile-banner__title-sub {
    font-size: 30px;
    font-weight: 300;
    color: #0a2342;
    text-wrap: nowrap;
  }

  .smile-banner__heading {
    font-size: 30px;
    font-weight: 900;
    color: #0a2342;
  }

  .smile-banner__description {
    display: none;
    color: #4b5563;
    font-size: 20px;
    font-weight: 400;
    max-width: 467px;
    text-align: center;
    margin-top: 10px;
  }

  .smile-banner__counter {
    display: inline-flex;
    align-items: center;
    background-color: white;
    border-radius: 9999px;
    padding: 12px 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 48px;
    margin-top: 12px;
  }

  .smile-banner__counter-icon {
    margin-right: 12px;
  }

  .smile-banner__counter-label {
    color: #374151;
    margin-right: 8px;
  }

  .smile-banner__counter-value {
    font-size: 24px;
    font-weight: 700;
    color: #165dff;
  }

  .smile-banner__counter-unit {
    color: #374151;
    margin-left: 4px;
  }

  .smile-banner__gift-link {
    position: absolute;
    left: 20px;
    bottom: -71px;
    width: 36.667vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .smile-banner__gift-image {
    width: 100%;
  }

  .smile-banner__gift-text {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
  }

  .smile-banner__gift-text-main {
    font-size: 18px;
    font-weight: 900;
    white-space: nowrap;
  }

  .smile-banner__gift-text-sub {
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  }

  .smile-banner__gift-text-detail {
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
  }

  .smile-banner__scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap:24px;
    left: 50%;
    bottom: 42px;
    transform: translateX(-50%);
  }

  .smile-banner__scroll-text {
    color: #0a2342;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }

  .smile-banner__scroll-icon {
    width: 42px;
    margin-top: 12px;
  }

  /* 修复有问题的代码 */
  .smile-banner__text-wrap {
    left: 50%;
    transform: translateX(-50%);
    /* 移除有问题的min函数，使用媒体查询替代 */
    top: 14vw;
    height: calc(100% - 14vw);
  }

  /* 在较大屏幕上限制最大高度 */
  @media (min-width: 1200px) {
    .smile-banner__text-wrap {
      top: 168px; /* 14vw在1200px时约为168px */
      height: calc(100% - 168px);
    }
  }

  @media (min-width: 1920px) {
    .smile-banner__text-wrap {
      top: 270px; /* 最大限制270px */
      height: calc(100% - 270px);
    }
  }

  .smile-banner__title {
    align-items: center;
  }

  .smile-banner__title-row {
    flex-direction: row;
  }

  /* 修复clamp函数中的单位问题 */
  .smile-banner__title-main,
  .smile-banner__title-sub {
    font-size: 60px; 
    text-wrap:nowrap;
  }

  .smile-banner__heading {
    font-size: 60px; /* 使用vw单位 */
  }

  .smile-banner__description {
    display: inline-block;
  }

  .smile-banner__counter {
    margin-top: 35px;
  }

  .smile-banner__counter-label,
  .smile-banner__counter-unit {
    font-size: 24px;
  }

  .smile-banner__counter-value {
    font-size: 36px;
  }

  .smile-banner__gift-link {
    width: 237px;
    left: calc(-237px / 2);
    bottom: -70px;
    position: absolute;
  }

  /* 修复有问题的min函数 */
  .smile-banner__gift-text {
    top: 4.427vw;
    transform: translateX(-50%);
  }

  /* 在较大屏幕上限制最大位置 */
  @media (min-width: 1920px) {
    .smile-banner__gift-text {
      top: 85px; /* 4.427vw在1920px时约为85px */
    }
  }

  .smile-banner__gift-text-main {
    font-size: 43px;
    line-height: 45px;
  }

  .smile-banner__gift-text-sub {
    font-size: 31px;
    line-height: 45px;
  }

  .smile-banner__gift-text-detail {
    font-size: 27px;
    line-height: 45px;
  }

  .smile-banner__scroll-text {
    font-size: 16px;
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .smile-banner__gift-link {
    width: 250px;
    left: calc(-250px / 2);
    bottom: -70px;
    position: absolute;
  }
}

@media (min-width: 1920px) {
  .smile-banner__gift-link {
    width: 337px;
    left: calc(-337px / 2);
    bottom: -70px;
    position: absolute;
  }
}

// start

@media (max-width: 767px) {
  /* 服务介绍区块样式 */
  .about-section {
  }

  .about-section__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .about-section__content {
    margin: 0 auto;
    text-align: center;
    position: relative;
    max-width: 768px;
  }

  .about-section__title {
    font-size: 5.128vw;
    color: #0a2342;
    display: flex;
    flex-direction: column;
    margin-top: 6.923vw;
    text-align: right;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .about-section__description {
    color: #4b5563;
    text-align: left;
    font-size: 3.59vw;
    line-height: 1.625;
  }

  .about-section__image {
    width: 100%;
    margin-top:-20%;
  }

  .about-section__image img {
    width: 100%;
  }
}

/* 桌面端样式 (768px及以上) */
@media (min-width: 768px) {
  .about-section {
    overflow: hidden;
  }

  .about-section__container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .about-section__content {
    margin: 0 auto;
    text-align: center;
    position: relative;
    margin-bottom: 64px;
    max-width: 768px;
  }

  .about-section__title {
    font-size: 5.128vw;
    color: #0a2342;
    display: flex;
    flex-direction: column;
    margin-top: 6.923vw;
    text-align: right;
    font-weight: bold;
  }

  .about-section__description {
    color: #4b5563;
    text-align: left;
    font-size: 18px;
    line-height: 1.625;
    margin-top: 30px;
  }

  .about-section__image {
    position: absolute;
  }

  .about-section__container {
    padding: 91px 0px;
    box-sizing: border-box;
  }

  .about-section__content {
    margin: 0 auto;
    text-align: center;
    position: relative;

    max-width: fit-content;
  }

  .about-section__title {
    font-size: 36px;
    flex-direction: row;
    text-align: center;
    margin-top: 0;
    justify-content: center;
    gap: 8px;
  }

  .about-section__description {
    font-size: 18px;
    text-align: center;
  }

  .about-section__image {
    width: 442px;
    right: -442px;
    bottom: -219px;
  }
}

// end

// start

/* 福利区块基础样式 */
.benefits-section {
  max-width: 1920px;
  margin: 0 auto;
}

.benefits-section__wrapper {
  position: relative;
}

.benefits-section__background {
  width: 100%;
  height: auto;
  display: block;
}

.benefits-section__content {
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.benefits-section__header {
  margin-bottom: 24px;
}

.benefits-section__title {
  color: #0a2342;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  line-height: 40px;
}

.benefits-section__subtitle {
  color: #4b5563;
  font-size: 12px;
  font-weight: normal;
  white-space: nowrap;
}

.benefits-section__benefits-grid {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.benefits-section__benefit-item {
  background-color: #f5f5f7;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefits-section__benefit-content {
  display: flex;
  flex-direction: column;
}

.benefits-section__benefit-text {
  color: #0a2342;
  font-size: 20px;
  font-weight: bold;
}

.benefits-section__benefit-badge {
  background-color: #0a2342;
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefits-section__gift-card {
  aspect-ratio: 1 / 1;
  height: 100%;
  border: 1px solid #f5f5f7;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
//   background: url(https://statichk.cmermedical.com/smile/smileProCare/1.gif);
//   background-size: 100% 100%;
}

.benefits-section__gift-info {
  position: absolute;
  display: flex;
  flex-direction: column;
}

.benefits-section__gift-info--left {
  left: 16px;
  bottom: 140px;
}

.benefits-section__gift-info--right {
  right: 32px;
  bottom: 84px;
}

.benefits-section__gift-text {
  color: #0a2342;
}

.benefits-section__gift-text--normal {
  font-size: 18px;
  font-weight: normal;
}

.benefits-section__gift-text--bold {
  font-size: 18px;
  font-weight: bold;
}

.benefits-section__gift-text--thin {
  font-size: 14px;
  font-weight: 300;
}

.benefits-section__limited-badge {
  background-color: #0a2342;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 12px;
  top: -12px;
}

/* 桌面端样式 (768px及以上) */
@media (min-width: 768px) {
  .benefits-section__content {
    top: 144px;
    left: 389px;
    transform: none;
    text-align: left;
  }

  .benefits-section__title {
    font-size: 38px;
    line-height: 40px;
  }

  .benefits-section__subtitle {
    font-size: 16px;
  }

  .benefits-section__benefits-grid {
    gap: 34px;
    margin-top: 30px;
  }

  .benefits-section__benefit-item {
    width: 302px;
    height: 302px;
  }

  .benefits-section__benefit-text {
    font-size: 36px;
  }

  .benefits-section__benefit-badge {
    width: 74px;
    height: 74px;
    font-size: 24px;
  }

  .benefits-section__gift-card {
    aspect-ratio: 1 / 1;
    height: 100%;
    right: 27px;
    left: auto;
    transform: none;
  }

  .benefits-section__gift-info--left {
    left: 8px;
    top: 321px;
    bottom: auto;
  }

  .benefits-section__gift-info--right {
    right: 60px;
    bottom: 200px;
  }

  .benefits-section__gift-text--normal,
  .benefits-section__gift-text--bold {
    font-size: 36px;
  }

  .benefits-section__gift-text--thin {
    font-size: 16px;
  }

  .benefits-section__limited-badge {
    width: 136px;
    height: 136px;
    font-size: 36px;
    top: 3%;
    right: 6%;
  }
}

/* 中等屏幕调整 (992px以下) */
@media (max-width: 768px) {
  .benefits-section__benefit-item {
    width: 155px;
    height: 155px;
  }

  .benefits-section__benefit-text {
    font-size: 16px;
  }

  .benefits-section__benefit-badge {
    width: 28px;
    height: 28px;
    font-size: 14px;
    top: 0;
    right: 10px;
  }
  .benefits-section__benefit-badge {
  }

  .benefits-section__gift-card {
    width: 90%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .benefits-section__limited-badge {
    right: 0;
    top: 5px;
  }
}
@media (max-width: 350px) {
  .benefits-section__benefit-item {
    width: 90px;
    height: 90px;
  }
}
// end

// start

@media (min-width: 768px) {
  .how-to-choose {
    text-align: center;
    margin: 60px 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how-to-choose__title {
    color: #0a2342;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 200% */
  }

  .how-to-choose__description {
    color: #4b5563;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    margin-top: 26px;
  }
  .how-to-choose__description--bold {
    font-weight: 700;
  }
  .how-to-choose__button {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.43px; /* 160.217% */
    border-radius: 7.477px;
    border: 0 solid #e5e7eb;
    background: #0a2342;
    padding: 13px 22px;
    margin-top: 32px;
    width: fit-content;
  }

  .service-tip__right {
    color: #4b5563;
    text-align: start;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    margin-left: calc((100% / 2) + 60px);

  }

  .service-tip {
    max-width: 1920px;
    margin: 30px auto -137px auto;

  }
}

@media (max-width: 768px) {
  .how-to-choose {
    text-align: center;
    margin:30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how-to-choose__title {
    color: #0a2342;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 200% */
  }

  .how-to-choose__description {
    color: #4b5563;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    margin-top: 20px;
  }
  .how-to-choose__description--bold {
    font-weight: 700;
  }
  .how-to-choose__button {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.43px; /* 160.217% */
    border-radius: 7.477px;
    border: 0 solid #e5e7eb;
    background: #0a2342;
    padding: 13px 22px;
    margin-top: 15px;
  }

  .service-tip__right {
    color: #4b5563;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

  }

  .service-tip {
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }
}

// end
</style>
