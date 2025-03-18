import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitBotton'

import { setUser } from '../store/slices/user/userSlice'
import { AuthStyles } from '../styles/AuthStyles'
import { useSignInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {
  const [initialValue, setInitialValue] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignInMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(setUser({
        email: result.data.email,
        token: result.data.idToken,
      }));
    } else if (result.isError) {
      //TODO:  MODAL ERROR EXPECIFICO
      console.log("Sign-up failed: ", result.error); // Verificar si hay error
    }
   
  }, [result]);


  const handleChange = (field, value) => {
    setInitialValue(prevState => ({ ...prevState, [field]: value }))//EN FIELD ENTRA AL CAMPO QUE SE MANDA y modifica con el value que le llega
  }

  const onSubmit =  () => {
    const { email, password } = initialValue;
    console.log("Form: ", initialValue); // Verificar si se dispara

    // Basic validation for passwords matching
    

    // Trigger sign-up API request
    triggerSignUp({ email, password, returnSecureToken: true });
  };


  return (
    <View style={AuthStyles.main}>
      <View style={AuthStyles.container}>
        <Text style={AuthStyles.title}>Login</Text>

        <InputForm label="Email" onChange={text => handleChange("email", text)} error={initialValue.errorMail} />
        <InputForm label="Password" onChange={text => handleChange("password", text)} error={initialValue.errorPassword} isSecure />

        <SubmitButton onPress={onSubmit} title="Send" />

        <Text style={AuthStyles.sub}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={AuthStyles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
