import { Image, Text, View } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export const HomeItem = ({ key, url, title }) => {
    return (
        <View key={key} style={globalStyles.imagesContainer}>
            <Image
                style={globalStyles.image}
                source={{ uri: url }}
            />
            <Text key={key} style={globalStyles.subTitle}>{title}</Text>
        </View>
    )
}
