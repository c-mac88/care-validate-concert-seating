import { Guest } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { ref, Ref, computed } from 'vue';

export const useGuests = () => {
  let guests: Ref<Guest[]> = ref([]);
  let totalGuests = ref(0);

  const guestsSorted = computed(() => {
    return guests.value.sort((a, b) => b.companions - a.companions)
  })

  const generateGuest = () :Guest => {
    return {
      id: uuidv4(),
      companions: Math.floor(Math.random() * 6),  // With more time I would have extracted these into helper methods and implemented unit tests
      name: Math.random().toString(36).slice(2),
      packageID: Math.floor(Math.random() * 5) + 1,
      seatID: ''
    }
  };

  const generateGuests = () => {
    guests.value = [];
    totalGuests.value = 0;
    while (totalGuests.value <= 100) {
      const guest = generateGuest();
      totalGuests.value += (1 + guest.companions);
      guests.value.push(guest);
    }
  };

  const assignSeats = () => {
      guests.value.forEach((guest) => guest.seatID = 'Test')
  };

  return { guests, totalGuests, generateGuests, assignSeats };
};