<template>
  <div class="section page_container">
    <!-- <div class="flex justify-center title_serve">
      <h2>矯視服務</h2>
    </div> -->
    <div class="smileService">
      <div class="smileSerItem group">
        <a
          :href="'/vision-correction/relex-smile/'|checkUrl($i18n)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 class="title">SMILE</h3>
          <!-- <p>1000 度近視<br />500 度散光</p> -->
          <p v-html="$t('home.CorrectionService.p1')"></p>
          <span class="morelink">了解更多</span>
          <img
            class="morelink_img transition duration-500 ease-in-out transform group-hover:translate-x-3"
            src="https://static.cmereye.com/imgs/2023/03/8462fdf2330efa37.png"
            alt=""
          />
        </a>
      </div>

      <div class="smileSerItem group">
        <a
          :href="'/vision-correction-lasik/'|checkUrl($i18n)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 class="title">LASIK</h3>
          <p v-html="$t('home.CorrectionService.p2')"></p>
          <!-- <p>
            1500 度近視 <br />
            600 度遠視/散光
          </p> -->
          <span class="morelink">了解更多</span>
          <img
            class="morelink_img transition duration-500 ease-in-out transform group-hover:translate-x-3"
            src="https://static.cmereye.com/imgs/2023/03/8462fdf2330efa37.png"
            alt=""
          />
        </a>
      </div>

      <div class="smileSerItem group">
        <a
          :href="'/vision-correction-icl/'|checkUrl($i18n)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 class="title">ICL</h3>
          <p v-html="$t('home.CorrectionService.p3')"></p>
          <!-- <p>1800 度近視<br />1000 度遠視<br />600 度散光</p> -->
          <span class="morelink">了解更多</span>
          <img
            class="morelink_img transition duration-500 ease-in-out transform group-hover:translate-x-3"
            src="https://static.cmereye.com/imgs/2023/03/8462fdf2330efa37.png"
            alt=""
          />
        </a>
      </div>

      <div class="smileSerItem group">
        <a
          :href="'/vision-correction-presbyopia/'|checkUrl($i18n)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 class="title">CLEAR-Vision</h3>
          <p v-html="$t('home.CorrectionService.p4')"></p>
          <!-- <p>39 歲以上<br />同時有近視／遠視／<br />散光問題</p> -->
          <span class="morelink">了解更多</span>
          <img
            class="morelink_img transition duration-500 ease-in-out transform group-hover:translate-x-3"
            src="https://static.cmereye.com/imgs/2023/03/8462fdf2330efa37.png"
            alt=""
          />
        </a>
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
    return {};
  },
  created() {},
  methods: {},
};
</script>

<!-- smile服务新增 1.13 -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");
.section {
  margin-bottom: 90px;
  padding: 0 0 0 43px;
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

.smileService .smileSerItem {
  background-image: url(https://static.cmereye.com/imgs/2023/03/9e93dc0fbc3b1b9c.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 224px;
  height: 163px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smileService .smileSerItem h3 {
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
.smileService .smileSerItem:nth-child(4) h3 {
  font-size: 34px;
}
.smileService .smileSerItem h3 span {
  font-family: "Lora", serif;
}

.smileService .smileSerItem p {
  font-family: 'Inter', sans-serif;
  
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
  /* or 233% */

  text-align: center;
  letter-spacing: 0.05em;

  color: #64a8d2;
}

.smileService .smileSerItem .morelink {
  font-size: 13px;
  color: #6d6e71;
  position: absolute;
  bottom: -0.5vw;
  right: 1vw;
}
.smileService .smileSerItem .morelink_img {
  position: absolute;
  bottom: -15px;
  right: 0.5vw;
}
/* .smileService .smileSerItem .morelink::before {
  content: " ";
  position: absolute;
  width: 120%;
  height: 0;
  border-bottom: #64a8d2 2px solid;
  bottom: -0.5vw;
  right: -0.6vw;
}

.smileService .smileSerItem .morelink::after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.5vw 0 0 0.6vw;
  border-color: transparent transparent transparent #64a8d2;
  bottom: -0.5vw;
  right: -1vw;
} */
@media only screen and (min-width: 768px) {
  p {
    font-size: 20px !important;
  }
  .section {
    margin-top: 85px;
  }
}
@media only screen and (max-width: 768px) {
  .smileService .smileSerItem p {
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
  }
  .smileService .smileSerItem {
    width: 65%;
    height: 42vw;
    margin-bottom: 85px;transform: translateX(20px);
  }
  .smileService .smileSerItem:nth-child(1){margin-top: 25px;}
  .smileService .smileSerItem:last-child{margin-bottom: 55px;}

  .smileService .smileSerItem h3 {
    top: -9vw;
    left: -11vw;
    font-size: 50px;
  }

  .smileService .smileSerItem .morelink {
    font-size: 12px;
    bottom: -1.5vw;
    right: 5vw;
  }

  .smileService .smileSerItem .morelink::before {
    bottom: -1.5vw;
    right: -10px;
  }

  .smileService .smileSerItem .morelink::after {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 0 10px;
    border-color: transparent transparent transparent #64a8d2;
    bottom: -1.5vw;
    right: -3vw;
  }
}
</style>
