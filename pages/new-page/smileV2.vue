<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-14 08:56:29
 * @LastEditTime: 2025-08-28 10:58:14
 * @FilePath: /pages/new-page/smileV2.vue
 * @Description: 矫视服务-微笑激光矫视，第二版
-->
<script>
import HeadV3 from "@/components/Publice/HeadV3.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import UserShare from "@/components/commom/UserShare/UserShare.vue";
import SwiperCard from "@/components/commom/swiper/SwiperCard.vue";
import SwiperRound from "@/components/commom/swiper/SwiperRound.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    UserShare,
    SwiperCard,
    SwiperRound,
  },
  data() {
    return {
      xtraActive: false, // 是否展开状态
      activeStep: 0, // 当前激活的矫视步骤索引
      activeStepTimer: null,
      awardsList: [
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-01.avif",
        },
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-02.avif",
        },
        {
          imgUrl:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-03.avif",
        },
      ],
      steps: [
        {
          number: "01",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-1.webp",
          image:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-1.webp",
          text: "以全飛秒激光直接切割角膜中層",
        },
        {
          number: "02",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-2.webp",
          image:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-2.webp",
          text: "製作一個\n約2-2.5mm的小切口",
        },
        {
          number: "03",
          imagePc:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-3.webp",
          image:
            "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-3.webp",
          text: "將切割了的角膜透鏡\n從切口抽出",
        },
      ],
      canonicalHref:
        "https://smile.hkcmereye.com/vision-correction/relex-smile",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
      browserTitle: "SMILE 微笑激光矯視 - 希瑪微笑矯視中心",
      browserTitleCn: "SMILE 微笑激光矫视 - 希玛微笑矫视中心",
      benefitList: [
        {
          id: 1,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-1.svg",
          title: "手術簡單",
          desc: "無需製造\n角膜瓣",
          active: false,
          row: 1,
        },
        {
          id: 2,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-2.svg",
          title: "術後復原快",
          desc: "最快術後翌日\n生活、工作",
          active: false,
          row: 1,
        },
        {
          id: 3,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-3.svg",
          title: "手術時間短",
          desc: "最快10-15分鐘\n完成",
          active: false,
          row: 1,
        },
        {
          id: 4,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-4.svg",
          title: "術後影響少",
          desc: "減低術後眼乾及\n感染的可能性",
          active: false,
          row: 2,
        },
        {
          id: 5,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-5.svg",
          title: "微創",
          desc: "傷口只有約\n2-2.5mm",
          active: true,
          row: 2,
        },
        {
          id: 6,
          icon: "https://statichk.cmermedical.com/smile/smileV2/smile-benefit-6.svg",
          title: "效果穩定",
          desc: "視力改善\n顯著",
          active: false,
          row: 2,
        },
      ],
      conditionList: [
        "1,000 度以下近視",
        "500 度以下散光",
        "角膜厚度正常",
        "沒有患上眼疾，如青光眼或視網膜疾病",
        "發育成熟，近視度數穩定",
        "非懷孕或哺乳期間",
        "沒有患上自體免疫疾病，如風濕性關節炎或紅斑狼瘡",
        "不需要長期服用類固醇",
        "角膜沒受感染，例如發炎或曾受傷",
      ],
      ShareData: [
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/TGxol6pNXSY?si=smsLpfhLJBxqitx7",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile1.avif",
          text: ["就算落雨都唔會再影響", "到我跑步嘅心情"],
          nameEn: "",
          nameCn: "黃啟樂",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/TGxol6pNXSY?si=smsLpfhLJBxqitx7",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile2.avif",
          text: ["唔洗戴Con係一種", "解脫!可以瀟灑出門口"],
          nameEn: "",
          nameCn: "尹焯熙",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tLsWfdZy4P4?si=AjVzygcOPjWeGkh0",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile3.avif",
          text: ["一行出去已經感受到", "原來我望嘢可以咁清楚"],
          nameEn: "",
          nameCn: "馬燕茹",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/_wk_gZGzB1s?si=lrRm3juyJA4LCmqU",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile4.avif",
          text: ["做完多咗眼神交流", "傳波都準咗"],
          nameEn: "",
          nameCn: "李旭川",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/qBsPhkIaVfo?si=eoL0GFtYOpQ7wX6M",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile5.avif",
          text: ["想做就去做啦!"],
          nameEn: "",
          nameCn: "游嘉欣",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/oHDOFYMEUsk?si=01mWE78jZEidTIiL",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile6.avif",
          text: ["終於可以掉咗", "縮細眼嘅眼鏡"],
          nameEn: "Shirley Chan",
          nameCn: "陳欣妍",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nrsLktnnW_I?si=81-m7f4tvpUaT3Xy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile7.avif",
          text: ["過程好似打機咁", "好神奇有趣!"],
          nameEn: "Kathy Ngai",
          nameCn: "倪安慈",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/XSOzqZD6N8Q?si=ir3S4DM1ELTcLvb5",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile8.avif",
          text: ["過程咩感覺都無", "好快 好神奇!"],
          nameEn: "Donald",
          nameCn: "唐劍康",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/sw1fxUXMqes?si=e4M947UUr4AM8F0Q",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile9.avif",
          text: ["視力仲好過未矯視之前"],
          nameEn: "",
          nameCn: "麥秋成",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/HfA2NBsMVWQ?si=MyRyoCPm2WcwYqVh",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile10.avif",
          text: ["做完好似戴咗Con咁，", "連瞓覺都feel到自己睇", "得好清楚咁"],
          nameEn: "Jacky Tong",
          nameCn: "唐浩然",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dyzeGWTk8Dk?si=2dpnlA9N-7wE43Ez",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile11.avif",
          text: ["做咗SMILE有", "更多精力應付工作"],
          nameEn: "Charlotte",
          nameCn: "張沛樂",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/g0sWFw1YAs0?si=Kf6ZHKdxEs0GiOvp",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile12.avif",
          text: ["彈結他幾投入睇嘢", "都唔矇"],
          nameEn: "Cath Wong",
          nameCn: "黃妍",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/1WR18ptmCuQ?si=XTlisgHBsX_eevjT",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile13.avif",
          text: ["做SMILE過程", "都無感覺"],
          nameEn: "Aka",
          nameCn: "趙慧珊 ",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/bwQMHStnXCk?si=MyvOKeK7HBTp0ZpP",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile14.avif",
          text: ["就算以後唔可以戴Con", "都唔怕 因為我已經做", "咗SMILE"],
          nameEn: "",
          nameCn: "張名雅 ",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/inD-CATvEl4?si=792lMz0KR-ECOaG-",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile15.avif",
          text: ["同學生對打都唔怕Con", "移位"],
          nameEn: "Anthony",
          nameCn: "李偉志",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dYYyN9YZGQg?si=zzOIgO3wRJ8i-SWP",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile17.avif",
          text: ["做SMILE原來", "早做早享受"],
          nameEn: "",
          nameCn: "杜詠彤",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/T3K97UlXpHg?si=7sO2CgYMDJ4XD7qs",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile18.avif",
          text: ["以後跳繩集中", "都唔怕眼乾"],
          nameEn: "",
          nameCn: "何柱霆",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/WlFqNfq5jkI?si=CLUy7xgVR91JKigx",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile19.avif",
          text: ["原來世界可以咁清楚"],
          nameEn: "",
          nameCn: "盧善琳",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Z9s3c5Thu7w?si=_pzRK7p7IQ6-_rt8",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile20.avif",
          text: ["過程比我想像中快"],
          nameEn: "Ceci Wu",
          nameCn: "",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/o2n03FVGWbk?si=jTrcw8XArqyyonXO",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile21.avif",
          text: ["做完成個世界唔同咗"],
          nameEn: "",
          nameCn: "釗峰",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/05NSqdF7nz0?si=w5Q_utrbhZL1p1U6",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile22.avif",
          text: ["做完好感動", "開心到想喊"],
          nameEn: "Mandy",
          nameCn: "文荻",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nagwW6CP1iU?si=XWckgpCMdtbMvYya",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile23.avif",
          text: ["早啲做SMILE慳好多", "買Con錢 好抵!"],
          nameEn: "Natalie",
          nameCn: "方敏婷",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tJ3MHvKagMk?si=mHt2LqB73V_NwHYa",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile24.avif",
          text: ["長期長時間戴Con人士", "要做SMILE!"],
          nameEn: "",
          nameCn: "伍富橋",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/c6dwJ1Cbgxw?si=tekKXwPLkDc92uv5",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile25.avif",
          text: ["好似瞓一覺就做完咁"],
          nameEn: "kelly Ng",
          nameCn: "伍樂怡",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/L5GFWM7Fxqs?si=cYLRMHXMzoP5FH2n",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile26.avif",
          text: ["拍嘢睇Mon唔洗再俾", "眼鏡壓住"],
          nameEn: "Dominic Ho",
          nameCn: "何浩文",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Udnsv_lOr74?si=Xn5Ig0PliVCcfys3",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile27.avif",
          text: ["做咗SMILE就唔會再", "錯過同囡囡每個", "珍貴Moment"],
          nameEn: "Daniel Chau",
          nameCn: "周志康",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JCzzO4Y0kko?si=LKVCHmyBvkgLNuoy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile28.avif",
          text: ["每一次擘大眼都", "懷疑自己係咪唔記得除", "Con既感覺"],
          nameEn: "Ada",
          nameCn: "姜咏鑫",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JD5GGTg01to?si=zwrN5KrcBe4sWWLI",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile29.avif",
          text: ["做完好似重生", "換咗對新嘅眼咁!"],
          nameEn: "Hubert",
          nameCn: "胡鴻鈞",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/NF_S1R9DhNk?si=5ki2MXpyk8TtJKxy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile30.avif",
          text: ["唔止視力穩定 心理上", "都穩定咗"],
          nameEn: "Scarlett",
          nameCn: "莎拉",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/7T_ATu8-Vn8?si=1tseMCvC-rZE0Hpu",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile31.avif",
          text: ["揸車唔洗換眼鏡", "安全好多"],
          nameEn: "Brian Wong",
          nameCn: "黃千庭",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/KslMZ0PY2fg?si=ef_eVnM9ENSXfAGY",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile32.avif",
          text: ["原來做SMILE唔痛", "仲好快"],
          nameEn: "Judy Mok",
          nameCn: "莫穎彤",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/jO_h9YqCJzs?si=6tE41PFSmyROUS24",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile33.avif",
          text: ["長時間專注整蛋糕都唔", "眼乾"],
          nameEn: "Jimmy",
          nameCn: "劉志穎 ",
        },
      ],
    };
  },
  methods: {
    /**
     * @description: 更新矫视步骤的激活
     * @param {index} index
     */
    highlightStep(index) {
      this.activeStep = index; // 更新当前激活的步骤
      this.stopTimer();
    },
    /**
     * @description: 矫视步骤结束计时
     */
    stopTimer() {
      if (this.activeStepTimer) {
        clearInterval(this.activeStepTimer);
        this.activeStepTimer = null;
      }
    },
    toggleUnfold(hover) {
      this.xtraActive = hover;
    },
  },
  computed: {
    firstBenefit() {
      return this.benefitList.filter((i) => i.row === 1);
    },
    secondBenefit() {
      return this.benefitList.filter((i) => i.row === 2);
    },
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }
    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "SMILE微笑激光矯視是一種全新近視矯正技術，比LASIK激光矯視更安全、更快捷。希瑪微笑矯視中心為你提供免費講座，助你了解更多矯視資訊。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "smile 散光,smile 手術,smile 眼,smile 矯視 散光,矯 視 smile,SMILE 微笑激光矯視, LASIK激光矯視, 激光矯視, LASIK 香港, 激光矯視 散光, 激光矯視 近視, 激光矯視 價錢, 微笑矯視 安全, 微笑矯視, 微笑香港矯視, 微笑矯視 原理, 微笑矯視 價錢, 微笑矯視 收費, 近視矯正 散光, 眼鏡, 講座, 隱形眼鏡, 眼科手術, 眼睛健康, 投考紀律部隊, 眼睛檢查, 眼睛治療 錐形角膜, 角膜膠原交聯手術",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction/relex-smile",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction/relex-smile",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="page">
    <div class="page-header">
      <HeadV3 />
    </div>
    <div class="page-smile">
      <div class="smile">
        <div class="smile-bg">
          <div class="smile-left hidden lg:block">
            <SwiperRound
              :shareList="ShareData"
              imageKey="img"
              hrefKey="href"
            ></SwiperRound>
          </div>
          <div class="smile-right hidden lg:block">
            <div class="smile-right-title">
              <h4>最新情報</h4>
              <p>CATCH UP WITH US</p>
            </div>
            <div class="smile-right-swiper">
              <SwiperCard :images="awardsList" imageKey="imgUrl"></SwiperCard>
            </div>
          </div>
        </div>
      </div>
      <main class="main">
        <section class="newCenter bg-primary">
          <div class="newCenter-card bg-white">
            <div class="newCenter-card-title text-primary">
              <span>SMILE</span>
              <h3>微笑激光矯視</h3>
              <p>Small Incision Lenticule Extraction</p>
            </div>
            <div class="newCenter-card-nav text-text">
              <a href="/">{{ $t("Correct.newIcl.menuone") }} </a
              >&nbsp;>&nbsp;<a>{{ $t("Correct.newIcl.menuTwo") }}</a
              >&nbsp;>&nbsp;<a class="text-primary" href=""
                >SMILE微笑激光矯視</a
              >
            </div>
          </div>
        </section>
        <!-- 矫视原理 -->
        <section
          class="principles bg-primary text-white py-13 px-4 md:py16 md:px-24"
        >
          <h3><span>SMILE</span>矯正原理</h3>
          <p>
            SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE
            微笑矯視使用<span>Carl Zeiss VisuMax</span
            >激光最新3.0系統，原理是在<span>不用打開角膜瓣</span>的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人<span>矯正近視、散光及老花</span>問題，減低對眼鏡的依賴。
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
            rel="noopener noreferrer"
            target="_blank"
            class="more-button"
          >
            <span>預約諮詢</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M3.19922 26.0597L25.8278 3.43115"
                stroke="#4570B6"
                stroke-width="5.4"
                stroke-linecap="round"
              />
              <path
                d="M6.49609 2.71118H26.5987V22.1512"
                stroke="#4570B6"
                stroke-width="4.86"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </section>
        <section class="steps">
          <div class="steps-bg bg-white">
            <!-- 矫视步骤数字区 -->
            <div class="steps-number">
              <div
                v-for="(step, index) in steps"
                :key="index"
                @mouseover="highlightStep(index)"
                @click="highlightStep(index)"
                class="step"
                :class="{ active: activeStep === index }"
              >
                {{ step.number }}
              </div>
            </div>
            <!-- 矫视步骤内容区 -->
            <template v-if="activeStep >= 0">
              <div class="steps-title">
                <h3 class="subtitle">
                  <span>SMILE</span><br />
                  矯正步驟
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M0.726577 1.2312L17.593 18.0976"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.1296 3.68896L18.1296 18.6727L3.63983 18.6727"
                    stroke="#4570B6"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="steps-content">
                <img
                  :src="steps[activeStep].image"
                  :srcset="`${steps[activeStep].image} 768w, ${steps[activeStep].imagePc} 1200w`"
                  :data-src="steps[activeStep].image"
                  :alt="'步骤图像'"
                />
                <p
                  class="steps-content-text"
                  :class="'steps-content-' + steps[activeStep].number"
                >
                  {{ steps[activeStep].text }}
                </p>
              </div>
            </template>
          </div>
        </section>
        <section class="whyChoose">
          <h3 class="subtitle mb-4 md:mb-8 lg:mb-12">為何選擇希瑪?</h3>
          <div class="whyChoose-img">
            <img
              src="https://statichk.cmermedical.com/smile/smileV2/smile-why.avif"
              alt="為何選擇希瑪"
            />
          </div>
          <div class="whyChoose-intro mt-8">
            <p>
              希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲<span>Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》</span>認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。
            </p>
            <p>
              中心採用已獲<span>美國FDA認證的Carl Zeiss Visumax</span>設備，結合德國蔡司光學技術與創新激光科技，令SMILE微笑矯視過程精準又溫和。
            </p>
            <p>
              來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊<span>全程細心的跟進</span>，亦確保每位真實用家都能安心體驗矯視服務。
            </p>
          </div>
        </section>
        <section class="kol-mobile block lg:hidden">
          <userShare title="SMILE用家分享" :user-share="ShareData"></userShare>
        </section>
        <section class="benefit">
          <h3 class="subtitle">SMILE微笑激光矯視的好處</h3>
          <div class="benefit-list">
            <div class="benefit-row">
              <div
                class="benefit-item"
                :class="{ active: benefit.active }"
                v-for="benefit in firstBenefit"
                :key="benefit.id"
              >
                <div class="benefit-item-title">{{ benefit.title }}</div>
                <div class="benefit-item-content">
                  <div class="benefit-item-icon">
                    <img :src="benefit.icon" :alt="benefit.title" />
                  </div>
                  <p class="benefit-item-desc">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
            <div class="benefit-row">
              <div
                class="benefit-item"
                :class="{ active: benefit.active }"
                v-for="benefit in secondBenefit"
                :key="benefit.id"
              >
                <div class="benefit-item-title">{{ benefit.title }}</div>
                <div class="benefit-item-content">
                  <div class="benefit-item-icon">
                    <img :src="benefit.icon" :alt="benefit.title" />
                  </div>
                  <p class="benefit-item-desc">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="condition">
          <div class="condition-list">
            <div class="condition-item">1,000 度以下近視</div>
            <div class="condition-item">500 度以下散光</div>
            <div class="condition-item">角膜厚度正常</div>
          </div>
          <div class="condition-list">
            <div class="condition-item">沒有患上眼疾，如青光眼或視網膜疾病</div>
            <h3 class="subtitle">
              你適合接受<br /><span>SMILE</span>微笑矯視嗎?
            </h3>
          </div>
          <div class="condition-list">
            <div class="condition-item">發育成熟，近視度數穩定</div>
            <div class="condition-item">非懷孕或哺乳期間</div>
          </div>
          <div class="condition-list">
            <div class="condition-item">
              沒有患上自體免疫疾病，如風濕性關節炎或紅斑狼瘡
            </div>
          </div>
          <div class="condition-list">
            <div class="condition-item">不需要長期服用類固醇</div>
            <div class="condition-item">角膜沒受感染，例如發炎或曾受傷</div>
          </div>
          <p class="condition-desc">
            <span
              >如以上條件都與你的情況相符，你已符合進行SMILE微笑矯視的基本條件。</span
            ><span>若不確定，歡迎預約諮詢。</span>
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
            rel="noopener noreferrer"
            target="_blank"
            class="more-button"
          >
            <span>預約諮詢</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M3.19922 26.0592L25.8278 3.43066"
                stroke="white"
                stroke-width="5.4"
                stroke-linecap="round"
              />
              <path
                d="M6.49609 2.71094H26.5987V22.1509"
                stroke="white"
                stroke-width="4.86"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </section>
        <section class="xtra" ref="xtraSection">
          <div class="xtra-title">
            <h3 class="subtitle">SMILE XTRA角膜膠原交聯術</h3>
            <p>Comeal Collagen Cross-Linking</p>
            <span>可與SMILE微笑激光矯視同時進行</span>
          </div>
          <div
            class="xtra-paper"
            :class="{ unfolded: xtraActive }"
            @mouseover="toggleUnfold(true)"
            @mouseleave="toggleUnfold(false)"
          >
            <div class="xtra-paper-item" :class="{ unfolded: xtraActive }">
              <div class="xtra-paper-title">
                <h4>什麼是 <span>SMILE XTRA</span>？</h4>
              </div>
              <div class="xtra-paper-intro">
                <p>
                  透過在角膜局部加入維生素B2，再經紫外線V2照射，使角膜裡面的膠原蛋白緊扣，令角膜變得更加堅韌和穩定，降低角膜變形／反彈的可能
                </p>
                <img
                  class="xtra-paper-icon"
                  src="https://statichk.cmermedical.com/smile/smileV2/smile-xtra-2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="xtra-paper-item" :class="{ unfolded: xtraActive }">
              <div class="xtra-paper-title">
                <h4>我需要接受 <span>SMILE XTRA</span>？</h4>
              </div>
              <div class="xtra-paper-intro">
                <p>
                  如果你的眼晴度數較深、角膜比較薄，希望強化角膜以減低角膜變形及度數反彈的機會，經評估後，醫生會作出判斷是否需要接受SMILE
                  XTRA角膜膠原交聯術
                </p>
                <img
                  class="xtra-paper-icon"
                  src="https://statichk.cmermedical.com/smile/smileV2/smile-xtra-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
            rel="noopener noreferrer"
            target="_blank"
            class="more-button"
          >
            <span>了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M3.19922 26.0592L25.8278 3.43066"
                stroke="white"
                stroke-width="5.4"
                stroke-linecap="round"
              />
              <path
                d="M6.49609 2.71094H26.5987V22.1509"
                stroke="white"
                stroke-width="4.86"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </section>
        <section class="exercise bg-black text-white">
          <div class="exercise-title">
            <h3>SMILE微笑矯視前小練習</h3>
            <p>以下為模擬手術提示，矯視前可跟指示多進行注視練習</p>
          </div>
          <div class="exercise-image">
            <img
              src="https://statichk.cmermedical.com/smile/smileV2/smile-round.avif"
              alt="SMILE微笑矯視前小練習"
            />
          </div>
          <div class="exercise-intro">
            <p>①雙眼同時睜開，注視上圖綠點。</p>
            <p>②交替遮著左右眼，各邊30秒。注意被遮著的眼睛仍需保持睜開。</p>
          </div>
        </section>
        <section class="share block lg:hidden">
          <div class="share-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M1 0.938477L19.4751 18.0939"
                stroke="#4570B6"
                stroke-width="1.97947"
              />
            </svg>
            <span>同朋友分享一下啦！</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M20 0.938477L1.52493 18.0939"
                stroke="#4570B6"
                stroke-width="1.97947"
              />
            </svg>
          </div>
          <div class="share-group">
            <div class="share-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
              >
                <path
                  d="M0.282114 11.5524C0.28129 9.57421 1.74018 7.94793 3.63508 7.78225C4.78653 7.68169 5.78468 8.04519 6.60891 8.85874C6.74161 8.9898 6.83145 9.00134 6.99135 8.9049C8.88461 7.7567 10.7828 6.61427 12.6827 5.47761C12.831 5.38859 12.8508 5.31193 12.7981 5.15037C12.0958 2.99822 13.5432 0.683684 15.7842 0.36222C17.9075 0.0580664 19.8073 1.52279 20.0529 3.65351C20.2771 5.60042 18.852 7.4443 16.9044 7.71961C15.6318 7.8993 14.552 7.50695 13.6594 6.59201C13.5638 6.49393 13.4987 6.48074 13.3816 6.55163C11.462 7.71054 9.5407 8.86616 7.61859 10.0193C7.50567 10.0869 7.47105 10.1537 7.51721 10.2839C7.75129 10.9466 7.79497 11.6233 7.61529 12.3058C7.57326 12.4666 7.6293 12.5416 7.76613 12.6116C9.43931 13.4647 11.1109 14.322 12.7832 15.1792C12.9176 15.2476 13.0544 15.3136 13.1821 15.3919C13.3091 15.4693 13.3956 15.4578 13.4954 15.3366C14.0962 14.6088 14.8652 14.1736 15.7983 14.0228C17.2151 13.7936 18.7119 14.4712 19.4801 15.696C20.8871 17.938 19.6458 20.8378 17.0536 21.3637C14.9996 21.7807 12.9678 20.3432 12.6654 18.262C12.5986 17.802 12.5961 17.3445 12.7338 16.8978C12.7972 16.6926 12.7404 16.6002 12.5508 16.5038C10.7597 15.5946 8.97362 14.6756 7.18834 13.7541C7.05894 13.6873 6.98393 13.7038 6.89327 13.8142C6.06244 14.8231 4.98847 15.2748 3.68701 15.2056C2.07234 15.119 0.559055 13.7252 0.327446 12.1096C0.297774 11.9052 0.274696 11.7016 0.282938 11.5516L0.282114 11.5524Z"
                  fill="#4570B6"
                />
              </svg>
            </div>
            <div class="share-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_11479_977)">
                  <path
                    d="M9.10209 6.12598C10.8869 6.12803 12.1807 6.64582 13.3111 7.62182C13.4894 7.77592 13.6707 7.92592 13.845 8.0831C14.1985 8.40056 14.2673 8.87417 13.9814 9.25738C13.6428 9.71147 13.2852 10.1522 12.9157 10.5806C12.609 10.9361 12.1369 10.9587 11.7713 10.6618C11.5432 10.4769 11.3271 10.2755 11.099 10.0895C10.0602 9.24505 8.50948 9.28615 7.55234 10.2303C6.53344 11.2361 5.53248 12.2645 4.5594 13.3175C3.81341 14.125 3.64808 15.1113 3.98671 16.1582C4.32535 17.2051 5.06536 17.8389 6.10915 18.03C6.97666 18.1882 7.77544 17.9633 8.43876 17.3345C8.6529 17.1321 8.8511 16.9123 9.06026 16.7047C9.44371 16.3256 9.89489 16.3102 10.2813 16.6852C10.6618 17.0551 11.0313 17.4372 11.3909 17.8287C11.7066 18.1728 11.7205 18.6485 11.4217 18.9958C10.3939 20.1937 9.1728 21.0484 7.60911 21.3423C4.41897 21.9412 1.2119 19.643 0.679043 16.3441C0.334432 14.2082 0.910112 12.3641 2.37122 10.82C3.29848 9.83989 4.23969 8.87315 5.18886 7.91564C6.35715 6.73623 7.76647 6.14139 9.10109 6.127L9.10209 6.12598Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M12.3086 15.6265C10.73 15.6194 9.43419 15.1046 8.30574 14.1266C8.13443 13.9776 7.96113 13.8317 7.78982 13.6817C7.42031 13.3571 7.34661 12.8814 7.63843 12.491C7.97806 12.0369 8.33562 11.5972 8.70413 11.1688C9.00891 10.8144 9.48299 10.7938 9.84852 11.0907C10.0637 11.2654 10.2658 11.4565 10.483 11.628C11.6503 12.5516 13.1532 12.4623 14.197 11.3989C15.1302 10.4486 16.0595 9.49422 16.9778 8.52849C17.7337 7.73332 17.9628 6.7717 17.666 5.71146C17.3632 4.63273 16.6421 3.95878 15.5774 3.73687C14.681 3.54989 13.8633 3.7718 13.1761 4.41904C12.962 4.6204 12.7648 4.84232 12.5546 5.04882C12.1722 5.42483 11.717 5.43921 11.3325 5.06525C10.9521 4.6954 10.5826 4.31322 10.224 3.92077C9.91625 3.58482 9.89334 3.11121 10.1812 2.77423C11.1463 1.64413 12.2817 0.796559 13.7418 0.466776C17.2029 -0.31402 20.5633 2.13316 20.9866 5.76489C21.2087 7.67167 20.6819 9.35347 19.411 10.7445C18.3473 11.9085 17.2636 13.0581 16.1083 14.1266C15.0077 15.1447 13.6851 15.6111 12.3076 15.6255L12.3086 15.6265Z"
                    fill="#4570B6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11479_977">
                    <rect
                      width="20.4545"
                      height="21.1144"
                      fill="white"
                      transform="translate(0.582031 0.322266)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </div>
    <FooterV2 class="smile-footer" />
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #4570b6;
$text-color: #6d6e71;
@keyframes xtraBottom {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-72px, 0);
  }
}

