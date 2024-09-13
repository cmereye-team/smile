<template>
  <div>
    <Header />
    <Navbar />
    <div class="questions">
      <div id="faq-smile">
        <H2Tag :title="['SMILE 微笑激光矯視']" />
        <client-only>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item
              v-for="(item, index) in lists"
              :key="index"
              :name="`${index + 1}`"
            >
              <template slot="title">
                <div>{{ item.title }}</div>
              </template>
              <div v-html="item.content"></div>
            </el-collapse-item>
          </el-collapse>
        </client-only>
      </div>
      <div id="faq-lasik">
        <H2Tag :title="['LASIK 激光矯視']" />
        <client-only>
          <el-collapse v-model="activeNameTwo" accordion>
            <el-collapse-item
              v-for="(item, index) in listsTwo"
              :key="index"
              :title="item.title"
              :name="`${index + 1}`"
            >
              <div v-html="item.content"></div>
            </el-collapse-item>
          </el-collapse>
        </client-only>
      </div>
      <div id="faq-icl">
        <H2Tag :title="['ICL植入式隱形眼鏡']" />
        <client-only>
          <el-collapse v-model="activeNameThree" accordion>
            <el-collapse-item
              v-for="(item, index) in listsFour"
              :key="index"
              :title="item.title"
              :name="`${index + 1}`"
            >
              <div v-html="item.content"></div>
            </el-collapse-item>
          </el-collapse>
        </client-only>
      </div>
      <div id="faq-presbyopia">
        <H2Tag :title="['CLEAR-Vision']" />
        <client-only>
          <el-collapse v-model="activeNameFour" accordion>
            <el-collapse-item
              v-for="(item, index) in listsThree"
              :key="index"
              :title="item.title"
              :name="`${index + 1}`"
            >
              <div v-html="item.content"></div>
            </el-collapse-item>
          </el-collapse>
        </client-only>
      </div>
    </div>

    <!-- <firstProblem />
    <secondProblem />
    <thirtProblem />
    <fourProblem /> -->
    <Footer />
    <footers />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import firstProblem from "@/components/content/FreQuestions/firstProblem.vue";
