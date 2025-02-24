import { TextInput, View, TouchableOpacity, Text,  StyleSheet } from "react-native"
import { useInput } from "../hooks"
import { InputError } from "./InputError"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Color } from "../global/Colors";
import { addGifStyles } from "../styles/addGifStyles";

export const AddGif = ({onAddCategory}) => {
    const {inputValue, onChange, onSubmit,handleModal,modalVisible} = useInput({onAddCategory})

    return (
    <View style={addGifStyles.inputContainer}>
        <TextInput
            style={addGifStyles.input}
            placeholder="Add Category"
            onChangeText={onChange}
            value={inputValue}
            numberOfLines={2}
            
        />
        <TouchableOpacity 
            style={addGifStyles.containerPlus}
            onPress={onSubmit} 
            >
            <AntDesign name="plus" size={24} color={Color.base} />
        </TouchableOpacity>
        
        <InputError handleModal={handleModal} modalVisible={modalVisible}/>
    </View>
  )
}
