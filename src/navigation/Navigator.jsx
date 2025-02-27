import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { HomeStack } from './HomeStack';
import { BottomTabNavigator } from './BottomTabNavigator';

export const Navigator = () => {
    
    return (
        <NavigationContainer>{/* es un componente de nivel superior */}
            <Provider store={store}>
            {/* <HomeStack/> */}
            
            <BottomTabNavigator/>
            <StatusBar style='dark'></StatusBar>
            
            </Provider>
        </NavigationContainer>
    )
}


