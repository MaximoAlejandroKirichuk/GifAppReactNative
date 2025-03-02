import { configureStore } from '@reduxjs/toolkit'
import { favoritesGifSlices } from './slices/favoritesGif'
import { categoriesSlice } from './slices/categoriesGif'
import { gifsSlices } from './slices/gifs/gifsSlices';
import { gifsApi } from './apis/gifsApi';

export const store = configureStore({
  reducer: {
    favoritesGifSlices: favoritesGifSlices.reducer,
    categories: categoriesSlice.reducer,

    //TODO necesito ayuda aca
    gifs: gifsSlices.reducer,
    [gifsApi.reducerPath]: gifsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifsApi.middleware),
});
