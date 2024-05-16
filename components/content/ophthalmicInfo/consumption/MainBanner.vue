<template>
  <div class="main_banner" @click="toConsumptionVoucher">
    <banner class="banner">
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
  created() { },
  methods: {
    toConsumptionVoucher(){
      let _path = this.localePath('/')
      this.$router.push(_path)
    }
  }
};
</script>
<style lang="scss" scoped>

@media screen and (max-width:768px){
  .section {
    .des_box{
    width: 60.5vw !important;
    letter-spacing: 0.2vw;
    margin-top: -1vw;
  }
}
  .banner {
    background-image: url("https://static.cmereye.com/imgs/2024/04/819f03987bcb2783.png");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    height: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    margin-top: 24vw;
}

}

@media screen and (min-width:768px){

  .banner {
    background-image: url("https://static.cmereye.com/imgs/2024/04/1f675e433a2f0f10.png");
    cursor: pointer;
  }
}

</style>