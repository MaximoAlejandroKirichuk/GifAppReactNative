import { Modal, Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { Color } from "../global/Colors"
import AntDesign from '@expo/vector-icons/AntDesign';
export const InputError = ({ handleModal, modalVisible }) => {

    return (
        <Modal visible={modalVisible} animationType='slide' transparent={true}>
            <View style={styles.modalContainer}>
                <View >
                    <Text style={styles.titleModal}>Error</Text>
                    <Text style={styles.textModal} >You cannot search for a category if it has less than 2 characters</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handleModal}

                >
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'pink',
        width: "80%",
        marginHorizontal: "10%",
        marginTop: "50%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 20,
        paddingVertical: 20,
        borderRadius: 24,
        borderColor: Color.buttons,
        borderWidth: 1,
    },
    btnContainer: {
        flexDirection: "row",
    },
    titleModal: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 32,
        fontStyle: "italic",
        marginVertical: 8
    },
    textModal:{
        fontSize: 24
    }
})