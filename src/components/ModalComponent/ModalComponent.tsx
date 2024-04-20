import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal"
import { useDispatch, useSelector } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton';

import styles from './ModalComponent.style';

import { addBalance } from '../../redux/Slice';

const ModalComponent = ({ ıbanİnfo, amountİnfo, descriptionİnfo }) => {

  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          <View style={styles.iban}>
            <Text style={styles.text}>Hello!</Text>
          </View>
          <View style={styles.iban}>
            <Text style={styles.text}>{ıbanİnfo}</Text>
          </View>
          <View style={styles.iban}>
            <Text style={styles.text}>{amountİnfo}</Text>
          </View>
          <View style={styles.iban}>
            <Text style={styles.text}>{descriptionİnfo}</Text>
          </View>
          <View style={styles.okButton}>
            <CustomButton title="Ok" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalComponent