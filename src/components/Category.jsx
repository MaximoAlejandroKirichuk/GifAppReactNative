import { FlatList} from 'react-native'
import { GifGrid } from './GifGrid';
import { useSelector } from 'react-redux';

export const Category = ({ categoriesId  }) => {
  return (
    <FlatList
      data={categoriesId}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <GifGrid category={item.name} cant= {10} />}
    />
  );
}

