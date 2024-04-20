import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#fcba01",
        margin: 8,
        padding: 8,
        width: width * 0.7,
        alignItems: "center",
        backgroundColor: "#fcba01",
    },
    text: {
        fontWeight: "bold",
        fontSize: 18
    }
})

export default styles