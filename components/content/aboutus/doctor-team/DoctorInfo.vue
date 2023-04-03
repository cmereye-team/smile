<template>
  <div>
    <div class="bac-diqiu pcShow">
      <img
        src="https://static.cmereye.com/imgs/2022/12/9c96ba7bca90639a.png"
        alt=""
      />
    </div>
    <div class="page_container">
      <div class="flex justify-center doctor">
        <h2>眼科醫療團隊</h2>
      </div>

      <ul
        class="doctor_list static flex flex-col md:justify-around items-center md:flex-row"
      >
        <li
          v-for="(doctorItem, index) in doctorList"
          :key="index"
          class="team-li"
        >
          <div class="team-box">
            <div class="img_con">
              <img :src="doctorItem.src" alt="" />
              <div class="flex items-center">
                <h3 class="text-white font-black">
                  {{ doctorItem.des }}&nbsp;<span>醫生</span>
                </h3>
              </div>
            </div>
            <div class="team-info">
              <div class="overlay">
                <!-- <div class="team-member">
                  <h3>
                    <a class="team-name"> {{ doctorItem.doctorName }}</a>
                  </h3>
                </div> -->
                <div
                  class="team-description"
                  v-for="infoitem in doctorItem.doctorInfo"
                >
                  <p>{{ infoitem.info }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bac-foot-diqiu pcShow">
      <img
        src="https://static.cmereye.com/imgs/2022/12/7170402a61209e2d.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doctorList: [
        {
          src: require("@/asset/image/about-us/doctor-team/doctor01.jpg"),
          des: "李佑榮",
          doctorName: "李佑榮醫生",
          doctorInfo: [
            { info: "香港中文大學內外全科醫學士" },
            { info: "香港醫學專科學院院士(眼科)" },
            { info: "香港眼科醫學院院士" },
            { info: "英國愛丁堡皇家外科醫學院院士" },
            { info: "香港外科醫學院院士" },
            { info: "香港中文大學流行病學與生物統計學理學碩士" },
            { info: "香港中文大學流行病學與生物統計學士後文憑" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor02.jpg"),
          des: "黎浩樺 ",
          doctorInfo: [
            { info: "香港中文大學內外全科醫學士" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
          ],
          doctorName: "黎浩樺醫生",
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor03.jpg"),
          des: "李德倫",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
          ],
          doctorName: "李德倫醫生",
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor04.jpg"),
          des: "黃禮文",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院員(眼科)" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
          ],
          doctorName: "黃禮文醫生",
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor05.jpg"),
          des: "張瀞之 ",
          doctorName: "張瀞之醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
            { info: "英國愛丁堡皇家外科醫學院院士(眼科)" },
            { info: "英國格拉斯哥皇家外科醫學院院士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor06.jpg"),
          des: "林寶生",
          doctorName: "林寶生醫生",
          doctorInfo: [
            { info: "香港中文大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor07.jpg"),
          des: "林己明",
          doctorName: "林己明醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港醫學專科學院院士（眼科）" },
            { info: "香港眼科醫學院院士" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor08.jpg"),
          des: "范愷 ",
          doctorName: "范愷醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "香港醫學專科學院院士(眼科)" },
            { info: "香港眼科醫學院院士" },
            { info: "英國愛丁堡皇家外科醫學院院士(眼科)" },
            { info: "英國皇家眼科學院院士" },
            { info: "新加坡國立大學醫學碩士(眼科)" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor09.jpg"),
          des: "李琬微",
          doctorName: "李琬微醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院士 (眼科)" },
            { info: "香港醫學專科學院院士 (眼科)" },
            { info: "香港眼科醫學院院士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港大學公共衛生科碩士" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor10.jpg"),
          des: "邱俊源",
          doctorName: "邱俊源醫生",
          doctorInfo: [
            { info: "香港中文大學內外全科醫學士" },
            { info: "香港眼科醫學院院士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港醫學專科學院院士(眼科)" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor11.jpg"),
          des: "陳偉樂",
          doctorName: "陳偉樂醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士（眼科）" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港中文大學醫療管理學理學碩士" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor12.jpg"),
          des: "梁苑珊",
          doctorName: "梁苑珊醫生",
          doctorInfo: [
            { info: "澳洲雪梨大學內外全科醫學士" },
            { info: "星加坡國立大學醫學眼科碩士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港眼科醫學院院士" },
            { info: "香港醫學專科學院院士(眼科)" },
          ],
        },
        {
          src: require("@/asset/image/about-us/doctor-team/doctor13.jpg"),
          des: "鄒樞韻",
          doctorName: "鄒樞韻醫生",
          doctorInfo: [
            { info: "香港大學內外全科醫學士" },
            { info: "英國愛丁堡皇家外科醫學院院員" },
            { info: "香港醫學專科學院院士（眼科)" },
            { info: "香港眼科醫學院院士" },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.img_con {
  h3 {
    background: linear-gradient(#4570b6, #81dbec);
    z-index: 9999;
  }
}
.doctor {
  padding-top: 2vw;
}

// pc
@media (min-width: 768px) {
  p {
    font-size: 16px !important;
    white-space: pre;
  }
  .doctor_list {
    padding: 0 30px;
  }
  .team-li:hover .team-box::before {
    width: 0px !important;
  }
  .team-box:hover .team-info {
    opacity: 1;
  }
  .team-box {
    position: relative;
  }
  .team-box::before {
    content: "";
    width: 54px;
    height: 44px;
    background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: -17px;
    right: 1px;
  }
  .team-info {
    position: absolute;
    opacity: 0;
    top: 0;
    bottom: 180px;
    display: block;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    transform-origin: top;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    text-align: center;
    -webkit-box-pack: center;

    width: 100%;
    .overlay {
      width: auto;
      text-align: center;
      z-index: 999;
      box-shadow: -2px 2px 15px rgb(194, 226, 255);
      background: #fff;
      height: 100%;
      display: flex;
      /* padding: 18px; */
      /* height: auto; */
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 0 15px;
    }
    .team-name {
      font-size: 20px;
      color: #ffffff;
      font-weight: 600;
      display: block;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .team-description p {
      font-size: 12px;
      font-family: "Open Sans";
      color: #4570b6;
      font-weight: 500;
      line-height: 24px;
    }
    .overlay::before {
      content: "";
      width: 44px;
      height: 34px;
      background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
      background-size: 90% 90%;
      margin: 20px auto;
      display: block;
      color: grey;
    }
    .overlay::after {
      content: "";
      width: 44px;
      height: 34px;
      background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
      background-size: 90% 90%;
      margin: 20px auto;
      display: block;
      color: grey;
    }
  }
  .bac-diqiu {
    position: absolute;
    width: 58vw;
    display: flex;
    z-index: -1;
  }
  .bac-foot-diqiu {
    right: 0;
    z-index: -1;
    position: absolute;
    margin-top: -25vw;
    img {
      width: 20vw;
    }
  }

  /* 鼠标hover,显示遮罩,设置过渡时间 */
  .doctor_list {
    margin: 0 auto;
    text-align: center;
    flex-wrap: wrap;
    img {
    }
  }
  .img_con {
    padding-bottom: 148px;
    h3 {
      padding: 0.8vw 0.5vw;
      margin-top: -1vw;
      margin-left: -1vw;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 20px;
      /* or 80% */

      letter-spacing: 0.1em;

      color: #ffffff;
      span {
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 768px) {
  .doctor {
    padding-top: 10vw;
  }
  .doctor_list {
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    flex-wrap: wrap;
    img {
      width: 62vw;
    }
  }
  .team-li:hover .team-box::before {
    width: 0px !important;
  }
  .team-box:hover .team-info {
    opacity: 1;
  }
  .team-box {
    position: relative;
  }
  .team-box::before {
    content: "";
    width: 54px;
    height: 44px;
    background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: -17px;
    right: 1px;
  }
  .team-info {
    position: absolute;
    opacity: 0;
    top: 0;
    bottom: 173px;
    display: block;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    transform-origin: top;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    text-align: center;
    -webkit-box-pack: center;
    padding: 0 27px;
    width: 100%;
    .overlay {
      width: 100%;
      text-align: center;
    }
    .team-name {
      font-size: 20px;
      color: #ffffff;
      font-weight: 600;
      display: block;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .team-description p {
      font-size: 12px;
      font-family: "Open Sans";
      color: #4570b6;
      font-weight: 500;
      line-height: 24px;
    }
    .overlay::before {
      content: "";
      width: 44px;
      height: 34px;
      background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
      background-size: 90% 90%;
      margin: 20px auto;
      display: block;
      color: grey;
    }
    .overlay::after {
      content: "";
      width: 44px;
      height: 34px;
      background-image: url(https://static.cmereye.com/imgs/2023/01/f5088f95fc1b32e4.png);
      background-size: 90% 90%;
      margin: 20px auto;
      display: block;
      color: grey;
    }
  }
  .bac-diqiu {
    position: absolute;
    width: 58vw;
    display: flex;
    z-index: -1;
  }
  .bac-foot-diqiu {
    right: 0;
    z-index: -1;
    position: absolute;
    margin-top: -25vw;
    img {
      width: 20vw;
    }
  }

  /* 鼠标hover,显示遮罩,设置过渡时间 */
  .doctor_list {
    margin: 0 auto;
    text-align: center;
    flex-wrap: wrap;
    img {
    }
  }

  // .img_con {
  //   padding-bottom: 13vw;
  //   h3 {
  //     padding: 0.2vw 0.5vw;
  //     font-size: 4.8vw;
  //     margin-top: -3vw;
  //     margin-left: -2vw;
  //     letter-spacing: 0.1em;
  //     span {
  //       font-size: 1.4vw;
  //     }
  //   }
  // }
  .img_con {
    padding-bottom: 50px;
    h3 {
      padding: 3vw 3vw;
      margin-top: -1vw;
      margin-left: -1vw;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 20px;
      /* or 80% */

      letter-spacing: 0.1em;

      color: #ffffff;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
