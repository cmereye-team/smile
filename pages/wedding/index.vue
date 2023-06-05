<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

import MainBanner from "@/components/content/service/wedding/MainBanner.vue";

export default {
    components: { Header, Navbar, Footer, MainBanner, footers },
    head() {
        return {
            title: "SMILE 婚展   - 香港希瑪微笑矯視中心",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "SMILE 婚展   - 香港希瑪微笑矯視中心",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "SMILE 婚展   - 香港希瑪微笑矯視中心",
                },
            ],
        };
    },
    data() {
        return {
            comboList: [
                {
                    title: [this.$t('service.wedding.combo[0].title1'), this.$t('service.wedding.combo[0].title2')],
                    img: 'https://static.cmereye.com/imgs/2023/06/165d3fd8b6381e75.png',
                    text: [this.$t('service.wedding.combo[0].text1'), this.$t('service.wedding.combo[0].text2')],
                    weeding_price: this.$t('service.wedding.combo[0].weeding_price'),
                    price: this.$t('service.wedding.combo[0].price'),
                },
                {
                    title: [this.$t('service.wedding.combo[1].title1'), this.$t('service.wedding.combo[1].title2')],
                    img: 'https://static.cmereye.com/imgs/2023/06/7def370a2be3372d.png',
                    text: [this.$t('service.wedding.combo[1].text1'), this.$t('service.wedding.combo[1].text2')],
                    weeding_price: this.$t('service.wedding.combo[1].weeding_price'),
                    price: this.$t('service.wedding.combo[1].price'),
                },
                {
                    title: [this.$t('service.wedding.combo[2].title1'), this.$t('service.wedding.combo[2].title2')],
                    img: 'https://static.cmereye.com/imgs/2023/06/7def370a2be3372d.png',
                    text: [this.$t('service.wedding.combo[2].text1'), this.$t('service.wedding.combo[2].text2')],
                    weeding_price: this.$t('service.wedding.combo[2].weeding_price'),
                    price: this.$t('service.wedding.combo[2].price'),
                },
                {
                    title: [this.$t('service.wedding.combo[3].title1'), this.$t('service.wedding.combo[3].title2')],
                    img: 'https://static.cmereye.com/imgs/2023/06/d6e671d3937b9fad.png',
                    text: [this.$t('service.wedding.combo[3].text1'), this.$t('service.wedding.combo[3].text2')],
                    weeding_price: this.$t('service.wedding.combo[3].weeding_price'),
                    price: this.$t('service.wedding.combo[3].price'),
                },
                {
                    title: [this.$t('service.wedding.combo[4].title1'), this.$t('service.wedding.combo[4].title2')],
                    img: 'https://static.cmereye.com/imgs/2023/06/d6e671d3937b9fad.png',
                    text: [this.$t('service.wedding.combo[4].text1'), this.$t('service.wedding.combo[4].text2')],
                    weeding_price: this.$t('service.wedding.combo[4].weeding_price'),
                    price: this.$t('service.wedding.combo[4].price'),
                },
            ],
            wayList: [
                {
                    img: 'https://static.cmereye.com/imgs/2023/06/fe9d92e84cacab75.png',
                    link:'https://smile.hkcmereye.com/smilePro',
                    title: this.$t('service.wedding.wayList[0].title'),
                    corwd: [
                        this.$t('service.wedding.wayList[0].corwd1'),
                        this.$t('service.wedding.wayList[0].corwd2'),
                        this.$t('service.wedding.wayList[0].corwd3')
                    ],
                },
                {
                    img: 'https://static.cmereye.com/imgs/2023/06/1985453cc43ee3ee.jpg',
                    link:'https://smile.hkcmereye.com/vision-correction/relex-smile',
                    title: this.$t('service.wedding.wayList[1].title'),
                    corwd: [
                        this.$t('service.wedding.wayList[1].corwd1'),
                        this.$t('service.wedding.wayList[1].corwd2'),
                        this.$t('service.wedding.wayList[1].corwd3')
                    ],
                },
                {
                    img: 'https://static.cmereye.com/imgs/2023/06/a06414efa23a2be4.jpg',
                    link:'https://smile.hkcmereye.com/vision-correction-icl',
                    title: this.$t('service.wedding.wayList[2].title'),
                    corwd: [
                        this.$t('service.wedding.wayList[2].corwd1'),
                        this.$t('service.wedding.wayList[2].corwd2'),
                    ],
                },
            ],
            timeTable: [
                {
                    time: '2:00pm',
                    text: [
                        this.$t('service.wedding.timeTable[0].text1'),
                        this.$t('service.wedding.timeTable[0].text2'),
                        this.$t('service.wedding.timeTable[0].text3'),
                        this.$t('service.wedding.timeTable[0].text4')
                    ],
                },
                {
                    time: '4:00pm',
                    text: [
                        this.$t('service.wedding.timeTable[1].text1'),
                        this.$t('service.wedding.timeTable[1].text2'),
                        this.$t('service.wedding.timeTable[1].text3')
                    ]
                },
                {
                    time: '6:00pm',
                    text: [
                        this.$t('service.wedding.timeTable[2].text1'),
                        this.$t('service.wedding.timeTable[2].text2'),
                        this.$t('service.wedding.timeTable[2].text3'),
                        this.$t('service.wedding.timeTable[2].text4')
                    ],
                },
            ]
        }
    },
    methods: {
        goToWhatsApp(){
            window.location.href= 'https://api.whatsapp.com/send/?phone=85260610511&text=我想登記婚展活動留座'
        }
    },
};
</script>
  
