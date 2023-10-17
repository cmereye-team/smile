<template>
  <div>
    <Header />
    <Navbar />

    <MainBanner />
    <AppointForm />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/commom/new_head/Header.vue";
import Navbar from "@/components/commom/new_head/Navbar.vue";
import Footer from "@/components/commom/new_foot/Footer.vue";

import MainBanner from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/MainBanner.vue";
// import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom.vue";
import AppointForm from "@/components/content/ophthalmicInfo/serveYyue/AppointForm/appointFrom_ifram.vue";

export default {
  components: { Header, Navbar, Footer, MainBanner, AppointForm },
};
</script>

<style lang="scss" scoped>
.section.vedio_box {
  margin-top: 0;
}
</style>
