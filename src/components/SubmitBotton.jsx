import { Pressable, StyleSheet, Text } from "react-native";
import { Color } from "../global/Colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.base,
    justifyContent: "center",
    alignItems: "center",
    margin:12,
    borderRadius: 10,
    padding: 8,
    width: "60%",
  },
  text: {
    color: Color.buttons,
    fontSize: 22,
  },
});