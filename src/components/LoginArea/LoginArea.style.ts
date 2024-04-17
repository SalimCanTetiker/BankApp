import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        height: height * 0.35,
        backgroundColor: "#fcba01",
        alignItems: "center"
    },
    icon: {
        right: 80
    },
    logo: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    },
    lan: {
        left: 160,
        bottom: 42
    },
    loginContainer: {
        position: "absolute",
        alignItems: "center",
        marginTop: 100,
        width: width * 0.8,
        height: height * 0.4,
        backgroundColor: "white",
        borderRadius: 15
    },
    choiceContainer: {
        flexDirection: "row",
        margin: 10,
        marginTop: 60
    },
    choiceText: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 20,
        margin: 10,
        borderWidth: 1,
        borderRadius: 15
    },
    textInputContainer: {
        top: 210
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 8,
        padding: 8,
        width: width * 0.7
    },
    registerContainer: {
        right: 60,
        top: 230
    },
    registerText: {
        color: "#fcba01"
    }
})

export default styles