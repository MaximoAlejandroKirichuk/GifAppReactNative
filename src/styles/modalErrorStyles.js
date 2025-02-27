import { StyleSheet } from "react-native";
import { Color } from "../global/Colors"
export const modalErrorStyles = StyleSheet.create({
    modalContainer: {
            backgroundColor: 'pink',
            width: "80%",
            marginHorizontal: "10%",
            marginTop: "50%",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: 20,
            paddingVertical: 20,
            borderRadius: 24,
            borderColor: Color.buttons,
            borderWidth: 1,
        },
        btnContainer: {
            flexDirection: "row",
            backgroundColor: Color.buttons,
            padding: 10,
            borderRadius: 10,
        },
        titleModal: {
            textAlign: 'center',
            fontWeight: "bold",
            fontSize: 32,
            fontStyle: "italic",
            marginVertical: 8
        },
        textModal:{
            fontSize: 24
        }
})