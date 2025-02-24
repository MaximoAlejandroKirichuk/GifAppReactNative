import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Color } from '../global/Colors';

export const CategoryTitle = ({ category, deleteCategory }) => {

    return (
        <View style={styles.titleContainer}>
            <Text
                style={styles.title}
                numberOfLines={1}
                adjustToSizeFit
            >

                {category}</Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('agregado a fav', category)}
                >
                    <AntDesign name="staro" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={deleteCategory}
                >
                    <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: Color.white,
        borderRadius: 10,
        padding:10,
        gap: 50
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10,
    },

    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16
    },

    button: {
        justifyContent: 'center',
    }
})