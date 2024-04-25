import { FlatList, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from './LastMove.style';

const LastMove = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore().collection("move").orderBy('date', 'desc').limit(2).onSnapshot(querySnapshot => {
            const fetchData = []
            querySnapshot.forEach(documentSnapshot => {
                fetchData.push({
                    id: documentSnapshot.id,
                    ...documentSnapshot.data(),
                })
            })
            setData(fetchData)
        })
        return () => unsubscribe()
    },[])

    const renderData = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.date.toDate().toLocaleDateString()}</Text>
                <Text style={styles.text}>{item.desc}</Text>
                <Text style={styles.text}>{item.amount}</Text>
            </View>
        )
    }

  return (
    <FlatList data={data.slice()} renderItem={renderData}
    />
  )
}

export default LastMove