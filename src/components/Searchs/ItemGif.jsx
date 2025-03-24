import { Image, Pressable, View } from "react-native"
import { globalStyles } from "../../styles/globalStyles"

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'

export const ItemGif = ({ gifKey, url }) => {
      //TODO: MODAL DE PREPARANDO SHARE
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
        <Pressable
         key={gifKey} 
         style={globalStyles.imagesContainer}
         onPress={() => downloandAndShareGif(url)}
         >
            <Image
                style={globalStyles.image}
                source={{ uri: url }}
            />
        </Pressable>
    )
}
