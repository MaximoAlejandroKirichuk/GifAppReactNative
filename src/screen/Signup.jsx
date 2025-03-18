import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authService'
import { setUser } from '../store/slices/user/userSlice'

import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitBotton'
import { AuthStyles } from '../styles/AuthStyles'



const Signup = ({ navigation }) => {
  const [initialValue, setInitialValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    errorMail: '',
    errorPassword: '',
    errorConfirmPassword: '',
  })


  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();


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
    const { email, password, confirmPassword } = initialValue;
    console.log("Form submitted"); // Verificar si se dispara
    // Basic validation for passwords matching
    if (password !== confirmPassword) {
      setInitialValue(prevState => ({
        ...prevState,
        errorConfirmPassword: "Passwords don't match",
      }));
      return;
    }

    // Trigger sign-up API request
    triggerSignUp({ email, password, returnSecureToken: true });
  };


  return (
    <View style={AuthStyles.main}>
      <View style={AuthStyles.container}>
        <Text style={AuthStyles.title}>Sign up</Text>

        <InputForm label="Email" onChange={text => handleChange("email", text)} error={initialValue.errorMail} />
        <InputForm label="Password" onChange={text => handleChange("password", text)} error={initialValue.errorPassword} isSecure />
        <InputForm label="Confirm Password" onChange={text => handleChange("confirmPassword", text)} error={initialValue.errorConfirmPassword} isSecure />

        <SubmitButton onPress={onSubmit} title="Send" />

        <Text style={AuthStyles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={AuthStyles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default Signup;
