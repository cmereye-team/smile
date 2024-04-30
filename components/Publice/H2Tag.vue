<template>
  <h2>
    <span v-for="(e, i) in title" :key="i">{{ e }}</span>
  </h2>
</template>

<script>
export default {
  name: "H2Tag",
  props: ["title"],
  // 获取传入的数据
  created() {
  },
  // 计算属性
  methods: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
:deep(h2::before) {
  content: none;
  border: none;
}
:deep(h2) {
  border: none;
}
h2::before {
  content: none;
  border: none;
}
h2 {
  border: none;
}
@media screen and (min-width: 768px) {
  h2 {
    padding-bottom: 32px;

    span {
      color: #4570b6;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 100% */
      letter-spacing: 7.5px;
    }
  }
  h2::after {
    content: "";
    background: #a6e1d6;
    width: 39px;
    height: 8px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}
@media screen and (max-width: 767px) {
  h2 {
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    span {
      color: #4570b6;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      letter-spacing: 5px;
    }
  }
  h2::after {
    content: "";
    background: #a6e1d6;
    width: 37px !important;
    height: 5px !important;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>