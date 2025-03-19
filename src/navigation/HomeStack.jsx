import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screen/Home';
import { CategorySelected } from '../screen/CategorySelected';

const Stack = createNativeStackNavigator(); 

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:false }} //evita la anidacion de cabeceras
        >

            <Stack.Screen
                component={Home}
                name='Home'
                
            />
            <Stack.Screen 
                name="CategorySelected" 
                component={CategorySelected}  
                />
        </Stack.Navigator>
    )
}
