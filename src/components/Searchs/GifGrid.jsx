
import { View, Text } from 'react-native'
import { useImages } from '../../hooks/useImages'
import { globalStyles } from '../../styles/globalStyles'
import { ItemGif } from './ItemGif'
import { CategoryTitle } from '../CategoryTitle'
// import { useGetGifsQuery } from '../store/apis/gifsApi'


export const GifGrid = ({ category, cant }) => {
  const { images, isLoading, deleteCategory } = useImages(category,cant);

  return (
    <View>
      {
        isLoading && <Text style={globalStyles.loadingText}  >Loading...</Text>
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
