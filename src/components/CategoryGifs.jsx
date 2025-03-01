import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getGifs } from '../store/slices/gifs/thunks';
import { ItemGif } from './ItemGif';
import { globalStyles } from '../styles/globalStyles';

export const CategoryGifs = ({ category, cant }) => {
  const { isLoading, gifs } = useSelector(state => state.gifs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGifs(category,cant))
  }, [])
  
 
  

  return (
    <View>
      {isLoading && <Text style={globalStyles.loadingText}>Loading...</Text>}

      {!isLoading && gifs.length === 0 && (
        <Text style={globalStyles.loadingText}>No gifs found.</Text>
      )}

      {!isLoading && gifs.length > 0 && (
        <FlatList
          data={gifs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemGif key={item.id} url={item.url} title={category} />
          )}
        />
      )}
    </View>
  );
};
