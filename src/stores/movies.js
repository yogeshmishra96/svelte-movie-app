import { writable } from 'svelte/store';

export const movies = writable([]);
export const favorites = writable(JSON.parse(localStorage.getItem('favorites')) || []);

favorites.subscribe(value => {
    localStorage.setItem('favorites', JSON.stringify(value));
});
