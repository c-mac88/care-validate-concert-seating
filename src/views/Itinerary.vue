<script setup lang="ts">
import { onMounted, onUpdated, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPackageName } from '../api/packages';
import { Guest } from '../types';
import { useGuestStore } from '../stores/guests';

const router = useRouter();
const route = useRoute();
const guestStore = useGuestStore();
const guestID = route.params['id'];
const currentGuest: Ref<Guest | undefined> = ref(undefined);
const packageName = ref('');

onMounted(() => {
  currentGuest.value = guestStore.guests.find((guest) => guest.id.toString() === route.params.id)
})

onUpdated(() => {
  if (!packageName.value && currentGuest.value) getPackageName(currentGuest.value.packageID).then(res => packageName.value = res);
})

</script>

<template>
  <div class="header">
    <h1>Guest {{ guestID }} Itinerary</h1>
    <button @click="router.push('/')">Back to Assignment</button>
  </div>
  <div class="main">
    <div class="main__labels">
      <p>Name:</p>
      <p>Companions:</p>
      <p>Seat(s):</p>
      <p>Package Name:</p>
    </div>
    <div class="main__values" v-if="currentGuest">
      <p>{{ currentGuest.name }}</p>
      <p>{{ currentGuest.companions }}</p>
      <p>{{ currentGuest.seatID }}</p>
      <p>{{ packageName }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.main {
  overflow: auto;
  padding: 15px;
  margin: 15px;
  border: 1px solid var(--app-color-dark);
  border-radius: 4px;
  display: flex;
  &__labels {
    font-weight: bold;
    margin-right: 15px;
  }
}
</style>