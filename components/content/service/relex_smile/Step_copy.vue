<template>
  <div class="step section page_container">
    <!-- <div class="flex justify-center md:mt-28 mbShow">
      <h2>{{$t('service.relexSmile.step.h2_1')}}</h2>
    </div> -->
    <!-- <div class="mbShow mb-10">
      <p style="text-align: justify">
        {{$t('service.relexSmile.step.p')}}
      </p>
    </div> -->
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
    font-weight: 500;
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
  // text-align: center;
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
    // padding: 0 35px;
    img{
      border-radius: 29px;
      margin-bottom: 26px;
    }
  }
  // img {
  //   width: 25vw;
  //   margin-bottom: 2vw;
  // }
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
