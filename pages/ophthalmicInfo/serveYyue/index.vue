<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <serve />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/ophthalmicInfo/serveYyue/MainBanner.vue";
import serve from "@/components/content/ophthalmicInfo/serveYyue/serve.vue";

export default { components: { Header, Navbar, Footer, MainBanner, serve } };
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
