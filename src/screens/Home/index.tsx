import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import IParticipant from "../../models/Participant";

import { colors } from "../../styles/globalStyles";
import uuid from "../../utils/uuid";

import styles from "./styles";

const Home: React.FC = () => {
    const [currentInputParticipantValue, setCurrentInputParticipantValue] = useState<string>("");
    const [participantsList, setParticipantsList] = useState<Array<IParticipant>>([]);

    function handleSubmit() {
        if (!currentInputParticipantValue || currentInputParticipantValue === "") {
            Alert.alert("Ops...", "Informe um nome válido para o participante!");
        } else {
            const newParticipant: IParticipant = {
                id: uuid(1000),
                name: currentInputParticipantValue,
                createdAt: new Date(),
            };

            setParticipantsList([...participantsList, newParticipant]);

            Alert.alert("Sucesso!", `O participante ${currentInputParticipantValue} foi adicionado ao evento!`)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={colors.primary.lightGray}
                    selectionColor={colors.primary.light}
                    onChangeText={value => setCurrentInputParticipantValue(value)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;