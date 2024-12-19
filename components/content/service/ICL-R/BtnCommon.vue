<template>
  <div class="BtnCommon">
    <a
      :href="link"
      target="_blank"
      :class="bgWhite ? 'btn-shine-white-bg' : 'btn-shine'"
      id="btnShine"
    >
      <div class="title">{{ title }}</div>
      <div v-if="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="21"
          viewBox="0 0 12 21"
          fill="none"
        >
          <line
            x1="0.554252"
            y1="0.531897"
            x2="10.8552"
            y2="10.7274"
            :stroke="bgWhite ? '#297492' : '#fff'"
            stroke-width="1.31758"
          />
          <line
            x1="10.6635"
            y1="9.8731"
            x2="0.468044"
            y2="20.174"
            :stroke="bgWhite ? '#297492' : '#fff'"
            stroke-width="1.31758"
          />
        </svg>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "BtnCommon",
  props: {
    title: {
      type: String,
      default: "預約講座",
    },
    icon: {
      type: Boolean,
      default: true,
    },
    bgWhite: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {};
  },
  methods: {
    // 判断当前浏览器是否为移动端
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    handleResize() {
      if (this.isMobile()) {
        this.$emit("isMobile");
      } else {
        this.$emit("isNotMobile");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .BtnCommon {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    margin: 40px auto !important;
    overflow: hidden;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  }

  .btn-shine {
    display: flex;
    width: fit-content;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding: 1rem 1.25rem;
    background: #297492;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    // border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
  }
  .btn-shine-white-bg {
    background-color: #fff;
    color: #12769e;
  }

  .btn-shine:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .btn-shine:hover .icon {
    transform: translate(4px);
  }

  .btn-shine:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .btn-shine::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  .btn-shine-white-bg::before {
    background-image: linear-gradient(
      120deg,
      #12796e00 30%,
      #12796ecc,
      #12796e00 70%
    );
  }
  .title {
    font-family: "Noto Sans HK", sans-serif !important;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 8.5px;
    color: #fff;
    font-size: 36px;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
}
@media screen and (max-width: 767px) {
  .BtnCommon {
    position: relative;
    width: fit-content;
    margin: 20px auto;
    overflow: hidden;
  }
  .btn-shine {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding: 1rem 1.25rem;
    background: #297492;
    border-radius: 0;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    & > div:nth-child(2) {
      margin-left: 2.56vw;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 3px;
      box-sizing: border-box;
    }
  }
  .btn-shine::before {
    animation: shine 1.5s ease-out infinite;
  }

  .btn-shine::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }
  .btn-shine-white-bg::before {
    background-image: linear-gradient(
      120deg,
      #12796e00 30%,
      #12796ecc,
      #12796e00 70%
    );
  }
  @keyframes shine {
    0% {
      left: -100px;
      transform: scale(1);
    }

    60% {
      left: 100%;
      transform: scale(1.05);
    }

    to {
      left: 100%;
      transform: scale(1);
    }
  }
  .bgWhite-btn-shine {
    background: linear-gradient(
      to right,
      #ffffff 0,
      #a09f9f 2%,
      #979797 15%,
      #12769e 20%
    );
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title {
    white-space: nowrap;
    font-family: "Noto Sans HK", sans-serif !important;
    color: #fff;
    font-size: 6.15vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2; /* 90.829% */
    letter-spacing: 1.665vw;
  }
  .bgWhite-title {
    color: #12769e !important;
    font-size: 6.15vw;
    line-height: 27.355px; /* 82.134% */
    letter-spacing: 1.665vw;
  }
  @keyframes shineCentre {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 95px;
    }
    100% {
      background-position: 105px;
    }
  }
}
</style>