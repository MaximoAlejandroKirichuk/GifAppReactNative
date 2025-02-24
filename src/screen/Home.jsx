import { SafeAreaView } from 'react-native'
import {globalStyles} from '../styles/globalStyles.js'
import HomeGrid from '../components/HomeGrid.jsx'


export const Home = () => {
  const trendingCategories = [
    { id: '1', name: 'Animales', image: 'https://example.com/animals.jpg' },
    { id: '2', name: 'Deportes', image: 'https://example.com/sports.jpg' },
    { id: '3', name: 'Viajes', image: 'https://example.com/travel.jpg' },
    { id: '4', name: 'Comida', image: 'https://example.com/food.jpg' },
    { id: '5', name: 'Tecnología', image: 'https://example.com/technology.jpg' },
    { id: '6', name: 'Música', image: 'https://example.com/music.jpg' },
  ];
  
  return (
    <SafeAreaView style = {globalStyles.container}>
      <HomeGrid gifs = {trendingCategories}/>
    </SafeAreaView>
  )
}
