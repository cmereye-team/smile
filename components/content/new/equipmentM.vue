
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
    <div @click="getListArray" v-if="moreBtn" class="more-btn">觀看更多</div>
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
    this.equipmentList = Equipment;
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