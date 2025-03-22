import { View, Text } from 'react-native'
import { searchStyles, globalStyles } from '../styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

export const CategorySelected = () => {
  //TODO RECIBO CATEGORIA Y MUESTRO PRIMERO 10 desde fav || home
  const params = useRoute().params;
  const navigation = useNavigation();
  
  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: params.name,
      });
      console.log('params: ', params.name);
    }
  }, [params, navigation]);
  
  return (
    <View style={globalStyles.container}>
      <View style={searchStyles.categoryList}>
        <Text style={globalStyles.title}>Cat selecter: {params.name}</Text>
      </View>

    </View>
  );
}
