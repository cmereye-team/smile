<script>


</script>

<template>
  <div class="Banner">
    <slot name="banner" ></slot>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width:768px) {
  .Banner{
    margin: 0 auto;
      max-width: 1270px;
    margin-top: 145px;
  }
  .banner-img > p{
    font-family:"Microsoft YaHei"!important
  }
}
@media screen and (max-width:767px) {
  .Banner{
    margin-top: 80px;
  }
    .banner-img > p{
    font-family:"Microsoft YaHei" !important
  }
}
</style>