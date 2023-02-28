import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import ParticipantCard from "../../components/ParticipantCard";
import NoActiveParticipantsInTheEvent from "../../components/NoActiveParticipantsInTheEvent";

import IParticipant from "../../models/Participant";

import uuid from "../../utils/uuid";

import { colors } from "../../styles/globalStyles";
import styles from "./styles";

const Home: React.FC = () => {
    const [currentInputParticipantValue, setCurrentInputParticipantValue] = useState<string>("");
    const [participantsList, setParticipantsList] = useState<Array<IParticipant>>([]);

    function hasExistsActiveParticipantsForThisEvent() {
        const activeParticipants = participantsList.filter(participant => !participant.deleted);

        if (activeParticipants.length > 0) return true;

        return false;
    }

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

            Alert.alert("Sucesso!", `O participante ${currentInputParticipantValue} foi adicionado ao evento!`);

            setCurrentInputParticipantValue("");
        }
    };

    function handleDeleteALlParticipants() {
        Alert.alert('Atenção', 'Você tem certeza que deseja remover todos os participantes da lista desse evento?', [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipantsList([]);
                    Alert.alert("Sucesso!", 'Todos os participantes do evento foram excluídos com sucesso!',);
                },
            },
            { text: 'Não' },
        ]);
    };

    function participantsListContentRender() {
        if (hasExistsActiveParticipantsForThisEvent()) {
            return participantsList.map(participant => (
                <ParticipantCard
                    key={participant.id}
                    participant={participant}
                />
            ))
        } else {
            return <NoActiveParticipantsInTheEvent />;
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
                    value={currentInputParticipantValue}
                    onChangeText={value => setCurrentInputParticipantValue(value)}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

                {participantsList.length > 0 && (
                    <TouchableOpacity
                        style={styles.deleteAllButton}
                        onPress={handleDeleteALlParticipants}
                    >
                        <Text style={styles.buttonText}>
                            -
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {participantsListContentRender()}
        </View>
    );
};

export default Home;