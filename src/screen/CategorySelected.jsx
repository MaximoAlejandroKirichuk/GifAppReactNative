import { View, Text, FlatList, Image, Pressable, Linking } from 'react-native'
import { searchStyles, globalStyles } from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'
import { ItemGif } from '../components/Searchs/ItemGif';

export const CategorySelected = () => {
  //TODO RECIBO CATEGORIA Y MUESTRO PRIMERO 10 desde home
  const params = useRoute().params;
  const { name, gifs } = params
  const navigation = useNavigation();

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: name,
      });
      //TODO: ARREGLAR EL HOME
      console.log('params: ', gifs);
    }
  }, [params, navigation]);


  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.title}>
        <Text style={globalStyles.title}>Category Selected: {params.name}</Text>
      </View>
      <FlatList
        data={gifs}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemGif url={item.url} gifKey={item.id}/>
        )}
      />
    </View>

  );
}
