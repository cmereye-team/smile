<template>
  <div class="head-bg">
    <div class="head">
      <HeadLeft />
      <div>
        <HeadRight v-if="!isMobile" />
        <HeadMobile v-else />
        <div class="sidebar-box" v-if="!isMobile">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadLeft from "../Publice/HeadLeft.vue";
import HeadRight from "../Publice/HeadRight.vue";
import HeadMobile from "../Publice/HeadMobile.vue";
import Sidebar from "../Publice/Sidebar.vue";
export default {
  components: {
    HeadLeft,
    HeadRight,
    HeadMobile,
    Sidebar,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .head-bg{
    background: #fff;
    width: 100%;
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .sidebar-box {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1270px;
    margin: 0 auto;
    padding: 25px 0;
  }
}
@media screen and (max-width: 767px) {
  .head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>