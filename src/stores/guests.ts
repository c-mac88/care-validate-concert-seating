import { defineStore } from 'pinia'
import type {Guest} from '../types';

interface GuestState {
  guests: Guest[]
}

export const useGuestStore = defineStore('guests', {
  state: (): GuestState => ({ guests: [] }),
  actions: {
    updateGuests(guests: Guest[]) {
      this.guests = guests;
    },
  },
})