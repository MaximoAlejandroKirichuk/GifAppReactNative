import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authService'
import { setUser } from '../store/slices/user/userSlice'

import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitBotton'
import { AuthStyles } from '../styles/AuthStyles'
import { ModalError } from '../components'
import { useInput } from '../hooks'
import { modalErrorStyles } from '../styles'



const Signup = ({ navigation }) => {
  const [initialValue, setInitialValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    errorConfirmPassword: '',
  })


  const { handleModal, modalVisible } = useInput()
  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();


  useEffect(() => {
    if (result.isSuccess) {
      dispatch(setUser({
        email: result.data.email,
        token: result.data.idToken,
      }));
    } else if (result.isError) {
      handleModal(true)
    }
  }, [result]);

  const handleChange = (field, value) => {
    setInitialValue(prevState => ({ ...prevState, [field]: value }))//EN FIELD ENTRA AL CAMPO QUE SE MANDA y modifica con el value que le llega
  }

  const onSubmit = () => {
    const { email, password, confirmPassword } = initialValue;
  
    // Validación básica:
    // 1. Verificar que los campos no estén vacíos
    if (!email || !password) {
      console.log("Both email and password are required.");
      handleModal(true)
      return; // Si hay un campo vacío, no enviamos la solicitud
    }

    // 2. Verificar que el correo electrónico tenga el formato correcto
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      handleModal(true)
      return; // Si el correo no es válido, no enviamos la solicitud
    }

    // 3. Si tienes un campo de confirmación de contraseña, compara las contraseñas
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

        <InputForm label="Email" onChange={text => handleChange("email", text)} />
        <InputForm label="Password" onChange={text => handleChange("password", text)} isSecure />
        <InputForm label="Confirm Password" onChange={text => handleChange("confirmPassword", text)} isSecure />

        {
          initialValue.errorConfirmPassword ?
            (
              <Text style={{ color: 'red', marginBottom: 10 }}>{initialValue.errorConfirmPassword}</Text>
            )
            : null
        }
        <SubmitButton onPress={onSubmit} title="Send" />

        <Text style={AuthStyles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={AuthStyles.subLink}>Login</Text>
        </Pressable>

        {modalVisible  &&  (
          <ModalError handleModal={handleModal} modalVisible={modalVisible}>
            <Text style={modalErrorStyles.titleModal}>Sign Up Error</Text>
            <Text style={modalErrorStyles.textModal}>{result?.error?.data?.error?.message || "Please check your data and try again."}</Text>
          </ModalError>
        )}

      </View>
    </View>
  );
};


export default Signup;
