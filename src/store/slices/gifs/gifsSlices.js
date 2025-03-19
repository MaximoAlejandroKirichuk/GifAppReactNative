import { createSlice } from "@reduxjs/toolkit";

export const gifsSlices = createSlice({
  name: "gifsSlices",
  initialState: {
    favoritesGifs: [],
    gifs: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    starLoadingGifs: (state) => {
      state.isLoading = true;
    },
    setGifs: (state, { payload }) => {
      state.isLoading = false;
      state.gifs = payload;
    },

    setCategoryFavoriteGif: (state, { payload }) => {
      const gifsToAdd = Array.isArray(payload) ? payload : [payload];
    
      gifsToAdd.forEach(gif => {
        const exists = state.favoritesGifs.some(fav => fav.id === gif.id);
        if (!exists) {
          state.favoritesGifs.push(gif); 
        }
      });
    },
    
    removeFavoriteCategory: (state, { payload }) => {
      state.favoritesGifs = state.favoritesGifs.filter(
        (gif) => gif.id !== payload.id 
      );
    },    
  },
});

export const { starLoadingGifs, setGifs, deleteCategory, removeFavoriteCategory, setCategoryFavoriteGif } = gifsSlices.actions;
