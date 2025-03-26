import { Color } from "../global/Colors";
import { StyleSheet } from "react-native";

export const AuthStyles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.base,
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      },
      title: {
        fontFamily: 'IndieFlower',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      sub: {
        fontFamily: 'CaveatBrush',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
      },
      subLink: {
        textAlign: 'center',
        color: 'blue',
        marginTop: 5,
      },
})