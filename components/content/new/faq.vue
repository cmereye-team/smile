<template>
  <div class="faq">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(item, index) in faqList"
        :key="index"
        :title="`Q${index + 1}:${item.q}`"
        :name="index + 1"
      >
        <p v-for="(ele, index) in item.f" :key="index">
          <span v-html="ele"></span>
        </p>
      </el-collapse-item>
    </el-collapse>
    <nuxt-link :to="faqLink" class="faq-link">查看更多</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    faqList: {
      type: Array,
      default() {
        return [];
      },
    },
    faqLink: {
      type: String,
    },
  },
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .faq {
    max-width: 1270px;
    margin: 0 auto;
  }
  :deep(.el-collapse-item__arrow) {
    display: block;
  }
  :deep(.el-collapse-item__header) {
    border-radius: 19px;
    border: 1px solid #a6e1d6;
    background: #8ba9da;
    padding: 24px 53px;
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 166.667% */
    letter-spacing: 7.5px;
    height: auto;
  }
  :deep(.el-collapse-item__header.is-active) {
    background: #4570b6;
    border-radius: 19px;
    border: 1px solid #a6e1d6;
  }
  :deep(.el-collapse-item__content) {
    padding: 20px 25px;
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 30px;
      font-style: normal;
      font-weight: 300;
      line-height: 50px; /* 166.667% */
      letter-spacing: 7.5px;
    }
  }
  .faq-link {
    margin: 0 auto;
    width: fit-content;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 85.714% */
    letter-spacing: 8.75px;
    border-radius: 100px;
    background: #4570b6;
    padding: 22px 48px;
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
@media screen and (max-width: 767px) {
  .faq {
    padding: 0 30px;
  }
  :deep(.el-collapse){
    border:none
  }
  :deep(.el-collapse-item__arrow) {
    display: block;
  }
  :deep(.el-collapse-item__header) {
    border-radius: 19px;
    border: 1px solid #a6e1d6;
    background: #8ba9da;
    padding: 10px 0 10px 10px;
    color: #fff;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 200% */
    letter-spacing: 1px;
    height: auto;
  }
  :deep(.el-collapse-item__header.is-active) {
    background: #4570b6;
    border-radius: 19px;
    border: 1px solid #a6e1d6;
  }
  :deep(.el-collapse-item__content) {
    padding: 10px 5px 10px 10px;
    p {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 30px; /* 187.5% */
      letter-spacing: 0.8px;
    }
  }
  .faq-link {
    margin: 55px auto;
    width: fit-content;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 150% */
    letter-spacing: 1px;
    border-radius: 100px;
    background: #4570b6;
    padding: 1px 35px;
    display: flex;
  }
}
</style>