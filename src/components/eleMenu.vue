<template>
  <el-menu
    :default-active="$user.activeMenu"
    :router="false"
    class="el-menu-vertical"
    @select="select"
  >
    <template v-for="item in $user.menu">
      <el-submenu
        :index="item.index"
        :key="item.index"
        v-if="item.childNodes && item.childNodes.length !== 0"
      >
        <template slot="title">
          <i :class="item.className"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item
          v-for="child in item.childNodes"
          :key="child.routerName"
          :index="child.routerName"
        >{{ child.label }}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="item.index" :index="item.routerName">
        <i :class="item.className"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'eleMenu',
  data () {
    return {
      // 菜单列表数据
      // 子菜单
      //     childNodes: [
      // {
      //   routerName: 'baseInfo',
      //   label: '基本信息'
      // }]
    };
  },
  methods: {
    select (val) {
      this.$router.push({ name: val });
    }
  },
  watch: {
    $route (to, from) {
      let menuArr = [];
      this.$user.menu.forEach(el => {
        menuArr.push(el.routerName);
        if (el.childNodes) {
          el.childNodes.forEach(childEl => {
            menuArr.push(childEl.routerName);
          });
        }
      });
      if (menuArr.indexOf(to.name) >= 0) {
        this.$store.commit('SET_ACTIVE_MENU', to.name);
      }
    }
  },
  computed: {
    ...mapGetters([ '$user' ])
  }
};
</script>
<style scoped lang="scss">
</style>
