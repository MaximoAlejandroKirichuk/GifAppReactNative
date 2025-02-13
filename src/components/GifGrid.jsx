
import { View, Text, StyleSheet, Pressable, Button } from 'react-native'

import { ItemGif } from './ItemGif'
import { useImages } from '../hooks/useImages'
import { Color } from '../global/Colors'


export const GifGrid = ({ category }) => {
  const { images, isLoading, deleteCategory } = useImages(category);

  return (
    <View>
      {
        isLoading && <Text style={styles.loadingText}>Loading...</Text>
      }

     

      {
        (images.length !== 0) ?  
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category}</Text>
          <Pressable style={styles.button}>
            <Button
              title="Borrar"
              onPress={() => deleteCategory(category)}
            />
          </Pressable>
        </View> : null
      }
      {
        images.map(img => (
          <ItemGif
            key={img.id}
            url={img.url}
            title={img.title}
            category={category}
            deleteCategory={deleteCategory}
          />
        ))
      }
    </View>
  )
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
  },

  button: {
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 30,
    color: Color.primary,
  }
})