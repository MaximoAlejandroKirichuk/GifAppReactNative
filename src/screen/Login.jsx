import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitBotton'

import { setUser } from '../store/slices/user/userSlice'
import { AuthStyles } from '../styles/AuthStyles'
import { useSignInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { useInput } from '../hooks'
import { ModalError } from '../components'
import { useDataBase } from '../hooks/useDataBase'
import { modalErrorStyles } from '../styles'

const Login = ({ navigation }) => {
  const [initialValue, setInitialValue] = useState({
    email: '',
    password: '',
  })
  const { handleModal, modalVisible } = useInput()
  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignInMutation();
  const { insertSession } = useDataBase()

  useEffect(() => {
    // Verifica si el resultado tiene un error
    if (result.isError) {
      // Verifica la estructura antes de acceder a los valores
      if (result.error?.data?.error?.errors?.[0]?.message === 'INVALID_LOGIN_CREDENTIALS') {
        handleModal(true); // Mostrar modal de error
      }
    }

    if (result?.data && result.isSuccess) {
      // Lógica para insertar sesión y actualizar el estado
      (async () => {
        try {
          await insertSession({
            email: result.data.email,
            localId: result.data.localId,
            token: result.data.idToken,
          });
          dispatch(setUser({
            email: result.data.email,
            token: result.data.idToken,
            localId: result.data.localId,
          }));
        } catch (error) {
          alert('The session could not be saved.');
        }
      })();
    }
  }, [result, insertSession, dispatch]);


  const handleChange = (field, value) => {
    setInitialValue(prevState => ({ ...prevState, [field]: value }))//EN FIELD ENTRA AL CAMPO QUE SE MANDA y modifica con el value que le llega
  }

  const onSubmit = () => {
    //desestructuro los inputs
    const { email, password } = initialValue;

    // Validación básica:
    // 1. Verificar que los campos no estén vacíos
    if (!email || !password) {
      handleModal(true);
      return; // Si hay un campo vacío, no envio la solicitud
    }

    // 2. Verificar que el correo electrónico tenga el formato correcto
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      handleModal(true);
      return; // Si el correo no es válido, no envio la solicitud
    }

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

        {modalVisible && (
          <ModalError handleModal={handleModal} modalVisible={modalVisible}>
            <Text style={modalErrorStyles.titleModal}>Invalid email or password</Text>
            <Text style={modalErrorStyles.textModal}>The email is not registered or the password is incorrect.</Text>
          </ModalError>
        )}
        
      </View>
    </View>
  );
};

export default Login;
