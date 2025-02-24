import { StyleSheet } from "react-native"
import { Color } from "../global/Colors"


export const addGifStyles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.white,
        marginVertical: 8,  
        padding: 8,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Sombra en Android
      },
      input: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: Color.white,      
        borderRadius: 8,
        height: 40,
      },
      containerPlus: {
        marginLeft: 10,
        backgroundColor: Color.buttons,
        borderRadius: 8,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      },
})