import { useState } from 'react'
import { View, Text, StyleSheet,Pressable } from 'react-native'
import { Color } from '../global/Colors'
import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitBotton'


const Login = ({navigation}) => {
  const [initialValue, setInitialValue] = useState({
    email: 'hola',
    password:'',
    confirmPassword: '',
    errorMail: '',
    errorPassword: '',
    errorConfirmPassword: '',
  })
  const {confirmPassword, email, errorConfirmPassword , errorMail , errorPassword, password} = initialValue;
  
  const handleChange = ( field, value) => {
    setInitialValue(prevState => ({...prevState,[field]: value}))//EN FIELD ENTRA AL CAMPO QUE SE MANDA y modifica con el value que le llega
  }

  const onSubmit = () => {
    console.log("Submitted values:", initialValue);
    // Aquí podrías agregar validaciones y lógica para enviar los datos
  };


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <InputForm label="Email" onChange={text => handleChange("email", text)} error={initialValue.errorMail} />
        <InputForm label="Password" onChange={text => handleChange("password", text)} error={initialValue.errorPassword} isSecure />

        <SubmitButton onPress={onSubmit} title="Send" />

        <Text style={styles.sub}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.base,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sub: {
    textAlign: 'center',
    marginTop: 10,
  },
  subLink: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 5,
  },
});

export default Login;
