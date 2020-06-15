<template>
  <div class="no-found">
    <div class="img-404-con">
      <!-- <img src="../../../static/icons/404.png" alt="404" width="40%" srcset /> -->
    </div>
    <div>
      <div class="img-text">
        登录超时，请
        <el-button type="danger" @click="goLogin">重新登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NotFound',
  computed: {
    ...mapGetters(['$user'])
  },
  methods: {
    goLogin () {
      let loginRouteName = '';
      switch (this.$user.auth) {
        case 0:
          loginRouteName = 'AdminLogin';
          break;
        case 1:
          loginRouteName = 'NotaryLogin';
          break;
        default:
          loginRouteName = 'NotaryLogin';
          break;
      }
      this.$router.push({
        name: loginRouteName
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.no-found {
  text-align: center;
  .img-404-con {
    padding-top: 10%;
  }
  .img-text {
    padding: 20px;
    color: #686868;
  }
}
</style>
