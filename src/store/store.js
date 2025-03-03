import { configureStore } from '@reduxjs/toolkit'

import { categoriesSlice } from './slices/categoriesGif'
import { gifsSlices } from './slices/gifs/gifsSlices';
import { gifsApi } from './apis/gifsApi';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    gifs: gifsSlices.reducer,
    [gifsApi.reducerPath]: gifsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifsApi.middleware),
});
