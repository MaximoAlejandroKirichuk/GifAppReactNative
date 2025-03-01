import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { globalStyles } from '../styles'
import { GridGifs } from '../components/GridGifs'
import { useEffect } from 'react'


export const SaveFavoritesCategory = () => {
  //use redux for recive a favorites categories
  // const { favoritesGif } = useSelector(state => state.favoritesGifSlices)

  // useEffect(() => {
  //   console.log(favoritesGif)  
  // }, [favoritesGif])
  
  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}


      
      <GridGifs>
        <Text style={globalStyles.subTitle}>Quickly access what you like</Text>
      </GridGifs>
    </View>
  )
}
