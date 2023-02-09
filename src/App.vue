<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="app-layout">
    <div class="app-layout__header">
      <Header />
    </div>
    <div class="app-layout__main">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
}

.app-layout {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90px 1fr;

  &__header {
    min-height: 80px;
    width: 100%;
  }
  &__main {
    height: 100%;
    max-height: calc(100vh - 80px);
  }
}
</style>