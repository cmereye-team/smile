<template>
  <div class="page_container">
    <div class="film-top flex justify-center">
      <h2 class="title-content" v-html="$t('service.icl.film.h2')"></h2>
    </div>
    <div class="icl-youtube-video flex justify-around flex-col md:flex-row mt-20">
      <iframe
        class="pcShow"
        width="500"
        height="321"
        src="https://www.youtube.com/embed/0-mlyxrBaus"
        :title="$t('service.icl.film.title1')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        class="pcShow"
        width="500"
        height="321"
        src="https://www.youtube.com/embed/7_A3ae7q15E"
        :title="$t('service.icl.film.title2')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        class="mbShow"
        width="100%"
        height="230"
        src="https://www.youtube.com/embed/0-mlyxrBaus"
        :title="$t('service.icl.film.title1')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        class="mbShow mt-5"
        width="100%"
        height="321"
        src="https://www.youtube.com/embed/7_A3ae7q15E"
        :title="$t('service.icl.film.title2')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
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
  .film-top {
    margin-top: 70px;
  }
  .title-content {
    color: #4570b6;
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    position: relative;
    padding: 0;
    padding-bottom: 15px;
    border: none;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
    &::before{
      content: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .film-top {
    margin-top: 32px;
  }
  .title-content {
    text-align: center;
    position: relative;
    padding: 0;
    border: none;
    padding-bottom: 15px;
    color: #4570B6;
    text-align: center;
    font-family: Noto Sans HK;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 23.305px; /* 116.525% */
    letter-spacing: 5px;
    &::after {
      content: "";
      background: #a6e1d6;
      width: 39px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
    &::before{
      content: none;
    }
  }
  h2 {
    font-size: 16px;
  }
  h2::after {
    width: 15vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    right: -15vw;
  }
  body h2::before {
    width: 15vw;
    height: 0;
    border-top: 1px solid #dfdfdf;
    left: -15vw;
  }
  .icl-youtube-video {
    margin-top: 30px;
  }
}
</style>
