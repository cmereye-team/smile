<template>
  <div>
    <Header />
    <Navbar />
    <MainBanner />
    <div class="smilePro-desc page_container">
        <div class="smilePro-desc-title flex justify-center md:mt-28 mt-10">
          <h2>{{$t('service.smilePro.smileProDesc.title')}}</h2>
        </div>
        <div class="smilePro-desc-in">
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/c9ade3fdcb092abc.jpg" />
                <div>
                    <span>{{$t('service.smilePro.smileProDesc.desc[0].span1')}}</span>
                    <span>{{$t('service.smilePro.smileProDesc.desc[0].span2')}}</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/908e2ba8cd129d5b.jpg" />
                <div>
                    <span>{{$t('service.smilePro.smileProDesc.desc[1].span1')}}</span>
                    <span>{{$t('service.smilePro.smileProDesc.desc[1].span2')}}</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/9f64d4fd52cd469e.jpg" />
                <div>
                    <span>{{$t('service.smilePro.smileProDesc.desc[2].span1')}}</span>
                </div>
            </div>
            <div class="smilePro-desc-in-box">
                <img src="https://static.cmereye.com/imgs/2023/05/a3ade36153e14488.jpg" />
                <div>
                    <span>{{$t('service.smilePro.smileProDesc.desc[3].span1')}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="smilePro-descVideo page_container">
        <div class="smilePro-descVideo-title">
            <span>{{$t('service.smilePro.smileProDescVideo.title')}}</span>
            <span>SMILE PRO!</span>
        </div>
        <div class="smilePro-descVideo-in">
            <img src="https://static.cmereye.com/imgs/2023/05/822d9485daa1f2fa.jpg" /> 
        </div>
    </div>

    <div class="smilePro-contrast">
        <div class="smilePro-contrast-title flex justify-center md:mt-28 mt-10">
          <h2><span>{{$t('service.smilePro.smileProContrast.title')}}</span>SMILE PRO, ICL大不同</h2>
        </div>
        <div class="smilePro-contrast-in">
            <table :summary="$t('chargeDetail.captionTitle')" class="gdp">
                <thead>
                    <tr>
                        <th v-for="(thItem,thIndex) in tableData.thead" :key="thIndex">
                          {{thItem}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trItem,trIndex) in tableData.tbody" :key="trIndex">
                        <td :class="tdItem.className" :colspan="tdItem.colspan" :rowspan="tdItem.rowspan || 1" v-for="(tdItem, tdIndex) in trItem" :key="tdIndex">
                            <span>{{tdItem.text}}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="smilePro-contrast-btn">
            <a href="https://api.whatsapp.com/send/?phone=85260610511&text=我想了解(W-02) Smile Pro矯視">
                <div class="smileProBtn">
                    {{$t('service.smilePro.smileProContrast.smileProBtn')}}
                </div>
            </a>
        </div>
    </div>

    <div class="smilePro-features page_container">
        <div class="smilePro-features-box">
            <div class="smilePro-features-title">{{$t('service.smilePro.smileProFeatures.title')}}</div>
            <div class="smilePro-features-context">
                <span>ZEISS VISUMAX 800 SMILE®pro</span>
                <span>{{$t('service.smilePro.smileProFeatures.context')}}</span>
            </div>
            <div class="smilePro-features-lists">
                <div class="smilePro-features-lists-in">
                    <span>{{$t('service.smilePro.smileProFeatures.lists[0].span1')}}</span>
                    <span>{{$t('service.smilePro.smileProFeatures.lists[0].span2')}}</span>
                </div>
                <div class="smilePro-features-lists-in">
                    <span>{{$t('service.smilePro.smileProFeatures.lists[1].span1')}}</span>
                    <span>{{$t('service.smilePro.smileProFeatures.lists[1].span2')}}</span>
                </div>
                <div class="smilePro-features-lists-in">
                    <span>{{$t('service.smilePro.smileProFeatures.lists[2].span1')}}</span>
                    <span>{{$t('service.smilePro.smileProFeatures.lists[2].span2')}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="smilePro-cases page_container">
        <div class="smilePro-cases-title flex justify-center md:mt-28 mt-10">
          <h2>{{$t('service.smilePro.smileProCases.title')}}</h2>
        </div>
        <div class="smilePro-cases-in">
            <a href="https://youtu.be/oHDOFYMEUsk">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/444e690917f7719d.jpg" />
                    <div>{{$t('service.smilePro.smileProCases.div1')}}</div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=5ihrzFvOy38">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/9e8f394a8a4cd8cf.jpg" />
                    <div>{{$t('service.smilePro.smileProCases.div2')}}</div>
                </div>
            </a>
            <a href="https://youtu.be/AJz2E7jEYqY">
                <div class="smilePro-cases-in-box">
                    <img src="https://static.cmereye.com/imgs/2023/05/4d46826756514953.jpg" />
                    <div>{{$t('service.smilePro.smileProCases.div3')}}</div>
                </div>
            </a>
        </div>
        <div class="smilePro-cases-btn">
            <a href="https://api.whatsapp.com/send/?phone=85260610511&text=我想了解(W-02) Smile Pro矯視">
                <div class="smileProBtn">
                    {{$t('service.smilePro.smileProCases.smileProBtn')}}
                </div>
            </a>
        </div>
    </div>

    <div class="smilePro-prove page_container">
        <div class="smilePro-prove-title flex justify-center md:mt-28 mt-10">
          <h2>{{$t('service.smilePro.smileProProve.title')}}</h2>
        </div>
        <div class="smilePro-prove-in pcShow">
            <div
              class="swiper smileProSwiper"
              v-swiper:smileProSwiper="smileProSwiperOption"
              ref="smileProSwiper"
            >
                <div class="swiper-wrapper">
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[0].name')}}</div>
                        <div class="smileProSwiper-in-context">
                            <span>{{$t('service.smilePro.smileProProve.lists[0].span1')}}</span>
                            <span>{{$t('service.smilePro.smileProProve.lists[0].span2')}}</span>
                            <span>
                                <span class="focus">{{$t('service.smilePro.smileProProve.lists[0].span3')}}</span>
                                <span>{{$t('service.smilePro.smileProProve.lists[0].span4')}}</span>
                            </span>
                            <span>{{$t('service.smilePro.smileProProve.lists[0].span5')}}</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[1].name')}}</div>
                        <div class="smileProSwiper-in-context">
                            <span>{{$t('service.smilePro.smileProProve.lists[1].span1')}}</span>
                            <span>{{$t('service.smilePro.smileProProve.lists[1].span2')}}</span>
                            <span><span class="focus">{{$t('service.smilePro.smileProProve.lists[1].span3')}}</span>,</span>
                            <span>{{$t('service.smilePro.smileProProve.lists[1].span4')}}!</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[2].name')}}</div>
                        <div class="smileProSwiper-in-context">
                            <span>{{$t('service.smilePro.smileProProve.lists[2].span1')}}</span>
                            <span>
                                <span>{{$t('service.smilePro.smileProProve.lists[2].span2')}}</span>
                                <span class="focus">{{$t('service.smilePro.smileProProve.lists[2].span3')}}</span>
                            </span>
                            <span>{{$t('service.smilePro.smileProProve.lists[2].span4')}}</span>
                        </div>
                    </div>
                    <div class="swiper-slide smileProSwiper-in">
                        <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[3].name')}}</div>
                        <div class="smileProSwiper-in-context">
                            <span>{{$t('service.smilePro.smileProProve.lists[3].span1')}}<span class="focus">{{$t('service.smilePro.smileProProve.lists[3].span2')}}</span></span>
                            <span class="smallLineHeight">{{$t('service.smilePro.smileProProve.lists[3].span3')}}</span>
                            <span class="smallLineHeight"><span class="smallFocus">{{$t('service.smilePro.smileProProve.lists[3].span4')}}</span>{{$t('service.smilePro.smileProProve.lists[3].span5')}}</span>
                            <span class="smallLineHeight">{{$t('service.smilePro.smileProProve.lists[3].span6')}}</span>
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
                    <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[0].name')}}</div>
                    <div class="smileProSwiper-in-context">
                        <span>{{$t('service.smilePro.smileProProve.lists[0].span1')}}</span>
                        <span>{{$t('service.smilePro.smileProProve.lists[0].span2')}}</span>
                        <span>
                            <span class="focus">{{$t('service.smilePro.smileProProve.lists[0].span3')}}</span>
                            <span>{{$t('service.smilePro.smileProProve.lists[0].span4')}}</span>
                        </span>
                        <span>{{$t('service.smilePro.smileProProve.lists[0].span5')}}</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[1].name')}}</div>
                    <div class="smileProSwiper-in-context">
                        <span>{{$t('service.smilePro.smileProProve.lists[1].span1')}}</span>
                        <span>{{$t('service.smilePro.smileProProve.lists[1].span2')}}</span>
                        <span><span class="focus">{{$t('service.smilePro.smileProProve.lists[1].span3')}}</span>,</span>
                        <span>{{$t('service.smilePro.smileProProve.lists[1].span4')}}!</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[2].name')}}</div>
                    <div class="smileProSwiper-in-context">
                        <span>{{$t('service.smilePro.smileProProve.lists[2].span1')}}</span>
                        <span>
                            <span>{{$t('service.smilePro.smileProProve.lists[2].span2')}}</span>
                            <span class="focus">{{$t('service.smilePro.smileProProve.lists[2].span3')}}</span>
                        </span>
                        <span>{{$t('service.smilePro.smileProProve.lists[2].span4')}}</span>
                    </div>
                </div>
            </div>
            <div class="smilePro-prove-in-box">
                <div class="smileProSwiper-in">
                    <div class="smileProSwiper-in-name">{{$t('service.smilePro.smileProProve.lists[3].name')}}</div>
                    <div class="smileProSwiper-in-context">
                        <span>{{$t('service.smilePro.smileProProve.lists[3].span1')}}<span class="focus">{{$t('service.smilePro.smileProProve.lists[3].span2')}}</span></span>
                        <span class="smallLineHeight">{{$t('service.smilePro.smileProProve.lists[3].span3')}}</span>
                        <span class="smallLineHeight"><span class="smallFocus">{{$t('service.smilePro.smileProProve.lists[3].span4')}}</span>{{$t('service.smilePro.smileProProve.lists[3].span5')}}</span>
                        <span class="smallLineHeight">{{$t('service.smilePro.smileProProve.lists[3].span6')}}</span>
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
        tableData: {
            thead: [this.$t('service.smilePro.smileProContrast.tableData.thead[0]'),'Smile','Smile Pro','ICL'],
            tbody: [
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[0][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[0][1].text')
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[0][2].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[1][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[1][1].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[1][2].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[1][3].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[2][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[2][1].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[2][2].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[2][3].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[3][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '2',
                        text: '2-4mm'
                    },
                    {
                        colspan: '1',
                        text: '~3mm',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[4][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '1',
                        text: '23秒'
                    },
                    {
                        colspan: '1',
                        text: '10秒'
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[4][3].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[5][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '3',
                        text: '1日'
                    }
                ],
                [
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[6][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[6][1].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[6][2].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        rowspan: '11',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[7][0].text'),
                        className: 'tc'
                    },
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[7][1].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[7][2].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[8][0].text'),
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[8][1].text'),
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[9][0].text'),
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[10][0].text'),
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '2',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[11][0].text'),
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '3',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[12][0].text'),
                    },
                ],
                [
                    {
                        colspan: '3',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[13][0].text'),
                    },
                ],
                [
                    {
                        colspan: '3',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[14][0].text'),
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: '/'
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[15][1].text'),
                        className: 'tc bg1'
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: '/'
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[16][1].text'),
                        className: 'tc bg1'
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ],
                [
                    {
                        colspan: '1',
                        text: '/',
                    },
                    {
                        colspan: '1',
                        text: this.$t('service.smilePro.smileProContrast.tableData.tbody[17][1].text'),
                        className: 'tc bg1'
                    },
                    {
                        colspan: '1',
                        text: '/',
                        className: 'bg2'
                    },
                ]
            ]
        }
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
        // height: 484px;
        background: rgb(255, 253, 243);
        img{
            width: 100%;
        }
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
        width: 100%;
        max-width: 1280px;
        overflow: hidden;
        overflow-x: auto;
        margin: 40px auto;
        table{
            min-width: 718px;
            thead{
                tr{
                    height: 80px;
                    th{
                        text-align: center;
                        background: #5082C0;
                        border: 1px solid transparent;
                        font-family: 'Noto Sans HK';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 22.3492px;
                        line-height: 15px;
                        letter-spacing: 0.05em;
                        border-radius: 10px 10px 0 0;
                        color: #FFFFFF;
                        position: relative;
                        width: 25%;
                        &:last-child{
                            background: #71C4CF;
                            &::after{
                                content: '';
                                position: absolute;
                                height: 70px;
                                background: #B3B1B2;
                                width: 1px;
                                bottom: 0;
                                right: -1px;
                                position: absolute;
                            }
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            height: 70px;
                            background: #B3B1B2;
                            width: 1px;
                            bottom: 0;
                            left: -1px;
                            position: absolute;
                        }
                    }
                }
            }
            tbody{
                tr{
                    height: 75px;
                    td{
                        border: 1px solid #B3B1B2;
                        background: #F5FDFF;
                        text-align: center;
                        font-family: 'Noto Sans HK';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20.3175px;
                        line-height: 30px;
                        letter-spacing: 0.05em;
                        color: #6D6E71;
                        padding: 0 15px;
                        &.tc{
                            color: #5082C0;
                        }
                        &.bg1{
                            background: #FFFFF5;
                        }
                        &.bg2{
                            background: rgba(113, 196, 207, 0.2);
                        }
                    }
                }
            }
        }
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
    display: none;
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
    .page_container{
        padding-left: 30px !important;
        padding-right: 30px !important;
    }
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
                width: 47%;
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
            img{
                width: 100%;
            }
        }
    }
    .smilePro-contrast{
        &-title{
            h2{
                font-size: 18px;
                flex-direction: column;
            }
        }
        &-in{
            margin: 10px auto;
            &::-webkit-scrollbar{
                display: none;
            }
            table{
                margin: 0 30px;
                thead{
                    tr{
                        height: 53px;
                        th{
                            font-size: 14px;
                            border-radius: 5px 5px 0 0;
                            &:last-child{
                                &::after{
                                    height: 47px;
                                }
                            }
                            &::before{
                                height: 47px;
                            }
                        }
                    }
                }
                tbody{
                    tr{
                        height: 49px;
                        td{
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                }
            }
        }
        &-btn{
            margin-top: 49px;
        }
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
        &-btn{
            margin-top: 14px;
        }
    }
    .smilePro-prove{
        margin-top: 44px;
        margin-bottom: 0;
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
            &-box{
                .smileProSwiper-in{
                    width: 200px;
                    height: 200px;
                    margin-bottom: 50px;
                    margin-left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &-name{
                        transform: translateX(50%);
                        left: auto;
                        right: 0;
                        font-size: 16px;
                        height: 29px;
                        line-height: 29px;
                    }
                    &-context{
                        span{
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 28px;
                            &.focus{
                                font-weight: 500;
                                font-size: 20px;
                            }
                            &.smallLineHeight{
                                line-height: 28px;
                            }
                        }
                    }
                    &::before{
                        left: 12px;
                    }
                    &::after{
                        right: 12px;
                    }
                    &:nth-of-type(odd){
                        margin-top: 0;
                        .smileProSwiper-in-name{
                            top: 12px;
                            bottom: auto;
                        }
                        .smileProSwiper-in-context{
                            margin-top: 0;
                        }
                        &::before{
                            top: 9px;
                        }
                        &::after{
                            bottom: 9px;
                        }
                    }
                }
                &:nth-of-type(odd){
                    .smileProSwiper-in{
                        float: right;
                        &-name{
                            transform: translateX(-50%);
                            right: auto;
                            left: 0;
                        }
                        &:nth-of-type(odd){
                            .smileProSwiper-in-name{
                                top: auto;
                                bottom: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
