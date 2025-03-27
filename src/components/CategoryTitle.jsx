import { Text, View, TouchableOpacity, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Haptics from 'expo-haptics';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFavoriteGif } from '../store/slices/gifs/gifsSlices.js'
import { searchStyles } from '../styles';
import { deleteCategory, setFavoriteCategories } from '../store/slices/categoriesGif';
import { useGetFavoriteCategoriesQuery, usePostFavoriteCategoriesMutation } from '../services/userService.js';
import { useCategories } from '../hooks/useCategories.js';


export const CategoryTitle = ({ category }) => {
    const { gifs } = useSelector(state => state.gifs)
    const dispatch = useDispatch()
    const {handleSaveCategories} = useCategories()
  
 


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
                <Pressable
                    style={searchStyles.button}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                        dispatch(setFavoriteCategories(category))
                        dispatch(setCategoryFavoriteGif(gifs));
                        handleSaveCategories()
                        
                    }}
                >
                    <AntDesign name="staro" size={24} color="black" />
                </Pressable>
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

