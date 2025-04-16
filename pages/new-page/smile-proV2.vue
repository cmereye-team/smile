
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
    <div
      class="container new-container mx-auto smile-NewBanner position-relative"
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

<!-- <svg width="529" height="529" viewBox="0 0 529 529" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10394_1957)">
<g opacity="0.4">
<path d="M223.944 248.847L238.761 241.805L236.584 237.224L217.194 246.44L227.064 267.207L231.637 265.033L223.944 248.847Z" fill="#4570B6"/>
<path d="M287.615 238.428L292.189 236.254L282.318 215.487L262.928 224.703L265.105 229.284L279.922 222.242L287.615 238.428Z" fill="#4570B6"/>
<path d="M242.853 288.632L238.28 290.805L248.15 311.572L267.541 302.356L265.363 297.775L250.546 304.817L242.853 288.632Z" fill="#4570B6"/>
<path d="M306.524 278.212L291.707 285.254L293.885 289.835L313.275 280.619L303.405 259.852L298.831 262.026L306.524 278.212Z" fill="#4570B6"/>
<path d="M275.551 257.682C272.653 252.967 266.884 250.922 261.656 252.74L244.362 216.354L242.075 217.441L259.369 253.827C254.654 256.725 252.609 262.494 254.427 267.722L218.041 285.016L219.128 287.303L255.513 270.009C258.412 274.724 264.18 276.769 269.409 274.951L286.703 311.337L288.989 310.25L271.696 273.865C276.411 270.966 278.464 265.194 276.638 259.969L313.024 242.675L311.937 240.388L275.551 257.682Z" fill="#4570B6"/>
</g>
<g opacity="0.4">
<path d="M298.918 334.088C260.192 352.494 213.7 335.965 195.29 297.231C176.88 258.497 193.413 212.013 232.147 193.603C270.881 175.193 317.365 191.726 335.775 230.46C354.185 269.194 337.652 315.678 298.918 334.088ZM233.781 197.041C196.944 214.549 181.22 258.761 198.728 295.597C216.235 332.434 260.448 348.158 297.284 330.65C334.12 313.142 349.845 268.93 332.337 232.094C314.829 195.258 270.617 179.533 233.781 197.041Z" fill="#4570B6"/>
</g>
<path d="M179.212 85.1773C199.882 124.715 219.062 165.029 236.652 206.031C215.966 166.5 196.818 126.172 179.212 85.1773Z" fill="#4570B6"/>
<path d="M292.126 322.747C312.796 362.285 331.976 402.599 349.566 443.601C328.88 404.07 309.732 363.742 292.126 322.747Z" fill="#4570B6"/>
<path d="M85.1774 349.566C124.716 328.896 165.029 309.716 206.039 292.122C166.508 312.808 126.18 331.957 85.1774 349.566Z" fill="#4570B6"/>
<path d="M322.747 236.652C362.285 215.982 402.599 196.802 443.601 179.212C404.07 199.898 363.742 219.046 322.747 236.652Z" fill="#4570B6"/>
<path d="M268.667 262.356C269.491 264.09 268.757 266.156 267.022 266.98C265.288 267.804 263.222 267.07 262.398 265.335C261.573 263.601 262.308 261.535 264.043 260.711C265.777 259.887 267.846 260.629 268.667 262.356Z" fill="#4570B6"/>
<path d="M342.484 425.751C253.209 468.183 146.058 430.073 103.627 340.798C61.1951 251.522 99.3088 144.379 188.584 101.948C277.859 59.5161 385.01 97.6261 427.442 186.901C469.873 276.177 431.763 383.327 342.488 425.759L342.484 425.751ZM188.81 102.422C99.7988 144.728 61.803 251.558 104.109 340.568C146.415 429.579 253.244 467.575 342.255 425.269C431.266 382.963 469.262 276.134 426.956 187.123C384.65 98.1119 277.82 60.1162 188.81 102.422Z" fill="#4570B6"/>
<path opacity="0.5" d="M333.313 406.454C254.678 443.829 160.306 410.257 122.932 331.622C85.5572 252.987 119.129 158.615 197.756 121.245C276.383 83.874 370.77 117.438 408.141 196.065C445.512 274.693 411.948 369.08 333.313 406.454ZM199.578 125.079C123.059 161.448 90.4009 253.288 126.77 329.807C163.139 406.327 254.982 438.993 331.494 402.627C408.006 366.262 440.679 274.415 404.31 197.896C367.941 121.376 276.094 88.7026 199.575 125.071L199.578 125.079Z" fill="#4570B6"/>
</g>
<defs>
<clipPath id="clip0_10394_1957">
<rect width="396.848" height="396.848" fill="white" transform="translate(0 170.355) rotate(-25.4212)"/>
</clipPath>
</defs>
</svg> -->



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
          >&nbsp;>&nbsp;<a href=""
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
                >{{ $t("smile_proV2.p_text6")
                }}{{ $t("smile_proV2.p_text6_1")
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
            {{ $t("smile_proV2.WhyChoose_p_text1") }}<span>{{ $t("smile_proV2.WhyChoose_p_text1_1") }}</span>{{ $t("smile_proV2.WhyChoose_p_text1_2") }}
          </p>
          <p>
            {{ $t("smile_proV2.WhyChoose_p_text2")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text3") }}</span>{{ $t("smile_proV2.WhyChoose_p_text4")
            }}<span>{{ $t("smile_proV2.WhyChoose_p_text5") }}</span>{{ $t("smile_proV2.WhyChoose_p_text6")}}<span>{{ $t("smile_proV2.WhyChoose_p_text7") }}</span>{{ $t("smile_proV2.WhyChoose_p_text8") }}
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

    <!-- 表格 -->
    <section class="smilepro-difference">
      <div class="smilepro-difference-title">
        <div>
          SMILE/SMILE PRO/<br class="d-lg-none" />
          ICL大不同
        </div>
      </div>

      <table class="table custom-comparison-table">
        <thead>
          <tr>
            <th></th>
            <th><span>SMILE</span><br />微笑<br class="d-lg-none" />矯視</th>
            <th>
              <span
                >SMILE<br class="d-lg-none" />
                PRO</span
              ><br />微笑矯視
            </th>
            <th>
              <span>ICL</span><br />
              植入式<br class="d-lg-none" />隱形眼鏡
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              激光時間
              <p>(單一眼睛)</p>
            </td>
            <td>約23-25秒</td>
            <td>約10-16秒</td>
            <td>不適用</td>
          </tr>
          <tr>
            <td>傷口大小</td>
            <td>約2mm</td>
            <td>約2mm</td>
            <td>3mm</td>
          </tr>
          <tr>
            <td>術後眼乾<br />情況</td>
            <td>輕微</td>
            <td>輕微</td>
            <td>無</td>
          </tr>

          <tr>
            <td>矯視過程<br />痛楚</td>
            <td>無</td>
            <td>無</td>
            <td>無</td>
          </tr>

          <tr>
            <td>矯視<br />準確度</td>
            <td>極高</td>
            <td>極高</td>
            <td>極高</td>
          </tr>

          <tr>
            <td>
              角膜自然<br />
              癒合需<br class="d-lg-none" />時間
            </td>
            <td>數天</td>
            <td>數天</td>
            <td>數天</td>
          </tr>

          <tr>
            <td>
              術後<br />
              不適感
            </td>
            <td>輕微</td>
            <td>輕微</td>
            <td>無</td>
          </tr>

          <tr>
            <td>
              角膜瓣<br />
              移位機會
            </td>
            <td>無</td>
            <td>無</td>
            <td>無</td>
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

                <p class="content-area-text" v-html="steps[activeStep].text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <drow />

    <!-- ICL植入式隱形眼鏡真實個案分享 -->
    <section class="CaseSharing">
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

      <!-- <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
        class="CaseSharing-btn"
        ><img
          src="https://statichk.cmermedical.com/smile/vision-correction-iclV2/share/icl-share-btn.avif"
          alt=""
      /></a> -->
    </section>

<!-- 用家见证 -->
    <section class="smile-pro-evaluateV2">
      <div class="smile-pro-evaluateV2-Box">
        <div class="smile-pro-evaluateV2-Box-title">用家見證</div>

        <div class="smile-pro-evaluateV2-Box-content">
          <div v-swiper:mySwiper="swiperOption1" class="swiperWrap">
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
          disableOnInteraction: false,
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
              disableOnInteraction: false,
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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },

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



<style >
body {
  overflow-x: hidden;
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
.changehang{
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

  .smile-NewBanner {
    padding: 0 15px;
    margin-top: 80px;
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
            .let{
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
          background-color: white;
          width: 180.251px !important;
          height: 333px;
          border-radius: 20px;
        }

        .swiperWrap {
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              transition: all 0.3s ease;
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                width: 165px !important;
                height: 302px;
                padding: 40px 23.5px 43px;
                text-align: center;
                position: relative;
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
                // background-color: white;
                background: none;
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
          background-color: white;
          width: 46.22vw !important;
          height: 85.38vw;
                  border-radius: 5.13vw;
        }

        .swiperWrap {
          .swiper-wrapper {
            align-items: center;
            .swiperWrap-item {
              & > div {
                background-image: url("https://statichk.cmermedical.com/smile/smileproV2/smilepro-yjjz-bg.png");
                background-repeat: no-repeat;
                background-size: cover;

                width: 42.31vw !important;
                height: 77.44vw;
                padding: 10.26vw 6.03vw 11.03vw;
                text-align: center;
                position: relative;
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

                background: none;
                width: 46.22vw !important;
                height: 85.38vw;
                padding: 12.31vw 7.44vw 11.79vw;
                text-align: center;
                position: relative;
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
  .changehon{
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
            .let{
              letter-spacing: clamp(5.45px,0.57vw,10.9px);
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
   color: #60605F;
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
          background-color: white;
          width: 300.502px !important;
          height: 552.006px;
          overflow: hidden;
                  border-radius: 35px;
        }

        .swiperWrap {
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
                width:274px !important;
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
        }
      }
    }
  }
}

@media screen and (min-width: 1140px) {
   .head-bg{
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

