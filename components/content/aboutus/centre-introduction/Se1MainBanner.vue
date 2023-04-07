<template>
  <div class="main_banner">
    <div class="section flex justify-start items-center banner">
      <div class="des_box">
        <h3 class="gradient_font">
          <div class="pcShow">
            <p class="title_cer">{{$t('home.headers.aboutSmileChild_1')}}</p>
          </div>
          <div class="mbShow banner_serve">
            <p class="title_cer" style="">{{$t('home.headers.aboutSmileChild_1')}}</p>
          </div>
        </h3>
        <!-- <p>
        <slot name="des"></slot>
      </p> -->
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/commom/head/Banner.vue";
export default {
  components: { Banner },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
body .gradient_font {
  display: inline-block;
  background: #4570b6;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media screen and (min-width: 768px) {
  .section {
    height: 480px;
     
    background-size: cover !important;
    background-repeat: no-repeat;
    padding-left: 63px;
    .des_box {
      width: 648px;

      margin-bottom: 40px;

      h3 {
        font-weight: 700;
        font-size: 28px;
      }
      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        letter-spacing: 0.1em;
        text-align: justify;
        color: #9b9b9b;
        font-size: 38px;
        line-height: 40px;
        font-weight: 600;
        margin-left: 40px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .title_cer {
    font-weight: 500;
    font-size: 26px !important;
    line-height: 40px !important;
    letter-spacing: 0.15em;
    color: #4570b6;
  }
  .section {
    height: 350px;
  }
  .des_box {
    padding-left: 28px;
    h3 {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 800;
      font-size: 17px;
      line-height: 15px;
      /* or 125% */

      letter-spacing: 0.1em;

      background: #4570b6;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    span {
      font-size: 11px;
    }
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 0.08em;
      color: #9b9b9b;
      width: 55vw;
      padding-top: 18px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .title_cer {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 33px;
    /* identical to box height, or 87% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;

    color: #4570b6;
  }
  .banner {
    background: url("https://static.cmereye.com/imgs/2022/11/c8e8452497d5f740.jpg")
      no-repeat;
  }
}
@media (max-width: 768px) {
  .section {
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
  .banner {
    background: url("https://static.cmereye.com/imgs/2022/11/14b67f3baff1fe81.jpg")
      no-repeat;
  }
}
</style>
