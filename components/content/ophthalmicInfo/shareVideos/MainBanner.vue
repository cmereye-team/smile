<template>
  <div class="main_banner">
    <banner class="banner">
      <template #title>
        {{$t('home.headers.ophthalmicConsultationChild_1')}}
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
  methods: {}
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
    background-image: url("https://static.cmereye.com/imgs/2022/12/6ae626caf51ed54f.jpg");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    
}
/deep/ h3{
  font-size: 20px !important;
}

}

@media screen and (min-width:768px){

  .banner {
  background-image: url("https://static.cmereye.com/imgs/2023/03/f749408bdb90b101.jpg");
}
}

</style>