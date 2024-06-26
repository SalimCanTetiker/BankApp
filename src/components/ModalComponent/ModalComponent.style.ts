import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 4
    },
    header: {
        backgroundColor: "#fcba01",
        alignItems: "center",
        marginTop: 20,
        padding: 8,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20
    },
    title: {
        backgroundColor: "#f6f6f6",
        height: height * 0.05,
        margin: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleWhite: {
        backgroundColor: "#ffffff",
        height: height * 0.05,
        margin: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: 16,
        marginTop: 10
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        color: "#a1a19a"
    },
    desc: {
        fontSize: 15,
        color: "#a1a19a"
    },
    okButton: {
        alignItems: "center",
        top: 200
    },
    image: {
        width: 50,
        height: 50
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 25,
    },
    logo: {
        flexDirection: "row",
        left: 10,
        marginTop: 30
    },
    logoSecond: {
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: "black",
        width: width * 0.36,
        left: 200,
        padding: 8,
        bottom: 48
    },
    logoSecondText: {
        color: "#fcba01",
        fontWeight: "bold",
        fontSize: 14
    },
})

export default styles