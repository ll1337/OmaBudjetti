import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'
import { Icon } from '@rneui/themed';

export default function PrettyDatePicker({ onDateConfirm }) {

    const [selectedDate, setSelectedDate] = useState('');
    const [confirmedDate, setConfirmedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isConfirmable, setIsConfirmable] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsConfirmable(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setIsConfirmable(false);
    };

    const handleCloseClick = () => {
        setSelectedDate(confirmedDate);
        closeModal();
    };

    const handleConfirmClick = () => {
        setConfirmedDate(selectedDate);
        onDateConfirm(selectedDate);
        closeModal();
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onBackdropPress={() => console.log('backdrop pressed!!')} /* not workink */
                onRequestClose={closeModal}>
                <View style={styles.modalView}>

                    <DatePicker
                        onSelectedChange={handleDateChange}
                        current={selectedDate}
                        selected={selectedDate}
                        options={{
                            defaultFont: 'Roboto',
                            headerFont: 'Roboto',
                            mainColor: '#17B5AD',
                            selectedTextColor: '#fff',
                        }}
                        mode="calendar"
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleCloseClick}>
                            <Text style={styles.backButtonText}>Peruuta</Text>
                        </TouchableOpacity>
                        {isConfirmable ? (
                            <TouchableOpacity
                                style={styles.acceptButton}
                                onPress={handleConfirmClick}>
                                <Text style={styles.acceptButtonText}>Hyväksy</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text style={styles.acceptButtonTextGreyed}>Hyväksy</Text>
                        )}
                    </View>
                </View>
            </Modal>
            <Icon
                accessibilityLabel='Choose Date'
                name='calendar-blank-outline'
                type="material-community"
                iconColor={'#000000'}
                size={25}
                onPress={() => setModalVisible(true)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    backButton: {
        margin: 20,
    },
    acceptButton: {
        margin: 20,
    },
    backButtonText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 18,
    },
    acceptButtonText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
    },
    acceptButtonTextGreyed: {
        margin: 20,
        color: '#A9A9A9',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
