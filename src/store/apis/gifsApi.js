import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = "fww99iX70sEXZQ6Yz86q10g4UTKhtLil";

export const gifsApi = createApi({
  reducerPath: 'gifsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.giphy.com/v1/gifs/' 
  }),
  endpoints: (builder) => ({
    getGifsByCategory: builder.query({
      query: ({ category, cant }) => ({
        url: 'search',
        params: {
          api_key: apiKey,
          q: category,
          limit: cant,

        }
      }),
      transformResponse: (response) => { 
        return response.data.map((img) => ({
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium?.url
        }));
      }
    }),
  }),
})

export const { useGetGifsByCategoryQuery } = gifsApi