<template>
  <div class="page_container serve-page">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{ $t("ophthalmicInfo.divit.title") }}</h2>
    </div>
    <div class="pageContent">
      <div class="content-text">
        <p>{{ $t("ophthalmicInfo.divit.contentText") }}</p>
        <p>{{ $t("ophthalmicInfo.divit.contentText0_1") }}</p>
        <p>{{ $t("ophthalmicInfo.divit.contentText0") }}</p>
        <p><span>*</span>{{ $t("ophthalmicInfo.divit.contentText1") }}</p>
        <p>
          <span
            ><img
              src="https://static.cmereye.com/imgs/2023/08/cb312fef9fc20f9f.png"
              alt="" /></span
          >{{ $t("ophthalmicInfo.divit.contentText2") }}
        </p>
      </div>
      <div class="content-tables">
        <div class="title">
          <!-- 如有任何疑問，歡迎向我們的客戶服務員查詢： -->
          {{ $t("ophthalmicInfo.consumption.tableTitle") }}
        </div>
        <div class="tables">
          <el-table
            :data="tableData"
            border
            :row-class-name="tableRowClassName"
            style="width: 100%"
          >
            <el-table-column
              header-align="center"
              prop="tableData_1"
              :label="$t('ophthalmicInfo.consumption.tableColumn_1')"
            >
            </el-table-column>
            <el-table-column
              header-align="center"
              prop="tableData_2"
              :label="$t('ophthalmicInfo.consumption.tableColumn_2')"
            >
            </el-table-column>
            <el-table-column
              header-align="center"
              prop="tableData_3"
              label="whatsapp"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <a href="https://api.whatsapp.com/send/?phone=85260610511" class="mbShow">
        <button>
          <div class="flex btn-yuyue">
            <img
              src="https://static.cmereye.com/imgs/2022/12/f3fcc54f4a9b0108.png"
              alt=""
              style="width: 12vw"
            />
            <div class="flex flex-col justify-center" style="padding: 0 10px">
              <span>{{
                $t("consumptionVoucher.subscribe") +
                "/" +
                $t("consumptionVoucher.query")
              }}</span>
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
      tableData: [
        {
          tableData_1: this.$t("ophthalmicInfo.consumption.tableData_1"),
          tableData_2: "3956 2026",
          tableData_3: "6489 1907",
        },
        {
          tableData_1: this.$t("ophthalmicInfo.consumption.tableData_2"),
          tableData_2: "3892 5099",
          tableData_3: "9796 2992",
        },
        {
          tableData_1: this.$t("ophthalmicInfo.consumption.tableData_3"),
          tableData_2: "3892 5089",
          tableData_3: "6918 0511",
        },
      ],
    };
  },
  created() {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0 || rowIndex === 2) {
        return "warning-row";
      }
      return "";
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570b6;
}
.pageContent {
  width: 100%;
}
.content-text {
  font-size: 20px;
  color: #6d6e71;
  line-height: 30px;
  font-weight: 400;
  p {
    display: flex;
    align-items: center;
  }
  p:nth-child(4) {
    padding: 30px 0;
  }
  p:last-child {
    align-items: end;
    span {
      margin-right: 10px;
    }
  }
}
.content-tables {
  margin: 70px 0;
  .title {
    color: #20377f;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
  }
  .tables {
    margin-top: 20px;
  }
  .tabLists {
    margin-top: 50px;
    border-left: 1px solid #ccc;
  }
}
/deep/ .has-gutter > tr > .el-table__cell > .cell {
  font-size: 16px;
  color: #20377f;
}
/deep/ .el-table .warning-row {
  background: #d2d2d29e;
}
/deep/ .el-collapse-item__header {
  font-size: 21px;
  border-bottom: none;
  text-indent: 20px;
  background-color: #fff;
  height: auto;
  line-height: 1.4;
  padding-left: 20px;
}
/deep/ .el-collapse-item__header.is-active {
  color: #20377f;
}
/deep/ .el-collapse-item.is-active {
  border-left: 3px solid #20377f;
}
/deep/ .el-collapse {
  border-top: none;
}
/deep/ .el-collapse-item__content {
  border-bottom: none;
}
/deep/ .el-collapse-item {
  margin-top: 30px;
  text-decoration: 20px;
}
/deep/ .el-collapse-item__wrap {
  border-bottom: none;
}
/deep/ .el-collapse-item__header:hover {
  background: #eceff8;
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 25px;
    color: #4570b6;
    letter-spacing: 2.5px;
    max-width: 60%;
  }
  /deep/ .el-collapse-item__header {
    font-size: 20px;
    line-height: 30px;
    text-indent: 0;
    padding-left: 20px;
  }
  /deep/ .el-collapse-item__content > div {
    font-size: 20px;
  }
  /deep/ .el-collapse-item__content {
    padding-top: 30px;
    padding-left: 30px;
  }
  .content-tables {
    .title {
      font-size: 20px;
    }
  }
  .content-text {
    line-height: 35px;
    p:nth-child(4) {
      padding: 30px 0;
      align-items: start;
    }

    p:last-child {
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
