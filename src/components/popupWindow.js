import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PrettyButton from '../components/prettyButtonTextOnly';

export default function PopUp() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);   
    <Modal isVisible ={isModalVisible}>
        <Modal.Container>
            <Modal.Header title="tulo / meno"/>
                <Modal.Body>
                
                </Modal.Body>
        </Modal.Container>
    </Modal>

}