<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import FooterMobile from "@/components/layout/FooterMobile.vue";
export default {
  components: {
    Header,
    Footer,
    FooterMobile,
  },
};
</script>
<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <FooterMobile />
  </div>
</template>
<style lang="scss" scoped></style>
