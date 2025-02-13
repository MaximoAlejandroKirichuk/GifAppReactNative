import { StyleSheet, Text} from 'react-native';
import { AddGif } from '../components/AddGif';
import { useState } from 'react';
import { Category } from '../components/Category';

export const Home = () =>{
      const [categories, setCategories] = useState([])
    
      const onAddCategory = (newCategory) =>{
        if(categories.includes(category => newCategory === category)) return;
        setCategories([ { name: newCategory },...categories])
      }

    return (
        <> 
            <Text style={styles.title}>Gif App</Text>
            <AddGif
                onAddCategory= {onAddCategory}
            />
    
            
            <Category 
              categoriesId={categories}
            />
        </>

    )
  
}

const styles = StyleSheet.create({
    
      title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
      },
      
      
})