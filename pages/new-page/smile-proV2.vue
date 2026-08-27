<template>
  <div class="lasik">
    <div class="notice new-container px-4 min-[992px]:px-0 mb-2 lg:mb-3">
      <a
        href="javascript:void(0);"
        @click="scrollToPrice"
        class="rounded-lg overflow-hidden flex relative min-h-[52px] md:h-auto"
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="
              https://statichk.cmermedical.com/smile/smileproV2/banner/smilepro-banner-01-v1.jpg
            "
          />
          <img
            src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-bg.webp"
            alt="暑假限定"
            class="h-full lg:h-auto w-full object-cover"
          />
        </picture>
        <!-- 绝对定位层：限制可视区域 -->
        <div
          class="flex md:hidden absolute top-0 left-0 w-full h-full overflow-hidden items-center"
        >
          <div
            class="marquee-wrapper relative flex w-full h-full overflow-hidden"
          >
            <div class="marquee-content flex items-center shrink-0">
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-text.webp"
                class="h-full w-auto object-contain pr-8"
                alt="立即了解SMILE/SMILE PRO 1.0&2.0 微笑激光矯視"
              />
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-text.webp"
                class="h-full w-auto object-contain pr-8"
                alt="立即了解SMILE/SMILE PRO 1.0&2.0 微笑激光矯視"
              />
            </div>
            <div class="marquee-content flex items-center shrink-0">
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-text.webp"
                class="h-full w-auto object-contain pr-8"
                alt="立即了解SMILE/SMILE PRO 1.0&2.0 微笑激光矯視"
              />
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-text.webp"
                class="h-full w-auto object-contain pr-8"
                alt="立即了解SMILE/SMILE PRO 1.0&2.0 微笑激光矯視"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
    <div
      class="container new-container mx-auto smile-NewBanner position-relative px-4 xl:px-0 pb-8 md:pb-0"
    >
      <picture class="w-full">
        <source
          media="(min-width: 768px)"
          srcset="
            https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-pc-v1.avif
          "
          type="image/avif"
        />
        <source
          media="(min-width: 768px)"
          srcset="
            https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-pc-v1.webp
          "
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="
            https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-pc-v1.jpg
          "
        />
        <source
          srcset="
            https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-mb-v1.avif
          "
          type="image/avif"
        />
        <source
          srcset="
            https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-mb-v1.webp
          "
          type="image/webp"
        />
        <img
          src="https://statichk.cmermedical.com/smile/smileproV2/banner/banner-smilepro-mb-v1.jpg"
          alt="希瑪率先引進SMILE PRO 2.0"
          title="全面升級更精華"
          class="w-full rounded-lg"
        />
      </picture>
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
    <section class="smile-newCenter new-container px-3 xl:px-0">
      <div class="smile-newCenter-menu">
        <a href="/">{{ $t("Correct.newIcl.menuone") }} </a>&nbsp;>&nbsp;<a>{{
          $t("Correct.newIcl.menuTwo")
        }}</a
        >&nbsp;>&nbsp;<a href="/smilePro"
          >SMILE Pro 2.0 {{ $t("smile_proV2.CenterTile") }}
        </a>
      </div>
      <div
        class="summary overflow-hidden flex flex-col lg:flex-row gap-10 xl:gap-[68px] mb-23 lg:mb-[180px]"
      >
        <div class="lg:w-1/2 px-3 lg:px-0">
          <div class="new-container">
            <div class="flex items-end gap-2 lg:gap-3 mb-4 lg:mb-6">
              <h1
                class="text-[clamp(14px,4.44vw,30px)] lg:text-3xl font-bold text-primary whitespace-nowrap mb-0"
              >
                <span class="font-en tracking-normal">SMILE®Pro</span>
                <strong class="font-black">{{
                  $t("smile_proV2.CenterTile")
                }}</strong>
              </h1>
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-full-upgraded-v2.svg"
                alt="全面升級"
                class="w-[clamp(112px,33.84vw,152px)] lg:w-[232px] flex-1 pb-1"
              />
            </div>
            <div class="summary-desc space-y-5 lg:space-y-10">
              <p>
                <span>{{ $t("smile_proV2.p_text1") }}</span>
                <strong>{{ $t("smile_proV2.strong1") }}</strong>
                <span>{{ $t("smile_proV2.p_text2") }}</span>
                <strong>{{ $t("smile_proV2.strong2") }}</strong>
                <span>{{ $t("smile_proV2.p_text3") }}</span>
                <strong>{{ $t("smile_proV2.strong3") }}</strong>
                <span>{{ $t("smile_proV2.p_text4") }}</span>
                <strong>{{ $t("smile_proV2.strong4") }}</strong>
                <span>{{ $t("smile_proV2.p_text5") }}</span>
                <strong>{{ $t("smile_proV2.strong5") }}</strong>
                <span>{{ $t("smile_proV2.p_text6") }}</span>
                <strong>{{ $t("smile_proV2.strong6") }}</strong>
                <span>{{ $t("smile_proV2.p_text7") }}</span>
              </p>
              <p>
                <span>{{ $t("smile_proV2.p_text8") }}</span>
                <strong>{{ $t("smile_proV2.strong7") }}</strong>
                <span>{{ $t("smile_proV2.p_text9") }}</span>
                <strong>{{ $t("smile_proV2.strong8") }}</strong>
                <span>{{ $t("smile_proV2.p_text10") }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcset="
                https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-pc-v1.webp
              "
            />
            <img
              src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-mb-v1.webp"
              alt=""
              class="mb-6 md:-mb-[50%] lg:-mb-[60px] w-full max-w-sm lg:max-w-lg ml-auto"
            />
          </picture>
          <div class="aspect-video w-full max-w-lg">
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
      </div>
      <div class="container new-container mx-auto">
        <div
          class="mb-5 tracking-widest lg:pl-[clamp(16px,4vw,76px)] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8"
        >
          <div class="lg:w-2/5 center flex-col">
            <img
              src="https://statichk.cmermedical.com/smile/smileproV2/icon-smile-pro-2-v1.webp"
              alt="SMILE PRO 2.0"
              class="w-full max-w-md lg:max-w-none aspect-[45/16]"
            />
            <span
              class="text-text text-sm lg:tex-xl font-light tracking-[0.3em]"
              >蔡司ZEISS官方認證</span
            >
          </div>
          <div
            class="text-base lg:text-xl leading-[2.5] lg:leading-[2] lg:flex-1"
          >
            <h2 class="title-normal">SMILE PRO 2.0 微笑激光矯視</h2>
            <p class="text-text font-light mb-5">
              為了給您更精準的視覺體驗，希瑪矯視作為蔡司官方夥伴，已全面升級引入
              <strong class="font-bold text-primary">SMILE® Pro 2.0</strong>！
            </p>
            <div class="mb-5 lg:mb-10">
              <h3 class="text-primary font-bold text-left mb-0">
                升級矯視數據平台
              </h3>
              <p class="text-text font-light">
                全新配置虹膜數據測量儀器，捕捉每雙眼睛獨一無二的虹膜紋路。透過新增的激光矯視數據平台，同步個人矯視參數至激光設備，簡化整體矯視流程，同時提升運作效率與數據精準度。
              </p>
            </div>
            <div>
              <h3 class="text-primary font-bold text-left mb-0">
                虹膜辨識散光導航
              </h3>
              <p class="text-text font-light">
                激光設備的智能輔助系統同步升級，進⼀步強化散光矯正的精準度與穩定性。SMILE
                pro 2.0
                可在術中實時識別虹膜狀態，與預存的專屬虹膜影像對比。倘若眼球產生細微轉動，系統亦能夠即時追蹤並自動校正散光軸向，減低對人工調校的依賴。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 為何選擇希瑪? -->
    <section class="icl-WhatChoose">
      <h2 class="icl-WhatChoose-title text-left">
        {{ $t("Correct.newIcl.section2.title") }}
      </h2>
      <div class="icl-WhatChoose-content-one container new-container">
        <div class="icl-WhatChoose-content-one-img">
          <img
            decoding="async"
            src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc-.avif"
            alt="希瑪眼科微笑矯視中心診所環境"
            loading="lazy"
            width="100%"
            height="100%"
            srcset="
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 400w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif 640w,
              https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif
            "
            sizes=" (max-width: 992px) 100vw,1216px"
            class="max-w-md lg:max-w-none mx-auto"
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
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2 14.54 14.571 1.969" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M3.832 1.569H15v10.8" stroke="#fff" stroke-width="2.7" stroke-linecap="round"/></svg>
      </a>
    </section>
    <!-- 四大特点 -->
    <section class="smilepro-four-feature mb-[60px] lg:mb-[120px]">
      <div class="">
        <div class="smilepro-four-feature-Box">
          <div class="smilepro-four-feature-Box-top">
            <h2 class="title-normal">
              <span>SMILE Pro 1.0/2.0</span><br class="d-none d-lg-block" />{{
                $t("smile_proV2.four_feature.title")
              }}
            </h2>
            <p>
              ZEISS VISUMAX 800<br />
              {{ $t("smile_proV2.four_feature.smallTilte") }}
            </p>
          </div>
          <div
            class="smilepro-four-feature-Box-List grid grid-cols-1 gap-6 lg:gap-10"
          >
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="smilepro-four-feature-Box-List-item-number">01</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h3>{{ $t("smile_proV2.four_feature.item1_title1") }}</h3>
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
              <div class="smilepro-four-feature-Box-List-item-number">02</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h3>{{ $t("smile_proV2.four_feature.item1_title2") }}</h3>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p2_1")
                  }}<br class="d-lg-none" />({{
                    $t("smile_proV2.four_feature.item1_p2_2")
                  }})
                </p>
              </div>
            </div>
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="smilepro-four-feature-Box-List-item-number">03</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h3>{{ $t("smile_proV2.four_feature.item1_title3") }}</h3>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p3_1") }}
                </p>
              </div>
            </div>
            <div
              class="smilepro-four-feature-Box-List-item wow animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="smilepro-four-feature-Box-List-item-number">04</div>
              <div class="smilepro-four-feature-Box-List-item-text">
                <h3>{{ $t("smile_proV2.four_feature.item1_title4") }}</h3>
                <p>
                  {{ $t("smile_proV2.four_feature.item1_p4_1") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- start  SMILE Pro 微笑激光矯視費用-->
    <section
      id="price"
      class="price new-container px-3 xl:px-0 mb-20 lg:mb-[172px]"
    >
      <h2 class="title-normal mb-5 lg:mb-[60px]">
        SMILE Pro 微笑激光矯視夏日禮遇
      </h2>
      <div
        class="flex justify-center items-center md:items-stretch flex-col md:flex-row gap-5 lg:gap-8 mb-4 lg:mb-20 w-full"
      >
        <div class="price-item flex-1 flex flex-col w-full max-w-xl text-white">
          <h3
            class="bg-[#042562] text-center text-lg lg:text-3xl font-bold tracking-widest py-2 lg:py-3 w-[70%] mx-auto min-w-[256px] rounded-t-xl lg:rounded-t-3xl"
          >
            SMILE Pro 2.0 費用
          </h3>
          <div
            class="flex-1 pt-6 px-5 pb-9 lg:pt-9 lg:px-8 lg:pb-[60px] bg-[#042562] rounded-xl lg:rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div class="font-bold tracking-widest mb-4 lg:mb-6">
                <p class="flex flex-col">
                  <span class="text-2xl lg:text-4xl">SMILE Pro 2.0</span
                  ><span class="text-lg lg:text-3xl">微笑激光矯視</span>
                </p>
                <p class="text-[#F89B03] font-bold">
                  <span class="text-3xl lg:text-5xl">HK</span
                  ><span class="text-4xl lg:text-6xl">$24,600</span>
                </p>
              </div>
              <div
                class="bg-[#033994] font-bold rounded-xl lg:rounded-3xl pt-2 pb-5 px-4 lg:pt-3 lg:pb-8 lg:px-7 mb-6 lg:mb-9"
              >
                <p
                  class="mb-1 lg:mb-2 flex justify-between item-end tracking-normal"
                >
                  <span class="text-sm lg:text-xl font-en"
                    >SMILE Pro 2.0 CARE</span
                  ><span class="text-base lg:text-2xl">HK$26,350</span>
                </p>
                <p
                  class="mb-3 lg:mb-6 text-[13px] lg:text-xl flex justify-between item-end tracking-normal"
                >
                  <span>EPS用戶</span><span>HK$25,850<sup>#</sup></span>
                </p>
                <NuxtLink
                  :to="localePath('/smileProCare')"
                  class="price-button-care"
                  >什麼是SMILE Pro 2.0 Care？</NuxtLink
                >
              </div>
              <div
                class="border border-[#A2C2F5] text-white rounded-lg lg:rounded-2xl mb-4 lg:mb-5"
              >
                <div
                  class="flex justify-between items-center px-3 lg:px-5 py-1 border-b border-[#A2C2F5]"
                >
                  <div class="center gap-2 lg:gap-3">
                    <img
                      src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-01-v2.svg"
                      loading="lazy"
                      class="w-5 lg:w-9"
                      alt="自動追蹤圖標"
                    />
                    <span>自動追蹤</span>
                  </div>
                  <img
                    src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg"
                    loading="lazy"
                    class="w-[88px] lg:w-[140px]"
                    alt="升級點"
                  />
                </div>
                <div
                  class="flex justify-between items-center px-3 lg:px-5 py-1"
                >
                  <div class="center gap-2 lg:gap-3">
                    <img
                      src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-02-v2.svg"
                      loading="lazy"
                      class="w-5 lg:w-9"
                      alt="精準度提升图标"
                    />
                    <span>精準度提升</span>
                  </div>
                  <img
                    src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg"
                    loading="lazy"
                    class="w-[88px] lg:w-[140px]"
                    alt="升級點"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="flex justify-around items-end font-bold mb-5 lg:mb-9">
                <span class="text-xs lg:text-xl">術前檢查費用</span>
                <div>
                  <span class="text-xl lg:text-3xl">HK</span>
                  <span class="text-2xl lg:text-4xl">$100</span>
                </div>
              </div>
              <NuxtLink
                :to="localePath('/fee#table1')"
                class="price-button-normal"
              >
                <span>查看矯視費用詳情</span>
                <!-- prettier-ignore -->
                <svg class="w-5 lg:w-7" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M3.18 28.804 28.323 3.661" stroke="#fff" stroke-width="6.36" stroke-linecap="round"/><path d="M6.844 2.862H29.18v21.6" stroke="#fff" stroke-width="5.724" stroke-linecap="round"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="price-item flex-1 flex flex-col w-full max-w-xl">
          <h3
            class="py-2 text-center text-lg lg:text-3xl font-bold tracking-widest lg:py-3 w-[70%] mx-auto min-w-[256px] bg-gradient-to-r from-[#528BE9] to-[#4D80D4] text-white rounded-t-xl lg:rounded-t-3xl"
          >
            SMILE Pro 1.0 費用
          </h3>
          <div
            class="flex-1 pt-6 px-5 pb-9 lg:pt-9 lg:px-8 lg:pb-[60px] border border-[#4570B64D] bg-white text-text rounded-xl lg:rounded-3xl flex flex-col justify-between"
          >
            <div class="mb-10">
              <div class="font-bold tracking-widest mb-4 lg:mb-6">
                <p class="flex flex-col">
                  <span class="text-primary text-2xl lg:text-4xl"
                    >SMILE Pro 1.0</span
                  ><span class="text-text text-lg lg:text-3xl"
                    >微笑激光矯視</span
                  >
                </p>
                <p class="text-[#F89B03] font-bold">
                  <span class="text-3xl lg:text-5xl">HK</span
                  ><span class="text-4xl lg:text-6xl">$21,750</span>
                </p>
              </div>
              <div
                class="bg-[#f5f8fc] font-bold rounded-xl lg:rounded-3xl pt-2 pb-5 px-4 lg:pt-3 lg:pb-8 lg:px-7 border border-[#4570B666]"
              >
                <p
                  class="text-primary flex justify-between item-end tracking-normal"
                >
                  <span class="text-sm lg:text-xl font-en"
                    >SMILE Pro 1.0 CARE</span
                  ><span class="text-base lg:text-2xl">HK$23,500 </span>
                </p>
                <p
                  class="text-text text-[13px] lg:text-xl flex justify-between item-end tracking-normal"
                >
                  <span>EPS用戶</span><span>HK$23,000<sup>#</sup></span>
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex justify-around items-end font-bold text-text border-t border-dashed border-[#7f7f7fcc] pt-3 lg:pt-6 pb-5 lg:pb-9"
              >
                <span class="text-xs lg:text-xl">術前檢查費用</span>
                <div>
                  <span class="text-xl lg:text-3xl">HK</span>
                  <span class="text-2xl lg:text-4xl">$100</span>
                </div>
              </div>
              <NuxtLink
                :to="localePath('/fee#table1')"
                class="price-button-normal"
              >
                <span>查看矯視費用詳情</span>
                <!-- prettier-ignore -->
                <svg class="w-5 lg:w-7" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M3.18 28.804 28.323 3.661" stroke="#fff" stroke-width="6.36" stroke-linecap="round"/><path d="M6.844 2.862H29.18v21.6" stroke="#fff" stroke-width="5.724" stroke-linecap="round"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-text text-center text-sm lg:text-2xl font-light tracking-widest lg:tracking-[0.2em]"
      >
        <p>此為香港價錢，雙眼價錢</p>
        <p>
          矯視費用已包括術前檢查費用港幣$100（若沒有預約進行矯視，需另外繳付術前檢查費用）
        </p>
        <p>
          <sup>#</sup>免責聲明：受條款及細則約束。僅適用於以 EPS
          全數支付之客戶。如有任何爭議，<br />希瑪眼科將保留最終決定權。
        </p>
      </div>
    </section>
    <!-- end SMILE Pro 微笑激光矯視費用 -->
    <!-- 表格 -->
    <section class="smilepro-difference mb-10 lg:mb-[264px]">
      <div class="smilepro-difference-title">
        <h2>
          SMILE/SMILE PRO/ICL<br class="d-lg-none" />
          大不同
        </h2>
      </div>
      <table class="table custom-comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto size-9 md:size-[52px]" viewBox="0 0 54 54" fill="none"><path d="M26.732 40.188c-3.451 0-6.713-1.3-9.23-3.68a13.36 13.36 0 0 1-4.193-9.391 13.34 13.34 0 0 1 3.677-9.602 13.36 13.36 0 0 1 9.388-4.193 13.33 13.33 0 0 1 9.602 3.676 13.36 13.36 0 0 1 4.193 9.391 13.34 13.34 0 0 1-3.677 9.602 13.36 13.36 0 0 1-9.391 4.193c-.123 0-.25.004-.372.004zm.021-26.519a13 13 0 0 0-9.51 4.084 13 13 0 0 0-3.579 9.353 13 13 0 0 0 4.08 9.145 12.97 12.97 0 0 0 9.354 3.578 13 13 0 0 0 9.145-4.08 13 13 0 0 0 3.578-9.353 13 13 0 0 0-4.08-9.145 13 13 0 0 0-8.988-3.585z" stroke="currentColor"/><path d="M51.148.707 2.083 52.555l.255.242L51.403.948z" stroke="currentColor"/><path d="m.948 1.707-.241.255 51.83 49.083.243-.255z" stroke="currentColor"/></svg>
              <span>SMILE</span><br />微笑<br class="d-lg-none" />矯視
            </th>
            <th>
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto size-9 md:size-[52px]" viewBox="0 0 55 55" fill="none"><path d="M27.092 40.776c7.557 0 13.684-6.127 13.684-13.684 0-7.558-6.127-13.684-13.684-13.684-7.558 0-13.684 6.126-13.684 13.684s6.126 13.684 13.684 13.684ZM1.759 53.836 52.425.344M.344 1.758l53.492 50.666" stroke="currentColor" stroke-miterlimit="10"/><path d="M27.092 37.275c5.624 0 10.183-4.56 10.183-10.184s-4.56-10.183-10.183-10.183-10.184 4.56-10.184 10.183 4.56 10.184 10.184 10.184Z" stroke="currentColor" stroke-miterlimit="10"/></svg>
              <span>SMILE <br class="d-lg-none" />PRO 1.0</span><br />微笑矯視
            </th>
            <th>
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto size-9 md:size-[52px]" viewBox="0 0 55 55" fill="none"><path d="M27.092 40.776c7.557 0 13.684-6.127 13.684-13.684 0-7.558-6.127-13.684-13.684-13.684-7.558 0-13.684 6.126-13.684 13.684s6.126 13.684 13.684 13.684ZM1.759 53.836 52.425.344M.344 1.758l53.492 50.666" stroke="currentColor" stroke-miterlimit="10"/><path d="M27.092 37.275c5.624 0 10.183-4.56 10.183-10.184s-4.56-10.183-10.183-10.183-10.184 4.56-10.184 10.183 4.56 10.184 10.184 10.184Z" stroke="currentColor" stroke-miterlimit="10"/></svg>
              <span>SMILE <br class="d-lg-none" />PRO 2.0</span><br />微笑矯視
            </th>
            <th>
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto size-10 md:size-[52px]" viewBox="0 0 56 36" fill="none"><path d="M54.53 28.344s-.025-.024-.049-.06a.3.3 0 0 0-.048-.06c-.318-.435-1.341-1.998-1.341-4.463 0-2.935-.073-6.202-.073-6.202s.073-3.278.073-6.202c0-2.468 1.023-4.027 1.34-4.462.013-.024.037-.036.05-.06a.3.3 0 0 0 .047-.06v-.013c.355-.47.564-1.059.564-1.691a2.86 2.86 0 0 0-2.855-2.855c-11.51.282-17.02-.919-17.02-.919C33.295.802 30.673.5 27.798.5c-2.88 0-5.498.306-7.423.797 0 0-5.509 1.2-17.019.919A2.86 2.86 0 0 0 .5 5.07c0 .636.213 1.22.564 1.691v.012s.024.025.048.06c.012.025.036.05.048.061.319.435 1.342 1.998 1.342 4.462 0 2.936.072 6.202.072 6.202s-.072 3.279-.072 6.202c0 2.469-1.023 4.028-1.342 4.463-.012.024-.036.036-.048.06a.3.3 0 0 0-.048.06v.012A2.8 2.8 0 0 0 .5 30.048a2.86 2.86 0 0 0 2.855 2.855c11.51-.282 17.02.918 17.02.918 1.924.496 4.546.798 7.422.798 2.88 0 5.497-.306 7.422-.798 0 0 5.51-1.2 17.019-.918a2.86 2.86 0 0 0 2.855-2.855 2.9 2.9 0 0 0-.564-1.704Z" stroke="currentColor" stroke-miterlimit="10"/><path d="M3.444 5.353a.503.503 0 1 0 0-1.007.503.503 0 0 0 0 1.007ZM52.31 30.785a.503.503 0 1 0 0-1.007.503.503 0 0 0 0 1.007Zm-24.525-.093c7.26 0 13.144-5.885 13.144-13.145S35.045 4.402 27.786 4.402 14.64 10.287 14.64 17.547s5.885 13.145 13.145 13.145ZM46.262 2.22a23.92 23.92 0 0 1 5.533 15.34 23.87 23.87 0 0 1-5.485 15.27m-37.002.057a23.92 23.92 0 0 1-5.534-15.34A23.87 23.87 0 0 1 9.26 2.276m3.45 15.774a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007Zm30.145 0a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007Z" stroke="currentColor" stroke-miterlimit="10"/><path d="M27.793 18.05a.503.503 0 1 0 0-1.006.503.503 0 0 0 0 1.007ZM42.947 2.256s-.906 1.164-5.062 1.164-5.288-1.2-9.609-1.2-5.449 1.2-9.609 1.2-5.062-1.164-5.062-1.164m29.342 30.667s-.906-1.164-5.062-1.164c-4.16 0-5.288 1.2-9.609 1.2s-5.449-1.2-9.609-1.2-5.062 1.164-5.062 1.164" stroke="currentColor" stroke-miterlimit="10"/></svg>
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
                <!-- prettier-ignore -->
                <svg class="size-9 md:size-12 lg:size-[52px]" xmlns="http://www.w3.org/2000/svg" width="50" height="46" viewBox="0 0 50 46" fill="none"><g clip-path="url(#prefix__clip0_20416_1949)" fill="#4570b6"><path d="M28.935 45.194c-7.764 0-14.87-4.26-18.538-11.11a.868.868 0 1 1 1.536-.817 19.26 19.26 0 0 0 17.002 10.19c10.629 0 19.276-8.648 19.276-19.276S39.564 4.905 28.935 4.905c-7.118 0-13.632 3.9-17.002 10.183a.86.86 0 0 1-1.177.354.86.86 0 0 1-.353-1.176A21 21 0 0 1 28.94 3.162c11.592 0 21.02 9.428 21.02 21.02 0 11.59-9.428 21.018-21.02 21.018zM8.788 25.048H.87a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.743"/><path d="M13.31 29.802H5.393a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.742m0-9.501H5.393a.871.871 0 1 1 0-1.743h7.917a.871.871 0 1 1 0 1.743m24.176-7.965a.85.85 0 0 1-.488-.153 14.4 14.4 0 0 0-8.111-2.48c-2.901 0-5.71.86-8.112 2.48a.87.87 0 0 1-1.206-.231.87.87 0 0 1 .231-1.207 16.16 16.16 0 0 1 9.093-2.785c3.26 0 6.399.963 9.092 2.785.396.268.506.81.232 1.207a.87.87 0 0 1-.72.384zM31.495 22.42a.9.9 0 0 1-.616-.25.87.87 0 0 1 0-1.23l6.332-6.387a.87.87 0 0 1 1.231 0 .87.87 0 0 1 0 1.23l-6.332 6.388a.87.87 0 0 1-.615.256z"/><path d="M28.941 28.709a4.54 4.54 0 0 1-4.534-4.534 4.54 4.54 0 0 1 4.534-4.534 4.54 4.54 0 0 1 4.534 4.534 4.54 4.54 0 0 1-4.534 4.534m0-7.325a2.795 2.795 0 0 0-2.79 2.79 2.8 2.8 0 0 0 2.79 2.792 2.8 2.8 0 0 0 2.792-2.791 2.8 2.8 0 0 0-2.792-2.791m1.494-19.641h-3.17a.871.871 0 1 1 0-1.743h3.17a.871.871 0 1 1 0 1.743"/><path d="M28.85 4.906a.87.87 0 0 1-.871-.872V.871a.871.871 0 1 1 1.742 0v3.17c0 .48-.39.87-.87.87zm14.407 1.646a.85.85 0 0 1-.476-.14l-2.657-1.725a.873.873 0 0 1 .951-1.463l2.657 1.725a.873.873 0 0 1-.475 1.603"/><path d="M40.204 8.35a.873.873 0 0 1-.731-1.347l1.724-2.657a.873.873 0 0 1 1.463.95l-1.725 2.657a.87.87 0 0 1-.731.396M14.54 6.6a.87.87 0 0 1-.73-.395.874.874 0 0 1 .255-1.207l2.658-1.725a.874.874 0 0 1 1.206.256.874.874 0 0 1-.256 1.207L15.016 6.46a.85.85 0 0 1-.475.14"/><path d="M17.594 8.392a.87.87 0 0 1-.731-.396L15.138 5.34a.874.874 0 0 1 .256-1.206.874.874 0 0 1 1.207.256l1.724 2.657a.874.874 0 0 1-.731 1.346"/></g><defs><clipPath id="prefix__clip0_20416_1949"><path fill="#fff" d="M0 0h49.948v45.195H0z"/></clipPath></defs></svg>
                <p class="whitespace-nowrap">
                  激光時間<span class="block">(單一眼睛)</span>
                </p>
              </div>
            </td>
            <td>約23-25秒</td>
            <td>約10秒</td>
            <td>約10秒</td>
            <td>不需使用激光<br />（植入式）</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <!-- prettier-ignore -->
                <svg class="size-9 md:size-12 lg:size-[52px]" xmlns="http://www.w3.org/2000/svg" width="55" height="32" viewBox="0 0 55 32" fill="none"><g clip-path="url(#prefix__clip0_20416_1923)" stroke="#4570b6" stroke-linecap="round" stroke-linejoin="round"><path d="M27.427.85c15.69 0 26.577 15.047 26.577 15.047S43.117 30.944 27.427 30.944.85 15.897.85 15.897 11.736.85 27.427.85" stroke-width="1.702"/><path d="M2.796 18.04c3.797-4.23 12.862-12.696 24.63-12.696 11.77 0 20.835 8.465 24.632 12.697" stroke-width="1.702"/><path d="M27.573 24.105c5.11 0 9.253-3.893 9.253-8.696s-4.143-8.696-9.253-8.696-9.252 3.893-9.252 8.696 4.142 8.696 9.252 8.696" stroke-width="1.379"/><path d="M27.573 19.219c2.24 0 4.055-1.706 4.055-3.81s-1.815-3.811-4.055-3.811-4.055 1.706-4.055 3.81 1.816 3.811 4.055 3.811M7.092 20.943l2.104-2.193s4.063 2.75 6.503 2.505m-4.245-1.965 2.293-2.589m33.938 5.942-2.456-.632s.388-4.796-.54-7.22m-3.246 3.779 3.254 1.398" stroke-width="1.357"/><path d="m18.95 28.407-.005-2.234-1.048-1.564m2.698.44-1.65 1.124m22.356.575-1.066-1.962-1.664-.88m2.584-.892-.92 1.772m-12.591 2.28 1.693 1.529 1.76.062.138 1.951" stroke-width="1.145"/></g><defs><clipPath id="prefix__clip0_20416_1923"><path fill="#fff" d="M0 0h54.856v31.796H0z"/></clipPath></defs></svg>
                <p>傷口大小</p>
              </div>
            </td>
            <td>約2mm</td>
            <td>約2mm</td>
            <td>約2mm</td>
            <td>約3mm</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <!-- prettier-ignore -->
                <svg class="size-9 md:size-12 lg:size-[52px]" xmlns="http://www.w3.org/2000/svg" width="57" height="55" viewBox="0 0 57 55" fill="none"><g clip-path="url(#prefix__clip0_20416_1939)" fill="#4570b6"><path d="M39.828 35.906a5.297 5.297 0 0 1-5.293-5.293c0-2.642 4.113-8.603 4.582-9.276a.872.872 0 0 1 1.423 0c.468.673 4.581 6.634 4.581 9.276a5.297 5.297 0 0 1-5.293 5.293m0-12.525c-1.597 2.43-3.558 5.866-3.558 7.232a3.56 3.56 0 0 0 3.558 3.558 3.56 3.56 0 0 0 3.558-3.558c0-1.366-1.961-4.798-3.558-7.232"/><path d="M27.888 55.001C8.01 55.001.425 41.916.113 41.357a.87.87 0 0 1 0-.85c.312-.556 7.9-13.646 27.78-13.646v1.736c-16.89 0-24.526 10.113-25.997 12.334 1.475 2.213 9.15 12.335 25.997 12.335 16.846 0 24.664-10.1 26.183-12.335-.798-1.18-3.35-4.564-8.014-7.466l.916-1.476c6.126 3.81 8.773 8.317 8.881 8.508a.86.86 0 0 1 0 .868c-.321.555-8.091 13.636-27.962 13.636z"/><path d="M27.984 55.001c-7.758 0-14.07-6.312-14.07-14.07 0-7.757 6.312-14.07 14.07-14.07 1.544 0 3.063.248 4.512.738l-.556 1.644a12.3 12.3 0 0 0-3.956-.646c-6.803 0-12.335 5.531-12.335 12.334s5.532 12.335 12.335 12.335 12.334-5.532 12.334-12.335c0-1.25-.186-2.486-.555-3.67l1.657-.516c.421 1.349.634 2.759.634 4.182 0 7.757-6.313 14.07-14.07 14.07zm12.46-35.191a.87.87 0 0 1-.612-.256l-3.076-3.076a.86.86 0 0 1 0-1.224l3.358-3.358a11.7 11.7 0 0 0 1.48-1.809l.85-1.293a13 13 0 0 1 1.7-2.082L50.853 0l1.228 1.228-6.712 6.712c-.56.56-1.054 1.167-1.48 1.809l-.85 1.293a13 13 0 0 1-1.7 2.082l-2.742 2.742 1.848 1.848 2.742-2.742a13 13 0 0 1 2.083-1.7l1.293-.85c.642-.421 1.249-.92 1.809-1.48l6.677-6.677 1.227 1.228L49.6 12.17a13.3 13.3 0 0 1-2.083 1.7l-1.293.85c-.642.422-1.25.92-1.81 1.48l-3.357 3.358a.86.86 0 0 1-.612.256z"/><path d="M27.984 47.442a6.52 6.52 0 0 1-6.513-6.512c0-.825.152-1.623.447-2.37a.86.86 0 0 1 .521-.498.86.86 0 0 1 .716.065 2.17 2.17 0 0 0 1.084.286 2.23 2.23 0 0 0 2.226-2.225 2 2 0 0 0-.082-.59.867.867 0 0 1 .698-1.111 6.518 6.518 0 0 1 7.419 6.447 6.52 6.52 0 0 1-6.512 6.512zm-4.695-7.406q-.083.436-.082.898a4.783 4.783 0 0 0 4.777 4.777 4.783 4.783 0 0 0 4.776-4.777c0-2.633-2.026-4.66-4.56-4.772v.03a3.97 3.97 0 0 1-3.96 3.961c-.322 0-.643-.039-.95-.117"/></g><defs><clipPath id="prefix__clip0_20416_1939"><path fill="#fff" d="M0 0h56.276v55H0z"/></clipPath></defs></svg>
                <p>術後眼乾<br />情況</p>
              </div>
            </td>
            <td>暫時性<br />（輕微）</td>
            <td>暫時性<br />（輕微）</td>
            <td>暫時性<br />（輕微）</td>
            <td>無</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <!-- prettier-ignore -->
                <svg class="size-9 md:size-12 lg:size-[52px]" xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none"><g clip-path="url(#prefix__clip0_20416_1992)" fill="#4570b6"><path d="M23.5 40.874c-9.987 0-19.175-5.363-23.412-13.662a.8.8 0 0 1 0-.733c4.237-8.3 13.425-13.663 23.412-13.663S42.675 18.18 46.912 26.48c.119.232.119.5 0 .733-4.237 8.3-13.425 13.662-23.412 13.662M1.714 26.84C5.76 34.396 14.26 39.258 23.5 39.258s17.74-4.862 21.786-12.418C41.24 19.284 32.74 14.422 23.5 14.422S5.76 19.284 1.714 26.84"/><path d="M23.5 40.874c-7.737 0-14.029-6.292-14.029-14.029S15.763 12.816 23.5 12.816s14.029 6.292 14.029 14.03c0 7.736-6.292 14.028-14.029 14.028m0-26.452c-6.85 0-12.418 5.569-12.418 12.418 0 6.85 5.569 12.418 12.418 12.418 6.85 0 12.418-5.569 12.418-12.418 0-6.85-5.569-12.418-12.418-12.418"/><path d="M23.5 32.378a5.54 5.54 0 0 1-5.533-5.533c0-.33.03-.676.098-1.022a.8.8 0 0 1 .413-.563.82.82 0 0 1 .697-.03q.388.17.815.17c1.14 0 2.07-.93 2.07-2.07q0-.42-.17-.816a.806.806 0 0 1 .593-1.11 5.4 5.4 0 0 1 1.017-.097 5.54 5.54 0 0 1 5.533 5.533 5.54 5.54 0 0 1-5.533 5.533zm-3.923-5.394a3.93 3.93 0 0 0 3.923 3.778c2.116 0 3.923-1.76 3.923-3.922a3.9 3.9 0 0 0-3.778-3.923 3.685 3.685 0 0 1-4.067 4.067"/><path d="M19.985 27.01a3.685 3.685 0 0 1-3.68-3.68 3.685 3.685 0 0 1 3.68-3.68 3.685 3.685 0 0 1 3.68 3.68 3.685 3.685 0 0 1-3.68 3.68m0-5.75c-1.14 0-2.07.93-2.07 2.07 0 1.141.93 2.07 2.07 2.07s2.07-.929 2.07-2.07-.93-2.07-2.07-2.07"/><path d="M23.5 22.918a.806.806 0 0 1-.805-.805V9.363a.806.806 0 0 1 1.61 0v12.75a.806.806 0 0 1-.805.805"/><path d="M27.144 10.168H19.85a.806.806 0 0 1-.805-.805V6.065c0-.444.361-.805.805-.805h7.293c.444 0 .805.361.805.805v3.298a.806.806 0 0 1-.805.805m-6.483-1.61h5.683V6.87H20.66z"/><path d="M28.145 6.87h-9.29a.81.81 0 0 1-.759-.537l-1.858-5.26A.81.81 0 0 1 16.997 0h13.012c.263.001.505.13.655.342.15.211.191.485.103.733l-1.858 5.26a.81.81 0 0 1-.758.536zm-8.722-1.61h8.155l1.29-3.655H18.132z"/><path d="M32.006 1.61H14.994a.806.806 0 0 1 0-1.61h17.017a.806.806 0 0 1 0 1.61zM23.5 47.877c-9.786 0-18.421-6.927-20.532-16.475a.807.807 0 0 1 1.574-.346c1.946 8.815 9.92 15.216 18.963 15.216s17.012-6.4 18.963-15.216a.81.81 0 0 1 .96-.614.81.81 0 0 1 .614.96c-2.11 9.548-10.746 16.475-20.532 16.475zm19.748-24.614a.805.805 0 0 1-.785-.63c-1.316-5.94-5.425-10.989-10.994-13.502a.803.803 0 0 1-.402-1.063.8.8 0 0 1 1.063-.403c6.028 2.72 10.483 8.186 11.902 14.622a.803.803 0 0 1-.614.96 1 1 0 0 1-.176.02zm-39.496 0a.81.81 0 0 1-.79-.98C4.388 15.845 8.837 10.38 14.866 7.66c.408-.18.883 0 1.063.403.18.407 0 .882-.403 1.063-5.569 2.513-9.677 7.556-10.993 13.502a.804.804 0 0 1-.785.63z"/></g><defs><clipPath id="prefix__clip0_20416_1992"><path fill="#fff" d="M0 0h47v47.877H0z"/></clipPath></defs></svg>
                <p>定位追蹤<br />技術</p>
              </div>
            </td>
            <td>手動追蹤</td>
            <td>手動追蹤</td>
            <td>
              自動追蹤
              <img
                src="https://statichk.cmermedical.com/smile/smileproV2/table/smilepro-table-up.svg"
                alt="SMILE PRO 2.0 精準度提升"
                class="w-[68px] lg:w-[144px] mx-auto mt-2"
              />
            </td>
            <td>自動追蹤</td>
          </tr>
          <tr>
            <td>
              <div
                class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-center py-[12px] lg:py-0 lg:pl-[12px] lg:text-justify"
              >
                <!-- prettier-ignore -->
                <svg class="size-9 md:size-12 lg:size-[52px]" xmlns="http://www.w3.org/2000/svg" width="51" height="55" viewBox="0 0 51 55" fill="none"><g clip-path="url(#prefix__clip0_20416_1969)" fill="#4570b6"><path d="M49.561 10.215a1 1 0 0 1-.158-.014c-3.762-.69-5.608-3.116-6.518-5.322-.91 2.206-2.76 4.632-6.518 5.322a.879.879 0 1 1-.317-1.731c5.859-1.077 5.956-7.332 5.96-7.595a.878.878 0 0 1 1.758.004c0 .264.101 6.518 5.96 7.595.48.088.791.545.708 1.024a.88.88 0 0 1-.862.72z"/><path d="M42.88 18.671a.88.88 0 0 1-.88-.875c0-.268-.1-6.522-5.959-7.595a.88.88 0 0 1-.708-1.024.88.88 0 0 1 1.024-.707c7.31 1.34 7.398 9.243 7.398 9.322a.88.88 0 0 1-.88.879z"/><path d="M42.88 18.671a.875.875 0 0 1-.875-.879c0-.08.093-7.982 7.398-9.322a.88.88 0 0 1 1.024.707.88.88 0 0 1-.708 1.024c-5.859 1.077-5.956 7.332-5.96 7.595a.88.88 0 0 1-.879.875M11.792 40.612a1 1 0 0 1-.158-.014c-2.531-.465-4.021-1.995-4.843-3.63-.822 1.635-2.312 3.169-4.844 3.63a.879.879 0 1 1-.316-1.731c4.228-.778 4.28-5.279 4.28-5.472a.879.879 0 1 1 1.758 0c0 .189.08 4.698 4.282 5.467a.88.88 0 0 1 .707 1.024.88.88 0 0 1-.861.721z"/><path d="M6.79 46.945a.88.88 0 0 1-.878-.875c0-.202-.084-4.703-4.281-5.472a.88.88 0 0 1-.708-1.024.877.877 0 0 1 1.024-.708c4.523.83 5.718 5.072 5.723 7.195a.88.88 0 0 1-.88.88z"/><path d="M6.79 46.945a.88.88 0 0 1-.874-.88c0-2.127 1.2-6.368 5.723-7.199a.881.881 0 0 1 .316 1.732c-4.202.77-4.28 5.279-4.28 5.472a.88.88 0 0 1-.88.875zM.88 9.297a.87.87 0 0 1-.862-.72.88.88 0 0 1 .708-1.025c2.632-.483 2.69-3.336 2.69-3.46a.877.877 0 0 1 1.753.005c0 .119.062 2.972 2.69 3.455a.879.879 0 1 1-.316 1.732c-1.6-.295-2.624-1.178-3.253-2.18-.628 1.006-1.652 1.89-3.252 2.18a1 1 0 0 1-.159.013"/><path d="M4.29 13.617a.88.88 0 0 1-.88-.874c0-.137-.065-2.976-2.69-3.46a.879.879 0 1 1 .316-1.732c3.267.599 4.133 3.653 4.133 5.183a.88.88 0 0 1-.88.879z"/><path d="M4.29 13.619a.88.88 0 0 1-.88-.88c0-1.529.867-4.584 4.132-5.181a.881.881 0 0 1 .317 1.731c-2.655.488-2.69 3.336-2.69 3.455 0 .483-.396.88-.88.88zm42 36.174a1 1 0 0 1-.157-.013c-1.6-.295-2.624-1.178-3.253-2.18-.629 1.006-1.653 1.89-3.252 2.18a.879.879 0 1 1-.317-1.732c2.633-.483 2.69-3.336 2.69-3.459a.877.877 0 0 1 1.754.004c0 .12.061 2.972 2.69 3.455a.879.879 0 0 1-.154 1.745"/><path d="M42.88 54.11a.88.88 0 0 1-.88-.875c0-.136-.065-2.976-2.689-3.46a.879.879 0 1 1 .316-1.731c3.266.598 4.132 3.652 4.132 5.182a.88.88 0 0 1-.879.879z"/><path d="M42.88 54.109h-.004a.88.88 0 0 1-.875-.88c0-1.529.866-4.583 4.131-5.181a.88.88 0 0 1 1.025.707.88.88 0 0 1-.708 1.025c-2.628.483-2.69 3.336-2.69 3.459a.877.877 0 0 1-.879.87m-20.79-6.662c-4.408 0-8.605-1.323-12.14-3.828l1.016-1.433c3.235 2.294 7.08 3.503 11.125 3.503 10.276 0 18.635-7.955 18.635-17.735S32.366 10.22 22.091 10.22c-10.277 0-18.636 7.95-18.636 17.73 0 2.312.461 4.562 1.367 6.685l-1.618.69a18.7 18.7 0 0 1-1.512-7.375c0-10.75 9.151-19.493 20.394-19.493S42.48 17.204 42.48 27.95s-9.15 19.493-20.394 19.493z"/><path d="M31.496 41.439c-6.056 0-10.988-5.828-10.988-12.988s4.927-12.988 10.988-12.988S42.484 21.29 42.484 28.45s-4.927 12.988-10.988 12.988m0-24.218c-5.09 0-9.23 5.037-9.23 11.23s4.14 11.23 9.23 11.23 9.23-5.037 9.23-11.23-4.14-11.23-9.23-11.23"/><path d="M32.257 34.872c-2.971 0-5.384-2.879-5.384-6.421 0-1.477.43-2.923 1.208-4.061l1.45.993c-.58.852-.9 1.943-.9 3.068 0 2.571 1.626 4.663 3.626 4.663s3.63-2.092 3.63-4.663-1.626-4.664-3.63-4.664V22.03c2.97 0 5.388 2.88 5.388 6.422s-2.417 6.421-5.388 6.421"/></g><defs><clipPath id="prefix__clip0_20416_1969"><path fill="#fff" d="M0 0h50.44v54.11H0z"/></clipPath></defs></svg>
                <p>康復時間</p>
              </div>
            </td>
            <td colspan="4">翌日</td>
          </tr>
        </tbody>
      </table>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="mx-auto icl-btn"
      >
        <span>{{ $t("Correct.newIcl.apt_btn") }}</span>
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2 14.54 14.571 1.969" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M3.832 1.569H15v10.8" stroke="#fff" stroke-width="2.7" stroke-linecap="round"/></svg>
      </a>
    </section>
    <!-- 过程 -->
    <section
      class="steps new-container px-3 xl:px-0 space-y-12 lg:space-y-[132px] mb-10 lg:mb-[180px]"
    >
      <div>
        <h2 class="title-normal">SMILE Pro 2.0 微笑激光矯視過程</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
          <div class="steps-item" v-for="(step, index) in steps2">
            <img
              :src="step.image"
              :alt="`SMILE Pro 2.0 步驟${index + 1}`"
              loading="lazy"
              class="pic"
            />
            <div class="flex gap-2">
              <span class="num">0{{ index + 1 }}</span>
              <p class="desc">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="title-normal">SMILE Pro 1.0 微笑激光矯視過程</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
          <div class="steps-item" v-for="(step, index) in steps1">
            <img
              :src="step.image"
              :alt="`SMILE Pro 1.0 步驟${index + 1}`"
              loading="lazy"
              class="pic"
            />
            <div class="flex gap-2">
              <span class="num">0{{ index + 1 }}</span>
              <p class="desc">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="process new-container px-3 mb-18 lg:mb-[124px]">
      <h2 class="title-normal mb-7 lg:mb-20">你適合做SMILE Pro 1.0/2.0嗎?</h2>
      <div
        class="center flex-col lg:flex-row gap-5 md:gap-12 lg:gap-20 w-full lg:w-fit mx-auto"
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="
              https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-pc.webp
            "
          />
          <img
            src="https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-mb.webp"
            alt=""
            class="w-full max-w-xl"
          />
        </picture>
        <ol class="w-full lg:w-auto process-list space-y-2 lg:space-y-5">
          <li>①年滿<strong>二十一歲</strong></li>
          <li>②暗室瞳孔直徑<strong>偏大</strong></li>
          <li>③追求<strong>更佳</strong>手術體驗感</li>
          <li>④生活受<strong>近視</strong>或/及<strong>散光</strong>困擾</li>
          <li>⑤擔心矯視<strong>過程</strong>，眼睛無法對焦太久</li>
        </ol>
      </div>
    </section>
    <userShare :user-share="ShareData"></userShare>
    <!-- 用家见证 -->
    <section class="smile-pro-evaluateV2 overflow-hidden">
      <div class="smile-pro-evaluateV2-Box">
        <h2 class="smile-pro-evaluateV2-Box-title">用家見證</h2>
        <div class="smile-pro-evaluateV2-Box-content">
          <div
            v-swiper:mySwiper="swiperOption1"
            class="swiperWrap"
            ref="swiperContainer"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide swiperWrap-item"
                v-for="review in userRating"
              >
                <div>
                  <!-- prettier-ignore -->
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="33.75" stroke="#4570b6" stroke-width="1.5"/><mask id="prefix__mask0_11050_282" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="69" height="69"><circle cx="34.5" cy="34.5" r="33.75" fill="#fff" stroke="#4570b6" stroke-width="1.5"/></mask><g clip-path="url(#prefix__clip0_11050_282)" stroke="#4570b6" stroke-width="1.5" mask="url(#prefix__mask0_11050_282)"><path d="M48.647 23.236c0 7.72-6.258 13.977-13.977 13.977s-13.978-6.258-13.978-13.977S26.95 9.258 34.67 9.258s13.977 6.258 13.977 13.978Zm10.086 37.842v3.657c-.222.13-.559.319-1.015.545-.934.463-2.37 1.088-4.347 1.716-3.954 1.256-10.081 2.524-18.702 2.524-8.62 0-14.746-1.268-18.7-2.524-1.977-.628-3.412-1.253-4.346-1.716a16 16 0 0 1-1.015-.545v-3.657c0-4.418 2.455-8.895 6.728-12.291 4.265-3.39 10.3-5.665 17.334-5.665 7.032 0 13.069 2.274 17.334 5.664 4.274 3.396 6.729 7.873 6.729 12.292Z"/></g><circle cx="34.5" cy="34.5" r="33.75" stroke="#4570b6" stroke-width="1.5"/><defs><clipPath id="prefix__clip0_11050_282"><path fill="#fff" d="M9.858 8.508h49.625V70.27H9.858z"/></clipPath></defs></svg>
                  <p class="swiperWrap-item-text">
                    {{ review.review }}
                  </p>
                  <div class="swiperWrap-item-name">
                    <i>{{ review.occupation }}</i>
                    <p>{{ review.name }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination">
              <div class="swiper-button-next">
                <!-- prettier-ignore -->
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4570b6"/><path d="M11 19.988h15.976" stroke="#fff" stroke-width="2.696" stroke-linecap="round"/><path d="m21.407 27.338 7.096-7.096-6.863-6.862" stroke="#fff" stroke-width="2.426" stroke-linecap="round"/></svg>
              </div>
              <div class="swiper-button-prev">
                <!-- prettier-ignore -->
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4570b6"/><path d="M28.502 20.26H12.527" stroke="#fff" stroke-width="2.696" stroke-linecap="round"/><path d="M19.096 27.338 12 20.242l6.862-6.862" stroke="#fff" stroke-width="2.426" stroke-linecap="round"/></svg>
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
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2 14.54 14.571 1.969" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M3.832 1.569H15v10.8" stroke="#fff" stroke-width="2.7" stroke-linecap="round"/></svg>
        </a>
      </div>
    </section>
    <ShareSection />
  </div>
</template>
<script>
import Banner from "@/components/Publice/Banner.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import process from "@/components/content/service/ICL-new/process.vue";
import xtar from "@/components/content/service/ICL-new/xtra.vue";
import film from "@/components/content/service/ICL-new/film.vue";
import suitable from "@/components/content/service/ICL-new/suitable.vue";
import share from "@/components/content/service/ICL-new/share.vue";
import drow from "@/components/content/service/SmileProV2/drow.vue";
import UserShare from "@/components/commom/UserShare/UserShare.vue";
import topNotice from "@/components/Publice/topNotice.vue";
import ShareSection from "@/components/commom/share/ShareSection.vue";
export default {
  components: {
    Banner,
    H2Tag,
    process,
    xtar,
    film,
    suitable,
    share,
    drow,
    UserShare,
    topNotice,
    ShareSection,
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
          content: "SMILE PRO 2.0 微笑矯視 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "SMILE PRO 2.0,smile pro,微笑矯視,希瑪微笑矯視中心",
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
      steps2: [
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0201-v1.webp",
          text: "以「虹膜辨識」功能，即時追蹤並⾃動校正散光軸向",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0202-v1.webp",
          text: "全飛秒激光直接切割角膜中層",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
          text: "製作一個約 2-2.5mm 的小切口",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
          text: "將切割了的角膜 透鏡從切口抽出",
        },
      ],
      steps1: [
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0101-v1.webp",
          text: "以「視軸輔助導航」功能，精準輔助人手鎖定視軸中心點",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0102-v1.webp",
          text: "全飛秒激光直接切割角膜中層",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
          text: "製作一個約 2-2.5mm 的小切口",
        },
        {
          image:
            "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
          text: "將切割了的角膜透鏡從切口抽出",
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
          href: "https://youtu.be/YAGjW1TSCqg",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-028-v1.avif",
          text: ["同隱形眼鏡正式分手～"],
          nameEn: "Cathy",
          nameCn: "王嘉慧",
        },
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
      userRating: [
        {
          name: "Macy",
          occupation: "文員",
          review:
            "做完SMILE Pro之後生活方便咗好多!好享受無需戴眼鏡的感覺，推薦！",
        },
        {
          name: "Ken",
          occupation: "行政人員",
          review: "完成SMILE Pro後，效果符合預期，係值得為自己做嘅投資",
        },
        {
          name: "Vivien",
          occupation: "家庭主婦",
          review:
            "本身好驚，但醫療團隊講解步驟好清楚，喺矯視過程溫柔又細心令我安心哂",
        },
        {
          name: "阿聲",
          occupation: "咖啡師",
          review:
            "終於唔洗成日帶con搞到眼乾眼紅!做完SMILE Pro之後發現呢個世界好靚",
        },
        {
          name: "Agnes",
          occupation: "店務員",
          review:
            "過程好快好安全，術後康復又快，眼睛兩三日後都已經清，感覺好神奇！",
        },
      ],
      canonicalHref: "https://smile.hkcmereye.com/smilePro",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/smilePro",
      browserTitle: "SMILE PRO 2.0 微笑矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "SMILE PRO 2.0 微笑矫视 - 希玛微笑矫视中心",
    };
  },
  methods: {
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
    scrollToPrice() {
      const element = document.getElementById("price");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // 平滑滚动
          block: "start", // 滚动到元素的顶部
        });
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
<style lang="scss" scoped>
$primary: #4570b6;
$text-desc: #6d6e71;
//.simleProV2 .head-bg {
//  top: 54px !important;
//}
//.simleProV2 .headV2 {
//  top: 37px !important;
//}
body {
  overflow-x: hidden;
  background: white;
}
@keyframes elegantShine {
  0% {
    left: -100%;
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  65% {
    opacity: 1;
  }

  80% {
    left: 120%;
    opacity: 1;
  }

  100% {
    left: 100%;
    opacity: 0;
  }
}
@keyframes marquee-smooth {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.notice {
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100%;
    background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.03) 30%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.03) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: elegantShine 2.5s infinite;
    z-index: 2;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
  .marquee-wrapper {
    display: flex;
    width: 100%;
    white-space: nowrap;
  }
  .marquee-content {
    display: flex;
    min-width: 100%;
    animation: marquee-smooth 20s linear infinite;
  }
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-normal {
  font-size: clamp(16px, 5.1282vw, 24px);
  font-weight: 900;
  color: $primary;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
}
.smilepro-difference {
  .custom-comparison-table {
    thead tr > th:nth-child(2) {
      background-color: #e0f0ff;
      color: $primary;
    }
    thead tr > th:nth-child(3) {
      background-color: #afcdff;
      color: #fff;
    }
    thead tr > th:nth-child(4) {
      background-color: $primary;
      color: #fff;
    }
    thead tr > th:nth-child(5) {
      background-color: #dbf0f2;
      color: #4596b6;
    }
    tbody tr > td:nth-child(1) {
      background-color: #f8f8f8;
      color: $primary;
    }
    tbody tr > td:nth-child(4) {
      background-color: #5a8ad6;
      color: #fff;
    }
  }
}
.summary {
  .summary-desc {
    font-size: 14px;
    color: #6d6e71;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.1em;
    text-align: justify;
    strong {
      color: $primary;
      font-weight: 700;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
      line-height: 1.75;
    }
  }
}
.steps {
  .steps-item {
    .pic {
      border-radius: 12px;
      margin-bottom: 12px;
    }
    .num {
      color: $primary;
      position: relative;
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      height: fit-content;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #4570b64d;
        z-index: -1;
        left: 0;
        bottom: -3px;
      }
    }
    .desc {
      color: $text-desc;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.5;
    }
    @media screen and (min-width: 1024px) {
      .pic {
        border-radius: 20px;
        margin-bottom: 24px;
      }
      .num {
        font-size: 36px;
        &::before {
          height: 9px;
          bottom: -5px;
        }
      }
      .desc {
        font-size: 23px;
      }
    }
  }
}
.process {
  .process-list {
    font-size: 14px;
    font-weight: 300;
    color: $text-desc;
    line-height: 1.2;
    letter-spacing: 0.1em;
    strong {
      font-weight: 500;
      color: $primary;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
      line-height: 1.5;
    }
  }
}
.price {
  .price-button-care {
    @include center;
    background: linear-gradient(180deg, #4e90ff 0%, #033994 100%);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    padding: 12px 20px;
    margin: 0 auto;
    text-align: center;
    width: fit-content;
    border: 1px solid #fff;
    box-shadow: 3.108px 3.108px 7.458px #00000040;
    border-radius: 60px;
    letter-spacing: 0;
    @media screen and (min-width: 1024px) {
      font-size: 24px;
      padding: 20px 36px;
      box-shadow: 5px 5px 12px #00000040;
      border-radius: 100px;
    }
  }
  .price-button-normal {
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(90deg, #528be9 0%, #4d80d4 100%);
    border-radius: 12px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 12px 12px;
    width: 100%;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 1024px) {
      border-radius: 20px;
      font-size: 36px;
      padding: 20px 20px;
      max-width: 516px;
    }
  }
}
.icl-btn {
  position: relative;
  z-index: 2;
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
    position: relative;
    .smile-NewBanner-Title {
      position: absolute;
      bottom: 58px;
      left: 28px;
      span {
        font-style: normal;
        color: $primary;
        font-family: "Poppins", sans-serif;
        font-size: 45.469px;
        font-style: normal;
        font-weight: 700;
        line-height: 49.743px;
      }
      h3 {
        color: $primary;
        font-family: "Noto Sans TC";
        font-size: 24.55px;
        font-style: normal;
        font-weight: 400;
        line-height: 26.858px; /* 109.4% */
      }
      p {
        color: $primary;
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
      right: 16px;
      bottom: -32px;
      div {
        background: $primary;
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
      color: $primary;
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
            color: $primary;
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
          color: $primary;
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
    @include center;
    margin-top: 30px;
    width: fit-content;
    padding: 6px 32px;
    border-radius: 100px;
    border: 2px solid $primary;
    background: $primary;
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
    color: $primary;
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
        color: $primary;
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
            box-shadow: -1.768px 1.768px 0px 0px $primary;
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
              background: $primary;
              padding: 4px 6px;
            }
            i {
              @include center;
              position: absolute;
              right: 8px;
              bottom: 8px;
              width: 23px;
              height: 23px;
              border-radius: 2.21px;
              background: #f00;
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
    padding-top: 33.33vw;
    .latestNews-tip {
      position: absolute;
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
      flex-direction: column;
      @include center;
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
}
// 移动端
@media screen and (max-width: 992px) {
  .smile-newCenter {
    .smile-newCenter-menu {
      padding: 0 12px;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.36px;
      // padding-left: 28px;
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
  }
  // 四大特点
  .smilepro-four-feature {
    padding: 0 12px;
    .smilepro-four-feature-Box {
      max-width: 332px;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h2 {
          color: $primary;
          font-family: "Noto Sans TC";
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 13.75px;
          color: $primary;
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
          min-width: 284px;
          .smilepro-four-feature-Box-List-item-number {
            width: 74px;
            color: $primary;
            font-family: "Poppins";
            font-size: 60.224px;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h3 {
              color: $primary;
              font-family: "Noto Sans TC";
              font-size: 14.501px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: $primary;
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
      & > h2 {
        display: inline-block;
        color: $primary;
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
      width: 107px;
      height: 85px;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 900;
      width: 27.18vw;
    }
    .custom-comparison-table thead th:nth-child(1) {
      width: 17.95vw;
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
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21.031px;
      p {
        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 21.031px;
      }
    }
    .custom-comparison-table tbody tr > td:nth-child(4) {
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.314;
      letter-spacing: 0.6px;
    }
  }
  .smile-pro-evaluateV2 {
    background: #f4fafc;
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
        @include center;
        color: $primary;
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
                  color: $primary;
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
                    fill: $primary;
                  }
                }
                .swiperWrap-item-text {
                  color: $primary;
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
    padding: 0 12px;
    // margin-top: 20.51vw;
    // height: 52.5vw;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
    position: relative;
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
      span {
        font-style: normal;
        color: $primary;
        font-family: "Poppins", sans-serif;
        font-size: 11.53vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
      }
      h3 {
        color: $primary;
        font-family: "Noto Sans TC";
        font-size: 6.29vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: $primary;
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
        background: $primary;
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
      padding: 0 12px;
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
      color: $primary;
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
            color: $primary;
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
          color: $primary;
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
    padding: 0 12px;
    .smilepro-four-feature-Box {
      max-width: 85.13vw;
      margin: 0 auto;
      .smilepro-four-feature-Box-top {
        h2 {
          color: $primary;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          margin-top: 3.53vw;
          color: $primary;
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
          min-width: 72.82vw;
          .smilepro-four-feature-Box-List-item-number {
            width: 18.97vw;
            color: $primary;
            font-family: "Poppins";
            font-size: 15.44vw;
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
          }
          .smilepro-four-feature-Box-List-item-text {
            h3 {
              color: $primary;
              font-family: "Noto Sans TC";
              font-size: 3.72vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: $primary;
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
      & > h2 {
        display: inline-block;
        color: $primary;
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
      color: $primary;
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
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 700;
      line-height: 1.44;
      p {
        font-family: "Noto Sans TC";
        font-size: 3.08vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75;
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
                  color: $primary;
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
                    fill: $primary;
                  }
                }
                .swiperWrap-item-text {
                  color: $primary;
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
        color: $primary;
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
            box-shadow: -1.768px 1.768px 0px 0px $primary;
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
              background: $primary;
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
              @include center;
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
      right: #{"max((100vw - 1320px) / 2, 0px)"};
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
        h2 {
          span {
            font-family: "Poppins";
            font-weight: 700;
          }
          color: $primary;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: 1;
        }
        p {
          color: $primary;
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
        .smilepro-four-feature-Box-List-item {
          display: flex;
          align-items: center;
          // gap: clamp(16.5px,1.72vw,33px);
          gap: clamp(10px, 1.04vw, 20px);
          min-width: clamp(262px, 27.29vw, 524px);
          .smilepro-four-feature-Box-List-item-number {
            color: $primary;
            font-family: "Poppins";
            font-size: clamp(41.5px, 4.32vw, 83px);
            font-style: normal;
            font-weight: 700;
            line-height: 0.3;
            width: clamp(52.5px, 5.47vw, 105px);
          }
          .smilepro-four-feature-Box-List-item-text {
            h3 {
              color: $primary;
              font-family: "Noto Sans TC";
              font-size: clamp(10px, 1.04vw, 20px);
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
            p {
              color: $primary;
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
      & > h2 {
        display: inline-block;
        color: $primary;
        font-family: "Noto Sans TC";
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        position: relative;
        span {
          color: $primary;
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
      color: $primary;
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
      background: $primary;
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
      color: $primary;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 4px;
    }
    // 按钮
    .icl-btn {
      margin-top: 63px;
    }
  }
  // 用家见证
  .smile-pro-evaluateV2 {
    max-width: 100vw;
    width: 100vw;
    background: #f4fafc;
    padding-top: 62px;
    padding-bottom: 93px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 88px;
      right: 156px;
      background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-evaluate-title-pc03.png");
      background-repeat: no-repeat;
      width: clamp(200px, 31.4vw, 328px);
      height: clamp(150px, 25.72vw, 268px);
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
        @include center;
        left: 194px;
        top: 50%;
        transform: translateY(-50%);
        color: $primary;
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
                  color: $primary;
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
                    fill: $primary;
                  }
                }
                .swiperWrap-item-text {
                  color: $primary;
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
    // img {
    //   width: 500px;
    //   position: absolute;
    //   top: -27px;
    //   left: inherit;
    //   right: 239px;
    // }
    .smile-NewBanner-Title {
      position: absolute;
      bottom: 90px;
      left: 77px;
      span {
        color: $primary;
        font-family: "Poppins", sans-serif;
        font-size: 137.67px;
        font-style: normal;
        font-weight: 700;
        line-height: 150.611px; /* 109.4% */
      }
      h3 {
        color: $primary;
        font-family: "Noto Sans TC";
        font-size: 74.332px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
      }
      p {
        color: $primary;
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
        background: $primary;
      }
      & > div:nth-child(1) {
        border-bottom: 1px solid $primary;
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
    margin-top: -60px;
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
      max-width: 988px;
      color: $primary;
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
      gap: 32px;
      & > div:nth-child(1) {
        max-width: 464px;
        padding-top: 12px;
      }
      & > div:nth-child(2) {
        max-width: 492px;
        text-align: justify;
      }
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
            color: $primary;
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
    @include center;
    width: fit-content;
    padding: 10px 57px;
    border-radius: 100px;
    border: 2px solid $primary;
    background: $primary;
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
    color: $primary;
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
        color: $primary;
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
            box-shadow: -4px 4px 0px 0px $primary;
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
              background: $primary;
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
              @include center;
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
