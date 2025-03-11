import {  View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Home, Search, SaveFavoritesCategory } from "../screen";
import { Color } from "../global/Colors";
import { globalStyles } from "../styles/globalStyles";
import { HomeStack } from "./HomeStack";  // Asegúrate de importar HomeStack

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: globalStyles.tabBar,
                tabBarShowLabel: false //hace que se borren las label
            }}
            initialRouteName='HOME'
        >
            <Tab.Screen
                name='SaveFavoritesCategory'
                component={SaveFavoritesCategory}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="staro"
                                size={24}
                                color={focused ? Color.buttons : Color.gray}
                            />
                        </View>
                    )
                }}
            />

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
                    )
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
        </Tab.Navigator>
    )
}
