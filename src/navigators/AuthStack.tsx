import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import LoginPage from '../screens/LoginPage/LoginPage';
import RootNavigation from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !userSession ? (<Stack.Screen name='Login' component={LoginPage} />) : (<Stack.Screen name='Root' component={RootNavigation} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack