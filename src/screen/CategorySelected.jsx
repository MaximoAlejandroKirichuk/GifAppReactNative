import { View, Text, SafeAreaView } from 'react-native'
import { GridGifs } from '../components/GridGifs';
import { searchStyles, globalStyles } from '../styles';

export const CategorySelected = ({ route }) => {
  const { subcategories, title } = route.params;
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={searchStyles.categoryList}>
        {
          <GridGifs gifs={subcategories} >
            <Text style={globalStyles.title}>{title}</Text>
          </GridGifs>

        }
      </View>

    </SafeAreaView>
  );
};
