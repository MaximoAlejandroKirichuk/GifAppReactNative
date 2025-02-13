import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import { useImages } from '../hooks'

export const CategoryTitle = ({category ,deleteCategory}) => {

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{category}</Text>
            <Pressable style={styles.button}>
                <Button
                    title="Borrar"
                    onPress={() => deleteCategory(category)}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
      },
      title: {
        fontSize: 35,
        fontWeight: "bold",
        marginVertical: 10,
      },
    
      button: {
        justifyContent: 'center',
      }
})