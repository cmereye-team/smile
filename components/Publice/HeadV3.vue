<!--
 * @Author: 谭洁莹
 * @Date: 2025-08-20 15:05:37
 * @LastEditTime: 2025-11-25 16:56:08
 * @FilePath: /components/Publice/HeadV3.vue
 * @Description: 第三版页头
-->
<template>
  <div class="headV3">
    <div class="headV3-bg">
      <HeadLeftV2 class="headV3-logo" />
      <HeadMobileV3 :isICLTalk="isICLTalk" />
    </div>
  </div>
</template>
<script>
import HeadLeftV2 from "./HeadeLeftV2.vue";
import HeadMobileV3 from "./HeadMobileV3.vue";
export default {
  components: {
    HeadLeftV2,
    HeadMobileV3,
  },
  props: {
    isICLTalk: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
$primary-color: #4570b6;
$text-color: #6d6e71;
.headV3 {
  z-index: 102;
  height: 87px;
  position: sticky;
  top: 0;
  width: 100%;
  &-bg {
    width: 100%;
    min-height: 100%;
    padding: #{"clamp(1.125rem, 0.67rem + 2.27vw, 2.375rem)"} #{"clamp(1rem, 0.045rem + 4.77vw, 3.625rem)"};
    background: #f6fafd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-logo {
    position: absolute;
    top: #{"clamp(1.125rem, 0.67rem + 2.27vw, 2.375rem)"};
    left: #{"clamp(1rem, 0.045rem + 4.77vw, 3.625rem)"};
  }
}
@media screen and (min-width:768px) {
  .headV3 {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .headV3 {
    height: 100px;
  }
}
@media screen and (min-width: 1024px) {
  .headV3 {
    height: 180px;
    left: 0;
    transform: none;
    &-bg {
      border-radius: 0 0 20px 20px;
    }
  }
}
</style>
