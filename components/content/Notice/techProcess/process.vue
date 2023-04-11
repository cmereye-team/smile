<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('notice.techProcess.process.h2')}}</h2>
    </div>
    <div class="text-center process-text mb-20">
      <span
        >{{$t('notice.techProcess.process.span1')}}</span
      >
    </div>
    <div>
      <div class="flex my-10 process-step justify-around">
        <div class="step-box" v-for="(item, index) in stepLists" :key="index">
          <div class="step">
            <img
              :src="item.img"
              alt=""
            />
          </div>
          <div class="step-txt"><span>{{item.text}}</span></div>
        </div>
        <!-- <div class="step-box">
          <div class="step">
            <img
              src="https://static.cmereye.com/imgs/2022/12/06d8dc6309843ceb.png"
              alt=""
            />
          </div>
          <div class="step-txt"><span>屈光檢查</span></div>
        </div>
        <div class="step-box">
          <div class="step">
            <img
              src="https://static.cmereye.com/imgs/2022/12/720c63a2c77fa1fd.png"
              alt=""
            />
          </div>
          <div class="step-txt"><span>術前準備</span></div>
        </div>
        <div class="step-box">
          <div class="step">
            <img
              src="https://static.cmereye.com/imgs/2022/12/8783c894fe4331d9.png"
              alt=""
            />
          </div>
          <div class="step-txt"><span>預約翌日覆診</span></div>
        </div>
        <div class="step-box">
          <div class="step">
            <img
              src="https://static.cmereye.com/imgs/2022/12/02280dc75fddbd20.png"
              alt=""
            />
          </div>
          <div class="step-txt"><span>矯視療程</span></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepLists: [
        {
          img: 'https://static.cmereye.com/imgs/2022/12/06d8dc6309843ceb.png',
          text: this.$t('notice.techProcess.process.span2')
        },
        {
          img: 'https://static.cmereye.com/imgs/2022/12/720c63a2c77fa1fd.png',
          text: this.$t('notice.techProcess.process.span3')
        },
        {
          img: 'https://static.cmereye.com/imgs/2022/12/8783c894fe4331d9.png',
          text: this.$t('notice.techProcess.process.span4')
        },
        {
          img: 'https://static.cmereye.com/imgs/2022/12/02280dc75fddbd20.png',
          text: this.$t('notice.techProcess.process.span5')
        }
      ]
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
}

.step-txt {
  position: absolute;
  top: 67px;
  left: 89px;
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  text-align: right;
  letter-spacing: 0.1em;

  background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  span {
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 100% */

    text-align: right;
    letter-spacing: 0.1em;

    background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    white-space: pre;
  }
}
@media screen and (min-width: 768px) {
  .step-box {
    position: relative;
    width: 165px;
    border-style: solid;
    border-bottom: 0.5px solid #4570b6;
    .step {
      img {
        width: 120px;
      }
    }
  }
  .step-box:nth-child(3) {
    position: relative;
    width: 210px;
    border-style: solid;
    border-bottom: 0.5px solid #4570b6;
  }
  .process-text {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #6D6E71;
  }
}
@media screen and (max-width: 768px) {
  .step-txt {
    position: absolute;
    top: 51px;
    left: 89px;
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.1em;
    background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .step-box {
    position: relative;
  }
  h2 {
    font-size: 16px;
  }
  .step-box:nth-child(1):after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #4570b6;
  }
  .step-box:nth-child(3):after {
    content: "";
    position: absolute;
    width: 60%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #4570b6;
  }
  .step-box:nth-child(2):after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #4570b6;
    bottom: 0;
    right: 0;
  }
  .step-box:nth-child(4):after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #4570b6;
    bottom: 0;
    right: 0;
  }
  .process-step {
    display: flex;
    flex-direction: column;
    .step-box {
      width: 100%;
      margin-bottom: 41px;
    }
    .step-box:nth-child(2) {
      display: flex;
      padding-right: 18vw;
      justify-content: flex-end;
      .step-txt {
        position: absolute;
        right: 0;
      }
    }
    .step-box:nth-child(4) {
      display: flex;
      padding-right: 18vw;
      justify-content: flex-end;
      .step-txt {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
