import { useState } from 'react';
import { View, Text, StyleSheet, Image, Linking, Alert } from 'react-native';


import * as ImagePicker from 'expo-image-picker';
import * as ExpoLibrary from 'expo-media-library';

import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../store/slices/user/userSlice';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../services/userService';

import { globalStyles, modalErrorStyles } from '../styles';
import { Color } from '../global/Colors';
import { BottonPressable } from '../components/Botton';
import { ModalError } from '../components/ModalError';
import { useInput } from '../hooks';
import { myProfileStyles } from '../styles/myProfileStyles';
export const ImageSelector = () => {
  const navigation = useNavigation();
  const { handleModal, modalVisible } = useInput()
  const [image, setImage] = useState(null)
  const [isImageFromCamera, setIsImageFromCamera] = useState(false);
  const [imageUri, setImageUri] = useState('');

  const { localId } = useSelector(state => state.userSlice.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const [triggerPostImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch()


//TODO: REFACTORIZAR TODO CON UN useImageSelector 


  const verifyCameraPermissions = async () => {
    try {
      // Verificar permisos de la cámara
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (granted) return true;
      // Si no fue concedido
      handleModal(true);
      return false;
    } catch (error) {
      console.log("Error al solicitar permisos de cámara:", error);
      handleModal(true);
      return false;
    }
  };
  

  const pickImage = async () => {
    // seleccionar una imagen
    try {
      const permissionCamera = await verifyCameraPermissions()
      if (permissionCamera) {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: (ImagePicker.MediaType = ['images', 'videos']),
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });

        if (!result.canceled) {
          const img = `data:image/jpg;base64,${result.assets[0].base64}`;
          setImage(img);
          setImageUri(result.assets[0].uri);
          setIsImageFromCamera(true);
        }
        
        
      }
    } catch (error) {
      handleModal(error)
    }
  }


  const verifyGalleryPermission = async () => {
    try{
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (granted) return true;
      // Si no fue concedido
      handleModal(true);
      return false;
    } catch (error) {
      handleModal(true);
      return false;
    }
  }


  const pickGalleryImage = async () => {

    try {
      setIsImageFromCamera(false)
      const permisssionGallery = await verifyGalleryPermission();
      
      if (permisssionGallery) {
        const result = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: true,
          aspect: [1, 1],
          mediaTypes: (ImagePicker.MediaType = ["images"]),
          quality: 0.2,
        });

        console.log(result)

        if (!result.canceled) {
          const image = `data:image/jpeg;base64,${result.assets[0].base64}`
          setImage(image);
        }
      }
    } catch (err) {
      console.log(err)
    
    }
  }


  const confirmImage = async () => {
    // guardar la imagen
    try {
      if (!image || image.length === 0) return;

      dispatch(setCameraImage(image))
      triggerPostImage({ image, localId })

      if (isImageFromCamera && imageUri) {
        await ExpoLibrary.createAssetAsync(imageUri);
      }
      navigation.goBack()
    } catch (err) {
      handleModal(true);
      
    }

  }

  return (
    <View style={globalStyles.container}>
      {
          imageFromBase || image 
        ? (
          <>
            <Image
              source={{ uri: image || imageFromBase?.image }}
              style={myProfileStyles.image}
              resizeMode='cover'
            />

            <BottonPressable
              label={'Take another Photo'}
              onPress={pickImage}
            />

            <BottonPressable
              label={'Take photo from galery'}
              onPress={pickGalleryImage}
            />
            {/* //TODO: AGREGAR UN MODAL ERROR CUANDO SE QUIERE AGREGAAR ALGO QUE NO SE ELEGIO */}
            <BottonPressable
              label={'Confirm photo'}
              onPress={confirmImage}
            />
          </>
          )
          :
          (
            <>
              <View style={myProfileStyles.noPhotoContainer}>
                <Text> No photo to show... </Text>
              </View>
              <BottonPressable
                label={'Take another Photo'}
                onPress={pickImage}
              />

              <BottonPressable
                label={'Take photo from galery'}
                onPress={pickGalleryImage}
              />
            </>
          )
      }
      {modalVisible && (
        <ModalError handleModal={handleModal} modalVisible={modalVisible}>
         <Text style={modalErrorStyles.titleModal}>Permission Error</Text>
          <BottonPressable 
                label={'Go to setting to provide permissions'}
                onPress ={ () => Linking.openSettings()}
              />
        </ModalError>
      )}

    </View>
  )
}
