<template>
  <div class="service-err">
    <div class="img-404-con">
      <!-- <img src="../../../static/icons/500.png" alt="404" width="30%" srcset /> -->
    </div>
    <div>
      <div class="img-text">服务器连接失败！</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceErr'
};
</script>

<style lang="scss" scoped>
.service-err {
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
