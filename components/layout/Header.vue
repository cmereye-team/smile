<!--
 * @Author: 谭洁莹
 * @Date: 2026-04-22 09:53:50
 * @LastEditTime: 2026-04-22 14:13:14
 * @FilePath: /components/layout/Header.vue
 * @Description: 统一页头
-->
<template>
  <div class="head-bg">
    <div :class="['head flex md:hidden', { 'is-active': isMenuOpen }]">
      <HeaderLeft />
      <HeaderMobile @menuToggle="(val) => (isMenuOpen = val)" />
    </div>
    <div class="head hidden md:flex">
      <HeaderLeft />
      <div>
        <HeaderRight />
        <div class="sidebar-box">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLeft from "@/components/layout/HeaderLeft.vue";
import HeaderRight from "@/components/layout/HeaderRight.vue";
import HeaderMobile from "@/components/layout/HeaderMobile.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
export default {
  components: {
    HeaderLeft,
    HeaderRight,
    HeaderMobile,
    Sidebar,
  },
  data() {
    return {
      isMobile: true,
      isMenuOpen: false,
    };
  },
  methods: {
    taginits() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5M8VLLM");
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-FN8KFBR9XM");
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({
          animateClass: "animate__animated",
          offset: 200,
        }).init();
      }
      this.taginits();
    });
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
<style lang="scss" scoped>
.head-bg {
  position: sticky;
  z-index: 102;
  top: 0;
  background-color: #fff;
}
.head {
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 25px 0;
}
@media screen and (min-width: 992px) {
  .head {
    padding: 25px 0 !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .mbShow {
    display: none;
  }
  .head-bg {
    background: #fff;
    width: 100%;
    z-index: 102;
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
    justify-content: space-between;
    align-items: center;
    margin: 0 3vw;
    padding: 25px 0;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .head {
    max-width: 99.21875vw !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .head {
    max-width: 1024px !important;
  }
}
@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }
  :deep(#LRMINIBar) {
    bottom: 90px !important;
  }
  .head {
    top: 0;
    right: 0;
    left: 0;
    background: #fff;
    padding: 15px 15px;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw !important;
    margin: 0 !important;
  }
}
</style>
