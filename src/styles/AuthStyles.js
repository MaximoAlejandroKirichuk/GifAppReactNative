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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      sub: {
        textAlign: 'center',
        marginTop: 10,
      },
      subLink: {
        textAlign: 'center',
        color: 'blue',
        marginTop: 5,
      },
})