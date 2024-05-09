<template>
  <div class="home">
    <Head />
    <BannerSlider class="banner-box" />
    <div>
      <div class="home-referral">
        <H2Tag :title="['希瑪微笑矯視中心']" />
        <div>
          香港希瑪微笑矯視中心為上市公司「香港希瑪眼科集團」旗下的屈光矯視醫療中心。團隊由林順潮教授帶領，加上11名眼科專科醫生、多名註冊視光師及護士組成。於香港擁有3間微笑矯視中心，均符合FDA激光矯視標準，交通便利，環境舒適。提供一站式眼科專科醫療及矯視服務，包括：SMILE
          微笑激光矯視、LASIK激光矯視、ICL植入式隱形眼鏡、老花矯視等。
        </div>
      </div>
      <div class="home-referral-service">
        <H2Tag :title="['矯視中心服務']" />
        <div>
          <div v-for="item in bgReferralServiceImg" :key="item.id">
            <div><img :src="item.img" alt="服务" /></div>
            <div>
              <div>
                <span
                  class="orbitron-nine"
                  v-for="(el, index) in item.title"
                  :key="index"
                  >{{ el }}</span
                >
              </div>
              <div>
                <span v-for="(e, index) in item.desc" :key="index">{{
                  e
                }}</span>
              </div>
              <nuxt-link :to="item.link">了解更多></nuxt-link>
            </div>
          </div>
        </div>
        <a href="" target="_blank" rel="noopener noreferrer">診症須知</a>
      </div>
      <div class="home-contact-us">
        <div>
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
                  d="M20.5947 18.0138H24.2005V3.60578H27.7912V18.0138H31.397V3.60578H34.9877V18.0138H38.5935V0H20.5947V18.0138Z"
                  fill="#4570B6"
                />
                <path
                  d="M0 18.0138H18.0138V14.408H3.60578V3.60578H18.0138V0H0V18.0138Z"
                  fill="#4570B6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.026 35.1257L34.5347 34.5222C35.1985 36.1064 35.6058 37.1474 35.7567 37.6301L34.1726 38.0978C33.8479 37.0691 33.4599 36.0614 33.0109 35.0804M30.6875 35.3671L32.347 34.9899C32.7499 36.2997 33.0624 37.6355 33.2824 38.988L31.6078 39.2444C31.3815 38.0375 31.0797 36.74 30.6875 35.3671ZM28.4848 35.3671H30.2047C30.3857 37.3737 30.4612 38.988 30.4461 40.2251H28.7564C28.8195 38.6459 28.7285 37.0644 28.4848 35.5029M26.1765 37.0568C24.7278 38.0046 23.2155 38.8514 21.6504 39.5914L20.7905 37.8413C21.5146 37.5396 22.1332 37.2681 22.6461 37.0267V32.229H21.3487V30.4186H22.6461V26.33H21.3487V24.4743H25.7842V26.33H24.4868V30.4186H25.6786V32.229H24.4868V36.0007L25.226 35.4576L26.267 36.7853C26.3877 36.2874 26.5084 35.7443 26.6291 35.186L28.4395 35.6839C28.02 37.5871 27.225 39.3874 26.1011 40.9794C25.7125 40.5174 25.2354 40.1379 24.698 39.863C25.2116 39.1906 25.6375 38.4555 25.9653 37.6754C26.0198 37.469 26.0904 37.2672 26.1765 37.0719M31.0194 29.8302H28.3188V28.9099H31.0194V29.8302ZM31.0194 27.2201H28.3188V26.3451C28.3161 26.3173 28.3198 26.2893 28.3297 26.2632C28.3396 26.2371 28.3554 26.2136 28.3758 26.1947C28.3963 26.1757 28.4208 26.1617 28.4476 26.1537C28.4743 26.1458 28.5026 26.1442 28.5301 26.149H31.0194V27.2201ZM28.3188 32.4553V31.4596H31.0194V32.4553H28.3188ZM26.5386 33.1493V33.8886C26.5386 34.1149 26.6291 34.2356 26.8403 34.2356H35.6813C35.8321 34.2356 35.9076 34.2808 35.9076 34.3714C36.0011 35.6823 36.0011 36.9981 35.9076 38.309C35.8501 38.7459 35.6545 39.1529 35.3494 39.4707C35.1659 39.6163 34.9339 39.6864 34.7006 39.6669C34.0213 39.615 33.346 39.5193 32.679 39.3802L32.86 41.3415C34.1372 41.611 35.4682 41.4353 36.6317 40.8437C37.1128 40.4385 37.4249 39.868 37.5068 39.2444C37.7401 37.1409 37.8208 35.0232 37.7482 32.9079C37.7482 32.6364 37.6577 32.5006 37.4163 32.4855H32.8902V31.4897H36.8581V29.8151H32.8147V28.9099H36.7675V27.2051H32.8147V26.149H37.19V24.3838H26.9308C26.6593 24.3838 26.5386 24.5196 26.5386 24.7911V33.1493ZM8.43424 35.2313V41.1756H10.305V35.2162H13.775C13.7961 35.2141 13.8173 35.2164 13.8374 35.2231C13.8575 35.2297 13.8759 35.2405 13.8916 35.2547C13.9072 35.2689 13.9197 35.2863 13.9282 35.3056C13.9367 35.325 13.9411 35.3459 13.941 35.3671V38.3845C13.941 38.6108 13.775 38.8069 13.4582 38.9427C12.5853 39.0638 11.696 38.9546 10.8783 38.6259V40.7531C12.1906 41.134 13.5895 41.0917 14.8764 40.6324C15.1346 40.532 15.3564 40.3557 15.5126 40.1268C15.6687 39.8979 15.752 39.6271 15.7514 39.35V33.8433C15.7586 33.7801 15.7515 33.7162 15.7306 33.6561C15.7096 33.5961 15.6754 33.5416 15.6304 33.4966C15.5855 33.4516 15.5309 33.4174 15.4709 33.3965C15.4109 33.3755 15.3469 33.3684 15.2837 33.3756H10.2598V31.9273H8.38898V33.436H5.83929C6.50268 32.8267 7.12748 32.1767 7.71007 31.4897C7.71007 31.4897 7.71007 31.4143 7.7855 31.3992H16.8377V29.4832H9.12824C9.32437 29.1814 9.5205 28.8797 9.73172 28.578L8.43424 27.6878L9.44507 27.3559C11.165 27.8538 13.0056 28.4874 14.982 29.2418L15.4949 27.4012L12.2362 26.2093L14.2276 25.3644L13.3978 23.6445C12.1751 24.2995 10.9158 24.8838 9.62611 25.3946C7.40454 24.7205 5.13497 24.2162 2.83698 23.8859L2.41455 25.7114C3.54607 25.8774 4.76811 26.1339 6.09576 26.4658C4.3623 26.8245 2.60008 27.0264 0.830419 27.0693L1.16233 28.9099C3.13842 28.8902 5.10453 28.6267 7.01607 28.1254L8.10233 27.8538C7.69498 28.4874 7.31781 29.0457 6.95572 29.5435H0.649376V31.3992H5.49228C4.34205 32.4923 3.07752 33.4584 1.72055 34.2808C1.16233 34.5373 0.604115 34.824 0.0458984 35.1106L1.0869 36.74C1.75072 36.393 2.41455 36.0158 3.07837 35.5934V40.6777H4.94916V35.3671C4.94703 35.348 4.94895 35.3287 4.95482 35.3105C4.96068 35.2922 4.97034 35.2754 4.98317 35.2612C4.996 35.2469 5.0117 35.2355 5.02924 35.2278C5.04678 35.2201 5.06576 35.2161 5.08494 35.2162L8.43424 35.2313Z"
                  fill="#4570B6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M76.25 37.0238L69.4911 38.0799L69.0837 36.179L76.25 35.0625V24.1094H78.1208V34.791L79.4635 34.5647L79.7502 36.4505L78.1208 36.7372V41.1426H76.25V37.0238ZM70.3812 30.9136L71.6787 29.5709C72.8401 30.5528 73.9199 31.6275 74.9073 32.7844L73.5193 34.0215C72.5419 32.9185 71.4936 31.8803 70.3812 30.9136ZM71.0149 26.2367C72.2387 27.3798 73.3783 28.6101 74.4245 29.9179L75.9332 28.7109C74.8492 27.3793 73.68 26.1195 72.433 24.9392L71.0149 26.2367ZM67.6806 33.4331C68.3143 34.2327 68.8725 34.9418 69.3704 35.6509L70.7584 34.3685C69.8126 33.1658 68.8055 32.0126 67.741 30.9136V30.7175H70.0493V28.7713H67.6806V26.1763C68.5255 26.0104 69.31 25.8142 70.0342 25.603L69.6721 23.6719C67.5916 24.2461 65.4586 24.61 63.3054 24.7581L63.5619 26.6893C64.3313 26.6893 65.0706 26.5686 65.8249 26.478V28.7713H63.0339V30.7024H65.7344C64.9711 32.7331 63.8466 34.609 62.4153 36.2393L64.1352 37.0238C64.7667 36.1788 65.3317 35.286 65.8249 34.3534V41.0822H67.6806V33.4331ZM50.4363 27.7303V26.6591C50.4363 26.3724 50.572 26.2216 50.8738 26.2216H55.6865C55.7423 26.2146 55.799 26.2202 55.8524 26.238C55.9058 26.2558 55.9545 26.2853 55.995 26.3243C56.0355 26.3634 56.0668 26.411 56.0865 26.4637C56.1062 26.5164 56.1139 26.5729 56.1089 26.6289V27.7303H50.4363ZM56.1089 29.4954V30.4157C56.1158 30.4795 56.1085 30.544 56.0876 30.6046C56.0667 30.6653 56.0328 30.7206 55.9881 30.7667C55.9435 30.8127 55.8893 30.8484 55.8294 30.8712C55.7694 30.894 55.7052 30.9033 55.6413 30.8985H50.4363V29.3898L56.1089 29.4954ZM45.5481 26.0254C45.7442 26.0254 45.8498 26.116 45.8498 26.3121V28.907H43.9338V26.3423C43.9338 26.1461 44.0243 26.0556 44.2053 26.0556L45.5481 26.0254ZM45.9102 37.9592C45.9174 38.0071 45.9135 38.056 45.8988 38.1022C45.8842 38.1483 45.8591 38.1905 45.8256 38.2255C45.7921 38.2605 45.751 38.2873 45.7055 38.3039C45.66 38.3205 45.6113 38.3265 45.5632 38.3213H43.9338V35.3039H45.9102V37.9592ZM45.9102 33.5387H43.9338V30.5214H45.9102V33.5387ZM43.9338 40.011H47.0417H47.2982L47.4641 41.5197C49.6129 41.209 51.7155 40.6364 53.7252 39.8149L52.9709 38.2157C52.2388 38.5412 51.4882 38.8233 50.7229 39.0606C50.6373 39.0747 50.5553 39.1054 50.4815 39.1511V32.709H51.6583C52.2122 35.4617 53.6284 37.9665 55.7016 39.8602C56.2447 40.3279 56.9086 40.8257 57.6931 41.3689L59.1263 39.8602C57.6789 39.1116 56.3924 38.0865 55.3395 36.8428C56.4638 36.0884 57.5145 35.2296 58.4776 34.278L57.3612 32.89C56.431 33.7939 55.4211 34.6119 54.3438 35.3341C53.9214 34.463 53.5829 33.5537 53.3329 32.6184H57.3762C57.4539 32.6283 57.5327 32.6202 57.6068 32.5949C57.6808 32.5695 57.748 32.5276 57.8034 32.4723C57.8587 32.4169 57.9006 32.3497 57.926 32.2756C57.9513 32.2016 57.9594 32.1228 57.9496 32.0451V24.9844C57.9566 24.9114 57.9473 24.8377 57.9225 24.7686C57.8977 24.6995 57.8579 24.6368 57.806 24.5849C57.7541 24.533 57.6914 24.4932 57.6223 24.4684C57.5532 24.4435 57.4795 24.4343 57.4064 24.4413H49.2142C48.8823 24.4413 48.7013 24.6224 48.6862 24.9844V39.4679C48.3156 39.5048 47.9477 39.5652 47.5848 39.649V39.4227V24.8939C47.5953 24.8168 47.5875 24.7384 47.5621 24.6648C47.5368 24.5913 47.4945 24.5247 47.4388 24.4704C47.383 24.4161 47.3154 24.3757 47.2412 24.3523C47.167 24.3289 47.0883 24.3232 47.0115 24.3357H42.7419C42.3949 24.3357 42.229 24.5167 42.2139 24.8637V41.0822H43.9338V40.011Z"
                  fill="#4570B6"
                />
                <path
                  d="M41.1719 18.0138H59.1706V14.408H44.7626V10.8023H59.1706V7.21156H44.7626V3.60578H59.1706V0H41.1719V18.0138Z"
                  fill="#4570B6"
                />
                <path
                  d="M79.7341 0H61.7354V3.60578H76.1434V7.21156H61.7354V18.0138H65.3411V10.8023H68.9469L75.027 18.0138H79.7341L73.654 10.8023H79.7341V0Z"
                  fill="#4570B6"
                />
              </svg>
            </div>
            <div>關於我們</div>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/04/9fee3c4186e05c7f.png"
                  alt="眼睛完成微笑矯視"
                />
              </div>
              <div>超過<span>30,000</span>隻</div>
              <div>眼睛完成微笑矯視</div>
            </div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/04/f93837f78f784a98.png"
                  alt="香港上市眼科中心"
                />
              </div>
              <div>第<span>1</span>間</div>
              <div>香港上市眼科中心</div>
            </div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/04/13dff075b29c20a1.png"
                  alt="眼科專科醫生"
                />
              </div>
              <div><span>11</span>位</div>
              <div>眼科專科醫生</div>
            </div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/04/dee77e4c5f7c0f67.png"
                  alt="寬敞、舒適中心環境"
                />
              </div>
              <div><span>8,000</span>尺</div>
              <div>寬敞、舒適中心環境</div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-share">
        <H2Tag :title="['用戶分享']" />
        <div>
          <div>
            <div>
              <p>
                每一次擘大眼都<br /><span
                  >懷疑自己係咪唔記<br v-if="isMobile == false" /><span
                    >得除Con</span
                  ><br v-if="isMobile == false" /></span
                >既感覺
              </p>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/04/c25610dda5c84823.png"
                alt=""
              />
            </div>
            <div>姜咏鑫 Ada</div>
          </div>
          <div>
            <div>
              <p>從未試過<br /><span>全日都睇得清！</span></p>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/04/0fbe5a8b2ffa83de.png"
                alt=""
              />
            </div>
            <div>胡鴻鈞 Hubert</div>
          </div>
          <div>
            <div>
              <p><span>唔駛再戴Con/眼鏡</span><br />演戲更自在！</p>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/04/3be16d14d00ddce9.png"
                alt=""
              />
            </div>
            <div>唐浩然 Jacky</div>
          </div>
          <div>
            <div>
              <p>以後可以戴<br /><span>唔會縮細我眼睛</span><br />既平光鏡！</p>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/04/78f186d542ce1ae0.png"
                alt=""
              />
            </div>
            <div>陳欣妍 Shirley</div>
          </div>
        </div>
      </div>
      <div class="home-facebook-user">
        <div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="98"
                viewBox="0 0 182 98"
                fill="none"
              >
                <path
                  d="M20.1559 42.9279L34.3052 53.7283L48.9493 43.609L43.05 60.4033L57.1993 71.2036L39.4039 70.7827L33.5046 87.577L28.4058 70.5226L10.6105 70.1017L25.2546 59.9824L20.1559 42.9279Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M161.844 42.9279L147.695 53.7283L133.051 43.609L138.95 60.4033L124.801 71.2036L142.596 70.7827L148.495 87.577L153.594 70.5226L171.389 70.1017L156.745 59.9824L161.844 42.9279Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M91 0L100.205 28.3303H129.993L105.894 45.8394L115.099 74.1697L91 56.6606L66.9008 74.1697L76.1059 45.8394L52.0067 28.3303H81.7949L91 0Z"
                  fill="#4570B6"
                />
              </svg>
            </div>
            <div>Facebook<br />用户評分</div>
          </div>
          <div>
            <div>
              <div>
                <div>Wylie Kwong</div>
                <div>
                  <span>Good service and outcome</span><span>2月1日12:07</span>
                </div>
                <div><img src="@/asset/image/new/home/10775.png" alt="" /></div>
              </div>
              <div>
                <div>Wylie Kwong</div>
                <div>
                  <span>Good service and outcome</span><span>2月1日12:07</span>
                </div>
                <div><img src="@/asset/image/new/home/10775.png" alt="" /></div>
              </div>
            </div>

            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="48"
                  viewBox="0 0 24 48"
                  fill="none"
                >
                  <path
                    d="M21 2.97607L3 23.9761"
                    stroke="#4570B6"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21 45L3 24"
                    stroke="#4570B6"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="48"
                  viewBox="0 0 24 48"
                  fill="none"
                >
                  <path
                    d="M2.86133 2.97607L20.8613 23.9761"
                    stroke="#4570B6"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2.86133 45L20.8613 24"
                    stroke="#4570B6"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-service">
        <div>
          <H2Tag :title="['預約服務']" />
          <p>
            矯視前先要進行全面術前眼睛檢查，包括屈光檢查、全面眼底檢查、醫生會診為你的眼睛狀況評估及提供矯視方案建議等。如有興趣進行矯視，立即WhatsApp預約我們的術前眼睛檢查服務。如想了解更多有關SMILE
            微笑激光矯視、ICL植入式隱形眼鏡、老花矯視等資訊，或對以上的矯視方式有疑問，歡迎預約我們矯視中心的講座了解更多。
          </p>
        </div>
        <div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="135"
                height="101"
                viewBox="0 0 135 101"
                fill="none"
              >
                <path
                  d="M104.157 24.7017H127.198C130.15 24.7017 132.533 27.0569 132.533 29.9513V82.7886C132.533 85.683 130.15 88.0383 127.198 88.0383H115.223L108.583 98.5093L101.943 88.0383H52.7381C49.787 88.0383 47.4033 85.683 47.4033 82.7886V76.9714"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M87.1299 2H7.67533C4.5539 2 2 4.5539 2 7.67533V58.7533C2 61.8747 4.5539 64.4286 7.67533 64.4286H20.4448L27.539 75.7792L34.6331 64.4286H87.1299C90.2513 64.4286 92.8052 61.8747 92.8052 58.7533V7.67533C92.8052 4.5539 90.2513 2 87.1299 2Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M47.4048 38.8902C50.5392 38.8902 53.0801 36.3493 53.0801 33.2149C53.0801 30.0805 50.5392 27.5396 47.4048 27.5396C44.2704 27.5396 41.7295 30.0805 41.7295 33.2149C41.7295 36.3493 44.2704 38.8902 47.4048 38.8902Z"
                  fill="white"
                />
                <path
                  d="M24.7017 38.8902C27.8361 38.8902 30.377 36.3493 30.377 33.2149C30.377 30.0805 27.8361 27.5396 24.7017 27.5396C21.5673 27.5396 19.0264 30.0805 19.0264 33.2149C19.0264 36.3493 21.5673 38.8902 24.7017 38.8902Z"
                  fill="white"
                />
                <path
                  d="M70.105 38.8902C73.2394 38.8902 75.7803 36.3493 75.7803 33.2149C75.7803 30.0805 73.2394 27.5396 70.105 27.5396C66.9706 27.5396 64.4297 30.0805 64.4297 33.2149C64.4297 36.3493 66.9706 38.8902 70.105 38.8902Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>講座</div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="163"
                height="98"
                viewBox="0 0 163 98"
                fill="none"
              >
                <path
                  d="M44.381 57.2441L36.3174 73.6442"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33.0284 56.106L28.1768 65.9668"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M134.886 57.8154L126.817 74.2103"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M123.527 56.6772L118.676 66.5381"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M77.5529 15.145C72.6292 16.2106 68.4169 19.5686 66.205 24.2833C63.7096 29.5958 59.2035 33.7595 53.6816 35.7816"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M108.936 35.8749C103.28 33.8892 98.6652 29.6683 96.1286 24.2571C93.9941 19.7035 89.9829 16.4235 85.2705 15.2539"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M85.8389 4.7998H102.93C115.711 4.7998 126.069 15.2428 126.069 28.129"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.2812 30.063V28.1241C36.2812 15.238 46.6392 4.79492 59.4204 4.79492H76.6098"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M82.3699 16.2347C85.976 15.6445 88.4248 12.2188 87.8394 8.58309C87.254 4.94738 83.8562 2.47847 80.2501 3.06863C76.644 3.65879 74.1952 7.08453 74.7806 10.7202C75.3659 14.3559 78.7638 16.8249 82.3699 16.2347Z"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M69.1855 61.6939C72.1707 58.1384 76.5274 56.106 81.1418 56.106C81.1573 56.106 81.1676 56.106 81.1779 56.106C85.8078 56.1164 90.1696 58.1748 93.1445 61.7511L93.2064 61.8239"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.44043 80.0015C14.6839 89.093 24.4541 95.2008 35.637 95.2008C46.8199 95.2008 56.4199 89.1969 61.6943 80.2354"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.32077 73.5762L3.6447 75.1668C2.57745 71.8608 2 68.3313 2 64.6666C2 45.9741 17.0291 30.8164 35.5745 30.8164C54.1198 30.8164 69.149 45.9689 69.149 64.6666C69.149 68.3313 68.5715 71.8608 67.5043 75.1668L63.6168 73.4099"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M100.651 80.0015C105.895 89.093 115.665 95.2008 126.848 95.2008C138.031 95.2008 147.631 89.1969 152.905 80.2354"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M98.5317 73.5762L94.8556 75.1668C93.7884 71.8608 93.2109 68.3313 93.2109 64.6666C93.2109 45.9741 108.24 30.8164 126.785 30.8164C145.331 30.8164 160.36 45.9689 160.36 64.6666C160.36 68.3313 159.782 71.8608 158.715 75.1668L154.828 73.4099"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.9863 25.0571V34.9024"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M132.359 25.0571V34.9024"
                  stroke="#4570B6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.8917 83.8728C50.1766 82.026 57.8398 71.3055 56.008 59.928C54.1762 48.5505 43.5431 40.8243 32.2582 42.6711C20.9734 44.518 13.3102 55.2384 15.1419 66.616C16.9737 77.9935 27.6069 85.7197 38.8917 83.8728Z"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M130.099 83.8699C141.384 82.0231 149.047 71.3026 147.215 59.9251C145.383 48.5475 134.75 40.8214 123.465 42.6682C112.18 44.5151 104.517 55.2355 106.349 66.613C108.181 77.9906 118.814 85.7167 130.099 83.8699Z"
                  stroke="#A6E1D6"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>術前眼睛檢查</div>
          </div>
        </div>
      </div>
      <div class="home-award">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/04/3c37342a42929463.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/9fb7b59c6d134014.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/86e300274d8bc4ef.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/788333406bba2c0f.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/29433265c4f65fdf.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/402f4a682ca2394a.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2024/04/16b586d7718ac0a6.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <businessHours />
    <Footer />
    <footers />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import BannerSlider from "@/components/content/home/BannerSlider.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import footers from "@/components/commom/new_foot/footers.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Banner,
    BannerSlider,
    H2Tag,
  },
  data() {
    return {
      bgReferralServiceImg: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/04/14d1bbdf1e9fceaf.png",
          title: ["SMILE"],
          desc: ["1000 度近視", "500 度散光"],
          link: "/smile",
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/04/1f353fd16dd57c69.png",
          title: ["SMILE", "PRO"],
          desc: ["擔心眼睛", "無法對焦太久"],
          link: "/smile-pro",
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/04/15a5f9b61fcd20de.png",
          title: ["LASIK"],
          desc: ["1400 度近視", "600 度散光"],
          link: "/smile-pro",
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/04/e28a1feb9db867c2.png",
          title: ["ICL"],
          desc: ["1800 度近視", "1000 度遠視", "600 度散光"],
          link: "/icl",
        },
        {
          id: 5,
          img: "https://static.cmereye.com/imgs/2024/04/2ab718080c0c7c14.png",
          title: ["Clear-", "Vision"],
          desc: ["39歲以上", " 同時有近視/遠視/", "散光問題"],
          link: "/clear-vision",
        },
      ],
      isMobile: false,
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
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap");
.orbitron-nine {
  font-family: "Orbitron", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}
