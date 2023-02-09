<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useGuests } from '../composables/guests';
import GuestList from '../components/GuestList.vue';
import Seating from '../components/Seating.vue';

const router = useRouter();
const { generateGuests, guests } = useGuests();
</script>

<template>
  <div class="assignment">
    <div class="assignment__header">
      <h2>Concert Seating Assignment</h2>
      <div class="assignment__header-actions">
        <button @click="generateGuests()">Generate Guest List</button>
        <button @click="generateGuests()" :disabled="!guests.length">Assign Seats</button>
      </div>
    </div>
    <div class="assignment__main">
      <GuestList :guests="guests" />
    </div>
    <!-- <Seating :guests="guests" /> -->
  </div>
</template>

<style scoped lang="scss">
  .assignment {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      &-actions {
        button {
          margin-left: 15px;
        }
      }
    }
    &__main {
      height: 300px;
      overflow: auto;
      padding: 15px;
      margin: 15px;
      border: 1px solid var(--app-color-dark);
      border-radius: 4px;
    }
  }
</style>