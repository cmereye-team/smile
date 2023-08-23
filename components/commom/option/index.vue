<template>
  <div>
    <div class="optiond">
      
      <a class="title" :href="group.link">
        <div>
          {{ group.main_nav }}
        <span
          v-if="group.child_list && group.child_list.length > 0"
            ><img
              src="https://static.cmereye.com/imgs/2023/08/5cb3a72ab6bad56d.png"
              alt=""
          /></span>
        </div>
        <div class="isBlock" v-if="group.child_list && group.child_list.length > 0">
          <div class="nav">
            <a v-for="(item,index) in group.child_list" :key="index" :href="item.link"> {{ item.child_item }}</a>
          </div>
      </div>
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "optiond",
  props:['group'],
  data() {
    return {};
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
    &>div:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: center;
      & > span {
        margin-left: 5px;
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
  }
  .isBlock {
    display: none;
  }
  .title:hover .isBlock {
    display: block;
  }
  a:hover {
    color: #fff;
  }
  .title:hover{
    color: #4570B6;
  }
}
@media screen and (max-width: 789px) {
}
</style>