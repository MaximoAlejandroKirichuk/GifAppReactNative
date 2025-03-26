import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { BottomTabNavigator } from './BottomTabNavigator';
import AuthStack from './AuthStack';
import { setUser } from '../store/slices/user/userSlice';
import { useDataBase } from '../hooks/useDataBase';
import { Alert } from 'react-native';
import { useFonts } from 'expo-font';

export const Navigator = () => {

    //todo: tipografias 
    // const [fontsLoaded, fontError] = useFonts({
    //     Josefin: require("./assets/JosefinSans-Regular.ttf"),
    //   });
    
    const [fontsLoaded, fontError] = useFonts({
        IndieFlower: require('../../assets/fonts/Indie_Flower/IndieFlower-Regular.ttf'),
        CaveatBrush: require('../../assets/fonts/Caveat_Brush/CaveatBrush-Regular.ttf'),
      });

    const disptach = useDispatch()
    const { user } = useSelector(state => state.userSlice.value)
    const { getSession } = useDataBase();
    useEffect(() => {
        (async () => {
            try {
                const response = await getSession();
                if(response){
                    const user = response;
                    disptach(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token
                    }));
                }
            } catch (error) {
                Alert.alert('An error occurred while trying to log in.')
            }
        })()
    }, [user])

    if (!fontsLoaded || fontError) {
        return null;
      }
      if(fontsLoaded && !fontError ){
          return (
              <NavigationContainer>{/* there is a high order component */}
                  {user ? <BottomTabNavigator /> : <AuthStack />}
                  
              </NavigationContainer>
          )
      }
}


