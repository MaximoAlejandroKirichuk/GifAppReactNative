import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../store/apis/data/realTimeDataBase";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['profileImageGet'],  // Definir los tipos de etiqueta aquí
  endpoints: (builder) => ({
    //Obtener imagen desde la base de datos
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    // Guardar imagen en la base de datos.
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

    


  }),
});

export const { useGetProfileImageQuery, usePostProfileImageMutation } = userApi;
