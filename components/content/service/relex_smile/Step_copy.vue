<template>
  <div class="step section page_container">
    <!-- <h2 class="step-in">
      {{ $t("service.relexSmile.step.h2_2") }}
    </h2> -->
    <H2Tag :title="[`${$t('service.relexSmile.step.h2_2')}`]" />
    <ul class="step_list flex justify-between">
      <li v-for="(stepItem, index) in stepList" :key="index">
        <img :src="stepItem.src" alt="" />
        <div
          :class="[$i18n.locale === 'en' ? 'textEng text' : 'text']"
          v-html="stepItem.des"
        ></div>
      </li>
    </ul>
  </div>
</template>
<script>
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
  components: {
    H2Tag,
  },
  data() {
    return {
      stepList: [
        {
          src: "https://static.cmereye.com/imgs/2023/08/875bbbb3865fed2d.jpg",
          des: this.$t("service.relexSmile.step.des1"),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/4bab72cb6026531d.jpg",
          des: this.$t("service.relexSmile.step.des2"),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/acb095ed28677439.jpg",
          des: this.$t("service.relexSmile.step.des3"),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.step {
  margin-top: 120px;
  &-in {
    color: #4570b6;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    position: relative;
    text-align: center;
    padding: 0;
    border: none;
    padding-bottom: 30px;
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
  max-width: 1175px;
  margin: 41px auto 0;
  .text {
    color: #6d6e71;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 5px;
    width: 70%;
    margin: 0 auto;
  }
  .textEng {
    color: #6d6e71;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 2px;
    width: 80%;
  }
  li {
    img {
      border-radius: 29px;
      margin-bottom: 26px;
    }
  }
}
@media screen and (max-width: 768px) {
  .step {
    margin-top: 45px;
    width: auto;
    padding: 0 30px;
    &-in {
      font-size: 20px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      padding: 0;
      border: none;
      padding-bottom: 21px;
    }
  }
  .step_list {
    flex-direction: column;
    margin: 32px auto 0;
    .text {
      font-size: 15px;
      line-height: 30px; /* 200% */
      letter-spacing: 3.75px;
      width: 100%;
    }
    .textEng {
      color: #6d6e71;
      text-align: center;
      font-family: Noto Sans HK;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px; /* 166.667% */
      letter-spacing: 1.5px;
    }
    li {
      margin: auto;
      margin-bottom: 30px;
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
