<!--
 * @Date: 2025-07-03 17:29:35
 * @LastEditTime: 2026-02-10 09:26:44
 * @FilePath: /pages/new-page/patient-info.vue
 * @Description: 诊症须知
-->
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

    <section class="navgation-link">
      <ul class="new-container mx-auto">
        <li
          v-for="(item, index) in tabs"
          :key="item.id"
          :class="{ active: activeIndex == index }"
          @click="scrollToLink(item.id, index)"
        >
          <a href="javascript:void(0)">{{ item.label }}</a>
        </li>
      </ul>
    </section>

    <!-- 眼睛檢查及矯視前 -->
    <section class="check-eye" id="beforeJiaoShi">
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
      <div
        class="pt-8 lg:pt-15 scroll-mt-[112px] md:scroll-mt-[140px] lg:scroll-mt-[180px] xl:scroll-mt-[208px] 2xl:scroll-mt-[284px]"
        id="PreCorrection"
      >
        <div class="CorrectedVisionBefore-Process-title">矯視前檢查流程</div>
        <div class="CorrectedVisionBefore-Process">
          <div class="CorrectedVisionBefore-Process-item">
            <img
              class="CorrectedVisionBefore-Process-item-content"
              src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img1.svg"
              alt=""
            />
            <p>前台登記及<br />初步眼睛檢查</p>
            <img
              class="CorrectedVisionBefore-Process-item-icon"
              src="https://statichk.cmermedical.com/smile/patient-info/01.png"
              alt=""
            />
          </div>

          <div class="CorrectedVisionBefore-Process-item">
            <img
              class="CorrectedVisionBefore-Process-item-content"
              src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img2.svg"
              alt=""
            />
            <p>詳細屈光檢查</p>
            <img
              class="CorrectedVisionBefore-Process-item-icon"
              src="https://statichk.cmermedical.com/smile/patient-info/02.png"
              alt=""
            />
          </div>
          <div class="CorrectedVisionBefore-Process-item">
            <img
              class="CorrectedVisionBefore-Process-item-content"
              src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img4.svg"
              alt=""
            />
            <p>全面眼底檢查</p>
            <img
              class="CorrectedVisionBefore-Process-item-icon"
              src="https://statichk.cmermedical.com/smile/patient-info/04.png"
              alt=""
            />
          </div>
          <div class="CorrectedVisionBefore-Process-item">
            <img
              class="CorrectedVisionBefore-Process-item-content"
              src="http://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img3.svg"
              alt=""
            />
            <p>散曈</p>
            <img
              class="CorrectedVisionBefore-Process-item-icon"
              src="https://statichk.cmermedical.com/smile/patient-info/03.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        class="CorrectedVisionBefore-line"
        src="https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-line.png"
        alt=""
      />
      <!-- 合适不合适 -->
      <div class="CorrectedVisionBefore-suitable">
        <div>
          <h4>不合適</h4>
          <p>應盡快接受相關治療</p>
        </div>
        <div>
          <h4>合適</h4>
          <p>預約第二次檢查及同日矯視</p>
        </div>
      </div>
      <div class="CorrectedVisionBefore-button">
        <a
          href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-16)%E7%9F%AF%E8%A6%96%E5%89%8D%E6%AA%A2%E6%9F%A5"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>預約矯視前檢查</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
          >
            <path
              d="M3.19922 26.0597L25.8278 3.43115"
              stroke="#ffffff"
              stroke-width="5.4"
              stroke-linecap="round"
            />
            <path
              d="M6.49609 2.71118H26.5987V22.1512"
              stroke="#ffffff"
              stroke-width="4.86"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
      <!-- 备注 -->
      <div class="CorrectedVisionBefore-note">
        <h4>備註:</h4>
        <p>
          <i>1.</i
          ><span>基本檢查包括：屈光檢查、電腦驗光、 眼壓、角膜厚度等</span>
        </p>
        <p>
          <i>2.</i
          ><span
            >SMILE/ SMILE
            Pro微笑激光矯視的詳細眼底檢查包括：淚水分泌測試、瞳孔測量、角膜地形掃描及像差、雙眼內皮細胞分析、散瞳眼底檢查、光學相干斷層掃描(如需要)、掃描激光眼底檢查(如需要);
            ICL植入式隱形眼鏡的眼底檢查額外包括:
            內皮細胞的密度測量及眼科超聲生物顯微鏡</span
          >
        </p>

        <p>
          <i>3.</i
          ><span>
            散瞳/ 放大瞳孔後：<br />
            ·觀看近物時視野變得模糊<br />·有輕微畏光情況，可帶備太陽眼鏡
            <br />·切勿駕駛
            <br />
            <b>·放大瞳孔的效果一般會在4至6小時後消失</b>
          </span>
        </p>
      </div>
    </section>

    <!-- 矫视流程 -->
    <section class="visionProcess" id="inJiaoShi">
      <h2>矯視流程</h2>
      <p>
        經過詳細的眼睛檢查和診症，醫護人員會告知客人是否適合矯視，才進行矯視程序。
      </p>

      <!-- <div class="visionProcess_Pcs">
        <div class="visionProcess_Pcs-item">
          <div class="visionProcess_Pcs-item-img">
            <img
              src="https://statichk.cmermedical.com/smile/patient-info/visonProcess/visionProcess_Pcs-item1.svg"
              alt=""
            />
            <div>
              <span>Step</span>
              <i>1</i>
            </div>
          </div>
          <p>屈光檢查</p>
        </div>

        <div class="visionProcess_Pcs-item">
          <div class="visionProcess_Pcs-item-img">
            <img
              src="https://statichk.cmermedical.com/smile/patient-info/visonProcess/visionProcess_Pcs-item2.svg"
              alt=""
            />
            <div>
              <span>Step</span>
              <i>2</i>
            </div>
          </div>
          <p>術前準備</p>
        </div>

        <div class="visionProcess_Pcs-item">
          <div class="visionProcess_Pcs-item-img">
            <img
              src="https://statichk.cmermedical.com/smile/patient-info/visonProcess/visionProcess_Pcs-item3.svg"
              alt=""
            />
            <div>
              <span>Step</span>
              <i>3</i>
            </div>
          </div>
          <p>預約翌日覆診</p>
        </div>

        <div class="visionProcess_Pcs-item">
          <div class="visionProcess_Pcs-item-img">
            <img
              src="https://statichk.cmermedical.com/smile/patient-info/visonProcess/visionProcess_Pcs-item4.svg"
              alt=""
            />
            <div>
              <span>Step</span>
              <i>4</i>
            </div>
          </div>
          <p>矯視療程</p>
        </div>
      </div> -->

      <div class="visionProcess_Plc">
        <ul>
          <li>
            <h4>Step 1</h4>
            <i></i>
            <p>屈光檢查</p>
          </li>

          <li>
            <h4>Step 2</h4>
            <i></i>
            <p>術前準備</p>
          </li>

          <li>
            <h4>Step 3</h4>
            <i></i>
            <p>預約翌日覆診</p>
          </li>

          <li>
            <h4>Step 4</h4>
            <i></i>
            <p>取藥及講解術後<br />藥水用法</p>
          </li>

          <li>
            <h4>Step 5</h4>
            <i></i>
            <p>矯視療程</p>
          </li>
        </ul>
      </div>

      <!-- 注意事项 -->
      <div class="visionProcess-Notice">
        <img
          src="https://statichk.cmermedical.com/smile/patient-info/yellowWarning.svg"
          alt=""
        />
        <h2>矯視當日注意事項</h2>

        <div class="visionProcess-Notice-Card">
          <h4>矯視前</h4>
          <ul>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item1-1.avif"
                alt=""
              />
              <p>預先洗頭<br />避免術後雙眼入水</p>
            </li>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item1-2.avif"
                alt=""
              />
              <p>穿著寬鬆、開扣的<br />衣服,避免術後換衣服<br />會觸碰雙眼</p>
            </li>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item1-3.avif"
                alt=""
              />
              <p>建議矯視當日由親友陪同</p>
            </li>
          </ul>
        </div>

        <!-- 矯視過程中 -->
        <div
          class="visionProcess-Notice-Card visionProcess-Notice-Card-section2"
        >
          <h4>矯視過程中</h4>
          <ul>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item2-1.avif"
                alt=""
              />
              <p>不要郁動和說話</p>
            </li>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item2-2.avif"
                alt=""
              />
              <p>請遵照醫生指示</p>
            </li>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item2-3.avif"
                alt=""
              />
              <p>放鬆心情，不要緊張</p>
            </li>
          </ul>
        </div>

        <!-- 請勿使用  -->
        <div
          class="visionProcess-Notice-Card visionProcess-Notice-Card-section3"
        >
          <h4>請勿使用</h4>
          <ul>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item3-1.avif"
                alt=""
              />
              <p>眼部化妝品</p>
            </li>
            <li>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/Notice-item3-2.avif"
                alt=""
              />
              <p>任何香水、香薰或<br />揮發性用品</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 矯視後覆診 -->
    <section class="section-last" id="afterJiaoShi">
      <div class="section-last-1">
        <h2>矯視後覆診</h2>
        <ul>
          <li>
            <div>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/section-last-img1.avif"
                alt="翌日"
              />
            </div>
            <p>翌日</p>
          </li>
          <li>
            <div>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/section-last-img2.avif"
                alt="一星期"
              />
            </div>
            <p>一星期</p>
          </li>

          <li>
            <div>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/section-last-img3.avif"
                alt="一個月"
              />
            </div>
            <p>一個月</p>
          </li>

          <li>
            <div>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/section-last-img4.avif"
                alt="三個月 "
              />
            </div>
            <p>三個月</p>
          </li>

          <li>
            <div>
              <img
                src="https://statichk.cmermedical.com/smile/patient-info/section-last-img5.avif"
                alt="六個月"
              />
            </div>
            <p>六個月</p>
            <span>（或按醫生之需要覆診指示）</span>
          </li>
        </ul>
      </div>
      <div class="section-last-2">
        <p>
          <span>備註：</span> <br /><i>*</i>
          已包含的覆診次數因不同矯視服務及不同矯視套餐而有所不同，詳情可參考收費詳情頁或聯絡查詢
        </p>
        <h2>矯視後護理及注意事項</h2>
        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/xqyN2Scg_OA?si=ZCNws4P2XJgDv2EM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="section-last-3">
        <img
          src="https://statichk.cmermedical.com/smile/patient-info/section-last-3-title.avif"
          alt=""
        />
        <h2>矯視後護理</h2>
      </div>

      <div class="section-last-4">
        <div class="section-last-4-item">
          <h3>完成SMILE/SMILE Pro矯視後</h3>
          <div class="section-last-4-item-content">
            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>當天內</span></h4>
              <div>
                <p>
                  <i>1</i>
                  <span
                    >矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少</span
                  >
                </p>
                <p>
                  <i>2</i><span>按醫生指示定時服藥或滴眼藥水，維持四星期</span>
                </p>
                <p><i>3</i><span>避免揉擦眼睛</span></p>
              </div>
            </div>

            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>一星期內</span></h4>
              <div>
                <p><i>1</i><span>避免使用眼部化妝品</span></p>
              </div>
            </div>

            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>兩星期內</span></h4>
              <div>
                <p><i>1</i><span>避免梘水、自來水或污水進入眼睛</span></p>
              </div>
            </div>

            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>一個月內</span></h4>
              <div>
                <p>
                  <i>1</i>
                  <span
                    >如有需要可配戴太陽眼鏡以防止紫外線的刺激或沙塵入眼</span
                  >
                </p>
                <p><i>2</i><span>不可進行水上活動或浸熱水浴</span></p>
                <p><i>3</i><span>不可進行碰撞性運動，如足球、籃球等</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-last-4-item">
          <h3>完成ICL矯視後</h3>
          <div class="section-last-4-item-content">
            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>當天內</span></h4>
              <div>
                <p>
                  <i>1</i>
                  <span
                    >矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少</span
                  >
                </p>
                <p><i>2</i><span>避免梘水、自來水或污水進入眼睛</span></p>
                <p><i>3</i><span>按醫生指示定時服藥或滴眼藥水</span></p>
                <p><i>4</i><span>避免揉擦眼睛</span></p>
              </div>
            </div>
            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>一星期內</span></h4>
              <div>
                <p><i>1</i><span>避免使用眼部化妝品</span></p>
                <p><i>2</i><span>睡覺時可佩戴眼罩(如有需要)</span></p>
              </div>
            </div>
            <div class="section-last-4-item-content-text">
              <h4>矯視後<span>一個月內</span></h4>
              <div>
                <p><i>1</i><span>不可游泳或進行劇烈運動</span></p>
                <p><i>2</i><span>外出時可配戴太陽眼鏡(如有需要)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="section-last-5">
        *任何時候若眼睛突然出現劇痛或視力明顯下降等情況，必須盡快求醫。
      </p>
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
          href: "https://smile.hkcmereye.com/patient-info/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/patient-info/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/patient-info/",
        },
      ],
    };
  },
  data() {
    return {
      activeIndex: 0,

      // tab 列表数据
      tabs: [
        {
          label: "矯視前",
          href: "/patient-info#beforeJiaoShi",
          id: "beforeJiaoShi",
        },
        {
          label: "矯視流程",
          href: "/patient-info#inJiaoShi",
          id: "inJiaoShi",
        },
        {
          label: "矯視後",
          href: "/patient-info#afterJiaoShi",
          id: "afterJiaoShi",
        },
      ],
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

    scrollToLink(id, idx) {
      this.activeIndex = idx;
      console.log(this.activeIndex);
      this.$forceUpdate();

      this.$nextTick(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        history.pushState(null, null, `/patient-info#${id}`);
      });
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
    // console.log(window.location);

    const hash = window.location.hash;
    const matchedIndex = this.tabs.findIndex((tab) => tab.href.includes(hash));
    if (matchedIndex !== -1) {
      this.activeIndex = matchedIndex;
    }
  },
};
</script>

