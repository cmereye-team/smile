<template>
  <div class="equipment">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>{{ $t("home.headers.aboutSmileChild_3") }}</p>
          <p>Central <br v-if="isMobile" />equipment</p>
        </div>
      </template>
    </Banner>
    <div class="equipment-box">
      <H2Tag :title="[$t('home.headers.aboutSmileChild_3')]" />
      <div class="equipment-items" v-if="!isMobile">
        <div v-for="(item, index) in equipmentList" :key="item.id">
          <div>
            <div><img :src="item.img" :alt="item.name[0]" /></div>
            <div class="equipment-name">
              <div
                @click="showRemark(index)"
                :class="[
                  item.isShow ? 'equipment-name-up-show ' : 'equipment-name-up',
                ]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="49"
                  viewBox="0 0 50 49"
                  fill="none"
                >
                  <rect width="50" height="49" rx="11" fill="#4570B6" />
                  <path
                    d="M16 19.6515L24.4784 9.84839C24.8693 9.3964 25.5667 9.3859 25.9711 9.82592L35 19.6515"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25.2124 9.28516V31.7397"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <span
                  v-for="(el, index) in item.name"
                  :key="index"
                  v-html="el"
                ></span>
              </div>
            </div>
          </div>
          <div
            :class="[
              item.isShow ? 'equipment-remark' : 'equipment-remark-hide',
            ]"
          >
            <div>{{ item.remark }}</div>
            <div>{{ item.source }}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <equipmentM />
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
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import equipmentM from "@/components/content/new/equipmentM.vue";

