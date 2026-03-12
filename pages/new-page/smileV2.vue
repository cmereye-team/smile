<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-14 08:56:29
 * @LastEditTime: 2026-02-13 14:44:58
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
import Backtop from "@/components/commom/Backtop/Backtop.vue";
export default {
  components: {
    HeadV3,
    FooterV2,
    FooterMobile,
    UserShare,
    ShareSection,
    SwiperCard,
    SwiperRound,
    Backtop,
  },
  data() {
    return {
      xtraActive: false, // 是否展开状态
      activeStep: 0, // 当前激活的矫视步骤索引
      activeStepTimer: null,
      bannerList: [
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
          text: "將切割了的角膜透鏡從切口抽出",
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
          href: "https://www.youtube.com/embed/TGxol6pNXSY",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-001.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-001.avif",
          text: ["就算落雨都唔會再影響", "到我跑步嘅心情"],
          nameEn: "",
          nameCn: "黃啟樂",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/CJEE6UQKPes",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-002.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-002.avif",
          text: ["唔洗戴Con係一種", "解脫!可以瀟灑出門口"],
          nameEn: "",
          nameCn: "尹焯熙",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tLsWfdZy4P4",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-003.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-003.avif",
          text: ["一行出去已經感受到", "原來我望嘢可以咁清楚"],
          nameEn: "",
          nameCn: "馬燕茹",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/_wk_gZGzB1s",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-004.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-004.avif",
          text: ["做完多咗眼神交流", "傳波都準咗"],
          nameEn: "",
          nameCn: "李旭川",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/qBsPhkIaVfo",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-005.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-005.avif",
          text: ["想做就去做啦!"],
          nameEn: "",
          nameCn: "游嘉欣",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/oHDOFYMEUsk",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-006.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-006.avif",
          text: ["終於可以掉咗", "縮細眼嘅眼鏡"],
          nameEn: "Shirley Chan",
          nameCn: "陳欣妍",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nrsLktnnW_I",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-007.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-007.avif",
          text: ["過程好似打機咁", "好神奇有趣!"],
          nameEn: "Kathy Ngai",
          nameCn: "倪安慈",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/XSOzqZD6N8Q",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-008.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-008.avif",
          text: ["過程咩感覺都無", "好快 好神奇!"],
          nameEn: "Donald",
          nameCn: "唐劍康",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/sw1fxUXMqes",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-009.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-009.avif",
          text: ["視力仲好過未矯視之前"],
          nameEn: "",
          nameCn: "麥秋成",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/HfA2NBsMVWQ",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-010.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-010.avif",
          text: ["做完好似戴咗Con咁，", "連瞓覺都feel到自己睇", "得好清楚咁"],
          nameEn: "Jacky Tong",
          nameCn: "唐浩然",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dyzeGWTk8Dk",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-011.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-011.avif",
          text: ["做咗SMILE有", "更多精力應付工作"],
          nameEn: "Charlotte",
          nameCn: "張沛樂",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/g0sWFw1YAs0",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-012.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-012.avif",
          text: ["彈結他幾投入睇嘢", "都唔矇"],
          nameEn: "Cath Wong",
          nameCn: "黃妍",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/1WR18ptmCuQ",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-013.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-013.avif",
          text: ["做SMILE過程", "都無感覺"],
          nameEn: "Aka",
          nameCn: "趙慧珊",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/bwQMHStnXCk",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-014.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-014.avif",
          text: ["就算以後唔可以戴Con", "都唔怕 因為我已經做", "咗SMILE"],
          nameEn: "",
          nameCn: "張名雅",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/inD-CATvEl4",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-015.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-015.avif",
          text: ["同學生對打都唔怕Con", "移位"],
          nameEn: "Anthony",
          nameCn: "李偉志",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dYYyN9YZGQg",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-017.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-017.avif",
          text: ["做SMILE原來", "早做早享受"],
          nameEn: "",
          nameCn: "杜詠彤",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/T3K97UlXpHg",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-018.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-018.avif",
          text: ["以後跳繩集中", "都唔怕眼乾"],
          nameEn: "",
          nameCn: "何柱霆",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/WlFqNfq5jkI",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-019.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-019.avif",
          text: ["原來世界可以咁清楚"],
          nameEn: "",
          nameCn: "盧善琳",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Z9s3c5Thu7w",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-020.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-020.avif",
          text: ["過程比我想像中快"],
          nameEn: "Ceci Wu",
          nameCn: "",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/o2n03FVGWbk",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-021.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-021.avif",
          text: ["做完成個世界唔同咗"],
          nameEn: "",
          nameCn: "釗峰",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/05NSqdF7nz0",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-022.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-022.avif",
          text: ["做完好感動", "開心到想喊"],
          nameEn: "Mandy",
          nameCn: "文荻",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nagwW6CP1iU",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-023.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-023.avif",
          text: ["早啲做SMILE慳好多", "買Con錢 好抵!"],
          nameEn: "Natalie",
          nameCn: "方敏婷",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tJ3MHvKagMk",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-024.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-024.avif",
          text: ["長期長時間戴Con人士", "要做SMILE!"],
          nameEn: "",
          nameCn: "伍富橋",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/c6dwJ1Cbgxw",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-025.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-025.avif",
          text: ["好似瞓一覺就做完咁"],
          nameEn: "kelly Ng",
          nameCn: "伍樂怡",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/L5GFWM7Fxqs",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-026.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-026.avif",
          text: ["拍嘢睇Mon唔洗再俾", "眼鏡壓住"],
          nameEn: "Dominic Ho",
          nameCn: "何浩文",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Udnsv_lOr74",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-027.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-027.avif",
          text: ["做咗SMILE就唔會再", "錯過同囡囡每個", "珍貴Moment"],
          nameEn: "Daniel Chau",
          nameCn: "周志康",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JCzzO4Y0kko",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-028.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-028.avif",
          text: ["每一次擘大眼都", "懷疑自己係咪唔記得除", "Con既感覺"],
          nameEn: "Ada",
          nameCn: "姜咏鑫",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JD5GGTg01to",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-029.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-029.avif",
          text: ["做完好似重生", "換咗對新嘅眼咁!"],
          nameEn: "Hubert",
          nameCn: "胡鴻鈞",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/NF_S1R9DhNk",
          text: ["唔止視力穩定 心理上", "都穩定咗"],
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-033.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-033.avif",
          nameEn: "Scarlett",
          nameCn: "莎拉",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/7T_ATu8-Vn8",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-030.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-030.avif",
          text: ["揸車唔洗換眼鏡", "安全好多"],
          nameEn: "Brian Wong",
          nameCn: "黃千庭",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/KslMZ0PY2fg",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-031.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-031.avif",
          text: ["原來做SMILE唔痛", "仲好快"],
          nameEn: "Judy Mok",
          nameCn: "莫穎彤",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/jO_h9YqCJzs",
          squareimg:
            "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-square-032.avif",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-032.avif",
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
    /**
     * @description: 转换链接去除&amp;
     * @param {string} str 原始链接
     * @return {string} 已处理的链接
     */
    transLink(str) {
      if (str.indexOf("&amp;") > -1) {
        str = str.replace(/&amp;/g, "&");
      }
      return str;
    },
    /**
     * @description: 请求banner列表
     */
    async getBannerList() {
      const { locale } = this.$i18n;
      const baseUrl = "https://admin.hkcmereye.com";
      const num = 5;
      const gidMap = { hk: 1, cn: 2, en: 3 };
      const url = `${baseUrl}/api.php/cms/slide/gid/${gidMap[locale]}/num/${num}`;
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        this.bannerList = data.map((item) => ({
          pic: `${baseUrl}${item.pic}`,
          mbpic: `${baseUrl}${item.mobilepic}`,
          link: this.transLink(item.link),
          linkType: item.title === "link" ? "a" : "nuxt",
        }));
      } catch (error) {
        console.error("Banner获取失败:", error);
        this.bannerList = [];
      }
      // console.log(`length=${this.bannerList.length},banner=`, this.bannerList);
    },
  },
  created() {
    this.getBannerList();
  },
  mounted() {
    // 创建防抖函数，限制频繁触发
    const debounce = (fn, delay) => {
      let timer = null;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    };
    // IntersectionObserver 回调
    const handleIntersection = debounce((entries) => {
      const entry = entries[0];
      // 当元素进入视区且可见比例达到 0.3 时触发展开
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        this.xtraActive = true; // 进入视区
        // 可选：如果只需要触发一次，取消观察
        // observer.unobserve(this.$refs.xtraAnimateBox);
      } else if (!entry.isIntersecting && entry.intersectionRatio < 0.1) {
        this.xtraActive = false; // 离开视区
      }
    }, 200); // 200ms 防抖延迟

    // 配置 IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.1, 0.3, 0.5], // 设置多个阈值，平滑过渡
      rootMargin: "50px 0px", // 增加 50px 的触发余量，减少边界抖动
    });

    // 确保 refs 存在再观察
    if (this.$refs.xtraAnimateBox) {
      observer.observe(this.$refs.xtraAnimateBox);
    }
  },
  // computed: {
  //   firstBenefit() {
  //     return this.benefitList.filter((i) => i.row === 1);
  //   },
  //   secondBenefit() {
  //     return this.benefitList.filter((i) => i.row === 2);
  //   },
  // },
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
                  text: "希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。中心採用已獲美國FDA認證的Carl Zeiss Visumax設備，結合德國蔡司光學技術與創新激光科技。來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊全程細心的跟進，亦確保每位真實用家都能安心體驗矯視服務。",
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
            <div
              class="newCenter-card-nav mt-8 md:mt-[68.39px] text-text font-tc text-sm md:text-xl font-light leading-[21.822px] md:leading-[43.5px] tracking-[0.36px] md:tracking-[0.6px]"
            >
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
          <h2
            class="text-white font-hk text-xl md:text-3xl font-black leading-[30px]"
          >
            <span class="font-en font-bold">SMILE</span>矯正原理
          </h2>
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
                stroke="currentColor"
                stroke-width="5.4"
                stroke-linecap="round"
              />
              <path
                d="M6.49609 2.71118H26.5987V22.1512"
                stroke="currentColor"
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
              <div class="steps-title text-primary">
                <h2
                  class="mb-0 text-xl md:text-[40px] font-black leading-6 md:leading-[50px] text-left"
                >
                  <span class="block md:text-3xl font-bold font-en">SMILE</span>
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
                    stroke="currentColor"
                    stroke-width="1.34165"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.1296 3.68896L18.1296 18.6727L3.63983 18.6727"
                    stroke="currentColor"
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
        <section class="whyChoose px-7 md:px-14 md:mb-[60px]">
          <h2 class="subtitle mb-7 md:mb-12 text-left">為何選擇希瑪?</h2>
          <div class="whyChoose-img">
            <img
              class="w-full rounded-[8.19px]"
              src="https://statichk.cmermedical.com/smile/smileV2/smile-why.avif"
              alt="為何選擇希瑪"
            />
          </div>
          <div class="whyChoose-intro mt-8">
            <p>
              希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲<span>Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》</span>認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。
            </p>
            <p>
              中心採用已獲<span>美國FDA認證的Carl Zeiss Visumax</span>設備，結合德國蔡司光學技術與創新激光科技。
            </p>
            <p>
              來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊<span>全程細心的跟進</span>，亦確保每位真實用家都能安心體驗矯視服務。
            </p>
          </div>
        </section>
        <section class="kol-mobile block lg:hidden overflow-hidden">
          <userShare title="SMILE用家分享" :user-share="ShareData"></userShare>
        </section>
        <!-- start SMILE微笑激光矯視費用 -->

