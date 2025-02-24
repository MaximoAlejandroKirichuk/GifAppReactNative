import { Image, Text, Pressable } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export const HomeItem = ({ key, url, title }) => {
    return (
        <Pressable key={key} style={globalStyles.imagesContainer}>
            <Image
                style={globalStyles.image}
                source={{ uri: url }}
            />
            <Text key={key} style={globalStyles.subTitle}>{title}</Text>
        </Pressable>
    )
}
