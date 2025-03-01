import { createSlice } from "@reduxjs/toolkit";

export const favoritesGifSlices = createSlice({
  name: "favoritesGifSlices",
  initialState: {
    favoritesGif: [],
  },
  reducers: {
    setFavoritesGif: (state, { payload }) => {
      if (!state.favoritesGif.some((category) => category === payload)) {
        state.favoritesGif.push(payload);
      }
    },
    removeFavoriteSlice: (state, { payload }) => {
      const index = state.favoritesGif.findIndex((gif) => gif === payload); 
      if (index !== -1) {
        state.favoritesGif.splice(index, 1); // Removes 1 item at the found index
      }
    },
  },
});

export const { setFavoritesGif } = favoritesGifSlices.actions;
