import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Home } from '../screen/Home';
import { Search } from '../screen/Search';

const Stack = createNativeStackNavigator(); //crea la funcion de stack navegacion

export const Navigator = () => {
    return (
        <NavigationContainer>
            {/* es un componente de nivel superior */}
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{headerStyle: {backgroundColor: 'pink'}}}
                >
                
                <Stack.Screen
                    component={Home}
                    name='Home'
                    options={{title: 'Gif App'}}    
                />
                <Stack.Screen
                    component={Search}
                    name='Search'    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({})