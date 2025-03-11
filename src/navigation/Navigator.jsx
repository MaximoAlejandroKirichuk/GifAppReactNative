import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { BottomTabNavigator } from './BottomTabNavigator';
import AuthStack from './AuthStack';

export const Navigator = () => {

    const { user } = useSelector(state => state.userSlice.value)

    return (
        <NavigationContainer>{/* there is a high order component */}
            {user ? <BottomTabNavigator /> : <AuthStack />}
            <StatusBar style='dark' />
        </NavigationContainer>
    )
}


