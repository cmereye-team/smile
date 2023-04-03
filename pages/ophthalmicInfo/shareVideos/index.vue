<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <shareVideo />
    

    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import MainBanner from "@/components/content/ophthalmicInfo/shareVideos/MainBanner.vue";
import shareVideo from "@/components/content/ophthalmicInfo/shareVideos/shareVideo.vue";


export default { components: { Header, Navbar, Footer, MainBanner, shareVideo} }
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>