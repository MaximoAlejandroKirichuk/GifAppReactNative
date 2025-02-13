
import { View, Text, StyleSheet, Pressable, Button } from 'react-native'

import { ItemGif } from './ItemGif'
import { useImages } from '../hooks/useImages'
import { Color } from '../global/Colors'
import {CategoryTitle} from './CategoryTitle'


export const GifGrid = ({ category }) => {
  const { images, isLoading, deleteCategory } = useImages(category);

  return (
    <View>
      {
        isLoading && <Text style={styles.loadingText}>Loading...</Text>
      }

     

      {
        (images.length !== 0) 
        ? <CategoryTitle category={category} deleteCategory={deleteCategory}/>  
        : null
      }
      {
        images.map(img => (
          <ItemGif
            key={img.id}
            url={img.url}
            title={img.title}
          />
        ))
      }
    </View>
  )
}
const styles = StyleSheet.create({

  loadingText: {
    fontSize: 30,
    color: Color.primary,
  }
})