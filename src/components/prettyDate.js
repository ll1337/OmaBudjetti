import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'
import { IconButton } from "react-native-paper";

export default function PrettyDate() {

    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setModalVisible(false);
    };

    const currentDate = selectedDate === '' ? new Date() : selectedDate;
    const closeModal = () => {
        setModalVisible(false);
    };

    return (

        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onBackdropPress={closeModal}
                onRequestClose={closeModal}>
                <View style={styles.modalView}>

                    <DatePicker
                        onSelectedChange={handleDateChange}
                        options={{
                            defaultFont: 'Roboto',
                            headerFont: 'Roboto',
                            mainColor: '#17B5AD',
                            selectedTextColor: '#17B5AD',
                        }}
                        mode="calendar"
                        style={{}}
                    />
                </View>

            </Modal>
            <IconButton
                icon="calendar-blank"
                iconColor={'#000000'}
                size={30}
                onPress={() => setModalVisible(true)}
            />
                

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePicker: {
        flexDirection: 'column',
        margin: 10,
        borderRadius: 10, 
        overflow: 'hidden',         
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});