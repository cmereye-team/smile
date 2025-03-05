<template>
  <div class="doctor-team">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>{{ $t("doctor_team.bannnertitle") }}</p>
          <p>Doctor team</p>
        </div>
      </template>
    </Banner>
    <div class="doctor-team-box">
      <div class="doctor-team-content">
        <div>
          <img
            src="https://statichk.cmermedical.com/smile/our-medical-team/1395086f2ba74e80.webp"
            alt="林順潮醫生"
          />
        </div>
        <div>
          <div>
            <p>{{ $t("doctor_team.intro") }}</p>
            <p>{{ $t("doctor_team.doctor1.name") }}</p>
          </div>
          <div>
            <span
              >{{ $t("doctor_team.doctor1.title1") }}<br class="pcShow" />{{
                $t("doctor_team.doctor1.title2")
              }}</span
            >
            <span>{{ $t("doctor_team.doctor1.title3") }}</span>
            <span>{{ $t("doctor_team.doctor1.title4") }}</span>
            <span>{{ $t("doctor_team.doctor1.title5") }}</span>
          </div>
          <div>
            <span>{{ $t("doctor_team.doctor1.intro1") }}</span>
            <span>{{ $t("doctor_team.doctor1.intro2") }}</span>
            <span>{{ $t("doctor_team.doctor1.intro3") }}</span>
            <span>{{ $t("doctor_team.doctor1.intro4") }}</span>
            <span>{{ $t("doctor_team.doctor1.intro5") }}</span>
            <span>{{ $t("doctor_team.doctor1.intro6") }}</span>
          </div>
        </div>
      </div>
      <div class="doctor-team-member">
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="56"
              viewBox="0 0 47 56"
              fill="none"
            >
              <ellipse
                cx="25.5677"
                cy="2.71589"
                rx="2.61364"
                ry="2.44318"
                fill="#A6E1D6"
              />
              <ellipse
                cx="10.932"
                cy="2.71589"
                rx="2.61364"
                ry="2.44318"
                fill="#A6E1D6"
              />
              <path
                d="M9.87684 2.39702C6.21976 2.63988 -0.606778 4.72844 1.34366 11.1398C3.78171 19.1541 12.3149 31.1755 18.0037 31.5397C23.6924 31.904 35.07 14.4184 35.4763 10.047C35.8827 5.67558 31.0066 1.30417 26.1305 2.39702"
                stroke="#A6E1D6"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M17.7412 31.4588C17.7413 39.3045 16.7662 55.2947 30.7408 54.9958C44.7154 54.6969 42.9278 37.4365 42.5216 29.5908"
                stroke="#4570B6"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M46.0004 26.3333C46.0004 27.8775 44.6404 29.2424 42.8185 29.2424C40.9967 29.2424 39.6367 27.8775 39.6367 26.3333C39.6367 24.7891 40.9967 23.4242 42.8185 23.4242C44.6404 23.4242 46.0004 24.7891 46.0004 26.3333Z"
                stroke="#4570B6"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            <span>眼科</span><span>{{ $t("doctor_team.title2") }}</span>
          </div>
        </div>
        <div>
          <div v-for="doctor in doctorList" :key="doctor.id">
            <div><img :src="doctor.img" :alt="doctor.name" /></div>
            <div>
              <div>
                {{ doctor.name }}<span>{{ $t("doctor_team.doctor") }}</span>
              </div>
              <div>
                <span v-for="(item, index) in doctor.title" :key="index">{{
                  item
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
  },
  data() {
    return {
      doctorList: [
        {
          id: 1,
          name: this.$t("doctor_team.doctor2.name"),
          img: "https://statichk.cmermedical.com/smile/our-medical-team/e4fe994560f1f0cb.webp",
          title: [
            this.$t("doctor_team.doctor2.intro1"),
            this.$t("doctor_team.doctor2.intro2"),
            this.$t("doctor_team.doctor2.intro3"),
            this.$t("doctor_team.doctor2.intro4"),
            this.$t("doctor_team.doctor2.intro5"),
            this.$t("doctor_team.doctor2.intro6"),
            this.$t("doctor_team.doctor2.intro7"),
          ],
        },
        {
          id: 8,
          name: this.$t("doctor_team.doctor3.name"),
          img: "https://static.cmereye.com/imgs/2024/04/97a0a764a2e54197.png",
          title: [
            this.$t("doctor_team.doctor3.intro1"),
            this.$t("doctor_team.doctor3.intro2"),
            this.$t("doctor_team.doctor3.intro3"),
            this.$t("doctor_team.doctor3.intro4"),
            this.$t("doctor_team.doctor3.intro5"),
            this.$t("doctor_team.doctor3.intro6"),
          ],
        },
        {
          id: 2,
          name: this.$t("doctor_team.doctor4.name"),
          img: "https://static.cmereye.com/imgs/2024/04/4fa9ad28827023df.png",
          title: [
            this.$t("doctor_team.doctor4.intro1"),
            this.$t("doctor_team.doctor4.intro2"),
            this.$t("doctor_team.doctor4.intro3"),
            this.$t("doctor_team.doctor4.intro4"),
          ],
        },
        {
          id: 3,
          name: this.$t("doctor_team.doctor5.name"),
          img: "https://static.cmereye.com/imgs/2024/04/35a8ebff87489352.png",
          title: [
            this.$t("doctor_team.doctor5.intro1"),
            this.$t("doctor_team.doctor5.intro2"),
            this.$t("doctor_team.doctor5.intro3"),
            this.$t("doctor_team.doctor5.intro4"),
          ],
        },
        {
          id: 4,
          name: this.$t("doctor_team.doctor6.name"),
          img: "https://static.cmereye.com/imgs/2024/04/23dd6d5e7647a6b5.png",
          title: [
            this.$t("doctor_team.doctor6.intro1"),
            this.$t("doctor_team.doctor6.intro2"),
            this.$t("doctor_team.doctor6.intro3"),
            this.$t("doctor_team.doctor6.intro4"),
          ],
        },
        {
          id: 5,
          name: this.$t("doctor_team.doctor7.name"),
          img: "https://static.cmereye.com/imgs/2024/04/5dea1f2a9eaa115d.png",
          title: [
            this.$t("doctor_team.doctor7.intro1"),
            this.$t("doctor_team.doctor7.intro2"),
            this.$t("doctor_team.doctor7.intro3"),
            this.$t("doctor_team.doctor7.intro4"),
            this.$t("doctor_team.doctor7.intro5"),
            this.$t("doctor_team.doctor7.intro6"),
          ],
        },
        {
          id: 6,
          name: this.$t("doctor_team.doctor8.name"),
          img: "https://static.cmereye.com/imgs/2024/04/d2d8ef48f7e7d66f.png",
          title: [
            this.$t("doctor_team.doctor8.intro1"),
            this.$t("doctor_team.doctor8.intro2"),
            this.$t("doctor_team.doctor8.intro3"),
            this.$t("doctor_team.doctor8.intro4"),
          ],
        },
        {
          id: 7,
          name: this.$t("doctor_team.doctor9.name"),
          img: "https://static.cmereye.com/imgs/2024/04/12f6f365602dfa65.png",
          title: [
            this.$t("doctor_team.doctor9.intro1"),
            this.$t("doctor_team.doctor9.intro2"),
            this.$t("doctor_team.doctor9.intro3"),
            this.$t("doctor_team.doctor9.intro4"),
          ],
        },

        {
          id: 9,
          name: this.$t("doctor_team.doctor10.name"),
          img: "https://static.cmereye.com/imgs/2024/04/49af412bf2fd0d24.png",
          title: [
            this.$t("doctor_team.doctor10.intro1"),
            this.$t("doctor_team.doctor10.intro2"),
            this.$t("doctor_team.doctor10.intro3"),
            this.$t("doctor_team.doctor10.intro4"),
            this.$t("doctor_team.doctor10.intro5"),
          ],
        },
        {
          id: 10,
          name: this.$t("doctor_team.doctor11.name"),
          img: "https://static.cmereye.com/imgs/2024/04/a7d90bf031d2130e.png",
          title: [
            this.$t("doctor_team.doctor11.intro1"),
            this.$t("doctor_team.doctor11.intro2"),
            this.$t("doctor_team.doctor11.intro3"),
            this.$t("doctor_team.doctor11.intro4"),
            this.$t("doctor_team.doctor11.intro5"),
          ],
        },
        {
          id: 11,
          name: this.$t("doctor_team.doctor12.name"),
          img: "https://static.cmereye.com/imgs/2024/04/3b91d69903c22a94.png",
          title: [
            this.$t("doctor_team.doctor12.intro1"),
            this.$t("doctor_team.doctor12.intro2"),
            this.$t("doctor_team.doctor12.intro3"),
            this.$t("doctor_team.doctor12.intro4"),
          ],
        },
        {
          id: 12,
          name: this.$t("doctor_team.doctor13.name"),
          img: "https://static.cmereye.com/imgs/2024/05/5e65910e0c55b6a4.png",
          title: [
            this.$t("doctor_team.doctor13.intro1"),
            this.$t("doctor_team.doctor13.intro2"),
            this.$t("doctor_team.doctor13.intro3"),
            this.$t("doctor_team.doctor13.intro4"),
            this.$t("doctor_team.doctor13.intro5"),
            this.$t("doctor_team.doctor13.intro6"),
          ],
        },
        {
          id: 13,
          name: this.$t("doctor_team.doctor14.name"),
          img: "https://static.cmereye.com/imgs/2024/05/3f1a1dea7d3a56a9.png",
          title: [
            this.$t("doctor_team.doctor14.intro1"),
            this.$t("doctor_team.doctor14.intro2"),
            this.$t("doctor_team.doctor14.intro3"),
            this.$t("doctor_team.doctor14.intro4"),
          ],
        },
      ],
      canonicalHref: "https://smile.hkcmereye.com/our-medical-team/",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/our-medical-team/",
      browserTitle: "醫生團隊 - 希瑪微笑矯視中心",
      browserTitleCn: "医生团队 - 希玛微笑矫视中心",
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
          content: "醫生團隊 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/our-medical-team/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/our-medical-team/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/our-medical-team/",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
    display: flex;
    justify-content: center;
  }
  .banner-img {
    background: url("https://statichk.cmermedical.com/smile/323517741e434c1d.webp")
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
  .doctor-team {
    overflow: hidden;
  }
  .doctor-team-box {
    margin-bottom: 125px;
  }
  .doctor-team-content {
    max-width: 1270px;
    margin: 85px auto 0;
    padding-left: 80px;
    display: flex;
    justify-content: center;
    & > div:nth-child(2) {
      margin-left: 65px;
      max-width: 700px;
      & > div:nth-child(1) {
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 133.333% */
        letter-spacing: 9px;
        & > p:nth-child(2) {
          line-height: 50px;
        }
      }
      & > div:nth-child(2) {
        margin: 40px 0;
        color: #6d6e71;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 35px; /* 175% */
        letter-spacing: 6px;
        display: flex;
        flex-direction: column;
      }
      & > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        color: #4570b6;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px; /* 175% */
        letter-spacing: 6px;
        margin-left: 10px;
        & > span {
          position: relative;
        }
        & > span::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4570b6;
          position: absolute;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
        }
      }
    }
  }
  .doctor-team-member {
    background: url("https://static.cmereye.com/imgs/2024/04/7f498c9a45d803a7.png")
      no-repeat;
    width: 100vw;
    background-size: 100% 100%;
    background-position: center;
    margin: 200px auto 0;
    padding: 225px 0 55px;
    position: relative;
    & > div:nth-child(1) {
      position: absolute;
      top: -160px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 307px;
      height: 307px;
      & > div:nth-child(2) {
        margin-top: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px; /* 166.667% */
        letter-spacing: 7.5px;
      }
    }
    & > div:nth-child(2) {
      max-width: 1520px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 115px 0;
      & > div {
        display: flex;
        & > div:nth-child(1) {
          position: relative;
          & > img {
            position: relative;
            z-index: 5;
          }
        }
        & > div:nth-child(1)::before {
          content: "";
          position: absolute;
          background: url("https://static.cmereye.com/imgs/2024/04/1d334823d7753246.png")
            no-repeat;
          width: 292px;
          display: inline-block;
          height: 386px;
          background-size: 100% 100%;
          background-position: center;
          z-index: 1;
          left: -10px;
          top: -12px;
        }
        & > div:nth-child(2) {
          background: #fff;
          border-radius: 0px 40px 0px 40px;
          padding-left: 40px;
          padding-right: 5px;
          position: relative;
          left: -15px;
          z-index: 3;
          // min-width: 348px;
          min-width: 405.5px;
          & > div:nth-child(1) {
            margin-top: 75px;
            margin-bottom: 15px;
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 25px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 80% */
            letter-spacing: 2.5px;
            span {
              font-size: 16px;
              letter-spacing: 1.6px;
              margin-left: 10px;
            }
          }
          & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .doctor-team-content {
    max-width: 99.21875vw !important;
  }
}

@media screen and (max-width: 767px) {
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/c58f958bc4b6ee29.png")
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
  .doctor-team-content {
    padding: 0 30px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin: 40px auto;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 187.5% */
        letter-spacing: 0.8px;
      }
      & > div:nth-child(2) {
        & > p {
          display: inline;
        }
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px; /* 214.286% */
        letter-spacing: 0.7px;
      }
      & > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 214.286% */
        letter-spacing: 0.7px;
        & > span::before {
          content: "·";
          color: #4570b6;
          font-size: 12px;
        }
      }
    }
  }
  .doctor-team-member {
    background: url("https://static.cmereye.com/imgs/2024/05/c4109fd202815835.png")
      no-repeat;
    width: 100vw;
    background-size: 100% 100%;
    background-position: center;
    padding: 150px 24px 15px;
    margin-top: 150px;
    margin-bottom: 55px;
    position: relative;
    & > div:nth-child(1) {
      position: absolute;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 170px;
      & > div:nth-child(2) {
        margin-top: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.7px;
      }
    }
    & > div:nth-child(2) {
      & > div {
        margin-bottom: 35px;
        display: flex;
        position: relative;
        & > div:nth-child(1) {
          flex: 4.5;
          width: 37.49vw;
          min-width: 37.49vw;
          border-radius: 0 25px;
          overflow: hidden;
          & > img {
            width: 100%;
            position: relative;
            z-index: 5;
          }
        }
        & > div:nth-child(1)::before {
          content: "";
          background: url(https://static.cmereye.com/imgs/2024/04/e4ed6628ef1d18a5.png)
            no-repeat;
          background-size: 100% 95%;
          width: 41.28vw;
          height: 57.43vw;
          display: inline-block;
          position: absolute;
          z-index: 2;
          left: -6px;
          top: -7px;
        }
        & > div:nth-child(2) {
          flex: 5.5;
          background: #fff;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          left: -20px;
          border-radius: 0 40px 0 20px;
          padding-left: 40px;
          min-height: 53.84vw;
          top: -10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding-right: 0;
          min-width: 56.15vw;

          & > div:nth-child(1) {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 5.12vw;
            font-style: normal;
            font-weight: 500;
            line-height: 5.12vw; /* 100% */
            letter-spacing: 1px;
            & > span {
              font-size: 3.58vw;
              letter-spacing: 0.7px;
              margin-left: 8px;
            }
          }
          & > div:nth-child(2) {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            color: #4570b6;

            font-family: "Noto Sans HK";
            font-size: 2.56vw;
            font-style: normal;
            font-weight: 400;
            line-height: 5.12vw; /* 200% */
            letter-spacing: 0.5px;
          }
        }
      }
      & > div:nth-child(even) {
        flex-direction: row-reverse;

        & > div:nth-child(1) {
          border-radius: 25px 0 25px 0;
          overflow: hidden;
          & > img {
            background: #7a94a4;
          }
        }
        & > div:nth-child(1)::before {
          content: "";
          background: url(https://static.cmereye.com/imgs/2024/04/3bdb9371c294cb1d.png)
            no-repeat;
          background-size: 100% 95%;
          width: 41.28vw;
          height: 57.43vw;
          display: inline-block;
          position: absolute;
          z-index: 2;
          left: auto;
          top: -8px;
          right: -6px;
        }
        & > div:nth-child(2) {
          flex: 5.5;
          background: #fff;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          left: auto;
          right: -8px;
          border-radius: 20px 0 40px 0;
          padding-left: 5.12vw;
          padding-right: 3.84vw;
          min-width: 53.33vw;
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>