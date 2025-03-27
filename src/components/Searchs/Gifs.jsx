import { FlatList, Text} from 'react-native'
import { GifGrid } from './GifGrid';


export const Gifs = ({ categoriesId  }) => {
  return (
    <FlatList
      data={categoriesId}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <GifGrid category={item.name} cant= {20} />}
      
    />
  );

}

