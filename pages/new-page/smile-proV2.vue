<template>
  <div class="lasik">
    <!-- simleProV2 -->
    <!-- <topNotice></topNotice> -->
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
    <div
      class="container new-container mx-auto smile-NewBanner position-relative mt-20 md:mt-40 xl:mt-[216px]"
    >
      <img
        class=""
        decoding="async"
        src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-pc2.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-pc2.avif 400w,
          https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-pc2.avif 640w,
          https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-pc2.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="smile-NewBanner-Title">
        <span>SMILE Pro</span>
        <h3>{{ $t("smile_proV2.Bannertitle") }}</h3>
        <p>Small Incision Lenticule Extraction</p>
      </div>
      <div class="smile-NewBanner-Tip">
        <div class="smile-NewBanner-Tip-Title">
          <p>{{ $t("Correct.newIcl.titleList.title1") }}</p>
        </div>
        <div class="smile-NewBanner-Tip-Content">
          <p>• {{ $t("smile_proV2.Bannertext1") }}</p>
          <p>• {{ $t("smile_proV2.Bannertext2") }}</p>
        </div>
      </div>
    </div>
    <!-- 中心介绍 -->
    <section class="smile-newCenter">
      <div class="container new-container mx-auto">
        <div class="smile-newCenter-menu">
          <a href="/">{{ $t("Correct.newIcl.menuone") }} </a>&nbsp;>&nbsp;<a>{{
            $t("Correct.newIcl.menuTwo")
          }}</a
          >&nbsp;>&nbsp;<a href="/smilePro"
            >SMILE Pro {{ $t("smile_proV2.CenterTile") }}
          </a>
        </div>
      </div>
      <div class="smilePro-newCenter-content">
        <div class="smilePro-newCenter-content-text">
          <div class="container new-container">
            <div>
              <h3>SMILE Pro {{ $t("smile_proV2.CenterTile") }}</h3>
              <p>
                {{ $t("smile_proV2.p_text1")
                }}<span>{{ $t("smile_proV2.p_text2") }}</span
                >{{ $t("smile_proV2.p_text3")
                }}<span>ZEISS VISUMAX 800 SMILE®pro</span
                >{{ $t("smile_proV2.p_text4")
                }}<span class="let">{{ $t("smile_proV2.p_text5") }}</span
                >{{ $t("smile_proV2.p_text6") }}{{ $t("smile_proV2.p_text6_1")
                }}<span>{{ $t("smile_proV2.p_text7") }}</span
                >{{ $t("smile_proV2.p_text8") }}
              </p>
            </div>
          </div>
        </div>
        <div class="smilepro-Vedio">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IxvWmeOd18c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <!-- 為何選擇希瑪? -->
    <section class="icl-WhatChoose">
      <h3 class="icl-WhatChoose-title">
        {{ $t("Correct.newIcl.section2.title") }}
      </h3>
      <div class="icl-WhatChoose-content-one container new-container">
        <div class="icl-WhatChoose-content-one-img">
          <img
            class=""
            decoding="async"
            src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc-.avif"
            alt=""
            loading="lazy"
            width="100%"
            height="100%"
            srcset="
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 400w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 640w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif
            "
            sizes=" (max-width: 992px) 100vw,1216px"
          />
        </div>
        <div class="icl-WhatChoose-content-one-text">
          <p>
            {{ $t("smile_proV2.WhyChoose_p_text1")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text1_1") }}</span
            >{{ $t("smile_proV2.WhyChoose_p_text1_2") }}
          </p>
          <p>
            {{ $t("smile_proV2.WhyChoose_p_text2")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text3") }}</span
            >{{ $t("smile_proV2.WhyChoose_p_text4")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text5") }}</span
            >{{ $t("smile_proV2.WhyChoose_p_text6")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text7") }}</span
            >{{ $t("smile_proV2.WhyChoose_p_text8") }}
          </p>
        </div>
      </div>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="mx-auto icl-btn"
      >
        <span>{{ $t("Correct.newIcl.apt_btn") }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M2 14.5399L14.5714 1.96851"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M3.83179 1.5686H14.9999V12.3686"
            stroke="white"
            stroke-width="2.7"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </section>
    <!-- 四大特点 -->
    <section class="smilepro-four-feature">
      <div class="">
        <div class="smilepro-four-feature-Box">
          <div class="smilepro-four-feature-Box-top">
            <h3>
              <span>SMILE Pro </span><br class="d-none d-lg-block" />{{
                $t("smile_proV2.four_feature.title")
              }}
            </h3>
            <p>
              ZEISS VISUMAX 800 SMILE®pro<br />
              {{ $t("smile_proV2.four_feature.smallTilte") }}
            </p>
          </div>
          <div class="smilepro-four-feature-Box-List">
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="smilepro-four-feature-Box-List-item-number">01</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h4>{{ $t("smile_proV2.four_feature.item1_title1") }}</h4>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p1_1")
                  }}<br class="d-lg-none" />({{
                    $t("smile_proV2.four_feature.item1_p1_2")
                  }})
                </p>
              </div>
            </div>
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="smilepro-four-feature-Box-List-item-number d-lg-none">
                02
              </div>
              <div class="smilepro-four-feature-Box-List-item-text d-lg-none">
                <h4>{{ $t("smile_proV2.four_feature.item1_title2") }}</h4>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p2_1")
                  }}<br class="d-lg-none" />{{
                    $t("smile_proV2.four_feature.item1_p2_2")
                  }}
                </p>
              </div>
              <div
                class="smilepro-four-feature-Box-List-item-number d-none d-lg-block"
              >
                03
              </div>
              <div
                class="smilepro-four-feature-Box-List-item-text d-none d-lg-block"
              >
                <h4>{{ $t("smile_proV2.four_feature.item1_title3") }}</h4>
                <p>{{ $t("smile_proV2.four_feature.item1_p3_1") }}</p>
              </div>
            </div>
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="smilepro-four-feature-Box-List-item-number d-lg-none">
                03
              </div>
              <div class="smilepro-four-feature-Box-List-item-text d-lg-none">
                <h4>{{ $t("smile_proV2.four_feature.item1_title3") }}</h4>
                <p>{{ $t("smile_proV2.four_feature.item1_p3_1") }}</p>
              </div>
              <div
                class="smilepro-four-feature-Box-List-item-number d-none d-lg-block"
              >
                02
              </div>
              <div
                class="smilepro-four-feature-Box-List-item-text d-none d-lg-block"
              >
                <h4>{{ $t("smile_proV2.four_feature.item1_title2") }}</h4>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p2_1")
                  }}<br class="d-lg-none" />{{
                    $t("smile_proV2.four_feature.item1_p2_2")
                  }}
                </p>
              </div>
            </div>
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="smilepro-four-feature-Box-List-item-number">04</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h4>{{ $t("smile_proV2.four_feature.item1_title4") }}</h4>
                <p>{{ $t("smile_proV2.four_feature.item1_p4_1") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- start  SMILE Pro 微笑激光矯視費用-->
    <div
      class="bg-[#F6FAFD] py-8 px-2 md:px-0 md:pb-32 md:pt-24 mb-8 mt-[50px] md:mb-22 md:mt-[166px]"
    >
      <div class="w-full flex flex-col items-center mx-auto">
        <h2
          class="text-[#4A74B8] text-xl md:text-3xl font-black mb-6 md:mb-10 tracking-wider text-center"
        >
          SMILE Pro 微笑激光矯視費用
        </h2>
        <div class="w-full">
          <div class="space-y-7 lg:space-y-[60px]">
            <div>
              <div
                class="bg-[#8CB3F333] text-[#4570B6] text-base lg:text-3xl text-center font-bold rounded-xl py-[6px] md:py-[12px] mb-[20px] max-w-3xl md:max-w-lg mx-auto"
              >
                SMILE Pro 費用
              </div>
              <div class="space-y-2 md:space-y-4 max-w-[900px] mx-auto">
                <div
                  class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center transition-all group"
                >
                  <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                    SMILE Pro<br /><span>微笑激光矯視</span>
                  </div>
                  <div
                    class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform"
                  >
                    <span class="text-2xl md:text-5xl">港幣</span
                    ><span class="text-2xl md:text-5xl">$24,000</span>
                  </div>
                </div>
                <div
                  class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center transition-all group"
                >
                  <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                    術前檢查費用
                  </div>
                  <div
                    class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform"
                  >
                    <span class="text-2xl md:text-5xl">港幣</span
                    ><span class="text-2xl md:text-5xl">$100</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="bg-[#8CB3F333] text-[#4570B6] text-base lg:text-3xl text-center font-bold rounded-xl py-[6px] md:py-[12px] mb-[20px] max-w-3xl md:max-w-lg mx-auto"
              >
                SMILE Pro Care費用
              </div>
              <div class="space-y-2 md:space-y-4 max-w-[900px] mx-auto">
                <div
                  class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center transition-all group"
                >
                  <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                    SMILE Pro care<br /><span>微笑激光矯視</span>
                  </div>
                  <div
                    class="text-[#F59E0B] font-bold tracking-tight text-right group-hover:scale-105 transition-transform"
                  >
                    <span class="text-2xl md:text-5xl">港幣</span
                    ><span class="text-2xl md:text-5xl">$26,000*</span>
                    <p class="text-[10px] md:text-xl text-text">
                      EPS用戶港幣$25,500<sup>#</sup>
                    </p>
                  </div>
                </div>
                <div
                  class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center transition-all group"
                >
                  <div class="text-[#6D6E71] text-base md:text-3xl font-bold">
                    術前檢查費用
                  </div>
                  <div
                    class="text-[#F59E0B] font-bold tracking-tight group-hover:scale-105 transition-transform"
                  >
                    <span class="text-2xl md:text-5xl">港幣</span
                    ><span class="text-2xl md:text-5xl">$100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 md:mt-12 flex flex-col items-center">
            <a
              href="/fee#table1"
              class="md:w-auto bg-[#4570B6] text-white px-10 py-4 md:py-5 md:px-[100px] rounded-full text-2xl md:text-4xl font-bold flex items-center justify-center gap-3"
            >
              查看矯視費用詳情
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[13px] w-[13px] md:h-[26px] md:w-[26px]"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M3.18018 30.3632L29.8334 3.70996"
                  stroke="white"
                  stroke-width="6.36042"
                  stroke-linecap="round"
                />
                <path
                  d="M7.06396 2.8623H30.742V25.7598"
                  stroke="white"
                  stroke-width="5.72438"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <div
              class="mt-2 md:mt-4 text-center font-light text-text text-base md:text-2xl leading-relaxed"
            >
              <p>此為香港價錢，雙眼價錢</p>
              <p>
                矯視費用已包括術前檢查費用港幣$100（若沒有預約進行矯視，需另外繳付術前檢查費用）
              </p>
              <p>
                <sup>#</sup>免責聲明：受條款及細則約束。僅適用於以 EPS
                全數支付之客戶。如有任何爭議，<br
                  class="hidden lg:block"
                />希瑪眼科將保留最終決定權。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end SMILE Pro 微笑激光矯視費用 -->
    <!-- 表格 -->
    <section class="smilepro-difference">
      <div class="smilepro-difference-title">
        <div>
          SMILE/SMILE PRO/ICL<br class="d-lg-none" />
          大不同
        </div>
      </div>
      <table class="table custom-comparison-table">
        <thead>
          <tr>
            <th></th>
            <th class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto size-9 md:size-[52px]"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M26.732 40.188c-3.451 0-6.713-1.3-9.23-3.68a13.36 13.36 0 0 1-4.193-9.391 13.34 13.34 0 0 1 3.677-9.602 13.36 13.36 0 0 1 9.388-4.193 13.33 13.33 0 0 1 9.602 3.676 13.36 13.36 0 0 1 4.193 9.391 13.34 13.34 0 0 1-3.677 9.602 13.36 13.36 0 0 1-9.391 4.193c-.123 0-.25.004-.372.004zm.021-26.519a13 13 0 0 0-9.51 4.084 13 13 0 0 0-3.579 9.353 13 13 0 0 0 4.08 9.145 12.97 12.97 0 0 0 9.354 3.578 13 13 0 0 0 9.145-4.08 13 13 0 0 0 3.578-9.353 13 13 0 0 0-4.08-9.145 13 13 0 0 0-8.988-3.585z"
                  stroke="#4570b6"
                />
                <path
                  d="M51.148.707 2.083 52.555l.255.242L51.403.948z"
                  stroke="#4570b6"
                />
                <path
                  d="m.948 1.707-.241.255 51.83 49.083.243-.255z"
                  stroke="#4570b6"
                />
              </svg>
              <span>SMILE</span><br />微笑<br class="d-lg-none" />矯視
            </th>
            <th class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto size-9 md:size-[52px]"
                viewBox="0 0 55 55"
                fill="none"
              >
                <path
                  d="M27.092 40.776c7.557 0 13.684-6.127 13.684-13.684 0-7.558-6.127-13.684-13.684-13.684-7.558 0-13.684 6.126-13.684 13.684s6.126 13.684 13.684 13.684ZM1.759 53.836 52.425.344M.344 1.758l53.492 50.666"
                  stroke="#fff"
                  stroke-miterlimit="10"
                />
                <path
                  d="M27.092 37.275c5.624 0 10.183-4.56 10.183-10.184s-4.56-10.183-10.183-10.183-10.184 4.56-10.184 10.183 4.56 10.184 10.184 10.184Z"
                  stroke="#fff"
                  stroke-miterlimit="10"
                />
              </svg>
              <span>SMILE<br class="d-lg-none" />PRO</span><br />微笑矯視
            </th>
            <th class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto size-10 md:size-[52px]"
                viewBox="0 0 56 36"
                fill="none"
              >
                <path
                  d="M54.53 28.344s-.025-.024-.049-.06a.3.3 0 0 0-.048-.06c-.318-.435-1.341-1.998-1.341-4.463 0-2.935-.073-6.202-.073-6.202s.073-3.278.073-6.202c0-2.468 1.023-4.027 1.34-4.462.013-.024.037-.036.05-.06a.3.3 0 0 0 .047-.06v-.013c.355-.47.564-1.059.564-1.691a2.86 2.86 0 0 0-2.855-2.855c-11.51.282-17.02-.919-17.02-.919C33.295.802 30.673.5 27.798.5c-2.88 0-5.498.306-7.423.797 0 0-5.509 1.2-17.019.919A2.86 2.86 0 0 0 .5 5.07c0 .636.213 1.22.564 1.691v.012s.024.025.048.06c.012.025.036.05.048.061.319.435 1.342 1.998 1.342 4.462 0 2.936.072 6.202.072 6.202s-.072 3.279-.072 6.202c0 2.469-1.023 4.028-1.342 4.463-.012.024-.036.036-.048.06a.3.3 0 0 0-.048.06v.012A2.8 2.8 0 0 0 .5 30.048a2.86 2.86 0 0 0 2.855 2.855c11.51-.282 17.02.918 17.02.918 1.924.496 4.546.798 7.422.798 2.88 0 5.497-.306 7.422-.798 0 0 5.51-1.2 17.019-.918a2.86 2.86 0 0 0 2.855-2.855 2.9 2.9 0 0 0-.564-1.704Z"
                  stroke="#4570b6"
                  stroke-miterlimit="10"
                />
                <path
                  d="M3.444 5.353a.503.503 0 1 0 0-1.007.503.503 0 0 0 0 1.007ZM52.31 30.785a.503.503 0 1 0 0-1.007.503.503 0 0 0 0 1.007Zm-24.525-.093c7.26 0 13.144-5.885 13.144-13.145S35.045 4.402 27.786 4.402 14.64 10.287 14.64 17.547s5.885 13.145 13.145 13.145ZM46.262 2.22a23.92 23.92 0 0 1 5.533 15.34 23.87 23.87 0 0 1-5.485 15.27m-37.002.057a23.92 23.92 0 0 1-5.534-15.34A23.87 23.87 0 0 1 9.26 2.276m3.45 15.774a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007Zm30.145 0a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007Z"
                  stroke="#4570b6"
                  stroke-miterlimit="10"
                />
                <path
                  d="M27.793 18.05a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007ZM42.947 2.256s-.906 1.164-5.062 1.164-5.288-1.2-9.609-1.2-5.449 1.2-9.609 1.2-5.062-1.164-5.062-1.164m29.342 30.667s-.906-1.164-5.062-1.164c-4.16 0-5.288 1.2-9.609 1.2s-5.449-1.2-9.609-1.2-5.062 1.164-5.062 1.164"
                  stroke="#4570b6"
                  stroke-miterlimit="10"
                />
              </svg>
              <span>ICL</span><br />植入式<br class="d-lg-none" />隱形眼鏡
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 50 46"
                  fill="none"
                >
                  <g clip-path="url(#a)" fill="#4570b6">
                    <path
                      d="M28.935 45.195c-7.764 0-14.87-4.26-18.538-11.11a.867.867 0 0 1 .36-1.176.87.87 0 0 1 1.175.36 19.26 19.26 0 0 0 17.003 10.19c10.629 0 19.276-8.649 19.276-19.277S39.564 4.906 28.935 4.906c-7.118 0-13.632 3.9-17.002 10.183a.86.86 0 0 1-1.177.354.86.86 0 0 1-.353-1.176A21 21 0 0 1 28.94 3.163c11.592 0 21.02 9.428 21.02 21.019s-9.428 21.019-21.02 21.019zM8.788 25.048H.87a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.743"
                    />
                    <path
                      d="M13.31 29.801H5.393a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.743m0-9.501H5.393a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.743m24.176-7.965a.85.85 0 0 1-.488-.153 14.4 14.4 0 0 0-8.111-2.48c-2.901 0-5.71.86-8.112 2.48a.87.87 0 0 1-1.206-.231.87.87 0 0 1 .231-1.207 16.16 16.16 0 0 1 9.093-2.785c3.26 0 6.399.963 9.092 2.785.396.268.506.81.232 1.207a.87.87 0 0 1-.72.384zm-5.991 10.086a.9.9 0 0 1-.616-.25.87.87 0 0 1 0-1.23l6.332-6.388a.87.87 0 0 1 1.231 0 .87.87 0 0 1 0 1.231l-6.331 6.387a.87.87 0 0 1-.616.256z"
                    />
                    <path
                      d="M28.941 28.71a4.54 4.54 0 0 1-4.534-4.534 4.54 4.54 0 0 1 4.534-4.534 4.54 4.54 0 0 1 4.534 4.534 4.54 4.54 0 0 1-4.534 4.534m0-7.326a2.795 2.795 0 0 0-2.79 2.792 2.8 2.8 0 0 0 2.79 2.79 2.8 2.8 0 0 0 2.792-2.79 2.8 2.8 0 0 0-2.792-2.791m1.494-19.642h-3.17a.871.871 0 1 1 0-1.743h3.17a.871.871 0 1 1 0 1.743"
                    />
                    <path
                      d="M28.85 4.906a.87.87 0 0 1-.871-.872V.871a.871.871 0 1 1 1.742 0v3.17c0 .48-.39.87-.87.87zM43.257 6.55a.85.85 0 0 1-.476-.14l-2.657-1.724a.873.873 0 0 1 .951-1.463l2.657 1.725a.873.873 0 0 1-.475 1.603"
                    />
                    <path
                      d="M40.204 8.349a.873.873 0 0 1-.731-1.347l1.724-2.657a.873.873 0 0 1 1.463.95l-1.725 2.658a.87.87 0 0 1-.731.396M14.54 6.6a.87.87 0 0 1-.73-.396.874.874 0 0 1 .255-1.207l2.658-1.724a.874.874 0 0 1 1.206.256.874.874 0 0 1-.256 1.206L15.016 6.46a.85.85 0 0 1-.475.14"
                    />
                    <path
                      d="M17.594 8.392a.87.87 0 0 1-.731-.396l-1.725-2.657a.874.874 0 0 1 .256-1.207.874.874 0 0 1 1.207.256l1.724 2.657a.874.874 0 0 1-.731 1.347"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h49.948v45.195H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <p>激光時間<span class="block">(單一眼睛)</span></p>
              </div>
            </td>
            <td>約23-25秒</td>
            <td>約10-16秒</td>
            <td>不適用</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 55 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_17876_222)">
                    <path
                      d="M27.4266 0.849609C43.1171 0.849609 54.0036 15.8969 54.0036 15.8969C54.0036 15.8969 43.1171 30.9442 27.4266 30.9442C11.736 30.9442 0.849548 15.8969 0.849548 15.8969C0.849548 15.8969 11.736 0.849609 27.4266 0.849609Z"
                      stroke="#4570B6"
                      stroke-width="1.70178"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.79559 18.0411C6.5927 13.8097 15.658 5.34424 27.4266 5.34424C39.1952 5.34424 48.2604 13.8097 52.0576 18.0411"
                      stroke="#4570B6"
                      stroke-width="1.70178"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5732 24.1047C32.6832 24.1047 36.8257 20.2113 36.8257 15.4086C36.8257 10.6058 32.6832 6.7124 27.5732 6.7124C22.4631 6.7124 18.3206 10.6058 18.3206 15.4086C18.3206 20.2113 22.4631 24.1047 27.5732 24.1047Z"
                      stroke="#4570B6"
                      stroke-width="1.37879"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5731 19.219C29.8126 19.219 31.6281 17.5129 31.6281 15.4083C31.6281 13.3038 29.8126 11.5977 27.5731 11.5977C25.3337 11.5977 23.5182 13.3038 23.5182 15.4083C23.5182 17.5129 25.3337 19.219 27.5731 19.219Z"
                      stroke="#4570B6"
                      stroke-width="1.35708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.0921 20.9421L9.19557 18.749C9.19557 18.749 13.2587 21.4985 15.6987 21.2542"
                      stroke="#4570B6"
                      stroke-width="1.35708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4538 19.2895L13.7473 16.7002"
                      stroke="#4570B6"
                      stroke-width="1.35708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M47.6851 22.6441L45.2288 22.0117C45.2288 22.0117 45.6169 17.2157 44.6887 14.792"
                      stroke="#4570B6"
                      stroke-width="1.35708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.4425 18.5703L44.6968 19.9681"
                      stroke="#4570B6"
                      stroke-width="1.35708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.9502 28.406L18.9448 26.1722L17.8972 24.6089"
                      stroke="#4570B6"
                      stroke-width="1.14537"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.595 25.0488L18.9448 26.1725"
                      stroke="#4570B6"
                      stroke-width="1.14537"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.3013 26.748L40.2346 24.7856L38.5709 23.9062"
                      stroke="#4570B6"
                      stroke-width="1.14537"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.1548 23.0132L40.2347 24.7855"
                      stroke="#4570B6"
                      stroke-width="1.14537"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.6437 27.0659L29.3374 28.594L31.0961 28.6564L31.2346 30.6079"
                      stroke="#4570B6"
                      stroke-width="1.14537"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17876_222">
                      <rect width="54.8558" height="31.7964" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>傷口大小</p>
              </div>
            </td>
            <td>約2mm</td>
            <td>約2mm</td>
            <td>3mm</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <g clip-path="url(#a)" fill="#4570b6">
                    <path
                      d="M29.017 26.16a3.86 3.86 0 0 1-3.856-3.857c0-1.925 2.996-6.268 3.338-6.758a.636.636 0 0 1 1.037 0c.34.49 3.338 4.833 3.338 6.758a3.86 3.86 0 0 1-3.857 3.857m0-9.126c-1.163 1.77-2.592 4.274-2.592 5.27a2.596 2.596 0 0 0 2.592 2.591 2.595 2.595 0 0 0 2.592-2.592c0-.995-1.429-3.496-2.592-5.269"
                    />
                    <path
                      d="M20.318 40.07C5.835 40.07.31 30.538.082 30.13a.64.64 0 0 1 0-.62c.228-.405 5.756-9.94 20.24-9.94v1.264c-12.306 0-17.869 7.368-18.94 8.986 1.074 1.612 6.666 8.986 18.94 8.986 12.273 0 17.97-7.358 19.076-8.986-.582-.86-2.44-3.325-5.839-5.44l.667-1.075c4.464 2.776 6.392 6.06 6.47 6.199a.63.63 0 0 1 0 .632c-.233.405-5.894 9.935-20.371 9.935z"
                    />
                    <path
                      d="M20.388 40.07c-5.652 0-10.25-4.598-10.25-10.25s4.598-10.25 10.25-10.25c1.125 0 2.232.18 3.287.536l-.404 1.198a9 9 0 0 0-2.883-.47c-4.956 0-8.986 4.03-8.986 8.986s4.03 8.986 8.986 8.986 8.986-4.03 8.986-8.986a9 9 0 0 0-.404-2.674l1.207-.376c.307.983.462 2.01.462 3.047 0 5.651-4.6 10.25-10.251 10.25zm9.078-25.638a.63.63 0 0 1-.446-.186l-2.24-2.241a.627.627 0 0 1 0-.892l2.446-2.446q.613-.614 1.078-1.318l.62-.942c.353-.54.77-1.05 1.238-1.517L37.05 0l.895.894-4.89 4.89q-.612.614-1.078 1.318l-.62.942a9.6 9.6 0 0 1-1.239 1.517L28.12 11.56l1.347 1.347 1.998-1.998a9.6 9.6 0 0 1 1.517-1.24l.942-.619c.468-.306.91-.67 1.318-1.077l4.865-4.865L41 4l-4.864 4.865c-.468.468-.98.885-1.518 1.24l-.942.619c-.468.306-.91.67-1.318 1.078l-2.446 2.446a.63.63 0 0 1-.446.187z"
                    />
                    <path
                      d="M20.388 34.565a4.748 4.748 0 0 1-4.42-6.47.63.63 0 0 1 .38-.364.63.63 0 0 1 .522.047c.237.136.509.209.79.209a1.623 1.623 0 0 0 1.561-2.052.632.632 0 0 1 .51-.809 4.748 4.748 0 0 1 5.405 4.697 4.75 4.75 0 0 1-4.745 4.745zm-3.42-5.396q-.06.318-.06.654a3.484 3.484 0 0 0 3.48 3.48 3.485 3.485 0 0 0 3.48-3.48 3.45 3.45 0 0 0-3.322-3.477v.022a2.89 2.89 0 0 1-3.578 2.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h41v40.071H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <p>術後眼乾<br />情況</p>
              </div>
            </td>
            <td>輕微</td>
            <td>輕微</td>
            <td>無</td>
          </tr>
          <!-- <tr>
            <td>矯視過程<br />痛楚</td>
            <td>無</td>
            <td>無</td>
            <td>無</td>
          </tr>  -->
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 40 34"
                  fill="none"
                >
                  <g
                    clip-path="url(#a)"
                    stroke="#4570b6"
                    stroke-width="1.188"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21.913 10.68c9.955 1.395 16.68 11.283 16.68 11.283S30.81 33.409 19.592 33.409.594 21.963.594 21.963s6.931-10.192 17.139-11.34"
                    />
                    <path
                      d="M17.733 14.074a8.16 8.16 0 0 0-6.068 7.888 8.158 8.158 0 1 0 16.316 0 8.16 8.16 0 0 0-6.068-7.888"
                    />
                    <path
                      d="M25.481 21.66a4.68 4.68 0 0 0-1.989-3.831M24.752.594h-9.86c-.711 0-1.288.577-1.288 1.29v1.791c0 .712.577 1.289 1.289 1.289h9.86c.711 0 1.288-.577 1.288-1.289V1.883c0-.712-.577-1.289-1.289-1.289"
                    />
                    <path
                      d="M20.546 7.702h-1.447c-.72 0-1.307-.586-1.307-1.307V4.961h4.061v1.434c0 .721-.586 1.307-1.307 1.307m-.723 0v14.26m0 2.824v.306m2.824-3.13h.306m-6.26 0h.306m4.821 1.998.215.214m-4.427-4.426.218.218m3.994 0 .215-.218m-4.427 4.427.218-.216"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h39.187v34H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <p>矯視<br class="d-lg-none" />準確度</p>
              </div>
            </td>
            <td>極高</td>
            <td>極高</td>
            <td>極高</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 39 42"
                  fill="none"
                >
                  <path
                    d="M38.323 7.898a1 1 0 0 1-.123-.01c-2.909-.534-4.336-2.41-5.04-4.116-.703 1.706-2.134 3.582-5.04 4.116a.68.68 0 1 1-.244-1.34C32.406 5.717 32.48.88 32.484.677a.679.679 0 0 1 1.36.004c0 .204.078 5.04 4.608 5.872.37.068.611.422.547.792a.68.68 0 0 1-.666.557z"
                    fill="#4570b6"
                  />
                  <path
                    d="M33.156 14.436a.68.68 0 0 1-.68-.676c0-.207-.078-5.043-4.608-5.872a.68.68 0 0 1-.547-.792.68.68 0 0 1 .792-.547c5.652 1.036 5.72 7.146 5.72 7.208a.68.68 0 0 1-.68.68z"
                    fill="#4570b6"
                  />
                  <path
                    d="M33.156 14.436a.677.677 0 0 1-.676-.68c0-.06.071-6.17 5.72-7.207a.68.68 0 1 1 .244 1.339c-4.53.832-4.605 5.668-4.608 5.872a.68.68 0 0 1-.68.676M9.12 31.401a1 1 0 0 1-.123-.01c-1.958-.36-3.11-1.543-3.745-2.807-.636 1.264-1.788 2.45-3.745 2.807a.68.68 0 1 1-.245-1.339c3.27-.601 3.31-4.081 3.31-4.23a.68.68 0 1 1 1.36 0c0 .145.06 3.632 3.31 4.227.37.068.611.421.547.792a.68.68 0 0 1-.666.557z"
                    fill="#4570b6"
                  />
                  <path
                    d="M5.252 36.298a.68.68 0 0 1-.68-.676c0-.157-.064-3.636-3.31-4.231a.68.68 0 1 1 .245-1.34c3.497.643 4.421 3.923 4.424 5.564a.68.68 0 0 1-.68.68z"
                    fill="#4570b6"
                  />
                  <path
                    d="M5.252 36.298a.68.68 0 0 1-.676-.68c0-1.644.927-4.924 4.424-5.566a.681.681 0 0 1 .245 1.339c-3.249.595-3.31 4.081-3.31 4.23a.68.68 0 0 1-.68.677zM.682 7.188a.68.68 0 0 1-.119-1.35c2.035-.373 2.08-2.579 2.08-2.674a.678.678 0 0 1 1.355.003c0 .092.048 2.298 2.08 2.671a.68.68 0 1 1-.244 1.34c-1.237-.228-2.03-.911-2.515-1.686C2.833 6.27 2.04 6.953.804 7.177a1 1 0 0 1-.122.01"
                    fill="#4570b6"
                  />
                  <path
                    d="M3.318 10.528a.68.68 0 0 1-.68-.676c0-.105-.05-2.3-2.08-2.675a.68.68 0 1 1 .245-1.339c2.525.463 3.195 2.825 3.195 4.007a.68.68 0 0 1-.68.68z"
                    fill="#4570b6"
                  />
                  <path
                    d="M3.318 10.529a.68.68 0 0 1-.68-.68c0-1.183.67-3.545 3.195-4.007a.681.681 0 0 1 .245 1.34c-2.053.376-2.08 2.579-2.08 2.67 0 .374-.306.68-.68.68zM35.793 38.5a1 1 0 0 1-.122-.01c-1.237-.227-2.029-.91-2.515-1.685-.486.778-1.278 1.461-2.515 1.685a.68.68 0 1 1-.244-1.339c2.035-.373 2.08-2.579 2.08-2.674a.678.678 0 0 1 1.355.003c0 .092.048 2.298 2.08 2.671a.68.68 0 0 1-.119 1.35"
                    fill="#4570b6"
                  />
                  <path
                    d="M33.156 41.838a.68.68 0 0 1-.68-.676c0-.106-.05-2.301-2.08-2.675a.68.68 0 1 1 .245-1.339c2.525.462 3.195 2.824 3.195 4.007a.68.68 0 0 1-.68.68z"
                    fill="#4570b6"
                  />
                  <path
                    d="M33.156 41.838h-.003a.68.68 0 0 1-.677-.68c0-1.183.67-3.544 3.195-4.007a.68.68 0 1 1 .245 1.34c-2.033.373-2.08 2.579-2.08 2.674a.68.68 0 0 1-.68.673m-16.074-5.152c-3.409 0-6.654-1.023-9.387-2.96l.785-1.108c2.502 1.774 5.475 2.708 8.602 2.708 7.945 0 14.409-6.15 14.409-13.712S25.027 7.9 17.081 7.9 2.674 14.05 2.674 21.611c0 1.787.356 3.527 1.056 5.168l-1.25.534a14.4 14.4 0 0 1-1.17-5.703c0-8.312 7.076-15.071 15.77-15.071 8.692 0 15.768 6.762 15.768 15.071s-7.078 15.073-15.77 15.073z"
                    fill="#4570b6"
                  />
                  <path
                    d="M24.354 32.04c-4.683 0-8.496-4.506-8.496-10.042s3.81-10.042 8.496-10.042c4.687 0 8.496 4.506 8.496 10.042S29.04 32.04 24.354 32.04m0-18.725c-3.935 0-7.136 3.895-7.136 8.683s3.201 8.683 7.136 8.683 7.137-3.895 7.137-8.683-3.201-8.683-7.137-8.683"
                    fill="#4570b6"
                  />
                  <path
                    d="M24.942 26.963c-2.297 0-4.163-2.226-4.163-4.965 0-1.142.333-2.26.935-3.14l1.121.768c-.448.66-.697 1.502-.697 2.372 0 1.988 1.258 3.606 2.804 3.606s2.807-1.618 2.807-3.606-1.257-3.605-2.807-3.605v-1.36c2.297 0 4.166 2.226 4.166 4.965 0 2.74-1.869 4.965-4.166 4.965"
                    fill="#4570b6"
                  />
                </svg>
                <p>角膜自然<br />癒合需<br class="d-lg-none" />時間</p>
              </div>
            </td>
            <td>數天</td>
            <td>數天</td>
            <td>數天</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <g clip-path="url(#a)" fill="#4570b6">
                    <path
                      d="M1.053 27.63 0 27.068c.206-.385 5.076-9.433 11.52-12.767 8.961-4.64 11.114-6.868 9.6-9.924-1.286-2.595-2.213-3.501-2.222-3.51L19.715 0c.041.042 1.073 1.023 2.475 3.847 2.117 4.27-1.41 7.005-10.118 11.514C5.952 18.528 1.1 27.54 1.052 27.629"
                    />
                    <path
                      d="m22.044 37.223-.394-1.128c.415-.146.683-.384.82-.736.203-.522.069-1.172-.092-1.467-.749-1.39-2.711-1.483-5.192-1.602-1.843-.09-3.934-.188-6.01-.853-4.976-1.59-9.39-5.979-9.575-6.164l.844-.84c.045.044 4.399 4.368 9.093 5.871 1.926.617 3.933.713 5.701.796 2.747.132 5.118.245 6.185 2.228.31.575.492 1.595.155 2.466-.262.677-.796 1.172-1.538 1.432z"
                    />
                    <path
                      d="m21.865 32.424-1.145-.331c3.253-11.234-1.92-21.501-1.971-21.606l1.061-.545c.224.435 5.443 10.798 2.058 22.482z"
                    />
                    <path
                      d="M21.847 30.385c-4.718-.284-8.559-4.381-8.559-9.135 0-4.031 2.932-7.753 6.97-8.847l.313 1.15c-3.528.958-6.09 4.194-6.09 7.697 0 4.134 3.337 7.697 7.438 7.942l-.072 1.19z"
                    />
                    <path
                      d="M22.259 26.451a5.072 5.072 0 0 1-4.852-6.54.594.594 0 0 1 .686-.414 1.294 1.294 0 0 0 1.461-1.28c0-.163-.03-.324-.093-.473a.6.6 0 0 1 .251-.743 5 5 0 0 1 1.753-.626l.185 1.178q-.488.077-.936.271.03.194.03.39a2.49 2.49 0 0 1-2.3 2.479q-.06.345-.059.689a3.88 3.88 0 0 0 3.874 3.874zm10.434 2.684h-8.729v1.193h8.729z"
                    />
                    <path
                      d="m30.6 32.67-.844-.845 2.096-2.093-2.096-2.097.844-.84 2.937 2.937zm2.093-18.446h-8.729v1.193h8.729z"
                    />
                    <path
                      d="m30.6 17.758-.844-.844 2.096-2.094-2.096-2.096.844-.84 2.937 2.936zm6.059 3.922h-7.927v1.192h7.927z"
                    />
                    <path
                      d="m34.562 25.213-.844-.844 2.097-2.093-2.097-2.096.844-.841 2.938 2.937z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h37.5v37.223H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <p>角膜瓣<br />移位機會</p>
              </div>
            </td>
            <td>無</td>
            <td>無</td>
            <td>無</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-9 md:size-12 lg:size-[52px]"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <g clip-path="url(#a)" fill="#4570b6">
                    <path
                      d="M17.5 30.437c-7.437 0-14.28-3.993-17.435-10.174a.6.6 0 0 1 0-.546C3.221 13.538 10.063 9.544 17.5 9.544s14.279 3.994 17.435 10.175a.6.6 0 0 1 0 .545c-3.156 6.18-9.998 10.174-17.435 10.174M1.276 19.987c3.013 5.627 9.344 9.247 16.224 9.247s13.21-3.62 16.224-9.247C30.71 14.36 24.38 10.739 17.5 10.739s-13.21 3.62-16.224 9.248"
                    />
                    <path
                      d="M17.5 30.437c-5.762 0-10.447-4.685-10.447-10.447S11.738 9.543 17.5 9.543 27.947 14.23 27.947 19.99c0 5.762-4.685 10.447-10.447 10.447m0-19.698c-5.1 0-9.248 4.147-9.248 9.248s4.147 9.247 9.248 9.247 9.248-4.147 9.248-9.247-4.148-9.248-9.248-9.248"
                    />
                    <path
                      d="M17.5 24.111a4.126 4.126 0 0 1-4.12-4.12c0-.246.023-.504.073-.761a.6.6 0 0 1 .307-.42.61.61 0 0 1 .519-.022q.29.127.607.127c.85 0 1.542-.692 1.542-1.542q0-.311-.127-.607a.6.6 0 0 1 .442-.826 4 4 0 0 1 .757-.073 4.126 4.126 0 0 1 4.12 4.12 4.126 4.126 0 0 1-4.12 4.12zm-2.921-4.016a2.927 2.927 0 0 0 2.921 2.813c1.576 0 2.921-1.31 2.921-2.92a2.904 2.904 0 0 0-2.813-2.922 2.744 2.744 0 0 1-3.029 3.029"
                    />
                    <path
                      d="M14.883 20.114c-1.511 0-2.74-1.23-2.74-2.74s1.229-2.741 2.74-2.741c1.51 0 2.74 1.23 2.74 2.74s-1.23 2.74-2.74 2.74m0-4.282c-.85 0-1.542.692-1.542 1.541 0 .85.692 1.542 1.542 1.542a1.542 1.542 0 0 0 0-3.083"
                    />
                    <path
                      d="M17.5 17.066a.6.6 0 0 1-.6-.6V6.972a.6.6 0 0 1 1.2 0v9.494a.6.6 0 0 1-.6.6"
                    />
                    <path
                      d="M20.214 7.572h-5.431a.6.6 0 0 1-.6-.6V4.518a.6.6 0 0 1 .6-.6h5.43a.6.6 0 0 1 .6.6v2.456a.6.6 0 0 1-.6.6m-4.828-1.199h4.232V5.116h-4.232z"
                    />
                    <path
                      d="M20.96 5.116h-6.92a.6.6 0 0 1-.564-.4L12.092.8a.603.603 0 0 1 .565-.8h9.69a.6.6 0 0 1 .565.8l-1.384 3.917a.6.6 0 0 1-.565.4zm-6.497-1.2h6.073l.961-2.72h-7.994z"
                    />
                    <path
                      d="M23.834 1.2H11.166a.6.6 0 0 1 0-1.2h12.672a.6.6 0 0 1 0 1.2zM17.5 35.653c-7.288 0-13.718-5.158-15.29-12.269a.6.6 0 0 1 1.172-.257c1.45 6.565 7.388 11.33 14.122 11.33s12.668-4.765 14.121-11.33a.6.6 0 0 1 .715-.458.604.604 0 0 1 .457.715c-1.572 7.111-8.002 12.27-15.29 12.27zm14.706-18.329a.6.6 0 0 1-.585-.47c-.98-4.423-4.04-8.182-8.187-10.054a.6.6 0 0 1-.3-.792.595.595 0 0 1 .792-.3c4.49 2.026 7.807 6.096 8.864 10.89a.598.598 0 0 1-.588.73zm-29.412-.001a.604.604 0 0 1-.588-.73C3.266 11.8 6.58 7.729 11.07 5.703a.6.6 0 0 1 .792.3.6.6 0 0 1-.3.792C7.415 8.667 4.356 12.422 3.376 16.85a.6.6 0 0 1-.585.469z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h35v35.653H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <p>術中定位</p>
              </div>
            </td>
            <td>手動調整</td>
            <td>自動調整</td>
            <td>術中定位導航<br />系統 Verion</td>
          </tr>
        </tbody>
      </table>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="mx-auto icl-btn"
      >
        <span>{{ $t("Correct.newIcl.apt_btn") }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M2 14.5399L14.5714 1.96851"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M3.83179 1.5686H14.9999V12.3686"
            stroke="white"
            stroke-width="2.7"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </section>
    <!-- 过程和介绍vedio -->
    <section class="icl-introVedio">
      <div class="icl-introVedio-intro new-container">
        <div class="icl-introVedio-intro-number">
          <!-- 左侧数字列表 -->
          <div class="steps">
            <div
              v-for="(step, index) in steps"
              :key="index"
              @mouseover="highlightStep(index)"
              :class="{ active: activeStep === index }"
            >
              {{ step.number }}
            </div>
          </div>
          <!-- 右侧内容区域 -->
          <div class="content-area">
            <div v-if="activeStep >= 0">
              <div class="content-area-title">
                <p>
                  SMILE Pro微笑激光<br />
                  矯視過程
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M0.726577 1.2312L17.593 18.0976"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.1296 3.68896L18.1296 18.6727L3.63983 18.6727"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="content-area-img">
                <img class="d-xl-none" :src="steps[activeStep].image" alt="" />
                <img
                  class="d-none d-xl-block"
                  :src="steps[activeStep].imagePc"
                  alt=""
                />
                <p
                  class="content-area-text"
                  v-html="steps[activeStep].text"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <drow />
    <!-- ICL植入式隱形眼鏡真實個案分享 -->
    <!-- <section class="CaseSharing">
      <div class="new-container CaseSharing-Box">
        <h3>SMILE Pro微笑激光矯視<br />真實個案分享</h3>
        <div class="CaseSharing-list" ref="caseSharingList">
          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/embed/vxeN1wXeZ5M?si=IUbNk8z1LKFNm9eA"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro_maggie.avif"
                alt=""
              />
              <span>Maggie米姬</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
            <a
              class="d-lg-none-imp"
              href="https://www.youtube.com/embed/TBI6J31JwJQ?si=bp9WtPjKg-wowh39"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro_carmen.avif"
                alt=""
              />
              <span>Carmen Ngai</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>
          <div class="CaseSharing-list-item">
            <a
              href="https://www.youtube.com/embed/1p5Qm_772jI?si=5eV0Co5EhluQwgDJ"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/share/smilepro-pc-share02.avif"
                alt=""
              />
              <span>細猫</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
            <div></div>
          </div>
          <div class="CaseSharing-list-item d-none d-lg-block">
            <a
              href="https://www.youtube.com/embed/TBI6J31JwJQ?si=bp9WtPjKg-wowh39"
              target="_blank"
            >
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro_carmen.avif"
                alt=""
              />
              <span>Carmen Ngai</span>
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                >
                  <path
                    d="M24.479 13.3562C25.8404 14.209 26.2789 15.3059 25.8306 16.5753C25.5786 17.2881 25.0223 17.7145 24.4136 18.0921C18.6145 21.6985 12.8122 25.3049 7.0099 28.9081C6.13284 29.4549 5.24597 29.9887 4.37873 30.5518C3.4035 31.1833 2.38899 31.486 1.31231 30.8676C0.2389 30.2524 0 29.2076 0 28.0683C0.00327259 24.4359 0 20.8034 0 17.1709V3.5882C0.00327259 3.26597 -0.00654429 2.93397 0.039272 2.61499C0.363259 0.473259 2.23191 -0.438115 4.09074 0.697847C8.33857 3.29852 12.5569 5.94475 16.7851 8.57146C19.3509 10.1664 21.9231 11.7515 24.479 13.3562Z"
                    fill="white"
                  /></svg
              ></i>
            </a>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=iHBGkRh-CXw&list=PLWVonQr1f7XhXd4GDFI3zRtOe9RHb1jdb"
          class="mx-auto icl-btn"
        >
          <span>更多分享</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M2 14.5399L14.5714 1.96851"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M3.83179 1.5686H14.9999V12.3686"
              stroke="white"
              stroke-width="2.7"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
    </section> -->
    <userShare :user-share="ShareData"></userShare>
    <!-- 用家见证 -->
    <section class="smile-pro-evaluateV2">
      <div class="smile-pro-evaluateV2-Box">
        <div class="smile-pro-evaluateV2-Box-title">用家見證</div>
        <div class="smile-pro-evaluateV2-Box-content">
          <div
            v-swiper:mySwiper="swiperOption1"
            class="swiperWrap"
            ref="swiperContainer"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide swiperWrap-item">
                <div>
                  <svg
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <mask
                      id="mask0_11050_282"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="69"
                      height="69"
                    >
                      <circle
                        cx="34.5"
                        cy="34.5"
                        r="33.75"
                        fill="white"
                        stroke="#4570B6"
                        stroke-width="1.5"
                      />
                    </mask>
                    <g mask="url(#mask0_11050_282)">
                      <g clip-path="url(#clip0_11050_282)">
                        <path
                          d="M48.6468 23.2356C48.6468 30.9551 42.3889 37.2129 34.6695 37.2129C26.95 37.2129 20.6921 30.9551 20.6921 23.2356C20.6921 15.5162 26.95 9.2583 34.6695 9.2583C42.3889 9.2583 48.6468 15.5162 48.6468 23.2356Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                        <path
                          d="M58.7327 61.0778V64.7353C58.511 64.8658 58.1743 65.0535 57.718 65.2797C56.7839 65.743 55.3481 66.3683 53.3706 66.9963C49.4166 68.252 43.29 69.5204 34.6695 69.5204C26.049 69.5204 19.9229 68.252 15.9694 66.9963C13.9921 66.3683 12.5565 65.743 11.6226 65.2798C11.1665 65.0535 10.8299 64.8659 10.6082 64.7354V61.0778C10.6082 56.6603 13.0628 52.1833 17.3356 48.7867C21.6006 45.3963 27.6368 43.1221 34.6695 43.1221C41.7023 43.1221 47.739 45.3959 52.0044 48.7861C56.2776 52.1824 58.7327 56.6594 58.7327 61.0778Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <defs>
                      <clipPath id="clip0_11050_282">
                        <rect
                          width="49.6246"
                          height="61.7623"
                          fill="white"
                          transform="translate(9.85815 8.5083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="swiperWrap-item-text">
                    做完SMILE Pro之後生活方便咗好多!
                    好享受無需戴眼鏡的感覺，推薦！
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>文員</i>
                    <p>Macy</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide swiperWrap-item">
                <div>
                  <svg
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <mask
                      id="mask0_11050_282"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="69"
                      height="69"
                    >
                      <circle
                        cx="34.5"
                        cy="34.5"
                        r="33.75"
                        fill="white"
                        stroke="#4570B6"
                        stroke-width="1.5"
                      />
                    </mask>
                    <g mask="url(#mask0_11050_282)">
                      <g clip-path="url(#clip0_11050_282)">
                        <path
                          d="M48.6468 23.2356C48.6468 30.9551 42.3889 37.2129 34.6695 37.2129C26.95 37.2129 20.6921 30.9551 20.6921 23.2356C20.6921 15.5162 26.95 9.2583 34.6695 9.2583C42.3889 9.2583 48.6468 15.5162 48.6468 23.2356Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                        <path
                          d="M58.7327 61.0778V64.7353C58.511 64.8658 58.1743 65.0535 57.718 65.2797C56.7839 65.743 55.3481 66.3683 53.3706 66.9963C49.4166 68.252 43.29 69.5204 34.6695 69.5204C26.049 69.5204 19.9229 68.252 15.9694 66.9963C13.9921 66.3683 12.5565 65.743 11.6226 65.2798C11.1665 65.0535 10.8299 64.8659 10.6082 64.7354V61.0778C10.6082 56.6603 13.0628 52.1833 17.3356 48.7867C21.6006 45.3963 27.6368 43.1221 34.6695 43.1221C41.7023 43.1221 47.739 45.3959 52.0044 48.7861C56.2776 52.1824 58.7327 56.6594 58.7327 61.0778Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <defs>
                      <clipPath id="clip0_11050_282">
                        <rect
                          width="49.6246"
                          height="61.7623"
                          fill="white"
                          transform="translate(9.85815 8.5083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="swiperWrap-item-text">
                    完成SMILE Pro後，效果符合預期，係值得為自己做嘅投資
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>行政人員</i>
                    <p>Ken</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide swiperWrap-item">
                <div>
                  <svg
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <mask
                      id="mask0_11050_282"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="69"
                      height="69"
                    >
                      <circle
                        cx="34.5"
                        cy="34.5"
                        r="33.75"
                        fill="white"
                        stroke="#4570B6"
                        stroke-width="1.5"
                      />
                    </mask>
                    <g mask="url(#mask0_11050_282)">
                      <g clip-path="url(#clip0_11050_282)">
                        <path
                          d="M48.6468 23.2356C48.6468 30.9551 42.3889 37.2129 34.6695 37.2129C26.95 37.2129 20.6921 30.9551 20.6921 23.2356C20.6921 15.5162 26.95 9.2583 34.6695 9.2583C42.3889 9.2583 48.6468 15.5162 48.6468 23.2356Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                        <path
                          d="M58.7327 61.0778V64.7353C58.511 64.8658 58.1743 65.0535 57.718 65.2797C56.7839 65.743 55.3481 66.3683 53.3706 66.9963C49.4166 68.252 43.29 69.5204 34.6695 69.5204C26.049 69.5204 19.9229 68.252 15.9694 66.9963C13.9921 66.3683 12.5565 65.743 11.6226 65.2798C11.1665 65.0535 10.8299 64.8659 10.6082 64.7354V61.0778C10.6082 56.6603 13.0628 52.1833 17.3356 48.7867C21.6006 45.3963 27.6368 43.1221 34.6695 43.1221C41.7023 43.1221 47.739 45.3959 52.0044 48.7861C56.2776 52.1824 58.7327 56.6594 58.7327 61.0778Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <defs>
                      <clipPath id="clip0_11050_282">
                        <rect
                          width="49.6246"
                          height="61.7623"
                          fill="white"
                          transform="translate(9.85815 8.5083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="swiperWrap-item-text">
                    本身好驚，但醫療團隊講解步驟好清楚，喺矯視過程溫柔又細心令我安心哂!
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>家庭主婦</i>
                    <p>Vivien</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide swiperWrap-item">
                <div>
                  <svg
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <mask
                      id="mask0_11050_282"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="69"
                      height="69"
                    >
                      <circle
                        cx="34.5"
                        cy="34.5"
                        r="33.75"
                        fill="white"
                        stroke="#4570B6"
                        stroke-width="1.5"
                      />
                    </mask>
                    <g mask="url(#mask0_11050_282)">
                      <g clip-path="url(#clip0_11050_282)">
                        <path
                          d="M48.6468 23.2356C48.6468 30.9551 42.3889 37.2129 34.6695 37.2129C26.95 37.2129 20.6921 30.9551 20.6921 23.2356C20.6921 15.5162 26.95 9.2583 34.6695 9.2583C42.3889 9.2583 48.6468 15.5162 48.6468 23.2356Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                        <path
                          d="M58.7327 61.0778V64.7353C58.511 64.8658 58.1743 65.0535 57.718 65.2797C56.7839 65.743 55.3481 66.3683 53.3706 66.9963C49.4166 68.252 43.29 69.5204 34.6695 69.5204C26.049 69.5204 19.9229 68.252 15.9694 66.9963C13.9921 66.3683 12.5565 65.743 11.6226 65.2798C11.1665 65.0535 10.8299 64.8659 10.6082 64.7354V61.0778C10.6082 56.6603 13.0628 52.1833 17.3356 48.7867C21.6006 45.3963 27.6368 43.1221 34.6695 43.1221C41.7023 43.1221 47.739 45.3959 52.0044 48.7861C56.2776 52.1824 58.7327 56.6594 58.7327 61.0778Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <defs>
                      <clipPath id="clip0_11050_282">
                        <rect
                          width="49.6246"
                          height="61.7623"
                          fill="white"
                          transform="translate(9.85815 8.5083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="swiperWrap-item-text">
                    終於唔洗成日帶con搞到眼乾眼紅!做完SMILE
                    Pro之後發現呢個世界好靚!
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>咖啡師</i>
                    <p>阿聲</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide swiperWrap-item">
                <div>
                  <svg
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <mask
                      id="mask0_11050_282"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="69"
                      height="69"
                    >
                      <circle
                        cx="34.5"
                        cy="34.5"
                        r="33.75"
                        fill="white"
                        stroke="#4570B6"
                        stroke-width="1.5"
                      />
                    </mask>
                    <g mask="url(#mask0_11050_282)">
                      <g clip-path="url(#clip0_11050_282)">
                        <path
                          d="M48.6468 23.2356C48.6468 30.9551 42.3889 37.2129 34.6695 37.2129C26.95 37.2129 20.6921 30.9551 20.6921 23.2356C20.6921 15.5162 26.95 9.2583 34.6695 9.2583C42.3889 9.2583 48.6468 15.5162 48.6468 23.2356Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                        <path
                          d="M58.7327 61.0778V64.7353C58.511 64.8658 58.1743 65.0535 57.718 65.2797C56.7839 65.743 55.3481 66.3683 53.3706 66.9963C49.4166 68.252 43.29 69.5204 34.6695 69.5204C26.049 69.5204 19.9229 68.252 15.9694 66.9963C13.9921 66.3683 12.5565 65.743 11.6226 65.2798C11.1665 65.0535 10.8299 64.8659 10.6082 64.7354V61.0778C10.6082 56.6603 13.0628 52.1833 17.3356 48.7867C21.6006 45.3963 27.6368 43.1221 34.6695 43.1221C41.7023 43.1221 47.739 45.3959 52.0044 48.7861C56.2776 52.1824 58.7327 56.6594 58.7327 61.0778Z"
                          stroke="#4570B6"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                    <circle
                      cx="34.5"
                      cy="34.5"
                      r="33.75"
                      stroke="#4570B6"
                      stroke-width="1.5"
                    />
                    <defs>
                      <clipPath id="clip0_11050_282">
                        <rect
                          width="49.6246"
                          height="61.7623"
                          fill="white"
                          transform="translate(9.85815 8.5083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="swiperWrap-item-text">
                    過程好快好安全，術後康復又快，眼睛兩三日後都已經清，感覺好神奇！
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>店務員</i>
                    <p>Agnes</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination">
              <div class="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#4570B6" />
                  <path
                    d="M11.0008 19.9878L26.9763 19.9878"
                    stroke="white"
                    stroke-width="2.69573"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21.4066 27.3379L28.5027 20.2418L21.6405 13.3796"
                    stroke="white"
                    stroke-width="2.42615"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#4570B6" />
                  <path
                    d="M28.502 20.2598L12.5265 20.2598"
                    stroke="white"
                    stroke-width="2.69573"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.0961 27.3379L12 20.2418L18.8622 13.3796"
                    stroke="white"
                    stroke-width="2.42615"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
          class="mx-auto icl-btn"
        >
          <span>{{ $t("Correct.newIcl.apt_btn") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M2 14.5399L14.5714 1.96851"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M3.83179 1.5686H14.9999V12.3686"
              stroke="white"
              stroke-width="2.7"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
    </section>
    <!-- start了解更多 -->
    <div class="group w-full mx-auto mb-[60px] md:mb-0 md:mt-[160px]">
      <a
        href="/smileProCare"
        class="relative block w-full overflow-hidden aspect-[389/864] md:aspect-[27/8]"
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="
              https://statichk.cmermedical.com/cmermedical/image/20260311/silme-bg-pc.webp
            "
          />
          <img
            src="https://statichk.cmermedical.com/cmermedical/image/20260311/silme-bg-mobile.webp"
            alt="SMILE Pro"
            class="absolute w-full h-full object-cover"
          />
        </picture>
        <div
          class="absolute left-1/2 -translate-x-1/2 bottom-2 md:left-auto md:translate-x-0 md:-translate-y-1/2 md:right-[5%] md:h-full md:top-1/2 md:-translate-y-1/2 md:flex md:items-center w-[calc(100vw-100px)] mx-auto md:w-auto py-6 md:py-[5%]"
        >
          <div
            class="relative z-10 text-white font-avant-garde text-3xl font-bold not-italic leading-[44.25px]"
          >
            <p class="">想了解</p>
            <p>
              SMILE Pro 同 <br class="block md:hidden" />SMILE Pro Care
              <br class="" />
              有咩分別？
            </p>
          </div>
          <div class="relative z-10 mt-8 md:mt-0 md:ml-[72px] h-full">
            <div
              class="h-full aspect-[1/1] border-2 border-white rounded-full flex flex-col items-center justify-center group-hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[44px] aspect-[1/1] md:w-[28px] group-hover:text-[#0A2342]"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M2.5 40.8844L39.6998 3.68457"
                  class="stroke-white group-hover:stroke-[#0A2342]"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.92065 2.5H40.968V34.458"
                  class="stroke-white group-hover:stroke-[#0A2342]"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <span
                class="text-white text-center text-[35px] font-black not-italic leading-[25px] mt-6 group-hover:text-[#0A2342]"
                >了解更多</span
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none"
        ></div>
      </a>
    </div>
    <!-- end了解更多 -->
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
import Head from "@/components/Publice/Head.vue";
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
import topNotice from "@/components/Publice/topNotice.vue";
export default {
  components: {
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
    topNotice,
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
          href: "https://youtu.be/NtULZl7qUEg",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-027-v1.avif",
          text: ["真實用家共同見證", "「真實」自己"],
          nameEn: "",
          nameCn: "群星",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/LvVdc3l7XpE",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-026-v1.avif",
          text: ["清楚咗 唱Live都放鬆咗"],
          nameEn: "Aerent",
          nameCn: "文凱婷",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/kPM1KMcAwss",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-025-v1.avif",
          text: ["做SMILE Pro梗係搵", "希瑪!"],
          nameEn: "GM",
          nameCn: "曾展望",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/Z-jpOoOpMEg",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-024-v1.avif",
          text: ["穿搭由眼睛開始自由"],
          nameEn: "Gi",
          nameCn: "樊沛珈",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/iNu-uMliXNA",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-023-v1.avif",
          text: ["唔使再忍受除戴Con嘅", "痛苦"],
          nameEn: "Nicholas",
          nameCn: "阮浩棕",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/tcvQgB4IXDk",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-022-v1.avif",
          text: ["做咗SMILE Pro 2年", "都仲睇得咁清楚"],
          nameEn: "Maggie",
          nameCn: "米姬",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/Z5ut-9tIhmo",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-021.avif",
          text: ["唔洗矇查查周圍搵眼鏡"],
          nameEn: "Sarah",
          nameCn: "李蒨怡",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/857FwJQu7OA",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-020.avif",
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
  methods: {
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
    wrapSwiperWrapper() {
      const container = this.$refs.swiperContainer;
      const wrapper = container.querySelector(".swiperWrap .swiper-wrapper");
      const pagination = container.querySelector(
        ".swiperWrap .swiper-pagination"
      );
      if (!wrapper) return;
      // 创建新的包裹层
      const overflowDiv = document.createElement("div");
      overflowDiv.className = "swiper-overflow";
      overflowDiv.style.overflow = "hidden";
      // 将 wrapper 插入到新的包裹层中
      overflowDiv.appendChild(wrapper);
      overflowDiv.appendChild(pagination);
      // 清空容器并插入新的结构
      container.innerHTML = "";
      container.appendChild(overflowDiv);
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
      this.wrapSwiperWrapper();
    }
    // this.checkDeviceType();
    // window.addEventListener("resize", this.checkDeviceType);
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
};
</script>
<style>
.simleProV2 .head-bg {
  top: 54px !important;
}
.simleProV2 .headV2 {
  top: 37px !important;
}
body {
  overflow-x: hidden;
  background: white;
}
</style>
<style lang="scss" scoped>
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
  .new-Footer-v2 {
    margin-top: 0 !important;
  }
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
  .smile-NewBanner {
    padding: 0 15px;
    // margin-top: 150px;
    height: 203px;
    position: relative;
    img {
      width: 200px;
      position: absolute;
      top: -59px;
      right: 64px;
      // z-index: 95;
    }
    .smile-NewBanner-Title {
      position: absolute;
      bottom: 58px;
      left: 28px;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 45.469px;
        font-style: normal;
        font-weight: 700;
        line-height: 49.743px;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 24.55px;
        font-style: normal;
        font-weight: 400;
        line-height: 26.858px; /* 109.4% */
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 9.82px;
        font-style: normal;
        font-weight: 400;
        line-height: 21.358px; /* 217.5% */
        letter-spacing: 0.295px;
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
}
// 小于390
@media screen and (max-width: 389px) {
  .smile-NewBanner {
    padding: 0 15px;
    margin-top: 20.51vw;
    height: 52.5vw;
    position: relative;
    img {
      width: 51.28vw;
      position: absolute;
      top: -15.12vw;
      right: 20.51vw;
    }
    .smile-NewBanner-Title {
      position: absolute;
      bottom: 14.87vw;
      left: 7.179vw;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 11.53vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 6.29vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 2.517vw;
        font-style: normal;
        font-weight: 400;
        line-height: 2.175;
        letter-spacing: 0.295px;
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
    margin-bottom: 0;
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
}
@media screen and (min-width: 1140px) {
  .head-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    z-index: 102;
  }
  .d-xl-none {
    display: none;
  }
  .d-xl-block {
    display: block;
  }
  .smile-NewBanner {
    padding: 0px;
    // margin-top: 213px;
    height: 529px;
    position: relative;
    img {
      width: 500px;
      position: absolute;
      top: -27px;
      left: inherit;
      right: 239px;
    }
    .smile-NewBanner-Title {
      position: absolute;
      bottom: 90px;
      left: 77px;
      span {
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 137.67px;
        font-style: normal;
        font-weight: 700;
        line-height: 150.611px; /* 109.4% */
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 74.332px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 29.733px;
        font-style: normal;
        font-weight: 400;
        line-height: 64.668px; /* 217.5% */
        letter-spacing: 0.892px;
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
</style>
