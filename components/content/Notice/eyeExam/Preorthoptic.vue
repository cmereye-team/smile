<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2 v-html="$t('notice.eyeExam.preorthoptic.h2')"></h2>
    </div>
    <div>
      <div class="flex justify-center pcShow">
        <img
          src="https://static.cmereye.com/imgs/2022/12/af21e2a1ef419d29.jpg"
          alt=""
        />
      </div>
      <div class="flex preorth_box">
        <div class="preorth flex justify-evenly flex-col justify-center">
          <img
            src="https://static.cmereye.com/imgs/2022/12/c07c6b4f21d225d5.png"
            alt=""
          />
          <span class="pt-3" :style="{textAlign: $i18n.locale === 'en' ? 'center' : 'left' }" v-html="$t('notice.eyeExam.preorthoptic.arrowOne.span1')"></span>
        </div>
        <div class="flex flex-col justify-center mt-1 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="preorth flex justify-evenly flex-col justify-center">
          <img
            src="https://static.cmereye.com/imgs/2022/12/7b3798d7b61abfb9.png"
            alt=""
          />
          <span class="pt-3" :style="{textAlign: $i18n.locale == 'en' ? 'center' : 'left' }">{{$t('notice.eyeExam.preorthoptic.arrowOne.span2')}}</span>
        </div>
        <div class="flex flex-col justify-center mt-1 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="preorth flex justify-evenly flex-col justify-center" :class="[$i18n.locale === 'en'? ' preorth':'preorth']">
          <img
            src="https://static.cmereye.com/imgs/2022/12/2f2d444c97114450.png"
            alt=""
          />
          <span class="pt-3" :style="{textAlign: $i18n.locale === 'en' ? 'center' : 'left' }">{{$t('notice.eyeExam.preorthoptic.arrowOne.span3')}}</span>
        </div>
        <div class="flex flex-col justify-center mt-1 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="preorth flex justify-evenly flex-col justify-center" :class="[$i18n.locale === 'en' ? 'preorthEng preorth':'preorth']">
          <img
            src="https://static.cmereye.com/imgs/2022/12/032341e288d255ad.png"
            alt=""
          />
          <span class="pt-3" :style="{textAlign: $i18n.locale === 'en' ? 'center' : 'left' }">{{$t('notice.eyeExam.preorthoptic.arrowOne.span4')}}</span>
        </div>
        <div class="arrow-two">
          <div class="Inappropriate">
            <div class="flex flex-col justify-center mt-1 mx-5 arrow-top">
              <img
                src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
                alt=""
              />
            </div>
            <div class="Inappropriate-box" :class="[
              $i18n.locale == 'en' ? 'Inappropriate-box Inappropriate-box-eng' :'Inappropriate-box'
            ]"
            >
              <span>{{$t('notice.eyeExam.preorthoptic.arrowTwo.span1')}}</span>
              <p>{{$t('notice.eyeExam.preorthoptic.arrowTwo.p1')}}</p>
            </div>
          </div>
          <div class="appropriate">
            <div class="flex flex-col justify-center mt-1 mx-5" 
            :class="[
              $i18n.locale == 'en' ? 'arrow-botom arrow-botom_eng': 'arrow-botom'
            ]"
            >
              <img
                src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
                alt=""
              />
            </div>
            <div :class="[
              $i18n.locale == 'en' ? 'appropriate-box appropriate-box-eng' :'appropriate-box'
            ]">
              <span>{{$t('notice.eyeExam.preorthoptic.arrowTwo.span2')}}</span>
              <p v-html="$t('notice.eyeExam.preorthoptic.arrowTwo.p2')"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-10 beizhu" v-html="$t('notice.eyeExam.preorthoptic.remark')">

      </div>
      <div class="flex justify-center">
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
    </div>
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
h2 {
  font-size: 25px;
  color: #4570B6;
}
@media screen and (min-width: 768px) {
  .beizhu {
    margin-bottom: 85px;
    /deep/ p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 30px;
      /* or 200% */

      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }

  .preorth_box {
    display: flex;
    justify-content: space-evenly;
    margin: 100px 0;
    .preorth {
      justify-content: flex-end;
      img {
        width: 94px;
        margin: auto;
        margin-bottom: 10px;
      }
      /deep/ span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 35px;
        /* or 200% */

        letter-spacing: 0.1em;

        color: #6D6E71;
        max-width: 140px;
      }
    }
    .preorth:nth-child(1) /deep/ span {
      max-width: 175px;
    }
    .preorth:nth-child(5) img {
      margin: auto;
      margin-bottom: 30px;
      width: 45px;
    }
    .preorth:nth-child(7) img {
      margin-bottom: 35px;
    }
    .preorthEng:nth-child(7) img {
      margin-bottom: 60px;
    }
  }
  .arrow-two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .arrow-top {
      img {
        transform: rotate(-45deg);
      }
    }
    .arrow-botom {
      transform: rotateX(180deg) rotate(-45deg);
    }
  }
  .Inappropriate {
    display: flex;
    margin: 15px 0;
    .Inappropriate-box {
      width: 186px;
      background-color: #fff2f2;
      padding: 10px;
      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height, or 111% */

        letter-spacing: 0.1em;

        background: linear-gradient(92.06deg, #558bc6 7.92%, #78cbe4 79.85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */

        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
  .appropriate {
    display: flex;
    margin: 15px 0;
    .appropriate-box {
      background-color: #eefbf2;
      padding: 10px;
      width: 186px;
      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height, or 111% */

        letter-spacing: 0.1em;

        background: linear-gradient(92.06deg, #558bc6 7.92%, #78cbe4 79.85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      /deep/ p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */

        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  .btn-yuyue {
    margin-bottom: 10vw;
  }
  .Inappropriate-box {
    // width: 186px;
    background-color: #fff2f2;
    padding: 10px;
    width: 70%;
    margin: auto;
    min-width: 138px;
    min-height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      /* identical to box height, or 111% */

      letter-spacing: 0.1em;

      background: linear-gradient(92.06deg, #558bc6 7.92%, #78cbe4 79.85%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      /* or 125% */

      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
  .Inappropriate-box-eng {
    margin: auto;
    min-width: 138px;
    min-height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .appropriate-box {
    background-color: #eefbf2;
    padding: 10px;
    width: 70%;
    margin: auto;
    // width: 186px;
    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      /* identical to box height, or 111% */

      letter-spacing: 0.1em;

      background: linear-gradient(92.06deg, #558bc6 7.92%, #78cbe4 79.85%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      /* or 125% */

      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
  .appropriate-box-eng {
    width: 70%;
    margin: auto;
  }
  .arrow-two {
    display: flex;
    .arrow-top {
      transform: rotateY(180deg) rotate(45deg);
      padding: 30px 10px;
      img {
        max-width: 20vw;
      }
    }
    .arrow-botom {
      transform: rotate(45deg);
      padding: 30px 10px;
      img {
        max-width: 20vw;
      }
    }
    .arrow-botom_eng {
      padding: 30px 30px;
    }
  }
  .preorth_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    img {
      max-width: 100%;
    }
    .preorth {
      display: flex;
      align-items: center;
      /deep/ span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        /* or 125% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
  .arrow {
    padding: 40px 0;
    transform: rotate(90deg);
  }
  .beizhu {
    /deep/ p {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 23px;
      /* or 200% */

      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
}
</style>