@keyframes xtraTop {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(72px, 328px);
  }
}

@keyframes xtraTriangle {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 144px;
    height: 48px;
  }
}
.subtitle {
  color: $primary-color;
  font-weight: 900;
  font-size: #{"clamp(1.25rem, 1.023rem + 1.14vw, 1.875rem)"};
  line-height: #{"clamp(1.531rem, 1.406rem + 0.63vw, 1.875rem)"};
}
.more {
  &-button {
    padding: #{"clamp(0.375rem, 0.239rem + 0.68vw, 0.75rem)"} #{"clamp(2rem, 1.455rem + 2.73vw, 3.5rem)"};
    display: flex;
    gap: #{"clamp(0.563rem, 0.403rem + 0.8vw, 1rem)"};
    align-items: center;
    background-color: $primary-color;
    color: #fff;
    border-radius: #{"clamp(6.25rem, 4.432rem + 9.09vw, 11.25rem)"};
    width: fit-content;
    margin: 0 auto;
    span {
      font-family: "Noto Sans TC";
      font-size: #{"clamp(1.25rem, 0.886rem + 1.82vw, 2.25rem)"};
      font-weight: 700;
      line-height: #{"clamp(2.25rem, 1.614rem + 3.18vw, 4rem)"};
      letter-spacing: #{"clamp(0.063rem, 0.044rem + 0.09vw, 0.113rem)"};
      text-align: justify;
    }
    svg {
      width: #{"clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)"};
      height: #{"clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem)"};
    }
  }
}
.smile {
  position: absolute;
  &-bg {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url("https://statichk.cmermedical.com/smile/smileV2/smile-bg.avif")
      no-repeat;
    background-size: cover;
  }
  &-left {
    width: 28.75vw;
    height: 100vh;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid $primary-color;
      width: 200%;
      height: 100%;
      z-index: 2;
      background: transparent;
      border-radius: 50%;
      pointer-events: none;
    }
    &::before {
      content: "";
      border: 2px dashed $primary-color;
      z-index: 1;
      width: 180%;
      height: 80%;
      border-radius: 50%;
      position: absolute;
      top: 10%;
      right: 25%;
      pointer-events: none;
    }
  }
  &-right {
    width: 30vw;
    position: relative;
    height: 100vh;

    &-title {
      // padding-left: 5.2083vw; /* 100 / 1920 * 100 ≈ 5.2083 */
      // padding-bottom: 1.25vw; /* 24 / 1920 * 100 = 1.25 */
      padding: 200px 0 1.25vw 5.2083vw;

      h4 {
        color: #000;
        text-align: left;
        font-family: "Noto Sans TC";
        font-size: 1.3139vw; /* 25.226 / 1920 * 100 ≈ 1.3139 */
        font-style: normal;
        font-weight: 300;
        line-height: 200%; /* 保持不变 */
        letter-spacing: 0.6568vw; /* 1.261 / 1920 * 100 ≈ 0.6568 */

        &::before {
          content: "";
          display: inline-block;
          margin-right: 0.5208vw; /* 10 / 1920 * 100 ≈ 0.5208 */
          width: 0.78125vw; /* 15 / 1920 * 100 = 0.78125 */
          height: 0.78125vw; /* 15 / 1920 * 100 = 0.78125 */
          flex-shrink: 0;
          background: #4570b6;
          border-radius: 50%;
        }
      }

      p {
        color: $primary-color;
        font-family: "ITC Avant Garde Gothic Pro";
        font-size: 1.2104vw; /* 23.23 / 1920 * 100 ≈ 1.2104 */
        font-style: normal;
        font-weight: 700;
        line-height: 217%; /* 保持不变 */
        letter-spacing: 1.16px; /* 1.161 / 1920 * 100 ≈ 0.6047 */
      }
    }
    &-swiper {
      width: 100%;
      height: 500px;
    }
  }
  &-footer {
    position: relative;
    z-index: 5;
    margin-top: 0 !important;
  }
}
.main {
  z-index: 3;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}
