<template>
  <div class="page_container suitable_box">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('service.icl.suitable.h2')}}</h2>
    </div>
    <div class="flex justify-evenly suit_box mt-5">
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/6c23e8f2d3399087.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span1')"></span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/a8d803f942bc4256.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span2')"></span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/324ad7198a9d2632.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span3')"></span>
      </div>
    </div>
    <div class="flex justify-evenly suit_box mt-5">
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/d2407e6ff4b3b56c.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span4')"></span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/af544fe01cbe5d65.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span5')"></span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/a3154469f88e0c41.png"
          alt=""
        />
        <span v-html="$t('service.icl.suitable.span6')"></span>
      </div>
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
  color: #4570B6;
}
@media screen and (min-width: 768px) {
  .suit_box {
    // margin-bottom: 190px;
    display: flex;
    align-items: flex-start;
    img {
      height: 100px;
    }
    .suitable {
      width: 200px;
      display: flex;
      justify-content: center;
      /deep/ span {
        width: 100%;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 35px;
        /* or 125% */
        padding-top: 28px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #6D6E71;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .btn-yuyue {
    margin: 50px 0;
  }
  .suitable_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 16px;
  }
  .suit_box {
    margin-top: 30px;
    flex-wrap: wrap;
    align-items: flex-end;
    img {
      max-width: 60%;
    }
    .suitable {
      flex: 1;
      /*设置最小宽度，才会让元素排不下，导致换行排列*/
      min-width: calc((100% - 10px) / 2);
      /deep/ span {
        padding: 28px 0;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 25px;
        /* or 136% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
}
</style>
