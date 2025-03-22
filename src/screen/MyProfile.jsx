import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/userService'
import { useNavigation } from '@react-navigation/native'
import { BottonPressable } from '../components/Botton'
import { clearUser } from '../store/slices/user/userSlice'
import { useDataBase } from '../hooks/useDataBase'


const defaultImageRoute = '../../assets/defaultProfile.png'

export const MyProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { truncateSessionTable } = useDataBase()
  const { imageCamera, localId } = useSelector(state => state.userSlice.value);
  const { data: imageFromBase, isLoading } = useGetProfileImageQuery(localId);

  const launchCamera = () => {
    navigation.navigate('ImageSelector')
  }

  const signOut = async () => {
    try{
      const response = await truncateSessionTable();
      dispatch(clearUser())
    }catch(err){
      console.log(err)
    }
    clearUser();
  }

  return (
    <View style={globalStyles.container}>
       
       {/* //TODO: HACER MOSTRAR LOS DATOS DE LA CUENTA  */}
       {/* //TODO: Y CUANTOS GIFS TIENE LIKEADOS Y DE DONDE ESTA } */}
       {
        isLoading && <Text style={globalStyles.title}>Loading ....</Text>
       }
      {
        imageFromBase || imageCamera 
        ? 
          <Image 
            source={{uri: imageFromBase?.image || imageCamera}}
            style={globalStyles.image}
            resizeMode='cover'
          />
        :
          <Image
            source={require(defaultImageRoute)}
            style={globalStyles.image}
            resizeMode='cover'
          />
      }

      <BottonPressable 
        label='Add profile photo'
        onPress={launchCamera}
      />
      <BottonPressable 
        label='Sign Out'
        onPress={signOut}
      />
    </View>
  )
}

