import React from "react";
import { View, Text, TextInput } from "react-native";
import { colors } from "../../styles/globalStyles";

import styles from "./styles";

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <TextInput 
                style={styles.input} 
                placeholder="Nome do participante"
                placeholderTextColor={colors.primary.lightGray}
                selectionColor={colors.primary.light}
            />
        </View>
    );
};

export default Home;