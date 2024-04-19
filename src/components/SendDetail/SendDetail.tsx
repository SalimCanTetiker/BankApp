import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './SendDetail.style'

const SendDetail = () => {
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
                <Text>0,00 TL </Text>
            </View>
            <Text style={styles.header}>Alıcı Bilgileri</Text>
            <View style={styles.choice}>
                <Text style={styles.choiceText}>IBAN</Text>
                <Text style={styles.choiceText}>HESAP</Text>
                <Text style={styles.choiceText}>KART</Text>
                <Text style={styles.choiceText}>ADRES</Text>
            </View>
            <View>
                <TextInput
                style={styles.textInput}
                placeholder='IBAN'
                />
            </View>
            <Text style={styles.header}>İşlem Bilgileri</Text>
            <View>
            <TextInput
                style={styles.textInput}
                placeholder='Tutar'
                />
                <TextInput
                style={styles.textInput}
                placeholder='Açıklama'
                />
            </View>
        </View>
    )
}

export default SendDetail