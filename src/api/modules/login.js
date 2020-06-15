import URL from '@/api/URL';
import fetch from '@/api/fetch';

export function login (params) {
  // return fetch.post(URL.login, params);
  return Promise.resolve({
    data: {
      token: '12fds343fdfs'
    },
    errCode: 0,
    msg: 'SUCCESS'
  });
}

export function logout (params) {
  return fetch.post(URL.logout, params);
}
