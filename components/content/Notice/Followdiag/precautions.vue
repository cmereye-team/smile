<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('notice.followdiag.precautions.h2_1')}}</h2>
    </div>
    <div class="flex justify-center">
      <iframe
        class="pcShow"
        width="999"
        height="563"
        src="https://www.youtube.com/embed/xqyN2Scg_OA"
        title="矯視後護理及注意事項💡💡💡"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        class="mbShow"
        width="100%"
        height="220"
        src="https://www.youtube.com/embed/xqyN2Scg_OA"
        title="矯視後護理及注意事項💡💡💡"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('notice.followdiag.precautions.h2_2')}}</h2>
    </div>
    <div class="text-box-detail" v-html="$t('notice.followdiag.precautions.detail')">
      
    </div>
    <div class="flex justify-center my-10">
      <a href="#" class="mbShow">
        <button>
          <div class="flex btn-yuyue">
            <img
              src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
              alt=""
              style="width: 12vw"
            />
            <div class="flex flex-col justify-center" style="padding: 0 10px">
              <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
              <span>6061 0511</span>
            </div>
          </div>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
  .text-box-detail {
    margin-bottom: 96px;
    /deep/ strong {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.1em;
      color: #6D6E71;
    }
    /deep/ p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 350;
      font-size: 16px;
      line-height: 30px;
      /* or 200% */

      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  .followBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 80vw;
    }
  }
}
</style>
