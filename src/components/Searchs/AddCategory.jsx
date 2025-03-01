import { TextInput, View, TouchableOpacity, Text } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useInput } from "../../hooks"
import { InputError } from "../InputError"
import { Color } from "../../global/Colors";
import { searchStyles, modalErrorStyles } from "../../styles";

export const AddCategory = () => {

    const { inputValue, onChange, onSubmit, handleModal, modalVisible } = useInput()

    return (
        <View style={searchStyles.inputContainer}>
            
            <TextInput
                style={searchStyles.input}
                placeholder="Add Category"
                onChangeText={onChange}
                value={inputValue}
                numberOfLines={2}
            />
            <TouchableOpacity
                style={searchStyles.containerPlus}
                onPress={onSubmit}
            >
                <AntDesign name="plus" size={24} color={Color.base} />
            </TouchableOpacity>


            <InputError handleModal={handleModal} modalVisible={modalVisible}>
                <Text style={modalErrorStyles.titleModal}>Error</Text>
                <Text style={modalErrorStyles.textModal} >You cannot search for a category if it has less than 2 characters</Text>
            </InputError>
        </View>
    )
}