<style>
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

  // 锚链接导航
  .navgation-link {
    position: sticky;
    top: 80px;
    opacity: 1;
    z-index: 9;
    ul {
      display: flex;
      border: 1px solid #4570b6;
      width: fit-content;

      li {
        a {
          display: block;
          width: 33.33vw;
          text-align: center;
          box-sizing: border-box;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 400;
          line-height: 2;
          background: #fff;
        }
      }
      & > li:nth-child(2) a {
        border-left: 0.26vw solid #4570b6;
        border-right: 0.26vw solid #4570b6;
      }
      .active {
        a {
          font-weight: 900;
          color: #fff;
          background: #4570b6;
        }
      }
    }
  }

  // 眼睛检查及矫视前
  .check-eye {
    scroll-margin-top: 30.77vw;
    // background: #f4fafc;
    padding-top: 6.41vw;
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
    padding-top: 5.9vw;
    padding-bottom: 30px;
    .CorrectedVisionBefore-iframe {
      img {
        width: 11.79vw;
        height: 12.31vw;
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 2.05vw auto 4.36vw;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 103.173%;
        letter-spacing: 0.51vw;
        position: relative;

        &::before {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: -9.23vw;
          bottom: -1.03vw;
        }

        &::after {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: -9.23vw;
          bottom: -1.03vw !important;
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
      margin-top: 8.97vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10.26vw 4.1vw;
      &-title {
        width: fit-content;
        margin: 5.05vw auto 6.36vw;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 103.173%;
        letter-spacing: 0.51vw;
        position: relative;
      }
      .CorrectedVisionBefore-Process-item {
        position: relative;
        width: 41.28vw;
        height: 32.82vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        p {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 500;
          line-height: 121.429%;
        }
        .CorrectedVisionBefore-Process-item-icon {
          position: absolute;
          width: 11.28vw;
          left: 2.56vw;
          top: -3.59vw;
        }
      }

      & > .CorrectedVisionBefore-Process-item:nth-child(1),
      & > .CorrectedVisionBefore-Process-item:nth-child(3) {
        &::after {
          content: "";
          width: 4.1vw;
          height: 0.13vw;
          background: #4570b6;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -4.1vw;
          z-index: -1;
        }
      }

      & > .CorrectedVisionBefore-Process-item:nth-child(1) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg1.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: 13.08vw;
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(2) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg2.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: 12.31vw;
          height: auto;
        }
        &::after {
          content: "";
          width: 0.13vw;
          height: 10.26vw;
          background: #4570b6;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -10.26vw;
          z-index: -1;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(3) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg3.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: 17.44vw;
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(4) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg4.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: 7.44vw;
          height: auto;
        }
      }
    }
    .CorrectedVisionBefore-line {
      width: 21.03vw;
      height: 13.33vw;
      margin: 0 auto;
      transform: translateX(-50%);
    }
    // 合适，不合适
    .CorrectedVisionBefore-suitable {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 84.62vw;
      margin: 0 auto 8.62vw;
      border: 0.307px solid #4471b7;
      & > div:nth-child(2) {
        background: #4471b7;
        h4,
        p {
          color: #fff;
        }
      }
      div {
        padding: 2.05vw 0 3.08vw;
        text-align: center;
        width: 42.31vw;
        h4 {
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 500;
          line-height: 114.286%;
          letter-spacing: 1.08vw;
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: 3.08vw;
          font-style: normal;
          font-weight: 300;
          line-height: 4.1vw;
        }
      }
    }
    // 預約按鈕
    .CorrectedVisionBefore-button {
      width: fit-content;
      margin: 0 auto;
      a {
        display: flex;
        align-items: center;
        color: #fff;
        padding: 2vw 8vw;
        border-radius: 100px;
        font-size: 5.5vw;
        line-height: 7.5vw;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: #4570b6;
        border: 2px solid #4570b6;
        gap: 9px;
      }
      svg {
        width: 16px;
        height: 16px;
      }
    }
    .CorrectedVisionBefore-note {
      max-width: 84.62vw;
      margin: 8.62vw auto 0;
      h4 {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 700;
        line-height: 214.286%;
        letter-spacing: 0.72vw;
      }
      p {
        display: flex;
        align-items: flex-start;
        font-style: normal;
        font-weight: 300;
        font-family: "Noto Sans HK";
        color: #6d6e71;
        font-size: 3.59vw;
        line-height: 2.14;
        i {
          letter-spacing: 0.72vw;
        }
        span {
          letter-spacing: 0.9vw;
          b {
            font-weight: 300;
            font-style: normal;
            letter-spacing: 0.43vw;
          }
        }
      }
    }
  }

  // 矫视流程
  .visionProcess {
    scroll-margin-top: 30.77vw;

    padding-top: 7.69vw;
    background: #f4fafc;
    & > h2 {
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: 5.13vw;
      font-style: normal;
      font-weight: 900;
      line-height: 195%;
    }
    & > p {
      max-width: 86.15vw;
      margin: 4.36vw auto 9.23vw;
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 300;
      line-height: 214.286%;
      letter-spacing: 0.7vw;
    }
    // .visionProcess_Pcs {
    //   display: flex;
    //   justify-content: center;
    //   flex-wrap: wrap;
    //   gap: 37px 40px;
    //   .visionProcess_Pcs-item {
    //     width: 149px;
    //     flex-shrink: 0;
    //     text-align: center;
    //     .visionProcess_Pcs-item-img {
    //       height: 149px;
    //       border-radius: 43.75px;
    //       border: 0.625px solid #4570b6;
    //       background: #fff;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       position: relative;
    //       & > div {
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //         width: 41px;
    //         height: 41px;

    //         position: absolute;
    //         top: -10px;
    //         left: 6px;
    //         background: #4570b6;
    //         border-radius: 50%;
    //         span {
    //           color: #fff;
    //           text-align: center;
    //           font-family: "Noto Sans HK";
    //           font-size: 10px;
    //           font-style: normal;
    //           font-weight: 300;
    //           line-height: 162.5%;
    //         }
    //         i {
    //           color: #fff;
    //           font-family: "Noto Sans HK";
    //           font-size: 15px;
    //           font-style: normal;
    //           font-weight: 500;
    //           line-height: 1;
    //         }
    //       }
    //     }
    //     & > p {
    //       margin-top: 10px;
    //       color: #4570b6;
    //       font-family: "Noto Sans TC";
    //       font-size: 14px;
    //       font-style: normal;
    //       font-weight: 500;
    //       line-height: 133.929%;
    //       letter-spacing: 3.5px;
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(1) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 64px;
    //         height: 74px;
    //       }

    //       &::after {
    //         content: "";
    //         position: absolute;
    //         width: 20px;
    //         height: 34px;
    //         background: url("https://statichk.cmermedical.com/smile/patient-info/right.png")
    //           no-repeat;
    //         background-size: 100% auto;
    //         right: -30px;
    //         top: 50%;
    //         transform: translateY(-50%);
    //       }
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(2) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 84px;
    //         height: 77px;
    //       }
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(3) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 71px;
    //         height: 74px;
    //       }

    //       &::after {
    //         content: "";
    //         position: absolute;
    //         width: 20px;
    //         height: 34px;
    //         background: url("https://statichk.cmermedical.com/smile/patient-info/right.png")
    //           no-repeat;
    //         background-size: 100% auto;
    //         right: -30px;
    //         top: 50%;
    //         transform: translateY(-50%);
    //       }
    //     }
    //   }
    //   & > .visionProcess_Pcs-item:nth-child(4) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 90px;
    //         height: 50px;
    //       }
    //     }
    //   }
    // }
    .visionProcess_Plc {
      ul {
        max-width: 86.15vw;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 8.97vw 11.28vw;
        justify-content: center;
        li {
          h4 {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 3.56vw;
            font-style: normal;
            font-weight: 900;
            line-height: 103.661%;
            letter-spacing: 0;
          }
          i {
            margin: 3.08vw auto 2.56vw;
            display: block;
            width: 3.08vw;
            height: 3.08vw;
            background: #4570b6;
            border-radius: 50%;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              right: -1.03vw;
              top: 50%;
              transform: translate(100%, -50%);
              width: 24.2vw;
              height: 0.26vw;

              background: linear-gradient(
                to right,
                #4570b6 50%,
                transparent 50%
              );
              background-size: 1.54vw 0.26vw;
              background-position: 0 0;
              background-repeat: repeat-x;
            }
          }
          p {
            text-align: center;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 500;
            line-height: 118.804%;
            letter-spacing: 0.9vw;
          }
        }

        & > li:nth-child(2) {
          i {
            &::after {
              width: 26.15vw;
            }
          }
        }

        & > li:nth-child(3) {
          p {
            letter-spacing: 0;
          }
        }
        & > li:nth-child(4) {
          i {
            &::after {
              width: 30.77vw;
            }
          }
        }
        & > li:nth-child(3),
        & > li:nth-child(5) {
          i {
            &::after {
              content: none;
            }
          }
        }
      }
    }

    .visionProcess-Notice {
      margin-top: 9.23vw;
      padding-bottom: 10.26vw;

      & > img {
        width: 11.79vw;
        height: 12.31vw;
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 2.05vw auto 9.23vw;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 103.173%;
        letter-spacing: 0.51vw;
        position: relative;

        &::before {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: -9.23vw;
          bottom: -1.03vw;
        }

        &::after {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: -9.23vw;
          bottom: -1.03vw !important;
        }
      }

      .visionProcess-Notice-Card {
        max-width: 86.15vw;
        margin: 0 auto;
        padding: 5.38vw 4.62vw 0 5.9vw;
        border-radius: 23.404px;
        border: 0.12vw solid #4570b6;
        background: #fff;
        h4 {
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 700;
          line-height: 95.395%;
          letter-spacing: 0.41vw;
        }
        ul {
          margin-top: 6.15vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            position: relative;

            gap: 3.59vw;
            height: 38.21vw;
            width: 50%;

            img {
              width: 13.08vw;
              height: auto;
            }
            p {
              color: #4570b6;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 300;
              line-height: 128.571%;
            }
          }
          & > li:nth-child(2) {
            padding-top: 2.82vw;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              width: 0.26vw;
              background: linear-gradient(
                to bottom,
                #cdcdcd 50%,
                transparent 50%
              );
              background-size: 0.26vw 1.54vw;
              background-position: 0 0;
              background-repeat: repeat-y;
            }
          }
          & > li:nth-child(3) {
            width: 100%;
            padding-top: 5.38vw;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 0.26vw;
              width: 100%;
              background: linear-gradient(
                to right,
                #cdcdcd 50%,
                transparent 50%
              );
              background-size: 1.54vw 0.26vw;
              background-position: 0 0;
              background-repeat: repeat-x;
            }
          }
        }
      }
      .visionProcess-Notice-Card-section2 {
        margin: 5.13vw auto;
        ul {
          li {
            padding-top: 3.59vw;
            height: 33.33vw;
          }
          & > li:nth-child(2) {
            padding-top: 3.59vw;
          }
        }
      }
      .visionProcess-Notice-Card-section3 {
        padding-bottom: 6.41vw;
        ul {
          li {
            padding-top: 2.82vw;
            height: 31.54vw;
          }
          & > li:nth-child(2) {
            padding-top: 2.82vw;
          }
        }
      }
    }
  }

  //矯視後覆診
  .section-last {
    scroll-margin-top: 30.77vw;

    background: #def1ff;
    padding-top: 10.26vw;
    padding-bottom: 7.69vw;
    .section-last-1 {
      h2 {
        text-align: center;
        margin-bottom: 2.82vw;

        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 195%;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 7.69vw 8.46vw;

        li {
          width: 22.82vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: -5.13vw;
            transform: translateY(-50%);
            background: url("https://statichk.cmermedical.com/smile/patient-info/section-last-toright.svg")
              no-repeat;
            background-size: 100% auto;
            width: 2.05vw;
            height: 3.59vw;
          }

          & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 22.82vw;
            width: 22.82vw;
            border-radius: 50%;
            border: 0.09vw solid #4570b6;
            background: #fff;
            img {
              width: 11.03vw;
            }
          }
          p {
            margin-top: 1.54vw;
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans TC";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 500;
            line-height: 91.392%;
            letter-spacing: 0.9vw;
          }
          span {
            position: absolute;
            white-space: nowrap;
            left: 50%;
            transform: translateX(-50%);
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 3.08vw;
            font-style: normal;
            font-weight: 300;
            line-height: 4.62vw;
          }
        }
        & > li:nth-child(3),
        & > li:last-child {
          &::after {
            content: none;
          }
        }
      }
    }

    .section-last-2 {
      h2 {
        margin: 12.82vw auto 1.54vw;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 195%;
      }
      .iframe-container {
        width: 100vw;
        margin: 0 auto;
        aspect-ratio: 560/315;
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      }

      & > p {
        max-width: 86.15vw;
        margin: 5.13vw auto 0;
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 300;
        line-height: 2.1;
        letter-spacing: 0.72vw;
        span {
          color: #4570b6;
          font-weight: 500;
        }
        i {
          color: #4570b6;
        }
      }
    }
    .section-last-3 {
      margin-top: 12.82vw;
      margin-bottom: 7.69vw;

      & > img {
        width: 11.79vw;

        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 5.13vw auto 0vw;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 900;
        line-height: 103.173%;
        letter-spacing: 0.51vw;
        position: relative;

        &::before {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: -9.23vw;
          bottom: -1.03vw;
        }

        &::after {
          content: "";
          width: 8.72vw;
          height: 6.15vw;
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: -9.23vw;
          bottom: -1.03vw !important;
        }
      }
    }
    .section-last-4 {
      display: flex;
      flex-direction: column;
      gap: 10.26vw;
      align-items: center;
      .section-last-4-item {
        width: 87.18vw;

        border-radius: 12px 12px 28px 28px;
        overflow: hidden;
        h3 {
          background: #d0e2ff;
          padding: 3.59vw 0;
          text-align: center;

          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 4.62vw;
          font-style: normal;
          font-weight: 900;
          line-height: 101.494%;
          letter-spacing: 0.46vw;
        }
        // 列表
        .section-last-4-item-content {
          background: #fff;
          padding: 3.85vw 7.95vw 0px 6.15vw;
          .section-last-4-item-content-text {
            padding-bottom: 9.49vw;
            h4 {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: 4.62vw;
              font-style: normal;
              font-weight: 400;
              line-height: 101.494%;
              letter-spacing: 0.46vw;
              padding-bottom: 2.56vw;
              position: relative;
              span {
                font-weight: 700;
              }
              &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 0.26vw;
                width: 100%;
                background: linear-gradient(
                  to right,
                  #cdcdcd 50%,
                  transparent 50%
                );
                background-size: 1.54vw 0.26vw;
                background-position: 0 0;
                background-repeat: repeat-x;
              }
            }
            & > div {
              margin-top: 3.08vw;
              display: flex;
              flex-direction: column;
              gap: 4.1vw;
              p {
                display: flex;
                gap: 2.49vw;

                i {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 6.15vw;
                  height: 6.15vw;
                  background: #4570b6;
                  border-radius: 50%;
                  flex-shrink: 0;
                  color: #fff;
                  font-family: "Noto Sans TC";
                  font-size: 3.43vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 130.482%;
                }
                span {
                  color: #6d6e71;
                  font-family: "Noto Sans TC";
                  font-size: 3.59vw;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 130.492%;
                }
              }
            }
          }
        }
      }
      & > .section-last-4-item:nth-child(2) {
        h3 {
          color: #09a1b5;
          background: #afebe7;
        }
        .section-last-4-item-content {
          .section-last-4-item-content-text {
            h4 {
              color: #09a1b5;
            }
            & > div {
              i {
                background: #09a1b5;
              }
            }
          }
        }
      }
    }
    .section-last-5 {
      width: 86.15vw;
      margin: 7.95vw auto 0px;

      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 3.59vw;
      font-style: normal;
      font-weight: 300;
      line-height: 214.286%;
      letter-spacing: 0.72vw;
    }
  }

  // 分享
  .CaseSharingV2 {
    width: fit-content;

    margin: 44px auto 0;
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

  // 锚链接导航
  .navgation-link {
    position: sticky;
    top: 159px;
    opacity: 1;
    z-index: 9;
    margin-top: 72px;

    ul {
      display: flex;
      border: 1px solid #4570b6;
      width: fit-content;

      li {
        a {
          display: block;
          width: clamp(201px, 20.94vw, 402px);
          padding: clamp(14px, 1.46vw, 28px) 0;
          text-align: center;
          box-sizing: border-box;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(3.75px, 0.39vw, 7.5px);
          background: #fff;
        }
      }
      & > li:nth-child(2) a {
        border-left: 1px solid #4570b6;
        border-right: 1px solid #4570b6;
      }
      .active {
        a {
          font-weight: 900;
          color: #fff;
          background: #4570b6;
        }
      }
    }
  }

  // 眼睛检查及矫视前
  .check-eye {
    scroll-margin-top: clamp(125px, 13.02vw, 250px);
    margin-top: clamp(6px, 0.63vw, 12px);
    // background: #f4fafc;
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
    padding-top: clamp(41.5px, 4.32vw, 83px);
    padding-bottom: clamp(50px, 5.21vw, 100px);
    .CorrectedVisionBefore-iframe {
      img {
        width: clamp(58px, 6.04vw, 116px);
        height: clamp(60.5px, 6.3vw, 121px);
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: clamp(7px, 0.73vw, 14px) auto clamp(34px, 3.54vw, 68px);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
        position: relative;

        &::before {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(15px, 1.56vw, 30px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: clamp(-50px, -2.6vw, -25px);
          bottom: clamp(-4px, -0.21vw, -2px);
        }

        &::after {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(15px, 1.56vw, 30px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: clamp(-50px, -2.6vw, -25px);
          bottom: clamp(-4px, -0.21vw, -2px) !important;
        }
      }
      .iframe-container {
        width: clamp(302.5px, 31.51vw, 605px);
        margin: 0 auto;
        aspect-ratio: 560/315;
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      }
    }

    .CorrectedVisionBefore-Process {
      margin-top: clamp(78.5px, 8.18vw, 157px);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(68px, 7.08vw, 136px) clamp(60px, 6.25vw, 120px);
      max-width: clamp(540px, 56.25vw, 1080px);
      margin-left: auto;
      margin-right: auto;
      &-title {
        width: fit-content;
        margin: clamp(34px, 3.54vw, 68px) auto clamp(34px, 3.54vw, 68px);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
        position: relative;
      }
      .CorrectedVisionBefore-Process-item {
        position: relative;
        width: clamp(235px, 24.48vw, 470px);
        height: clamp(186.5px, 19.43vw, 373px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        p {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans TC";
          font-size: clamp(12.5px, 1.3vw, 25px);
          font-style: normal;
          font-weight: 700;
          line-height: 120%;
          letter-spacing: clamp(3.125px, 0.33vw, 6.25px);
        }
        .CorrectedVisionBefore-Process-item-icon {
          position: absolute;
          width: clamp(62px, 6.46vw, 124px);
          left: clamp(-18px, -0.94vw, -9px);
          top: 0px;
          transform: translateY(-50%);
        }
      }

      & > .CorrectedVisionBefore-Process-item:nth-child(1),
      & > .CorrectedVisionBefore-Process-item:nth-child(3) {
        &::after {
          content: "";
          width: clamp(52.5px, 5.47vw, 105px);
          height: clamp(0.5px, 0.05vw, 1px);
          background: #4570b6;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: clamp(-110px, -5.73vw, -55px);
          z-index: -1;
        }
      }

      & > .CorrectedVisionBefore-Process-item:nth-child(1) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg1.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: clamp(91px, 9.48vw, 182px);
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(2) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg2.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: clamp(79.5px, 8.28vw, 159px);
          height: auto;
        }
        &::after {
          content: "";
          width: clamp(0.5px, 0.05vw, 1px);
          height: clamp(52.5px, 5.47vw, 105px);
          background: #4570b6;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: clamp(-115px, -5.99vw, -57.5px);
          z-index: -1;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(3) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg3.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: clamp(99px, 10.31vw, 198px);
          height: auto;
        }
      }
      & > .CorrectedVisionBefore-Process-item:nth-child(4) {
        background: url("https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-bg4.avif");
        background-size: 100% auto;
        .CorrectedVisionBefore-Process-item-content {
          width: clamp(42px, 4.38vw, 84px);
          height: auto;
        }
      }
    }
    .CorrectedVisionBefore-line {
      width: clamp(150.5px, 15.68vw, 301px);
      height: clamp(63px, 6.56vw, 126px);
      margin: clamp(5.5px, 0.57vw, 11px) auto clamp(8.5px, 0.89vw, 17px);
      transform: translateX(-50%);
    }
    // 合适，不合适
    .CorrectedVisionBefore-suitable {
      display: flex;
      justify-content: center;
      align-items: center;
      width: clamp(540px, 56.25vw, 1080px);
      margin: 0 auto clamp(26px, 2.71vw, 52px);
      border: clamp(0.5px, 0.05vw, 1px) solid #4471b7;

      & > div:nth-child(2) {
        background: #4471b7;
        h4,
        p {
          color: #fff;
        }
      }
      div {
        padding: clamp(13px, 1.35vw, 26px) 0;
        text-align: center;
        width: clamp(270px, 28.13vw, 540px);
        h4 {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: clamp(13px, 1.35vw, 26px);
          font-style: normal;
          font-weight: 500;
          line-height: 134.615%;
          letter-spacing: clamp(3.9px, 0.41vw, 7.8px);
        }
        p {
          color: #6d6e71;
          font-family: "Noto Sans HK";
          font-size: clamp(10px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 300;
          line-height: 1.75;
          letter-spacing: clamp(3px, 0.31vw, 6px);
        }
      }
    }
    // 預約按鈕
    .CorrectedVisionBefore-button {
      margin: 95px 0;
      display: flex;
      justify-content: center;
      a {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: 9px;
        padding: 7px 32px;
        background-color: #4570b6;
        border-radius: 80px;
        span {
          color: #fff;
          text-align: justify;
          font-family: "Noto Sans TC";
          font-size: 36px;
          font-style: normal;
          font-weight: 700;
          line-height: 63px; /* 175% */
          letter-spacing: 1.8px;
        }
        svg {
          width: 23px;
          height: 23px;
        }
      }
    }
    .CorrectedVisionBefore-note {
      max-width: clamp(515.5px, 53.7vw, 1031px);
      margin: 0 auto;
      h4 {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: 180%;
        letter-spacing: clamp(2.5px, 0.26vw, 5px);
      }
      p {
        display: flex;
        align-items: flex-start;
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 1.8;
        letter-spacing: clamp(2.5px, 0.26vw, 5px);

        span {
          b {
            font-weight: 300;
            font-style: normal;
          }
        }
      }
    }
  }

  // 矫视流程
  .visionProcess {
    scroll-margin-top: clamp(125px, 13.02vw, 250px);
    background: #f4fafc;
    padding-top: clamp(47.5px, 4.95vw, 95px);
    padding-bottom: clamp(75px, 7.81vw, 150px);
    & > h2 {
      color: #4570b6;
      font-family: "Noto Sans TC";
      font-size: clamp(15px, 1.56vw, 30px);
      font-style: normal;
      font-weight: 900;
      line-height: 1;
      letter-spacing: clamp(1.5px, 0.16vw, 3px);
    }
    & > p {
      margin: clamp(18px, 1.88vw, 36px) auto clamp(40px, 4.17vw, 80px);
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(10px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 300;
      line-height: 175%;
      letter-spacing: clamp(3px, 0.31vw, 6px);
    }
    // .visionProcess_Pcs {
    //   display: flex;
    //   justify-content: center;
    //   flex-wrap: wrap;
    //   gap: 57px;
    //   .visionProcess_Pcs-item {
    //     width: 228px;
    //     flex-shrink: 0;
    //     text-align: center;
    //     .visionProcess_Pcs-item-img {
    //       height: 228px;
    //       border-radius: 66.981px;
    //       border: 0.957px solid #4570b6;
    //       background: #fff;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       position: relative;

    //       &::after {
    //         content: "";
    //         position: absolute;
    //         width: 20px;
    //         height: 34px;
    //         background: url("https://statichk.cmermedical.com/smile/patient-info/right.png")
    //           no-repeat;
    //         background-size: 100% auto;
    //         right: -40px;
    //         top: 50%;
    //         transform: translateY(-50%);
    //       }

    //       & > div {
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //         width: 63px;
    //         height: 63px;

    //         position: absolute;
    //         top: -16px;
    //         left: 9px;
    //         background: #4570b6;
    //         border-radius: 50%;
    //         span {
    //           color: #fff;
    //           text-align: center;
    //           font-family: "Noto Sans HK";
    //           font-size: 15.31px;
    //           font-style: normal;
    //           font-weight: 300;
    //           line-height: 1.2;
    //           letter-spacing: 0;
    //         }
    //         i {
    //           color: #fff;
    //           font-family: "Noto Sans HK";
    //           font-size: 22.965px;
    //           font-style: normal;
    //           font-weight: 500;
    //           line-height: 1.1;
    //         }
    //       }
    //     }
    //     & > p {
    //       margin-top: 16px;
    //       color: #4570b6;
    //       font-family: "Noto Sans TC";
    //       font-size: 22px;
    //       font-style: normal;
    //       font-weight: 500;
    //       line-height: 130.482%;
    //       letter-spacing: 5.5px;
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(1) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 98px;
    //         height: 113px;
    //         flex-shrink: 0;
    //       }
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(2) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 130px;
    //         height: 118px;
    //       }
    //     }
    //   }

    //   & > .visionProcess_Pcs-item:nth-child(3) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 109px;
    //         height: 114px;
    //       }
    //     }
    //   }
    //   & > .visionProcess_Pcs-item:nth-child(4) {
    //     .visionProcess_Pcs-item-img {
    //       img {
    //         width: 138px;
    //         height: 77px;
    //       }
    //       &::after {
    //         content: none;
    //       }
    //     }
    //   }
    // }

    .visionProcess_Plc {
      ul {
        max-width: clamp(543.5px, 56.61vw, 1087px);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0 clamp(40px, 4.17vw, 80px);
        justify-content: center;
        li {
          h4 {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: clamp(12px, 1.25vw, 24px);
            font-style: normal;
            font-weight: 900;
            line-height: 103.661%;
            letter-spacing: 0;
          }
          i {
            margin: clamp(12px, 1.25vw, 24px) auto clamp(9px, 0.94vw, 18px);
            display: block;
            width: clamp(10px, 1.04vw, 20px);
            height: clamp(10px, 1.04vw, 20px);
            background: #4570b6;
            border-radius: 50%;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              right: clamp(-8px, -0.42vw, -4px);
              top: 50%;
              transform: translate(100%, -50%);
              width: clamp(78px, 8.13vw, 156px);
              height: 1px;

              background: linear-gradient(
                to right,
                #4570b6 50%,
                transparent 50%
              );
              background-size: 6px 1px;
              background-position: 0 0;
              background-repeat: repeat-x;
            }
          }
          p {
            text-align: center;
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: clamp(11px, 1.15vw, 22px);
            font-style: normal;
            font-weight: 500;
            line-height: 130.482%;
            letter-spacing: clamp(2.75px, 0.29vw, 5.5px);
          }
        }

        & > li:nth-child(2) {
          i {
            &::after {
              width: clamp(82.5px, 8.59vw, 165px);
            }
          }
        }
        & > li:nth-child(4) {
          i {
            &::after {
              width: clamp(98px, 10.21vw, 196px);
            }
          }
        }
        & > li:nth-child(3) {
          i {
            &::after {
              width: clamp(103.5px, 10.78vw, 207px);
            }
          }
          p {
            letter-spacing: 0;
          }
        }
        & > li:nth-child(5) {
          i {
            &::after {
              content: none;
            }
          }
        }
      }
    }

    .visionProcess-Notice {
      margin-top: clamp(18px, 1.88vw, 36px);
      & > img {
        width: clamp(58.5px, 6.09vw, 117px);
        height: clamp(58.5px, 6.09vw, 117px);
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: 0 auto clamp(16.5px, 1.72vw, 33px);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 100%;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
        position: relative;

        &::before {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(19.5px, 2.03vw, 39px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: clamp(-55px, -2.86vw, -27.5px);
          bottom: -10px clamp(-10px, -0.52vw, -5px);
        }

        &::after {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(19.5px, 2.03vw, 39px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: clamp(-55px, -2.86vw, -27.5px);
          bottom: -10px clamp(-10px, -0.52vw, -5px) !important;
        }
      }

      .visionProcess-Notice-Card {
        max-width: clamp(600px, 62.5vw, 1200px);
        margin: 0 auto;
        padding: clamp(31px, 3.23vw, 62px) 0px clamp(26.5px, 2.76vw, 53px);
        border-radius: clamp(23px, 2.4vw, 46px);
        border: 1px solid #4570b6;
        background: #fff;
        h4 {
          text-align: center;
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          letter-spacing: clamp(1.5px, 0.16vw, 3px);
        }
        ul {
          margin-top: clamp(12px, 1.25vw, 24px);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            position: relative;
            gap: clamp(19px, 1.98vw, 38px);
            height: clamp(112.5px, 11.72vw, 225px);
            width: clamp(188px, 19.58vw, 376px);
            padding-top: clamp(11px, 1.15vw, 22px);

            img {
              width: auto;
              height: clamp(46px, 4.79vw, 92px);
            }
            p {
              color: #4570b6;
              text-align: center;
              font-family: "Noto Sans TC";
              font-size: clamp(11px, 1.15vw, 22px);
              font-style: normal;
              font-weight: 300;
              line-height: 130.482%;
            }

            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              height: 100%;
              width: 1px;
              background: linear-gradient(
                to bottom,
                #cdcdcd 50%,
                transparent 50%
              );
              background-size: 1px 6px;
              background-position: 0 0;
              background-repeat: repeat-y;
            }
          }
          & > li:last-child {
            &::after {
              content: none;
            }
          }
        }
      }
      .visionProcess-Notice-Card-section2 {
        margin: clamp(20px, 2.08vw, 40px) auto;
      }
    }
  }

  //矯視後覆診
  .section-last {
    scroll-margin-top: clamp(125px, 13.02vw, 250px);
    background: #def1ff;
    padding-top: clamp(50px, 5.21vw, 100px);
    padding-bottom: clamp(50px, 5.21vw, 100px);
    .section-last-1 {
      h2 {
        text-align: center;
        margin-bottom: clamp(20px, 2.08vw, 40px);

        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 100%;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
      }
      ul {
        display: flex;

        justify-content: center;
        gap: 0 clamp(59.5px, 6.2vw, 119px);

        li {
          width: clamp(100px, 10.42vw, 200px);
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: clamp(-40px, -2.08vw, -20px);
            transform: translateY(-50%);
            background: url("https://statichk.cmermedical.com/smile/patient-info/section-last-toright.svg")
              no-repeat;
            background-size: 100% auto;
            width: clamp(9px, 0.94vw, 18px);
            height: clamp(15px, 1.56vw, 30px);
          }

          & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: clamp(100px, 10.42vw, 200px);
            width: clamp(100px, 10.42vw, 200px);
            border-radius: 50%;
            border: clamp(0.4px, 0.04vw, 0.8px) solid #4570b6;
            background: #fff;
            img {
              width: clamp(49px, 5.1vw, 98px);
            }
          }
          p {
            margin-top: clamp(7px, 0.73vw, 14px);
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans TC";
            font-size: clamp(11px, 1.15vw, 22px);
            font-style: normal;
            font-weight: 500;
            line-height: 130.482%;
            letter-spacing: clamp(2.75px, 0.29vw, 5.5px);
          }
          span {
            position: absolute;
            white-space: nowrap;
            left: 50%;
            transform: translateX(-50%);
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: clamp(9px, 0.94vw, 18px);
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
        }

        & > li:last-child {
          &::after {
            content: none;
          }
        }
      }
    }

    .section-last-2 {
      h2 {
        margin: clamp(50px, 5.21vw, 100px) auto clamp(26px, 2.71vw, 52px);
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 1;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
      }
      .iframe-container {
        width: clamp(302.5px, 31.51vw, 605px);
        margin: 0 auto;
        aspect-ratio: 560/315;
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      }

      & > p {
        max-width: clamp(556px, 57.92vw, 1112px);
        margin: clamp(20px, 2.08vw, 40px) auto 0;
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: clamp(10px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 300;
        line-height: 1.8;
        letter-spacing: clamp(2.5px, 0.26vw, 5px);
        span {
          color: #4570b6;
          font-weight: 500;
        }
        i {
          color: #4570b6;
        }
      }
    }

    .section-last-3 {
      padding-top: clamp(20px, 2.08vw, 40px);
      padding-bottom: clamp(35px, 3.65vw, 70px);

      & > img {
        width: clamp(33.5px, 3.49vw, 67px);
        margin: 0 auto;
      }
      h2 {
        width: fit-content;
        margin: clamp(13.5px, 1.41vw, 27px) auto 0px;
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(15px, 1.56vw, 30px);
        font-style: normal;
        font-weight: 900;
        line-height: 100%;
        letter-spacing: clamp(1.5px, 0.16vw, 3px);
        position: relative;

        &::before {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(19.5px, 2.03vw, 39px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-left.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          left: clamp(-55px, -2.86vw, -27.5px);
          bottom: clamp(-10px, -0.52vw, -5px);
        }

        &::after {
          content: "";
          width: clamp(25px, 2.6vw, 50px);
          height: clamp(19.5px, 2.03vw, 39px);
          background: url("https://statichk.cmermedical.com/smile/patient-info/title-right.svg")
            no-repeat;
          background-size: 100% auto;
          position: absolute;
          right: clamp(-55px, -2.86vw, -27.5px);
          bottom: clamp(-10px, -0.52vw, -5px) !important;
        }
      }
    }

    .section-last-4 {
      display: flex;
      gap: clamp(11px, 1.15vw, 22px);
      justify-content: center;
      align-items: center;
      .section-last-4-item {
        width: clamp(279px, 29.06vw, 558px);
        border-radius: clamp(10px, 1.04vw, 20px) clamp(10px, 1.04vw, 20px)
          clamp(23px, 2.4vw, 46px) clamp(23px, 2.4vw, 46px);
        overflow: hidden;
        h3 {
          background: #d0e2ff;
          padding: clamp(11px, 1.15vw, 22px) 0;
          text-align: center;

          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 900;
          line-height: 1;
          letter-spacing: clamp(1.5px, 0.16vw, 3px);
        }
        // 列表
        .section-last-4-item-content {
          background: #fff;
          padding: clamp(13px, 1.35vw, 26px) clamp(25.5px, 2.66vw, 51px) 0px
            clamp(20px, 2.08vw, 40px);
          .section-last-4-item-content-text {
            padding-bottom: clamp(31.5px, 3.28vw, 63px);
            h4 {
              color: #4570b6;
              font-family: "Noto Sans TC";
              font-size: clamp(15px, 1.56vw, 30px);
              font-style: normal;
              font-weight: 400;
              line-height: 1;
              letter-spacing: clamp(1.5px, 0.16vw, 3px);
              padding-bottom: clamp(9.5px, 0.99vw, 19px);
              position: relative;
              span {
                font-weight: 700;
              }
              &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 1px;
                width: 100%;
                background: linear-gradient(
                  to right,
                  #cdcdcd 50%,
                  transparent 50%
                );
                background-size: 6px 1px;
                background-position: 0 0;
                background-repeat: repeat-x;
              }
            }
            & > div {
              margin-top: clamp(10px, 1.04vw, 20px);
              display: flex;
              flex-direction: column;
              gap: clamp(14.5px, 1.51vw, 29px);
              p {
                display: flex;
                gap: clamp(8px, 0.83vw, 16px);

                i {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: clamp(20px, 2.08vw, 40px);
                  height: clamp(20px, 2.08vw, 40px);
                  flex-shrink: 0;
                  background: #4570b6;
                  border-radius: 50%;

                  color: #fff;
                  font-family: "Noto Sans TC";
                  font-size: clamp(11px, 1.15vw, 22px);
                  font-style: normal;
                  font-weight: 500;
                  line-height: 130.482%;
                }
                span {
                  color: #6d6e71;
                  font-family: "Noto Sans TC";
                  font-size: clamp(11px, 1.15vw, 22px);
                  font-style: normal;
                  font-weight: 300;
                  line-height: 136.364%;
                }
              }
            }
          }
        }
      }
      & > .section-last-4-item:nth-child(2) {
        height: -webkit-fill-available;
        h3 {
          color: #09a1b5;
          background: #afebe7;
        }
        .section-last-4-item-content {
          height: 100%;

          .section-last-4-item-content-text {
            h4 {
              color: #09a1b5;
            }
            & > div {
              i {
                background: #09a1b5;
              }
            }
          }
        }
      }
    }

    .section-last-5 {
      margin: clamp(18.5px, 1.93vw, 37px) auto 0px;
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(10px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 300;
      line-height: 175%;
      letter-spacing: clamp(3px, 0.31vw, 6px);
    }
  }

  // 分享给朋友
  .CaseSharingV2 {
    display: none;
  }
  .new-Footer-v2 {
    margin-top: 0 !important;
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
