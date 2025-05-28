<template>
  <div class="preaching-seat" v-loading.fullscreen.lock="fullscreenLoading">

    <Head />
    <Banner class="banner-box">
      <template #banner>
        <div class="banner-img">
          <p>{{ $t("appointFroms.title") }}</p>
          <p>Lecture</p>
        </div>
      </template>
    </Banner>
    <div class="lecture-box">
      <div class="lecture-title">
        <div>
          <div class="title-img">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="68" viewBox="0 0 38 68" fill="none">
                <path
                  d="M19.2806 16.6316C23.321 16.6316 26.5964 13.3562 26.5964 9.31578C26.5964 5.27539 23.321 2 19.2806 2C15.2402 2 11.9648 5.27539 11.9648 9.31578C11.9648 13.3562 15.2402 16.6316 19.2806 16.6316Z"
                  stroke="#A6E1D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M8.31445 30.3962V24.7659C8.31445 23.6808 8.74551 22.6401 9.51281 21.8728C10.2801 21.1055 11.3208 20.6744 12.4059 20.6744H25.9749C27.06 20.6744 28.1007 21.1055 28.868 21.8728C29.6353 22.6401 30.0664 23.6808 30.0664 24.7659V30.1642"
                  stroke="#A6E1D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.2412 20.9306L19.1968 29.0403L21.8105 20.7596" stroke="#A6E1D6" stroke-width="3"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.6934 65.7501H12.6984L5.74902 38.8441H32.6428L25.6934 65.7501Z" stroke="#4570B6"
                  stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M36.3927 30.3967H2V38.8483H36.3927V30.3967Z" stroke="#4570B6" stroke-width="3"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>{{ $t("appointFroms.title") }}</div>
          </div>
          <div class="lecture-content">
            <div>
              <p>{{ $t("appointFroms.title1") }}</p>
              <p>{{ $t("appointFroms.title2") }}</p>
            </div>
            <div>
              <p>{{ $t("appointFroms.p1") }}</p>
              <!-- <p>旺角診所(星期一至五)：旺角彌敦道625及639號雅蘭中心一期702室</p> -->
              <!-- <p>旺角診所(星期六)：旺角彌敦道625及639號雅蘭中心一期1208室</p> -->
              <p>{{ $t("appointFroms.p2") }}</p>
              <!-- <p>
                尖沙咀診所︰尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室
              </p> -->
            </div>
            <div class="lecture-form">
              <el-form ref="form" :model="form" label-width="180px">
                <el-form-item :label="$t('appointFroms.title4')">
                  <el-select v-model="form.address" :placeholder="$t('appointFroms.title4')" @change="changeLocation"
                    clearable>
                    <!-- <el-option
                      label="Smile Pro 講座-尖沙咀"
                      value="smilerProTsui"
                    ></el-option> -->
                    <el-option :label="$t('appointFroms.content1.title1')" value="smileProMongKok"></el-option>
                    <el-option :label="$t('appointFroms.content1.title2')" value="smileCentral"></el-option>
                    <!-- <el-option :label="$t('appointFroms.content1.title3')" value="smileMongKok"></el-option> -->
                    <!-- <el-option
                      label="老花講座-中環"
                      value="clearVisionCentral"
                    ></el-option> -->
                    <el-option :label="$t('appointFroms.content1.title4')" value="clearVisionMongKok"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('appointFroms.content1.date')" v-if="form.address !== ''">
                  <el-date-picker v-model="form.subdate" type="date" ref="subdate" popper-class="date-picker-class"
                    :picker-options="startPickerOptions" :placeholder="$t('appointFroms.content1.date')"
                    format=" MM 月 dd 日 yyyy 年" value-format="timestamp" @focus="focusSubDate" clearable
                    :editable="false">
                  </el-date-picker>
                </el-form-item>
              </el-form>
              <p v-if="form.address && form.subdate" class="form-data">
                {{ $t("appointFroms.content2.p1") }}
                <span>{{ nowDayTime }} {{ morningOrAfternoon }}</span> 的
                <span>{{ getName(form.address) }}</span>
                {{ $t("appointFroms.content2.p2") }}
              </p>
              <el-form ref="form" :model="form1" class="form1" label-width="180px" v-if="form.address && form.subdate">
                <el-form-item :label="$t('appointFroms.content2.local')">
                  <el-select v-model="form1.numberSeat" placeholder="0" clearable>
                    <el-option v-for="(option, i) in 10" :label="option" :value="option" :key="i"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-input :placeholder="$t('appointFroms.content3.name')" v-model="form1.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="性別">
                  <el-select v-model="form1.sex" placeholder="---" clearable>
                    <el-option label="---" value="null"></el-option>
                    <el-option label="女" value="0"></el-option>
                    <el-option label="男" value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('appointFroms.content3.age')">
                  <el-select v-model="form1.age" :placeholder="$t('appointFroms.content3.choose')" clearable>
                    <el-option :label="$t('appointFroms.content3.age1')" value="17歲或以下"></el-option>
                    <el-option :label="$t('appointFroms.content3.age2')" value="18-25歲"></el-option>
                    <el-option :label="$t('appointFroms.content3.age3')" value="26-35歲"></el-option>
                    <el-option :label="$t('appointFroms.content3.age4')" value="36-45歲"></el-option>
                    <el-option :label="$t('appointFroms.content3.age5')" value="46-55歲"></el-option>
                    <el-option :label="$t('appointFroms.content3.age6')" value="56歲或以上"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('appointFroms.content3.phone')">
                  <el-input :placeholder="$t('appointFroms.content3.phoneText')" type="number"
                    v-model.number="form1.telphoneNumber" number clearable></el-input>
                </el-form-item>
                <el-form-item :label="$t('appointFroms.content3.email')">
                  <el-input :placeholder="$t('appointFroms.content3.phoneText')" type="email" v-model="form1.email"
                    clearable></el-input>
                </el-form-item>
                <el-form-item :label="$t('appointFroms.content3.soure')">
                  <el-select v-model="form1.source" :placeholder="$t('appointFroms.content3.choose')" clearable>
                    <el-option :label="$t('appointFroms.content4.p1')" value="Google搜尋引擎"></el-option>
                    <el-option :label="$t('appointFroms.content4.p2')" value="Yahoo搜尋引擎"></el-option>
                    <el-option label="Facebook" value="Facebook"></el-option>
                    <el-option label="Instagram" value="Instagram"></el-option>
                    <el-option label="YouTube" value="YouTube"></el-option>
                    <el-option :label="$t('appointFroms.content4.p3')" value="討論區"></el-option>
                    <el-option :label="$t('appointFroms.content4.p4')" value="報章"></el-option>
                    <el-option :label="$t('appointFroms.content4.p5')" value="診所單張"></el-option>
                    <el-option :label="$t('appointFroms.content4.p6')" value="親友介紹"></el-option>
                    <el-option :label="$t('appointFroms.content4.p7')" value="員工介紹"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label-width="0">
                  <el-button type="primary" @click="onSubmit">{{
                    $t("appointFroms.btn")
                  }}</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div class="lecture-image">
        <img v-if="isBeforeFeb35()" src="https://statichk.cmermedical.com/smile/20250512_6月講座_CT.jpg" alt="6月 中环" />
        <img v-if="isBeforeFeb35()" src="https://statichk.cmermedical.com/smile/20250512_6月講座_MK.jpg" alt="6月 旺角" />
        <!-- <img v-if="isBeforeFeb34()" src="https://statichk.cmermedical.com/smile/2025042310325502.webp" alt="5月 中环" />
        <img v-if="isBeforeFeb34()" src="https://statichk.cmermedical.com/smile/2025042310325501.webp" alt="5月 旺角" />
        <img v-if="isBeforeFeb33()" src="https://statichk.cmermedical.com/smile/2025031414400701.webp" alt="4月 中环" />
        <img v-if="isBeforeFeb33()" src="https://statichk.cmermedical.com/smile/2025031414400702.webp" alt="4月 旺角" />
        <img v-if="isBeforeFeb32()" src="https://statichk.cmermedical.com/smile/2025021916045001.webp" alt="3月 中环" />
        <img v-if="isBeforeFeb32()" src="https://statichk.cmermedical.com/smile/2025021916044001.webp" alt="3月 旺角" />
        <img v-if="isBeforeFeb28()" src="https://statichk.cmermedical.com/smile/68910b3cec5d.webp" alt="2月 中环" />
        <img v-if="isBeforeFeb28()" src="https://statichk.cmermedical.com/smile/017b8163c9ac.webp" alt="2月 旺角" /> -->
        <!-- <img
          v-if="isBeforeFeb31()"
          src="https://statichk.cmermedical.com/smile/e7458a6d7e35.png"
          alt="1月 中环"
        />
        <img
          v-if="isBeforeFeb31()"
          src="https://statichk.cmermedical.com/smile/4ff6c787fe9a.png"
          alt="1月 旺角"
        /> -->
      </div>
    </div>
    <businessHours />
    <!-- <div class="dialog-win" v-if="test">
      <div>
        <h3>提交信息, 是否继续?</h3>
        <div>
          <button @click="submitForm()">确认提交</button>
          <button @click="isOpenDialog(1)">取消</button>
        </div>
        <div @click="isOpenDialog(1)"><i></i><i></i></div>
      </div>
    </div> -->
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
export default {
  components: {
    Head,
    Footer,
    businessHours,
    FooterMobile,
    Banner,
    H2Tag,
  },
  data() {
    return {
      fullscreenLoading: false,
      test: false,
      form: {
        address: "",
        subdate: "",
      },
      form1: {
        numberSeat: "",
        name: "",
        sex: "",
        age: "",
        telphoneNumber: "",
        email: "",
        source: "",
        siteSource: "",
      },
      morningOrAfternoon: "",
      nowDayTime: "",
      allowedDates: [],
      startPickerOptions: {
        disabledDate: (time) => this.disabledDate(time),
      },
      isMobile: false,
      nowDayMonth: new Date().getMonth() + 1,
      canonicalHref: "https://smile.hkcmereye.com/ophthalmicInfo/AppointForm/",
      canonicalHrefCN:
        "https://smile.hkcmereye.com/cn/ophthalmicInfo/AppointForm/",
      browserTitle: "講座 - 希瑪微笑矯視中心",
      browserTitleCn: "講座 - 希玛微笑矫视中心",
    };
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
          content: "講座 - 希瑪微笑矯視中心",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "講座 - 希瑪微笑矯視中心",
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
          href: "https://smile.hkcmereye.com/ophthalmicInfo/AppointForm/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hant",
          href: "https://smile.hkcmereye.com/ophthalmicInfo/AppointForm/",
        },
        {
          rel: "alternate",
          hreflang: "zh-Hans",
          href: "https://smile.hkcmereye.com/cn/ophthalmicInfo/AppointForm/",
        },
      ],
      nowMonth: this.nowDayMonth,
    };
  },
  computed: {},
  methods: {
    isBeforeFeb35() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 5, 30); // 6月
      return today < targetDate;
    },
    isBeforeFeb34() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 4, 31); // 5月
      return today < targetDate;
    },
    isBeforeFeb33() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 3, 30); // 4月
      return today < targetDate;
    },
    isBeforeFeb32() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 2, 28); // 3月
      return today < targetDate;
    },
    isBeforeFeb28() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 1, 28); // 2月
      return today < targetDate;
    },
    isBeforeFeb31() {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 0, 31); // 1月
      return today < targetDate;
    },
    isOpenDialog(index) {
      // index ==0  1  0开 1关
      if (index == 0) {
        this.test = true;
      } else {
        this.test = false;
        this.$message({
          showClose: true,
          message: "您已取消提交！",
          type: "warning",
        });
      }
    },
    onSubmit() {
      // 对预留位置、联络电话校验不能为空，判断邮件格式是否正确
      if (
        this.form1.numberSeat == "" ||
        this.form1.name == "" ||
        this.form1.telphoneNumber == ""
      ) {
        this.$message({
          message: "请檢查預留位置、聯絡電話不能為空！",
          type: "warning",
        });
        return;
      }
      // 郵件不为空，檢查郵箱格式
      // this.form1.email !== "" &&
      if (this.form1.email !== "") {
        if (
          !this.form1.email.includes("@") ||
          !this.form1.email.includes(".com")
        ) {
          this.$message({
            message: "請檢查郵件格式是否正確！",
            type: "warning",
          });
          return;
        }
      }

      console.log(this.form1, this.form, "form");
      // this.isOpenDialog(0);
      this.submitForm();
    },
    disabledDate(time) {
      try {
        const year = time.getFullYear();
        const month = String(time.getMonth() + 1).padStart(2, "0");
        const day = String(time.getDate()).padStart(2, "0");
        const ym = `${year}-${month}-${day}`;

        // 获取当前年月日
        const now = new Date();
        const nowYear = now.getFullYear();
        const nowMonth = String(now.getMonth() + 1).padStart(2, "0");
        const nowDay = String(now.getDate()).padStart(2, "0");
        const nowYm = `${nowYear}-${nowMonth}-${nowDay}`;
        if (ym < nowYm) {
          return true;
        }

        //把所有年月和需要建立的月份匹配，把匹配上的返回出去，让月份选择器可选
        return !this.allowedDates.includes(ym);
      } catch (error) {
        console.error("disabledDate encountered an error:", error);
      }
    },
    changeLocation() {
      this.clearFrom();
      //  在选定地址的时候 给allowedDates 赋值  数组为当前月份可选择日期
      // allowedDates 每个地区的日期每个月都可以更改
      switch (this.form.address) {
        case "smilerProTsui":
          // smile 尖沙咀
          this.allowedDates = [];
          break;
        case "smileCentral":
          // smile 中环
          this.allowedDates = [
            "2025-05-14",
            "2025-05-17",
            '2025-05-21',
            '2025-05-24',
            '2025-05-28',
            '2025-06-04',
            '2025-06-07',
            '2025-06-11',
            '2025-06-14',
            '2025-06-21',
            '2025-06-25',
            '2025-06-28',
          ];
          break;
        case "smileMongKok":
          // smile 旺角
          this.allowedDates = [];
          break;
        case "smileProMongKok":
          // smilePro 旺角
          this.allowedDates = [
            "2025-05-13",
            "2025-05-17",
            "2025-05-19",
            "2025-05-24",
            "2025-05-27",
            "2025-06-02",
            "2025-06-07",
            "2025-06-10",
            "2025-06-14",
            "2025-06-16",
            "2025-06-21",
            "2025-06-24",
            "2025-06-28",
          ];
          break;
        case "clearVisionCentral":
          // clearVision 中环
          this.allowedDates = [];
          break;
        case "clearVisionMongKok":
          // clearVision 旺角
          this.allowedDates = [
            "2025-05-12",
            "2025-05-20",
            "2025-05-26",
            "2025-06-03",
            "2025-06-09",
            "2025-06-17",
            "2025-06-23",
            "2025-06-30",
          ];
          break;
        default:
          break;
      }
    },
    timestampToWeekday(timestamp) {
      const date = new Date(timestamp); // 时间戳通常是秒为单位的，而 Date 构造函数需要毫秒为单位的参数
      const dayOfWeek = date.getDay();
      // 获取当前年月日的字符串表示
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      // 根据星期几返回对应的中文表示
      const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      // 返回格式化后的字符串
      const nowDay = `${year}年${month}月${day}日`;
      const weekday = weekdays[dayOfWeek];
      return {
        nowDay,
        weekday,
      };
    },
    getName(nameAddress) {
      // morningOrAfternoon 可以随着日期不同更改赋值
      const { nowDay, weekday } = this.timestampToWeekday(this.form.subdate);
      this.nowDayTime = nowDay;
      switch (nameAddress) {
        // case "smilerProTsui":
        //   if (weekday == "周六") {
        //     this.morningOrAfternoon = "2:30 下午";
        //   }
        //   return "Smile Pro 講座-尖沙咀";
        case "smileProMongKok":
          if (weekday == "周二") {
            this.morningOrAfternoon = "1:30 下午";
          } else if (weekday == "周四") {
            this.morningOrAfternoon = "6:30 下午";
          } else if (weekday == "周六") {
            if (nowDay[5] == 6) {
              this.morningOrAfternoon = "2:30 下午";
            } else {
              this.morningOrAfternoon = "1:30 下午";
            }
          } else if (weekday == "周一") {
            this.morningOrAfternoon = "6:30 下午";
          }
          return "Smile Pro 講座-旺角";
        case "smileCentral":
          if (weekday == "周三") {
            this.morningOrAfternoon = "1:30 下午";
          } else if (weekday == "周六") {
            if (nowDay[5] == 6) {
              this.morningOrAfternoon = "1:30 下午";
            } else {
              this.morningOrAfternoon = "3:30 下午";
            }
          } else if (weekday == "周一") {
            this.morningOrAfternoon = "6:30 下午";
          } else if (weekday == "周二") {
            this.morningOrAfternoon = "1:30 下午";
          }

          return "Smile講座-中環";
        case "smileMongKok":
          if (weekday == "周二") {
            this.morningOrAfternoon = "1:30 下午";
          } else if (weekday == "周四") {
            this.morningOrAfternoon = "6:30 下午";
          } else if (weekday == "周六") {
            this.morningOrAfternoon = "3:30 下午";
          } else if (weekday == "周三") {
            this.morningOrAfternoon = "1:30 下午";
          }
          return "Smile講座-旺角";
        case "clearVisionCentral":
          this.morningOrAfternoon = "";
          return "老花講座-中環";
        case "clearVisionMongKok":
          if (weekday == "周二") {
            this.morningOrAfternoon = "1:30 下午";
          } else if (weekday == "周一") {
            this.morningOrAfternoon = "6:30 下午";
          } else if (weekday == "周四") {
            this.morningOrAfternoon = "6:30 下午";
          } else if (weekday == "周六") {
            this.morningOrAfternoon = "1:30 下午";
          }
          return "老花講座-旺角";
        default:
          break;
      }
    },
    formatDate(time) {
      const year = date.getFullYear();
      const month = String(time.getMonth() + 1).padStart(2, "0");
      const day = String(time.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    getUrl() {
      // 获取当前页面url
      return window.location.href;
    },
    async submitForm() {
      this.form1.siteSource = this.getUrl();
      let dataList = new FormData();
      let _dataList = { ...this.form, ...this.form1 };

      _dataList.address = this.getName(_dataList.address);
      _dataList.sex = _dataList.sex == "0" ? "女" : "男";
      _dataList.subdate = `${this.getYearMonthDay(_dataList.subdate)} ${this.morningOrAfternoon
        }`;
      window.localStorage.setItem("form", JSON.stringify(_dataList));
      for (const key in _dataList) {
        dataList.append(key, _dataList[key]);
      }
      this.submitAffirm(dataList);
    },
    async submitAffirm(dataList) {
      this.fullscreenLoading = true;
      await fetch("https://admin.hkcmereye.com/api.php/cms/addmsg", {
        method: "POST",
        body: dataList,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code === 1) {
            this.$router.push({ path: "/messageFrom/" });
            this.$message({
              showClose: true,
              message: "講座預約已提交成功！",
              type: "success",
            });
            this.fullscreenLoading = false;
            this.clearFrom();
            this.form.address = "";
            this.test = false;
          }
        })
        .catch(() => {
          this.$message({
            message: "已取消",
            type: "info",
          });
        });
    },
    clearFrom() {
      // this.form.address = "";
      this.form.subdate = "";
      this.morningOrAfternoon = "";
      this.form1.numberSeat = "";
      this.form1.name = "";
      this.form1.sex = "";
      this.form1.age = "";
      this.form1.telphoneNumber = "";
      this.form1.email = "";
      this.form1.source = "";
      this.form1.siteSource = "";
    },
    getYearMonthDay(times) {
      // 通过时间戳获取 年 月 日
      let date = new Date(times);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return year + "-" + month + "-" + day;
    },
    focusSubDate() {
      const arr = [];
      // 获取 type="button"  aria-label="前一年"
      setTimeout(() => {
        const elements = document.querySelectorAll(
          'button[type="button"][aria-label="前一年"]'
        );
        const elements1 = document.querySelectorAll(
          'button[type="button"][aria-label="上个月"]'
        );
        const elements2 = document.querySelectorAll(
          'button[type="button"][aria-label="后一年"]'
        );
        const elements3 = document.querySelectorAll(
          'button[type="button"][aria-label="下个月"]'
        );
        const buttonSpans = document.querySelectorAll('span[role="button"]');
        buttonSpans.forEach((item) => {
          item.style.color = "#303133";
          item.style.disabled = true;
          item.style.cursor = "no-drop";
        });

        // elements elements1 切换年份直接禁用
        // elements[0].style.color = "#303133";
        // elements[0].style.disabled = true;
        // elements[0].style.cursor = "no-drop";
        elements[0].style.display = "none";
        elements2[0].style.display = "none";

        // elements1[0].style.color = "#303133";
        // elements1[0].style.disabled = true;
        // elements1[0].style.cursor = "no-drop";

        // elements2[0].style.color = "#303133";
        // elements2[0].style.disabled = true;
        // elements2[0].style.cursor = "no-drop";
        // elements3[0].style.color = "#303133";
        // elements3[0].style.disabled = true;
        // elements3[0].style.cursor = "no-drop";
      }, 500);
    },
    getNowMonth() {
      // 获取当前月份
      const date = new Date();
      const month = date.getMonth() + 1;
      return month;
    },
  },
  mounted() {
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

<style lang="scss">
.date-picker-class {
  .el-picker-panel__content {
    .el-date-table {
      .el-date-table__row {
        .available {
          &>div {
            background: #4570b6;
            color: #fff;
          }

          &>div:hover {
            background: #b6e2eb;
            color: #fff;
            text-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
          }
        }

        td {
          &>div {
            background: #4570b6;
            color: #fff;
          }

          &>div:hover {
            background: #b6e2eb;
            color: #fff;
            text-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
          }
        }

        .today {
          span {
            color: #444;
          }
        }
      }

      .disabled {
        &>div {
          background-color: #f5f7fa !important;
          color: #c0c4cc !important;
        }

        &>div:hover {
          background-color: #f5f7fa !important;
          color: #c0c4cc !important;
        }
      }
    }
  }

  // .el-date-picker__header {
  //   & > button:nth-child(1):hover,
  //   & > button:nth-child(2):hover {
  //     color: #303133 !important;
  //     cursor: no-drop;
  //   }
  // }
}

@media screen and (max-width: 767px) {
  .el-picker-panel {
    left: 32px !important;
  }

  .el-date-picker__header {
    .el-picker-panel__icon-btn {
      font-size: 24px !important;
    }
  }

  button[type="button"][aria-label="前一年"] {
    display: none !important;
  }

  button[type="button"][aria-label="后一年"] {
    display: none !important;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .dialog-win {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 91;
    display: flex;
    justify-content: center;
    align-items: center;

    &>div {
      border-radius: 15px;
      border: #4570b6 1px solid;
      box-shadow: 0px 0px 8px 6px #d5d5d5f7;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #fff;
      width: 50%;
      position: relative;

      &>div:nth-child(2) {
        padding: 0 6.5vw 50px 6.5vw;
        margin-top: 60px;
        display: flex;
        align-content: flex-end;
        justify-content: flex-end;
        width: 100%;
      }
    }

    h3 {
      padding: 0 20px;
      display: flex;
      width: 100%;
      padding-top: 20px;
      border-bottom: 2px solid #8f8f8f;
    }

    button {
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      /* 150% */
      letter-spacing: 1px;
      padding: 5px 15px;
      border-radius: 5px;
      min-height: 40px;
    }

    button:hover {
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
    }

    button:nth-child(1) {
      background: #4570b6;
      color: #fff;
    }

    button:nth-child(2) {
      background: #eece9f;
      color: #fff;
      margin-left: 20px;
    }
  }

  :deep(.banner-box) {
    box-sizing: border-box;
    padding: 0 3vw;
    max-width: 1270px;
    display: flex;
    justify-content: center;
  }

  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/c26ba48972f2997c.png") no-repeat;
    background-size: cover;
    height: 32.08vw;
    width: 100%;
    max-width: 1150px;
    max-height: 556px;
    background-position: center;
    border-radius: 55px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    margin-bottom: 30px;

    &>p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 50.75px;
      /* 169.167% */
      letter-spacing: 7.5px;
    }

    &>p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 43.5px;
      /* 290% */
      letter-spacing: 0.45px;
    }
  }

  .preaching-seat {
    overflow: hidden;
  }

  .lecture-box {
    margin: 0 auto;
    margin-top: 175px;
    position: relative;
  }

  .lecture-title {
    background: url("https://static.cmereye.com/imgs/2024/04/03634579600959fb.png") no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    height: auto;
    padding: 0 0 85px;

    &>div {
      max-width: 1270px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .title-img {
    // position: absolute;
    // top: -25%;
    // left: 50%;
    // transform: translateX(-50%);
    transform: translateY(-50%);
    width: 307px;
    height: 307px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &>div:nth-child(2) {
      margin-top: 10px;
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans";
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px;
      /* 166.667% */
      letter-spacing: 7.5px;
    }
  }

  .lecture-content {
    margin-top: -5%;

    &>div:nth-child(1),
    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &>div:nth-child(1) {
      p {
        color: #4570b6;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px;
        /* 225% */
        letter-spacing: 6px;
      }
    }

    &>div:nth-child(2) {
      margin-top: 20px;

      P {
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 45px;
        /* 225% */
        letter-spacing: 6px;
      }
    }
  }

  .lecture-form {
    margin: 50px auto 0;
  }

  :deep(.el-form) {
    max-width: 870px;
    margin: 0 auto;
  }

  .lecture-image {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 85px 0;

    &>img {
      width: 952px;
    }
  }

  .form-data {
    color: #6d6e71;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 45px;
    letter-spacing: 6px;
    max-width: 870px;
    margin: 55px auto;
    border: 1px dashed #dadada;
    border-right: none;
    border-left: none;
    padding: 10px 0;

    span {
      color: #4570b6;
      font-weight: 700;
    }
  }

  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-date-editor) {
    width: 100%;
  }

  :deep(.el-form-item__label) {
    color: #fff;
    background: #4570b6;
    border-radius: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5;
    /* 100% */
    letter-spacing: 6px;
    position: relative;
    z-index: 9;
    padding: 0;
  }

  :deep(.el-input__inner) {
    border-radius: 100px;
    border: 2px solid #4570b6;
    background: #fff;
    color: #87898c;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5;
    /* 100% */
    letter-spacing: 6px;
    padding: 23px 0 23px 60px;
  }

  :deep(.el-form-item__content) {
    left: -50px;
  }

  :deep(.form1) {
    &>div:last-child {
      display: flex;
      justify-content: center;

      .el-form-item__content {
        padding-left: 50px;
      }
    }
  }

  :deep(.el-button) {
    color: #fff;
    background: #4570b6;
    border-radius: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5;
    letter-spacing: 6px;
    padding: 0 60px;
  }

  :deep(.el-button:hover) {
    box-shadow: 0px 0px 8px 6px #d5d5d5f7;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .lecture-title {
    &>div {
      max-width: 99.21875vw !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .dialog-win {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 91;
    display: flex;
    justify-content: center;
    align-items: center;

    &>div {
      border-radius: 15px;
      border: #4570b6 1px solid;
      box-shadow: 0px 0px 8px 6px #d5d5d5f7;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #fff;
      width: 80%;
      position: relative;

      h3 {
        color: #474747;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 2px;
        padding: 8px 15px;
        border-bottom: 1px solid #87898c80;
      }

      &>div:nth-child(2) {
        margin-top: 30px;
        padding: 0 6.5vw 6.5vw 6.5vw;

        button {
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px;
          /* 150% */
          letter-spacing: 1px;
          padding: 5px 15px;
          border-radius: 5px;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
        }

        button:nth-child(1) {
          background: #4570b6;
          color: #fff;
        }

        button:nth-child(2) {
          background: #eece9f;
          color: #fff;
          margin-left: 20px;
        }
      }
    }
  }

  .banner-img {
    background: url("https://static.cmereye.com/imgs/2024/04/d226e2e185d53c48.png") no-repeat;
    background-size: 100% 100%;
    height: 84.6vw;
    margin: 24px 30px;
    border-radius: 44px;
    margin-top: 80px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;

    &>p {
      max-width: 150px;
    }

    &>p:nth-child(1) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      /* 169.167% */
      letter-spacing: 3.5px;
    }

    &>p:nth-child(2) {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      /* 290% */
      letter-spacing: 0.3px;
    }
  }

  .lecture-box {
    position: relative;
    margin-bottom: 55px;
  }

  .lecture-title {
    background: url(https://static.cmereye.com/imgs/2024/04/d7625f69f04ff1b8.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    margin-top: 100px;
    padding: 115px 0 40px;

    &>div {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title-img {
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 170px;
        height: 170px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &>div:nth-child(1) {
          position: relative;
          top: 15px;
        }

        &>div:nth-child(2) {
          margin-top: 15px;
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 35px;
          /* 175% */
          letter-spacing: 1px;
          position: relative;
          top: 3px;
        }
      }

      .lecture-content {

        // margin-top: -50px;
        &>div:nth-child(1) {
          color: #4570b6;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.5vw;
          font-style: normal;
          font-weight: 700;
          line-height: 7.5vw;
          /* 214.286% */
          letter-spacing: 0.7px;
        }

        &>div:nth-child(2) {
          margin-bottom: 50px;
          color: #6d6e71;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.1vw;
          font-style: normal;
          font-weight: 300;
          line-height: 6.4vw;
          /* 208.333% */
          letter-spacing: 0.6px;

          &>p:nth-child(2) {
            padding: 0 40px;
          }

          &>p:nth-child(3) {
            padding: 0 55px;
          }

          &>p:nth-child(4) {
            padding: 0 15px;
          }
        }
      }
    }
  }

  .form-data {
    padding: 0 30px;
    color: #6d6e71;
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.6px;

    span {
      color: #4570b6;
    }
  }

  .form1 {
    margin-top: 20px;
  }

  :deep(.el-form-item__label) {
    width: 30.76vw !important;
    color: #fff;
    background: #4570b6;
    border-radius: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans HK";
    font-size: 4.1vw;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5;
    /* 125% */
    letter-spacing: 0.8px;
    position: relative;
    height: 10.5vw;
    z-index: 9;
    padding: 0;
  }

  :deep(.el-picker-panel__icon-btn) {
    font-size: 24px !important;
    margin-right: 10px;
  }

  :deep(.el-form) {
    width: 100%;
    padding: 0 5.6vw;
  }

  :deep(.el-input__inner) {
    border-radius: 100px;
    border: 0.5vw solid #4570b6;
    background: #fff;
    color: #c0c4cc;
    font-family: "Noto Sans HK";
    font-size: 3.6vw;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5;
    /* 142.857% */
    letter-spacing: 0.7px;
    padding: 4.5vw 0 4.5vw 12.89vw;
    height: 10.5vw;
  }

  .lecture-form {
    width: 100vw;
  }

  .lecture-image {
    margin: 0 auto;

    &>img {
      width: 100%;
    }
  }

  :deep(.el-form-item__content) {
    margin-left: 46.15vw !important;
    width: 70.5vw;
    line-height: 10.5vw;
    left: -25.6vw;
  }

  :deep(.form1) {
    &>div:last-child {
      display: flex;
      justify-content: center;

      .el-form-item__content {
        padding-left: 30px;
      }
    }
  }

  :deep(.el-button) {
    color: #fff;
    background: #4570b6;
    border-radius: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5;
    letter-spacing: 6px;
    padding: 0 60px;
  }

  :deep(.el-button:hover) {
    box-shadow: 0px 0px 8px 6px #d5d5d5f7;
  }

  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-date-editor) {
    width: 100%;
  }
}

:deep(.el-message-box) {
  width: 310px !important;
}
</style>