import { StyleSheet, FlatList} from 'react-native'
import { GifGrid } from './GifGrid';
export const Category = ({ categoriesId }) => {
  return (
    <FlatList
      style={styles.flatlist}
      data={categoriesId}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <GifGrid category={item.name} />}
    />
  );
}

const styles = StyleSheet.create({


})