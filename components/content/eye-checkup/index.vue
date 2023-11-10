<template>
 <div class="page_container">



    <div class="flex justify-center md:mt-14 mt-10">
      <h2>{{$t('eyeCheckup.h2')}}</h2>
    </div>
    <div class="jianc">
      <div class="jianc_box">
        <div class="box_text">
          <h3>{{$t('eyeCheckup.h3')}}</h3>
          <p>
            {{$t('eyeCheckup.p1')}}
            {{$t('eyeCheckup.p2')}}
          </p>
          <p>
            · {{$t('eyeCheckup.p3')}}<br />
            · {{$t('eyeCheckup.p4')}}<br />
            · {{$t('eyeCheckup.p5')}}<br />
            · {{$t('eyeCheckup.p6')}}
          </p>
          <p class="md:mt-5">
            {{$t('eyeCheckup.p7')}}：<br />
            {{$t('eyeCheckup.p8')}}<br />
            · {{$t('eyeCheckup.p9')}}<br />
            · {{$t('eyeCheckup.p10')}}<br />
            · {{$t('eyeCheckup.p11')}}<br />
            · {{$t('eyeCheckup.p12')}}<br />
            · {{$t('eyeCheckup.p13')}}<br />
            · {{$t('eyeCheckup.p14')}}
          </p>
          <p class="md:mt-5">
            {{$t('eyeCheckup.p15')}}<br />
            {{$t('eyeCheckup.p16')}}<br />
          </p>

            <a
              class="gtm-yysqjj btn"
              href=" https://wa.me/85260610511"
              target="_blank"
              ><span
                ><button class="button_size_4">{{$t('eyeCheckup.button')}}</button></span
              ></a
            >

        </div>
        <div class="box_img">
          <img
            src="https://smilecms.hkcmereye.com/wp-content/uploads/2020/05/5.19%E6%9C%AF%E5%89%8D%E6%A3%80%E6%9F%A5%E6%B5%81%E7%A8%8B-%E7%A1%AE%E7%A8%BF-01-1.png"
            alt=""
          />
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
h2 {
  font-size: 25px;
  color: #4570B6;
}
@media screen and (min-width: 768px) {
  .jianc {
    margin-bottom: 60px;
  }
  .btn {
    a {
      color: #0d508b;
    }
    button {
      margin-top: 60px;
      color: #fff;
      background: linear-gradient(90.24deg, #4B7BBC 10.22%, #7ED7EA 100%);
      display: inline-block;
      padding: 11px 20px;
      margin-bottom: 15px;
      cursor: pointer;
      margin-right: 7px;
      border: 0;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }
  }
  .jianc_box {
    display: flex;
  }
  .box_text {
    flex: 0.8;
    p {
      padding-top: 10px;
    }
  }
  .box_img {
    flex: 0.6;
  }
}
@media screen and (max-width: 768px) {
  .jianc {
    margin-bottom: 60px;
  }
  .btn {
    a {
      color: #0d508b;
    }
    button {
      margin-top: 60px;
      color: #fff;
      background-color: #0d508b !important;
      display: inline-block;
      padding: 11px 20px;
      margin-bottom: 15px;
      cursor: pointer;
      margin-right: 7px;
      border: 0;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }
  }

  .box_text {
    flex: 0.8;
    p {
      padding-top: 10px;
    }
  }
  .box_img {
    flex: 0.6;
  }
}
</style>
