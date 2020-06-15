import Vue from 'vue';
import Router from 'vue-router';
import bus from '@/util/bus';
import routes from './routeConfig';
import {
  findSinglePage
} from '@/util/operation';
import {
  loginRouterName,
  tokenName
} from '@/config';
Vue.use(Router);
/**
 * keepAlive:是否需要保存组件状态
 * requireAuth:请求是否需要添加token
 * isSinglePage:是否是单页
 */

const router = new Router({
  routes
});
let allowFullScreenList = findSinglePage(routes);

function switchLoginPath (next) {
  next({
    name: loginRouterName
  });
}

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 判断本地是否存在token
    if (sessionStorage.getItem(tokenName)) {
      next();
    } else {
      if (to.path === '/login') {
        next();
      } else {
        bus.$emit('loginExpired');
        if (from.fullPath === '/') {
          switchLoginPath(next);
        }
      }
    }
  } else {
    let index = allowFullScreenList.indexOf(to.name);
    if (index !== -1) {
      next();
    } else {
      switchLoginPath(next);
    }
  }
});

export default router;
