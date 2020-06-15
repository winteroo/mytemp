<template>
  <div class="titleBar">
    <div class="go-left breadcrumb-content">
      <el-breadcrumb :separator-class="separator">
        <template v-for="(el, index) in menu">
          <el-breadcrumb-item
            :key="el.routerName"
            v-if="el.routerName"
            :to="initRouter(el)"
          >{{ el.label }}</el-breadcrumb-item>
          <el-breadcrumb-item v-else :key="index">{{ el.label }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="go-right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'titleBar',
  data () {
    return {};
  },
  props: {
    /**
     * @example: [{label:'首页', routerName: 'homePage'},{label:'列表'}]
     */
    menu: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    },
    // 分隔符
    separator: {
      type: String,
      default: 'el-icon-arrow-right'
    }
  },
  methods: {
    initRouter (el) {
      let router = {};
      router.name = el.routerName;
      if (el.query) {
        router.query = el.query;
      }
      return router;
    }
  }
};
</script>
<style lang="scss" scoped>
.titleBar {
  padding: 9px 8px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  font-size: 16px;
  overflow: hidden;
  .breadcrumb-content {
    padding-top: 10px;
  }
}
.titleBar /deep/ .el-breadcrumb__inner {
  color: #df0007;
  &:hover {
    color: #df0007;
  }
}
.titleBar /deep/ .is-link {
  color: #333;
}
</style>
