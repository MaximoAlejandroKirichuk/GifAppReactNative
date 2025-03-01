import { SafeAreaView, Text} from 'react-native'
import {globalStyles} from '../styles/globalStyles.js'
import {GridGifs} from '../components/GridGifs.jsx'


export const Home = () => {
  const trendingCategories = [
    { id: '1', name: 'Animals', },
    { id: '2', name: 'Sport' },
    { id: '3', name: 'City', },
    { id: '4', name: 'Food'},
    { id: '5', name: 'Tech'},
    { id: '6', name: 'Music',},
  ];
  
//TODO: GUARDAR EN CACHE LA PETICION Y USAR UN REDUCE ASINCRONO

  return (
    <SafeAreaView style = {globalStyles.container}>
      <GridGifs gifs = {trendingCategories} >
         <Text style={globalStyles.title}>Trending Topics of Gif</Text>
         
      </GridGifs>
    </SafeAreaView>
  )
}
