import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { BottomTabNavigator } from './BottomTabNavigator';
import AuthStack from './AuthStack';
import { setUser } from '../store/slices/user/userSlice';
import { useDataBase } from '../hooks/useDataBase';
import { useEffect } from 'react';

export const Navigator = () => {
    const disptach = useDispatch()
    const { user } = useSelector(state => state.userSlice.value)
    const { getSession } = useDataBase();
    useEffect(() => {
        (async () => {
            try {
                const response = await getSession();
                if(response){
                    const user = response;
                    disptach(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token
                    }));
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [user])

    return (
        <NavigationContainer>{/* there is a high order component */}
            {user ? <BottomTabNavigator /> : <AuthStack />}
            <StatusBar style='dark' />
        </NavigationContainer>
    )
}


