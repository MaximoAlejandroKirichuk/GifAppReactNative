import { TextInput, View, TouchableOpacity, Text,  StyleSheet } from "react-native"
import { useInput } from "../hooks"
import { InputError } from "./InputError"

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
        <TouchableOpacity onPress={onSubmit} >
            <Text>Add</Text>
        </TouchableOpacity>
        
        <InputError handleModal={handleModal} modalVisible={modalVisible}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginVertical: 0,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        fontSize: 24,
        width: 300,
        textAlign: "center",
    }
})