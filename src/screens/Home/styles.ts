import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.primary.dark,
    },

    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },

    eventDate: {
        color: colors.primary.lightGray,
        fontSize: 16,
    },

    formContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        backgroundColor: colors.primary.darkGray,
        color: colors.primary.light,

        width: Dimensions.get("screen").width - 100,
        height: 56,

        padding: 16,
        marginTop: 10,

        borderRadius: 5,

        fontSize: 16,
    },

    button: {
        alignItems: "center",
        justifyContent: "center",

        width: 56,
        height: 56,

        marginTop: 10,

        borderRadius: 5,

        backgroundColor: colors.primary.green,
    },

    buttonText: {
        color: colors.primary.light,

        fontSize: 35,
    },
});

export default styles;