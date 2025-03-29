import { Text, View, ActivityIndicator, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles';
import { BottonPressable } from '../components/Botton';

import { useCategories } from '../hooks/useCategories';

export const SaveFavoritesCategory = () => {
  const navigation = useNavigation();
  



  const { categoriesGif, isLoading, isError } = useCategories()
  
  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" />
        <Text style={globalStyles.text}>Loading your favorite categories...</Text>
      </View>
    );
  }
  
  if (isError) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Error loading categories. Please try again later.</Text>
      </View>
    );
  }
  
 
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Quickly access what you like⚡️</Text>
   
      {
       (categoriesGif )
       ?
      <View style={{width: "90%", flex:1,}}>

       <FlatList  
         data={categoriesGif?.categories} 
         keyExtractor={(item) => item.name}
         numColumns={1}
         renderItem={({ item }) => (
           <View style={{ alignItems: 'center' }}>
             <BottonPressable
               label={item.name}
               onPress={() => navigation.navigate('CategorySelected', { name: item.name })}
               />
               </View>
         )}
         />
        </View>

       :  
       <>
       <Text style={globalStyles.subTitle}>You don't have any favorite categories yet.🥺</Text>
       <BottonPressable
        onPress={() => navigation.navigate('Search')}
        label='🔍Go to Search for add your favorite categories'
        />
        </>
      }

    </View>
  );
};
