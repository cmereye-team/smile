export default ({ app, store, route, redirect }) => {
  //  let isFirstLoad = true;
  // app.router.afterEach((to, from, next) => {
  //   if (isFirstLoad) {
  //     isFirstLoad = false;
  //     return next(); // 首次加载不执行逻辑
  //   }
  //   if (localStorage.getItem("lang") !== "cn") {
  //     next();
  //   } else {
  //     // 避免无限循环
  //     if (!to.fullPath.startsWith("/cn")) {
  //       const newPath = to.fullPath.replace(/^\/cn/, "");
  //       next(`/cn${newPath}`);
  //     } else {
  //       next();
  //     }
  //   }
  // });
};
