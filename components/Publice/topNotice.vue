<template>



<div>
    <div class="banner-container">
  <!-- 移动端按钮：固定左侧，仅小屏显示 -->
  <a href="/smileProCare" class="btn-mobile">
    點擊了解詳情
  </a>
  
  <!-- 中间容器：PC端包裹文字+按钮并居中，移动端仅包裹文字 -->
  <div class="content-wrapper">
    <!-- 文字区域 -->
    <div class="text-container">
      <p class="promo-text mobile-scroll">
        ☕ 預約SMILE Pro Care禮品計劃可獲贈限量版<span class="highlight-text">便攜式咖啡機</span>乙部！數量有限，送完即止!
      </p>
    </div>
    
    <!-- PC端按钮：仅大屏显示，紧跟文字形成整体 -->
    <a href="/smileProCare" class="btn-desktop">
      點擊了解詳情
    </a>
  </div>
</div>



<div id="taildoor-root" style="position: absolute; top: 0px; left: 0px;"></div>
</div>
    
</template>

<style scoped>


/* 基础样式 */
.banner-container {
  display: flex;
  align-items: center;
  background-color: #0A2342;
  color: white;
  padding: 8px 16px; /* 移动端py-2 */
  z-index: 9;
  position: fixed;
  top: 0;
  width: 100%;
}
@media (min-width: 768px) {
  .banner-container {
    padding: 12px 16px; /* PC端py-3 */
  }
  .promo-text{margin:0;}
}
/* 移动端按钮 */
.btn-mobile {
  white-space: nowrap;
  padding-left: 4px;
  padding-right: 4px; /* px-1 */
  background-color: white;
  color: #0A2342;
  font-weight: 600;
  font-size: 14px;
  border-radius: 2px;
  z-index: 10;
  margin-right: 12px; /* mr-3 */
  text-decoration: none;
}
/* 中间容器 */
.content-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 文字区域 */
.text-container {
  overflow: hidden;
  width: 100%;
}
@media (min-width: 768px) {
  .text-container {
    width: auto;
  }
}
/* 促销文字 */
.promo-text {
  white-space: nowrap;
  font-size: 20px; /* text-xl */
}
/* 高亮文字 */
.highlight-text {
  color: #F89B03;
}
/* PC端按钮 */
.btn-desktop {
  display: none;
  white-space: nowrap;
  margin-left: 8px; /* ml-2 */
  padding-left: 20px;
  padding-right: 20px; /* px-5 */
  background-color: white;
  color: #0A2342;
  font-weight: 600;
  font-size: 20px;
  border-radius: 2px;
  text-decoration: none;
}
@media (min-width: 768px) {
  .btn-desktop {
    display: inline-flex;
  }
  .btn-mobile {
    display: none;
  }
}
/* 滚动动画 */
@keyframes scrollLeft {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
@media (max-width: 767px) {
  .mobile-scroll {
    animation: scrollLeft 15s linear infinite;
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  .mobile-scroll {
    animation: none;
  }
}


</style>