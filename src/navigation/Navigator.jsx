import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';

import { BottomTabNavigator } from './BottomTabNavigator';
import { StatusBar } from 'expo-status-bar';

export const Navigator = () => {
    return (
        <NavigationContainer>{/* es un componente de nivel superior */}
            {/* <HomeStack/> */}
            <BottomTabNavigator/>
            <StatusBar style='dark'></StatusBar>
        </NavigationContainer>
    )
}


