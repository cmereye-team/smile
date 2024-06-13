<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{ $t("home.headers.ophthalmicConsultationChild_1") }}</h2>
    </div>
    <div class="tab flex justify-center" id="tab">
      <ul>
        <li
          @click="exchangeTab(index)"
          :class="currentIndex == index ? 'active' : ''"
          :key="item.id"
          v-for="(item, index) in list"
        >
          <p>{{ item.title }}</p>
        </li>
      </ul>
      <div
        v-if="currentIndex == 1 ? true : false"
        class="justify-center tables"
        :class="`tab-index-${currentIndex}`"
      >
        <div class="tab-control">
          <div
            class="tab-control-item"
            v-for="(item, index) in title"
            :key="item"
            :class="{ active: currentTitleIndex === index }"
            @click="titelclick(index)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
        <div v-if="currentTitleIndex === 1">
          <!-- SMILE 微笑矯視 精华版-->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_1_2, index_1_2) in mediaBujuLists_1_2"
              :key="index_1_2"
            >
              <a :href="item_1_2.link" target="_Blank">
                <img :src="item_1_2.img" alt="" />
                <div class="meida" v-html="item_1_2.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 0">
          <!-- Smile PRO 微笑矯視 精华版 -->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_1_2, index_1_2) in mediaBujuLists_1_3"
              :key="index_1_2"
            >
              <a :href="item_1_2.link" target="_Blank">
                <img :src="item_1_2.img" alt="" />
                <div class="meida" v-html="item_1_2.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a
            class="a-more-btn"
            href="https://www.youtube.com/@cmersmileeyecenter6303"
          >
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 2">
          <!-- icl 植入式隱形眼鏡 -->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_1_1, index_1_1) in mediaBujuLists_1_1"
              :key="index_1_1"
            >
              <a :href="item_1_1.link" target="_Blank">
                <img :src="item_1_1.img" alt="" />
                <div class="meida" v-html="item_1_1.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else>
          <!-- 矯視知多D 精华版 -->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_1_4, index_1_4) in mediaBujuLists_1_4"
              :key="index_1_4"
            >
              <a :href="item_1_4.link" target="_Blank">
                <img :src="item_1_4.img" alt="" />
                <div class="meida" v-html="item_1_4.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        class="tables"
        v-else-if="currentIndex == 2 ? true : false"
        :class="`tab-index-${currentIndex}`"
      >
        <div class="tab-control">
          <div
            class="tab-control-item"
            v-for="(item, index) in title"
            :key="item"
            :class="{ active: currentTitleIndex === index }"
            @click="titelclick(index)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
        <div v-if="currentTitleIndex === 1">
          <!-- Smile 微笑矯視  完整版-->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_2_2, index_2_2) in mediaBujuLists_2_2"
              :key="index_2_2"
            >
              <a :href="item_2_2.link" target="_Blank">
                <img :src="item_2_2.img" alt="" />
                <div class="meida" v-html="item_2_2.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 0">
          <!-- Smile Pro 微笑矯視  完整版-->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_2_2, index_2_2) in mediaBujuLists_2_3"
              :key="index_2_2"
            >
              <a :href="item_2_2.link" target="_Blank">
                <img :src="item_2_2.img" alt="" />
                <div class="meida" v-html="item_2_2.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 2">
          <!-- ICL植入式隱形眼鏡 完整版 -->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_2_1, index_2_1) in mediaBujuLists_2_1"
              :key="index_2_1"
            >
              <a :href="item_2_1.link" target="_Blank">
                <img :src="item_2_1.img" alt="" />
                <div class="meida" v-html="item_2_1.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <!-- <div v-else-if="currentTitleIndex === 3">
           精彩內容即將更新，密切留意！
        </div> -->
        <div v-else>
          <!-- 矯視知多D 完整版 -->
          <div class="media-buju">
            <div
              class="media-box"
              v-for="(item_2_4, index_2_4) in mediaBujuLists_2_4"
              :key="index_2_4"
            >
              <a :href="item_2_4.link" target="_Blank">
                <img :src="item_2_4.img" alt="" />
                <div class="meida" v-html="item_2_4.meida"></div>
              </a>
            </div>
          </div>
          <!-- <a  class="a-more-btn" href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a> -->
          <div class="flex justify-center my-10">
            <a
              href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
              target="_blank"
              class="mbShow"
            >
              <button>
                <div class="flex btn-yuyue">
                  <img
                    src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                    alt=""
                    style="width: 12vw"
                  />
                  <div
                    class="flex flex-col justify-center"
                    style="padding: 0 10px"
                  >
                    <span>{{
                      $t("consumptionVoucher.subscribe") +
                      "/" +
                      $t("consumptionVoucher.query")
                    }}</span>
                    <span>6940 8569</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="tables" v-else>
        <div style="height: 30px" :class="`tab-index-${currentIndex}`"></div>
        <div class="media-buju">
          <div
            class="media-box"
            v-for="(item_2_1, index_2_1) in onePushList"
            :key="index_2_1"
          >
            <a :href="item_2_1.link" target="_Blank">
              <img :src="item_2_1.img" alt="" />
              <div class="meida" v-html="item_2_1.meida"></div>
            </a>
          </div>
        </div>
        <a @click="getVideoList" v-if="allListOver">
          <div class="flex justify-center more-btn">
            <span>更多影片</span>
          </div>
        </a>
        <div class="flex justify-center my-10">
          <a
            href="https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座"
            target="_blank"
            class="mbShow"
          >
            <button>
              <div class="flex btn-yuyue">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
                  alt=""
                  style="width: 12vw"
                />
                <div
                  class="flex flex-col justify-center"
                  style="padding: 0 10px"
                >
                  <span>{{
                    $t("consumptionVoucher.subscribe") +
                    "/" +
                    $t("consumptionVoucher.query")
                  }}</span>
                  <span>6940 8569</span>
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      list: [
        {
          id: 3,
          title: this.$t("ophthalmicInfo.shareVideos.tabList.title3"),
        },
        {
          id: 1,
          title: this.$t("ophthalmicInfo.shareVideos.tabList.title1"),
        },
        {
          id: 2,
          title: this.$t("ophthalmicInfo.shareVideos.tabList.title2"),
        },
      ],
      currentTitleIndex: 0,
      title: [...this.$t("ophthalmicInfo.shareVideos.tabControlItem.title")],
      currentIndex: 0, // 当前点击的tab的索引
      mediaBujuLists_1_1: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_1"),
      ],
      mediaBujuLists_1_3: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_3"),
      ],
      mediaBujuLists_1_4: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_4"),
      ],
      mediaBujuLists_2_1: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_1_1"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_1"),
      ],
      mediaBujuLists_2_2: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_2_2_1'),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_2")
      ],
      mediaBujuLists_1_2: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_1_2_1'),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_2")
      ],
      mediaBujuLists_2_3: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_3"),
      ],
      mediaBujuLists_2_4: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_4"),
      ],
      // 所有影片
      /**
       * mediaBujuLists_1_3 Smile PRO 微笑矯視 精华版 
       * mediaBujuLists_1_2 SMILE 微笑矯視 精华版
       * mediaBujuLists_1_1 icl 植入式隱形眼鏡
       * mediaBujuLists_1_4 矯視知多D 精华版
       * mediaBujuLists_2_3 Smile Pro 微笑矯視  完整版
       * mediaBujuLists_2_2 Smile 微笑矯視  完整版
       * mediaBujuLists_2_1 ICL植入式隱形眼鏡 完整版
       * mediaBujuLists_2_4 矯視知多D 完整版
       * **/ 
      mediaBujuLists_3_1: [
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_3"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_3"),
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_1_2_1'),
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_2_2_1'),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_1_1"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_2"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_2"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_1"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_1"),
        ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_1_4"),
        // ...this.$t("ophthalmicInfo.shareVideos.mediaBujuLists_2_4"),
      ],
      onePushList: [],
      nowList: 0,
      allListOver: true,
    };
  },
  created() {
    this.getVideoList();
  },
  methods: {
    titelclick(index) {
      console.log(index);
      this.currentTitleIndex = index;
    },
    // 获取总视频数 默认展示9条  点击查看更多新增9条 直到加载完全部
    getVideoList() {
      this.nowList = this.onePushList.length;
      this.onePushList = [
        ...this.mediaBujuLists_3_1.slice(0, this.nowList + 9),
      ];
      if (this.nowList >= this.mediaBujuLists_3_1.length) {
        this.allListOver = false;
      }
    },
    //判断是否打开
    judgeActive(data) {
      console.log(data);
      return this.activeNames.indexOf(data);
    },
    handleChange(val) {
      console.log(val);
    },
    exchangeTab(index) {
      // 点击tab切换
      this.currentIndex = index;
      console.log(index);
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570b6;
}

.tables {
  margin-top: 47px;
}

.tab-control .active {
  background-color: #ffffff;

  span {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    /* identical to box height, or 83% */

    text-align: center;
    letter-spacing: 0.1em;

    background: linear-gradient(90.69deg, #5082c0 8.74%, #78cbe4 95.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}

.tab-control {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  cursor: pointer;

  .tab-control-item {
    padding: 0 30px;

    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 15px;
      /* identical to box height, or 83% */

      text-align: center;
      letter-spacing: 0.1em;

      color: #444343;
    }
  }
}

.contents {
  display: flex;
}

span {
  font-size: 14px;
}

.section_text {
  margin: 1vw 0;
}

@media screen and (min-width: 768px) {
  .tab-control-item {
    padding: 0 30px;

    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 15px;
      /* identical to box height, or 83% */

      text-align: center;
      letter-spacing: 0.1em;

      color: #444343;
    }
  }

  .tab-control-item::before {
    content: "";
    margin-left: 24px;
    margin-right: 10px;
    padding-left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #a6e1d6;
    display: inline-block;
  }

  .tab {
    margin: 50px auto;
  }

  ul {
    margin: 0 auto;
    padding: 0;
    height: 50px;
    position: absolute;
    width: 1200px;
    display: flex;
    justify-content: center;
  }

  li {
    cursor: pointer;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
    line-height: 50px;
    float: left;
    border-bottom: 2px solid #ddd;
    // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
    border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
    width: 30vw;
  }

  p {
    font-weight: 800;
    font-size: 18px;
    background-image: -webkit-linear-gradient(bottom, #81dbec, #4570b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .active {
    background-color: #f3fcfe;
    display: block;
  }

  .memu {
    margin-top: 5vw;
  }

  .media-buju {
    display: grid !important;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
    width: 1200px;

    .media-box {
      padding: 0px 11px;
      margin-bottom: 46px;

      img {
        min-height: 200px;
      }
    }

    .meida {
      display: flex;
      justify-content: center;
      margin-top: 16px;

      /deep/ span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        /* or 125% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #444343 !important;
      }
    }
  }

  .more-btn {
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 13px 23px;
    margin: 0 auto;
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    cursor: pointer;

    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }
  .a-more-btn {
    cursor: pointer;
    background: #4570b6 !important;
    height: auto;
    width: 100%;
    display: flex;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto;
    border-radius: 100px;
    padding: 17px 150px;
    & > div {
      background: transparent;
      & > span {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 100% */
        letter-spacing: 7.5px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 14px;
  }

  .meida {
    display: flex;
    justify-content: center;
    /* padding: 10px 0; */
    padding-top: 14.5px;
    padding-bottom: 35px;
  }

  .more-btn {
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    width: 40%;
    margin: 0 auto;
    padding: 10px 0;
    margin-top: 12px;

    span {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }

  .tab {
    margin: 0 auto;
  }

  ul {
    margin: 0 auto;
    padding: 0;
    height: 50px;
    position: absolute;
    max-width: revert;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  li {
    cursor: pointer;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
    line-height: 50px;
    float: left;
    border-bottom: 2px solid #ddd;
    // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
    border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
    width: 49%;
  }

  p {
    font-weight: 800;
    font-size: 18px;
    background-image: -webkit-linear-gradient(bottom, #81dbec, #4570b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .active {
    background-color: #f3fcfe;
    display: block;
  }

  .tab-control {
    align-items: center;
    flex-direction: column;
  }

  .tab-control .tab-control-item {
    border-bottom: 1px solid #666;
    width: max-content;
    text-align: center;
  }

  .tab-control .tab-control-item span {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #444343;
  }

  .tab-control .tab-control-item {
    padding: 0;
  }
}
</style>
