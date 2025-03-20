import { StyleSheet, Text, Pressable } from 'react-native'
import { Color } from '../global/Colors';

export const BottonPressable = ({ label, onPress, color }) => {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>

        </Pressable>
    )
}
const styles = StyleSheet.create({
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
  },
  text: {
    color: Color.gray,
    fontSize: 18,
  },
});
