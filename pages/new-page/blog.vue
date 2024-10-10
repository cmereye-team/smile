<template>
  <div class="blog">
    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>科普知識</p>
          <p>blog</p>
        </div>
      </template>
    </Banner>
    <div class="blog-box">
      <H2Tag :title="['科普知識']" />
      <div class="blog-list" v-loading="loading">
        <a
          v-for="item in newArray"
          target="_blank"
          :key="item.id"
          @click="toDetail(item.id)"
        >
          <div>
            <div><img :src="item.img" alt="" /></div>
            <a @click="toDetail(item.id)">更多</a>
          </div>
          <div>
            <div>
              <div>{{ item.typeTag }}</div>
              <div>{{ item.headline }}</div>
            </div>
            <div>{{ item.desc }}</div>
          </div>
        </a>
      </div>
    </div>
    <!-- <div class="blog-more" v-if="isMobile"><i></i><i></i><i></i></div> -->
    <!-- <a class="more-article" @click="getMediaList"> 閱讀更多 </a> -->
    <businessHours />
    <Footer />
    <FooterMobile />
  </div>
</template>
<script>
import Head from "@/components/Publice/Head.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import businessHours from "@/components/commom/business/business-hours.vue";
import Banner from "@/components/Publice/Banner.vue";
import FooterMobile from "@/components/Publice/FooterMobile.vue";
import H2Tag from "@/components/Publice/H2Tag.vue";
import { Loading } from "element-ui";
export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
  },

  head() {
    if (this.$i18n.locale === "en") {
      return {
        meta: [{ hid: "robots", name: "robots", content: "noindex" }],
      };
    }

    return {
      title:
        this.$i18n.locale === "cn" ? this.browserTitleCn : this.browserTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "香港希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，為受老花困擾人士度身訂造矯視方案，讓客人回復高清視力，改善老花問題。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "老花矯視, 老花手術, 激光矯視老花, 老花激光矯視, 老花 激光,老花矯視, 老花矯視 價錢,老花矯視 收費, 老花矯視 推薦, 老花激光矯視 香港, 老花矯視 香港, 老花矯視 原理, 老花, 老花治療, 眼睛老化, 眼睛疲勞, 白內障, 人工晶體, 激光矯視",
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
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant-HK",
          href: "https://smile.hkcmereye.com/vision-correction-presbyopia",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans-CN",
          href: "https://smile.hkcmereye.com/cn/vision-correction-presbyopia",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: false,
      blogList: [
        {
          id: 1,
          img: "https://static.cmereye.com/imgs/2024/05/9a87d93ebad06d0e.png",
          title: "ICL植入式隱形眼鏡要幾錢？",
          text: "高度近視者可以通過手術矯治，可以選擇的手術方式並不多",
          tag: "",
        },
        {
          id: 2,
          img: "https://static.cmereye.com/imgs/2024/05/9a87d93ebad06d0e.png",
          title: "ICL植入式隱形眼鏡要幾錢？",
          text: "高度近視者可以通過手術矯治，可以選擇的手術方式並不多",
          tag: "",
        },
        {
          id: 3,
          img: "https://static.cmereye.com/imgs/2024/05/9a87d93ebad06d0e.png",
          title: "ICL植入式隱形眼鏡要幾錢？",
          text: "高度近視者可以通過手術矯治，可以選擇的手術方式並不多",
          tag: "",
        },
        {
          id: 4,
          img: "https://static.cmereye.com/imgs/2024/05/9a87d93ebad06d0e.png",
          title: "ICL植入式隱形眼鏡要幾錢？",
          text: "高度近視者可以通過手術矯治，可以選擇的手術方式並不多",
          tag: "",
        },
      ],
      newArray: [],
      loading: true,
      canonicalHref: "https://smile.hkcmereye.com/blog",
      canonicalHrefCN: "https://smile.hkcmereye.com/cn/blog",
      browserTitle: "科普知識 - 香港希瑪微笑矯視中心",
      browserTitleCn: "科普知识 - 香港希玛微笑矫视中心",
    };
  },
  methods: {
    // getMediaList() {
    //   let list = this.blogList.slice(0, 4);
    //   this.blogList = [...list, ...this.blogList];
    //   this.getListArray(this.blogList);
    // },
    // getListArray(eeeee) {
    //   this.newArray = eeeee.map((el, index) => {
    //     return {
    //       ...el,
    //       id: index + 1,
    //     };
    //   });
    // },
    async getListBlog() {
      this.loading = true;
      await fetch(`https://admin.hkcmereye.com/api.php/list/32`)
        .then((response) => response.json())
        .then((res) => {
          this.newArray = res.data.map((item, index) => {
            console.log(item.id == 157, "mmmmmmmmmmm");
            return {
              id: item.id,
              img: `https://admin.hkcmereye.com${item.ico}`,
              headline: item.title,
              desc: item.ext_list_des,
              typeTag: item.ext_type_tags,
            };
          });
          if (window.location.href == "https://smile.hkcmereye.com/blog") {
            this.newArray = this.newArray.filter((item) => item.id == 157);
          } else {
            this.newArray;
          }
          this.loading = false;
        });
    },
    toDetail(id) {
      this.$router.push({ path: `/blog/${id}`, params: { id } });
    },
  },
  mounted() {
    this.getListBlog();
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
@media screen and (min-width: 768px) {
  .blog-box {
    margin-top: 75px;
  }
  .blog-list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 85px 50px;
    max-width: 1270px;
    margin: 0 auto 85px;
    & > a {
      cursor: pointer;
      max-width: 383px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      & > div:nth-child(1) {
        position: relative;
        & > a:nth-child(2) {
          position: absolute;
          right: -25px;
          bottom: 10px;
          border-radius: 20px;
          background: #4570b6;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 120% */
          letter-spacing: 3.75px;
          box-sizing: border-box;
          padding: 5px 25px;
        }
        & > a:nth-child(2):hover {
          box-shadow: 0 0 5px 3px #89b0face;
          transform: translate(0, -10px) scale(1.1);
          transition: all 0.3s;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          margin: 34px auto 17px;
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 120% */
          letter-spacing: 5px;
          text-align: center;
        }
        & > div:nth-child(2) {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 35px; /* 175% */
          letter-spacing: 6px;
        }
      }
    }
    & > a:hover {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          transition: all 0.3s;
          & > img {
            transform: scale(1.1);
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          background: #4570b6;
          color: #fff;
          padding-bottom: 3px;
        }
      }
    }
  }
  .more-article {
    border-radius: 100px;
    background: #4570b6;
    padding: 15px 40px;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 100% */
    letter-spacing: 7.5px;
    display: flex;
    margin: 55px auto 85px;
    width: fit-content;
    cursor: pointer;
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/ab7f3a79d8c7379e.png")
      no-repeat;
    background-size: 100% 100%;
    height: 616px;
    width: 100%;
    border-radius: 55px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px; /* 169.167% */
      letter-spacing: 7.5px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px; /* 290% */
      letter-spacing: 0.45px;
      margin-top: -10px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .blog-list {
    max-width: 99.21875vw !important;
  }
}

