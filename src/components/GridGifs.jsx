import { FlatList, View } from 'react-native'
import { CategoryGifs } from './CategoryGifs'
import { homeStyles } from '../styles'


export const GridGifs = ({ gifs, children }) => {

    return (
        <View style={homeStyles.containerTrending}>
            {children ? children : null}
            <FlatList
                data={gifs}
                numColumns={2}
                keyExtractor={(item) => item.id }
                renderItem={({ item }) => <CategoryGifs category={item.name} cant={1} subcategories={item.subcategories}/>}
            />
        </View>
    )
}
