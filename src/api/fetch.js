import axios from 'axios';
import qs from 'qs';
import bus from '@/util/bus';
import NProgress from 'nprogress';
import { tokenName } from '@/config';

const service = axios.create();

service.interceptors.request.use(
  request => {
    NProgress.start();
    if (request.method === 'get') {
      request.headers['Cache-Control'] = 'no-cache';
      request.headers['Pragma'] = 'no-cache';
    }
    let token = sessionStorage.getItem(tokenName);
    let auth = sessionStorage.getItem('auth');
    if (token) {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的headers都加上token，不用每次请求都手动添加了
      request.headers.token = token;
      request.headers.auth = auth;
    }
    // 判断是否是表单提交数据，如果是则不转换字符串
    if (!request.headers.isFormData && request.headers.isFormData !== 'true') {
      request.data = qs.stringify(request.data);
    }
    return request;
  },
  err => {
    return Promise.reject(err);
  });

service.interceptors.response.use(
  response => {
    NProgress.done();
    if (response.status !== 200) {
      bus.$emit('serviceError');
    } else {
      let code = response.data.errCode;
      switch (code) {
        // 登录过期
        case 10023:
          bus.$emit('loginExpired');
          break;
        // 服务器内部错误
        case -1:
          bus.$emit('serviceError');
          break;
        // 异地登录
        case 10027:
          bus.$emit('remoteLogin');
          break;
        default:
          return response.data;
      }
    }
  }
);

export default service;
