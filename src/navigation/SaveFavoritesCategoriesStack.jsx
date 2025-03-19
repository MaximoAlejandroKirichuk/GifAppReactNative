import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SaveFavoritesCategory } from '../screen';
import { CategorySelected } from '../screen/CategorySelected';

const Stack = createNativeStackNavigator();

export const SaveFavoritesCategoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SaveFavoritesCategory'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='SaveFavoritesCategory'
        component={SaveFavoritesCategory}
      />
      <Stack.Screen
        name='CategorySelected'
        component={CategorySelected}
      />
    </Stack.Navigator>
  )
}
