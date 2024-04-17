import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage/LoginPage';
import RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='Root' component={RootNavigation}/>
    </Stack.Navigator>
  )
}

export default AuthStack