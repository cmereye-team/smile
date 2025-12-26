<template>
  <div class="footerBox">
    <div class="online footer mbShow">
      <div class="foot">
        <component
          v-for="item in footerLists"
          :key="item.title"
          :is="isExternal(item.link) ? 'a' : 'NuxtLink'"
          :href="isExternal(item.link) ? item.link : undefined"
          :to="!isExternal(item.link) ? item.link : undefined"
          :target="isExternal(item.link) ? '_blank' : undefined"
          :rel="isExternal(item.link) ? 'noopener noreferrer' : undefined"
        >
          <div class="box">
            <img :src="item.img" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerLists: [
        {
          type: "tel",
          link: "tel:(+852)38925099",
          img: "https://static.cmereye.com/imgs/2023/03/4f2e7a260618edb4.png",
          title: this.$t("home.footer.title1"),
        },
        {
          type: "href",
          link: "https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&oname=CS_Katherine&r=&rf1=https%3A//smile.hkcmereye&rf2=.com/&p=https%3A//smile.hkcmereye.com/&cid=26ad3fcc05fa407b81167bda7abd1c92&sid=26ad3fcc05fa407b81167bda7abd1c92",
          img: "https://static.cmereye.com/imgs/2023/03/935a17da94382a86.png",
          title: this.$t("home.footer.title2"),
        },
        {
          type: "href",
          link: "https://wa.me/85269408569",
          img: "https://static.cmereye.com/imgs/2023/03/e011cddb240290b9.png",
          title: "Whatsapp",
        },
        {
          type: "link",
          link: "/booking",
          img: "https://static.cmereye.com/imgs/2023/03/aa60fde6a44f6099.png",
          title: this.$t("home.footer.title3"),
        },
      ],
    };
  },
  methods: {
    /**
     * @description: 判断是否为外部链接
     * @param {string} url 链接地址
     */
    isExternal(url) {
      // 如果为空或只是 # 开头，视为内部
      if (!url || url.startsWith("#")) return false;

      // 任何带协议的都视为外部（包含 http/https/tel/mailto/whatsapp: 等）
      return (
        /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ||
        /^\/\//.test(url) || // 协议相对链接 //example.com
        url.startsWith("tel:") ||
        url.startsWith("mailto:") ||
        url.startsWith("whatsapp:")
      );
    },
    handleFoot(data) {
      if (data.type === "link") {
        this.$router.push({
          path: data.link,
        });
      } else if (data.type === "href") {
        window.open(data.link);
      } else if (data.type === "tel") {
        window.location.href = "tel:38925099";
      }
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
//mb
@media only screen and (max-width: 760px) {
  .foot {
    width: 100%;
    display: flex;
    height: 102px;
    background: #4570b6;
    justify-content: center;
    align-items: center;
    .box {
      height: 62%;
      width: 100%;
      // width: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 0.5px solid #d9eaed;
      img {
        width: 28px;
      }
      p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        margin-top: 16px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #d9eaed;
      }
    }
  }
  .face-primary {
    .what {
      width: 6vw;
    }
  }
  .footerBox {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 102;
    padding: 0;
    width: 100vw;
  }
  a {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(4) .box {
      border: 0;
    }
  }
  .face-button1 {
    width: 50%;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    margin: 0 !important;
    background-color: #57b2f3;
    border-radius: 18px 18px 0 0;
  }
  .face-button {
    width: 50%;
    line-height: 56px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 10px;
    float: left;
    margin: 0 !important;
    background-color: #9bd0f5;
    color: #fff;
    border-radius: 18px 18px 0 0;
  }
  .footer-coupon {
    width: 103px;
    height: 103px;
    position: absolute;
    bottom: 160px;
    right: 15px;
    background: #4570b6;
    z-index: 91;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      top: -5px;
      span {
        display: block;
        width: 100%;
        text-align: center;
        color: #fff;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 1;
        position: relative;
        bottom: -5px;
      }
    }
  }
  .footer_coupon_mb {
    background: #98cec3;
    top: -100%;
  }
}
</style>
