<template>
  <div class="titleTable">
    <div class="title">
      <span class="title-text">
        <i :class="icon" v-if="icon"></i>
        {{title}}
      </span>
      <slot name="titleAdd"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'titleTable',
  data () {
    return {

    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'el-icon-s-grid'
    }
  }
};
</script>
<style scoped lang="scss">
.titleTable {
  padding: 0px 8px 8px 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 14px 4px rgba(173, 173, 173, 0.09);
  overflow: hidden;
}

.titleTable > .title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebeef5;
}

.title-text {
  font-size: 14px;
}

.titleTable > .title > .info {
  font-size: 12px;
}

</style>
