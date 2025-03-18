import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/userService'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../global/Colors'


const defaultImageRoute = '../../assets/defaultProfile.png'

export const MyProfile = () => {
  const navigation = useNavigation();

  const { imageCamera, localId } = useSelector(state => state.userSlice.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const launchCamera = () => {
    navigation.navigate('ImageSelector')
  }

  return (
    <View style={globalStyles.container}>
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

      <Pressable
          style={styles.button}
          onPress={launchCamera}
      >
        <Text style={styles.text}>Change profile photo</Text>

      </Pressable>
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
  }
  
});
