import { useState } from "react";
import { Alert, Linking } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../store/slices/user/userSlice";
import {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} from "../services/userService";

export const useImageSelector = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [isImageFromCamera, setIsImageFromCamera] = useState(false);
  const [imageUri, setImageUri] = useState("");

  const { localId } = useSelector((state) => state.userSlice.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const [triggerPostImage] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const showPermissionAlert = () => {
    Alert.alert(
      "Permission Error",
      "You need to grant permissions to access the camera or gallery.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Go to Settings", onPress: () => Linking.openSettings() },
      ]
    );
  };

  const verifyCameraPermissions = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (granted) return true;
      showPermissionAlert();
      return false;
    } catch (error) {
      showPermissionAlert();
      return false;
    }
  };

  const pickImage = async () => {
    try {
      const permissionCamera = await verifyCameraPermissions();

      if (permissionCamera) {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: (ImagePicker.MediaType = ["images", "videos"]),
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });

        if (!result.canceled) {
          const img = `data:image/jpg;base64,${result.assets[0].base64}`;
          setImage(img);
          setImageUri(result.assets[0].uri);
          
        }
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while capturing the image.");
    }
  };

  const verifyGalleryPermission = async () => {
    try {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (granted) return true;
      showPermissionAlert();
      return false;
    } catch (error) {
      showPermissionAlert();
      return false;
    }
  };

  const pickGalleryImage = async () => {
    try {
      const permissionGallery = await verifyGalleryPermission();

      if (permissionGallery) {
        const result = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: true,
          aspect: [1, 1],
          mediaTypes: "images",
          quality: 0.2,
        });

          // Verificar si el resultado tiene imágenes seleccionadas
      if (result.canceled || !result.assets || result.assets.length === 0) {
        Alert.alert("Selection Cancelled", "No image was selected.");
        return;
      }

      // Si una imagen fue seleccionada, procesarla
      const selectedImage = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImage(selectedImage); // Asumí que tienes un estado `image` para guardar la imagen seleccionada
    
      }
    } catch (err) {
      Alert.alert("Error", "An error occurred while selecting the image.");
    }
  };

  const confirmImage = async () => {
    try {

      // Verificar si la imagen está vacía o no seleccionada
      if (!image || image.length === 0) {
        Alert.alert("Error", "You must select or capture an image first.");
        return;
      }
  

      alert('Change profile image ...')    
      // Despachar la imagen al store
      dispatch(setCameraImage(image));
      
      // Subir la imagen al servidor
      const postResult = await triggerPostImage({ image, localId });
      
  
      // Navegar de vuelta después de todo el proceso
      navigation.goBack();
    } catch (err) {
     alert('Error', 'An error occurred while change the image.')
    }
  };
  

  return {
    pickGalleryImage,
    pickImage,
    confirmImage,
    image,
    imageFromBase,
  };
};
