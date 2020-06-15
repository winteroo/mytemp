<template>
  <div class="titleSearch">
    <div class="title">
      <i :class="icon" v-if="icon"></i>
      <span class="title-text">{{title}} </span>
      <slot name="titleAdd"></slot>
    </div>
    <div class="search">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'titleSearch',
  data () {
    return {

    };
  },
  props: {
    title: {
      type: String
    },
    icon: {
      type: String,
      default: 'el-icon-search'
    }
  }
};
</script>
<style scoped lang="scss">
.titleSearch {
  border: 1px solid #e5e5e5;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow:0px 0px 14px 4px rgba(173,173,173,0.09);
}

.title {
  background:rgba(244,244,246,1);
  padding-left: 10px;
  font-size: 14px;
  overflow: hidden;
  border-radius: 5px;
}

.title-text{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  color:#333333;
  font-size: 14px;
  font-weight: 500;
}
.search {
  background: #fff;
  padding: 10px;
  overflow: hidden;
  border-radius: 0 0 5px 5px;
  height: calc(100% - 20px);
}

</style>
