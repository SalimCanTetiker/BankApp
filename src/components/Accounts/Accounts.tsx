import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import styles from './Accounts.style'

const Accounts = () => {

    const navigation = useNavigation()

    const balance = useSelector((state) => state.balance.total)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hesaplarım</Text>
            <View style={styles.bodyContainer}>
                <View style={styles.checkingAccount}>
                    <Text>Vadesiz TL</Text>
                    <Text>TR** **** ****</Text>
                </View>
                <View style={styles.balance}>
                    <Text>Bakiye</Text>
                    <Text>Kullanılabilir Bakiye</Text>
                </View>
                <View style={styles.amount}>
                    <Text>{balance}</Text>
                    <Text>{balance}</Text>
                </View>
                <View style={styles.choiceContainer}>
                    <Text style={styles.choiceText}>Ödemeler</Text>
                    <Pressable onPress={() => navigation.navigate("Send")}>
                        <Text style={styles.choiceText}>Para Gönder</Text>
                    </Pressable>
                    <Text style={styles.choiceText}>Başvurular</Text>
                </View>
                <Text style={styles.title}>Hesabın Son Hareketleri</Text>
                <View style={styles.movements}>
                    <Text style={styles.date}>14</Text>
                    <Text style={styles.desc}>ATM</Text>
                    <Text style={styles.price}>1.500,00 TL</Text>
                </View>
                <View style={styles.allMovement}>
                    <Text style={styles.accountText}>Tüm Hareketler</Text>
                </View>
                <View style={styles.account}>
                    <Text style={styles.accountText}>Hesap Detay</Text>
                </View>
            </View>
        </View>
    )
}

export default Accounts