<template>
  <div class="page_container" :class="$i18n.locale == 'en' ? 'BossInfor BossInfor_en' : 'BossInfor'">
    <div class="environment page_container">
      <div class="md:flex">
        <div class="img_box">
          <div class="flex justify-center">
            <div class="img_box_in">
              <img class="boss_img" src="https://static.cmereye.com/imgs/smile/images/about-us/doctor-team/boss.jpg"
                alt />
              <div class="my-3 mbShow"
                :class="$i18n.locale == 'en' ? 'boss_text_name boss_text_name_en' : 'boss_text_name'">
                <h3>{{ $t('aboutUs.medicalTeam.bossInfo.h3') }}</h3>
                <span>{{ $t('aboutUs.medicalTeam.bossInfo.span') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text_box" :class="$i18n.locale == 'en' ? 'text_box text_box_en' : 'text_box'">
          <div class="pcShow">
            <h3>{{ $t('aboutUs.medicalTeam.bossInfo.h3') }}</h3>
            <br />
            <span>{{ $t('aboutUs.medicalTeam.bossInfo.span') }}</span>
          </div>
          <p>
            {{ $t('aboutUs.medicalTeam.bossInfo.p1_1') }}<br :style="{ display: $i18n.locale == 'en' ? 'none' : '' }"
              class="pcShow" />
            {{ $t('aboutUs.medicalTeam.bossInfo.p1_2') }}<br :style="{ display: $i18n.locale == 'en' ? 'none' : '' }"
              class="pcShow" />
            {{ $t('aboutUs.medicalTeam.bossInfo.p1_3') }}<br :style="{ display: $i18n.locale == 'en' ? 'none' : '' }"
              class="pcShow" />
            {{ $t('aboutUs.medicalTeam.bossInfo.p1_4') }}
          </p>
          <div class="rong_menu">
            <ul :class="$i18n.locale == 'en' ? 'child_menu child_menu_en' : 'child_menu'">
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
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li1'),
          link: "",
        },
        {
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li2'),
          link: "",
        },
        {
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li3'),
          link: "",
        },
        {
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li4'),
          link: "",
        },
        {
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li5'),
          link: "",
        },
        {
          child_item: this.$t('aboutUs.medicalTeam.bossInfo.li6'),
          link: "",
        },
      ],
    };
  },
  created() { },
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

    p {
      color: #6d6e71 !important;
    }
  }
}

@media only screen and (min-width: 768px) {
  .BossInfor {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 40% no-repeat;

    .environment {
      // width: 1065px;
      width: 80%;
      padding-top: 70px;
      box-sizing: border-box;

      .img_box {
        width: 433px;

        div {
          width: 100%;
        }
      }

      .text_box {
        // width: 622px;
        flex: 1;
        box-sizing: border-box;
        padding: 90px 0 0 50px;

        h3 {
          font-weight: 700;
          margin-bottom: 10px;
          font-size: 20px;
        }

        span {
          font-family: var(--font_family);
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 20px;
          /* identical to box height, or 67% */

          letter-spacing: 0.1em;

          background: linear-gradient(90.57deg,
              #4570b6 -11.77%,
              #81dbec 111.92%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        p {
          padding: 35px 0 50px;
          font-family: var(--font_family);
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          text-align: justify;
          letter-spacing: 0.1em;
          color: #6D6E71;
          // width: 95%;
        }

        ul {
          list-style: square;

          li {
            font-family: var(--font_family);
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
          padding-left: 30px;
          padding-bottom: 65px;
        }

        .child_menu_en {
          line-height: 1.6;
        }
      }
    }
  }

  .BossInfor_en {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 35% no-repeat;
  }

  .boss_img {
    width: 100%;
  }

  .text_box_en {
    p {
      padding: 15px 0 50px 0 !important;
      width: 108% !important;
      letter-spacing: 0 !important;
    }
  }
}


@media only screen and (max-width: 768px) {
  .BossInfor {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 22% no-repeat;

    .boss_img {
      width: 80vw;
    }

    .text_box {

      // width: 80vw;
      p {
        // margin: 0 51px;
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        /* or 150% */
        padding: 6px 2px 25px 2px;
        letter-spacing: 0.1em;

        color: #6D6E71;
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
        padding-left: 30px;
      }

      .rong_menu {
        // padding: 20px 69px;
        padding: 20px 0;
      }
    }

    .text_box_en {
      text-align: justify;
    }

    .boss_text_name {
      display: flex;
      flex-direction: column;

      h3 {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        /* or 167% */
        letter-spacing: 0.1em;
        color: #4570b6;
        margin-top: 10px;
      }

      span {
        font-family: var(--font_family);
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

    .boss_text_name_en {
      h3 {
        letter-spacing: 0.6px;
      }

      span {
        letter-spacing: 0.6px;
      }
    }
  }

  .BossInfor_en {
    background: linear-gradient(#f3fcfe 0 0) bottom/100% 19% no-repeat;
  }
}
</style>
