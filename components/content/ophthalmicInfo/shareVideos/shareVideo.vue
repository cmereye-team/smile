<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('home.headers.ophthalmicConsultationChild_1')}}</h2>
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
        v-if="currentIndex == 0 ? true : false"
        class="justify-center tables"
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
        <div v-if="currentTitleIndex === 0">
          <div class="media-buju">
            <div class="media-box" v-for="(item_1_1,index_1_1) in mediaBujuLists_1_1" :key="index_1_1">
              <a :href="item_1_1.link">
                <img
                  :src="item_1_1.img"
                  alt=""
                />
                <div class="meida" v-html="item_1_1.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://youtu.be/2t7JjTab4xA">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2021/01/200814_lam_cover.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - Phil 林奕匡</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/pNdhPiqPzT0">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/08/%E5%9D%A4%E5%93%A5.png"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - KwanGor 吳業坤</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=5ihrzFvOy38">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/03/yt-tn-serene.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - Serene 林宣妤</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/e-c_qRuvWTA">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2021/01/Tiff-poon.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - 媽媽 Tiff Poon</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 1">
          <div class="media-buju">
            <div class="media-box" v-for="(item_1_2,index_1_2) in mediaBujuLists_1_2" :key="index_1_2">
              <a :href="item_1_2.link">
                <img
                  :src="item_1_2.img"
                  alt=""
                />
                <div class="meida" v-html="item_1_2.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://youtu.be/gRKFwHXBAzc">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2023/02/7916734434_95270280400_1675237466957_Lok-Hei_Thumnail-16-9-copy-1.jpg"
                  alt=""
                />
                <div class="meida">
                  <span
                    >微笑矯視 - 尹焯熙 Wan Cheuk Hei<br />
                    黃啟樂 Wong Kai Lok</span
                  >
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/Ce1hzfbtgjY">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2022/05/YauYau.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Ka Yan Yau 游嘉欣</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a
                href="https://www.instagram.com/tv/CD_g-Iznf52/?igshid=1b3emr7u28dvt"
              >
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2020/12/coffee-lam-smile.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Coffee 林芊妤 (Instagram Live Video)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/beGIk4tkS7Y">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/09/youtube_1mins-.00_00_11_26.Still003-1.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Ada仔 姜咏鑫</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/JD5GGTg01to">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2022/07/Thumnail_%E8%83%A1%E9%B4%BB%E9%88%9E-Hubert-Wu.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Hubert Wu 胡鴻鈞</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/1WR18ptmCuQ">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/07/Aka-Chio-%E8%B6%99%E6%85%A7%E7%8F%8A%E9%83%BD%E5%81%9A%E5%92%97SMILE%E5%95%A6.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>Aka Chio 趙慧珊 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/o2n03FVGWbk">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/10/Dingtalk_20211019151412.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Chiu Fung 梁釗峰</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/HOvmIsa3uOw">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/05/%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96-Judy-Mok-%E8%8E%AB%E7%A9%8E%E5%BD%A4.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Judy Mok 莫穎彤</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/87SuKdfCmgg">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/05/%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96-%E4%BD%95%E5%BB%BA%E6%9B%A6-SoulJase-C-AllStar.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - 何建曦 SoulJase - C AllStar</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/yEE6AAwRjgI">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/05/KellyNg%E4%BC%8D%E6%A8%82%E6%80%A1-SMILE%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96%E7%9C%9F%E5%AF%A6%E5%80%8B%E6%A1%88%E5%88%86%E4%BA%AB.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Kelly Ng 伍樂怡</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=7JSSZCH-Xko">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/08/200730_charlotte_thum.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Charlotte 張沛樂</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/oHDOFYMEUsk">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/11/Dingtalk_20211125181016.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Shirley 陳欣妍</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=2WtjNlY9BtE">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2020/06/cath1-min.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Cath 黃妍</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/TjvTvvyp3x8">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/01/Dingtalk_20220127114435.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Natalie方敏婷</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=L5GFWM7Fxqs">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/07/Fanial_0714-01-01.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Dominic 何浩文</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/A23Jmg0WluY">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/10/Dingtalk_20211012115456.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Donald 當奴</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/RCuU_yNGy-0">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/12/Dingtalk_20211220151659.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Alvin Ng 伍富橋</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/AJz2E7jEYqY">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/11/Dingtalk_20211112162119.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Brian黃千庭</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/ytBrLblaxPg">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/02/Daniel-%E5%91%A8%E5%BF%97%E5%BA%B7.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Daniel 周志康</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/32cdKPb_fzs">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/01/Jacky.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Jacky 唐浩然</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/YA5quObXXLA">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/12/Mandy_video-cover.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Mandy 文荻</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/NF_S1R9DhNk">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/09/Scarlett.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Scarlett Cheng 莎拉</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/bAspzgClOLg">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/10/Mula-scaled.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Mula</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/PIEeDy7vgfU">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/12/Dickson-smile.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Dickson</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 2">
           精彩內容即將更新，密切留意！
        </div>
        <div v-else>
          <div class="media-buju">
            <div class="media-box" v-for="(item_1_4,index_1_4) in mediaBujuLists_1_4" :key="index_1_4">
              <a :href="item_1_4.link">
                <img
                  :src="item_1_4.img"
                  alt=""
                />
                <div class="meida" v-html="item_1_4.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://youtu.be/0-mlyxrBaus">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2020/07/20200706_Animation_ICLHD_V2.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>真正隱形嘅隱形眼鏡 - ICL🤩</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=x06KnZb4CqU">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/06/ICL2-min.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>ICL植入式隱形眼鏡</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/JGWCs30V-Ow">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/02/%E5%AA%BD%E5%AA%BD%E9%83%BD%E8%A6%81%E7%9F%AF%E8%A6%96-1.png"
                  alt=""
                />
                <div class="meida">
                  <span>媽媽都要矯視😲？</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/vkChPa7aMg8">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/02/mom-crying-YT-TN_v3-01.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>媽媽🤰不能掉眼淚🤭😬😳？！</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/Girz4x96wLo">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/11/Smile_Green.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>SMILE後可以戴有色隱形眼鏡嗎💡</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/fChMJey30r0">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/11/Smile_Purple.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>SMILE後幾時先可以化眼妝💡</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="tables" v-else>
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
        <div v-if="currentTitleIndex === 0">
          <div class="media-buju">
            <div class="media-box" v-for="(item_2_1,index_2_1) in mediaBujuLists_2_1" :key="index_2_1">
              <a :href="item_2_1.link">
                <img
                  :src="item_2_1.img"
                  alt=""
                />
                <div class="meida" v-html="item_2_1.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://www.youtube.com/watch?v=1xDkEkhtDCY"></a>
              <img
                src="	https://smile.hkcmereye.com/wp-content/uploads/2020/12/Phil-Lam-ICL.png"
                alt=""
              />
              <div class="meida">
                <span>植入式隱形眼鏡 - Phil 林奕匡(完整版)</span>
              </div>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/CEbbKFeFdnc">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2021/09/kwan-gor-cover-minjp-scaled.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - KwanGor 吳業坤(完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=iz-9KBthuFw">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2021/04/Serene-Lim-%E6%9E%97%E5%AE%A3%E5%A6%A4.png"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - Serene 林宣妤(完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/rs4ErPXrs94">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2021/02/tiff.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>植入式隱形眼鏡 - 媽媽 Tiff Poon</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 1">
          <div class="media-buju">
            <div class="media-box" v-for="(item_2_2,index_2_2) in mediaBujuLists_2_2" :key="index_2_2">
              <a :href="item_2_2.link">
                <img
                  :src="item_2_2.img"
                  alt=""
                />
                <div class="meida" v-html="item_2_2.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://youtu.be/qBsPhkIaVfo"></a>
              <img
                src="	https://smile.hkcmereye.com/wp-content/uploads/2022/05/Thumbnail_1.jpg"
                alt=""
              />
              <div class="meida">
                <span>微笑矯視 - Ka Yan Yau 游嘉欣 (完整版)</span>
              </div>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/JCzzO4Y0kko">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/09/youtube_3mins.00_00_15_11.Still001.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Ada仔 姜咏鑫 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/1WR18ptmCuQ">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2022/07/Aka-Chio%E8%B6%99%E6%85%A7%E7%8F%8A%E9%83%BD%E5%81%9A%E5%92%97SMILE%E5%95%A6.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>Aka Chio 趙慧珊 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/KslMZ0PY2fg">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2022/05/%E5%BE%AE%E7%AC%91%E7%9F%AF%E8%A6%96-Judy-Mok-%E8%8E%AB%E7%A9%8E%E5%BD%A4-%E5%AE%8C%E6%95%B4%E7%89%88-%E5%80%8B%E6%A1%88%E5%88%86%E4%BA%AB.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Judy Mok 莫穎彤 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/c6dwJ1Cbgxw">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2022/05/Thumbnail_1-resizes.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Kelly Ng 伍樂怡 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/nrsLktnnW_I">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/11/Dingtalk_20211104151439-min.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Kathy Ngai 阿慈 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=dyzeGWTk8Dk">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/08/200803_charlotte_thum2.png
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Charlotte 張沛樂 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/GKMUwvcUSJ0">
                <img
                  src="			https://smile.hkcmereye.com/wp-content/uploads/2021/12/Dingtalk_20211201180405.jpg

