
<template>
  <div class="Sidebar">
    <div @click="sidebar = !sidebar">了 解 更 多 ・ 預約</div>
    <div :class="sidebar ? 'sidebar-open' : 'sidebar-close'">
      <nuxt-link to="/ophthalmicInfo/AppointForm">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="44"
            viewBox="0 0 59 44"
            fill="none"
          >
            <path
              d="M44.8548 10.7455H54.7465C56.0134 10.7455 57.0367 11.7566 57.0367 12.9991V35.6817C57.0367 36.9242 56.0134 37.9353 54.7465 37.9353H49.6058L46.7552 42.4304L43.9047 37.9353H22.7814C21.5145 37.9353 20.4912 36.9242 20.4912 35.6817V33.1844"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.5455 1H3.43636C2.09636 1 1 2.09636 1 3.43636V25.3636C1 26.7036 2.09636 27.8 3.43636 27.8H8.91818L11.9636 32.6727L15.0091 27.8H37.5455C38.8855 27.8 39.9818 26.7036 39.9818 25.3636V3.43636C39.9818 2.09636 38.8855 1 37.5455 1Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.492 16.8364C21.8376 16.8364 22.9284 15.7456 22.9284 14.4C22.9284 13.0544 21.8376 11.9636 20.492 11.9636C19.1465 11.9636 18.0557 13.0544 18.0557 14.4C18.0557 15.7456 19.1465 16.8364 20.492 16.8364Z"
              fill="white"
            />
            <path
              d="M10.7459 16.8364C12.0915 16.8364 13.1823 15.7456 13.1823 14.4C13.1823 13.0544 12.0915 11.9636 10.7459 11.9636C9.40037 11.9636 8.30957 13.0544 8.30957 14.4C8.30957 15.7456 9.40037 16.8364 10.7459 16.8364Z"
              fill="white"
            />
            <path
              d="M30.2371 16.8364C31.5827 16.8364 32.6735 15.7456 32.6735 14.4C32.6735 13.0544 31.5827 11.9636 30.2371 11.9636C28.8916 11.9636 27.8008 13.0544 27.8008 14.4C27.8008 15.7456 28.8916 16.8364 30.2371 16.8364Z"
              fill="white"
            />
          </svg>
        </div>
        <div>講座</div>
      </nuxt-link>
      <nuxt-link to="/patient-info">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="50"
            viewBox="0 0 84 50"
            fill="none"
          >
            <path
              d="M22.8001 29.4161L18.6523 37.852"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9604 28.8304L14.4648 33.9026"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.3535 29.7101L65.2031 38.1432"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.5112 29.1246L61.0156 34.1968"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.8628 7.76086C37.3301 8.30899 35.1634 10.0363 34.0257 12.4614C32.7422 15.194 30.4243 17.3357 27.584 18.3758"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M56.0058 18.424C53.0965 17.4026 50.7229 15.2315 49.4182 12.448C48.3202 10.1058 46.257 8.41862 43.833 7.81702"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M44.125 2.44006H52.9164C59.4908 2.44006 64.8187 7.81172 64.8187 14.4401"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.6338 15.4347V14.4374C18.6338 7.80904 23.9617 2.43738 30.536 2.43738H39.3779"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.3405 8.32191C44.1954 8.01835 45.455 6.25623 45.1539 4.3861C44.8528 2.51598 43.1051 1.24603 41.2502 1.54959C39.3953 1.85316 38.1357 3.61528 38.4368 5.4854C38.7379 7.35553 40.4856 8.62548 42.3405 8.32191Z"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35.5586 31.7049C37.0941 29.876 39.3351 28.8306 41.7086 28.8306C41.7166 28.8306 41.7219 28.8306 41.7272 28.8306C44.1087 28.8359 46.3523 29.8947 47.8825 31.7343L47.9143 31.7717"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.82715 41.1221C7.52425 45.7985 12.5498 48.9402 18.3021 48.9402C24.0543 48.9402 28.9923 45.852 31.7053 41.2424"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.73688 37.8172L1.84599 38.6353C1.29703 36.9348 1 35.1193 1 33.2343C1 23.6193 8.73063 15.8225 18.2699 15.8225C27.8092 15.8225 35.5399 23.6166 35.5399 33.2343C35.5399 35.1193 35.2429 36.9348 34.6939 38.6353L32.6943 37.7316"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M51.7441 41.1221C54.4412 45.7985 59.4668 48.9402 65.219 48.9402C70.9713 48.9402 75.9093 45.852 78.6223 41.2424"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M50.6539 37.8172L48.763 38.6353C48.214 36.9348 47.917 35.1193 47.917 33.2343C47.917 23.6193 55.6476 15.8225 65.1869 15.8225C74.7262 15.8225 82.4569 23.6166 82.4569 33.2343C82.4569 35.1193 82.1598 36.9348 81.6109 38.6353L79.6113 37.7316"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.3955 12.86V17.9242"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.0537 12.86V17.9242"
              stroke="#4570B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.9761 43.1134C25.7808 42.1634 29.7226 36.6491 28.7803 30.7967C27.8381 24.9444 22.3687 20.9702 16.564 21.9202C10.7593 22.8702 6.81754 28.3845 7.75977 34.2369C8.702 40.0892 14.1714 44.0634 19.9761 43.1134Z"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M66.8912 43.1119C72.6958 42.162 76.6376 36.6476 75.6954 30.7953C74.7532 24.9429 69.2837 20.9688 63.479 21.9187C57.6744 22.8687 53.7326 28.3831 54.6748 34.2354C55.617 40.0877 61.0865 44.0619 66.8912 43.1119Z"
              stroke="#A6E1D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>術前檢查</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebar: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Sidebar {
    display: flex;
    align-items: flex-start;
    & > div:nth-child(1) {
      width: 64px;
      border-radius: 25px 0 0 25px;
      background: #4570b6;
      writing-mode: vertical-rl; /* 从上到下，从右到左 */
      text-orientation: mixed; /* 允许混合方向 */
      color: #fff;

      text-align: center;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 150% */
      letter-spacing: 4px;
      padding: 22px 20px;
      cursor: pointer;
    }
    & > div:nth-child(2) {
      & > a {
        width: 160px;
        height: 140px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        & > div:nth-child(1) {
          margin-bottom: 18px;
        }
        & > div:nth-child(2) {
          text-align: center;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
          font-family: "Inter";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 4px;
        }
      }
      & > a:nth-child(1) {
        background: #4570b6;
        margin-bottom: 45px;
        & > div:nth-child(2) {
          color: #fff;
        }
      }
      & > a:nth-child(1):hover {
        box-shadow: 0px 0px 4px 3px #4570b6ba;
      }
      & > a:nth-child(2) {
        background: #fff;
        border: 1px solid #4570b6;
        & > div:nth-child(2) {
          color: #4570b6;
        }
      }
      & > a:nth-child(2):hover {
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .sidebar-close {
    width: 0;
    padding: 0;
    & > a {
      display: none;
    }
    transition: all 0.3s ease-in-out;
  }
  .sidebar-open {
    padding: 30px 18px;
    background: #fff;
    border-radius: 0 0 25px 25px;
    box-shadow: -2px 0px 7px rgba(69, 112, 182, 0.25);
    transition: all 0.3s ease-in-out;
  }
}
@media screen and (max-width: 767px) {
}
</style>