@media screen and (min-width: 768px) {
  .home {
    overflow: hidden;
    .banner-box {
      margin-top: 140px;
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/1f675e433a2f0f10.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
    border-radius: 55px;
    padding-top: 23%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
  .home-referral-service,
  .home-referral {
    max-width: 1270px;
    margin: 0 auto;
  }
  .home-referral {
    margin-top: 85px;
    & > div:nth-child(2) {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 6px;
      padding: 0 154px;
    }
  }
  .home-referral-service {
    margin-top: 75px;
    margin-bottom: 20px;
    & > div:nth-child(2) {
      margin-bottom: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      & > div {
        position: relative;
        & > div:nth-child(2) {
          position: absolute;
          z-index: 5;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
          justify-content: space-around;
          & > div:nth-child(1) {
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 35px;
            font-style: normal;
            font-weight: 700;
            line-height: 35px; /* 100% */
            letter-spacing: 7px;
          }
          & > div:nth-child(2) {
            max-width: max-content;
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 25px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 140% */
            letter-spacing: 6.25px;
          }
          & > a {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 23px;
            font-style: normal;
            font-weight: 300;
            line-height: 35px; /* 152.174% */
            letter-spacing: 10.35px;
          }
          & > div:nth-child(1),
          & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
        }
      }
      & > div:nth-child(2) {
        margin: 0 128px;
      }
      & > div:nth-child(4) {
        margin-right: 64px;
      }
      & > div:nth-child(5) {
        margin-left: 64px;
      }
    }
    & > a {
      color: #fff;

      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 80% */
      letter-spacing: 7.5px;
      background: #4570b6;
      border-radius: 100px;
      padding: 20px 40px;
      display: block;
      margin: auto;
      width: max-content;
    }
  }
  .home-contact-us {
    width: 100vw;
    background: #f4fafc;
    border-radius: 50% 50% 0 0;
    width: 150%;
    margin-left: calc(-50% / 2);
    position: relative;
    padding: 220px 0 100px;
    margin-top: 145px;
    & > div {
      max-width: 1270px;
      margin: 0 auto;
      & > div:nth-child(1) {
        width: 307px;
        height: 307px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
        & > div:nth-child(2) {
          margin-top: 30px;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 50px; /* 166.667% */
          letter-spacing: 7.5px;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        & > div {
          width: 287px;
          height: 287px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & > div:nth-child(2) {
            margin-top: 5px;
            color: #4570b6;

            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 25px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 140% */
            letter-spacing: 6.25px;
            span {
              color: #4570b6;
              font-family: "Noto Sans HK";
              font-size: 35px;
              font-style: normal;
              font-weight: 500;
              line-height: 35px;
              letter-spacing: 8.75px;
            }
          }
          & > div:nth-child(3) {
            color: #6d6e71;

            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px; /* 175% */
            letter-spacing: 5px;
          }
        }
      }
    }
  }
  .home-share {
    max-width: 1270px;
    margin: 75px auto 55px;
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      & > div {
        position: relative;
        width: 275px;
        height: 396px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        & > div:nth-child(1) {
          background: url("https://static.cmereye.com/imgs/2024/04/e6d9f9a2e876172f.png")
            no-repeat;
          display: inline-block;
          width: 100%;
          height: 150px;
          background-size: 100% 100%;
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            color: #fff;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0.9px;
            text-align: center;
            span {
              color: #fff;
              text-align: center;
              font-family: Inter;
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 1; /* 166.667% */
              letter-spacing: 1.5px;
            }
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          top: 33%;
          width: 276px;
          height: 227px;
          border-radius: 45px;
          overflow: hidden;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(3) {
          position: relative;
          z-index: 5;
          border-radius: 23px;
          background: #5d85c3;
          width: 174px;
          height: 45px;
          color: #fff;

          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 1.2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      & > div:nth-child(even) {
        flex-direction: column-reverse;
        & > div:nth-child(1) {
          background: url("https://static.cmereye.com/imgs/2024/04/0e5b1cb6c5baedf9.png")
            no-repeat;
          background-size: 100% 100%;
        }
        & > div:nth-child(2) {
          position: absolute;
          top: 36px;
          left: 0;
        }
      }
    }
  }
  .home-facebook-user {
    width: 100vw;
    background: url(@/asset/image/new/home/110425.png) no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding: 210px 0 100px;
    margin-top: 160px;
    margin-bottom: 85px;
    position: relative;
    & > div {
      max-width: 1270px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      & > div:nth-child(1) {
        width: 307px;
        height: 307px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: -15%;
        left: 50%;
        transform: translateX(-50%);
        & > div:nth-child(2) {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 50px; /* 166.667% */
          letter-spacing: 7.5px;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        flex-direction: column;
        & > div {
          display: flex;
          justify-content: space-between;
        }
        & > div:nth-child(1) {
          width: 100%;
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 65px;
            padding: 22px 0;
            & > div:nth-child(1) {
              color: #4570b6;

              text-align: center;
              font-family: "Noto Sans";
              font-size: 35px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 5.25px;
            }
            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;
              width: 585px;
              height: 165px;
              padding: 60px 0 40px;
              background-position: center;
              background: url(@/asset/image/new/home/11046.png) no-repeat;
              background-size: 100% 100%;
              color: #487f82;

              text-align: center;
              font-family: "Noto Sans";
              font-size: 28px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 2.8px;
            }
            & > div:nth-child(3) {
              margin-top: 7px;
            }
          }
        }
        & > div:nth-child(2) {
          margin-top: 55px;
          width: 400px;
          & > div {
            cursor: pointer;
          }
        }
      }
    }
  }
  .home-service {
    max-width: 1270px;
    margin: 0 auto 100px;
    & > div:nth-child(1) {
      :deep(h2) {
        margin-bottom: 20px;
      }
      p {
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
    }
    & > div:nth-child(2) {
      margin-top: 75px;
      display: flex;
      justify-content: space-evenly;
      & > div {
        width: 395px;
        height: 275px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        cursor: pointer;
        & > div:nth-child(2) {
          margin-top: 35px;
          color: #4570b6;
          text-align: center;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
          font-family: "Inter";
          font-size: 35px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 7px;
        }
      }
      & > div:nth-child(1) {
        background: #4570b6;
        & > div:nth-child(2) {
          color: #fff;
        }
      }
      & > div:nth-child(2) {
        border: 4px solid #4570b6;
      }
      & > div:hover {
        box-shadow: 0px 0px 4px 3px rgba(69, 112, 182, 0.72941);
      }
    }
  }
  .home-award {
    margin: 0 auto;
    margin-bottom: 55px;
    & > div {
      display: flex;
      justify-content: space-between;
    }
    max-width: 1270px;
  }
}
@media screen and (max-width: 767px) {
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/819f03987bcb2783.png")
      no-repeat;
    background-size: 100% 100%;
    height: 330px;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;
    padding-top: 70%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
  .home-referral {
    margin-top: 50px;
    & > div:nth-child(2) {
      color: #6d6e71;
      padding: 0 30px;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 214.286% */
      letter-spacing: 0.7px;
    }
  }
  .home-referral-service {
    margin-top: 50px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div {
        margin-bottom: 55px;
        position: relative;
        & > div:nth-child(1) {
          width: 245px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          z-index: 5;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          & > div:nth-child(1) {
            color: #4570b6;
            text-align: center;
            font-size: 25px;
            font-style: normal;
            font-weight: 900;
            line-height: 20px; /* 80% */
            letter-spacing: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          & > div:nth-child(2) {
            color: #4570b6;

            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 175% */
            letter-spacing: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          & > a {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 35px; /* 175% */
            letter-spacing: 9px;
          }
        }
      }
    }
    & > a {
      margin: 0 auto 55px;
      display: flex;
      justify-content: center;
      width: max-content;
      background: #4570b6;
      border-radius: 55px;
      padding: 18px 60px;
      color: #fff;

      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 100% */
      letter-spacing: 6px;
    }
  }
  .home-contact-us {
    background: url("https://static.cmereye.com/imgs/2024/04/699e53513f07e88b.png")
      no-repeat;
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    & > div {
      padding: 0 30px;
      & > div:nth-child(1) {
        display: none;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 65px 45px;
        & > div {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #fff;
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          & > div:nth-child(1) {
            width: 85px;
            height: 85px;
            display: flex;
            justify-content: center;
            align-items: center;
            & > img {
              width: 100%;
              height: auto;
            }
          }
          & > div:nth-child(2) {
            margin-top: 5px;
            color: #4570b6;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 218.75% */
            letter-spacing: 4px;
            & > span {
              color: #4570b6;
              font-family: "Noto Sans HK";
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              line-height: 35px;
              letter-spacing: 5.5px;
            }
          }
          & > div:nth-child(3) {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1; /* 250% */
            letter-spacing: 3.5px;
          }
        }
      }
    }
  }
  .home-share {
    margin-top: 55px;
    & > div:nth-child(2) {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      & > div {
        position: relative;
        width: 268px;
        height: 386px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        align-items: center;

        & > div:nth-child(1) {
          background: url("https://static.cmereye.com/imgs/2024/04/e6d9f9a2e876172f.png")
            no-repeat;
          display: inline-block;
          width: 100%;
          height: 150px;
          background-size: 100% 100%;
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            color: #fff;

            text-align: center;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.4; /* 277.778% */
            letter-spacing: 3.6px;
            span {
              color: #fff;
              font-family: Inter;
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.6;
              letter-spacing: 4.4px;
            }
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          top: 33%;
          width: 276px;
          height: 227px;
          border-radius: 45px;
          overflow: hidden;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(3) {
          position: relative;
          z-index: 5;
          border-radius: 23px;
          background: #5d85c3;
          width: 174px;
          height: 45px;
          color: #fff;

          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 1.2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      & > div:nth-child(even) {
        flex-direction: column-reverse;
        & > div:nth-child(1) {
          background: url("https://static.cmereye.com/imgs/2024/04/0e5b1cb6c5baedf9.png")
            no-repeat;
          background-size: 100% 100%;
        }
        & > div:nth-child(2) {
          position: absolute;
          top: 36px;
          left: 0;
        }
      }
    }
  }
  .home-facebook-user {
    margin-top: 125px;
    background: url("https://static.cmereye.com/imgs/2024/04/92cf8c320de2eb7c.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    background-position: center;
    padding: 100px 30px 50px;
    & > div {
      position: relative;
      & > div:nth-child(1) {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        width: 131px;
        height: 131px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & > div:nth-child(1) {
          width: 78px;
          & > svg {
            width: 100%;
            height: auto;
          }
        }
        & > div:nth-child(2) {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          letter-spacing: 3.5px;
        }
      }
      & > div:nth-child(2) {
        position: relative;

        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > div {
            width: 283px;
            height: 208px;
            border-radius: 34px;
            background: #fff;
            padding: 11px 0 0;
            & > div:nth-child(1) {
              color: #4570b6;
              text-align: center;
              font-family: "Noto Sans";
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 2.4px;
              margin-bottom: 3px;
            }
            & > div:nth-child(2) {
              background-position: center;
              background: url(@/asset/image/new/home/11046.png) no-repeat;
              background-size: 100% 100%;
              display: flex;
              flex-direction: column;
              padding: 32px 0 16px;

              & > span:nth-child(1) {
                color: #487f82;
                text-align: center;
                font-family: "Noto Sans";
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 25px; /* 138.889% */
                letter-spacing: 2.7px;
              }
              & > span:nth-child(2) {
                color: #487f82;
                text-align: center;
                font-family: "Noto Sans";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 1.4px;
              }
            }
            & > div:nth-child(3) {
              width: 214px;
              margin: 5px auto 0;
              & > img {
                width: 100%;
              }
            }
          }
          & > div:nth-child(2) {
            display: none;
          }
        }
        & > div:nth-child(2) {
          margin-top: 45px;
          display: flex;
          justify-content: space-around;
          svg {
            width: 14px;
          }
        }
      }
    }
  }
  .home-service {
    margin-top: 60px;
    & > div {
      padding: 0 30px;
      p {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px; /* 214.286% */
        letter-spacing: 0.7px;
        padding: 0 15px;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div {
        margin-top: 35px;
        width: 239.6px;
        height: 167.476px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        & > div:nth-child(2) {
          margin-top: 15px;
          color: #fff;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
          font-family: "Inter";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 4px;
        }
      }
      & > div:nth-child(1) {
        background: #4570b6;
        box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
        & > div:nth-child(1) {
          width: 80px;
          & > svg {
            width: 100%;
            height: auto;
          }
        }
        & > div:nth-child(2) {
          color: #fff;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          width: 96px;
          & > svg {
            width: 100%;
            height: auto;
          }
        }
        border: 2px solid #4570b6;
        box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
        & > div:nth-child(2) {
          color: #4570b6;
        }
      }
    }
  }
  .home-award {
    margin-top: 55px;
    margin-bottom: 55px;
    & > div {
      display: flex;
      flex-wrap: wrap;
      padding: 0 30px;
      justify-content: center;

      img {
        width: 68px;
        height: 68px;
      }
      &>img:nth-child(2){
        margin-left: 18px;
      }
      &>img:nth-child(3){
        margin: 0 18px;
      }

      &>img:nth-child(6){
        margin: 0 18px;
      }
    }
  }
}
</style>