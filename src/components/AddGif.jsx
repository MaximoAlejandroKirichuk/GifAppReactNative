import { TextInput, View, TouchableOpacity, Text,  StyleSheet } from "react-native"
import { useInput } from "../hooks"
import { InputError } from "./InputError"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Color } from "../global/Colors";

export const AddGif = ({onAddCategory}) => {
    const {inputValue, onChange, onSubmit,handleModal,modalVisible} = useInput({onAddCategory})

    return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Add Category"
            onChangeText={onChange}
            value={inputValue}
        />
        <TouchableOpacity 
            style={styles.containerPlus}
            onPress={onSubmit} 
            >
            <AntDesign name="plus" size={24} color={Color.base} />
        </TouchableOpacity>
        
        <InputError handleModal={handleModal} modalVisible={modalVisible}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
  });