import { StyleSheet, Button, View, Platform, SafeAreaView } from 'react-native';
import { AddGif } from '../components/AddGif';
import { useState } from 'react';
import { Category } from '../components/Category';
import { Color } from '../global/Colors';

export const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(category => newCategory === category)) return;
    setCategories([{ name: newCategory }, ...categories])
  }

  return (
    <SafeAreaView style = {styles.container}>
      <AddGif
        onAddCategory={onAddCategory}
      />
      <Category
        categoriesId={categories}
      />

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  container:{
      alignItems: "center",
      backgroundColor: Color.base,
      flex: 1,
      justifyContent: "center",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 //si es android lo que hace es darle  un padding
    },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },


})