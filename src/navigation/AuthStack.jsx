import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/Login';
import Signup from '../screen/Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }} //evita la anidacion de cabeceras
        >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack    