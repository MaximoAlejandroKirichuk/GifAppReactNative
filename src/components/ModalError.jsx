import { Modal, View, Pressable } from "react-native"
import * as Haptics from 'expo-haptics';
import AntDesign from '@expo/vector-icons/AntDesign';
import { modalErrorStyles } from '../styles/modalErrorStyles'

export const ModalError = ({ handleModal, modalVisible, children }) => {

    return (
        <Modal visible={modalVisible} animationType='slide' transparent={true}>


            {
                modalVisible
                    ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
                    : null
            }
            <View style={modalErrorStyles.modalContainer}>
                <View >
                    {
                        /* <Text style={modalErrorStyles.titleModal}>TITLE</Text>
                            <Text style={modalErrorStyles.textModal}> Description </Text> 
                        */
                    }
                    {children}
                </View>

                <Pressable
                    style={({ pressed }) => ({
                        ...modalErrorStyles.btnContainer,
                        opacity: pressed ? 0.6 : 1
                    })}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
                        handleModal()
                    }}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            </View>
        </Modal>

    )
}


