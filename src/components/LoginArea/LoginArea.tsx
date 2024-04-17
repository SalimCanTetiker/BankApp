import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import CustomButton from '../CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './LoginArea.style'

const initialFormValues = {
  usermail: '',
  password: '',
};

const LoginArea = () => {
  const navigation = useNavigation()

  const handleFormSubmit = async (formValues) => {
    try {
       await auth().signInWithEmailAndPassword(
            formValues.usermail,
            formValues.password,
        )
    } catch (error) {
        console.log(error)
    }
}
  
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.icon}>
        <Icon name="account-outline" size={36} color='white' />
        </View>
        <Image
        source={require("../../assets/vakıfbankLogo.png")}
        style={styles.image}
        />
        <Text style={styles.logoText}>Vakıfbank</Text>
      </View>
      <View style={styles.lan}>
        <Text style={styles.logoText}>EN</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>BİREYSEL</Text>
          <Text style={styles.choiceText}>TİCARİ</Text>
        </View>
      </View>
      <View style={styles.textInputContainer}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values }) => (
        <>
        <TextInput
          style={styles.textInput}
          placeholder='tc'
          value={values.usermail} onChangeText={handleChange('usermail')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='dijital şifre'
          value={values.password} onChangeText={handleChange('password')}
          secureTextEntry={true}
        />
        <View>
          <CustomButton onPress={handleSubmit} title={"Devam"} />
        </View>
        </>
        )}
        </Formik>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Dijital Şifrem Yok/Unuttum</Text>
      </View>
    </View>
  )
}

export default LoginArea