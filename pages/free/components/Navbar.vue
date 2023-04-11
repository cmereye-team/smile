<template>
  <div class="nav_bar section hidden md:flex md:justify-between">
    <ul class="nav md:flex md:justify-around ">
      <li v-for="(navItem,index) in navList " :key="index" class="nav_item md:flex">
        <nuxt-link :to="localePath(navItem.link)" class="main_nav">
          <div class="mian_nav_text  font-black">{{navItem.main_nav}}</div>
        </nuxt-link>
        <ul class="child_nav flex flex-col gap-2">
          <li v-for="(childItem,index) in navItem.child_list " :key="index">
            <nuxt-link :to="localePath(childItem.link)">{{childItem.child_item}}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="contact ">
      <div class="contact_text md:flex md:justify-center md:items-center "> {{$t('home.navbar')}} <span>6061 0511</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          main_nav: "主頁",
          link: "/",
        }, {
          main_nav: "關於希瑪",
          link: "",
          child_list: [
            {
              child_item: "- 集團及中心簡介",
              link: "/about-us/centre-introduction"
            }, {
              child_item: "- 醫生團隊",
              link: "/about-us/medical-team"
            }, {
              child_item: "- 中心設備",
              link: "/about-us/medical-equipment"
            },
          ]
        }, {
          main_nav: "矯視服務",
          link: "",
          child_list: [
            {
              child_item: "- SMILE 微笑激光矯視",
              link: "/service/relex_smile"
            }, {
              child_item: "- CLEAR-Vision",
              link: ""
            }, {
              child_item: "- LASIK 激光矯視",
              link: ""
            }, {
              child_item: "- SMILE 微笑激光矯視",
              link: ""
            }
          ]
        }, {
          main_nav: "診症須知",
          link: "",
          child_list: [
            {
              child_item: "",
              link: ""
            },
          ]
        }, {
          main_nav: "眼科資訊",
          link: "",
          child_list: [
            {
              child_item: "- 個案分享及矯視資訊影片",
              link: ""
            },
            {
              child_item: "- 媒體報導",
              link: ""
            },
            {
              child_item: "- 線上評估",
              link: ""
            },
          ]
        }, {
          main_nav: "收費詳情",
          link: "/free",
          child_list: [
            {
              child_item: "",
              link: ""
            },
          ]
        }, {
          main_nav: "聯絡我們",
          link: "/contact-us",
          child_list: [
            {
              child_item: "",
              link: ""
            },
          ]
        },
      ]
    };
  },
  created() { },
  methods: {}
};
</script>
<style lang="scss" scoped>
$active_gradient: linear-gradient(#81dbec, #4570b6);
// pc
@media (min-width: 768px) {
  .section {
    margin: 3.5vw auto;
  }
  .nav_bar {
    // position: absolute;
    z-index: 99;
    left: 10vw;
    top: 5vw;
  }
  .nav {
    margin-left: 1.5vw;
    transition: all 0.5s ease-in;
    .nav_item {
      transition: all 0.5s ease-in;
      &:hover .mian_nav_text {
        margin-top: 0.5vw;
        background-color: #ffff;
      }

      &:hover .child_nav {
        width: 100%;
      }
    }
  }
  .main_nav {
    .mian_nav_text {
      writing-mode: vertical-lr;
      letter-spacing: 0.6vw;
      transition: all 0.5s;
    }
  }
  .child_nav {
    width: 0;
    overflow: hidden;
    transition: width 0.5s ease-in;
    white-space: nowrap;
    font-size: 0.8vw;
    margin-left: 0.5vw;
    margin-right: 1vw;
  }
  .contact {
    .contact_text {
      position: relative;
      margin-left: 2.7vw;

      span {
        font-size: 1.5vw;
        margin-left: 1vw;
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        width: 1.5vw;
        height: 1.5vw;
        clip-path: polygon(0 92%, 73% 49%, 0 10%);
        background: -webkit-linear-gradient(left, #81dbec, #ffff);
      }

      &::after {
        left: -1.5vw;
      }
      &::before {
        left: -3vw;
      }
    }
    &:hover .contact_text::before,
    &:hover .contact_text::after {
      background: -webkit-linear-gradient(left, #4570b6, #81dbec);
    }
  }
}
// mb
@media (max-width: 768px) {
}
</style> 
