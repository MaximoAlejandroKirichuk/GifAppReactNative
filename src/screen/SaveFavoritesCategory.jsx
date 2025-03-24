import { Text, View, FlatList, Image, Pressable } from 'react-native'

import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { globalStyles } from '../styles'


export const SaveFavoritesCategory = () => {
  const navigation = useNavigation()
  const { favoritesGifs = [] } = useSelector(state => state.gifs);
  const { favoriteCategory } = useSelector(state => state.categories);
  const flatFavoriteGifs = favoritesGifs.flat();  // Esto elimina ese array anidado

  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A SQL LITE, Y MOSTRAR LA PRIMERA FOTO DE LA CATEGORIA */}


      <Text style={globalStyles.title}>Quickly access what you like</Text>
      {console.log(flatFavoriteGifs)}
      <FlatList
        data={favoriteCategory}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Pressable
            style={{marginBottom: 30}}
              label={item.name}
              onPress={() => navigation.navigate('CategorySelected', { name: item.name, gifs: flatFavoriteGifs })}
            >
              <Text>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />


    </View>
  )
}
