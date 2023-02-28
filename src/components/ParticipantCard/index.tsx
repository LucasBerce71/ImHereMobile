import React from "react";
import { Text, TouchableOpacity } from "react-native";

import IParticipant from "../../models/Participant";

import styles from "./styles";

type TProps = {
    participant: IParticipant;
};

const ParticipantCard: React.FC<TProps> = ({ participant }) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.cardText}>
                {participant.name}
            </Text>
        </TouchableOpacity>
    );
};

export default ParticipantCard;