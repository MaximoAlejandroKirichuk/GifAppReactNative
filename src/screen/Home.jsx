import {  SafeAreaView, Text, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles.js'
import { GridGifs } from '../components/GridGifs.jsx'
import { useGetTrendingCategoriesQuery } from '../store/apis/trendingCategoriesApi.js';


export const Home = () => {


  //TODO: GUARDAR EN CACHE LA PETICION Y USAR UN REDUCE ASINCRONO
  
  const { data, error, isLoading } = useGetTrendingCategoriesQuery()
  console.log('dataaaa: ',data);
  return (
    <SafeAreaView style={globalStyles.container}>
      
 
      {
        !error
          ? (
            <GridGifs gifs={data} >
              {console.log(data)}
              <Text style={globalStyles.title}>Trending Topics of Gif</Text>
            </GridGifs>
          )
          : null
      }
    </SafeAreaView>
  )
}
