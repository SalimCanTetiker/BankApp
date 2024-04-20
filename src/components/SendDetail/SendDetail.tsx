import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import styles from './SendDetail.style'
import ModalComponent from '../ModalComponent/ModalComponent'

const SendDetail = () => {

    const balance = useSelector(state => state.balance.total)

    const [ıban, setIban] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    return (
        <View>
            <Text style={styles.header}>Ödeme Aracı</Text>
            <View style={styles.account}>
                <Text>Vadesiz TL</Text>
                <Text>TR** **** ****</Text>
            </View>
            <View style={styles.balance}>
                <Text>Bakiye</Text>
            </View>
            <View style={styles.amount}>
                <Text>{balance}</Text>
            </View>
            <Text style={styles.header}>Alıcı Bilgileri</Text>
            <View style={styles.choice}>
                <Text style={styles.choiceText}>IBAN</Text>
                <Text style={styles.choiceText}>HESAP</Text>
                <Text style={styles.choiceText}>KART</Text>
                <Text style={styles.choiceText}>ADRES</Text>
            </View>
            <ScrollView>
                <TextInput
                    style={styles.textInput}
                    placeholder='IBAN'
                    onChangeText={(text) => setIban(text)}
                />
                <Text style={styles.header}>İşlem Bilgileri</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Tutar'
                    onChangeText={(text) => setAmount(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Açıklama'
                    onChangeText={(text) => setDescription(text)}
                />
            </ScrollView>
            <View style={styles.modal}>
                <ModalComponent ıbanİnfo={ıban} amountİnfo={amount} descriptionİnfo={description} />
            </View>
        </View>
    )
}

export default SendDetail