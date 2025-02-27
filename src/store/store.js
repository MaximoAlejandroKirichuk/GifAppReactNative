import { configureStore } from '@reduxjs/toolkit'
import { favoritesGifSlices } from './slices/favoritesGif'
import { categoriesSlice } from './slices/categoriesGif'


export const store = configureStore({
  reducer: {
    favoritesGifSlices: favoritesGifSlices.reducer,
    categories: categoriesSlice.reducer
  },
})
