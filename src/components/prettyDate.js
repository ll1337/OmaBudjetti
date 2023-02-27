import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'
import { IconButton } from "react-native-paper";

export default function PrettyDate() {

    const [selectedDate, setSelectedDate] = useState('');

    return (
        <DatePicker
            onSelectedChange={date => setSelectedDate(date)}
            options={{
                defaultFont: 'Roboto',
                headerFont: 'Roboto',
            }}
            style={styles.datePicker}
            mode="calendar"
        />
    );
};

const styles = StyleSheet.create({
    datePicker: {
        borderRadius: 10, 
        overflow: 'hidden',         
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
});