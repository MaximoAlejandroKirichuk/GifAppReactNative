import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screen/Home';
import { SubCategoryScreen } from '../screen/SubCategoryScreen';
import { SubCategorySelectedScreen } from '../screen/SubCategorySelectedScreen';

const Stack = createNativeStackNavigator(); 

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:true }} //evita la anidacion de cabeceras
        >

            <Stack.Screen
                component={Home}
                name='Home'
                
            />
            <Stack.Screen 
                name="SubCategoryScreen" 
                component={SubCategoryScreen}  
            />
            <Stack.Screen 
                name="SubCategorySelectedScreen" 
                component={SubCategorySelectedScreen}  
            />
        </Stack.Navigator>
    )
}
