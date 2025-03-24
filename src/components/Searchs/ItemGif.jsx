import { Image, Pressable } from "react-native"
import { globalStyles } from "../../styles/globalStyles"

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'
import * as Haptics from 'expo-haptics';

export const ItemGif = ({ gifKey, url }) => {
  //TODO: MODAL DE PREPARANDO SHARE
  const downloandAndShareGif = async (url) => {
    const gifUrl = url;
    const fileUri = FileSystem.cacheDirectory + 'cat.gif';
    console.log('hola', url, fileUri);
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
    <Pressable

      key={gifKey}
      style={({ pressed }) => ({
        ...globalStyles.imagesContainer,
        opacity: pressed ? 0.8 : 1,
      })} onPress={() => {
        downloandAndShareGif(url)

        Haptics.impactAsync()
      }}
    >
      <Image
        style={globalStyles.image}
        source={{ uri: url }}
        resizeMode="cover"
      />
    </Pressable>
  )
}
