import { createSlice } from '@reduxjs/toolkit';
//TODO: HACER LA PETICION ASINCRONA
export const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: { 
        categories: []
     },
    reducers: { 
        setCategories: (state, {payload}) =>{
            if (state.categories.some(category => category.name === payload)) return;
            state.categories = [{ name: payload }, ...state.categories]
        },
        
        
     },
});

export const {setCategories} = categoriesSlice.actions;