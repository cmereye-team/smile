<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-22 10:06:43
 * @LastEditTime: 2025-11-27 15:47:47
 * @FilePath: /components/commom/option/SideV2.vue
 * @Description: 菜单栏
-->
<script>
export default {
  data() {
    return {
      isMobile: false,
      menuList: [
        {
          main_nav: this.$t("home.headers.aboutSmile"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.aboutSmileChild_1"),
              link: "/group-profile",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_2"),
              link: "/our-medical-team",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_3"),
              link: "/medical-equipment",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.orthopedicServices"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/vision-correction-icl",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_1"),
              link: "/vision-correction/relex-smile",
            },
            {
              child_item: "CMER CLEAR-Vision",
              link: "/vision-correction-presbyopia",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/vision-correction-lasik",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.diagnosisInstructions"),
          link: "/patient-info",
          child_list: [
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
              link: "/patient-info/#beforeJiaoShi",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
              link: "/patient-info#inJiaoShi",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
              link: "/patient-info#afterJiaoShi",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.feeConsultation"),
          link: "/fee",
        },
        {
          main_nav: this.$t("home.headers.commonProblem"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.commonProblemChild_1"),
              link: "/FreQuestions#faq-smile",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_2"),
              link: "/FreQuestions#faq-lasik",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_3"),
              link: "/FreQuestions#faq-icl",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_4"),
              link: "/FreQuestions#faq-presbyopia",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.feign"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.casesSharing"),
              link: "/video",
            },
            {
              child_item: this.$t("home.headers.feign_knowledge"),
              link: "/blog",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.contactUs"),
          link: "/contact-us",
        },
      ],
    };
  },
  computed: {
    // 平板：完整分左3右4
    leftMenus() {
      return this.menuList.slice(0, 3);
    },
    rightMenus() {
      return this.menuList.slice(3);
    },
    // 移动端：过滤后分左2右3 + bottom补充
    topLeftMenus() {
      if (!this.isMobile) return [];
      const filtered = this.menuList.filter(
        (_, index) => index !== 1 && index !== 4
      );
      return filtered.slice(0, 2);
    },
    topRightMenus() {
      if (!this.isMobile) return [];
      const filtered = this.menuList.filter(
        (_, index) => index !== 1 && index !== 4
      );
      return filtered.slice(2);
    },
    bottomMenu() {
      if (!this.isMobile) return [];
      return [this.menuList[1], this.menuList[4]].filter(Boolean); // 过滤undefined，如果长度不足
    },
  },
  mounted() {
    if (process.client) {
      const debouncedUpdate = this.debounce(this.updateMobile, 200);
      debouncedUpdate();
      window.addEventListener("resize", debouncedUpdate);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("resize", this.debouncedUpdate);
    }
  },
  methods: {
    /**
     * @description: 判断是否为移动端
     * @return {boolean}
     */
    updateMobile() {
      this.isMobile = window.matchMedia("(max-width: 767px)").matches;
    },
    /**
     * @description: 防抖函数
     * @param {Function} fn 函数
     * @param {number} delay 延迟ms
     * @return {Function}
     */
    debounce(fn, delay = 300) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },
  },
};
</script>
<template>
  <div class="side">
    <template v-if="isMobile">
      <div
        class="menu flex flex-wrap items-start content-start overflow-y-auto pointer-events-auto h-[calc(100vh_-_188px)]"
      >
        <!-- 左侧列表 -->
        <div class="flex-1 space-y-5">
          <div
            class="menu-list"
            v-for="(menu, index) in topLeftMenus"
            :key="index"
          >
            <div class="menu-list-item">
              <template v-if="menu.link != ''">
                <nuxt-link
                  class="menu-list-title text-primary"
                  :to="localePath(menu.link)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="menu-list-title text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </div>
              </template>
              <div v-if="menu.child_list && menu.child_list.length > 0">
                <div class="menu-item text-text">
                  <nuxt-link
                    class="block"
                    v-for="(v, k) in menu.child_list"
                    :key="k"
                    :to="localePath(v.link)"
                    >{{ v.child_item }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧列表 -->
        <div class="flex-1 space-y-5">
          <div
            class="menu-list"
            v-for="(menu, index) in topRightMenus"
            :key="index"
          >
            <div class="menu-list-item">
              <template v-if="menu.link != ''">
                <nuxt-link
                  class="menu-list-title text-primary"
                  :to="localePath(menu.link)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="menu-list-title text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </div>
              </template>
              <div v-if="menu.child_list && menu.child_list.length > 0">
                <div class="menu-item text-text">
                  <nuxt-link
                    class="block"
                    v-for="(v, k) in menu.child_list"
                    :key="k"
                    :to="localePath(v.link)"
                    >{{ v.child_item }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部列表 -->
        <div class="basis-full space-y-5">
          <div
            class="menu-list"
            v-for="(menu, index) in bottomMenu"
            :key="index"
          >
            <div class="menu-list-item">
              <template v-if="menu.link != ''">
                <nuxt-link
                  class="menu-list-title text-primary"
                  :to="localePath(menu.link)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="menu-list-title text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </div>
              </template>
              <div v-if="menu.child_list && menu.child_list.length > 0">
                <div class="menu-item text-text">
                  <nuxt-link
                    class="block"
                    v-for="(v, k) in menu.child_list"
                    :key="k"
                    :to="localePath(v.link)"
                    >{{ v.child_item }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="menu flex justify-between">
        <!-- 左侧列表 -->
        <div class="flex-1 space-y-5">
          <div
            class="menu-list"
            v-for="(menu, index) in leftMenus"
            :key="index"
          >
            <div class="menu-list-item">
              <template v-if="menu.link != ''">
                <nuxt-link
                  class="menu-list-title text-primary"
                  :to="localePath(menu.link)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="menu-list-title text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </div>
              </template>
              <div v-if="menu.child_list && menu.child_list.length > 0">
                <div class="menu-item text-text">
                  <nuxt-link
                    class="block"
                    v-for="(v, k) in menu.child_list"
                    :key="k"
                    :to="localePath(v.link)"
                    >{{ v.child_item }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧列表 -->
        <div class="flex-1 space-y-5">
          <div
            class="menu-list"
            v-for="(menu, index) in rightMenus"
            :key="index"
          >
            <div class="menu-list-item">
              <template v-if="menu.link != ''">
                <nuxt-link
                  class="menu-list-title text-primary"
                  :to="localePath(menu.link)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="menu-list-title text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.0383"
                      cy="5.36756"
                      r="5.0383"
                      fill="#4570B6"
                    />
                  </svg>
                  <div :class="$i18n.locale === 'en' ? 'engWidth' : ''">
                    {{ menu.main_nav }}
                  </div>
                </div>
              </template>
              <div v-if="menu.child_list && menu.child_list.length > 0">
                <div class="menu-item text-text">
                  <nuxt-link
                    class="block"
                    v-for="(v, k) in menu.child_list"
                    :key="k"
                    :to="localePath(v.link)"
                    >{{ v.child_item }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
.menu {
  gap: #{"clamp(0.625rem, -0.966rem + 7.95vw, 5rem)"};
  font-family: "Noto Sans HK", "Poppins", sans-serif;
  &-list {
    letter-spacing: 3px;
    font-family: "Noto Sans TC";
    &-title {
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  &-item {
    font-weight: 400;
  }
}
@media screen and (max-width: 767px) {
  .menu {
    margin-top: 72px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &-list {
      // 14-16
      font-size: #{"clamp(0.875rem, 0.786rem + 0.45vw, 1rem)"};
      // 16-18
      &-title {
        font-size: #{"clamp(1rem, 0.911rem + 0.45vw, 1.125rem)"};
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu {
    margin-top: #{"clamp(8.25rem, 6.25rem + 10vw, 13.75rem)"};
    &-list {
      // 16-20
      font-size: #{"clamp(1rem, 0.25rem + 1.56vw, 1.25rem)"};
      &-title {
        // 18-24
        font-size: #{"clamp(1.125rem, 2.34vw, 1.5rem)"};
      }
    }
  }
}
</style>
