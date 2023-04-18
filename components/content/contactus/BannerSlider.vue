<template>
  <div class="main_banner">
    <banner class="banner">
      <template #title>
        {{ $t('home.headers.contactUs') }}
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
  methods: {},
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .banner {
    // background: url("https://static.cmereye.com/imgs/2023/04/550ed5acd6097671.jpg") no-repeat;
    background: url("https://static.cmereye.com/static/lkximg/smile_image/ContactUsBanner_pc.avif") no-repeat;
  }
}
@media (max-width: 768px) {
  .section {
    width: 100;
    margin: 0 auto;
    margin-bottom: 10vw;
  }
  .banner {
    background: url("https://static.cmereye.com/static/lkximg/smile_image/ContactUsBanner_mb.avif") no-repeat;
  }
}
</style>
