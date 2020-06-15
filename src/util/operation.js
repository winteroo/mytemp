/**
 * @description 找到单页未嵌套的的页面路由信息
 * @param { Array } routes:路由配置信息
 */
const findSinglePage = (routes = []) => {
  let allowFullScreenList = [];
  routes.forEach(el => {
    if (el.meta && el.meta.isSinglePage) {
      allowFullScreenList.push(el.name);
    }
  });
  return allowFullScreenList;
};

export {
  findSinglePage
};
