
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Home } from './src/screen/Home.jsx';
import { Color } from './src/global/Colors.jsx';


export default function App() {

  return (
     <SafeAreaView style={styles.container}>
        <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: Color.base,
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 //si es android lo que hace es darle  un padding
  },

  
})

