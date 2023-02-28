import { StyleSheet } from 'react-native';

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

        width: "100%",

        marginTop: 36,
        marginBottom: 42,
    },

    input: {
        flex: 1,

        backgroundColor: colors.primary.darkGray,
        color: colors.primary.light,

        height: 56,

        padding: 16,

        borderRadius: 5,

        fontSize: 16,
    },

    addButton: {
        alignItems: "center",
        justifyContent: "center",

        width: 56,
        height: 56,

        marginLeft: 12,

        borderRadius: 5,

        backgroundColor: colors.primary.green,
    },

    deleteAllButton: {
        alignItems: "center",
        justifyContent: "center",

        width: 56,
        height: 56,

        marginLeft: 12,

        borderRadius: 5,

        backgroundColor: colors.primary.red,
    },

    buttonText: {
        color: colors.primary.light,

        fontSize: 35,
    },
});

export default styles;