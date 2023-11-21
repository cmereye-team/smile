<template>
  <div class="Se2ComIntro justify-center page_container">
    <div class="section_text md:flex justify-center">
      <div class="md:flex justify-center table-box pcShow">
        <table class="gdp">
          <caption
            :style="{ color: $i18n.locale === 'en' ? '#6d6e76' : '#444343' }"
          >
            {{
              $t("contactUs.serveTable.title")
            }}
          </caption>
          <thead>
            <tr>
              <th>{{ $t("contactUs.serveTable.th1") }}</th>
              <th>{{ $t("contactUs.serveTable.th2") }}</th>
              <th>WhatsApp</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color: #f3fcfe">
              <td>{{ $t("contactUs.serveTable.h3_1") }}</td>
              <td>3892 5099</td>
              <td>9345 1508</td>
            </tr>
            <tr>
              <td>{{ $t("contactUs.serveTable.h3_2") }}</td>
              <td>3892 5099</td>
              <td>9796 2992</td>
            </tr>
            <tr>
              <td>{{ $t("contactUs.serveTable.h3_3") }}</td>
              <td>3892 5099</td>
              <td>6918 0511</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mbShow table-box-mb">
        <div class="serve">
          <p>{{ $t("contactUs.serveTable.title") }}</p>
        </div>
        <div class="box-mb">
          <h3>{{ $t("contactUs.serveTable.h3_1") }}</h3>
          <div class="flex justify-center phone-box items-center">
            <img
              style="width: 13px; height: 15px"
              src="https://static.cmereye.com/imgs/2023/01/ed5d72922187f32e.jpg"
              alt=""
            />
            <span class="mr-10"> 3892 5099 </span>

            <img
              style="width: 17px; height: 17px"
              src="https://static.cmereye.com/imgs/2023/01/e18c1e32dde853ea.png"
              alt=""
            />
            <span> 9345 1508 </span>
          </div>
        </div>
        <div class="box-mb">
          <h3>{{ $t("contactUs.serveTable.h3_2") }}</h3>
          <div class="flex justify-center phone-box items-center">
            <img
              style="width: 13px; height: 15px"
              src="https://static.cmereye.com/imgs/2023/01/ed5d72922187f32e.jpg"
              alt=""
            />
            <span class="mr-10"> 3892 5099 </span>

            <img
              style="width: 17px; height: 17px"
              src="https://static.cmereye.com/imgs/2023/01/e18c1e32dde853ea.png"
              alt=""
            />
            <span> 9796 2992 </span>
          </div>
        </div>
        <div class="box-mb">
          <h3>{{ $t("contactUs.serveTable.h3_3") }}</h3>
          <div class="flex justify-center phone-box items-center">
            <img
              style="width: 13px; height: 15px"
              src="https://static.cmereye.com/imgs/2023/01/ed5d72922187f32e.jpg"
              alt=""
            />
            <span class="mr-10"> 3892 5099</span>

            <img
              style="width: 17px; height: 17px"
              src="https://static.cmereye.com/imgs/2023/01/e18c1e32dde853ea.png"
              alt=""
            />
            <span> 6918 0511 </span>
          </div>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
// comon
.Se2ComIntro {
  .section_text {
    .table-box {
      background: #fff;
    }
    .server {
      margin: 3vw 0;
      font-size: 24px;
    }
  }

  #de {
    height: 30px;
    background-color: #deeded;
    font-weight: 700;
    text-align: center;
    /*设置“细节”单元格*/
  }
  td {
    height: 5vw;
    text-align: center;
    /*设置表体单元格居中对齐*/
  }
  table tr:nth-child(3) {
    background-color: #f3fcfe;
  }
  .gdp {
    margin-bottom: 2vw;
  }
  .gdp caption {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    /* identical to box height, or 120% */

    letter-spacing: 0.1em;
    padding: 41px 0;
    color: #444343;
  }
  .gdp td,
  th {
    width: 18vw;
    border-top: solid 1px #dfdfdf;
    border-left: solid 1px #dfdfdf;
  }
  .gdp th {
    height: 5vw;
    // background-color: #F3FCFE;
    // border-top: none;
  }
  .gdp td:first-child,
  .gdp th:first-child {
    border-left: none;
  }
}
// pc
@media only screen and (min-width: 768px) {
  .Se2ComIntro .gdp th {
    font-size: 15px;
    font-weight: 400;
  }
  .Se2ComIntro .gdp td {
    font-size: 20px;
  }
  .Se2ComIntro {
    margin-top: -5vw;
    .section_text {
      // padding: 1vw 0vw 0vw 2vw;
    }
  }
}

// mb
@media only screen and (max-width: 768px) {
  .table-box-mb {
    text-align: center;
    background-color: #fff;
    margin-top: -19vw;
    margin-left: 5px;
    margin-right: 5px;
    .serve {
      p {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height, or 200% */

        letter-spacing: 0.1em;

        color: #444343;
      }

      padding: 10px 0;
    }
  }
  .box-mb {
    border-top: 1px solid #dfdfdf;
    h3 {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 18px;
      /* identical to box height, or 138% */
      padding-top: 20px;
      text-align: center;
      letter-spacing: 0.15em;

      background: linear-gradient(91deg, #608bc4 20.96%, #76c8e3 103.17%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .phone-box {
      padding: 11px 0 20px;
      img {
        margin-right: 9px;
      }
      span {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height, or 164% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #6d6e71;
      }
    }
  }
}
</style>
