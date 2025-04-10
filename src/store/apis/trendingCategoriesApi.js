import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseURL} from './data/realTimeDataBase'
//ESTO SE CONECTA CON FIREBASE, pide las trendingCategories.
export const trendingCategoriesApi = createApi({
  reducerPath: 'trendingCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL
  }),
  endpoints: (builder) => ({
    getTrendingCategories: builder.query({
      query: () => '/trendingCat.json'
    }),
  }),
})

export const { useGetTrendingCategoriesQuery } = trendingCategoriesApi;