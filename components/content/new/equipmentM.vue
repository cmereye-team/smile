
<template>
  <div class="equipment">
    <div class="equipment-mobile">
      <div v-for="(item, index) in groupedList" :key="item.id">
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
          :class="[item.isShow ? 'equipment-remark' : 'equipment-remark-hide']"
        >
          <div>{{ item.remark }}</div>
          <div>{{ item.source }}</div>
        </div>
      </div>
    </div>
    <div @click="getListArray" v-if="moreBtn" class="more-btn">{{ $t('home.seeALL')}}</div>
  </div>
</template>
<script>
import Equipment from "@/asset/Equipment/EquipmentData";
export default {
  data() {
    return {
      equipmentList: [],
      groupedList: [],
      moreBtn: true,
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
    getListArray() {
      let num = this.groupedList.length;
      if (num < this.equipmentList.length) {
        this.groupedList = this.equipmentList.slice(0, num + 8);
      }
      if (this.groupedList.length >= this.equipmentList.length) {
        this.moreBtn = false;
      }
    },
  },
  mounted() {
    this.equipmentList = [
  {
    id: 1,
    img: "https://statichk.cmermedical.com/smile/medical-equipment/590ceebe95a7c289.jpg",
    name: [
      "ZEISS VISUMAX 800",
      "SMILE®pro"
    ],
    remark: this.$t('medical_equipment.content1.remark'),
    source: this.$t('medical_equipment.content1.source'),
    isShow: false
  },
  {
    id: 2,
    img: "https://static.cmereye.com/imgs/2024/05/f434fa3c9560d7c6.png",
    name: [
      "Carl Zeiss Visumax",
      this.$t('medical_equipment.content2.name2')
    ],
    remark: this.$t('medical_equipment.content2.remark'),
    source: this.$t('medical_equipment.content2.source'),
    isShow: false
  },
  {
    id: 3,
    img: "https://static.cmereye.com/imgs/2024/05/4e22294924611584.png",
    name: [
      this.$t('medical_equipment.content3.name1'),
      "（IOL Master 700）"
    ],
    remark: this.$t('medical_equipment.content3.remark'),
    source: this.$t('medical_equipment.content3.source'),
    isShow: false
  },
  {
    id: 4,
    img: "https://static.cmereye.com/imgs/2024/05/d9a4ebd0979eb0ad.png",
    name: [
    this.$t('medical_equipment.content4.name1')
    ],
    remark: this.$t('medical_equipment.content4.remark'),
    source: this.$t('medical_equipment.content4.source'),
    isShow: false
  },
  {
    id: 5,
    img: "https://static.cmereye.com/imgs/2024/05/17d09f2b2552fb10.png",
    name: [
      this.$t('medical_equipment.content5.name1'),
      this.$t('medical_equipment.content5.name2')
    ],
    remark: this.$t('medical_equipment.content5.remark'),
    source: this.$t('medical_equipment.content5.source'),
    isShow: false
  },
  {
    id: 6,
    img: "https://static.cmereye.com/imgs/2024/05/91cae30bfe64c887.png",
    name: [
      this.$t('medical_equipment.content6.name1'),
      this.$t('medical_equipment.content6.name2')
    ],
    remark: this.$t('medical_equipment.content6.remark'),
    source: this.$t('medical_equipment.content6.source'),
    isShow: false
  },
  {
    id: 7,
    img: "https://static.cmereye.com/imgs/2024/05/e09ae8645106fe23.png",
    name: [
      this.$t('medical_equipment.content7.name1'),
      this.$t('medical_equipment.content7.name2')
    ],
    remark: this.$t('medical_equipment.content7.remark'),
    source: this.$t('medical_equipment.content7.source'),
    isShow: false
  },
  {
    id: 8,
    img: "https://static.cmereye.com/imgs/2024/05/a61d712eb35ef590.png",
    name: [
      "Pentacam® ",
      this.$t('medical_equipment.content8.name1')
    ],
    remark: this.$t('medical_equipment.content8.remark'),
    source: this.$t('medical_equipment.content8.source'),
    isShow: false
  },
  {
    id: 9,
    img: "https://static.cmereye.com/imgs/2024/05/1bb210c58784b1c0.png",
    name: [
      this.$t('medical_equipment.content9.name1'),
      this.$t('medical_equipment.content9.name2')
    ],
    remark: this.$t('medical_equipment.content9.remark'),
    source: this.$t('medical_equipment.content9.source'),
    isShow: false
  },
  {
    id: 10,
    img: "https://static.cmereye.com/imgs/2024/05/2c4cff31c0a31522.png",
    name: [
      this.$t('medical_equipment.content10.name1'),
      "(ATLAS 9000)"
    ],
    remark:this.$t('medical_equipment.content10.remark'),
    source:this.$t('medical_equipment.content10.source'),
    isShow: false
  },
  {
    id: 11,
    img: "https://static.cmereye.com/imgs/2024/05/bf7b6a0bef660626.png",
    name: [
      this.$t('medical_equipment.content11.name1'),
      "(CIRRUS HD-OCT5000)"
    ],
    remark: this.$t('medical_equipment.content11.remark'),
    source:this.$t('medical_equipment.content11.remark'),
    isShow: false
  },
  {
    id: 12,
    img: "https://static.cmereye.com/imgs/2024/05/9215afd7f26f11e5.png",
    name: [
      this.$t('medical_equipment.content12.name1'),
      this.$t('medical_equipment.content12.name2')
    ],
    remark: this.$t('medical_equipment.content12.remark'),
    source: this.$t('medical_equipment.content12.source'),
    isShow: false
  },
  {
    id: 13,
    img: "https://statichk.cmermedical.com/smile/medical-equipment/8d48fd9571a47602.webp",
    name: [
       this.$t('medical_equipment.content13.name1'),
      this.$t('medical_equipment.content13.name2')
    ],
    remark: this.$t('medical_equipment.content13.remark'),
    source: this.$t('medical_equipment.content13.source'),
    isShow: false
  },
  {
    id: 14,
    img: "https://statichk.cmermedical.com/smile/medical-equipment/5aacde002af24ada.webp",
    name: [
      this.$t('medical_equipment.content14.name1'),
      "（Optos Daytona）"
    ],
    remark: this.$t('medical_equipment.content14.remark'),
    source:  this.$t('medical_equipment.content14.source'),
    isShow: false
  },
  {
    id: 15,
    img: "https://static.cmereye.com/imgs/2024/05/4b8f230a2d7a956d.png",
    name: [
      this.$t('medical_equipment.content15.name1'),
      "(KONAN NSP-9900)"
    ],
    remark: this.$t('medical_equipment.content15.remark'),
    source: this.$t('medical_equipment.content15.source'),
    isShow: false
  },
  {
    id: 16,
    img: "https://static.cmereye.com/imgs/2024/05/a01cb16a551eb1ce.png",
    name: [
      this.$t('medical_equipment.content16.name1'),
      this.$t('medical_equipment.content16.name2')
    ],
    remark: this.$t('medical_equipment.content16.remark'),
    source: this.$t('medical_equipment.content16.source'),
    isShow: false
  },
  {
    id: 17,
    img: "https://static.cmereye.com/imgs/2024/05/c7a828125d9153ac.png",
    name: [
      this.$t('medical_equipment.content17.name1'),
      this.$t('medical_equipment.content17.name2')
    ],
    remark: this.$t('medical_equipment.content17.remark'),
    source: this.$t('medical_equipment.content17.source'),
    isShow: false
  },
  {
    id: 18,
    img: "https://static.cmereye.com/imgs/2024/05/993e14dfac448fa5.png",
    name: [
      this.$t('medical_equipment.content18.name1'),
      this.$t('medical_equipment.content18.name2')
    ],
    remark: this.$t('medical_equipment.content18.remark'),
    source:  this.$t('medical_equipment.content18.source'),
    isShow: false
  },
  {
    id: 19,
    img: "https://statichk.cmermedical.com/smile/medical-equipment/2a24a1b68dc187d6.webp",
    name: [
      "ELLEX Integre pro scan",
      this.$t('medical_equipment.content19.name1')
    ],
    remark: this.$t('medical_equipment.content19.remark'),
    source: this.$t('medical_equipment.content19.source'),
    isShow: false
  },
  {
    id: 20,
    img: "https://static.cmereye.com/imgs/2024/05/9561a582b715533f.png",
    name: [
      "PESCHKE Trade PXL",
      "Platinum 330"
    ],
    remark: this.$t('medical_equipment.content20.remark'),
    source: this.$t('medical_equipment.content20.source'),
    isShow: false
  },
  {
    id: 21,
    img: "https://static.cmereye.com/imgs/2024/05/4bb384e3fe377bb6.png",
    name: [
      "Ellex Tango Reflex",
      this.$t('medical_equipment.content21.name1')
    ],
    remark: this.$t('medical_equipment.content21.remark'),
    source: this.$t('medical_equipment.content21.source'),
    isShow: false
  },
  {
    id: 22,
    img: "https://static.cmereye.com/imgs/2024/05/d11dd8d263f2f6a0.png",
    name: [
      this.$t('medical_equipment.content22.name1')
    ],
    remark: this.$t('medical_equipment.content22.remark'),
    source: this.$t('medical_equipment.content22.source'),
    isShow: false
  },
  {
    id: 23,
    img: "https://statichk.cmermedical.com/smile/medical-equipment/a50ca0c214529046.webp",
    name: [
      this.$t('medical_equipment.content23.name1'),
      this.$t('medical_equipment.content23.name2')
    ],
    remark: this.$t('medical_equipment.content23.remark'),
    source: this.$t('medical_equipment.content23.source'),
    isShow: false
  },
  {
    id: 24,
    img: "https://static.cmereye.com/imgs/2024/05/bb7c87b456ee6118.png",
    name: [
      this.$t('medical_equipment.content24.name1'),
      "Centurion® vision system）"
    ],
    remark: this.$t('medical_equipment.content24.remark'),
    source:this.$t('medical_equipment.content24.source'),
    isShow: false
  },
  {
    id: 25,
    img: "https://static.cmereye.com/imgs/2024/05/ed06ff1c76aaed7d.png",
    name: [
      this.$t('medical_equipment.content25.name1'),
      "（Alcon Constellation®",
      "vision system）"
    ],
    remark: this.$t('medical_equipment.content25.remark'),
    source:this.$t('medical_equipment.content25.source'),
    isShow: false
  }
];

    this.groupedList = this.equipmentList.slice(0, 8);
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .equipment-mobile {
    margin-bottom: 55px;
    padding: 0 5px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 55px 20px;
    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        & > div:nth-child(1) {
          padding-top: 15px;
          margin-bottom: 48px;
          width: 38.46vw;
          height: 43.58vw;
          background: #fff;
          border-radius: 20px;
          & > img {
            width: 33.33vw;
            margin: 0 auto;
          }
        }
      }
    }
    & > div::after {
      content: "";
      position: absolute;
      z-index: 2;
      bottom: -6px;
      width: 98%;
      height: 20px;
      border-radius: 20px;
      background: #a6e1d6;
      display: inline-block;
    }
  }
  .equipment-name {
    position: absolute;
    bottom: 0;
    z-index: 5;
    & > div:nth-child(2) {
      border-radius: 10px;
      background: #4570b6;
      width: 45.38vw;
      height: 16.51vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.6vw;
      font-style: normal;
      font-weight: 500;
      line-height: 5.12vw; /* 178.571% */
      letter-spacing: 0.18vw;
    }
  }
  .equipment-name-up {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: -17px;
    & > svg {
      width: 100%;
      height: 100%;
    }
  }
  .equipment-name-up-show {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: -17px;
    z-index: 15;
    & > svg {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 3px 3px #99b7df80;
      border-radius: 5px;
      transform: rotate(180deg);
      transition: all 0.5s;
    }
  }
  .equipment-remark {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    opacity: 1;
    transition: all 0.5s;
    border-radius: 20px 20px 0 0;
    & > div {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 2.3vw;
      font-style: normal;
      font-weight: 400;
      line-height: 1.4;
      width: 100%;
      padding-top: 10px;
      height: max-content;
      box-sizing: border-box;
    }
    padding-top: 10px;
    position: absolute;
    top: 0;
    z-index: 3;
    width: 90%;
    height: 100%;
    max-height: 35.89vw;
    overflow-y: auto;
    margin: 0 auto;
    background: #fff;
    // padding-bottom: 12.82vw;
    justify-content: center;
  }
  // .equipment-remark  修改纵向滚动条
  .equipment-remark::-webkit-scrollbar {
    width: 3px;
    height: 5px;
  }

  .equipment-remark::-webkit-scrollbar-track {
    background-color: #cbd5e1;
    border-radius: 10px;
  }
  .equipment-remark-hide {
    opacity: 0;
    display: none;
  }
  .more-btn {
    margin: 55px auto;
    display: flex;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 80% */
    letter-spacing: 7.5px;
    background: #4570b6;
    border-radius: 25px;
    padding: 15px 30px 15px 35px;
    width: fit-content;
  }
}
</style>