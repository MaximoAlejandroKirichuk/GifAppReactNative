import { createSlice } from "@reduxjs/toolkit";

export const gifsSlices = createSlice({
  name: "gifsSlices",
  initialState: {
    favoritesGifs: [],
    gifs: [],
    status: "idle", //'idle'| 'loading' | 'succeeded' | 'failed'
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
      // Verificar si ya está en favoritos
      const exists = state.favoritesGifs.some(gif => gif.id === payload.id);
      
      if (!exists) {
        state.favoritesGifs = [payload, ...state.favoritesGifs];  
      }
    },
    
    removeFavoriteCategory: (state, { payload }) => {
      state.favoritesGifs = state.favoritesGifs.filter(
        (gif) => gif.id !== payload.id 
      );
    },    
  },
});

export const { starLoadingGifs, setGifs, deleteCategory, removeFavoriteCategory, setCategoryFavoriteGif } = gifsSlices.actions;
