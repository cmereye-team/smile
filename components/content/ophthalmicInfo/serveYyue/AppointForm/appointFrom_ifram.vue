<template>
  <div class="page_container bookingifram">
    <iframe
      v-if="$i18n.locale === 'en'"
      width="100%"
      height="1600"
      src="https://smilecms.hkcmereye.com/en/bookingiframeng"
    ></iframe>
    <iframe
      v-else
      width="100%"
      height="1600"
      src="https://smilecms.hkcmereye.com/bookingifram"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNum:0,
      // url:'https://smilecms.hkcmereye.com/bookingifram',
      // newUrl:'',
    };
  },
  created() {},
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
}

@media screen and (max-width: 768px) {
  .bookingifram {
    padding: 0 !important;
  }
}
</style>
