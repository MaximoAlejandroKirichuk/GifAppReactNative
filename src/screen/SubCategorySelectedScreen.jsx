import { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useGetGifsByCategoryQuery } from '../store/apis/gifsApi';
import { setGifs } from '../store/slices/gifs/gifsSlices';
import { CategoryTitle } from '../components/CategoryTitle';
import { Color } from '../global/Colors';
import { ItemGif } from '../components/Searchs/ItemGif';
import { globalStyles } from '../styles';


export const SubCategorySelectedScreen = () => {
  const params = useRoute().params;
  const { category } = params
  const navigation = useNavigation();
  const { data = [], isError, isLoading, isFetching } = useGetGifsByCategoryQuery({ category, cant:20 })
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      navigation.setOptions({
        title: category,
      });
      //TODO: ACA HAGO LA PETICION PARA LLEVAR A SUBCATEGORY SELECTED SCREEN
      
    }
  }, [category, navigation]);


  useEffect(() => {
    dispatch(setGifs(data))
  }, [data, dispatch])

 
  


  if(isFetching){
    return (
      <View style={{ flex:1, height:"500", justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size={'large'} color={Color.buttons} />
      </View>
    )
  }
  return (
    <View style={globalStyles.container}>
      {isLoading && <ActivityIndicator size="large"  />}

     

      {isError || data.length === 0 ? (
        <Text style={globalStyles.title}>That category was not found</Text>
      ) : (
        <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
          data={data}
          key={`flatlist-${2}`} 
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemGif
              url={item.url}
              title={item.title}
            />
          )}
        />
      )}
    </View>
  )
}


