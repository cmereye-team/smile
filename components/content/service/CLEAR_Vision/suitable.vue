<template>
  <div class="page_container suitable_box">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>合適對象</h2>
    </div>
    <div class="flex justify-evenly suit_box mt-10">
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/6d192401e3e64882.png"
          alt=""
        />
        <span>40歲或以上</span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/324ad7198a9d2632.png"
          alt=""
        />
        <span>熱愛運動</span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/d2407e6ff4b3b56c.png"
          alt=""
        />
        <span>佩戴多副矯正度數眼鏡<br />(近視、遠視、散光、老花)</span>
      </div>
      <div class="flex flex-col items-center suitable">
        <img
          src="https://static.cmereye.com/imgs/2022/12/af544fe01cbe5d65.png"
          alt=""
        />
        <span>不愛佩戴眼鏡或<br />隱形眼鏡</span>
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
            <span>立即預約 / 查詢</span>
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
}
@media screen and (min-width: 768px) {
  .suit_box {
    margin-bottom: 190px;
    .suitable {
      span {
        padding: 28px 0;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 15px;
        /* identical to box height, or 94% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
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
      span {
        padding: 28px 0;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 15px;
        /* or 136% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
  }
}
</style>
