
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Category, AddGif } from '../components';
import { globalStyles } from '../styles/globalStyles';


export const Search = ({ navigation }) => {
  //este estado tendra todas las categorias buscadas
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(category => newCategory === category)) return;
    setCategories([{ name: newCategory }, ...categories])
  }

  return (
    <SafeAreaView style = {globalStyles.container}>
      <AddGif
        onAddCategory={onAddCategory}
      />
      <Category
        categoriesId={categories}
      />

    </SafeAreaView>
  )

}
