<template>
  <div class="section">
    <div
      class="flex justify-center equip md:pt-20 md:pb-0 py-10 page_container"
    >
      <h2>中心設備</h2>
    </div>
    <div class="bacground-equi">
      <img
        src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png"
        alt=""
      />
    </div>
    <div class="bacground-equi-right pcShow">
      <img
        src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png"
        alt=""
      />
    </div>
    <div class="equ_center_box page_container">
      <div class="equ_center" v-for="(item, index) in equi_con" :key="index">
        <div class="top-equip">
          <img :src="item.href" alt="" class="equi" />
          <span>{{ item.title }}</span>
          <span>{{ item.title2 }}</span>
          <img
            src="https://static.cmereye.com/imgs/2022/12/fab80faf49dedcb8.png"
            alt=""
            class="arrow"
            @click="showContainer(index)"
          />
        </div>
        <div class="equip-container">
          <img
            src="https://static.cmereye.com/imgs/2022/12/fab80faf49dedcb8.png"
            alt=""
            class="arrow-contain"
            @click="showEqui(index)"
          />
          <div class="equip-text">
            <span>
              {{ item.content }}
            </span>
            <span class="mt-10">
              {{ item.from }}
            </span>
          </div>
        </div>
        <div class="blue"></div>
      </div>
    </div>
    <div class="bacground-equi-bottom pcShow">
      <img
        src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      equi_con: [
        {
          href: "https://static.cmereye.com/imgs/2022/12/c02bca547710c859.jpg",
          title: "Carl Zeiss Visumax",
          title2: "全飛秒激光3.0系統",
          content:
            "SMall Incision Lenticule Extraction (SMILE 微笑激光矯視) 透過使用飛秒激光，在角膜內注入極微細的激光氣泡，直接切割角膜的中層部分，同時會開一個2毫米的小切口，醫生將已切割的角膜部份從切口取出，令角膜弧度改變以達至矯視效果。",
          from: "資料及圖片來源： Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2022/12/c02bca547710c859.jpg",
          title: "德國蔡司掃頻OCT生物測量儀",
          title2: "（IOL Master 700）",
          content:
            "蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。",
          from: "資料及圖片來源： Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/0ff06c25d8309386.jpg",
          title: "Icare回彈式眼壓計",
          title2: "",
          content:
            "Icare眼壓計是一種自用型掌上型設備，採用回彈法檢測。眼壓計使用一個小且輕的一次性探頭與眼睛進行很短暫的接觸。眼壓計測量探頭的減速和回彈時間，並根據這些參數計算眼壓。",
          from: "資料及圖片來源：Icare Finland",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/87835bc58909d528.jpg",
          title: "日本尼德克綜合電腦驗光儀",
          title2: "",
          content:
            "日本尼德克綜合電腦驗光儀具有「四合一」的檢查功能，其檢查項目分別是：視力、電腦驗光、角膜曲率、眼壓，快速獲得病人屈光狀態的性質和範圍，提供準確的球鏡、柱鏡、柱鏡軸位。 資料來日本尼德克綜合電腦驗光儀具有「四合一」的檢查功能，其檢查項目分別是：視力、電腦驗光、角膜曲率、眼壓，快速獲得病人屈光狀態的性質和範圍，提供準確的球鏡、柱鏡、柱鏡軸位。",
          from: "資料及圖片來源：NIDEK",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/a361b6fabdea5689.jpg",
          title: "日本尼德克",
          title2: "手持綜合電腦驗光儀",
          content:
            "手持設電腦驗光儀，使用靈活，可進行臥式驗光，臺式驗光及手持驗光，適用於從兒童到成人全年齡段，準確檢查角膜屈光度、角膜散光度、角膜散光軸度、球面度、柱面度、最小瞳孔直徑等數據。",
          from: "資料及圖片來源：NIDEK",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/e0615ccf022ff1f3.jpg",
          title: "天狼星三維角膜地形圖",
          title2: "及眼前節分析系統",
          content:
            "將Placido環和Scheimpflug相機三維掃描技術相結合三維斷層掃描角膜及前房，獲取角膜前後表面和前房精確的圖像數據，並且可以提供瞳孔直徑測量模擬不同光強測量瞳孔直徑。",
          from: "資料及圖片來源： CSO",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/b969201be328307d.jpg",
          title: "Pentacam® ",
          title2: "三維眼前節分析診斷系統",
          content:
            "德國歐科路公司生產的Pentacam®，採用的Scheimpflug技術，專利的旋轉360°掃描，獲取眼前節多重圖像，生成眼前節三維立體圖，計算角膜、前房和晶狀體的各種測量值。可廣泛應用於准分子矯視、視光RGP、角膜病、青光眼和白內障等疾病的診療。",
          from: "資料及圖片來源：Oculus",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/1ba64301fb4a1155.jpg",
          title: "德國蔡司眼前節OCT分析系統",
          title2: "",
          content:
            "眼前節OCT高解析度圖像可顯示角膜厚度及基質內反射的改變，可定量測量角膜上皮分佈，以幫助檢查角膜基質層異常及比較激光矯視術後的角膜上皮復原情況。也可以用於監測ICL植入術後的晶體位置。同時也對診斷圓錐角膜、基質角膜炎、角膜水腫等角膜疾病有重要幫助。",
          from: "資料及圖片來源：Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/070e93deb1ae5d06.jpg",
          title: "德國蔡司角膜地形圖系統 ",
          title2: "(ATLAS 9000)",
          content:
            "通過將Atlas® Placido環技術和Visante OCT角膜測厚技術融合在一起，Visante omni可提供全面的角膜前表面和角膜後表面地形圖資訊。SmartCapture™智能圖像分析技術會在拍攝過程中分析多張圖像，並自動選擇好品質的圖像。MasterFit™ II角膜接觸鏡軟體無縫驗配RGP接觸鏡。",
          from: "資料及圖片來源：Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/1b2ba35f86df518a.jpg",
          title: "德國蔡司光學相干斷層掃描儀 ",
          title2: "(CIRRUS HD-OCT5000)",
          content:
            "蔡司相干光學斷層掃描器(OCT)，是一種新的光學診斷技術，具有非侵入性、非接觸性的特點。OCT對青光眼的早期診斷和臨床追蹤觀察有較大幫助。OCT對眼底疾病的診斷也有其不可或缺的作用，尤其對視神經（如視神經炎、視神經萎縮），黃斑疾病（如特發性黃斑裂孔、黃斑前膜），視網膜脫離等有較大的輔助診斷作用。",
          from: "資料及圖片來源： Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/44c2cd7c92cd4b4e.jpg",
          title: "德國蔡司免散瞳彩色",
          title2: "眼底照相機(VISUCAM500)",
          content:
            "VISUCAM® 500 具備經典蔡司光學的免散瞳彩色眼底照相及血管造影儀。眼底影像及血管造影是一種檢查而並非治療，運用染色追蹤的方法去評估眼底視網膜之血液循環。檢查進行時，螢光劑會被注射入血管。當它隨血液流到視網膜時,就即時對眼底進行一連串的拍攝。透過觀察螢光劑流動的形態就可幫助診斷眼底疾病。",
          from: "資料及圖片來源： Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/f86ca892a4239338.jpg",
          title: "A型及B型超聲波掃描儀",
          title2: "（Quantel Compact Touch）",
          content:
            "A型超聲用於眼軸長短的測量，眼部異常組織織標準超聲的檢測； B型超聲用於玻璃體混濁、玻璃體積血、視網膜脈絡膜脫離等病變的檢查。",
          from: "資料及圖片來源：Quantel Medical",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/f81acb4c9ebe64a8.jpg",
          title: "全視網膜掃描相機",
          title2: "（Optos Daytona）",
          content:
            "Daytona可在不用放大瞳孔的情況下掃描80%的眼底視網膜，比傳統眼底相機檢查範圍多4倍，並且可以快速的檢查周邊視網膜，儘早發現視網膜病變及排除潛在的風險。",
          from: "資料及圖片來源： Optos",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/8b6eaae915fb2fe5.jpg",
          title: "角膜內皮層細胞分析儀",
          title2: "(KONAN NSP-9900)",
          content:
            "角膜內皮細胞分析儀用作檢查角膜內皮層細胞,是一項重要的篩選角膜疾病的工具，在進行白內障手術或ICL晶體植入手術前進行角膜健康評估,對於處理戴隱形眼鏡導致眼角膜缺氧，Fuchs角膜內皮營養不良，錐形角膜和角膜創傷等的個案，提供了清晰的圖像資料及準確的數據。",
          from: "資料及圖片來源：Konan",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/58770ae1a3317aef.jpg",
          title: "德國蔡司視野分析儀",
          title2: " (Humphrey HFA3)",
          content:
            "Humphery HFA3是全電腦控制的視野檢查和分析系統，作為視野測量的標準，用於診斷和跟進青光眼、視網膜色素病變和其他影響視野的病症所引起的視野缺損 (如腦神經腫瘤)，從而診斷及觀察視覺及腦神經各種症狀情況，是一項重要的檢查。",
          from: "資料及圖片來源：Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/49693f58f391f52c.jpg",
          title: "FORUM – 眼科專業化",
          title2: " 數據管理平臺",
          content:
            "FORUM是蔡司為眼科專門提供的數據存儲及眼科專業化數據管理系統，可連結來自不同檢查設備的患者資料，有效甄別、管理每個患者的詳盡數據。特別是眼底疾病及青光眼專科工作平臺，可對治療前後的多模影像進行對比，並提供精確的定量分析，有利於對病患進行個性化治療與跟進。",
          from: "資料及圖片來源：Carl Zeiss",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/7425f0f1856072b2.jpg",
          title: "Haag-Streit BQ900裂隙燈",
          title2: " &IM900裂隙燈照相系統",
          content:
            "Haag-Streit BQ900高清晰裂隙燈及IM 900照相系統，幫助醫生用於臨床檢查眼瞼、結膜、角膜，虹膜、前房、晶狀體、視網膜、黃斑點、視神經等的健康。",
          from: "資料及圖片來源：Haag-Streit",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/cccc9092efe3f003.jpg",
          title: "ELLEX Integre pro scan",
          title2: "眼底鐳射治療儀",
          content:
            "矩陣式多波長點陣掃描眼底激光治療儀可為有適應症之糖尿病及其他視網膜病變患者, 提供更佳療效。矩陣式點陣掃描鐳射, 達到治療效果的同時，同時是微創技術，降低風險, 減少患者的疼痛和不適感，且配合多波長, 可針對不同眼睛狀況, 提供更有效率治療。",
          from: "資料及圖片來源：Ellex",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/b5208571650d6726.jpg",
          title: "PESCHKE Trade PXL",
          title2: "Platinum 330",
          content:
            "角膜膠原交聯術(Corneal Collagen Cross-Linking) 一般應用在臨床錐形角膜或可疑圓錐角膜，亦可以應用在接受激光矯視的人士。 角膜局部予核黃素（Riboflavin；即維生素B2，用於增加能量吸收並釋出活性氧），再經本儀器發出紫外線（UVA）照射，令角膜組織釋放一些粒子，使纖維中的膠原蛋白緊扣一起，因此而變得堅韌穩定，鞏固角膜基質強度，減少術後角膜變形的可能性,深度近視或散光的情況下可能減少度數反彈的機會和程度。",
          from: "資料及圖片來源：Peschke   ",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/a77eb4b681c4349f.jpg",
          title: "Ellex Tango Reflex",
          title2: "激光治療儀",
          content:
            "Tango ReflexEllex 的新型 Tango Reflex™ 激光治療儀結合了多種治療平臺 — — 可進行青光眼選擇性小樑整型激光(Selective Laser Trabeculoplasty, SLT) 治療，YAG後囊激光切開治療，以及微創玻璃體消融術。",
          from: "資料及圖片來源：Ellex ",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/2755bf78d190a39c.jpg",
          title: "飛秒激光白內障矯視儀",
          title2: "",
          content:
            "飛秒激光白內障矯視儀是新一代飛秒激光白內障手術儀，集三維影像及導航技術於一身，能分析眼部結構及為眼睛描繪出立體三維圖，幫助為手術作出精密的計算及預測。新一代飛秒激光輔助矯視白內障手術採用全電腦控制的紅外線激光進行三個步驟，包括角膜切口，撕囊及擊碎晶體。使醫生可以精確地進行切割及均勻地擊碎晶體，不論在切割形狀及深度上更趨精細，以準確地植入人工晶體，使晶體位置較準確，提高多焦晶體的精準度及術後視力質量，由於新技術安全、可靠及精準度極高，可以減低手術創傷、術後感染、發炎等併發症。",
          from: "資料及圖片來源：Alcon ",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/713b286109544952.jpg",
          title: "徠卡Proveo8融合光學",
          title2: "眼科手術顯微鏡",
          content:
            "徠卡Proveo8融合光學眼科手術顯微鏡採用Fusion Optics融合光學技術增加安全性，打破顯微鏡的傳統光學，使鏡下景深和清晰度同時達到較佳狀態，使得醫生在手術過程中，即使大倍數下，眼內結構由角膜到視網膜依然清晰可見，增加安全性；廣角、擴大的視野對患者傷害更小，增加安全的同時，提高手術效率，LED低功率柔光照明減少對患者的光毒性傷害，較能保護眼睛。",
          from: "資料及圖片來源：Leica",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/9c9d256865399386.jpg",
          title: "白內障超聲乳化儀",
          title2: "（Alcon Centurion® vision system）",
          content:
            "愛爾康主動液流白內障晶體超聲乳化儀為新一代白內障超聲乳化儀，旋切式白內障乳化術(OZil Torsional), 進階微創傷口治療。提高超音波乳化效率，縮短手術時間，減少對角膜的熱傷害，增加手術安全。新一代高效率主動穩壓系統，較能使眼內壓穩定、安全。 配備AutoSert晶體自動植入手柄，協助進行自動化人工晶體植入。",
          from: "資料及圖片來源：Alcon",
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/bb4caa732946322f.jpg",
          title: "高速率玻切超聲乳化一體機",
          title2: "（Alcon Constellation® vision system）",
          content:
            "美國愛爾康公司Constellation Vision System 微創玻璃體超聲乳化一體機能協助進行微創視網膜手術。作為眼科的尖端手術，其創傷小，安全性高，並且可同時進行白內障、視網膜聯合手術，減少手術次數，避免多次手術對眼睛結構的損傷，傷口也不需要縫合，復原速度大為縮短。",
          from: "資料及圖片來源：Alcon",
        },
      ],
    };
  },
  created() {},
  methods: {
    showContainer(id) {
      // console.log("id",id);
      var traget = document.getElementsByClassName("top-equip");
      var tarset = document.getElementsByClassName("equip-container");
      // console.log('traget',traget);
      console.log("====", tarset[id].style.display);
      if (traget[id].style.display == "none") {
        traget[id].style.display = "";
      } else {
        traget[id].style.display = "none";
      }
      if (tarset[id].style.display == "") {
        tarset[id].style.display = "flex";
      } else if (tarset[id].style.display == "none") {
        tarset[id].style.display = "flex";
      }
    },
    showEqui(id) {
      var traget = document.getElementsByClassName("top-equip");
      var tarset = document.getElementsByClassName("equip-container");
      console.log("====", tarset[id].style.display);
      if (tarset[id].style.display == "none") {
        tarset[id].style.display = "";
      } else {
        tarset[id].style.display = "none";
      }
      if (traget[id].style.display == "none") {
        traget[id].style.display = "flex";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height, or 120% */

  letter-spacing: 0.1em;

  color: #444343;
}
.arrow-contain {
  cursor: pointer;
}
// mb
@media (max-width: 768px) {
  .bacground-equi {
    position: absolute;
    z-index: -1;
  }
  .equ_center_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .equ_center {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 325px;
      border: 1px solid #dfdfdf;
      height: 528px;
      position: relative;
      background: #fff;
      margin-bottom: 136px;
      .top-equip {
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 528px;
        background: #fff;
      }
      .equip-container {
        display: none;
        opacity: 1;
        z-index: 10;
        flex-direction: column;
        align-items: center;
        height: 528px;
        background: #fff;
        .equip-text {
          padding: 25px;
          display: flex;
          flex-direction: column;
          span {
            font-size: 14px;
          }
        }
      }
      .blue {
        position: absolute;
        right: -10px;
        bottom: -10px;
        width: 315px;
        height: 398px;
        background: linear-gradient(180deg, #4570b6 0%, #81dbec 100%);
      }
      .arrow {
        position: absolute;
        bottom: 3px;
        cursor: pointer;
      }
      .equi {
        margin-bottom: 13px;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        /* or 125% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #4570b6;
      }
    }
  }
}
// pc
@media (min-width: 768px) {
  .bacground-equi-right {
    position: absolute;
    right: 0;
    bottom: -3000px;
    z-index: -1;
  }
  .bacground-equi-bottom {
    position: absolute;
    left: 0;
    bottom: -5000px;
    z-index: -1;
  }
  .bacground-equi {
    position: absolute;
    z-index: -1;
  }
  .equ_center_box {
    display: grid;
    justify-items: center;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
    width: 1280px;
    position: relative;
    .equ_center {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 325px;
      border: 1px solid #dfdfdf;
      height: 528px;
      position: relative;
      background: #fff;
      margin-bottom: 136px;
      .top-equip {
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 528px;
        background: #fff;
      }
      .equip-container {
        display: none;
        opacity: 1;
        z-index: 10;
        flex-direction: column;
        align-items: center;
        height: 528px;
        background: #fff;
        .equip-text {
          padding: 25px;
          display: flex;
          flex-direction: column;
          span {
            font-size: 14px;
          }
        }
      }
      .blue {
        position: absolute;
        right: -10px;
        bottom: -10px;
        width: 315px;
        height: 398px;
        background: linear-gradient(180deg, #4570b6 0%, #81dbec 100%);
      }
      .arrow {
        position: absolute;
        bottom: 3px;
        cursor: pointer;
      }
      .equi {
        margin-bottom: 13px;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 25px;
        /* or 125% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #4570b6;
      }
    }
  }
}
</style>
