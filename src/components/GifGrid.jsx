import { useEffect, useState } from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { getGifs } from '../helpers/getGifs'
import { ItemGif } from './ItemGif'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    const getImages = async () => {
      const newImages = await getGifs(category)
      console.log(newImages)
      console.log(images)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages(category)
    }, [])
    
  return (
    <View>
        {
            isLoading && <Text>Loading...</Text> 
        }
        <Text style={styles.title}>{category}</Text>
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
  title: {
    fontSize:35,
    fontWeight: "bold",
    marginVertical: 10,
  },

})