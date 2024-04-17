import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import CustomButton from '../CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './LoginArea.style'

const LoginArea = () => {
  const navigation = useNavigation()
  
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
        <TextInput
          style={styles.textInput}
          placeholder='tc'
        />
        <TextInput
          style={styles.textInput}
          placeholder='dijital şifre'
        />
        <View>
          <CustomButton onPress={() => navigation.navigate('Root')} title={"Devam"} />
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Dijital Şifrem Yok/Unuttum</Text>
      </View>
    </View>
  )
}

export default LoginArea