import secondProblem from "@/components/content/FreQuestions/secondProblem.vue";
import thirtProblem from "@/components/content/FreQuestions/thirtProblem.vue";
import fourProblem from "@/components/content/FreQuestions/fourProblem.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: {
    H2Tag,
    Header,
    Navbar,
    Footer,
    firstProblem,
    secondProblem,
    thirtProblem,
    fourProblem,
    footers,
  },
  data() {
    return {
      canonicalHref: "https://smile.hkcmereye.com/FreQuestions",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/FreQuestions",
      browserTitle: "常見問題",
      browserTitleCn: "常见问题",
      activeName: "1",
      activeNameTwo: "1",
      activeNameThree: "1",
      activeNameFour: "1",
      lists: [
        {
          ...this.$t("freQuestios.firstProblem.problem1"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem2"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem3"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem4"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem5"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem6"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem7"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem8"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem9"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem10"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem11"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem12"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem13"),
        },
        {
          ...this.$t("freQuestios.firstProblem.problem14"),
        },
      ],
      listsTwo: [
        {
          ...this.$t("freQuestios.secondProblem.problem1"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem2"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem3"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem4"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem5"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem6"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem7"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem8"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem9"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem10"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem11"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem12"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem13"),
        },
        {
          ...this.$t("freQuestios.secondProblem.problem14"),
        },
      ],
      listsThree: [
        {
          ...this.$t("freQuestios.fourProblem.problem1"),
        },
        {
          ...this.$t("freQuestios.fourProblem.problem2"),
        },
        {
          ...this.$t("freQuestios.fourProblem.problem3"),
        },
        {
          ...this.$t("freQuestios.fourProblem.problem4"),
        },
        {
          ...this.$t("freQuestios.fourProblem.problem5"),
        },
        {
          ...this.$t("freQuestios.fourProblem.problem6"),
        },
      ],
      listsFour: [
        {
          ...this.$t("freQuestios.thirtProblem.problem1"),
        },
        {
          ...this.$t("freQuestios.thirtProblem.problem2"),
        },
        {
          ...this.$t("freQuestios.thirtProblem.problem3"),
        },
        {
          ...this.$t("freQuestios.thirtProblem.problem4"),
        },
        {
          ...this.$t("freQuestios.thirtProblem.problem5"),
        },
      ],
    };
  },
  head() {
    return {
      title: "常見問題 ",
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "常見問題",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "常見問題",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            this.$i18n.locale === "cn"
              ? this.canonicalHrefCN
              : this.canonicalHref,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://smile.hkcmereye.com/FreQuestions",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/FreQuestions",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/FreQuestions",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.questions {
  max-width: 1280px;
  margin: 0 auto 10vw;
  & > div {
    padding-top: 10vw;
  }
}
:deep(.el-collapse-item__header) {
  -webkit-background-clip: text;
  background-image: -webkit-linear-gradient(bottom, #81dbec, #4570b6);
  font-size: 18px;
  font-weight: 800;
  -webkit-text-fill-color: transparent;
  box-sizing: border-box;
  padding: 20px 40px 20px 60px;
  height: auto;
  border-bottom: 1px solid #ebeef5;
  position: relative;
}
:deep(.el-collapse-item__header::before) {
  position: absolute;
  content: "";
  background-image: url(https://static.cmereye.com/imgs/2024/08/9c3b54db4daa3ac9.png);
  background-repeat: no-repeat;
  left: 10px;
  top: 25px;
  display: inline-block;
  height: 42px;
  width: 40px;
}
:deep(.el-collapse-item__header::after) {
  position: absolute;
  content: "";
  background-image: url(https://static.cmereye.com/imgs/2024/08/d6bb6ef5de180233.png);
  background-repeat: no-repeat;
  right: 30px;
  top: 45px;
  display: inline-block;
  height: 24px;
  width: 25px;
}
:deep(.el-collapse-item .is-active::before) {
  position: absolute;
  content: "";
  background-image: url(https://static.cmereye.com/imgs/2024/08/09eba4d97d82109d.png);
  background-repeat: no-repeat;
  left: 10px;
  top: 25px;
  display: inline-block;
  height: 42px;
  width: 40px;
}
:deep(.el-icon-arrow-right:before) {
  content: none !important;
}
:deep(.el-icon-arrow-right:after) {
  content: none !important;
}
:deep(.el-collapse-item .is-active::after) {
  position: absolute;
  content: "";
  background-image: url(https://static.cmereye.com/imgs/2024/08/9c5ad08127153afd.png);
  background-repeat: no-repeat;
  right: 30px;
  top: 45px;
  display: inline-block;
  height: 24px;
  width: 25px;
}
:deep(.el-collapse-item .is-active) {
  position: relative;
  -webkit-background-clip: border-box;
  -webkit-text-fill-color: #fff;
  background-image: -webkit-linear-gradient(bottom, #4570b6, #4570b6);
  color: #fff;
  box-sizing: border-box;
  height: auto;
  border-bottom: 1px solid #ebeef5;
}
:deep(.el-collapse-item__content) {
  color: #6d6e71;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 35px;
  padding: 20px;
}
.section.vedio_box {
  margin-top: 0;
}

@media screen and (max-width: 768px) {
  .questions {
    max-width: 100%;
    margin: 10vw auto 0;
    box-sizing: border-box;
    padding: 0 25px;
    & > div {
      padding-top: 22vw;
    }
  }
  :deep(.el-collapse-item__header) {
    -webkit-background-clip: text;
    background-image: -webkit-linear-gradient(bottom, #81dbec, #4570b6);
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
    -webkit-text-fill-color: transparent;
    box-sizing: border-box;
    padding: 10px 20px 10px 30px;
    height: auto;
    border-bottom: 1px solid #ebeef5;
    position: relative;
  }
  :deep(.el-collapse-item .is-active) {
    position: relative;
    -webkit-background-clip: border-box;
    -webkit-text-fill-color: #fff;
    background-image: -webkit-linear-gradient(bottom, #4570b6, #4570b6);
    color: #fff;
    box-sizing: border-box;
    height: auto;
    border-bottom: 1px solid #ebeef5;
  }
  :deep(.el-collapse-item__content) {
    color: #6d6e71;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.1em;
    line-height: 24px;
    padding: 20px 20px 20px 40px;
  }

  :deep(.el-collapse-item__header::before) {
    position: absolute;
    content: "";
    background-image: url(https://static.cmereye.com/imgs/2024/08/9c3b54db4daa3ac9.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    left: 5px;
    top: 10px;
    display: inline-block;
    height: 16px;
    width: 15px;
  }
  :deep(.el-collapse-item__header::after) {
    position: absolute;
    content: "";
    background-image: url(https://static.cmereye.com/imgs/2024/08/d6bb6ef5de180233.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    right: 5px;
    top: 10px;
    display: inline-block;
    height: 16px;
    width: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  :deep(.el-collapse-item .is-active::before) {
    position: absolute;
    content: "";
    background-image: url(https://static.cmereye.com/imgs/2024/08/09eba4d97d82109d.png);
    background-repeat: no-repeat;
    left: 5px;
    top: 10px;
    display: inline-block;
    height: 21px;
    width: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  :deep(.el-collapse-item .is-active::after) {
    position: absolute;
    content: "";
    background-image: url(https://static.cmereye.com/imgs/2024/08/9c5ad08127153afd.png);
    background-repeat: no-repeat;
    right: 10px;
    // top: 18px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    height: 2px;
    width: 12px;
  }
}
</style>
