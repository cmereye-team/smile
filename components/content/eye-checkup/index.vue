<template>
 <div class="page_container">

 

    <div class="flex justify-center md:mt-14 mt-10">   
      <h2>預約術前眼睛檢查</h2>
    </div>
    <div class="jianc">
      <div class="jianc_box">
        <div class="box_text">
          <h3>線上預約術前眼睛檢查</h3>
          <p>
            請注意:
            到診檢查前，應停止佩戴隱形眼鏡，防止角膜被擠壓，影響量度數據。
          </p>
          <p>
            · 軟性隱形眼鏡 (不含散光)：7天前停止佩戴<br />
            · 軟性隱形眼鏡 (含散光)：14天前停止佩戴<br />
            · 硬性隱形眼鏡：30天前停止佩戴<br />
            · 矯視隱形眼鏡：90天前停止佩戴
          </p>
          <p class="md:mt-5">
            全面術前眼睛檢查項目包括：<br />
            屈光檢查<br />
            · Sirius: 角膜結構及瞳孔測量<br />
            · Pentacam:360全面角膜結構測量<br />
            · 淚水分泌測試<br />
            · OCT:黃斑及視網膜掃描 (如有需要)<br />
            · SLO:360全面眼底檢查<br />
            · 醫生會診：眼睛狀況評估及矯視方案建議
          </p>
          <p class="md:mt-5">
            術前眼睛檢查費用︰星期一至六 $100<br />
            *若成功預約矯視，會退回術前檢查費用<br />
          </p>
          
            <a
              class="gtm-yysqjj btn"
              href=" https://wa.me/85260610511"
              target="_blank"
              ><span
                ><button class="button_size_4">立即WhatsApp預約</button></span
              ></a
            >
          
        </div>
        <div class="box_img">
          <img
            src="https://smile.hkcmereye.com/wp-content/uploads/2020/05/5.19%E6%9C%AF%E5%89%8D%E6%A3%80%E6%9F%A5%E6%B5%81%E7%A8%8B-%E7%A1%AE%E7%A8%BF-01-1.png"
            alt=""
          />
        </div>
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
}
@media screen and (min-width: 768px) {
  .jianc {
    margin-bottom: 60px;
  }
  .btn {
    a {
      color: #0d508b;
    }
    button {
      margin-top: 60px;
      color: #fff;
      background: linear-gradient(90.24deg, #4B7BBC 10.22%, #7ED7EA 100%);
      display: inline-block;
      padding: 11px 20px;
      margin-bottom: 15px;
      cursor: pointer;
      margin-right: 7px;
      border: 0;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }
  }
  .jianc_box {
    display: flex;
  }
  .box_text {
    flex: 0.8;
    p {
      padding-top: 10px;
    }
  }
  .box_img {
    flex: 0.6;
  }
}
@media screen and (max-width: 768px) {
  .jianc {
    margin-bottom: 60px;
  }
  .btn {
    a {
      color: #0d508b;
    }
    button {
      margin-top: 60px;
      color: #fff;
      background-color: #0d508b !important;
      display: inline-block;
      padding: 11px 20px;
      margin-bottom: 15px;
      cursor: pointer;
      margin-right: 7px;
      border: 0;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }
  }

  .box_text {
    flex: 0.8;
    p {
      padding-top: 10px;
    }
  }
  .box_img {
    flex: 0.6;
  }
}
</style>
