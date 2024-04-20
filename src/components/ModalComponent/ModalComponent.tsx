import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

import CustomButton from '../CustomButton/CustomButton';

import styles from './ModalComponent.style';

const ModalComponent = ({ ıbanİnfo, amountİnfo, descriptionİnfo }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <CustomButton title="Onayla" onPress={toggleModal} />

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