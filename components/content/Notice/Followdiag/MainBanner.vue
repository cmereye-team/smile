<template>
  <div class="main_banner">
    <banner class="banner"> <template #title>
      {{$t('notice.followdiag.followDiago.h2')}}
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
    background-image: url("https://static.cmereye.com/imgs/2023/04/8fa6057ae84f4a7d.jpg");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    height: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    margin-top: 24vw;
    font-size: 20px;
    padding: 0 20px;
}

}

@media screen and (min-width:768px){

  .banner {
  background-image: url("https://static.cmereye.com/imgs/2023/04/8f47623cd90f0a16.jpg");
}
}

</style>