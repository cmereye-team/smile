<template>
  <div class="tab flex justify-center page_container md:mb-28 pb-28" id="tab">
    <div class="justify-center memu">
      <div class="flex justify-center">
        <h2 id="faq-presbyopia">CLEAR-Vision</h2>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- <img src="@/asset/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('1') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">
                  如何判斷哪種老花矯視方式適合我？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            醫生會為你進行全面的檢查與溝通，來評估何種老花矯視是否適合你。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('2') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">
                  有近視就不會出現老花？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            老花是眼睛機能衰退的自然現象，由於眼睛晶體逐漸硬化及眼內肌肉老化令晶體的變焦功能衰退所致，令人看近物時難以聚焦，模糊視野。一般人約在40至50歲左右就會開始出現老花症狀，故有近視的人也會有老花。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('3') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">
                  何時做三焦晶體植入術比較好？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            三焦晶體主要用於40至50歲老花眼人群。如客人覺得老花眼已經影響正常生活或閱讀，需配戴老花眼鏡，此時，三焦晶體便是矯正遠中近視力的不錯選擇。而最合適自己的老花矯視方案，還是需由醫生進行全面檢查後制定。
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('4') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">
                  老花等於遠視嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            在光學上，老花是遠視的一種，但它們的成因不同。遠視主要成因是眼球過短，令景物聚焦了在視網膜後面。至於老花，則是由於晶體退化變硬，失去彈性及連繫著晶狀體的韌帶老化，令晶體的偏置功能下降，使近物時難以聚焦，出現模糊感。
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('5') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">
                  老花可以預防嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            現時尚未有有效的方法去防止其出現或惡化，但保持良好的用眼習慣有助減輕老花的徵狀和所造成的困擾。
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('6') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">
                  術後視力多久可以恢復？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            治療完成後第二天你就可以獲得良好的近距離視力，不戴老花鏡也可以輕鬆閱讀。中、遠距離的視力恢復通常在術後一週達到。之後經過數周，你的視野將會更清晰，並逐步適應多焦視覺狀態。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      currentIndex: 1, // 当前点击的tab的索引
    };
  },
  created() {},
  methods: {
    //判断是否打开
    judgeActive(data) {
      console.log(data);
      return this.activeNames.indexOf(data);
    },
    handleChange(val) {
      console.log(val);
    },
    exchangeTab(index) {
      // 点击tab切换
      this.currentIndex = index;
      // console.log(index);
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
}
.contents {
  display: flex;
}
.p2 {
  background-image: -webkit-linear-gradient(bottom, #fff, #fff);
}
.title1 {
  display: inline-block;
  width: 40px;
  height: 42px;
  background-image: url(~@/asset/image/free/Q.png);
}
.title2 {
  display: inline-block;
  width: 40px;
  height: 42px;
  background-image: url(~@/asset/image/free/Q2.png);
  color: #fff;
}
.downArrow1 {
  display: inline-block;
  width: 24px;
  height: 25px;
  background-image: url(~@/asset/image/free/+.png);
}
.downArrow2 {
  display: inline-block;
  width: 24px;
  height: 3px;
  background-image: url(~@/asset/image/free/-.png);
  // transform: rotate(-180deg);
}

.con_slider {
  // background: #f3fcfe;
  padding: 3vw 0;
  .link_more {
    background: linear-gradient(94.37deg, #4570b6 12.08%, #81dbec 92.9%);
    transition: all 0.5s;
    color: white;
    display: block;
    padding: 1vw;
    margin: 0 auto;
    width: 15vw;
    letter-spacing: 0.2vw;
    margin-top: 3vw;
    text-align: center;
    &:hover {
      animation: 3s ease-in 1s 2 reverse both paused slidein;
    }
  }
}
span {
  font-size: 14px;
}
.section_text {
  margin: 1vw 0;
}
.gdps .texts {
  font-size: 1.7em;
  padding: 1vw 0;
  text-align: center;
  background-color: #82dbed;
  color: #fff;
  border-radius: 10px 10px 0 0;
}
.tab {
  // margin-top: 10% !important;
  margin: 50px auto;
}
ul {
  margin: 0;
  padding: 0;
  height: 50px;
  position: absolute;
}
li {
  cursor: pointer;
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  line-height: 50px;
  float: left;
  border-bottom: 2px solid #ddd;
  // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
  border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
  margin: 0 5vw;
  width: 30vw;
}
p {
  font-weight: 800;
  font-size: 18px;
  background-image: -webkit-linear-gradient(bottom, #81dbec, #4570b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 20px;
}
.active {
  background-color: #f3fcfe;
  display: block;
}

.memu {
  margin-top: 180px;
}
@media screen and (max-width: 768px) {
  .mb-width {
    width: 72vw;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* or 111% */

    letter-spacing: 0.1em;

    background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .title1 {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url(~@/asset/image/free/Q.png) no-repeat;
    background-size: 35px 35px;
  }
  .title2 {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url(~@/asset/image/free/Q2.png) no-repeat;
    color: #fff;
    background-size: 35px 35px;
  }
  .downArrow1 {
    display: inline-block;
    width: 24px;
    height: 25px;
    background: url(~@/asset/image/free/+.png) no-repeat;
    background-size: 15px;
    padding: 10px;
    margin-left: 10px;
  }
  .downArrow2 {
    display: inline-block;
    width: 24px;
    height: 3px;
    background: url(~@/asset/image/free/-.png) no-repeat;
    background-size: 50%;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    background-color: #fff;
    padding: 0 2vw;
    justify-content: space-between;
    width: 1280px;
  }
  ::v-deep .el-collapse-item__header:hover {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    background-color: #f3fdff;
    padding: 0 2vw;
    justify-content: space-between;
    width: 1280px;
  }
}
</style>
