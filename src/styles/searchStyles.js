import { StyleSheet } from "react-native"
import { Color } from "../global/Colors"


export const searchStyles = StyleSheet.create({
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
        backgroundColor: Color.buttons,
        borderRadius: 8,
        padding: 10,
      },
      categoryList:{
        flex:1,
        width: '90%',
      },

      //category title
      titleContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: Color.white,
        borderRadius: 10,
        padding:10,
        gap: 56,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10,
    },

    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap:24
    },

    button: {
        justifyContent: 'center',
    }
})