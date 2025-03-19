import { View, Text, SafeAreaView } from 'react-native'
import { GridGifs } from '../components/GridGifs';
import { searchStyles, globalStyles } from '../styles';

export const CategorySelected = () => {
  //TODO RECIBO CATEGORIA Y MUESTRO PRIMERO 10 desde fav || home

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={searchStyles.categoryList}>
        <Text style={globalStyles.title}>Cat selecter</Text>
      </View>

    </SafeAreaView>
  );
};
