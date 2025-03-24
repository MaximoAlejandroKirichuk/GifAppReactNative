import { View, Text, FlatList, Image, Pressable, Linking } from 'react-native'
import { searchStyles, globalStyles } from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'

export const CategorySelected = () => {
  //TODO RECIBO CATEGORIA Y MUESTRO PRIMERO 10 desde fav || home
  const params = useRoute().params;
  const { name, gifs } = params
  const navigation = useNavigation();

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: name,
      });
      console.log('params: ', gifs);
    }
  }, [params, navigation]);

  const downloandAndShareGif = async (url) => {
    const gifUrl = url;
    const fileUri = FileSystem.cacheDirectory + 'cat.gif';
    console.log('hola',url, fileUri);
    try {
      const downloadResumable = FileSystem.createDownloadResumable(gifUrl, fileUri);
      await downloadResumable.downloadAsync();

      if (!(await Sharing.isAvailableAsync())) {
        Alert.alert('Sharing not available on this device');
        return;
      }

      await Sharing.shareAsync(fileUri, { mimeType: 'image/gif' })
    } catch (error) {
      //TODO MODAL ERROR
      console.log('Errot to share GIF', error);
    }
  }

  return (
    <>
      <View style={searchStyles.categoryList}>
        <Text style={globalStyles.title}>Cat selecter: {params.name}</Text>
      </View>
      <FlatList
        style={globalStyles}
        data={gifs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              key={item.id}
              style={globalStyles.imagesContainer}
              onPress={() => downloandAndShareGif(item.url)}
            >
              <Image
                style={globalStyles.image}
                source={{ uri: item.url }}
              />
              <Text key={item.id} style={globalStyles.subTitle}>{item.title}</Text>
            </Pressable>)
        }}
      />
    </>

  );
}
