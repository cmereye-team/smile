<template>
  <div>
    <Header />
    <Navbar />
    <MainBanner />
    <div class="smilePro-desc page_container">
        <div class="smilePro-desc-title flex justify-center md:mt-28 mt-10">
          <h2>以下描述符合你嗎?</h2>
        </div>
        <div class="smilePro-desc-in">
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/c9ade3fdcb092abc.jpg" />
                <div>
                    <span>生活受近視或/</span>
                    <span>及散光困擾</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/908e2ba8cd129d5b.jpg" />
                <div>
                    <span>擔心矯視過程，</span>
                    <span>眼睛無法對焦太久</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/9f64d4fd52cd469e.jpg" />
                <div>
                    <span>追求更佳手術體驗感</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/a3ade36153e14488.jpg" />
                <div>
                    <span>暗室瞳孔直徑偏大</span>
                </div>
            </div>
        </div>
    </div>

    <div class="smilePro-descVideo page_container">
        <div class="smilePro-descVideo-title">
            <span>如你符合以上描述，你應考慮選擇</span>
            <span>SMILE PRO!</span>
        </div>
        <div class="smilePro-descVideo-in">

        </div>
    </div>

    <div class="smilePro-contrast page_container">
        <div class="smilePro-contrast-title flex justify-center md:mt-28 mt-10">
          <h2>一圖看清SMILE, SMILE PRO, ICL大不同</h2>
        </div>
        <div class="smilePro-contrast-in">

        </div>
        <div class="smilePro-contrast-btn">
            <nuxt-link to="/">
                <div class="smileProBtn">
                    預約咨詢
                </div>
            </nuxt-link>
        </div>
    </div>

    <div class="smilePro-features page_container">
        <div class="smilePro-features-box">
            <div class="smilePro-features-title">SMILE PRO三大特點</div>
            <div class="smilePro-features-context">
                <span>ZEISS VISUMAX 800 SMILE®pro</span>
                <span>以德國蔡司光學與諾貝爾獎激光技術進行矯視</span>
            </div>
            <div class="smilePro-features-lists">
                <div class="smilePro-features-lists-in">
                    <span>極小光點</span>
                    <span>4-2mm微創切口</span>
                </div>
                <div class="smilePro-features-lists-in">
                    <span>極低能量</span>
                    <span>復原時間相對快</span>
                </div>
                <div class="smilePro-features-lists-in">
                    <span>極速脈衝</span>
                    <span>過程短而精準</span>
                </div>
            </div>
        </div>
    </div>

    <div class="smilePro-cases page_container">
        <div class="smilePro-cases-title flex justify-center md:mt-28 mt-10">
          <h2>名人用家個案</h2>
        </div>
        <div class="smilePro-cases-in">
            <a href="https://youtu.be/oHDOFYMEUsk">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/444e690917f7719d.jpg" />
                    <div>微笑矯視 - Shirley 陳欣妍</div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=5ihrzFvOy38">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/9e8f394a8a4cd8cf.jpg" />
                    <div>植入式隱形眼鏡 - Serene 林宣妤</div>
                </div>
            </a>
            <a href="https://youtu.be/AJz2E7jEYqY">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/4d46826756514953.jpg" />
                    <div>微笑矯視 - Dominic 何浩文</div>
                </div>
            </a>
        </div>
        <div class="smilePro-cases-btn">
            <nuxt-link to="/">
                <div class="smileProBtn">
                    瞭解更多
                </div>
            </nuxt-link>
        </div>
    </div>

    <div class="smilePro-prove page_container">
        <div class="smilePro-prove-title flex justify-center md:mt-28 mt-10">
          <h2>用家見證</h2>
        </div>
        <div class="smilePro-prove-in pcShow">
            <div
              class="swiper smileProSwiper"
              v-swiper:smileProSwiper="smileProSwiperOption"
              ref="smileProSwiper"
            >
                <div class="swiper-wrapper">
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">Macy, 文員</div>
                        <div class="smileProSwiper-in-context">
                            <span>第一次做眼部手術，</span>
                            <span>本身好緊張，但醫生同職員都</span>
                            <span>
                                <span class="focus">好細心</span>
                                <span>講解同鼓勵我，</span>
                            </span>
                            <span>令我好安心</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">Agnes, 行政人員</div>
                        <div class="smileProSwiper-in-context">
                            <span>一直擔心做完需要好耐先回復</span>
                            <span>正常生活，原來做完</span>
                            <span><span class="focus">第 2 日已經睇得清</span>,</span>
                            <span>如常生活架喇!</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">Vivien, 家庭主婦</div>
                        <div class="smileProSwiper-in-context">
                            <span>我係好怕痛既人黎，</span>
                            <span>
                                <span>但真係</span>
                                <span class="focus">完全無痛!</span>
                            </span>
                            <span>會推薦比朋友!</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">阿聲, 咖啡師</div>
                        <div class="smileProSwiper-in-context">
                            <span>做完<span class="focus"> SMILE PRO </span></span>
                            <span class="smallLineHeight">好似重新感受世界咁! 只係</span>
                            <span class="smallLineHeight"><span class="smallFocus">短短 10 秒</span>就有咁大改</span>
                            <span class="smallLineHeight">變, 好後悔自己 無早 d 做!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="smileProSwiper-prev"></div>
            <div class="smileProSwiper-next"></div>
        </div>
        <div class="smilePro-prove-in mbShow">
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">Macy, 文員</div>
                    <div class="smileProSwiper-in-context">
                        <span>第一次做眼部手術，</span>
                        <span>本身好緊張，但醫生同職員都</span>
                        <span>
                            <span class="focus">好細心</span>
                            <span>講解同鼓勵我，</span>
                        </span>
                        <span>令我好安心</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">Agnes, 行政人員</div>
                    <div class="smileProSwiper-in-context">
                        <span>一直擔心做完需要好耐先回復</span>
                        <span>正常生活，原來做完</span>
                        <span><span class="focus">第 2 日已經睇得清</span>,</span>
                        <span>如常生活架喇!</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">Vivien, 家庭主婦</div>
                    <div class="smileProSwiper-in-context">
                        <span>我係好怕痛既人黎，</span>
                        <span>
                            <span>但真係</span>
                            <span class="focus">完全無痛!</span>
                        </span>
                        <span>會推薦比朋友!</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">阿聲, 咖啡師</div>
                    <div class="smileProSwiper-in-context">
                        <span>做完<span class="focus"> SMILE PRO </span></span>
                        <span class="smallLineHeight">好似重新感受世界咁! 只係</span>
                        <span class="smallLineHeight"><span class="smallFocus">短短 10 秒</span>就有咁大改</span>
                        <span class="smallLineHeight">變, 好後悔自己 無早 d 做!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/service/SMILEPRO/MainBanner.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, footers },
  head() {
    return {
      title: "SMILE PRO 微笑矯視 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "SMILE PRO 微笑矯視 - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "SMILE PRO 微笑矯視 - 香港希瑪微笑矯視中心",
        },
      ],
    };
  },
  data(){
    return{
        smileProSwiperOption: {
          loop: true,
          autoplay: true,
          loopedSlides: 4, // looped slides should be the same
        //   spaceBetween: 0,
          navigation: {
            nextEl: ".smileProSwiper-next",
            prevEl: ".smileProSwiper-prev",
          },
        //   centeredSlides: true,
          slidesPerView: "auto",
        //   touchRatio: 0.2,
        //   slideToClickedSlide: true,
        },
      }
  }
};
</script>

