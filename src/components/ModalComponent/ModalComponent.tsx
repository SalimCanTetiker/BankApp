import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import firestore from '@react-native-firebase/firestore';

import CustomButton from '../CustomButton/CustomButton';

import styles from './ModalComponent.style';

import { addBalance } from '../../redux/Slice';

const ModalComponent = ({ ıbanİnfo, amountİnfo, descriptionİnfo }) => {

  const navigation = useNavigation()

  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const currentDate = new Date()

  const handleOkButton = () => {
    setModalVisible(false)
    navigation.navigate("Home")
    firestore().collection("move").add({
      date: currentDate,
      desc: descriptionİnfo ,
      amount:  amountİnfo ,
    })
      .then(() => {
        console.log('Move added!');
      })
  }
  
  const handleApproved = () => {
    setModalVisible(true)
    dispatch(addBalance(amountİnfo))
  }

  return (
    <View>
      <CustomButton title="Onayla" onPress={handleApproved} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/vakıfbankLogo.png")}
              style={styles.image}
            />
            <Text style={styles.logoText}>Vakıfbank</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>VAKIFBANK</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>İŞLEM BİLGİLERİ</Text>
          </View>
          <View style={styles.titleWhite}>
            <Text style={styles.titleText}>İŞLEM TÜRÜ</Text>
            <Text style={styles.text}>Havale</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>MİKTARI</Text>
            <Text style={styles.text}>{amountİnfo}</Text>
          </View>
          <View style={styles.titleWhite}>
            <Text style={styles.titleText}>HESAP NO</Text>
            <Text style={styles.text}>{ıbanİnfo}</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>FİŞ NO</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>İŞLEM AÇIKLAMASI</Text>
          </View>
          <Text style={styles.desc}>TR** **** **** hesabından {descriptionİnfo} açıklamasıyla havale yapıldı.</Text>
          <View style={styles.okButton}>
            <CustomButton title="Ok" onPress={handleOkButton} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalComponent