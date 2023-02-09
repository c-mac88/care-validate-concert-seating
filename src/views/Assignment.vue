<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();
</script>

<template>
  <h1>Concert Seating Assignment</h1>
  <button @click="router.push('/guest/1')">Itinerary</button>
</template>