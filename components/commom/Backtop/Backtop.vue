<template>
  <div class="backtop">
    <el-backtop :bottom="bottom" ref="backtop" class="backtop-main">
      <div
        class="backtop-container"
        :style="{ background: backgroundStyle }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M9.70312 6.76538V18.3683"
            stroke="white"
            stroke-width="1.48026"
            stroke-linecap="round"
          />
          <path
            d="M4.60093 10.9194L9.70281 5.93091L14.8047 10.9194"
            stroke="white"
            stroke-width="1.48026"
            stroke-linecap="round"
          />
        </svg>
        <span
          class="backtop-text font-en"
        >
          {{ text }}
        </span>
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'Backtop',
  props: {
    background: {
      type: String,
      default: 'linear-gradient(180deg, #A7D8FF 15%, #4570B6 100%)',
    },
    text: {
      type: String,
      default: 'TOP',
    },
    bottom: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    backgroundStyle() {
      return this.background;
    },
  },
};
</script>

<style lang="scss" scoped>
.backtop {
  position: sticky;
  bottom: 150px;
  height: 0;
  z-index: 10;
  &-main {
    background: transparent;
    box-shadow: none;
    left: 5px;
    right: auto !important;
    position: relative;
  }
  &-container {
    width: 32.972px;
    height: 66.812px;
    border-radius: 43.39px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.75px;
    @media screen and (min-width: 768px) {
      width: 32.5px;
      height: 65.855px;
      border-radius: 42.763px;
    }
  }
  &-text {
    font-size: #{'clamp(0.5966rem, 0.5681rem + 0.1425vw, 0.675rem)'};
    font-weight: bold;
    text-align: center;
  }
}
@media screen and (min-width: 991px) {
  .backtop {
    &-main {
      left: calc(50% - 400.25px);
    }
  }
}
</style>