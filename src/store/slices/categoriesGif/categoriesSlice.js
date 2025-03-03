import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, { payload }) => {
      if (state.categories.some((category) => category.name === payload))
        return;
      state.categories = [{ name: payload }, ...state.categories];
    },
    deleteCategory: (state, { payload }) => {
      state.categories = state.categories.filter(
        (category) => category.name !== payload
      );
    },
  },
});

export const { setCategories, deleteCategory } = categoriesSlice.actions;
