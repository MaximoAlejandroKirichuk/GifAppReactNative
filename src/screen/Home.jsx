import { SafeAreaView, Text, View } from 'react-native'
import {globalStyles} from '../styles/globalStyles.js'
import HomeGrid from '../components/HomeGrid.jsx'


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
      <HomeGrid gifs = {trendingCategories}/>
    </SafeAreaView>
  )
}
