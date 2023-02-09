import { Guest } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { ref, Ref } from 'vue';

export const useGuests = () => {
  let guests: Ref<Guest[]> = ref([]);
  let guestCount: number = 0;

  const generateRandomGuest = () :Guest => {
    return {
      id: uuidv4(),
      companions: Math.floor(Math.random() * 6),
      name: Math.random().toString(36).slice(2),
      packageID: Math.floor(Math.random() * 5) + 1
    }
  };

  const generateGuests = () => {
    guests.value = [];
    for (let i = 0; i < 100; i++) {
      guests.value.push(generateRandomGuest());
    }
  };

  return { guests, guestCount, generateGuests };
};