<template>
  <div class="CarouselList">
    <el-carousel
      indicator-position="none"
      ref="carousel"
      arrow="never"
    >
      <el-carousel-item
        v-for="(item, index) in evaluateList"
        :key="index"
        class="home-facebook-user-item-carousel"
      >
        <div>
          <div>{{ item.name }}</div>
          <div>
            <span>{{ item.commit }}</span
            ><span>{{ item.date }}</span>
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
@media screen and (max-width: 767px) {
  :deep(.el-carousel__container) {
    height: 230px;
  }
  .home-facebook-user-item-carousel {
    & > div {
      border-radius: 34px;
      background: #fff;
      width: 283px;
      height: 208px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      & > div:nth-child(1) {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.4px;
        margin-bottom: 3px;
      }
      & > div:nth-child(2) {
        background-position: center;
        background: url(@/asset/image/new/home/11046.png) no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        padding: 22px 0 8px;
        width: 283px;
        height: 122px;

        & > span:nth-child(1) {
          color: #487f82;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 25px; /* 138.889% */
          letter-spacing: 2.7px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 3;
        }
        & > span:nth-child(2) {
          color: #487f82;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.4px;
        }
      }
      & > div:nth-child(3) {
        width: 214px;
        margin: 5px auto 0;
        & > img {
          width: 100%;
        }
      }
    }
  }
  .home-facebook-user-item-carousel-btn {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    & > div {
      width: 7.712px;
      height: 18.645px;
      margin: 0 75px;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>