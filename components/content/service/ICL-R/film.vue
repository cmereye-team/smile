<template>
  <div>
    <div class="bg-photo">
      <!-- <img
        class="mbShow"
        src="https://static.cmereye.com/imgs/2023/10/39c3a9da9fc3333f.png"
        alt=""
      /> -->
      <div class="mbShow">
        <BtnCommon
          :title="'預約講座'"
          :icon="false"
          :duration="2"
          :link="toLink"
        />
      </div>
      <!-- <div class="mbShow">
        <a
          href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7"
          target="_blank"
          class="bg-btn"
          >預約講座</a
        >
      </div> -->
      <div class="bg-title">活動簡介</div>
      <div class="bg-text">
        <p>
          視力對生活和工作的影響舉足輕重，而對於備受高度近視、遠視或深度數散光困擾人士而言，該會有更深體會。<br
            class="pcShow"
          />作為解決以上問題的行之有效方案，ICL植入式隱形眼鏡一直廣受關注。<br
            class="pcShow"
          />
        </p>
        <br
          class="mbShow"
        />為了讓大眾更深入瞭解這項矯視技術，希瑪微笑激光矯視中心特別邀請到來自不同領域的真實用家——麥沛東、王頌茵Kathy仔及<br
          class="pcShow"
        />李莉Lily親身分享各自的經歷和感受。現場還會講解此項技術的原理和優勢，並設有相關展覽。<br
          class="pcShow"
        />透過是次活動，參加者不僅可獲取ICL植入式隱形眼鏡的最新資訊，更可以用家的角度全面瞭解此項矯視技術，<br
          class="pcShow"
        />助各位成就未來每個可能!
        <p>
          <br class="mbShow" />
          另外，為各位能以視力新境界迎接全新一年，希瑪微笑矯視中心更特意在是次活動推出會場限定優惠。<br
            class="pcShow"
          /><span>優惠名額有限，把握機會享受參加人士的專屬優惠!</span>
        </p>
      </div>
      <!-- <img
        class="mbShow"
        style="margin-top: -60px"
        src="https://static.cmereye.com/imgs/2023/10/e2264d2d11f2efdd.png"
        alt=""
      /> -->
    </div>
    <!-- <div class="mbShow bg-btn">
      <a
        href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7"
        target="_blank"
        >預約講座</a
      >
    </div> -->
    <!-- <div class="pcShow discounts-contact">
      <a
        href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7"
        target="_blank"
      >
        <button class="link_more shadow-lg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="flex items-center justify-evenly">
            <div class="p-1 text-left">
              <h3 class="text-xs font-normal text-center discounts-h3">
                立即預約<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                >
                  <line
                    x1="1.24885"
                    y1="1.26835"
                    x2="10.4487"
                    y2="10.374"
                    stroke="white"
                    stroke-width="1.17673"
                  />
                  <line
                    x1="10.2766"
                    y1="9.61116"
                    x2="1.17094"
                    y2="18.811"
                    stroke="white"
                    stroke-width="1.17673"
                  />
                </svg>
              </h3>
            </div>
          </div>
        </button>
      </a>
    </div> -->
    <div class="mbShow" style="height: 20px !important; width: 100%"></div>
    <BtnCommon
      :title="'了解優惠'"
      :icon="true"
      :duration="3"
      :shine="'short'"
      :link="tolink2"
    />
  </div>
</template>

<script>
import BtnCommon from "./BtnCommon.vue";
export default {
  components: { BtnCommon },
  data() {
    return {
      toLink:
        "https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7",
      tolink2:
        "https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(Event-ICLW02)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7%E6%9C%83%E5%A0%B4%E5%84%AA%E6%83%A0",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none !important;
  }
  .bg-photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: url("https://static.cmereye.com/imgs/2023/10/7050f56423c13680.png");
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width: 100%;
    height: auto;
    margin: 85px auto 92px;
    max-width: 100%;
    & > .bg-title {
      width: fit-content;
      padding: 10px 124px;
      // background: linear-gradient(
      //   90deg,
      //   rgba(59, 173, 108, 0) 0%,
      //   rgba(30, 186, 160, 0.8) 52%,
      //   rgba(59, 173, 108, 0.03) 100%
      // );
      // color: #fff;
      // font-family: "Noto Sans HK";
      // font-size: 30px;
      // font-style: normal;
      // font-weight: 600;
      // line-height: 30px; /* 100% */
      letter-spacing: 9px;
      color: #297492;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 100% */
      letter-spacing: 9px;
      white-space: nowrap;
    }
    & > .bg-text {
      color: #6b6b6b;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 225% */
      letter-spacing: 1px;
      margin-top: 46px;
      p:last-child {
        margin-top: 26px;
        span {
          color: #297492;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: 1px;
        }
      }
    }
  }

  .discounts-contact {
    margin: 95px auto 100px;
    letter-spacing: 0.1em;
    cursor: pointer;
    z-index: 90;
    font-weight: 600;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;

    .link_more {
      outline: none;
      cursor: pointer;
      border: none;
      margin: 0;
      position: relative;
      display: inline-block;
      border-radius: 0;
      overflow: hidden;
      // background: #11dbba;
      background: #297492;
    }

    .link_more:hover {
      animation: ani 8s linear infinite;
      border: none;
    }
    .discounts-h3 {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 75% */
      letter-spacing: 8.5px;
      border-radius: 0;
      padding: 18px 45px;
      margin: 0 auto;
      text-align: center;
      width: fit-content;
      color: #f3fcfe;
      display: flex;
      align-items: center;
      svg {
        margin-left: 10px;
      }
    }
    @keyframes ani {
      0% {
        background-position: 0%;
      }

      100% {
        background-position: 400%;
      }
    }

    .link_more::before,
    .link_more::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .link_more div {
      position: relative;
      z-index: 10;
      transition: color 0.4s;
    }

    .link_more::before {
      content: "";
      // background: #09c09c;
      background: #297492;
      width: 120%;
      left: -10%;
      transform: skew(30deg);
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    .link_more:hover::before {
      color: #09c09c;
      transform: translate3d(100%, 0, 0);
    }
  }
}
@media screen and (max-width: 768px) {
  .pcShow {
    display: none !important;
  }
  .bg-photo {
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 3.846vw;
    .bg-title {
      margin-top: 15.38vw;
      width: fit-content;
      color: #297492;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 700;
      line-height: 7.69vw; /* 125% */
      letter-spacing: 7.2px;
      white-space: nowrap;
    }
    .bg-text {
      margin-top: 6.665vw;
      color: #6b6b6b;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(16px, 4.1vw, 16px);
      font-style: normal;
      font-weight: 500;
      line-height: 7.69vw; /* 214.286% */
      letter-spacing: 1.4px;
      p:nth-child(1) {
        margin-bottom: 2.564vw;
      }
    }
  }
  .bg-btn {
    margin: 11.538vw auto 0;
    width: fit-content;
    padding: 2.82vw 6.15vw;
    // background: #09c09c;
    background: #297492;
    color: #fff;
    font-family: Noto Sans HK;
    font-size: 6.4vw;
    font-style: normal;
    font-weight: 700;
    line-height: 7.69vw; /* 120% */
    letter-spacing: 1.923vw;
    border-radius: 0;
    white-space: nowrap;
  }
}
</style>
