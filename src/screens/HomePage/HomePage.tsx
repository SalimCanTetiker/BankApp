import { View, Text, Pressable } from 'react-native'
import React from 'react'

import auth from '@react-native-firebase/auth';

const HomePage = () => {

  const user = auth().currentUser?.email

  return (
    <View>
      <Text>HomePage</Text>
      <Text>{user}</Text>
      <Pressable onPress={() => auth().signOut()}>
        <Text>log out</Text>
      </Pressable>
    </View>
  )
}

export default HomePage