import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ItemGifHome } from './ItemGifHome';
import { useGetGifsByCategoryQuery } from '../store/apis/gifsApi';

export const CategoryGifs = ({ category, cant , subcategories }) => {

  const { data = [], isError, isLoading,error } = useGetGifsByCategoryQuery({category, cant})


  return (
    <View>
    {isLoading && <ActivityIndicator />}
    {isError && <Text>Error: {error?.message}</Text>}

    {data && (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemGifHome 
            key={item.id} 
            url={item.url} 
            title={category}
            subCategories = {subcategories} 
          />
        )}
      />
    )}
     
    </View>
  );
};
