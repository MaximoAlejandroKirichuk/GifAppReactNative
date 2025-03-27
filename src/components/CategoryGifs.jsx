import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ItemGifHome } from './ItemGifHome';
import { useGetGifsByCategoryQuery } from '../store/apis/gifsApi';
import { Color } from '../global/Colors';

export const CategoryGifs = ({ category, cant, subcategories }) => {
  const { data = [], isError, isLoading, isFetching } = useGetGifsByCategoryQuery({ category, cant });

  if (isFetching) {
    return (
      <View style={{ flex: 1, height: 500, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Color.buttons} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemGifHome url={item.url} title={category} subCategories={subcategories} />
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', margin: 20 }}>No GIFs available 😕</Text>}
      />
    </View>
  );
};
