<template>
  <div class="smile-pro">
    smile-pro
    <Banner>
      <template #banner>
        <div class="banner-img">
          <p>SMILE 微笑激光矯視</p>
          <p>Small Incision Lenticule Extraction</p>
        </div>
      </template>
    </Banner>
  </div>
</template>
<script>
import Banner from "@/components/Publice/Banner.vue";
export default {
  components: {
    Banner,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .smile-pro {
    max-width: 1270px;
    margin: 0 auto;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/97390f8ba27fb627.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
  }
}
@media screen and (max-width: 767px) {
}
</style>