<div class="md:bg-[#F6FAFD] py-8 px-2  md:px-2 md:pb-15 md:pt-20 mb-8 md:mt-[50px] md:mb-22 md:mt-[166px]">
<div class="w-full  flex flex-col items-center mx-auto ">
    
    <h2 class="text-[#4A74B8] text-xl md:text-3xl font-black mb-6 md:mb-10 tracking-wider text-center">
SMILE微笑激光矯視費用2
    </h2>

    <div class="w-full">
   

      <div class="space-y-2 md:space-y-4 max-w-[900px] mx-auto">
        <div class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center   transition-all group">
          <div class="text-[#6D6E71] text-base md:text-3xl font-bold ">
           SMILE
<br/>
            <span class="">微笑激光矯視</span>
          </div>
          <div class="text-[#F59E0B]  font-bold tracking-tight group-hover:scale-105 transition-transform">
           <span class="text-2xl md:text-5xl"> 港幣$19,000</span>
          </div>
        </div>

       

        <div class="bg-white border border-[#4570B6] rounded-2xl p-5 md:p-8 flex flex-row justify-between items-center   transition-all group">
          <div class="text-[#6D6E71] text-base md:text-3xl font-bold ">術前檢查費用</div>
          <div class="text-[#F59E0B]  font-bold tracking-tight group-hover:scale-105 transition-transform">
            <span class="text-2xl md:text-5xl">港幣</span><span class="text-2xl md:text-5xl">$100</span>
          </div>
        </div>
      </div>

      <div class="mt-8 md:mt-12 flex flex-col items-center">
        <a href="/fee#table1" class=" md:w-auto bg-[#4570B6] text-white px-10 py-4 md:py-5 md:px-[100px] rounded-full text-2xl md:text-4xl font-bold flex items-center justify-center gap-3 ">
          查看矯視費用詳情
          <svg xmlns="http://www.w3.org/2000/svg"  class="h-[13px] w-[13px] md:h-[26px] md:w-[26px]" viewBox="0 0 34 34" fill="none">
  <path d="M3.18018 30.3632L29.8334 3.70996" stroke="white" stroke-width="6.36042" stroke-linecap="round"/>
  <path d="M7.06396 2.8623H30.742V25.7598" stroke="white" stroke-width="5.72438" stroke-linecap="round"/>
