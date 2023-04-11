<template>
  <div class="page_container">
    <div class="flex justify-center md:mt-28 mt-10">
      <h2>{{$t('service.lasik.principle.h2')}}</h2>
    </div>
    <div>
      <div class="flex pincile_box">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2022/12/562ae3599c4a424f.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="flex items-end">
          <img
            src="https://static.cmereye.com/imgs/2022/12/778635b3e6aa7b8a.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2022/12/90b9549dc880c3c6.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center mt-10 mx-5 arrow">
          <img
            src="https://static.cmereye.com/imgs/2022/12/5dc8f0ff1a0bb90d.png"
            alt=""
          />
        </div>
        <div class="flex items-end">
          <img
            src="https://static.cmereye.com/imgs/2022/12/cd76fe9b1c473cb3.png"
            alt=""
          />
        </div>
      </div>
      <div class="text-center md:mt-14 mt-5 pincile">
        <span class="text-pincile"
          >{{$t('service.lasik.principle.span')}}</span
        >
      </div>
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
h2 {
  font-size: 25px;
  color: #4570B6;
}
@media screen and (min-width: 768px) {
  .pincile_box {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .text-pincile {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.1em;
    max-width: 70% !important;
    display: inline-block;
    color: #6D6E71;
  }
}
@media screen and (max-width: 768px) {
  .pincile {
    text-align: left;
  }
  h2 {
    font-size: 16px;
  }
  .text-pincile {
    font-family: "Noto Sans HK";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    /* or 200% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #6D6E71;
  }
  .pincile_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow {
    margin: 48px 0;
    transform: rotate(90deg);
  }
}
</style>
