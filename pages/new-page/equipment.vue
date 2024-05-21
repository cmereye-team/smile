<template>
  <div class="equipment">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>中心設備</p>
          <p>Central <br v-if="isMobile" />equipment</p>
        </div>
      </template>
    </Banner>
    <div class="equipment-box">
      <H2Tag :title="['中心設備']" />
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
                <span v-for="(el, index) in item.name" :key="index" v-html="el"></span>
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
import equipmentM from '@/components/content/new/equipmentM.vue'


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
    equipmentM
  },
  data() {
    return {
      isMobile: false,
      equipmentList: Equipment,
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
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mbShow{
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
      width: 312px;
    }
    width: 100%;
    padding-top: 36px;
    position: absolute;
    top: 0;
    z-index: 5;
    max-width: 387px;
    height: 440px;
    background: #fff;
  }
  .equipment-remark-hide {
    opacity: 0;
    display: none;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/bf7a6b723e77c2a8.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
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