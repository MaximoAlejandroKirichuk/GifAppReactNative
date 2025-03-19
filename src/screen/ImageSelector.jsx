import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../store/slices/user/userSlice';
import { usePostProfileImageMutation } from '../services/userService';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles';
import { Color } from '../global/Colors';

export const ImageSelector = () => {

  const [image, setImage] = useState(null)
  const [triggerPostImage, result] = usePostProfileImageMutation()
  const navigation = useNavigation();

  const { localId } = useSelector(state => state.userSlice.value);
  console.log(localId)

  const dispatch = useDispatch()

  const vefifyCameraPermissions = async () => {
    // verificar permisos de camara
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    return granted
  }

  const pickImage = async () => {
    // seleccionar una imagen
    try {
      const permissionCamera = await vefifyCameraPermissions()
      if (permissionCamera) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: (ImagePicker.MediaType = ['images', 'videos']),
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });


        if (!result.canceled) {
          const img = `data:image/jpg;base64,${result.assets[0].base64}`
          setImage(img)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const confirmImage = () => {
    // guardar la imagen

    try {
      dispatch(setCameraImage(image))
      triggerPostImage({ image, localId })
      navigation.goBack();
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <View style={globalStyles.container}>
      {
        image ? (
          <>
            <Image
              source={{ uri: image }}
              style={globalStyles.image}
              resizeMode='cover'
            />
                        //TODO: REFACTORIZAR
            <Pressable
              style={styles.button}
              onPress={pickImage}
            >
              <Text style={styles.text}>Take another photo</Text>

            </Pressable>
            <Pressable
              style={styles.button}
              onPress={confirmImage}
            >
              <Text style={styles.text}>Confirm photo</Text>

            </Pressable>
          </>)
          :
          (
            <>
              <View style={styles.noPhotoContainer}>
                <Text> No photo to show... </Text>
              </View>
              <Pressable
                style={styles.button}
                onPress={pickImage}
              >
                <Text>Take photo</Text>
              </Pressable>
            </>
          )
      }


    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.buttons,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    borderRadius: 12,
    padding: 12,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    color: Color.gray,
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: Color.buttons,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

});
