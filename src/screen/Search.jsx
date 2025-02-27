
import { SafeAreaView, View } from 'react-native';
import { Category, AddGif } from '../components';
import { globalStyles, searchStyles } from '../styles';
import { useSelector } from 'react-redux';


export const Search = () => {

  const {categories} = useSelector(state => state.categories)

  return (
    <SafeAreaView style={globalStyles.container}>
      
      <AddGif/>
      
      <View style={searchStyles.categoryList}>
        <Category
          categoriesId={categories}
        />
      </View>


    </SafeAreaView>
  )

}
