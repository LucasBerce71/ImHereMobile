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

    input: {
        backgroundColor: colors.primary.darkGray,
        color: colors.primary.light,

        height: 56,

        padding: 16,
        marginTop: 10,

        borderRadius: 5,

        fontSize: 16,
    },
});

export default styles;