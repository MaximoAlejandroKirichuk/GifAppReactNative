import { FlatList} from 'react-native'
import { GifGrid } from './GifGrid';


export const Gifs = ({ categoriesId  }) => {
  return (
    <FlatList
      data={categoriesId}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <GifGrid category={item.name} cant= {10} />}
    />
  );
}

