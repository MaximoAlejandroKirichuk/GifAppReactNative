import { configureStore } from '@reduxjs/toolkit'
import { categoriesSlice } from './slices/categoriesGif'
import { gifsSlices } from './slices/gifs/gifsSlices';
import { gifsApi } from './apis/gifsApi';
import { userSlice } from './slices/user/userSlice';
import { trendingCategoriesApi } from './apis/trendingCategoriesApi';
import { authApi } from '../services/authService'
export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    gifs: gifsSlices.reducer,
    userSlice: userSlice.reducer,
    [gifsApi.reducerPath]: gifsApi.reducer,
    [trendingCategoriesApi.reducerPath]: trendingCategoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifsApi.middleware, trendingCategoriesApi.middleware, authApi.middleware),
});
