import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SaveFavoritesCategory } from '../screen';
import { CategorySelected } from '../screen/CategorySelected';

const Stack = createNativeStackNavigator();

export const SaveFavoritesCategoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SaveFavoritesCategory'
      screenOptions={{
        headerShown: true // Esto oculta el header de todas las pantallas en este stack por defecto
      }}
    >
      <Stack.Screen
        name='SaveFavoritesCategory'
        component={SaveFavoritesCategory}
        
      />
      <Stack.Screen
        name='CategorySelected'
        component={CategorySelected}
        options={{
          headerShown: true // Solo el header de esta pantalla será visible
        }}
      />
    </Stack.Navigator>
  )
}
