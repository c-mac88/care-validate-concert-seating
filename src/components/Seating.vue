<script setup lang="ts">
import { Guest } from '../types';
defineProps<{ guests: Guest[] }>();
const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
</script>

<template>
  <div class="seating">
    <div class="seating__row" v-for="row in rows">
      <div class="seating__seat" v-for="(_, index) in rows">{{ row + (index + 1) }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .seating {
    padding: 15px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &__row {
      display: flex;
    }
    &__seat {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background-color: var(--app-color-dark);
      color: var(--app-color-white);
      border-radius: 4px;
      margin: 5px;
    }
  }
</style>