import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getGifs } from '../store/slices/gifs/thunks';
import { ItemGif } from './ItemGif';
import { globalStyles } from '../styles/globalStyles';
import { useGetGifsByCategoryQuery } from '../store/apis/gifsApi';

export const CategoryGifs = ({ category, cant }) => {
  // const { isLoading, gifs } = useSelector(state => state.gifs);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGifs(category,cant))
  // }, [])

  const { data = [], isError, isLoading,error } = useGetGifsByCategoryQuery({category, cant})


  return (
    <View>
    {isLoading && <Text style={globalStyles.loadingText}>Loading...</Text>}
    {isError && <Text>Error: {error?.message}</Text>}
{console.log(data)}
    {data && (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemGif 
            key={item.id} 
            url={item.url} 
            title={category} 
          />
        )}
      />
    )}
     
    </View>
  );
};
