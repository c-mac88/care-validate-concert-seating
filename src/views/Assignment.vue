<script setup lang="ts">
import GuestList from '../components/GuestList.vue';
import Seating from '../components/Seating.vue';
import { useGuests } from '../composables/guests';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
const { guests, totalGuests, seatingMatrix, generateGuests, seatGuests } = useGuests();

onMounted(() => generateGuests());

</script>

<template>
  <div class="header">
    <h2>Guest List ({{ totalGuests }})</h2>
    <div class="header__actions">
      <button class="header__action" @click="seatGuests()">Seat Guests</button>
    </div>
  </div>
  <div class="main">
    <Seating :seating-matrix="seatingMatrix" />
  </div>
  <div class="guest-list">
    <GuestList :guests="guests" />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.main, .guest-list {
  overflow: auto;
  padding: 15px;
  margin: 15px;
  border: 1px solid var(--app-color-dark);
  border-radius: 4px;
}
.guest-list {
  height: 500px;
}
</style>