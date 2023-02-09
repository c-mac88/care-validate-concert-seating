<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useGuests } from '../composables/guests';
import GuestList from '../components/GuestList.vue';
import Seating from '../components/Seating.vue';

const router = useRouter();
const { guests, generateGuests, assignSeats } = useGuests();
</script>

<template>
  <div class="assignment">
    <div class="assignment__header">
      <h2>Guest List</h2>
      <div class="assignment__header-actions">
        <button class="action" @click="generateGuests()">Generate Guest List</button>
        <button class="action" @click="assignSeats()" :disabled="!guests.length">Assign Seats</button>
      </div>
    </div>
    <div class="assignment__main">
      <GuestList :guests="guests" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .assignment {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
    }
    &__header-actions {
        .action:last-child {
          margin-left: 15px;
        }
      }
    &__main {
      height: 500px;
      overflow: auto;
      padding: 15px;
      margin: 15px;
      border: 1px solid var(--app-color-dark);
      border-radius: 4px;
    }
  }
</style>