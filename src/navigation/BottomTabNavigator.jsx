import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../screen";
import { HomeStack } from "./HomeStack";

import AntDesign from '@expo/vector-icons/AntDesign';
import { globalStyles } from "../styles/globalStyles";
import { Color } from "../global/Colors";
import { MyProfileStackNavigator } from "./MyProfileStackNavigator";
import { SaveFavoritesCategoryStack } from "./SaveFavoritesCategoriesStack";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: globalStyles.tabBar,
                tabBarShowLabel: false //delete label
            }}
            initialRouteName='HOME'
        >

            <Tab.Screen
                name='HOME'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="home"
                                size={24}
                                color={focused ? Color.buttons : Color.gray}
                            />
                        </View>
                    ),
                    headerShown: false,  // Aquí ocultas el header para este Tab específico
                }}
            />
            

            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="search1"
                                size={24}
                                color={focused ? Color.buttons : Color.gray}
                            />
                        </View>
                    )
                }}
            />


            <Tab.Screen
                name='SaveFavoritesCategoryStack'
                component={SaveFavoritesCategoryStack}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="staro"
                                size={24}
                                color={focused ? Color.buttons : Color.gray}
                            />
                        </View>
                    ),
                    headerShown: false,  // Aquí ocultas el header para este Tab específico
                }}
            />



            

            <Tab.Screen
                name='My Profile'
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="user"
                                size={24}
                                color={focused ? Color.buttons : Color.gray}
                            />
                        </View>
                    ),
                    headerShown: false,  // Aquí ocultas el header para este Tab específico

                }}
                
            />
        </Tab.Navigator>
    )
}
