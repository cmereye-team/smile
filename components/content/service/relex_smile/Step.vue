<template>
  <div class="step section page_container">
    <div class="flex justify-center md:mt-28 mbShow" :style="{display: $i18n.locale == 'en' ? 'none': 'block'}">
      <h2>{{$t('service.relexSmile.step.h2_1')}}</h2>
    </div>
    <div class="mbShow mb-10">
      <p style="text-align: justify">
        {{$t('service.relexSmile.step.p')}}
      </p>
    </div>
    <div class="flex justify-center md:mt-28">
      <h2>{{$t('service.relexSmile.step.h2_2')}}</h2>
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
          src: "https://static.cmereye.com/imgs/smile/images/service/relex_smile/Step1.png",
          des: this.$t('service.relexSmile.step.des1'),
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/service/relex_smile/Step2.png",
          des: this.$t('service.relexSmile.step.des2'),
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/service/relex_smile/Step3.png",
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

    color: #6D6E71;
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
  font-weight: 500;
  color: #4570B6;
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 18px;
  }
  p{
    line-height: 30px;
    line-height: 30px;
    color: #6D6E71;
  }
  .step_list {
    text-align: center;
    display: flex;
    flex-direction: column;
    li {
      margin-top: 5vw;

      strong {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        /* identical to box height, or 133% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6D6E71;
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
