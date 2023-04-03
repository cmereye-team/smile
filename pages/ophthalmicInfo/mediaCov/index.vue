<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <media />
    

    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import MainBanner from "@/components/content/ophthalmicInfo/mediaCov/MainBanner.vue";
import media from "@/components/content/ophthalmicInfo/mediaCov/media.vue";


export default { components: { Header, Navbar, Footer, MainBanner, media} }
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>