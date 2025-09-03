<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-02 16:04:36
 * @LastEditTime: 2025-09-03 08:55:05
 * @FilePath: /components/commom/PageNavigation/PageNavigation.vue
 * @Description: 页面大纲，页面内滚动导航
-->
<template>
  <div class="navigation">
    <nav class="navigation-container">
      <div
        v-for="(item, index) in navList"
        :key="index"
        class="navigation-item"
        :class="{ active: activeSection === item.id }"
        :style="{
          color: activeSection === item.id ? activeColor : inactiveColor,
          '--separator-color': separatorColor,
        }"
        @click="scrollToSection(item.id)"
      >
        <a>{{ item.label }}</a>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true,
      default: () => [
        { id: "section1", label: "Section 1" },
        { id: "section2", label: "Section 2" },
        { id: "section3", label: "Section 3" },
      ],
    },
    activeColor: {
      type: String,
      default: "#fff",
    },
    inactiveColor: {
      type: String,
      default: "#ffffff80",
    },
    separatorColor: {
      type: String,
      default: "#000034",
    },
  },
  data() {
    return {
      activeSection: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activeSection = id;
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 100; // 偏移量调整
      this.navList.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            this.activeSection = item.id;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  &-container {
    display: flex;
    flex-direction: column;
  }
  &-item {
    cursor: pointer;
    font-family: "Noto Sans TC";
    font-size: 20px;
    line-height: 35px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: justify;
    padding-bottom: 50px;
    position: relative;
    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 54px;
        bottom: 24px;
        left: 0;
        background-color: var(--separator-color);
      }
    }
  }
}
</style>
