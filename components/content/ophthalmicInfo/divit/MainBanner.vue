<template>
  <div class="main_banner" @click="toConsumptionVoucher">
    <banner :class="[$i18n.locale == 'en' ? 'banner_eng' : 'banner']">
      <template #title>
        <!-- {{ $t('home.headers.ophthalmicConsultationChild_2') }} -->
        <!-- 消费券详情 -->
      </template>
    </banner>
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
  methods: {
    toConsumptionVoucher() {
      let _path = this.localePath("/consumption-voucher");
      this.$router.push(_path);
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .section {
    .des_box {
      width: 60.5vw !important;
      letter-spacing: 0.2vw;
      margin-top: -1vw;
    }
  }
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/08/34ed60fc10ea00d7.png");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    height: 100vw;
    margin: 24vw auto 11vw;
    margin-bottom: 10vw;
  }
  .banner_eng {
    background-image: url("https://static.cmereye.com/imgs/2023/08/f5c567864335057b.png");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    height: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
}

@media screen and (min-width: 768px) {
  .main_banner {
    margin-top: 130px;
  }
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2023/08/a5ffa7a66b536560.png");
    cursor: pointer;
    max-width: 1280px;
    margin: auto;
  }
  .banner_eng {
    background-image: url("https://static.cmereye.com/imgs/2023/08/4607e6bbf214356d.png");
    cursor: pointer;
    max-width: 1280px;
    margin: auto;
  }
}
</style>
