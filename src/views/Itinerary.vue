<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute();
const guestID = route.params['id'];
</script>

<template>
  <h1>Guest {{ guestID }} Itinerary</h1>
  <button @click="router.push('/')">Assignment</button>
</template>