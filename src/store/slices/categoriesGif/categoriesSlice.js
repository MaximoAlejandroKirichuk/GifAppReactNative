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
      state.categories = [{ name: payload }];
    },
    deleteCategory: (state) => {
      state.categories = [];
    },
    setFavoriteCategories: (state, { payload }) => {
      if (state.favoriteCategory.some((category) => category.name === payload)) return;
      state.favoriteCategory = [{ name: payload }, ...state.favoriteCategory];
    },
  },
});

export const { setCategories, deleteCategory, setFavoriteCategories } = categoriesSlice.actions;
