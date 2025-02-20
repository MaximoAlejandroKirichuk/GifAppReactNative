import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, SaveFavoritesCategory } from "../screen";
import { StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Color } from "../global/Colors";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle:styles.tabBar,
            tabBarShowLabel: false //hace que se borren las label
        }}
    >
        <Tab.Screen 
            name='SaveFavoritesCategory' 
            component={SaveFavoritesCategory}
            options={{
                tabBarIcon:({focused} ) => (
                    <View>
                        <AntDesign 
                            name="staro" 
                            size={24} 
                            color={focused ? Color.gray : Color.base} 
                        />
                    </View>
                )
            }}
        />
        
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarIcon: ({focused}) =>( 
                    <View>
                        <AntDesign 
                            name="home" 
                            size={24} 
                            color={focused ? Color.gray : Color.base} 
                        />
                    </View>
                )
            }}
        />
        
        <Tab.Screen 
            name='Search' 
            component={Search}
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <AntDesign 
                            name="search1" 
                            size={24}
                            color={focused ? Color.gray : Color.base} 
                        />
                    </View>
                )
            }}
        />
    </Tab.Navigator>
)
}
const styles = StyleSheet.create( {
    tabBar: {
        backgroundColor: 'pink',
        shadowColor: "black",
        elevation: 4,
        height: 64,
      },
})
