<template>
  <div class="orthopedic-video">
    <HeadV2 />

    <!-- 轮播位置 -->
    <div class="new-container mx-auto smile-NewBanner position-relative">
      <img
        class=""
        decoding="async"
        src="https://statichk.cmermedical.com/smile/orthopedic-video/videoBanner-pc.avif"
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
        srcset="
          https://statichk.cmermedical.com/smile/orthopedic-video/videoBanner-mb.avif 400w,
          https://statichk.cmermedical.com/smile/orthopedic-video/videoBanner-mb.avif 640w,
          https://statichk.cmermedical.com/smile/orthopedic-video/videoBanner-pc.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="smile-NewBanner-Title">
        <span>VIDEO</span>
        <h3>個案分享<br /><span>Case Sharing</span></h3>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="new-container mx-auto search-box">
      <div class="search-box-meua">
        <p><a href="/">主頁 > </a><a href="/video">個案分享</a></p>
      </div>
      <div class="search-box-input">
        <div class="search-button" @click="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clip-path="url(#clip0_13582_356)">
              <path
                d="M15.818 18.3486C11.2817 21.515 5.23527 20.4403 2.00883 16.1502C-1.09316 12.0264 -0.552497 6.19131 3.28365 2.63175C7.02256 -0.837837 12.8249 -0.879886 16.6757 2.52907C20.6586 6.05538 21.3053 12.2553 17.7288 16.5864C17.8591 16.7243 17.9903 16.8651 18.1236 17.0039C19.94 18.904 21.7584 20.8031 23.5739 22.7031C24.1292 23.284 24.1418 24.0986 23.6089 24.6228C23.0712 25.1518 22.2582 25.1234 21.704 24.5475C20.7763 23.5823 19.8535 22.6122 18.9277 21.6451C17.9408 20.6134 16.9528 19.5817 15.9668 18.549C15.9113 18.4913 15.8695 18.4199 15.817 18.3486H15.818ZM10.0254 17.5516C14.1017 17.5682 17.4283 14.2365 17.4497 10.1176C17.4711 6.01333 14.162 2.65718 10.073 2.63664C5.97722 2.61513 2.63992 5.94683 2.62436 10.0697C2.6088 14.1876 5.91985 17.5349 10.0254 17.5516Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_13582_356">
                <rect width="24" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <input
          v-model="searchTerm"
          type="text"
          placeholder="輸入用家名字搜尋"
          class="search-input"
          @keyup.enter="search"
        />
      </div>
    </div>

    <div class="videoList new-container">
      <ul>
        <li
          v-for="item in tabs"
          :key="item"
          :class="['tab-item', { active: activeTab === item }]"
          @click="activeTab = item"
        >
          {{ item }}
        </li>
      </ul>
      <div class="videoList-box">
        <ul
          class="UserShareBox-list"
          v-if="!searchBoolean"
          ref="UserShareBoxlist"
        >
          <li
            class="UserShareBox-list-item"
            v-for="(item, index) in userShare.filter(
              (u) => u.type == activeTab
            )"
            :key="index"
          >
            <a
              class="UserShareBox-list-item-link"
              :href="item.href"
              target="_blank"
            >
              <img :src="item.img" alt="" loading="lazy" />
              <span
                class="UserShareBox-list-item-link-title"
                :style="{ backgroundColor: getColor(item.type) }"
                >{{ item.type }}</span
              >
              <div class="UserShareBox-list-item-link-text">
                <p v-for="(text, i) in item.text" :key="i">
                  {{ text }}
                </p>
                <i :style="{ backgroundColor: getColor(item.type) }"></i>
                <div class="UserShareBox-list-item-link-text-name">
                  <span v-if="item.nameCn">{{ item.nameCn }}&nbsp;</span>
                  <span class="UserShareBox-list-item-link-text-name-en">{{
                    item.nameEn
                  }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <ul class="UserShareBox-list" v-else ref="UserShareBoxlist">
          <li
            class="UserShareBox-list-item"
            v-for="(item, index) in searchList"
            :key="index"
          >
            <a
              class="UserShareBox-list-item-link"
              :href="item.href"
              target="_blank"
            >
              <img :src="item.img" alt="" loading="lazy" />
              <span
                class="UserShareBox-list-item-link-title"
                :style="{ backgroundColor: getColor(item.type) }"
                >{{ item.type }}</span
              >
              <div class="UserShareBox-list-item-link-text">
                <p v-for="(text, i) in item.text" :key="i">
                  {{ text }}
                </p>
                <i :style="{ backgroundColor: getColor(item.type) }"></i>
                <div class="UserShareBox-list-item-link-text-name">
                  <span v-if="item.nameCn">{{ item.nameCn }}&nbsp;</span>
                  <span class="UserShareBox-list-item-link-text-name-en">{{
                    item.nameEn
                  }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="share-video">
      <shareVideo /> 
    </div> -->

    <FooterV2 />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import HeadV2 from "@/components/Publice/HeadeV2.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import FooterV2 from "@/components/commom/new_foot/ICLFooterV2.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import shareVideo from "@/components/content/new/shareVideo.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
    shareVideo,
    HeadV2,
    FooterV2,
  },
  data() {
    return {
      tabs: ["SMILE Pro", "SMILE", "ICL"],
      activeTab: "SMILE Pro", // 默认激活项
      colorMap: {
        "SMILE Pro": "#4570B6",
        ICL: "#EB981A",
        "CLEAR-Vision": "#5FB947",
        SMILE: "#30ABE2",
      },

      searchTerm: "",
      searchList: [],
      userShare: [
        {
          type: "SMILE Pro",
          href: "https://youtu.be/Z5ut-9tIhmo",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-021.avif",
          text: ["唔洗矇查查周圍搵眼鏡"],
          nameEn: "Sarah",
          nameCn: "李蒨怡",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/857FwJQu7OA",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-020.avif",
          text: ["無咗眼鏡都一樣做到唔","同活動"],
          nameEn: "Jay",
          nameCn: "沈以諾",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/AT7ZVZ4lFgM",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro1.avif",
          text: ["咸淡水活動都咁方便"],
          nameEn: "Karen",
          nameCn: "譚凱琳",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/10KYv_gGgWM",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro2.avif",
          text: ["無哂Con帶嚟嘅麻煩", "促進咗眼神交流"],
          nameEn: "Anson Au",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/TBI6J31JwJQ",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro3.avif",
          text: ["做咗就可以好似我依家", "咁方便㗎喇"],
          nameEn: "Carmen",
          nameCn: "倪嘉雯",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/WyrC9G4XL68",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro4.avif",
          text: ["SMILE Pro真係", "好神奇!"],
          nameEn: "Mimi Lau",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/1Ic0z7wiVv8",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro5.avif",
          text: ["唔洗花時間戴Con，", "可以直接出門練習，", "非常方便"],
          nameEn: "Tiffany",
          nameCn: "鄧伊程",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/vxeN1wXeZ5M",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro6.avif",
          text: ["好舒服之下就完成咗", "成個過程"],
          nameEn: "Maggie",
          nameCn: "米姬",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/C4yu0L5xfy8",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro7.avif",
          text: ["做完SMILE Pro", "慳咗好多Con錢"],
          nameEn: "Fish",
          nameCn: "梁梓瑜",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/U4rueCW0hIg",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro8.avif",
          text: ["一瞓醒清楚望到全世界", "真係好開心!"],
          nameEn: "Belle",
          nameCn: "",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/uHFshgSiP4o",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-022.avif",
          text: ["希瑪矯視旅程"],
          nameEn: "Belle",
          nameCn: "",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/M6mkwCRqXII",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-023.avif",
          text: ["SMILE Pro VS", "SMILE矯視"],
          nameEn: "Pinky",
          nameCn: "",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/VoGlE1dJPhc",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro9.avif",
          text: ["我都做咗", "SMILE Pro啦!"],
          nameEn: "Pinky",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/RzeaU0Y0zMI",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro10.avif",
          text: ["20秒解決人生", "一大問題"],
          nameEn: "Killer",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/IWGVOHwyUQc",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro11.avif",
          text: ["行出沙灘都有自信啲"],
          nameEn: "Jay",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/1p5Qm_772jI",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro12.avif",
          text: ["做完SMILE Pro", "上舞台都唔會驚光"],
          nameEn: "",
          nameCn: "細貓",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/4ELnbQjUCsA",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro13.avif",
          text: ["婚禮To-Do List要有", "做SMILE Pro"],
          nameEn: "Mina",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/r4rbUUVtjzM",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro14.avif",
          text: ["唔洗戴Con戴一世"],
          nameEn: "Maggie",
          nameCn: "米姬",
        },

        {
          type: "SMILE Pro",
          href: "https://www.youtube.com/embed/kVEJ-PN4AJo?si=0WNMW3YgQOeTKlp3",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro15.avif",
          text: ["我問自己點解唔早啲做", "SMILE Pro呢!"],
          nameEn: "Cindy Wong",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://www.youtube.com/embed/I6Yv4PTTSC4?si=fJdFww6xWseW9KVJ",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro16.avif",
          text: ["湊住仔仔都咁方便"],
          nameEn: "Cindy Wong",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/33vCgmDh-UQ",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro17.avif",
          text: ["做完一出嚟問題解決哂"],
          nameEn: "",
          nameCn: "劉學銘",
        },
        {
          type: "SMILE Pro",
          href: "https://youtu.be/iHBGkRh-CXw",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro18.avif",
          text: ["教瑜伽堂專注咗", "效率高咗"],
          nameEn: "Sandy To",
          nameCn: "",
        },

        {
          type: "SMILE Pro",
          href: "https://youtu.be/jBAIJeUQGz0",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro19.avif",
          text: ["無咗副Con", "生活自主返"],
          nameEn: "SAPIAH",
          nameCn: "莎比亞",
        },

        // smile

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/TGxol6pNXSY?si=smsLpfhLJBxqitx7",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile1.avif",
          text: ["就算落雨都唔會再影響", "到我跑步嘅心情"],
          nameEn: "",
          nameCn: "黃啟樂 ",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/TGxol6pNXSY?si=smsLpfhLJBxqitx7",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile2.avif",
          text: ["唔洗戴Con係一種", "解脫!可以瀟灑出門口"],
          nameEn: "",
          nameCn: "尹焯熙",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tLsWfdZy4P4?si=AjVzygcOPjWeGkh0",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile3.avif",
          text: ["一行出去已經感受到", "原來我望嘢可以咁清楚"],
          nameEn: "",
          nameCn: "馬燕茹",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/_wk_gZGzB1s?si=lrRm3juyJA4LCmqU",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile4.avif",
          text: ["做完多咗眼神交流", "傳波都準咗"],
          nameEn: "",
          nameCn: "李旭川",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/qBsPhkIaVfo?si=eoL0GFtYOpQ7wX6M",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-005.avif",
          text: ["想做就去做啦!"],
          nameEn: "",
          nameCn: "游嘉欣",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/oHDOFYMEUsk?si=01mWE78jZEidTIiL",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile6.avif",
          text: ["終於可以掉咗", "縮細眼嘅眼鏡"],
          nameEn: "Shirley Chan",
          nameCn: "陳欣妍",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nrsLktnnW_I?si=81-m7f4tvpUaT3Xy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile7.avif",
          text: ["過程好似打機咁", "好神奇有趣!"],
          nameEn: "Kathy Ngai",
          nameCn: "倪安慈",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/XSOzqZD6N8Q?si=ir3S4DM1ELTcLvb5",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile8.avif",
          text: ["過程咩感覺都無", "好快 好神奇!"],
          nameEn: "Donald",
          nameCn: "唐劍康",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/sw1fxUXMqes?si=e4M947UUr4AM8F0Q",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile9.avif",
          text: ["視力仲好過未矯視之前"],
          nameEn: "",
          nameCn: "麥秋成",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/HfA2NBsMVWQ?si=MyRyoCPm2WcwYqVh",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile10.avif",
          text: ["做完好似戴咗Con咁，", "連瞓覺都feel到自己睇", "得好清楚咁"],
          nameEn: "Jacky Tong",
          nameCn: "唐浩然",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dyzeGWTk8Dk?si=2dpnlA9N-7wE43Ez",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile11.avif",
          text: ["做咗SMILE有", "更多精力應付工作"],
          nameEn: "Charlotte",
          nameCn: "張沛樂",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/g0sWFw1YAs0?si=Kf6ZHKdxEs0GiOvp",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile12.avif",
          text: ["彈結他幾投入睇嘢", "都唔矇"],
          nameEn: "Cath Wong",
          nameCn: "黃妍",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/1WR18ptmCuQ?si=XTlisgHBsX_eevjT",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile13.avif",
          text: ["做SMILE過程", "都無感覺"],
          nameEn: "Aka",
          nameCn: "趙慧珊 ",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/bwQMHStnXCk?si=MyvOKeK7HBTp0ZpP",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile14.avif",
          text: ["就算以後唔可以戴Con", "都唔怕 因為我已經做", "咗SMILE"],
          nameEn: "",
          nameCn: "張名雅 ",
        },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/inD-CATvEl4?si=792lMz0KR-ECOaG-",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile15.avif",
          text: ["同學生對打都唔怕Con", "移位"],
          nameEn: "Anthony",
          nameCn: "李偉志",
        },

        // {
        //   type: "SMILE",
        //   href: "",
        //   img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile16.avif",
        //   text: ["唔再俾Con霸住行李"],
        //   nameEn: "Giann Chan",
        //   nameCn: "",
        // },
        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/dYYyN9YZGQg?si=zzOIgO3wRJ8i-SWP",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile17.avif",
          text: ["做SMILE原來", "早做早享受"],
          nameEn: "",
          nameCn: "杜詠彤",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/T3K97UlXpHg?si=7sO2CgYMDJ4XD7qs",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile18.avif",
          text: ["以後跳繩集中", "都唔怕眼乾"],
          nameEn: "",
          nameCn: "何柱霆",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/WlFqNfq5jkI?si=CLUy7xgVR91JKigx",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile19.avif",
          text: ["原來世界可以咁清楚"],
          nameEn: "",
          nameCn: "盧善琳",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Z9s3c5Thu7w?si=_pzRK7p7IQ6-_rt8",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile20.avif",
          text: ["過程比我想像中快"],
          nameEn: "Ceci Wu",
          nameCn: "",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/o2n03FVGWbk?si=jTrcw8XArqyyonXO",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile21.avif",
          text: ["做完成個世界唔同咗"],
          nameEn: "",
          nameCn: "釗峰",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/05NSqdF7nz0?si=w5Q_utrbhZL1p1U6",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile22.avif",
          text: ["做完好感動", "開心到想喊"],
          nameEn: "Mandy",
          nameCn: "文荻",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/nagwW6CP1iU?si=XWckgpCMdtbMvYya",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile23.avif",
          text: ["早啲做SMILE慳好多", "買Con錢 好抵!"],
          nameEn: "Natalie",
          nameCn: "方敏婷",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/tJ3MHvKagMk?si=mHt2LqB73V_NwHYa",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile24.avif",
          text: ["長期長時間戴Con人士", "要做SMILE!"],
          nameEn: "",
          nameCn: "伍富橋",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/c6dwJ1Cbgxw?si=tekKXwPLkDc92uv5",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile25.avif",
          text: ["好似瞓一覺就做完咁"],
          nameEn: "kelly Ng",
          nameCn: "伍樂怡",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/L5GFWM7Fxqs?si=cYLRMHXMzoP5FH2n",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile26.avif",
          text: ["拍嘢睇Mon唔洗再俾", "眼鏡壓住"],
          nameEn: "Dominic Ho",
          nameCn: "何浩文",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/Udnsv_lOr74?si=Xn5Ig0PliVCcfys3",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile27.avif",
          text: ["做咗SMILE就唔會再", "錯過同囡囡每個", "珍貴Moment"],
          nameEn: "Daniel Chau",
          nameCn: "周志康",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JCzzO4Y0kko?si=LKVCHmyBvkgLNuoy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile28.avif",
          text: ["每一次擘大眼都", "懷疑自己係咪唔記得除", "Con既感覺"],
          nameEn: "Ada",
          nameCn: "姜咏鑫",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/JD5GGTg01to?si=zwrN5KrcBe4sWWLI",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile29.avif",
          text: ["做完好似重生", "換咗對新嘅眼咁!"],
          nameEn: "Hubert",
          nameCn: "胡鴻鈞",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/NF_S1R9DhNk?si=5ki2MXpyk8TtJKxy",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile30.avif",
          text: ["唔止視力穩定 心理上", "都穩定咗"],
          nameEn: "Scarlett",
          nameCn: "莎拉",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/7T_ATu8-Vn8?si=1tseMCvC-rZE0Hpu",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile31.avif",
          text: ["揸車唔洗換眼鏡", "安全好多"],
          nameEn: "Brian Wong",
          nameCn: "黃千庭",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/KslMZ0PY2fg?si=ef_eVnM9ENSXfAGY",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile32.avif",
          text: ["原來做SMILE唔痛", "仲好快"],
          nameEn: "Judy Mok",
          nameCn: "莫穎彤",
        },

        {
          type: "SMILE",
          href: "https://www.youtube.com/embed/jO_h9YqCJzs?si=6tE41PFSmyROUS24",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile33.avif",
          text: ["長時間專注整蛋糕都唔", "眼乾"],
          nameEn: "Jimmy",
          nameCn: "劉志穎 ",
        },

        // icl
        {
          type: "ICL",
          href: "https://youtu.be/D91jSXnpeNc",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-011.avif",
          text: ["ICL矯視過程講解及", "注意事項"],
          nameEn: "Ting Yan",
          nameCn: "梁庭欣",
        },
        {
          type: "ICL",
          href: "https://youtu.be/PmZk2TtrNBc",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-010.avif",
          text: ["一個「選擇」", "睇見自己嘅光芒"],
          nameEn: "Ting Yan",
          nameCn: "梁庭欣",
        },
        {
          type: "ICL",
          href: "https://youtu.be/fNSShYa7nKk",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem1.avif",
          text: ["依家一擘大眼就見到", "好清楚嘅世界，好立體"],
          nameEn: "Kathy",
          nameCn: "王頌茵",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/watch?v=T9g2qoFI9nU",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl1.avif",
          text: ["夜間高清視力對", "夜晚揸車好重要"],
          nameEn: "Lily",
          nameCn: "李莉",
        },

        {
          type: "ICL",
          href: "https://youtu.be/I2sl4GWqg1w",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem4.avif",
          text: ["眼鏡由「必須品」", "變「奢侈品」"],
          nameEn: " ",
          nameCn: "麥沛東",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/embed/r0yDL98l0Zo?si=J9g_LkGpHRT0kGcY",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl4.avif",
          text: ["原來眼角膜薄都有機會", "可以做矯視!"],
          nameEn: "",
          nameCn: "麥沛東",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/embed/B12IjJ3tFHE?si=LMujYjc_BmEXP5EI",
          img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl5.avif",
          text: ["麥沛東與結婚這回事"],
          nameEn: "",
          nameCn: "麥沛東",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/watch?v=CEbbKFeFdnc",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl4.avif",
          text: ["眼鏡選擇多好多,", "世界限制少好多"],
          nameEn: "Kwan Gor",
          nameCn: "吳業坤",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/watch?v=2t7JjTab4xA",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl2.avif",
          text: ["好Surprise 做完之後", "24小時都睇得咁清"],
          nameEn: "Phil",
          nameCn: "林奕匡",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/watch?v=5ihrzFvOy38",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl3.avif",
          text: ["每日起身唔洗戴Con", "慳好多時間 好方便"],
          nameEn: "Serene Lim",
          nameCn: "林宣妤",
        },

        {
          type: "ICL",
          href: "https://www.youtube.com/watch?v=e-c_qRuvWTA",
          img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl5.avif",
          text: ["做咗ICL 夜晚湊小朋友", "唔洗開燈都睇得清楚"],
          nameEn: "Tiffany Poon",
          nameCn: "",
        },
      ],
      userShareData: [],
      searchBoolean: false,
      canonicalHref: "https://smile.hkcmereye.com/video/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/video/",
      browserTitle: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
      browserTitleCn: "个案分享及矫视资讯影片 - 希玛微笑矫视中心",
    };
  },
  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "個案分享及矯視資訊影片 - 希瑪微笑矯視中心",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/video/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/video/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/video/",
        },
      ],
    };
  },
  mounted() {
    this.userShareData = this.userShare;
  },
  methods: {
    // search回车
    search() {
      this.searchList = [];
      if (this.searchTerm == "") {
        this.searchBoolean = false;
        return false;
      }

      this.userShareData.forEach((item) => {
        if (
          item.nameEn.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.nameCn.includes(this.searchTerm)
        ) {
          this.searchList.push(item);
        } else {
        }
      });
      
      this.activeTab = this.searchList[0].type;
      this.searchBoolean = true;
    },
    // 获取背景颜色
    getColor(type) {
      return this.colorMap[type] || "white";
    },
  },
};
</script>


