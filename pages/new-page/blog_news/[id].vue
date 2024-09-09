<template>
  <div class="id_content">
    <Head />
    <div class="content_box" v-loading="loading">
      <div class="_data">{{ essay.content }}</div>
      <div v-html="essay.content"></div>
      <div v-if="essay.source" class="source">
        <div>資料來源：</div>
        <a :href="essay.source" target="_blank">{{ essay.author }}</a>
      </div>
    </div>
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>

<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";

export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
  },
  data() {
    return {
      id: "",
      essay: {
        author: "",
        content: "",
        source: "",
      },
      loading: true,
      browserTitle: "",
      description: "",
      keywords: "",
    };
  },
  head() {
    return {
      title: this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description, 
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
      ],
    };
  },
  created() {
    this.id = this.$route.params.slug;
  },
  methods: {
    getArticle() {
      this.loading = true;
      fetch(`https://admin.hkcmereye.com/api.php/content/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((res) => {
          this.loading = false; // 加载完成
          this.browserTitle = res.data.subtitle;
          this.description = res.data.description;
          this.keywords = res.data.keywords;
          this.essay = {
            essay_title: res.data.title,
            author: res.data.author,
            content: res.data.content,
            source: res.data.source,
          };
          this.scrollToTop(); // 滚动到页面顶部
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
          this.loading = false; //
        });
    },
    // 滚动到页面顶部
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.getArticle(); // 直接在 mounted 钩子中发起请求
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  ._data {
    width: 1px;
    height: 1px;
    background: transparent;
    color: transparent;
    overflow: hidden;
  }
  .source {
    margin-top: 20px;
    margin-bottom: 50px;
    & > div {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 233.333% */
      letter-spacing: 3.75px;
    }
    & > a {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px;
      letter-spacing: 3.75px;
      // text-decoration-line: underline;
      border-bottom: 1px solid #6d6e71;
    }
    & > a:hover {
      color: #113d85;
      border-bottom: 1px solid #113d85;
      font-weight: 400;
    }
  }
  :deep(.content_box) {
    max-width: 960px;
    margin: 0 auto;
    margin-top: 145px;
    .img_context {
      margin: 30px auto;
      max-width: 870px;
    }
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 35px; /* 175% */
      letter-spacing: 5px;
      margin-bottom: 10px;
    }
    .headline {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 35px; /* 100% */
      letter-spacing: 6px;
      text-align: center;
    }
    .first_level_heading {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 120% */
      letter-spacing: 6.25px;
      margin: 54px auto;
      text-align: center;
    }
    .table_box,
    .table_box_2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .h3_box {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 120% */
      letter-spacing: 4.25px;
      text-align: left;
    }
    .firstRow {
      & > td {
        p {
          color: #fff;
          margin-bottom: 0;
          font-weight: 500;
          text-align: center;
        }
      }
      & > td:nth-child(1) {
        width: 180px;
      }
      & > td:nth-child(2) {
        width: 280px;
      }
      & > td:nth-child(3) {
        width: 280px;
      }
    }
    ul > li {
      p {
        text-align: left;
      }
    }
    .list-paddingleft-2 {
      padding-left: 40px;
    }
  }
}
@media screen and (max-width: 767px) {
  ._data {
    width: 1px;
    height: 1px;
    background: transparent;
    color: transparent;
    overflow: hidden;
  }
  .source {
    margin-top: 10px;
    margin-bottom: 40px;
    & > div {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 250% */
      letter-spacing: 0.6px;
    }
    & > a {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0.6px;
      // text-decoration-line: underline;
      border-bottom: 1px solid #6d6e71;
    }
    & > a:hover {
      color: #113d85;
      border-bottom: 1px solid #113d85;
      font-weight: 400;
    }
  }
  :deep(.content_box) {
    max-width: 960px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 15px;
    margin-top: 145px;
    .img_context {
      margin: 30px auto;
      max-width: 870px;
    }
    p {
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 214.286% */
      letter-spacing: 0.7px;
      margin-bottom: 10px;
    }
    .headline {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      letter-spacing: 3px;
    }
    .first_level_heading {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 116.5% */
      letter-spacing: 8px;
      margin: 24px auto;
      text-align: center;
    }
  }
}
</style>