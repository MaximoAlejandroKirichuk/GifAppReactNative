import { Color } from "../global/Colors";
import { StyleSheet, Platform, StatusBar } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.base,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //si es android lo que hace es darle  un padding
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tabBar: {
    backgroundColor: "pink",
    shadowColor: "black",
    elevation: 4,
    height: 64,
  },
  imagesContainer: {
    flexDirection: 'column',
    justifyContent:'center',
    marginVertical: 10,
    marginHorizontal:8
  },
  image: {
    flex:1,
    width: 170,
    height: 150,
    borderRadius: 10,
  },
  imageGif:{
    margin: 10,
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  subTitle: {
    textAlign: "center",  
    fontSize: 10,
    fontWeight: "bold",
    marginVertical: 10,
  },
  

  loadingText: {
    fontSize: 30,
    color: Color.primary,
  },
});
