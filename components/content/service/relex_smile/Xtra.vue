<template>
  <div class="xtra">
    <div class="xtra_title page_container">
      <div class="flex justify-center mt-8 md:mt-0">
        <h2 class="flex-col">
          SMILE XTRA角膜膠原交聯術<span>Comeal Collagen Cross-Linking</span>
        </h2>
      </div>
      <p>(可與SMILE微笑激光矯視同時進行)</p>
    </div>

    <ul class="xtra_des">
      <li>
        <h3 class="gradient_title_bg">什麼是SMILE XTRA？</h3>
        <p>
          透過在角膜局部加入維生素B2,再經紫外線V2照射,使角膜裡面的膠原蛋白緊扣,
          <br />
          令角膜變得更加堅韌和穩定,降低角膜降弧／變形／反彈的寬度
        </p>
      </li>

      <li>
        <h3 class="gradient_title_bg">我需要接受SMILE XTRA角膜膠原交聯術?</h3>
        <p>
          如果你的眼晴度數較深、角膜比較薄，希望加強角膜以減低度數反彈機會，<br />經醫生評估後均可接受SMILE
          XTRA角膜膠原交聯術。
        </p>
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
            <span>立即預約 / 查詢</span>
            <span>6061 0511</span>
          </div>
        </div>
      </button>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .xtra {
    max-width: 1280px;
    margin: auto;
    text-align: center;
    background: url(("~/asset/image/service/relex_smile/xtra_bg.jpg"));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 46vw;
    padding-top: 5vw;
    .xtra_title {
      h2 {
        margin-bottom: 0;
        font-size: 26px;
        span {
          font-size: 26px;
        }
      }
      p {
        font-weight: 900;
        font-size: 17px;
        color: rgba(155, 155, 155, 1);
      }
    }
    .xtra_des {
      font-weight: 900;
      margin-top: 4vw;
      h3 {
        margin-bottom: 2vw;
        font-size: 18px;
      }
      p {
        font-size: 17px;
      }
      li:nth-child(1) {
        margin-bottom: 5vw;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .btn-yuyue {
    img {
      width: auto !important;
    }
    margin-top: 42px;
    border: 1px solid transparent;
    border-radius: 99px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #fff, #fff),
      linear-gradient(90deg, #4671b7 -23.33%, #7cd2e7 122.38%);
    span {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 71% */

      text-align: center;
      letter-spacing: 0.1em;

      background: linear-gradient(90deg, #4671b7 -23.33%, #7cd2e7 122.38%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  h2::before {
    width: 11vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    left: -11vw;
  }
  h2::after {
    width: 11vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    right: -11vw;
  }
  .xtra {
    text-align: center;
    background: url(("~/asset/image/service/relex_smile/xtra_bg.jpg"));
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 14vw;
    padding-top: 5vw;
    .xtra_title {
      h2 {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        /* or 112% */

        text-align: center;
        letter-spacing: 0.1em;
        margin-bottom: 0px;
        color: #444343;
        span {
          font-size: 14px;
        }
      }
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 250% */

        letter-spacing: 0.1em;

        color: #9b9b9b;
      }
    }
    .xtra_des {
      font-weight: 900;
      margin-top: 4vw;
      padding: 0 16px;
      h3 {
        margin-bottom: 2vw;
        font-size: 15px;
        padding: 8px;
      }
      p {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        /* or 250% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
      li:nth-child(1) {
        margin-bottom: 5vw;
      }
    }
  }
}
</style>
