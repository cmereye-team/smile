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
      <!-- 以下 icl 活动弹窗 -->
<!--      <div class="footer-coupon footer_coupon_mb">-->
<!--        <a href="/icl-event">-->
<!--          <div>-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="40"-->
<!--              height="26"-->
<!--              viewBox="0 0 40 26"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                d="M38.926 20.3237C38.926 20.3237 38.9095 20.3074 38.893 20.283C38.8848 20.2667 38.8683 20.2504 38.8601 20.2422C38.6375 19.9405 37.9202 18.8561 37.9202 17.1439C37.9202 15.1055 37.8707 12.8389 37.8707 12.8389C37.8707 12.8389 37.9202 10.564 37.9202 8.53382C37.9202 6.82158 38.6375 5.73717 38.8601 5.43549C38.8683 5.41919 38.8848 5.41103 38.893 5.39473C38.9178 5.37027 38.926 5.35396 38.926 5.35396V5.3458C39.1734 5.01967 39.3218 4.61199 39.3218 4.1717C39.3218 3.07914 38.4231 2.19041 37.3183 2.19041C29.2384 2.38609 25.3716 1.55444 25.3716 1.55444C24.0194 1.21199 22.1809 1 20.1609 1C18.1409 1 16.3023 1.21199 14.9502 1.55444C14.9502 1.55444 11.0834 2.38609 3.00348 2.19041C1.89868 2.19041 1 3.07914 1 4.1717C1 4.61199 1.14841 5.01967 1.39575 5.3458V5.35396C1.39575 5.35396 1.41224 5.37027 1.42873 5.39473C1.43697 5.41103 1.45346 5.42734 1.46171 5.43549C1.68432 5.73717 2.40161 6.82158 2.40161 8.53382C2.40161 10.5722 2.45108 12.8389 2.45108 12.8389C2.45108 12.8389 2.40161 15.1137 2.40161 17.1439C2.40161 18.8561 1.68432 19.9405 1.46171 20.2422C1.45346 20.2585 1.43697 20.2667 1.42873 20.283C1.40399 20.3074 1.39575 20.3237 1.39575 20.3237V20.3319C1.14841 20.658 1 21.0657 1 21.506C1 22.5986 1.89868 23.4873 3.00348 23.4873C11.0834 23.2916 14.9502 24.1233 14.9502 24.1233C16.3023 24.4657 18.1409 24.6777 20.1609 24.6777C22.1809 24.6777 24.0194 24.4657 25.3716 24.1233C25.3716 24.1233 29.2384 23.2916 37.3183 23.4873C38.4231 23.4873 39.3218 22.5986 39.3218 21.506C39.3218 21.0657 39.1734 20.658 38.926 20.3237Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M3.06937 4.36721C3.26517 4.36721 3.4239 4.21025 3.4239 4.01662C3.4239 3.82298 3.26517 3.66602 3.06937 3.66602C2.87357 3.66602 2.71484 3.82298 2.71484 4.01662C2.71484 4.21025 2.87357 4.36721 3.06937 4.36721Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M37.3677 22.0194C37.5635 22.0194 37.7222 21.8625 37.7222 21.6688C37.7222 21.4752 37.5635 21.3182 37.3677 21.3182C37.1719 21.3182 37.0132 21.4752 37.0132 21.6688C37.0132 21.8625 37.1719 22.0194 37.3677 22.0194Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M20.1527 21.9542C25.248 21.9542 29.3786 17.8693 29.3786 12.8304C29.3786 7.7915 25.248 3.70667 20.1527 3.70667C15.0573 3.70667 10.9268 7.7915 10.9268 12.8304C10.9268 17.8693 15.0573 21.9542 20.1527 21.9542Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M33.1216 2.19019C35.5455 5.07652 37.0049 8.78635 37.0049 12.8386C37.0049 16.8909 35.562 20.56 33.1546 23.4381"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M7.18359 23.479C4.75962 20.5927 3.30029 16.8829 3.30029 12.8306C3.30029 8.77832 4.74313 5.10926 7.15061 2.23108"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M9.5745 13.1809C9.7703 13.1809 9.92902 13.024 9.92902 12.8303C9.92902 12.6367 9.7703 12.4797 9.5745 12.4797C9.3787 12.4797 9.21997 12.6367 9.21997 12.8303C9.21997 13.024 9.3787 13.1809 9.5745 13.1809Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M30.7305 13.1809C30.9263 13.1809 31.085 13.024 31.085 12.8303C31.085 12.6367 30.9263 12.4797 30.7305 12.4797C30.5347 12.4797 30.376 12.6367 30.376 12.8303C30.376 13.024 30.5347 13.1809 30.7305 13.1809Z"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M30.7966 2.21465C30.7966 2.21465 30.1618 3.02184 27.2431 3.02184C24.3245 3.02184 23.533 2.19019 20.4989 2.19019C17.4648 2.19019 16.6733 3.02184 13.7547 3.02184C10.836 3.02184 10.2012 2.21465 10.2012 2.21465"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M30.7966 23.5032C30.7966 23.5032 30.1618 22.696 27.2431 22.696C24.3245 22.696 23.533 23.5277 20.4989 23.5277C17.4648 23.5277 16.6733 22.696 13.7547 22.696C10.836 22.696 10.2012 23.5032 10.2012 23.5032"-->
<!--                stroke="white"-->
<!--                stroke-width="0.5"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--              <path-->
<!--                d="M39.1042 20.3237C39.1042 20.3237 39.0878 20.3074 39.0713 20.283C39.063 20.2667 39.0465 20.2504 39.0383 20.2422C38.8157 19.9405 38.0984 18.8561 38.0984 17.1439C38.0984 15.1055 38.0489 12.8389 38.0489 12.8389C38.0489 12.8389 38.0984 10.564 38.0984 8.53382C38.0984 6.82158 38.8157 5.73717 39.0383 5.43549C39.0465 5.41919 39.063 5.41103 39.0713 5.39473C39.096 5.37027 39.1042 5.35396 39.1042 5.35396V5.3458C39.3516 5.01967 39.5 4.61199 39.5 4.1717C39.5 3.07914 38.6013 2.19041 37.4965 2.19041C29.4166 2.38609 25.5498 1.55444 25.5498 1.55444C24.1977 1.21199 22.3591 1 20.3391 1C18.3191 1 16.4805 1.21199 15.1284 1.55444C15.1284 1.55444 11.2616 2.38609 3.18171 2.19041C2.0769 2.19041 1.17822 3.07914 1.17822 4.1717C1.17822 4.61199 1.32663 5.01967 1.57397 5.3458V5.35396C1.57397 5.35396 1.59046 5.37027 1.60695 5.39473C1.6152 5.41103 1.63169 5.42734 1.63993 5.43549C1.86254 5.73717 2.57984 6.82158 2.57984 8.53382C2.57984 10.5722 2.62931 12.8389 2.62931 12.8389C2.62931 12.8389 2.57984 15.1137 2.57984 17.1439C2.57984 18.8561 1.86254 19.9405 1.63993 20.2422C1.63169 20.2585 1.6152 20.2667 1.60695 20.283C1.58222 20.3074 1.57397 20.3237 1.57397 20.3237V20.3319C1.32663 20.658 1.17822 21.0657 1.17822 21.506C1.17822 22.5986 2.0769 23.4873 3.18171 23.4873C11.2616 23.2916 15.1284 24.1233 15.1284 24.1233C16.4805 24.4657 18.3191 24.6777 20.3391 24.6777C22.3591 24.6777 24.1977 24.4657 25.5498 24.1233C25.5498 24.1233 29.4166 23.2916 37.4965 23.4873C38.6013 23.4873 39.5 22.5986 39.5 21.506C39.5 21.0657 39.3516 20.658 39.1042 20.3237Z"-->
<!--                stroke="white"-->
<!--                stroke-miterlimit="10"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--            </svg>-->
<!--          </div>-->
<!--          <div>-->
<!--            <span>ICL<br />星級矯視講座</span>-->
<!--          </div>-->
<!--        </a>-->
<!--      </div>-->
      <!-- <div class="footer-coupon">
        <a
          :href="'https://api.whatsapp.com/send/?phone=85260610511&text=%E6%83%B3%E4%BA%86%E8%A7%A3(W-01)SMILE%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96%E6%B6%88%E8%B2%BB%E5%8D%B7%E6%94%B6%E8%B2%BB%E8%A9%B3%E6%83%85'"
        >
          <div><img src="@/asset/image/common/Layer_1.png" alt="" /></div>
          <div>
            <span v-html="$t('home.headers.coupon_all')"></span>
            <span>{{$t('home.headers.preferential')}}</span>
          </div>
        </a>
      </div> -->
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
        window.location.href = 'tel:38925099'
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
    transform: scale(0.7);
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
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 160px;
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
    background: #98CEC3;
    top: -100%;
  }
}
</style>