<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .smile-NewBanner {
    padding: 0 3.85vw;
    margin-top: 80px;
    height: 50vw;
    position: relative;
    img {
      width: 44.87vw;
      position: absolute;
      top: 4.87vw;
      right: 5.13vw;
    }

    .smile-NewBanner-Title {
      position: absolute;
      top: 13.59vw;
      left: 28px;
      span {
        font-style: normal;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 11.67vw;
        font-style: normal;
        font-weight: 700;
        line-height: 12.74vw;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 6.28vw;
        font-style: normal;
        font-weight: 400;
        line-height: 109.4%;
        span {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: 2.56vw;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          letter-spacing: 0.08vw;
        }
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: 2.51vw;
        font-style: normal;
        font-weight: 400;
        line-height: 217.5%;
        letter-spacing: 0.08vw;
      }
    }
  }

  .search-box {
    padding-left: 28px;
    .search-box-meua {
      p {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 3.08vw;
        font-style: normal;
        font-weight: 300;
        line-height: 362.5%;
        letter-spacing: 0.09vw;
        & > a:last-child {
          color: #4570b6;
          font-weight: 500;
        }
      }
    }

    .search-box-input {
      width: 86.15vw;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px solid #4570b6;

      .search-button {
        background: #4570b6;
        width: 12.82vw;
        height: 12.82vw;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 6.15vw;
        }
      }
      input {
        width: 100%;
        font-family: "Noto Sans HK";
        font-size: 6.15vw;
        font-style: normal;
        font-weight: 300;
        line-height: 175%;
        padding-left: 3.59vw;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }

  // 视频列表
  .videoList {
    margin-top: 40px;
    & > ul {
      cursor: pointer;
      border-bottom: 1px solid #c8d5ea;
      display: flex;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        width: 33.33vw;
        padding: 28px 0;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        letter-spacing: 0.51vw;
      }
      .active {
        color: #fff;
        background: #4570b6;
        letter-spacing: 0;
      }
    }

    .UserShareBox-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5.64vw;
      .UserShareBox-list-item {
        .UserShareBox-list-item-link {
          position: relative;
          display: block;
          width: 46.92vw;
          height: 77.69vw;
          overflow: hidden;
          img {
            width: 100%;
          }
          // 右上角
          .UserShareBox-list-item-link-title {
            position: absolute;
            right: 2.56vw;
            top: 2.56vw;
            border-radius: 75px;
            background: #eb981a;
            padding: 0.77vw 3.08vw;
            color: #fff;
            font-family: "Poppins", sans-serif;
            font-size: 3.54vw;
            font-style: normal;
            font-weight: 700;
            line-height: 1.75;
            letter-spacing: 0;
          }
          .UserShareBox-list-item-link-text {
            position: absolute;
            left: 4.62vw;
            bottom: 4.62vw;
            p {
              color: #fff;
              font-family: "Noto Sans TC";
              font-size: 3.08vw;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4444;
              letter-spacing: 0.23vw;
            }
            i {
              display: block;
              margin: 2.56vw 0;
              width: 12.82vw;
              height: 0.51vw;
              background: #eb981a;
            }
            .UserShareBox-list-item-link-text-name {
              span {
                color: #fff;

                font-size: 3.54vw;
                font-style: normal;

                line-height: normal;
                letter-spacing: 0.21vw;
                font-family: "Noto Sans TC";
                font-weight: 600;
              }

              & > .UserShareBox-list-item-link-text-name-en {
                font-family: "Poppins", sans-serif;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .smile-NewBanner {
    padding: 0px;
    margin-top: 159px;
    height: clamp(216.5px, 22.55vw, 433px);
    position: relative;
    img {
      width: clamp(194px, 20.21vw, 388px);
      position: absolute;
      top: 0;
      left: inherit;
      left: clamp(250px, 26.04vw, 500px);
    }

    .smile-NewBanner-Title {
      position: absolute;
      bottom: clamp(45px, 4.69vw, 90px);
      left: clamp(38.5px, 4.01vw, 77px);
      span {
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: clamp(68.75px, 7.16vw, 137.5px);
        font-style: normal;
        font-weight: 700;
        line-height: 109.4%;
        letter-spacing: 0;
      }
      h3 {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(37px, 3.85vw, 74px);
        font-style: normal;
        font-weight: 400;
        line-height: 1.09;
        span {
          color: #4570b6;
          font-family: "Noto Sans TC";
          font-size: clamp(15px, 1.56vw, 30px);
          font-style: normal;
          font-weight: 400;
          line-height: 217.5%;
          letter-spacing: clamp(0.45px, 0.05vw, 0.9px);
        }
      }
      p {
        color: #4570b6;
        font-family: "Noto Sans TC";
        font-size: clamp(14.75px, 1.54vw, 29.5px);
        font-style: normal;
        font-weight: 400;
        line-height: 217.5%;
        letter-spacing: clamp(0.45px, 0.05vw, 0.9px);
      }
    }
  }

  .search-box {
    padding-left: clamp(38.5px, 4.01vw, 77px);
    .search-box-meua {
      p {
        color: #6d6e71;
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 217.5%;
        letter-spacing: 0.6px;
        & > a:last-child {
          color: #4570b6;
          font-weight: 500;
        }
      }
    }

    .search-box-input {
      margin: 38px auto 0;
      max-width: 336px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px solid #4570b6;

      .search-button {
        background: #4570b6;
        width: 50px;
        height: 50px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 24px;
        }
      }
      input {
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 175%;
        padding-left: 14px;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }

  // 视频列表
  .videoList {
    margin-top: 70px;
    & > ul {
      border-bottom: 1px solid #c8d5ea;
      display: flex;
      align-items: center;
      cursor: pointer;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        width: 430px;
        padding: 32px 0 23px;
        color: #4570b6;
        font-family: "Poppins", sans-serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 7.5px;
      }
      .active {
        color: #fff;
        background: #4570b6;
      }
    }

    .UserShareBox-list {
      display: flex;

      flex-wrap: wrap;
      max-width: 865px;
      margin: 118px auto 68px;
      gap: 35px;
      .UserShareBox-list-item {
        .UserShareBox-list-item-link {
          position: relative;
          display: block;
          width: 265px;
          height: 439px;
          flex-shrink: 0;
          overflow: hidden;
          img {
            width: 100%;
          }
          // 右上角
          .UserShareBox-list-item-link-title {
            position: absolute;
            right: 12px;
            top: 14px;
            border-radius: 75px;
            background: #eb981a;
            padding: 3px 18px;
            color: #fff;
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.75;
            letter-spacing: 0;
          }
          .UserShareBox-list-item-link-text {
            position: absolute;
            left: 35px;
            bottom: 26px;
            p {
              color: #fff;
              font-family: "Noto Sans TC";
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 1.4444;
              letter-spacing: 1.44px;
            }
            i {
              display: block;
              margin: 12px 0;
              width: 68px;
              height: 2px;
              background: #eb981a;
            }
            .UserShareBox-list-item-link-text-name {
              span {
                color: #fff;
                font-size: 20px;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1.2px;
                font-family: "Noto Sans TC";
                font-weight: 600;
              }

              & > .UserShareBox-list-item-link-text-name-en {
                font-family: "Poppins", sans-serif;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1139px) {
  .new-container {
    max-width: 1140px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1310px) {
  .new-container {
    max-width: 1320px !important;
    margin-left: auto;
    margin-right: auto;
  }
}

:deep(.share-video) {
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: none;
    }
  }
}
@media screen and (min-width: 768px) {
  :deep(.share-video) {
    h2 {
      margin-bottom: 40px;
    }
    .active {
      border-bottom: 2px solid #4570b6 !important;
      background: #4570b6 !important;
      & > p {
        color: #fff !important;
      }
    }
    .tab-control {
      .active {
        border-bottom: none !important;
        background: transparent !important;
      }
    }
    .tab-control .active {
      border-bottom: none !important;
    }
    & > div:nth-child(2) {
      padding: 0 !important;
      & > div:nth-child(2) {
        max-width: 1270px;
        margin: 0 auto;
      }
      ul {
        max-width: 1270px;
        margin: 0 auto;
        width: 100%;
        & > li {
          border-bottom: 2px solid #4570b694;
          border-image: none;
          height: 85px;
          display: flex;
          justify-content: center;
          align-items: center;
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 100% */
            letter-spacing: 7.5px;
          }
        }
      }
      .tables {
        max-width: 1270px;
        width: 100%;
        margin: 85px auto 75px;

        & > div:nth-child(2) {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & > .media-buju {
            width: 1270px;
          }
          & > div {
            & > a {
              & > img {
                width: 392px;
                height: auto;
                border-radius: 20px;
              }
              & > div {
                max-width: 392px;
                margin-top: 0;
                span {
                  color: #6d6e71 !important;
                  text-align: center;
                  font-family: "Noto Sans HK";
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 50px; /* 166.667% */
                  letter-spacing: 7.5px;
                }
              }
            }
          }
        }
        & > a {
          background: #4570b6 !important;
          height: auto;
          width: 100%;
          display: flex;
          width: fit-content;
          margin: 0 auto;
          border-radius: 100px;
          padding: 17px 150px;
          & > div {
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
            background: transparent !important;
          }
        }
      }
      .tab-control {
        .active {
          span {
            color: #fff;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
      .media-box {
        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 392px;
          height: auto;
          border-radius: 20px;
        }
        .meida {
          max-width: 392px;
          margin-top: 0px;
          span {
            color: #6d6e71 !important;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 50px; /* 166.667% */
            letter-spacing: 7.5px;
          }
        }
      }
      .tab-index-1 .tab-index-2 {
        .tab-control {
          display: flex !important;
        }
      }
      .tab-control {
        .active {
          span {
            color: #4570b6;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
    }
  }
  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
    display: flex;
    justify-content: center;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/d17daac53c331624.png")
      no-repeat;
    background-size: cover;
    height: 32.08vw;
    width: 100%;
    max-width: 1150px;
    max-height: 556px;
    background-position: center;
    border-radius: 55px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    padding-bottom: 5%;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
  .share-video {
    margin-top: 85px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  :deep(.share-video) {
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        max-width: 99.21875vw !important;
      }
      ul {
        max-width: 99.21875vw !important;
      }
      .tables {
        max-width: 99.21875vw !important;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .share-video {
    margin-bottom: 55px;
  }
  :deep(.share-video) {
    h2 {
      margin-bottom: 35px;
    }
    .active {
      border-bottom: none !important;
      background: #4570b6 !important;
      P {
        color: #fff !important;
      }
    }
    & > div:nth-child(2) {
      padding: 0 !important;
      & > div:nth-child(2) {
        max-width: 1270px;
        margin: 0 auto;
      }
      ul {
        margin: 0 auto;
        width: 100%;
        height: 85px;
        & > li {
          border-bottom: 2px solid #4570b694;
          border-image: none;
          line-height: 85px;
          display: flex;
          justify-content: center;
          align-items: center;
          P {
            color: #4570b6;
            background-image: none;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 150% */
            letter-spacing: 1px;
          }
        }
      }
      .tables {
        width: 100%;
        margin: 88px auto 0;
        padding: 0 30px;

        & > div:nth-child(2) {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            & > a {
              display: flex;
              flex-direction: column;
              align-items: center;

              & > img {
                width: 330px;
                height: auto;
                border-radius: 20px;
              }
              & > div {
                max-width: 330px;
                span {
                  color: #6d6e71;
                  text-align: center;
                  font-family: "Noto Sans HK";
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 20px; /* 312.5% */
                  letter-spacing: 0.8px;
                }
              }
            }
          }
        }
        & > a {
          background: #4570b6 !important;
          height: auto;
          width: 100%;
          display: flex;
          margin: 0 auto;
          border-radius: 100px;
          padding: 10px 100px;
          & > div {
            & > span {
              color: #fff;
              text-align: center;
              font-family: "Noto Sans HK";
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 30px; /* 150% */
              letter-spacing: 1px;
            }
            background: transparent !important;
            width: 100%;
            margin-top: 0;
            margin: 0 auto;
          }
        }
        .media-buju {
          width: 100%;
        }
      }
      .tab-control {
        & > div {
          border-bottom: none;
          position: relative;
        }
        & > div::before {
          content: "";
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b3dfd6;
        }
        .active {
          border-bottom: none !important;
          background: #fff !important;
          span {
            color: #4570b6 !important;
            -webkit-text-fill-color: unset;
            background-clip: unset;
            background: none;
          }
        }
      }
      .media-box {
        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 330px;
          height: auto;
          border-radius: 20px;
        }
        .meida {
          max-width: 330px;
          span {
            color: #6d6e71;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 312.5% */
            letter-spacing: 0.8px;
          }
        }
      }
      // .tab-index-0 {
      //   display: none;
      // }
      .tab-index-1 .tab-index-2 {
        .tab-control {
          display: flex !important;
        }

        width: 100%;
        background: darkcyan !important;
        & > div:nth-child(2) {
          .media-buju {
            width: 100%;
            margin: 0 auto;
            & > div {
              & > a {
                display: flex;
                flex-direction: column;
                align-items: center;

                & > & > div {
                  max-width: 330px;
                  span {
                    color: #6d6e71;
                    text-align: center;
                    font-family: "Noto Sans HK";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 50px; /* 312.5% */
                    letter-spacing: 0.8px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/2fa887bd2cfd7350.png")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px 55px;
    border-radius: 44px;
    padding-left: 10px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-bottom: 30%;
    & > p {
      max-width: 110px;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 290% */
      letter-spacing: 0.5px;
    }
  }
}
</style>