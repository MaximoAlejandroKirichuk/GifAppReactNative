import { useState } from "react"
import { TextInput, View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native"
import { InputError } from "./InputError"

export const AddGif = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const onChange = (text) =>{
        setInputValue(text);
    }
    
    const onSubmit = () =>{
        const newCategory = inputValue.trim();
        if(newCategory.length <= 1) return setModalVisible(true);
        console.log(newCategory);
        onAddCategory(newCategory);
        setInputValue('');
    }    

    const handleModal = () =>{
        setModalVisible(!modalVisible)
    }



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