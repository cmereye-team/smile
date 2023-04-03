<template>
  <div class="main_banner">
    <banner class="banner" @click="bannerClick"></banner>
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
    bannerClick() {
      console.log("12");
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .banner {
    background: url("https://static.cmereye.com/imgs/2023/02/0c013e3465b3b38d.jpg")
      no-repeat;
    cursor: pointer;
  }
}
@media (max-width: 768px) {
  .banner {
    height: 102vw !important;
  }
  .section {
    height: 102vw !important;
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
  .banner {
    background: url("https://static.cmereye.com/imgs/2023/02/699e0cf835f76a5d.jpg")
      no-repeat;
    background-size: 100%;
  }
}
</style>
