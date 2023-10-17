<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <eyeTest />
    <Preorthoptic />

    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/Notice/eyeExam/MainBanner.vue";
import eyeTest from "@/components/content/Notice/eyeExam/eyeTest.vue";
import Preorthoptic from "@/components/content/Notice/eyeExam/Preorthoptic.vue";

export default { components: { Header, Navbar, Footer, MainBanner, eyeTest, Preorthoptic} }
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>