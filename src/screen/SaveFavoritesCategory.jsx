import { Text, View, FlatList,Image, Pressable } from 'react-native'
import { globalStyles } from '../styles'

import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'



export const SaveFavoritesCategory = () => {
  const navigation = useNavigation()
  const { favoritesGifs = [] } = useSelector(state => state.gifs);
  const { favoriteCategory } = useSelector(state => state.categories);
  const flatFavoriteGifs = favoritesGifs.flat();  // Esto elimina ese array anidado

  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A CACHE */}


      <Text style={globalStyles.subTitle}>Quickly access what you like</Text>
   
      <FlatList
        data={favoriteCategory}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          
          //TODO: ARREGLAR ESTO, MUESTRA SIEMPRE EL MISMO GIF y AGREGAR EL REACT NAVIGATION HASTA IMAGESELECTOR
          const gifForCategory = flatFavoriteGifs[index];
          return (
            <Pressable key={item.name} onPress={() => navigation.navigate('CategorySelected')}>
            <Text style={globalStyles.subTitle}>{item.name}</Text>
            {gifForCategory ? (
              <Image
                style={globalStyles.image}
                source={{ uri: gifForCategory.url }}
              />
            ) : (
              <Text>No GIF found</Text>
            )}
          </Pressable>
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
