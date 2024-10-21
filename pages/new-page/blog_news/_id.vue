<template>
  <div class="id_content">
    <Head />
    <div class="content_box" v-loading="loading">
      <div class="_data">{{ essay.content }}</div>
      <div v-html="essay.content"></div>
      <div v-if="essay.source && delSource()" class="source">
        <div>資料來源：</div>
        <a :href="essay.source" target="_blank">{{ essay.author }}</a>
      </div>
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
  },
  data() {
    return {
      id: "",
      essay: {
        author: "",
        content: "",
        source: "",
      },
      loading: true,
      browserTitle: "",
      description: "",
      keywords: "",
    };
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title: this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
      ],
    };
  },
  created() {},
  methods: {
    getArticle() {
      this.loading = true;
      fetch(`https://admin.hkcmereye.com/api.php/content/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((res) => {
          this.loading = false; // 加载完成
          this.browserTitle = res.data.subtitle;
          this.description = res.data.description;
          this.keywords = res.data.keywords;
          this.essay = {
            essay_title: res.data.title,
            author: res.data.author,
            content: res.data.content,
            source: res.data.source,
          };
          this.scrollToTop(); // 滚动到页面顶部
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
          this.loading = false; //
        });
    },
    // 滚动到页面顶部
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    // del 删除 来源部分
    delSource() {
      const articleIds = ["159"];
      return articleIds.includes(this.id) ? false : true;
    },
    overDocument() {
      document.addEventListener("DOMContentLoaded", function () {
        const img_163_01 = document.getElementById("img_163_01");
        if (img_163_01) {
          img_163_01.insertAdjacentHTML(
            "afterend",
            `
            <style>body,html{padding:0;margin:0}.smile_vs_icl{max-width:877px;margin:0 auto}.smile_vs_icl>table,td,th{border:none;text-align:center}.smile_vs_icl thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl thead>tr>th{border-radius:11px 11px 0 0;padding:20px 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:900;line-height:30px;letter-spacing:5px}.smile_vs_icl thead>tr>th:nth-child(1){background:#eca450}.smile_vs_icl thead>tr>th:nth-child(2){background:#4570b6}.smile_vs_icl thead>tr>th:nth-child(3){background:#1b468b}.smile_vs_icl .first_tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:3px 0}.smile_vs_icl .first_tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_icl .first_tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(9)>td:nth-child(2){background:#b9e1f8}.smile_vs_icl .first_tbody>tr:nth-child(1)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(9)>td:nth-child(3){background:#d6f3ff}.smile_vs_icl .first_tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding:20px 10px;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px}.smile_vs_icl .first_tbody>tr:nth-child(11)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_icl .first_tbody>tr:last-child>td:nth-child(2){text-align:left!important}.smile_vs_icl .last_tbody{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl .last_tbody>tr:nth-child(1){grid-row:1/span 4;background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_icl .last_tbody>tr:nth-child(2),.smile_vs_icl .last_tbody>tr:nth-child(3),.smile_vs_icl .last_tbody>tr:nth-child(4){color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px;padding:20px 0;display:flex;align-items:center;justify-content:center;background:#d6f5ff}.smile_vs_icl .last_tbody>tr:nth-child(2){background:#b9e1f8}.smile_vs_icl .last_tbody>tr:nth-child(4){grid-column:2/span 3;margin-top:3px}@media screen and (max-width:768px){.smile_vs_icl{max-width:100%;box-sizing:border-box; }.smile_vs_icl>table,td,th{border:none;text-align:center}.smile_vs_icl thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl thead>tr>th{border-radius:2.93vw 2.93vw 0 0;padding:2.65vw 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:900;line-height:5.33vw;letter-spacing:1.065vw}.smile_vs_icl thead>tr>th:nth-child(1){background:#eca450;min-width:26.65vw;max-width:26.65vw}.smile_vs_icl thead>tr>th:nth-child(2){background:#4570b6;width:100%;overflow:hidden}.smile_vs_icl thead>tr>th:nth-child(3){background:#1b468b;width:100%;margin-left:.8vw;overflow:hidden;font-size:3.2vw}.smile_vs_icl .first_tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:.8vw 0}.smile_vs_icl .first_tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box;padding:2.65vw}.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(2){background:#b9e1f8;width:100%;overflow:hidden}.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(3){background:#d6f3ff;width:100%}.smile_vs_icl .first_tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:3.733vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0056;padding:2.65vw}.smile_vs_icl .first_tbody>tr:last-child>td:nth-child(2){padding:2.65vw}.smile_vs_icl .last_tbody{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl .last_tbody>tr:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box}.smile_vs_icl .last_tbody>tr:nth-child(2),.smile_vs_icl .last_tbody>tr:nth-child(3),.smile_vs_icl .last_tbody>tr:nth-child(4){color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0064vw;padding:2.65vw;display:flex;align-items:center;justify-content:center;background:#d6f5ff}.smile_vs_icl .last_tbody>tr:nth-child(2){background:#b9e1f8}.smile_vs_icl .last_tbody>tr:nth-child(4){grid-column:2/span 3;margin-top:3px}}</style></head><body><div class="smile_vs_icl"><table border="1"><thead><tr><th>矯視技術</th><th>SMILE</th><th>ICL</th></tr></thead><tbody class="first_tbody"><tr><td>技術</td><td>激光；微創； 不可逆轉</td><td>晶體植入；可逆轉</td></tr><tr><td>手術原理</td><td>切割眼角膜</td><td>把ICL晶體植入於<br>眼球虹膜與晶體之間</td></tr><tr><td>可改善度數範圍</td><td>1,000度以下近視，<br>500度以下散光</td><td>最高1,800度近視，<br>最高1,000度遠視，<br>最高600度散光</td></tr><tr><td>切口大小</td><td>2-2.5mm</td><td>3mm</td></tr><tr><td>技術準確度</td><td>高</td><td>高</td></tr><tr><td>手術時間</td><td>10-15分鐘(雙眼)</td><td>20-30分鐘(單一眼睛)</td></tr><tr><td>夜間視覺質素</td><td>高</td><td>較高</td></tr><tr><td>防紫外線</td><td>不可以</td><td>可以</td></tr><tr><td>乾眼情況</td><td>較少</td><td>極少</td></tr></tbody><tbody class="last_tbody"><tr><td>適合的群眾</td></tr><tr><td>角膜厚度正常</td></tr><tr><td>因角膜厚度偏薄/角膜<br>形狀欠佳而不適合<br>接受激光矯視人士</td></tr><tr><td>・近視或散光人士<br>・角膜厚度正常<br>・近視度數穩定<br>・沒有患上眼疾<br>・沒有患上自體免疫疾病<br>・熱愛運動／注重儀表人士<br>・希望減低對眼鏡或隱形眼鏡依賴的人士<br>・因擔心長期配戴隱形眼鏡而影響眼睛健康人士</td></tr></tbody></table></div></body>
            `
          );
        }
      });
    },
  },
  mounted() {
    if (Number(this.$route.params.slug) || Number(this.$route.params.id)) {
      this.id = this.$route.params.slug || this.$route.params.id;
    } else {
      this.$router.push("/");
    }
    this.getArticle(); // 直接在 mounted 钩子中发起请求
    setTimeout(() => {
      if (this.$route.path == "/blog/161") {
        const img_id_161 = document.getElementById("161_img");
        if (img_id_161) {
          img_id_161.insertAdjacentHTML(
            "afterend",
            `
            <style>body,html{padding:0;margin:0}.smile_vs_pro{max-width:877px;margin:0 auto}.smile_vs_pro>table,td,th{border:none;text-align:center}.smile_vs_pro thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_pro thead>tr>th{border-radius:11px 11px 0 0;padding:20px 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:900;line-height:30px;letter-spacing:5px}.smile_vs_pro thead>tr>th:nth-child(1){background:#eca450}.smile_vs_pro thead>tr>th:nth-child(2){background:#4570b6}.smile_vs_pro thead>tr>th:nth-child(3){background:#1b468b}.smile_vs_pro tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:3px 0}.smile_vs_pro tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_pro tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(8)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2){position:relative;background:#b9e1f8}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(3){background:#e1edff}.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2)::after{content:'';position:absolute;width:118%;height:5px;top:50%;background:#a8d9e9;z-index:1;transform:translateY(-50%) rotate(33deg);z-index:1}.smile_vs_pro tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding:20px;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px}@media screen and (max-width:768px){.smile_vs_pro{max-width:100%;box-sizing:border-box}.smile_vs_pro>table,td,th{border:none;text-align:center}.smile_vs_pro thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_pro thead>tr>th{border-radius:2.93vw 2.93vw 0 0;padding:2.65vw 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:900;line-height:5.33vw;letter-spacing:1.065vw}.smile_vs_pro thead>tr>th:nth-child(1){background:#eca450;min-width:26.65vw;max-width:26.65vw}.smile_vs_pro thead>tr>th:nth-child(2){background:#4570b6;width:100%;overflow:hidden}.smile_vs_pro thead>tr>th:nth-child(3){background:#1b468b;width:100%;margin-left:.8vw;overflow:hidden;font-size:3.2vw}.smile_vs_pro tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:.8vw 0}.smile_vs_pro tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box}.smile_vs_pro tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(8)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2){position:relative;background:#b9e1f8;width:100%;overflow:hidden}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(3){background:#e1edff;width:100%}.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2)::after{content:'';position:absolute;width:185%;height:.13vw;top:50%;background:#a8d9e9;z-index:1;transform:translateY(-50%) rotate(60deg);z-index:1}.smile_vs_pro tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:3.733vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0056;padding:2.65vw 0}}</style></head><body><div class="smile_vs_pro"><table border="1"><thead><tr><th>矯視技術</th><th>SMILE</th><th>SMILE®pro</th></tr></thead><tbody><tr><td>技術</td><td>激光；微創</td></tr><tr><td>術中定位</td><td>手動調整</td><td>自動調整</td></tr><tr><td>使用的設備</td><td>Carl Zeiss Visumax 全飛秒激光3.0系統</td><td>Carl Zeiss VISUMAX 800 SMILE®pro</td></tr><tr><td>切口大小</td><td>2-2.5mm</td></tr><tr><td>激光時間</td><td>23秒</td><td>10秒</td></tr><tr><td>康復時間/速度</td><td>1日</td></tr><tr><td>可改善度數範圍</td><td>1,000度以下近視，500度以下散光</td></tr><tr><td>適合的群眾</td><td>近視或散光人士<br>角膜厚度正常<br>近視度數穩定<br>沒有患上眼疾<br>沒有患上自體免疫疾病<br>熱愛運動／注重儀表人士<br>希望減低對眼鏡或隱形眼鏡依賴的人士<br>因佩戴隱形眼鏡導致乾眼症人士</td></tr><tr><td></td><td></td><td>對微笑矯視過程懼怕人士<br>著重運動體驗感人士<br>擔心眼睛無法對焦太久人士</td></tr></tbody></table></div></body>
            `
          );
        }
      }
      if (this.$route.path == "/blog/162") {
        const img_162_01 = document.getElementById("img_162_01");
        const img_162_02 = document.getElementById("img_162_02");
        if (img_162_01) {
          img_162_01.insertAdjacentHTML(
            "afterend",
            `
            <style>body,html{padding:0;margin:0}.smile_vs_pro{max-width:877px;margin:0 auto 60px}.smile_vs_pro>table,td,th{border:none;text-align:center}.smile_vs_pro thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_pro thead>tr>th{border-radius:11px 11px 0 0;padding:20px 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:900;line-height:30px;letter-spacing:5px}.smile_vs_pro thead>tr>th:nth-child(1){background:#eca450}.smile_vs_pro thead>tr>th:nth-child(2){background:#5fd3c0}.smile_vs_pro thead>tr>th:nth-child(3){background:#1b468b}.smile_vs_pro tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:3px 0}.smile_vs_pro tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_pro tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(8)>td:nth-child(2){width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2){position:relative;background:#b9e1f8}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(3){background:#e1edff}.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2)::after{content:'';position:absolute;width:118%;height:5px;top:50%;background:#a8d9e9;z-index:1;transform:translateY(-50%) rotate(33deg);z-index:1}.smile_vs_pro tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding:20px;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px}.smile_vs_pro tbody>tr>td:nth-child(2){background:#d7f6f4!important}.smile_vs_pro tbody>tr>td:nth-child(3){background:#b9e1f8!important}@media screen and (max-width:768px){.smile_vs_pro{max-width:100%;box-sizing:border-box; }.smile_vs_pro>table,td,th{border:none;text-align:center}.smile_vs_pro thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_pro thead>tr>th{border-radius:2.93vw 2.93vw 0 0;padding:2.65vw 0!important;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:900;line-height:5.33vw;letter-spacing:1.065vw}.smile_vs_pro thead>tr>th:nth-child(1){background:#eca450;min-width:26.65vw;max-width:26.65vw}.smile_vs_pro thead>tr>th:nth-child(2){background:#4570b6;width:100%;overflow:hidden}.smile_vs_pro thead>tr>th:nth-child(3){background:#1b468b;width:100%;margin-left:.8vw;overflow:hidden;font-size:3.2vw}.smile_vs_pro tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:.8vw 0}.smile_vs_pro tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box}.smile_vs_pro tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(8)>td:nth-child(2){width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2){position:relative;background:#b9e1f8;width:100%;overflow:hidden}.smile_vs_pro tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(3){background:#e1edff;width:100%}.smile_vs_pro tbody>tr:nth-child(9)>td:nth-child(2)::after{content:'';position:absolute;width:185%;height:.13vw;top:50%;background:#a8d9e9;z-index:1;transform:translateY(-50%) rotate(60deg);z-index:1}.smile_vs_pro tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:3.733vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0056;padding:2.65vw!important}}</style></head><body><div class="smile_vs_pro"><table border="1"><thead><tr><th>矯視技術</th><th>LASIK</th><th>SMILE</th></tr></thead><tbody><tr><td>可改善度數範圍</td><td>1,400度或以下近視；<br>600度或以下散光；<br>600度或以下遠視<br></td><td>1,000度或以下近視；<br>500度或以下散光<br></td></tr><tr><td>恢復時間</td><td>較長，2-４天可如常用眼</td><td>較短，最快術後１天 可如常生活及工作</td></tr></tbody></table></div></body>
            `
          );
        }
        if (img_162_02) {
          img_162_02.insertAdjacentHTML(
            "afterend",
            `
            <style>body,html{padding:0;margin:0}.lasik_vs_smile{max-width:877px;margin:0 auto}.lasik_vs_smile>table,td,th{border:none;text-align:center}.lasik_vs_smile thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.lasik_vs_smile thead>tr>th{border-radius:11px 11px 0 0;padding:20px 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:900;line-height:30px;letter-spacing:5px}.lasik_vs_smile thead>tr>th:nth-child(1){background:#eca450}.lasik_vs_smile thead>tr>th:nth-child(2){background:#4570b6}.lasik_vs_smile thead>tr>th:nth-child(3){background:#1b468b}.lasik_vs_smile tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:3px 0}.lasik_vs_smile tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.lasik_vs_smile tbody>tr:nth-child(1)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(9)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.lasik_vs_smile tbody>tr:nth-child(2)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(3)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(4)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(5)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(6)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(7)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(8)>td:nth-child(2){background:#d7f6f4}.lasik_vs_smile tbody>tr:nth-child(2)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(3)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(4)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(5)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(6)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(7)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(8)>td:nth-child(3){background:#b9e1f8}.lasik_vs_smile tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding:20px;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px}.lasik_vs_smile tbody>tr:last-child>td:nth-child(2){text-align:left!important}@media screen and (max-width:768px){.lasik_vs_smile{max-width:100%;box-sizing:border-box; }.lasik_vs_smile>table,td,th{border:none;text-align:center}.lasik_vs_smile thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.lasik_vs_smile thead>tr>th{border-radius:2.93vw 2.93vw 0 0;padding:2.65vw 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:900;line-height:5.33vw;letter-spacing:1.065vw}.lasik_vs_smile thead>tr>th:nth-child(1){background:#eca450;min-width:26.65vw;max-width:26.65vw}.lasik_vs_smile thead>tr>th:nth-child(2){background:#4570b6;width:100%;overflow:hidden}.lasik_vs_smile thead>tr>th:nth-child(3){background:#1b468b;width:100%;margin-left:.8vw;overflow:hidden;font-size:3.2vw}.lasik_vs_smile tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:.8vw 0}.lasik_vs_smile tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box}.lasik_vs_smile tbody>tr:nth-child(1)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(9)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.lasik_vs_smile tbody>tr:nth-child(2)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(3)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(4)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(5)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(6)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(7)>td:nth-child(2),.lasik_vs_smile tbody>tr:nth-child(8)>td:nth-child(2){background:#d7f6f4;width:100%;overflow:hidden}.lasik_vs_smile tbody>tr:nth-child(2)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(3)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(4)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(5)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(6)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(7)>td:nth-child(3),.lasik_vs_smile tbody>tr:nth-child(8)>td:nth-child(3){background:#b9e1f8;width:100%}.lasik_vs_smile tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:3.733vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0056;padding:2.65vw 0}.lasik_vs_smile tbody>tr:last-child>td:nth-child(2){padding:2.65vw}}</style></head><body><div class="lasik_vs_smile"><table border="1"><thead><tr><th>矯視技術</th><th>LASIK</th><th>SMILE</th></tr></thead><tbody><tr><td>技術</td><td>激光；微創</td></tr><tr><td>手術原理</td><td>打磨眼角膜</td><td>切割眼角膜</td></tr><tr><td>可改善度數範圍</td><td>1,400度或以下近視，<br>600度或以下散光／ 遠視</td><td>1,000度或以下近視，<br>500度或以下散光</td></tr><tr><td>切口大小</td><td>20mm的C型傷口</td><td>2-2.5mm</td></tr><tr><td>手術時間</td><td>20-30分鐘</td><td>10-15分鐘</td></tr><tr><td>技術準確度</td><td>高</td><td>較高</td></tr><tr><td>價錢</td><td>較相宜</td><td>較高</td></tr><tr><td>角膜自然<br>癒合需時間</td><td>2周或以上</td><td>數天至一周</td></tr><tr><td>適合的群眾</td><td>・近視或散光人士<br>・角膜厚度正常<br>・近視度數穩定<br>・沒有患上眼疾<br>・沒有患上自體免疫疾病<br>・熱愛運動／注重儀表人士<br>・希望減低對眼鏡或隱形眼鏡依賴的人士<br>・因擔心長期配戴隱形眼鏡而影響眼睛健康人士</td></tr></tbody></table></div></body>
            `
          );
        }
      }
      if (this.$route.path == "/blog/163") {
        const img_163_01 = document.getElementById("img_163_01");
        if (img_163_01) {
          img_163_01.insertAdjacentHTML(
            "afterend",
            `
            <style>body,html{padding:0;margin:0}.smile_vs_icl{max-width:877px;margin:0 auto}.smile_vs_icl>table,td,th{border:none;text-align:center}.smile_vs_icl thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl thead>tr>th{border-radius:11px 11px 0 0;padding:20px 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:900;line-height:30px;letter-spacing:5px}.smile_vs_icl thead>tr>th:nth-child(1){background:#eca450}.smile_vs_icl thead>tr>th:nth-child(2){background:#4570b6}.smile_vs_icl thead>tr>th:nth-child(3){background:#1b468b}.smile_vs_icl .first_tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:3px 0}.smile_vs_icl .first_tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_icl .first_tbody>tr:nth-child(1)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(9)>td:nth-child(2){background:#b9e1f8}.smile_vs_icl .first_tbody>tr:nth-child(1)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(9)>td:nth-child(3){background:#d6f3ff}.smile_vs_icl .first_tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding:20px 10px;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px}.smile_vs_icl .first_tbody>tr:nth-child(11)>td:nth-child(2){grid-column:2/span 3;width:100%;display:flex;justify-content:center;align-items:center;background:#eefbff}.smile_vs_icl .first_tbody>tr:last-child>td:nth-child(2){text-align:left!important}.smile_vs_icl .last_tbody{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl .last_tbody>tr:nth-child(1){grid-row:1/span 4;background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:25px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.75px;padding:20px 0;display:flex;align-items:center;justify-content:center;min-width:235px}.smile_vs_icl .last_tbody>tr:nth-child(2),.smile_vs_icl .last_tbody>tr:nth-child(3),.smile_vs_icl .last_tbody>tr:nth-child(4){color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:22px;font-style:normal;font-weight:350;line-height:30px;letter-spacing:3.3px;padding:20px 0;display:flex;align-items:center;justify-content:center;background:#d6f5ff}.smile_vs_icl .last_tbody>tr:nth-child(2){background:#b9e1f8}.smile_vs_icl .last_tbody>tr:nth-child(4){grid-column:2/span 3;margin-top:3px}@media screen and (max-width:768px){.smile_vs_icl{max-width:100%;box-sizing:border-box; }.smile_vs_icl>table,td,th{border:none;text-align:center}.smile_vs_icl thead>tr{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl thead>tr>th{border-radius:2.93vw 2.93vw 0 0;padding:2.65vw 0;color:#fff;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:900;line-height:5.33vw;letter-spacing:1.065vw}.smile_vs_icl thead>tr>th:nth-child(1){background:#eca450;min-width:26.65vw;max-width:26.65vw}.smile_vs_icl thead>tr>th:nth-child(2){background:#4570b6;width:100%;overflow:hidden}.smile_vs_icl thead>tr>th:nth-child(3){background:#1b468b;width:100%;margin-left:.8vw;overflow:hidden;font-size:3.2vw}.smile_vs_icl .first_tbody>tr{display:grid;grid-template-columns:repeat(3,1fr);margin:.8vw 0}.smile_vs_icl .first_tbody>tr>td:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box;padding:2.65vw}.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(2),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(2){background:#b9e1f8;width:100%;overflow:hidden}.smile_vs_icl .first_tbody>tr:nth-child(2)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(3)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(4)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(5)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(6)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(7)>td:nth-child(3),.smile_vs_icl .first_tbody>tr:nth-child(8)>td:nth-child(3){background:#d6f3ff;width:100%}.smile_vs_icl .first_tbody>tr>td{display:flex;justify-content:center;align-items:center;box-sizing:border-box;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:3.733vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0056;padding:2.65vw}.smile_vs_icl .first_tbody>tr:last-child>td:nth-child(2){padding:2.65vw}.smile_vs_icl .last_tbody{display:grid;grid-template-columns:repeat(3,1fr)}.smile_vs_icl .last_tbody>tr:nth-child(1){background:#fddeba;color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:8vw;letter-spacing:.0064vw;display:flex;align-items:center;justify-content:center;min-width:26.65vw;max-width:26.65vw;box-sizing:border-box}.smile_vs_icl .last_tbody>tr:nth-child(2),.smile_vs_icl .last_tbody>tr:nth-child(3),.smile_vs_icl .last_tbody>tr:nth-child(4){color:#4570b6;text-align:center;font-family:"Noto Sans HK";font-size:4.265vw;font-style:normal;font-weight:350;line-height:5.33vw;letter-spacing:.0064vw;padding:2.65vw;display:flex;align-items:center;justify-content:center;background:#d6f5ff}.smile_vs_icl .last_tbody>tr:nth-child(2){background:#b9e1f8}.smile_vs_icl .last_tbody>tr:nth-child(4){grid-column:2/span 3;margin-top:3px}}</style></head><body><div class="smile_vs_icl"><table border="1"><thead><tr><th>矯視技術</th><th>SMILE</th><th>ICL</th></tr></thead><tbody class="first_tbody"><tr><td>技術</td><td>激光；微創； 不可逆轉</td><td>晶體植入；可逆轉</td></tr><tr><td>手術原理</td><td>切割眼角膜</td><td>把ICL晶體植入於<br>眼球虹膜與晶體之間</td></tr><tr><td>可改善度數範圍</td><td>1,000度以下近視，<br>500度以下散光</td><td>最高1,800度近視，<br>最高1,000度遠視，<br>最高600度散光</td></tr><tr><td>切口大小</td><td>2-2.5mm</td><td>3mm</td></tr><tr><td>技術準確度</td><td>高</td><td>高</td></tr><tr><td>手術時間</td><td>10-15分鐘(雙眼)</td><td>20-30分鐘(單一眼睛)</td></tr><tr><td>夜間視覺質素</td><td>高</td><td>較高</td></tr><tr><td>防紫外線</td><td>不可以</td><td>可以</td></tr><tr><td>乾眼情況</td><td>較少</td><td>極少</td></tr></tbody><tbody class="last_tbody"><tr><td>適合的群眾</td></tr><tr><td>角膜厚度正常</td></tr><tr><td>因角膜厚度偏薄/角膜<br>形狀欠佳而不適合<br>接受激光矯視人士</td></tr><tr><td>・近視或散光人士<br>・角膜厚度正常<br>・近視度數穩定<br>・沒有患上眼疾<br>・沒有患上自體免疫疾病<br>・熱愛運動／注重儀表人士<br>・希望減低對眼鏡或隱形眼鏡依賴的人士<br>・因擔心長期配戴隱形眼鏡而影響眼睛健康人士</td></tr></tbody></table></div></body>
            `
          );
        }
      }
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(a:hover) {
    color: #4570b6;
    font-weight: 500;
  }
  :deep(a) {
    color: #4570b6;
    font-weight: 500;
  }
  ._data {
    width: 1px;
    height: 1px;
    background: transparent;
    color: transparent;
    overflow: hidden;
  }
  :deep(.businessHours) {
    & > h2 {
      margin: 80px 0 30px;
    }
  }
  .source {
    margin-top: 20px;
    margin-bottom: 0;
    & > div {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 233.333% */
      letter-spacing: 3.75px;
    }
    & > a {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px;
      letter-spacing: 3.75px;
      // text-decoration-line: underline;
      border-bottom: 1px solid #6d6e71;
    }
    & > a:hover {
      color: #4570b6;
      border-bottom: 1px solid #4570b6;
      font-weight: 500;
    }
  }
  :deep(.content_box) {
    h1 {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 25px !important;
      font-style: normal;
      font-weight: 500 !important;
      letter-spacing: 6.25px !important;
      line-height: 30px !important;
      margin: 80px auto 30px !important;
      text-align: center;
      border-bottom: none !important;
      padding: 0 !important;
    }
    h2 {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 25px !important;
      font-style: normal;
      font-weight: 500 !important;
      letter-spacing: 6.25px !important;
      line-height: 30px !important;
      margin: 80px auto 30px !important;
      text-align: center;
      border-bottom: none !important;
      padding: 0 !important;
    }
    h3 {
      span {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 4.25px;
        line-height: 30px;
        text-align: left;
      }
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 4.25px;
      line-height: 30px;
      text-align: left;
      margin: 30px 0;
    }
    h2::before {
      content: none !important;
    }
    h2::after {
      content: none !important;
    }
    h2 {
      border: none !important;
    }
    max-width: 960px;
    margin: 0 auto;
    margin-top: 145px;
    .img_context {
      margin: 30px auto;
      max-width: 870px;
    }
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 5px;
      margin: 30px 0;
      img {
        margin: 0 auto;
        border-radius: 30px;
      }
    }

    .headline {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 35px; /* 100% */
      letter-spacing: 6px;
      text-align: center;
    }
    .first_level_heading {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 120% */
      letter-spacing: 6.25px;
      margin: 54px auto;
      text-align: center;
    }
    .table_box,
    .table_box_2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .h3_box {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 120% */
      letter-spacing: 4.25px;
      text-align: left;
    }
    .firstRow {
      & > td {
        p {
          color: #fff;
          margin-bottom: 0;
          font-weight: 500;
          text-align: center;
        }
      }
      & > td:nth-child(1) {
        width: 180px;
      }
      & > td:nth-child(2) {
        width: 280px;
      }
      & > td:nth-child(3) {
        width: 280px;
      }
    }
    ul > li {
      p {
        text-align: left;
        margin: 0 !important;
      }
    }
    .list-paddingleft-2 {
      padding-left: 40px;
    }
    ul {
      margin-top: -30px;
    }
  }
}
@media screen and (max-width: 767px) {
  ._data {
    width: 1px;
    height: 1px;
    background: transparent;
    color: transparent;
    overflow: hidden;
  }
  .source {
    margin-top: 10px;
    margin-bottom: 40px;
    & > div {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 250% */
      letter-spacing: 0.6px;
    }
    & > a {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0.6px;
      // text-decoration-line: underline;
      border-bottom: 1px solid #6d6e71;
    }
    & > a:hover {
      color: #113d85;
      border-bottom: 1px solid #113d85;
      font-weight: 400;
    }
  }
  :deep(.content_box) {
    br {
      display: none !important;
    }
    h2::before {
      content: none !important;
    }
    h2::after {
      content: none !important;
    }
    h2 {
      border: none !important;
    }
    max-width: 960px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 30px;
    margin-top: 65px;
    .img_context {
      margin: 30px auto;
      max-width: 870px;
    }
    p {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 214.286% */
      letter-spacing: 0.7px;
      margin-bottom: 10px;
      & > a {
        // color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.6px;
        // text-decoration-line: underline;
        // border-bottom: 1px solid #6d6e71;
        color: #4570b6;
        // border-bottom: 1px solid #113d85;
      }
      & > a:hover {
        color: #4570b6;
        border-bottom: 1px solid #113d85;
        font-weight: 400;
      }
    }
    .headline {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      letter-spacing: 3px;
    }
    a {
      // color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.6px;
      // text-decoration-line: underline;
      // border-bottom: 1px solid #6d6e71;
      color: #113d85;
      // border-bottom: 1px solid #113d85;
    }
    a:hover {
      color: #113d85;
      border-bottom: 1px solid #113d85;
      font-weight: 400;
    }
    .first_level_heading {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 116.5% */
      letter-spacing: 8px;
      margin: 24px auto;
      text-align: center;
    }
    .table_box,
    .table_box_2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .h3_box {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 120% */
      letter-spacing: 2.25px;
      text-align: left;
    }
    .firstRow {
      & > td {
        p {
          color: #fff;
          margin-bottom: 0;
          font-weight: 500;
          text-align: center;
        }
      }
      & > td:nth-child(1) {
        width: 120px;
      }
      & > td:nth-child(2) {
        width: 140px;
      }
      & > td:nth-child(3) {
        width: 140px;
      }
    }
    ul > li {
      p {
        text-align: left;
      }
    }
    .list-paddingleft-2 {
      padding-left: 20px;
    }
  }
  :deep(.businessHours) {
    & > h2 {
      margin: 40px 0 25px;
    }
  }
  :deep(.content_box) {
    h1:first-child {
      font-weight: 500 !important;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px !important;
      font-style: normal;
      letter-spacing: 5px !important;
      margin: 39px auto 25px !important;
      text-align: center;
      border-bottom: none !important;
      padding: 0 !important;
    }
    h1 {
      font-weight: 500 !important;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px !important;
      font-style: normal;
      letter-spacing: 5px !important;
      margin: 40px auto 25px !important;
      text-align: center;
      border-bottom: none !important;
      padding: 0 !important;
    }
    h2 {
      font-weight: 500 !important;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px !important;
      font-style: normal;
      letter-spacing: 5px !important;
      margin: 40px auto 25px !important;
      text-align: center;
      border-bottom: none !important;
      padding: 0 !important;
    }
    h3 {
      span {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; /* 150% */
        letter-spacing: 5px;
        text-align: left;
      }
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      letter-spacing: 5px;
      text-align: left !important;
      margin: 25px 0;
    }
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 214.286% */
      letter-spacing: 0.7px;
      margin: 25px 0;
      text-align: left !important;
      img {
        margin: 0 auto;
        border-radius: 15px;
      }
    }
    ul {
      margin-top: -25px;
    }
    ul > li {
      p {
        text-align: left;
        margin: 0 !important;
      }
    }
  }
}
</style>