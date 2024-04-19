import { View, Text, Pressable } from 'react-native'
import React from 'react'

import auth from '@react-native-firebase/auth';

const LogoutPage = () => {

  const user = auth().currentUser?.email

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{ fontSize: 30, color:"#fcba01", margin: 10}}>{user}</Text>
      <Pressable onPress={() => auth().signOut()}>
        <Text style={{ fontSize: 30, color:"#fcba01", margin: 10}}>log out</Text>
      </Pressable>
    </View>
  )
}

export default LogoutPage