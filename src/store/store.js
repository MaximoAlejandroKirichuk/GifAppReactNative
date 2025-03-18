import { configureStore } from '@reduxjs/toolkit'

import { categoriesSlice } from './slices/categoriesGif'
import { gifsSlices } from './slices/gifs/gifsSlices';
import { userSlice } from './slices/user/userSlice';

import { gifsApi, trendingCategoriesApi } from './apis';
import { authApi } from '../services/authService';
import { userApi } from '../services/userService';


export const store = configureStore({
  // share all state into the app
  reducer: {
    categories: categoriesSlice.reducer,
    gifs: gifsSlices.reducer,
    userSlice: userSlice.reducer,

    //TODO: EXPLAIN 
    [gifsApi.reducerPath]: gifsApi.reducer,
    [trendingCategoriesApi.reducerPath]: trendingCategoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifsApi.middleware, trendingCategoriesApi.middleware, authApi.middleware, userApi.middleware),
});
