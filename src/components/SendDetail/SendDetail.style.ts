import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginTop: 25,
        fontWeight: "bold",
        fontSize: 20, 
        color: "gray",
        left: 10
    },
    account: {
        marginTop: 30
    },
    balance: {
        marginTop: 20
    },
    amount: {
        left: 300,
        bottom: 20
    },
    choice: {
        flexDirection: "row",
        margin: 30,
        borderBottomWidth: 0.5
    },
    choiceText: {
        margin: 24
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 12,
        padding: 12
    },
    modal: {
        alignItems: "center"
    }
})

export default styles