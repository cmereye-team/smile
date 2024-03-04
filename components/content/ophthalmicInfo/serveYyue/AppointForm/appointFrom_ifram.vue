<template>
  <div>
    <div class="page_container bookingifram pc_show">
      <div class="right_container">
        <div><img src="https://static.cmereye.com/imgs/2024/03/55c69a5f7b227ac9.png" alt="预约时间"></div>
      </div>
      <div class="left_container">
        <div>
          <div class="left_title">SMILE 微笑激光矯視，SMILE PRO 微笑激光矯視，CMER CLEAR-VISION 老花講座！</div>
          <ul class="left_list">
            <li>中環診所：中環畢打街1-3號中建大廈1512室</li>
            <li>旺角診所(星期一至五)：旺角彌敦道625及639號雅蘭中心一期702室</li>
            <li>旺角診所(星期六)：旺角彌敦道625及639號雅蘭中心一期1208室</li>
            <li>尖沙咀診所︰尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室</li>
          </ul>
        </div>
        <div>
          <div class="bookingifram_box">
            <iframe v-if="$i18n.locale === 'en'" width="100%" height="1600"
              src="https://smilecms.hkcmereye.com/en/bookingiframeng"></iframe>
            <iframe v-else width="100%" height="1600" src="https://smilecms.hkcmereye.com/bookingifram"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="mb_show page_container">
      <div>
        <div class="mb_img">
          <div><img src="https://static.cmereye.com/imgs/2024/03/0ce0fa2767c8e691.jpg" alt="预约时间"></div>
        </div>
        <div class="bookingifram_box">
          <div class="text—mb">
            <div class="left_title">SMILE 微笑激光矯視，SMILE PRO 微笑激光矯視，CMER CLEAR-VISION 老花講座！</div>
            <ul class="left_list">
              <li>中環診所：中環畢打街1-3號中建大廈1512室</li>
              <li>旺角診所(星期一至五)：旺角彌敦道625及639號雅蘭中心一期702室</li>
              <li>旺角診所(星期六)：旺角彌敦道625及639號雅蘭中心一期1208室</li>
              <li>尖沙咀診所︰尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室</li>
            </ul>
          </div>
          <iframe v-if="$i18n.locale === 'en'" width="100%" height="1140"
            src="https://smilecms.hkcmereye.com/en/bookingiframeng"></iframe>
          <iframe v-else width="100%" height="1040" src="https://smilecms.hkcmereye.com/bookingifram"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNum: 0,
      // url:'https://smilecms.hkcmereye.com/bookingifram',
      // newUrl:'',
    };
  },
  created() { },
  methods: {},
  mounted() {
    // 生成随机两位数
    // this.randomNum = Math.floor(Math.random() * 100);
    // this.newUrl = this.url + '?t=' + this.randomNum;
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mb_show {
    display: none !important;
  }

  .bookingifram {
    display: flex;
    padding: 20px 0;
    flex-direction: column;

  }

  .left_container {
    // background: linear-gradient(115.71deg, rgba(75, 123, 188, 0.2) 6.52%, rgba(126, 215, 234, 0.2) 97.76%);
    border-radius: 10px;
    padding: 10px 0 41px;
    margin-right: 10px;
    box-sizing: border-box;
    height: fit-content;
    width: 100%;
  }

  .right_container {
    width: 100%;

    &>img {
      width: 100%;
    }
  }

  .left_title {
    font-size: 16px;
    line-height: 1.4;
    color: #25395e;
    font-weight: 400;
    letter-spacing: 0px;
    margin-bottom: 10px;
  }

  .left_list {
    li {
      font-size: 14px;
      line-height: 24px;
      color: #8b8b8b;
      font-weight: 400;
      letter-spacing: 0px;
    }
  }

  .bookingifram_box {
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .pc_show {
    display: none !important;
  }

  .bookingifram {
    padding: 0 !important;
  }

  .text—mb {
    margin: 20px 0 10px;
  }

  .left_title {
    font-size: 14px;
    line-height: 1.4;
    color: #25395e;
    font-weight: 400;
    letter-spacing: 0px;
    margin-bottom: 10px;
  }

  .left_list {
    li {
      font-size: 12px;
      line-height: 24px;
      color: #8b8b8b;
      font-weight: 400;
      letter-spacing: 0px;
    }
  }
}
</style>
