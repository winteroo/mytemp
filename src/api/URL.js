const devUrl = '/myBase';
const buildUrl = '';
const BASE = process.env.NODE_ENV === 'development' ? devUrl : buildUrl;

const urls = {
  // 登录
  login: BASE + '/user/login',
  // 退出
  logout: BASE + '/user/logout'

};

export default urls;
