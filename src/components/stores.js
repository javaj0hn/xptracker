import {writable, get} from 'svelte/store';

export const clanData = writable({
  clan_name: '',
  server: '',
  trackCombat: '',
  trackSkills: '',
  event_name: '',
  members: []
})

export const token = writable(0);

export const eventDetails = writable([]);

export const mvpDetails = writable([]);

export const memberDetails = writable([]);

export const results = writable({
  eventDetails: [],
  mvpDetails: [],
  members: []
});