<template>
    <div>
        <Header />
        <Navbar />
        <MainBanner />
        <div class="wedding-desc page_container">
            <div class="wedding-desc-title flex justify-center md:mt-28 mt-10">
                <h2>{{ $t('service.wedding.title1') }}</h2>
            </div>
            <div class="wedding-desc-in">
                <div>
                    {{ $t('service.wedding.text_p1') }}
                    <!-- 當適當的時間遇到對的眼神，才能與對方共同見證未來的每個時刻。人生中最重要的一天，每分每秒都是珍貴的。希瑪微笑矯視中心提供多種不同的矯視服務，包括SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡(ICL)以及CLEAR-Vision人工晶體置換術。我們致力於為新人設計個性化的矯視方案，讓他們能夠以閃亮明眸自信地享受婚禮的每一刻，無需受到視力問題的困擾。 -->
                </div>
            </div>
        </div>

        <div class="wedding-descVideo page_container" style="padding: 0;">
            <div class="wedding-desc-title flex justify-center md:mt-28 mt-10">
                <h2>{{ $t('service.wedding.title2') }}</h2>
            </div>
            <div class="wedding-descVideo-in">
                <div v-for="(item, index) in comboList" :key="index">
                    <div>
                        <p v-for="(title, i) in item.title" :key="i">{{ title }}</p>
                    </div>
                    <div><img :src="item.img"></div>
                    <div>
                        <p v-for="(text, i) in item.text" :key="i">{{ text }}</p>
                    </div>
                    <!-- <div>{{ item.weeding_price }}</div> -->
                    <div>{{ $t('service.wedding.weeding_price_1') }}</div>
                    <div>{{ item.price }}</div>
                </div>
            </div>
            <div class="wedding-descVideo-text1">
                {{ $t('service.wedding.text_p2') }}
                <!-- *眼睛護理Spa療程通過氧療霧化薰蒸、清潔、按摩、冷療疏通瞼板腺，有效舒緩眼睛幹澀、癢、疲勞等不適。 -->
            </div>
        </div>

        <div class="wedding-features page_container"  style="margin-bottom:50px;">
            <div class="wedding-features-cowrd">
                <div v-for="(item, index) in wayList" :key="index">
                    <div>
                        <img :src="item.img">
                    </div>
                    <div>{{ item.title }}</div>
                    <div>
                        <div>
                            <div>
                                {{ $t('service.wedding.text_t1') }}
                            </div>
                            <div>
                                <p v-for="(corwd, i) in item.corwd" :key="i">{{ corwd }}</p>
                            </div>
                        </div>
                        <a :href="item.link" target="_blank">
                            <div>
                                {{ $t('service.wedding.btn1') }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="wedding-features-register">
                <div>
                    {{ $t('service.wedding.text_p3') }}
                    <!-- 講座參加人數有限，登記留座可獲免費門票(先到先得，送完即止) -->
                </div>
                <div @click="goToWhatsApp()" style="cursor: pointer;"> >{{ $t('service.wedding.text_t2') }}!&it; </div>
            </div>
            <div>
                <a class="wedding-features-images" href="https://instagram.com/cmer_smile?igshid=NTc4MTIwNjQ2YQ=="></a>
                <a class="wedding-features-images-mb" href="https://instagram.com/cmer_smile?igshid=NTc4MTIwNjQ2YQ=="></a>
            </div>
            <div class="wedding-features-table" style="margin-bottom: 0;display: none;">
                <div>
                    {{ $t('service.wedding.text_p4') }}
                    <!-- 溫馨提示: 現在經網上登記預約，可獲取精美小禮品一份。(先到先得，送完即止) -->
                </div>
            </div>
            <div class="wedding-features-table" style="display: none;">
                <div style="margin:0;"></div>
                <div>
                    <div>
                        <div>
                            <!-- 講座時間 -->
                            {{ $t('service.wedding.table_th1') }}
                        </div>

                        <div>
                            <!-- 內容 -->
                            {{ $t('service.wedding.table_th2') }}
                        </div>
                    </div>
                    <div v-for="(item, index) in timeTable" :key="index">

                        <div>{{ item.time }}</div>
                        <div>
                            <p v-for="(text, i) in item.text" :key="i">{{ text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        <footers />
    </div>
</template>
  

<style lang="scss" scoped>
.smileProBtn {
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

.wedding-desc {
    &-title {
        h2 {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }

    &-in {
        display: flex;
        justify-content: space-around;

        &-box {
            max-width: 200px;

            &>div {
                margin-top: 39px;

                span {
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

.wedding-desc-in {
    max-width: 1280px;
    width: 1280px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */

    text-align: center;
    letter-spacing: 0.05em;
    color: #404040;
}

.wedding-desc-title h2 {
    margin-bottom: 34px;
}

.wedding-descVideo {
    margin-top: 66px;

    &-title {
        text-align: center;

        span {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 48px;
            letter-spacing: 0.1em;
            color: #6D6E71;

            &:last-child {
                color: #4570B6;
            }
        }
    }

    &-in {
        margin-top: 88px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>div {
            width: 358px;
            height: 324px;
            border: 1px solid;
            /* 定义边框的宽度 */
            border-image: linear-gradient(91.62deg, #5992C8 6.27%, #81dbec 99.02%) 1;
            /* 设置边框渐变色 */
            border-image-slice: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;

            &>div:nth-child(1) {
                width: 153px;
                height: 59px;
                position: absolute;
                top: 18px;
                left: -47px;
                background: linear-gradient(91.62deg, #5992C8 6.27%, #81DBEC 99.02%);


                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                letter-spacing: 0.06em;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            &>div:nth-child(2) {
                margin-top: 40px;
            }

            &>div:nth-child(3) {
                margin-top: 8px;
                font-family: 'Noto Sans HK';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
                color: #404040;
                letter-spacing: -0.01em;
            }

            &>div:nth-child(4) {
                font-family: 'Noto Sans HK';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 35px;
                text-align: center;
                color: #4570B6;
                margin-top: 16px;
            }

            &>div:nth-child(5) {
                font-family: 'Noto Sans HK';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 40px;
                /* or 200% */
                color: #71C4CF;
                position: relative;
            }

            &>div:nth-child(5)::after {
                content: '';
                width: 135px;
                display: inline-block;
                position: absolute;
                border: 2px solid #4570B6;
                left: 10%;
                top: 50%;
                transform: rotate(-3.37deg);
            }
        }

        &>div:nth-child(2) {
            margin-left: 103px;
            margin-right: 103px;
        }

        &>div:nth-child(4) {
            margin-right: 227px;
        }

        &>div:nth-child(n+4) {
            margin-top: 76px;
        }

        &>div:nth-child(2)> {
            width: 138px;
            height: 106px;

            &>img {
                width: 100%;
            }
        }
    }

    &-text1 {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        /* or 167% */

        text-align: center;
        letter-spacing: 0.05em;

        color: #404040;
        margin: 34px auto;
    }
}

.wedding-contrast {
    &-title {
        h2 {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }

    &-in {
        width: 100%;
        max-width: 1280px;
        overflow: hidden;
        overflow-x: auto;
        margin: 40px auto;

        table {
            min-width: 718px;

            thead {
                tr {
                    height: 80px;

                    th {
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

                        &:last-child {
                            background: #71C4CF;

                            &::after {
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

                        &::before {
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

            tbody {
                tr {
                    height: 75px;

                    td {
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

                        &.tc {
                            color: #5082C0;
                        }

                        &.bg1 {
                            background: #FFFFF5;
                        }

                        &.bg2 {
                            background: rgba(113, 196, 207, 0.2);
                        }
                    }
                }
            }
        }
    }

    &-btn {
        margin-top: 78px;
        display: flex;
        justify-content: center;
    }
}

.wedding-features {
    margin-top: 71px;

    &-cowrd {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        &>div {
            width: 359px;

            &>div:nth-child(2) {
                font-family: 'Noto Sans HK';
                font-style: normal;
                font-weight: 500;
                font-size: 28px;
                line-height: 30px;
                /* or 107% */
                color: #4570B6;
                letter-spacing: 0;
                text-align: left;
                padding-bottom: 10px;
                position: relative;
                margin: 12px auto 22px;
            }

            &>div:nth-child(2)::after {
                content: '';
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 1px solid #4570B6;
                width: 326px;
            }

            &>div:nth-child(3) {
                &>div:nth-child(1) {
                    display: flex;
                    letter-spacing: 0;

                    &>div:nth-child(1) {
                        width: 107px;
                        height: 35px;
                        background: #4570B6;
                        font-family: 'Noto Sans CJK TC';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 24px;
                        /* identical to box height, or 120% */

                        display: flex;
                        align-items: center;
                        justify-content: center;
                        /* 白色 */
                        color: #FFFFFF;
                        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        margin-right: 18px;
                    }

                    &>div:nth-child(2) {
                        max-width: 225px;
                        height: 125px;
                        font-family: 'Noto Sans HK';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 30px;
                        /* or 167% */

                        color: #404040;
                    }
                }

                &>a:nth-child(2) {
                    &>div {
                        width: 227.56px;
                        height: 45.71px;
                        background: linear-gradient(94.37deg, #81DBEC 12.08%, #4570B6 92.9%);
                        font-family: 'Noto Sans HK';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16.254px;
                        line-height: 20px;
                        /* identical to box height, or 125% */

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        letter-spacing: 0.1em;
                        color: #FFFFFF;
                        margin: auto;
                    }
                }
            }
        }
    }

    &-register {
        margin: 84px auto 77px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &>div {
            font-family: 'Noto Sans HK';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 50px;
            /* or 278% */
            text-align: center;
            letter-spacing: 0.05em;
            color: #404040;
        }

        &>div:nth-child(2) {
            color: #4570B6;
            font-size: 36px;
            line-height: 50px;
        }
    }

    &-images {
        width: 1280px;
        height: 480px;
        background-image: url('https://static.cmereye.com/imgs/2023/06/eda126d4a5eed1c5.png');
        background-size: 100% 100%;
        display: block;
    }

    &-images-mb {
        display: none;
    }

    &-table {
        width: 1280px;
        max-width: 1280px;
        margin-bottom: 102px;

        &>div:nth-child(1) {
            margin: 77px auto;
            font-family: 'Noto Sans HK';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            /* or 150% */

            text-align: center;

            color: #4570B6;
        }

        &>div:nth-child(2) {

            border: 0.249206px solid #B3B1B2;
            border-radius: 10.1587px 10.1587px 10.1587px 10.1587px;
            overflow: hidden;

            &>div {
                display: flex;
                height: 183px;

                &>div:nth-child(1) {
                    width: 487.76px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #F5FDFF;
                    border-bottom: 0.249206px solid #B3B1B2;
                    border-right: 0.249206px solid #B3B1B2;
                    font-family: 'Noto Sans HK';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 25px;
                    /* identical to box height, or 100% */

                    text-align: justify;
                    letter-spacing: 0.1em;

                    color: #114678;

                }

                &>div:nth-child(2) {
                    width: 791.12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #F5FDFF;
                    border-bottom: 0.249206px solid #B3B1B2;
                    font-family: 'Noto Sans HK';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 35px;
                    /* or 175% */

                    text-align: center;
                    letter-spacing: 0.05em;

                    color: #404040;
                }
            }

            &>div:nth-child(1) {
                height: 80px;

                &>div:nth-child(1) {
                    background: #5082C0;
                    border-radius: 0 10.1587px 0 0;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 70px;
                    text-align: justify;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }

                &>div:nth-child(2) {
                    background: #5082C0;
                    border-radius: 10.1587px 0 0 0;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 70px;
                    text-align: justify;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
            }
        }
    }


}

.wedding-cases {
    padding: 0;
    display: none;

    &-title {
        h2 {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }

    &-in {
        margin-top: 53px;
        display: flex;

        a {
            flex: 1;
        }

        &-box {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #6D6E71;
            cursor: pointer;

            &>div {
                margin-top: 17.83px;
            }
        }
    }

    &-btn {
        margin-top: 88px;
        display: flex;
        justify-content: center;
    }
}

.wedding-prove {
    margin-top: 98px;
    margin-bottom: 136px;

    &-title {
        h2 {
            font-family: var(--font_family);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.1em;
            color: #4570B6;
        }
    }

    &-in {
        margin-top: 40px;
        position: relative;

        .smileProSwiper {
            padding: 0 50px;
        }

        .smileProSwiper-in {
            width: 272.67px;
            height: 272.67px;
            border: 1px solid;
            border-image: linear-gradient(-45deg, #81DBEC, #4C7CBD) 1;
            margin-left: 25px;
            position: relative;

            &-name {
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

            & {
                margin-top: 94px;

                &>span {
                    display: block;
                }

                span {
                    font-family: 'Inter' !important;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 38px;
                    text-align: center;
                    color: #6D6E71;
                    letter-spacing: 0.06em;

                    &.focus {
                        font-weight: 700;
                        font-size: 30px;
                        color: #4570B6;
                    }

                    &.smallFocus {
                        color: #4570B6;
                    }

                    &.smallLineHeight {
                        line-height: 25px;
                    }
                }
            }

            &::before {
                content: '';
                background: url(https://static.cmereye.com/imgs/2023/05/9df0253b408ec7a0.png);
                position: absolute;
                left: 12px;
                top: 69px;
                width: 46px;
                height: 29px;
            }

            &::after {
                content: '';
                background: url(https://static.cmereye.com/imgs/2023/05/ba3b731c77500bc4.png);
                right: 12px;
                bottom: 18px;
                position: absolute;
                width: 46px;
                height: 29px;
            }

            &:nth-of-type(odd) {
                margin-top: 80px;

                .smileProSwiper-in-name {
                    top: auto;
                    bottom: 24px;
                }

                .smileProSwiper-in {
                    margin-top: 78px;
                }

                &::before {
                    top: 47px;
                }

                &::after {
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
    body h2::before {
        width: 40vw;
        left: -40vw;
    }

    body h2::after {
        width: 40vw;
        right: -40vw;
    }

    .page_container {
        padding-left: 30px !important;
        padding-right: 30px !important;
    }

    .wedding-desc {
        width: 100%;

        &-title {
            h2 {
                font-weight: 500;
                font-size: 18px;
            }
        }

        &-in {
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;

            &-box {
                width: 47%;

                &>div {
                    margin-top: 22px;
                    padding-bottom: 23px;

                    span {
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            }
        }
    }

    .wedding-desc-in {
        font-size: 16px;
        line-height: 28px;
    }

    .wedding-descVideo-in>div>div[data-v-6dfc752e]:nth-child(5)::after {
        left: -5%;
        width: 118px;
    }

    .wedding-descVideo-in>div>div[data-v-6dfc752e]:nth-child(2) {
        margin-top: 10px;
    }

    .wedding-descVideo {
        margin-top: 10px;
        width: 100%;

        &-title {
            span {
                font-weight: 500;
                font-size: 14px;
            }
        }

        &-in {
            margin-top: 35px;
            display: flex;
            flex-direction: column;

            &>div {
                width: 230px;
                height: 277px;
                border: 1px solid;
                /* 定义边框的宽度 */
                border-image: linear-gradient(91.62deg, #5992C8 6.27%, #81dbec 99.02%) 1;
                /* 设置边框渐变色 */
                border-image-slice: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                margin-top: 50px !important;
                margin-left: 100px;

                &>div:nth-child(1) {
                    position: absolute;
                    top: 25px;
                    left: -100px;
                    right: auto;
                    width: 122px;
                    height: 59px;

                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    letter-spacing: 0.06em;
                }

                &>div:nth-child(3) {
                    font-size: 16px;
                    line-height: 24px;
                    /* or 150% */
                    text-align: center;
                    color: #404040;
                    max-width: 165px;
                }

                &>div:nth-child(4) {
                    font-size: 20px;
                    line-height: 35px;
                    margin-top: 10px;
                }

                &>div:nth-child(5) {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 40px;
                }
            }

            &>div:nth-child(1) {
                margin-top: 0px !important;
            }

            &>div:nth-child(2) {
                margin: 0;
            }

            &>div:nth-child(4) {
                margin: 0;
            }

            &>div:nth-child(5) {
                margin: 0;
                margin-left: 100px;
            }

            &>div:nth-child(2),
            &>div:nth-child(4) {
                &>div:nth-child(1) {
                    position: absolute;
                    right: -100px;
                    left: auto;
                }
            }

        }

        &-text1 {
            margin: 24px auto 40px;
            font-size: 16px;
            line-height: 26px;
            /* or 162% */
            text-align: center;
            letter-spacing: 0.05em;
        }
    }

    .wedding-contrast {
        &-title {
            h2 {
                font-size: 18px;
                flex-direction: column;
            }
        }

        &-in {
            margin: 10px auto;

            &::-webkit-scrollbar {
                display: none;
            }

            table {
                margin: 0 30px;

                thead {
                    tr {
                        height: 53px;

                        th {
                            font-size: 14px;
                            border-radius: 5px 5px 0 0;

                            &:last-child {
                                &::after {
                                    height: 47px;
                                }
                            }

                            &::before {
                                height: 47px;
                            }
                        }
                    }
                }

                tbody {
                    tr {
                        height: 49px;

                        td {
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                }
            }
        }

        &-btn {
            margin-top: 49px;
        }
    }

    .wedding-features {
        margin: 50px 30px;
        background-size: auto 240px;
        padding: 0 !important;
        background-position: left bottom;

        &-cowrd {
            display: flex;
            flex-direction: column;


            &>div {
                margin-bottom: 50px;
                width: 100%;

                &>div:nth-child(1) {
                    width: 331px;
                    height: 194px;
                }

                &>div:nth-child(2) {
                    font-size: 16px;
                    line-height: 30px;
                    /* or 188% */
                    text-align: center;
                    color: #4570B6;
                    text-align: left;
                }

                &>div:nth-child(2)::after {
                    width: 225px;
                }

                &>div:nth-child(3) {
                    &>div:nth-child(1) {
                        &>div:nth-child(1) {
                            width: 88px;
                            height: 30px;
                            font-size: 16px;
                            line-height: 24px;
                            /* identical to box height, or 150% */
                            color: #FFFFFF;
                        }

                        &>div:nth-child(2) {
                            font-size: 16px;
                            line-height: 24px;
                            height: 95px;
                        }
                    }
                }
            }

            &>div:nth-child(2)>div:nth-child(2) {
                text-align: right;
            }

            &>div:nth-child(2)>div:nth-child(2)::after {
                text-align: right;
                right: 0;
                left: auto;
            }

            &>div:nth-child(2)>div:nth-child(3)>div:nth-child(1) {
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;

                &>div:nth-child(2) {
                    text-align: right;
                }
            }
        }

        &-register {
            &>div:nth-child(1) {
                font-size: 16px;
                line-height: 25px;
                /* or 156% */
                text-align: center;
                letter-spacing: 0.05em;
            }

            &>div:nth-child(2) {
                font-size: 16px;
                line-height: 25px;
            }
        }

        &-images {
            display: none;
        }

        &-images-mb {
            width: 330px;
            height: 329.52px;
            background-image: url('https://static.cmereye.com/imgs/2023/06/580015c7ec1e311a.png');
            background-size: 100% 100%;
            display: block;
        }


        &-table {
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            &>div:nth-child(1) {
                font-size: 16px;
                line-height: 30px;
                text-align: center;
                color: #4570B6;
            }

            &>div:nth-child(2) {
                min-width: 508px;

                &>div {
                    display: flex;
                    height: 115px;

                    &>div:nth-child(1) {
                        font-size: 16px;
                        line-height: 25px;
                    }

                    &>div:nth-child(2) {
                        font-size: 16px;
                        line-height: 25px;
                    }
                }

                &>div:nth-child(1) {
                    height: 50px;

                    &>div:nth-child(1) {
                        font-size: 16px;
                        line-height: 25px;
                    }

                    &>div:nth-child(2) {
                        font-size: 16px;
                        line-height: 25px;
                    }
                }
            }
        }

    }

    .wedding-cases {
        margin-top: 50px;

        &-title {
            h2 {
                font-size: 18px;
            }
        }

        &-in {
            margin-top: 10px;
            flex-direction: column;

            a {
                width: 100%;
            }

            &-box {
                margin-bottom: 28px;

                &>div {
                    margin-top: 14.53px;
                }
            }
        }

        &-btn {
            margin-top: 14px;
        }
    }

    .wedding-prove {
        margin-top: 44px;
        margin-bottom: 0;

        &-title {
            h2 {
                font-weight: 500;
                font-size: 18px;
            }
        }

        &-in {
            margin-top: 10px;
            display: flex;
            flex-direction: column;

            &-box {
                .smileProSwiper-in {
                    width: 200px;
                    height: 200px;
                    margin-bottom: 50px;
                    margin-left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &-name {
                        transform: translateX(50%);
                        left: auto;
                        right: 0;
                        font-size: 16px;
                        height: 29px;
                        line-height: 29px;
                    }

                    & {
                        span {
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 28px;

                            &.focus {
                                font-weight: 500;
                                font-size: 20px;
                            }

                            &.smallLineHeight {
                                line-height: 28px;
                            }
                        }
                    }

                    &::before {
                        left: 12px;
                    }

                    &::after {
                        right: 12px;
                    }

                    &:nth-of-type(odd) {
                        margin-top: 0;

                        .smileProSwiper-in-name {
                            top: 12px;
                            bottom: auto;
                        }

                        .smileProSwiper-in {
                            margin-top: 0;
                        }

                        &::before {
                            top: 9px;
                        }

                        &::after {
                            bottom: 9px;
                        }
                    }
                }

                &:nth-of-type(odd) {
                    .smileProSwiper-in {
                        float: right;

                        &-name {
                            transform: translateX(-50%);
                            right: auto;
                            left: 0;
                        }

                        &:nth-of-type(odd) {
                            .smileProSwiper-in-name {
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
  