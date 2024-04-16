import { View } from 'react-native'
import React from 'react'

import LoginArea from '../../components/LoginArea/LoginArea'
import LoginList from '../../components/LoginList/LoginList'

const LoginPage = () => {
  return (
    <View>
      <LoginArea/>
      <LoginList/>
    </View>
  )
}

export default LoginPage