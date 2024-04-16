<template>
  <div class="head">
    <HeadLeft />
    <HeadRight />
  </div>
</template>

<script>
import HeadLeft from "../Publice/HeadLeft.vue";
import HeadRight from "../Publice/HeadRight.vue";
export default {
  components: {
    HeadLeft,
    HeadRight,
  },
};
</script>

<style lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  max-width: 1270px;
  margin: 0 auto;
  padding: 35px 0;
}
</style>