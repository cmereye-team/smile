<template>
  <div class="maplist page_container">
    <div class="map justify-center" v-loading="loading">
      <iframe
        ref="Iframe"
        allowfullscreen="true"
        frameborder="0"
        width="100%"
        height="480vw"
        :src="address"
      ></iframe>
    </div>
    <div class="table-adress flex justify-center" id="tab">
      <ul>
        <li
          @click="handleClick(index)"
          :class="currentIndex == index ? 'active' : ''"
          :key="item.id"
          v-for="(item, index) in list"
        >
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <div
      v-if="currentIndex == 0 ? true : false"
      class="justify-center md:mb-20 mb-10"
    >
      <el-table
        ref="addressTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        :show-header="false"
        style="width: 100%"
        class="pcShow"
      >
        <el-table-column property="name" label="地点名称" width="">
        </el-table-column>
        <el-table-column property="number" label="电话号码" width="">
        </el-table-column>
        <el-table-column property="address" label="地址" width="">
        </el-table-column>
        <el-table-column align="center" label="地址图标">
          <template slot-scope="scope">
            <img
              class="flex justify-center"
              src="@/asset/image/contactus/Pin.png"
              alt=""
              align="center"
              style="text-align: center"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-table
        ref="addressTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        :show-header="false"
        style="width: 100%"
        class="mbShow"
      >
        <el-table-column align="center" label="地址图标" width="30px">
          <template slot-scope="scope">
            <img
              class="flex justify-center"
              src="@/asset/image/contactus/Pin.png"
              alt=""
              align="center"
              style="text-align: center; width: 30px"
            />
          </template>
        </el-table-column>
        <el-table-column label="地点名称" width="">
          <template slot-scope="{ row }">
            <div class="title-ad flex items-start flex-col">
              <p class="text-blue">{{ row.name }}</p>
              <p>{{ row.address }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="number" label="电话号码" width="">
        </el-table-column>
      </el-table>
    </div>
    <div v-else class="justify-center md:mb-20 mb-10">
      <el-table
        ref="addressTable"
        :data="tableData2"
        highlight-current-row
        @current-change="handleCurrentChange2"
        :show-header="false"
        style="width: 100%"
        class="pcShow"
      >
        <el-table-column property="name" label="地点名称" width="">
        </el-table-column>
        <el-table-column property="number" label="电话号码" width="">
        </el-table-column>
        <el-table-column property="address" label="地址" width="">
        </el-table-column>
        <el-table-column align="center" label="地址图标">
          <template slot-scope="scope">
            <img
              class="flex justify-center"
              src="@/asset/image/contactus/Pin.png"
              alt=""
              align="center"
              style="text-align: center"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-table
        ref="addressTable"
        :data="tableData2"
        highlight-current-row
        @current-change="handleCurrentChange2"
        :show-header="false"
        style="width: 100%"
        class="mbShow"
      >
        <el-table-column align="center" label="地址图标" width="30px">
          <template slot-scope="scope">
            <img
              class="flex justify-center"
              src="@/asset/image/contactus/Pin.png"
              alt=""
              align="center"
              style="text-align: center; width: 30px"
            />
          </template>
        </el-table-column>
        <el-table-column label="地点名称" width="">
          <template slot-scope="{ row }">
            <div class="title-ad flex items-start flex-col">
              <p class="text-blue">{{ row.name }}</p>
              <p>{{ row.address }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="number" label="电话号码" width="">
        </el-table-column>
      </el-table>
    </div>
    <div class="flex flex-col items-center md:mb-30 mb-20 font">
      <h2>{{$t('contactUs.h3')}}</h2>
      <div class="flex md:mt-0 mt-5" v-if="currentIndex === 0">
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.mon')}}</p>
          <p>09:00—19:00</p>
          <!-- <p>09:30—13:30</p>
          <p>14:30—19:00</p> -->
        </div>
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.saturday')}}</p>
          <p>09:00—18:00</p>
          <!-- <p>09:30—13:30</p> -->
          <!-- <p>09:30—17:30</p>
          <p>09:30—14:00(尖沙咀)</p> -->
        </div>
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.p')}}</p>
          <p>{{$t('contactUs.closed')}}</p>
        </div>
      </div>
      <div class="flex md:mt-0 mt-5" v-if="currentIndex === 1">
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.mon')}}</p>
          <p>09:30—13:30</p>
          <p>14:30—19:00</p>
        </div>
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.saturday')}}</p>
          <p>09:30—13:30</p>
          <!-- <p>09:30—17:30</p> -->
          <p>09:30—14:00({{ $t('contactUs.googleMap.name9') }})</p>
        </div>
        <div class="time-box">
          <p class="text-blue">{{$t('contactUs.p')}}</p>
          <p>{{$t('contactUs.closed')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/724128333/?random=1636507954390&amp;cv=9&amp;fst=1636507954390&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1152&amp;u_w=2048&amp;u_ah=1112&amp;u_aw=2048&amp;u_cd=24&amp;u_his=1&amp;u_tz=480&amp;u_java=false&amp;u_nplug=2&amp;u_nmime=2&amp;gtm=2oab80&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Fwww.hkeyecmer.com%2Fteam%2F&amp;tiba=%E7%9C%BC%E7%A7%91%E9%86%AB%E7%94%9F&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
<script
  type="text/javascript"
  charset="utf-8"
  src="https://mqj.zoosnet.net/js/CdCheck.aspx?id=40126824&amp;sid=fdfd20355a524f8ca3ad942f4def42c9&amp;d=1636509748743"
></script>
<script>
export default {
  data() {
    return {
      address:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.916441744428!2d114.15517681541506!3d22.28115484921899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064c2535f5f%3A0x4dea0a6fb9200b96!2z5Lit5bu65aSn5Y6m!5e0!3m2!1szh-CN!2shk!4v1655775720953!5m2!1szh-CN!2shk",
      loading: false, //默认不显示loading
      list: [
        {
          id: 1,
          title: this.$t('contactUs.title1'),
        },
        {
          id: 2,
          title: this.$t('contactUs.title2'),
        },
      ],
      currentIndex: 0, // 当前点击的tab的索引
      tableData: [
        {
          number: "3956 5099",
          name: this.$t('contactUs.googleMap.name1'),
          address: this.$t('contactUs.googleMap.address1')
        },
        // {
        //   number: "3956 2026",
        //   name: this.$t('contactUs.googleMap.name2'),
        //   address: this.$t('contactUs.googleMap.address2')
        // },
        {
          number: "3892 5099",
          name: this.$t('contactUs.googleMap.name9'),
          address: this.$t('contactUs.googleMap.address3')
        },
        {
          number: "3892 5099",
          name: this.$t('contactUs.googleMap.name10'),
          address: this.$t('contactUs.googleMap.address4')
        },
      ],
      tableData2: [
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name1'),
          address: this.$t('contactUs.googleMap.address5')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name1'),
          address: this.$t('contactUs.googleMap.address6')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name9'),
          address: this.$t('contactUs.googleMap.address7')
        },
        {
          number: "852 3956 2026",
          name:this.$t('contactUs.googleMap.name10'),
          address:this.$t('contactUs.googleMap.address8')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name2'),
          address: this.$t('contactUs.googleMap.address9')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name3'),
          address: this.$t('contactUs.googleMap.address10')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name4'),
          address: this.$t('contactUs.googleMap.address11')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name5'),
          address: this.$t('contactUs.googleMap.address12')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name6'),
          address: this.$t('contactUs.googleMap.address13')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name7'),
          address: this.$t('contactUs.googleMap.address14')
        },
        {
          number: "852 3956 2026",
          name: this.$t('contactUs.googleMap.name8'),
          address: this.$t('contactUs.googleMap.address15')
        },
      ],
      currentRow: null,
    };
  },
  mounted() {
    this.$refs.addressTable.setCurrentRow(this.tableData[0]);
    this.iframeLoad();
  },
  methods: {
    // 调用方法
    iframeLoad() {
      this.loading = true;
      const iframe = this.$refs.Iframe;
      // 兼容处理
      if (iframe.attachEvent) {
        // IE
        iframe.attachEvent("onload", () => {
          this.loading = false;
        });
      } else {
        // 非IE
        iframe.onload = () => {
          this.loading = false;
        };
      }
    },
    handleClick(index) {
      console.log(index);
      this.currentIndex = index;
      if (index === 1) {
        setTimeout(() => {
          this.handleCurrentChange2(this.tableData2[0]);
        }, 300);
      }
    },
    handleCurrentChange(val) {
      console.log("选中的数据===", val);
      if (val) {
        if (val.name === this.$t('contactUs.googleMap.name1')) {
          // console.log('111');
          // this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.916441744428!2d114.15517681541506!3d22.28115484921899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064c2535f5f%3A0x4dea0a6fb9200b96!2z5Lit5bu65aSn5Y6m!5e0!3m2!1szh-CN!2shk!4v1655775720953!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name2')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.941143350186!2d114.18374661541512!3d22.280219249252834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005424497791%3A0xdaf428542325f6ad!2sHang%20Lung%20Centre!5e0!3m2!1szh-CN!2shk!4v1655776105411!5m2!1szh-CN!2shk";
        } else if (val.name === "旺 角") {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.941702125895!2d114.16721106541559!3d22.318044447889296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c7a28c6881%3A0xd2c0fafeac9d0f27!2z5rivIOmTgSDnq5k!5e0!3m2!1szh-CN!2shk!4v1655776209097!5m2!1szh-CN!2shk";
        } else if (val.name === "尖沙咀") {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29527.5243703423!2d114.15189015959042!3d22.318088156730287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404016dab7a8623%3A0xcb42d12400253c1c!2z5biM55Gq55y856eR5Lit5b-DLeWwluaymeWSgA!5e0!3m2!1szh-CN!2shk!4v1655776273755!5m2!1szh-CN!2shk";
        }
      }

      // this.currentRow = val;
    },
    handleCurrentChange2(val) {
      console.log("选中的数据===", val);
      if (val) {
        if (val.address === this.$t('contactUs.googleMap.address5')) {
          // console.log('111');
          // this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9148087323383!2d114.15744169999999!3d22.281216699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064c3cc78a7%3A0x38c2621ef4ab9ea1!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DIC0g5Lit55Kw!5e0!3m2!1szh-CN!2shk!4v1676968793043!5m2!1szh-CN!2shk";
        } else if (val.address === this.$t('contactUs.googleMap.address6')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.9428206110742!2d114.1559985!3d22.2823214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064baa4a041%3A0x32d7f3fd9e2cf282!2z5Lit55Kw5pit6ZqG6KGXNi0xNuiZn-S4h-mCpuihjA!5e0!3m2!1szh-CN!2shk!4v1676968818229!5m2!1szh-CN!2shk";
        } else if (val.name === "旺 角") {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.943834766614!2d114.1694325!3d22.317963799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401acb8062ea5%3A0x570a84988a127e1f!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaXuuinkg!5e0!3m2!1szh-CN!2shk!4v1676968856537!5m2!1szh-CN!2shk";
        } else if (val.name === "尖沙咀") {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5529601065123!2d114.17553319999999!3d22.2949178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f1bd7327f5%3A0x5ec80492a99301e9!2sK11%20Atelier!5e0!3m2!1szh-CN!2shk!4v1676968715848!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name2')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9429161793923!2d114.18601489999999!3d22.280152099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005423edff73%3A0x46b41406f44c9570!2z5biM55Gq55y856eR5Lit5b-DLemKhemRvOeBow!5e0!3m2!1szh-CN!2shk!4v1676969257334!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name3')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.1367811398727!2d114.225003!3d22.3106662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401d7e74ae007%3A0xc96f0bbd8b762dd4!2z6aaZ5riv5biM546b55y856eR5Lit5b-DLeinguWhmA!5e0!3m2!1szh-CN!2shk!4v1676969438657!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name4')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.27146809291!2d114.1874026!3d22.3811213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340407ac4958e33b%3A0x449a54b4ca085085!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaymeeUsCjnrKzkuIDplpMp!5e0!3m2!1szh-CN!2shk!4v1676969477703!5m2!1szh-CN!2shk";
        } else if (val.name === "沙田") {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.27146809291!2d114.1874026!3d22.3811213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340407ac4958e33b%3A0x449a54b4ca085085!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaymeeUsCjnrKzkuIDplpMp!5e0!3m2!1szh-CN!2shk!4v1676969531200!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name6')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5847871717187!2d114.0305542!3d22.4446486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0a0d1fbff7d%3A0xb0f89659853f4a58!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeWFg-aclw!5e0!3m2!1szh-CN!2shk!4v1676969589764!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name7')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5639480653226!2d114.1162646!3d22.370087899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8ec4df07333%3A0xbf2aba680d839acf!2z5oCd5rqQ5qW8!5e0!3m2!1szh-CN!2shk!4v1676969619202!5m2!1szh-CN!2shk";
        } else if (val.name === this.$t('contactUs.googleMap.name8')) {
          this.iframeLoad();
          this.address =
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.7127657451344!2d114.2569743!3d22.3214718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404040bda677991%3A0xbd229a46b24f56b5!2sMCP%20ONE!5e0!3m2!1szh-CN!2shk!4v1676969661037!5m2!1szh-CN!2shk";
        }
      }

      // this.currentRow = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  border: #ddd;
  margin-top: 60px;
}
.active {
  background-color: #f3fcfe;
  display: block;
}
ul {
  margin: 0;
  padding: 0;
  height: 72px;
  width: 100%;
  // position: absolute;
}
li {
  cursor: pointer;
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  line-height: 50px;
  float: left;
  border-bottom: 2px solid #ddd;
  // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
  border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
  width: 50%;
  padding: 10px 0;
}
.text-blue {
  color: #4570b6;
  font-size: 16px;
}
@media only screen and (min-width: 768px) {
  .font {
    font-size: 18px;
  }
  ::deep .cell {
    font-size: 18px !important;
  }
  h2 {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    // line-height: 20px;
    /* identical to box height, or 125% */

    text-align: center;
    letter-spacing: 0.1em;

    // color: #000000;
    color: #4570b6;
    margin-bottom: 42px;
  }
  .time-box {
    padding: 0 48px;
    border-right: 1px solid #ddd;
    text-align: center;
    color: #6D6E71;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .time-box:nth-child(3) {
    border-right: none;
    max-width: 280px;
  }
}
@media only screen and (max-width: 768px) {
  .text-blue {
    color: #4570b6;
    font-weight: 500;
    font-size: 14px;
  }
  h2 {
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    // line-height: 15px;
    /* identical to box height, or 125% */

    text-align: center;
    letter-spacing: 0.1em;
    color: #4570b6;
    // color: #000000;
  }
  .time-box {
    font-size: 14px;
    font-weight: 300;
    padding: 0 10px;
    border-right: 1px solid #ddd;
    text-align: center;
    flex: 1;
  }
  .time-box:nth-child(3) {
    border-right: none;
  }
}
</style>
<style lang="scss">
@media only screen and (min-width: 768px) {
  .el-table td.el-table__cell div {
    box-sizing: border-box;
    text-align: center !important;
    display: flex;
    justify-content: center;
    font-size: 16px !important;
    line-height: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .el-table td.el-table__cell div {
    box-sizing: border-box;
    text-align: center !important;
    display: flex;
    justify-content: center;
    font-size: 14px !important;
    align-items: flex-start;
  }
  .el-table td.el-table__cell div p {
    text-align: left;
  }
  .el-table .el-table__cell.is-center {
    vertical-align: top;
    padding-top: 17px;
  }
}

.el-loading-mask {
  display: flex;
  justify-content: center;
}
.el-loading-spinner {
  display: flex;
  justify-content: center;
}
.el-loading-spinner .circular {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
