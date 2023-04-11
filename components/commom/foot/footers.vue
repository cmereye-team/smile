<template>
  <div class="container">
    <div class="online footer mbShow">
      <div class="foot">
        <div class="box" v-for="item in footerLists" :key="item.title" @click="handleFoot(item)">
          <img
            :src="item.img"
            alt=""
          />
          <p>{{item.title}}</p>
        </div>
        <!-- <div class="box">
          <img
            src="https://static.cmereye.com/imgs/2023/03/4f2e7a260618edb4.png"
            alt=""
          />
          <p>致電查詢</p>
        </div>
        <div class="box">
          <img
            src="https://static.cmereye.com/imgs/2023/03/935a17da94382a86.png"
            alt=""
          />
          <p>線上對話</p>
        </div>
        <div class="box">
          <img
            src="https://static.cmereye.com/imgs/2023/03/e011cddb240290b9.png"
            alt=""
          />
          <p>Whatsapp</p>
        </div>
        <div class="box">
          <img
            src="https://static.cmereye.com/imgs/2023/03/aa60fde6a44f6099.png"
            alt=""
          />
          <p>預約服務</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerLists:[
        {
          type: 'tel',
          link: '',
          img:'https://static.cmereye.com/imgs/2023/03/4f2e7a260618edb4.png',
          title: this.$t('home.footer.title1')
        },
        {
          type: 'fun',
          link:'',
          img:'https://static.cmereye.com/imgs/2023/03/935a17da94382a86.png',
          title: this.$t('home.footer.title2')
        },
        {
          type: 'href',
          link:'https://wa.me/85260610511',
          img:'https://static.cmereye.com/imgs/2023/03/e011cddb240290b9.png',
          title: 'Whatsapp'
        },
        {
          type: 'link',
          link:'/booking',
          img:'https://static.cmereye.com/imgs/2023/03/aa60fde6a44f6099.png',
          title: this.$t('home.footer.title3')
        }
      ]
    };
  },
  mounted() {

  },
  created() {},
  methods: {
    handleFoot(data){
      // console.log('点击的foot内容: ---->',data)
      if(data.type === 'link'){
        this.$router.push({
          path: data.link,
        });
      }else if(data.type === 'href'){
        window.open(data.link)
      }else if(data.type === 'tel'){
        window.location.href = 'tel:60610511'
      }
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
//mb
@media only screen and (max-width: 760px) {
  .foot {
    display: flex;
    height: 102px;
    background: #4570b6;
    justify-content: center;
    align-items: center;
    .box {
      height: 62%;
      width: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 0.5px solid #d9eaed;
      img {
        width: 28px;
      }
      p {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        margin-top: 16px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #d9eaed;
      }
    }
    .box:nth-child(4) {
      border: 0;
    }
  }
  .face-primary {
    .what {
      width: 6vw;
    }
  }
  .container {
    position: fixed;
    bottom: 0;
    z-index: 99;
    padding: 0;
    overflow-y: hidden;
  }
  a {
    margin: 0;
    padding: 0 !important;
  }
  .face-button1 {
    width: 50%;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    margin: 0 !important;
    background-color: #57b2f3;
    border-radius: 18px 18px 0 0;
  }
  .face-button {
    width: 50%;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    float: left;
    margin: 0 !important;
    background-color: #9bd0f5;
    color: #fff;
    border-radius: 18px 18px 0 0;
  }
}
</style>
