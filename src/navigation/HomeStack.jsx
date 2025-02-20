import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screen/Home';
import { Search } from '../screen/Search';

const Stack = createNativeStackNavigator(); //crea la funcion de stack navegacion

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown:false }} //evita la anidacion de cabeceras
        >

            <Stack.Screen
                component={Home}
                name='Home'
                options={{ title: 'Gif App' }}
            />
            <Stack.Screen
                component={Search}
                name='Search'
            />
        </Stack.Navigator>
    )
}
