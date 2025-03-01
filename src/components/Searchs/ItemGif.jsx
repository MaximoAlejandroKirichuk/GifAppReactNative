import { Image, Text, View } from "react-native"
import { globalStyles } from "../../styles/globalStyles"

export const ItemGif = ({ gifKey, url, title }) => {
    return (
        <View key={gifKey} style={globalStyles.imagesContainer}>
            <Image
                style={globalStyles.image}
                source={{ uri: url }}
            />
            <Text key={gifKey} style={globalStyles.subTitle}>{title}</Text>
        </View>
    )
}
