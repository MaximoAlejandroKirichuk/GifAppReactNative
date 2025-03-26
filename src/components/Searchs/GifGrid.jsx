import { useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'

import { useDispatch } from 'react-redux'
import { useGetGifsByCategoryQuery } from '../../store/apis/gifsApi'
import { setGifs } from '../../store/slices/gifs/gifsSlices'

import { ItemGif } from './ItemGif'
import { CategoryTitle } from '../CategoryTitle'
import { globalStyles } from '../../styles/globalStyles'
import { Color } from '../../global/Colors'

export const GifGrid = ({ category, cant }) => {

  const { data = [], isError, isLoading, isFetching } = useGetGifsByCategoryQuery({ category, cant })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGifs(data))
  }, [data, dispatch])

  if(isFetching){
    return (
      <View style={{ flex:1, height:"500", justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size={'large'} color={Color.buttons} />
      </View>
    )
  }
  return (
    <View>
      {isLoading && <ActivityIndicator size="large"  />}

      <CategoryTitle category={category} />

      {isError || data.length === 0 ? (
        <Text style={globalStyles.title}>That category was not found</Text>
      ) : (
        <FlatList
          style={{ alignItems: 'center' }}
          data={data}
          key={`flatlist-${2}`} 
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemGif
              url={item.url}
              title={item.title}
            />
          )}
        />
      )}
    </View>
  )
}
