<template>
  <div :class="[$i18n.locale === 'en' ? 'xtraEng xtra' : 'xtra']">
    <div class="xtra-in">
      <div class="xtra-in-title">
        <h2>{{ $t("service.relexSmile.xtra.h2") }}</h2>
        <h2>Comeal Collagen Cross-Linking</h2>
        <div
          class="xtra-collagen"
          v-html="$t('service.relexSmile.xtra.p1')"
        ></div>
        +-+
      </div>
      <div class="xtra-in-lists">
        <div :class="[$i18n.locale === 'en' ? 'listInEng listIn ' : 'listIn']">
          <h3>{{ $t("service.relexSmile.xtra.h3_1") }}</h3>
          <!-- <div></div> -->
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 136 136"
              fill="none"
            >
              <g clip-path="url(#clip0_3575_8000)">
                <path
                  d="M3.84904 100.941L0 98.9006C0.741987 97.4939 18.5496 64.4446 42.0923 52.2482C74.8324 35.2444 82.6851 27.1598 77.1511 15.9836C72.5137 6.50779 69.0666 3.1998 69.0356 3.16888L72.0191 0C72.1737 0.139123 75.9454 3.7408 81.0621 14.0513C88.7911 29.664 75.8991 39.6344 44.0864 56.1127C21.7495 67.6908 4.01908 100.616 3.84904 100.941Z"
                  fill="#4570B6"
                />
                <path
                  d="M80.5364 136L79.0988 131.873C79.7688 131.679 80.3864 131.336 80.9056 130.87C81.4248 130.405 81.8323 129.828 82.0977 129.183C82.6838 127.419 82.562 125.495 81.7576 123.819C79.0216 118.749 71.8645 118.409 62.7906 117.976C56.0509 117.651 48.4146 117.28 40.8401 114.884C22.6614 109.072 6.52322 93.042 5.85852 92.3619L8.95013 89.2703C9.12017 89.4403 25.0266 105.238 42.1696 110.726C49.2185 112.967 56.5455 113.323 63.007 113.632C73.0393 114.111 81.7113 114.529 85.6067 121.763C86.3034 123.149 86.7131 124.662 86.8114 126.211C86.9097 127.759 86.6945 129.312 86.1786 130.775C85.6846 132.01 84.922 133.119 83.9462 134.023C82.9703 134.927 81.8055 135.602 80.5364 136Z"
                  fill="#4570B6"
                />
                <path
                  d="M79.8254 111.004C71.3826 110.37 63.4851 106.59 57.6947 100.414C51.9042 94.2367 48.6422 86.1119 48.5537 77.6458C48.5537 62.9142 59.2662 49.3266 74.0132 45.323L75.1571 49.5275C62.265 53.0211 52.9129 64.8465 52.9129 77.6458C52.9815 85.008 55.8127 92.076 60.8456 97.4496C65.8786 102.823 72.7462 106.111 80.0882 106.661L79.8254 111.004Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M81.3248 96.6283C76.4051 96.6283 71.6869 94.6739 68.2082 91.1951C64.7295 87.7164 62.7751 82.9983 62.7751 78.0786C62.7748 76.2567 63.0404 74.4444 63.5635 72.6992C63.709 72.1764 64.0456 71.7274 64.5065 71.4411C64.9675 71.1548 65.5192 71.0521 66.0522 71.1534C66.2575 71.1802 66.4654 71.1802 66.6706 71.1534C67.9251 71.1534 69.1283 70.655 70.0154 69.7679C70.9024 68.8809 71.4008 67.6777 71.4008 66.4232C71.3993 65.8296 71.2838 65.2419 71.0606 64.6919C70.8618 64.2067 70.8446 63.6661 71.0121 63.1692C71.1797 62.6723 71.5207 62.2525 71.9727 61.9867C73.9494 60.8301 76.1254 60.0542 78.3878 59.699L79.068 64.0117C77.8864 64.1927 76.7329 64.5252 75.6363 65.0011C75.7164 65.4709 75.7578 65.9466 75.76 66.4232C75.755 68.7141 74.8866 70.919 73.3279 72.5979C71.7693 74.2769 69.635 75.3066 67.3508 75.4816C67.1963 76.3126 67.1187 77.156 67.1189 78.0013C67.123 81.7539 68.6166 85.3515 71.2716 88.0036C73.9266 90.6557 77.5258 92.1454 81.2785 92.1454L81.3248 96.6283Z"
                  fill="#4570B6"
                />
                <path
                  d="M79.8872 118.455L75.698 117.249C87.5853 76.2083 68.6801 38.6761 68.4946 38.3051L72.3746 36.311C73.1939 37.9032 92.2537 75.76 79.8872 118.455Z"
                  fill="#4570B6"
                />
                <path
                  d="M135.382 51.97H103.492V56.3291H135.382V51.97Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M111.159 64.8774L100.416 54.1495L111.159 43.4216L114.235 46.4978L106.583 54.1495L114.235 61.8013L111.159 64.8774Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M135.382 106.444H103.492V110.803H135.382V106.444Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M111.159 119.352L100.416 108.624L111.159 97.896L114.235 100.972L106.583 108.624L114.235 116.276L111.159 119.352Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M123.263 79.207H94.3096V83.5662H123.263V79.207Z"
                  fill="#A6E1D6"
                />
                <path
                  d="M101.961 92.1145L91.2334 81.3866L101.961 70.6587L105.037 73.7348L97.3857 81.3866L105.037 89.0383L101.961 92.1145Z"
                  fill="#A6E1D6"
                />
              </g>
              <defs>
                <clipPath id="clip0_3575_8000">
                  <rect width="135.397" height="136" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div v-html="$t('service.relexSmile.xtra.p4')"></div>
        </div>
        <div :class="[$i18n.locale === 'en' ? 'listInEng listIn' : 'listIn']">
          <h3>{{ $t("service.relexSmile.xtra.h5_2") }}</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 136 136"
              fill="none"
            >
              <g clip-path="url(#clip0_3575_7995)">
                <path
                  d="M62.3759 110.34C54.5358 110.338 46.8141 108.427 39.879 104.771C39.5686 104.638 39.289 104.443 39.058 104.197C38.827 103.951 38.6496 103.66 38.537 103.342C38.4244 103.023 38.379 102.685 38.4038 102.349C38.4286 102.012 38.523 101.685 38.681 101.386C38.839 101.088 39.057 100.826 39.3215 100.616C39.5861 100.407 39.8913 100.255 40.2177 100.169C40.5442 100.083 40.8849 100.066 41.2182 100.119C41.5515 100.172 41.8702 100.294 42.1542 100.476C50.496 104.877 60.0498 106.426 69.3551 104.885C78.6604 103.345 87.2051 98.8002 93.6831 91.9456C100.161 85.091 104.216 76.3038 105.227 66.9275C106.239 57.5512 104.152 48.1016 99.285 40.0233C94.4182 31.945 87.0394 25.6826 78.2768 22.1933C69.5141 18.7041 59.8498 18.18 50.7611 20.7011C41.6724 23.2223 33.6595 28.6501 27.9474 36.1546C22.2353 43.6592 19.1382 52.8277 19.1296 62.2584C19.0772 71.8368 22.2436 81.1554 28.121 88.7195C28.3415 88.9701 28.5081 89.2633 28.6106 89.581C28.7131 89.8986 28.7494 90.2339 28.717 90.5661C28.6847 90.8983 28.5845 91.2202 28.4227 91.5121C28.2608 91.8041 28.0407 92.0597 27.7761 92.2631C27.5115 92.4666 27.2079 92.6135 26.8841 92.6949C26.5604 92.7763 26.2235 92.7903 25.8941 92.7362C25.5647 92.6821 25.2499 92.561 24.9693 92.3803C24.6886 92.1996 24.448 91.9633 24.2624 91.6859C17.7175 83.2894 14.1797 72.94 14.2152 62.2947C14.2152 52.7946 17.0321 43.5078 22.3096 35.608C27.5871 27.7082 35.0885 21.5502 43.8655 17.9122C52.6426 14.2742 62.3014 13.3195 71.6209 15.169C80.9405 17.0184 89.5025 21.5888 96.2248 28.3026C102.947 35.0163 107.528 43.572 109.388 52.8882C111.248 62.2045 110.304 71.8629 106.676 80.6429C103.047 89.4229 96.8971 96.9303 89.0022 102.216C81.1074 107.502 71.8225 110.329 62.3212 110.34H62.3759Z"
                  fill="#4570B6"
                />
                <path
                  d="M136 62.24C136 62.7678 136 63.2955 136 63.8233C135.791 71.9732 133.266 79.8953 128.719 86.6628C128.21 87.4454 127.646 88.1734 127.081 88.8831C125.578 90.7947 123.863 92.5286 121.967 94.0515C120.357 95.3498 118.597 96.4496 116.725 97.3273C115.554 97.8456 114.334 98.248 113.085 98.5285C107.309 106.586 99.6974 113.153 90.8793 117.685C82.0613 122.217 72.2906 124.584 62.3758 124.589C53.4004 124.607 44.5296 122.663 36.3843 118.893C34.7259 118.141 32.8776 117.912 31.0857 118.237C29.2939 118.562 27.6437 119.426 26.3554 120.713L11.7944 135.272C11.5706 135.501 11.3032 135.684 11.0078 135.808C10.7124 135.933 10.3949 135.997 10.0744 135.997C9.75379 135.997 9.43648 135.933 9.14108 135.808C8.84568 135.684 8.57826 135.501 8.35444 135.272C7.89984 134.815 7.64456 134.197 7.64456 133.552C7.64456 132.908 7.89984 132.289 8.35444 131.832L22.9155 117.273C24.9091 115.286 27.4611 113.953 30.2316 113.452C33.0021 112.951 35.8595 113.307 38.4229 114.471C45.9337 117.924 54.1089 119.695 62.3758 119.657C71.6775 119.654 80.8401 117.4 89.081 113.087C97.3219 108.773 104.396 102.53 109.699 94.8887C110.071 94.3833 110.627 94.0436 111.246 93.9424C113.037 93.6544 114.759 93.0374 116.324 92.1225C118.411 90.8596 120.295 89.2889 121.912 87.4636C122.531 86.772 123.132 86.044 123.732 85.2797C128.28 79.0601 130.849 71.6148 131.104 63.9143C131.104 63.3865 131.104 62.8587 131.104 62.331C131.104 61.8032 131.104 61.6576 131.104 61.33C130.961 53.5066 128.42 45.9155 123.823 39.5824C123.256 38.8281 122.649 38.1052 122.003 37.4167C120.486 35.6932 118.734 34.1922 116.798 32.958C115.105 31.8661 113.212 31.1236 111.228 30.7741C110.77 30.6973 110.342 30.4959 109.99 30.1918C109.854 30.0593 109.732 29.9128 109.626 29.755C103.248 20.5429 94.318 13.3937 83.9329 9.18519C73.5477 4.97666 62.1594 3.89207 51.1663 6.06449C40.1733 8.23691 30.0539 13.5717 22.0508 21.4141C14.0478 29.2565 8.50936 39.265 6.1156 50.2106C5.90932 51.0477 5.74559 51.903 5.62425 52.7766C5.36943 54.1961 5.18731 55.6156 5.0599 57.0715C4.93249 58.5274 4.85969 59.9287 4.84149 61.33C4.84149 62.1854 4.84149 63.1499 4.84149 63.9143C4.90093 66.6717 5.16261 69.421 5.62425 72.1402C5.78806 72.9955 5.95183 73.8508 6.15204 74.6879C7.45344 80.7435 9.74738 86.5422 12.9411 91.8494C14.5559 94.4954 15.2363 97.6067 14.8733 100.685C14.5103 103.763 13.125 106.631 10.939 108.829L5.4786 114.289C5.01901 114.74 4.39957 114.991 3.75546 114.987C3.11135 114.984 2.4948 114.725 2.04053 114.269C1.58627 113.812 1.33115 113.194 1.33077 112.55C1.33039 111.906 1.58481 111.288 2.03853 110.831L7.49892 105.371C8.89859 103.931 9.78247 102.069 10.0129 100.074C10.2434 98.079 9.80748 96.064 8.77303 94.3428C5.39455 88.7018 2.93689 82.5585 1.49252 76.1439C1.2923 75.2886 1.12844 74.4332 0.982829 73.5778C0.398953 70.4062 0.0703172 67.193 0 63.9689C0 63.1136 0 62.2581 0 61.3846C0 59.8195 8.89602e-06 58.2545 0.236626 56.6894C0.473242 55.1243 0.63708 53.1588 0.946502 51.4299C1.09211 50.5563 1.27407 49.7191 1.45608 48.8638C4.09488 37.12 10.0751 26.3902 18.6756 17.9683C27.2761 9.54633 38.1296 3.79191 49.9274 1.39881C61.7252 -0.994291 73.9635 0.0761531 85.1665 4.48109C96.3696 8.88602 106.059 16.4373 113.066 26.2244C114.497 26.5496 115.884 27.0445 117.198 27.6985C119.033 28.5941 120.751 29.7127 122.313 31.0289C124.074 32.5036 125.678 34.1564 127.1 35.9608C127.664 36.6706 128.192 37.3985 128.719 38.1628C133.332 45.041 135.86 53.1046 136 61.3846C136 61.5666 136 61.8942 136 62.24Z"
                  fill="#4570B6"
                />
                <path
                  d="M93.409 84.1334C93.0013 84.132 92.6002 84.03 92.2414 83.8363C91.8825 83.6427 91.5772 83.3634 91.3523 83.0233C87.565 76.8813 85.5323 69.8197 85.4745 62.6044C85.4168 55.3892 87.3362 48.2959 91.0247 42.0941C91.365 41.5438 91.91 41.1513 92.5398 41.0029C93.1695 40.8544 93.8325 40.9621 94.3828 41.3024C94.9331 41.6427 95.3256 42.1876 95.4741 42.8173C95.6226 43.447 95.5148 44.1098 95.1745 44.6601C91.9665 50.0733 90.2967 56.2591 90.3448 62.5511C90.3929 68.8431 92.1572 75.0026 95.4476 80.3662C95.6864 80.7338 95.8217 81.159 95.8393 81.597C95.8569 82.035 95.7561 82.4697 95.5475 82.8552C95.3388 83.2408 95.03 83.563 94.6537 83.7879C94.2774 84.0128 93.8475 84.1322 93.409 84.1334Z"
                  fill="#4570B6"
                />
                <path
                  d="M116.343 92.0316L121.803 94.0516C120.193 95.3499 118.433 96.4497 116.561 97.3274L109.626 94.8706L100.271 91.5766L95.4111 89.7567L18.9657 62.4585L95.7024 35.0328L100.544 33.3221L109.899 30.0281L117.18 27.4802C119.015 28.3758 120.733 29.4944 122.294 30.8106L116.834 32.7944L103.583 37.7626L98.8876 39.4733L94.0824 41.2932L90.8972 42.458L35.3286 62.5312L91.2795 82.8957L94.2281 83.9877L98.5963 85.571L103.311 87.2817L116.343 92.0316Z"
                  fill="#A6E1D6"
                />
              </g>
              <defs>
                <clipPath id="clip0_3575_7995">
                  <rect width="136" height="136" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div v-html="$t('service.relexSmile.xtra.p5')"></div>
        </div>
      </div>
      <div
        :class="[
          $i18n.locale === 'en' ? 'xtra-in-btn xtra-in-btnEng' : 'xtra-in-btn',
        ]"
      >
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=85269408569&text=想了解SMILE XTRA角膜膠原交聯術"
        >
          {{ $i18n.locale === "en" ? "Learn More" : "了解更多" }}</a
        >
      </div>
    </div>
    <!-- <div class="xtra_title page_container">
      <div class="flex justify-center mt-8 md:mt-0">
        <h2 class="flex-col">
          {{$t('service.relexSmile.xtra.h2')}}<span>Comeal Collagen Cross-Linking</span>
        </h2>
      </div>
      <p>{{$t('service.relexSmile.xtra.p1')}}</p>
    </div>

    <ul class="xtra_des">
      <li>
        <h3 class="gradient_title_bg">{{$t('service.relexSmile.xtra.h3_1')}}</h3>
        <p v-html="$t('service.relexSmile.xtra.p2')">
        </p>
      </li>

      <li>
        <h3 class="gradient_title_bg">{{$t('service.relexSmile.xtra.h3_2')}}</h3>
        <p v-html="$t('service.relexSmile.xtra.p3')"></p>
      </li>
    </ul>
    <a href="#" class="mbShow">
      <button>
        <div class="flex btn-yuyue">
          <img
            src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
            alt=""
            style="width: 12vw"
          />
          <div class="flex flex-col justify-center" style="padding: 0 10px">
            <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
            <span>6061 0511</span>
          </div>
        </div>
      </button>
    </a> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    goWhatsapp() {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=85260610511&text=想了解SMILE XTRA角膜膠原交聯術";
    },
  },
};
</script>
<style lang="scss" scoped>
.xtra {
  width: 100%;
  overflow: hidden;
  margin-bottom: 145px;

  &-in {
    width: 150%;
    margin-left: -25%;
    background: rgba(199, 232, 239, 0.2);
    padding: 63px 0 53px;
    border-radius: 0 0 50% 50%;

    &-title {
      & > h2 {
        &:nth-of-type(1) {
          color: #4570b6;
          font-size: 30px;
          font-weight: 500;
          line-height: 50px;
          letter-spacing: 7.5px;
          text-align: center;
          margin-bottom: 0;
        }

        &:nth-of-type(2) {
          color: #4570b6;
          font-size: 30px;
          font-weight: 500;
          line-height: 50px;
          text-align: center;
          position: relative;
          padding-bottom: 15px;
          margin-bottom: 0;

          &::after {
            content: "";
            background: #a6e1d6;
            width: 39px;
            height: 5px;
            border-radius: 3px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
      }
      & > div {
        &:nth-of-type(1) {
          margin-top: 20px;
          color: #6d6e71;
          font-size: 20px;
          font-weight: 400;
          line-height: 20px;
          /* 100% */
          letter-spacing: 5px;
          text-align: center;
        }
      }
    }

    &-lists {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      max-width: 1380px;
      margin: 80px auto;

      .listIn {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        max-width: 720px;
        & > h3 {
          &:nth-of-type(1) {
            color: #fff;
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 5px;
            background-color: #4570b6;
            height: 50px;
            line-height: 50px;
            border-radius: 25px;
            min-width: 352px;
            margin-bottom: 30px;
          }
        }
        & > div {
          &:nth-of-type(1) {
            // margin-top: 57px;
            color: #6d6e71;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            line-height: 35px;
            /* 175% */
            letter-spacing: 5px;
          }
        }
        & > div:nth-child(3) {
          margin: 0 auto;
          margin-top: 20px;
          max-width: 430px;
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
      .listInEng {
        & > div:last-child {
          margin-top: 35px;
          color: #6d6e71;
          text-align: center;
          font-family: Noto Sans HK;
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: 30px; /* 166.667% */
          letter-spacing: 1.8px;
        }
      }
    }

    &-btn {
      a {
        cursor: pointer;
        width: 200px;
        display: block;
        height: 50px;
        line-height: 50px;
        background: #a6e1d6;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 6px;
        border-radius: 25px;
        margin: 0 auto;

        &::after {
          content: ">";
          font-family: 正体;
        }
      }
    }
  }
}

// @media screen and (min-width: 768px) {
//   .xtra {
//     max-width: 1280px;
//     margin: auto;
//     text-align: center;
//     background: url(("https://static.cmereye.com/imgs/smile/images/service/relex_smile/xtra_bg.jpg"));
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     height: 46vw;
//     padding-top: 5vw;
//     .xtra_title {
//       h2 {
//         margin-bottom: 0;
//         font-size: 26px;
//         color: #4570B6;
//         span {
//           font-size: 26px;
//         }
//       }
//       p {
//         font-weight: 500;
//         font-size: 17px;
//         color: #6D6E71;
//       }
//     }
//     .xtra_des {
//       // font-weight: 900;
//       margin-top: 4vw;
//       h3 {
//         margin-bottom: 2vw;
//         font-size: 20px;
//         font-weight: 500;
//       }
//       p {
//         font-weight: 300;
//         font-size: 20px;
//         color: #6D6E71;
//       }
//       li:nth-child(1) {
//         margin-bottom: 5vw;
//       }
//     }
//   }
// }

@media screen and (max-width: 768px) {
  .xtra {
    margin-bottom: 50px;

    &-in {
      width: 300%;
      margin-left: -100%;
      padding: 19px 0 53px;

      &-title {
        & > h2 {
          &:nth-of-type(1) {
            font-size: 20px;
            letter-spacing: 5px;
          }

          &:nth-of-type(2) {
            font-size: 20px;
            line-height: 30px;
            padding-bottom: 23px;
          }
        }
        & > div {
          &:nth-of-type(1) {
            margin-top: 23px;
            font-size: 16px;
            letter-spacing: 4px;
          }
        }
      }

      &-titleEng {
        & > div {
          &:nth-of-type(3) {
            color: #6d6e71;
            text-align: center;
            font-family: Noto Sans HK;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
            line-height: 25px;
            /* 166.667% */
            letter-spacing: 1.5px;
          }
        }
      }

      &-lists {
        width: calc(100% / 3);
        flex-direction: column;
        margin: 38px auto 20px;
        padding: 0 20px;
        align-items: center;

        .listIn {
          &:first-child {
            margin-bottom: 34px;
          }

          & > div {
            &:nth-of-type(1) {
              // height: 43px;
              // line-height: 43px;
              font-size: 16px;
              letter-spacing: 4px;
              min-width: 100%;
              margin-bottom: 23px;
              display: flex;
              justify-content: center;
            }
            &:nth-of-type(2) {
              margin-top: 27px;
              font-size: 15px;
              line-height: 30px;
              /* 200% */
              letter-spacing: 4.5px;
            }
          }
          & > div:nth-child(3) {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px; /* 200% */
            letter-spacing: 4.5px;
            padding: 0 30px;
          }
        }

        & .listInEng {
          & > div:last-child {
            color: #6d6e71;
            text-align: center;
            font-family: Noto Sans HK;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
            line-height: 25px; /* 166.667% */
            letter-spacing: 1.5px;
          }
        }
      }

      &-btnEng {
        a {
          width: 220px;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
