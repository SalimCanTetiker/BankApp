import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    scrollContainerFirst: {
        position:  "absolute",
        marginTop: 250,
        width: width * 0.8,
        height: height * 0.08,
        backgroundColor: "white",
        borderRadius: 15
    },
    scrollView: {
    },
    scrollText: {
        borderRightWidth: 0.5,
        padding: 8,
        textAlign: "center",
        fontSize: 15,
    },
    scrollContainerSecond: {
        position:  "absolute",
        marginTop: 350,
        width: width * 0.8,
        height: height * 0.08,
        backgroundColor: "white",
        borderRadius: 15
    }
})

export default styles