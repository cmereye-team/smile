<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('service.clearVision.manMade.h2')}}</h2>
    </div>
    <div class="mbShow">
      <span>
        {{$t('service.clearVision.manMade.span1')}} </span
      ><br />
      <span>
        {{$t('service.clearVision.manMade.span2')}}
      </span>
    </div>
    <div class="madeBox1">
      <img
        src="https://static.cmereye.com/imgs/2022/12/5867e965bfafc043.png"
        alt=""
      />
      <span
        >{{$t('service.clearVision.manMade.span3')}}</span
      >
    </div>
    <div class="madeBox2">
      <img
        src="https://static.cmereye.com/imgs/2022/12/19f9b730f426da71.png"
        alt=""
      />
      <span
        >{{$t('service.clearVision.manMade.span4')}}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;

}
span{
  color: #6D6E71;
}
@media screen and (min-width: 768px) {
  .madeBox1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      max-width: 20vw;
    }
    span {
      flex: 0.5;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      letter-spacing: 0.1em;

      color: #6D6E71;
      margin: 0 10px;
    }
  }
  .madeBox2 {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-direction: row-reverse;
    img {
      max-width: 20vw;
    }
    span {
      flex: 0.5;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      letter-spacing: 0.1em;

      color: #6D6E71;
      margin: 0 10px;
    }
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 16px;
  }
  span {
    font-size: 14px;
    line-height: 25px;
  }
  .madeBox1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
      margin-bottom: 40px;
      margin-top: 40px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 200% */

      // text-align: center;
      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
  .madeBox2 {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
      margin-bottom: 40px;
    }
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 25px;
      /* or 200% */

      // text-align: center;
      letter-spacing: 0.1em;

      color: #6D6E71;
    }
  }
}
</style>
