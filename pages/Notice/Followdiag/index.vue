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
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

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