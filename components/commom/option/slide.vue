<template>
  <div>
    <div class="optiond">
      <div v-if="group.link !== '' && group.link.length > 0">
        <nuxt-link class="title" :to="localePath(group.link)">
          <div>
            <!-- <img
              v-if="pcOrMobile === 'mobile' && dataSrc.length > 0"
              :src="dataSrc"
              alt=""
            /> -->
          </div>
          <div>
            <div>
              <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                {{ group.main_nav }}
              </div>
              <span v-if="group.child_list && group.child_list.length > 0"
                >
                <!-- <img
                  src="https://static.cmereye.com/imgs/2024/10/1c76db8f0df27985.png"
                  alt=""
              /> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
  <path d="M0.999999 0.999992L6.62289 7.19033L1 13.3807" stroke="white" stroke-width="1.65076" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              
              </span>
            </div>
            <div
              class="isBlock"
              v-if="group.child_list && group.child_list.length > 0"
            >
              <div class="nav">
                <nuxt-link
                  v-for="(item, index) in group.child_list"
                  :key="index"
                  :to="localePath(item.link)"
                >
                  • {{ item.child_item }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div v-else>
        <div class="title">
          <div>
            <img
              v-if="pcOrMobile === 'mobile' && dataSrc.length > 0"
              :src="dataSrc"
              alt=""
            />
          </div>
          <div>
            <div>
              <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                {{ group.main_nav }}
              </div>
              <div v-if="group.child_list && group.child_list.length > 0">
                <!-- <img
                  src="https://static.cmereye.com/imgs/2024/10/1c76db8f0df27985.png"
                  alt=""
                /> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
  <path d="M0.999999 0.999992L6.62289 7.19033L1 13.3807" stroke="white" stroke-width="1.65076" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <!-- > -->
              </div>
            </div>
            <div
              class="isBlock"
              v-if="group.child_list && group.child_list.length > 0"
            >
              <div :class="[$i18n.locale === 'en' ? 'navEng nav ' : 'nav']">
                <nuxt-link
                  v-for="(item, index) in group.child_list"
                  :to="localePath(item.link)"
                  :key="index"
                  >• {{ item.child_item }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "optiond",
  props: ["group", "pcOrMobile", "dataSrc"],
  data() {
    return {};
  },
  mounted() {
    // const body_t = document.getElementsByTagName('body');
    // body_t.addEventListener("touchstart", function () {});
    // document.body.addEventListener('touchstart', function(){ });
  },
  methods: {},
};
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 789px) {
  .optiond {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 220px;
  }
  .title {
    color: #6d6e71;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.4px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    & > div:nth-child(2) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        & > span {
          margin-left: 5px;
        }
      }
    }
  }
  .nav {
    color: #6d6e71;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 2.4px;
    line-height: 2;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    padding: 10px 0;
    display: flex;
    & > a {
      position: relative;
    }
    & > a::before {
      content: "";
      width: 5px;
      height: 5px;
      background: #4570b6;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .isBlock {
    display: none;
  }
  .title:hover .isBlock {
    display: block;
  }
  a:hover {
    color: #4570b6;
  }
  .title:hover {
    color: #4570b6;
  }
  .pathLink {
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(7) {
      a {
        .engWidth {
          width: min-content;
        }
      }
    }
  }
  .navEng {
    min-width: max-content;
  }
}
@media screen and (max-width: 789px) {
  .engWidth {
    min-width: 130px;
    text-align: left;
  }
  .optiond {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: fit-content;
    // margin: auto;
  }
  .title {
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2.7px;
    text-align: center;
    font-style: normal;
    line-height: normal;
    // display: flex;
    flex-direction: row;
    align-items: flex-start;
    // z-index: 10;
    & > div:nth-child(1) {
      width: 22px;
      max-width: 22px;
      max-height: 21px;
      margin-right: 10px;
    }
    & > div:nth-child(2) {
      min-width: 100px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        padding: 10px 0;
        & > div:nth-child(2) {
            &>svg{
                margin-top: 6px;
                margin-left: 15px;
            }
          & > img {
              
          width: 12px;
          margin-top: 2px;
      
          }
        }
        & > span {
    
          margin-left: 5px;
        }
      }
    }
  }

  .nav {
    // color: #6d6e71;
    color: #fff;

    font-family: "Noto Sans HK";
    font-size: 14px;

    line-height: 2.14; /* 214.286% */
    letter-spacing: 2.1px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    // line-height: normal;

    flex-direction: column;
    align-items: flex-start;
    width: max-content;
    padding: 10px 0;
    display: flex;
    // min-width: 150px;
    & > a {
      position: relative;
    }
    & > a::before {
      content: "";
      width: 3px;
      height: 3px;
      background: #4570b6;
      border-radius: 50%;
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .isBlock {
    display: none;
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  .title:hover .isBlock {
    display: block;
  }
  a:hover {
    // color: #4570b6;
    // background: red;
  }
  .title div:nth-child(2) div:nth-child(1) > div:nth-child(1) {
    position: relative;
  }
  .title div:nth-child(2) div:nth-child(1) > div:nth-child(1)::before {
    content: "";
    width: 100%;
    height: 1px;
    background: white;
    position: absolute;
    bottom: -4px;
    left: 0;
    display: none;
  }
  .title div:nth-child(2) div:nth-child(1):hover {
    svg {
      -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
      -moz-transform: rotate(90deg); /* Firefox */
      -ms-transform: rotate(90deg); /* IE 9 */
      -o-transform: rotate(90deg); /* Opera */
      transform: rotate(90deg);
    }
    & > div:nth-child(1)::before {
      display: block;
    }
  }
}
</style>
