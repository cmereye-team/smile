<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <followDiago />
    <precautions />

    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/commom/head/Header.vue";
import Navbar from "@/components/commom/head/Navbar.vue";
import Footer from "@/components/commom/foot/Footer.vue";

import MainBanner from "@/components/content/Notice/Followdiag/MainBanner.vue";
import followDiago from "@/components/content/Notice/Followdiag/followDiago.vue";
import precautions from "@/components/content/Notice/Followdiag/precautions.vue";

export default { components: { Header, Navbar, Footer, MainBanner, followDiago, precautions} }
</script>


<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>