<template>
  <div class="cmerInfo">
    <div class="pcShow page_container cmerInfo-in">
      <div
        class="wow animate__fadeInLeft cmerInfo-in-box"
        @click="handleInfo('/vision-correction/relex-smile')"
      >
        <img
          class="cmerInfoTagClick_1"
          src="https://static.cmereye.com/imgs/2023/04/748ab80a564d55b8.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_1"
            v-html="$t('home.cmerInfo[0].h4')"
          ></h4>
          <span class="cmerInfoTagClick_1">{{
            $t("home.cmerInfo[0].span")
          }}</span>
        </div>
      </div>

      <div
        class="wow animate__fadeInRight cmerInfo-in-box"
        @click="handleInfo('/group-profile')"
      >
        <img
          class="cmerInfoTagClick_2"
          src="https://static.cmereye.com/imgs/2023/04/69dd6f45ce4fdb12.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_2"
            v-html="$t('home.cmerInfo[2].h4')"
          ></h4>
          <span class="cmerInfoTagClick_2">{{
            $t("home.cmerInfo[2].span")
          }}</span>
        </div>
      </div>
      <div
        class="wow animate__fadeInLeft cmerInfo-in-box"
        @click="handleInfo('/our-medical-team')"
      >
        <img
          class="cmerInfoTagClick_3"
          src="https://static.cmereye.com/imgs/2023/04/88bdeb6b94c2375d.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_3"
            v-html="$t('home.cmerInfo[1].h4')"
          ></h4>
          <span class="cmerInfoTagClick_3">{{
            $t("home.cmerInfo[1].span")
          }}</span>
        </div>
      </div>
      <div
        class="wow animate__fadeInRight cmerInfo-in-box"
        @click="handleInfo('/contact-us')"
      >
        <img
          class="cmerInfoTagClick_4"
          src="https://static.cmereye.com/imgs/2023/04/e8d6af0160cfc439.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_4"
            v-html="$t('home.cmerInfo[3].h4')"
          ></h4>
          <span class="cmerInfoTagClick_4">{{
            $t("home.cmerInfo[3].span")
          }}</span>
        </div>
      </div>
    </div>
    <div class="mbShow page_container cmerInfo-in">
      <div
        class="wow animate__jackInTheBox cmerInfo-in-box"
        @click="handleInfo('/vision-correction/relex-smile')"
      >
        <img
          class="cmerInfoTagClick_1"
          src="https://static.cmereye.com/imgs/2023/04/1b9fffce0077e770.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_1"
            v-html="$t('home.cmerInfo[0].h4')"
          ></h4>
          <span class="cmerInfoTagClick_1">{{
            $t("home.cmerInfo[0].span")
          }}</span>
        </div>
      </div>
      <div
        class="wow animate__jackInTheBox cmerInfo-in-box"
        @click="handleInfo('/group-profile')"
      >
        <img
          class="cmerInfoTagClick_2"
          src="https://static.cmereye.com/imgs/2023/04/60d92825498a1a12.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_2"
            v-html="$t('home.cmerInfo[2].h4')"
          ></h4>
          <span class="cmerInfoTagClick_2">{{
            $t("home.cmerInfo[2].span")
          }}</span>
        </div>
      </div>
      <div
        class="wow animate__jackInTheBox cmerInfo-in-box"
        @click="handleInfo('/our-medical-team')"
      >
        <img
          class="cmerInfoTagClick_3"
          src="https://static.cmereye.com/imgs/2023/04/3caa4f0732ba738c.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_3"
            v-html="$t('home.cmerInfo[1].h4')"
          ></h4>
          <span class="cmerInfoTagClick_3">{{
            $t("home.cmerInfo[1].span")
          }}</span>
        </div>
      </div>
      <div
        class="wow animate__jackInTheBox cmerInfo-in-box"
        @click="handleInfo('/contact-us')"
      >
        <img
          class="cmerInfoTagClick_4"
          src="https://static.cmereye.com/imgs/2023/04/285b92be603d3f08.jpg"
        />
        <div>
          <h4
            class="cmerInfoTagClick_4"
            v-html="$t('home.cmerInfo[3].h4')"
          ></h4>
          <span class="cmerInfoTagClick_4">{{
            $t("home.cmerInfo[3].span")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},

  methods: {
    handleInfo(_url) {
      var _path = this.localePath(_url);
      this.$router.push(_path);
    },
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 950px) {
  .cmerInfo-in {
    width: 100%;
    display: flex;
    padding: 0 0 70px 0;
    flex-wrap: wrap;
    &-box {
      width: 50%;
      display: inline-block;
      position: relative;
      transition: all 0.3s;
      cursor: pointer;
      img {
        width: 100%;
        display: inline-block;
      }
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
      }
      & > div {
        position: absolute;
        bottom: 15px;
        h4 {
          letter-spacing: 0.1em;
          background: linear-gradient(180deg, #4b7bbc 0%, #7ed7ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 500;
          font-size: 20px;
          /deep/ strong {
            font-weight: 500;
            font-size: 50px;
          }
        }
        span {
          font-weight: 400;
          font-size: 20px;
          color: #6d6e71;
        }
      }
      &:nth-of-type(1) > div,
      &:nth-of-type(3) > div {
        left: 25px;
      }
      &:nth-of-type(2) > div,
      &:nth-of-type(4) > div {
        right: 25px;
        text-align: right;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .cmerInfo-in {
    &-box {
      width: 100%;
      // display: inline-block;
      position: relative;
      img {
        width: 100%;
        display: inline-block;
      }
      & > div {
        position: absolute;
        bottom: 15px;
        h4 {
          letter-spacing: 0.1em;
          background: linear-gradient(180deg, #4b7bbc 0%, #7ed7ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 500;
          font-size: 20px;
          line-height: 40px;
          /deep/ strong {
            font-weight: 500;
            font-size: 50px;
          }
        }
        span {
          font-weight: 400;
          font-size: 15px;
          color: #6d6e71;
        }
      }
      &:nth-of-type(1) > div,
      &:nth-of-type(3) > div {
        left: 30px;
      }
      &:nth-of-type(2) > div,
      &:nth-of-type(4) > div {
        right: 30px;
        text-align: right;
      }
    }
  }
}
@media screen and (min-width: 767px) and (max-width: 949px) {
  .cmerInfo-in {
    &-box {
      width: 100%;
      // display: inline-block;
      position: relative;
      img {
        width: 100%;
        display: inline-block;
      }
      & > div {
        position: absolute;
        bottom: 15px;
        h4 {
          letter-spacing: 0.1em;
          background: linear-gradient(180deg, #4b7bbc 0%, #7ed7ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 500;
          font-size: 20px;
          line-height: 40px;
          /deep/ strong {
            font-weight: 500;
            font-size: 50px;
          }
        }
        span {
          font-weight: 400;
          font-size: 15px;
          color: #6d6e71;
        }
      }
      &:nth-of-type(1) > div,
      &:nth-of-type(3) > div {
        left: 30px;
      }
      &:nth-of-type(2) > div,
      &:nth-of-type(4) > div {
        right: 30px;
        text-align: right;
      }
    }
  }
  .smileSerItemBox {
    padding: 50px 0 50px 25px;
    & > div {
      width: 15vw;
      height: 148px; 
    }
    & > h3 {
      font-size: 2.15vw;
    }
    & > P {
      font-size: 1.358vw;
    line-height: 25px;
    }
    .moreLink {
      font-size: 1.5vw;
      bottom: -0.5vw;
      right: 0;
    }
    .morelink_img {
      bottom: -10px;
      right: 0;
    }
  }
}
@media screen and (min-width: 950px) and (max-width: 1024px) {
  .cmerInfo-in {
    max-width: 900px !important;
    margin: 0 auto;
    margin-left: -50px;
  }
  .cmerInfo-in-box {
    width: 40%;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .cmerInfo-in {
    max-width: 900px !important;
    margin: 0 auto;
  }
}
</style>
