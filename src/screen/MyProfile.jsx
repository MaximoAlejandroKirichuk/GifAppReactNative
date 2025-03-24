import { View, Image, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { clearUser } from '../store/slices/user/userSlice'
import { useGetProfileImageQuery } from '../services/userService'

import { useDataBase } from '../hooks/useDataBase'


import { BottonPressable } from '../components/Botton'
import { myProfileStyles } from '../styles/myProfileStyles'
import { globalStyles } from '../styles/globalStyles'


const defaultImageRoute = '../../assets/defaultProfile.png'

export const MyProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  
  const { truncateSessionTable } = useDataBase()
  const { imageCamera, localId } = useSelector(state => state.userSlice.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);
  

  
  const launchCamera = () => {
    navigation.navigate('ImageSelector')
  }

  const signOut = async () => {
    try{
      const response = await truncateSessionTable();
      dispatch(clearUser())
    }catch(err){
      Alert.alert(
        'Sign Out Error',
        );
    }
    clearUser();
  }

  return (
    <View style={globalStyles.container}>
       
       {/* //TODO: HACER MOSTRAR LOS DATOS DE LA CUENTA  */}
       {/* //TODO: Y CUANTOS GIFS TIENE LIKEADOS Y DE DONDE ESTA } */}
       
      {
        imageFromBase || imageCamera 
        ? 
          <Image 
            source={{uri: imageFromBase?.image || imageCamera}}
            style={myProfileStyles.image}
            resizeMode='cover'
          />
        :
          <Image
            source={require(defaultImageRoute)}
            style={myProfileStyles.image}
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

