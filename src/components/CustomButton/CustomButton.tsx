import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './CustomButton.style'

const CustomButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default CustomButton