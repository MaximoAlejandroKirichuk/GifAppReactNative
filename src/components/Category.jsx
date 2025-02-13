import { StyleSheet, FlatList, View, Pressable } from 'react-native'
import { GifGrid } from './GifGrid';
export const Category = ({categoriesId}) => {
  return (
    <View style={styles.productsContainer}>
        <FlatList
            style={styles.flatlist}
            data={categoriesId}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <GifGrid category={item.name} />}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    productsContainer: {
        width: "90%",
    },

})