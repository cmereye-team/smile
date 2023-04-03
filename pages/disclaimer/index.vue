<template>
  <div>
    <Header />
    <Navbar />
    <div class="page_container box">
      <div class="flex justify-center md:mt-28 mt-10">
        <h2>免責條款</h2>
      </div>
      <p class="pb-4">
        香港希瑪微笑矯視中心網站內的所有資料及內容只用作一般資訊、教育及參考。如有任何有關健康問題、醫療狀況、護理之事宜，應及時諮詢有關醫生或醫護人員。
      </p>
      <p class="pb-4">
        本中心致力確保此網站內所有資料及內容之準確及適時性，網站內所有資料及內容可能隨時更改而不作另行通知。
      </p>
      <p class="pb-4">
        本網站可能連結到其他網站之內容、服務、商品及廣告，並非由香港希瑪微笑矯視中心所維護或控制，本中心對本網站可能連結到的其他網站、服務及商品之供應，以及其內容或其準確性，概不負責。
      </p>
      <p class="pb-4">
        網上預約系統只為客人在香港希瑪微笑矯視中心作預約、諮詢醫療服務之用。填寫及提交網上預約表格並不保證閣下之預約時間。香港希瑪微笑矯視中心職員將酌情處理閣下的申請，並以電郵、電話或短訊等方式就預約或諮詢結果，或就所預約或諮詢日期及時間之改動聯絡閣下。香港希瑪微笑矯視中心對透過此網上系統作預約申請未能如願而引致的任何後果，概不負責。
      </p>
      <p class="pb-4">
        在此網站提交的預約申請只作排期用途。提交網上預約表格表示閣下同意受本網站有關網上預約系統的免責聲明約束。
      </p>
      <p class="pb-4">
        本網站部分文章來自於網絡，版權僅歸原作者所有，若作者有版權聲明或從其他網站轉載而附帶原所有站的版權聲明，其版權歸屬以附帶聲明為準；文章謹代表作者個人觀點，與本網站無關。
      </p>

      <p class="pb-24">
        本網站部分圖片及資料來自網絡，如果無意侵犯到閣下權益，請及時與本中心聯絡，本中心將立即跟進。
      </p>
    </div>
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import footers from "@/components/commom/foot/footers.vue";
export default {
  components: { Header, Navbar, Footer, footers },
  head() {
    return {
      title: "私隱政策 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 19px;
}
@media only screen and (max-width: 768px) {
  p {
    font-size: 15px;
  }
}
@media only screen and (min-width: 768px) {
  p {
    font-size: 16px;
  }
}
.text-blue {
  color: #25395e;
  font-size: 22px;
}
.box {
  padding: 0;
}
.section.vedio_box {
  margin-top: 0;
}
</style>
