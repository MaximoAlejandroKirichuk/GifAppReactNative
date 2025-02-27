import { Text, View, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Haptics from 'expo-haptics';
import { useDispatch } from 'react-redux';
import { setFavoritesGif } from '../store/slices/favoritesGif/favoritesGifSlices';
import { searchStyles } from '../styles';
export const CategoryTitle = ({ category, deleteCategory }) => {

    const dispatch = useDispatch()
    return (
        <View style={searchStyles.titleContainer}>
            <Text
                style={searchStyles.title}
                numberOfLines={1}
                adjustToSizeFit
            >

                {category}</Text>
            <View style={searchStyles.iconsContainer}>
                
                <TouchableOpacity
                    style={searchStyles.button}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                        dispatch(setFavoritesGif(category))}
                    }
                >
                    <AntDesign name="staro" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={searchStyles.button}
                    onPress={deleteCategory}
                >
                    <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>

            </View>

        </View>
    )
}