"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Shirley 陳欣妍 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=g0sWFw1YAs0">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2020/06/cath2-min.jpg

"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Cath 黃妍 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/nagwW6CP1iU">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2022/05/NatalieFong-SMILE%E5%80%8B%E6%A1%88%E5%88%86%E4%BA%AB.jpg

"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Natalie方敏婷 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=9_phtLHZmWQ">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/09/dom-vdo-3-mins-cover-03.jpg  
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Dominic 何浩文(完整版​)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/XSOzqZD6N8Q">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/10/Dingtalk_20211012115516.jpg

"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Donald 當奴 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/tJ3MHvKagMk">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/12/Dingtalk_20211220151659.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Alvin Ng 伍富橋 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/7T_ATu8-Vn8">
                <img
                  src="		https://smile.hkcmereye.com/wp-content/uploads/2021/11/Dingtalk_20211119100848.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Brian黃千庭 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/Udnsv_lOr74">
                <img
                  src="			https://smile.hkcmereye.com/wp-content/uploads/2021/03/TN.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Daniel 周志康 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/HfA2NBsMVWQ">
                <img
                  src="			https://smile.hkcmereye.com/wp-content/uploads/2021/02/Jacky-T.jpg
"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Jacky 唐浩然 (完整版)</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/05NSqdF7nz0">
                <img
                  src="			https://smile.hkcmereye.com/wp-content/uploads/2020/12/Mandy_Thumbnail_Full.jpg

