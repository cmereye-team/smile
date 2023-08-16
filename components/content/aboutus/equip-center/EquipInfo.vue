<template>
  <div class="section">
    <div class="flex justify-center equip md:pt-20 md:pb-0 py-10 page_container">
      <h2>{{ $t('home.headers.aboutSmileChild_3') }}</h2>
    </div>
    <div class="bacground-equi">
      <img src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png" alt="" />
    </div>
    <div class="bacground-equi-right pcShow">
      <img src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png" alt="" />
    </div>
    <div class="equ_center_box page_container">
      <div class="equ_center" :class="$i18n.locale == 'en' ? 'equ_center_en_mobi' : ''" v-for="(item, index) in equi_con"
        :key="index">
        <div class="top-equip" style="font-size: ;">
          <img :src="item.href" alt="" class="equi" />
          <span>{{ item.title }}</span>
          <span>{{ item.title2 }}</span>
          <img src="https://static.cmereye.com/imgs/2022/12/fab80faf49dedcb8.png" alt="" class="arrow"
            @click="showContainer(index)" />
        </div>
        <div class="equip-container">
          <img src="https://static.cmereye.com/imgs/2022/12/fab80faf49dedcb8.png" alt="" class="arrow-contain"
            @click="showEqui(index)" />
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
      <img src="https://static.cmereye.com/imgs/2022/12/98586ede06095ed1.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      equi_con: [
        {
          href: "https://static.cmereye.com/imgs/2023/05/69f740310b86facd.png",
          ...this.$t('aboutUs.medicalEquipment.equiCon25')
        },
        {
          href: "https://static.cmereye.com/imgs/2022/12/c02bca547710c859.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon1')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/04/01124b4e13ce8ac6.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon2')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/0ff06c25d8309386.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon3')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/87835bc58909d528.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon4')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/a361b6fabdea5689.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon5')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/e0615ccf022ff1f3.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon6')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/b969201be328307d.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon7')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/1ba64301fb4a1155.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon8')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/070e93deb1ae5d06.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon9')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/1b2ba35f86df518a.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon10')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/44c2cd7c92cd4b4e.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon11')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/f86ca892a4239338.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon12')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/f81acb4c9ebe64a8.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon13')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/8b6eaae915fb2fe5.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon14')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/58770ae1a3317aef.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon15')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/49693f58f391f52c.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon16')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/7425f0f1856072b2.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon17')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/cccc9092efe3f003.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon18')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/b5208571650d6726.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon19')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/a77eb4b681c4349f.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon20')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/2755bf78d190a39c.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon21')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/713b286109544952.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon22')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/9c9d256865399386.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon23')
        },
        {
          href: "https://static.cmereye.com/imgs/2023/01/bb4caa732946322f.jpg",
          ...this.$t('aboutUs.medicalEquipment.equiCon24')
        }
      ]
    }
  },
  created() { },
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
  font-family: var(--font_family);
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
  .equip-text::-webkit-scrollbar {
    width: 12px;
    border-radius: 15px;
    background: #ccc
  }
  .equip-text::-webkit-scrollbar-thumb {
      background-color: #4570b6;
      border-radius: 5px;
      height: 30px;
  }

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
      margin-bottom: 70px;

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
          overflow-y: auto;

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
        font-family: var(--font_family);
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

    .equ_center_en_mobi {
      span {
        font-size: 14px;
      }
    }
  }
}

// pc
@media (min-width: 768px) {
  .equip-text::-webkit-scrollbar {
    width: 12px;
    border-radius: 15px;
    background: #ccc
  }
  .equip-text::-webkit-scrollbar-thumb {
      background-color: #4570b6;
      border-radius: 5px;
      height: 30px;
  }

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
      margin-bottom: 100px;

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
          padding: 20px 25px 15px 25px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;

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
        font-family: var(--font_family);
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
