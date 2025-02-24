import { Color } from '../global/Colors';
import { StyleSheet, Platform, StatusBar } from 'react-native';
export const globalStyles = StyleSheet.create({

    container:{
        alignItems: "center",
        backgroundColor: Color.base,
        flex: 1,
        justifyContent: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 //si es android lo que hace es darle  un padding
      },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      marginVertical: 10,
    },
    tabBar: {
        backgroundColor: 'pink',
        shadowColor: "black",
        elevation: 4,
        height: 64,
    },    imagesContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
  },
  image: {
      margin: 10,
      width: 200,
      height: 200,
  },
  subTitle: {
      fontSize: 10,
      fontWeight: "bold",
      marginVertical: 10,
  },

  loadingText: {
    fontSize: 30,
    color: Color.primary,
  }
  
  })