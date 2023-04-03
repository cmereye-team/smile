<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>視後護理及注意事項</h2>
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
      <h2>矯視後護理</h2>
    </div>
    <div class="text-box-detail">
      <strong>矯視後當天內：</strong>
      <p>
        ·矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少。
      </p>
      <p>·按醫生指示定時服藥或滴眼藥水，維持四星期。</p>
      <p>·避免揉擦眼睛</p>
      <br />
      <strong>矯視後一星期內：</strong>
      <p>·避免梘水、自來水或污水進入眼睛</p>
      <p>·避免使用眼部化妝品</p>
      <br />
      <strong>矯視後一個月內：</strong>
      <p>如有需要可配戴太陽眼鏡以防止紫外線的刺激或沙塵入眼</p>
      <p>不可進行水上活動或浸熱水浴</p>
      <p>不可進行碰撞性運動，如足球、籃球等</p>
      <br />
      <p>*任何時候若眼睛突然出現劇痛或視力明顯下降等情況，必須盡快求醫。</p>
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
              <span>立即預約 / 查詢</span>
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
    strong {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.1em;
      color: #000000;
    }
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 350;
      font-size: 16px;
      line-height: 30px;
      /* or 200% */

      letter-spacing: 0.1em;

      color: #000000;
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
