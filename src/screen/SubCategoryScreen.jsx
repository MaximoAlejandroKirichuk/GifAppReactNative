import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react';
import { FlatList, View } from 'react-native'
import { globalStyles } from '../styles';
import { BottonPressable } from '../components/Botton';

export const SubCategoryScreen = () => {
    //viene desde ItemGifHome
    const params = useRoute().params;
    const { name, subCategories } = params
    const navigation = useNavigation();

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({
        title: name,
      });
    
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
                   <BottonPressable
                     label={item.name}
                     onPress={() => navigation.navigate('SubCategorySelectedScreen', { category: item.name })}
                   />
               )}
             /> : <Text>We are having problems with our gif provider 😞</Text>
      }
    </View>
  )
}
