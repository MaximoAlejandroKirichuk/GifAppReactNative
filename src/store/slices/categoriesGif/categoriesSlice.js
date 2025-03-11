import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({

  name: "categoriesSlice",
  initialState: {
    favoriteCategory: [],
    categories: [],
  },
  reducers: {
    setCategories: (state, { payload }) => {
      if (state.categories.some((category) => category.name === payload))return;
      state.categories = [{ name: payload }, ...state.categories];
    },
    deleteCategory: (state, { payload }) => {
      state.categories = state.categories.filter(
        (category) => category.name !== payload
      );
    },
    setFavoriteCategories: (state, { payload }) => {
      if (state.favoriteCategory.some((category) => category.name === payload)) return;
      state.favoriteCategory = [{ name: payload }, ...state.favoriteCategory];
    },
  },
});

export const { setCategories, deleteCategory, setFavoriteCategories } = categoriesSlice.actions;
