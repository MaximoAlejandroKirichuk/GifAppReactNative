import { Text, View, FlatList } from 'react-native'
import { globalStyles } from '../styles'

import { useSelector } from 'react-redux'


export const SaveFavoritesCategory = () => {
  const { favoritesGifs, gifs } = useSelector(state => state.gifs)

  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}

      {console.log('desde save', favoritesGifs)}

      <Text style={globalStyles.subTitle}>Quickly access what you like</Text>

      //TODO: MOSTRAR LAS FAVORITES CATEGORIES


    </View>
  )
}
