import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import LoginPage from './src/screens/LoginPage/LoginPage'

const App = () => {
  return (
    <NavigationContainer>
      <LoginPage/>
    </NavigationContainer>
  )
}

export default App