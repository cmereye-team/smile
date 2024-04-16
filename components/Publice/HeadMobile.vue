<template>
  <div class="HeadMobile">
    <div class="mbHeaderBox mb_menu">
      <div @click="langBox = !langBox">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00001 0.5C7.21998 0.5 5.47992 1.02783 3.99988 2.01676C2.51983 3.00569 1.36627 4.4113 0.685087 6.05584C0.00389886 7.70037 -0.17433 9.50996 0.172937 11.2558C0.520203 13.0016 1.37737 14.6053 2.63604 15.8639C3.89471 17.1226 5.49837 17.9798 7.24419 18.327C8.99002 18.6743 10.7996 18.4961 12.4441 17.8149C14.0887 17.1337 15.4943 15.9801 16.4832 14.5001C17.4722 13.0201 18 11.28 18 9.49999C18 7.11304 17.0518 4.82386 15.3639 3.13604C13.6761 1.44821 11.387 0.5 9.00001 0.5ZM16.7352 8.86051H13.3484C13.2632 6.05631 12.6095 3.65 11.61 2.17684C13.0161 2.6807 14.2474 3.57902 15.1563 4.76434C16.0653 5.94966 16.6134 7.37178 16.7352 8.86051ZM9.00001 17.24C7.57896 17.24 6.03946 14.341 5.89736 10.1063H12.1026C11.9653 14.36 10.4068 17.2589 9.00001 17.2589V17.24ZM5.89736 8.86051C6.03946 4.62578 7.59791 1.72684 9.00001 1.72684C10.4021 1.72684 11.9653 4.62578 12.1026 8.86051H5.89736ZM6.39475 2.17684C5.39528 3.67368 4.74157 6.05631 4.65631 8.86051H1.26949C1.3948 7.37512 1.94456 5.95708 2.85328 4.77541C3.762 3.59375 4.99133 2.6983 6.39475 2.19578V2.17684ZM1.26949 10.1063H4.63737C4.72263 12.9105 5.37631 15.2931 6.37578 16.79C4.97622 16.284 3.75121 15.3871 2.84611 14.2058C1.94101 13.0245 1.39382 11.6083 1.26949 10.1253V10.1063ZM11.61 16.79C12.6095 15.2931 13.2632 12.9105 13.3484 10.1063H16.7352C16.6164 11.5982 16.0696 13.0241 15.1605 14.213C14.2514 15.4019 13.0186 16.3032 11.61 16.8089V16.79Z"
            fill="#4570B6"
          />
        </svg>
      </div>
      <div><i></i><i></i><i></i></div>
    </div>
    <div class="langBox" v-if="langBox">
      <nuxt-link
        :class="[
          'text-center',
          $i18n.locale === 'hk' ? 'langBoxClass' : '',
        ]"
        :to="switchLocalePath('hk')"
      >
        繁体
      </nuxt-link>
      <nuxt-link
        :class="[
          'text-center',
          $i18n.locale === 'cn' ? 'langBoxClass' : '',
        ]"
        :to="switchLocalePath('cn')"
      >
        简体
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langBox: false,
      langDrawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
  .HeadMobile{
    position: relative;
  }
  .mbHeaderBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mb_menu {
    display: flex;
    align-items: center;
    position: relative;
    & > div {
      margin-left: 10px;
    }
    & > div:nth-child(2) {
      width: 41px;
      height: 41px;
      background: #4570b6;
      border-radius: 19px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > i {
        display: inline-block;
        width: 55%;
        height: 3px;
        background: #fff;
        border-radius: 3px;
      }

      & > i:nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  .langBoxClass {
    color: #fff !important;
    background: #4570b6 !important;
  }
  .langBox-title {
    color: #6d6e71;
    text-align: center;
    line-height: 40px;
  }

  .langBox {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 50px;
    top: 32px;
    width: 80px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #4570b6;
    padding-top: 0;
    &>a {
      width: 100%;
      padding: 10px 0;
    }
  }
}
</style>