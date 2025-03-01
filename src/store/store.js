import { configureStore } from '@reduxjs/toolkit'
import { favoritesGifSlices } from './slices/favoritesGif'
import { categoriesSlice } from './slices/categoriesGif'
import { gifsApi } from './apis/gifsApi'
import { gifsSlices } from './slices/gifs/gifsSlices';


export const store = configureStore({
  reducer: {
    favoritesGifSlices: favoritesGifSlices.reducer,
    categories: categoriesSlice.reducer,
    
    //TODO necesito ayuda aca
    gifs: gifsSlices.reducer,




  },
});
