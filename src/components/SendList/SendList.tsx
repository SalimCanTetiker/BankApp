import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import styles from './SendList.style'

const data = [
    { id: 1, name: "Kayıtlı İşlemler"},
    { id: 2, name: "Akıllı Transfer"}
]

const data1 = [
    { id: 1, name: "Hesaplarım Arası"},
    { id: 2, name: "Başka Alıcıya Havale/EFT/FAST"},
    { id: 3, name: "Diğer Bankadan Para Getir"},
    { id: 4, name: "Ödeme İste"},
    { id: 5, name: "İsme (Havale/EFT)"},
    { id: 6, name: "Döviz Transferi (SWIFT)"},
    { id: 7, name: "Cebe Para Gönder"},
    { id: 8, name: "Kumbara Para Gönder"},
]


const SendList = () => {

  const navigation = useNavigation()

  const renderData = ({item}) => {
    return (
        <View>
          <Pressable style={{flexDirection: "row", justifyContent: "space-between"}} onPress={() => navigation.navigate("SendDetail")}>
            <Text style={styles.text}>{item.name}</Text>
            <Icon name="chevron-right" size={30} color='gray' />
            </Pressable>
        </View>
    )
}
  
  return (
    <View>
        <Text style={styles.header}>Hızlı Para Gönder</Text>
      <FlatList
      data={data} renderItem={renderData}
      />
      <Text style={styles.header}>Transfer İşlemleri</Text>
      <FlatList
      data={data1}
      renderItem={renderData}
      />
    </View>
  )
}

export default SendList