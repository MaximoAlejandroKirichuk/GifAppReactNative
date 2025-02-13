
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screen/Home.jsx';
import { Color } from './src/global/Colors.jsx';

export default function App() {

  return (
      <View style={styles.container}>
        <Home />
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
      alignItems: "center",
      backgroundColor: Color.base,
      flex: 1,
      justifyContent: "center",
      marginVertical:70,
    },
  
})

