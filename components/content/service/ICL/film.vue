<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{ $t('service.icl.film.h2') }}</h2>
    </div>
    <div class="flex justify-around flex-col md:flex-row">
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
        height="321"
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
}
@media screen and (max-width: 768px) {
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
}
</style>
