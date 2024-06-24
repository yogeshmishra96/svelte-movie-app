import { writable } from 'svelte/store';

export const favorites = writable([]);

export const addFavorite = (movie) => {
  favorites.update(current => {
    if (!current.find(item => item.id === movie.id)) {
      return [...current, movie];
    }
    return current;
  });
};

export const removeFavorite = (movie) => {
  favorites.update(current => current.filter(item => item.id !== movie.id));
};
