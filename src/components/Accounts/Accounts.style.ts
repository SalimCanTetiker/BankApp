import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        height: height * 0.35,
        backgroundColor: "#fcba01",
        alignItems: "center"
    },
    header: {
        right: 100,
        marginTop: 40,
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    bodyContainer: {
        position: "absolute",
        alignItems: "center",
        marginTop: 100,
        width: width * 0.85,
        height: height * 0.9,
        backgroundColor: "white",
        borderRadius: 15
    },
    checkingAccount: {
        right: 100,
        marginTop: 20
    },
    balance: {
        right: 80,
        marginTop: 20
    },
    amount: {
        left: 100,
        bottom: 38
    },
    choiceContainer: {
        flexDirection: "row",
        margin: 5,
        padding: 10,
        marginTop: 50,
        borderBottomWidth: 0.5
    },
    choiceText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fcba01",
        padding: 5,
        margin: 4,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: "#fcba01",
    },
    movements: {
        flexDirection: "row",
        marginTop: 40,
        borderBottomWidth: 0.5,
    },
    allMovement: {
        marginTop: 100,
        borderBottomWidth: 0.5,
    },
    account: {
        marginTop: 40,
        borderBottomWidth: 0.5,
    },
    accountText: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#fcba01",
    },
})

export default styles