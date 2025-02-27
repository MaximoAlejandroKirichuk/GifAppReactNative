import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { globalStyles } from '../styles'

export const SaveFavoritesCategory = () => {
  //use redux for recive a favorites categories
  const {favoritesGif} = useSelector(state => state.favoritesGifSlices)
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Quickly access what you like</Text>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}
      <Text>{favoritesGif}</Text>
    </View>
  )
}
