import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const NoActiveParticipantsInTheEvent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                Sem participantes para esse evento!
            </Text>
        </View>
    );
};

export default NoActiveParticipantsInTheEvent;