<style lang="scss" scoped>
.smileProBtn{
    width: 227.5px;
    height: 45.7px;
    line-height: 45.7px;
    text-align: center;
    background: linear-gradient(94.37deg, #81DBEC 12.08%, #4570B6 92.9%);
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 500;
    font-size: 16.254px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
}
.smilePro-desc{
    &-title{
        h2{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }
    &-in{
        display: flex;
        justify-content: space-around;
        &-box{
            max-width: 200px;
            &>div{
                margin-top: 39px;
                span{
                    display: block;
                    font-family: var(--font_family);
                    font-style: normal;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 30px;
                    text-align: center;
                    letter-spacing: 0.1em;
                    color: #6D6E71;
                }
            }
        }
    }
}
.smilePro-descVideo{
    margin-top: 66px;
    &-title{
        text-align: center;
        span{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 48px;
            letter-spacing: 0.1em;
            color: #6D6E71;
            &:last-child{
                color: #4570B6;
            }
        }
    }
    &-in{
        margin-top: 88px;
        width: 100%;
        height: 484px;
        background: rgb(255, 253, 243);
    }
}
.smilePro-contrast{
    &-title{
        h2{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }
    &-in{

    }
    &-btn{
        margin-top: 78px;
        display: flex;
        justify-content: center;
    }
}
.smilePro-features{
    background: url(https://static.cmereye.com/imgs/2023/05/006918ac3ee0a0bd.jpg)no-repeat;
    background-size: 100% 100%;
    height: 600px;
    margin-top: 71px;
    &-box{
        float: right;
        width: 695px;
        margin-right: 41px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    &-title{
        text-align: center;
        background: linear-gradient(94.37deg, #4570B6 12.08%, #81DBEC 92.9%);
        font-family: var(--font_family);
        width: 279px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-top: 93px;
    }
    &-context{
        text-align: center;
        margin-top: 51px;
        span{
            display: inline-block;
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 46px;
            letter-spacing: 0.1em;
            color: #6D6E71;
        }
    }
    &-lists{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 51px;
        &-in{
            position: relative;
            span{
                display: block;
                position: relative;
                z-index: 1;
                &:first-child{
                    font-family: var(--font_family);
                    font-style: normal;
                    font-weight: 700;
                    font-size: 26px;
                    line-height: 30px;
                    letter-spacing: 0.1em;
                    color: #4570B6;
                }
                &:last-child{
                    font-family: var(--font_family);
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 30px;
                    letter-spacing: 0.1em;
                    color: #6D6E71;
                }
            }
            &::before{
                content: '';
                width: 46px;
                height: 46px;
                border-radius: 23px;
                position: absolute;
                background: rgba(129, 219, 236, 0.3);
                top: -16px;
                left: -23px;
                transition: all .3s;
            }
            &:hover{
                &::before{
                    width: 150px;
                }
            }
        }
    }
}
.smilePro-cases{
    padding: 0;
    &-title{
        h2{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }
    &-in{
        margin-top: 53px;
        display: flex;
        a{
            flex: 1;
        }
        &-box{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #6D6E71;
            cursor: pointer;
            &>div{
                margin-top: 17.83px;
            }
        }
    }
    &-btn{
        margin-top: 88px;
        display: flex;
        justify-content: center;
    }
}
.smilePro-prove{
    margin-top: 98px;
    margin-bottom: 136px;
    &-title{
        h2{
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }
    &-in{
        margin-top: 40px;
        position: relative;
        .smileProSwiper{
            padding: 0 50px;
        }
        .smileProSwiper-in{
            width: 272.67px;
            height: 272.67px;
            border: 1px solid;
            border-image: linear-gradient(-45deg, #81DBEC, #4C7CBD) 1;
            margin-left: 25px;
            position: relative;
            &-name{
                position: absolute;
                font-family: 'Inter' !important;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                height: 33px;
                line-height: 33px;
                letter-spacing: 0.06em;
                color: #FFFFFF;
                transform: translateX(-50%);
                left: 0;
                top: 26px;
                background: linear-gradient(91.62deg, #5992C8 6.27%, #81DBEC 99.02%);
                padding: 0 10px;
            }
            &-context{
                margin-top: 94px;
                &>span{
                    display: block;
                }
                span{
                    font-family: 'Inter' !important;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 38px;
                    text-align: center;
                    color: #6D6E71;
                    letter-spacing: 0.06em;
                    &.focus{
                        font-weight: 700;
                        font-size: 30px;
                        color: #4570B6;
                    }
                    &.smallFocus{
                        color: #4570B6;
                    }
                    &.smallLineHeight{
                        line-height: 25px;
                    }
                }
            }
            &::before{
                content: '';
                background: url(https://static.cmereye.com/imgs/2023/05/9df0253b408ec7a0.png);
                position: absolute;
                left: 12px;
                top: 69px;
                width: 46px;
                height: 29px;
            }
            &::after{
                content: '';
                background: url(https://static.cmereye.com/imgs/2023/05/ba3b731c77500bc4.png);
                right: 12px;
                bottom: 18px;
                position: absolute;
                width: 46px;
                height: 29px;
            }
            &:nth-of-type(odd){
                margin-top: 80px;
                .smileProSwiper-in-name{
                    top: auto;
                    bottom: 24px;
                }
                .smileProSwiper-in-context{
                    margin-top: 78px;
                }
                &::before{
                    top: 47px;
                }
                &::after{
                    bottom: 47px;
                }
            }
        }
        .smileProSwiper-next {
          background-image: url("https://static.cmereye.com/imgs/2023/03/bcc35245d4a0fe42.png");
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -80px;
          width: 17px;
          height: 30px;
        }
        .smileProSwiper-prev {
          background-image: url("https://static.cmereye.com/imgs/2023/03/c1cc233620b64f31.png");
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -80px;
          width: 17px;
          height: 30px;
        }
    }
}
@media screen and (max-width: 768px) {
    .smilePro-desc{
        &-title{
            h2{
                font-weight: 500;
                font-size: 18px;
            }
        }
        &-in{
            justify-content: space-between;
            flex-wrap: wrap;
            &-box{
                width: 48%;
                &>div{
                    margin-top: 22px;
                    padding-bottom: 23px;
                    span{
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            }
        }
    }
    .smilePro-descVideo{
        margin-top: 10px;
        &-title{
            span{
                font-weight: 500;
                font-size: 14px;
            }
        }
        &-in{
            margin-top: 35px;
            height: 125px;
        }
    }
    .smilePro-contrast{

    }
    .smilePro-features{
        margin: 50px 30px;
        background-size: auto 240px;
        padding: 0 !important;
        background-position: left bottom;
        height: 370px;
        &-box{
            width: 100%;
            margin-right: 0;
        }
        &-title{
            width: 188px;
            height: 36.68px;
            font-size: 16px;
            margin-top: 0;
        }
        &-context{
            margin-top: 20px;
            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
        }
        &-lists{
            margin-top: 32px;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            &-in{
                width: 110px;
                margin-top: 26px;
                span{
                    &:first-child{
                        font-size: 16px;
                        line-height: 30px;
                    }
                    &:last-child{
                        font-size: 12px;
                        line-height: 20px;
                    }
                }
            }
        }
    }
    .smilePro-cases{
        margin-top: 50px;
        &-title{
            h2{
                font-size: 18px;
            }
        }
        &-in{
            margin-top: 10px;
            flex-direction: column;
            a{
                width: 100%;
            }
            &-box{
                margin-bottom: 28px;
                &>div{
                    margin-top: 14.53px;
                }
            }
        }
    }
    .smilePro-prove{
        margin-top: 44px;
        &-title{
            h2{
                font-weight: 500;
                font-size: 18px;
            }
        }
        &-in{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            .smileProSwiper-in{
                width: 200px;
                height: 200px;
                margin-bottom: 50px;
                &:nth-of-type(odd){
                    margin-top: 0;
                    .smileProSwiper-in-name{
                        // top: auto;
                        // bottom: 24px;
                    }
                    .smileProSwiper-in-context{
                        // margin-top: 78px;
                    }
                    &::before{
                        // top: 47px;
                    }
                    &::after{
                        // bottom: 47px;
                    }
                }
            }
            &-box{
                .smileProSwiper-in{
                    margin-top: 0;
                }
                &-box:nth-of-type(odd){
                     
                }
            }
        }
    }
}
</style>
