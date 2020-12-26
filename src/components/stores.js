import {writable, get} from 'svelte/store';

export const clanData = writable({
  clan_name: '',
  server: '',
  trackCombat: '',
  trackSkills: '',
  event_name: '',
  members: []
})