<template>
  <header class="eleHeads">
    <div class="eleHead shadow">
      <div class="logo">
        <!-- <img src="../../static/logo.png" alt="logo" class="logo-img" /> -->
      </div>
      <h2>欢迎使用本系统</h2>
      <div class="back" @click="logOut">
        <i class="el-icon-switch-button"></i>
        <span>退出</span>
      </div>
      <div class="user">
        <i class="el-icon-user"></i>
        公证处 -- {{$user.name}}
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';
import api from '@/api';
import notify from '@/util/notify.js';
import { loginRouterName } from '@/config';
export default {
  name: 'eleHeads',
  data () {
    return {};
  },
  methods: {
    logOut () {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.logoutReq();
        })
        .catch(() => { });
    },
    // 退出请求
    async logoutReq () {
      try {
        let res = await api.logout();
        this.$router.push({ name: loginRouterName });
        sessionStorage.clear();
        if (res.code !== 0) {
          notify.warn(res.msg);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    ...mapGetters(['$user'])
  }
};
</script>
<style scoped lang="scss">
.eleHead {
  padding-right: 15px;
  height: 80px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  background: #fff;
  min-width: 800px;
}

.eleHeads::after {
  content: "";
  height: 80px;
  width: 100%;
  display: block;
}

.logo {
  height: 100%;
  width: 200px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo i {
  text-align: center;
  line-height: 80px;
}

h2 {
  float: left;
  font-size: 22px;
  height: 100%;
  line-height: 80px;
  padding-left: 30px;
}

.back {
  cursor: pointer;
  float: right;
  height: 45px;
  line-height: 80px;
  transition: all 0.3s;
  &:hover {
    color: #df0007;
  }
}
.user {
  float: right;
  padding-right: 30px;
  line-height: 80px;
}
.logo-img {
  width: 150px;
}
</style>