</svg>
        </a>

      

        <div class="text-[#6D6E71] mt-2 md:mt-4 text-center font-light text-slate-400 text-base  md:text-2xl leading-relaxed">
          <p class="">此為香港價錢，雙眼價錢</p>

          <p>矯視費用已包括術前檢查費用港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)</p>
        </div>
      </div>

    </div>
  </div>
  </div>
        <!-- end SMILE微笑激光矯視費用 -->
        <section class="benefit mb-[30px] md:mb-[100px] py-7">
          <h2 class="subtitle mb-0">SMILE微笑激光矯視的好處</h2>
          <div
            class="benefit-list pl-[clamp(1.5rem,-0.196rem_+_8.48vw,3.875rem)] pr-[clamp(0.625rem,3.13vw,1.5rem)]"
          >
            <!-- <div class="benefit-row"> -->
            <div
              class="benefit-item"
              :class="{ active: benefit.active }"
              v-for="benefit in benefitList"
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
            <!-- </div> -->
            <!-- <div class="benefit-row">
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
            </div> -->
          </div>
        </section>
        <section class="condition">
          <div class="condition-list md:px-[30px] gap-[5px] md:gap-7">
            <div class="condition-item py-[10px]">1,000 度以下近視</div>
            <div class="condition-item py-[10px]">500 度以下散光</div>
            <div class="condition-item py-[10px]">角膜厚度正常</div>
          </div>
          <div class="condition-list relative">
            <div
              class="condition-item mr-[142px] md:mr-[314px] py-1 md:py-[13px]"
            >
              沒有患上眼疾，如青光眼或<br class="block md:hidden" />視網膜疾病
            </div>
            <div
              class="condition-title flex absolute right-[17px] h-full justify-center items-center"
            >
              <h2
                class="text-primary mb-0 text-base md:text-3xl leading-[20.159px] md:leading-10 font-black font-hk text-right"
              >
                你適合接受<br /><span class="font-en font-bold">SMILE</span
                >微笑矯視嗎?
              </h2>
            </div>
          </div>
          <div class="condition-list gap-[13px] md:gap-[26px]">
            <div class="condition-item py-3">發育成熟，近視度數穩定</div>
            <div class="condition-item py-3">非懷孕或哺乳期間</div>
          </div>
          <div class="condition-list">
            <div
              class="condition-item ml-[55px] md:ml-[108px] py-2 md:py-[13px]"
            >
              沒有患上自體免疫疾病，如風濕性關<br
                class="block md:hidden"
              />節炎或紅斑狼瘡
            </div>
          </div>
          <div class="condition-list gap-3 md:gap-[21px]">
            <div class="condition-item py-1 md:py-[13px]">
              不需要長期服用<br class="block md:hidden" />類固醇
            </div>
            <div class="condition-item py-1 md:py-[13px]">
              角膜沒受感染，例如發炎<br class="block md:hidden" />或曾受傷
            </div>
          </div>
          <p class="condition-desc">
            <span class="inline md:block"
              >如以上條件都與你的情況相符，你已符合進行SMILE微笑矯視的基本條件。</span
            >
            <span class="inline md:block">若不確定，歡迎預約諮詢。</span>
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
            <p class="font-en">Comeal Collagen Cross-Linking</p>
            <span>可與SMILE微笑激光矯視同時進行</span>
          </div>
          <div class="xtra-paper" :class="{ unfolded: xtraActive }">
            <div class="xtra-paper-item" :class="{ unfolded: xtraActive }">
              <h3 class="xtra-paper-title">什麼是 <span>SMILE XTRA</span>？</h3>
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
              <h3 class="xtra-paper-title">
                我需要接受 <span>SMILE XTRA</span>？
              </h3>
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
            href="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%83%B3%E4%BA%86%E8%A7%A3SMILE%20XTRA%E8%A7%92%E8%86%9C%E8%86%A0%E5%8E%9F%E4%BA%A4%E8%81%AF%E8%A1%93"
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
        <section
          class="exercise bg-black text-white py-6 md:pt-[30px] md:pb-[136px]"
        >
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
              imageKey="squareimg"
              hrefKey="href"
            ></SwiperRound>
          </div>
          <div class="smile-right hidden">
            <div class="smile-right-title">
              <h2>最新情報</h2>
              <p class="font-en">CATCH UP WITH US</p>
            </div>
            <div class="smile-right-swiper">
              <SwiperCard :images="bannerList" imageKey="mbpic"></SwiperCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Backtop />
    <FooterV2 class="smile-footer" />
    <FooterMobile />
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #4570b6;
$text-color: #6d6e71;
:deep(.UserShareBox-list::-webkit-scrollbar-track) {
  margin: 0 59px;
}
:deep(.UserShare .UserShareContainer) {
  margin: 0;
}
.subtitle {
  color: $primary-color;
  font-weight: 900;
  font-size: 20px;
  line-height: 12.824px;
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
    height: 100vh;
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
    width: 540px;
    height: 900px;
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
      padding: 200px 0 1.25vw 5.2083vw;

      h2 {
        color: #000;
        text-align: left;
        font-size: 1.3139vw;
        font-style: normal;
        font-weight: 300;
        line-height: 200%;
        letter-spacing: 0.6568vw;
        margin-bottom: 0;

        &::before {
          content: "";
          display: inline-block;
          margin-right: 0.5208vw;
          width: 0.78125vw;
          height: 0.78125vw;
          flex-shrink: 0;
          background: #4570b6;
          border-radius: 50%;
        }
      }

      p {
        color: $primary-color;
        font-size: 1.2104vw;
        font-style: normal;
        font-weight: 700;
        line-height: 217%;
        letter-spacing: 1.16px;
      }
    }
    &-swiper {
      width: 100%;
    }
  }
  &-footer {
    position: relative;
    z-index: 5;
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
  background: linear-gradient(to top, $primary-color, 0 50px, white 50px 100%);

  &-card {
    background: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijc2OCIgaGVpZ2h0PSI3MzkiIHZpZXdCb3g9IjAgMCA3NjggNzM5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWFzayBpZD0ibWFzazBfMTAyMzJfMTciIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI3NjgiIGhlaWdodD0iNzM5Ij4KPHJlY3Qgd2lkdGg9Ijc2OCIgaGVpZ2h0PSI3MzkiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDIzMl8xNykiPgo8cGF0aCBkPSJNLTUgMTcxLjA3OEw4NDYgMzUzLjc3OSIgc3Ryb2tlPSIjNUQ4NUMzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTYwNC4xNzggODMuMDY2N0w0NDguOTQ5IDc4OC45NDUiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzEwMjMyXzE3KSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik01NTQuMTU1IDMxMi42MjJDNTY1LjQzNCAzMTUuMDQ4IDU3Ni41NjYgMzA3Ljk3MiA1NzkuMDE5IDI5Ni44MTlDNTgxLjQ3MiAyODUuNjY1IDU3NC4zMTcgMjc0LjY1NyA1NjMuMDM4IDI3Mi4yMzFDNTUxLjc1OSAyNjkuODA2IDU0MC42MjcgMjc2Ljg4MSA1MzguMTc0IDI4OC4wMzVDNTM1LjcyMSAyOTkuMTg5IDU0Mi44NzYgMzEwLjE5NyA1NTQuMTU1IDMxMi42MjJaIiBzdHJva2U9IiM1RDg1QzMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTAyMzJfMTciIHgxPSI2MDQuNjY3IiB5MT0iODMuMTcxOCIgeDI9IjQ1Mi43MTYiIHkyPSI3ODkuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1RDg1QzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=")
      no-repeat;
    background-size: cover;
    background-position: center;
    font-weight: 400;
    border-radius: 0 0 1rem 1rem;
  }
}
// 矫视原理
.principles {
  padding: #{"clamp(2rem, 0.545rem + 7.27vw, 6rem)"} #{"clamp(1rem, -1rem + 10vw, 6.5rem)"};
  position: relative;
  h2 {
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
  border: inherit;
  &-title {
    display: flex;
    align-items: center;
    position: absolute;
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
      font-weight: 400;
      font-size: #{"clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"};
      line-height: #{"clamp(1.125rem, 0.739rem + 1.93vw, 2.188rem)"};
      margin-top: #{"clamp(0.563rem, 0.358rem + 1.02vw, 1.125rem)"};
    }
  }
}
.whyChoose {
  &-intro {
    p {
      color: $text-color;
      font-weight: 300;
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 2.52px;
      margin-bottom: 30px;
    }
    span {
      color: $primary-color;
      font-weight: 700;
    }
  }
}
// 好处
.benefit {
  // padding: #{"clamp(1.5rem, 1.091rem + 2.05vw, 2.625rem)"} 27px;
  h2 {
    text-align: center;
    padding-bottom: #{"clamp(1.5rem, 1.091rem + 2.05vw, 2.625rem)"};
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    z-index: 1;
    flex: 0 0 calc(33.33% + 20px);
    margin-left: -20px;
    margin-top: -30px;
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
    position: relative;
    text-align: center;
    font-size: 4.103vw;
    &:nth-child(-n + 3) {
      margin-top: 0;
    }
    &-title {
      font-weight: 700;
      color: $primary-color;
      font-size: 16px;
      line-height: 8.549px;
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
        font-size: 16px;
        line-height: 16px;
        font-weight: 400;
        white-space: pre-line;
        line-height: 1.2;
      }
    }
    &-icon {
      margin: 0 auto 4px;
      width: 53px;
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
      transition: all 0.8s ease;
      z-index: 5;
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
  position: relative;
  width: 100%;
  background: url("https://statichk.cmermedical.com/smile/smileV2/smile-condition-bg.svg")
    no-repeat;
  background-size: #{"clamp(4.375rem, 2.557rem + 9.09vw, 9.375rem)"} auto;
  background-position: 0;
  &-list {
    display: flex;
    justify-content: center;
    padding: 0 17px;
    margin-bottom: 18px;
  }
  &-item {
    flex: auto;
    color: $text-color;
    font-weight: 400;
    background-color: #fff;
    font-size: 14px;
    line-height: 17px;
    border-radius: 50.4px;
    border: 1px solid $primary-color;
    box-shadow: 3px #{"clamp(0.25rem, 0.182rem + 0.34vw, 0.438rem)"} 2px $primary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
  &-desc {
    color: $text-color;
    text-align: center;
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
  background-position: top;
  &-title {
    text-align: center;
    padding-bottom: #{"clamp(1.4rem, 0.922rem + 1.96vw, 3.275rem)"};
    p {
      color: $primary-color;
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
    height: 488px;
    &.unfolded {
      animation: xtraHeight 1s ease forwards;
    }
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
      font-size: #{"clamp(1rem, 0.857rem + 0.59vw, 1.563rem)"};
      line-height: #{"clamp(0.636rem, 0.48rem + 0.64vw, 1.25rem)"};
      margin-bottom: #{"clamp(1.018rem, 0.752rem + 1.09vw, 2.063rem)"};
      span {
        font-family: "Poppins", sans-serif;
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
  &-title {
    text-align: center;
    h2 {
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
// 手机端
@media screen and (max-width: 767px) {
  .xtra {
    &-paper {
      height: #{"clamp(18rem, 15.327rem + 5.57vw, 19.5rem)"};
      &-item {
        left: 36px;
      }
    }
  }
  @keyframes xtraBottom {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(#{"clamp(-2rem, -2.885rem + 3.93vw, -1rem)"}, 0);
    }
  }

  @keyframes xtraTop {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(
        #{"clamp(0.5rem, -7.214rem + 34.29vw, 2rem)"},
        #{"clamp(13rem, 5.929rem + 31.43vw, 14.375rem)"}
      );
    }
  }

  @keyframes xtraTriangle {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: #{"clamp(2.5rem, -3.929rem + 28.57vw, 3.75rem)"};
      height: #{"clamp(1.5rem, 0.214rem + 5.71vw, 1.75rem)"};
    }
  }

  @keyframes xtraHeight {
    0% {
      height: #{"clamp(18rem, 15.327rem + 5.57vw, 19.5rem)"};
    }
    100% {
      height: #{"clamp(31.25rem, 21.607rem + 42.86vw, 33.125rem)"};
    }
  }
}
@media screen and (min-width: 768px) {
  .subtitle {
    font-size: 30px;
    line-height: 30px;
  }
  .whyChoose {
    &-intro {
      p {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 6px;
      }
    }
  }
  .benefit {
    &-list {
      padding-left: 40px;
      padding-right: 0;
    }
    &-item {
      flex: 0 0 calc(33.33% + 40px);
      margin-left: -40px;
      margin-top: -60px;
      &-title {
        font-size: 25px;
        line-height: 20px;
        letter-spacing: 6.25px;
      }
      &-icon {
        width: 125px;
      }
      &-content {
        p {
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 3.36px;
        }
      }
    }
  }
  .condition {
    background-position: left calc(50% - 20px);
    &-list {
      margin-bottom: 36px;
    }
    &-item {
      font-size: 20px;
      line-height: 35px;
      letter-spacing: 2px;
    }
  }
  .main {
    width: 768px;
    border-left: 1.5px solid $primary-color;
    border-right: 1.5px solid $primary-color;
  }
  .principles {
    .more-button {
      bottom: -6%;
    }
  }
  :deep(.headV3) {
    border-left: 1.5px solid $primary-color;
    border-right: 1.5px solid $primary-color;
  }
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
      transform: translate(
        72px,
        #{"clamp(18.375rem, 16.178rem + 3.6vw, 20.5rem)"}
      );
    }
  }

  @keyframes xtraTriangle {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 144px;
      height: #{"clamp(2.625rem, 2.237rem + 0.64vw, 3rem)"};
    }
  }

  @keyframes xtraHeight {
    0% {
      height: 488px;
    }
    100% {
      height: #{"clamp(46.25rem, 43.019rem + 5.3vw, 49.375rem)"};
    }
  }
}
@media screen and (max-width: 991px) {
  :deep(.footer-bottom) {
    margin-bottom: 0 !important;
    background-color: #f4fafc !important;
  }
  .smile {
    &-footer {
      margin-top: -60px;
    }
  }
}
@media screen and (min-width: 992px) {
  .smile {
    &-footer {
      margin-top: 0 !important;
    }
  }
}
// 电脑端
@media screen and (min-width: 1200px) {
  .benefit {
    padding: 0;
  }
}
@media screen and (min-width: 1440px) {
  .smile {
    &-left {
      display: block;
    }
    &-right {
      display: block;
    }
  }
}
@media screen and (min-width: 1440px) and (max-width: 1744px) {
  .smile {
    &-left {
      width: 22vw;
      &::after {
        width: 300%;
      }
      &::before {
        width: 200%;
      }
    }
    &-right {
      width: 25vw;
    }
  }
}
@media screen and (min-width: 2000px) {
  .smile {
    &-right {
      &-swiper {
        margin-left: #{"clamp(-6.25rem, -14.931rem + 6.94vw, 0rem)"};
      }
    }
  }
}
</style>
