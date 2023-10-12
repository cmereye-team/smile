<template>
  <div>
    <div class="optiond">
      <div v-if="group.link !== '' && group.link.length > 0">
        <a class="title" :href="group.link">
          <div>
            <img
              v-if="pcOrMobile === 'mobile' && dataSrc.length > 0"
              :src="dataSrc"
              alt=""
            />
          </div>
          <div>
            <div>
              {{ group.main_nav }}
              <span v-if="group.child_list && group.child_list.length > 0"
                ><img
                  src="https://static.cmereye.com/imgs/2023/08/5cb3a72ab6bad56d.png"
                  alt=""
              /></span>
            </div>
            <div
              class="isBlock"
              v-if="group.child_list && group.child_list.length > 0"
            >
              <div class="nav">
                <a
                  v-for="(item, index) in group.child_list"
                  :key="index"
                  :href="item.link"
                >
                  {{ item.child_item }}</a
                >
              </div>
            </div>
          </div>
        </a>
      </div>
      <div v-else>
        <a class="title">
          <div>
            <img
              v-if="pcOrMobile === 'mobile' && dataSrc.length > 0"
              :src="dataSrc"
              alt=""
            />
          </div>
          <div>
            <div>
              {{ group.main_nav }}
              <span v-if="group.child_list && group.child_list.length > 0"
                ><img
                  src="https://static.cmereye.com/imgs/2023/08/5cb3a72ab6bad56d.png"
                  alt=""
              /></span>
            </div>
            <div
              class="isBlock"
              v-if="group.child_list && group.child_list.length > 0"
            >
              <div class="nav">
                <a
                  v-for="(item, index) in group.child_list"
                  :key="index"
                  :href="item.link"
                >
                  {{ item.child_item }}</a
                >
              </div>
            </div>
          </div>
        </a>
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
}
@media screen and (max-width: 789px) {
  .optiond {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: fit-content;
    // margin: auto;
  }
  .title {
    color: #6d6e71;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.1px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    z-index: 10;
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
        & > span {
          margin-left: 5px;
        }
      }
    }
  }

  .nav {
    color: #6d6e71;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.2px;
    line-height: 2;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
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
    color: #4570b6;
  }
  .title:hover {
    color: #4570b6;
  }
}
</style>