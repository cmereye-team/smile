<template>
  <div class="footerBox">
    <div class="online footer mbShow">
      <div class="foot">
        <div class="box" v-for="item in footerLists" :key="item.title" @click="handleFoot(item)">
          <img
            :src="item.img"
            alt=""
          />
          <p>{{item.title}}</p>
        </div>
      </div>
      <!-- <div class="footer-coupon footer_coupon_mb">
        <a href="./wedding">
          <div>
            <span>{{$t('home.headers.weeding_btn')}}</span>
          </div>
        </a>
      </div> -->
      <div class="footer-coupon">
        <a :href="'https://api.whatsapp.com/send/?phone=85260610511&text=%E6%83%B3%E4%BA%86%E8%A7%A3(W-01)SMILE%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96%E6%B6%88%E8%B2%BB%E5%8D%B7%E6%94%B6%E8%B2%BB%E8%A9%B3%E6%83%85'">
          <div><img src="@/asset/image/common/Layer_1.png" alt=""></div>
          <div>
            <span>{{$t('home.headers.coupon')}}</span>
            <span>{{$t('home.headers.preferential')}}</span>
          </div>
        </a>
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
          type: 'href',
          link:'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&oname=CS_Katherine&r=&rf1=https%3A//smile.hkcmereye&rf2=.com/&p=https%3A//smile.hkcmereye.com/&cid=26ad3fcc05fa407b81167bda7abd1c92&sid=26ad3fcc05fa407b81167bda7abd1c92',
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
    width: 100%;
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
        font-family: var(--font_family);
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
  .footerBox {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2001;
    padding: 0;
    width: 100vw;
    // overflow-y: hidden;
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
  .footer-coupon{
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 180px;
    right: 15px;
    background: #4570B6;
    z-index: 9990;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    div{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 25px;
        // height: 25px;
      }
      span{
        display: block;
        width: 100%;
        text-align: center;
        color:#fff;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 17px;
      }
    }

  }
  .footer_coupon_mb{
    background: #E88597;
    top: -70%;
  }
}
</style>
