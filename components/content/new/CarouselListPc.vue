<template>
  <div class="CarouselList">
    <el-carousel indicator-position="none" ref="carousel" arrow="never">
      <el-carousel-item
        v-for="(item, index) in groupedData"
        :key="index"
        class="home-facebook-user-item-carousel"
      >
        <div class="home-facebook-user-item">
          <div>{{ item[0].name }}</div>
          <div>
            <span>{{ item[0].commit }}</span
            ><span>{{ item[0].date }}</span>
          </div>
          <div>
            <img src="@/asset/image/new/home/10775.png" alt="" />
          </div>
        </div>
        <div v-if="item[1].name !== ''" class="home-facebook-user-item">
          <div>{{ item[1].name || "" }}</div>
          <div>
            <span>{{ item[1].commit }}</span
            ><span>{{ item[1].date }}</span>
          </div>
          <div>
            <img src="@/asset/image/new/home/10775.png" alt="" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="home-facebook-user-item-carousel-btn">
      <div @click="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
        >
          <path
            d="M21 2.97607L3 23.9761"
            stroke="#4570B6"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M21 45L3 24"
            stroke="#4570B6"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
        >
          <path
            d="M2.86133 2.97607L20.8613 23.9761"
            stroke="#4570B6"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M2.86133 45L20.8613 24"
            stroke="#4570B6"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      evaluateList: [],
      isMobile: false,
    };
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

    this.evaluateList = this.list;
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
  computed: {
    groupedData() {
      const grouped = [];
      if (this.evaluateList.length % 2 !== 0) {
        this.evaluateList.push({
          name: "",
          commit: "",
          date: "",
        });
      }
      for (let i = 0; i < this.evaluateList.length; i += 2) {
        const pair = [this.evaluateList[i], this.evaluateList[i + 1]];
        grouped.push(pair);
      }
      return grouped;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .home-facebook-user-item-carousel {
    display: flex;
    gap: 0 120px;
  }
  .home-facebook-user-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 65px;
    background: #fff;
    max-width: 580px;
    & > div:nth-child(1) {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans";
      font-size: 35px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 5.25px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column !important;
      width: 100%;
      height: 245px;
      padding: 40px 0 10px;
      background-position: center;
      background: url(@/asset/image/new/home/11046.png) no-repeat;
      background-size: 100% 100%;
      color: #487f82;

      text-align: center;
      font-family: "Noto Sans";
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      // 文本超过3行 省略
      & > span:nth-child(1) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
      letter-spacing: 2.8px;
    }
    & > div:nth-child(3) {
      margin-top: 7px;
    }
  }
  .home-facebook--container {
    position: relative;
  }
  .home-facebook-user-item-carousel-btn {
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    & > div {
      margin: 0 120px;
      cursor: pointer;
    }
  }
}
</style>