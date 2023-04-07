<template>
  <div class="step section page_container">
    <div class="flex justify-center md:mt-28 mbShow">
      <h2>{{$t('service.relexSmile.step.h2_1')}}</h2>
    </div>
    <div class="mbShow mb-10">
      <p style="text-align: justify">
        {{$t('service.relexSmile.step.h2_1')}}
      </p>
    </div>
    <div class="flex justify-center md:mt-28">
      <h2>{{$t('service.relexSmile.step.p')}}</h2>
    </div>

    <ul class="step_list flex justify-between items-center">
      <li v-for="(stepItem, index) in stepList" :key="index">
        <img :src="stepItem.src" alt="" />
        <strong>{{ stepItem.des }}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stepList: [
        {
          src: require("@/asset/image/service/relex_smile/Step1.png"),
          des: this.$t('service.relexSmile.step.des1'),
        },
        {
          src: require("@/asset/image/service/relex_smile/Step2.png"),
          des: this.$t('service.relexSmile.step.des2'),
        },
        {
          src: require("@/asset/image/service/relex_smile/Step3.png"),
          des:this.$t('service.relexSmile.step.des3'),
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.step_list {
  margin: 0 auto;
  text-align: center;
  strong {
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    /* identical to box height, or 120% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
  }
  li {
    padding: 0 20px;
  }
  img {
    width: 25vw;
    margin-bottom: 2vw;
  }
}
h2 {
  font-size: 25px;
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }

  .step_list {
    text-align: center;
    display: flex;
    flex-direction: column;
    li {
      margin-top: 5vw;

      strong {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        /* identical to box height, or 133% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #000000;
      }
    }
    img {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 2vw;
    }
  }
}
</style>
