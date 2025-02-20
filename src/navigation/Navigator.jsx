import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';

import { BottomTabNavigator } from './BottomTabNavigator';

export const Navigator = () => {
    return (
        <NavigationContainer>{/* es un componente de nivel superior */}
            {/* <HomeStack/> */}
            <BottomTabNavigator/>
        </NavigationContainer>
    )
}


