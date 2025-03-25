import { Text, View, FlatList, Image, Pressable } from 'react-native'

import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { globalStyles } from '../styles'
import { BottonPressable } from '../components/Botton'


export const SaveFavoritesCategory = () => {
  const navigation = useNavigation()
  const { favoritesGifs = [] } = useSelector(state => state.gifs);
  const { favoriteCategory } = useSelector(state => state.categories);
  const flatFavoriteGifs = favoritesGifs.flat();  // Esto elimina ese array anidado

  return (
    <View style={globalStyles.container}>
      {/* //TODO: CREAR LA LISTA DE CATEGORIAS GUARDADA Y AGREGARLO A SQL LITE, Y MOSTRAR LA PRIMERA FOTO DE LA CATEGORIA y algo si no hay nada */}


      <Text style={globalStyles.title}>Quickly access what you like⚡️</Text>


      {
       favoriteCategory.length !== 0 
       ?

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

       :  
       <>
       <Text style={globalStyles.subTitle}>You don't have any favorite categories yet.🥺</Text>
       <BottonPressable
        onPress={() => navigation.navigate('Search')}
        label='🔍Go to Search for add your favorite categories'
        />
        </>
      }

    </View>
  )
}
