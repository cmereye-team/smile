<template>
  <div class="step section page_container">
    <h2 class="step-in" v-html="$t('service.icl.step.h2')"></h2>
    <ul class="pcShow step_list step_list-one flex justify-between">
      <li v-for="(stepItem, index) in stepList1" :key="index">
        <img :src="stepItem.src" alt="" />
        <div class="text" v-html="stepItem.des"></div>
      </li>
    </ul>
    <ul class="pcShow step_list flex justify-between">
      <li v-for="(stepItem, index) in stepList" :key="index">
        <img :src="stepItem.src" alt="" />
        <div class="text" v-html="stepItem.des"></div>
      </li>
    </ul>
    <ul class="mbShow icl-process-list">
      <li v-for="(stepItem, index) in [...stepList1, ...stepList]" :key="index">
        <img :src="stepItem.src" alt="" />
        <div class="text" v-html="stepItem.des"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stepList1: [
        {
          src: "https://static.cmereye.com/imgs/2023/10/82cda8d37241ea01.png",
          des: this.$t("service.icl.step.des1"),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/10/f4e8010e0f012d44.png",
          des: this.$t("service.icl.step.des2"),
        },
      ],
      stepList: [
        {
          src: "https://static.cmereye.com/imgs/2023/10/83a8ffe937202478.png",
          des: this.$t("service.icl.step.des3"),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/10/b202e5feefba01ba.png",
          des: this.$t("service.icl.step.des4"),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/10/f6dc1e56bb938c10.png",
          des: this.$t("service.icl.step.des5"),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.page_container {
  padding: 0;
}
.step {
  margin-top: 70px;
  &-in {
    color: #4570b6;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    padding: 0;
    border: none;
    padding-bottom: 30px;
    position: relative;
    text-align: center;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
    &::before {
      content: none;
    }
  }
}
.step_list {
  width: 100%;
  max-width: 1280px;
  margin: 55px auto 0;
  .text {
    color: #6d6e71;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 5px;
    width: 100%;
    margin: 0 auto;
  }
  li {
    img {
      border-radius: 29px;
      margin-bottom: 26px;
    }
  }
}
.step_list-one {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 60px;
}
@media screen and (max-width: 768px) {
  .step {
    &-in {
      color: #4570b6;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 23.305px;
      letter-spacing: 5px;
    }
  }
  .icl-process-list {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    // flex-wrap: wrap;
    justify-content: center;
    li {
      width: 40.7vw;
      margin: 0 6px 30px;
      img {
        border-radius: 20px;
        width: 100%;
      }
      .text {
        margin-top: 20px;
        color: #6d6e71;
        text-align: center;
        font-family: Noto Sans HK;
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 300;
        line-height: 20px; /* 142.857% */
        letter-spacing: 2.7px;
      }
    }
    & > li:last-child {
      margin-left: 55%;
    }
  }
}
</style>
