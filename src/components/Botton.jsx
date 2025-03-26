import { StyleSheet, Text, Pressable } from 'react-native'
import { Color } from '../global/Colors';
import { globalStyles } from '../styles';

export const BottonPressable = ({ label, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                    ...styles.button,
                    opacity: pressed ? 0.8 : 1,
                  })}
            onPress={onPress}
        >
            <Text numberOfLines={1} adjustsFontSizeToFit style={globalStyles.subTitle}>{label}</Text>

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

});
