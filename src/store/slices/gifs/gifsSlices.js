import { createSlice } from "@reduxjs/toolkit";

export const gifsSlices = createSlice({
  name: "gifsSlices",
  initialState: {
    gifs: [],
    status: "idle", //'idle'| 'loading' | 'succeeded' | 'failed'
    error: null,
    isLoading: false,
  },
  reducers: {
    starLoadingGifs: (state) => {
      state.isLoading = true
    },
    setGifs: (state, {payload}) => {
        state.isLoading = false;  
        state.gifs = payload;
      },
      
  },
});

export const {starLoadingGifs, setGifs,deleteCategory} = gifsSlices.actions;
