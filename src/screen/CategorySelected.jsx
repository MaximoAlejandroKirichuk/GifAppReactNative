import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { ItemGif } from '../components/Searchs/ItemGif';
import { useGetGifsByCategoryQuery } from '../store/apis/gifsApi';
import { Color } from '../global/Colors';

export const CategorySelected = () => {
  const { params } = useRoute();
  const { name } = params;
  const navigation = useNavigation();

  const { data: gifs, isError, isLoading, isFetching } = useGetGifsByCategoryQuery({ category: name, cant: 20 });

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  if (isFetching || isLoading) {
    return (
      <View style={{ flex: 1, height: 500, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.buttons} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Error loading categories. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Press to share 💬</Text>
      <FlatList
        data={gifs ?? []}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemGif title={item.title} url={item.url} gifKey={item.id} />
        )}
      />
    </View>
  );
};
