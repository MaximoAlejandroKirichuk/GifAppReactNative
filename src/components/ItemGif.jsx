import { Image, StyleSheet, Text, View, Pressable, Button } from "react-native"


export const ItemGif = ({ key, url, title, category, deleteCategory }) => {
    return (
        <>
            
            <View key={key} style={styles.imagesContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
                <Text key={key} style={styles.subTitle}>{title}</Text>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        margin: 10,
        width: 200,
        height: 200,
    },
    subTitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginVertical: 10,
    }

})