// 数据
import Equipment from "@/asset/Equipment/EquipmentData";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    equipmentM,
  },
  data() {
    return {
      isMobile: false,
      // equipmentList: Equipment,
      equipmentList: [
        {
          id: 1,
          img: "https://statichk.cmermedical.com/smile/medical-equipment/590ceebe95a7c289.jpg",
          name: ["ZEISS VISUMAX 800", "SMILE®pro"],
          remark: this.$t("medical_equipment.content1.remark"),
          source: this.$t("medical_equipment.content1.source"),
          isShow: false,
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/05/f434fa3c9560d7c6.png",
          name: [
            "Carl Zeiss Visumax",
            this.$t("medical_equipment.content2.name2"),
          ],
          remark: this.$t("medical_equipment.content2.remark"),
          source: this.$t("medical_equipment.content2.source"),
          isShow: false,
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/05/4e22294924611584.png",
          name: [
            this.$t("medical_equipment.content3.name1"),
            "（IOL Master 700）",
          ],
          remark: this.$t("medical_equipment.content3.remark"),
          source: this.$t("medical_equipment.content3.source"),
          isShow: false,
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/05/d9a4ebd0979eb0ad.png",
          name: [this.$t("medical_equipment.content4.name1")],
          remark: this.$t("medical_equipment.content4.remark"),
          source: this.$t("medical_equipment.content4.source"),
          isShow: false,
        },
        {
          id: 5,
          img: "https://static.cmereye.com/imgs/2024/05/17d09f2b2552fb10.png",
          name: [
            this.$t("medical_equipment.content5.name1"),
            this.$t("medical_equipment.content5.name2"),
          ],
          remark: this.$t("medical_equipment.content5.remark"),
          source: this.$t("medical_equipment.content5.source"),
          isShow: false,
        },
        {
          id: 6,
          img: "https://static.cmereye.com/imgs/2024/05/91cae30bfe64c887.png",
          name: [
            this.$t("medical_equipment.content6.name1"),
            this.$t("medical_equipment.content6.name2"),
          ],
          remark: this.$t("medical_equipment.content6.remark"),
          source: this.$t("medical_equipment.content6.source"),
          isShow: false,
        },
        {
          id: 7,
          img: "https://static.cmereye.com/imgs/2024/05/e09ae8645106fe23.png",
          name: [
            this.$t("medical_equipment.content7.name1"),
            this.$t("medical_equipment.content7.name2"),
          ],
          remark: this.$t("medical_equipment.content7.remark"),
          source: this.$t("medical_equipment.content7.source"),
          isShow: false,
        },
        {
          id: 8,
          img: "https://static.cmereye.com/imgs/2024/05/a61d712eb35ef590.png",
          name: ["Pentacam® ", this.$t("medical_equipment.content8.name1")],
          remark: this.$t("medical_equipment.content8.remark"),
          source: this.$t("medical_equipment.content8.source"),
          isShow: false,
        },
        {
          id: 9,
          img: "https://static.cmereye.com/imgs/2024/05/1bb210c58784b1c0.png",
          name: [
            this.$t("medical_equipment.content9.name1"),
            this.$t("medical_equipment.content9.name2"),
          ],
          remark: this.$t("medical_equipment.content9.remark"),
          source: this.$t("medical_equipment.content9.source"),
          isShow: false,
        },
        {
          id: 10,
          img: "https://static.cmereye.com/imgs/2024/05/2c4cff31c0a31522.png",
          name: [this.$t("medical_equipment.content10.name1"), "(ATLAS 9000)"],
          remark: this.$t("medical_equipment.content10.remark"),
          source: this.$t("medical_equipment.content10.source"),
          isShow: false,
        },
        {
          id: 11,
          img: "https://static.cmereye.com/imgs/2024/05/bf7b6a0bef660626.png",
          name: [
            this.$t("medical_equipment.content11.name1"),
            "(CIRRUS HD-OCT5000)",
          ],
          remark: this.$t("medical_equipment.content11.remark"),
          source: this.$t("medical_equipment.content11.remark"),
          isShow: false,
        },
        {
          id: 12,
          img: "https://static.cmereye.com/imgs/2024/05/9215afd7f26f11e5.png",
          name: [
            this.$t("medical_equipment.content12.name1"),
            this.$t("medical_equipment.content12.name2"),
          ],
          remark: this.$t("medical_equipment.content12.remark"),
          source: this.$t("medical_equipment.content12.source"),
          isShow: false,
        },
        {
          id: 13,
          img: "https://statichk.cmermedical.com/smile/medical-equipment/8d48fd9571a47602.webp",
          name: [
            this.$t("medical_equipment.content13.name1"),
            this.$t("medical_equipment.content13.name2"),
          ],
          remark: this.$t("medical_equipment.content13.remark"),
          source: this.$t("medical_equipment.content13.source"),
          isShow: false,
        },
        {
          id: 14,
          img: "https://statichk.cmermedical.com/smile/medical-equipment/5aacde002af24ada.webp",
          name: [
            this.$t("medical_equipment.content14.name1"),
            "（Optos Daytona）",
          ],
          remark: this.$t("medical_equipment.content14.remark"),
          source: this.$t("medical_equipment.content14.source"),
          isShow: false,
        },
        {
          id: 15,
          img: "https://static.cmereye.com/imgs/2024/05/4b8f230a2d7a956d.png",
          name: [
            this.$t("medical_equipment.content15.name1"),
            "(KONAN NSP-9900)",
          ],
          remark: this.$t("medical_equipment.content15.remark"),
          source: this.$t("medical_equipment.content15.source"),
          isShow: false,
        },
        {
          id: 16,
          img: "https://static.cmereye.com/imgs/2024/05/a01cb16a551eb1ce.png",
          name: [
            this.$t("medical_equipment.content16.name1"),
            this.$t("medical_equipment.content16.name2"),
          ],
          remark: this.$t("medical_equipment.content16.remark"),
          source: this.$t("medical_equipment.content16.source"),
          isShow: false,
        },
        {
          id: 17,
          img: "https://static.cmereye.com/imgs/2024/05/c7a828125d9153ac.png",
          name: [
            this.$t("medical_equipment.content17.name1"),
            this.$t("medical_equipment.content17.name2"),
          ],
          remark: this.$t("medical_equipment.content17.remark"),
          source: this.$t("medical_equipment.content17.source"),
          isShow: false,
        },
        {
          id: 18,
          img: "https://static.cmereye.com/imgs/2024/05/993e14dfac448fa5.png",
          name: [
            this.$t("medical_equipment.content18.name1"),
            this.$t("medical_equipment.content18.name2"),
          ],
          remark: this.$t("medical_equipment.content18.remark"),
          source: this.$t("medical_equipment.content18.source"),
          isShow: false,
        },
        {
          id: 19,
          img: "https://statichk.cmermedical.com/smile/medical-equipment/2a24a1b68dc187d6.webp",
          name: [
            "ELLEX Integre pro scan",
            this.$t("medical_equipment.content19.name1"),
          ],
          remark: this.$t("medical_equipment.content19.remark"),
          source: this.$t("medical_equipment.content19.source"),
          isShow: false,
        },
        {
          id: 20,
          img: "https://static.cmereye.com/imgs/2024/05/9561a582b715533f.png",
          name: ["PESCHKE Trade PXL", "Platinum 330"],
          remark: this.$t("medical_equipment.content20.remark"),
          source: this.$t("medical_equipment.content20.source"),
          isShow: false,
        },
        {
          id: 21,
          img: "https://static.cmereye.com/imgs/2024/05/4bb384e3fe377bb6.png",
          name: [
            "Ellex Tango Reflex",
            this.$t("medical_equipment.content21.name1"),
          ],
          remark: this.$t("medical_equipment.content21.remark"),
          source: this.$t("medical_equipment.content21.source"),
          isShow: false,
        },
        {
          id: 22,
          img: "https://static.cmereye.com/imgs/2024/05/d11dd8d263f2f6a0.png",
          name: [this.$t("medical_equipment.content22.name1")],
          remark: this.$t("medical_equipment.content22.remark"),
          source: this.$t("medical_equipment.content22.source"),
          isShow: false,
        },
        {
          id: 23,
          img: "https://statichk.cmermedical.com/smile/medical-equipment/a50ca0c214529046.webp",
          name: [
            this.$t("medical_equipment.content23.name1"),
            this.$t("medical_equipment.content23.name2"),
          ],
          remark: this.$t("medical_equipment.content23.remark"),
          source: this.$t("medical_equipment.content23.source"),
          isShow: false,
        },
        {
          id: 24,
          img: "https://static.cmereye.com/imgs/2024/05/bb7c87b456ee6118.png",
          name: [
            this.$t("medical_equipment.content24.name1"),
            "Centurion® vision system）",
          ],
          remark: this.$t("medical_equipment.content24.remark"),
          source: this.$t("medical_equipment.content24.source"),
          isShow: false,
        },
        {
          id: 25,
          img: "https://static.cmereye.com/imgs/2024/05/ed06ff1c76aaed7d.png",
          name: [
            this.$t("medical_equipment.content25.name1"),
            "（Alcon Constellation®",
            "vision system）",
          ],
          remark: this.$t("medical_equipment.content25.remark"),
          source: this.$t("medical_equipment.content25.source"),
          isShow: false,
        },
      ],
      canonicalHref: "https://smile.hkcmereye.com/medical-equipment/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/medical-equipment/",
      browserTitle: "中心設備 - 希瑪微笑矯視中心",
      browserTitleCn: "中心设备 - 希玛微笑矫视中心",
    };
  },
  methods: {
    showRemark(index) {
      this.equipmentList.forEach((element) => {
        if (element.id == index + 1) {
          element.isShow = !element.isShow;
        } else {
          element.isShow = false;
        }
      });
    },
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
          content: "中心設備 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "中心設備 - 希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/medical-equipment/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/medical-equipment/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/medical-equipment/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mbShow {
    display: none;
  }
  .equipment-box {
    max-width: 1350px;
    margin: 55px auto 160px;
    :deep(h2) {
      margin-bottom: 10px;
    }
  }
  .equipment-items {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    gap: 85px 74px;
    & > div {
      position: relative;
      & > div:nth-child(1) {
        width: 387px;
        height: 430px;
        border-radius: 40px;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 36px;
      }
    }
  }
  .equipment-name {
    position: relative;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 402px;
      min-height: 103px;
      border-radius: 20px;
      background: #4570b6;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 160% */
      letter-spacing: 2.5px;
      z-index: 10;
    }
  }
  .equipment-name::after {
    content: "";
    position: absolute;
    display: block;
    z-index: 2;
    width: 100%;
    height: 30px;
    border-radius: 20px;
    background: #a6e1d6;
    bottom: -10px;
  }
  .equipment-name-up {
    position: absolute;
    top: -40px;
    right: 10px;
    z-index: 10;
    & > svg:hover {
      box-shadow: 0 0 3px 3px #99b7df80;
      border-radius: 10px;
    }
  }
  .equipment-name-up-show {
    position: absolute;
    top: -40px;
    right: 10px;
    z-index: 10;
    & > svg {
      box-shadow: 0 0 3px 3px #99b7df80;
      border-radius: 10px;
      transform: rotate(180deg);
      transition: all 0.5s;
    }
  }
  .equipment-remark {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: all 0.5s;
    border-radius: 40px;
    & > div {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 214.286% */
      width: 90%;
    }
    width: 100%;
    padding-top: 10px;
    position: absolute;
    top: 0;
    z-index: 5;
    max-width: 387px;
    height: 100%;
    max-height: 340px;
    overflow-y: auto;
    background: #fff;
  }
  .equipment-remark-hide {
    opacity: 0;
    display: none;
  }
  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
    display: flex;
    justify-content: center;
  }
  .banner-img {
    background: url("https://statichk.cmermedical.com/smile/bf7a6b723e77c2a8.webp")
      no-repeat;
    background-size: cover;
    height: 32.08vw;
    width: 100%;
    max-width: 1270px;
    background-position: center;
    border-radius: 55px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    & > p:nth-child(1) {
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #fff;
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
    background: url("https://static.cmereye.com/imgs/2024/05/b1b778ced1d15d71.png")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
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
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #fff;
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