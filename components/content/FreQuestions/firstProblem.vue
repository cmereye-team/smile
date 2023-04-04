<template>
  <div class="tab flex justify-center page_container" id="tab">
    <div class="justify-center memu">
      <div class="flex justify-center">
        <!-- <a href="#faq-presbyopia"> -->
        <h2 id="faq-smile">SMILE 微笑激光矯視</h2>
        <!-- </a> -->
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
                  SMILE微笑激光矯視後可達至零度近視的效果？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            有很多人以為矯視後會達致零度近視或散光，甚或較術前配戴眼鏡或隱型眼鏡有更清晰的視力，但其實這是錯誤的觀念。<br />
            矯視成功標準：如達到矯視前定立的目標度數的＋/－75度之內屬成功；低於＋/－75度屬正常視力範圍。<br />
            據文獻統計，矯視後3個月度數＋/－100度以內的成功率接近100%；若矯視後度數超＋/－100度，可選擇進行增進治療。<br />
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('2') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">
                  接受SMILE微笑激光矯視後會反彈嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            醫生建議客人如半年內的視力度數穩定才接受矯視。SMILE微笑激光矯視切口較小，角膜較完整，一般來說反彈的機會較低。然而，度數突然變化可由其他原因引起，應及早諮詢醫生。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('3') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">
                  如我適合做SMILE微笑激光矯視，是否可以立即安排矯視？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            我們建議客人至少接受兩天的全面眼睛檢查，才能以準確數據去制定適切的矯視方案。因此客人在接受第一天眼睛檢查前，先停止佩戴隱形眼鏡一段時間。
          </div>
          <div>
            · 軟性隱形眼鏡 (不含散光)：停戴至少一星期<br />
            · 軟性隱形眼鏡 (含散光)：停戴至少兩星期<br />
            · 硬性隱形眼鏡：停戴至少一個月<br />
            · 矯視隱形眼鏡：停戴至少三個月<br />
            · 接受第一天檢查後，最快可預約第二天眼睛檢查及同日矯視。
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('4') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">
                  SMILE微笑激光矯視和LASIK激光矯視有何分別？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            SMILE微笑激光矯視是嶄新激光矯視技術，改良了LASIK激光矯視的限制。例如LASIK激光矯視需要在角膜上切一片角膜薄片(Corneal
            flap，或稱角膜瓣)
            才能進行矯視，因此切口較SMILE微笑激光矯視大。而SMILE微笑激光矯視只需要切開一個2-4mm的小切口，無需揭開角膜瓣，切口面積減少近80
            %。因此，術後眼乾情況及感染機會較低，康復時間較快，亦大大降低了角膜瓣移位的問題。
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('5') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">
                  進行SMILE微笑激光矯視會疼痛嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            醫生會用麻醉眼藥水減低眼睛的敏感和疼痛感，因此客人不會有太大感覺。矯視過程最快能在5分鐘內完成，少有不適。
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('6') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">
                  進行SMILE微笑激光矯視過程要多久？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            SMILE微笑激光矯視最快一般能在5分鐘內完成，事前的準備及檢查需時，矯視當日客人需在中心逗留大概2至3小時。
          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('7') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('7') !== -1 ? 'p2' : 'p1'">
                  相對LASIK激光矯視，SMILE微笑激光矯視歷史較短，是否有足夠臨床經驗？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('7') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            SMILE微笑激光矯視在全球有累積超過200萬成功案例。SMILE為德國蔡司先進技術，於2011年得到歐盟認可，並2016年獲美國FDA的認可，FDA
            臨床結果顯示安全穩定和有效性極高。88%的客人在術後6個月的裸眼視力達到1.0以上。
          </div>
        </el-collapse-item>
        <el-collapse-item name="8">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('8') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('8') !== -1 ? 'p2' : 'p1'">
                  接受SMILE微笑激光矯視後會否提早出現老花？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('8') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            老花是由晶體老化或睫狀肌鬆弛所致，是正常眼睛衰退現象，一般在40-50歲左右出現，與矯視沒太大關係。
          </div>
        </el-collapse-item>
        <el-collapse-item name="9">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('9') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('9') !== -1 ? 'p2' : 'p1'">
                  有不適合接受SMILE微笑激光矯視的個案嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('9') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            一般而言，不適合接受激光矯視人士包括：<br />
            · 眼球發育未完成，近視度數未穩定<br />
            · 角膜太薄或度數過深<br />
            · 淚液分泌過少<br />
            · 患有眼疾如青光眼或視網膜疾病<br />
            · 角膜有感染，例如發炎或曾受傷<br />
            · 患有自體免疫疾病，例如：風濕性關節炎或紅斑狼瘡<br />
            · 需要長期服用類固醇<br />
            · 懷孕婦女
          </div>
        </el-collapse-item>
        <el-collapse-item name="10">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('10') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('10') !== -1 ? 'p2' : 'p1'">
                  在醫院接受SMILE微笑激光矯視會否較佳？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('10') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            SMILE微笑激光矯視是一項微創技術，只用麻醉眼藥水而不需全身麻醉，亦不需留院觀察。本診所設有多間國際標準的無菌手術室、擁有先進檢測和矯視儀器，安全、可靠。
          </div>
        </el-collapse-item>
        <el-collapse-item name="11">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('11') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('11') !== -1 ? 'p2' : 'p1'">
                  SMILE微笑激光矯視有風險嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('11') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            所有手術都帶有風險，相對而言，矯視風險較為低。一般不理想的術後情況有：矯正不足/過度、夜視能力降低、眩光和乾眼等。然而，因矯視引起的併發症不常見，在極少的情況下，有機會發生角膜層間發炎、細菌感染等。
          </div>
        </el-collapse-item>
        <el-collapse-item name="12">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('12') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('12') !== -1 ? 'p2' : 'p1'">
                  矯視技術如此先進，為甚麼有許多醫生仍佩戴眼鏡？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('12') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            根據白內障及矯視手術期刊(Journal of Cataract and
            RefractiveSurgery)於2016年的一項調查，眼科醫生比一般大眾接受矯視的比例高出接近5倍，顯示許多眼科專科醫生對矯視技術表示信任，並已接受矯視，擺脫眼鏡束縛。
          </div>
        </el-collapse-item>
        <el-collapse-item name="13">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('13') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('13') !== -1 ? 'p2' : 'p1'">
                  接受過SMILE微笑激光矯視，之後仍可以接受其他眼部手術嗎？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('13') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            可以，SMILE微笑激光矯視只改變角膜弧度，並不會對其他眼部組織構成影響。
          </div>
        </el-collapse-item>
        <el-collapse-item name="14">
          <template slot="title">
            <div class="contents">
              <!-- <img src="@/asset/image/free/Q.png" alt=""> -->
              <i :class="judgeActive('14') !== -1 ? 'title2' : 'title1'"></i>
              <div class="mb-width">
                <p :class="judgeActive('14') !== -1 ? 'p2' : 'p1'">
                  甚麼人需要接受SMILE Xtra或角膜膠原交聯術 (Cross-linking)？
                </p>
              </div>
            </div>
            <i
              :class="judgeActive('14') !== -1 ? 'downArrow2' : 'downArrow1'"
            ></i>
          </template>
          <div>
            SMILE
            Xtra是一種角膜膠原交聯術，它適用於角膜過薄、度數過深、懷疑有潛在錐形角膜風險的客人。眼科專科醫生會為客人進行評估，決定是否有需要額外進行角膜膠原交聯術，才進行矯視。醫生會為客人的眼睛滴上核黃素
            (一種維生素)
            眼溶液，然後以UVA燈照射眼睛，以達成角膜交聯，強化角膜。<br />
            角膜膠原交聯術可與SMILE微笑激光矯視同時進行。
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

.memu {
  margin-top: 5vw;
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
<style lang="scss">
@media screen and (max-width: 768px) {
  .el-collapse-item__header.is-active {
    background-color: #4570b6 !important;
    color: #fff !important;
  }
  i {
    justify-content: space-between;
  }
  .el-collapse-item__arrow {
    display: none;
  }
  .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    background-color: #f3fdff;
    padding: 0 2vw;
    justify-content: space-between;
    width: 100% !important;
  }
  .el-collapse-item__content {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 14px !important;
    line-height: 24px;

    padding-left: 58px;

    /* or 162% */

    letter-spacing: 0.1em;

    color: #000000;
  }
}
@media screen and (min-width: 768px) {
  .el-collapse-item__header.is-active {
    background-color: #4570b6 !important;
    color: #fff !important;
  }
  i {
    justify-content: space-between;
  }
  .el-collapse-item__arrow {
    display: none;
  }

  .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding: 20px;
    background-color: #dfdfdf;
  }
}
</style>
