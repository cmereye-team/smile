<template>
  <div class="main_banner">
    <a
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(Event-ICLW01)%20CMER%20x%20STAAR%20Surgical%20ICL%E5%B0%88%E9%A1%8C%E8%AC%9B%E5%BA%A7"
    >
      <img
        data-src="https://static.cmereye.com/imgs/2024/12/4b575232ffe4557f.png"
        srcset="
          https://static.cmereye.com/imgs/2024/12/b86d1e9a7f933f3e.png 768w,
          https://static.cmereye.com/imgs/2024/12/4b575232ffe4557f.png
        "
        src="https://static.cmereye.com/imgs/2024/12/4b575232ffe4557f.png"
        alt=""
      />
    </a>
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
@media screen and (min-width: 768px) {
  .main_banner {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    // position: relative;
    margin-top: 130px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}
@media screen and (max-width: 768px) {
  .main_banner {
    display: flex;
    margin-top: 80px;
    width: 100vw;
    height: 100vw;
    & > a {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
