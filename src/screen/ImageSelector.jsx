import { View, Text, Image, Alert } from 'react-native';

import { globalStyles } from '../styles';
import { BottonPressable } from '../components/Botton';
import { myProfileStyles } from '../styles/myProfileStyles';
import { useImageSelector } from '../hooks/useImageSelector';

export const ImageSelector = () => {
  const { 
    imageFromBase, 
    image, 
    pickImage, 
    pickGalleryImage, 
    confirmImage 
  } = useImageSelector();




  // Handle confirm image when no image is selected
  const handleConfirmImage = () => {
    if (!image && !imageFromBase) {
      Alert.alert(
        'No Photo Selected',
        'Please take a photo or choose one from the gallery before confirming.'
      );
      return;
    }
    confirmImage();
  };

  return (
    <View style={globalStyles.container}>
      {/* If image exists, display it */}
      {imageFromBase || image ? (
        <>
          <Image
            source={{ uri: image || imageFromBase?.image }}
            style={myProfileStyles.image}
            resizeMode='cover'
          />

          <BottonPressable
            label={'Take Another Photo'}
            onPress={pickImage}
          />

          <BottonPressable
            label={'Pick Photo from Gallery'}
            onPress={pickGalleryImage}
          />

          <BottonPressable
            label={'Confirm Photo'}
            onPress={handleConfirmImage}
          />
        </>
      ) : (
        <>
          <View style={myProfileStyles.noPhotoContainer}>
            <Text>No photo to show...</Text>
          </View>

          <BottonPressable
            label={'Take a Photo'}
            onPress={pickImage}
          />

          <BottonPressable
            label={'Pick Photo from Gallery'}
            onPress={pickGalleryImage}
          />
        </>
      )}
    </View>
  );
};
