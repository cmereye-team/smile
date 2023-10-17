<template>
  <div
    class="section flex justify-start items-center"
    :class="[
      $i18n.locale == 'en' && $route.path == '/en/vision-correction-presbyopia'
        ? 'section_vision_eng'
        : 'section',
      $i18n.locale == 'en' && $route.path == '/en/vision-correction-icl'
        ? 'section_vision_eng_icl'
        : 'section',
    ]"
  >
    <div
      class="des_box"
      :class="[
        $i18n.locale == 'en' &&
        $route.path == '/en/vision-correction/relex-smile'
          ? 'des_box_eng'
          : 'des_box'
      ,
        $i18n.locale == 'en' &&
        $route.path == '/en/vision-correction-icl'
          ? 'des_box_eng_icl'
          : 'des_box'
          ]"
    >
      <h3
        :class="$i18n.locale == 'en' ? 'gradient_font_en' : 'gradient_font'"
        :style="{
          maxWidth:
            $i18n.locale == 'en' && $route.path == '/en/post-corrective-care'
              ? '350px'
              : 'initial',
        }"
      >
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="des"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .section {
    height: 480px;
    margin-top: 0;
    background-size: cover !important;
    background-repeat: no-repeat;
    padding-left: 164px;

    .des_box {
      width: 648px;
      margin-bottom: 75px;

      h3 {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 500;
        font-size: 38px;

        /* identical to box height, or 87% */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.15em;

        color: #4570b6;
      }

      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        /* or 200% */
        margin-top: 12px;
        letter-spacing: 0.1em;
        text-align: justify;
        color: #9b9b9b;
      }
    }
    .des_box_eng {
      margin-bottom: 0;
      p {
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 1.8px;
        font-weight: 300;
      }
    }
    .des_box_eng_icl {
      margin-bottom: 0;
      p {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.8px;
        font-weight: 300;
      }
    }
  }
  .section_vision_eng {
    padding-left: 92px;
    .des_box {
      width: 680px;
      margin-bottom: 0;
    }
  }
  .section_vision_eng_icl {
    padding-left: 50px;
    .des_box {
      width: 780px;
      margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .section {
    height: 76vw;
    background-size: cover !important;
    background-repeat: no-repeat;
  }
}
</style>
