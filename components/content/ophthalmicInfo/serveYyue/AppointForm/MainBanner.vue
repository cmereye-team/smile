<template>
  <div class="main_banner">
    <banner class="banner">
      <template #title>
        {{ $t("home.headers.reservationService") }}
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
@media screen and (max-width: 768px) {
  ::v-deep(.section) {
    .des_box {
      width: 60.5vw !important;
      letter-spacing: 0.2vw;
      margin-top: -1vw;
      padding-left: 40px;
      font-size: 30px;
    }
  }

  .banner {
    background-image: url("https://static.cmereye.com/static/lkximg/smile_image/mb-bg.avif");
    background-position: top;
    background-size: 100%;
    width: 100vw;
    height: 100vw;
    margin: 22vw auto 5vw;
  }
}

@media screen and (min-width: 768px) {
  .banner {
    background-image: url("https://static.cmereye.com/static/lkximg/smile_image/bg.avif");
  }
}
</style>
