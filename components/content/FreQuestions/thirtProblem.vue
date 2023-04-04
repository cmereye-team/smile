<template>
  <div class="tab flex justify-center page_container md:mb-28" id="tab">
    <div class="justify-center memu">
      <div class="flex justify-center">
        <h2 id="faq-icl">ICL植入式隱形眼鏡</h2>
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
                  ICL植入式隱形眼鏡的適用矯正範圍是？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            ICL植入式隱形眼鏡可用於矯正近視1800度以下、遠視1000度以下和散光600度以下。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('2') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">
                  別人能看出我眼中的ICL植入式隱形眼鏡嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            由於晶體的位置位於眼內虹膜和晶狀體之間，所以外觀上看不出來。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('3') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">
                  ICL植入式隱形眼鏡後是否會有異物感？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            ICL植入式隱形眼鏡可以與眼球達到高度生物相容，既不會引起炎症也不會有異物感。
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('4') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">
                  術後多久可以正常工作和生活？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            ICL復原期短，矯正後第一天即可享受清晰視力，醫生屆時會提供具體建議。
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('5') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">
                  為甚麼ICL植入式隱形眼鏡會比SMILE微笑激光矯視及LASIK激光矯視貴呢?
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            我們中心使用的人工晶體均來自瑞士個體化訂製，是國際眼科高科技優質產品，跟自動化程度較大的SMILE微笑激光矯視和LASIK激光矯力，ICL對醫生的技術要求會更高。
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
      // console.log(data);
      return this.activeNames.indexOf(data);
    },
    handleChange(val) {
      // console.log(val);
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
  margin: 0px auto;
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


@media screen and (max-width: 768px) {
  .memu {
    margin-top: 90px;
  }
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
  .memu {
    margin-top: 180px;
  }
}
</style>
