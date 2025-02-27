import { createSlice } from '@reduxjs/toolkit';


export const favoritesGifSlices = createSlice({
    name: 'favoritesGifSlices',
    initialState: { 
        favoritesGif: []    
     },
     reducers: { 
        setFavoritesGif: (state, {payload}) => {
            if (!state.favoritesGif.some(category => category === payload)) {
                state.favoritesGif.push(payload);
                console.log(state.favoritesGif);
            }
        }
    },
});

export const {setFavoritesGif} = favoritesGifSlices.actions;