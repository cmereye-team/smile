<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import FooterMobile from "@/components/layout/FooterMobile.vue";
import goTop from "@/components/Publice/goTop.vue";
export default {
  components: {
    Header,
    Footer,
    FooterMobile,
    goTop,
  },
};
</script>
<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <FooterMobile />
    <goTop />
  </div>
</template>
<style lang="scss" scoped></style>
