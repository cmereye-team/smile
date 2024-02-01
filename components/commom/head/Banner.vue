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
          : 'des_box',
        $i18n.locale == 'en' && $route.path == '/en/patient-info'
          ? 'des_box_info'
          : 'des_box',
        $i18n.locale == 'en' && $route.path == '/en/vision-correction-icl'
          ? 'des_box_eng_icl'
          : 'des_box',
      ]"
    >
      <h3
        :class="[
          $i18n.locale == 'en' ? 'gradient_font_en' : 'gradient_font',
          $i18n.locale == 'en' ? 'gradient_process_en' : 'gradient_font',
        ]"
        :style="{
          maxWidth:
            $i18n.locale == 'en' && $route.path == '/en/post-corrective-care'
              ? '350px'
              : 'initial',
          maxWidth:
            $i18n.locale == 'en' && $route.path == '/en/patient-info'
              ? '300px'
              : 'initial',
          maxWidth:
            $i18n.locale == 'en' &&
            $route.path == '/en/flow-of-vision-correction'
              ? '240px'
              : 'initial',
          maxWidth:
            $i18n.locale == 'en' && $route.path == '/en/post-corrective-care'
              ? '380px'
              : 'initial',
          lineHeight:
            $i18n.locale == 'en' && $route.path == '/en/patient-info'
              ? '1.2'
              : '42px',
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
    background-size: cover !important;
    background-repeat: no-repeat;
    padding-left: 50px;

    .des_box {
      width: 930px;
      margin-bottom: 35px;

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

        background: linear-gradient(90.57deg, #4570b6 0, #81dbec 60%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p {
        font-family: "Noto Sans JP";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.6;
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
    .des_box_info {
      width: fit-content;
      max-width: 420px;
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
  .gradient_process_en {
    background: linear-gradient(90.57deg, #4570b6 -11.77%, #81dbec 111.92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    padding-left: 25px;
  }
  .des_box_info {
    color: #4570b6;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: 33px; /* 86.842% */
    letter-spacing: 5.7px;
    padding-left: 25px;
  }
  .section {
    // height: 76vw;
    background-size: cover !important;
    background-repeat: no-repeat;
  }
}
</style>
