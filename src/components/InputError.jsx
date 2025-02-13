
import { Modal, Text ,StyleSheet, View, Button } from "react-native"
export const InputError = ({handleModal, modalVisible}) => {

    return (
        <Modal visible={modalVisible} animationType='slide' transparent={true}>
            <View style={styles.modalContainer}>
                <View >
                    <Text style={styles.textModal}>Error</Text>
                </View>
                <View >
                    <Text style={styles.textModal} >You cannot search for a category if it has less than 2 characters</Text>
                </View>
                <View>
                    <Button style={styles.btnExit} onPress={handleModal} title="Exit"></Button>
                </View>
            </View>
        </Modal>
    
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        width: "80%",
        marginHorizontal: "10%",
        marginTop: "50%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 20,
        paddingVertical: 20,
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 1,
        },  
    btnContainer: {
        flexDirection: "row",
        gap: 20,
        color: "white",
        },
    btnExit:{
        fontSize: 40,
        backgroundColor: "black",
        fontWeight: "red",
        },
    textModal: {
        fontWeight: "bold",
        fontSize: 24,
        fontStyle: "italic",
    },
})