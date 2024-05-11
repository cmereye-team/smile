<template>
  <div class="group-profile">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>集團簡介</p>
          <p>Group Profile</p>
        </div>
      </template>
    </Banner>
    <div class="group-profile-box">
      <div class="group-profile-explain">
        <div>
          <H2Tag :title="['集團簡介']" />
          <div class="explain-header">
            <div class="small-text">
              香港希瑪國際眼科醫療集團（簡稱：希瑪眼科，股份代碼：3309.HK），由眼科醫生林順潮教授於2012年創辦，總部設於香港，旗下擁有15間醫療機構，包括香港中環眼科中心、旺角中心，和沙田、銅鑼灣、觀塘、元朗和荃灣診所，還有內地深圳、北京、上海、昆明，惠州和珠海的分院。集團員工人數超過900人，是香港首間大型連鎖上市眼科集團。
            </div>
            <div>
              <div class="small-title">希瑪眼科中心</div>
              <div class="small-text">
                希瑪眼科中心擴展至全港擁有10間眼科診所、4間微笑矯視中心、
                2間視光中心，以及2間嘉賓眼科專科及激光矯視手術中心（希瑪全資附屬公司）。眼科診所及中心遍佈港、九、新界，交通便利，環境舒適。
              </div>
            </div>
            <div>
              <span>有關希瑪眼科中心資料，詳情請瀏覽: </span
              ><span>www.hkcmereye.com</span>
            </div>
            <div>
              <div class="small-title">經營理念</div>
              <div class="small-text">
                我們的集團名稱「希瑪」、「C-MER」，正正反映著我們的理念與執著：
              </div>
            </div>
          </div>
          <div class="explain-second">
            <div>
              <div>C</div>
              <div>
                <p>專業臨床服務</p>
                <p>Professional Clinical Services</p>
              </div>
            </div>
            <div>
              <div>M</div>
              <div>
                <p>現代化管理</p>
                <p>Modern Management</p>
              </div>
            </div>
            <div>
              <div>E</div>
              <div>
                <p>優質教育</p>
                <p>Quality Education</p>
              </div>
            </div>
            <div>
              <div>R</div>
              <div>
                <p>開創性科研</p>
                <p>Pioneering Research</p>
              </div>
            </div>
            <div>
              <div>希瑪</div>
              <div>
                「希」望為眼睛帶來希望之光；「希瑪」 與 「喜瑪」
                同音，喜馬拉雅山脈為世界海拔最高的山脈，寓意希瑪眼科憑着優質臨床服務、現代化管理、優質教學與培訓以及領先研究，不斷追求卓越，攀登高峰的理念
              </div>
            </div>
            <div>
              <div>憑藉醫療技術和服務聲譽，我們榮獲：</div>
              <div>
                <p>
                  2018年香港上市公開招股認購超過1500倍<br
                    v-if="isMobile"
                  />(全港十大之一)
                </p>
                <p>2019年大健康產業創新獎</p>
                <p>2020年港股「最佳價值醫藥及醫療股公司」大獎</p>
              </div>
            </div>
          </div>
          <div class="explain-img-list">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/a62af78191160bc4.png"
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/4977e6813fbfb150.png"
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/f7473e33c97b076f.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="group-profile-center">
        <div class="center-bg">
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="42"
                viewBox="0 0 80 42"
                fill="none"
              >
                <path
                  d="M20.5947 18.4904H24.2005V4.08234H27.7912V18.4904H31.397V4.08234H34.9877V18.4904H38.5935V0.476562H20.5947V18.4904Z"
                  fill="#4570B6"
                />
                <path
                  d="M0 18.4904H18.0138V14.8846H3.60578V4.08234H18.0138V0.476562H0V18.4904Z"
                  fill="#4570B6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.026 35.6023L34.5347 34.9988C35.1985 36.5829 35.6058 37.6239 35.7567 38.1067L34.1726 38.5744C33.8479 37.5456 33.4599 36.5379 33.0109 35.557M30.6875 35.8437L32.347 35.4665C32.7499 36.7762 33.0624 38.112 33.2824 39.4645L31.6078 39.721C31.3815 38.514 31.0797 37.2166 30.6875 35.8437ZM28.4848 35.8437H30.2047C30.3857 37.8502 30.4612 39.4645 30.4461 40.7017H28.7564C28.8195 39.1225 28.7285 37.5409 28.4848 35.9794M26.1765 37.5334C24.7278 38.4811 23.2155 39.328 21.6504 40.068L20.7905 38.3179C21.5146 38.0162 22.1332 37.7446 22.6461 37.5032V32.7056H21.3487V30.8951H22.6461V26.8066H21.3487V24.9509H25.7842V26.8066H24.4868V30.8951H25.6786V32.7056H24.4868V36.4773L25.226 35.9342L26.267 37.2618C26.3877 36.764 26.5084 36.2208 26.6291 35.6626L28.4395 36.1605C28.02 38.0636 27.225 39.8639 26.1011 41.456C25.7125 40.994 25.2354 40.6144 24.698 40.3396C25.2116 39.6672 25.6375 38.932 25.9653 38.152C26.0198 37.9456 26.0904 37.7438 26.1765 37.5485M31.0194 30.3067H28.3188V29.3864H31.0194V30.3067ZM31.0194 27.6967H28.3188V26.8217C28.3161 26.7939 28.3198 26.7659 28.3297 26.7398C28.3396 26.7137 28.3554 26.6902 28.3758 26.6712C28.3963 26.6522 28.4208 26.6382 28.4476 26.6303C28.4743 26.6224 28.5026 26.6207 28.5301 26.6255H31.0194V27.6967ZM28.3188 32.9319V31.9361H31.0194V32.9319H28.3188ZM26.5386 33.6259V34.3651C26.5386 34.5914 26.6291 34.7121 26.8403 34.7121H35.6813C35.8321 34.7121 35.9076 34.7574 35.9076 34.8479C36.0011 36.1588 36.0011 37.4747 35.9076 38.7856C35.8501 39.2224 35.6545 39.6295 35.3494 39.9473C35.1659 40.0928 34.9339 40.163 34.7006 40.1434C34.0213 40.0916 33.346 39.9958 32.679 39.8568L32.86 41.8181C34.1372 42.0875 35.4682 41.9118 36.6317 41.3202C37.1128 40.9151 37.4249 40.3446 37.5068 39.721C37.7401 37.6174 37.8208 35.4997 37.7482 33.3845C37.7482 33.1129 37.6577 32.9771 37.4163 32.962H32.8902V31.9663H36.8581V30.2917H32.8147V29.3864H36.7675V27.6816H32.8147V26.6255H37.19V24.8604H26.9308C26.6593 24.8604 26.5386 24.9961 26.5386 25.2677V33.6259ZM8.43424 35.7079V41.6521H10.305V35.6928H13.775C13.7961 35.6907 13.8173 35.693 13.8374 35.6996C13.8575 35.7063 13.8759 35.717 13.8916 35.7313C13.9072 35.7455 13.9197 35.7628 13.9282 35.7822C13.9367 35.8016 13.9411 35.8225 13.941 35.8437V38.861C13.941 39.0873 13.775 39.2835 13.4582 39.4193C12.5853 39.5404 11.696 39.4311 10.8783 39.1024V41.2297C12.1906 41.6105 13.5895 41.5683 14.8764 41.109C15.1346 41.0085 15.3564 40.8322 15.5126 40.6034C15.6687 40.3745 15.752 40.1037 15.7514 39.8266V34.3199C15.7586 34.2567 15.7515 34.1927 15.7306 34.1327C15.7096 34.0727 15.6754 34.0181 15.6304 33.9732C15.5855 33.9282 15.5309 33.894 15.4709 33.873C15.4109 33.8521 15.3469 33.845 15.2837 33.8522H10.2598V32.4038H8.38898V33.9125H5.83929C6.50268 33.3033 7.12748 32.6533 7.71007 31.9663C7.71007 31.9663 7.71007 31.8909 7.7855 31.8758H16.8377V29.9597H9.12824C9.32437 29.658 9.5205 29.3563 9.73172 29.0545L8.43424 28.1644L9.44507 27.8325C11.165 28.3304 13.0056 28.964 14.982 29.7184L15.4949 27.8777L12.2362 26.6859L14.2276 25.841L13.3978 24.1211C12.1751 24.7761 10.9158 25.3604 9.62611 25.8712C7.40454 25.1971 5.13497 24.6927 2.83698 24.3625L2.41455 26.188C3.54607 26.354 4.76811 26.6104 6.09576 26.9424C4.3623 27.301 2.60008 27.503 0.830419 27.5458L1.16233 29.3864C3.13842 29.3667 5.10453 29.1032 7.01607 28.6019L8.10233 28.3304C7.69498 28.964 7.31781 29.5222 6.95572 30.0201H0.649376V31.8758H5.49228C4.34205 32.9688 3.07752 33.9349 1.72055 34.7574C1.16233 35.0139 0.604115 35.3005 0.0458984 35.5872L1.0869 37.2166C1.75072 36.8696 2.41455 36.4924 3.07837 36.07V41.1543H4.94916V35.8437C4.94703 35.8246 4.94895 35.8053 4.95482 35.7871C4.96068 35.7688 4.97034 35.752 4.98317 35.7377C4.996 35.7235 5.0117 35.7121 5.02924 35.7044C5.04678 35.6966 5.06576 35.6927 5.08494 35.6928L8.43424 35.7079Z"
                  fill="#4570B6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M76.25 37.5004L69.4911 38.5565L69.0837 36.6555L76.25 35.5391V24.586H78.1208V35.2675L79.4635 35.0412L79.7502 36.9271L78.1208 37.2137V41.6191H76.25V37.5004ZM70.3812 31.3902L71.6787 30.0474C72.8401 31.0294 73.9199 32.1041 74.9073 33.261L73.5193 34.4981C72.5419 33.395 71.4936 32.3569 70.3812 31.3902ZM71.0149 26.7132C72.2387 27.8564 73.3783 29.0867 74.4245 30.3944L75.9332 29.1875C74.8492 27.8559 73.68 26.596 72.433 25.4157L71.0149 26.7132ZM67.6806 33.9097C68.3143 34.7093 68.8725 35.4184 69.3704 36.1275L70.7584 34.8451C69.8126 33.6424 68.8055 32.4892 67.741 31.3902V31.194H70.0493V29.2478H67.6806V26.6529C68.5255 26.4869 69.31 26.2908 70.0342 26.0796L69.6721 24.1484C67.5916 24.7226 65.4586 25.0865 63.3054 25.2347L63.5619 27.1658C64.3313 27.1658 65.0706 27.0451 65.8249 26.9546V29.2478H63.0339V31.179H65.7344C64.9711 33.2097 63.8466 35.0855 62.4153 36.7159L64.1352 37.5004C64.7667 36.6553 65.3317 35.7625 65.8249 34.83V41.5588H67.6806V33.9097ZM50.4363 28.2068V27.1357C50.4363 26.849 50.572 26.6981 50.8738 26.6981H55.6865C55.7423 26.6912 55.799 26.6968 55.8524 26.7146C55.9058 26.7323 55.9545 26.7618 55.995 26.8009C56.0355 26.84 56.0668 26.8876 56.0865 26.9403C56.1062 26.993 56.1139 27.0494 56.1089 27.1055V28.2068H50.4363ZM56.1089 29.972V30.8923C56.1158 30.9561 56.1085 31.0206 56.0876 31.0812C56.0667 31.1418 56.0328 31.1972 55.9881 31.2432C55.9435 31.2893 55.8893 31.325 55.8294 31.3478C55.7694 31.3705 55.7052 31.3799 55.6413 31.3751H50.4363V29.8664L56.1089 29.972ZM45.5481 26.502C45.7442 26.502 45.8498 26.5925 45.8498 26.7887V29.3836H43.9338V26.8188C43.9338 26.6227 44.0243 26.5322 44.2053 26.5322L45.5481 26.502ZM45.9102 38.4358C45.9174 38.4837 45.9135 38.5326 45.8988 38.5787C45.8842 38.6249 45.8591 38.6671 45.8256 38.7021C45.7921 38.737 45.751 38.7638 45.7055 38.7804C45.66 38.7971 45.6113 38.803 45.5632 38.7979H43.9338V35.7805H45.9102V38.4358ZM45.9102 34.0153H43.9338V30.9979H45.9102V34.0153ZM43.9338 40.4876H47.0417H47.2982L47.4641 41.9963C49.6129 41.6855 51.7155 41.113 53.7252 40.2915L52.9709 38.6923C52.2388 39.0178 51.4882 39.2999 50.7229 39.5371C50.6373 39.5512 50.5553 39.582 50.4815 39.6277V33.1855H51.6583C52.2122 35.9383 53.6284 38.443 55.7016 40.3367C56.2447 40.8044 56.9086 41.3023 57.6931 41.8454L59.1263 40.3367C57.6789 39.5882 56.3924 38.5631 55.3395 37.3193C56.4638 36.5649 57.5145 35.7062 58.4776 34.7546L57.3612 33.3666C56.431 34.2705 55.4211 35.0885 54.3438 35.8106C53.9214 34.9396 53.5829 34.0302 53.3329 33.095H57.3762C57.4539 33.1048 57.5327 33.0968 57.6068 33.0714C57.6808 33.0461 57.748 33.0041 57.8034 32.9488C57.8587 32.8935 57.9006 32.8262 57.926 32.7522C57.9513 32.6782 57.9594 32.5993 57.9496 32.5217V25.461C57.9566 25.3879 57.9473 25.3142 57.9225 25.2451C57.8977 25.1761 57.8579 25.1133 57.806 25.0614C57.7541 25.0095 57.6914 24.9697 57.6223 24.9449C57.5532 24.9201 57.4795 24.9109 57.4064 24.9179H49.2142C48.8823 24.9179 48.7013 25.0989 48.6862 25.461V39.9445C48.3156 39.9813 47.9477 40.0418 47.5848 40.1255V39.8992V25.3705C47.5953 25.2934 47.5875 25.2149 47.5621 25.1414C47.5368 25.0678 47.4945 25.0012 47.4388 24.947C47.383 24.8927 47.3154 24.8522 47.2412 24.8288C47.167 24.8054 47.0883 24.7998 47.0115 24.8123H42.7419C42.3949 24.8123 42.229 24.9933 42.2139 25.3403V41.5588H43.9338V40.4876Z"
                  fill="#4570B6"
                />
                <path
                  d="M41.1719 18.4904H59.1706V14.8846H44.7626V11.2788H59.1706V7.68813H44.7626V4.08234H59.1706V0.476562H41.1719V18.4904Z"
                  fill="#4570B6"
                />
                <path
                  d="M79.7341 0.476562H61.7354V4.08234H76.1434V7.68813H61.7354V18.4904H65.3411V11.2788H68.9469L75.027 18.4904H79.7341L73.654 11.2788H79.7341V0.476562Z"
                  fill="#4570B6"
                />
              </svg>
            </div>
            <div>中心簡介</div>
          </div>
          <div>
            <div>
              「希瑪微笑矯視中心」是上市公司「香港希瑪眼科集團」旗下的屈光矯視醫療中心，位於於中環、旺角、銅鑼灣，尖沙咀地鐵站直達，交通便利。中心環境舒適，為客人提供優質矯視服務。
            </div>
            <div>
              中心團隊由最早將LASIK矯視技術引進香港的林順潮教授帶領，加上12名眼科專科<br
                v-if="!isMobile"
              />醫生、多名註冊視光師及護士組成。醫生經驗豐富，其中有3名為<br
                v-if="!isMobile"
              />「香港十大傑出青年」，在安全、技術各方面都有良好口碑。
            </div>
            <div>
              作為率先引入激光矯視技術的眼科中心，中心符合FDA激光矯視標準：設有符合國際標準的無菌手術室，配備先進的眼科檢查和矯視儀器；為客人作全面、準確的眼科檢查，並根據不同情況定制嚴格且有針對性的矯視方案。
            </div>
            <div>
              中心秉持「度身訂造」原則，提供品質服務：包括SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡(ICL)，及人工晶體置換術，舒緩有近視、遠視、散光、老花以及白內障客人的困擾，讓客人改善視力，實踐「希．望見美好」的理想。
            </div>
          </div>
        </div>
      </div>
      <div class="group-profile-swiper">
        <H2Tag :title="['中心環境']" />
        <div class="swiper-element">
          <swiperhj />
        </div>
        <div>
          <div>
            <div class="swiper-small-title">希瑪微笑矯視中心位於</div>
            <div class="swiper-small-text">
              中環中建大廈、旺角雅蘭中心、銅鑼灣恆隆中心，尖沙咀K11
              ATELIER地鐵站直達，交通便利易達。
            </div>
          </div>
          <div>
            <div class="swiper-small-title">中心環境舒適寬敞</div>
            <div class="swiper-small-text">
              希望為客人提供安心自在的優質矯視服務。我們亦同樣著重整體感官體驗，位於尖沙咀K11
              ATELIER的旗艦店更配合時尚、寬敞及醉人海景，同樣配備齊全設備，致力提供最舒適、專業及優質的矯視服務。
            </div>
          </div>
        </div>
      </div>
      <div class="group-profile-award">
        <div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M41.7002 48.5231H18.4277L19.5527 44.5781H40.7252L41.7002 48.5231Z"
                  stroke="#4570B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9301 26.5781C17.7032 26.4818 16.5578 25.9264 15.7223 25.0228C14.8869 24.1192 14.4229 22.9338 14.4229 21.7031C14.4229 20.4725 14.8869 19.2871 15.7223 18.3834C16.5578 17.4798 17.7032 16.9244 18.9301 16.8281"
                  stroke="#A6E1D6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.25 26.5781C42.4769 26.4818 43.6223 25.9264 44.4578 25.0228C45.2933 24.1192 45.7573 22.9338 45.7573 21.7031C45.7573 20.4725 45.2933 19.2871 44.4578 18.3834C43.6223 17.4798 42.4769 16.9244 41.25 16.8281"
                  stroke="#A6E1D6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.9103 22.2017C35.9835 22.128 36.0349 22.0354 36.0587 21.9343C36.0825 21.8331 36.0779 21.7274 36.0452 21.6287C36.0126 21.5301 35.9533 21.4424 35.8739 21.3754C35.7945 21.3084 35.6981 21.2647 35.5953 21.2492L32.4078 20.7917C32.3184 20.7775 32.2337 20.7422 32.1607 20.6887C32.0876 20.6352 32.0284 20.5651 31.9878 20.4842L30.5628 17.5967C30.5172 17.5033 30.4463 17.4245 30.3581 17.3694C30.2699 17.3144 30.1681 17.2852 30.0641 17.2852C29.9601 17.2852 29.8582 17.3144 29.7701 17.3694C29.6819 17.4245 29.6109 17.5033 29.5653 17.5967L28.1403 20.4842C28.0991 20.566 28.0386 20.6367 27.9642 20.6903C27.8898 20.7438 27.8036 20.7786 27.7128 20.7917L24.5253 21.2492C24.4217 21.2633 24.3241 21.3063 24.2438 21.3735C24.1635 21.4406 24.1039 21.5291 24.0718 21.6287C24.0396 21.7282 24.0363 21.8349 24.0621 21.9362C24.088 22.0376 24.1419 22.1297 24.2178 22.2017L26.5278 24.4517C26.5914 24.5158 26.6389 24.5941 26.6663 24.6802C26.6936 24.7663 26.7002 24.8576 26.6853 24.9467L26.1378 28.1192C26.12 28.2228 26.1316 28.3293 26.1712 28.4267C26.2109 28.524 26.277 28.6083 26.3621 28.67C26.4472 28.7317 26.5479 28.7683 26.6528 28.7757C26.7576 28.783 26.8624 28.7609 26.9553 28.7117L29.8053 27.2117C29.8855 27.1709 29.9741 27.1496 30.0641 27.1496C30.154 27.1496 30.2427 27.1709 30.3228 27.2117L33.1728 28.7117C33.2652 28.7619 33.37 28.7848 33.4749 28.7778C33.5799 28.7708 33.6806 28.7341 33.7655 28.672C33.8504 28.6099 33.9159 28.525 33.9543 28.4271C33.9928 28.3292 34.0027 28.2225 33.9828 28.1192L33.4428 24.9467C33.428 24.8576 33.4345 24.7663 33.4619 24.6802C33.4893 24.5941 33.5367 24.5158 33.6003 24.4517L35.9103 22.2017ZM31.8903 24.0017L32.3178 26.5142L30.0678 25.3292L27.8178 26.5142L28.2378 24.0017L26.4153 22.2242L28.9353 21.8567L30.0603 19.5692L31.1928 21.8567L33.7128 22.2242L31.8903 24.0017Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M29.8949 13.1484H21.1799C20.5971 13.1484 20.0382 13.38 19.6261 13.7921C19.2139 14.2042 18.9824 14.7631 18.9824 15.3459V22.1484C18.9824 32.4384 24.7274 34.1484 26.3549 35.0709C27.9824 35.9934 28.0724 41.2509 24.6299 41.4384C21.1874 41.6259 21.5624 44.5509 21.5624 44.5509H30.9974"
                  stroke="#4570B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.2324 13.1485H38.9399C39.2291 13.1475 39.5157 13.2036 39.7831 13.3136C40.0506 13.4236 40.2937 13.5853 40.4986 13.7894C40.7035 13.9936 40.866 14.2362 40.9769 14.5033C41.0878 14.7704 41.1449 15.0567 41.1449 15.3459V22.1485C41.1449 32.4385 35.3999 34.1485 33.7724 35.071C32.1449 35.9935 32.0474 41.251 35.4974 41.4385C38.9474 41.626 38.5574 44.551 38.5574 44.551H29.1299"
                  stroke="#4570B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.3555 35.0703H33.773"
                  stroke="#4570B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>獲得獎項</div>
          </div>
          <div>
            <div>
              <div v-for="(ele, index) in imgList" :key="index">
                <img :src="ele" alt="獲得獎項" />
              </div>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="32"
                  viewBox="0 0 19 32"
                  fill="none"
                >
                  <path
                    d="M18 1L1.83662 15.79C1.39255 16.1964 1.40548 16.9001 1.86419 17.2898L18 31"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="32"
                  viewBox="0 0 19 32"
                  fill="none"
                >
                  <path
                    d="M1 1L17.1634 15.79C17.6075 16.1964 17.5945 16.9001 17.1358 17.2898L1 31"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import swiperhj from "@/components/content/aboutus/centre-introduction/huanjswiper.vue";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    swiperhj,
  },
  data() {
    return {
      isMobile: false,
      imgList: [
        "https://static.cmereye.com/imgs/2024/05/3c37342a42929463.png",
        "https://static.cmereye.com/imgs/2024/05/9fb7b59c6d134014.png",
        "https://static.cmereye.com/imgs/2024/05/86e300274d8bc4ef.png",
        "https://static.cmereye.com/imgs/2024/05/788333406bba2c0f.png",
        "https://static.cmereye.com/imgs/2024/05/29433265c4f65fdf.png",
        "https://static.cmereye.com/imgs/2024/05/402f4a682ca2394a.png",
        "https://static.cmereye.com/imgs/2024/05/16b586d7718ac0a6.png",
      ],
    };
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .group-profile-box {
    margin: 85px auto;
  }
  :deep(.swiper-element) {
    & > div {
      & > div:nth-child(1) {
        background: transparent;
        & > div:nth-child(1) {
          top: 0 !important;
        }
      }
      & > div:nth-child(2) {
        display: none;
      }
    }
  }
  .group-profile-award {
    background: url("https://static.cmereye.com/imgs/2024/05/93c994737098887c.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 240px 0 200px;
    margin-top: 185px;
    position: relative;
    & > div {
      & > div:nth-child(1) {
        position: absolute;
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 307px;
        height: 307px;
        border-radius: 50%;
        background-color: #fff;
        & > div:nth-child(2) {
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 100% */
          letter-spacing: 7.5px;
          padding-bottom: 30px;
          position: relative;
          margin-top: 18px;
        }
        & > div:nth-child(2)::before {
          width: 40px;
          border-radius: 5px;
          height: 5px;
          background: #a6e1d6;
          position: absolute;
          content: "";
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
      }
      & > div:nth-child(2) {
        position: relative;
        & > div:nth-child(1) {
          display: flex;
          justify-content: center;
          & > div {
            margin: 0 8.7px;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1322px;
        }
      }
    }
  }
  .group-profile-swiper {
    max-width: 1270px;
    margin: 85px auto 0;
    :deep(h2) {
      margin-bottom: 50px;
    }
    & > div:nth-child(3) {
      padding: 0 170px;
      & > div:nth-child(2) {
        margin-top: 38px;
      }
    }
  }
  .swiper-small-title {
    color: #4570b6;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px; /* 140% */
    letter-spacing: 7.5px;
  }
  .swiper-small-text {
    color: #6d6e71;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 6px;
    text-align: center;
  }
  .group-profile-center {
    background: url("https://static.cmereye.com/imgs/2024/05/e804c18e78e3c9c8.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 210px 0 95px;
    margin-top: 90px;
    position: relative;
  }
  .center-bg {
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 150px;
    & > div:nth-child(1) {
      position: absolute;
      top: -17%;
      left: 50%;
      transform: translateX(-50%);
      width: 307px;
      height: 307px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:nth-child(2) {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px; /* 166.667% */
        letter-spacing: 7.5px;
        position: relative;
        top: 30px;
      }
    }
    & > div:nth-child(2) {
      & > div {
        margin-bottom: 35px;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 175% */
        letter-spacing: 6px;
      }
    }
  }
  .explain-second {
    margin-top: 85px;
    padding: 0 160px;
    position: relative;
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.4; /* 40% */
        letter-spacing: 5px;
        min-width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(2) {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 150% */
        letter-spacing: 6px;
        max-width: 650px;
      }
    }
    & > div:nth-child(5) {
      margin-bottom: 0;
      & > div:nth-child(1) {
        writing-mode: vertical-rl; /* 从右向左垂直书写 */
        text-orientation: upright; /* 保持文字正立 */
        white-space: nowrap; /* 避免换行 */
      }
    }
    & > div:nth-child(6) {
      margin-top: 38px;

      & > div:nth-child(1) {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 35px; /* 175% */
        letter-spacing: 6px;
      }
      & > div:nth-child(2) {
        p {
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 35px;
          letter-spacing: 6px;
        }
      }
    }
  }
  .explain-second::before {
    content: "";
    position: absolute;
    left: 160px;
    top: 10px;
    width: 2px;
    height: 60%;
    background: #4570b6;
  }
  .explain-img-list {
    margin-top: 40px;
    padding: 0 53px;
    display: flex;
    justify-content: space-between;
    & > div {
      border-radius: 29px;
      overflow: hidden;
    }
  }
  .explain-header {
    & > div:nth-child(3) {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
      & > span:nth-child(2) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: 6px;
      }
    }
  }
  .small-text {
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
    padding: 0 150px;
  }
  .small-title {
    margin-top: 38px;
    color: #4570b6;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px; /* 175% */
    letter-spacing: 6px;
  }
  .group-profile-explain {
    background: url("https://static.cmereye.com/imgs/2024/05/cd3e81141f6876e8.png")
      no-repeat;
    background-size: 100%;
    background-position-x: center;
    background-position-y: bottom;
    position: relative;
    z-index: 6;
    & > div {
      border-radius: 82px;
      background: rgba(255, 255, 255, 0.8);
      max-width: 1270px;
      margin: 0 auto;
      height: 100%;
      padding-bottom: 40px;
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/e90f833293170c68.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
    border-radius: 55px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
}
@media screen and (max-width: 767px) {
  .group-profile-box {
    margin-bottom: 65px;
  }
  .group-profile-explain {
    padding: 0 30px;
    & > div {
      & > div:nth-child(2) {
        & > div:nth-child(3) {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 30px; /* 214.286% */
          letter-spacing: 0.7px;
          & > span:nth-child(2) {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0.7px;
            text-align: center;
          }
        }
        & > div:nth-child(4) {
          padding: 0 30px;
        }
      }
    }
  }
  .group-profile-award {
    background: url("https://static.cmereye.com/imgs/2024/05/1306a3173c344666.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 100px 0 50px;
    position: relative;
    margin-top: 125px;
    & > div {
      padding: 0 10px;
      & > div:nth-child(1) {
        position: absolute;
        top: -30%;
        left: 50%;
        transform: translateX(-50%);
        width: 171px;
        height: 171px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > div:nth-child(2) {
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 23.305px; /* 116.525% */
          letter-spacing: 1px;
          padding-bottom: 10px;
          position: relative;
        }
        & > div:nth-child(2)::after {
          content: "";
          width: 30px;
          height: 3.8px;
          background: #a6e1d6;
          border-radius: 3px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          & > div {
            width: 80px;
            & > img {
              width: 100%;
            }
          }
        }
        & > div:nth-child(2) {
          display: none;
        }
      }
    }
  }
  :deep(.swiper-element) {
    & > div {
      & > div:nth-child(1) {
        background: transparent;
        height: 215px;
        padding-left: 0 !important;
        padding-right: 0 !important;
        & > div:nth-child(1) {
          top: 0 !important;
          & > div {
            & > div:nth-child(2) {
              display: none;
            }
            & > div:nth-child(3),
            & > div:nth-child(4) {
              top: 55%;
            }
          }
        }
      }

      & > div:nth-child(2) {
        display: none;
      }
    }
  }
  .group-profile-swiper {
    margin-top: 55px;
    & > div:nth-child(3) {
      padding: 0 30px;
      & > div:nth-child(2) {
        margin-top: 30px;
      }
    }
  }
  .swiper-small-title {
    color: #4570b6;
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.8px;
    text-align: center;
  }
  .swiper-small-text {
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 214.286% */
    letter-spacing: 0.7px;
  }
  .group-profile-center {
    background: url("https://static.cmereye.com/imgs/2024/05/3667677d419ec9a0.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 120px 0 50px;
    margin-top: 120px;
    position: relative;
    & > div {
      padding: 0 20px;
      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        width: 171px;
        height: 171px;
        position: absolute;
        top: -10%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 20px;
        & > div:nth-child(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            width: 65%;
          }
        }
        & > div:nth-child(2) {
          margin-top: 8px;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 35px; /* 175% */
          letter-spacing: 1px;
        }
      }
      & > div:nth-child(2) {
        & > div {
          margin-top: 32px;
        }
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px; /* 214.286% */
        letter-spacing: 0.7px;
      }
    }
  }
  .explain-img-list {
    & > div {
      margin-top: 30px;
      border-radius: 29px;
      background: #d9d9d9;
      overflow: hidden;
    }
  }
  .explain-second {
    position: relative;
    padding: 0 18px;
    & > div {
      margin-top: 27px;
      display: flex;
      & > div:nth-child(1) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 44.444% */
        letter-spacing: 2.25px;
        min-width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 3px;
      }
      & > div:nth-child(2) {
        color: #4570b6;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.7px;
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(1) {
        font-size: 35px;
        writing-mode: vertical-rl; /* 从右向左垂直书写 */
        text-orientation: upright; /* 保持文字正立 */
        white-space: nowrap; /* 避免换行 */
        padding: 0;
      }
      & > div:nth-child(2) {
        padding-right: 4px;
      }
    }
    & > div:last-child {
      margin-top: 20px;
      flex-direction: column;
      align-items: flex-start;
      & > div:nth-child(1) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 178.571% */
        letter-spacing: 0.7px;
      }
      & > div:nth-child(2) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 0.65px;
      }
    }
  }
  .explain-second::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 5px;
    width: 2px;
    height: 70%;
    background: linear-gradient(to bottom, #4570b6, #81DBEC); /* 渐变色 */
  }
  .small-title {
    color: #4570b6;
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.8px;
    text-align: center;
    margin-top: 10px;
  }
  .small-text {
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 214.286% */
    letter-spacing: 0.7px;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/eb36818dd076c639.png")
      no-repeat;
    background-size: 100% 100%;
    height: 330px;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
}
</style>