
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AddGif } from './src/components/AddGif';
import { useState } from 'react';
import { GifGrid } from './src/components/GifGrid';

export default function App() {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) =>{
    if(categories.includes(category => newCategory === category)) return;
    setCategories([ { name: newCategory },...categories])
  }
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Gif App</Text>
        <AddGif
          onAddCategory= {onAddCategory}
        />

        <View style={styles.productsContainer}>
          <FlatList
            style={styles.flatlist}
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({item}) => <GifGrid category={item.name} />}
          />
        </View>

      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    marginVertical:70,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productsContainer: {
    width: "90%",
  },
  product: {
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 1,
    paddingVertical: 15,
    width: "100%",

  },

  productText: {
    fontSize: 10,
    fontWeight: "bold", 
  },  
});
