<template>
  <div class="BossInfor">
    <div class="environment page_container">
      <div class="md:flex md:justify-center">
        <div class="img_box">
          <div class="flex justify-center">
            <div>
              <img
                class="boss_img"
                src="@/asset/image/about-us/doctor-team/boss.jpg"
                alt
              />
              <div class="boss_text_name my-3 mbShow">
                <h3>香港希瑪國際眼科醫療集團創辦人</h3>
                <span>林順潮醫生</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text_box">
          <div class="pcShow">
            <h3>香港希瑪國際眼科醫療集團創辦人</h3>
            <br />
            <span>林順潮醫生</span>
          </div>
          <p>
            創辦人林順潮教授是亞太眼科主要領導者之一， <br class="pcShow" />
            連續3屆被評為「世界眼科100位最具影響力人物之一」，<br
              class="pcShow"
            />
            並獲「世界十大傑出青年」、「香港十大傑出青年」、<br
              class="pcShow"
            />
            「亞太最佳眼科臨床教授獎」、「亞太眼科傑出成就獎」、「亞太眼科學術最高成就獎」等殊榮。
          </p>
          <div class="rong_menu">
            <ul class="child_menu">
              <li v-for="(childItem, index) in child_list" :key="index">
                {{ childItem.child_item }}
              </li>
            </ul>
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
      child_list: [
        {
          child_item: "香港大學內外全科醫學士",
          link: "",
        },
        {
          child_item: " 香港醫學專科學院院士(眼科) ",
          link: "",
        },
        {
          child_item: "  香港眼科醫學院院士 ",
          link: "",
        },
        {
          child_item: "  英國愛丁堡皇家外科醫學院院士(眼科) ",
          link: "",
        },
        {
          child_item: "  英國皇家眼科學院院士",
          link: "",
        },
        {
          child_item: "  香港中文大學醫學博士",
          link: "",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.BossInfor {
  .text_box {
    sapn {
      display: inline-block;
      background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      display: inline-block;
      color: #4570b6;
    }
  }
}

@media only screen and (min-width: 768px) {
  .BossInfor {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 48% no-repeat;
    .environment {
      .img_box {
        .boss_img {
          margin-top: 73px;
        }
      }
      .text_box {
        // width: 50vw;
        padding: 73px 0 0 88px;
        h3 {
          font-weight: 1000;
          margin-bottom: 10px;
          font-size: 20px;
        }
        span {
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 20px;
          /* identical to box height, or 67% */

          letter-spacing: 0.1em;

          background: linear-gradient(
            90.57deg,
            #4570b6 -11.77%,
            #81dbec 111.92%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        p {
          padding: 64px 0;
          font-family: "Noto Sans HK";
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          text-align: justify;
          letter-spacing: 0.1em;
          color: #000000;
          width: 80%;
        }
        ul {
          list-style: square;
          li {
            font-family: "Noto Sans HK";
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 32px;
            letter-spacing: 0.1em;
            color: #4570b6;
          }
        }
        ul li::marker {
          color: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
        }
        .child_menu {
          color: #4570b6;
          padding-left: 1vw;
          padding-bottom: 85px;
        }
      }
      .slider {
        background: #f3fcfe;
        height: 20vw;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .BossInfor {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 22% no-repeat;
    .boss_img {
      width: 65vw;
    }
    .text_box {
      p {
        margin: 0 51px;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        /* or 150% */
        padding: 6px 2px 25px 2px;
        letter-spacing: 0.1em;

        color: #000000;
      }
      ul {
        list-style: square;
        li {
          white-space: nowrap;
        }
      }
      ul li::marker {
        color: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
      }
      .child_menu {
        color: #4570b6;
        padding-left: 1vw;
      }
      .rong_menu {
        padding: 20px 69px;
      }
    }
    .boss_text_name {
      display: flex;
      flex-direction: column;
      h3 {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        /* or 167% */
        letter-spacing: 0.1em;
        color: #4570b6;
      }
      span {
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height, or 125% */
        padding: 4px 0;
        letter-spacing: 0.1em;

        background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    .child_menu {
    }
  }
}
</style>
