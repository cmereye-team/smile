<template>
  <div class="section page_container">
    <!-- <div class="flex justify-center title_serve">
      <h2>矯視服務</h2>
    </div> -->
    <div class="smileService">
      <div class="smileSerItemBox" v-for="(item,index) in lists" :key="index">
        <div class="smileSerItem group">
          <a
            :href="item.href | checkUrl($i18n)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 class="title">{{item.title}}</h3>
            <p v-html="item.content"></p>
            <!-- <p>39 歲以上<br />同時有近視／遠視／<br />散光問題</p> -->
            <span class="morelink">了解更多</span>
            <img
              class="morelink_img transition duration-500 ease-in-out transform group-hover:translate-x-2"
              src="https://static.cmereye.com/imgs/2023/03/8462fdf2330efa37.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    checkUrl(_url,$i18n){
      if($i18n.locale === 'cn'){
        var newUrl = `/cn${_url}`
      }
      return newUrl || _url
    }
  },
  data() {
    return {
      lists: [
        {
          title: 'SMILE',
          content: this.$t('home.CorrectionService.p1'),
          href: '/vision-correction/relex-smile/'
        },
        {
          title: 'LASIK',
          content: this.$t('home.CorrectionService.p2'),
          href: '/vision-correction-lasik/'
        },
        {
          title: 'ICL',
          content: this.$t('home.CorrectionService.p3'),
          href: '/vision-correction-icl/'
        },
        {
          title: 'CLEAR-Vision',
          content: this.$t('home.CorrectionService.p4'),
          href: '/vision-correction-presbyopia/'
        }
      ]
    };
  },
  created() {},
  methods: {},
};
</script>

<!-- smile服务新增 1.13 -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");
.section {
  margin-bottom: 40px;
  padding: 0;
}
.title_serve h2 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height, or 120% */

  letter-spacing: 0.1em;
  margin-top: 54px;
  color: #444343;
}
.smileService {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.smileSerItemBox{
  display: flex;
  align-items: center;
  justify-content: center;
  .smileSerItem {
    background-image: url(https://static.cmereye.com/imgs/2023/03/9e93dc0fbc3b1b9c.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 224px;
    height: 163px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      position: absolute;
      top: -40px;
      left: -40px;
      font-family: "Baskervville" !important;
      letter-spacing: 1px;
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 65px;
      white-space: pre;
      color: #aed5e7;
    }
    span {
      font-family: "Lora", serif;
    }
    p {
      font-family: 'Inter', sans-serif; 
      font-weight: 300;
      font-size: 20px;
      line-height: 35px;
      /* or 233% */
      text-align: center;
      letter-spacing: 0.05em;
      color: #64a8d2;
    }
    .morelink {
      font-size: 13px;
      color: #6d6e71;
      position: absolute;
      bottom: -0.5vw;
      right: 1vw;
    }
    .morelink_img {
      position: absolute;
      bottom: -15px;
      right: 0.5vw;
    }
  }
  
}
.smileSerItemBox:last-child {
  .smileSerItem{
    h3{
      font-size: 34px;
    }
  }
}


@media only screen and (min-width: 768px) {
  p {
    font-size: 20px !important;
  }
  .section {
    padding-top: 45px;
  }
  .smileSerItemBox{
    /* width: 25%; */
    height: 100%;
    padding: 50px 0 50px 50px ;
    overflow: hidden;
  }
  .smileSerItem:hover::before{
    content: '';
    position: absolute;
    left: -30px;
    top: 0;
    width: 20px;
    height: 100%;
    display: block;
    background: rgba(255, 255, 255, .9);
    transform: skew(10deg,10deg);
    animation: smileSerItemBeforeAnima 1s;
  } 
  .smileSerItem:hover::after{
    content: '';
    position: absolute;
    left: -40px;
    top: 0;
    width: 5px;
    height: 100%;
    display: block;
    background: rgba(255, 255, 255, .9);
    transform: skew(10deg,10deg);
    animation: smileSerItemAfterAnima 1s;
  }
  @keyframes smileSerItemBeforeAnima {
    0%{
      left: -30px;
    }
    100%{
      left: 110%;
    }
  }
  @keyframes smileSerItemAfterAnima {
    0%{
      left: -40px;
    }
    100%{
      left: 105%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .smileService .smileSerItemBox .smileSerItem p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 28px;
    /* or 233% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #64a8d2;
  }
  .section {
    margin-bottom: 90px;
    padding: 0;
  }
  .title_serve h2 {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 120% */

    letter-spacing: 0.1em;
    margin-top: 5px;
    color: #444343;
  }
  .section {
    margin-bottom: 10px;
  }
  .smileService {
    flex-direction: column;
    margin-top: 50px;
    .smileSerItemBox{
      width: 100%;
      height: 100%;
      .smileSerItem{
        width: 65%;
        height: 42vw;
        margin-bottom: 85px;transform: translateX(20px);
        h3 {
          top: -9vw;
          left: -11vw;
          font-size: 50px;
        }
        .morelink {
          font-size: 12px;
          bottom: -1.5vw;
          right: 5vw;
        }
        .morelink::before {
          bottom: -1.5vw;
          right: -10px;
        }
        .morelink::after {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 0 0 10px;
          border-color: transparent transparent transparent #64a8d2;
          bottom: -1.5vw;
          right: -3vw;
        }
      }

    }
    .smileSerItemBox:nth-child(1){
      margin-top: 25px;
    }
    
  }
  .smileSerItemBox:last-child {
    .smileSerItem{
      h3{
        font-size: 34px;
      }
    }
  }
  
}
</style>
