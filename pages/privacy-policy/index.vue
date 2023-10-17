<template>
  <div>
    <Header />
    <Navbar />
    <div class="page_container box">
      <div class="flex justify-center md:mt-28 mt-10">
        <h2>{{$t('privacyPolicy.h2')}}</h2>
      </div>
      <p class="pb-4">
        {{$t('privacyPolicy.p1')}}
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p2')}}
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p3')}}</p>
      <p class="pb-4">
        {{$t('privacyPolicy.p4')}}
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p5')}}
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p6')}}
      </p>
      <p class="pb-4" v-html="$t('privacyPolicy.p7')">
      </p>
      <p class="pb-4"><span class="text-blue">{{$t('privacyPolicy.p8')}}</span></p>
      <p class="pb-4">
        {{$t('privacyPolicy.p9')}}
      </p>
      <p class="pb-4"><span class="text-blue">{{$t('privacyPolicy.p10')}}</span></p>
      <p class="pb-4">{{$t('privacyPolicy.p11')}}</p>
      <p class="pb-4">· {{$t('privacyPolicy.p12')}}</p>
      <p class="pb-4">
        · {{$t('privacyPolicy.p13')}}
      </p>
      <p class="pb-4">· {{$t('privacyPolicy.p14')}}</p>
      <p class="pb-4">
        · {{$t('privacyPolicy.p15')}}
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p16')}}
      </p>
      <p class="pb-4"><span class="text-blue">{{$t('privacyPolicy.p17')}}</span></p>
      <p>
        {{$t('privacyPolicy.p18')}}
      </p>
      <p class="pb-4"><span class="text-blue">{{$t('privacyPolicy.p19')}}</span></p>
      <p class="pb-4" v-html="$t('privacyPolicy.p20')" >
      </p>
      <p class="pb-4">
        {{$t('privacyPolicy.p21')}}
      </p>
      <p class="pb-4" v-html="$t('privacyPolicy.p22')" >
      </p>
      <p class="pb-24">{{$t('privacyPolicy.p23')}}</p>
    </div>
    <Footer />
    <footers />
  </div>
</template>

<script>
// import Header from "@/components/commom/head/Header.vue";
// import Navbar from "@/components/commom/head/Navbar.vue";
// import Footer from "@/components/commom/foot/Footer.vue";
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";
import footers from "@/components/commom/foot/footers.vue";

export default {
  components: { Header, Navbar, Footer, footers },
  head() {
    return {
      title: "私隱政策 - 香港希瑪微笑矯視中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "以下是希瑪眼科醫療控股有限公司與其附屬公 […]",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 19px;
  color: #4570B6;
}
@media only screen and (max-width: 768px) {
  /deep/ p {
    font-size: 15px;
  }
}
@media only screen and (min-width: 768px) {
  /deep/ p {
    font-size: 16px;
  }
}
.text-blue {
  color: #25395e;
  font-size: 22px;
}
.box {
  padding: 0;
}
.section.vedio_box {
  margin-top: 0;
}
</style>
