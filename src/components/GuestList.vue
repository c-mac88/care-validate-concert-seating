<script setup lang="ts">
import { Guest } from '../types';
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps<{ guests: Guest[] }>();
</script>

<template>
  <table>
    <tr>
      <th>Guest ID</th>
      <th>Name</th>
      <th>Companions</th>
      <th>Package ID</th>
      <th>Seat</th>
    </tr>
    <tr v-for="guest in guests">
      <td>{{ guest.id }}</td>
      <td>{{ guest.name }}</td>
      <td>{{ guest.companions }}</td>
      <td>{{ guest.packageID }}</td>
      <td>{{ guest.seatID }}</td>
      <td>
        <a v-if="guest.seatID" :href="`/guest/${guest.id}`">View Itinerary</a>
      </td>
    </tr>
  </table>
</template>