@media screen and (max-width: 767px) {
  .blog-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.92vw 0;
    & > a {
      margin-bottom: 7.69vw;
      // max-width: 295px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 7.69vw;
      & > div:nth-child(1) {
        position: relative;
        & > div:nth-child(1) {
          border-radius: 2.307vw;
          overflow: hidden;
          & > img {
            width: 98%;
            margin: 0 auto;
          }
        }
        & > a:nth-child(2) {
          position: absolute;
          right: -3.846vw;
          // transform: translateX(-50%);
          bottom: 0;
          border-radius: 5.128vw;
          background: #4570b6;
          // width: 92.332px;
          // height: 28.139px;
          box-sizing: border-box;
          padding: 0.769vw 3.076vw;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 4.615vw;
          font-style: normal;
          font-weight: 500;
          line-height: 7.69vw; /* 166.667% */
          letter-spacing: 0.69vw;
        }
        & > a:nth-child(2):hover {
          box-shadow: 0 0 5px 3px #89b0face;
          transform: translate(0, -10px) scale(1.1);
          transition: all 0.3s;
        }
      }
      & > div:nth-child(2) {
        margin-top: 7.69vw;
        padding-bottom: 4.3589vw;
        border-bottom: 1px solid #afafaf;
        & > div:nth-child(1) {
          color: #4570b6;
          font-family: "Noto Sans HK";
          font-size: 4.615vw;
          font-style: normal;
          font-weight: 500;
          line-height: 7.69vw; /* 166.667% */
          letter-spacing: 3.6px;
          text-align: center;
        }
        & > div:nth-child(2) {
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.589vw;
          font-style: normal;
          font-weight: 300;
          line-height: 6.4vw; /* 178.571% */
          letter-spacing: 2.8px;
          padding: 0 7.435vw;
        }
      }
    }
    & > a:last-child {
      & > div:nth-child(2) {
        border-bottom: none;
      }
    }
  }
  .blog-box {
    margin-bottom: 15.3846vw;
  }
  .more-article {
    border-radius: 100px;
    background: #4570b6;
    padding: 4.3589vw 7.69vw;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 5.128vw;
    font-style: normal;
    font-weight: 700;
    line-height: 5.128vw; /* 100% */
    letter-spacing: 1.538vw;
    display: flex;
    margin: 14.1025vw auto 21.79vw;
    width: fit-content;
    cursor: pointer;
  }
  .blog-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.4vw auto;
    & > i {
      display: inline-block;
      width: 4px;
      height: 4px;
      background: #4570b6;
      border-radius: 50%;
      margin: 2.56vw 0;
    }
  }
  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/05/700a09eef040b407.png")
      no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 6.15vw 7.69vw 14.1025vw;
    border-radius: 11.28vw;
    padding-left: 2.564vw;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 5.128vw;
    & > p {
      max-width: 28.2vw;
    }
    & > p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 3.589vw;
      font-style: normal;
      font-weight: 700;
      line-height: 5.38vw; /* 169.167% */
      letter-spacing: 0.7px;
    }
    & > p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 2.564vw;
      font-style: normal;
      font-weight: 500;
      line-height: 4.615vw; /* 290% */
      letter-spacing: 0.5px;
    }
  }
}
</style>