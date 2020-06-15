<template>
  <div id="app">
    <router-view v-if="allowFullScreen" />
    <div v-else-if="$route.fullPath !== '/'">
      <el-container>
        <el-header class="head">
          <ele-head></ele-head>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">
            <el-scrollbar style="height:100%" wrap-class="scrollbar-wrapper">
              <ele-menu></ele-menu>
            </el-scrollbar>
          </el-aside>
          <el-container>
            <el-main class="main">
              <layout></layout>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import bus from '@/util/bus';
import eleHead from '@/components/eleHead';
import eleMenu from '@/components/eleMenu';
import layout from '@/components/layout';
import routeConfig from '@/router/routeConfig';
import { findSinglePage } from '@/util/operation';
import { loginRouterName } from '@/config';
import notify from '@/util/notify.js';
export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      timer: null
    };
  },
  components: {
    eleHead,
    eleMenu,
    layout
  },
  created () {
    this.addListener();
    this.initStoreData();
  },
  computed: {
    allowFullScreen: function () {
      let allowFullScreenList = findSinglePage(routeConfig);
      let index = allowFullScreenList.indexOf(this.$route.name);
      let flag = false;
      if (index !== -1) {
        flag = true;
      } else {
        flag = false;
      }
      return flag;
    }
  },
  methods: {
    // 添加监听
    addListener () {
      // 登录过期,重新登录
      bus.$on('loginExpired', () => {
        this.$router.push({ name: 'NotFound' });
      });
      // 服务器内部错误
      bus.$on('serviceError', () => {
        this.$router.push({ name: 'ServiceErr' });
      });
      // 异地登录
      bus.$on('remoteLogin', () => {
        let _this = this;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          _this.goLogin();
        }, 300);
      });
    },
    goLogin () {
      this.$router.push({ name: loginRouterName });
      notify.warn('账号异地登录', '警告');
    },
    // 初始化页面vuex数据
    initStoreData () {
      // 在页面加载时读取sessionStorage里的状态信息
      // 作用：防止页面刷新丢失vuex数据
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem('store'))
          )
        );
      }
      // 在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        if (this.$route.name !== loginRouterName) {
          sessionStorage.setItem('store', JSON.stringify(this.$store.state));
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
}
.head {
  height: 80px !important;
  background-color: #fff;
}
.aside {
  height: calc(100vh - 80px);
}
.main {
  background: #f5f6fa;
  padding: 10px !important;
  height: calc(100vh - 80px);
  max-width: calc(100vw - 200px);
}
</style>
