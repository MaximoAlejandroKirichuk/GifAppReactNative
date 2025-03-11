import { Text, View, FlatList,Image } from 'react-native'
import { globalStyles } from '../styles'

import { useSelector } from 'react-redux'


export const SaveFavoritesCategory = () => {
  const { favoritesGifs = [] } = useSelector(state => state.gifs)
  const { favoriteCategory } = useSelector(state => state.categories)
  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}

      {console.log('desde save', favoriteCategory)}



      <Text style={globalStyles.subTitle}>Quickly access what you like</Text>
      <FlatList
        data={favoriteCategory}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View key={item.name}>
              <Text style={globalStyles.subTitle}>{item.title}</Text>
            </View>)
        }}
      />
      <FlatList
        data={favoritesGifs.flat()}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={globalStyles.imagesContainer}>
              <Image
                style={globalStyles.image}
                source={{ uri: item.url }}
              />
              <Text key={item.id} style={globalStyles.subTitle}>{item.title}</Text>
            </View>)
        }}
      />
    </View>
  )
}
