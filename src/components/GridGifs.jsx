import { FlatList,  View, Text } from 'react-native'
import {CategoryGifs} from './CategoryGifs'
import {  homeStyles } from '../styles'


export const GridGifs = ({ gifs, children, favorites }) => {
    // ToDo: estado global con los items favoritos que los mande en un componente aparte.
    
    return (
        <View style={homeStyles.containerTrending}>
           {children}
            <FlatList
                data={gifs}
                numColumns={2}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <CategoryGifs category={item.name} cant={1}  /> }
            >

            </FlatList>
        </View>
    )
}
