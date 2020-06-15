<template>
  <div class="home">
    <h1 class="home-title">欢迎进入管理后台</h1>
    <title-bar :menu='menu'></title-bar>
    <title-search title="搜索"></title-search>
    <title-table title="列表">
      <template v-slot:titleAdd>
        <el-button>点击</el-button>
      </template>
    </title-table>
  </div>
</template>

<script>
import titleSearch from '@/components/titleSearch';
import titleTable from '@/components/titleTable';
import titleBar from '@/components/titleBar';
export default {
  name: 'Home',
  components: {
    titleSearch,
    titleTable,
    titleBar
  },
  data () {
    return {
      menu: [{ label: '首页', routerName: 'Home' }, { label: '列表' }]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 100px);
  .home-title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 100px;
  }
}
</style>
