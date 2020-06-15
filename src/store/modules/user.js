import {
  tokenName
} from '@/config';

const $user = {
  state: {
    // 用户名
    name: '',
    // 身份凭证
    token: '',
    // 菜单
    menu: [],
    // 当前访问的菜单
    activeMenu: ''
  },
  mutations: {
    // 设置用户名
    SET_USER_NAME: (state, data) => {
      state.name = data;
    },
    SET_TOKEN: (state, data) => {
      sessionStorage.setItem(tokenName, data);
      state.token = data;
    },
    SET_MENU: (state, data) => {
      state.menu = data;
    },
    SET_ACTIVE_MENU: (state, data) => {
      state.activeMenu = data;
    }
  },
  actions: {

  }
};

export default $user;
