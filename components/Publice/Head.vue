<template>
  <div class="head-bg">
    <div class="head mbShow">
      <HeadLeft />
      <HeadMobile />
    </div>
    <div class="head pcShow">
      <HeadLeft />
      <div>
        <HeadRight />
        <div class="sidebar-box">
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
      isMobile: true,
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
          //可以添加自定义内容
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

<style lang="scss">
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .mbShow {
    display: none;
  }
  .head-bg {
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