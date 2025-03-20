import { StyleSheet } from "react-native";
import { Color } from "../global/Colors";

export const myProfileStyles = StyleSheet.create({
    button: {
        backgroundColor: Color.buttons,
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
        borderRadius: 12,
        padding: 12,
        width: "70%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 90,
        borderColor: Color.gray,
      },
      
      text: {
        color: Color.gray,
        fontSize: 16,
      },
      image: {
        marginVertical: 10,
        width: 200,
        height: 200,
        borderRadius: 20,
        borderColor: Color.buttons,
        borderWidth: 2,
        padding: 0.5,
      },

      noPhotoContainer: {
        marginVertical: 10,
        borderRadius: 20,
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: Color.buttons,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      
})