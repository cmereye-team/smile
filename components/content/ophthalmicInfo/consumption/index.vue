<template>
  <div class="page_container serve-page">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('ophthalmicInfo.consumption.title')}}</h2>
    </div>
    <!-- <div class="flex md:flex-row justify-around md:mt-10 flex-col">
      <iframe
        src="https://smilecms.hkcmereye.com/%E6%B6%88%E8%B2%BB%E5%88%B8%E8%A9%B3%E6%83%85/"
        frameborder="0"
        class="iframe"
      ></iframe>
    </div> -->
    <div class="pageContent">
      <div class="content-text">
        {{$t('ophthalmicInfo.consumption.contentText')}}
      </div>
      <div class="content-imgLists">
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/1200px-Octopus_Logo_201709-1-1.png" alt=""></div>
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/Asset-54-3.png" alt=""></div>
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/tap-1.png" alt=""></div>
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/logo-wechatpayhk-col-1-1.png" alt=""></div>
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/PayMe-Logo.png" alt=""></div>
        <div><img src="https://smilecms.hkcmereye.com/wp-content/uploads/2021/07/bocpay_logo.png" alt=""></div>
      </div>
      <div class="content-tables">
        <div class="title">
          <!-- 如有任何疑問，歡迎向我們的客戶服務員查詢： -->
          {{$t('ophthalmicInfo.consumption.tableTitle')}}
        </div>
        <div class="tables">
          <el-table
            :data="tableData"
            border
            :row-class-name="tableRowClassName"
            style="width: 100%">
            <el-table-column
              header-align="center"
              prop="tableData_1"
              :label="$t('ophthalmicInfo.consumption.tableColumn_1')">
            </el-table-column>
            <el-table-column
              header-align="center"
              prop="tableData_2"
              :label="$t('ophthalmicInfo.consumption.tableColumn_2')">
            </el-table-column>
            <el-table-column
              header-align="center"
              prop="tableData_3"
              label="whatsapp">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content-tables">
        <div class="title">
          <!-- 常見問題 -->
          {{$t('ophthalmicInfo.consumption.QATitle')}}
        </div>
        <div class="tabLists">
          <el-collapse accordion>
            <el-collapse-item :title="$t('ophthalmicInfo.consumption.Q_1')" name="1">
              <div>
                <!-- 可以 -->
                {{$t('ophthalmicInfo.consumption.A_1')}}
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('ophthalmicInfo.consumption.Q_2')" name="2">
              <div>
                <!-- 使用消費券，客人仍可享有指定產品或服務本有的折扣。 -->
                {{$t('ophthalmicInfo.consumption.A_2')}}
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('ophthalmicInfo.consumption.Q_3')" name="3">
              <div>
                <!-- 沒有。消費劵可在希瑪林順潮眼科中心、希瑪微笑激光矯視中心及希瑪眼科視光中心的任何產品或服務上使用。 -->
                {{$t('ophthalmicInfo.consumption.A_3')}}
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('ophthalmicInfo.consumption.Q_4')" name="4">
              <div>
                <!-- 可以，只要結帳時所有付款人同時在場，我們的服務員會為您們安排收款。 -->
                {{$t('ophthalmicInfo.consumption.A_4')}}
              </div>
            </el-collapse-item>
          </el-collapse>
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
              <span>{{$t('consumptionVoucher.subscribe') + '/' + $t('consumptionVoucher.query')}}</span>
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
      tableData:[{
          tableData_1: this.$t('ophthalmicInfo.consumption.tableData_1'),
          tableData_2: '3956 2026',
          tableData_3: '6489 1907'
        }, {
          tableData_1: this.$t('ophthalmicInfo.consumption.tableData_2'),
          tableData_2: '3892 5099',
          tableData_3: '9796 2992'
        }, {
          tableData_1: this.$t('ophthalmicInfo.consumption.tableData_3'),
          tableData_2: '3892 5089',
          tableData_3: '6918 0511'
        }]
    };
  },
  created() {},
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0 || rowIndex === 2) {
          return 'warning-row';
        }
        return '';
      }
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 25px;
  color: #4570B6;
}
.pageContent{
  width: 100%;
}
.content-text{
  font-size: 20px;
  color: #6D6E71;
}
.content-imgLists{
  display: flex;
  padding: 70px 0;
  &>div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    img{
      width: 100%;
    }
    &:last-child>img{
      width: 60%;
    } 
  }
}
.content-tables{
  margin-bottom: 70px;
  .title{
    color: #20377F;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
  }
  .tables{
    margin-top: 20px;
  }
  .tabLists{
    margin-top: 50px;
    border-left: 1px solid #ccc;
  }
}
/deep/ .has-gutter>tr>.el-table__cell>.cell{
  font-size: 16px;
  color: #20377F;
}
/deep/ .el-table .warning-row {
  background: #d2d2d29e;
}
/deep/ .el-collapse-item__header{
  font-size: 21px;
  border-bottom: none;
  text-indent: 20px;
  background-color: #fff;
}
/deep/ .el-collapse-item__header.is-active{
  color: #20377F;
}
/deep/ .el-collapse-item.is-active{
  border-left: 3px solid #20377F;
}
/deep/ .el-collapse{
  border-top:  none;
}
/deep/ .el-collapse-item__content{
  border-bottom: none;
}
/deep/ .el-collapse-item{
  margin-top: 30px;
  text-decoration: 20px;
}
/deep/ .el-collapse-item__wrap{
  border-bottom: none;
}
/deep/ .el-collapse-item__header:hover{
  background: #eceff8;
}
@media screen and (max-width: 768px) {
  /deep/ .el-collapse-item__header{
    font-size: 20px;
    line-height: 30px;
    text-indent: 0;
    padding-left: 20px;
  }
  /deep/ .el-collapse-item__content>div{
    font-size: 20px;
  }
  /deep/ .el-collapse-item__content{
    padding-top: 30px;
    padding-left: 30px;
  }
  .content-imgLists{
    flex-direction: column;
    padding: 50px 0;
    &>div{
      // width: 80px;
      margin-top: 30px;
      img{
        width: 60%;
      }
      &:last-child>img{
        width: 40%;
      }   
    }
  }
  .content-tables{
    .title{
      font-size: 20px;
    }
  }
}
</style>
