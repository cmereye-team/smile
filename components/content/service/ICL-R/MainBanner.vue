<template>
  <div class="main_banner">
    <!-- <banner class="banner"> -->
    <!-- <template v-slot:title>
        <div class="pcShow">
          <h3 style="font-size: 28px">{{$t('service.icl.mainBanner.p1')}}</h3>
          <span>(ICL implantable contact lenses)</span>
        </div>
        <div class="mbShow banner_serve">
          <p>{{$t('service.icl.mainBanner.p1')}}</p>
          <span>(ICL implantable contact lenses)</span>
        </div>
      </template>
      <template v-slot:des>
        <div class="pcShow">
          {{$t('service.icl.mainBanner.p2')}}
        </div></template
      > -->
    <!-- </banner> -->
    <img
      data-src="https://static.cmereye.com/imgs/2024/03/a40fb571fac88f83.png"
      srcset="
        https://static.cmereye.com/imgs/2024/03/1e33264668477fdf.png 768w,
        https://static.cmereye.com/imgs/2024/03/a40fb571fac88f83.png
      "
      src="https://static.cmereye.com/imgs/2024/03/a40fb571fac88f83.png"
      alt=""
    />
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
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 61px;
    overflow: hidden;
    position: relative;
    margin-top: 130px;
  }
}
@media screen and (max-width: 768px) {
  .main_banner {
    margin-top: 110px;
    width: 100%;
    &>img {
      width: 100%;
    }
  }
}


</style>
