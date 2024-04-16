import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './LoginList.style'

const LoginList = () => {
  return (
    <View style={styles.container}>
    <View style={styles.scrollContainerFirst}>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
      >
        {
          ["Vakıfbank Müşterisi Ol", "Cepte Kazan", "Karekod İşlemleri"].map((item) => (
            <Text style={styles.scrollText}>{item}</Text>
          ))
        }
      </ScrollView>
    </View>
    <View style={styles.scrollContainerSecond}>
      <ScrollView
      horizontal={true}
      style={styles.scrollView}
      >
        {
          ["Şube ve ATM", "Piyasa Bilgileri", "Hesaplama Araçları", "Müşteri İletişim Merkezi"].map((item) => (
            <Text style={styles.scrollText}>{item}</Text>
          ))
        }
      </ScrollView>
    </View>
    </View>
  )
}

export default LoginList