<template>
  <div class="xtra">
    <div class="xtra_title page_container">
      <div class="flex justify-center mt-8 md:mt-0">
        <h2 class="flex-col">
          {{$t('service.relexSmile.xtra.h2')}}
          <span>Comeal Collagen Cross-Linking</span>
        </h2>
      </div>
      <p>{{$t('service.relexSmile.xtra.p1')}}</p>
    </div>

    <ul class="xtra_des">
      <li>
        <h3 class="gradient_title_bg">{{$t('service.relexSmile.xtra.h3_1')}}</h3>
        <p :class="[$i18n.locale == 'en' ? 'pc_smile_xtra':'']" v-html="$t('service.relexSmile.xtra.p2')">
        </p>
      </li>
      <li>
        <h3 class="gradient_title_bg">{{$t('service.relexSmile.xtra.h3_2')}}</h3>
        <p :class="[$i18n.locale == 'en' ? 'pc_smile_xtra':'']" v-html="$t('service.relexSmile.xtra.p3')"></p>
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
    text-align: center;
    background: url(("https://static.cmereye.com/imgs/smile/images/service/relex_smile/xtra_bg.jpg"));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 46vw;
    padding-top: 5vw;
    margin: 100px auto;
    .xtra_title {
      h2 {
        margin-bottom: 0;
        font-size: 26px;
        color: #4570B6;
        span {
          font-size: 26px;
        }
      }
      p {
        font-weight: 500;
        font-size: 17px;
        color: #6D6E71;
      }
    }
    .xtra_des {
      // font-weight: 900;
      margin-top: 4vw;
      h3 {
        margin-bottom: 2vw;
        font-size: 20px;
        font-weight: 500;
      }
      p {
        font-weight: 300;
        font-size: 20px;
        color: #6D6E71;
      }
      li:nth-child(1) {
        margin-bottom: 5vw;
      }
      .pc_smile_xtra {
      max-width: 810px;
      margin: auto;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 1.8px;
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
    background: url(("https://static.cmereye.com/imgs/smile/images/service/relex_smile/xtra_bg.jpg"));
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 14vw;
    padding-top: 5vw;
    .xtra_title {
      margin-bottom: 30px;
      h2 {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        /* or 112% */

        text-align: center;
        letter-spacing: 0.1em;
        margin-bottom: 0px;
        color: #4570B6;
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
      // font-weight: 900;
      margin-top: 4vw;
      padding: 0 16px;
      h3 {
        margin-bottom: 2vw;
        font-size: 17px;
        padding: 8px;
        font-weight: 500;
      }
      /deep/ p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 25px;
        /* or 250% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
      li:nth-child(1) {
        margin-bottom: 5vw;
      }
    }
  }
}
</style>
