import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyProfile } from '../screen/MyProfile';
import { ImageSelector } from '../screen/ImageSelector';

const Stack = createNativeStackNavigator();

export const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='MyProfile'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='MyProfile'
        component={MyProfile}
      />
      <Stack.Screen
        name='ImageSelector'
        component={ImageSelector}
      />
    </Stack.Navigator>
  )
}