.newCenter {
  position: relative;
  &-card {
    font-family: "Noto Sans TC";
    font-weight: 400;
    border-radius: 0 0 1rem 1rem;
    padding: #{"clamp(9rem, 4.955rem + 20.23vw, 20.125rem)"} 0 #{"clamp(1.375rem, 1.193rem + 0.91vw, 1.875rem)"}
      #{"clamp(2rem, 1.409rem + 2.95vw, 3.625rem)"};
    &-title {
      span {
        font-size: #{"clamp(4.375rem, 2.83rem + 7.73vw, 8.625rem)"};
        line-height: #{"clamp(4.75rem, 3.068rem + 8.41vw, 9.375rem)"};
        font-weight: 700;
        font-family: "ITC Avant Garde Gothic Pro";
      }
      h3 {
        font-size: #{"clamp(2.375rem, 1.557rem + 4.09vw, 4.625rem)"};
        line-height: #{"clamp(2.5rem, 1.545rem + 4.77vw, 5.125rem)"};
      }
      p {
        font-size: #{"clamp(0.938rem, 0.597rem + 1.7vw, 1.875rem)"};
        line-height: #{"clamp(2rem, 1.273rem + 3.64vw, 4rem)"};
      }
    }
    &-nav {
      margin-top: #{"clamp(2rem, 1.182rem + 4.09vw, 4.25rem)"};
    }
  }
}
// 矫视原理
.principles {
  padding: #{"clamp(2rem, 0.545rem + 7.27vw, 6rem)"} #{"clamp(1rem, -1rem + 10vw, 6.5rem)"};
  position: relative;
  h3 {
    text-align: center;
    font-weight: 900;
    line-height: 30px;
    font-size: #{"clamp(1.25rem, 1.023rem + 1.14vw, 1.875rem)"};
    margin-bottom: #{"clamp(1rem, 0.727rem + 1.36vw, 1.75rem)"};
    span {
      font-weight: 700;
    }
  }
  p {
    font-weight: 300;
    font-size: #{"clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"};
    line-height: 35px;
    letter-spacing: #{"clamp(0.044rem, 0.037rem + 0.03vw, 0.063rem)"};
    span {
      font-weight: 700;
    }
  }
  .more {
    &-button {
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: #fff;
      color: $primary-color;
      border: 2px solid $primary-color;
    }
  }
}
// 矫视步骤
.steps {
  position: relative;
  background: linear-gradient(
    to bottom,
    $primary-color 0 50px,
    white 50px 100%
  );
  .subtitle {
    font-size: #{"clamp(1.25rem, 0.931rem + 1.31vw, 2.5rem)"};
    line-height: #{"clamp(1.5rem, 1.086rem + 1.7vw, 3.125rem)"};
    span {
      font-size: #{"clamp(1.25rem, 1.091rem + 0.65vw, 1.875rem)"};
      line-height: #{"clamp(1.5rem, 1.086rem + 1.7vw, 3.125rem)"};
    }
  }
  &-title {
    display: flex;
    align-items: center;
    position: absolute;
    // gap: #{"clamp(1rem, 0.136rem + 4.32vw, 3.375rem)"};
    gap: #{"clamp(2.065rem, 1.572rem + 2.02vw, 4rem)"};
    svg {
      width: #{"clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem)"};
      height: #{"clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem)"};
    }
  }
  &-bg {
    border-radius: 1rem 1rem 0 0;
    padding: #{"clamp(4.337rem, 3.881rem + 1.87vw, 6.125rem)"} #{"clamp(1.688rem, 1.21rem + 1.96vw, 3.563rem)"}
      #{"clamp(3.984rem, 2.594rem + 5.7vw, 9.438rem)"};
  }
  &-number {
    display: flex;
    justify-content: space-between;
    .step {
      cursor: pointer;
      text-align: right;
      width: 30%;
      color: $text-color;
      font-size: #{"clamp(1.25rem, 0.841rem + 2.05vw, 2.375rem)"};
      margin-bottom: #{"clamp(1.25rem, 0.977rem + 1.36vw, 2rem)"};
      position: relative;
      border-bottom: none;
      &.active {
        color: $primary-color;
        font-weight: 700;
        transition: color 0.3s ease;
        /* 伪元素在active状态下的样式 */
        &::after {
          height: #{"clamp(0.156rem, 0.099rem + 0.28vw, 0.313rem)"};
          background: $primary-color;
        }
      }
      /* 非active状态下的伪元素样式 */
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: #{"clamp(0.031rem, 0.02rem + 0.06vw, 0.063rem)"};
        background: $text-color;
        transition: all 0.3s ease; /* 过渡伪元素的高度和背景色 */
      }
    }
  }
  &-content {
    color: $text-color;
    position: relative;
    img {
      width: 100%;
    }
    &-text {
      position: absolute;
      font-family: "Noto Sans TC";
      font-weight: 400;
      font-size: #{"clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"};
      line-height: #{"clamp(1.125rem, 0.739rem + 1.93vw, 2.188rem)"};
      margin-top: #{"clamp(0.563rem, 0.358rem + 1.02vw, 1.125rem)"};
    }
  }
}
.whyChoose {
  padding: 0 #{"clamp(1.688rem, 1.21rem + 1.96vw, 3.563rem)"} #{"clamp(2rem, 1.273rem + 3.64vw, 4rem)"};
  img {
    width: 100%;
  }
  &-intro {
    color: $text-color;
    font-weight: 300;
    font-size: #{"clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"};
    line-height: 30px;
    letter-spacing: #{"clamp(0.156rem, 0.077rem + 0.4vw, 0.375rem)"};
    span {
      color: $primary-color;
      font-weight: 700;
    }
  }
}
// 好处
.benefit {
  padding: #{"clamp(1.5rem, 1.091rem + 2.05vw, 2.625rem)"} 27px;
  h3 {
    font-family: "Noto Sans TC";
    text-align: center;
    padding-bottom: #{"clamp(1.5rem, 1.091rem + 2.05vw, 2.625rem)"};
  }
  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-row {
    display: flex;
    justify-content: center;
    position: relative;
    width: 96%;
    &:first-child {
      margin-top: 0;
      z-index: 1;
    }
    &:last-child {
      margin-top: #{"clamp(-1.5rem, -1.682rem + 0.91vw, -1rem)"};
      z-index: 2;
    }
  }
  &-item {
    flex: 1;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease;
    overflow: hidden;
    margin: 0 #{"clamp(-1.5rem, -1.682rem + 0.91vw, -1rem)"};
    position: relative;
    text-align: center;
    &-title {
      font-weight: 700;
      color: $primary-color;
      font-size: #{"clamp(1rem, 0.818rem + 0.91vw, 1.5rem)"};
      line-height: #{"clamp(0.531rem, 0.27rem + 1.31vw, 1.25rem)"};
      letter-spacing: #{"clamp(0.25rem, 0.199rem + 0.26vw, 0.391rem)"};
    }
    &-icon {
      width: #{"clamp(3.25rem, -1.886rem + 25.68vw, 17.375rem)"};
      margin: 0 auto 2px;
    }
    &-content {
      opacity: 0;
      height: 0;
      overflow: hidden;
      img {
        margin: 0 auto;
      }
      p {
        color: #fff;
        font-size: #{"clamp(1rem, 0.818rem + 0.91vw, 1.5rem)"};
        line-height: #{"clamp(1rem, 0.909rem + 0.45vw, 1.25rem)"};
        font-weight: 400;
        white-space: pre-line;
        line-height: 1.2;
      }
    }
    &.acive {
      .benefit-item-title {
        opacity: 0;
        height: 0;
      }
      .benefit-item-content {
        opacity: 1;
        height: auto;
      }
    }
    &:hover {
      background-color: $primary-color;
      transition: all 0.4s ease;
      .benefit-item-title {
        opacity: 0;
        height: 0;
      }
      .benefit-item-content {
        opacity: 1;
        height: auto;
      }
    }
  }
}
// 是否适合
.condition {
  padding: #{"clamp(1.875rem, 0.284rem + 7.95vw, 6.25rem)"} #{"clamp(1.125rem, 0.852rem + 1.36vw, 1.875rem)"}
    0;
  position: relative;
  width: 100%;
  background: url("https://statichk.cmermedical.com/smile/smileV2/smile-condition-bg.svg")
    no-repeat;
  background-size: #{"clamp(4.375rem, 2.557rem + 9.09vw, 9.375rem)"} auto;
  background-position: 0;
  h3 {
    white-space: nowrap;
    font-family: "Noto Sans HK";
    span {
      font-family: "ITC Avant Garde Gothic Pro";
    }
  }
  &-list {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: #{"clamp(1.25rem, 0.886rem + 1.82vw, 2.25rem)"};
    &:nth-child(4) {
      margin-left: #{"clamp(2.5rem, 1.591rem + 4.55vw, 5rem)"};
    }
  }
  &-item {
    flex: 1;
    color: $text-color;
    font-weight: 400;
    background-color: #fff;
    font-size: #{"clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"};
    line-height: #{"clamp(1.125rem, 0.716rem + 2.05vw, 2.25rem)"};
    flex: 0 1 auto;
    padding: #{"clamp(0.625rem, 0.534rem + 0.45vw, 0.875rem)"} #{"clamp(0.625rem, 0.125rem + 2.5vw, 2rem)"};
    border: 2px solid $primary-color;
    box-shadow: 3px #{"clamp(0.25rem, 0.182rem + 0.34vw, 0.438rem)"} 2px $primary-color;
    border-radius: #{"clamp(3.125rem, 1.989rem + 5.68vw, 6.25rem)"};
  }
  &-desc {
    color: $text-color;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: #{"clamp(0.938rem, 0.824rem + 0.57vw, 1.25rem)"};
    line-height: #{"clamp(1.375rem, 1.011rem + 1.82vw, 2.375rem)"};
    letter-spacing: #{"clamp(0rem, -0.036rem + 0.18vw, 0.1rem)"};
    font-weight: 400;
    margin-top: #{"clamp(0.75rem, -0.205rem + 4.77vw, 3.375rem)"};
    margin-bottom: #{"clamp(1rem, 0.136rem + 4.32vw, 3.375rem)"};
  }
}
.xtra {
  padding: #{"clamp(3.5rem, 2.864rem + 3.18vw, 5.25rem)"} #{"clamp(1.125rem, 0.852rem + 1.36vw, 1.875rem)"};
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzY5IiBoZWlnaHQ9IjExODEiIHZpZXdCb3g9IjAgMCA3NjkgMTE4MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc2OCAxTDEgMTE4MCIgc3Ryb2tlPSIjNDU3MEI2Ii8+CjxwYXRoIGQ9Ik0wLjk5OTk4NSAxTDc2OCAxMTgwIiBzdHJva2U9IiM0NTcwQjYiLz4KPC9zdmc+Cg==")
    no-repeat;
  background-size: cover;
  &-title {
    text-align: center;
    padding-bottom: #{'clamp(1.4rem, 0.922rem + 1.96vw, 3.275rem)'};
    p {
      color: $primary-color;
      font-family: "ITC Avant Garde Gothic Pro";
      font-weight: 700;
      font-size: #{"clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem)"};
      line-height: #{"clamp(1.5rem, 0.909rem + 2.95vw, 3.125rem)"};
    }
    span {
      color: $text-color;
      font-weight: 500;
      font-size: #{"clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem)"};
      line-height: #{"clamp(1.125rem, 0.716rem + 2.05vw, 2.25rem)"};
      letter-spacing: #{"clamp(0.075rem, 0.057rem + 0.09vw, 0.125rem)"};
    }
  }
  &-paper {
    position: relative;
    &-item {
      border: 1px solid #000;
      background-color: #fff;
      position: absolute;
      left: 72px;
      width: #{"clamp(18.063rem, 13.632rem + 18.17vw, 35.442rem)"};
      padding: #{"clamp(1.804rem, 1.384rem + 1.72vw, 3.451rem)"} #{"clamp(1.375rem, 0.97rem + 1.66vw, 2.962rem)"}
        #{"clamp(2.138rem, 1.758rem + 1.56vw, 3.625rem)"};
      &:nth-child(1) {
        z-index: 1;
        &.unfolded {
          animation: xtraBottom 1s ease forwards;
          &::after {
            content: "";
            z-index: 2;
            width: 0;
            height: 0;
            background-color: #dbdbdb;
            clip-path: polygon(0 100%, 100% 100%, 100% 0);
            animation: xtraTriangle 1s ease forwards;
            position: absolute;
            left: 0;
            bottom: -1px;
          }
        }
      }
      &:nth-child(2) {
        z-index: 3;
        &.unfolded {
          animation: xtraTop 1s ease forwards;
        }
      }
    }
    &-title {
      color: $primary-color;
      font-weight: 700;
      font-family: "Noto Sans TC";
      font-size: #{"clamp(1rem, 0.857rem + 0.59vw, 1.563rem)"};
      line-height: #{"clamp(0.636rem, 0.48rem + 0.64vw, 1.25rem)"};
      margin-bottom: #{"clamp(1.018rem, 0.752rem + 1.09vw, 2.063rem)"};
      span {
        font-family: "ITC Avant Garde Gothic Pro";
      }
    }
    &-intro {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: #{"clamp(0.5rem, 0.022rem + 1.96vw, 2.375rem)"};
      p {
        color: $text-color;
        text-align: justify;
        font-family: "Noto Sans TC";
        font-weight: 400;
        font-size: #{"clamp(0.875rem, 0.779rem + 0.39vw, 1.25rem)"};
        line-height: #{"clamp(1.113rem, 0.839rem + 1.12vw, 2.188rem)"};
        letter-spacing: #{"clamp(0.219rem, 0.211rem + 0.03vw, 0.25rem)"};
      }
    }
    &-icon {
      height: #{"clamp(5.125rem, 3.898rem + 6.14vw, 8.5rem)"};
    }
  }
}
// 小练习
.exercise {
  font-family: "Noto Sans TC";
  padding: #{"clamp(1.5rem, 1.364rem + 0.68vw, 1.875rem)"} 0 #{"clamp(3.75rem, 2.568rem + 5.91vw, 7rem)"};
  &-title {
    text-align: center;
    h3 {
      font-weight: 900;
      font-size: #{"clamp(1.25rem, 1.023rem + 1.14vw, 1.875rem)"};
      line-height: #{"clamp(1.375rem, 1.193rem + 0.91vw, 1.875rem)"};
    }
    p {
      font-weight: 400;
      font-size: #{"clamp(0.875rem, 0.648rem + 1.14vw, 1.5rem)"};
      line-height: #{"clamp(1.375rem, 1.193rem + 0.91vw, 1.875rem)"};
      margin-top: #{"clamp(0.25rem, -0.068rem + 1.59vw, 1.125rem)"};
      margin-bottom: #{"clamp(1.875rem, 1.739rem + 0.68vw, 2.25rem)"};
    }
  }
  &-image {
    padding: 0 #{"clamp(2.125rem, -0.739rem + 14.32vw, 10rem)"};
    display: flex;
    justify-content: center;
  }
  &-intro {
    padding: #{"clamp(1.5rem, 1.182rem + 1.59vw, 2.375rem)"} #{"clamp(2.375rem, 2.011rem + 1.82vw, 3.375rem)"}
      0;
  }
}
.share {
  padding: 24px 0 10px;
  &-title {
    display: flex;
    justify-content: center;
    gap: 7px;
    span {
      color: #000;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 16.496px; /* 82.478% */
    }
  }
  &-group {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 20px;
    &-item {
      border-radius: 50%;
      padding: 16px;
      border: 1px solid $primary-color;
    }
  }
}
:deep(.UserShareBox-list::-webkit-scrollbar-track) {
  margin: 0 59px;
}
// 手机和平板
@media screen and (max-width: 1199px) {
}
// 平板和电脑
@media screen and (min-width: 768px) {
  .principles {
    .more-button {
      bottom: -6%;
    }
  }
}
// 电脑端
@media screen and (min-width: 1200px) {
  .main {
    width: 768px;
    border-left: 1.5px solid $primary-color;
    border-right: 1.5px solid $primary-color;
  }
  .benefit {
    padding: 0;
  }
}
// 手机端
@media screen and (max-width: 767px) {
}
// 平板端
@media screen and (min-width: 768px) and (max-width: 1199px) {
}
// @media screen and (min-width: 768px) {
//   .smile {
//     &-bg {
//       height: 100vh;
//     }
//     &-footer {
//       background-color: #f4fafc;
//       padding-bottom: 10px;
//       width: 100vw;
//     }
//   }
//   .main {
//     border-left: 1.5px solid $primary-color;
//     border-right: 1.5px solid $primary-color;
//   }
//   .principles {
//     p {
//       font-weight: 400;
//       span {
//         font-weight: 900;
//       }
//     }
//     .more-button {
//       bottom: -6%;
//     }
//   }
//   .steps {
//     &-content {
//       &-text {
//         bottom: -50px;
//         margin-left: 40px;
//         white-space: pre-line;
//       }
//       &-02 {
//         color: #fff;
//         bottom: 28px;
//         margin-left: 44px;
//       }
//       &-03 {
//         bottom: 28px;
//         margin-left: 44px;
//       }
//     }
//   }
//   .condition {
//     margin-right: 14rem;
//     &-desc {
//       span {
//         display: block;
//       }
//     }
//   }
// }
// @media screen and (max-width: 767px) {
//   .mbShow {
//     visibility: visible;
//   }
//   .pcShow {
//     visibility: hidden;
//   }
//   // .benefit {
//   //   &-row {
//   //     width: 96%;
//   //   }
//   // }
// }
</style>
