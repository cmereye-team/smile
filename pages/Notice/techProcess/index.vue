<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <process />
    <regard />

    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/Notice/techProcess/MainBanner.vue";
import process from "@/components/content/Notice/techProcess/process.vue";
import regard from "@/components/content/Notice/techProcess/regard.vue";

export default { components: { Header, Navbar, Footer, MainBanner, process, regard} }
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>