"
                  alt=""
                />
                <div class="meida">
                  <span>微笑矯視 - Mandy 文荻 (完整版)</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div v-else-if="currentTitleIndex === 2">
           精彩內容即將更新，密切留意！
        </div>
        <div v-else>
          <div class="media-buju">
            <div class="media-box" v-for="(item_2_4,index_2_4) in mediaBujuLists_2_4" :key="index_2_4">
              <a :href="item_2_4.link">
                <img
                  :src="item_2_4.img"
                  alt=""
                />
                <div class="meida" v-html="item_2_4.meida">
                </div>
              </a>
            </div>
            <!-- <div class="media-box">
              <a href="https://youtu.be/0-mlyxrBaus">
                <img
                  src="https://smile.hkcmereye.com/wp-content/uploads/2020/07/20200706_Animation_ICLHD_V2.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>真正隱形嘅隱形眼鏡 - ICL🤩</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://www.youtube.com/watch?v=x06KnZb4CqU">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/06/ICL2-min.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>ICL植入式隱形眼鏡</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/JGWCs30V-Ow">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/02/%E5%AA%BD%E5%AA%BD%E9%83%BD%E8%A6%81%E7%9F%AF%E8%A6%96-1.png"
                  alt=""
                />
                <div class="meida">
                  <span>媽媽都要矯視😲？</span>
                </div>
              </a>
            </div>

            <div class="media-box">
              <a href="https://youtu.be/vkChPa7aMg8">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2021/02/mom-crying-YT-TN_v3-01.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>媽媽🤰不能掉眼淚🤭😬😳？！</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/Girz4x96wLo">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/11/Smile_Green.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>SMILE後可以戴有色隱形眼鏡嗎💡</span>
                </div>
              </a>
            </div>
            <div class="media-box">
              <a href="https://youtu.be/fChMJey30r0">
                <img
                  src="	https://smile.hkcmereye.com/wp-content/uploads/2020/11/Smile_Purple.jpg"
                  alt=""
                />
                <div class="meida">
                  <span>SMILE後幾時先可以化眼妝💡</span>
                </div>
              </a>
            </div> -->
          </div>
          <a href="https://www.youtube.com/@cmersmileeyecenter6303">
            <div class="flex justify-center more-btn">
              <span>更多影片</span>
            </div>
          </a>
          <div class="flex justify-center my-10">
            <a href="#" class="mbShow">
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
                    <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
                    <span>6061 0511</span>
                  </div>
                </div>
              </button>
            </a>
          </div>
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
          id: 1,
          title: this.$t('ophthalmicInfo.shareVideos.tabList.title1'),
        },
        {
          id: 2,
          title: this.$t('ophthalmicInfo.shareVideos.tabList.title2'),
        },
      ],
      currentTitleIndex: 0,
      title: [
        ...this.$t('ophthalmicInfo.shareVideos.tabControlItem.title')
      ],
      currentIndex: 0, // 当前点击的tab的索引
      mediaBujuLists_1_1: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_1_1')
      ],
      mediaBujuLists_1_2: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_1_2')
      ],
      mediaBujuLists_1_4: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_1_4')
      ],
      mediaBujuLists_2_1: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_2_1')
      ],
      mediaBujuLists_2_2: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_2_2')
      ],
      mediaBujuLists_2_4: [
        ...this.$t('ophthalmicInfo.shareVideos.mediaBujuLists_2_4')
      ]
    };
  },
  created() {},
  methods: {
    titelclick(index) {
      this.currentTitleIndex = index;
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
      // console.log(index);
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;
}

.tables {
  margin-top: 47px;
}
.tab-control .active {
  background-color: #ffffff;
  span {
    font-family: "Noto Sans HK";
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
      font-family: "Noto Sans HK";
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
.tab-control .tab-control-item:nth-child(4)::after {
  height: 0;
}

@media screen and (min-width: 768px) {
  .tab-control-item {
    padding: 0 30px;
    span {
      font-family: "Noto Sans HK";
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
  .tab-control-item::after {
    content: "";
    margin-left: 34px;
    padding-left: 0;
    border-left: 1px solid #000;
    height: 17px;
    display: inline-block;
    vertical-align: middle;
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
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
    width: 1200px;
    .media-box {
      padding: 0px 11px;
      margin-bottom: 46px;
    }
    .meida {
      display: flex;
      justify-content: center;
      margin-top: 16px;
      /deep/ span {
        font-family: "Noto Sans HK";
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
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
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
      font-family: "Noto Sans HK";
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
  .tab-control .tab-control-item {
    border-bottom: 1px solid #666;
    width: 181px;
  }
  .tab-control .tab-control-item span {
    font-family: "Noto Sans HK";
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
