import { FlatList, Text, View } from 'react-native'
import HomeCategory from './HomeCategory'
import { globalStyles, homeStyles } from '../styles'

const HomeGrid = ({ gifs }) => {
    return (
        <View style={homeStyles.containerTrending}>
            <Text style={globalStyles.title}>Trending Topics of Gif</Text>
            <FlatList
                data={gifs}
                numColumns={2}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <HomeCategory category={item.name} cant={1} />}
            >

            </FlatList>
        </View>
    )
}

export default HomeGrid