import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react';
import { FlatList, View } from 'react-native'
import { globalStyles } from '../styles';
import { BottonPressable } from '../components/Botton';

export const SubCategoryScreen = () => {
    const params = useRoute().params;
    const { name, subCategories } = params
    const navigation = useNavigation();

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: name,
      });
      //TODO: ACA HAGO LA PETICION PARA LLEVAR A SUBCATEGORY SELECTED SCREEN
      console.log(subCategories);
    }
  }, [params, navigation]);


  return (
    <View style={globalStyles.container}>

      {
             name 
             ?
      
             <FlatList
               data={subCategories}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                 <View>
                   <BottonPressable
                     label={item.name}
                     onPress={() => navigation.navigate('SubCategorySelectedScreen', { category: item.name })}
                   />
                     
                   
                 </View>
               )}
             /> : null
      }
    </View>
  )
}
