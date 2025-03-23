import { Linking, Button, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'

export const openWhatsApp = ({url}) => {
  const gifUrl = url;
  const message = `Mirá este GIF: ${gifUrl}`;
  
  const downloandAndShareGif = async () => {
    const gifUrl = url;
    const fileUri = FileSystem.cacheDirectory + 'cat.gif';

    try {
        const downloadResumable = FileSystem.createDownloadResumable(gifUrl, fileUri);
        await downloadResumable.downloadAsync();

        if(!(await Sharing.isAvailableAsync())){
            Alert.alert('Share is not valid in that phone');
            return;
        }

        await Sharing.shareAsync(fileUri,{mimeType: 'image/gif'})
    } catch (error) {
        console.log('Error al compartir Gif: ', error);
    }
  }
};
