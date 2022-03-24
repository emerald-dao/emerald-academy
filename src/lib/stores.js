import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = persistentWritable('theme', 'dark');

// Make any writable store persistent.
export function persistentWritable(key, defaultValue) {
  // Create a writable store.
  const { subscribe, set, update } = writable();

  let storedValue;
  // Get stored value.
  if (browser) {
    storedValue = localStorage.getItem(key);
  }

  // Determine resolved value.
  const resolvedValue = (storedValue === null) ? defaultValue : storedValue;

  // Set resolved value.
  set(resolvedValue);

  // Subscribe to changes.
  subscribe(value => {
    // Store the new value.
    if (browser) {
      localStorage.setItem(key, value);
    }
  });

  return { subscribe, set, update };
}