import { useSeating } from '../composables/seating';
import { Guest } from '../types';
import { computed, ref, Ref } from 'vue';
import { useGuestStore } from '../stores/guests';

const guestStore = useGuestStore();

export const useGuests = () => {
  const guests: Ref<Guest[]> = ref([]);
  const totalGuests = ref(0);
  const guestsSeated = ref(false);
  let id = 0;

  const guestsSorted = computed(() => {
    return guests.value.sort((a, b) => a.companions - b.companions)
  })

  const seatingMatrix = computed(() => {
    const retVal: number[][] = [];
    let tempArray: number[] = [];
    let seatIndex = 0;
    guests.value.forEach((guest) => {
      const totalSeats = guest.companions + 1;
      for (let i = 0; i < totalSeats; i++) {
        tempArray.push(guest.id);
        seatIndex ++;
        if (seatIndex === 10) {
          retVal.push(tempArray);
          tempArray = [];
          seatIndex = 0;
        }
      }
    });
    return guestsSeated.value ? retVal : [];
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
    return new Promise((resolve, reject) => {
      id = 0;
      guests.value = [];
      totalGuests.value = 0;
      while (totalGuests.value <= 100) {
        const guest = generateGuest();
        totalGuests.value += (1 + guest.companions);
        guests.value.push(guest);
      }
      resolve(guests.value);
    })
  };

  const seatGuests = async () => {
    guestsSeated.value = true;
    const { getSeats } = useSeating();
    guestsSorted.value.forEach((guest) => guest.seatID =  getSeats(guest.companions + 1));
    guestStore.updateGuests(guests.value);

  };

  return { guests, seatingMatrix, totalGuests, generateGuests, seatGuests };
};