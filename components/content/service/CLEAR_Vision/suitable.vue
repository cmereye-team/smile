<template>
  <div class="page_container suitable_box">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('service.clearVision.suitable.h2')}}</h2>
    </div>
    <div class="flex justify-evenly suit_box mt-10">
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/6d192401e3e64882.png"
          alt=""
        />
        <span>{{$t('service.clearVision.suitable.span1')}}</span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/324ad7198a9d2632.png"
          alt=""
        />
        <span>{{$t('service.clearVision.suitable.span2')}}</span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/d2407e6ff4b3b56c.png"
          alt=""
        />
        <span v-html="$t('service.clearVision.suitable.span3')"></span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/af544fe01cbe5d65.png"
          alt=""
        />
        <span v-html="$t('service.clearVision.suitable.span4')"></span>
      </div>
    </div>
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
    margin-bottom: 190px;
    .suitable {
      /deep/ span {
        padding: 28px 0;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 35px;
        /* identical to box height, or 94% */

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
      /deep/ span {
        padding: 28px 0;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 35px;
        /* or 136% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
      }
    }
  }
}
</style>
