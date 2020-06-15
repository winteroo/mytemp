
/**
 * @param {string} path 路由路径
 * @param {string} name 路由名称
 * @param {VueComponent} component 路由组件
 * @param {object} meta 路由额外配置
 * @param {boolean} meta.keepAlive 是否保存状态
 * @param {boolean} meta 是否需要验证当前用户token
 * @param {boolean} meta 是否是单独页面即没有侧边栏和头部栏
 */
const Router = [
  // 用户登录
  {
    path: '/',
    redirect: '/login',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: {
      keepAlive: false,
      requireAuth: false,
      isSinglePage: true
    }
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      keepAlive: false,
      requireAuth: false,
      isSinglePage: true
    }
  },
  {
    path: '/ServiceErr',
    name: 'ServiceErr',
    component: () => import('@/views/error/500.vue'),
    meta: {
      keepAlive: false,
      requireAuth: false,
      isSinglePage: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      keepAlive: false,
      requireAuth: true,
      isSinglePage: false
    }
  }
];

export default Router;
