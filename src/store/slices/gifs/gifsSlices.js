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
    setCategoryFavoriteGif: (state, {payload}) => {
      state.favoritesGifs = [payload, ...state.gifs.filter(gif => gif.id === payload.id)];      
    },
    removeFavoriteCategory: (state, { payload }) => {
      state.favoritesGifs = state.favoritesGifs.filter(
        (category) => category !== payload
      );
    },
  },
});

export const { starLoadingGifs, setGifs, deleteCategory, removeFavoriteCategory, setCategoryFavoriteGif } = gifsSlices.actions;
