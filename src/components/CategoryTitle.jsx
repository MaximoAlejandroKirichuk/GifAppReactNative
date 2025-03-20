import { Text, View, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Haptics from 'expo-haptics';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFavoriteGif } from '../store/slices/gifs/gifsSlices.js'
import { searchStyles } from '../styles';
import { deleteCategory, setFavoriteCategories } from '../store/slices/categoriesGif';


export const CategoryTitle = ({ category }) => {
    const { gifs } = useSelector(state => state.gifs)
    const dispatch = useDispatch()

    return (
        <View style={searchStyles.titleContainer}>
            <Text
                style={searchStyles.title}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {category}
            </Text>
            <View style={searchStyles.iconsContainer}>
                <TouchableOpacity
                    style={searchStyles.button}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                        console.log('desde category', category) 
                        dispatch(setFavoriteCategories(category))
                        dispatch(setCategoryFavoriteGif(gifs));
                    }}
                >
                    <AntDesign name="staro" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={searchStyles.button}
                    onPress={() => dispatch(deleteCategory(category))}
                >
                    <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>

            </View>

        </View>
    )
}

