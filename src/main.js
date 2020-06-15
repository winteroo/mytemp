// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import ElementUI from 'element-ui'; // 引入ui

import 'element-ui/lib/theme-chalk/index.css'; // 引入ui
import 'nprogress/nprogress.css';

import './style/animate.scss';
import './style/public.scss';
import './style/main.scss';
import './style/element_elevidence.scss';

Vue.use(ElementUI, {size: 'small'}); // 引入ui

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
