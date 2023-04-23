import { View, StyleSheet, Modal  } from 'react-native';
import { useState } from 'react';
import { Text, Icon } from '@rneui/themed';

const BudgetRemovalModal = (props) => {

    const [visible, setVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const text = "Haluatko varmasti poistaa budjetin?";

    const closeModal = () => {
        setModalVisible(false);
        setIsConfirmable(false);
    };

    return(
        <Modal
        animationType='fade'
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{text}</Text>
            </View>
        </Modal>
    )
}

export default BudgetRemovalModal;

const styles = StyleSheet.create ({
    modalView: {
        marginTop: 255,
        margin: 50,
        backgroundColor: '#17B5AD',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
})