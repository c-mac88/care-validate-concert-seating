<script setup lang="ts">
import GuestList from '@/components/GuestList.vue';
import { useGuests } from '@/composables/guests';
import { useRouter } from 'vue-router';

const router = useRouter();
const { guests, totalGuests, generateGuests, seatGuests } = useGuests();
</script>

<template>
  <div class="header">
    <h2>Guest List ({{ totalGuests }})</h2>
    <div class="header__actions">
      <button class="header__action" @click="generateGuests()">Generate Guests</button>
      <button class="header__action" @click="seatGuests()">Seat Guests</button>
    </div>
  </div>
  <div class="main">
    <GuestList :guests="guests" />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  &__action:last-of-type {
    margin-left: 15px;
  }
}
.main {
  height: 500px;
  overflow: auto;
  padding: 15px;
  margin: 15px;
  border: 1px solid var(--app-color-dark);
  border-radius: 4px;
}
</style>