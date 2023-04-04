<template>
  <div class="section flex justify-start items-center">
    <div class="des_box">
      <h3 class="gradient_font">
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
    return {
      
    };
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
    padding-left: 164px;
    .des_box {
      width: 648px;

      margin-bottom: 75px;

      h3 {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
              
        /* identical to box height, or 87% */
              
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.15em;
              
        color: #4570B6;
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
  }
}
@media screen and (max-width: 768px) {
  .section {
    height: 76vw;
  }
  .des_box {
    padding-left: 28px;
    h3 {
      font-family: 'Noto Sans HK';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 40px;
/* or 143% */

display: flex;
align-items: center;
letter-spacing: 0.15em;

color: #4570B6;



     
    }
    span {
      font-size: 11px;
    }
    p {
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 0.08em;
      color: #9b9b9b;
      width: 55vw;
      padding-top: 18px;
    }
  }
}
</style>
