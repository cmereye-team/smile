<template>
  <div class="common-problem">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>常見問題</p>
          <p>common problem</p>
        </div>
      </template>
    </Banner>
    <div class="common-problem-box">
      <div>
        <H2Tag :title="['SMILE 微笑激光矯視']" />
        <Faq :faqLink="'/smile'" :faqList="smileList" />
      </div>
      <div>
        <H2Tag :title="['LASIK 激光矯視']" />
        <Faq :faqLink="'/smile-pro'" :faqList="lasikList" />
      </div>
      <div>
        <H2Tag :title="['ICL植入式隱形眼鏡']" />
        <Faq :faqLink="'/icl'" :faqList="iclList" />
      </div>
      <div>
        <H2Tag :title="['CLEAR-Vision']" />
        <Faq :faqLink="'/clear-vision'" :faqList="clearVisionList" />
      </div>
    </div>
    <businessHours />
    <Footer />
    <footers />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import footers from "@/components/commom/new_foot/footers.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import Faq from "@/components/content/new/faq.vue";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    footers,
    Banner,
    H2Tag,
    Faq,
  },
  data() {
    return {
      isMobile: false,
      smileList: [
        {
          q: "SMILE微笑激光矯視後可達至零度近視的效果？",
          f: [
            "有很多人以為矯視後會達致零度近視或散光，甚或較術前配戴眼鏡或隱型眼鏡有更清晰的視力，但其實這是錯誤的觀念。",
            "矯視成功標準：如達到矯視前定立的目標度數的＋/－75度之內屬成功；低於＋/－75度屬正常視力範圍。",
            "據文獻統計，矯視後3個月度數＋/－100度以內的成功率接近100%；若矯視後度數超＋/－100度，可選擇進行增進治療。",
          ],
        },
        {
          q: "接受SMILE微笑激光矯視後會反彈嗎？",
          f: [
            "醫生建議客人如半年內的視力度數穩定才接受矯視。SMILE微笑激光矯視切口較小，角膜較完整，一般來說反彈的機會較低。然而，度數突然變化可由其他原因引起，應及早諮詢醫生。",
          ],
        },
        {
          q: "如我適合做SMILE微笑激光矯視，是否可以立即安排矯視？",
          f: [
            "我們建議客人至少接受兩天的全面眼睛檢查，才能以準確數據去制定適切的矯視方案。因此客人在接受第一天眼睛檢查前，先停止佩戴隱形眼鏡一段時間。",
            "· 軟性隱形眼鏡 (不含散光)：停戴至少一星期<br />· 軟性隱形眼鏡 (含散光)：停戴至少兩星期<br />·硬性隱形眼鏡：停戴至少一個月 <br />·矯視隱形眼鏡：停戴至少三個月 <br />·接受第一天檢查後，最快可預約第二天眼睛檢查及同日矯視。",
          ],
        },
        {
          q: "SMILE微笑激光矯視和LASIK激光矯視有何分別？",
          f: [
            "SMILE微笑激光矯視是嶄新激光矯視技術，改良了LASIK激光矯視的限制。例如LASIK激光矯視需要在角膜上切一片角膜薄片(Corneal flap，或稱角膜瓣) 才能進行矯視，因此切口較SMILE微笑激光矯視大。而SMILE微笑激光矯視只需要切開一個2-4mm的小切口，無需揭開角膜瓣，切口面積減少近80 %。因此，術後眼乾情況及感染機會較低，康復時間較快，亦大大降低了角膜瓣移位的問題。",
          ],
        },
        {
          q: "進行SMILE微笑激光矯視會疼痛嗎？",
          f: [
            "醫生會用麻醉眼藥水減低眼睛的敏感和疼痛感，因此客人不會有太大感覺。矯視過程最快能在15分鐘內完成，少有不適。",
          ],
        },
        {
          q: "進行SMILE微笑激光矯視過程要多久？",
          f: [
            "SMILE微笑激光矯視最快一般能在15分鐘內完成，事前的準備及檢查需時，矯視當日客人需在中心逗留大概2小時。",
          ],
        },
        {
          q: "相對LASIK激光矯視，SMILE微笑激光矯視歷史較短，是否有足夠臨床經驗？",
          f: [
            "SMILE微笑激光矯視在全球有累積超過200萬成功案例。SMILE為德國蔡司先進技術，於2011年得到歐盟認可，並2016年獲美國FDA的認可，FDA 臨床結果顯示安全穩定和有效性極高。88%的客人在術後6個月的裸眼視力達到1.0以上。",
          ],
        },
        {
          q: "接受SMILE微笑激光矯視後會否提早出現老花？",
          f: [
            "老花是由晶體老化或睫狀肌鬆弛所致，是正常眼睛衰退現象，一般在40-50歲左右出現，與矯視沒太大關係。",
          ],
        },
        {
          q: "有不適合接受SMILE微笑激光矯視的個案嗎？",
          f: [
            "一般而言，不適合接受激光矯視人士包括：",
            "· 眼球發育未完成，近視度數未穩定<br />· 角膜太薄或度數過深<br />· 淚液分泌過少<br />· 患有眼疾如青光眼或視網膜疾病<br />· 角膜有感染，例如發炎或曾受傷<br />· 患有自體免疫疾病，例如：風濕性關節炎或紅斑狼瘡<br />· 需要長期服用類固醇<br />· 懷孕婦女",
          ],
        },
        {
          q: "在醫院接受SMILE微笑激光矯視會否較佳？",
          f: [
            "SMILE微笑激光矯視是一項微創技術，只用麻醉眼藥水而不需全身麻醉，亦不需留院觀察。本診所設有多間國際標準的無菌手術室、擁有先進檢測和矯視儀器，安全、可靠。",
          ],
        },
        {
          q: "SMILE微笑激光矯視有風險嗎？",
          f: [
            "所有手術都帶有風險，相對而言，矯視風險較為低。一般不理想的術後情況有：矯正不足/過度、夜視能力降低、眩光和乾眼等。然而，因矯視引起的併發症不常見，在極少的情況下，有機會發生角膜層間發炎、細菌感染等。",
          ],
        },
        {
          q: "矯視技術如此先進，為甚麼有許多醫生仍佩戴眼鏡？",
          f: [
            "根據白內障及矯視手術期刊(Journal of Cataract and RefractiveSurgery)於2016年的一項調查，眼科醫生比一般大眾接受矯視的比例高出接近5倍，顯示許多眼科專科醫生對矯視技術表示信任，並已接受矯視，擺脫眼鏡束縛。",
          ],
        },
        {
          q: "接受過SMILE微笑激光矯視，之後仍可以接受其他眼部手術嗎？",
          f: [
            "可以，SMILE微笑激光矯視只改變角膜弧度，並不會對其他眼部組織構成影響。",
          ],
        },
        {
          q: "甚麼人需要接受SMILE Xtra或角膜膠原交聯術 (Cross-linking)？",
          f: [
            "SMILE Xtra是一種角膜膠原交聯術，它適用於角膜過薄、度數過深、懷疑有潛在錐形角膜風險的客人。眼科專科醫生會為客人進行評估，決定是否有需要額外進行角膜膠原交聯術，才進行矯視。醫生會為客人的眼睛滴上核黃素 (一種維生素) 眼溶液，然後以UVA燈照射眼睛，以達成角膜交聯，強化角膜。",
            "角膜膠原交聯術可與SMILE微笑激光矯視同時進行。",
          ],
        },
      ],
      lasikList: [
        {
          q: "進行LASIK激光矯視過程要多久？",
          f: [
            "LASIK激光矯視過程每隻眼大概10分鐘，但因事前的準備及檢查需時，矯視當日患者需於中心逗留大概兩至三小時。",
          ],
        },
        {
          q: "進行LASIK激光矯視疼痛嗎？",
          f: [
            "醫生會使用麻醉眼藥水來減低眼睛的敏感度，因此患者不會有太大感覺。",
          ],
        },
        {
          q: "接受LASIK激光矯視後會否提早出現老花？",
          f: [
            "老花是正常現象，一般人在40歲-50歲後便會出現，由於晶體老化或睫狀肌鬆弛，與矯視沒太大關係。",
          ],
        },
        {
          q: "有不適合接受LASIK激光矯視的個案嗎？",
          f: [
            "一般而言，不適合接受激光矯視的人士包括：",
            "· 眼球發育未完成，近視度數未穩定<br />· 角膜太薄或度數過深<br />· 淚液分泌過少<br />· 患有眼疾如青光眼或視網膜疾病<br />· 角膜有感染，例如發炎或曾受傷<br />· 患有自體免疫疾病而病及眼睛，例如風濕性關節炎或姐斑狼瘡<br />· 需要長期服用類固醇 <br />· 懷孕婦女",
          ],
        },
        {
          q: "在醫院接受LASIK激光矯視會否較佳？",
          f: [
            "LASIK激光矯視是項微創療程，不需全身麻醉，只用麻醉眼藥水，正常情況也不需留院觀察。本診所設有多間國際標準的無菌手術室、先進的檢測和矯視儀器，絕對安全、可靠。",
          ],
        },
        {
          q: "LASIK激光矯視有風險嗎？",
          f: [
            "所有手術都帶有風險，相對而言矯視風險較為低。一般常見的情況是：矯正不足/ 過度、夜視能力降低、眩光和乾眼等。因矯視而引起的併發症不常見，在極少的情況下有機會發生角膜層板問題、細菌感染等。",
          ],
        },
        {
          q: "如在LASIK激光矯視過程當中貶眼，會影響矯視效果嗎？",
          f: [
            "不會，醫生會局部麻醉患者雙眼，並使用儀器固定眼睛，在醫護人員的溫馨提示下，患者可安心接受矯視。",
          ],
        },
        {
          q: "接受LASIK激光矯視當晚，可看電視或使用電腦嗎？",
          f: [
            "可以，但由於術後當天眼睛會比較疲累，醫生建議首24小時術後請回家閉目休息或睡覺4-6小時，仰卧為佳，並戴上本中心提供的護眼罩，以免碰傷眼角膜。",
          ],
        },
        {
          q: "接受LASIK激光矯視後，當天可搭飛機嗎？",
          f: [
            "理論上是可以的，激光矯視後的眼睛，不會受氣壓所影響，搭飛機是沒有問題的。不過，主診醫生一般都會建議患者在矯視後翌日覆診一次，以確保安全。",
          ],
        },
        {
          q: "接受LASIK激光矯視後，當天可以洗頭嗎？",
          f: [
            "醫生建議即日不要洗頭，避免不小心有污水入眼。若果污水入眼，可使用由醫生配方的眼藥水，並儘快跟診所聯絡作跟進。",
          ],
        },
        {
          q: "接受LASIK激光矯視前後需要戒口嗎？",
          f: ["不需要，激光矯視和進食並無任何關係。"],
        },
        {
          q: "斜視能做LASIK激光矯視嗎？",
          f: [
            "斜視手術與激光矯視本身並不衝突， 我們建議18歲以下患者戴眼鏡去矯正斜視。 18歲以上的需個別考慮情況。對於調節性斜視，可考慮先做視力矯正，再治療斜視。針對這種情況，如果不希望佩戴眼鏡提高視力便建議可以做激光矯視。其他情況的斜視，因為斜視本身的問題已明顯影響患者生活質量，且做近視眼矯視並不會改善原有的斜視情況，就不會給予首選推薦。",
          ],
        },
        {
          q: "接受過激光矯視，之後仍可以接受其他眼部手術嗎？",
          f: ["可以， LASIK激光矯視只改變角膜弧度，沒有影響眼部其他組織。"],
        },
        {
          q: "哪類型的患者，需要接受LASIK Xtra 或角膜膠原交聯術(Cross-linking)？",
          f: [
            "LASIK Xtra 是一種角膜膠原交聯術，它適用於角膜太薄、度數過深、患有錐形角膜或角膜退化的患者。眼科醫生會評估患者是否需要額外進行角膜膠原交聯術，才進行矯視。醫生會為患耆眼睛滴上核黃素 (一種維生素) 眼溶液，然後以UVA燈照射眼睛，以達成角膜交聯，增加角膜強度，有效降低患者角膜擴張的風險。",
            "角膜膠原交聯術可與LASIK激光矯視同時進行，一般來說，先進行前者，隨後便可進行矯視。",
          ],
        },
      ],
      iclList: [
        {
          q: "ICL植入式隱形眼鏡的適用矯正範圍是？",
          f: [
            "ICL植入式隱形眼鏡可用於矯正近視1800度以下、遠視1000度以下和散光600度以下。",
          ],
        },
        {
          q: "別人能看出我眼中的ICL植入式隱形眼鏡嗎？",
          f: ["由於晶體的位置位於眼內虹膜和晶狀體之間，所以外觀上看不出來。"],
        },
        {
          q: "ICL植入式隱形眼鏡後是否會有異物感？",
          f: [
            "ICL植入式隱形眼鏡可以與眼球達到高度生物相容，既不會引起炎症也不會有異物感。",
          ],
        },
        {
          q: "術後多久可以正常工作和生活？",
          f: [
            "ICL復原期短，矯正後第一天即可享受清晰視力，醫生屆時會提供具體建議。",
          ],
        },
        {
          q: "為甚麼ICL植入式隱形眼鏡會比SMILE微笑激光矯視及LASIK激光矯視貴呢?",
          f: [
            "我們中心使用的人工晶體均來自瑞士個體化訂製，是國際眼科高科技優質產品，跟自動化程度較大的SMILE微笑激光矯視和LASIK激光矯力，ICL對醫生的技術要求會更高。",
          ],
        },
      ],
      clearVisionList: [
        {
          q: "如何判斷哪種老花矯視方式適合我？",
          f: ["醫生會為你進行全面的檢查與溝通，來評估何種老花矯視是否適合你。"],
        },
        {
          q: "有近視就不會出現老花？",
          f: [
            "老花是眼睛機能衰退的自然現象，由於眼睛晶體逐漸硬化及眼內肌肉老化令晶體的變焦功能衰退所致，令人看近物時難以聚焦，模糊視野。一般人約在40至50歲左右就會開始出現老花症狀，故有近視的人也會有老花。",
          ],
        },
        {
          q: "何時做三焦晶體植入術比較好？",
          f: [
            "三焦晶體主要用於40至50歲老花眼人群。如客人覺得老花眼已經影響正常生活或閱讀，需配戴老花眼鏡，此時，三焦晶體便是矯正遠中近視力的不錯選擇。而最合適自己的老花矯視方案，還是需由醫生進行全面檢查後制定。",
          ],
        },
        {
          q: "老花等於遠視嗎？",
          f: [
            "在光學上，老花是遠視的一種，但它們的成因不同。遠視主要成因是眼球過短，令景物聚焦了在視網膜後面。至於老花，則是由於晶體退化變硬，失去彈性及連繫著晶狀體的韌帶老化，令晶體的偏置功能下降，使近物時難以聚焦，出現模糊感。",
          ],
        },
        {
          q: "老花可以預防嗎？",
          f: [
            "現時尚未有有效的方法去防止其出現或惡化，但保持良好的用眼習慣有助減輕老花的徵狀和所造成的困擾。",
          ],
        },
        {
          q: "術後視力多久可以恢復？",
          f: [
            "療完成後第二天你就可以獲得良好的近距離視力，不戴老花鏡也可以輕鬆閱讀。中、遠距離的視力恢復通常在術後一週達到。之後經過數周，你的視野將會更清晰，並逐步適應多焦視覺狀態。",
          ],
        },
      ],
    };
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .common-problem-box {
    margin-top: 80px;
    margin-bottom: 100px;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/026c68ae11d6468a.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
    border-radius: 55px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 150px;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
}
@media screen and (max-width: 767px) {
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/95273b11c2057d7b.png")
      no-repeat;
    background-size: 100% 100%;
    height: 330px;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
}
</style>