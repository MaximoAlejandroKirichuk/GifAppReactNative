import { Text, View, FlatList,Image } from 'react-native'
import { globalStyles } from '../styles'

import { useSelector } from 'react-redux'
import { useEffect } from 'react'


export const SaveFavoritesCategory = () => {
  const { favoritesGifs = [] } = useSelector(state => state.gifs);
  const { favoriteCategory } = useSelector(state => state.categories);
  const flatFavoriteGifs = favoritesGifs.flat();  // Esto elimina ese array anidado

  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}
{     
      console.log(flatFavoriteGifs)}

      <Text style={globalStyles.subTitle}>Quickly access what you like</Text>
   
      <FlatList
        data={favoriteCategory}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {

          //TODO: ARREGLAR ESTO, MUESTRA SIEMPRE EL MISMO GIF
          const gifForCategory = flatFavoriteGifs[index];
          return (
            <View key={item.name}>
            <Text style={globalStyles.subTitle}>{item.name}</Text>
            {gifForCategory ? (
              <Image
                style={globalStyles.image}
                source={{ uri: gifForCategory.url }}
              />
            ) : (
              <Text>No GIF found</Text>
            )}
          </View>
        )
        }}
      />
      {/* <FlatList
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
      /> */}
      
    </View>
  )
}
