<template>
  <div class="page_container serve-page">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>消費券詳情</h2>
    </div>
    <div class="flex md:flex-row justify-around md:mt-10 flex-col">
      <iframe
        src="https://smile.hkcmereye.com/%E6%B6%88%E8%B2%BB%E5%88%B8%E8%A9%B3%E6%83%85/"
        frameborder="0"
        class="iframe"
      ></iframe>
    </div>

    <div class="flex justify-center my-10">
      <a href="#" class="mbShow">
        <button>
          <div class="flex btn-yuyue">
            <img
              src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
              alt=""
              style="width: 12vw"
            />
            <div class="flex flex-col justify-center" style="padding: 0 10px">
              <span>立即預約 / 查詢</span>
              <span>6061 0511</span>
            </div>
          </div>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
}
::v-deep .el-input__inner {
  border-radius: 10px;
}
::v-deep .el-icon-arrow-up:before {
  color: #ff161600;
  background: url("https://static.cmereye.com/imgs/2023/01/918ee2a9b3b07245.png")
    no-repeat scroll right center transparent;
}

@media screen and (min-width: 768px) {
  .iframe {
    width: 100%;
    // height: calc(100vh + 300px);
    height: 1440px;
  }
  .btn {
    button {
      background: linear-gradient(90.24deg, #4b7bbc 10.22%, #7ed7ea 100%);
      border-radius: 30px;
      width: 100%;
      padding: 12px 0;
      display: flex;
      justify-content: center;
      align-content: center;
      span {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 10px;
        /* or 77% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #ffffff;
      }
    }
  }
  .form {
    width: 572px;
    height: 305px;
    background: linear-gradient(
      115.71deg,
      rgba(75, 123, 188, 0.2) 6.52%,
      rgba(126, 215, 234, 0.2) 97.76%
    );
    border-radius: 10px;
    padding-top: 27px;
    margin: 84px auto 0 auto;
  }
  .serve-page {
    margin-bottom: 129px;
  }
  .more-btn {
    display: flex;
    justify-content: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 13px 23px;
    margin: 0 auto;
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    cursor: pointer;
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }
  .serve-box {
    width: 315px;
    height: 288px;
    border: 2px solid #4570b6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
    margin-top: 40px;
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height, or 150% */
      margin-top: 36px;
      text-align: center;
      letter-spacing: 0.1em;

      color: #444343;
    }
  }
}
@media screen and (max-width: 768px) {
  .iframe {
    width: 100%;
    // height: calc(100vh + 300px);
    height: 1440px;
  }
  .btn {
    button {
      background: linear-gradient(90.24deg, #4b7bbc 10.22%, #7ed7ea 100%);
      border-radius: 30px;
      width: 100%;
      padding: 12px 0;
      display: flex;
      justify-content: center;
      align-content: center;
      span {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 10px;
        /* or 77% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #ffffff;
      }
    }
  }
  .form {
    width: 342px;
    height: 423px;
    background: linear-gradient(
      115.71deg,
      rgba(75, 123, 188, 0.2) 6.52%,
      rgba(126, 215, 234, 0.2) 97.76%
    );
    border-radius: 10px;
    padding-top: 27px;
    margin: 84px auto 0 auto;
  }
  h2 {
    font-size: 16px;
  }
  .more-btn {
    background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
    width: 40%;
    margin: 0 auto;
    padding: 10px 0;
    span {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #ffffff;
    }
  }
  .serve-box {
    width: 215px;
    height: 188px;
    border: 2px solid #4570b6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
    margin-top: 40px;
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      /* identical to box height, or 150% */

      text-align: center;
      letter-spacing: 0.1em;
      margin-top: 15px;
      color: #444343;
    }
    img {
      width: 32%;
    }
  }
}
</style>
