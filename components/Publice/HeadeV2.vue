<template>
  <div class="head-bg">
    <div class="headV2 mbShow">
      <HeadLeftV2 />
      <HeadMobileV2 />
      <!-- <nuxt-link to="/icl-event" class="btn-icl_event">
        <img
          src="https://static.cmereye.com/imgs/2024/12/d826363f36195d26.png"
          alt=""
        />
        <span>ICL<br />專題講座</span>
      </nuxt-link> -->
    </div>
    <div class="headV2 pcShow">
      <HeadLeftV2 />
      <div>
        <HeadRightV2 />
        <div class="sidebar-box">
          <Sidebar />
        </div>
 
      </div>
    </div>
  </div>
</template>
<script>
import HeadLeftV2 from "../Publice/HeadeLeftV2.vue";
import HeadRightV2 from "../Publice/HeadRightV2.vue";
import HeadMobileV2 from "../Publice/HeadMobileV2.vue";
import Sidebar from "../Publice/Sidebar.vue";
export default {
  components: {
    HeadLeftV2,
    HeadRightV2,
    HeadMobileV2,
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

<style lang="scss" scoped>
.headV2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 25px 0;
  // width: 1320px;
}
.btn-icl_event {
  position: fixed !important;
  top: auto !important;
  bottom: 130px !important;
  right: 64px !important;
  left: auto !important;
  width: 134.384px;
  height: 134.384px;
  border-radius: 50%;
  background: #297492;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: 0 0 5px 3px #297492a6;
  transition: all 0.3s ease;
  cursor: pointer;
  & > span {
    color: #fff;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 136.364% */
    letter-spacing: 1.1px;
  }
}
.btn-icl_event:hover {
  & > img,
  & > span {
    transform: scale(1.05);
  }
  & > span {
    margin: 5px;
  }
}
@media screen and (min-width: 992px) {
  .headV2{
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
  .headV2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 1270px;
    margin: 0 3vw;
    padding: 25px 0;
    // width: 1270px;
  }
  .btn-icl_event {
    position: fixed !important;
    top: auto !important;
    bottom: 130px !important;
    right: 64px !important;
    left: auto !important;
    width: 134.384px;
    height: 134.384px;
    border-radius: 50%;
    background: #297492;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    & > span {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px; /* 136.364% */
      letter-spacing: 1.1px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .headV2 {
    max-width: 99.21875vw !important;
  }
  .btn-icl_event {
    position: fixed !important;
    top: auto !important;
    bottom: 130px !important;
    right: 64px !important;
    left: auto !important;
    width: 134.384px;
    height: 134.384px;
    border-radius: 50%;
    background: #297492;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    & > span {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px; /* 136.364% */
      letter-spacing: 1.1px;
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .headV2 {
    max-width: 1024px !important;
  }
  .btn-icl_event {
    position: fixed !important;
    top: auto !important;
    bottom: 130px !important;
    right: auto !important;
    left: 64px !important;
    width: 134.384px;
    height: 134.384px;
    border-radius: 50%;
    background: #297492;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px; /* 136.364% */
      letter-spacing: 1.1px;
    }
  }
}

@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }
  :deep(#LRMINIBar) {
    bottom: 90px !important;
  }
  .headV2 {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 102;
    background: #fff;
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw !important;
    margin: 0 !important;
  }
  .btn-icl_event {
    position: fixed !important;
    bottom: 170px !important;
    top: auto !important;
    right: 15px !important;
    left: auto !important;
    width: 77.641px;
    height: 77.641px;
    border-radius: 50%;
    background: #297492;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    z-index: 999;
    & > img {
      width: 80%;
      height: auto;
      object-fit: contain;
    }
    & > span {
      margin-top: 6px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 2.665vw;
      font-style: normal;
      font-weight: 400;
      line-height: 1.2; /* 136.364% */
      letter-spacing: 0.16vw;
    }
  }
}
</style>