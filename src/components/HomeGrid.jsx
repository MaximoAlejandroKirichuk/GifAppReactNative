import { FlatList} from 'react-native'
import HomeCategory from './HomeCategory'

const HomeGrid = ({gifs}) => {
    return (
        <FlatList
            data={gifs}
            numColumns={2}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => <HomeCategory category={item.name} cant= {1} />}
        >

        </FlatList>
    )
}

export default HomeGrid