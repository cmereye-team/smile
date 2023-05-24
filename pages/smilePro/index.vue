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
            <div class="smilePro-cases-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/444e690917f7719d.jpg" />
                <div>微笑矯視 - Shirley 陳欣妍</div>
            </div>
            <div class="smilePro-cases-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/9e8f394a8a4cd8cf.jpg" />
                <div>植入式隱形眼鏡 - Serene 林宣妤</div>
            </div>
            <div class="smilePro-cases-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/4d46826756514953.jpg" />
                <div>微笑矯視 - Dominic 何浩文</div>
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
      title: "smilePro - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "smilePro - 香港希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "smilePro - 香港希瑪微笑矯視中心",
        },
      ],
    };
  },
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
    background: url(https://static.cmereye.com/imgs/2023/05/006918ac3ee0a0bd.jpg);
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
        &-box{
            flex: 1;
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #6D6E71;
            &>div{
                margin-top: 17.83px;
            }
        }
    }
}
</style>
