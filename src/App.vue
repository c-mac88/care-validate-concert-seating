<script setup lang="ts">
import Header from '@/components/Header.vue';
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

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.app-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 80px 1fr;

  &__header {
    width: 100%;
    min-height: 80px;
  }
  &__main {
    height: 100%;
    max-height: calc(100vh - 80px);
    overflow: auto;
  }
}
</style>