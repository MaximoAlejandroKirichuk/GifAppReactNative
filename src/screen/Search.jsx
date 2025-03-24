
import { SafeAreaView, View } from 'react-native';
import { Gifs, AddCategory } from '../components';
import { globalStyles, searchStyles } from '../styles';
import { useSelector } from 'react-redux';


export const Search = () => {
  
  const {categories} = useSelector(state => state.categories)

  return (
    <SafeAreaView style={globalStyles.container}>
      
      <AddCategory/>
      
      <View style={searchStyles.categoryList}>
        <Gifs
          categoriesId={categories}
        />
      </View>
      
    </SafeAreaView>
  )

}
