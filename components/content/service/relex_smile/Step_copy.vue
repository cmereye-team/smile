<template>
  <div class="step section page_container">
    <div class="step-in">
      {{$t('service.relexSmile.step.h2_2')}}
    </div>
    <ul class="step_list flex justify-between">
      <li v-for="(stepItem, index) in stepList" :key="index">
        <img :src="stepItem.src" alt="" />
        <div class="text">{{ stepItem.des }}</div>
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
          src: "https://static.cmereye.com/imgs/2023/08/875bbbb3865fed2d.jpg",
          des: this.$t('service.relexSmile.step.des1'),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/4bab72cb6026531d.jpg",
          des: this.$t('service.relexSmile.step.des2'),
        },
        {
          src: "https://static.cmereye.com/imgs/2023/08/acb095ed28677439.jpg",
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
.step{
  margin-top: 120px;
  &-in{
    color: #4570B6;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    padding-bottom: 30px;
    position: relative;
    text-align: center;
    &::after{
      content: '';
      background: #A6E1D6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
}
.step_list {
  width: 100%;
  max-width: 1175px;
  margin: 41px auto 0;
  .text {
    color: #6D6E71;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 35px; /* 175% */
    letter-spacing: 5px;
    width: 70%;
    margin: 0 auto;
  }
  li {
    img{
      border-radius: 29px;
      margin-bottom: 26px;
    }
  }
}
@media screen and (max-width: 768px) {
  .step{
    margin-top: 45px;
    width: auto;
    padding: 0 30px;
    &-in{
      font-size: 20px;
      line-height: 23.305px; /* 116.525% */
      letter-spacing: 5px;
      padding-bottom: 21px;
    }
  }
  .step_list {
    flex-direction: column;
    margin: 32px auto 0;
    .text{
      font-size: 15px;
      line-height: 30px; /* 200% */
      letter-spacing: 3.75px;
      width: 100%;
    }
    li{
      margin: auto;
      margin-bottom: 30px;
    }
    li:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
