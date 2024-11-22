export default ({ app, store, route, redirect }) => {
 
    app.router.beforeEach((to, from, next) => {

      if (localStorage.getItem('lang') == "cn") {
        // 避免无限循环
        if (!to.fullPath.startsWith("/cn")) {
          const newPath = to.fullPath.replace(/^\/cn/, "");
          next(`/cn${newPath}`);
        } else {
          next();
        }
      } else {
        next();
      }
    });

  
};
