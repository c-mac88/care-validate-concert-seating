import { useSeating } from '@/composables/seating';
import { Guest } from '@/types';
import { computed, ref, Ref } from 'vue';

export const useGuests = () => {
  const guests: Ref<Guest[]> = ref([]);
  const totalGuests = ref(0);
  let id = 0;

  const guestsSorted = computed(() => {
    return guests.value.sort((a, b) => b.companions - a.companions)
  })

  const generateGuest = () :Guest => {
    id ++;
    return {
      id,
      companions: Math.floor(Math.random() * 6),
      name: Math.random().toString(36).slice(2),
      packageID: Math.floor(Math.random() * 5) + 1,
      seatID: ''
    }
  };

  const generateGuests = () => {
    id = 0;
    guests.value = [];
    totalGuests.value = 0;
    while (totalGuests.value <= 100) {
      const guest = generateGuest();
      totalGuests.value += (1 + guest.companions);
      guests.value.push(guest);
    }
  };

  const seatGuests = () => {
      const { getSeats } = useSeating(totalGuests);
      guestsSorted.value.forEach((guest) => guest.seatID =  getSeats(guest.companions + 1));
  };

  return { guests, totalGuests, generateGuests, seatGuests };
};