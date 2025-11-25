<template>
  <section class="UserShare">
    <div class="new-container container UserShareContainer">
      <div class="UserShareBox">
        <div class="UserShareBox-title">
          <h3>{{ title }}</h3>
          <div class="UserShareBox-title-text">
            <img
              class="d-block wow fadeInLeft"
              decoding="async"
              src="https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-newtitle-pc.png"
              alt=""
              loading="lazy"
              width="100%"
              height="100%"
              srcset="
                https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-newtitle-mb.svg 400w,
                https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-newtitle-mb.svg 640w,
                https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-newtitle-pc.png
              "
              sizes=" (max-width: 992px) 100vw,1216px"
            />
            <p>聽聽各位真實用家親身感受</p>
          </div>
        </div>

        <ul class="UserShareBox-list" ref="UserShareBoxlist">
          <li
            class="UserShareBox-list-item"
            v-for="(item, index) in userShare"
            :key="index"
          >
            <a
              class="UserShareBox-list-item-link"
              :href="item.href"
              target="_blank"
              @click.prevent="handleLinkClick(item, $event)"
            >
              <img :src="item.img" alt="" />
              <span
                class="UserShareBox-list-item-link-title"
                :style="{ backgroundColor: getColor(item.type) }"
                >{{ item.type }}</span
              >
              <div class="UserShareBox-list-item-link-text">
                <p v-for="(text, i) in item.text" :key="i">
                  {{ text }}
                </p>
                <i :style="{ backgroundColor: getColor(item.type) }"></i>
                <div class="UserShareBox-list-item-link-text-name">
                  <span>{{ item.nameCn }}</span
                  >&nbsp;
                  <span class="UserShareBox-list-item-link-text-name-en">{{
                    item.nameEn
                  }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: "用家分享",
    },
    userShare: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      startScrollLeft: 0,
      hasDragged: false, //用于判断是否进行了拖动操作,
      colorMap: {
        "SMILE Pro": "#4570B6",
        ICL: "#EB981A",
        "CLEAR-Vision": "#5FB947",
        SMILE: "#30ABE2",
      },
    };
  },
  methods: {
    onMouseDown(e) {
      if (window.innerWidth > 992) {
        this.isDragging = true;
        this.hasDragged = false; // 鼠标按下时，重置拖动标志位
        this.$refs.UserShareBoxlist.style.cursor = "grabbing";
        this.startX = e.pageX;
        this.startScrollLeft = this.$refs.UserShareBoxlist.scrollLeft;
      }
    },
    onMouseMove(e) {
      if (window.innerWidth > 992) {
        if (this.isDragging) {
          this.hasDragged = true; // 只要鼠标移动了，就认为进行了拖动操作
          const x = e.pageX;
          const walk = x - this.startX;
          this.$refs.UserShareBoxlist.scrollLeft = this.startScrollLeft - walk;
        }
      }
    },

    onMouseUp() {
      if (window.innerWidth > 992) {
        this.isDragging = false;
        this.$refs.UserShareBoxlist.style.cursor = "grab";
      }
    },

    handleLinkClick(item, event) {
      if (this.hasDragged) {
        event.preventDefault(); // 如果进行了拖动操作，阻止 a 标签的默认点击行为
      } else {
        // 如果没有拖动，正常跳转
        window.open(item.href, "_blank");
      }
      this.hasDragged = false; // 处理完点击事件后，重置拖动标志位
    },
    // 获取背景颜色
    getColor(type) {
      return this.colorMap[type] || "white";
    },
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.$refs.UserShareBoxlist) {
      this.$refs.UserShareBoxlist.removeEventListener("mousedown", (e) => {
        e.preventDefault();
        this.onMouseDown(e);
      });
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (this.$refs.UserShareBoxlist) {
        this.$refs.UserShareBoxlist.addEventListener("mousedown", (e) => {
          // 阻止 a 标签等元素的默认行为
          e.preventDefault();
          this.onMouseDown(e);
        });
        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener("mouseup", this.onMouseUp);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .UserShare {
    width: 100vw;
    background: #f2f7ff;

    margin-top: 40px;
    .UserShareContainer {
      margin: 0 auto;
      .UserShareBox {
        padding-bottom: 40px;
        .UserShareBox-title {
          padding-top: 27px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 11.282vw;
            top: -12px;
            width: 50px;
            height: 45px;
            background: url("https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-title-eyes.svg")
              no-repeat;
            background-size: contain;
          }

          text-align: center;
          h3 {
            color: #4570b6;
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 900;
            line-height: 1.16;
            letter-spacing: 5px;
          }
          .UserShareBox-title-text {
            img {
              width: 300px;
              margin: 18px auto 0;
            }
            p {
              color: #6d6e71;
              font-family: "Noto Sans HK";
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
              line-height: 1.66;
              letter-spacing: 2.5px;
            }
          }
        }

        .UserShareBox-list {
          margin-top: 26px;
          padding-bottom: 30px;
          display: flex;
          gap: 3.75px;
          max-width: 100vw;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            height: 3px; /* 设置滚动条的高度（宽度） */
          }
          &::-webkit-scrollbar-thumb {
            background-color: #4570b6;
            border: 0px solid rgba(0, 0, 0, 0);
          }
          &::-webkit-scrollbar-track {
            background-color: #fff;
            width: 50%;
          }
          .UserShareBox-list-item {
            position: relative;
            &::after {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom,transparent,rgba(0,0,0,0.2));
            }
            .UserShareBox-list-item-link {
              position: relative;
              display: block;
              width: 200px;
              height: 330px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              // 右上角
              .UserShareBox-list-item-link-title {
                position: absolute;
                right: 10px;
                top: 10px;
                border-radius: 75px;
                background: #eb981a;
                padding: 3px 12px;

                color: #fff;
                font-family: "Poppins", sans-serif;
                font-size: 14.989px;
                font-style: normal;
                font-weight: 700;
                line-height: 1.75;
              }
              .UserShareBox-list-item-link-text {
                position: absolute;
                left: 18px;
                bottom: 18px;
                z-index: 1;
                p {
                  color: #fff;
                  font-family: "Noto Sans TC";
                  font-size: 13.5px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 1.4444;
                  letter-spacing: 0.674px;
                }
                i {
                  display: block;
                  margin: 10px 0;
                  width: 50px;
                  height: 2px;
                  background: #eb981a;
                }
                .UserShareBox-list-item-link-text-name {
                  span {
                    color: #fff;

                    font-size: 14.989px;
                    font-style: normal;

                    line-height: normal;
                    letter-spacing: 0.899px;
                  }
                  & > span:nth-child(1) {
                    font-family: "Noto Sans TC";
                    font-weight: 600;
                  }
                  & > .UserShareBox-list-item-link-text-name-en {
                    font-family: "Poppins", sans-serif;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  // 用户分享
  .UserShare {
    // width: 100vw;
    background: #f2f7ff;
    margin-top: 100px;
    .UserShareContainer {
      margin: 0 auto;
      .UserShareBox {
        padding-bottom: 40px;
        .UserShareBox-title {
          padding-top: 70px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 94px;

          &::after {
            content: "";
            position: absolute;
            left: -160px;
            top: -42px;
            width: 110px;
            height: 98px;
            background: url("https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShare-title-bg.png")
              no-repeat;
            background-size: contain;
          }
          h3 {
            color: #4570b6;
            font-family: "Noto Sans TC";
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            line-height: 1;
            letter-spacing: 3px;
          }
          .UserShareBox-title-text {
            p {
              color: #6d6e71;
              font-family: "Noto Sans HK";
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 1.75;
              letter-spacing: 5px;
            }
          }
        }

        .UserShareBox-list {
          cursor: grab;
          margin-top: 35px;
          padding-bottom: 77px;
          display: flex;
          gap: 5px;
          max-width: 1544px;
          width: 1544px;
          overflow-x: scroll;

          &:active {
            cursor: grabbing;
          }
          &::-webkit-scrollbar {
            height: 3px; /* 设置滚动条的高度（宽度） */
          }
          &::-webkit-scrollbar-thumb {
            background-color: #4570b6;
            border: 0px solid rgba(0, 0, 0, 0);
          }
          &::-webkit-scrollbar-track {
            background-color: #fff;
            width: 50%;
          }

          // &:hover {
          //   .UserShareBox-list-item {
          //     filter: blur(3px);
          //     opacity: 0.5;
          //     transform: scale(0.98);
          //     &:hover {
          //       transform: scale(1);
          //       filter: blur(0px);
          //       opacity: 1;
          //     }
          //   }
          // }

          .UserShareBox-list-item {
            position: relative;
            &::after {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom,transparent,rgba(0,0,0,0.2));
            }
            .UserShareBox-list-item-link {
              position: relative;
              display: block;
              width: 265px;
              height: 437px;
              overflow: hidden;

              img {
                width: 100%;
                pointer-events: none;
              }
              // 右上角
              .UserShareBox-list-item-link-title {
                pointer-events: none;
                position: absolute;
                right: 14px;
                top: 14px;
                border-radius: 75px;
                background: #eb981a;
                padding: 2px 18px;
                color: #fff;
                font-family: "Poppins", sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 1.75;
                letter-spacing: 0;
              }
              .UserShareBox-list-item-link-text {
                position: absolute;
                pointer-events: none;

                left: 24px;
                bottom: 24px;
                p {
                  color: #fff;
                  font-family: "Noto Sans TC";
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 26px;
                  letter-spacing: 0.9px;
                }
                i {
                  display: block;
                  margin: 12px 0;
                  width: 68px;
                  height: 3px;
                  background: #eb981a;
                }
                .UserShareBox-list-item-link-text-name {
                  span {
                    color: #fff;
                    font-size: 20px;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: 1.2px;
                  }
                  & > span:nth-child(1) {
                    font-family: "Noto Sans TC";
                    font-weight: 600;
                  }
                  & > .UserShareBox-list-item-link-text-name-en {
                    font-family: "Poppins", sans-serif;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1139px) {
  .UserShare {
    .UserShareContainer {
      .UserShareBox {
        .UserShareBox-list {
          max-width: calc(100vw - calc(100vw - 1320px) / 2);
          width: fit-content;
          padding-right: 85px;
        }
      }
    }
  }
}
</style>
