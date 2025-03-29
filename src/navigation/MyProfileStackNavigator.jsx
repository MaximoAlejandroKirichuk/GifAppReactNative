import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyProfile } from '../screen/MyProfile';
import { ImageSelector } from '../screen/ImageSelector';

const Stack = createNativeStackNavigator();

export const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='MyProfile'
      screenOptions={
                
                
        { 
        headerShown:true, headerTitleStyle: {
            fontFamily: 'IndieFlower',
            fontSize: 30
          }, }
    }
    >
      <Stack.Screen
        name='MyProfile'
        options={{
          title: 'My Profile',
        }}
        component={MyProfile}
      />
      <Stack.Screen
        name='ImageSelector'
        component={ImageSelector}
        options={{
          headerShown: true,
          title: 'Image Selector',
          }}
      />
    </Stack.Navigator>
  )
}
