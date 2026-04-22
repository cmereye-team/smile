<template>
    <div class="message">
        <ClientOnly>
            <div class="message-from">
                <H2Tag :title="'講座預約表單'"></H2Tag>
                <div class="from-first">
                    <div class="from-text"><span class="from-title">姓名：</span><span class="from-msg">{{ dataFrom.name ||
                            ''
                            }}</span></div>
                    <div class="from-text"><span class="from-title">性別：</span><span class="from-msg">{{ dataFrom.sex ||
                            ''
                            }}</span></div>
                    <div class="from-text"><span class="from-title">年齡：</span><span class="from-msg">{{ dataFrom.age ||
                            ''
                            }}</span></div>
                </div>
                <div class="from-text"><span class="from-title">選擇地點：</span><span class="from-msg">{{ dataFrom.address
                        || ''
                        }}</span></div>
                <div class="from-text"><span class="from-title">預約日期：</span><span class="from-msg">{{ dataFrom.subdate
                        || ''
                        }}</span></div>
                <div class="from-text"><span class="from-title">預留位置：</span><span class="from-msg">{{
                    dataFrom.numberSeat ||
                        ''
                        }}</span></div>
                <div class="from-text"><span class="from-title">聯絡電話：</span><span class="from-msg">+852 {{
                    dataFrom.telphoneNumber || '' }}</span></div>
                <div class="from-text"><span class="from-title">電郵地址：</span><span class="from-msg">{{ dataFrom.email ||
                        ''
                        }}</span></div>
                <div class="from-text"><span class="from-title">從何得知：</span><span class="from-msg">{{ dataFrom.source ||
                        ''
                        }}</span></div>
                <br />
                <div v-if="dataFrom.subdate" class="from-msg message-msg">您正預約在 <span class="from-title">{{
                    dataFrom.subdate
                        }}</span> 的<span class="from-title">{{ dataFrom.address }}</span> {{
                            isContainSmile(dataFrom.address) ?
                                '全飛秒SMILE微笑激光矯視' : '老花' }}講座。</div>
            </div>
        </ClientOnly>
        <businessHours />
    </div>
</template>

<script>;
import businessHours from "@/components/commom/business/business-hours.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
    components: {
        businessHours,
        H2Tag
    },
    data() {
        return {
            canonicalHref: "https://smile.hkcmereye.com/messageFrom",
            canonicalHrefCN: "https://smile.hkcmereye.com/cn/messageFrom",
            browserTitle: "講座預約表單 - 希瑪微笑矯視中心",
            browserTitleCn: "講座預約表單 - 希玛微笑矫视中心",
            isMobile: false,
            dataFrom: {}
        };
    },
    methods: {
        isContainSmile(str) {
            return str.toLowerCase().includes('smile');
        }
    },
    created() {
        if (process.client) {
            console.log(window.innerWidth);
            // 獲取 localStorage 中的值
            this.dataFrom = JSON.parse(window.localStorage.getItem("form"));
        }
        this.$message({
            showClose: true,
            message: "已经成功預約，我們將會在10小時內與您聯絡確認預約詳情。",
            type: "success",
            duration: 0
        });
    },
};
</script>


<style lang="scss" scoped>
@media screen and (min-width: 768px) {
    .message-from {
        background: #F4FAFC;
        border: 1px solid #4570B6;
        border-radius: 15px;
        box-sizing: border-box;
        margin: 200px auto 100px;
        max-width: 990px;
        min-width: 990px;
        padding: 3.02vw 2.34375vw;
        position: relative;
        width: 51.5625vw;
        z-index: 20;

        :deep(h2::after) {
            bottom: -10px !important;
        }
    }

    .message-from>* {
        padding: 0 50px;
    }

    .message-from>*:first-child,
    .message-from>*:last-child {
        padding-left: 0;
        padding-right: 0;
    }

    .message-from div:first-child {
        display: flex;
        flex-direction: row;
    }

    .message-msg {
        line-height: 1.2 !important;
    }

    .from-title {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 6px;
        line-height: 2;
    }

    .from-msg {
        color: #87898c;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 6px;
        line-height: 2.5;
    }

    .from-first {
        display: flex;
        gap: 0 50px;
    }
}

@media screen and (max-width: 767px) {
    .message-from {
        margin: 0 5.6vw;
        background: #F4FAFC;
        border: 1px solid #4570B6;
        border-radius: 15px;
        box-sizing: border-box;
        margin: 25.64vw auto 15.38vw;
        max-width: 90vw;
        min-width: 90vw;
        position: relative;
        width: 90vw;
        z-index: 20;
        padding: 5.6vw 0;

        :deep(h2::after) {
            bottom: -2.564vw !important;
        }

        :deep(h2) {
            flex-direction: row;
            justify-content: center;
        }
    }

    .message-from>* {
        padding: 0 5.12vw;
    }


    .message-from div:first-child {
        display: flex;
        flex-direction: row;
    }

    .message-msg {
        line-height: 1.2 !important;
    }

    .from-title {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 4.615vw;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.05vw;
        line-height: 2;
    }

    .from-msg {
        color: #87898c;
        font-family: "Noto Sans HK";
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.05vw;
        line-height: 2.5;
    }

    .from-first {
        display: flex;
        flex-direction: column;
    }
}
</style>