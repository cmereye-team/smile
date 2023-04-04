<template>
  <div class="tab flex justify-center page_container" id="tab">
    <div class="justify-center memu">
      <div class="flex justify-center">
        <h2 id="faq-lasik">LASIK激光矯視</h2>
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
                  進行LASIK激光矯視過程要多久？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            LASIK激光矯視過程每隻眼大概10分鐘，但因事前的準備及檢查需時，矯視當日患者需於中心逗留大概兩至三小時。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('2') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">
                  進行LASIK激光矯視疼痛嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            醫生會使用麻醉眼藥水來減低眼睛的敏感度，因此患者不會有太大感覺。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('3') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">
                  接受LASIK激光矯視後會否提早出現老花？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            老花是正常現象，一般人在40歲-50歲後便會出現，由於晶體老化或睫狀肌鬆弛，與矯視沒太大關係。
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('4') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">
                  有不適合接受LASIK激光矯視的個案嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>一般而言，不適合接受激光矯視的人士包括：</div>
          <div>
            · 眼球發育未完成，近視度數未穩定 <br />
            · 角膜太薄或度數過深<br />
            · 淚液分泌過少<br />
            · 患有眼疾如青光眼或視網膜疾病<br />
            · 角膜有感染，例如發炎或曾受傷<br />
            · 患有自體免疫疾病而病及眼睛，例如風濕性關節炎或姐斑狼瘡<br />
            · 需要長期服用類固醇 · 懷孕婦女
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('5') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">
                  在醫院接受LASIK激光矯視會否較佳？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            LASIK激光矯視是項微創療程，不需全身麻醉，只用麻醉眼藥水，正常情況也不需留院觀察。本診所設有多間國際標準的無菌手術室、先進的檢測和矯視儀器，絕對安全、可靠。
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('6') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">
                  LASIK激光矯視有風險嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            所有手術都帶有風險，相對而言矯視風險較為低。一般常見的情況是：矯正不足/
            過度、夜視能力降低、眩光和乾眼等。因矯視而引起的併發症不常見，在極少的情況下有機會發生角膜層板問題、細菌感染等。
          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('7') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('7') !== -1 ? 'p2' : 'p1'">
                  如在LASIK激光矯視過程當中貶眼，會影響矯視效果嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('7') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            不會，醫生會局部麻醉患者雙眼，並使用儀器固定眼睛，在醫護人員的溫馨提示下，患者可安心接受矯視。
          </div>
        </el-collapse-item>
        <el-collapse-item name="8">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('8') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('8') !== -1 ? 'p2' : 'p1'">
                  接受LASIK激光矯視當晚，可看電視或使用電腦嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('8') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            可以，但由於術後當天眼睛會比較疲累，醫生建議首24小時術後請回家閉目休息或睡覺4-6小時，仰卧為佳，並戴上本中心提供的護眼罩，以免碰傷眼角膜。。
          </div>
        </el-collapse-item>
        <el-collapse-item name="9">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('9') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('9') !== -1 ? 'p2' : 'p1'">
                  接受LASIK激光矯視後，當天可搭飛機嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('9') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            理論上是可以的，激光矯視後的眼睛，不會受氣壓所影響，搭飛機是沒有問題的。不過，主診醫生一般都會建議患者在矯視後翌日覆診一次，以確保安全。
          </div>
        </el-collapse-item>
        <el-collapse-item name="10">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('10') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('10') !== -1 ? 'p2' : 'p1'">
                  接受LASIK激光矯視後，當天可以洗頭嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('10') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            醫生建議即日不要洗頭，避免不小心有污水入眼。若果污水入眼，可使用由醫生配方的眼藥水，並儘快跟診所聯絡作跟進。
          </div>
        </el-collapse-item>
        <el-collapse-item name="11">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('11') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('11') !== -1 ? 'p2' : 'p1'">
                  接受LASIK激光矯視前後需要戒口嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('11') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>不需要，激光矯視和進食並無任何關係。</div>
        </el-collapse-item>
        <el-collapse-item name="12">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('12') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('12') !== -1 ? 'p2' : 'p1'">
                  斜視能做LASIK激光矯視嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('12') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            斜視手術與激光矯視本身並不衝突，
            我們建議18歲以下患者戴眼鏡去矯正斜視。
            18歲以上的需個別考慮情況。對於調節性斜視，可考慮先做視力矯正，再治療斜視。針對這種情況，如果不希望佩戴眼鏡提高視力便建議可以做激光矯視。其他情況的斜視，因為斜視本身的問題已明顯影響患者生活質量，且做近視眼矯視並不會改善原有的斜視情況，就不會給予首選推薦。
          </div>
        </el-collapse-item>
        <el-collapse-item name="13">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('13') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('13') !== -1 ? 'p2' : 'p1'">
                  接受過激光矯視，之後仍可以接受其他眼部手術嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('13') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>可以， LASIK激光矯視只改變角膜弧度，沒有影響眼部其他組織。</div>
        </el-collapse-item>
        <el-collapse-item name="14">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('14') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('14') !== -1 ? 'p2' : 'p1'">
                  哪類型的患者，需要接受LASIK Xtra 或角膜膠原交聯術
                  (Cross-linking)？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('14') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            LASIK Xtra
            是一種角膜膠原交聯術，它適用於角膜太薄、度數過深、患有錐形角膜或角膜退化的患者。眼科醫生會評估患者是否需要額外進行角膜膠原交聯術，才進行矯視。醫生會為患耆眼睛滴上核黃素
            (一種維生素)
            眼溶液，然後以UVA燈照射眼睛，以達成角膜交聯，增加角膜強度，有效降低患者角膜擴張的風險。<br />

            角膜膠原交聯術可與LASIK激光矯視同時進行，一般來說，先進行前者，隨後便可進行矯視。
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
