import { View, Text, FlatList, Image, Pressable, Linking } from 'react-native'
import { globalStyles } from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { ItemGif } from '../components/Searchs/ItemGif';

export const CategorySelected = () => {
  // RECIBO CATEGORIA Y MUESTRO GIFS en EL STACK SAVE FAVORITE CATEGORY
  const params = useRoute().params;
  const { name, gifs } = params
  const navigation = useNavigation();

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: name,
      });
    }
  }, [params, navigation]);


  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.title}>
        <Text style={globalStyles.title}>Press to share 💬</Text>
      </View>
      <FlatList
        data={gifs}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemGif title={item.title} url={item.url} gifKey={item.id}/>
        )}
      />
    </View>

  );
}
