import { StyleSheet } from "react-native";

import { colors } from "../../styles/globalStyles";

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: 65,

        marginTop: 20,

        backgroundColor: colors.primary.darkGray,

        borderRadius: 10,
    },

    cardText: {
        color: colors.primary.light,

        fontSize: 22,
        fontWeight: "bold",
    }
});

export default styles;