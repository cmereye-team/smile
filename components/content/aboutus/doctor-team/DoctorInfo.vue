<template>
  <div>
    <div class="bac-diqiu pcShow">
      <img src="https://static.cmereye.com/imgs/2022/12/9c96ba7bca90639a.png" alt="" />
    </div>
    <div class="page_container">
      <div class="flex justify-center doctor">
        <h2>{{ $t('aboutUs.medicalTeam.DoctorInfo.h2') }}</h2>
      </div>

      <ul class="doctor_list static flex flex-col md:justify-around items-center md:flex-row">
        <li v-for="(doctorItem, index) in doctorList" :key="index" class="team-li">
          <div class="team-box">
            <div class="img_con" :class="$i18n.locale == 'en' ? 'img_con img_con_en' : 'img_con'">
              <img :src="doctorItem.src" alt="" />
              <div class="flex items-center">
                <h3 class="text-white font-black">
                  {{ doctorItem.des }}&nbsp;<span :style="{ display: $i18n.locale == 'en' ? 'none' : 'inline' }">{{
                    $t('aboutUs.medicalTeam.DoctorInfo.span') }}</span>
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
                <div class="team-description" v-for="infoitem in doctorItem.doctorInfo" :key="infoitem">
                  <p>{{ infoitem.info }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bac-foot-diqiu pcShow">
      <img src="https://static.cmereye.com/imgs/2022/12/7170402a61209e2d.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doctorList: [
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor01.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor1'),
          doctorName: "李佑榮醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo1') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo4') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo5') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo6') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo7') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor02.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor2'),
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo1') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
          ],
          doctorName: "黎浩樺醫生",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor03.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor3'),
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
          ],
          doctorName: "李德倫醫生",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor04.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor4'),
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo9') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
          ],
          doctorName: "黃禮文醫生",
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor05.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor5'),
          doctorName: "張瀞之醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo17') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo3') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor06.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor6'),
          doctorName: "林寶生醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo1') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor07.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor7'),
          doctorName: "林己明醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor08.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor8'),
          doctorName: "范愷醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo17') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo18') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo2') },
          ],
        },
        // {
        //   src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor09.jpg",
        //   des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor9'),
        //   doctorName: "李琬微醫生",
        //   doctorInfo: [
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo17') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo10') },
        //   ],
        // },
        // {
        //   src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor10.jpg",
        //   des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor10'),
        //   doctorName: "邱俊源醫生",
        //   doctorInfo: [
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo1') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
        //     { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
        //   ],
        // },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor11.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor11'),
          doctorName: "陳偉樂醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo11') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor12.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor12'),
          doctorName: "梁苑珊醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo12') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo13') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor13.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor13'),
          doctorName: "鄒樞韻醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/doctor15.jpg",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor15'),
          doctorName: "尹浩柟醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
          ],
        },
        {
          src: "https://static.cmereye.com/imgs/2024/05/4442519761e80030.png",
          des: this.$t('aboutUs.medicalTeam.DoctorInfo.doctor14'),
          doctorName: "鄒樂韻醫生",
          doctorInfo: [
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo16') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo8') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo14') },
            { info: this.$t('aboutUs.medicalTeam.DoctorInfo.doctorInfo15') },
          ],
        },
      ],
    };
  },
  created() { },
  methods: {},
};
</script>
<style lang="scss" scoped>
.img_con {
  h3 {
    background: linear-gradient(#4570b6, #81dbec);
    z-index: 90;
  }
}

.doctor {
  padding-top: 2vw;
}

h2 {
  color: #4570b6;
  font-weight: 500;
  font-size: 25px;
}

// pc
@media (min-width: 768px) {
  p {
    font-size: 14px !important;
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
    height: calc(100% - 20px);
    width: 100%;

    .overlay {
      width: 100%;
      text-align: center;
      z-index: 90;
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
      white-space: normal;
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
  }

  .img_con {
    margin-bottom: 148px;

    h3 {
      padding: 0.8vw 0.5vw;
      margin-top: -1vw;
      margin-left: -1vw;
      font-family: var(--font_family);
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

  .img_con_en {
    h3 {
      font-size: 16px;
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
    height: calc(100% - 20px);

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
  }

  .img_con {
    margin-bottom: 50px;

    h3 {
      padding: 3vw 3vw;
      margin-top: -6vw;
      margin-left: -6vw;
      font-family: var(--font_family);
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

  .img_con_en {
    h3 {
      font-size: 12px;
      max-width: 216px;
    }
  }
}
</style>
