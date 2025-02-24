import { FlatList} from 'react-native'
import HomeCategory from './HomeCategory'

const HomeGrid = ({gifs}) => {
    return (
        <FlatList
            data={gifs}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => <HomeCategory category={item.name} cant= {1} />}
        >
            <HomeCategory />
        </FlatList>
    )
}

export default HomeGrid