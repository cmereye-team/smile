<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{ $t('home.headers.ophthalmicConsultationChild_2') }}</h2>
    </div>
    <div class="media-buju">
      <div class="media-box">
        <a
          href="https://urbanlifehk.com/article/33149/%E7%9F%AF%E8%A6%96-%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E9%81%A9%E5%90%88%E7%9F%AF%E8%A6%96-%E6%89%8B%E8%A1%93%E6%9C%89%E9%A2%A8%E9%9A%AA%E5%97%8E-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3smile%E5%BE%AE%E7%AC%91%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B-%E9%A2%A8%E9%9A%AA"
        >
          <img
            src="https://static.cmereye.com/imgs/2022/12/66538cb27950d31e.jpg"
            alt=""
          />
          <div class="meida">
            <div class="meida-data">
              <span class="icon">{{ $t('media.media1.title') }}</span>
              <span class="data">02.02.2019</span>
            </div>
            <p>
              {{ $t('media.media1.content') }}
            </p>
          </div>
        </a>
      </div>
      <div class="media-box">
        <a
          href="https://urbanlifehk.com/article/32361/%E7%99%BD%E5%85%A7%E9%9A%9C-50%E6%AD%B2%E4%BB%A5%E4%B8%8A-%E8%A6%96%E5%8A%9B%E6%A8%A1%E7%B3%8A-%E6%9C%89%E9%87%8D%E5%BD%B1-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3%E7%99%BD%E5%85%A7%E9%9A%9C4%E5%A4%A7%E6%88%90%E5%9B%A0-%E5%BE%B5%E7%8B%80%E5%92%8C%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B"
        >
          <img
            src="https://static.cmereye.com/imgs/2023/01/a4665ddaa1b1a3e4.jpg"
            alt=""
          />
          <div class="meida">
            <div class="meida-data">
              <span class="icon">{{ $t('media.media2.title') }}</span>
              <span class="data">07.01.2020</span>
            </div>
            <p>
              {{ $t('media.media2.content') }}
            </p>
          </div>
        </a>
      </div>
      <div class="media-box">
        <a
          href="https://hk.lifestyle.appledaily.com/lifestyle/realtime/article/20190202/59211897"
        >
          <img
            src="https://static.cmereye.com/imgs/2023/01/43378deace4197f5.jpg"
            alt=""
          />
          <div class="meida">
            <div class="meida-data">
              <span class="icon">{{ $t('media.media3.title') }}</span>
              <span class="data">02.02.2019</span>
            </div>
            <p>{{ $t('media.media3.content') }}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="flex justify-center more-btn">
      <span>更多文章</span>
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
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 25px;
}
@media screen and (min-width: 768px) {
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
  .media-buju {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  }
  .media-box {
    border: 2px solid #4570b6;
    border-radius: 18px;
    width: 82%;
    margin: 50px 0;
    img {
      width: 100%;
    }
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      /* or 133% */
      padding: 10px 0;
      text-align: justify;
      letter-spacing: 0.06em;

      color: #6D6E71;
    }
    .meida {
      padding: 10px 13px;
    }
  }
  .meida-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
      border-radius: 3px;
      padding: 5px;

      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 9px;
      /* or 82% */

      text-align: center;
      letter-spacing: 0.06em;

      color: #fbfbf6;
    }
    .data {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      /* identical to box height, or 83% */

      text-align: right;
      letter-spacing: 0.06em;

      color: #6D6E71;
    }
  }
}
@media screen and (max-width: 768px) {
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
  .media-buju {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .media-box {
    border: 2px solid #4570b6;
    border-radius: 18px;
    width: 82%;
    margin: 0 0 50px 0;
    p {
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      /* or 133% */
      padding: 10px 0;
      text-align: justify;
      letter-spacing: 0.06em;

      color: #6D6E71;
    }
    .meida {
      padding: 10px 13px;
    }
  }
  .meida-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      background: linear-gradient(104.24deg, #5184c1 5.95%, #7cd3e8 114.4%);
      border-radius: 3px;
      padding: 5px;

      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 9px;
      /* or 82% */

      text-align: center;
      letter-spacing: 0.06em;

      color: #fbfbf6;
    }
    .data {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      /* identical to box height, or 83% */

      text-align: right;
      letter-spacing: 0.06em;

      color: #6D6E71;
    }
  }
}
</style>
