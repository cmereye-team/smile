<template>
  <div class="main_banner">
    <banner class="banner">
      <template #title>
         {{$t('home.headers.aboutSmileChild_2')}}
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
@media (min-width: 768px){
  .banner {
  background: url("https://static.cmereye.com/imgs/2023/03/2e1a6f1385669d6f.jpg") no-repeat;
}
}
@media (max-width: 768px){
  .section{
    width: 100vw;
    margin:0 auto;
    margin-bottom: 10vw;
  }
  .banner {
    background: url("https://static.cmereye.com/imgs/2022/12/efa3ddacc9443355.png") no-repeat;
    margin-top: 24vw;
    width: 100vw;
    height: 100vw;
    padding: 0 20px;
    font-size: 20px;
  }
}
</style>