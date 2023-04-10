import { View, Text, Image, StyleSheet, Pressable, Modal } from "react-native";
// import htmlImage from '../assets/images/html.png';
import { useState } from "react";
import TechnologyDetail from "./TechnologyDetail";

const TechnologyStack = ({ skill }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleTechStackPress() {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <Pressable style={styles.container} onPress={handleTechStackPress}>
            <Image source={skill.iconUrl} style={styles.image} />
            <Text style={styles.title}>{skill.name}</Text>
            {modalIsOpen && (
                <Modal animationType="slide" onRequestClose={handleTechStackPress}>
                    <TechnologyDetail skill={skill} handleBackButtonPress={handleTechStackPress} />
                </Modal>
            )}
        </Pressable>
)}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        margin: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        aspectRatio: 1
    },
    title: {
        marginVertical: 5
    }
})

export default TechnologyStack;