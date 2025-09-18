<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-14 08:56:29
 * @LastEditTime: 2025-09-18 09:21:01
 * @FilePath: /pages/new-page/smileV2.vue
 * @Description: 矫视服务-微笑激光矫视，第二版
-->
<script>
import HeadV3 from "@/components/Publice/HeadV3.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import UserShare from "@/components/commom/UserShare/UserShare.vue";
import ShareSection from "@/components/commom/share/ShareSection.vue";
import SwiperCard from "@/components/commom/swiper/SwiperCard.vue";
import SwiperRound from "@/components/commom/swiper/SwiperRound.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    FooterMobile,
    UserShare,
    ShareSection,
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
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.xtraActive = true; // 进入视区
        } else {
          this.xtraActive = false; // 离开视区
        }
      },
      { threshold: 0.3 } // 当可见比例达到 20% 时触发
    );

    observer.observe(this.$refs.xtraAnimateBox);
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
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "SMILE矯正原理",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE 微笑矯視使用Carl Zeiss VisuMax激光最新3.0系統，原理是在不用打開角膜瓣的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人矯正近視、散光及老花問題，減低對眼鏡的依賴。",
                },
              },
              {
                "@type": "Question",
                name: "SMILE矯正步驟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "以全飛秒激光直接切割角膜中層，製作一個約2-2.5mm的小切口，將切割了的角膜透鏡從切口抽出。",
                },
              },
              {
                "@type": "Question",
                name: "為何選擇希瑪?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。中心採用已獲美國FDA認證的Carl Zeiss Visumax設備，結合德國蔡司光學技術與創新激光科技，令SMILE微笑矯視過程精準又溫和。來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊全程細心的跟進，亦確保每位真實用家都能安心體驗矯視服務。",
                },
              },
              {
                "@type": "Question",
                name: "SMILE微笑激光矯視的好處",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "手術簡單，無需製造角膜瓣；術後復原快，最快術後翌日生活、工作；手術時間短，最快10-15分鐘完成；術後影響少，減低術後眼乾及感染的可能性；微創，傷口只有約2-2.5mm；效果穩定，視力改善顯著。",
                },
              },
              {
                "@type": "Question",
                name: "你適合接受SMILE微笑矯視嗎?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1,000 度以下近視；500 度以下散光；角膜厚度正常；沒有患上眼疾，如青光眼或視網膜疾病；發育成熟，近視度數穩定；非懷孕或哺乳期間；沒有患上自體免疫疾病，如風濕性關節炎或紅斑狼瘡；不需要長期服用類固醇；角膜沒受感染，例如發炎或曾受傷。",
                },
              },
              {
                "@type": "Question",
                name: "什麼是 SMILE XTRA？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "透過在角膜局部加入維生素B2，再經紫外線V2照射，使角膜裡面的膠原蛋白緊扣，令角膜變得更加堅韌和穩定，降低角膜變形／反彈的可能。",
                },
              },
              {
                "@type": "Question",
                name: "我需要接受 SMILE XTRA？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果你的眼晴度數較深、角膜比較薄，希望強化角膜以減低角膜變形及度數反彈的機會，經評估後，醫生會作出判斷是否需要接受SMILE XTRA角膜膠原交聯術。",
                },
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
<template>
  <div class="page font-tc">
    <HeadV3 />
    <div class="page-smile">
      <main class="main">
        <section class="newCenter">
          <div
            class="newCenter-card pt-20 md:pt-[142px] pl-8 md:pl-[57px] pb-5 md:pb-[30px]"
          >
            <div class="newCenter-card-title text-primary">
              <span
                class="font-bold text-[69.064px] md:text-[137.67px] leading-[75.556px] md:leading-[150.611px] font-en"
                >SMILE</span
              >
              <h1
                class="text-[37.289px] md:text-[74.332] leading-[40.795px] md:leading-[81.319px]"
              >
                微笑激光矯視
              </h1>
              <p class="text-sm md:text-3xl leading-8 md:leading-[64.668px]">
                Small Incision Lenticule Extraction
              </p>
            </div>
            <div class="newCenter-card-nav mt-8 md:mt-[68.39px] text-text font-tc text-sm md:text-xl font-light leading-[21.822px] md:leading-[43.5px] tracking-[0.36px] md:tracking-[0.6px]">
              <a href="/">{{ $t("Correct.newIcl.menuone") }} </a
              >&nbsp;>&nbsp;<a>{{ $t("Correct.newIcl.menuTwo") }}</a
              >&nbsp;>&nbsp;<a class="text-primary font-medium" href=""
                >SMILE微笑激光矯視</a
              >
            </div>
          </div>
        </section>
        <!-- 矫视原理 -->
        <section
          class="principles bg-primary text-white py-13 px-4 md:py16 md:px-24"
        >
          <h2><span>SMILE</span>矯正原理</h2>
          <p>
            SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE
            微笑矯視使用<span>Carl Zeiss VisuMax</span>激光最新3.0系統，原理是在<span>不用打開角膜瓣</span>的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人<span>矯正近視、散光及老花</span>問題，減低對眼鏡的依賴。
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
                <h2 class="subtitle mb-0">
                  <span>SMILE</span><br />
                  矯正步驟
                </h2>
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
          <h2 class="subtitle mb-4 md:mb-8 lg:mb-12 text-left">為何選擇希瑪?</h2>
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
          <h2 class="subtitle mb-0">SMILE微笑激光矯視的好處</h2>
          <div class="benefit-list">
            <div class="benefit-row">
              <div
                class="benefit-item"
                :class="{ active: benefit.active }"
                v-for="benefit in firstBenefit"
                :key="benefit.id"
              >
                <h3 class="benefit-item-title">{{ benefit.title }}</h3>
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
                <h3 class="benefit-item-title">{{ benefit.title }}</h3>
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
            <h2 class="subtitle mb-0">
              你適合接受<br /><span>SMILE</span>微笑矯視嗎?
            </h2>
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
        <section class="xtra" ref="xtraAnimateBox">
          <div class="xtra-title">
            <h2 class="subtitle mb-0">SMILE XTRA角膜膠原交聯術</h2>
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
                <h3>什麼是 <span>SMILE XTRA</span>？</h3>
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
                <h3>我需要接受 <span>SMILE XTRA</span>？</h3>
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
            <h2>SMILE微笑矯視前小練習</h2>
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
        <ShareSection />
      </main>
      <div class="smile">
        <div class="smile-bg">
          <div class="smile-left hidden">
            <SwiperRound
              :shareList="ShareData"
              imageKey="img"
              hrefKey="href"
            ></SwiperRound>
          </div>
          <div class="smile-right hidden">
            <div class="smile-right-title">
              <h2>最新情報</h2>
              <p>CATCH UP WITH US</p>
            </div>
            <div class="smile-right-swiper">
              <SwiperCard :images="awardsList" imageKey="imgUrl"></SwiperCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterV2 class="smile-footer" />
    <FooterMobile />
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width:991px) {
  :deep(.footer-bottom){
    margin-bottom: 0;
    background-color: #f4fafc;
  }
}
</style>
