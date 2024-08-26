<template>
  <div id="faq-smile">
    <div>
      <div class="flex justify-center">
        <h2>{{ $t("home.headers.commonProblemChild_1") }}</h2>
      </div>

      <div class="problem">
        <div>
          <H2Tag :title="['SMILE 微笑激光矯視']" />
          <client-only>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item name="1">
                <template slot="title">
                  <div>SMILE微笑激光矯視後可達至零度近視的效果？</div>
                </template>
                <div>
                  有很多人以為矯視後會達致零度近視或散光，甚或較術前配戴眼鏡或隱型眼鏡有更清晰的視力，但其實這是錯誤的觀念。
                  矯視成功標準：如達到矯視前定立的目標度數的＋/－75度之內屬成功；低於＋/－75度屬正常視力範圍。
                  據文獻統計，矯視後3個月度數＋/－100度以內的成功率接近100%；若矯視後度數超＋/－100度，可選擇進行增進治療。
                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title">
                  <div>接受SMILE微笑激光矯視後會反彈嗎？</div>
                </template>
                <div>
                  醫生建議客人如半年內的視力度數穩定才接受矯視。SMILE微笑激光矯視切口較小，角膜較完整，一般來說反彈的機會較低。然而，度數突然變化可由其他原因引起，應及早諮詢醫生。
                </div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title">
                  <div>如我適合做SMILE微笑激光矯視，是否可以立即安排矯視？</div>
                </template>
                <div>
                  我們建議客人至少接受兩天的全面眼睛檢查，才能以準確數據去制定適切的矯視方案。因此客人在接受第一天眼睛檢查前，先停止佩戴隱形眼鏡一段時間。
                  · 軟性隱形眼鏡 (不含散光)：停戴至少一星期 · 軟性隱形眼鏡
                  (含散光)：停戴至少兩星期 · 硬性隱形眼鏡：停戴至少一個月 ·
                  矯視隱形眼鏡：停戴至少三個月 ·
                  接受第一天檢查後，最快可預約第二天眼睛檢查及同日矯視。
                </div>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template slot="title">
                  <div>SMILE微笑激光矯視和LASIK激光矯視有何分別？</div>
                </template>
                <div>
                  SMILE微笑激光矯視是嶄新激光矯視技術，改良了LASIK激光矯視的限制。例如LASIK激光矯視需要在角膜上切一片角膜薄片
                </div>
              </el-collapse-item>
              <el-collapse-item name="5">
                <template slot="title">
                  <div>進行SMILE微笑激光矯視會疼痛嗎？</div>
                </template>
                <div>
                  醫生會用麻醉眼藥水減低眼睛的敏感和疼痛感，因此客人不會有太大感覺。矯視過程最快能在15分鐘內完成，少有不適。
                </div>
              </el-collapse-item>
              <el-collapse-item name="6">
                <template slot="title">
                  <div>進行SMILE微笑激光矯視過程要多久？</div>
                </template>
                <div>
                  SMILE微笑激光矯視最快一般能在15分鐘內完成，事前的準備及檢查需時，矯視當日客人需在中心逗留大概2小時。
                </div>
              </el-collapse-item>
              <el-collapse-item name="7">
                <template slot="title">
                  <div>
                    相對LASIK激光矯視，SMILE微笑激光矯視歷史較短，是否有足夠臨床經驗？
                  </div>
                </template>
                <div>
                  SMILE微笑激光矯視在全球有累積超過200萬成功案例。SMILE為德國蔡司先進技術，於2011年得到歐盟認可，並2016年獲美國FDA的認可，FDA
                </div>
              </el-collapse-item>
              <el-collapse-item name="8">
                <template slot="title">
                  <div>接受SMILE微笑激光矯視後會否提早出現老花？</div>
                </template>
                <div>
                  老花是由晶體老化或睫狀肌鬆弛所致，是正常眼睛衰退現象，一般在40
                </div>
              </el-collapse-item>
              <el-collapse-item name="9">
                <template slot="title">
                  <div>有不適合接受SMILE微笑激光矯視的個案嗎？</div>
                </template>
                <div>
                  一般而言，不適合接受激光矯視人士包括： ·
                  眼球發育未完成，近視度數未穩定 · 角膜太薄或度數過深 ·
                  淚液分泌過少 · 患有眼疾如青光眼或視網膜疾病 ·
                  角膜有感染，例如發炎或曾受傷 ·
                  患有自體免疫疾病，例如：風濕性關節炎或紅斑狼瘡 ·
                  需要長期服用類固醇 · 懷孕婦女
                </div>
              </el-collapse-item>
              <el-collapse-item name="10">
                <template slot="title">
                  <div>在醫院接受SMILE微笑激光矯視會否較佳？</div>
                </template>
                <div>
                  SMILE微笑激光矯視是一項微創技術，只用麻醉眼藥水而不需全身麻醉，亦不需留院觀察。本診所設有多間國際標準的無菌手術室、擁有先進檢測和矯視儀器，安全、可靠。
                </div>
              </el-collapse-item>
              <el-collapse-item name="11">
                <template slot="title">
                  <div>SMILE微笑激光矯視有風險嗎？</div>
                </template>
                <div>
                  所有手術都帶有風險，相對而言，矯視風險較為低。一般不理想的術後情況有：矯正不足/過度、夜視能力降低、眩光和乾眼等。然而，因矯視引起的併發症不常見，在極少的情況下，有機會發生角膜層間發炎、細菌感染等。
                </div>
              </el-collapse-item>
              <el-collapse-item name="12">
                <template slot="title">
                  <div>矯視技術如此先進，為甚麼有許多醫生仍佩戴眼鏡？</div>
                </template>
                <div>
                  根據白內障及矯視手術期刊(Journal of Cataract and
                  RefractiveSurgery)於2016年的一項調查，眼科醫生比一般大眾接受矯視的比例高出接近5倍，顯示許多眼科專科醫生對矯視技術表示信任，並已接受矯視，擺脫眼鏡束縛。
                </div>
              </el-collapse-item>
              <el-collapse-item name="13">
                <template slot="title">
                  <div>
                    接受過SMILE微笑激光矯視，之後仍可以接受其他眼部手術嗎？
                  </div>
                </template>
                <div>
                  可以，SMILE微笑激光矯視只改變角膜弧度，並不會對其他眼部組織構成影響。
                </div>
              </el-collapse-item>
              <el-collapse-item name="14">
                <template slot="title">
                  <div>
                    甚麼人需要接受SMILE Xtra或角膜膠原交聯術 (Cross-linking)？
                  </div>
                </template>
                <div>
                  SMILE
                  Xtra是一種角膜膠原交聯術，它適用於角膜過薄、度數過深、懷疑有潛在錐形角膜風險的客人。眼科專科醫生會為客人進行評估，決定是否有需要額外進行角膜膠原交聯術，才進行矯視。醫生會為客人的眼睛滴上核黃素
                  (一種維生素)
                  眼溶液，然後以UVA燈照射眼睛，以達成角膜交聯，強化角膜。角膜膠原交聯術可與SMILE微笑激光矯視同時進行。
                </div>
              </el-collapse-item>
            </el-collapse>
          </client-only>
        </div>
        <div>
          <H2Tag :title="['SMILE 微笑激光矯視']" />
          <client-only>
            <el-collapse v-model="activeName2" accordion>
              <el-collapse-item title="1111" name="1">
                <!-- <template slot="title"> -->
                <!-- <div>{{ item.title }}</div> -->

                <!-- </template> -->
                <!-- <div v-html="item.content"></div> -->
                <div>2222</div>
              </el-collapse-item>
            </el-collapse>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
  components: {
    H2Tag,
  },
  data() {
    return {
      activeName2: 1,
      activeName: 1,
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.problem {
  max-width: 900px;
  width: 100%;
  margin: 100px auto;
}
</style>