<template>
  <div class="layout">
    <transition name="fade-transform">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath">
        </router-view>
      </keep-alive>
    </transition>
    <transition name="fade-transform">
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath">
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'layout'
};
</script>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100%;
}
</style>
