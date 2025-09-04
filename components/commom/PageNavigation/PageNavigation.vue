<!-- PageNavigation.vue -->
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
      headerHeight: 0,
    };
  },
  mounted() {
    this.updateHeaderHeight();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.updateHeaderHeight);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateHeaderHeight);
  },
  methods: {
    updateHeaderHeight() {
      // Determine header height based on viewport width
      this.headerHeight = window.innerWidth >= 768 ? 180 : 87;
    },
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - this.headerHeight; // 10px buffer for visual comfort
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
        this.activeSection = id;
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + this.headerHeight; // Adjust for header height + buffer
      let foundSection = null;

      this.navList.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            foundSection = item.id;
          }
        }
      });

      // Update active section only if a matching section is found
      if (foundSection) {
        this.activeSection = foundSection;
      } else if (scrollPosition < this.headerHeight) {
        // If scrolled above the first section, clear active section
        this.activeSection = "";
      }
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