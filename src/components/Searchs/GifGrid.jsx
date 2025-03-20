
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetGifsByCategoryQuery } from '../../store/apis/gifsApi'
import { setGifs } from '../../store/slices/gifs/gifsSlices'
import { ItemGif } from './ItemGif'
import { CategoryTitle } from '../CategoryTitle'
import { useEffect } from 'react'
import { globalStyles } from '../../styles/globalStyles'

export const GifGrid = ({ category, cant  }) => {

  const { data = [], isError, isLoading, error } = useGetGifsByCategoryQuery({ category, cant })
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action properly
    dispatch(setGifs(data))
  }, [data, dispatch])
  
  return (
    <View>
      {
        isLoading && <Text style={globalStyles.loadingText}>Loading...</Text>
      }
      {isError && (
        <Text style={globalStyles.errorText}>
          Error loading gifs: {error?.message || 'Unknown error'}
        </Text>
      )}
      {
        (data.length !== 0)
          ? <CategoryTitle category={category} />
          : <Text style={globalStyles.title}>That category was not found</Text>
      }
      {
        data.map(img => (
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
