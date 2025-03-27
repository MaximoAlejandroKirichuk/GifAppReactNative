import {  SafeAreaView, Text, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles.js'
import { GridGifs } from '../components/GridGifs.jsx'
import { useGetTrendingCategoriesQuery } from '../store/apis/trendingCategoriesApi.js';


export const Home = () => {


  //pido a mi store (es una peticion a firebase) 
  const { data, error } = useGetTrendingCategoriesQuery()

  return (
    <SafeAreaView style={globalStyles.container}>
      {
        !error
          ? (
            <GridGifs gifs={data} >
              <Text style={globalStyles.title}>Trending Topics of Gif</Text>
            </GridGifs>
          )
          : <Text>We are having problems with our gif provider 😞</Text>
      }
    </SafeAreaView>
  )
}
