<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-22 10:06:43
 * @LastEditTime: 2025-08-25 14:52:01
 * @FilePath: /components/commom/option/SideV2.vue
 * @Description: 菜单栏
-->
<script>
export default {
  data() {
    return {
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
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
              link: "/patient-info",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
              link: "/flow-of-vision-correction",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
              link: "/post-corrective-care",
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
    leftMenus() {
      return this.menuList.slice(0, 3);
    },
    rightMenus() {
      return this.menuList.slice(3);
    },
  },
};
</script>
<template>
  <div class="side">
    <div class="menu">
      <!-- 左侧列表 -->
      <div class="menu-container">
        <div class="menu-list" v-for="(menu, index) in leftMenus" :key="index">
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
                  <circle cx="5.0383" cy="5.36756" r="5.0383" fill="#4570B6" />
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
                  <circle cx="5.0383" cy="5.36756" r="5.0383" fill="#4570B6" />
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
      <div class="menu-container">
        <div class="menu-list" v-for="(menu, index) in rightMenus" :key="index">
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
                  <circle cx="5.0383" cy="5.36756" r="5.0383" fill="#4570B6" />
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
                  <circle cx="5.0383" cy="5.36756" r="5.0383" fill="#4570B6" />
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
  </div>
</template>
<style scoped lang="scss">
.menu {
  // padding-top: #{'clamp(8.25rem, 7.159rem + 5.45vw, 11.25rem)'};
  padding-top: #{"clamp(8.25rem, 6.25rem + 10vw, 13.75rem)"};
  display: flex;
  justify-content: space-between;
  gap: #{"clamp(0.625rem, -0.966rem + 7.95vw, 5rem)"};
  &-container {
    flex: 1;
  }
  &-list {
    letter-spacing: 3px;
    font-family: "Noto Sans TC";
    // font-size: 20px;
    font-size: #{"clamp(1rem, 0.909rem + 0.45vw, 1.25rem)"};
    margin-bottom: 20px;
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
</style>
