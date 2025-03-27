import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../store/apis/data/realTimeDataBase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["profileImageGet", "favoriteCategories"], // Corregido: se separan correctamente los valores
  endpoints: (builder) => ({
    // Aquí va el bloque "endpoints"
    // Obtener imagen desde la base de datos
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),

    // Guardar imagen en la base de datos
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),

    // Obtener categorías favoritas
    getFavoriteCategories: builder.query({
      query: (localId) => `favoriteCategories/${localId}.json`,
      providesTags: ["favoriteCategories"],
    }),

    // Guardar categorías favoritas
    postFavoriteCategories: builder.mutation({
      query: ({ categories, localId }) => ({
        url: `favoriteCategories/${localId}.json`,
        method: "PUT",
        body: {
          categories: categories,
        },
      }),
      invalidatesTags: ["favoriteCategories"],
    }),
  }),
});
export const {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetFavoriteCategoriesQuery,
  usePostFavoriteCategoriesMutation,
} = userApi;
