import { Image, Text, Pressable, View } from "react-native"
import { homeStyles } from "../styles"
import * as Haptics from 'expo-haptics';

export const ItemGif = ({ imgKey, url, title }) => {
    
    return (
        <>
            <Pressable key={imgKey}
                style={({ pressed }) => ({
                    ...homeStyles.imageContainer,
                    opacity: pressed ? 0.8 : 1,
                })}
                onPress={() => {
                    Haptics.impactAsync()
                }}
            >
                <View style={homeStyles.overlay} >
                    <Image style={homeStyles.image} source={{ uri: url }} />
                    <View style={homeStyles.textContainer}>
                        <Text key={imgKey} style={homeStyles.imageText}>{title}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
}
