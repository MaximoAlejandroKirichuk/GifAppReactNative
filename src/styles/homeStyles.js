import { StyleSheet } from "react-native";
import { Color } from "../global/Colors";


export const homeStyles = StyleSheet.create({
  containerTrending:{
    marginVertical:10
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  
  image: {
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 10,

  },
  textContainer: {

    bottom: '50%', // Ajusta la posición del texto en la imagen
    left: 0,
    right: 0,
    alignItems: "center",
  },
  imageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
